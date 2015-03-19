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
    $.__views.__alloyId750 = Alloy.createController("_header", {
        id: "__alloyId750",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId750.setParent($.__views.onlinePurchases);
    $.__views.__alloyId751 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId751"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId752"
    });
    $.__views.__alloyId751.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId753"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId754"
    });
    $.__views.__alloyId753.add($.__views.__alloyId754);
    hopOn ? $.__views.__alloyId754.addEventListener("click", hopOn) : __defers["$.__views.__alloyId754!click!hopOn"] = true;
    $.__views.__alloyId755 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId755"
    });
    $.__views.__alloyId754.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId756"
    });
    $.__views.__alloyId754.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId757"
    });
    $.__views.__alloyId753.add($.__views.__alloyId757);
    prepaidPack ? $.__views.__alloyId757.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId757!click!prepaidPack"] = true;
    $.__views.__alloyId758 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId758"
    });
    $.__views.__alloyId757.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId759"
    });
    $.__views.__alloyId757.add($.__views.__alloyId759);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId754!click!hopOn"] && $.__views.__alloyId754.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId757!click!prepaidPack"] && $.__views.__alloyId757.addEventListener("click", prepaidPack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;