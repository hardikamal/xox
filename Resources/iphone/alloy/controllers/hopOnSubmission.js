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
    this.__controllerPath = "hopOnSubmission";
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
    $.__views.hopOnSubmission = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOnSubmission"
    });
    $.__views.hopOnSubmission && $.addTopLevelView($.__views.hopOnSubmission);
    $.__views.__alloyId603 = Alloy.createController("_header", {
        id: "__alloyId603",
        __parentSymbol: $.__views.hopOnSubmission
    });
    $.__views.__alloyId603.setParent($.__views.hopOnSubmission);
    $.__views.__alloyId604 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId604"
    });
    $.__views.hopOnSubmission.add($.__views.__alloyId604);
    $.__views.__alloyId605 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId605"
    });
    $.__views.__alloyId604.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId606"
    });
    $.__views.__alloyId604.add($.__views.__alloyId606);
    back ? $.__views.__alloyId606.addEventListener("click", back) : __defers["$.__views.__alloyId606!click!back"] = true;
    $.__views.__alloyId607 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId607"
    });
    $.__views.hopOnSubmission.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createLabel({
        text: "Resubmission",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId608"
    });
    $.__views.__alloyId607.add($.__views.__alloyId608);
    $.__views.__alloyId609 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId609"
    });
    $.__views.hopOnSubmission.add($.__views.__alloyId609);
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
    $.__views.__alloyId609.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId609.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOnSubmission.add($.__views.scrollView);
    $.__views.__alloyId610 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        top: "10",
        id: "__alloyId610"
    });
    $.__views.scrollView.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createLabel({
        text: "Mobile No.",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId611"
    });
    $.__views.__alloyId610.add($.__views.__alloyId611);
    $.__views.__alloyId612 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId612"
    });
    $.__views.__alloyId610.add($.__views.__alloyId612);
    $.__views.__alloyId613 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId613"
    });
    $.__views.scrollView.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createLabel({
        text: "Serial No.*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId614"
    });
    $.__views.__alloyId613.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId615"
    });
    $.__views.__alloyId613.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId616"
    });
    $.__views.hopOnSubmission.add($.__views.__alloyId616);
    proceed ? $.__views.__alloyId616.addEventListener("click", proceed) : __defers["$.__views.__alloyId616!click!proceed"] = true;
    $.__views.__alloyId617 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId617"
    });
    $.__views.__alloyId616.add($.__views.__alloyId617);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId606!click!back"] && $.__views.__alloyId606.addEventListener("click", back);
    __defers["$.__views.__alloyId616!click!proceed"] && $.__views.__alloyId616.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;