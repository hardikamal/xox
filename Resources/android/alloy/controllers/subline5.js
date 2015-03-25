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
    $.__views.__alloyId2793 = Alloy.createController("_header", {
        id: "__alloyId2793",
        __parentSymbol: $.__views.subline5
    });
    $.__views.__alloyId2793.setParent($.__views.subline5);
    $.__views.__alloyId2794 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2794"
    });
    $.__views.subline5.add($.__views.__alloyId2794);
    $.__views.__alloyId2795 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2795"
    });
    $.__views.__alloyId2794.add($.__views.__alloyId2795);
    $.__views.__alloyId2796 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2796"
    });
    $.__views.__alloyId2794.add($.__views.__alloyId2796);
    back ? $.__views.__alloyId2796.addEventListener("click", back) : __defers["$.__views.__alloyId2796!click!back"] = true;
    $.__views.__alloyId2797 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "white",
        id: "__alloyId2797"
    });
    $.__views.subline5.add($.__views.__alloyId2797);
    $.__views.__alloyId2798 = Ti.UI.createLabel({
        text: "Subline Data Subscription Request",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2798"
    });
    $.__views.__alloyId2797.add($.__views.__alloyId2798);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.subline5.add($.__views.scrollView);
    $.__views.__alloyId2799 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2799"
    });
    $.__views.scrollView.add($.__views.__alloyId2799);
    $.__views.__alloyId2800 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2800"
    });
    $.__views.__alloyId2799.add($.__views.__alloyId2800);
    $.__views.__alloyId2801 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2801"
    });
    $.__views.__alloyId2799.add($.__views.__alloyId2801);
    $.__views.__alloyId2802 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2802"
    });
    $.__views.scrollView.add($.__views.__alloyId2802);
    $.__views.__alloyId2803 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2803"
    });
    $.__views.scrollView.add($.__views.__alloyId2803);
    $.__views.__alloyId2804 = Ti.UI.createLabel({
        text: "Data Plan",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2804"
    });
    $.__views.__alloyId2803.add($.__views.__alloyId2804);
    $.__views.__alloyId2805 = Ti.UI.createLabel({
        text: "M500MB",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2805"
    });
    $.__views.__alloyId2803.add($.__views.__alloyId2805);
    $.__views.__alloyId2806 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2806"
    });
    $.__views.scrollView.add($.__views.__alloyId2806);
    $.__views.__alloyId2807 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2807"
    });
    $.__views.scrollView.add($.__views.__alloyId2807);
    $.__views.__alloyId2808 = Ti.UI.createLabel({
        text: "Current Prepaid Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2808"
    });
    $.__views.__alloyId2807.add($.__views.__alloyId2808);
    $.__views.__alloyId2809 = Ti.UI.createLabel({
        text: "88.88",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2809"
    });
    $.__views.__alloyId2807.add($.__views.__alloyId2809);
    $.__views.__alloyId2810 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2810"
    });
    $.__views.scrollView.add($.__views.__alloyId2810);
    $.__views.__alloyId2811 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2811"
    });
    $.__views.scrollView.add($.__views.__alloyId2811);
    $.__views.__alloyId2812 = Ti.UI.createLabel({
        text: "Current EWallet Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2812"
    });
    $.__views.__alloyId2811.add($.__views.__alloyId2812);
    $.__views.__alloyId2813 = Ti.UI.createLabel({
        text: "0.00",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2813"
    });
    $.__views.__alloyId2811.add($.__views.__alloyId2813);
    $.__views.__alloyId2814 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2814"
    });
    $.__views.scrollView.add($.__views.__alloyId2814);
    $.__views.__alloyId2815 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2815"
    });
    $.__views.scrollView.add($.__views.__alloyId2815);
    $.__views.__alloyId2816 = Ti.UI.createLabel({
        text: "Season Pass Data Counter(MB)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2816"
    });
    $.__views.__alloyId2815.add($.__views.__alloyId2816);
    $.__views.__alloyId2817 = Ti.UI.createLabel({
        text: "0",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2817"
    });
    $.__views.__alloyId2815.add($.__views.__alloyId2817);
    $.__views.__alloyId2818 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2818"
    });
    $.__views.scrollView.add($.__views.__alloyId2818);
    $.__views.__alloyId2819 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2819"
    });
    $.__views.subline5.add($.__views.__alloyId2819);
    $.__views.__alloyId2820 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2820"
    });
    $.__views.__alloyId2819.add($.__views.__alloyId2820);
    subscribe ? $.__views.__alloyId2820.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2820!click!subscribe"] = true;
    $.__views.__alloyId2821 = Ti.UI.createLabel({
        text: "Subscribe",
        color: "white",
        textAlign: "center",
        id: "__alloyId2821"
    });
    $.__views.__alloyId2820.add($.__views.__alloyId2821);
    $.__views.__alloyId2822 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2822"
    });
    $.__views.__alloyId2819.add($.__views.__alloyId2822);
    $.__views.__alloyId2823 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2823"
    });
    $.__views.__alloyId2819.add($.__views.__alloyId2823);
    back ? $.__views.__alloyId2823.addEventListener("click", back) : __defers["$.__views.__alloyId2823!click!back"] = true;
    $.__views.__alloyId2824 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId2824"
    });
    $.__views.__alloyId2823.add($.__views.__alloyId2824);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId2796!click!back"] && $.__views.__alloyId2796.addEventListener("click", back);
    __defers["$.__views.__alloyId2820!click!subscribe"] && $.__views.__alloyId2820.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId2823!click!back"] && $.__views.__alloyId2823.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;