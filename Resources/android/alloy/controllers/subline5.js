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
    $.__views.__alloyId2471 = Alloy.createController("_header", {
        id: "__alloyId2471",
        __parentSymbol: $.__views.subline5
    });
    $.__views.__alloyId2471.setParent($.__views.subline5);
    $.__views.__alloyId2472 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2472"
    });
    $.__views.subline5.add($.__views.__alloyId2472);
    $.__views.__alloyId2473 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2473"
    });
    $.__views.__alloyId2472.add($.__views.__alloyId2473);
    $.__views.__alloyId2474 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2474"
    });
    $.__views.__alloyId2472.add($.__views.__alloyId2474);
    back ? $.__views.__alloyId2474.addEventListener("click", back) : __defers["$.__views.__alloyId2474!click!back"] = true;
    $.__views.__alloyId2475 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "white",
        id: "__alloyId2475"
    });
    $.__views.subline5.add($.__views.__alloyId2475);
    $.__views.__alloyId2476 = Ti.UI.createLabel({
        text: "Subline Data Subscription Request",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2476"
    });
    $.__views.__alloyId2475.add($.__views.__alloyId2476);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.subline5.add($.__views.scrollView);
    $.__views.__alloyId2477 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2477"
    });
    $.__views.scrollView.add($.__views.__alloyId2477);
    $.__views.__alloyId2478 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2478"
    });
    $.__views.__alloyId2477.add($.__views.__alloyId2478);
    $.__views.__alloyId2479 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2479"
    });
    $.__views.__alloyId2477.add($.__views.__alloyId2479);
    $.__views.__alloyId2480 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2480"
    });
    $.__views.scrollView.add($.__views.__alloyId2480);
    $.__views.__alloyId2481 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2481"
    });
    $.__views.scrollView.add($.__views.__alloyId2481);
    $.__views.__alloyId2482 = Ti.UI.createLabel({
        text: "Data Plan",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2482"
    });
    $.__views.__alloyId2481.add($.__views.__alloyId2482);
    $.__views.__alloyId2483 = Ti.UI.createLabel({
        text: "M500MB",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2483"
    });
    $.__views.__alloyId2481.add($.__views.__alloyId2483);
    $.__views.__alloyId2484 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2484"
    });
    $.__views.scrollView.add($.__views.__alloyId2484);
    $.__views.__alloyId2485 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2485"
    });
    $.__views.scrollView.add($.__views.__alloyId2485);
    $.__views.__alloyId2486 = Ti.UI.createLabel({
        text: "Current Prepaid Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2486"
    });
    $.__views.__alloyId2485.add($.__views.__alloyId2486);
    $.__views.__alloyId2487 = Ti.UI.createLabel({
        text: "88.88",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2487"
    });
    $.__views.__alloyId2485.add($.__views.__alloyId2487);
    $.__views.__alloyId2488 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2488"
    });
    $.__views.scrollView.add($.__views.__alloyId2488);
    $.__views.__alloyId2489 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2489"
    });
    $.__views.scrollView.add($.__views.__alloyId2489);
    $.__views.__alloyId2490 = Ti.UI.createLabel({
        text: "Current EWallet Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2490"
    });
    $.__views.__alloyId2489.add($.__views.__alloyId2490);
    $.__views.__alloyId2491 = Ti.UI.createLabel({
        text: "0.00",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2491"
    });
    $.__views.__alloyId2489.add($.__views.__alloyId2491);
    $.__views.__alloyId2492 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2492"
    });
    $.__views.scrollView.add($.__views.__alloyId2492);
    $.__views.__alloyId2493 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2493"
    });
    $.__views.scrollView.add($.__views.__alloyId2493);
    $.__views.__alloyId2494 = Ti.UI.createLabel({
        text: "Season Pass Data Counter(MB)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2494"
    });
    $.__views.__alloyId2493.add($.__views.__alloyId2494);
    $.__views.__alloyId2495 = Ti.UI.createLabel({
        text: "0",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2495"
    });
    $.__views.__alloyId2493.add($.__views.__alloyId2495);
    $.__views.__alloyId2496 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2496"
    });
    $.__views.scrollView.add($.__views.__alloyId2496);
    $.__views.__alloyId2497 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2497"
    });
    $.__views.subline5.add($.__views.__alloyId2497);
    $.__views.__alloyId2498 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2498"
    });
    $.__views.__alloyId2497.add($.__views.__alloyId2498);
    subscribe ? $.__views.__alloyId2498.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2498!click!subscribe"] = true;
    $.__views.__alloyId2499 = Ti.UI.createLabel({
        text: "Subscribe",
        color: "white",
        textAlign: "center",
        id: "__alloyId2499"
    });
    $.__views.__alloyId2498.add($.__views.__alloyId2499);
    $.__views.__alloyId2500 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2500"
    });
    $.__views.__alloyId2497.add($.__views.__alloyId2500);
    $.__views.__alloyId2501 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2501"
    });
    $.__views.__alloyId2497.add($.__views.__alloyId2501);
    back ? $.__views.__alloyId2501.addEventListener("click", back) : __defers["$.__views.__alloyId2501!click!back"] = true;
    $.__views.__alloyId2502 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId2502"
    });
    $.__views.__alloyId2501.add($.__views.__alloyId2502);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId2474!click!back"] && $.__views.__alloyId2474.addEventListener("click", back);
    __defers["$.__views.__alloyId2498!click!subscribe"] && $.__views.__alloyId2498.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId2501!click!back"] && $.__views.__alloyId2501.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;