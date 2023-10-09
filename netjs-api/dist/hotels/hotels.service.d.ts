import { Model } from 'mongoose';
import { Hotel } from './hotel/hotel.schema';
export declare class HotelService {
    private readonly hotelModel;
    constructor(hotelModel: Model<Hotel>);
    createHotel(createHotelDto: any): Promise<Hotel>;
    updateHotel(id: string, updateHotelDto: any): Promise<Hotel>;
    getHotel(id: string): Promise<Hotel>;
    getHotels(query: any): Promise<Hotel[]>;
    deleteHotel(id: string): Promise<void>;
    countByCity(cities: string[]): Promise<number[]>;
    countByType(): Promise<{
        type: string;
        count: number;
    }[]>;
}
