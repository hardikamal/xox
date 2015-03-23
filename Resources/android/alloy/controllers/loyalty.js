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
    function loyalty() {
        console.log("loyalty");
        DRAWER.navigation("loyalty2", 1);
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
    $.__views.__alloyId1109 = Alloy.createController("_header", {
        id: "__alloyId1109",
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId1109.setParent($.__views.loyalty);
    $.__views.__alloyId1110 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1110"
    });
    $.__views.loyalty.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createLabel({
=======
    $.__views.__alloyId964 = Alloy.createController("_header", {
        id: "__alloyId964",
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId964.setParent($.__views.loyalty);
    $.__views.__alloyId965 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId965"
    });
    $.__views.loyalty.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1111"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createImageView({
=======
        id: "__alloyId966"
    });
    $.__views.__alloyId965.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1112"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1112);
    back ? $.__views.__alloyId1112.addEventListener("click", back) : __defers["$.__views.__alloyId1112!click!back"] = true;
    $.__views.__alloyId1113 = Ti.UI.createView({
        height: "100",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1113"
    });
    $.__views.loyalty.add($.__views.__alloyId1113);
    $.__views.__alloyId1114 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#E6E7E9",
        id: "__alloyId1114"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1114);
    $.__views.__alloyId1115 = Ti.UI.createLabel({
=======
        id: "__alloyId967"
    });
    $.__views.__alloyId965.add($.__views.__alloyId967);
    back ? $.__views.__alloyId967.addEventListener("click", back) : __defers["$.__views.__alloyId967!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.loyalty.add($.__views.scrollView);
    $.__views.__alloyId968 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId968"
    });
    $.__views.scrollView.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId969"
    });
    $.__views.__alloyId968.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Your Loyalty Points",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1115"
    });
    $.__views.__alloyId1114.add($.__views.__alloyId1115);
    $.__views.__alloyId1116 = Ti.UI.createLabel({
=======
        id: "__alloyId970"
    });
    $.__views.__alloyId969.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "8500",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1116"
    });
    $.__views.__alloyId1114.add($.__views.__alloyId1116);
    $.__views.__alloyId1117 = Ti.UI.createView({
        backgroundColor: "black",
        width: "100%",
        height: "1",
        id: "__alloyId1117"
    });
    $.__views.loyalty.add($.__views.__alloyId1117);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
=======
        id: "__alloyId971"
    });
    $.__views.__alloyId969.add($.__views.__alloyId971);
    $.__views.__alloyId972 = Ti.UI.createView({
        height: "50%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId972"
    });
    $.__views.scrollView.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        width: "100%"
    });
    $.__views.loyalty.add($.__views.scrollView);
    $.__views.__alloyId1118 = Ti.UI.createLabel({
        text: "Because you deserve it.",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
<<<<<<< HEAD
        color: "black",
        textAlign: "left",
        left: "20",
        top: "10",
        bottom: "10",
        id: "__alloyId1118"
    });
    $.__views.scrollView.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createLabel({
        text: "Emerging as one of the fastest growing mobile networks in Malaysia, we want to gice something back to you, our customers for your string support and belief in us. Earn loyatly points when you make a top-up or payment each and every time.",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1119"
    });
    $.__views.scrollView.add($.__views.__alloyId1119);
    $.__views.__alloyId1120 = Ti.UI.createLabel({
        text: "For prepaid & Hybrid Plan",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        top: "10",
        bottom: "10",
        id: "__alloyId1120"
    });
    $.__views.scrollView.add($.__views.__alloyId1120);
    $.__views.__alloyId1121 = Ti.UI.createLabel({
        text: "Prepaid and Hybrid plan subscribers automatically get to enjoy this loyalty program. A total accumulation of 10 loyalty points will award you with 1 free outgoing SMS text message. More presents will be coming soon to more of our different plans so stay tuned!",
=======
        width: "90%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId973"
    });
    $.__views.__alloyId972.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createImageView({
        backgroundColor: "yellow",
        width: "40",
        height: "30",
        image: "/images/close_icon.png",
        id: "__alloyId974"
    });
    $.__views.__alloyId973.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createLabel({
        text: "FREE SMS",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        id: "__alloyId975"
    });
    $.__views.__alloyId973.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createLabel({
        text: "To redeem free SMS with your Loyalty Points:",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        id: "__alloyId976"
    });
    $.__views.__alloyId973.add($.__views.__alloyId976);
    $.__views.sms = Ti.UI.createLabel({
        id: "sms",
>>>>>>> origin/master
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1121"
    });
    $.__views.scrollView.add($.__views.__alloyId1121);
    $.__views.__alloyId1122 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId1122"
    });
    $.__views.loyalty.add($.__views.__alloyId1122);
    loyalty ? $.__views.__alloyId1122.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1122!click!loyalty"] = true;
    $.__views.__alloyId1123 = Ti.UI.createLabel({
        text: "Loyalty Rewards",
        color: "white",
        id: "__alloyId1123"
    });
<<<<<<< HEAD
    $.__views.__alloyId1122.add($.__views.__alloyId1123);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 250;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 250;
    __defers["$.__views.__alloyId1112!click!back"] && $.__views.__alloyId1112.addEventListener("click", back);
    __defers["$.__views.__alloyId1122!click!loyalty"] && $.__views.__alloyId1122.addEventListener("click", loyalty);
=======
    $.__views.__alloyId973.add($.__views.sms);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";
    __defers["$.__views.__alloyId967!click!back"] && $.__views.__alloyId967.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;