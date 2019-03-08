export function formatTime(date: Date, type = 1): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  
  if(type === 1) {
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  } else {
    return [hour, minute, second].map(formatNumber).join(':')
  } 
}

const formatNumber = (n: number) => {
  const str = n.toString()
  return str[1] ? str : '0' + str
}
// 时间间隔
export const transExpiresDt = (expires: number): number =>{
  return new Date().valueOf() + (expires - 5) * 1000;
}

export const isEmpty = (n: any): boolean => {
  if (Object.prototype.toString.call(n) === '[object Object]') {
    if (JSON.stringify(n) !== '{}' || Object.keys(n).length > 0) return false;
  } else if (Object.prototype.toString.call(n) === '[object Array]') {
    if (n.length > 0) return false;
  } else {
    if (n != "" && n != null && n != undefined) return false;
  }
  return true
}
//换算距离低于1000返回米，否则返回千米
export const transDistance = (len: number): string => {
  if (!len || Math.abs(len) <= 0.000001) {
    return "0m";
  } 
  if (len < 1000) {
    return len.toFixed(2) + 'm';
  }
  else {
    return (Math.round(len / 100) / 10).toFixed(1) + "km"
  }
}
// 获取当前页的url地址
export const getPageUrl = () => {
  let pages = getCurrentPages()
  let currentPage = pages[pages.length - 1]
  return currentPage.route
}

export const transDate = (date: string): string => {
  let dt: Date = new Date(date)
  let days: number = parseInt(((new Date().getTime() - dt.getTime()) / 86400000).toString()) 
  let t_d: number = new Date().getDate()
  let year: number = dt.getFullYear()
  let month: number = dt.getMonth() + 1
  let day: number = dt.getDate()
  let time = dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours()
  let min = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes()
  let result: string
  let  offset: number = Math.abs(t_d - day)
  if(days < 4 && offset < 4) {
    if (offset === 0) {
      result = "今天" + time + ":" + min
    } else if (offset === 1) {
      result = "昨天" + time + ":" + min
    } else if (offset === 2) {
      result = "前天" + time + ":" + min
    }
  } else {
    result = year + "-" + month + "-" + day + " " + time + ":" + min
  }
  return result
}
