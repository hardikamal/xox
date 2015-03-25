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
    $.__views.__alloyId2649 = Alloy.createController("_header", {
        id: "__alloyId2649",
        __parentSymbol: $.__views.subline5
    });
    $.__views.__alloyId2649.setParent($.__views.subline5);
    $.__views.__alloyId2650 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2650"
    });
    $.__views.subline5.add($.__views.__alloyId2650);
    $.__views.__alloyId2651 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2651"
    });
    $.__views.__alloyId2650.add($.__views.__alloyId2651);
    $.__views.__alloyId2652 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2652"
    });
    $.__views.__alloyId2650.add($.__views.__alloyId2652);
    back ? $.__views.__alloyId2652.addEventListener("click", back) : __defers["$.__views.__alloyId2652!click!back"] = true;
    $.__views.__alloyId2653 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "white",
        id: "__alloyId2653"
    });
    $.__views.subline5.add($.__views.__alloyId2653);
    $.__views.__alloyId2654 = Ti.UI.createLabel({
        text: "Subline Data Subscription Request",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2654"
    });
    $.__views.__alloyId2653.add($.__views.__alloyId2654);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.subline5.add($.__views.scrollView);
    $.__views.__alloyId2655 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2655"
    });
    $.__views.scrollView.add($.__views.__alloyId2655);
    $.__views.__alloyId2656 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2656"
    });
    $.__views.__alloyId2655.add($.__views.__alloyId2656);
    $.__views.__alloyId2657 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2657"
    });
    $.__views.__alloyId2655.add($.__views.__alloyId2657);
    $.__views.__alloyId2658 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2658"
    });
    $.__views.scrollView.add($.__views.__alloyId2658);
    $.__views.__alloyId2659 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2659"
    });
    $.__views.scrollView.add($.__views.__alloyId2659);
    $.__views.__alloyId2660 = Ti.UI.createLabel({
        text: "Data Plan",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2660"
    });
    $.__views.__alloyId2659.add($.__views.__alloyId2660);
    $.__views.__alloyId2661 = Ti.UI.createLabel({
        text: "M500MB",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2661"
    });
    $.__views.__alloyId2659.add($.__views.__alloyId2661);
    $.__views.__alloyId2662 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2662"
    });
    $.__views.scrollView.add($.__views.__alloyId2662);
    $.__views.__alloyId2663 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2663"
    });
    $.__views.scrollView.add($.__views.__alloyId2663);
    $.__views.__alloyId2664 = Ti.UI.createLabel({
        text: "Current Prepaid Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2664"
    });
    $.__views.__alloyId2663.add($.__views.__alloyId2664);
    $.__views.__alloyId2665 = Ti.UI.createLabel({
        text: "88.88",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2665"
    });
    $.__views.__alloyId2663.add($.__views.__alloyId2665);
    $.__views.__alloyId2666 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2666"
    });
    $.__views.scrollView.add($.__views.__alloyId2666);
    $.__views.__alloyId2667 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2667"
    });
    $.__views.scrollView.add($.__views.__alloyId2667);
    $.__views.__alloyId2668 = Ti.UI.createLabel({
        text: "Current EWallet Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2668"
    });
    $.__views.__alloyId2667.add($.__views.__alloyId2668);
    $.__views.__alloyId2669 = Ti.UI.createLabel({
        text: "0.00",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2669"
    });
    $.__views.__alloyId2667.add($.__views.__alloyId2669);
    $.__views.__alloyId2670 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2670"
    });
    $.__views.scrollView.add($.__views.__alloyId2670);
    $.__views.__alloyId2671 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2671"
    });
    $.__views.scrollView.add($.__views.__alloyId2671);
    $.__views.__alloyId2672 = Ti.UI.createLabel({
        text: "Season Pass Data Counter(MB)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2672"
    });
    $.__views.__alloyId2671.add($.__views.__alloyId2672);
    $.__views.__alloyId2673 = Ti.UI.createLabel({
        text: "0",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2673"
    });
    $.__views.__alloyId2671.add($.__views.__alloyId2673);
    $.__views.__alloyId2674 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2674"
    });
    $.__views.scrollView.add($.__views.__alloyId2674);
    $.__views.__alloyId2675 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2675"
    });
    $.__views.subline5.add($.__views.__alloyId2675);
    $.__views.__alloyId2676 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2676"
    });
    $.__views.__alloyId2675.add($.__views.__alloyId2676);
    subscribe ? $.__views.__alloyId2676.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2676!click!subscribe"] = true;
    $.__views.__alloyId2677 = Ti.UI.createLabel({
        text: "Subscribe",
        color: "white",
        textAlign: "center",
        id: "__alloyId2677"
    });
    $.__views.__alloyId2676.add($.__views.__alloyId2677);
    $.__views.__alloyId2678 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2678"
    });
    $.__views.__alloyId2675.add($.__views.__alloyId2678);
    $.__views.__alloyId2679 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2679"
    });
    $.__views.__alloyId2675.add($.__views.__alloyId2679);
    back ? $.__views.__alloyId2679.addEventListener("click", back) : __defers["$.__views.__alloyId2679!click!back"] = true;
    $.__views.__alloyId2680 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId2680"
    });
    $.__views.__alloyId2679.add($.__views.__alloyId2680);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId2652!click!back"] && $.__views.__alloyId2652.addEventListener("click", back);
    __defers["$.__views.__alloyId2676!click!subscribe"] && $.__views.__alloyId2676.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId2679!click!back"] && $.__views.__alloyId2679.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;