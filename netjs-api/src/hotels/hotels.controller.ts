/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { HotelService } from './hotels.service';
import { Hotel } from './hotel/hotel.schema';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common/decorators';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/schema/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('hotels')
@UseGuards(AuthGuard(), RolesGuard)
export class HotelController {
    constructor(
        private readonly hotelService: HotelService,
    ) { }

    @Roles(Role.ADMIN)
    @Post()
    createHotel(@Body() createHotelDto: any): Promise<Hotel> {
        return this.hotelService.createHotel(createHotelDto);
    }

    @Roles(Role.ADMIN)
    @Put(':id')

    updateHotel(@Param('id') id: string, @Body() updateHotelDto: any): Promise<Hotel> {
        return this.hotelService.updateHotel(id, updateHotelDto);
    }

    @Get(':id')


    getHotel(@Param('id') id: string): Promise<Hotel> {
        return this.hotelService.getHotel(id);
    }



    @Get()
    getHotels(@Query() query: any): Promise<Hotel[]> {
        return this.hotelService.getHotels(query);
    }

    @Roles(Role.ADMIN)
    @Delete(':id')
    deleteHotel(@Param('id') id: string): Promise<void> {
        return this.hotelService.deleteHotel(id);
    }

    @Get('countByCity')
    @UseGuards(AuthGuard())
    countByCity(@Query('cities') cities: string): Promise<number[]> {
        const cityArray = cities.split(',');
        return this.hotelService.countByCity(cityArray);
    }

    @Get('countByType')
    @UseGuards(AuthGuard())
    countByType(): Promise<{ type: string; count: number }[]> {
        return this.hotelService.countByType();
    }
}