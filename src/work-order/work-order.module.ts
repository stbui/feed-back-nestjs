import { Module } from '@nestjs/common';
import { WorkOrderService } from './work-order.service';
import { WorkOrderController } from './work-order.controller';
import { WorkOrderProviders } from './work-order.providers';
import { DatabaseModule } from '../common/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [WorkOrderService, ...WorkOrderProviders],
  controllers: [WorkOrderController],
})
export class WorkOrderModule {}
