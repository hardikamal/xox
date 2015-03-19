function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function back() {
        DRAWER.navigation("myAccount", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "loyalty";
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
    $.__views.loyalty = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "loyalty"
    });
    $.__views.loyalty && $.addTopLevelView($.__views.loyalty);
<<<<<<< HEAD
    $.__views.__alloyId251 = Alloy.createController("_header", {
        id: "__alloyId251",
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId251.setParent($.__views.loyalty);
    $.__views.__alloyId252 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId252"
    });
    $.__views.loyalty.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createLabel({
=======
    $.__views.__alloyId419 = Alloy.createController("_header", {
        id: "__alloyId419",
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId419.setParent($.__views.loyalty);
    $.__views.__alloyId420 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId420"
    });
    $.__views.loyalty.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId253"
    });
    $.__views.__alloyId252.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createImageView({
=======
        id: "__alloyId421"
    });
    $.__views.__alloyId420.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId254"
    });
    $.__views.__alloyId252.add($.__views.__alloyId254);
    back ? $.__views.__alloyId254.addEventListener("click", back) : __defers["$.__views.__alloyId254!click!back"] = true;
=======
        id: "__alloyId422"
    });
    $.__views.__alloyId420.add($.__views.__alloyId422);
    back ? $.__views.__alloyId422.addEventListener("click", back) : __defers["$.__views.__alloyId422!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.loyalty.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId255 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId255"
    });
    $.__views.scrollView.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId256"
    });
    $.__views.__alloyId255.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createLabel({
=======
    $.__views.__alloyId423 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId423"
    });
    $.__views.scrollView.add($.__views.__alloyId423);
    $.__views.__alloyId424 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId424"
    });
    $.__views.__alloyId423.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Your Loyalty Points",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId257"
    });
    $.__views.__alloyId256.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createLabel({
=======
        id: "__alloyId425"
    });
    $.__views.__alloyId424.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "8500",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId258"
    });
    $.__views.__alloyId256.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createView({
        height: "50%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId259"
    });
    $.__views.scrollView.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createView({
=======
        id: "__alloyId426"
    });
    $.__views.__alloyId424.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createView({
        height: "50%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId427"
    });
    $.__views.scrollView.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "90%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId260"
    });
    $.__views.__alloyId259.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createImageView({
=======
        id: "__alloyId428"
    });
    $.__views.__alloyId427.add($.__views.__alloyId428);
    $.__views.__alloyId429 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "yellow",
        width: "40",
        height: "30",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId261"
    });
    $.__views.__alloyId260.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createLabel({
=======
        id: "__alloyId429"
    });
    $.__views.__alloyId428.add($.__views.__alloyId429);
    $.__views.__alloyId430 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "FREE SMS",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId262"
    });
    $.__views.__alloyId260.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createLabel({
=======
        id: "__alloyId430"
    });
    $.__views.__alloyId428.add($.__views.__alloyId430);
    $.__views.__alloyId431 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To redeem free SMS with your Loyalty Points:",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId263"
    });
    $.__views.__alloyId260.add($.__views.__alloyId263);
=======
        id: "__alloyId431"
    });
    $.__views.__alloyId428.add($.__views.__alloyId431);
>>>>>>> origin/master
    $.__views.sms = Ti.UI.createLabel({
        id: "sms",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center"
    });
<<<<<<< HEAD
    $.__views.__alloyId260.add($.__views.sms);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";
    __defers["$.__views.__alloyId254!click!back"] && $.__views.__alloyId254.addEventListener("click", back);
=======
    $.__views.__alloyId428.add($.__views.sms);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";
    __defers["$.__views.__alloyId422!click!back"] && $.__views.__alloyId422.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;