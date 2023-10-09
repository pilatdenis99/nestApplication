import { HotelService } from './hotels.service';
import { Hotel } from './hotel/hotel.schema';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    createHotel(createHotelDto: any): Promise<Hotel>;
    updateHotel(id: string, updateHotelDto: any): Promise<Hotel>;
    getHotel(id: string): Promise<Hotel>;
    getHotels(query: any): Promise<Hotel[]>;
    deleteHotel(id: string): Promise<void>;
    countByCity(cities: string): Promise<number[]>;
    countByType(): Promise<{
        type: string;
        count: number;
    }[]>;
}
