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
    $.__views.__alloyId99 = Alloy.createController("_header", {
        id: "__alloyId99",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId99.setParent($.__views.onlinePurchases);
    $.__views.__alloyId100 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId100"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId102"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    prepaidPack ? $.__views.__alloyId103.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId103!click!prepaidPack"] = true;
    $.__views.__alloyId104 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId105"
    });
    $.__views.__alloyId103.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId106"
    });
    $.__views.__alloyId102.add($.__views.__alloyId106);
    prepaidPack ? $.__views.__alloyId106.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId106!click!prepaidPack"] = true;
    $.__views.__alloyId107 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId108"
    });
    $.__views.__alloyId106.add($.__views.__alloyId108);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId103!click!prepaidPack"] && $.__views.__alloyId103.addEventListener("click", prepaidPack);
    __defers["$.__views.__alloyId106!click!prepaidPack"] && $.__views.__alloyId106.addEventListener("click", prepaidPack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;