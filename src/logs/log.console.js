"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmNvbnNvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2cuY29uc29sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBb0M7QUFFcEM7SUFBZ0MsOEJBQU87SUFDbkMsb0JBQVksT0FBZ0I7ZUFDeEIsa0JBQU0sT0FBTyxDQUFDO0lBQ2xCLENBQUM7SUFFTSwwQkFBSyxHQUFaLFVBQWEsT0FBYTtRQUFFLHdCQUF3QjthQUF4QixVQUF3QixFQUF4QixxQkFBd0IsRUFBeEIsSUFBd0I7WUFBeEIsdUNBQXdCOztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBTyxTQUFTLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ00seUJBQUksR0FBWCxVQUFZLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQU8sU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNNLHlCQUFJLEdBQVgsVUFBWSxPQUFhO1FBQUUsd0JBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4Qix1Q0FBd0I7O1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFPLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDTSx3QkFBRyxHQUFWLFVBQVcsT0FBYTtRQUFFLHdCQUF3QjthQUF4QixVQUF3QixFQUF4QixxQkFBd0IsRUFBeEIsSUFBd0I7WUFBeEIsdUNBQXdCOztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBTyxTQUFTLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBckJELENBQWdDLGtCQUFPLEdBcUJ0QztBQXJCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuL2xvZy5pbnRlcmZhY2UnXHJcbmltcG9ydCB7IExvZ0Jhc2UgfSBmcm9tICcuL2xvZy5iYXNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnNvbGVMb2cgZXh0ZW5kcyBMb2dCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcnJvcihtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pe1xyXG4gICAgICAgIHRoaXMucmVidWlsZEFyZ3VtZW50cyhhcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuaXNFcnJvckVuYWJsZWQoKSAmJiBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIDxhbnk+YXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3YXJuKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSl7XHJcbiAgICAgICAgdGhpcy5yZWJ1aWxkQXJndW1lbnRzKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5pc1dhcm5FbmFibGVkKCkgJiYgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIDxhbnk+YXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpbmZvKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSl7XHJcbiAgICAgICAgdGhpcy5yZWJ1aWxkQXJndW1lbnRzKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5pc0luZm9FbmFibGVkKCkgJiYgY29uc29sZS5pbmZvLmFwcGx5KGNvbnNvbGUsIDxhbnk+YXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBsb2cobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKXtcclxuICAgICAgICB0aGlzLnJlYnVpbGRBcmd1bWVudHMoYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLmlzTG9nRW5hYmxlZCgpICYmIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIDxhbnk+YXJndW1lbnRzKTtcclxuICAgIH1cclxufVxyXG4iXX0=