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
    $.__views.__alloyId480 = Alloy.createController("_header", {
        id: "__alloyId480",
        __parentSymbol: $.__views.hopOn
    });
    $.__views.__alloyId480.setParent($.__views.hopOn);
    $.__views.__alloyId481 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId481"
    });
    $.__views.hopOn.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId482"
    });
    $.__views.__alloyId481.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId483"
    });
    $.__views.__alloyId481.add($.__views.__alloyId483);
    back ? $.__views.__alloyId483.addEventListener("click", back) : __defers["$.__views.__alloyId483!click!back"] = true;
    $.__views.__alloyId484 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId484"
    });
    $.__views.hopOn.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createLabel({
        text: "Step 1 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId485"
    });
    $.__views.__alloyId484.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createLabel({
        text: "Instruction",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId486"
    });
    $.__views.__alloyId484.add($.__views.__alloyId486);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn.add($.__views.scrollView);
    $.__views.__alloyId487 = Ti.UI.createView({
        top: "10",
        bottom: "20",
        height: Ti.UI.SIZE,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId487"
    });
    $.__views.scrollView.add($.__views.__alloyId487);
    $.__views.__alloyId488 = Ti.UI.createLabel({
        text: "Hello there, welcome to XOX HopOn Online!",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId488"
    });
    $.__views.__alloyId487.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createView({
        bottom: "20",
        width: "100%",
        height: Ti.UI.SIZE,
        id: "__alloyId489"
    });
    $.__views.scrollView.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createLabel({
        text: "All you need to do is fill in your information, pay a small fee of RM6 for XOX HopOn online, and we will deliver new SIM card(s) to you within 5 days! What are you waiting for? HopOn today!",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId490"
    });
    $.__views.__alloyId489.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createView({
        bottom: "20",
        width: "100%",
        height: Ti.UI.SIZE,
        id: "__alloyId491"
    });
    $.__views.scrollView.add($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createLabel({
        text: "Read the FAQ to learn more.",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId492"
    });
    $.__views.__alloyId491.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createView({
        bottom: "20",
        width: "100%",
        height: Ti.UI.SIZE,
        id: "__alloyId493"
    });
    $.__views.scrollView.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createLabel({
        text: "Get Free Mobile Internet Data everytime you make an accumalative monthly top up. * or swap your Free Data for Free Calls instead! Just contact us! *FREE data or calls will be updated in your Season Pass subscription on the 15th of every following month.",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId494"
    });
    $.__views.__alloyId493.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        bottom: "1",
        id: "__alloyId495"
    });
    $.__views.hopOn.add($.__views.__alloyId495);
    next ? $.__views.__alloyId495.addEventListener("click", next) : __defers["$.__views.__alloyId495!click!next"] = true;
    $.__views.__alloyId496 = Ti.UI.createLabel({
        text: "REGISTER NOW",
        color: "white",
        id: "__alloyId496"
    });
    $.__views.__alloyId495.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        bottom: "1",
        id: "__alloyId497"
    });
    $.__views.hopOn.add($.__views.__alloyId497);
    verification ? $.__views.__alloyId497.addEventListener("click", verification) : __defers["$.__views.__alloyId497!click!verification"] = true;
    $.__views.__alloyId498 = Ti.UI.createLabel({
        text: "VERIFICATION",
        color: "white",
        id: "__alloyId498"
    });
    $.__views.__alloyId497.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        bottom: "1",
        id: "__alloyId499"
    });
    $.__views.hopOn.add($.__views.__alloyId499);
    status ? $.__views.__alloyId499.addEventListener("click", status) : __defers["$.__views.__alloyId499!click!status"] = true;
    $.__views.__alloyId500 = Ti.UI.createLabel({
        text: "STATUS",
        color: "white",
        id: "__alloyId500"
    });
    $.__views.__alloyId499.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId501"
    });
    $.__views.hopOn.add($.__views.__alloyId501);
    submission ? $.__views.__alloyId501.addEventListener("click", submission) : __defers["$.__views.__alloyId501!click!submission"] = true;
    $.__views.__alloyId502 = Ti.UI.createLabel({
        text: "RESUBMISSION",
        color: "white",
        id: "__alloyId502"
    });
    $.__views.__alloyId501.add($.__views.__alloyId502);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 353;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 353;
    }
    __defers["$.__views.__alloyId483!click!back"] && $.__views.__alloyId483.addEventListener("click", back);
    __defers["$.__views.__alloyId495!click!next"] && $.__views.__alloyId495.addEventListener("click", next);
    __defers["$.__views.__alloyId497!click!verification"] && $.__views.__alloyId497.addEventListener("click", verification);
    __defers["$.__views.__alloyId499!click!status"] && $.__views.__alloyId499.addEventListener("click", status);
    __defers["$.__views.__alloyId501!click!submission"] && $.__views.__alloyId501.addEventListener("click", submission);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;