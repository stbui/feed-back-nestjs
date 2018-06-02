# feed-back 用户反馈后端服务

## Description

description

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# database
mongodb://localhost:27017/feed-back

# api
host
* http://127.0.0.1:3000


查询反馈列表
http://127.0.0.1:3000/work-order?currentPage=1&pageSize=2
```
{
    "count": 2,
    "currentPage": 0,
    "pageSize": 2,
    "totalPage": 1,
    "data": [
        {
            "content": "按钮点击无效",
            "image_url": "htt://github.com/stbui",
            "referer": "",
            "createTime": "2018-06-02T02:09:38.249Z",
            "order_id": 75
        },
        {
            "content": "按钮点击无效",
            "image_url": "htt://github.com/stbui",
            "referer": "",
            "createTime": "2018-06-02T02:25:47.136Z",
            "order_id": 45
        }
    ]
}
```

提交反馈信息
http://127.0.0.1:3000/work-order
```
{
    "user_id": "1"
    "content": "按钮点击无效",
    "image_url": "htt://github.com/stbui",
}
```