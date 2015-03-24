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
    function next() {
        DRAWER.navigation("hopOn2", 1);
        console.log("next");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hopOn";
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
    $.__views.hopOn = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOn"
    });
    $.__views.hopOn && $.addTopLevelView($.__views.hopOn);
    $.__views.__alloyId481 = Alloy.createController("_header", {
        id: "__alloyId481",
        __parentSymbol: $.__views.hopOn
    });
    $.__views.__alloyId481.setParent($.__views.hopOn);
    $.__views.__alloyId482 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId482"
    });
    $.__views.hopOn.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId483"
    });
    $.__views.__alloyId482.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId484"
    });
    $.__views.__alloyId482.add($.__views.__alloyId484);
    back ? $.__views.__alloyId484.addEventListener("click", back) : __defers["$.__views.__alloyId484!click!back"] = true;
    $.__views.__alloyId485 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId485"
    });
    $.__views.hopOn.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createLabel({
        text: "Step 1 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId486"
    });
    $.__views.__alloyId485.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createLabel({
        text: "Instruction",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId487"
    });
    $.__views.__alloyId485.add($.__views.__alloyId487);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn.add($.__views.scrollView);
    $.__views.__alloyId488 = Ti.UI.createView({
        top: "10",
        bottom: "20",
        height: "20",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId488"
    });
    $.__views.scrollView.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createLabel({
        text: "HopOn Details",
        backgroundColor: "transparent",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId489"
    });
    $.__views.__alloyId488.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId490"
    });
    $.__views.scrollView.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createLabel({
        text: "Thank you for choosing XOX, we may serve you better when you port into XOX service. Kindly read through the below instructions before you proceed with the application.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId491"
    });
    $.__views.__alloyId490.add($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId492"
    });
    $.__views.scrollView.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createLabel({
        text: "REGISTRATION",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId493"
    });
    $.__views.__alloyId492.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId494"
    });
    $.__views.scrollView.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createLabel({
        text: "Please ensure all the details you fill in the registration page is correct before you press the “Proceed” button. Each I/C number is allowed a maximum of 10 Mobile Numbers HopOn registration.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId495"
    });
    $.__views.__alloyId494.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId496"
    });
    $.__views.scrollView.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createLabel({
        text: "PAYMENT",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId497"
    });
    $.__views.__alloyId496.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId498"
    });
    $.__views.scrollView.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createLabel({
        text: "XOX will charge a registration fee of Ringgit Malaysia Six (RM6) per number for every online application porting request.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId499"
    });
    $.__views.__alloyId498.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId500"
    });
    $.__views.scrollView.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createLabel({
        text: "DELIVERY",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId501"
    });
    $.__views.__alloyId500.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId502"
    });
    $.__views.scrollView.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createLabel({
        text: "Upon receiving your application and successful payment, XOX will courier the SIM Card to you within 3-5 working days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId503"
    });
    $.__views.__alloyId502.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId504"
    });
    $.__views.scrollView.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createLabel({
        text: "VERIFICATION",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId505"
    });
    $.__views.__alloyId504.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createView({
        bottom: "10",
        width: "90%",
        height: "100",
        id: "__alloyId506"
    });
    $.__views.scrollView.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createLabel({
        text: "While you received the Welcome Letter and SIM Card from XOX, you will need to log on to http://onlinestore.xox.com.my/hopon to verify your details and complete the “Verification” process within 30 days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId507"
    });
    $.__views.__alloyId506.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId508"
    });
    $.__views.hopOn.add($.__views.__alloyId508);
    next ? $.__views.__alloyId508.addEventListener("click", next) : __defers["$.__views.__alloyId508!click!next"] = true;
    $.__views.__alloyId509 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId509"
    });
    $.__views.__alloyId508.add($.__views.__alloyId509);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId484!click!back"] && $.__views.__alloyId484.addEventListener("click", back);
    __defers["$.__views.__alloyId508!click!next"] && $.__views.__alloyId508.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;