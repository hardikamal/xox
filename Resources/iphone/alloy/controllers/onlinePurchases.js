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
    $.__views.__alloyId857 = Alloy.createController("_header", {
        id: "__alloyId857",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId857.setParent($.__views.onlinePurchases);
    $.__views.__alloyId858 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId858"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId858);
    $.__views.__alloyId859 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId859"
    });
    $.__views.__alloyId858.add($.__views.__alloyId859);
    $.__views.__alloyId860 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId860"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId860);
    $.__views.__alloyId861 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId861"
    });
    $.__views.__alloyId860.add($.__views.__alloyId861);
    hopOn ? $.__views.__alloyId861.addEventListener("click", hopOn) : __defers["$.__views.__alloyId861!click!hopOn"] = true;
    $.__views.__alloyId862 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId862"
    });
    $.__views.__alloyId861.add($.__views.__alloyId862);
    $.__views.__alloyId863 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId863"
    });
    $.__views.__alloyId861.add($.__views.__alloyId863);
    $.__views.__alloyId864 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId864"
    });
    $.__views.__alloyId860.add($.__views.__alloyId864);
    prepaidPack ? $.__views.__alloyId864.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId864!click!prepaidPack"] = true;
    $.__views.__alloyId865 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId865"
    });
    $.__views.__alloyId864.add($.__views.__alloyId865);
    $.__views.__alloyId866 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId866"
    });
    $.__views.__alloyId864.add($.__views.__alloyId866);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId861!click!hopOn"] && $.__views.__alloyId861.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId864!click!prepaidPack"] && $.__views.__alloyId864.addEventListener("click", prepaidPack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;