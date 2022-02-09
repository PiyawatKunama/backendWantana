"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const clothes_service_1 = require("../clothes/clothes.service");
const customers_service_1 = require("../customers/customers.service");
const employees_service_1 = require("../employees/employees.service");
const status_1 = require("../global/enum/status");
const generateKey_1 = require("../global/generateKey");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const relations_1 = require("./relations");
let OrdersService = class OrdersService {
    constructor(ordersRepository, employeesService, customersService, clothesService) {
        this.ordersRepository = ordersRepository;
        this.employeesService = employeesService;
        this.customersService = customersService;
        this.clothesService = clothesService;
    }
    async create(createOrderInput) {
        const newOrder = this.ordersRepository.create(createOrderInput);
        const customer = await this.customersService.findOne(createOrderInput.customerId);
        newOrder.customer = customer;
        const employee = await this.employeesService.findOne(createOrderInput.employeeId);
        newOrder.employee = employee;
        const lastRecord = await this.ordersRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });
        if (createOrderInput.primaryOrderId) {
            if (lastRecord[0]) {
                await this.ordersRepository.find({
                    where: {
                        primaryOrderId: createOrderInput.primaryOrderId,
                    },
                    order: { id: 'DESC' },
                    take: 1,
                });
                newOrder.primaryOrderId = createOrderInput.primaryOrderId;
            }
        }
        else {
            lastRecord[0]
                ? (newOrder.primaryOrderId = lastRecord[0].id + 5)
                : (newOrder.primaryOrderId = 5);
        }
        newOrder.key = (0, generateKey_1.default)(lastRecord, 'OD');
        return await this.ordersRepository.save(newOrder);
    }
    async findAll() {
        return await this.ordersRepository.find(relations_1.Relations);
    }
    async findAllPrimaryOrder() {
        const orders = await this.ordersRepository.find(relations_1.Relations);
        const numClothes = [];
        let orderPrimary = 0;
        let num = 0;
        orders.forEach((order, index) => {
            if (order.primaryOrderId != orderPrimary) {
                if (orderPrimary) {
                    numClothes.push({ orderPrimary, num });
                    num = 0;
                }
                orderPrimary = order.primaryOrderId;
            }
            if (order.status === status_1.Status.IN) {
                num += order.clothes.length;
            }
            if (index === orders.length - 1) {
                numClothes.push({ orderPrimary, num });
            }
        });
        const primaryOrder = orders.filter((order) => {
            if (order.primaryOrderId === order.id) {
                let eachNumClothe = 0;
                numClothes.forEach((numClothe) => {
                    if (numClothe.orderPrimary === orderPrimary) {
                        eachNumClothe = numClothe.num;
                    }
                });
                order.numClothe = eachNumClothe;
                return order;
            }
        });
        return primaryOrder;
    }
    async findByStatus(status) {
        return await this.ordersRepository.find(Object.assign(Object.assign({}, relations_1.Relations), { where: { status } }));
    }
    async filter(filterOrderInput) {
        const { typeName, sortName, spacialName, haveProblems, customerName, isProcess, status, firstDate, lastDate, } = filterOrderInput;
        const ordersQuery = this.ordersRepository
            .createQueryBuilder('orders')
            .leftJoinAndSelect('orders.customer', 'customer');
        let clothes = [];
        if (filterOrderInput) {
            if (customerName) {
                ordersQuery.andWhere('customer.firstName = :firstName', {
                    firstName: customerName,
                });
            }
            if (isProcess === true || isProcess === false) {
                ordersQuery.andWhere('orders.isOutProcess = :isOutProcess', {
                    isOutProcess: !isProcess,
                });
            }
            if (status_1.Status[status]) {
                ordersQuery.andWhere('orders.status = :status', {
                    status,
                });
            }
            if (firstDate) {
                ordersQuery.andWhere('orders.created_at < :start_at', {
                    start_at: firstDate,
                });
            }
            if (lastDate) {
                ordersQuery.andWhere('orders.created_at >= :end_at', {
                    end_at: lastDate,
                });
            }
            if (typeName ||
                sortName ||
                spacialName ||
                haveProblems === true ||
                haveProblems === false) {
                let filterClothes = {};
                if (typeName) {
                    filterClothes = Object.assign(Object.assign({}, filterClothes), { typeName });
                }
                if (sortName) {
                    filterClothes = Object.assign(Object.assign({}, filterClothes), { sortName });
                }
                if (spacialName) {
                    filterClothes = Object.assign(Object.assign({}, filterClothes), { spacialName });
                }
                if (haveProblems === true || haveProblems === false) {
                    filterClothes = Object.assign(Object.assign({}, filterClothes), { haveProblems });
                }
                clothes = await this.clothesService.filter(filterClothes);
            }
            else {
                ordersQuery
                    .leftJoinAndSelect('orders.clothes', 'clothes')
                    .leftJoinAndSelect('clothes.typeClothe', 'typeClothe')
                    .leftJoinAndSelect('clothes.sortClothe', 'sortClothe')
                    .leftJoinAndSelect('clothes.specialClothe', 'specialClothe')
                    .leftJoinAndSelect('clothes.clotheHasProblems', 'clotheHasProblems')
                    .leftJoinAndSelect('clotheHasProblems.problemClothe', 'problemClothe');
            }
        }
        const filterOrders = await ordersQuery.getMany();
        if (typeName ||
            sortName ||
            spacialName ||
            haveProblems === true ||
            haveProblems === false) {
            let orderId = 0;
            const newCloths = [];
            for (let i = 0; i < clothes.length; i++) {
                if (clothes[i].order.id !== orderId) {
                    newCloths.push(clothes[i]);
                    if (orderId) {
                        for (let j = 0; j < filterOrders.length; j++) {
                            if (filterOrders[j].id === orderId) {
                                filterOrders[j].clothes = newCloths;
                                break;
                            }
                        }
                    }
                    orderId = clothes[i].order.id;
                }
                else {
                    newCloths.push(clothes[i]);
                    if (i === clothes.length - 1) {
                        for (let j = 0; j < filterOrders.length; j++) {
                            if (filterOrders[j].id === orderId) {
                                filterOrders[j].clothes = newCloths;
                                break;
                            }
                        }
                    }
                }
            }
        }
        for (let j = 0; j < filterOrders.length; j++) {
            if (!filterOrders[j].clothes) {
                filterOrders[j].clothes = [];
            }
        }
        return filterOrders;
    }
    async findOneByPrimaryId(id) {
        return await this.ordersRepository.find(Object.assign(Object.assign({}, relations_1.Relations), { where: { primaryOrderId: id } }));
    }
    async findOne(id) {
        return await this.ordersRepository.findOneOrFail(id, relations_1.Relations);
    }
    async remove(id) {
        return await this.ordersRepository.delete(id);
    }
    async update(id, updateOrderInput) {
        const updateOrder = this.ordersRepository.create(updateOrderInput);
        await this.ordersRepository.update(id, updateOrder);
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => clothes_service_1.ClothesService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        employees_service_1.EmployeesService,
        customers_service_1.CustomersService,
        clothes_service_1.ClothesService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map