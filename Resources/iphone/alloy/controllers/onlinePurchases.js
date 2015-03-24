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
    $.__views.__alloyId1307 = Alloy.createController("_header", {
        id: "__alloyId1307",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1307.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1308 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1308"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1309"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1309);
    $.__views.__alloyId1310 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1310"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1311"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1311);
    hopOn ? $.__views.__alloyId1311.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1311!click!hopOn"] = true;
    $.__views.__alloyId1312 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1312"
    });
    $.__views.__alloyId1311.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1313"
    });
    $.__views.__alloyId1311.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1314"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1314);
    prepaidPack ? $.__views.__alloyId1314.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId1314!click!prepaidPack"] = true;
    $.__views.__alloyId1315 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1315"
    });
    $.__views.__alloyId1314.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1316"
    });
    $.__views.__alloyId1314.add($.__views.__alloyId1316);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1311!click!hopOn"] && $.__views.__alloyId1311.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1314!click!prepaidPack"] && $.__views.__alloyId1314.addEventListener("click", prepaidPack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;