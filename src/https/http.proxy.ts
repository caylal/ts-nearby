import {ILog} from '../logs/log.interface'
import {LogFactory} from '../logs/log.factory'
import {Params,IToken, Api, HttpMethod,IDealWithCodeOption,ICommonResponse,IResponseResult} from './http.interface'
import {Auth,apiPrefix} from '../config/cfg.config'
import {transExpiresDt} from '../utils/util'
export class HttpProxy {
    private static log: ILog = LogFactory.get(HttpProxy)
    private static freshStatus: boolean = false
    private static isDebug: boolean = false
    constructor(){}
    public static request(api: string, params: Params): Promise<object> {
        return new Promise((resolve, reject) => {
            if(this.guard(api)) {
               const token: IToken = wx.getStorageSync('token')
               const dtNow: number = new Date().valueOf()
               if(!!token && token.expired < dtNow) {
                   if(!this.freshStatus) {
                       this.freshStatus = true
                       this.doRequest(Auth.refreshTokenUrl, false, {data: {refreshToken: token.refresh_token}}).then((res: ICommonResponse) => {
                            const response_res: IResponseResult = res.result 
                            if(response_res.token){
                                response_res.token.expired = transExpiresDt(response_res.token.expires_in)
                                wx.setStorageSync('token', response_res.token)
                                this.freshStatus = false

                                this.doRequest(api, true, params).then((res: ICommonResponse) => {
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
                   this.doRequest(api, true, params).then(res => resolve(res)).catch(err => reject(err))
               }
            } else {
                this.doRequest(api, false, params).then(res => resolve(res)).catch(err => reject(err))
            }
        })
    }

    private static doRequest(api: string, tokenCheck: boolean, params: Params) {
        let result: Promise<object>
        if(tokenCheck) {
            const token: IToken = wx.getStorageSync('token')
            if(!!token) {
                params = params || {};
                params.data = params.data || {};
                Object.assign(params.data, { access_token: token.access_token})
            }
        }
        api = this.urlPrefix(api, apiPrefix);
        if(this.isDebug) {
            this.log.log('mock request: ' + api, params)
        } else {           
            const httpApi = this.analyzeApi(api)
            if(!!params && !!params.path) {
                httpApi.url = this.urlFormat(httpApi.url, params.path)
            }
            this.log.log('requset: ' + HttpMethod[httpApi.method] +' ' + httpApi.url, params.data)
            const method: any = HttpMethod[httpApi.method]
            result = new Promise((resolve, reject) => {
                wx.request({
                    url: httpApi.url,
                    data: params.data,
                    method: method,
                    header: {
                        'Content-Type': 'application/json'
                    },
                    success: (res: any) => {
                        this.log.log('response: ' + HttpMethod[httpApi.method] +' ' + httpApi.url, res.data)
                        this.dealWithCode({response: res, resolve, reject})
                    },
                    fail: (res: any) => {
                        reject(res)
                    }
                })
            })
        }
        return result
    }

    private static dealWithCode({response, resolve, reject}: IDealWithCodeOption) {
        const dataResponse: ICommonResponse = response.data
        if(!!dataResponse && dataResponse.code === 100){
            resolve(dataResponse)
        }else if(dataResponse.code === 210 || dataResponse.code === 220){
            reject(dataResponse)
        } else {
            wx.showModal({
                title: "接口请求出错",
                showCancel: false,
                content: dataResponse.result + `(${dataResponse.code})`
              });
              reject(dataResponse);
        }
    }

    private static recurRequest(api: string, params: Params) {
        let result;
        if(this.freshStatus) {
            setTimeout(() => {
                this.recurRequest(api, params)
            }, 1000)
        }else {
            result = this.doRequest(api, true, params)
        }
        return result
    }

    private static urlFormat (url: string, pathParam?: any): string {
        let result = url;
        if(!!pathParam) {
            for(const key in pathParam) {
                if(pathParam.hasOwnProperty(key)) {
                    result = result.replace('{' + key + '}', pathParam[key])
                }
            }
        }
        return result;
    }

    private static analyzeApi (api: string | Api): Api {
        let result: Api;
        if(typeof api === 'string') {
            const splits = api.split(' ');
            let method: HttpMethod = HttpMethod.GET;
            let url: string;
            if(splits.length === 1) {
                url = splits[0];
            } else {
                url = splits[1];
                switch(splits[0].toLowerCase()) {
                    case 'post':
                        method = HttpMethod.POST;
                        break;
                    case 'put':
                        method = HttpMethod.PUT;
                        break;
                    case 'delete':
                        method = HttpMethod.DELETE;
                        break;
                    default:
                        method = HttpMethod.GET
                        break;
                }
            }
            result = {
                method: method,
                url: url
            }
    } else {
        result = api;
    }
    return result;
        
    }

    private static urlPrefix(url: string, prefix: string) : string{
        let result: string = url;
        if(!!prefix) {
            if(url.indexOf(' ') > 0) {
                const splits = url.split(' ')
                result = splits[0] + ' ' + prefix + '/' + splits[1];
            } else {
                result = prefix + '/' + result
            }
        }
        return result;
    }

    private static guard(api: string):boolean {
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
}