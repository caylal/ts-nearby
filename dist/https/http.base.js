"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_proxy_1 = require("./http.proxy");
var HttpBase = (function () {
    function HttpBase() {
    }
    HttpBase.prototype.get = function (url, params) {
        return this.request(url, params);
    };
    HttpBase.prototype.post = function (url, params) {
        return this.request(url, params);
    };
    HttpBase.prototype.put = function (url, params) {
        return this.request(url, params);
    };
    HttpBase.prototype.delete = function (url, params) {
        return this.request(url, params);
    };
    HttpBase.prototype.request = function (api, params) {
        return http_proxy_1.HttpProxy.request(api, params);
    };
    return HttpBase;
}());
exports.HttpBase = HttpBase;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzL2h0dHAuYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDJDQUFzQztBQUN0QztJQUFBO0lBa0JBLENBQUM7SUFoQkcsc0JBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxNQUFjO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUNELHVCQUFJLEdBQUosVUFBSyxHQUFXLEVBQUUsTUFBYztRQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFDRCxzQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLE1BQWM7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFPLEdBQVcsRUFBRSxNQUFjO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVTLDBCQUFPLEdBQWpCLFVBQWtCLEdBQVcsRUFBRSxNQUFjO1FBQ3pDLE9BQU8sc0JBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSw0QkFBUSIsImZpbGUiOiJodHRwcy9odHRwLmJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lIdHRwfSBmcm9tICcuL2h0dHAuaW50ZXJmYWNlJ1xyXG5pbXBvcnQge1BhcmFtc30gZnJvbSAnLi9odHRwLmludGVyZmFjZSdcclxuaW1wb3J0IHtIdHRwUHJveHl9IGZyb20gJy4vaHR0cC5wcm94eSdcclxuZXhwb3J0IGNsYXNzIEh0dHBCYXNlIGltcGxlbWVudHMgSUh0dHAge1xyXG4gICBcclxuICAgIGdldCh1cmw6IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBQcm9taXNlPG9iamVjdD57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIHBhcmFtcylcclxuICAgIH1cclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxvYmplY3Q+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBwYXJhbXMpXHJcbiAgICB9XHJcbiAgICBwdXQodXJsOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxvYmplY3Q+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBwYXJhbXMpXHJcbiAgICB9XHJcbiAgICBkZWxldGUodXJsOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxvYmplY3Q+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBwYXJhbXMpXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlcXVlc3QoYXBpOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgICAgICByZXR1cm4gSHR0cFByb3h5LnJlcXVlc3QoYXBpLCBwYXJhbXMpXHJcbiAgICB9XHJcbn0iXX0=
