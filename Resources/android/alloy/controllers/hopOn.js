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
    function verification() {
        DRAWER.navigation("hopOnVerify", 1);
        console.log("next");
    }
    function status() {
        DRAWER.navigation("hopOnStatus", 1);
        console.log("next");
    }
    function submission() {
        DRAWER.navigation("hopOnSubmission", 1);
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
        height: Ti.UI.SIZE,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId534"
    });
    $.__views.scrollView.add($.__views.__alloyId534);
    $.__views.__alloyId535 = Ti.UI.createLabel({
        text: "Hello there, welcome to XOX HopOn Online!",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId535"
    });
    $.__views.__alloyId534.add($.__views.__alloyId535);
    $.__views.__alloyId536 = Ti.UI.createView({
        bottom: "20",
        width: "100%",
        height: Ti.UI.SIZE,
        id: "__alloyId536"
    });
    $.__views.scrollView.add($.__views.__alloyId536);
    $.__views.__alloyId537 = Ti.UI.createLabel({
        text: "All you need to do is fill in your information, pay a small fee of RM6 for XOX HopOn online, and we will deliver new SIM card(s) to you within 5 days! What are you waiting for? HopOn today!",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId537"
    });
    $.__views.__alloyId536.add($.__views.__alloyId537);
    $.__views.__alloyId538 = Ti.UI.createView({
        bottom: "20",
        width: "100%",
        height: Ti.UI.SIZE,
        id: "__alloyId538"
    });
    $.__views.scrollView.add($.__views.__alloyId538);
    $.__views.__alloyId539 = Ti.UI.createLabel({
        text: "Read the FAQ to learn more.",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId539"
    });
    $.__views.__alloyId538.add($.__views.__alloyId539);
    $.__views.__alloyId540 = Ti.UI.createView({
        bottom: "20",
        width: "100%",
        height: Ti.UI.SIZE,
        id: "__alloyId540"
    });
    $.__views.scrollView.add($.__views.__alloyId540);
    $.__views.__alloyId541 = Ti.UI.createLabel({
        text: "Get Free Mobile Internet Data everytime you make an accumalative monthly top up. * or swap your Free Data for Free Calls instead! Just contact us! *FREE data or calls will be updated in your Season Pass subscription on the 15th of every following month.",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId541"
    });
    $.__views.__alloyId540.add($.__views.__alloyId541);
    $.__views.__alloyId542 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        bottom: "1",
        id: "__alloyId542"
    });
    $.__views.hopOn.add($.__views.__alloyId542);
    next ? $.__views.__alloyId542.addEventListener("click", next) : __defers["$.__views.__alloyId542!click!next"] = true;
    $.__views.__alloyId543 = Ti.UI.createLabel({
        text: "REGISTER NOW",
        color: "white",
        id: "__alloyId543"
    });
    $.__views.__alloyId542.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        bottom: "1",
        id: "__alloyId544"
    });
    $.__views.hopOn.add($.__views.__alloyId544);
    verification ? $.__views.__alloyId544.addEventListener("click", verification) : __defers["$.__views.__alloyId544!click!verification"] = true;
    $.__views.__alloyId545 = Ti.UI.createLabel({
        text: "VERIFICATION",
        color: "white",
        id: "__alloyId545"
    });
    $.__views.__alloyId544.add($.__views.__alloyId545);
    $.__views.__alloyId546 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        bottom: "1",
        id: "__alloyId546"
    });
    $.__views.hopOn.add($.__views.__alloyId546);
    status ? $.__views.__alloyId546.addEventListener("click", status) : __defers["$.__views.__alloyId546!click!status"] = true;
    $.__views.__alloyId547 = Ti.UI.createLabel({
        text: "STATUS",
        color: "white",
        id: "__alloyId547"
    });
    $.__views.__alloyId546.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId548"
    });
    $.__views.hopOn.add($.__views.__alloyId548);
    submission ? $.__views.__alloyId548.addEventListener("click", submission) : __defers["$.__views.__alloyId548!click!submission"] = true;
    $.__views.__alloyId549 = Ti.UI.createLabel({
        text: "RESUBMISSION",
        color: "white",
        id: "__alloyId549"
    });
    $.__views.__alloyId548.add($.__views.__alloyId549);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 353;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 353;
    __defers["$.__views.__alloyId530!click!back"] && $.__views.__alloyId530.addEventListener("click", back);
    __defers["$.__views.__alloyId542!click!next"] && $.__views.__alloyId542.addEventListener("click", next);
    __defers["$.__views.__alloyId544!click!verification"] && $.__views.__alloyId544.addEventListener("click", verification);
    __defers["$.__views.__alloyId546!click!status"] && $.__views.__alloyId546.addEventListener("click", status);
    __defers["$.__views.__alloyId548!click!submission"] && $.__views.__alloyId548.addEventListener("click", submission);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;