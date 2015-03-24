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
    $.__views.__alloyId1419 = Alloy.createController("_header", {
        id: "__alloyId1419",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1419.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1420 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1420"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1421"
    });
    $.__views.__alloyId1420.add($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1422"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1423"
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1423);
    hopOn ? $.__views.__alloyId1423.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1423!click!hopOn"] = true;
    $.__views.__alloyId1424 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1424"
    });
    $.__views.__alloyId1423.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1425"
    });
    $.__views.__alloyId1423.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1426"
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1426);
    prepaidPack ? $.__views.__alloyId1426.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId1426!click!prepaidPack"] = true;
    $.__views.__alloyId1427 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1427"
    });
    $.__views.__alloyId1426.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1428"
    });
    $.__views.__alloyId1426.add($.__views.__alloyId1428);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1423!click!hopOn"] && $.__views.__alloyId1423.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1426!click!prepaidPack"] && $.__views.__alloyId1426.addEventListener("click", prepaidPack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;