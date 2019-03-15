//index.js
//获取应用实例
import { IMyApp } from '../../app'
import { LogFactory } from '../../logs/log.factory'
import {HttpBase} from '../../https/http.base'
import {ICommonResponse} from '../../https/http.interface'
import {Apis} from '../../api/api.const'
import {isEmpty, getPageUrl} from '../../utils/util'
const app = getApp<IMyApp>()
const log = LogFactory.get("Index");
const http = new HttpBase()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    bannerList: [],
    hotList: [],
    recList: [],
    pi: 1,
    ps: 10
  },  
  onLoad() {   
    console.log(this.data.CustomBar)
    wx.showLoading({
      title: '加载中...'
    })
    Promise.all([
      this.getBanner(),
      this.getHotGoods(),
      this.getRecGoods()
    ]).then(res => {
      wx.hideLoading({success: (): void => {}})
    })
   
  }, 
  // banner列表
  getBanner() {
    let _this = this
    return new Promise((resolve, reject) => {
      http.get(Apis.banner.queryBanner,{data: {pi:_this.data.pi, ps: _this.data.ps, nbhd:"N00001"}}).then(res => {
        const data: ICommonResponse = res 
        log.log("banner-list: " , res)
        if (!isEmpty(data.result)) {        
          _this.setData!({
            bannerList: data.result
          })
        } else {
          log.log(getPageUrl() + 'banner无数据', res)
        }
       resolve(true)
      }).catch(res =>{ 
        log.log(getPageUrl() + "banner接口", res)
        reject(true)
      })
    })    
  },
  // 热卖商品
  getHotGoods(){
    let _this = this
    return new Promise((resolve, reject) => {
      http.get(Apis.hot.queryOfNbhd, {data:{pi:_this.data.pi, ps: _this.data.ps, nbhd:"N00001"}}).then(res => {
        const data: ICommonResponse = res 
        log.log("hot-list: ", data)
        if(!isEmpty(data.result)) {
          data.result.map((item: any)=> {
            item.cate = "hot"  
            item.url = `pages/good/index?url=${Apis.hot.restful.get}&&id=${item.id}`
          })
          _this.setData!({
            hotList: data.result
          })
        } else {
          log.log(getPageUrl() + "hotgood无数据", data)
        }
        resolve(true)
      }).catch(res => {
        log.log(getPageUrl() + "hotgood接口", res)
        reject(true)
      })
    })   
  },
  // 推荐商品
  getRecGoods() {
    let _this = this
    return new Promise((resolve, reject) => {
      http.get(Apis.rec.queryOfMy, {data: {pi: _this.data.pi, ps: _this.data.ps, nid: "N00001", uid: "U100000003"}}).then(res => {
        const data: ICommonResponse = res
        if(!isEmpty(data.result)) {
          data.result.map((item: any) => {
            item.cate = "rec"  
            item.url = `/pages/good/index?url=${Apis.rec.restful.get}&&id=${item.id }`
            let num = parseFloat(item.retailprice)
            item.retailprice = num.toFixed(2)
          })
          _this.setData!({
            recList: data.result
          })
        } else {
          log.log(getPageUrl() + "recgood接口", res)
        }
        resolve(true)
      }).catch(res => {
        log.log(getPageUrl() + "recgood接口", res)
        reject(true)
      })
    })
   
  },
  addCart(e: any) {
    log.log('addCartListener: ' , e)
  } 
})
