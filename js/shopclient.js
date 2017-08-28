/*!
 * 商户端js
 */
//导航跳转
function navjump(page, navname) {
    $("#main").load("views/" + page + ".html");
    navbar.find("li").removeClass("active");
    $("#" + page).addClass("active");
    $(".page-header").find("h1").text(navname);
}

//创建导航目录
var navlength = nav.length;
var navbar = $("#sidebar");

function createnav() {
    navbar.append("<ul class=\"nav-list nav\"><li id =\"widget\" class=\"active\"><a href=\"javascript:void(0);\" onclick=\"navjump('widget','首页')\"><i class=\"menu-icon fa fa-tachometer\"></i><span class=\"menu-text\">首页</span></a><b class=\"arrow\"></b></li></ul>");
    var navlist = $(".nav-list");
    for (var i = 0; i < navlength; i++) {
        navlist.append("<li><a href =\"javascript:void(0);\"><i class=\"menu-icon fa " + nav[i].icon + "\"></i><span class=\"menu-text\">" + nav[i].navname + "</span><b class=\"arrow\"></b></a></li>");
        if (jQuery.isEmptyObject(nav[i].subnav)) {
            navbar.find("li:last").attr("id", nav[i].page);
            navbar.find("a:last").attr("onclick", "navjump('" + nav[i].page + "','" + nav[i].navname + "')");
        } else {
            navbar.find("a:last").addClass("dropdown-toggle");
            $(".nav-list b:last").addClass("fa fa-angle-down");
            createsubnav(nav[i].subnav);
        }
    }
}

function createsubnav(subnav) {
    navbar.find("li:last").append("<ul class=\"submenu\"></ul>");
    var sublength = subnav.length;
    var ul = $(".submenu:last");
    for (var i = 0; i < sublength; i++) {
        ul.append("<li id = \"" + subnav[i].page + "\"><a href =\"javascript:void(0);\" onclick=\"navjump('" + subnav[i].page + "','" + subnav[i].navname + "')\"><i class=\"menu-icon fa " + subnav[i].icon + "\"></i>" + subnav[i].navname + "<b class=\"arrow\"></b></a></li>");
    }
}

//初始化导航
createnav();
navjump("widget", "首页");

//加载通知公告表格
// function makenoticetable() {
//     noticetable.bootstrapTable('destroy').bootstrapTable({
//         url: "json/notice.json",
//         columns: [{
//             field: 'type',
//             title: '类型'
//         }, {
//             field: 'sendtime',
//             title: '时间'
//         }, {
//             field: 'title',
//             title: '时间'
//         }]
//     })
// }