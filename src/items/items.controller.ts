import { Controller, Get, Post, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './models/item.model';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  findAllItems()  {
  }

  @Post()
  insertItem(item: Item) {
    this.itemsService.insertItem(item)
  }

  @Put() 
  updateItem(){}
}
