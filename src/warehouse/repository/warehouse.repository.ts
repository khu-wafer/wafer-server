import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Warehouse } from '../warehouse.schema';
import { Model } from 'mongoose';
import { WarehouseResponseDto } from '../dto/response-warehouse.dto';

@Injectable()
export class WarehouseRepository {
  constructor(
    @InjectModel(Warehouse.name)
    private readonly warehouseModel: Model<Warehouse>,
  ) {}

  async findAll(): Promise<Warehouse[]> {
    return await this.warehouseModel.find().exec();
  }

  async create(warehouse: WarehouseResponseDto): Promise<Warehouse> {
    return await this.warehouseModel.create(warehouse);
  }
}
