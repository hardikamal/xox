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
    $.__views.__alloyId588 = Alloy.createController("_header", {
        id: "__alloyId588",
        __parentSymbol: $.__views.hopOnStatus
    });
    $.__views.__alloyId588.setParent($.__views.hopOnStatus);
    $.__views.__alloyId589 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId589"
    });
    $.__views.hopOnStatus.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId590"
    });
    $.__views.__alloyId589.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId591"
    });
    $.__views.__alloyId589.add($.__views.__alloyId591);
    back ? $.__views.__alloyId591.addEventListener("click", back) : __defers["$.__views.__alloyId591!click!back"] = true;
    $.__views.__alloyId592 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId592"
    });
    $.__views.hopOnStatus.add($.__views.__alloyId592);
    $.__views.__alloyId593 = Ti.UI.createLabel({
        text: "Status",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId593"
    });
    $.__views.__alloyId592.add($.__views.__alloyId593);
    $.__views.__alloyId594 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId594"
    });
    $.__views.hopOnStatus.add($.__views.__alloyId594);
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
    $.__views.__alloyId594.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId594.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOnStatus.add($.__views.scrollView);
    $.__views.__alloyId595 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        top: "10",
        id: "__alloyId595"
    });
    $.__views.scrollView.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createLabel({
        text: "Mobile No.",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId596"
    });
    $.__views.__alloyId595.add($.__views.__alloyId596);
    $.__views.__alloyId597 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId597"
    });
    $.__views.__alloyId595.add($.__views.__alloyId597);
    $.__views.__alloyId598 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId598"
    });
    $.__views.scrollView.add($.__views.__alloyId598);
    $.__views.__alloyId599 = Ti.UI.createLabel({
        text: "Serial No.*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId599"
    });
    $.__views.__alloyId598.add($.__views.__alloyId599);
    $.__views.__alloyId600 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId600"
    });
    $.__views.__alloyId598.add($.__views.__alloyId600);
    $.__views.__alloyId601 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId601"
    });
    $.__views.hopOnStatus.add($.__views.__alloyId601);
    proceed ? $.__views.__alloyId601.addEventListener("click", proceed) : __defers["$.__views.__alloyId601!click!proceed"] = true;
    $.__views.__alloyId602 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId602"
    });
    $.__views.__alloyId601.add($.__views.__alloyId602);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId591!click!back"] && $.__views.__alloyId591.addEventListener("click", back);
    __defers["$.__views.__alloyId601!click!proceed"] && $.__views.__alloyId601.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;