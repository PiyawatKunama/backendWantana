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
const generateKey_1 = require("../global/generateKey");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const relations_1 = require("./relations");
let OrdersService = class OrdersService {
    constructor(ordersRepository, clothesService, employeesService, customersService) {
        this.ordersRepository = ordersRepository;
        this.clothesService = clothesService;
        this.employeesService = employeesService;
        this.customersService = customersService;
    }
    async create(createOrderInput) {
        const newOrder = this.ordersRepository.create(createOrderInput);
        if (createOrderInput.clotheIds) {
            const clothe_types = await Promise.all(createOrderInput.clotheIds.map(async (order_typeId) => {
                return await this.clothesService.findOne(order_typeId);
            }));
            newOrder.clothes = clothe_types;
        }
        const customer_type = await this.customersService.findOne(createOrderInput.customerId);
        newOrder.customer = customer_type;
        const employee_type = await this.employeesService.findOne(createOrderInput.employeeId);
        newOrder.employee = employee_type;
        const findLastRecord = await this.ordersRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });
        newOrder.key = (0, generateKey_1.default)(findLastRecord, 'OD');
        return await this.ordersRepository.save(newOrder);
    }
    async findAll() {
        return await this.ordersRepository.find(relations_1.Relations);
    }
    async findOne(id) {
        return await this.ordersRepository.findOneOrFail(id, relations_1.Relations);
    }
    update(id, updateOrderInput) {
        return `This action updates a #${id} order`;
    }
    remove(id) {
        return `This action removes a #${id} order`;
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        clothes_service_1.ClothesService,
        employees_service_1.EmployeesService,
        customers_service_1.CustomersService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map