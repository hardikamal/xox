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
    $.__views.__alloyId545 = Alloy.createController("_header", {
        id: "__alloyId545",
        __parentSymbol: $.__views.hopOn
    });
    $.__views.__alloyId545.setParent($.__views.hopOn);
    $.__views.__alloyId546 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId546"
    });
    $.__views.hopOn.add($.__views.__alloyId546);
    $.__views.__alloyId547 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId547"
    });
    $.__views.__alloyId546.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId548"
    });
    $.__views.__alloyId546.add($.__views.__alloyId548);
    back ? $.__views.__alloyId548.addEventListener("click", back) : __defers["$.__views.__alloyId548!click!back"] = true;
    $.__views.__alloyId549 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId549"
    });
    $.__views.hopOn.add($.__views.__alloyId549);
    $.__views.__alloyId550 = Ti.UI.createLabel({
        text: "Step 1 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId550"
    });
    $.__views.__alloyId549.add($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createLabel({
        text: "Instruction",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId551"
    });
    $.__views.__alloyId549.add($.__views.__alloyId551);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.hopOn.add($.__views.scrollView);
    $.__views.__alloyId552 = Ti.UI.createView({
        top: "10",
        bottom: "20",
        height: Ti.UI.SIZE,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId552"
    });
    $.__views.scrollView.add($.__views.__alloyId552);
    $.__views.__alloyId553 = Ti.UI.createLabel({
        text: "Hello there, welcome to XOX HopOn Online!",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId553"
    });
    $.__views.__alloyId552.add($.__views.__alloyId553);
    $.__views.__alloyId554 = Ti.UI.createView({
        bottom: "20",
        width: "100%",
        height: Ti.UI.SIZE,
        id: "__alloyId554"
    });
    $.__views.scrollView.add($.__views.__alloyId554);
    $.__views.__alloyId555 = Ti.UI.createLabel({
        text: "All you need to do is fill in your information, pay a small fee of RM6 for XOX HopOn online, and we will deliver new SIM card(s) to you within 5 days! What are you waiting for? HopOn today!",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId555"
    });
    $.__views.__alloyId554.add($.__views.__alloyId555);
    $.__views.__alloyId556 = Ti.UI.createView({
        bottom: "20",
        width: "100%",
        height: Ti.UI.SIZE,
        id: "__alloyId556"
    });
    $.__views.scrollView.add($.__views.__alloyId556);
    $.__views.__alloyId557 = Ti.UI.createLabel({
        text: "Read the FAQ to learn more.",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId557"
    });
    $.__views.__alloyId556.add($.__views.__alloyId557);
    $.__views.__alloyId558 = Ti.UI.createView({
        bottom: "20",
        width: "100%",
        height: Ti.UI.SIZE,
        id: "__alloyId558"
    });
    $.__views.scrollView.add($.__views.__alloyId558);
    $.__views.__alloyId559 = Ti.UI.createLabel({
        text: "Get Free Mobile Internet Data everytime you make an accumalative monthly top up. * or swap your Free Data for Free Calls instead! Just contact us! *FREE data or calls will be updated in your Season Pass subscription on the 15th of every following month.",
        backgroundColor: "transparent",
        color: "black",
        width: "100%",
        textAlign: "left",
        id: "__alloyId559"
    });
    $.__views.__alloyId558.add($.__views.__alloyId559);
    $.__views.__alloyId560 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        bottom: "1",
        id: "__alloyId560"
    });
    $.__views.hopOn.add($.__views.__alloyId560);
    next ? $.__views.__alloyId560.addEventListener("click", next) : __defers["$.__views.__alloyId560!click!next"] = true;
    $.__views.__alloyId561 = Ti.UI.createLabel({
        text: "REGISTER NOW",
        color: "white",
        id: "__alloyId561"
    });
    $.__views.__alloyId560.add($.__views.__alloyId561);
    $.__views.__alloyId562 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        bottom: "1",
        id: "__alloyId562"
    });
    $.__views.hopOn.add($.__views.__alloyId562);
    verification ? $.__views.__alloyId562.addEventListener("click", verification) : __defers["$.__views.__alloyId562!click!verification"] = true;
    $.__views.__alloyId563 = Ti.UI.createLabel({
        text: "VERIFICATION",
        color: "white",
        id: "__alloyId563"
    });
    $.__views.__alloyId562.add($.__views.__alloyId563);
    $.__views.__alloyId564 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        bottom: "1",
        id: "__alloyId564"
    });
    $.__views.hopOn.add($.__views.__alloyId564);
    status ? $.__views.__alloyId564.addEventListener("click", status) : __defers["$.__views.__alloyId564!click!status"] = true;
    $.__views.__alloyId565 = Ti.UI.createLabel({
        text: "STATUS",
        color: "white",
        id: "__alloyId565"
    });
    $.__views.__alloyId564.add($.__views.__alloyId565);
    $.__views.__alloyId566 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId566"
    });
    $.__views.hopOn.add($.__views.__alloyId566);
    submission ? $.__views.__alloyId566.addEventListener("click", submission) : __defers["$.__views.__alloyId566!click!submission"] = true;
    $.__views.__alloyId567 = Ti.UI.createLabel({
        text: "RESUBMISSION",
        color: "white",
        id: "__alloyId567"
    });
    $.__views.__alloyId566.add($.__views.__alloyId567);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 353;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 353;
    }
    __defers["$.__views.__alloyId548!click!back"] && $.__views.__alloyId548.addEventListener("click", back);
    __defers["$.__views.__alloyId560!click!next"] && $.__views.__alloyId560.addEventListener("click", next);
    __defers["$.__views.__alloyId562!click!verification"] && $.__views.__alloyId562.addEventListener("click", verification);
    __defers["$.__views.__alloyId564!click!status"] && $.__views.__alloyId564.addEventListener("click", status);
    __defers["$.__views.__alloyId566!click!submission"] && $.__views.__alloyId566.addEventListener("click", submission);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;