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
        DRAWER.navigation("myAccount", 2);
    }
    function addNumber() {
        console.log("addNumber");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline";
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
    $.__views.subline = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline"
    });
    $.__views.subline && $.addTopLevelView($.__views.subline);
    $.__views.__alloyId2093 = Alloy.createController("_header", {
        id: "__alloyId2093",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId2093.setParent($.__views.subline);
    $.__views.__alloyId2094 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2094"
    });
    $.__views.subline.add($.__views.__alloyId2094);
    $.__views.__alloyId2095 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2095"
    });
    $.__views.__alloyId2094.add($.__views.__alloyId2095);
    $.__views.__alloyId2096 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2096"
    });
    $.__views.__alloyId2094.add($.__views.__alloyId2096);
    back ? $.__views.__alloyId2096.addEventListener("click", back) : __defers["$.__views.__alloyId2096!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
    $.__views.__alloyId2097 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2097"
    });
    $.__views.scrollView.add($.__views.__alloyId2097);
    $.__views.__alloyId2098 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId2098"
    });
    $.__views.__alloyId2097.add($.__views.__alloyId2098);
    $.__views.__alloyId2099 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2099"
    });
    $.__views.__alloyId2098.add($.__views.__alloyId2099);
    $.__views.__alloyId2100 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2100"
    });
    $.__views.__alloyId2099.add($.__views.__alloyId2100);
    $.__views.__alloyId2101 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2101"
    });
    $.__views.__alloyId2099.add($.__views.__alloyId2101);
    $.__views.__alloyId2102 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2102"
    });
    $.__views.__alloyId2097.add($.__views.__alloyId2102);
    $.__views.__alloyId2103 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2103"
    });
    $.__views.__alloyId2102.add($.__views.__alloyId2103);
    $.__views.__alloyId2104 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2104"
    });
    $.__views.__alloyId2097.add($.__views.__alloyId2104);
    $.__views.__alloyId2105 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2105"
    });
    $.__views.__alloyId2104.add($.__views.__alloyId2105);
    $.__views.__alloyId2106 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2106"
    });
    $.__views.scrollView.add($.__views.__alloyId2106);
    $.__views.__alloyId2107 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2107"
    });
    $.__views.scrollView.add($.__views.__alloyId2107);
    $.__views.__alloyId2108 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId2108"
    });
    $.__views.__alloyId2107.add($.__views.__alloyId2108);
    $.__views.__alloyId2109 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2109"
    });
    $.__views.__alloyId2108.add($.__views.__alloyId2109);
    $.__views.__alloyId2110 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2110"
    });
    $.__views.__alloyId2109.add($.__views.__alloyId2110);
    $.__views.__alloyId2111 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2111"
    });
    $.__views.__alloyId2109.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2112"
    });
    $.__views.__alloyId2107.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2113"
    });
    $.__views.__alloyId2112.add($.__views.__alloyId2113);
    $.__views.__alloyId2114 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2114"
    });
    $.__views.__alloyId2107.add($.__views.__alloyId2114);
    $.__views.__alloyId2115 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2115"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2116"
    });
    $.__views.scrollView.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2117"
    });
    $.__views.scrollView.add($.__views.__alloyId2117);
    $.__views.__alloyId2118 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId2118"
    });
    $.__views.__alloyId2117.add($.__views.__alloyId2118);
    $.__views.__alloyId2119 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2119"
    });
    $.__views.__alloyId2118.add($.__views.__alloyId2119);
    $.__views.__alloyId2120 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2120"
    });
    $.__views.__alloyId2119.add($.__views.__alloyId2120);
    $.__views.__alloyId2121 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2121"
    });
    $.__views.__alloyId2119.add($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2122"
    });
    $.__views.__alloyId2117.add($.__views.__alloyId2122);
    $.__views.__alloyId2123 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2123"
    });
    $.__views.__alloyId2122.add($.__views.__alloyId2123);
    $.__views.__alloyId2124 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2124"
    });
    $.__views.__alloyId2117.add($.__views.__alloyId2124);
    $.__views.__alloyId2125 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2125"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2125);
    $.__views.__alloyId2126 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2126"
    });
    $.__views.scrollView.add($.__views.__alloyId2126);
    $.__views.__alloyId2127 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2127"
    });
    $.__views.scrollView.add($.__views.__alloyId2127);
    $.__views.__alloyId2128 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId2128"
    });
    $.__views.__alloyId2127.add($.__views.__alloyId2128);
    $.__views.__alloyId2129 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2129"
    });
    $.__views.__alloyId2128.add($.__views.__alloyId2129);
    $.__views.__alloyId2130 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2130"
    });
    $.__views.__alloyId2129.add($.__views.__alloyId2130);
    $.__views.__alloyId2131 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2131"
    });
    $.__views.__alloyId2129.add($.__views.__alloyId2131);
    $.__views.__alloyId2132 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2132"
    });
    $.__views.__alloyId2127.add($.__views.__alloyId2132);
    $.__views.__alloyId2133 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2133"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2133);
    $.__views.__alloyId2134 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2134"
    });
    $.__views.__alloyId2127.add($.__views.__alloyId2134);
    $.__views.__alloyId2135 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2135"
    });
    $.__views.__alloyId2134.add($.__views.__alloyId2135);
    $.__views.__alloyId2136 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2136"
    });
    $.__views.scrollView.add($.__views.__alloyId2136);
    $.__views.__alloyId2137 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2137"
    });
    $.__views.scrollView.add($.__views.__alloyId2137);
    $.__views.__alloyId2138 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId2138"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2138);
    $.__views.__alloyId2139 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2139"
    });
    $.__views.__alloyId2138.add($.__views.__alloyId2139);
    $.__views.__alloyId2140 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2140"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2140);
    $.__views.__alloyId2141 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2141"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2141);
    $.__views.__alloyId2142 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2142"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2142);
    $.__views.__alloyId2143 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2143"
    });
    $.__views.__alloyId2142.add($.__views.__alloyId2143);
    $.__views.__alloyId2144 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2144"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2144);
    $.__views.__alloyId2145 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2145"
    });
    $.__views.__alloyId2144.add($.__views.__alloyId2145);
    $.__views.__alloyId2146 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2146"
    });
    $.__views.scrollView.add($.__views.__alloyId2146);
    $.__views.__alloyId2147 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2147"
    });
    $.__views.scrollView.add($.__views.__alloyId2147);
    $.__views.__alloyId2148 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId2148"
    });
    $.__views.__alloyId2147.add($.__views.__alloyId2148);
    $.__views.__alloyId2149 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2149"
    });
    $.__views.__alloyId2148.add($.__views.__alloyId2149);
    $.__views.__alloyId2150 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2150"
    });
    $.__views.__alloyId2149.add($.__views.__alloyId2150);
    $.__views.__alloyId2151 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2151"
    });
    $.__views.__alloyId2149.add($.__views.__alloyId2151);
    $.__views.__alloyId2152 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2152"
    });
    $.__views.__alloyId2147.add($.__views.__alloyId2152);
    $.__views.__alloyId2153 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2153"
    });
    $.__views.__alloyId2152.add($.__views.__alloyId2153);
    $.__views.__alloyId2154 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2154"
    });
    $.__views.__alloyId2147.add($.__views.__alloyId2154);
    $.__views.__alloyId2155 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2155"
    });
    $.__views.__alloyId2154.add($.__views.__alloyId2155);
    $.__views.__alloyId2156 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId2156"
    });
    $.__views.scrollView.add($.__views.__alloyId2156);
    $.__views.__alloyId2157 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId2157"
    });
    $.__views.subline.add($.__views.__alloyId2157);
    addNumber ? $.__views.__alloyId2157.addEventListener("click", addNumber) : __defers["$.__views.__alloyId2157!click!addNumber"] = true;
    $.__views.__alloyId2158 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId2158"
    });
    $.__views.__alloyId2157.add($.__views.__alloyId2158);
    $.__views.__alloyId2159 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId2159"
    });
    $.__views.__alloyId2158.add($.__views.__alloyId2159);
    $.__views.__alloyId2160 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId2160"
    });
    $.__views.__alloyId2158.add($.__views.__alloyId2160);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId2096!click!back"] && $.__views.__alloyId2096.addEventListener("click", back);
    __defers["$.__views.__alloyId2157!click!addNumber"] && $.__views.__alloyId2157.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;