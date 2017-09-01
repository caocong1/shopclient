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
            "id": 9,
            "navname": "工程报修",
            "status": 1,
            "icon": "fa-wrench",
            "page": "repair",
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
        "id": 9,
        "text": "工程报修",
        "status": 1,
        "icon": "fa-newspaper-o",
        "page": "repair",
        "children": []
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