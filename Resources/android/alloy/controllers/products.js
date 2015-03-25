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
    $.__views.__alloyId2208 = Alloy.createController("_header", {
        id: "__alloyId2208",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId2208.setParent($.__views.products);
    $.__views.__alloyId2209 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId2209"
    });
    $.__views.products.add($.__views.__alloyId2209);
    $.__views.__alloyId2210 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2210"
    });
    $.__views.__alloyId2209.add($.__views.__alloyId2210);
    $.__views.__alloyId2211 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2211"
    });
    $.__views.products.add($.__views.__alloyId2211);
    $.__views.__alloyId2212 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId2212"
    });
    $.__views.__alloyId2211.add($.__views.__alloyId2212);
    prepaidPlus ? $.__views.__alloyId2212.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId2212!click!prepaidPlus"] = true;
    $.__views.__alloyId2213 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId2213"
    });
    $.__views.__alloyId2212.add($.__views.__alloyId2213);
    $.__views.__alloyId2214 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId2214"
    });
    $.__views.__alloyId2213.add($.__views.__alloyId2214);
    $.__views.__alloyId2215 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2215"
    });
    $.__views.__alloyId2212.add($.__views.__alloyId2215);
    $.__views.__alloyId2216 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2216"
    });
    $.__views.__alloyId2211.add($.__views.__alloyId2216);
    prepaid ? $.__views.__alloyId2216.addEventListener("click", prepaid) : __defers["$.__views.__alloyId2216!click!prepaid"] = true;
    $.__views.__alloyId2217 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId2217"
    });
    $.__views.__alloyId2216.add($.__views.__alloyId2217);
    $.__views.__alloyId2218 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId2218"
    });
    $.__views.__alloyId2217.add($.__views.__alloyId2218);
    $.__views.__alloyId2219 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2219"
    });
    $.__views.__alloyId2216.add($.__views.__alloyId2219);
    $.__views.__alloyId2220 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId2220"
    });
    $.__views.__alloyId2211.add($.__views.__alloyId2220);
    penang ? $.__views.__alloyId2220.addEventListener("click", penang) : __defers["$.__views.__alloyId2220!click!penang"] = true;
    $.__views.__alloyId2221 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId2221"
    });
    $.__views.__alloyId2220.add($.__views.__alloyId2221);
    $.__views.__alloyId2222 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId2222"
    });
    $.__views.__alloyId2221.add($.__views.__alloyId2222);
    $.__views.__alloyId2223 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2223"
    });
    $.__views.__alloyId2220.add($.__views.__alloyId2223);
    $.__views.__alloyId2224 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId2224"
    });
    $.__views.__alloyId2211.add($.__views.__alloyId2224);
    mobileInternet ? $.__views.__alloyId2224.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId2224!click!mobileInternet"] = true;
    $.__views.__alloyId2225 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId2225"
    });
    $.__views.__alloyId2224.add($.__views.__alloyId2225);
    $.__views.__alloyId2226 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId2226"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2227"
    });
    $.__views.__alloyId2224.add($.__views.__alloyId2227);
    $.__views.__alloyId2228 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId2228"
    });
    $.__views.__alloyId2211.add($.__views.__alloyId2228);
    idd ? $.__views.__alloyId2228.addEventListener("click", idd) : __defers["$.__views.__alloyId2228!click!idd"] = true;
    $.__views.__alloyId2229 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId2229"
    });
    $.__views.__alloyId2228.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId2230"
    });
    $.__views.__alloyId2229.add($.__views.__alloyId2230);
    $.__views.__alloyId2231 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2231"
    });
    $.__views.__alloyId2228.add($.__views.__alloyId2231);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2212!click!prepaidPlus"] && $.__views.__alloyId2212.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId2216!click!prepaid"] && $.__views.__alloyId2216.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId2220!click!penang"] && $.__views.__alloyId2220.addEventListener("click", penang);
    __defers["$.__views.__alloyId2224!click!mobileInternet"] && $.__views.__alloyId2224.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId2228!click!idd"] && $.__views.__alloyId2228.addEventListener("click", idd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;