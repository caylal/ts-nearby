"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Level;
(function (Level) {
    Level[Level["OFF"] = 0] = "OFF";
    Level[Level["ERROR"] = 1] = "ERROR";
    Level[Level["WARN"] = 2] = "WARN";
    Level[Level["INFO"] = 3] = "INFO";
    Level[Level["ON"] = 4] = "ON";
})(Level = exports.Level || (exports.Level = {}));
var DEFAULT_OPTIONS = {
    name: 'default',
    level: Level.WARN
};
var Options = (function () {
    function Options() {
        this.name = DEFAULT_OPTIONS.name;
        this.level = DEFAULT_OPTIONS.level;
    }
    return Options;
}());
exports.Options = Options;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2xvZy9sb2cuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsSUFBWSxLQU9YO0FBUEQsV0FBWSxLQUFLO0lBQ2IsK0JBQUcsQ0FBQTtJQUNILG1DQUFLLENBQUE7SUFDTCxpQ0FBSSxDQUFBO0lBQ0osaUNBQUksQ0FBQTtJQUVKLDZCQUFFLENBQUE7QUFDTixDQUFDLEVBUFcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBT2hCO0FBQ0QsSUFBTSxlQUFlLEdBQVk7SUFDN0IsSUFBSSxFQUFFLFNBQVM7SUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUk7Q0FDcEIsQ0FBQTtBQUNEO0lBQUE7UUFDSSxTQUFJLEdBQVcsZUFBZSxDQUFDLElBQUksQ0FBQTtRQUNuQyxVQUFLLEdBQVUsZUFBZSxDQUFDLEtBQUssQ0FBQTtJQUN4QyxDQUFDO0lBQUQsY0FBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksMEJBQU8iLCJmaWxlIjoidXRpbHMvbG9nL2xvZy5pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElMb2cge1xyXG4gICAgZXJyb3IobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZFxyXG4gICAgd2FybihtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkXHJcbiAgICBpbmZvKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWRcclxuICAgIGxvZyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExldmVsIHtcclxuICAgIE9GRixcclxuICAgIEVSUk9SLFxyXG4gICAgV0FSTixcclxuICAgIElORk8sXHJcbiAgICAvLyBERUJVRyxcclxuICAgIE9OLFxyXG59XHJcbmNvbnN0IERFRkFVTFRfT1BUSU9OUzogT3B0aW9ucyA9IHtcclxuICAgIG5hbWU6ICdkZWZhdWx0JyxcclxuICAgIGxldmVsOiBMZXZlbC5XQVJOXHJcbn1cclxuZXhwb3J0IGNsYXNzIE9wdGlvbnMge1xyXG4gICAgbmFtZTogc3RyaW5nID0gREVGQVVMVF9PUFRJT05TLm5hbWVcclxuICAgIGxldmVsOiBMZXZlbCA9IERFRkFVTFRfT1BUSU9OUy5sZXZlbFxyXG59Il19
