function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function download() {
        console.log("download");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sublineDetails1";
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
    $.__views.sublineDetails1 = Ti.UI.createView({
        layout: "composite",
        id: "sublineDetails1"
    });
    $.__views.sublineDetails1 && $.addTopLevelView($.__views.sublineDetails1);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF",
        top: "0"
    });
    $.__views.sublineDetails1.add($.__views.scrollView);
    $.__views.__alloyId2825 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2825"
    });
    $.__views.scrollView.add($.__views.__alloyId2825);
    $.__views.__alloyId2826 = Ti.UI.createLabel({
        text: "Prepaid Account",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2826"
    });
    $.__views.__alloyId2825.add($.__views.__alloyId2826);
    $.__views.__alloyId2827 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2827"
    });
    $.__views.scrollView.add($.__views.__alloyId2827);
    $.__views.__alloyId2828 = Ti.UI.createLabel({
        text: "Prepaid Balance (RM)",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2828"
    });
    $.__views.__alloyId2827.add($.__views.__alloyId2828);
    $.__views.__alloyId2829 = Ti.UI.createLabel({
        text: "13.94",
        width: "25%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2829"
    });
    $.__views.__alloyId2827.add($.__views.__alloyId2829);
    $.__views.__alloyId2830 = Ti.UI.createView({
        layout: "horizontal",
        width: "25%",
        id: "__alloyId2830"
    });
    $.__views.__alloyId2827.add($.__views.__alloyId2830);
    $.__views.__alloyId2831 = Ti.UI.createLabel({
        text: "Top up",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2831"
    });
    $.__views.__alloyId2830.add($.__views.__alloyId2831);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2830.add($.__views.arrow1);
    $.__views.__alloyId2832 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2832"
    });
    $.__views.scrollView.add($.__views.__alloyId2832);
    $.__views.__alloyId2833 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2833"
    });
    $.__views.scrollView.add($.__views.__alloyId2833);
    $.__views.__alloyId2834 = Ti.UI.createLabel({
        text: "Expiry Date",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2834"
    });
    $.__views.__alloyId2833.add($.__views.__alloyId2834);
    $.__views.__alloyId2835 = Ti.UI.createLabel({
        text: "15-Apr-2015",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2835"
    });
    $.__views.__alloyId2833.add($.__views.__alloyId2835);
    $.__views.__alloyId2836 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2836"
    });
    $.__views.scrollView.add($.__views.__alloyId2836);
    $.__views.__alloyId2837 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId2837"
    });
    $.__views.scrollView.add($.__views.__alloyId2837);
    $.__views.__alloyId2838 = Ti.UI.createLabel({
        text: "Free SMS",
        left: "5%",
        height: "50",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2838"
    });
    $.__views.__alloyId2837.add($.__views.__alloyId2838);
    $.__views.__alloyId2839 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2839"
    });
    $.__views.__alloyId2837.add($.__views.__alloyId2839);
    $.__views.__alloyId2840 = Ti.UI.createLabel({
        text: "Unutilized Free SMS",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2840"
    });
    $.__views.__alloyId2839.add($.__views.__alloyId2840);
    $.__views.__alloyId2841 = Ti.UI.createLabel({
        text: "2223",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2841"
    });
    $.__views.__alloyId2839.add($.__views.__alloyId2841);
    $.__views.__alloyId2842 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2842"
    });
    $.__views.scrollView.add($.__views.__alloyId2842);
    $.__views.__alloyId2843 = Ti.UI.createLabel({
        text: "Season Pass Counter",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2843"
    });
    $.__views.__alloyId2842.add($.__views.__alloyId2843);
    $.__views.__alloyId2844 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2844"
    });
    $.__views.scrollView.add($.__views.__alloyId2844);
    $.__views.__alloyId2845 = Ti.UI.createLabel({
        text: "Voice (minutes)",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2845"
    });
    $.__views.__alloyId2844.add($.__views.__alloyId2845);
    $.__views.__alloyId2846 = Ti.UI.createLabel({
        text: "0",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2846"
    });
    $.__views.__alloyId2844.add($.__views.__alloyId2846);
    $.__views.__alloyId2847 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2847"
    });
    $.__views.scrollView.add($.__views.__alloyId2847);
    $.__views.__alloyId2848 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2848"
    });
    $.__views.scrollView.add($.__views.__alloyId2848);
    $.__views.__alloyId2849 = Ti.UI.createLabel({
        text: "SMS",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2849"
    });
    $.__views.__alloyId2848.add($.__views.__alloyId2849);
    $.__views.__alloyId2850 = Ti.UI.createLabel({
        text: "0",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2850"
    });
    $.__views.__alloyId2848.add($.__views.__alloyId2850);
    $.__views.__alloyId2851 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2851"
    });
    $.__views.scrollView.add($.__views.__alloyId2851);
    $.__views.__alloyId2852 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2852"
    });
    $.__views.scrollView.add($.__views.__alloyId2852);
    $.__views.__alloyId2853 = Ti.UI.createLabel({
        text: "Data",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2853"
    });
    $.__views.__alloyId2852.add($.__views.__alloyId2853);
    $.__views.__alloyId2854 = Ti.UI.createLabel({
        text: "0",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2854"
    });
    $.__views.__alloyId2852.add($.__views.__alloyId2854);
    $.__views.__alloyId2855 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2855"
    });
    $.__views.scrollView.add($.__views.__alloyId2855);
    $.__views.__alloyId2856 = Ti.UI.createLabel({
        text: "E-Wallet Account",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2856"
    });
    $.__views.__alloyId2855.add($.__views.__alloyId2856);
    $.__views.__alloyId2857 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2857"
    });
    $.__views.scrollView.add($.__views.__alloyId2857);
    $.__views.__alloyId2858 = Ti.UI.createLabel({
        text: "E-Wallet Balance (RM)",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2858"
    });
    $.__views.__alloyId2857.add($.__views.__alloyId2858);
    $.__views.__alloyId2859 = Ti.UI.createLabel({
        text: "0.00",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2859"
    });
    $.__views.__alloyId2857.add($.__views.__alloyId2859);
    $.__views.__alloyId2860 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        bottom: "0",
        id: "__alloyId2860"
    });
    $.__views.sublineDetails1.add($.__views.__alloyId2860);
    download ? $.__views.__alloyId2860.addEventListener("click", download) : __defers["$.__views.__alloyId2860!click!download"] = true;
    $.__views.__alloyId2861 = Ti.UI.createLabel({
        text: "Download Statement",
        color: "white",
        id: "__alloyId2861"
    });
    $.__views.__alloyId2860.add($.__views.__alloyId2861);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 2e3;
    __defers["$.__views.__alloyId2860!click!download"] && $.__views.__alloyId2860.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;