import { Module } from '@nestjs/common'
import { CarModule } from './car/car.module';
import { CarController } from './car/car.controller';

@Module({
  imports: [CarModule],
  controllers: [ CarController],
})
export class AppModule {}
