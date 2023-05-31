import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Warehouse } from '../warehouse.schema';
import { Model } from 'mongoose';

@Injectable()
export class WarehouseRepository {
  constructor(
    @InjectModel(Warehouse.name)
    private readonly warehouseModel: Model<Warehouse>,
  ) {}
}
