import { Connection } from 'mongoose';
import { WorkOrderSchema } from './work-order.schema';

export const WorkOrderProviders = [
  {
    provide: 'WorkOrderModelToken',
    useFactory: (connection: Connection) =>
      connection.model('work_order', WorkOrderSchema),
    inject: ['DbConnectionToken'],
  },
];
