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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RoomService = class RoomService {
    constructor(roomModel, hotelModel) {
        this.roomModel = roomModel;
        this.hotelModel = hotelModel;
    }
    async createRoom(hotelId, createRoomDto) {
        const newRoom = new this.roomModel(createRoomDto);
        const savedRoom = await newRoom.save();
        const hotel = await this.hotelModel.findById(hotelId);
        if (!hotel) {
            throw new common_1.NotFoundException('Hotel not found');
        }
        hotel.rooms.push(savedRoom._id);
        await hotel.save();
        return savedRoom;
    }
    async updateRoom(id, updateRoomDto) {
        const updatedRoom = await this.roomModel.findByIdAndUpdate(id, updateRoomDto, { new: true });
        if (!updatedRoom) {
            throw new common_1.NotFoundException('Room not found');
        }
        return updatedRoom;
    }
    async updateRoomAvailability(id, dates) {
        await this.roomModel.updateOne({ 'roomNumbers._id': id }, {
            $push: {
                'roomNumbers.$.unavailableDates': { $each: dates },
            },
        });
    }
    async deleteRoom(id, hotelId) {
        await this.roomModel.findByIdAndDelete(id);
        const hotel = await this.hotelModel.findById(hotelId);
        if (hotel) {
            hotel.rooms = hotel.rooms.filter((roomId) => roomId.toString() !== id);
            await hotel.save();
        }
    }
    async getRoom(id) {
        const room = await this.roomModel.findById(id);
        if (!room) {
            throw new common_1.NotFoundException('Room not found');
        }
        return room;
    }
    async getRooms() {
        return await this.roomModel.find();
    }
};
exports.RoomService = RoomService;
exports.RoomService = RoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Room')),
    __param(1, (0, mongoose_1.InjectModel)('Hotel')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], RoomService);
//# sourceMappingURL=room.service.js.map