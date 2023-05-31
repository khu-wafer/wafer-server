import { Injectable } from '@nestjs/common';
import { WarehouseRepository } from './repository/warehouse.repository';
import { WarehouseResponseDto } from './dto/response-warehouse.dto';

@Injectable()
export class WarehouseService {
  constructor(private readonly warehouseRepository: WarehouseRepository) {}

  async create(body: WarehouseResponseDto) {
    const warehouse = await this.warehouseRepository.create(body);
    return warehouse.readOnlyData;
  }
}
