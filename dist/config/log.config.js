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
    "login": "auth/login/wx",
    "refreshTokenUrl": "auth/refresh",
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9sb2cuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUWEsUUFBQSxTQUFTLEdBQVk7SUFDOUIsU0FBUyxFQUFHO1FBQ1YsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUMsSUFBSTtLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxJQUFJO0tBQ2Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsSUFBSTtLQUNkO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsSUFBSSxHQUFHO0lBQ2xCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsT0FBTyxFQUFFLGVBQWU7SUFDeEIsaUJBQWlCLEVBQUUsY0FBYztDQUNsQyxDQUFBIiwiZmlsZSI6ImNvbmZpZy9sb2cuY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmludGVyZmFjZSBJdHlwZXtcclxuICB0eXBlPzogc3RyaW5nLFxyXG4gIGxldmVsOiBzdHJpbmdcclxufVxyXG5pbnRlcmZhY2UgSUNvbmZpZyB7XHJcbiAgW2tleTogc3RyaW5nXTogSXR5cGVcclxufVxyXG5leHBvcnQgY29uc3QgbG9nQ29uZmlnOiBJQ29uZmlnID0geyAgICBcclxuICAgIFwiZGVmYXVsdFwiIDoge1xyXG4gICAgICBcInR5cGVcIjogXCJjb25zb2xlXCIsXHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJBcHBTdGFydFwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJBdXRob3JpemVcIjoge1xyXG4gICAgICBcImxldmVsXCI6XCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJDYXJ0XCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIkNhdGVnb3J5XCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIkdvb2RzXCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIkluZGV4XCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIkxvY2F0aW9uXCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIk1lbWJlclwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJOZWlnaGJvclwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJPcmRlcnNcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiUGF5bWVudFwiOiB7XHJcbiAgICAgIFwibGV2ZWxcIjogXCJvblwiXHJcbiAgICB9LFxyXG4gICAgXCJTZWFyY2hcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfSxcclxuICAgIFwiSHR0cFByb3h5XCI6IHtcclxuICAgICAgXCJsZXZlbFwiOiBcIm9uXCJcclxuICAgIH0sXHJcbiAgICBcIlNlcnZpY2VcIjoge1xyXG4gICAgICBcImxldmVsXCI6IFwib25cIlxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgY29uc3QgQXV0aCA9IHtcclxuICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICBcImxvZ2luXCI6IFwiYXV0aC9sb2dpbi93eFwiLFxyXG4gICAgXCJyZWZyZXNoVG9rZW5VcmxcIjogXCJhdXRoL3JlZnJlc2hcIixcclxuICB9XHJcbiAgXHJcbiAgIl19
