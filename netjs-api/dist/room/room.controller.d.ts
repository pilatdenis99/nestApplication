import { RoomService } from './room.service';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    createRoom(hotelId: string, createRoomDto: any): Promise<import("./schema/room.schema").Room>;
    updateRoom(id: string, updateRoomDto: any): Promise<import("./schema/room.schema").Room>;
    deleteRoom(id: string, hotelId: string): Promise<void>;
    getRoom(id: string): Promise<import("./schema/room.schema").Room>;
    getRooms(): Promise<import("./schema/room.schema").Room[]>;
}
