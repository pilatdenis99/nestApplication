/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { RoomService } from './room.service';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/schema/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('rooms')
@UseGuards(AuthGuard(), RolesGuard)
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @Roles(Role.ADMIN)
    @Post(':hotelId')
    async createRoom(@Param('hotelId') hotelId: string, @Body() createRoomDto: any) {
        return this.roomService.createRoom(hotelId, createRoomDto);
    }

    @Roles(Role.ADMIN)
    @Put(':id')
    async updateRoom(@Param('id') id: string, @Body() updateRoomDto: any) {
        return this.roomService.updateRoom(id, updateRoomDto);
    }

    @Roles(Role.ADMIN)
    @Delete(':id/:hotelId')
    async deleteRoom(@Param('id') id: string, @Param('hotelId') hotelId: string) {
        return this.roomService.deleteRoom(id, hotelId);
    }


    @Get(':id')
    async getRoom(@Param('id') id: string) {
        return this.roomService.getRoom(id);
    }

    @Roles(Role.ADMIN)
    @Get()
    async getRooms() {
        return this.roomService.getRooms();
    }
}