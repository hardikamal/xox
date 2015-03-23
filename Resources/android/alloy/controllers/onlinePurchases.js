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
<<<<<<< HEAD
    $.__views.__alloyId466 = Alloy.createController("_header", {
        id: "__alloyId466",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId466.setParent($.__views.onlinePurchases);
    $.__views.__alloyId467 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId467"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createLabel({
=======
    $.__views.__alloyId356 = Alloy.createController("_header", {
        id: "__alloyId356",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId356.setParent($.__views.onlinePurchases);
    $.__views.__alloyId357 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId357"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId468"
    });
    $.__views.__alloyId467.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId469"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId469);
    $.__views.__alloyId470 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId470"
    });
    $.__views.__alloyId469.add($.__views.__alloyId470);
    hopOn ? $.__views.__alloyId470.addEventListener("click", hopOn) : __defers["$.__views.__alloyId470!click!hopOn"] = true;
    $.__views.__alloyId471 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createLabel({
=======
        id: "__alloyId358"
    });
    $.__views.__alloyId357.add($.__views.__alloyId358);
    $.__views.__alloyId359 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId359"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId360"
    });
    $.__views.__alloyId359.add($.__views.__alloyId360);
    prepaidPack ? $.__views.__alloyId360.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId360!click!prepaidPack"] = true;
    $.__views.__alloyId361 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId361"
    });
    $.__views.__alloyId360.add($.__views.__alloyId361);
    $.__views.__alloyId362 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId472"
    });
    $.__views.__alloyId470.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId473"
    });
    $.__views.__alloyId469.add($.__views.__alloyId473);
    prepaidPack ? $.__views.__alloyId473.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId473!click!prepaidPack"] = true;
    $.__views.__alloyId474 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createLabel({
=======
        id: "__alloyId362"
    });
    $.__views.__alloyId360.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId363"
    });
    $.__views.__alloyId359.add($.__views.__alloyId363);
    prepaidPack ? $.__views.__alloyId363.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId363!click!prepaidPack"] = true;
    $.__views.__alloyId364 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId364"
    });
    $.__views.__alloyId363.add($.__views.__alloyId364);
    $.__views.__alloyId365 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId475"
    });
    $.__views.__alloyId473.add($.__views.__alloyId475);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId470!click!hopOn"] && $.__views.__alloyId470.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId473!click!prepaidPack"] && $.__views.__alloyId473.addEventListener("click", prepaidPack);
=======
        id: "__alloyId365"
    });
    $.__views.__alloyId363.add($.__views.__alloyId365);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId360!click!prepaidPack"] && $.__views.__alloyId360.addEventListener("click", prepaidPack);
    __defers["$.__views.__alloyId363!click!prepaidPack"] && $.__views.__alloyId363.addEventListener("click", prepaidPack);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;