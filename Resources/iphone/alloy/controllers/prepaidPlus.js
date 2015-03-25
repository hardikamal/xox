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
    $.__views.__alloyId2080 = Alloy.createController("_header", {
        id: "__alloyId2080",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId2080.setParent($.__views.prepaidPlus);
    $.__views.__alloyId2081 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId2081"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId2081);
    $.__views.__alloyId2082 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId2082"
    });
    $.__views.__alloyId2081.add($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2083"
    });
    $.__views.__alloyId2081.add($.__views.__alloyId2083);
    back ? $.__views.__alloyId2083.addEventListener("click", back) : __defers["$.__views.__alloyId2083!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaidPlus.add($.__views.scrollView);
    $.__views.__alloyId2084 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId2084"
    });
    $.__views.scrollView.add($.__views.__alloyId2084);
    $.__views.__alloyId2085 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId2085"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2085);
    $.__views.__alloyId2086 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId2086"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2087"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2087);
    $.__views.__alloyId2088 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2088"
    });
    $.__views.__alloyId2087.add($.__views.__alloyId2088);
    $.__views.__alloyId2089 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2089"
    });
    $.__views.__alloyId2087.add($.__views.__alloyId2089);
    $.__views.__alloyId2090 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2090"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2090);
    $.__views.__alloyId2091 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2091"
    });
    $.__views.__alloyId2090.add($.__views.__alloyId2091);
    $.__views.__alloyId2092 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2092"
    });
    $.__views.__alloyId2090.add($.__views.__alloyId2092);
    $.__views.__alloyId2093 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId2093"
    });
    $.__views.scrollView.add($.__views.__alloyId2093);
    $.__views.__alloyId2094 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId2094"
    });
    $.__views.__alloyId2093.add($.__views.__alloyId2094);
    $.__views.__alloyId2095 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId2095"
    });
    $.__views.__alloyId2094.add($.__views.__alloyId2095);
    $.__views.__alloyId2096 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2096"
    });
    $.__views.__alloyId2093.add($.__views.__alloyId2096);
    $.__views.__alloyId2097 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2097"
    });
    $.__views.__alloyId2096.add($.__views.__alloyId2097);
    $.__views.__alloyId2098 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2098"
    });
    $.__views.__alloyId2096.add($.__views.__alloyId2098);
    $.__views.__alloyId2099 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2099"
    });
    $.__views.__alloyId2093.add($.__views.__alloyId2099);
    $.__views.__alloyId2100 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2100"
    });
    $.__views.__alloyId2099.add($.__views.__alloyId2100);
    $.__views.__alloyId2101 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2101"
    });
    $.__views.__alloyId2099.add($.__views.__alloyId2101);
    $.__views.__alloyId2102 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2102"
    });
    $.__views.__alloyId2093.add($.__views.__alloyId2102);
    $.__views.__alloyId2103 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2103"
    });
    $.__views.__alloyId2102.add($.__views.__alloyId2103);
    $.__views.__alloyId2104 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2104"
    });
    $.__views.__alloyId2102.add($.__views.__alloyId2104);
    $.__views.__alloyId2105 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2105"
    });
    $.__views.__alloyId2093.add($.__views.__alloyId2105);
    $.__views.__alloyId2106 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2106"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2106);
    $.__views.__alloyId2107 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2107"
    });
    $.__views.__alloyId2105.add($.__views.__alloyId2107);
    $.__views.__alloyId2108 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId2108"
    });
    $.__views.scrollView.add($.__views.__alloyId2108);
    $.__views.__alloyId2109 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId2109"
    });
    $.__views.__alloyId2108.add($.__views.__alloyId2109);
    $.__views.__alloyId2110 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId2110"
    });
    $.__views.__alloyId2109.add($.__views.__alloyId2110);
    $.__views.__alloyId2111 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2111"
    });
    $.__views.__alloyId2108.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2112"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2113"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2113);
    $.__views.__alloyId2114 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2114"
    });
    $.__views.__alloyId2108.add($.__views.__alloyId2114);
    $.__views.__alloyId2115 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2115"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2116"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId2117"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId2117);
    subscribe ? $.__views.__alloyId2117.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2117!click!subscribe"] = true;
    $.__views.__alloyId2118 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId2118"
    });
    $.__views.__alloyId2117.add($.__views.__alloyId2118);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId2083!click!back"] && $.__views.__alloyId2083.addEventListener("click", back);
    __defers["$.__views.__alloyId2117!click!subscribe"] && $.__views.__alloyId2117.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;