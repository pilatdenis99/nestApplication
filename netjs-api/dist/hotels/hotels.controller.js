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
exports.HotelController = void 0;
const common_1 = require("@nestjs/common");
const hotels_service_1 = require("./hotels.service");
const passport_1 = require("@nestjs/passport");
const decorators_1 = require("@nestjs/common/decorators");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const role_enum_1 = require("../auth/schema/role.enum");
const roles_guard_1 = require("../auth/guards/roles.guard");
let HotelController = class HotelController {
    constructor(hotelService) {
        this.hotelService = hotelService;
    }
    createHotel(createHotelDto) {
        return this.hotelService.createHotel(createHotelDto);
    }
    updateHotel(id, updateHotelDto) {
        return this.hotelService.updateHotel(id, updateHotelDto);
    }
    getHotel(id) {
        return this.hotelService.getHotel(id);
    }
    getHotels(query) {
        return this.hotelService.getHotels(query);
    }
    deleteHotel(id) {
        return this.hotelService.deleteHotel(id);
    }
    countByCity(cities) {
        const cityArray = cities.split(',');
        return this.hotelService.countByCity(cityArray);
    }
    countByType() {
        return this.hotelService.countByType();
    }
};
exports.HotelController = HotelController;
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "createHotel", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "updateHotel", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "getHotel", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "getHotels", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "deleteHotel", null);
__decorate([
    (0, common_1.Get)('countByCity'),
    (0, decorators_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Query)('cities')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "countByCity", null);
__decorate([
    (0, common_1.Get)('countByType'),
    (0, decorators_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "countByType", null);
exports.HotelController = HotelController = __decorate([
    (0, common_1.Controller)('hotels'),
    (0, decorators_1.UseGuards)((0, passport_1.AuthGuard)(), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [hotels_service_1.HotelService])
], HotelController);
//# sourceMappingURL=hotels.controller.js.map