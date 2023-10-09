import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare class Room extends Document {
    hotel: string;
    title: string;
    price: number;
    maxPeople: number;
    desc: string;
    roomNumbers: {
        number: number;
        unavailableDates: Date[];
    }[];
}
export declare const RoomSchema: mongoose.Schema<Room, mongoose.Model<Room, any, any, any, Document<unknown, any, Room> & Room & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Room, Document<unknown, {}, mongoose.FlatRecord<Room>> & mongoose.FlatRecord<Room> & {
    _id: mongoose.Types.ObjectId;
}>;
