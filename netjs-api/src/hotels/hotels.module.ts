/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelController } from './hotels.controller';
import { HotelService } from './hotels.service';

import { Hotel, HotelSchema } from './hotel/hotel.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }]),
  ],
  controllers: [HotelController],
  providers: [
    HotelService,



  ],
})
export class HotelsModule { }