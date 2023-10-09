/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from './role.enum';
// Define the Role enum before using it


@Schema({
    timestamps: true,
})
export class User extends Document {
    @Prop()
    name: string;

    @Prop({ unique: [true, 'Duplicate email entered'] })
    email: string;

    @Prop()
    password: string;

    @Prop({
        type: String,
        enum: Object.values(Role),
        default: Role.USER,
    })
    // eslint-disable-next-line prettier/prettier
    role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);