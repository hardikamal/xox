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
    $.__views.__alloyId1413 = Alloy.createController("_header", {
        id: "__alloyId1413",
        __parentSymbol: $.__views.panda
    });
    $.__views.__alloyId1413.setParent($.__views.panda);
    $.__views.__alloyId1414 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1414"
    });
    $.__views.panda.add($.__views.__alloyId1414);
    $.__views.__alloyId1415 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1415"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1415);
    $.__views.__alloyId1416 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1416"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1416);
    back ? $.__views.__alloyId1416.addEventListener("click", back) : __defers["$.__views.__alloyId1416!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.panda.add($.__views.scrollView);
    $.__views.__alloyId1417 = Ti.UI.createLabel({
        text: "XOX Prepaid Plus",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1417"
    });
    $.__views.scrollView.add($.__views.__alloyId1417);
    $.__views.__alloyId1418 = Ti.UI.createLabel({
        text: "1600 PandasRM12",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1418"
    });
    $.__views.scrollView.add($.__views.__alloyId1418);
    $.__views.__alloyId1419 = Ti.UI.createLabel({
        text: "You get:",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1419"
    });
    $.__views.scrollView.add($.__views.__alloyId1419);
    $.__views.__alloyId1420 = Ti.UI.createLabel({
        text: 'FREE SIM pack with "1600 Pandas" feature to your doorstep.',
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1420"
    });
    $.__views.scrollView.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createLabel({
        text: "1,800 FREE SMS*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1421"
    });
    $.__views.scrollView.add($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createLabel({
        text: "RM5 worth of Airtie, to be used for Voice Calls, Video Calls, SMS and Mobile Data Plan.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1422"
    });
    $.__views.scrollView.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createLabel({
        text: "*150 SMS per month to XOX network over 12 months, value worth RM90.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1423"
    });
    $.__views.scrollView.add($.__views.__alloyId1423);
    $.__views.__alloyId1424 = Ti.UI.createLabel({
        text: "TOP UP RM30 Bonus Notebook + Pen",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1424"
    });
    $.__views.scrollView.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createLabel({
        text: "TOP UP RM50 Bonus Lanyard",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1425"
    });
    $.__views.scrollView.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createLabel({
        text: "Limited Time Offer only",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1426"
    });
    $.__views.scrollView.add($.__views.__alloyId1426);
    $.__views.__alloyId1427 = Ti.UI.createLabel({
        text: "*Promotions applicable for online purchases only.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "20",
        id: "__alloyId1427"
    });
    $.__views.scrollView.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createLabel({
        text: "Terms & Conditions apply.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        id: "__alloyId1428"
    });
    $.__views.scrollView.add($.__views.__alloyId1428);
    $.__views.__alloyId1429 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1429"
    });
    $.__views.panda.add($.__views.__alloyId1429);
    purchase ? $.__views.__alloyId1429.addEventListener("click", purchase) : __defers["$.__views.__alloyId1429!click!purchase"] = true;
    $.__views.__alloyId1430 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1430"
    });
    $.__views.__alloyId1429.add($.__views.__alloyId1430);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1416!click!back"] && $.__views.__alloyId1416.addEventListener("click", back);
    __defers["$.__views.__alloyId1429!click!purchase"] && $.__views.__alloyId1429.addEventListener("click", purchase);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;