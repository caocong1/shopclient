/*!
 * 商户端js
 */
var body = $("body");
var $sidebar = $("#sidebar");
var sprintf = $.fn.bootstrapTable.utils.sprintf;
//判断是否登录
$(function () {
    if (sessionStorage.getItem("loginstatus")==="1") {
        loadwidget();
    } else {
        location.href="login.html"
    }
});

//登出
function loginout() {
    sessionStorage.setItem("loginstatus", 0);
    window.location.href="login.html";
}

//加载首页
function loadwidget() {
    body.addClass("skin-1");
    var username = sessionStorage.getItem("username");
    var storecode = sessionStorage.getItem("storecode");
    $(".user-info").append(storecode + "店铺<small>" + username + "</small>");
    loadnav();
    navjump(0);
}
//导航跳转
function navjump(id) {
    for(var i=0;i<nav.length;i++){
        // debugger;
        if(nav[i].children.length===0){
            if(nav[i].id===id){
                activenav(nav[i]);
                return
            }
        }else{
            for(var j=0;j<nav[i].children.length;j++){
                var c = nav[i].children;
                if(c[j].id===id){
                    activenav(c[j]);
                    return
                }
            }
        }
    }
}
function activenav(nav){
    $("#main").load(nav.page+".html");
    $sidebar.find("li").removeClass("active");
    $sidebar.removeClass("display");
    $("#" + nav.page).addClass("active");
    $(".page-header").find("h1").text(nav.text);
}

