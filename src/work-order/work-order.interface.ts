import { Document } from 'mongoose';

export interface WorkOrder extends Document {
  readonly order_id: number;
  readonly user_id: number;
  readonly content: string;
  readonly image_url: string;
  readonly referer: string;
  readonly user_agent: string;
  readonly createTime: Date;
}
