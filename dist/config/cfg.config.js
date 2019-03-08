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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9jZmcuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUWEsUUFBQSxTQUFTLEdBQVk7SUFDOUIsU0FBUyxFQUFHO1FBQ1YsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUMsSUFBSTtLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsSUFBSTtLQUNkO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsSUFBSSxHQUFHO0lBQ2xCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixpQkFBaUIsRUFBRSxrQkFBa0I7Q0FDdEMsQ0FBQTtBQUNZLFFBQUEsU0FBUyxHQUFHLG9DQUFvQyxDQUFBO0FBRWhELFFBQUEsT0FBTyxHQUFHO0lBQ3JCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO0NBQ3pCLENBQUEiLCJmaWxlIjoiY29uZmlnL2NmZy5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW50ZXJmYWNlIEl0eXBle1xyXG4gIHR5cGU/OiBzdHJpbmcsXHJcbiAgbGV2ZWw6IHN0cmluZ1xyXG59XHJcbmludGVyZmFjZSBJQ29uZmlnIHtcclxuICBba2V5OiBzdHJpbmddOiBJdHlwZVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dDb25maWc6IElDb25maWcgPSB7ICAgIFxyXG4gICAgXCJkZWZhdWx0XCIgOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcImNvbnNvbGVcIixcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIkFwcFN0YXJ0XCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIkF1dGhvcml6ZVwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjpcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIkNhcnRcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiQ2F0ZWdvcnlcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiR29vZHNcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiSW5kZXhcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiTG9jYXRpb25cIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiTWVtYmVyXCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIk5laWdoYm9yXCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIk9yZGVyc1wiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJQYXltZW50XCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIlNlYXJjaFwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJIdHRwUHJveHlcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiU2VydmljZVwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBBdXRoID0ge1xyXG4gICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgIFwibG9naW5cIjogXCJnZXQgYXV0aC9sb2dpbi93eFwiLFxyXG4gICAgXCJyZWZyZXNoVG9rZW5VcmxcIjogXCJnZXQgYXV0aC9yZWZyZXNoXCIsXHJcbiAgfVxyXG4gIGV4cG9ydCBjb25zdCBhcGlQcmVmaXggPSBcImh0dHBzOi8vd3d3LmxpZmVuZWFyYnkuY246ODA4MS9hcGlcIlxyXG5cclxuICBleHBvcnQgY29uc3QgY2ZnTW9jayA9IHtcclxuICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICBcIm1hdGNoXCI6IFtcIl5bXFxcXHNcXFxcU10qJFwiXVxyXG4gIH1cclxuICBcclxuICAiXX0=
