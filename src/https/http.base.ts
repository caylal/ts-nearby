import {IHttp, IToken, Params, IResponseResult, ICommonResponse} from './http.interface'
import {HttpProxy} from './http.proxy'
import {Auth} from '../config/cfg.config'
import {transExpiresDt} from '../utils/util'
export class HttpBase implements IHttp {
    private freshStatus: boolean = false
    get(url: string, params: Params): Promise<object>{
        return this.request(url, params)
    }
    post(url: string, params: Params): Promise<object>{
        return this.request(url, params)
    }
    put(url: string, params: Params): Promise<object>{
        return this.request(url, params)
    }
    delete(url: string, params: Params): Promise<object>{
        return this.request(url, params)
    }

    protected request(api: string, params: Params): Promise<object> {
        return new Promise((resolve, reject) => {
            if(this.guard(api)) {
               const token: IToken = wx.getStorageSync('token')
               const dtNow: number = new Date().valueOf()
               if(!!token && token.expired < dtNow) {
                   if(!this.freshStatus) {
                       this.freshStatus = true
                       HttpProxy.doRequest(Auth.refreshTokenUrl, false, {data: {refreshToken: token.refresh_token}}).then((res: ICommonResponse) => {
                            const response_res: IResponseResult = res.result 
                            if(response_res.token){
                                response_res.token.expired = transExpiresDt(response_res.token.expires_in)
                                wx.setStorageSync('token', response_res.token)
                                this.freshStatus = false

                                HttpProxy.doRequest(api, true, params).then((res: ICommonResponse) => {
                                    resolve(res)
                                }).catch(err => {
                                    reject(err)
                                })
                            } 
                       }).catch(err => {
                           if(err.code === 210 || err.code === 220) {
                                // wx.removeStorageSync('userInfo')
                                // wx.removeStorageSync('token')
                                // wx.removeStorageSync('wx')
                                // const url = getPageUrl()
                                // wx.redirectTo({
                                //     url: '/pages/authorize/index?url=/' + url,
                                // })
                                // console.log(url)
                           }
                       })
                   } else {
                       //token刷新中
                       let result = this.recurRequest(api, params)
                       resolve(result)
                   }
               } else {
                HttpProxy.doRequest(api, true, params).then(res => resolve(res)).catch(err => reject(err))
               }
            } else {
                HttpProxy.doRequest(api, false, params).then(res => resolve(res)).catch(err => reject(err))
            }
        })
    }
    private guard(api: string):boolean {
        let result: boolean = false;
        if(Auth.enable) {
            result = true
            if(api.indexOf(Auth.refreshTokenUrl) > 0) {
                result = false
            } else if(api.indexOf(Auth.login) > 0){
                result = false
            }
        }
        return result
    }
    private  recurRequest(api: string, params: Params) {
        let result;
        if(this.freshStatus) {
            setTimeout(() => {
                this.recurRequest(api, params)
            }, 1000)
        }else {
            result = HttpProxy.doRequest(api, true, params)
        }
        return result
    }
}