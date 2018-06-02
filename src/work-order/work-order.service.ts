import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { WorkOrder } from './work-order.interface';

@Injectable()
export class WorkOrderService {
  private options;
  constructor(
    @Inject('WorkOrderModelToken') private readonly model: Model<WorkOrder>,
  ) {
    this.options = {};
  }

  field(options) {
    this.options.field = options;
    return this;
  }

  order(options) {
    this.options.order = options;
    return this;
  }

  where(options) {
    this.options.where = options;
    return this;
  }

  getId() {
    this.options.id = 1;
    return this;
  }

  find(options?) {
    if (this.options.where) options = this.options.where;

    return this.model.findOne(options);
  }

  add(data) {
    const model = new this.model(data);
    return model.save();
  }

  async thenAdd(data, where) {
    const findData = await this.where(where).find();
    if (findData !== null) {
      return { type: 'exist', data: findData };
    }
    const insertId = await this.add(data);
    return { type: 'add', data: insertId };
  }

  select(options?): Promise<WorkOrder[]> {
    const model = this.model;

    let result = model.find();

    if (options) {
      result = model.find(null, options);
    }

    if (this.options.order) {
      result = result.sort(this.options.order);
    }

    return result.exec();
  }

  page(p: Number = 1, pageSize: Number = 10) {
    this.options.limit = [p, pageSize];
    return this;
  }

  async countSelect(options?) {
    let limit = this.options.limit;
    let count = await this.count();
    let data = {
      count: count,
      currentPage: limit[0] - 1,
      pageSize: limit[1],
      totalPage: null,
      data: null,
    };

    const result = await this.model
      .find(null, options)
      .skip(data.currentPage * data.pageSize)
      .limit(limit[1])
      .exec();

    data.totalPage = Math.ceil(data.count / data.pageSize);
    data.data = result;

    return data;
  }

  count(field: string = '') {
    return this.model.count(field);
  }
}
