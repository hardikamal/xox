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
        DRAWER.navigation("onlinePurchases", 1);
    }
    function purchase() {
        console.log("purchase");
        DRAWER.navigation("panda2", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "panda";
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
    $.__views.panda = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "panda"
    });
    $.__views.panda && $.addTopLevelView($.__views.panda);
    $.__views.__alloyId1478 = Alloy.createController("_header", {
        id: "__alloyId1478",
        __parentSymbol: $.__views.panda
    });
    $.__views.__alloyId1478.setParent($.__views.panda);
    $.__views.__alloyId1479 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1479"
    });
    $.__views.panda.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1480"
    });
    $.__views.__alloyId1479.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1481"
    });
    $.__views.__alloyId1479.add($.__views.__alloyId1481);
    back ? $.__views.__alloyId1481.addEventListener("click", back) : __defers["$.__views.__alloyId1481!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.panda.add($.__views.scrollView);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
        text: "XOX Prepaid Plus",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1482"
    });
    $.__views.scrollView.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createLabel({
        text: "1600 PandasRM12",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1483"
    });
    $.__views.scrollView.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createLabel({
        text: "You get:",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1484"
    });
    $.__views.scrollView.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createLabel({
        text: 'FREE SIM pack with "1600 Pandas" feature to your doorstep.',
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1485"
    });
    $.__views.scrollView.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createLabel({
        text: "1,800 FREE SMS*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1486"
    });
    $.__views.scrollView.add($.__views.__alloyId1486);
    $.__views.__alloyId1487 = Ti.UI.createLabel({
        text: "RM5 worth of Airtie, to be used for Voice Calls, Video Calls, SMS and Mobile Data Plan.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1487"
    });
    $.__views.scrollView.add($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createLabel({
        text: "*150 SMS per month to XOX network over 12 months, value worth RM90.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1488"
    });
    $.__views.scrollView.add($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createLabel({
        text: "TOP UP RM30 Bonus Notebook + Pen",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1489"
    });
    $.__views.scrollView.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createLabel({
        text: "TOP UP RM50 Bonus Lanyard",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1490"
    });
    $.__views.scrollView.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
        text: "Limited Time Offer only",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1491"
    });
    $.__views.scrollView.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createLabel({
        text: "*Promotions applicable for online purchases only.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1492"
    });
    $.__views.scrollView.add($.__views.__alloyId1492);
    $.__views.__alloyId1493 = Ti.UI.createLabel({
        text: "Terms & Conditions apply.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1493"
    });
    $.__views.scrollView.add($.__views.__alloyId1493);
    $.__views.__alloyId1494 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1494"
    });
    $.__views.panda.add($.__views.__alloyId1494);
    purchase ? $.__views.__alloyId1494.addEventListener("click", purchase) : __defers["$.__views.__alloyId1494!click!purchase"] = true;
    $.__views.__alloyId1495 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1495"
    });
    $.__views.__alloyId1494.add($.__views.__alloyId1495);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1481!click!back"] && $.__views.__alloyId1481.addEventListener("click", back);
    __defers["$.__views.__alloyId1494!click!purchase"] && $.__views.__alloyId1494.addEventListener("click", purchase);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;