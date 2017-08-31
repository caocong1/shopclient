nav =
    [
        {
            "id": 1,
            "navname": "通知公告",
            "status": 1,
            "icon": "fa-envelope-open",
            "page": "notice",
			"subnav": []
        },
        {
            "id": 2,
            "navname": "通知单",
            "status": 1,
            "icon": "fa-newspaper-o",
            "page": "settlement",
			"subnav": []
        },
        {
            "id": 3,
            "navname": "店铺销售",
            "status": 1,
            "icon": "fa-shopping-bag",
            "subnav": [
                {
                    "id": 4,
                    "navname": "销售报表",
                    "status": 1,
                    "icon": "fa-bar-chart",
                    "page": "chart",
					"subnav": []
                },
                {
                    "id": 5,
                    "navname": "销售补录",
                    "status": 1,
                    "icon": "fa-jpy",
                    "page": "adjust",
					"subnav": []
                }
            ]
        },
        {
            "id": 6,
            "navname": "系统管理",
            "status": 1,
            "icon": "fa-android",
            "subnav": [
                {
                    "id": 7,
                    "navname": "店铺人员管理",
                    "status": 1,
                    "icon": "fa-users",
                    "page": "person",
					"subnav": []
                },
                {
                    "id": 8,
                    "navname": "系统设置",
                    "status": 1,
                    "icon": "fa-cog",
                    "page": "system",
					"subnav": []
                }
            ]
        }
    ]
;

var navright =
[
    {
        "id":1,
        "text":"通知公告",
        "status":1,
        "icon":"fa fa-envelope-open",
        "page":"notice",
        "children":[

        ]
    },
    {
        "id":2,
        "text":"通知单",
        "status":1,
        "icon":"fa fa-newspaper-o",
        "page":"settlement",
        "children":[

        ]
    },
    {
        "id":3,
        "text":"店铺销售",
        "status":1,
        "icon":"fa fa-shopping-bag",
        "state":{
            "opened":"true"
        },
        "children":[
            {
                "id":4,
                "text":"销售报表",
                "status":1,
                "icon":"fa fa-bar-chart",
                "page":"chart",
                "children":[

                ]
            },
            {
                "id":5,
                "text":"销售补录",
                "status":1,
                "icon":"fa fa-jpy",
                "page":"adjust",
                "children":[

                ]
            }
        ]
    },
    {
        "id":6,
        "text":"系统管理",
        "status":1,
        "icon":"fa fa-android",
        "state":{
            "opened":"true"
        },
        "children":[
            {
                "id":7,
                "text":"店铺人员管理",
                "status":1,
                "icon":"fa fa-users",
                "page":"person",
                "children":[

                ]
            },
            {
                "id":8,
                "text":"系统设置",
                "status":1,
                "icon":"fa fa-cog",
                "page":"system",
                "children":[

                ]
            }
        ]
    }
]
;

var heads = "";
    heads += "<div id=\"navbar\" class=\"navbar navbar-default ace-save-state navbar-fixed-top\"><div class=\"navbar-container ace-save-state\" id=\"navbar-container\"><button type=\"button\" class=\"navbar-toggle menu-toggler pull-left\" id=\"menu-toggler\" data-target=\"#sidebar\"><span class=\"sr-only\">Toggle sidebar<\/span> <span class=\"icon-bar\"><\/span> <span class=\"icon-bar\"><\/span> <span class=\"icon-bar\"><\/span><\/button><div class=\"navbar-header pull-left\"><a href=\"#\" class=\"navbar-brand\"><small><i class=\"fa fa-leaf\"><\/i> Noah商户系统<\/small><\/a><\/div><div class=\"navbar-buttons navbar-header pull-right\" role=\"navigation\"><ul class=\"nav ace-nav\"><li class=\"blue dropdown-modal\"><a data-toggle=\"dropdown\" href=\"#\" class=\"dropdown-toggle\"><img class=\"nav-user-photo\" src=\"img/1F0101.png\" alt=\"XX店铺\"> <span class=\"user-info\"><\/span> <i class=\"ace-icon fa fa-caret-down\"><\/i><\/a><ul class=\"user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close\"><li><a href=\"#\"><i class=\"ace-icon fa fa-cog\"><\/i> 设置<\/a><\/li><li><a href=\"#\"><i class=\"ace-icon fa fa-user\"><\/i> 个人信息<\/a><\/li><li><a href=\"#\"><i class=\"ace-icon fa fa-briefcase\"><\/i> 店铺信息<\/a><\/li><li class=\"divider\"><\/li><li><a href=\"javascript:loginout()\"><i class=\"ace-icon fa fa-power-off\"><\/i> 登出<\/a><\/li><\/ul><\/li><\/ul><\/div><\/div><\/div><div id=\"main-container\" class=\"main-container ace-save-state\"><div id=\"sidebar\" class=\"sidebar responsive ace-save-state\"><\/div><div class=\"main-content\"><div class=\"main-content-inner\"><div class=\"page-content\"><div class=\"page-header\"><h1><\/h1><\/div><div class=\"row\"><div class=\"col-sm-12\" id=\"main\"><\/div><\/div><\/div><\/div><\/div><div class=\"footer\"><div class=\"footer-inner\"><div class=\"footer-content\"><span class=\"bigger-120\"><span class=\"green bolder\">Noah<\/span> Application &copy; 2017-2017<\/span><\/div><\/div><\/div><a href=\"#\" id=\"btn-scroll-up\" class=\"btn-scroll-up btn btn-sm btn-inverse\"><i class=\"ace-icon fa fa-angle-double-up icon-only bigger-110\"><\/i><\/a><\/div>\n";