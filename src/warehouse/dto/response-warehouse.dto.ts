import { IsNotEmpty, IsString } from 'class-validator';

export class WarehouseResponseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  arrivalDate: string;

  @IsString()
  shipmentDate: string;

  @IsString()
  @IsNotEmpty()
  departure: string;

  @IsString()
  arrivals: string;

  @IsString()
  imgUrl: string;
}
