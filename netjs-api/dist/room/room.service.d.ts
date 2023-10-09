import { Model } from 'mongoose';
import { Room } from './schema/room.schema';
import { Hotel } from 'src/hotels/hotel/hotel.schema';
export declare class RoomService {
    private readonly roomModel;
    private readonly hotelModel;
    constructor(roomModel: Model<Room>, hotelModel: Model<Hotel>);
    createRoom(hotelId: string, createRoomDto: Room): Promise<Room>;
    updateRoom(id: string, updateRoomDto: Room): Promise<Room>;
    updateRoomAvailability(id: string, dates: Date[]): Promise<void>;
    deleteRoom(id: string, hotelId: string): Promise<void>;
    getRoom(id: string): Promise<Room>;
    getRooms(): Promise<Room[]>;
}
