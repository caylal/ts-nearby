//index.js
//获取应用实例
import { IMyApp } from '../../app'
import { LogFactory } from '../../logs/log.factory'
import {HttpBase} from '../../https/http.base'
import {Apis} from '../../api/api.const'
const app = getApp<IMyApp>()
const log = LogFactory.get("Index");
const http = new HttpBase()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {   
    console.log(this.data.CustomBar)
  }, 
  onTapTest(){
    http.get(Apis.rec.restful.query,{data:{pi:1,ps:10}}).then(res => {
      log.log("rec:", res)
    })
  }
})
