"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var log_base_1 = require("./log.base");
var ConsoleLog = (function (_super) {
    __extends(ConsoleLog, _super);
    function ConsoleLog(options) {
        return _super.call(this, options) || this;
    }
    ConsoleLog.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.rebuildArguments(arguments);
        this.isErrorEnabled() && console.error.apply(console, arguments);
    };
    ConsoleLog.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.rebuildArguments(arguments);
        this.isWarnEnabled() && console.warn.apply(console, arguments);
    };
    ConsoleLog.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.rebuildArguments(arguments);
        this.isInfoEnabled() && console.info.apply(console, arguments);
    };
    ConsoleLog.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.rebuildArguments(arguments);
        this.isLogEnabled() && console.log.apply(console, arguments);
    };
    return ConsoleLog;
}(log_base_1.LogBase));
exports.ConsoleLog = ConsoleLog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ3MvbG9nLmNvbnNvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQW9DO0FBRXBDO0lBQWdDLDhCQUFPO0lBQ25DLG9CQUFZLE9BQWdCO2VBQ3hCLGtCQUFNLE9BQU8sQ0FBQztJQUNsQixDQUFDO0lBRU0sMEJBQUssR0FBWixVQUFhLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQU8sU0FBUyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNNLHlCQUFJLEdBQVgsVUFBWSxPQUFhO1FBQUUsd0JBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4Qix1Q0FBd0I7O1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFPLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDTSx5QkFBSSxHQUFYLFVBQVksT0FBYTtRQUFFLHdCQUF3QjthQUF4QixVQUF3QixFQUF4QixxQkFBd0IsRUFBeEIsSUFBd0I7WUFBeEIsdUNBQXdCOztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBTyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ00sd0JBQUcsR0FBVixVQUFXLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQU8sU0FBUyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsQ0FyQitCLGtCQUFPLEdBcUJ0QztBQXJCWSxnQ0FBVSIsImZpbGUiOiJsb2dzL2xvZy5jb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4vbG9nLmludGVyZmFjZSdcclxuaW1wb3J0IHsgTG9nQmFzZSB9IGZyb20gJy4vbG9nLmJhc2UnXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZUxvZyBleHRlbmRzIExvZ0Jhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVycm9yKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSl7XHJcbiAgICAgICAgdGhpcy5yZWJ1aWxkQXJndW1lbnRzKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5pc0Vycm9yRW5hYmxlZCgpICYmIGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgPGFueT5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHdhcm4obWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKXtcclxuICAgICAgICB0aGlzLnJlYnVpbGRBcmd1bWVudHMoYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLmlzV2FybkVuYWJsZWQoKSAmJiBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgPGFueT5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluZm8obWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKXtcclxuICAgICAgICB0aGlzLnJlYnVpbGRBcmd1bWVudHMoYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLmlzSW5mb0VuYWJsZWQoKSAmJiBjb25zb2xlLmluZm8uYXBwbHkoY29uc29sZSwgPGFueT5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGxvZyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pe1xyXG4gICAgICAgIHRoaXMucmVidWlsZEFyZ3VtZW50cyhhcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuaXNMb2dFbmFibGVkKCkgJiYgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgPGFueT5hcmd1bWVudHMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
