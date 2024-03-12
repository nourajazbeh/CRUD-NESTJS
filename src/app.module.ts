import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { CrudController } from './crud/crud.controller';

@Module({
  imports: [CrudModule],
  controllers: [AppController, CrudController],
  providers: [AppService],
})
export class AppModule {}
