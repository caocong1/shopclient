nav =
    [{
        "id": 0,
        "text": "首页",
        "status": 1,
        "icon": "fa fa-tachometer",
        "page": "widget",
        "children": []
    },
        {
            "id": 1,
            "text": "通知公告",
            "status": 1,
            "icon": "fa fa-envelope-open",
            "page": "notice",
            "children": []
        },
        {
            "id": 2,
            "text": "财务单据",
            "status": 1,
            "icon": "fa fa-newspaper-o",
            "page": "settlement",
            "children": []
        },
        {
            "id": 9,
            "text": "工程报修",
            "status": 1,
            "icon": "fa fa-wrench",
            "page": "repair",
            "children": []
        },
        {
            "id": 10,
            "text": "客户投诉",
            "status": 1,
            "icon": "fa fa-headphones",
            "page": "complain",
            "children": []
        },
        {
            "id": 3,
            "text": "店铺销售",
            "status": 1,
            "icon": "fa fa-shopping-bag",
            "children": [
                {
                    "id": 4,
                    "text": "销售报表",
                    "status": 1,
                    "icon": "fa fa-bar-chart",
                    "page": "chart",
                    "children": []
                },
                {
                    "id": 5,
                    "text": "销售调帐",
                    "status": 1,
                    "icon": "fa fa-jpy",
                    "page": "adjust",
                    "children": []
                },
                {
                    "id": 12,
                    "text": "销售补录",
                    "status": 1,
                    "icon": "fa fa-jpy",
                    "page": "amountadd",
                    "children": []
                }
            ]
        },
        {
            "id": 6,
            "text": "系统管理",
            "status": 1,
            "icon": "fa fa-android",
            "children": [
                {
                    "id": 7,
                    "text": "店铺人员管理",
                    "status": 1,
                    "icon": "fa fa-users",
                    "page": "person",
                    "children": []
                },
                {
                    "id": 8,
                    "text": "系统设置",
                    "status": 1,
                    "icon": "fa fa-cog",
                    "page": "system",
                    "children": []
                }
            ]
        }
    ]
;

pickercn = {
    applyLabel: '确认',
    cancelLabel: '取消',
    fromLabel: '起始时间',
    toLabel: '结束时间',
    customRangeLabel: '自定义',
    firstDay: 1
};