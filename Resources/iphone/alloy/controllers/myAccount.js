function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "myAccount";
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
    $.__views.myAccount = Ti.UI.createView({
        backgroundColor: "black",
        layout: "vertical",
        fullscreen: "true",
        id: "myAccount"
    });
    $.__views.myAccount && $.addTopLevelView($.__views.myAccount);
    $.__views.__alloyId69 = Alloy.createController("_header", {
        id: "__alloyId69",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId69.setParent($.__views.myAccount);
    $.__views.__alloyId70 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId70"
    });
    $.__views.myAccount.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "blue",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId73"
    });
    $.__views.__alloyId71.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId74"
    });
    $.__views.__alloyId70.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId75"
    });
    $.__views.__alloyId70.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        width: "80",
        height: "80",
        backgroundColor: "green",
        borderRadius: "40",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#A5A5A5",
        id: "__alloyId77"
    });
    $.__views.myAccount.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        backgroundColor: "blue",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "gray",
        left: "10",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId81"
    });
    $.__views.__alloyId79.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId82"
    });
    $.__views.__alloyId77.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "gray",
        left: "10",
        bottom: "2.5",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId85"
    });
    $.__views.__alloyId83.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId86"
    });
    $.__views.myAccount.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: Ti.UI.FILL,
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "yellow",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "pink",
        id: "__alloyId89"
    });
    $.__views.__alloyId87.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        backgroundColor: "purple",
        id: "__alloyId90"
    });
    $.__views.__alloyId87.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        layout: "horizontal",
        height: "33%",
        width: Ti.UI.FILL,
        id: "__alloyId91"
    });
    $.__views.__alloyId86.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "blue",
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "green",
        id: "__alloyId93"
    });
    $.__views.__alloyId91.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId94"
    });
    $.__views.__alloyId91.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createView({
        layout: "horizontal",
        height: "34%",
        width: Ti.UI.FILL,
        id: "__alloyId95"
    });
    $.__views.__alloyId86.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "yellow",
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        backgroundColor: "pink",
        id: "__alloyId97"
    });
    $.__views.__alloyId95.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        backgroundColor: "purple",
        id: "__alloyId98"
    });
    $.__views.__alloyId95.add($.__views.__alloyId98);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;