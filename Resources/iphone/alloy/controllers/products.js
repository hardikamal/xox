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
        DRAWER.navigation("prepaidPlus", 2);
    }
    function prepaid() {
        DRAWER.navigation("prepaid", 2);
    }
    function penang() {
        DRAWER.navigation("penang", 2);
    }
    function mobileInternet() {
        DRAWER.navigation("mobileInternet", 2);
    }
    function idd() {
        DRAWER.navigation("idd", 2);
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
    $.__views.__alloyId1389 = Alloy.createController("_header", {
        id: "__alloyId1389",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1389.setParent($.__views.products);
    $.__views.__alloyId1390 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1390"
    });
    $.__views.products.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1391"
    });
    $.__views.__alloyId1390.add($.__views.__alloyId1391);
    $.__views.__alloyId1392 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1392"
    });
    $.__views.products.add($.__views.__alloyId1392);
    $.__views.__alloyId1393 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1393"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1393);
    prepaidPlus ? $.__views.__alloyId1393.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1393!click!prepaidPlus"] = true;
    $.__views.__alloyId1394 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1394"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1395"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1396"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1396);
    $.__views.__alloyId1397 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1397"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1397);
    prepaid ? $.__views.__alloyId1397.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1397!click!prepaid"] = true;
    $.__views.__alloyId1398 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1398"
    });
    $.__views.__alloyId1397.add($.__views.__alloyId1398);
    $.__views.__alloyId1399 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1399"
    });
    $.__views.__alloyId1398.add($.__views.__alloyId1399);
    $.__views.__alloyId1400 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1400"
    });
    $.__views.__alloyId1397.add($.__views.__alloyId1400);
    $.__views.__alloyId1401 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1401"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1401);
    penang ? $.__views.__alloyId1401.addEventListener("click", penang) : __defers["$.__views.__alloyId1401!click!penang"] = true;
    $.__views.__alloyId1402 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1402"
    });
    $.__views.__alloyId1401.add($.__views.__alloyId1402);
    $.__views.__alloyId1403 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1403"
    });
    $.__views.__alloyId1402.add($.__views.__alloyId1403);
    $.__views.__alloyId1404 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1404"
    });
    $.__views.__alloyId1401.add($.__views.__alloyId1404);
    $.__views.__alloyId1405 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId1405"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1405);
    mobileInternet ? $.__views.__alloyId1405.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId1405!click!mobileInternet"] = true;
    $.__views.__alloyId1406 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId1406"
    });
    $.__views.__alloyId1405.add($.__views.__alloyId1406);
    $.__views.__alloyId1407 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1407"
    });
    $.__views.__alloyId1406.add($.__views.__alloyId1407);
    $.__views.__alloyId1408 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1408"
    });
    $.__views.__alloyId1405.add($.__views.__alloyId1408);
    $.__views.__alloyId1409 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId1409"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1409);
    idd ? $.__views.__alloyId1409.addEventListener("click", idd) : __defers["$.__views.__alloyId1409!click!idd"] = true;
    $.__views.__alloyId1410 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId1410"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1410);
    $.__views.__alloyId1411 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId1411"
    });
    $.__views.__alloyId1410.add($.__views.__alloyId1411);
    $.__views.__alloyId1412 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1412"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1412);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1393!click!prepaidPlus"] && $.__views.__alloyId1393.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1397!click!prepaid"] && $.__views.__alloyId1397.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1401!click!penang"] && $.__views.__alloyId1401.addEventListener("click", penang);
    __defers["$.__views.__alloyId1405!click!mobileInternet"] && $.__views.__alloyId1405.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1409!click!idd"] && $.__views.__alloyId1409.addEventListener("click", idd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;