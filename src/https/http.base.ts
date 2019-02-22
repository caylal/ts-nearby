import {IHttp} from './http.interface'
import {Params} from './http.interface'
import {HttpProxy} from './http.proxy'
export class HttpBase implements IHttp {
   
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
        return HttpProxy.request(api, params)
    }
}