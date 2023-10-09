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
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hotel_schema_1 = require("./hotel/hotel.schema");
let HotelService = class HotelService {
    constructor(hotelModel) {
        this.hotelModel = hotelModel;
    }
    async createHotel(createHotelDto) {
        const newHotel = new this.hotelModel(createHotelDto);
        return newHotel.save();
    }
    async updateHotel(id, updateHotelDto) {
        return this.hotelModel.findByIdAndUpdate(id, updateHotelDto, { new: true, runValidators: true });
    }
    async getHotel(id) {
        return this.hotelModel.findById(id);
    }
    async getHotels(query) {
        const { min, max, ...others } = query;
        return this.hotelModel.find({ ...others, cheapestPrice: { $gt: min || 1, $lt: max || 999 } }).limit(query.limit);
    }
    async deleteHotel(id) {
        await this.hotelModel.findByIdAndDelete(id);
    }
    async countByCity(cities) {
        const list = await Promise.all(cities.map((city) => {
            return this.hotelModel.countDocuments({ city });
        }));
        return list;
    }
    async countByType() {
        const types = ['hotel', 'apartment', 'resort', 'villa', 'cabin'];
        const counts = await Promise.all(types.map(async (type) => ({
            type,
            count: await this.hotelModel.countDocuments({ type }),
        })));
        return counts;
    }
};
exports.HotelService = HotelService;
exports.HotelService = HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hotel_schema_1.Hotel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HotelService);
//# sourceMappingURL=hotels.service.js.map