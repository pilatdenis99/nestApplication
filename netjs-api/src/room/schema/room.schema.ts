/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose'; // Import 'mongoose' module using import * as mongoose

@Schema()
export class Room extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }) // This property references Hotel documents
    hotel: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    maxPeople: number;

    @Prop({ required: true })
    desc: string;

    @Prop([
        { number: { type: Number, required: false }, unavailableDates: { type: [Date], default: [] } }
    ])
    roomNumbers: { number: number; unavailableDates: Date[] }[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);