// const Mock = require('mock.js')
// const Random = Mock.Random
import { isEmpty } from "../../utils/util";
import { ICommonResponse } from "../../https/http.interface";

// banner
const b_list = [];
const b_total = 3;
for (let i = 0; i < b_total; i++) {
  b_list.push({
    id: i + 1,
    img: `/assets/images/banner0${i + 1}.jpg`
  });
}
// regoods
const re_list = [
  {
    id: "RG2018091000047",
    createdt: "2019-01-09 14:15:16",
    isactive: true,
    goodsid: "G000047",
    neighborhoodid: "N00001",
    name: "老干妈风味豆豉",
    img: "/assets/images/regood02.jpg",
    brand: "老干妈",
    spec: "280",
    unit: "g",
    pack: 1,
    retailprice: 11.5,
    effectivedt: "2018-01-01 00:00:00",
    expireddt: "2018-12-31 00:00:00",
    sort: 480
  },
  {
    id: "RG2018091000048",
    createdt: "2019-01-09 14:15:16",
    isactive: true,
    goodsid: "G000048",
    neighborhoodid: "N00001",
    name: "海天黄豆酱",
    img: "/assets/images/regood03.jpg",
    brand: "海天",
    spec: "230",
    unit: "g",
    pack: 1,
    retailprice: 8.0,
    effectivedt: "2018-01-01 00:00:00",
    expireddt: "2018-12-31 00:00:00",
    sort: 490
  },
  {
    id: "RG2018091000049",
    createdt: "2019-01-09 14:15:16",
    isactive: true,
    goodsid: "G000049",
    neighborhoodid: "N00001",
    name: "黑人双重薄荷牙膏",
    img: "/assets/images/regood01.jpg",
    brand: "黑人",
    spec: "225",
    unit: "g",
    pack: 1,
    retailprice: 16.0,
    effectivedt: "2018-01-01 00:00:00",
    expireddt: "2018-12-31 00:00:00",
    sort: 500
  }
];
// hotGoods
const h_list = [
  {
    id: "HG2018091000050",
    createdt: "2019-01-09 14:15:16",
    isactive: true,
    goodsid: "G000050",
    neighborhoodid: "N00001",
    name: "舒肤佳柠檬清新型香皂",
    img: "/assets/images/htgood01.jpg",
    brand: "舒肤佳",
    spec: "115",
    unit: "g",
    pack: 1,
    retailprice: 6.0,
    effectivedt: "2018-01-01 00:00:00",
    expireddt: "2018-12-31 00:00:00",
    sort: 510
  },
  {
    id: "HG2018091000051",
    createdt: "2019-01-09 14:15:17",
    isactive: true,
    goodsid: "G000051",
    neighborhoodid: "N00001",
    name: "雕牌洗衣皂",
    img: "/assets/images/htgood02.jpg",
    brand: "雕牌",
    spec: "136",
    unit: "g",
    pack: 1,
    retailprice: 3.5,
    effectivedt: "2018-01-01 00:00:00",
    expireddt: "2018-12-31 00:00:00",
    sort: 520
  },
  {
    id: "HG2018091000052",
    createdt: "2019-01-09 14:15:17",
    isactive: true,
    goodsid: "G000052",
    neighborhoodid: "N00001",
    name: "榄菊无烟蚊香",
    img: "/assets/images/htgood03.jpg",
    brand: "榄菊",
    spec: "175",
    unit: "g",
    pack: 1,
    retailprice: 6.0,
    effectivedt: "2018-01-01 00:00:00",
    expireddt: "2018-12-31 00:00:00",
    sort: 530
  }
];
// let MockData = Mock.mock({
//   'code': 100,
//   'result':
// })
const shop_list = [
  {
    id: "S00001",
    createdt: "2019-01-09 14:12:51",
    isactive: true,
    areaid: "A2147",
    areacode: "440303",
    name: "佳宜生活超市",
    phone: "123",
    lat: 22.551952,
    lng: 114.12646,
    openingtime: "1899/12/30 8:00:00",
    closinghour: "1899/12/30 22:00:00",
    address: "罗湖区翠园捷143号",
    sort: 2000,
    distance: 7120.5
  },
  {
    id: "S00003",
    createdt: "2019-01-09 14:12:51",
    isactive: true,
    areaid: "A2148",
    areacode: "440304",
    name: "柠檬便利店",
    phone: "123",
    lat: 22.542594,
    lng: 114.068507,
    openingtime: "1899/12/30 8:00:00",
    closinghour: "1899/12/30 22:00:00",
    address: "福田区彩田路",
    sort: 4000,
    distance: 1095.3
  },
  {
    id: "S00002",
    createdt: "2019-01-09 14:12:51",
    isactive: true,
    areaid: "A2148",
    areacode: "440304",
    name: "屈臣氏",
    phone: "123",
    lat: 22.534984,
    lng: 114.055793,
    openingtime: "1899/12/30 8:00:00",
    closinghour: "1899/12/30 22:00:00",
    address: "福田区福华路购物公园2F",
    sort: 3000,
    distance: 928.2
  }
];
interface MockRequest {
  url: string;
  body?: any;
}
interface MockApi {
  [key: string]: any;
}
const template = {
  banner: b_list,
  regoods: re_list,
  htgoods: h_list,
  shopbyNbhd: shop_list
};

export const getMock = (res: MockRequest): Promise<ICommonResponse> => {
  return MockApis[res.url](res);
};
export const getData = (req: any, tpl: any) => {
  return new Promise((resolve, reject) => {
    if (!isEmpty(req)) {
      let result = { code: 100, result: tpl };
      resolve(result);
    } else {
    }
  });
};
export const MockApis: MockApi = {
  "banner/byNbhd": (req: MockRequest) => getData(req.body, template.banner),
  "recommendGoods/my": (req: MockRequest) =>getData(req.body, template.regoods),
  "hotGoods/byNbhd": (req: MockRequest) => getData(req.body, template.htgoods),
  "shop/byNbhd":(req: MockRequest) => getData(req.body, template.shopbyNbhd)
};
