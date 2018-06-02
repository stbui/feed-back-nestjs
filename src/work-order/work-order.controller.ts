import { Controller, Post, Get, Body, Query, Headers } from '@nestjs/common';
import { WorkOrderService } from './work-order.service';

@Controller('work-order')
export class WorkOrderController {
  constructor(private service: WorkOrderService) {}

  /**
   * 添加用户反馈
   * @param {Number}  user_id 用户id，不能为空
   * @param {String}  content 备注
   * @param {String}  image_url 图片url
   */
  @Post()
  postIndexAction(
    @Body() b,
    @Headers('user-agent') userAgent: string,
    @Headers('referer') referer: string,
  ) {
    if (!b.user_id) {
      return this.paramError('user_id');
    }

    const data = Object.assign(b, {
      order_id: this.getOrderId(),
      user_agent: userAgent,
      referer: referer,
      createTime: +new Date(),
    });

    const result = this.service.add(b);
    return result;
  }

  /**
   * 查询用户反馈记录
   * @param {Number} currentPage 当前页面码
   * @param {Number} pageSize  分页数
   */
  @Get()
  getIndexAction(@Query() q) {
    const result = this.service
      .page(parseInt(q.currentPage), parseInt(q.pageSize))
      .countSelect({
        _id: 0,
        order_id: 1,
        content: 1,
        image_url: 1,
        referer: 1,
        createTime: 1,
      });

    return result;
  }

  paramError(param: string) {
    return {
      statusCode: 600,
      error: 'Bad Request',
      message: `参数 ${param} 错误`,
    };
  }

  getOrderId() {
    return Math.floor(Math.random() * 100);
  }
}
