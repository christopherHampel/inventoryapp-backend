import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot(
      'mongodb+srv://inventoryManager:6QzS5iUm3sCqNOAu@cluster0.lwcrksm.mongodb.net/inventoryapp?appName=Cluster0',
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
