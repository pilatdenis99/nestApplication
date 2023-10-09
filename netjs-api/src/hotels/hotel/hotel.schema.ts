/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Room } from 'src/room/schema/room.schema';

@Schema()
export class Hotel extends Document {
    @Prop({ required: true })
    name: string;



    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    distance: string;

    @Prop([String])
    photos: string[];

    @Prop({ required: true })
    desc: string;

    @Prop({ type: Number, min: 0, max: 5 })
    rating: number;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }])
    rooms: Room[];
    @Prop({ required: true })
    cheapestPrice: number;

    @Prop({ default: false })
    featured: boolean;

    @Prop({ required: true })
    title: string;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);