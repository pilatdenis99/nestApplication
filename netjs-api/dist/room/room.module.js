"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const room_controller_1 = require("./room.controller");
const room_service_1 = require("./room.service");
const room_schema_1 = require("./schema/room.schema");
const hotel_schema_1 = require("../hotels/hotel/hotel.schema");
const auth_module_1 = require("../auth/auth.module");
let RoomModule = class RoomModule {
};
exports.RoomModule = RoomModule;
exports.RoomModule = RoomModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forFeature([
                { name: room_schema_1.Room.name, schema: room_schema_1.RoomSchema },
                { name: hotel_schema_1.Hotel.name, schema: hotel_schema_1.HotelSchema },
            ]),
        ],
        controllers: [room_controller_1.RoomController],
        providers: [room_service_1.RoomService],
    })
], RoomModule);
//# sourceMappingURL=room.module.js.map