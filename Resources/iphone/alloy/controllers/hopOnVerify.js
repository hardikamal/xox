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
    $.__views.__alloyId683 = Alloy.createController("_header", {
        id: "__alloyId683",
        __parentSymbol: $.__views.hopOnVerify
    });
    $.__views.__alloyId683.setParent($.__views.hopOnVerify);
    $.__views.__alloyId684 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId684"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId685"
    });
    $.__views.__alloyId684.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId686"
    });
    $.__views.__alloyId684.add($.__views.__alloyId686);
    back ? $.__views.__alloyId686.addEventListener("click", back) : __defers["$.__views.__alloyId686!click!back"] = true;
    $.__views.__alloyId687 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId687"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createLabel({
        text: "Verification",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId688"
    });
    $.__views.__alloyId687.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#bf0404",
        id: "__alloyId689"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId689);
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
    $.__views.__alloyId689.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId689.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOnVerify.add($.__views.scrollView);
    $.__views.__alloyId690 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        top: "10",
        id: "__alloyId690"
    });
    $.__views.scrollView.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createLabel({
        text: "Mobile No.",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId691"
    });
    $.__views.__alloyId690.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId692"
    });
    $.__views.__alloyId690.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId693"
    });
    $.__views.scrollView.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createLabel({
        text: "Serial No.*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId694"
    });
    $.__views.__alloyId693.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId695"
    });
    $.__views.__alloyId693.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId696"
    });
    $.__views.scrollView.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
        text: "Enter Code.*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId697"
    });
    $.__views.__alloyId696.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId698"
    });
    $.__views.__alloyId696.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        bottom: "5",
        id: "__alloyId699"
    });
    $.__views.scrollView.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createLabel({
        text: "TAC*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId700"
    });
    $.__views.__alloyId699.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        bottom: "2",
        borderColor: "#F2F2F2",
        id: "__alloyId701"
    });
    $.__views.__alloyId699.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createView({
        height: "40",
        backgroundColor: "red",
        id: "__alloyId702"
    });
    $.__views.__alloyId699.add($.__views.__alloyId702);
    proceed ? $.__views.__alloyId702.addEventListener("click", proceed) : __defers["$.__views.__alloyId702!click!proceed"] = true;
    $.__views.__alloyId703 = Ti.UI.createLabel({
        text: "REQUEST TAC",
        color: "white",
        id: "__alloyId703"
    });
    $.__views.__alloyId702.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId704"
    });
    $.__views.hopOnVerify.add($.__views.__alloyId704);
    proceed ? $.__views.__alloyId704.addEventListener("click", proceed) : __defers["$.__views.__alloyId704!click!proceed"] = true;
    $.__views.__alloyId705 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId705"
    });
    $.__views.__alloyId704.add($.__views.__alloyId705);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId686!click!back"] && $.__views.__alloyId686.addEventListener("click", back);
    __defers["$.__views.__alloyId702!click!proceed"] && $.__views.__alloyId702.addEventListener("click", proceed);
    __defers["$.__views.__alloyId704!click!proceed"] && $.__views.__alloyId704.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;