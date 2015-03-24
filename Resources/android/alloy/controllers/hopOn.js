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
    $.__views.__alloyId527 = Alloy.createController("_header", {
        id: "__alloyId527",
        __parentSymbol: $.__views.hopOn
    });
    $.__views.__alloyId527.setParent($.__views.hopOn);
    $.__views.__alloyId528 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId528"
    });
    $.__views.hopOn.add($.__views.__alloyId528);
    $.__views.__alloyId529 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId529"
    });
    $.__views.__alloyId528.add($.__views.__alloyId529);
    $.__views.__alloyId530 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId530"
    });
    $.__views.__alloyId528.add($.__views.__alloyId530);
    back ? $.__views.__alloyId530.addEventListener("click", back) : __defers["$.__views.__alloyId530!click!back"] = true;
    $.__views.__alloyId531 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId531"
    });
    $.__views.hopOn.add($.__views.__alloyId531);
    $.__views.__alloyId532 = Ti.UI.createLabel({
        text: "Step 1 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId532"
    });
    $.__views.__alloyId531.add($.__views.__alloyId532);
    $.__views.__alloyId533 = Ti.UI.createLabel({
        text: "Instruction",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId533"
    });
    $.__views.__alloyId531.add($.__views.__alloyId533);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn.add($.__views.scrollView);
    $.__views.__alloyId534 = Ti.UI.createView({
        top: "10",
        bottom: "20",
        height: "20",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId534"
    });
    $.__views.scrollView.add($.__views.__alloyId534);
    $.__views.__alloyId535 = Ti.UI.createLabel({
        text: "HopOn Details",
        backgroundColor: "transparent",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId535"
    });
    $.__views.__alloyId534.add($.__views.__alloyId535);
    $.__views.__alloyId536 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId536"
    });
    $.__views.scrollView.add($.__views.__alloyId536);
    $.__views.__alloyId537 = Ti.UI.createLabel({
        text: "Thank you for choosing XOX, we may serve you better when you port into XOX service. Kindly read through the below instructions before you proceed with the application.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId537"
    });
    $.__views.__alloyId536.add($.__views.__alloyId537);
    $.__views.__alloyId538 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId538"
    });
    $.__views.scrollView.add($.__views.__alloyId538);
    $.__views.__alloyId539 = Ti.UI.createLabel({
        text: "REGISTRATION",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId539"
    });
    $.__views.__alloyId538.add($.__views.__alloyId539);
    $.__views.__alloyId540 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "100",
        id: "__alloyId540"
    });
    $.__views.scrollView.add($.__views.__alloyId540);
    $.__views.__alloyId541 = Ti.UI.createLabel({
        text: "Please ensure all the details you fill in the registration page is correct before you press the “Proceed” button. Each I/C number is allowed a maximum of 10 Mobile Numbers HopOn registration.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId541"
    });
    $.__views.__alloyId540.add($.__views.__alloyId541);
    $.__views.__alloyId542 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId542"
    });
    $.__views.scrollView.add($.__views.__alloyId542);
    $.__views.__alloyId543 = Ti.UI.createLabel({
        text: "PAYMENT",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId543"
    });
    $.__views.__alloyId542.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId544"
    });
    $.__views.scrollView.add($.__views.__alloyId544);
    $.__views.__alloyId545 = Ti.UI.createLabel({
        text: "XOX will charge a registration fee of Ringgit Malaysia Six (RM6) per number for every online application porting request.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId545"
    });
    $.__views.__alloyId544.add($.__views.__alloyId545);
    $.__views.__alloyId546 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId546"
    });
    $.__views.scrollView.add($.__views.__alloyId546);
    $.__views.__alloyId547 = Ti.UI.createLabel({
        text: "DELIVERY",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId547"
    });
    $.__views.__alloyId546.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createView({
        bottom: "20",
        width: "90%",
        height: "60",
        id: "__alloyId548"
    });
    $.__views.scrollView.add($.__views.__alloyId548);
    $.__views.__alloyId549 = Ti.UI.createLabel({
        text: "Upon receiving your application and successful payment, XOX will courier the SIM Card to you within 3-5 working days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId549"
    });
    $.__views.__alloyId548.add($.__views.__alloyId549);
    $.__views.__alloyId550 = Ti.UI.createView({
        width: "90%",
        height: "20",
        id: "__alloyId550"
    });
    $.__views.scrollView.add($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createLabel({
        text: "VERIFICATION",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId551"
    });
    $.__views.__alloyId550.add($.__views.__alloyId551);
    $.__views.__alloyId552 = Ti.UI.createView({
        bottom: "10",
        width: "90%",
        height: "100",
        id: "__alloyId552"
    });
    $.__views.scrollView.add($.__views.__alloyId552);
    $.__views.__alloyId553 = Ti.UI.createLabel({
        text: "While you received the Welcome Letter and SIM Card from XOX, you will need to log on to http://onlinestore.xox.com.my/hopon to verify your details and complete the “Verification” process within 30 days.",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        id: "__alloyId553"
    });
    $.__views.__alloyId552.add($.__views.__alloyId553);
    $.__views.__alloyId554 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId554"
    });
    $.__views.hopOn.add($.__views.__alloyId554);
    next ? $.__views.__alloyId554.addEventListener("click", next) : __defers["$.__views.__alloyId554!click!next"] = true;
    $.__views.__alloyId555 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId555"
    });
    $.__views.__alloyId554.add($.__views.__alloyId555);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId530!click!back"] && $.__views.__alloyId530.addEventListener("click", back);
    __defers["$.__views.__alloyId554!click!next"] && $.__views.__alloyId554.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;