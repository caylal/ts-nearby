"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        isMap: false,
        pi: 1,
        ps: 10
    },
    onLoad: function () {
    },
    isMap: function (e) {
        this.setData({
            isMap: e.detail.value
        });
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25lYXJieS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBSTVCLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLFNBQVMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVM7UUFDbkMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUztRQUNuQyxLQUFLLEVBQUUsS0FBSztRQUNaLEVBQUUsRUFBRSxDQUFDO1FBQ0wsRUFBRSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU07SUFFTixDQUFDO0lBQ0QsS0FBSyxZQUFDLENBQU07UUFDUixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN4QixDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0osQ0FBQyxDQUFBIiwiZmlsZSI6InBhZ2VzL25lYXJieS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuLy9pbXBvcnQgeyBMb2dGYWN0b3J5IH0gZnJvbSAnLi4vLi4vbG9ncy9sb2cuZmFjdG9yeSdcclxuLy9pbXBvcnQge0h0dHBCYXNlfSBmcm9tICcuLi8uLi9odHRwcy9odHRwLmJhc2UnXHJcbi8vaW1wb3J0IHtJQ29tbW9uUmVzcG9uc2V9IGZyb20gJy4uLy4uL2h0dHBzL2h0dHAuaW50ZXJmYWNlJ1xyXG4vL2ltcG9ydCB7QXBpc30gZnJvbSAnLi4vLi4vYXBpL2FwaS5jb25zdCdcclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxuLy9jb25zdCBsb2cgPSBMb2dGYWN0b3J5LmdldChcIkluZGV4XCIpO1xyXG4vL2NvbnN0IGh0dHAgPSBuZXcgSHR0cEJhc2UoKVxyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgU3RhdHVzQmFyOiBhcHAuZ2xvYmFsRGF0YS5TdGF0dXNCYXIsXHJcbiAgICAgICAgQ3VzdG9tQmFyOiBhcHAuZ2xvYmFsRGF0YS5DdXN0b21CYXIsICAgIFxyXG4gICAgICAgIGlzTWFwOiBmYWxzZSwgICAgXHJcbiAgICAgICAgcGk6IDEsXHJcbiAgICAgICAgcHM6IDEwXHJcbiAgICB9LCBcclxuICAgIG9uTG9hZCgpIHsgXHJcblxyXG4gICAgfSxcclxuICAgIGlzTWFwKGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICBpc01hcDogZS5kZXRhaWwudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KSJdfQ==
