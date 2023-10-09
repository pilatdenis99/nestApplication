/* eslint-disable prettier/prettier */
// hotel.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './hotel/hotel.schema';

@Injectable()
export class HotelService {
    constructor(@InjectModel(Hotel.name) private readonly hotelModel: Model<Hotel>) { }

    async createHotel(createHotelDto: any): Promise<Hotel> {
        const newHotel = new this.hotelModel(createHotelDto);
        return newHotel.save();
    }

    async updateHotel(id: string, updateHotelDto: any): Promise<Hotel> {
        return this.hotelModel.findByIdAndUpdate(id, updateHotelDto, { new: true, runValidators: true });
    }

    async getHotel(id: string): Promise<Hotel> {
        return this.hotelModel.findById(id);
    }

    async getHotels(query: any): Promise<Hotel[]> {
        const { min, max, ...others } = query;
        return this.hotelModel.find({ ...others, cheapestPrice: { $gt: min || 1, $lt: max || 999 } }).limit(query.limit);
    }

    async deleteHotel(id: string): Promise<void> {
        await this.hotelModel.findByIdAndDelete(id);
    }

    async countByCity(cities: string[]): Promise<number[]> {
        const list = await Promise.all(
            cities.map((city) => {
                return this.hotelModel.countDocuments({ city });
            }),
        );
        return list;
    }

    async countByType(): Promise<{ type: string; count: number }[]> {
        const types = ['hotel', 'apartment', 'resort', 'villa', 'cabin'];
        const counts = await Promise.all(
            types.map(async (type) => ({
                type,
                count: await this.hotelModel.countDocuments({ type }),
            })),
        );
        return counts;
    }
}