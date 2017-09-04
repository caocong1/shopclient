/*!
 * 商户端js
 */
var body = $("body");
//判断是否登录
$(function () {
    if (sessionStorage.getItem("loginstatus")==="1") {
    // if (true) {
        loadwidget();
    } else {
        // body.load("views/login.html");
        // body.addClass("login-layout");
        location.href="views/login.html";
    }
});

//登出
function loginout() {
    sessionStorage.setItem("loginstatus", 0);
    window.location.href="views/login.html";
}

//加载首页
function loadwidget() {
    body.addClass("skin-1");
    var username = sessionStorage.getItem("username");
    var storecode = sessionStorage.getItem("storecode");
    $(".user-info").append(storecode + "店铺<small>" + username + "</small>");
    loadnav();
    navjump("widget", "首页");
}
//导航跳转
function navjump(page, navname) {
    $("#main").load("views/" + page + ".html");
    $("#sidebar").find("li").removeClass("active");
    $("#sidebar").removeClass("display");
    $("#" + page).addClass("active");
    $(".page-header").find("h1").text(navname);
}
//加载导航菜单
function loadnav() {
    var navbar = $("#sidebar");
    var navlength = nav.length;
    navbar.append("<ul class=\"nav nav-list\"><li id =\"widget\" class=\"active\"><a href=\"javascript:navjump('widget','首页');\"><i class=\"menu-icon fa fa-tachometer\"></i><span class=\"menu-text\">首页</span></a><b class=\"arrow\"></b></li></ul>");
    var navlist = $(".nav-list");
    for (var i = 0; i < navlength; i++) {
        navlist.append("<li><a><i class=\"menu-icon fa " + nav[i].icon + "\"></i><span class=\"menu-text\">" + nav[i].navname + "</span><b class=\"arrow\"></b></a></li>");
        if (jQuery.isEmptyObject(nav[i].subnav)) {
            navbar.find("li:last").attr("id", nav[i].page);
            navbar.find("a:last").attr("href", "javascript:navjump('" + nav[i].page + "','" + nav[i].navname + "');");
        } else {
            navbar.find("a:last").addClass("dropdown-toggle");
            $(".nav-list b:last").addClass("fa fa-angle-down");
            createsubnav(nav[i].subnav);
        }
    }
}
function createsubnav(subnav) {
    $("#sidebar").find("li:last").append("<ul class=\"submenu\"></ul>");
    var sublength = subnav.length;
    var ul = $(".submenu:last");
    for (var i = 0; i < sublength; i++) {
        ul.append("<li id = \"" + subnav[i].page + "\"><a href =\"javascript:void(0);\" onclick=\"navjump('" + subnav[i].page + "','" + subnav[i].navname + "')\"><i class=\"menu-icon fa " + subnav[i].icon + "\"></i>" + subnav[i].navname + "<b class=\"arrow\"></b></a></li>");
    }
}

//判断后缀名返回图标
function attachmentsuffix(filename) {
    var suffix = filename.substr(filename.lastIndexOf('.') + 1);
    if (suffix === "doc" || suffix === "docx") {
        return "fa fa-file-word-o"
    } else if (suffix === "xls" || suffix === "xlsx") {
        return "fa fa-file-excel-o"
    } else if (suffix === "jpg" || suffix === "png" || suffix === "bmp" || suffix === "gif") {
        return "fa fa-file-image-o"
    } else if (suffix === "pdf") {
        return "fa fa-file-pdf-o"
    }
}

//鼠标悬停下拉菜单
$(".dropdown-modal").on("mouseover",function () {
    $(this).addClass("open")}).on("mouseout",function () {
        $(this).removeClass("open")
    });

function tableclickexpand(a,$element) {
    var $table = $element.closest("table");
    if($element.find("i").hasClass("fa-plus-square-o")){
        $table.bootstrapTable("collapseAllRows");
        $table.bootstrapTable("expandRow",$element.attr("data-index"))
    }else{
        $table.bootstrapTable("collapseRow",$element.attr("data-index"))
    }
}

//表格toolbar插件
!function($) {
    'use strict';

    var sprintf = $.fn.bootstrapTable.utils.sprintf;

    $.extend($.fn.bootstrapTable.defaults, {
        toolbartitle:"",
        iconsPrefix: 'fa',
        icons:{
            detailOpen: 'fa-plus-square-o',
            detailClose: 'fa-minus-square-o'
        },
        toolbarAlign: "right",
        showAdd:false,
        showEdit:false,
        showDel:false,
        showNewrefresh:false,
        Addattr:"",
        onAddbtn: function () {
            return false;
        },
        onEditbtn: function () {
            return false;
        },
        onDelbtn: function () {
            return false;
        }
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
        'addbutton.bs.table': 'onAddbtn',
        'editbutton.bs.table': 'onEditbtn',
        'delbutton.bs.table': 'onDelbtn'
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar;

    BootstrapTable.prototype.initToolbar = function() {
        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));
        var that = this,
             html = [],
             barhtml = [];

        html.push(sprintf('<span class="bootstraptable-title bigger-120"><i class="fa fa-table"></i>%s</span>',this.options.toolbartitle));
        that.$toolbar.prepend(html);

        if (this.options.showAdd) {
            barhtml.push(sprintf('<a class="btn btn-primary btn-xs btn-round" type="button" name="add" title="添加" %s><i class="fa fa-plus-square"></i>添加</a>',this.options.Addattr)),
            this.$toolbar.on('click', 'button[name="add"]', function () {that.trigger('addbutton')});
        }
        if (this.options.showEdit) {
            barhtml.push('<a class="btn btn-warning btn-xs btn-round" type="button" name="edit" title="修改"><i class="fa fa-pencil-square-o"></i>修改</a>'),
                this.$toolbar.find().on('click', 'button[name="edit"]', function () {that.trigger('editbutton')});
        }
        if (this.options.showDel) {
            barhtml.push('<a class="btn btn-danger btn-xs btn-round" type="button" name="del" title="删除"><i class="fa fa-trash"></i>删除</a>'),
                this.$toolbar.on('click','button[name="del"]', function () {that.trigger('delbutton')});
        }
        if (this.options.showRefresh) {
            // console.log(this.find('button[name="refresh"]'));
            $(".fixed-table-toolbar").find('button[name="refresh"]').remove();
            barhtml.push('<button class="btn btn-success btn-xs btn-round" type="button" name="refresh" title="刷新"><i class="fa fa-refresh"></i>刷新</button>')
            this.$toolbar.on('click', 'button[name="refresh"]', $.proxy(this.refresh, this));
        }

        $(this.options.toolbar).append(barhtml.join(""));

    }
}(jQuery);