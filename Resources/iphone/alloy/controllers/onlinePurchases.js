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
        DRAWER.navigation("prepaidPack", 1);
    }
    function hopOn() {
        DRAWER.navigation("hopOn", 1);
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
    $.__views.__alloyId843 = Alloy.createController("_header", {
        id: "__alloyId843",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId843.setParent($.__views.onlinePurchases);
    $.__views.__alloyId844 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId844"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId844);
    $.__views.__alloyId845 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId845"
    });
    $.__views.__alloyId844.add($.__views.__alloyId845);
    $.__views.__alloyId846 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId846"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId846);
    $.__views.__alloyId847 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId847"
    });
    $.__views.__alloyId846.add($.__views.__alloyId847);
    hopOn ? $.__views.__alloyId847.addEventListener("click", hopOn) : __defers["$.__views.__alloyId847!click!hopOn"] = true;
    $.__views.__alloyId848 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId848"
    });
    $.__views.__alloyId847.add($.__views.__alloyId848);
    $.__views.__alloyId849 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId849"
    });
    $.__views.__alloyId847.add($.__views.__alloyId849);
    $.__views.__alloyId850 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId850"
    });
    $.__views.__alloyId846.add($.__views.__alloyId850);
    prepaidPack ? $.__views.__alloyId850.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId850!click!prepaidPack"] = true;
    $.__views.__alloyId851 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId851"
    });
    $.__views.__alloyId850.add($.__views.__alloyId851);
    $.__views.__alloyId852 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId852"
    });
    $.__views.__alloyId850.add($.__views.__alloyId852);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId847!click!hopOn"] && $.__views.__alloyId847.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId850!click!prepaidPack"] && $.__views.__alloyId850.addEventListener("click", prepaidPack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;