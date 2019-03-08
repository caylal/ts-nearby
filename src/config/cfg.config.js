"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logConfig = {
    "default": {
        "type": "console",
        "level": "on"
    },
    "AppStart": {
        "level": "on"
    },
    "Authorize": {
        "level": "on"
    },
    "Cart": {
        "level": "on"
    },
    "Category": {
        "level": "on"
    },
    "Goods": {
        "level": "on"
    },
    "Index": {
        "level": "on"
    },
    "Location": {
        "level": "on"
    },
    "Member": {
        "level": "on"
    },
    "Neighbor": {
        "level": "on"
    },
    "Orders": {
        "level": "on"
    },
    "Payment": {
        "level": "on"
    },
    "Search": {
        "level": "on"
    },
    "HttpProxy": {
        "level": "on"
    },
    "Service": {
        "level": "on"
    }
};
exports.Auth = {
    "enable": true,
    "login": "get auth/login/wx",
    "refreshTokenUrl": "get auth/refresh",
};
exports.apiPrefix = "https://www.lifenearby.cn:8081/api";
exports.cfgMock = {
    "enable": true,
    "match": ["^[\\s\\S]*$"]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2ZnLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNmZy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRYSxRQUFBLFNBQVMsR0FBWTtJQUM5QixTQUFTLEVBQUc7UUFDVixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBQyxJQUFJO0tBQ2I7SUFDRCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxJQUFJO0tBQ2Q7Q0FDRixDQUFBO0FBRVksUUFBQSxJQUFJLEdBQUc7SUFDbEIsUUFBUSxFQUFFLElBQUk7SUFDZCxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLGlCQUFpQixFQUFFLGtCQUFrQjtDQUN0QyxDQUFBO0FBQ1ksUUFBQSxTQUFTLEdBQUcsb0NBQW9DLENBQUE7QUFFaEQsUUFBQSxPQUFPLEdBQUc7SUFDckIsUUFBUSxFQUFFLElBQUk7SUFDZCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7Q0FDekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnRlcmZhY2UgSXR5cGV7XHJcbiAgdHlwZT86IHN0cmluZyxcclxuICBsZXZlbDogc3RyaW5nXHJcbn1cclxuaW50ZXJmYWNlIElDb25maWcge1xyXG4gIFtrZXk6IHN0cmluZ106IEl0eXBlXHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ0NvbmZpZzogSUNvbmZpZyA9IHsgICAgXHJcbiAgICBcImRlZmF1bHRcIiA6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiY29uc29sZVwiLFxyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiQXBwU3RhcnRcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiQXV0aG9yaXplXCI6IHtcclxuICAgICAgXCJsZXZlbFwiOlwib25cIlxyXG4gICAgfSxcclxuICAgIFwiQ2FydFwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJDYXRlZ29yeVwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJHb29kc1wiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJJbmRleFwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJMb2NhdGlvblwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJNZW1iZXJcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiTmVpZ2hib3JcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiT3JkZXJzXCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIlBheW1lbnRcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiU2VhcmNoXCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIkh0dHBQcm94eVwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJTZXJ2aWNlXCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IEF1dGggPSB7XHJcbiAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgXCJsb2dpblwiOiBcImdldCBhdXRoL2xvZ2luL3d4XCIsXHJcbiAgICBcInJlZnJlc2hUb2tlblVybFwiOiBcImdldCBhdXRoL3JlZnJlc2hcIixcclxuICB9XHJcbiAgZXhwb3J0IGNvbnN0IGFwaVByZWZpeCA9IFwiaHR0cHM6Ly93d3cubGlmZW5lYXJieS5jbjo4MDgxL2FwaVwiXHJcblxyXG4gIGV4cG9ydCBjb25zdCBjZmdNb2NrID0ge1xyXG4gICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgIFwibWF0Y2hcIjogW1wiXltcXFxcc1xcXFxTXSokXCJdXHJcbiAgfVxyXG4gIFxyXG4gICJdfQ==