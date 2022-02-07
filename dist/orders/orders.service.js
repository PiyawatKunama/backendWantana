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
const customers_service_1 = require("../customers/customers.service");
const employees_service_1 = require("../employees/employees.service");
const status_1 = require("../global/enum/status");
const generateKey_1 = require("../global/generateKey");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const relations_1 = require("./relations");
let OrdersService = class OrdersService {
    constructor(ordersRepository, employeesService, customersService) {
        this.ordersRepository = ordersRepository;
        this.employeesService = employeesService;
        this.customersService = customersService;
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
                ? (newOrder.primaryOrderId = lastRecord[0].id + 1)
                : (newOrder.primaryOrderId = 1);
        }
        newOrder.key = (0, generateKey_1.default)(lastRecord, 'OD');
        return await this.ordersRepository.save(newOrder);
    }
    async findAll() {
        return await this.ordersRepository.find(relations_1.Relations);
    }
    async findAllPrimaryOrder() {
        const orders = await this.ordersRepository.find(relations_1.Relations);
        const numClothe = [];
        let orderPrimary = 0;
        let num = 0;
        orders.forEach((order, index) => {
            if (order.primaryOrderId != orderPrimary) {
                if (orderPrimary) {
                    numClothe.push(num);
                    num = 0;
                }
                orderPrimary = order.primaryOrderId;
            }
            if (order.status === status_1.Status.IN) {
                num += order.clothes.length;
            }
            if (index === orders.length - 1) {
                numClothe.push(num);
            }
        });
        let numUsed = 0;
        const primaryOrder = orders.filter((order) => {
            if (order.id === order.primaryOrderId) {
                order.numClothe = numClothe[numUsed];
                numUsed++;
                return order;
            }
        });
        return primaryOrder;
    }
    async findByStatus(status) {
        return await this.ordersRepository.find(Object.assign(Object.assign({}, relations_1.Relations), { where: { status } }));
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
    __metadata("design:paramtypes", [typeorm_2.Repository,
        employees_service_1.EmployeesService,
        customers_service_1.CustomersService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map