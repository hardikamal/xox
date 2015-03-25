function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function generateTable() {
        var data = [];
        for (var i = 0; i < details.length; i++) {
            var tableRow = Ti.UI.createTableViewRow({
                layout: "vertical",
                top: 5,
                bottom: 5,
                height: 170
            });
            var address = details[i].address;
            var myAdd = address.replace(/(\\r\n|\\n|\\r)/gm, " ");
            var contact = details[i].mobile;
            "null" == contact && (contact = "-");
            tableRow.add(createLabel({
                text: details[i].area,
                color: "#000000"
            }));
            tableRow.add(createLabel({
                text: details[i].outlet,
                color: "#9D9F9E"
            }));
            tableRow.add(createLabel({
                text: myAdd,
                color: "#9D9F9E"
            }));
            tableRow.add(createLabel({
                text: "Contact : " + contact,
                color: "#9D9F9E"
            }));
            data.push(tableRow);
            $.careCenterTable.setData(data);
        }
    }
    function createLabel(ex) {
        return Titanium.UI.createLabel({
            top: 10,
            left: 10,
            classes: [ "small_text" ],
            color: ex.color,
            text: ex.text
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact2";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        top: "0",
        contentHeight: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        scrollType: "vertical",
        backgroundColor: "#F4F6F5"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.careCenterTable = Ti.UI.createTableView({
        id: "careCenterTable",
        width: "100%",
        height: Ti.UI.SIZE,
        separatorColor: "#375540",
        top: "0"
    });
    $.__views.scrollView.add($.__views.careCenterTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    var storeModel = Alloy.createCollection("storeLocator");
    var details = storeModel.getStoreList({
        category: "Care Centre"
    });
    setTimeout(function() {
        generateTable();
    }, 800);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;