import * as mongoose from 'mongoose';

export const WorkOrderSchema = new mongoose.Schema({
  order_id: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    default: '',
  },
  image_url: {
    type: String,
    default: '',
  },
  referer: {
    type: String,
    default: '',
  },
  user_agent: {
    type: String,
    default: '',
  },
  createTime: {
    type: Date,
    default: +new Date(),
  },
});
