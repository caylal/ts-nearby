"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var b_list = [];
var b_total = 3;
for (var i = 0; i < b_total; i++) {
    b_list.push({
        id: i + 1,
        img: "/assets/images/banner0" + (i + 1) + ".jpg"
    });
}
var re_list = [
    {
        "id": "RG2018091000047",
        "createdt": "2019-01-09 14:15:16",
        "isactive": true,
        "goodsid": "G000047",
        "neighborhoodid": "N00001",
        "name": "老干妈风味豆豉",
        "img": "/assets/images/regood02.jpg",
        "brand": "老干妈",
        "spec": "280",
        "unit": "g",
        "pack": 1,
        "retailprice": 11.5000,
        "effectivedt": "2018-01-01 00:00:00",
        "expireddt": "2018-12-31 00:00:00",
        "sort": 480
    },
    {
        "id": "RG2018091000048",
        "createdt": "2019-01-09 14:15:16",
        "isactive": true,
        "goodsid": "G000048",
        "neighborhoodid": "N00001",
        "name": "海天黄豆酱",
        "img": "/assets/images/regood03.jpg",
        "brand": "海天",
        "spec": "230",
        "unit": "g",
        "pack": 1,
        "retailprice": 8.0000,
        "effectivedt": "2018-01-01 00:00:00",
        "expireddt": "2018-12-31 00:00:00",
        "sort": 490
    },
    {
        "id": "RG2018091000049",
        "createdt": "2019-01-09 14:15:16",
        "isactive": true,
        "goodsid": "G000049",
        "neighborhoodid": "N00001",
        "name": "黑人双重薄荷牙膏",
        "img": "/assets/images/regood01.jpg",
        "brand": "黑人",
        "spec": "225",
        "unit": "g",
        "pack": 1,
        "retailprice": 16.0000,
        "effectivedt": "2018-01-01 00:00:00",
        "expireddt": "2018-12-31 00:00:00",
        "sort": 500
    }
];
var h_list = [
    {
        "id": "HG2018091000050",
        "createdt": "2019-01-09 14:15:16",
        "isactive": true,
        "goodsid": "G000050",
        "neighborhoodid": "N00001",
        "name": "舒肤佳柠檬清新型香皂",
        "img": "/assets/images/htgood01.jpg",
        "brand": "舒肤佳",
        "spec": "115",
        "unit": "g",
        "pack": 1,
        "retailprice": 6.0000,
        "effectivedt": "2018-01-01 00:00:00",
        "expireddt": "2018-12-31 00:00:00",
        "sort": 510
    },
    {
        "id": "HG2018091000051",
        "createdt": "2019-01-09 14:15:17",
        "isactive": true,
        "goodsid": "G000051",
        "neighborhoodid": "N00001",
        "name": "雕牌洗衣皂",
        "img": "/assets/images/htgood02.jpg",
        "brand": "雕牌",
        "spec": "136",
        "unit": "g",
        "pack": 1,
        "retailprice": 3.5000,
        "effectivedt": "2018-01-01 00:00:00",
        "expireddt": "2018-12-31 00:00:00",
        "sort": 520
    },
    {
        "id": "HG2018091000052",
        "createdt": "2019-01-09 14:15:17",
        "isactive": true,
        "goodsid": "G000052",
        "neighborhoodid": "N00001",
        "name": "榄菊无烟蚊香",
        "img": "/assets/images/htgood03.jpg",
        "brand": "榄菊",
        "spec": "175",
        "unit": "g",
        "pack": 1,
        "retailprice": 6.0000,
        "effectivedt": "2018-01-01 00:00:00",
        "expireddt": "2018-12-31 00:00:00",
        "sort": 530
    }
];
var template = {
    'banner': b_list,
    'regoods': re_list,
    'htgoods': h_list
};
exports.getMock = function (res) {
    return exports.MockApis[res.url](res);
};
exports.getData = function (req, tpl) {
    return new Promise(function (resolve, reject) {
        if (!util_1.isEmpty(req)) {
            var result = { code: 100, result: tpl };
            resolve(result);
        }
        else {
        }
    });
};
exports.MockApis = {
    'banner/byNbhd': function (req) { return exports.getData(req.body, template.banner); },
    'recommendGoods/my': function (req) { return exports.getData(req.body, template.regoods); },
    'hotGoods/byNbhd': function (req) { return exports.getData(req.body, template.htgoods); }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLE1BQU0sR0FBRyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFBO1lBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUNoQjthQUFNO1NBRU47SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQUNZLFFBQUEsUUFBUSxHQUFZO0lBQy9CLGVBQWUsRUFBRSxVQUFDLEdBQWdCLElBQUssT0FBQSxlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQWxDLENBQWtDO0lBQ3pFLG1CQUFtQixFQUFFLFVBQUMsR0FBZ0IsSUFBSyxPQUFBLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBbkMsQ0FBbUM7SUFDOUUsaUJBQWlCLEVBQUUsVUFBQyxHQUFnQixJQUFLLE9BQUEsZUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFuQyxDQUFtQztDQUM3RSxDQUFBIiwiZmlsZSI6ImFwaS9fX21vY2tfXy9fbW9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IE1vY2sgPSByZXF1aXJlKCdtb2NrLmpzJylcclxuLy8gY29uc3QgUmFuZG9tID0gTW9jay5SYW5kb21cclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXHJcbmltcG9ydCB7SUNvbW1vblJlc3BvbnNlfSBmcm9tICcuLi8uLi9odHRwcy9odHRwLmludGVyZmFjZSdcclxuXHJcbi8vIGJhbm5lclxyXG5jb25zdCBiX2xpc3QgPSBbXVxyXG5jb25zdCBiX3RvdGFsID0gMztcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBiX3RvdGFsOyBpKyspIHtcclxuICBiX2xpc3QucHVzaCh7XHJcbiAgICBpZDogaSArIDEsXHJcbiAgICBpbWc6IGAvYXNzZXRzL2ltYWdlcy9iYW5uZXIwJHtpICsgMX0uanBnYFxyXG4gIH0pXHJcbn1cclxuLy8gcmVnb29kc1xyXG5jb25zdCByZV9saXN0ID0gW1xyXG4gIHtcclxuICAgIFwiaWRcIjogXCJSRzIwMTgwOTEwMDAwNDdcIixcclxuICAgIFwiY3JlYXRlZHRcIjogXCIyMDE5LTAxLTA5IDE0OjE1OjE2XCIsXHJcbiAgICBcImlzYWN0aXZlXCI6IHRydWUsXHJcbiAgICBcImdvb2RzaWRcIjogXCJHMDAwMDQ3XCIsXHJcbiAgICBcIm5laWdoYm9yaG9vZGlkXCI6IFwiTjAwMDAxXCIsXHJcbiAgICBcIm5hbWVcIjogXCLogIHlubLlpojpo47lkbPosYbosYlcIixcclxuICAgIFwiaW1nXCI6IFwiL2Fzc2V0cy9pbWFnZXMvcmVnb29kMDIuanBnXCIsXHJcbiAgICBcImJyYW5kXCI6IFwi6ICB5bmy5aaIXCIsXHJcbiAgICBcInNwZWNcIjogXCIyODBcIixcclxuICAgIFwidW5pdFwiOiBcImdcIixcclxuICAgIFwicGFja1wiOiAxLFxyXG4gICAgXCJyZXRhaWxwcmljZVwiOiAxMS41MDAwLFxyXG4gICAgXCJlZmZlY3RpdmVkdFwiOiBcIjIwMTgtMDEtMDEgMDA6MDA6MDBcIixcclxuICAgIFwiZXhwaXJlZGR0XCI6IFwiMjAxOC0xMi0zMSAwMDowMDowMFwiLFxyXG4gICAgXCJzb3J0XCI6IDQ4MFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIlJHMjAxODA5MTAwMDA0OFwiLFxyXG4gICAgXCJjcmVhdGVkdFwiOiBcIjIwMTktMDEtMDkgMTQ6MTU6MTZcIixcclxuICAgIFwiaXNhY3RpdmVcIjogdHJ1ZSxcclxuICAgIFwiZ29vZHNpZFwiOiBcIkcwMDAwNDhcIixcclxuICAgIFwibmVpZ2hib3Job29kaWRcIjogXCJOMDAwMDFcIixcclxuICAgIFwibmFtZVwiOiBcIua1t+Wkqem7hOixhumFsVwiLFxyXG4gICAgXCJpbWdcIjogXCIvYXNzZXRzL2ltYWdlcy9yZWdvb2QwMy5qcGdcIixcclxuICAgIFwiYnJhbmRcIjogXCLmtbflpKlcIixcclxuICAgIFwic3BlY1wiOiBcIjIzMFwiLFxyXG4gICAgXCJ1bml0XCI6IFwiZ1wiLFxyXG4gICAgXCJwYWNrXCI6IDEsXHJcbiAgICBcInJldGFpbHByaWNlXCI6IDguMDAwMCxcclxuICAgIFwiZWZmZWN0aXZlZHRcIjogXCIyMDE4LTAxLTAxIDAwOjAwOjAwXCIsXHJcbiAgICBcImV4cGlyZWRkdFwiOiBcIjIwMTgtMTItMzEgMDA6MDA6MDBcIixcclxuICAgIFwic29ydFwiOiA0OTBcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJSRzIwMTgwOTEwMDAwNDlcIixcclxuICAgIFwiY3JlYXRlZHRcIjogXCIyMDE5LTAxLTA5IDE0OjE1OjE2XCIsXHJcbiAgICBcImlzYWN0aXZlXCI6IHRydWUsXHJcbiAgICBcImdvb2RzaWRcIjogXCJHMDAwMDQ5XCIsXHJcbiAgICBcIm5laWdoYm9yaG9vZGlkXCI6IFwiTjAwMDAxXCIsXHJcbiAgICBcIm5hbWVcIjogXCLpu5Hkurrlj4zph43oloTojbfniZnoho9cIixcclxuICAgIFwiaW1nXCI6IFwiL2Fzc2V0cy9pbWFnZXMvcmVnb29kMDEuanBnXCIsXHJcbiAgICBcImJyYW5kXCI6IFwi6buR5Lq6XCIsXHJcbiAgICBcInNwZWNcIjogXCIyMjVcIixcclxuICAgIFwidW5pdFwiOiBcImdcIixcclxuICAgIFwicGFja1wiOiAxLFxyXG4gICAgXCJyZXRhaWxwcmljZVwiOiAxNi4wMDAwLFxyXG4gICAgXCJlZmZlY3RpdmVkdFwiOiBcIjIwMTgtMDEtMDEgMDA6MDA6MDBcIixcclxuICAgIFwiZXhwaXJlZGR0XCI6IFwiMjAxOC0xMi0zMSAwMDowMDowMFwiLFxyXG4gICAgXCJzb3J0XCI6IDUwMFxyXG4gIH1dXHJcbmNvbnN0IGhfbGlzdCA9IFtcclxuICB7XHJcbiAgICBcImlkXCI6IFwiSEcyMDE4MDkxMDAwMDUwXCIsXHJcbiAgICBcImNyZWF0ZWR0XCI6IFwiMjAxOS0wMS0wOSAxNDoxNToxNlwiLFxyXG4gICAgXCJpc2FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgXCJnb29kc2lkXCI6IFwiRzAwMDA1MFwiLFxyXG4gICAgXCJuZWlnaGJvcmhvb2RpZFwiOiBcIk4wMDAwMVwiLFxyXG4gICAgXCJuYW1lXCI6IFwi6IiS6IKk5L2z5p+g5qqs5riF5paw5Z6L6aaZ55qCXCIsXHJcbiAgICBcImltZ1wiOiBcIi9hc3NldHMvaW1hZ2VzL2h0Z29vZDAxLmpwZ1wiLFxyXG4gICAgXCJicmFuZFwiOiBcIuiIkuiCpOS9s1wiLFxyXG4gICAgXCJzcGVjXCI6IFwiMTE1XCIsXHJcbiAgICBcInVuaXRcIjogXCJnXCIsXHJcbiAgICBcInBhY2tcIjogMSxcclxuICAgIFwicmV0YWlscHJpY2VcIjogNi4wMDAwLFxyXG4gICAgXCJlZmZlY3RpdmVkdFwiOiBcIjIwMTgtMDEtMDEgMDA6MDA6MDBcIixcclxuICAgIFwiZXhwaXJlZGR0XCI6IFwiMjAxOC0xMi0zMSAwMDowMDowMFwiLFxyXG4gICAgXCJzb3J0XCI6IDUxMFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkhHMjAxODA5MTAwMDA1MVwiLFxyXG4gICAgXCJjcmVhdGVkdFwiOiBcIjIwMTktMDEtMDkgMTQ6MTU6MTdcIixcclxuICAgIFwiaXNhY3RpdmVcIjogdHJ1ZSxcclxuICAgIFwiZ29vZHNpZFwiOiBcIkcwMDAwNTFcIixcclxuICAgIFwibmVpZ2hib3Job29kaWRcIjogXCJOMDAwMDFcIixcclxuICAgIFwibmFtZVwiOiBcIumbleeJjOa0l+iho+eaglwiLFxyXG4gICAgXCJpbWdcIjogXCIvYXNzZXRzL2ltYWdlcy9odGdvb2QwMi5qcGdcIixcclxuICAgIFwiYnJhbmRcIjogXCLpm5XniYxcIixcclxuICAgIFwic3BlY1wiOiBcIjEzNlwiLFxyXG4gICAgXCJ1bml0XCI6IFwiZ1wiLFxyXG4gICAgXCJwYWNrXCI6IDEsXHJcbiAgICBcInJldGFpbHByaWNlXCI6IDMuNTAwMCxcclxuICAgIFwiZWZmZWN0aXZlZHRcIjogXCIyMDE4LTAxLTAxIDAwOjAwOjAwXCIsXHJcbiAgICBcImV4cGlyZWRkdFwiOiBcIjIwMTgtMTItMzEgMDA6MDA6MDBcIixcclxuICAgIFwic29ydFwiOiA1MjBcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJIRzIwMTgwOTEwMDAwNTJcIixcclxuICAgIFwiY3JlYXRlZHRcIjogXCIyMDE5LTAxLTA5IDE0OjE1OjE3XCIsXHJcbiAgICBcImlzYWN0aXZlXCI6IHRydWUsXHJcbiAgICBcImdvb2RzaWRcIjogXCJHMDAwMDUyXCIsXHJcbiAgICBcIm5laWdoYm9yaG9vZGlkXCI6IFwiTjAwMDAxXCIsXHJcbiAgICBcIm5hbWVcIjogXCLmpoToj4rml6Dng5/omorppplcIixcclxuICAgIFwiaW1nXCI6IFwiL2Fzc2V0cy9pbWFnZXMvaHRnb29kMDMuanBnXCIsXHJcbiAgICBcImJyYW5kXCI6IFwi5qaE6I+KXCIsXHJcbiAgICBcInNwZWNcIjogXCIxNzVcIixcclxuICAgIFwidW5pdFwiOiBcImdcIixcclxuICAgIFwicGFja1wiOiAxLFxyXG4gICAgXCJyZXRhaWxwcmljZVwiOiA2LjAwMDAsXHJcbiAgICBcImVmZmVjdGl2ZWR0XCI6IFwiMjAxOC0wMS0wMSAwMDowMDowMFwiLFxyXG4gICAgXCJleHBpcmVkZHRcIjogXCIyMDE4LTEyLTMxIDAwOjAwOjAwXCIsXHJcbiAgICBcInNvcnRcIjogNTMwXHJcbiAgfSAgXHJcbl1cclxuLy8gbGV0IE1vY2tEYXRhID0gTW9jay5tb2NrKHtcclxuLy8gICAnY29kZSc6IDEwMCxcclxuLy8gICAncmVzdWx0JzpcclxuLy8gfSlcclxuXHJcbmludGVyZmFjZSBNb2NrUmVxdWVzdCB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgYm9keT86IGFueTtcclxufVxyXG5pbnRlcmZhY2UgTW9ja0FwaSB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55XHJcbn1cclxuY29uc3QgdGVtcGxhdGUgPSB7XHJcbiAgJ2Jhbm5lcic6IGJfbGlzdCxcclxuICAncmVnb29kcyc6IHJlX2xpc3QsXHJcbiAgJ2h0Z29vZHMnOiBoX2xpc3RcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNb2NrID0gKHJlczogTW9ja1JlcXVlc3QpOiBQcm9taXNlPElDb21tb25SZXNwb25zZT4gPT4ge1xyXG4gIHJldHVybiBNb2NrQXBpc1tyZXMudXJsXShyZXMpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSAocmVxOiBhbnksIHRwbDogYW55KSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGlmICghaXNFbXB0eShyZXEpKSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSB7Y29kZTogMTAwLCByZXN1bHQ6IHRwbH1cclxuICAgICAgcmVzb2x2ZShyZXN1bHQpXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgIH1cclxuICB9KVxyXG59XHJcbmV4cG9ydCBjb25zdCBNb2NrQXBpczogTW9ja0FwaSA9IHtcclxuICAnYmFubmVyL2J5TmJoZCc6IChyZXE6IE1vY2tSZXF1ZXN0KSA9PiBnZXREYXRhKHJlcS5ib2R5LCB0ZW1wbGF0ZS5iYW5uZXIpLFxyXG4gICdyZWNvbW1lbmRHb29kcy9teSc6IChyZXE6IE1vY2tSZXF1ZXN0KSA9PiBnZXREYXRhKHJlcS5ib2R5LCB0ZW1wbGF0ZS5yZWdvb2RzKSxcclxuICAnaG90R29vZHMvYnlOYmhkJzogKHJlcTogTW9ja1JlcXVlc3QpID0+IGdldERhdGEocmVxLmJvZHksIHRlbXBsYXRlLmh0Z29vZHMpXHJcbn1cclxuIl19