import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './car/car.module';
import { CrudController } from './car/car.controller';

@Module({
  imports: [CrudModule],
  controllers: [AppController, CrudController],
  providers: [AppService],
})
export class AppModule {}
