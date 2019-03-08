// const Mock = require('mock.js')
// const Random = Mock.Random
import { isEmpty } from '../../utils/util'
import {ICommonResponse} from '../../https/http.interface'

// banner
const b_list = []
const b_total = 3;
for (let i = 0; i < b_total; i++) {
  b_list.push({
    id: i + 1,
    img: `/assets/images/banner0${i + 1}.jpg`
  })
}
// regoods
const re_list = [
  {
    "id": "RG2018091000047",
    "createdt": "2019-01-09 14:15:16",
    "isactive": true,
    "goodsid": "G000047",
    "neighborhoodid": "N00001",
    "name": "老干妈风味豆豉",
    "img": "/assets/images/regood02.jpg",
    "brand": "老干妈",
    "spec": "280",
    "unit": "g",
    "pack": 1,
    "retailprice": 11.5000,
    "effectivedt": "2018-01-01 00:00:00",
    "expireddt": "2018-12-31 00:00:00",
    "sort": 480
  },
  {
    "id": "RG2018091000048",
    "createdt": "2019-01-09 14:15:16",
    "isactive": true,
    "goodsid": "G000048",
    "neighborhoodid": "N00001",
    "name": "海天黄豆酱",
    "img": "/assets/images/regood03.jpg",
    "brand": "海天",
    "spec": "230",
    "unit": "g",
    "pack": 1,
    "retailprice": 8.0000,
    "effectivedt": "2018-01-01 00:00:00",
    "expireddt": "2018-12-31 00:00:00",
    "sort": 490
  },
  {
    "id": "RG2018091000049",
    "createdt": "2019-01-09 14:15:16",
    "isactive": true,
    "goodsid": "G000049",
    "neighborhoodid": "N00001",
    "name": "黑人双重薄荷牙膏",
    "img": "/assets/images/regood01.jpg",
    "brand": "黑人",
    "spec": "225",
    "unit": "g",
    "pack": 1,
    "retailprice": 16.0000,
    "effectivedt": "2018-01-01 00:00:00",
    "expireddt": "2018-12-31 00:00:00",
    "sort": 500
  }]
const h_list = [
  {
    "id": "HG2018091000050",
    "createdt": "2019-01-09 14:15:16",
    "isactive": true,
    "goodsid": "G000050",
    "neighborhoodid": "N00001",
    "name": "舒肤佳柠檬清新型香皂",
    "img": "/assets/images/htgood01.jpg",
    "brand": "舒肤佳",
    "spec": "115",
    "unit": "g",
    "pack": 1,
    "retailprice": 6.0000,
    "effectivedt": "2018-01-01 00:00:00",
    "expireddt": "2018-12-31 00:00:00",
    "sort": 510
  },
  {
    "id": "HG2018091000051",
    "createdt": "2019-01-09 14:15:17",
    "isactive": true,
    "goodsid": "G000051",
    "neighborhoodid": "N00001",
    "name": "雕牌洗衣皂",
    "img": "/assets/images/htgood02.jpg",
    "brand": "雕牌",
    "spec": "136",
    "unit": "g",
    "pack": 1,
    "retailprice": 3.5000,
    "effectivedt": "2018-01-01 00:00:00",
    "expireddt": "2018-12-31 00:00:00",
    "sort": 520
  },
  {
    "id": "HG2018091000052",
    "createdt": "2019-01-09 14:15:17",
    "isactive": true,
    "goodsid": "G000052",
    "neighborhoodid": "N00001",
    "name": "榄菊无烟蚊香",
    "img": "/assets/images/htgood03.jpg",
    "brand": "榄菊",
    "spec": "175",
    "unit": "g",
    "pack": 1,
    "retailprice": 6.0000,
    "effectivedt": "2018-01-01 00:00:00",
    "expireddt": "2018-12-31 00:00:00",
    "sort": 530
  }  
]
// let MockData = Mock.mock({
//   'code': 100,
//   'result':
// })

interface MockRequest {
  url: string;
  body?: any;
}
interface MockApi {
  [key: string]: any
}
const template = {
  'banner': b_list,
  'regoods': re_list,
  'htgoods': h_list
}


export const getMock = (res: MockRequest): Promise<ICommonResponse> => {
  return MockApis[res.url](res)
}
export const getData = (req: any, tpl: any) => {
  return new Promise((resolve, reject) => {
    if (!isEmpty(req)) {
      let result = {code: 100, result: tpl}
      resolve(result)
    } else {

    }
  })
}
export const MockApis: MockApi = {
  'banner/byNbhd': (req: MockRequest) => getData(req.body, template.banner),
  'recommendGoods/my': (req: MockRequest) => getData(req.body, template.regoods),
  'hotGoods/byNbhd': (req: MockRequest) => getData(req.body, template.htgoods)
}
