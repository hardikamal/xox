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
    $.__views.__alloyId292 = Alloy.createController("_header", {
        id: "__alloyId292",
        __parentSymbol: $.__views.hopOn
    });
    $.__views.__alloyId292.setParent($.__views.hopOn);
    $.__views.__alloyId293 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId293"
    });
    $.__views.hopOn.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId294"
    });
    $.__views.__alloyId293.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId295"
    });
    $.__views.__alloyId293.add($.__views.__alloyId295);
    back ? $.__views.__alloyId295.addEventListener("click", back) : __defers["$.__views.__alloyId295!click!back"] = true;
    $.__views.__alloyId296 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId296"
    });
    $.__views.hopOn.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createLabel({
        text: "Step 1 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId297"
    });
    $.__views.__alloyId296.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createLabel({
        text: "Instruction",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId298"
    });
    $.__views.__alloyId296.add($.__views.__alloyId298);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn.add($.__views.scrollView);
    $.__views.__alloyId299 = Ti.UI.createView({
        top: "10",
        bottom: "20",
        height: "20",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId299"
    });
    $.__views.scrollView.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createLabel({
        text: "HopOn Details",
        backgroundColor: "transparent",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId300"
    });
    $.__views.__alloyId299.add($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId301"
    });
    $.__views.scrollView.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createLabel({
        text: "Thank you for choosing XOX, we may serve you better when you port into XOX service. Kindly read through the below instructions before you proceed with the application.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId302"
    });
    $.__views.__alloyId301.add($.__views.__alloyId302);
    $.__views.__alloyId303 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId303"
    });
    $.__views.scrollView.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createLabel({
        text: "REGISTRATION",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId304"
    });
    $.__views.__alloyId303.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId305"
    });
    $.__views.scrollView.add($.__views.__alloyId305);
    $.__views.__alloyId306 = Ti.UI.createLabel({
        text: "Please ensure all the details you fill in the registration page is correct before you press the “Proceed” button. Each I/C number is allowed a maximum of 10 Mobile Numbers HopOn registration.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId306"
    });
    $.__views.__alloyId305.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId307"
    });
    $.__views.scrollView.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createLabel({
        text: "PAYMENT",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId308"
    });
    $.__views.__alloyId307.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId309"
    });
    $.__views.scrollView.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createLabel({
        text: "XOX will charge a registration fee of Ringgit Malaysia Six (RM6) per number for every online application porting request.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId310"
    });
    $.__views.__alloyId309.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId311"
    });
    $.__views.scrollView.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createLabel({
        text: "DELIVERY",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId312"
    });
    $.__views.__alloyId311.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId313"
    });
    $.__views.scrollView.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createLabel({
        text: "Upon receiving your application and successful payment, XOX will courier the SIM Card to you within 3-5 working days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId314"
    });
    $.__views.__alloyId313.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId315"
    });
    $.__views.scrollView.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createLabel({
        text: "VERIFICATION",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId316"
    });
    $.__views.__alloyId315.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createView({
        bottom: "10",
        width: "90%",
        height: "100",
        id: "__alloyId317"
    });
    $.__views.scrollView.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createLabel({
        text: "While you received the Welcome Letter and SIM Card from XOX, you will need to log on to http://onlinestore.xox.com.my/hopon to verify your details and complete the “Verification” process within 30 days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId318"
    });
    $.__views.__alloyId317.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId319"
    });
    $.__views.hopOn.add($.__views.__alloyId319);
    next ? $.__views.__alloyId319.addEventListener("click", next) : __defers["$.__views.__alloyId319!click!next"] = true;
    $.__views.__alloyId320 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId295!click!back"] && $.__views.__alloyId295.addEventListener("click", back);
    __defers["$.__views.__alloyId319!click!next"] && $.__views.__alloyId319.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;