const Mock = require('mock.js')
export interface MockRequest {
  url: string;
  body?: any;
}
export interface ParamItem {
  [key: string]: number | string | boolean;
}
