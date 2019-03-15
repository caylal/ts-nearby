import { IMyApp } from '../../app'
//import { LogFactory } from '../../logs/log.factory'
//import {HttpBase} from '../../https/http.base'
//import {ICommonResponse} from '../../https/http.interface'
//import {Apis} from '../../api/api.const'

const app = getApp<IMyApp>()
//const log = LogFactory.get("Index");
//const http = new HttpBase()

Page({
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,        
        pi: 1,
        ps: 10
    }, 
    onLoad() { 

    },
    isMap(e: any) {
        this.setData!({
            isMap: e.detail.value
        })
    }
})