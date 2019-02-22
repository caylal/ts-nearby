
export const Method = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete'
  }

export class Restful {
    post: string;
    delete: string;
    put: string;
    get: string;
    query: string;

    constructor(url: string) {
        this.post = Method.post + ' ' + url
        this.delete = Method.delete + ' ' + url + '/{id}'
        this.put = Method.put + ' ' + url
        this.get = url + '/{id}'
        this.query = url
    }
}

export const Apis = {
    area: { 
        restful: new Restful('area'),  // 获取区域信息
        queryCity: 'area/city'  // 获取所有城市信息  
       },           
      nbhd: { 
        restful: new Restful('neighbor'),
        queryArea: 'neighbor/area',   // 获取所在区域的社区列表 参数{pi:1, ps:20,areaid:"A0016"}
        queryLngLat: 'neighbor/lnglat' // 查询经纬度附近的社区列表
      },
      shop: { 
        queryNbhd: 'shop/byNbhd',         // 获取所在社区的门店 参数{pageIndex:1, pageSize:10,id:"N000",lng:"22.6348928889",  lat:"114.0321329018"}社区id，经纬度
        goods: new Restful('shop/goods'),        // 获取该门店单个商品信息 参数 {id: "SG0000"} 门店商品id
        queryCate: 'shop/goods/cate/byShop',   // 获取该门店的商品所有类别 参数 {shop: "S0000"} 门店id
        queryGoodsByCate: 'shop/goods/byShopAndCate',  // 获取门店该类别的商品 参数{pi:1, ps:10,shop:"S0000",cate:"C0001"}门店id，类别id
        queryGoodsByAddress: 'shop/byAddressWithGoods',
      },
      cate: {
        queryCate: 'category/tree',   // 获取所有商品类别
      },
      banner: {
        queryBanner: 'banner/byNbhd',  // 获取所在社区首页banner 参数{pageIndex: 1,pageSize: 3, id: "N000"} 社区id
      },
      rec: {
        restful: new Restful('recommendGoods'),
        queryOfMy: 'recommendGoods/my',            // 我的推荐商品 参数{pageIndex: 1, pageSize: 3, uid: "U00000000", nid: "N000"} 用户id，社区id
      },
      hot: {
        restful: new Restful('hotGoods'),
        queryOfNbhd: 'hotGoods/byNbhd',                // 社区内热卖商品 参数{pi: 1,ps: 3, nbhd: "N000"} 社区id
      },
      cart: {
        restful: new Restful('shoppingcart'),
        queryOfMy: 'shoppingcart/my',      // 获取我的购物车 参数{pageIndex: 1, pageSize: 3, uid: "U00000000"} 用户id
      },
      goods: {
        restful: new Restful('goods'),
        queryByCate: 'goods/byCate',                   // 根据类别获取商品信息 参数{pageIndex: 1, pageSize: 20, cate:"C0025"}
      },
      order: {
        restful: new Restful('order'),
        queryOfMy: 'order/my',                     // 获取我的订单信息参数{pi: 1, ps: 20,uid:}
        payment: "post order/pay/wx"                     
      },
      addr: {
        restful: new Restful('address'),
        queryOfMy: 'address/my',                   // 获取地址信息 参数 {userid: 'U000000001'}  
      },
      auth: {
        login: 'auth/login/wx',                      // 登录      
        refresh: 'auth/refresh'
      },
      user: {
        restful: new Restful('user')
      }
}