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
    $.__views.__alloyId251 = Alloy.createController("_header", {
        id: "__alloyId251",
        __parentSymbol: $.__views.hopOn
    });
    $.__views.__alloyId251.setParent($.__views.hopOn);
    $.__views.__alloyId252 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId252"
    });
    $.__views.hopOn.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId253"
    });
    $.__views.__alloyId252.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId254"
    });
    $.__views.__alloyId252.add($.__views.__alloyId254);
    back ? $.__views.__alloyId254.addEventListener("click", back) : __defers["$.__views.__alloyId254!click!back"] = true;
    $.__views.__alloyId255 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId255"
    });
    $.__views.hopOn.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createLabel({
        text: "Step 1 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId256"
    });
    $.__views.__alloyId255.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createLabel({
        text: "Instruction",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId257"
    });
    $.__views.__alloyId255.add($.__views.__alloyId257);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn.add($.__views.scrollView);
    $.__views.__alloyId258 = Ti.UI.createView({
        top: "10",
        bottom: "20",
        height: "20",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId258"
    });
    $.__views.scrollView.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createLabel({
        text: "HopOn Details",
        backgroundColor: "transparent",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId259"
    });
    $.__views.__alloyId258.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId260"
    });
    $.__views.scrollView.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createLabel({
        text: "Thank you for choosing XOX, we may serve you better when you port into XOX service. Kindly read through the below instructions before you proceed with the application.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId261"
    });
    $.__views.__alloyId260.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId262"
    });
    $.__views.scrollView.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createLabel({
        text: "REGISTRATION",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId263"
    });
    $.__views.__alloyId262.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId264"
    });
    $.__views.scrollView.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createLabel({
        text: "Please ensure all the details you fill in the registration page is correct before you press the “Proceed” button. Each I/C number is allowed a maximum of 10 Mobile Numbers HopOn registration.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId265"
    });
    $.__views.__alloyId264.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId266"
    });
    $.__views.scrollView.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createLabel({
        text: "PAYMENT",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId267"
    });
    $.__views.__alloyId266.add($.__views.__alloyId267);
    $.__views.__alloyId268 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId268"
    });
    $.__views.scrollView.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createLabel({
        text: "XOX will charge a registration fee of Ringgit Malaysia Six (RM6) per number for every online application porting request.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId269"
    });
    $.__views.__alloyId268.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId270"
    });
    $.__views.scrollView.add($.__views.__alloyId270);
    $.__views.__alloyId271 = Ti.UI.createLabel({
        text: "DELIVERY",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId271"
    });
    $.__views.__alloyId270.add($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId272"
    });
    $.__views.scrollView.add($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createLabel({
        text: "Upon receiving your application and successful payment, XOX will courier the SIM Card to you within 3-5 working days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId273"
    });
    $.__views.__alloyId272.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId274"
    });
    $.__views.scrollView.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createLabel({
        text: "VERIFICATION",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId275"
    });
    $.__views.__alloyId274.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createView({
        bottom: "10",
        width: "90%",
        height: "100",
        id: "__alloyId276"
    });
    $.__views.scrollView.add($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createLabel({
        text: "While you received the Welcome Letter and SIM Card from XOX, you will need to log on to http://onlinestore.xox.com.my/hopon to verify your details and complete the “Verification” process within 30 days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId277"
    });
    $.__views.__alloyId276.add($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId278"
    });
    $.__views.hopOn.add($.__views.__alloyId278);
    next ? $.__views.__alloyId278.addEventListener("click", next) : __defers["$.__views.__alloyId278!click!next"] = true;
    $.__views.__alloyId279 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId279"
    });
    $.__views.__alloyId278.add($.__views.__alloyId279);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId254!click!back"] && $.__views.__alloyId254.addEventListener("click", back);
    __defers["$.__views.__alloyId278!click!next"] && $.__views.__alloyId278.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;