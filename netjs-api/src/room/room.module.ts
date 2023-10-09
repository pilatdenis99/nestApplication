import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { Room, RoomSchema } from './schema/room.schema';
import { Hotel, HotelSchema } from 'src/hotels/hotel/hotel.schema';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: Room.name, schema: RoomSchema },
      { name: Hotel.name, schema: HotelSchema },
    ]),
  ],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule { }