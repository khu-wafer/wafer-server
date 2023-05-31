import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Warehouse extends Document {
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  arrivalDate: string;

  @Prop({})
  @IsString()
  shipmentDate: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  departure: string;

  @Prop({})
  @IsString()
  arrivals: string;

  @Prop({})
  @IsString()
  imgUrl: string;
}

export const WarehouseSchema = SchemaFactory.createForClass(Warehouse);
