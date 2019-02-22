
interface Itype{
  type?: string,
  level: string
}
interface IConfig {
  [key: string]: Itype
}
export const logConfig: IConfig = {    
    "default" : {
      "type": "console",
      "level": "on"
    },
    "AppStart": {
      "level": "on"
    },
    "Authorize": {
      "level":"on"
    },
    "Cart": {
      "level": "on"
    },
    "Category": {
      "level": "on"
    },
    "Goods": {
      "level": "on"
    },
    "Index": {
      "level": "on"
    },
    "Location": {
      "level": "on"
    },
    "Member": {
      "level": "on"
    },
    "Neighbor": {
      "level": "on"
    },
    "Orders": {
      "level": "on"
    },
    "Payment": {
      "level": "on"
    },
    "Search": {
      "level": "on"
    },
    "HttpProxy": {
      "level": "on"
    },
    "Service": {
      "level": "on"
    }
  }
  
  export const Auth = {
    "enable": true,
    "login": "get auth/login/wx",
    "refreshTokenUrl": "get auth/refresh",
  }
  export const apiPrefix = "https://www.lifenearby.cn:8081/api"
  
  