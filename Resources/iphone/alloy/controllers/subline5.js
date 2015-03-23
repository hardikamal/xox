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
        DRAWER.navigation("subline4", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline5";
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
    $.__views.subline5 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline5"
    });
    $.__views.subline5 && $.addTopLevelView($.__views.subline5);
    $.__views.__alloyId2438 = Alloy.createController("_header", {
        id: "__alloyId2438",
        __parentSymbol: $.__views.subline5
    });
    $.__views.__alloyId2438.setParent($.__views.subline5);
    $.__views.__alloyId2439 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2439"
    });
    $.__views.subline5.add($.__views.__alloyId2439);
    $.__views.__alloyId2440 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2440"
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2440);
    $.__views.__alloyId2441 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2441"
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2441);
    back ? $.__views.__alloyId2441.addEventListener("click", back) : __defers["$.__views.__alloyId2441!click!back"] = true;
    $.__views.__alloyId2442 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "white",
        id: "__alloyId2442"
    });
    $.__views.subline5.add($.__views.__alloyId2442);
    $.__views.__alloyId2443 = Ti.UI.createLabel({
        text: "Subline Data Subscription Request",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2443"
    });
    $.__views.__alloyId2442.add($.__views.__alloyId2443);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.subline5.add($.__views.scrollView);
    $.__views.__alloyId2444 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2444"
    });
    $.__views.scrollView.add($.__views.__alloyId2444);
    $.__views.__alloyId2445 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2445"
    });
    $.__views.__alloyId2444.add($.__views.__alloyId2445);
    $.__views.__alloyId2446 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2446"
    });
    $.__views.__alloyId2444.add($.__views.__alloyId2446);
    $.__views.__alloyId2447 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2447"
    });
    $.__views.scrollView.add($.__views.__alloyId2447);
    $.__views.__alloyId2448 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2448"
    });
    $.__views.scrollView.add($.__views.__alloyId2448);
    $.__views.__alloyId2449 = Ti.UI.createLabel({
        text: "Data Plan",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2449"
    });
    $.__views.__alloyId2448.add($.__views.__alloyId2449);
    $.__views.__alloyId2450 = Ti.UI.createLabel({
        text: "M500MB",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2450"
    });
    $.__views.__alloyId2448.add($.__views.__alloyId2450);
    $.__views.__alloyId2451 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2451"
    });
    $.__views.scrollView.add($.__views.__alloyId2451);
    $.__views.__alloyId2452 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2452"
    });
    $.__views.scrollView.add($.__views.__alloyId2452);
    $.__views.__alloyId2453 = Ti.UI.createLabel({
        text: "Current Prepaid Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2453"
    });
    $.__views.__alloyId2452.add($.__views.__alloyId2453);
    $.__views.__alloyId2454 = Ti.UI.createLabel({
        text: "88.88",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2454"
    });
    $.__views.__alloyId2452.add($.__views.__alloyId2454);
    $.__views.__alloyId2455 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2455"
    });
    $.__views.scrollView.add($.__views.__alloyId2455);
    $.__views.__alloyId2456 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2456"
    });
    $.__views.scrollView.add($.__views.__alloyId2456);
    $.__views.__alloyId2457 = Ti.UI.createLabel({
        text: "Current EWallet Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2457"
    });
    $.__views.__alloyId2456.add($.__views.__alloyId2457);
    $.__views.__alloyId2458 = Ti.UI.createLabel({
        text: "0.00",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2458"
    });
    $.__views.__alloyId2456.add($.__views.__alloyId2458);
    $.__views.__alloyId2459 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2459"
    });
    $.__views.scrollView.add($.__views.__alloyId2459);
    $.__views.__alloyId2460 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2460"
    });
    $.__views.scrollView.add($.__views.__alloyId2460);
    $.__views.__alloyId2461 = Ti.UI.createLabel({
        text: "Season Pass Data Counter(MB)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2461"
    });
    $.__views.__alloyId2460.add($.__views.__alloyId2461);
    $.__views.__alloyId2462 = Ti.UI.createLabel({
        text: "0",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2462"
    });
    $.__views.__alloyId2460.add($.__views.__alloyId2462);
    $.__views.__alloyId2463 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2463"
    });
    $.__views.scrollView.add($.__views.__alloyId2463);
    $.__views.__alloyId2464 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2464"
    });
    $.__views.subline5.add($.__views.__alloyId2464);
    $.__views.__alloyId2465 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2465"
    });
    $.__views.__alloyId2464.add($.__views.__alloyId2465);
    subscribe ? $.__views.__alloyId2465.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2465!click!subscribe"] = true;
    $.__views.__alloyId2466 = Ti.UI.createLabel({
        text: "Subscribe",
        color: "white",
        textAlign: "center",
        id: "__alloyId2466"
    });
    $.__views.__alloyId2465.add($.__views.__alloyId2466);
    $.__views.__alloyId2467 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2467"
    });
    $.__views.__alloyId2464.add($.__views.__alloyId2467);
    $.__views.__alloyId2468 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2468"
    });
    $.__views.__alloyId2464.add($.__views.__alloyId2468);
    back ? $.__views.__alloyId2468.addEventListener("click", back) : __defers["$.__views.__alloyId2468!click!back"] = true;
    $.__views.__alloyId2469 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId2469"
    });
    $.__views.__alloyId2468.add($.__views.__alloyId2469);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId2441!click!back"] && $.__views.__alloyId2441.addEventListener("click", back);
    __defers["$.__views.__alloyId2465!click!subscribe"] && $.__views.__alloyId2465.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId2468!click!back"] && $.__views.__alloyId2468.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;