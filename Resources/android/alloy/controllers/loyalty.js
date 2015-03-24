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
        DRAWER.navigation("myAccount", 1);
    }
<<<<<<< Updated upstream
    function loyalty() {
        console.log("loyalty");
        DRAWER.navigation("loyalty2", 1);
    }
=======
>>>>>>> Stashed changes
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
<<<<<<< HEAD
    $.__views.__alloyId1172 = Alloy.createController("_header", {
        id: "__alloyId1172",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1109 = Alloy.createController("_header", {
        id: "__alloyId1109",
=======
    $.__views.__alloyId1172 = Alloy.createController("_header", {
        id: "__alloyId1172",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1172 = Alloy.createController("_header", {
        id: "__alloyId1172",
>>>>>>> origin/master
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId1172.setParent($.__views.loyalty);
    $.__views.__alloyId1173 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1173"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.loyalty.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId252 = Alloy.createController("_header", {
        id: "__alloyId252",
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId252.setParent($.__views.loyalty);
    $.__views.__alloyId253 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId253"
    });
    $.__views.loyalty.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.loyalty.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.loyalty.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1174"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId254"
    });
    $.__views.__alloyId253.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1174"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1174"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1175"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1112"
=======
        id: "__alloyId1175"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1175"
>>>>>>> origin/master
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1175);
    back ? $.__views.__alloyId1175.addEventListener("click", back) : __defers["$.__views.__alloyId1175!click!back"] = true;
    $.__views.__alloyId1176 = Ti.UI.createView({
        height: "100",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1176"
    });
    $.__views.loyalty.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#E6E7E9",
        id: "__alloyId1177"
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.__alloyId1176.add($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createLabel({
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId965.add($.__views.__alloyId967);
    back ? $.__views.__alloyId967.addEventListener("click", back) : __defers["$.__views.__alloyId967!click!back"] = true;
=======
        id: "__alloyId255"
    });
    $.__views.__alloyId253.add($.__views.__alloyId255);
    back ? $.__views.__alloyId255.addEventListener("click", back) : __defers["$.__views.__alloyId255!click!back"] = true;
>>>>>>> Stashed changes
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.loyalty.add($.__views.scrollView);
<<<<<<< Updated upstream
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
=======
    $.__views.__alloyId256 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId256"
    });
    $.__views.scrollView.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId257"
    });
    $.__views.__alloyId256.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1176.add($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1176.add($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Your Loyalty Points",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1178"
    });
    $.__views.__alloyId1177.add($.__views.__alloyId1178);
    $.__views.__alloyId1179 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId258"
    });
    $.__views.__alloyId257.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1178"
    });
    $.__views.__alloyId1177.add($.__views.__alloyId1178);
    $.__views.__alloyId1179 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1178"
    });
    $.__views.__alloyId1177.add($.__views.__alloyId1178);
    $.__views.__alloyId1179 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "8500",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1179"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1116"
=======
        id: "__alloyId1179"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1179"
>>>>>>> origin/master
    });
    $.__views.__alloyId1177.add($.__views.__alloyId1179);
    $.__views.__alloyId1180 = Ti.UI.createView({
        backgroundColor: "black",
        width: "100%",
        height: "1",
        id: "__alloyId1180"
    });
    $.__views.loyalty.add($.__views.__alloyId1180);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.loyalty.add($.__views.scrollView);
    $.__views.__alloyId1181 = Ti.UI.createLabel({
        text: "Because you deserve it.",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        top: "10",
        bottom: "10",
        id: "__alloyId1181"
    });
    $.__views.scrollView.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createLabel({
        text: "Emerging as one of the fastest growing mobile networks in Malaysia, we want to gice something back to you, our customers for your string support and belief in us. Earn loyatly points when you make a top-up or payment each and every time.",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1182"
    });
    $.__views.scrollView.add($.__views.__alloyId1182);
    $.__views.__alloyId1183 = Ti.UI.createLabel({
        text: "For prepaid & Hybrid Plan",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        top: "10",
        bottom: "10",
        id: "__alloyId1183"
    });
    $.__views.scrollView.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createLabel({
        text: "Prepaid and Hybrid plan subscribers automatically get to enjoy this loyalty program. A total accumulation of 10 loyalty points will award you with 1 free outgoing SMS text message. More presents will be coming soon to more of our different plans so stay tuned!",
<<<<<<< HEAD
=======
        width: "90%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId973"
    });
    $.__views.__alloyId972.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createImageView({
=======
        id: "__alloyId259"
    });
    $.__views.__alloyId257.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createView({
        height: "50%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId260"
    });
    $.__views.scrollView.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "90%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId261"
    });
    $.__views.__alloyId260.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "yellow",
        width: "40",
        height: "30",
        image: "/images/close_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId974"
    });
    $.__views.__alloyId973.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createLabel({
=======
        id: "__alloyId262"
    });
    $.__views.__alloyId261.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "FREE SMS",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
<<<<<<< Updated upstream
        id: "__alloyId975"
    });
    $.__views.__alloyId973.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createLabel({
=======
        id: "__alloyId263"
    });
    $.__views.__alloyId261.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "To redeem free SMS with your Loyalty Points:",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
<<<<<<< Updated upstream
        id: "__alloyId976"
    });
    $.__views.__alloyId973.add($.__views.__alloyId976);
    $.__views.sms = Ti.UI.createLabel({
        id: "sms",
>>>>>>> origin/master
=======
>>>>>>> origin/master
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1184"
    });
    $.__views.scrollView.add($.__views.__alloyId1184);
    $.__views.__alloyId1185 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId1185"
    });
    $.__views.loyalty.add($.__views.__alloyId1185);
    loyalty ? $.__views.__alloyId1185.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1185!click!loyalty"] = true;
    $.__views.__alloyId1186 = Ti.UI.createLabel({
        text: "Loyalty Rewards",
        color: "white",
        id: "__alloyId1186"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1186);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 250;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 250;
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId1175!click!back"] && $.__views.__alloyId1175.addEventListener("click", back);
    __defers["$.__views.__alloyId1185!click!loyalty"] && $.__views.__alloyId1185.addEventListener("click", loyalty);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1112!click!back"] && $.__views.__alloyId1112.addEventListener("click", back);
    __defers["$.__views.__alloyId1122!click!loyalty"] && $.__views.__alloyId1122.addEventListener("click", loyalty);
=======
    $.__views.__alloyId973.add($.__views.sms);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";
    __defers["$.__views.__alloyId967!click!back"] && $.__views.__alloyId967.addEventListener("click", back);
>>>>>>> origin/master
=======
        id: "__alloyId264"
    });
    $.__views.__alloyId261.add($.__views.__alloyId264);
    $.__views.sms = Ti.UI.createLabel({
        id: "sms",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center"
    });
    $.__views.__alloyId261.add($.__views.sms);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";
    __defers["$.__views.__alloyId255!click!back"] && $.__views.__alloyId255.addEventListener("click", back);
>>>>>>> Stashed changes
=======
    __defers["$.__views.__alloyId1175!click!back"] && $.__views.__alloyId1175.addEventListener("click", back);
    __defers["$.__views.__alloyId1185!click!loyalty"] && $.__views.__alloyId1185.addEventListener("click", loyalty);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId1175!click!back"] && $.__views.__alloyId1175.addEventListener("click", back);
    __defers["$.__views.__alloyId1185!click!loyalty"] && $.__views.__alloyId1185.addEventListener("click", loyalty);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;