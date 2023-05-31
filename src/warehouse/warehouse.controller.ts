import { Body, Controller, Get, Post } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseResponseDto } from './dto/response-warehouse.dto';

@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Get()
  async getAllWarehouse() {
    return await this.warehouseService.findAll();
  }

  @Post('register')
  async registerNewItem(@Body() body: WarehouseResponseDto) {
    return await this.warehouseService.create(body);
  }
}
