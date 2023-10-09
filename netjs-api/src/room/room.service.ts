/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './schema/room.schema';
import { Hotel } from 'src/hotels/hotel/hotel.schema';
@Injectable()
export class RoomService {
    constructor(
        @InjectModel('Room') private readonly roomModel: Model<Room>,
        @InjectModel('Hotel') private readonly hotelModel: Model<Hotel>,
    ) { }

    async createRoom(hotelId: string, createRoomDto: Room): Promise<Room> {
        const newRoom = new this.roomModel(createRoomDto);
        const savedRoom = await newRoom.save();

        const hotel = await this.hotelModel.findById(hotelId);
        if (!hotel) {
            throw new NotFoundException('Hotel not found');
        }

        hotel.rooms.push(savedRoom._id);
        await hotel.save();

        return savedRoom;
    }

    async updateRoom(id: string, updateRoomDto: Room): Promise<Room> {
        const updatedRoom = await this.roomModel.findByIdAndUpdate(id, updateRoomDto, { new: true });
        if (!updatedRoom) {
            throw new NotFoundException('Room not found');
        }
        return updatedRoom;
    }

    async updateRoomAvailability(id: string, dates: Date[]): Promise<void> {
        await this.roomModel.updateOne(
            { 'roomNumbers._id': id },
            {
                $push: {
                    'roomNumbers.$.unavailableDates': { $each: dates },
                },
            }
        );
    }

    async deleteRoom(id: string, hotelId: string): Promise<void> {
        await this.roomModel.findByIdAndDelete(id);

        const hotel = await this.hotelModel.findById(hotelId);
        if (hotel) {
            hotel.rooms = hotel.rooms.filter((roomId) => roomId.toString() !== id);
            await hotel.save();
        }
    }

    async getRoom(id: string): Promise<Room> {
        const room = await this.roomModel.findById(id);
        if (!room) {
            throw new NotFoundException('Room not found');
        }
        return room;
    }

    async getRooms(): Promise<Room[]> {
        return await this.roomModel.find();
    }
}