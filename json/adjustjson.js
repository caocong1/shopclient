var dayadjustpayhtml =
    '<div class="row hidden">\n' +
    '<label class="col-sm-2"></label>\n' +
    '<div class="col-sm-3">\n' +
    '    <div class="input-group">\n' +
    '        <span class="input-group-addon">调帐前</span>\n' +
    '        <input class="form-control" type="text" readonly title="before"/>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="col-sm-3">\n' +
    '    <div class="input-group">\n' +
    '        <span class="input-group-addon">调帐金额</span>\n' +
    '        <input class="form-control amount" type="text" title="adjust"/>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="col-sm-3">\n' +
    '    <div class="input-group">\n' +
    '        <span class="input-group-addon">调帐后</span>\n' +
    '        <input class="form-control amount" type="text" title="after"/>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="col-sm-1">\n' +
    '    <button class="btn btn-white btn-round">\n' +
    '        <i class="ace-icon fa fa-times"></i>\n' +
    '    </button>\n' +
    '</div>\n' +
    '                </div>';

var dayadjustsumhtml =
    '<div class="hr"></div>\n' +
    '<div class="row" id="total">\n' +
    '    <label class="col-sm-2">总计：</label>\n' +
    '    <div class="col-sm-3">\n' +
    '        <div class="input-group">\n' +
    '            <span class="input-group-addon">调帐前</span>\n' +
    '            <input class="form-control" type="text" title="before" readonly>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="col-sm-3">\n' +
    '        <div class="input-group">\n' +
    '            <span class="input-group-addon">调帐金额</span>\n' +
    '            <input class="form-control" type="text" title="adjust" readonly>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="col-sm-3">\n' +
    '        <div class="input-group">\n' +
    '            <span class="input-group-addon">调帐后</span>\n' +
    '            <input class="form-control" type="text" title="after" readonly>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="col-sm-1">\n' +
    '        <button class="btn btn-white btn-round hidden">\n' +
    '            <i class="ace-icon fa fa-times"></i>\n' +
    '        </button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="space-6"></div>\n' +
    '<div id="remark" class="row">\n' +
    '    <label class="col-sm-2">备注:</label>\n' +
    '    <div class="col-sm-10">\n' +
    '        <input class="form-control" type="text">\n' +
    '    </div>\n' +
    '</div>';

var monthadjustinit =
    '<div class="row">\n' +
    '    <div class="col-sm-6">\n' +
    '        <label for="dayadjustdate" class="col-sm-4">调帐时间:</label>\n' +
    '        <div class="col-sm-8 input-group date">\n' +
    '            <input class="form-control rangepicker" type="text">\n' +
    '            <span class="input-group-addon">\n' +
    '                <i class="fa fa-calendar"></i>\n' +
    '            </span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="col-sm-4 btn-group">\n' +
    '        <button class="btn btn-white btn-round" onclick="monthadjustadd()">\n' +
    '            确定添加\n' +
    '        </button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="hr"></div>';

var monthadjustpayhtml =
    '<div class="row hidden">\n' +
    '<div class="col-sm-2">\n' +
    '    <input class="form-control" type="text" readonly/>\n' +
    '</div>\n' +
    '<div class="col-sm-3">\n' +
    '    <div class="input-group">\n' +
    '        <span class="input-group-addon">调帐前</span>\n' +
    '        <input class="form-control" type="text" readonly="" title="before">\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="col-sm-3">\n' +
    '    <div class="input-group">\n' +
    '        <span class="input-group-addon">调帐金额</span>\n' +
    '        <input class="form-control amount" type="text" title="adjust">\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="col-sm-3">\n' +
    '    <div class="input-group">\n' +
    '        <span class="input-group-addon">调帐后</span>\n' +
    '        <input class="form-control amount" type="text" title="after">\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="col-sm-1">\n' +
    '    <button class="btn btn-white btn-round">\n' +
    '        <i class="ace-icon fa fa-times"></i>\n' +
    '    </button>\n' +
    '</div>\n' +
    '                </div>';

var monthsumhtml =
    '<div class="hr"></div><div class="row hidden">\n' +
    '<label class="col-sm-2">总计：</label>\n' +
    '<div class="col-sm-3">\n' +
    '    <div class="input-group">\n' +
    '        <span class="input-group-addon">调帐前</span>\n' +
    '        <input class="form-control" type="text" readonly="" title="before">\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="col-sm-3">\n' +
    '    <div class="input-group">\n' +
    '        <span class="input-group-addon">调帐金额</span>\n' +
    '        <input class="form-control" type="text" title="adjust">\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="col-sm-3">\n' +
    '    <div class="input-group">\n' +
    '        <span class="input-group-addon">调帐后</span>\n' +
    '        <input class="form-control" type="text" title="after">\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="col-sm-1">\n' +
    '    \n' +
    '</div>\n' +
    '                </div>' +
    '                <div class="space-6"></div>\n' +
    '                <div id="remark" class="row hidden">\n' +
    '    <label class="col-sm-2">备注:</label>\n' +
    '    <div class="col-sm-10">\n' +
    '    <input class="form-control" type="text" />\n' +
    '    </div>\n' +
    '</div>';