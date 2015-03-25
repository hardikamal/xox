function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function purchase() {
        console.log("purchase");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "penang2";
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
    $.__views.penang2 = Ti.UI.createView({
        layout: "composite",
        id: "penang2"
    });
    $.__views.penang2 && $.addTopLevelView($.__views.penang2);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF",
        top: "0"
    });
    $.__views.penang2.add($.__views.scrollView);
    $.__views.__alloyId1838 = Ti.UI.createLabel({
        text: "XOX Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1838"
    });
    $.__views.scrollView.add($.__views.__alloyId1838);
    $.__views.__alloyId1839 = Ti.UI.createLabel({
        text: "United Pack RM20",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1839"
    });
    $.__views.scrollView.add($.__views.__alloyId1839);
    $.__views.__alloyId1840 = Ti.UI.createLabel({
        text: "You get:",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1840"
    });
    $.__views.scrollView.add($.__views.__alloyId1840);
    $.__views.__alloyId1841 = Ti.UI.createLabel({
        text: "FREE SIM pack delivered to your doorstep.\n500MB of Mobile Data Plan\nRM7 worth of Airtime, to be used for Voice Calls, Video Calls, SMS and Mobile Data Plan.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1841"
    });
    $.__views.scrollView.add($.__views.__alloyId1841);
    $.__views.__alloyId1842 = Ti.UI.createLabel({
        text: "View Prepaid full features and rates",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1842"
    });
    $.__views.scrollView.add($.__views.__alloyId1842);
    $.__views.__alloyId1843 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        bottom: "0",
        id: "__alloyId1843"
    });
    $.__views.penang2.add($.__views.__alloyId1843);
    purchase ? $.__views.__alloyId1843.addEventListener("click", purchase) : __defers["$.__views.__alloyId1843!click!purchase"] = true;
    $.__views.__alloyId1844 = Ti.UI.createLabel({
        text: "PURCHASE NOW",
        color: "white",
        id: "__alloyId1844"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1844);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 50;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 50;
    __defers["$.__views.__alloyId1843!click!purchase"] && $.__views.__alloyId1843.addEventListener("click", purchase);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;