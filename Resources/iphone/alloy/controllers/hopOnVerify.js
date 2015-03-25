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
    this.__controllerPath = "hopOnVerify";
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
    $.__views.hopOnVerify = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOnVerify"
    });
    $.__views.hopOnVerify && $.addTopLevelView($.__views.hopOnVerify);
    $.__views.__alloyId618 = Alloy.createController("_header", {
        id: "__alloyId618",
        __parentSymbol: $.__views.hopOnVerify
    });
    $.__views.__alloyId618.setParent($.__views.hopOnVerify);
    $.__views.__alloyId619 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId619"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId620"
    });
    $.__views.__alloyId619.add($.__views.__alloyId620);
    $.__views.__alloyId621 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId621"
    });
    $.__views.__alloyId619.add($.__views.__alloyId621);
    back ? $.__views.__alloyId621.addEventListener("click", back) : __defers["$.__views.__alloyId621!click!back"] = true;
    $.__views.__alloyId622 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId622"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId622);
    $.__views.__alloyId623 = Ti.UI.createLabel({
        text: "Verification",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId623"
    });
    $.__views.__alloyId622.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId624"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId624);
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "VERIFICATION INFO",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "38%"
    });
    $.__views.__alloyId624.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId624.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOnVerify.add($.__views.scrollView);
    $.__views.__alloyId625 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        top: "10",
        id: "__alloyId625"
    });
    $.__views.scrollView.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createLabel({
        text: "Mobile No.",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId626"
    });
    $.__views.__alloyId625.add($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId627"
    });
    $.__views.__alloyId625.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId628"
    });
    $.__views.scrollView.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createLabel({
        text: "Serial No.*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId629"
    });
    $.__views.__alloyId628.add($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId630"
    });
    $.__views.__alloyId628.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId631"
    });
    $.__views.scrollView.add($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createLabel({
        text: "Enter Code.*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId632"
    });
    $.__views.__alloyId631.add($.__views.__alloyId632);
    $.__views.__alloyId633 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId633"
    });
    $.__views.__alloyId631.add($.__views.__alloyId633);
    $.__views.__alloyId634 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        bottom: "5",
        id: "__alloyId634"
    });
    $.__views.scrollView.add($.__views.__alloyId634);
    $.__views.__alloyId635 = Ti.UI.createLabel({
        text: "TAC*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId635"
    });
    $.__views.__alloyId634.add($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        bottom: "2",
        borderColor: "#F2F2F2",
        id: "__alloyId636"
    });
    $.__views.__alloyId634.add($.__views.__alloyId636);
    $.__views.__alloyId637 = Ti.UI.createView({
        height: "40",
        backgroundColor: "red",
        id: "__alloyId637"
    });
    $.__views.__alloyId634.add($.__views.__alloyId637);
    proceed ? $.__views.__alloyId637.addEventListener("click", proceed) : __defers["$.__views.__alloyId637!click!proceed"] = true;
    $.__views.__alloyId638 = Ti.UI.createLabel({
        text: "REQUEST TAC",
        color: "white",
        id: "__alloyId638"
    });
    $.__views.__alloyId637.add($.__views.__alloyId638);
    $.__views.__alloyId639 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId639"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId639);
    proceed ? $.__views.__alloyId639.addEventListener("click", proceed) : __defers["$.__views.__alloyId639!click!proceed"] = true;
    $.__views.__alloyId640 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId640"
    });
    $.__views.__alloyId639.add($.__views.__alloyId640);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId621!click!back"] && $.__views.__alloyId621.addEventListener("click", back);
    __defers["$.__views.__alloyId637!click!proceed"] && $.__views.__alloyId637.addEventListener("click", proceed);
    __defers["$.__views.__alloyId639!click!proceed"] && $.__views.__alloyId639.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;