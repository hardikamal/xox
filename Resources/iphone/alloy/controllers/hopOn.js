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
    $.__views.__alloyId358 = Alloy.createController("_header", {
        id: "__alloyId358",
        __parentSymbol: $.__views.hopOn
    });
    $.__views.__alloyId358.setParent($.__views.hopOn);
    $.__views.__alloyId359 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId359"
    });
    $.__views.hopOn.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId360"
    });
    $.__views.__alloyId359.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId361"
    });
    $.__views.__alloyId359.add($.__views.__alloyId361);
    back ? $.__views.__alloyId361.addEventListener("click", back) : __defers["$.__views.__alloyId361!click!back"] = true;
    $.__views.__alloyId362 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId362"
    });
    $.__views.hopOn.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createLabel({
        text: "Step 1 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId363"
    });
    $.__views.__alloyId362.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createLabel({
        text: "Instruction",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId364"
    });
    $.__views.__alloyId362.add($.__views.__alloyId364);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn.add($.__views.scrollView);
    $.__views.__alloyId365 = Ti.UI.createView({
        top: "10",
        bottom: "20",
        height: "20",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId365"
    });
    $.__views.scrollView.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createLabel({
        text: "HopOn Details",
        backgroundColor: "transparent",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId366"
    });
    $.__views.__alloyId365.add($.__views.__alloyId366);
    $.__views.__alloyId367 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId367"
    });
    $.__views.scrollView.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createLabel({
        text: "Thank you for choosing XOX, we may serve you better when you port into XOX service. Kindly read through the below instructions before you proceed with the application.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId368"
    });
    $.__views.__alloyId367.add($.__views.__alloyId368);
    $.__views.__alloyId369 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId369"
    });
    $.__views.scrollView.add($.__views.__alloyId369);
    $.__views.__alloyId370 = Ti.UI.createLabel({
        text: "REGISTRATION",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId370"
    });
    $.__views.__alloyId369.add($.__views.__alloyId370);
    $.__views.__alloyId371 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId371"
    });
    $.__views.scrollView.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createLabel({
        text: "Please ensure all the details you fill in the registration page is correct before you press the “Proceed” button. Each I/C number is allowed a maximum of 10 Mobile Numbers HopOn registration.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId372"
    });
    $.__views.__alloyId371.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId373"
    });
    $.__views.scrollView.add($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createLabel({
        text: "PAYMENT",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId374"
    });
    $.__views.__alloyId373.add($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId375"
    });
    $.__views.scrollView.add($.__views.__alloyId375);
    $.__views.__alloyId376 = Ti.UI.createLabel({
        text: "XOX will charge a registration fee of Ringgit Malaysia Six (RM6) per number for every online application porting request.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId376"
    });
    $.__views.__alloyId375.add($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId377"
    });
    $.__views.scrollView.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createLabel({
        text: "DELIVERY",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId378"
    });
    $.__views.__alloyId377.add($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId379"
    });
    $.__views.scrollView.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createLabel({
        text: "Upon receiving your application and successful payment, XOX will courier the SIM Card to you within 3-5 working days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId380"
    });
    $.__views.__alloyId379.add($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId381"
    });
    $.__views.scrollView.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createLabel({
        text: "VERIFICATION",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId382"
    });
    $.__views.__alloyId381.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createView({
        bottom: "10",
        width: "90%",
        height: "100",
        id: "__alloyId383"
    });
    $.__views.scrollView.add($.__views.__alloyId383);
    $.__views.__alloyId384 = Ti.UI.createLabel({
        text: "While you received the Welcome Letter and SIM Card from XOX, you will need to log on to http://onlinestore.xox.com.my/hopon to verify your details and complete the “Verification” process within 30 days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId384"
    });
    $.__views.__alloyId383.add($.__views.__alloyId384);
    $.__views.__alloyId385 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId385"
    });
    $.__views.hopOn.add($.__views.__alloyId385);
    next ? $.__views.__alloyId385.addEventListener("click", next) : __defers["$.__views.__alloyId385!click!next"] = true;
    $.__views.__alloyId386 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId386"
    });
    $.__views.__alloyId385.add($.__views.__alloyId386);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId361!click!back"] && $.__views.__alloyId361.addEventListener("click", back);
    __defers["$.__views.__alloyId385!click!next"] && $.__views.__alloyId385.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;