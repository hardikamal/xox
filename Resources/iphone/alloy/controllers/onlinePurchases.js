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
    $.__views.__alloyId1189 = Alloy.createController("_header", {
        id: "__alloyId1189",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1189.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1190 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1190"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1190);
    $.__views.__alloyId1191 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1191"
    });
    $.__views.__alloyId1190.add($.__views.__alloyId1191);
    $.__views.__alloyId1192 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1192"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1192);
    $.__views.__alloyId1193 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1193"
    });
    $.__views.__alloyId1192.add($.__views.__alloyId1193);
    hopOn ? $.__views.__alloyId1193.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1193!click!hopOn"] = true;
    $.__views.__alloyId1194 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1194"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1195"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1196"
    });
    $.__views.__alloyId1192.add($.__views.__alloyId1196);
    prepaidPack ? $.__views.__alloyId1196.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId1196!click!prepaidPack"] = true;
    $.__views.__alloyId1197 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1197"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1197);
    $.__views.__alloyId1198 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1198"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1198);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1193!click!hopOn"] && $.__views.__alloyId1193.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1196!click!prepaidPack"] && $.__views.__alloyId1196.addEventListener("click", prepaidPack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;