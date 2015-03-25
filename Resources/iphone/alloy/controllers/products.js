function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function prepaidPlus() {
        DRAWER.navigation("prepaidPlus", 1);
    }
    function prepaid() {
        DRAWER.navigation("prepaid", 1);
    }
    function penang() {
        DRAWER.navigation("penang1758", 1);
    }
    function mobileInternet() {
        DRAWER.navigation("mobileInternet", 1);
    }
    function idd() {
        DRAWER.navigation("idd", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "products";
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
    $.__views.products = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "products"
    });
    $.__views.products && $.addTopLevelView($.__views.products);
    $.__views.__alloyId2136 = Alloy.createController("_header", {
        id: "__alloyId2136",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId2136.setParent($.__views.products);
    $.__views.__alloyId2137 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId2137"
    });
    $.__views.products.add($.__views.__alloyId2137);
    $.__views.__alloyId2138 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2138"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2138);
    $.__views.__alloyId2139 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2139"
    });
    $.__views.products.add($.__views.__alloyId2139);
    $.__views.__alloyId2140 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId2140"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2140);
    prepaidPlus ? $.__views.__alloyId2140.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId2140!click!prepaidPlus"] = true;
    $.__views.__alloyId2141 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId2141"
    });
    $.__views.__alloyId2140.add($.__views.__alloyId2141);
    $.__views.__alloyId2142 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId2142"
    });
    $.__views.__alloyId2141.add($.__views.__alloyId2142);
    $.__views.__alloyId2143 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2143"
    });
    $.__views.__alloyId2140.add($.__views.__alloyId2143);
    $.__views.__alloyId2144 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2144"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2144);
    prepaid ? $.__views.__alloyId2144.addEventListener("click", prepaid) : __defers["$.__views.__alloyId2144!click!prepaid"] = true;
    $.__views.__alloyId2145 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId2145"
    });
    $.__views.__alloyId2144.add($.__views.__alloyId2145);
    $.__views.__alloyId2146 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId2146"
    });
    $.__views.__alloyId2145.add($.__views.__alloyId2146);
    $.__views.__alloyId2147 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2147"
    });
    $.__views.__alloyId2144.add($.__views.__alloyId2147);
    $.__views.__alloyId2148 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId2148"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2148);
    penang ? $.__views.__alloyId2148.addEventListener("click", penang) : __defers["$.__views.__alloyId2148!click!penang"] = true;
    $.__views.__alloyId2149 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId2149"
    });
    $.__views.__alloyId2148.add($.__views.__alloyId2149);
    $.__views.__alloyId2150 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId2150"
    });
    $.__views.__alloyId2149.add($.__views.__alloyId2150);
    $.__views.__alloyId2151 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2151"
    });
    $.__views.__alloyId2148.add($.__views.__alloyId2151);
    $.__views.__alloyId2152 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId2152"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2152);
    mobileInternet ? $.__views.__alloyId2152.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId2152!click!mobileInternet"] = true;
    $.__views.__alloyId2153 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId2153"
    });
    $.__views.__alloyId2152.add($.__views.__alloyId2153);
    $.__views.__alloyId2154 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId2154"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2154);
    $.__views.__alloyId2155 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2155"
    });
    $.__views.__alloyId2152.add($.__views.__alloyId2155);
    $.__views.__alloyId2156 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId2156"
    });
    $.__views.__alloyId2139.add($.__views.__alloyId2156);
    idd ? $.__views.__alloyId2156.addEventListener("click", idd) : __defers["$.__views.__alloyId2156!click!idd"] = true;
    $.__views.__alloyId2157 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId2157"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2157);
    $.__views.__alloyId2158 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId2158"
    });
    $.__views.__alloyId2157.add($.__views.__alloyId2158);
    $.__views.__alloyId2159 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2159"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2159);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2140!click!prepaidPlus"] && $.__views.__alloyId2140.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId2144!click!prepaid"] && $.__views.__alloyId2144.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId2148!click!penang"] && $.__views.__alloyId2148.addEventListener("click", penang);
    __defers["$.__views.__alloyId2152!click!mobileInternet"] && $.__views.__alloyId2152.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId2156!click!idd"] && $.__views.__alloyId2156.addEventListener("click", idd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;