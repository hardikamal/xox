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
    $.__views.__alloyId363 = Alloy.createController("_header", {
        id: "__alloyId363",
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId363.setParent($.__views.loyalty);
    $.__views.__alloyId364 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId364"
    });
    $.__views.loyalty.add($.__views.__alloyId364);
    $.__views.__alloyId365 = Ti.UI.createLabel({
=======
    $.__views.__alloyId253 = Alloy.createController("_header", {
        id: "__alloyId253",
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId253.setParent($.__views.loyalty);
    $.__views.__alloyId254 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId254"
    });
    $.__views.loyalty.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId365"
    });
    $.__views.__alloyId364.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createImageView({
=======
        id: "__alloyId255"
    });
    $.__views.__alloyId254.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId366"
    });
    $.__views.__alloyId364.add($.__views.__alloyId366);
    back ? $.__views.__alloyId366.addEventListener("click", back) : __defers["$.__views.__alloyId366!click!back"] = true;
=======
        id: "__alloyId256"
    });
    $.__views.__alloyId254.add($.__views.__alloyId256);
    back ? $.__views.__alloyId256.addEventListener("click", back) : __defers["$.__views.__alloyId256!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.loyalty.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId367 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId367"
    });
    $.__views.scrollView.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId368"
    });
    $.__views.__alloyId367.add($.__views.__alloyId368);
    $.__views.__alloyId369 = Ti.UI.createLabel({
=======
    $.__views.__alloyId257 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId257"
    });
    $.__views.scrollView.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId258"
    });
    $.__views.__alloyId257.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Your Loyalty Points",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId369"
    });
    $.__views.__alloyId368.add($.__views.__alloyId369);
    $.__views.__alloyId370 = Ti.UI.createLabel({
=======
        id: "__alloyId259"
    });
    $.__views.__alloyId258.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "8500",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId370"
    });
    $.__views.__alloyId368.add($.__views.__alloyId370);
    $.__views.__alloyId371 = Ti.UI.createView({
        height: "50%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId371"
    });
    $.__views.scrollView.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createView({
=======
        id: "__alloyId260"
    });
    $.__views.__alloyId258.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createView({
        height: "50%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId261"
    });
    $.__views.scrollView.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "90%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId372"
    });
    $.__views.__alloyId371.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createImageView({
=======
        id: "__alloyId262"
    });
    $.__views.__alloyId261.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "yellow",
        width: "40",
        height: "30",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId373"
    });
    $.__views.__alloyId372.add($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createLabel({
=======
        id: "__alloyId263"
    });
    $.__views.__alloyId262.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "FREE SMS",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId374"
    });
    $.__views.__alloyId372.add($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createLabel({
=======
        id: "__alloyId264"
    });
    $.__views.__alloyId262.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To redeem free SMS with your Loyalty Points:",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId375"
    });
    $.__views.__alloyId372.add($.__views.__alloyId375);
=======
        id: "__alloyId265"
    });
    $.__views.__alloyId262.add($.__views.__alloyId265);
>>>>>>> origin/master
    $.__views.sms = Ti.UI.createLabel({
        id: "sms",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center"
    });
<<<<<<< HEAD
    $.__views.__alloyId372.add($.__views.sms);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";
    __defers["$.__views.__alloyId366!click!back"] && $.__views.__alloyId366.addEventListener("click", back);
=======
    $.__views.__alloyId262.add($.__views.sms);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";
    __defers["$.__views.__alloyId256!click!back"] && $.__views.__alloyId256.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;