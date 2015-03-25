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
        DRAWER.navigation("hopOn", 1);
    }
    function proceed() {
        DRAWER.navigation("hopOn", 1);
        console.log("proceed");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hopOnStatus";
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
    $.__views.hopOnStatus = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOnStatus"
    });
    $.__views.hopOnStatus && $.addTopLevelView($.__views.hopOnStatus);
    $.__views.__alloyId653 = Alloy.createController("_header", {
        id: "__alloyId653",
        __parentSymbol: $.__views.hopOnStatus
    });
    $.__views.__alloyId653.setParent($.__views.hopOnStatus);
    $.__views.__alloyId654 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId654"
    });
    $.__views.hopOnStatus.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId655"
    });
    $.__views.__alloyId654.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId656"
    });
    $.__views.__alloyId654.add($.__views.__alloyId656);
    back ? $.__views.__alloyId656.addEventListener("click", back) : __defers["$.__views.__alloyId656!click!back"] = true;
    $.__views.__alloyId657 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId657"
    });
    $.__views.hopOnStatus.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createLabel({
        text: "Status",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId658"
    });
    $.__views.__alloyId657.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId659"
    });
    $.__views.hopOnStatus.add($.__views.__alloyId659);
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "INFO",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "38%"
    });
    $.__views.__alloyId659.add($.__views.prepaid_subtitle);
    $.__views.prepaid_mandatory = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "*Please fill in the Mandatory field",
        id: "prepaid_mandatory",
        backgroundColor: "transparent",
        color: "black",
        width: "50%",
        top: "5"
    });
    $.__views.__alloyId659.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOnStatus.add($.__views.scrollView);
    $.__views.__alloyId660 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        top: "10",
        id: "__alloyId660"
    });
    $.__views.scrollView.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createLabel({
        text: "Mobile No.",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId661"
    });
    $.__views.__alloyId660.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId662"
    });
    $.__views.__alloyId660.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId663"
    });
    $.__views.scrollView.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createLabel({
        text: "Serial No.*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId664"
    });
    $.__views.__alloyId663.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId665"
    });
    $.__views.__alloyId663.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId666"
    });
    $.__views.hopOnStatus.add($.__views.__alloyId666);
    proceed ? $.__views.__alloyId666.addEventListener("click", proceed) : __defers["$.__views.__alloyId666!click!proceed"] = true;
    $.__views.__alloyId667 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId667"
    });
    $.__views.__alloyId666.add($.__views.__alloyId667);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId656!click!back"] && $.__views.__alloyId656.addEventListener("click", back);
    __defers["$.__views.__alloyId666!click!proceed"] && $.__views.__alloyId666.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;