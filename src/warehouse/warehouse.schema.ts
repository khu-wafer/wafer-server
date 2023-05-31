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
  status: string;

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

  readonly readOnlyData: {
    id: string;
    name: string;
    status: string;
    arrivalDate: string;
    shipmentDate: string;
    departure: string;
    arrivals: string;
    imgUrl: string;
  };
}

export const WarehouseSchema = SchemaFactory.createForClass(Warehouse);

WarehouseSchema.virtual('readOnlyData').get(function (this: Warehouse) {
  return {
    id: this.id,
    name: this.name,
    status: this.status,
    arrivalDate: this.arrivalDate,
    shipmentDate: this.shipmentDate,
    departure: this.departure,
    arrivals: this.arrivals,
    imgUrl: this.imgUrl,
  };
});
