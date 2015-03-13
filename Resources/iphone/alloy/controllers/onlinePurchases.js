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
    $.__views.__alloyId341 = Alloy.createController("_header", {
        id: "__alloyId341",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId341.setParent($.__views.onlinePurchases);
    $.__views.__alloyId342 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId342"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId343"
    });
    $.__views.__alloyId342.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId344"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId345"
    });
    $.__views.__alloyId344.add($.__views.__alloyId345);
    prepaidPack ? $.__views.__alloyId345.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId345!click!prepaidPack"] = true;
    $.__views.__alloyId346 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId346"
    });
    $.__views.__alloyId345.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId347"
    });
    $.__views.__alloyId345.add($.__views.__alloyId347);
    $.__views.__alloyId348 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId348"
    });
    $.__views.__alloyId344.add($.__views.__alloyId348);
    prepaidPack ? $.__views.__alloyId348.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId348!click!prepaidPack"] = true;
    $.__views.__alloyId349 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId349"
    });
    $.__views.__alloyId348.add($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId350"
    });
    $.__views.__alloyId348.add($.__views.__alloyId350);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId345!click!prepaidPack"] && $.__views.__alloyId345.addEventListener("click", prepaidPack);
    __defers["$.__views.__alloyId348!click!prepaidPack"] && $.__views.__alloyId348.addEventListener("click", prepaidPack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;