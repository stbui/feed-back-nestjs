import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkOrderModule } from './work-order/work-order.module';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [WorkOrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
