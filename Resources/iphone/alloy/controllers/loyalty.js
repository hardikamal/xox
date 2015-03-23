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
    $.__views.__alloyId960 = Alloy.createController("_header", {
        id: "__alloyId960",
=======
<<<<<<< HEAD
    $.__views.__alloyId1099 = Alloy.createController("_header", {
        id: "__alloyId1099",
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId1099.setParent($.__views.loyalty);
    $.__views.__alloyId1100 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1100"
    });
    $.__views.loyalty.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createLabel({
=======
    $.__views.__alloyId638 = Alloy.createController("_header", {
        id: "__alloyId638",
>>>>>>> origin/master
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId960.setParent($.__views.loyalty);
    $.__views.__alloyId961 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId961"
    });
<<<<<<< HEAD
    $.__views.loyalty.add($.__views.__alloyId961);
    $.__views.__alloyId962 = Ti.UI.createLabel({
=======
    $.__views.loyalty.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId962"
    });
    $.__views.__alloyId961.add($.__views.__alloyId962);
    $.__views.__alloyId963 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1101"
    });
    $.__views.__alloyId1100.add($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createImageView({
=======
        id: "__alloyId640"
    });
    $.__views.__alloyId639.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId963"
=======
<<<<<<< HEAD
        id: "__alloyId1102"
    });
    $.__views.__alloyId1100.add($.__views.__alloyId1102);
    back ? $.__views.__alloyId1102.addEventListener("click", back) : __defers["$.__views.__alloyId1102!click!back"] = true;
    $.__views.__alloyId1103 = Ti.UI.createView({
        height: "100",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1103"
    });
    $.__views.loyalty.add($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#E6E7E9",
        id: "__alloyId1104"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createLabel({
=======
        id: "__alloyId641"
>>>>>>> origin/master
    });
    $.__views.__alloyId961.add($.__views.__alloyId963);
    back ? $.__views.__alloyId963.addEventListener("click", back) : __defers["$.__views.__alloyId963!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.loyalty.add($.__views.scrollView);
    $.__views.__alloyId964 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId964"
    });
    $.__views.scrollView.add($.__views.__alloyId964);
    $.__views.__alloyId965 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId965"
    });
<<<<<<< HEAD
    $.__views.__alloyId964.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createLabel({
=======
    $.__views.__alloyId642.add($.__views.__alloyId643);
    $.__views.__alloyId644 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Your Loyalty Points",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId966"
    });
    $.__views.__alloyId965.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1105"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createLabel({
=======
        id: "__alloyId644"
    });
    $.__views.__alloyId643.add($.__views.__alloyId644);
    $.__views.__alloyId645 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "8500",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId967"
=======
<<<<<<< HEAD
        id: "__alloyId1106"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createView({
        backgroundColor: "black",
        width: "100%",
        height: "1",
        id: "__alloyId1107"
    });
    $.__views.loyalty.add($.__views.__alloyId1107);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
=======
        id: "__alloyId645"
>>>>>>> origin/master
    });
    $.__views.__alloyId965.add($.__views.__alloyId967);
    $.__views.__alloyId968 = Ti.UI.createView({
        height: "50%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId968"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createView({
=======
    $.__views.scrollView.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        width: "100%"
    });
    $.__views.loyalty.add($.__views.scrollView);
    $.__views.__alloyId1108 = Ti.UI.createLabel({
        text: "Because you deserve it.",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
<<<<<<< HEAD
        color: "black",
        textAlign: "left",
        left: "20",
        top: "10",
        bottom: "10",
        id: "__alloyId1108"
    });
    $.__views.scrollView.add($.__views.__alloyId1108);
    $.__views.__alloyId1109 = Ti.UI.createLabel({
        text: "Emerging as one of the fastest growing mobile networks in Malaysia, we want to gice something back to you, our customers for your string support and belief in us. Earn loyatly points when you make a top-up or payment each and every time.",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1109"
    });
    $.__views.scrollView.add($.__views.__alloyId1109);
    $.__views.__alloyId1110 = Ti.UI.createLabel({
        text: "For prepaid & Hybrid Plan",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        top: "10",
        bottom: "10",
        id: "__alloyId1110"
    });
    $.__views.scrollView.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createLabel({
        text: "Prepaid and Hybrid plan subscribers automatically get to enjoy this loyalty program. A total accumulation of 10 loyalty points will award you with 1 free outgoing SMS text message. More presents will be coming soon to more of our different plans so stay tuned!",
=======
        width: "90%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId969"
    });
    $.__views.__alloyId968.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createImageView({
        backgroundColor: "yellow",
        width: "40",
        height: "30",
        image: "/images/close_icon.png",
        id: "__alloyId970"
    });
    $.__views.__alloyId969.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createLabel({
        text: "FREE SMS",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        id: "__alloyId971"
    });
    $.__views.__alloyId969.add($.__views.__alloyId971);
    $.__views.__alloyId972 = Ti.UI.createLabel({
        text: "To redeem free SMS with your Loyalty Points:",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        id: "__alloyId972"
    });
    $.__views.__alloyId969.add($.__views.__alloyId972);
    $.__views.sms = Ti.UI.createLabel({
        id: "sms",
>>>>>>> origin/master
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1111"
    });
    $.__views.scrollView.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId1112"
    });
    $.__views.loyalty.add($.__views.__alloyId1112);
    loyalty ? $.__views.__alloyId1112.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1112!click!loyalty"] = true;
    $.__views.__alloyId1113 = Ti.UI.createLabel({
        text: "Loyalty Rewards",
        color: "white",
        id: "__alloyId1113"
    });
<<<<<<< HEAD
    $.__views.__alloyId969.add($.__views.sms);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";
    __defers["$.__views.__alloyId963!click!back"] && $.__views.__alloyId963.addEventListener("click", back);
=======
<<<<<<< HEAD
    $.__views.__alloyId1112.add($.__views.__alloyId1113);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 250;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 250;
    }
    __defers["$.__views.__alloyId1102!click!back"] && $.__views.__alloyId1102.addEventListener("click", back);
    __defers["$.__views.__alloyId1112!click!loyalty"] && $.__views.__alloyId1112.addEventListener("click", loyalty);
=======
    $.__views.__alloyId647.add($.__views.sms);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";
    __defers["$.__views.__alloyId641!click!back"] && $.__views.__alloyId641.addEventListener("click", back);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;