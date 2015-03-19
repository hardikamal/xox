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
<<<<<<< HEAD
    $.__views.__alloyId354 = Alloy.createController("_header", {
        id: "__alloyId354",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId354.setParent($.__views.onlinePurchases);
    $.__views.__alloyId355 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId355"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId356"
    });
    $.__views.__alloyId355.add($.__views.__alloyId356);
    $.__views.__alloyId357 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId357"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId358"
    });
    $.__views.__alloyId357.add($.__views.__alloyId358);
    prepaidPack ? $.__views.__alloyId358.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId358!click!prepaidPack"] = true;
    $.__views.__alloyId359 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId359"
    });
    $.__views.__alloyId358.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId360"
    });
    $.__views.__alloyId358.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId361"
    });
    $.__views.__alloyId357.add($.__views.__alloyId361);
    prepaidPack ? $.__views.__alloyId361.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId361!click!prepaidPack"] = true;
    $.__views.__alloyId362 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId362"
    });
    $.__views.__alloyId361.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId363"
    });
    $.__views.__alloyId361.add($.__views.__alloyId363);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId358!click!prepaidPack"] && $.__views.__alloyId358.addEventListener("click", prepaidPack);
    __defers["$.__views.__alloyId361!click!prepaidPack"] && $.__views.__alloyId361.addEventListener("click", prepaidPack);
=======
        id: "__alloyId574"
    });
    $.__views.__alloyId572.add($.__views.__alloyId574);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId569!click!prepaidPack"] && $.__views.__alloyId569.addEventListener("click", prepaidPack);
    __defers["$.__views.__alloyId572!click!prepaidPack"] && $.__views.__alloyId572.addEventListener("click", prepaidPack);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;