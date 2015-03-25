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
    $.__views.__alloyId1507 = Alloy.createController("_header", {
        id: "__alloyId1507",
        __parentSymbol: $.__views.panda
    });
    $.__views.__alloyId1507.setParent($.__views.panda);
    $.__views.__alloyId1508 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1508"
    });
    $.__views.panda.add($.__views.__alloyId1508);
    $.__views.__alloyId1509 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1509"
    });
    $.__views.__alloyId1508.add($.__views.__alloyId1509);
    $.__views.__alloyId1510 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1510"
    });
    $.__views.__alloyId1508.add($.__views.__alloyId1510);
    back ? $.__views.__alloyId1510.addEventListener("click", back) : __defers["$.__views.__alloyId1510!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.panda.add($.__views.scrollView);
    $.__views.__alloyId1511 = Ti.UI.createLabel({
        text: "XOX Prepaid Plus",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1511"
    });
    $.__views.scrollView.add($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createLabel({
        text: "1600 PandasRM12",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1512"
    });
    $.__views.scrollView.add($.__views.__alloyId1512);
    $.__views.__alloyId1513 = Ti.UI.createLabel({
        text: "You get:",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1513"
    });
    $.__views.scrollView.add($.__views.__alloyId1513);
    $.__views.__alloyId1514 = Ti.UI.createLabel({
        text: 'FREE SIM pack with "1600 Pandas" feature to your doorstep.',
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1514"
    });
    $.__views.scrollView.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createLabel({
        text: "1,800 FREE SMS*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1515"
    });
    $.__views.scrollView.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createLabel({
        text: "RM5 worth of Airtie, to be used for Voice Calls, Video Calls, SMS and Mobile Data Plan.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1516"
    });
    $.__views.scrollView.add($.__views.__alloyId1516);
    $.__views.__alloyId1517 = Ti.UI.createLabel({
        text: "*150 SMS per month to XOX network over 12 months, value worth RM90.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1517"
    });
    $.__views.scrollView.add($.__views.__alloyId1517);
    $.__views.__alloyId1518 = Ti.UI.createLabel({
        text: "TOP UP RM30 Bonus Notebook + Pen",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1518"
    });
    $.__views.scrollView.add($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createLabel({
        text: "TOP UP RM50 Bonus Lanyard",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1519"
    });
    $.__views.scrollView.add($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createLabel({
        text: "Limited Time Offer only",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1520"
    });
    $.__views.scrollView.add($.__views.__alloyId1520);
    $.__views.__alloyId1521 = Ti.UI.createLabel({
        text: "*Promotions applicable for online purchases only.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1521"
    });
    $.__views.scrollView.add($.__views.__alloyId1521);
    $.__views.__alloyId1522 = Ti.UI.createLabel({
        text: "Terms & Conditions apply.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1522"
    });
    $.__views.scrollView.add($.__views.__alloyId1522);
    $.__views.__alloyId1523 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1523"
    });
    $.__views.panda.add($.__views.__alloyId1523);
    purchase ? $.__views.__alloyId1523.addEventListener("click", purchase) : __defers["$.__views.__alloyId1523!click!purchase"] = true;
    $.__views.__alloyId1524 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1524"
    });
    $.__views.__alloyId1523.add($.__views.__alloyId1524);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1510!click!back"] && $.__views.__alloyId1510.addEventListener("click", back);
    __defers["$.__views.__alloyId1523!click!purchase"] && $.__views.__alloyId1523.addEventListener("click", purchase);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;