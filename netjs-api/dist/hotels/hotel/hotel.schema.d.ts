import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Room } from 'src/room/schema/room.schema';
export declare class Hotel extends Document {
    name: string;
    type: string;
    city: string;
    address: string;
    distance: string;
    photos: string[];
    desc: string;
    rating: number;
    rooms: Room[];
    cheapestPrice: number;
    featured: boolean;
    title: string;
}
export declare const HotelSchema: mongoose.Schema<Hotel, mongoose.Model<Hotel, any, any, any, Document<unknown, any, Hotel> & Hotel & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Hotel, Document<unknown, {}, mongoose.FlatRecord<Hotel>> & mongoose.FlatRecord<Hotel> & {
    _id: mongoose.Types.ObjectId;
}>;
