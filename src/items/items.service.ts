import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './models/item.model';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private readonly itemModel: Model<Item>) {}

  async insertItem(Item: Item) {
    const newItem = new this.itemModel(Item);
    const result = await newItem.save();

    console.log(result);

    return result;
  }

  async updateItem(item: Item) {
    let result = await this.itemModel.updateOne({_id: item.id}, item);

    console.log(result);
    return result;
  }

  async getItems() {
    let result = await this.itemModel.find().exec();
    console.log('Result:', result);
    return result;
  } 
}
