import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './models/item.model';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  async getItems() {
    return await this.itemsService.getItems();
  }

  @Post()
  async insertItem(@Body() item: Item) {
    return await this.itemsService.insertItem(item);
  }

  @Put()
  async updateItem(@Body() item: Item) {
    return await this.itemsService.updateItem(item);
  }
}
