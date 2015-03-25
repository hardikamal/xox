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
        DRAWER.navigation("products", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPlus";
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
    $.__views.prepaidPlus = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPlus"
    });
    $.__views.prepaidPlus && $.addTopLevelView($.__views.prepaidPlus);
    $.__views.__alloyId2016 = Alloy.createController("_header", {
        id: "__alloyId2016",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId2016.setParent($.__views.prepaidPlus);
    $.__views.__alloyId2017 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId2017"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId2017);
    $.__views.__alloyId2018 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId2018"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2018);
    $.__views.__alloyId2019 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2019"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2019);
    back ? $.__views.__alloyId2019.addEventListener("click", back) : __defers["$.__views.__alloyId2019!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaidPlus.add($.__views.scrollView);
    $.__views.__alloyId2020 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId2020"
    });
    $.__views.scrollView.add($.__views.__alloyId2020);
    $.__views.__alloyId2021 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId2021"
    });
    $.__views.__alloyId2020.add($.__views.__alloyId2021);
    $.__views.__alloyId2022 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId2022"
    });
    $.__views.__alloyId2021.add($.__views.__alloyId2022);
    $.__views.__alloyId2023 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2023"
    });
    $.__views.__alloyId2020.add($.__views.__alloyId2023);
    $.__views.__alloyId2024 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2024"
    });
    $.__views.__alloyId2023.add($.__views.__alloyId2024);
    $.__views.__alloyId2025 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2025"
    });
    $.__views.__alloyId2023.add($.__views.__alloyId2025);
    $.__views.__alloyId2026 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2026"
    });
    $.__views.__alloyId2020.add($.__views.__alloyId2026);
    $.__views.__alloyId2027 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2027"
    });
    $.__views.__alloyId2026.add($.__views.__alloyId2027);
    $.__views.__alloyId2028 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2028"
    });
    $.__views.__alloyId2026.add($.__views.__alloyId2028);
    $.__views.__alloyId2029 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId2029"
    });
    $.__views.scrollView.add($.__views.__alloyId2029);
    $.__views.__alloyId2030 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId2030"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2030);
    $.__views.__alloyId2031 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId2031"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2031);
    $.__views.__alloyId2032 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2032"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2032);
    $.__views.__alloyId2033 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2033"
    });
    $.__views.__alloyId2032.add($.__views.__alloyId2033);
    $.__views.__alloyId2034 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2034"
    });
    $.__views.__alloyId2032.add($.__views.__alloyId2034);
    $.__views.__alloyId2035 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2035"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2035);
    $.__views.__alloyId2036 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2036"
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2036);
    $.__views.__alloyId2037 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2037"
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2037);
    $.__views.__alloyId2038 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2038"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2038);
    $.__views.__alloyId2039 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2039"
    });
    $.__views.__alloyId2038.add($.__views.__alloyId2039);
    $.__views.__alloyId2040 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2040"
    });
    $.__views.__alloyId2038.add($.__views.__alloyId2040);
    $.__views.__alloyId2041 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2041"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2041);
    $.__views.__alloyId2042 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2042"
    });
    $.__views.__alloyId2041.add($.__views.__alloyId2042);
    $.__views.__alloyId2043 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2043"
    });
    $.__views.__alloyId2041.add($.__views.__alloyId2043);
    $.__views.__alloyId2044 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId2044"
    });
    $.__views.scrollView.add($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId2045"
    });
    $.__views.__alloyId2044.add($.__views.__alloyId2045);
    $.__views.__alloyId2046 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId2046"
    });
    $.__views.__alloyId2045.add($.__views.__alloyId2046);
    $.__views.__alloyId2047 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2047"
    });
    $.__views.__alloyId2044.add($.__views.__alloyId2047);
    $.__views.__alloyId2048 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2048"
    });
    $.__views.__alloyId2047.add($.__views.__alloyId2048);
    $.__views.__alloyId2049 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2049"
    });
    $.__views.__alloyId2047.add($.__views.__alloyId2049);
    $.__views.__alloyId2050 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2050"
    });
    $.__views.__alloyId2044.add($.__views.__alloyId2050);
    $.__views.__alloyId2051 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2051"
    });
    $.__views.__alloyId2050.add($.__views.__alloyId2051);
    $.__views.__alloyId2052 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2052"
    });
    $.__views.__alloyId2050.add($.__views.__alloyId2052);
    $.__views.__alloyId2053 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId2053"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId2053);
    subscribe ? $.__views.__alloyId2053.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2053!click!subscribe"] = true;
    $.__views.__alloyId2054 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId2054"
    });
    $.__views.__alloyId2053.add($.__views.__alloyId2054);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId2019!click!back"] && $.__views.__alloyId2019.addEventListener("click", back);
    __defers["$.__views.__alloyId2053!click!subscribe"] && $.__views.__alloyId2053.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;