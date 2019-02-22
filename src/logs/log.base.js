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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2cuYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFzRDtBQUN0RCxnQ0FBb0M7QUFJcEM7SUFHSSxpQkFBWSxPQUFnQjtRQUE1QixpQkFJQztRQVdILG1CQUFjLEdBQUcsY0FBZSxPQUFBLEtBQUksQ0FBQyxLQUFLLElBQUkscUJBQUssQ0FBQyxLQUFLLEVBQXpCLENBQXlCLENBQUM7UUFDMUQsa0JBQWEsR0FBRyxjQUFlLE9BQUEsS0FBSSxDQUFDLEtBQUssSUFBSSxxQkFBSyxDQUFDLElBQUksRUFBeEIsQ0FBd0IsQ0FBQztRQUN4RCxrQkFBYSxHQUFHLGNBQWUsT0FBQSxLQUFJLENBQUMsS0FBSyxJQUFJLHFCQUFLLENBQUMsSUFBSSxFQUF4QixDQUF3QixDQUFDO1FBRXhELGlCQUFZLEdBQUcsY0FBZSxPQUFBLEtBQUksQ0FBQyxLQUFLLElBQUkscUJBQUssQ0FBQyxFQUFFLEVBQXRCLENBQXNCLENBQUM7UUFsQnpDLElBQUEsbUJBQUksRUFBRSxxQkFBSyxDQUFhO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFSCxzQkFBSSwwQkFBSzthQUFULGNBQXFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzFDLHNCQUFJLHlCQUFJO2FBQVIsY0FBcUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFjL0Isa0NBQWdCLEdBQTFCLFVBQTJCLEdBQWU7UUFDeEMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3hCLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDdEIsT0FBTSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUcsV0FBVyxHQUFHLENBQUMsRUFBRTtnQkFDbEIsV0FBVyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUcsV0FBVyxHQUFHLENBQUMsRUFBRTtvQkFDbEIsV0FBVyxHQUFHLENBQUMsQ0FBQztpQkFDakI7YUFDRjtZQUVELEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzNCLElBQUcsS0FBSyxLQUFLLFdBQVcsRUFBQztnQkFDdkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLGlCQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQzlGLE1BQU07YUFDUDtZQUNELEtBQUssRUFBRyxDQUFDO1NBQ1Y7SUFDSCxDQUFDO0lBRVMsMEJBQVEsR0FBbEIsVUFBbUIsS0FBWTtRQUM3QixJQUFJLE1BQU0sR0FBVyxLQUFLLENBQUM7UUFDM0IsUUFBTyxLQUFLLEVBQUU7WUFDWixLQUFLLHFCQUFLLENBQUMsS0FBSztnQkFDZCxNQUFNLEdBQUcsT0FBTyxDQUFDO2dCQUNqQixNQUFNO1lBQ1IsS0FBSyxxQkFBSyxDQUFDLElBQUk7Z0JBQ2IsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDaEIsTUFBTTtZQUNSLEtBQUsscUJBQUssQ0FBQyxJQUFJO2dCQUNiLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ2hCLE1BQU07WUFDUjtnQkFDRSxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNmLE1BQU07U0FDVDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQS9ERCxJQStEQztBQS9EcUIsMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTG9nLCBPcHRpb25zLCBMZXZlbCB9IGZyb20gJy4vbG9nLmludGVyZmFjZSdcclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uL3V0aWwnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dCYXNlIGltcGxlbWVudHMgSUxvZyB7XHJcbiAgICBwcm90ZWN0ZWQgX2xldmVsOiBMZXZlbDtcclxuICAgIHByb3RlY3RlZCBfbmFtZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgICAgIGxldCB7IG5hbWUsIGxldmVsIH0gPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2xldmVsID0gbGV2ZWw7XHJcbiAgICB9XHJcbiAgICBcclxuICBnZXQgbGV2ZWwoKTogTGV2ZWwgeyByZXR1cm4gdGhpcy5fbGV2ZWw7IH1cclxuICBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxyXG5cclxuICBhYnN0cmFjdCBlcnJvcihtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkXHJcbiAgYWJzdHJhY3Qgd2FybihtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkXHJcbiAgYWJzdHJhY3QgaW5mbyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkXHJcbiAgLy8gYWJzdHJhY3QgZGVidWcobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKVxyXG4gIGFic3RyYWN0IGxvZyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkXHJcblxyXG4gIGlzRXJyb3JFbmFibGVkID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5sZXZlbCA+PSBMZXZlbC5FUlJPUjtcclxuICBpc1dhcm5FbmFibGVkID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5sZXZlbCA+PSBMZXZlbC5XQVJOO1xyXG4gIGlzSW5mb0VuYWJsZWQgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmxldmVsID49IExldmVsLklORk87XHJcbiAgLy8gaXNEZWJ1Z0VuYWJsZWQgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmxldmVsID49IExldmVsLkRFQlVHO1xyXG4gIGlzTG9nRW5hYmxlZCA9ICgpOiBib29sZWFuID0+IHRoaXMubGV2ZWwgPj0gTGV2ZWwuT047XHJcblxyXG4gIHByb3RlY3RlZCByZWJ1aWxkQXJndW1lbnRzKGFyZzogSUFyZ3VtZW50cyl7XHJcbiAgICBhcmcubGVuZ3RoICs9IDE7XHJcbiAgICBsZXQgaW5kZXggPSBhcmcubGVuZ3RoIC0gMixcclxuICAgICAgaW5zZXJ0SW5kZXggPSBpbmRleDtcclxuICAgIHdoaWxlKGluZGV4ID49IDApIHtcclxuICAgICAgaWYoaW5zZXJ0SW5kZXggPiAwKSB7XHJcbiAgICAgICAgaW5zZXJ0SW5kZXggPSBpbmRleCAtIDI7XHJcbiAgICAgICAgaWYoaW5zZXJ0SW5kZXggPCAwKSB7XHJcbiAgICAgICAgICBpbnNlcnRJbmRleCA9IDA7ICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyZ1tpbmRleCArIDFdID0gYXJnW2luZGV4XVxyXG4gICAgICBpZihpbmRleCA9PT0gaW5zZXJ0SW5kZXgpe1xyXG4gICAgICAgIGFyZ1tpbmRleF0gPSB0aGlzLm5hbWUgKyAnICcgKyBmb3JtYXRUaW1lKG5ldyBEYXRlKCkpICsgJyAnICsgdGhpcy5nZXRMZXZlbCh0aGlzLmxldmVsKSArICc6JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBpbmRleCAtLTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRMZXZlbChsZXZlbDogTGV2ZWwpOiBzdHJpbmd7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSAnbG9nJztcclxuICAgIHN3aXRjaChsZXZlbCkge1xyXG4gICAgICBjYXNlIExldmVsLkVSUk9SOlxyXG4gICAgICAgIHJlc3VsdCA9IFwiZXJyb3JcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMZXZlbC5JTkZPOlxyXG4gICAgICAgIHJlc3VsdCA9IFwiaW5mb1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExldmVsLldBUk46IFxyXG4gICAgICAgIHJlc3VsdCA9IFwid2FyblwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJlc3VsdCA9IFwibG9nXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufSJdfQ==