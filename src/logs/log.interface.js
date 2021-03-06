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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZy5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxJQUFZLEtBT1g7QUFQRCxXQUFZLEtBQUs7SUFDYiwrQkFBRyxDQUFBO0lBQ0gsbUNBQUssQ0FBQTtJQUNMLGlDQUFJLENBQUE7SUFDSixpQ0FBSSxDQUFBO0lBRUosNkJBQUUsQ0FBQTtBQUNOLENBQUMsRUFQVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFPaEI7QUFDRCxJQUFNLGVBQWUsR0FBWTtJQUM3QixJQUFJLEVBQUUsU0FBUztJQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSTtDQUNwQixDQUFBO0FBQ0Q7SUFBQTtRQUNJLFNBQUksR0FBVyxlQUFlLENBQUMsSUFBSSxDQUFBO1FBQ25DLFVBQUssR0FBVSxlQUFlLENBQUMsS0FBSyxDQUFBO0lBQ3hDLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSUxvZyB7XHJcbiAgICBlcnJvcihtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkXHJcbiAgICB3YXJuKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWRcclxuICAgIGluZm8obWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZFxyXG4gICAgbG9nKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTGV2ZWwge1xyXG4gICAgT0ZGLFxyXG4gICAgRVJST1IsXHJcbiAgICBXQVJOLFxyXG4gICAgSU5GTyxcclxuICAgIC8vIERFQlVHLFxyXG4gICAgT04sXHJcbn1cclxuY29uc3QgREVGQVVMVF9PUFRJT05TOiBPcHRpb25zID0ge1xyXG4gICAgbmFtZTogJ2RlZmF1bHQnLFxyXG4gICAgbGV2ZWw6IExldmVsLldBUk5cclxufVxyXG5leHBvcnQgY2xhc3MgT3B0aW9ucyB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBERUZBVUxUX09QVElPTlMubmFtZVxyXG4gICAgbGV2ZWw6IExldmVsID0gREVGQVVMVF9PUFRJT05TLmxldmVsXHJcbn0iXX0=