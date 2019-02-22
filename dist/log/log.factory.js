"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_config_1 = require("./log.config");
var log_interface_1 = require("./log.interface");
var log_console_1 = require("./log.console");
var LogFactory = (function () {
    function LogFactory() {
    }
    LogFactory.get = function (name) {
        var result;
        var key;
        if (!!name && typeof name === 'string') {
            key = !!name ? name : LogFactory.DEFAULT_KEY;
        }
        else {
            key = LogFactory.DEFAULT_KEY;
        }
        if (!LogFactory.logs[key]) {
            var lschema = log_config_1.logConfig[key];
            if (!lschema) {
                lschema = log_config_1.logConfig[LogFactory.DEFAULT_KEY];
            }
            var level = !!lschema.level ? lschema.level : 'on';
            var type = !!lschema.type ? lschema.type : 'console';
            if (type === 'console') {
                result = new log_console_1.ConsoleLog({
                    name: key,
                    level: LogFactory.transLevel(level)
                });
                LogFactory.logs[key] = result;
            }
        }
        else {
            result = LogFactory.logs[key];
        }
        return result;
    };
    LogFactory.transLevel = function (level) {
        var result = log_interface_1.Level.OFF;
        switch (level.toLowerCase()) {
            case 'on':
                result = log_interface_1.Level.ON;
                break;
            case 'info':
                result = log_interface_1.Level.INFO;
                break;
            case 'warn':
                result = log_interface_1.Level.WARN;
                break;
            case 'error':
                result = log_interface_1.Level.ERROR;
                break;
            default:
                result = log_interface_1.Level.OFF;
                break;
        }
        return result;
    };
    LogFactory.logs = {};
    LogFactory.DEFAULT_KEY = 'default';
    return LogFactory;
}());
exports.LogFactory = LogFactory;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy9sb2cuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzQztBQUN0QyxpREFBMkM7QUFDM0MsNkNBQXdDO0FBS3hDO0lBQUE7SUF1REEsQ0FBQztJQW5EVSxjQUFHLEdBQVYsVUFBVyxJQUFZO1FBQ25CLElBQUksTUFBWSxDQUFDO1FBQ2pCLElBQUksR0FBVyxDQUFDO1FBQ2hCLElBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQTtTQUMvQzthQUFLO1lBQ0YsR0FBRyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUE7U0FDL0I7UUFDRCxJQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQztZQUNyQixJQUFJLE9BQU8sR0FBRyxzQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ1QsT0FBTyxHQUFHLHNCQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzlDO1lBRUQsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyRCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3ZELElBQUcsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDbkIsTUFBTSxHQUFHLElBQUksd0JBQVUsQ0FBQztvQkFDcEIsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsS0FBSyxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2lCQUN0QyxDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDakM7U0FDSjthQUFNO1lBQ0gsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRWMscUJBQVUsR0FBekIsVUFBMEIsS0FBYTtRQUNuQyxJQUFJLE1BQU0sR0FBVSxxQkFBSyxDQUFDLEdBQUcsQ0FBQztRQUM5QixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN6QixLQUFLLElBQUk7Z0JBQ0wsTUFBTSxHQUFHLHFCQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNsQixNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLE1BQU0sR0FBRyxxQkFBSyxDQUFDLElBQUksQ0FBQztnQkFDcEIsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxNQUFNLEdBQUcscUJBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLE1BQU07WUFDVixLQUFLLE9BQU87Z0JBQ1IsTUFBTSxHQUFHLHFCQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNyQixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTSxHQUFHLHFCQUFLLENBQUMsR0FBRyxDQUFBO2dCQUNsQixNQUFNO1NBQ2I7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBckRjLGVBQUksR0FBWSxFQUFFLENBQUM7SUFDbkIsc0JBQVcsR0FBVyxTQUFTLENBQUM7SUFxRG5ELGlCQUFDO0NBdkRELEFBdURDLElBQUE7QUF2RFksZ0NBQVUiLCJmaWxlIjoibG9nL2xvZy5mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb2dDb25maWd9IGZyb20gJy4vbG9nLmNvbmZpZydcclxuaW1wb3J0IHtJTG9nLCBMZXZlbH0gZnJvbSAnLi9sb2cuaW50ZXJmYWNlJ1xyXG5pbXBvcnQge0NvbnNvbGVMb2d9IGZyb20gJy4vbG9nLmNvbnNvbGUnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvZ0xpc3Qge1xyXG4gICAgW2tleTogc3RyaW5nXTogSUxvZ1xyXG59XHJcbmV4cG9ydCBjbGFzcyBMb2dGYWN0b3J5IHtcclxuICAgIHByaXZhdGUgc3RhdGljIGxvZ3M6IExvZ0xpc3QgPSB7fTtcclxuICAgIHByaXZhdGUgc3RhdGljIERFRkFVTFRfS0VZOiBzdHJpbmcgPSAnZGVmYXVsdCc7XHJcblxyXG4gICAgc3RhdGljIGdldChuYW1lOiBzdHJpbmcpOiBJTG9nIHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBJTG9nO1xyXG4gICAgICAgIGxldCBrZXk6IHN0cmluZztcclxuICAgICAgICBpZighIW5hbWUgJiYgdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGtleSA9ICEhbmFtZSA/IG5hbWUgOiBMb2dGYWN0b3J5LkRFRkFVTFRfS0VZXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBrZXkgPSBMb2dGYWN0b3J5LkRFRkFVTFRfS0VZXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFMb2dGYWN0b3J5LmxvZ3Nba2V5XSl7XHJcbiAgICAgICAgICAgIGxldCBsc2NoZW1hID0gbG9nQ29uZmlnW2tleV07XHJcbiAgICAgICAgICAgIGlmKCFsc2NoZW1hKSB7XHJcbiAgICAgICAgICAgICAgICBsc2NoZW1hID0gbG9nQ29uZmlnW0xvZ0ZhY3RvcnkuREVGQVVMVF9LRVldXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gISFsc2NoZW1hLmxldmVsID8gbHNjaGVtYS5sZXZlbCA6ICdvbic7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAhIWxzY2hlbWEudHlwZSA/IGxzY2hlbWEudHlwZSA6ICdjb25zb2xlJztcclxuICAgICAgICAgICAgaWYodHlwZSA9PT0gJ2NvbnNvbGUnKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgQ29uc29sZUxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsOiBMb2dGYWN0b3J5LnRyYW5zTGV2ZWwobGV2ZWwpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIExvZ0ZhY3RvcnkubG9nc1trZXldID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gTG9nRmFjdG9yeS5sb2dzW2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHRyYW5zTGV2ZWwobGV2ZWw6IHN0cmluZyk6IExldmVsIHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBMZXZlbCA9IExldmVsLk9GRjtcclxuICAgICAgICBzd2l0Y2ggKGxldmVsLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgY2FzZSAnb24nOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IExldmVsLk9OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2luZm8nOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IExldmVsLklORk87XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnd2Fybic6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBMZXZlbC5XQVJOO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IExldmVsLkVSUk9SO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBMZXZlbC5PRkZcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59Il19