//加载导航菜单
function loadnav() {
    var navbar = $("#sidebar");
    var navlength = nav.length;
    navbar.append("<ul class=\"nav nav-list\"></ul>");
    var navlist = $(".nav-list");
    for (var i = 0; i < navlength; i++) {
        navlist.append("<li><a><i class=\"menu-icon " + nav[i].icon + "\"></i><span class=\"menu-text\">" + nav[i].text + "</span><b class=\"arrow\"></b></a></li>");
        if (jQuery.isEmptyObject(nav[i].children)) {
            navbar.find("li:last").attr("id", nav[i].page);
            navbar.find("a:last").attr("href", "javascript:navjump(" + nav[i].id + ");");
        } else {
            navbar.find("a:last").addClass("dropdown-toggle");
            $(".nav-list b:last").addClass("fa fa-angle-down");
            createsubnav(nav[i].children);
        }
    }
}
function createsubnav(children) {
    $("#sidebar").find("li:last").append("<ul class=\"submenu\"></ul>");
    var sublength = children.length;
    var ul = $(".submenu:last");
    for (var i = 0; i < sublength; i++) {
        ul.append("<li id = \"" + children[i].page + "\"><a href =\"javascript:navjump(" + children[i].id + ");\"><i class=\"menu-icon " + children[i].icon + "\"></i>" + children[i].text + "<b class=\"arrow\"></b></a></li>");
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

//表格点击展开关闭
function tableclickexpand($table,$element) {
    if($element.find("i").hasClass("fa-plus-square-o")){
        $table.bootstrapTable("collapseAllRows");
        $table.bootstrapTable("expandRow",$element.attr("data-index"))
    }else{
        $table.bootstrapTable("collapseRow",$element.attr("data-index"))
    }
}
//展开更新已读
function tableclickexpandread ($table, row, $element) {
    if(!row.read){
        $table.bootstrapTable('updateRow', {
            index: $element.attr("data-index"),
            row: {
                read: 1
            }
        });
    }
    tableclickexpand($table,$element);
}

//关闭查询框
function closesearch(){$("#searchbox").removeClass("visible")}
//关闭widget框
function hiddenbyid(id){$("#"+id).addClass("hidden")}

//表格toolbar插件
!function($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        toolbartitle:"",
        iconsPrefix: 'fa',
        icons:{
            detailOpen: 'fa-plus-square-o',
            detailClose: 'fa-minus-square-o'
        },
        toolbarAlign: "right",
        toolbarauto:true,
        showAdd:false,
        showEdit:false,
        showDel:false,
        showSearch:false,
        // showNewrefresh:false,
        Addattr:"",
        onAddbtn: function () {
            return false;
        },
        onEditbtn: function () {
            return false;
        },
        onDelbtn: function () {
            return false;
        },
        onSearchbtn: function () {
            return false;
        }
    });

    $.extend($.fn.bootstrapTable.Constructor.EVENTS, {
        'addbutton.bs.table': 'onAddbtn',
        'editbutton.bs.table': 'onEditbtn',
        'delbutton.bs.table': 'onDelbtn',
        'searchbutton.bs.table': 'onSearchbtn'
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initContainer = BootstrapTable.prototype.initContainer,
        _initToolbar = BootstrapTable.prototype.initToolbar;

    BootstrapTable.prototype.initContainer = function () {
        _initContainer.apply(this, Array.prototype.slice.apply(arguments));
        var toolbarid = this.$el.attr("id")+"toolbar";
        if(this.options.toolbarauto){
            this.options.toolbar= "#"+toolbarid;
            $("body").append('<div id="'+toolbarid+'"></div>')
        }
    };

    BootstrapTable.prototype.initToolbar = function() {
        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));
        var that = this,
             html = [],
             barhtml = [];

        html.push(sprintf('<span class="bootstraptable-title bigger-120"><i class="fa fa-table"></i>&nbsp;%s</span>',this.options.toolbartitle));
        that.$toolbar.prepend(html);

        if (this.options.showAdd) {
            barhtml.push(sprintf('<a class="btn btn-primary btn-xs btn-round" type="button" name="add" title="添加" %s><i class="fa fa-plus-square"></i>添加</a>',this.options.Addattr)),
            this.$toolbar.on('click', 'a[name="add"]', function () {that.trigger('addbutton')});
        }
        if (this.options.showEdit) {
            barhtml.push('<a class="btn btn-warning btn-xs btn-round" type="button" name="edit" title="修改"><i class="fa fa-pencil-square-o"></i>修改</a>'),
            this.$toolbar.on('click', 'a[name="edit"]', function () {that.trigger('editbutton')});
        }
        if (this.options.showDel) {
            barhtml.push('<a class="btn btn-danger btn-xs btn-round" type="button" name="del" title="删除"><i class="fa fa-trash"></i>删除</a>'),
            this.$toolbar.on('click', 'a[name="del"]', function () {that.trigger('delbutton')});
        }
        if (this.options.showSearch) {
            barhtml.push('<a class="btn btn-inverse btn-xs btn-round" type="button" name="search" title="查找"><i class="fa fa-search"></i>查找</a>'),
                this.$toolbar.on('click', 'a[name="search"]', function () {that.trigger('searchbutton')});
        }
        if (this.options.showRefresh) {
            // console.log(this.find('button[name="refresh"]'));
            this.$toolbar.closest(".fixed-table-toolbar").find('button[name="refresh"]').remove();
            barhtml.push('<button class="btn btn-success btn-xs btn-round" type="button" name="refresh" title="刷新"><i class="fa fa-refresh"></i>刷新</button>')
            this.$toolbar.on('click', 'button[name="refresh"]', $.proxy(this.refresh, this));
        }

        $(this.options.toolbar).append(barhtml.join(""));

    }
}(jQuery);

function singledatepicker(pickerid) {
    $(pickerid).daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        "locale": pickercn,
        "opens": "center"
    }, function (start, end, label) {
    })
}

function monthrangepicker(pickerel,startdate,enddate){
    $(pickerel).daterangepicker({
        minDate: moment().subtract(1, 'month').startOf('month'),
        maxDate: moment().subtract(1, 'month').endOf('month'),
        startDate: moment().subtract(1, 'month').startOf('month'),
        endDate: moment().subtract(1, 'month').endOf('month'),
        locale: pickercn
    }, function (start, end, label) {
        startdate=start;
        enddate=end;
    })
}

