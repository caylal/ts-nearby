"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_interface_1 = require("./log.interface");
var util_1 = require("../util");
var LogBase = (function () {
    function LogBase(options) {
        var _this = this;
        this.isErrorEnabled = function () { return _this.level >= log_interface_1.Level.ERROR; };
        this.isWarnEnabled = function () { return _this.level >= log_interface_1.Level.WARN; };
        this.isInfoEnabled = function () { return _this.level >= log_interface_1.Level.INFO; };
        this.isLogEnabled = function () { return _this.level >= log_interface_1.Level.ON; };
        var name = options.name, level = options.level;
        this._name = name;
        this._level = level;
    }
    Object.defineProperty(LogBase.prototype, "level", {
        get: function () { return this._level; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogBase.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    LogBase.prototype.rebuildArguments = function (arg) {
        arg.length += 1;
        var index = arg.length - 2, insertIndex = index;
        while (index >= 0) {
            if (insertIndex > 0) {
                insertIndex = index - 2;
                if (insertIndex < 0) {
                    insertIndex = 0;
                }
            }
            arg[index + 1] = arg[index];
            if (index === insertIndex) {
                arg[index] = this.name + ' ' + util_1.formatTime(new Date()) + ' ' + this.getLevel(this.level) + ':';
                break;
            }
            index--;
        }
    };
    LogBase.prototype.getLevel = function (level) {
        var result = 'log';
        switch (level) {
            case log_interface_1.Level.ERROR:
                result = "error";
                break;
            case log_interface_1.Level.INFO:
                result = "info";
                break;
            case log_interface_1.Level.WARN:
                result = "warn";
                break;
            default:
                result = "log";
                break;
        }
        return result;
    };
    return LogBase;
}());
exports.LogBase = LogBase;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy9sb2cuYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFzRDtBQUN0RCxnQ0FBb0M7QUFJcEM7SUFHSSxpQkFBWSxPQUFnQjtRQUE1QixpQkFJQztRQVdILG1CQUFjLEdBQUcsY0FBZSxPQUFBLEtBQUksQ0FBQyxLQUFLLElBQUkscUJBQUssQ0FBQyxLQUFLLEVBQXpCLENBQXlCLENBQUM7UUFDMUQsa0JBQWEsR0FBRyxjQUFlLE9BQUEsS0FBSSxDQUFDLEtBQUssSUFBSSxxQkFBSyxDQUFDLElBQUksRUFBeEIsQ0FBd0IsQ0FBQztRQUN4RCxrQkFBYSxHQUFHLGNBQWUsT0FBQSxLQUFJLENBQUMsS0FBSyxJQUFJLHFCQUFLLENBQUMsSUFBSSxFQUF4QixDQUF3QixDQUFDO1FBRXhELGlCQUFZLEdBQUcsY0FBZSxPQUFBLEtBQUksQ0FBQyxLQUFLLElBQUkscUJBQUssQ0FBQyxFQUFFLEVBQXRCLENBQXNCLENBQUM7UUFsQnpDLElBQUEsbUJBQUksRUFBRSxxQkFBSyxDQUFhO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFSCxzQkFBSSwwQkFBSzthQUFULGNBQXFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzFDLHNCQUFJLHlCQUFJO2FBQVIsY0FBcUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFjL0Isa0NBQWdCLEdBQTFCLFVBQTJCLEdBQWU7UUFDeEMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3hCLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDdEIsT0FBTSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUcsV0FBVyxHQUFHLENBQUMsRUFBRTtnQkFDbEIsV0FBVyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUcsV0FBVyxHQUFHLENBQUMsRUFBRTtvQkFDbEIsV0FBVyxHQUFHLENBQUMsQ0FBQztpQkFDakI7YUFDRjtZQUVELEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzNCLElBQUcsS0FBSyxLQUFLLFdBQVcsRUFBQztnQkFDdkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLGlCQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQzlGLE1BQU07YUFDUDtZQUNELEtBQUssRUFBRyxDQUFDO1NBQ1Y7SUFDSCxDQUFDO0lBRVMsMEJBQVEsR0FBbEIsVUFBbUIsS0FBWTtRQUM3QixJQUFJLE1BQU0sR0FBVyxLQUFLLENBQUM7UUFDM0IsUUFBTyxLQUFLLEVBQUU7WUFDWixLQUFLLHFCQUFLLENBQUMsS0FBSztnQkFDZCxNQUFNLEdBQUcsT0FBTyxDQUFDO2dCQUNqQixNQUFNO1lBQ1IsS0FBSyxxQkFBSyxDQUFDLElBQUk7Z0JBQ2IsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDaEIsTUFBTTtZQUNSLEtBQUsscUJBQUssQ0FBQyxJQUFJO2dCQUNiLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ2hCLE1BQU07WUFDUjtnQkFDRSxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNmLE1BQU07U0FDVDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0EvREEsQUErREMsSUFBQTtBQS9EcUIsMEJBQU8iLCJmaWxlIjoibG9nL2xvZy5iYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUxvZywgT3B0aW9ucywgTGV2ZWwgfSBmcm9tICcuL2xvZy5pbnRlcmZhY2UnXHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tICcuLi91dGlsJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nQmFzZSBpbXBsZW1lbnRzIElMb2cge1xyXG4gICAgcHJvdGVjdGVkIF9sZXZlbDogTGV2ZWw7XHJcbiAgICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgICAgICBsZXQgeyBuYW1lLCBsZXZlbCB9ID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9sZXZlbCA9IGxldmVsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgZ2V0IGxldmVsKCk6IExldmVsIHsgcmV0dXJuIHRoaXMuX2xldmVsOyB9XHJcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cclxuXHJcbiAgYWJzdHJhY3QgZXJyb3IobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZFxyXG4gIGFic3RyYWN0IHdhcm4obWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZFxyXG4gIGFic3RyYWN0IGluZm8obWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZFxyXG4gIC8vIGFic3RyYWN0IGRlYnVnKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSlcclxuICBhYnN0cmFjdCBsb2cobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZFxyXG5cclxuICBpc0Vycm9yRW5hYmxlZCA9ICgpOiBib29sZWFuID0+IHRoaXMubGV2ZWwgPj0gTGV2ZWwuRVJST1I7XHJcbiAgaXNXYXJuRW5hYmxlZCA9ICgpOiBib29sZWFuID0+IHRoaXMubGV2ZWwgPj0gTGV2ZWwuV0FSTjtcclxuICBpc0luZm9FbmFibGVkID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5sZXZlbCA+PSBMZXZlbC5JTkZPO1xyXG4gIC8vIGlzRGVidWdFbmFibGVkID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5sZXZlbCA+PSBMZXZlbC5ERUJVRztcclxuICBpc0xvZ0VuYWJsZWQgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmxldmVsID49IExldmVsLk9OO1xyXG5cclxuICBwcm90ZWN0ZWQgcmVidWlsZEFyZ3VtZW50cyhhcmc6IElBcmd1bWVudHMpe1xyXG4gICAgYXJnLmxlbmd0aCArPSAxO1xyXG4gICAgbGV0IGluZGV4ID0gYXJnLmxlbmd0aCAtIDIsXHJcbiAgICAgIGluc2VydEluZGV4ID0gaW5kZXg7XHJcbiAgICB3aGlsZShpbmRleCA+PSAwKSB7XHJcbiAgICAgIGlmKGluc2VydEluZGV4ID4gMCkge1xyXG4gICAgICAgIGluc2VydEluZGV4ID0gaW5kZXggLSAyO1xyXG4gICAgICAgIGlmKGluc2VydEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgaW5zZXJ0SW5kZXggPSAwOyAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBhcmdbaW5kZXggKyAxXSA9IGFyZ1tpbmRleF1cclxuICAgICAgaWYoaW5kZXggPT09IGluc2VydEluZGV4KXtcclxuICAgICAgICBhcmdbaW5kZXhdID0gdGhpcy5uYW1lICsgJyAnICsgZm9ybWF0VGltZShuZXcgRGF0ZSgpKSArICcgJyArIHRoaXMuZ2V0TGV2ZWwodGhpcy5sZXZlbCkgKyAnOic7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaW5kZXggLS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0TGV2ZWwobGV2ZWw6IExldmVsKTogc3RyaW5ne1xyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nID0gJ2xvZyc7XHJcbiAgICBzd2l0Y2gobGV2ZWwpIHtcclxuICAgICAgY2FzZSBMZXZlbC5FUlJPUjpcclxuICAgICAgICByZXN1bHQgPSBcImVycm9yXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTGV2ZWwuSU5GTzpcclxuICAgICAgICByZXN1bHQgPSBcImluZm9cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMZXZlbC5XQVJOOiBcclxuICAgICAgICByZXN1bHQgPSBcIndhcm5cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXN1bHQgPSBcImxvZ1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn0iXX0=
