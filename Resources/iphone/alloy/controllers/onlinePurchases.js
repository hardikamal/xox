function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function prepaidPack() {
        DRAWER.navigation("prepaidPack", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "onlinePurchases";
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
    var __defers = {};
    $.__views.onlinePurchases = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "onlinePurchases"
    });
    $.__views.onlinePurchases && $.addTopLevelView($.__views.onlinePurchases);
    $.__views.__alloyId565 = Alloy.createController("_header", {
        id: "__alloyId565",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId565.setParent($.__views.onlinePurchases);
    $.__views.__alloyId566 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId566"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId566);
    $.__views.__alloyId567 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId567"
    });
    $.__views.__alloyId566.add($.__views.__alloyId567);
    $.__views.__alloyId568 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId568"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId568);
    $.__views.__alloyId569 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId569"
    });
    $.__views.__alloyId568.add($.__views.__alloyId569);
    prepaidPack ? $.__views.__alloyId569.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId569!click!prepaidPack"] = true;
    $.__views.__alloyId570 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId570"
    });
    $.__views.__alloyId569.add($.__views.__alloyId570);
    $.__views.__alloyId571 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId571"
    });
    $.__views.__alloyId569.add($.__views.__alloyId571);
    $.__views.__alloyId572 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId572"
    });
    $.__views.__alloyId568.add($.__views.__alloyId572);
    prepaidPack ? $.__views.__alloyId572.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId572!click!prepaidPack"] = true;
    $.__views.__alloyId573 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId573"
    });
    $.__views.__alloyId572.add($.__views.__alloyId573);
    $.__views.__alloyId574 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId574"
    });
    $.__views.__alloyId572.add($.__views.__alloyId574);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId569!click!prepaidPack"] && $.__views.__alloyId569.addEventListener("click", prepaidPack);
    __defers["$.__views.__alloyId572!click!prepaidPack"] && $.__views.__alloyId572.addEventListener("click", prepaidPack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;