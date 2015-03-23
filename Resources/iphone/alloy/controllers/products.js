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
        DRAWER.navigation("penang", 1);
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
    $.__views.__alloyId1259 = Alloy.createController("_header", {
        id: "__alloyId1259",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1259.setParent($.__views.products);
    $.__views.__alloyId1260 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1260"
    });
    $.__views.products.add($.__views.__alloyId1260);
    $.__views.__alloyId1261 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1261"
    });
    $.__views.__alloyId1260.add($.__views.__alloyId1261);
    $.__views.__alloyId1262 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1262"
    });
    $.__views.products.add($.__views.__alloyId1262);
    $.__views.__alloyId1263 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1263"
    });
    $.__views.__alloyId1262.add($.__views.__alloyId1263);
    prepaidPlus ? $.__views.__alloyId1263.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1263!click!prepaidPlus"] = true;
    $.__views.__alloyId1264 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1264"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1264);
    $.__views.__alloyId1265 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1265"
    });
    $.__views.__alloyId1264.add($.__views.__alloyId1265);
    $.__views.__alloyId1266 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1266"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1266);
    $.__views.__alloyId1267 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1267"
    });
    $.__views.__alloyId1262.add($.__views.__alloyId1267);
    prepaid ? $.__views.__alloyId1267.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1267!click!prepaid"] = true;
    $.__views.__alloyId1268 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1268"
    });
    $.__views.__alloyId1267.add($.__views.__alloyId1268);
    $.__views.__alloyId1269 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1269"
    });
    $.__views.__alloyId1268.add($.__views.__alloyId1269);
    $.__views.__alloyId1270 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1270"
    });
    $.__views.__alloyId1267.add($.__views.__alloyId1270);
    $.__views.__alloyId1271 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1271"
    });
    $.__views.__alloyId1262.add($.__views.__alloyId1271);
    penang ? $.__views.__alloyId1271.addEventListener("click", penang) : __defers["$.__views.__alloyId1271!click!penang"] = true;
    $.__views.__alloyId1272 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1272"
    });
    $.__views.__alloyId1271.add($.__views.__alloyId1272);
    $.__views.__alloyId1273 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1273"
    });
    $.__views.__alloyId1272.add($.__views.__alloyId1273);
    $.__views.__alloyId1274 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1274"
    });
    $.__views.__alloyId1271.add($.__views.__alloyId1274);
    $.__views.__alloyId1275 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId1275"
    });
    $.__views.__alloyId1262.add($.__views.__alloyId1275);
    mobileInternet ? $.__views.__alloyId1275.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId1275!click!mobileInternet"] = true;
    $.__views.__alloyId1276 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId1276"
    });
    $.__views.__alloyId1275.add($.__views.__alloyId1276);
    $.__views.__alloyId1277 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1277"
    });
    $.__views.__alloyId1276.add($.__views.__alloyId1277);
    $.__views.__alloyId1278 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1278"
    });
    $.__views.__alloyId1275.add($.__views.__alloyId1278);
    $.__views.__alloyId1279 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId1279"
    });
    $.__views.__alloyId1262.add($.__views.__alloyId1279);
    idd ? $.__views.__alloyId1279.addEventListener("click", idd) : __defers["$.__views.__alloyId1279!click!idd"] = true;
    $.__views.__alloyId1280 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId1280"
    });
    $.__views.__alloyId1279.add($.__views.__alloyId1280);
    $.__views.__alloyId1281 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId1281"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1281);
    $.__views.__alloyId1282 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1282"
    });
    $.__views.__alloyId1279.add($.__views.__alloyId1282);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1263!click!prepaidPlus"] && $.__views.__alloyId1263.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1267!click!prepaid"] && $.__views.__alloyId1267.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1271!click!penang"] && $.__views.__alloyId1271.addEventListener("click", penang);
    __defers["$.__views.__alloyId1275!click!mobileInternet"] && $.__views.__alloyId1275.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1279!click!idd"] && $.__views.__alloyId1279.addEventListener("click", idd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;