import { Body, Controller, Post } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseResponseDto } from './dto/response-warehouse.dto';

@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Post('register')
  async registerNewItem(@Body() body: WarehouseResponseDto) {
    return await this.warehouseService.create(body);
  }
}
