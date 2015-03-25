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
    $.__views.__alloyId2148 = Alloy.createController("_header", {
        id: "__alloyId2148",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId2148.setParent($.__views.prepaidPlus);
    $.__views.__alloyId2149 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId2149"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId2149);
    $.__views.__alloyId2150 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId2150"
    });
    $.__views.__alloyId2149.add($.__views.__alloyId2150);
    $.__views.__alloyId2151 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2151"
    });
    $.__views.__alloyId2149.add($.__views.__alloyId2151);
    back ? $.__views.__alloyId2151.addEventListener("click", back) : __defers["$.__views.__alloyId2151!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaidPlus.add($.__views.scrollView);
    $.__views.__alloyId2152 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId2152"
    });
    $.__views.scrollView.add($.__views.__alloyId2152);
    $.__views.__alloyId2153 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId2153"
    });
    $.__views.__alloyId2152.add($.__views.__alloyId2153);
    $.__views.__alloyId2154 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId2154"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2154);
    $.__views.__alloyId2155 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2155"
    });
    $.__views.__alloyId2152.add($.__views.__alloyId2155);
    $.__views.__alloyId2156 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2156"
    });
    $.__views.__alloyId2155.add($.__views.__alloyId2156);
    $.__views.__alloyId2157 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2157"
    });
    $.__views.__alloyId2155.add($.__views.__alloyId2157);
    $.__views.__alloyId2158 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2158"
    });
    $.__views.__alloyId2152.add($.__views.__alloyId2158);
    $.__views.__alloyId2159 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2159"
    });
    $.__views.__alloyId2158.add($.__views.__alloyId2159);
    $.__views.__alloyId2160 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2160"
    });
    $.__views.__alloyId2158.add($.__views.__alloyId2160);
    $.__views.__alloyId2161 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId2161"
    });
    $.__views.scrollView.add($.__views.__alloyId2161);
    $.__views.__alloyId2162 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId2162"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2162);
    $.__views.__alloyId2163 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId2163"
    });
    $.__views.__alloyId2162.add($.__views.__alloyId2163);
    $.__views.__alloyId2164 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2164"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2164);
    $.__views.__alloyId2165 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2165"
    });
    $.__views.__alloyId2164.add($.__views.__alloyId2165);
    $.__views.__alloyId2166 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2166"
    });
    $.__views.__alloyId2164.add($.__views.__alloyId2166);
    $.__views.__alloyId2167 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2167"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2167);
    $.__views.__alloyId2168 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2168"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2168);
    $.__views.__alloyId2169 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2169"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2169);
    $.__views.__alloyId2170 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2170"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2170);
    $.__views.__alloyId2171 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2171"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2171);
    $.__views.__alloyId2172 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2172"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2172);
    $.__views.__alloyId2173 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2173"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2173);
    $.__views.__alloyId2174 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2174"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2174);
    $.__views.__alloyId2175 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2175"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2175);
    $.__views.__alloyId2176 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId2176"
    });
    $.__views.scrollView.add($.__views.__alloyId2176);
    $.__views.__alloyId2177 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId2177"
    });
    $.__views.__alloyId2176.add($.__views.__alloyId2177);
    $.__views.__alloyId2178 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId2178"
    });
    $.__views.__alloyId2177.add($.__views.__alloyId2178);
    $.__views.__alloyId2179 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2179"
    });
    $.__views.__alloyId2176.add($.__views.__alloyId2179);
    $.__views.__alloyId2180 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2180"
    });
    $.__views.__alloyId2179.add($.__views.__alloyId2180);
    $.__views.__alloyId2181 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2181"
    });
    $.__views.__alloyId2179.add($.__views.__alloyId2181);
    $.__views.__alloyId2182 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId2182"
    });
    $.__views.__alloyId2176.add($.__views.__alloyId2182);
    $.__views.__alloyId2183 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId2183"
    });
    $.__views.__alloyId2182.add($.__views.__alloyId2183);
    $.__views.__alloyId2184 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId2184"
    });
    $.__views.__alloyId2182.add($.__views.__alloyId2184);
    $.__views.__alloyId2185 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId2185"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId2185);
    subscribe ? $.__views.__alloyId2185.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2185!click!subscribe"] = true;
    $.__views.__alloyId2186 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId2186"
    });
    $.__views.__alloyId2185.add($.__views.__alloyId2186);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId2151!click!back"] && $.__views.__alloyId2151.addEventListener("click", back);
    __defers["$.__views.__alloyId2185!click!subscribe"] && $.__views.__alloyId2185.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;