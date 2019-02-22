"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: []
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util_1.formatTime(new Date(log));
            })
        });
    },
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ3MvbG9ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUE2QztBQUU3QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBYztLQUNyQjtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFXO2dCQUN0RCxPQUFPLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwiZmlsZSI6InBhZ2VzL2xvZ3MvbG9ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vbG9ncy5qc1xuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbG9nczogW10gYXMgc3RyaW5nW11cbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbG9nczogKHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW10pLm1hcCgobG9nOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWUobmV3IERhdGUobG9nKSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=
