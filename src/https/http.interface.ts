
export enum HttpMethod {
    GET, POST, PUT, DELETE
}
export interface Api {
    url: string;
    method: HttpMethod
}
export interface ParamItem {
    [key: string]: number | string | boolean
}
export interface Params {
    path?: ParamItem;
    query?: ParamItem;
    data?: any;
}

export interface IHttp {
    get(url: string, params: Params): Promise<object>;
    post(url: string, params: Params): Promise<object>;
    put(url: string, params: Params): Promise<object>;
    delete(url: string, params: Params): Promise<object>;
}

export interface ICommonResponse {
    code?: number;
    result?: IResponseResult | any;
    error?: string
}
export interface IResponseResult {
    status: any;
    token: IToken;
    type: string;
    user:IUser;
    wx?: IWx;
}
export interface IWx {
    session_key: string;
    expires_in: number;
    openid: string;
}
export interface IUser {
    account: string;
    avatar: string;
    city: string;
    country: string;
    gender: string;
    id: string;
    language: string;
    name: string;
    nickname: string;
    province: string;
    roles: any
}
export interface IToken {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    expired?: number;
}

export interface IDealWithCodeOption {
    response: any;
    reject: (res: any) => void;
    resolve: (res: any) => void;
}