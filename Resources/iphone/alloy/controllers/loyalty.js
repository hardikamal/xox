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
    $.__views.__alloyId1053 = Alloy.createController("_header", {
        id: "__alloyId1053",
=======
<<<<<<< HEAD
    $.__views.__alloyId1099 = Alloy.createController("_header", {
        id: "__alloyId1099",
=======
    $.__views.__alloyId1053 = Alloy.createController("_header", {
        id: "__alloyId1053",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId1053.setParent($.__views.loyalty);
    $.__views.__alloyId1054 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1054"
    });
<<<<<<< HEAD
    $.__views.loyalty.add($.__views.__alloyId1054);
    $.__views.__alloyId1055 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.loyalty.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createLabel({
=======
    $.__views.loyalty.add($.__views.__alloyId1054);
    $.__views.__alloyId1055 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1055"
    });
    $.__views.__alloyId1054.add($.__views.__alloyId1055);
    $.__views.__alloyId1056 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1101"
    });
    $.__views.__alloyId1100.add($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createImageView({
=======
        id: "__alloyId1055"
    });
    $.__views.__alloyId1054.add($.__views.__alloyId1055);
    $.__views.__alloyId1056 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1056"
=======
<<<<<<< HEAD
        id: "__alloyId1102"
=======
        id: "__alloyId1056"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1054.add($.__views.__alloyId1056);
    back ? $.__views.__alloyId1056.addEventListener("click", back) : __defers["$.__views.__alloyId1056!click!back"] = true;
    $.__views.__alloyId1057 = Ti.UI.createView({
        height: "100",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1057"
    });
    $.__views.loyalty.add($.__views.__alloyId1057);
    $.__views.__alloyId1058 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId1058"
    });
    $.__views.__alloyId1057.add($.__views.__alloyId1058);
    $.__views.__alloyId1059 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1104"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createLabel({
=======
        id: "__alloyId1058"
    });
    $.__views.__alloyId1057.add($.__views.__alloyId1058);
    $.__views.__alloyId1059 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Your Loyalty Points",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1059"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1105"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createLabel({
=======
        id: "__alloyId1059"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "8500",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1060"
=======
<<<<<<< HEAD
        id: "__alloyId1106"
=======
        id: "__alloyId1060"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createView({
        backgroundColor: "black",
        width: "100%",
        height: "1",
        id: "__alloyId1061"
    });
    $.__views.loyalty.add($.__views.__alloyId1061);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.loyalty.add($.__views.scrollView);
    $.__views.__alloyId1062 = Ti.UI.createLabel({
        text: "Because you deserve it.",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        top: "10",
        bottom: "10",
        id: "__alloyId1062"
    });
    $.__views.scrollView.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createLabel({
        text: "Emerging as one of the fastest growing mobile networks in Malaysia, we want to gice something back to you, our customers for your string support and belief in us. Earn loyatly points when you make a top-up or payment each and every time.",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1063"
    });
    $.__views.scrollView.add($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createLabel({
        text: "For prepaid & Hybrid Plan",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        top: "10",
        bottom: "10",
        id: "__alloyId1064"
    });
    $.__views.scrollView.add($.__views.__alloyId1064);
    $.__views.__alloyId1065 = Ti.UI.createLabel({
        text: "Prepaid and Hybrid plan subscribers automatically get to enjoy this loyalty program. A total accumulation of 10 loyalty points will award you with 1 free outgoing SMS text message. More presents will be coming soon to more of our different plans so stay tuned!",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1065"
    });
    $.__views.scrollView.add($.__views.__alloyId1065);
    $.__views.__alloyId1066 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId1066"
    });
    $.__views.loyalty.add($.__views.__alloyId1066);
    loyalty ? $.__views.__alloyId1066.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1066!click!loyalty"] = true;
    $.__views.__alloyId1067 = Ti.UI.createLabel({
        text: "Loyalty Rewards",
        color: "white",
        id: "__alloyId1067"
    });
<<<<<<< HEAD
    $.__views.__alloyId1066.add($.__views.__alloyId1067);
=======
<<<<<<< HEAD
    $.__views.__alloyId1112.add($.__views.__alloyId1113);
=======
    $.__views.__alloyId1066.add($.__views.__alloyId1067);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 250;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 250;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1056!click!back"] && $.__views.__alloyId1056.addEventListener("click", back);
    __defers["$.__views.__alloyId1066!click!loyalty"] && $.__views.__alloyId1066.addEventListener("click", loyalty);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1102!click!back"] && $.__views.__alloyId1102.addEventListener("click", back);
    __defers["$.__views.__alloyId1112!click!loyalty"] && $.__views.__alloyId1112.addEventListener("click", loyalty);
=======
    __defers["$.__views.__alloyId1056!click!back"] && $.__views.__alloyId1056.addEventListener("click", back);
    __defers["$.__views.__alloyId1066!click!loyalty"] && $.__views.__alloyId1066.addEventListener("click", loyalty);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;