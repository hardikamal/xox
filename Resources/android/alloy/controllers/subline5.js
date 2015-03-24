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
    $.__views.__alloyId2513 = Alloy.createController("_header", {
        id: "__alloyId2513",
        __parentSymbol: $.__views.subline5
    });
    $.__views.__alloyId2513.setParent($.__views.subline5);
    $.__views.__alloyId2514 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2514"
    });
    $.__views.subline5.add($.__views.__alloyId2514);
    $.__views.__alloyId2515 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2515"
    });
    $.__views.__alloyId2514.add($.__views.__alloyId2515);
    $.__views.__alloyId2516 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2516"
    });
    $.__views.__alloyId2514.add($.__views.__alloyId2516);
    back ? $.__views.__alloyId2516.addEventListener("click", back) : __defers["$.__views.__alloyId2516!click!back"] = true;
    $.__views.__alloyId2517 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "white",
        id: "__alloyId2517"
    });
    $.__views.subline5.add($.__views.__alloyId2517);
    $.__views.__alloyId2518 = Ti.UI.createLabel({
        text: "Subline Data Subscription Request",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2518"
    });
    $.__views.__alloyId2517.add($.__views.__alloyId2518);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.subline5.add($.__views.scrollView);
    $.__views.__alloyId2519 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2519"
    });
    $.__views.scrollView.add($.__views.__alloyId2519);
    $.__views.__alloyId2520 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2520"
    });
    $.__views.__alloyId2519.add($.__views.__alloyId2520);
    $.__views.__alloyId2521 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2521"
    });
    $.__views.__alloyId2519.add($.__views.__alloyId2521);
    $.__views.__alloyId2522 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2522"
    });
    $.__views.scrollView.add($.__views.__alloyId2522);
    $.__views.__alloyId2523 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2523"
    });
    $.__views.scrollView.add($.__views.__alloyId2523);
    $.__views.__alloyId2524 = Ti.UI.createLabel({
        text: "Data Plan",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2524"
    });
    $.__views.__alloyId2523.add($.__views.__alloyId2524);
    $.__views.__alloyId2525 = Ti.UI.createLabel({
        text: "M500MB",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2525"
    });
    $.__views.__alloyId2523.add($.__views.__alloyId2525);
    $.__views.__alloyId2526 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2526"
    });
    $.__views.scrollView.add($.__views.__alloyId2526);
    $.__views.__alloyId2527 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2527"
    });
    $.__views.scrollView.add($.__views.__alloyId2527);
    $.__views.__alloyId2528 = Ti.UI.createLabel({
        text: "Current Prepaid Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2528"
    });
    $.__views.__alloyId2527.add($.__views.__alloyId2528);
    $.__views.__alloyId2529 = Ti.UI.createLabel({
        text: "88.88",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2529"
    });
    $.__views.__alloyId2527.add($.__views.__alloyId2529);
    $.__views.__alloyId2530 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2530"
    });
    $.__views.scrollView.add($.__views.__alloyId2530);
    $.__views.__alloyId2531 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2531"
    });
    $.__views.scrollView.add($.__views.__alloyId2531);
    $.__views.__alloyId2532 = Ti.UI.createLabel({
        text: "Current EWallet Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2532"
    });
    $.__views.__alloyId2531.add($.__views.__alloyId2532);
    $.__views.__alloyId2533 = Ti.UI.createLabel({
        text: "0.00",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2533"
    });
    $.__views.__alloyId2531.add($.__views.__alloyId2533);
    $.__views.__alloyId2534 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2534"
    });
    $.__views.scrollView.add($.__views.__alloyId2534);
    $.__views.__alloyId2535 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2535"
    });
    $.__views.scrollView.add($.__views.__alloyId2535);
    $.__views.__alloyId2536 = Ti.UI.createLabel({
        text: "Season Pass Data Counter(MB)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2536"
    });
    $.__views.__alloyId2535.add($.__views.__alloyId2536);
    $.__views.__alloyId2537 = Ti.UI.createLabel({
        text: "0",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2537"
    });
    $.__views.__alloyId2535.add($.__views.__alloyId2537);
    $.__views.__alloyId2538 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2538"
    });
    $.__views.scrollView.add($.__views.__alloyId2538);
    $.__views.__alloyId2539 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2539"
    });
    $.__views.subline5.add($.__views.__alloyId2539);
    $.__views.__alloyId2540 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2540"
    });
    $.__views.__alloyId2539.add($.__views.__alloyId2540);
    subscribe ? $.__views.__alloyId2540.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2540!click!subscribe"] = true;
    $.__views.__alloyId2541 = Ti.UI.createLabel({
        text: "Subscribe",
        color: "white",
        textAlign: "center",
        id: "__alloyId2541"
    });
    $.__views.__alloyId2540.add($.__views.__alloyId2541);
    $.__views.__alloyId2542 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2542"
    });
    $.__views.__alloyId2539.add($.__views.__alloyId2542);
    $.__views.__alloyId2543 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2543"
    });
    $.__views.__alloyId2539.add($.__views.__alloyId2543);
    back ? $.__views.__alloyId2543.addEventListener("click", back) : __defers["$.__views.__alloyId2543!click!back"] = true;
    $.__views.__alloyId2544 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId2544"
    });
    $.__views.__alloyId2543.add($.__views.__alloyId2544);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId2516!click!back"] && $.__views.__alloyId2516.addEventListener("click", back);
    __defers["$.__views.__alloyId2540!click!subscribe"] && $.__views.__alloyId2540.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId2543!click!back"] && $.__views.__alloyId2543.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;