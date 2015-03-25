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
    $.__views.__alloyId2072 = Alloy.createController("_header", {
        id: "__alloyId2072",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId2072.setParent($.__views.products);
    $.__views.__alloyId2073 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId2073"
    });
    $.__views.products.add($.__views.__alloyId2073);
    $.__views.__alloyId2074 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2074"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2074);
    $.__views.__alloyId2075 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2075"
    });
    $.__views.products.add($.__views.__alloyId2075);
    $.__views.__alloyId2076 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId2076"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2076);
    prepaidPlus ? $.__views.__alloyId2076.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId2076!click!prepaidPlus"] = true;
    $.__views.__alloyId2077 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId2077"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2077);
    $.__views.__alloyId2078 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId2078"
    });
    $.__views.__alloyId2077.add($.__views.__alloyId2078);
    $.__views.__alloyId2079 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2079"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2079);
    $.__views.__alloyId2080 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2080"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2080);
    prepaid ? $.__views.__alloyId2080.addEventListener("click", prepaid) : __defers["$.__views.__alloyId2080!click!prepaid"] = true;
    $.__views.__alloyId2081 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId2081"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2081);
    $.__views.__alloyId2082 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId2082"
    });
    $.__views.__alloyId2081.add($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2083"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2083);
    $.__views.__alloyId2084 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId2084"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2084);
    penang ? $.__views.__alloyId2084.addEventListener("click", penang) : __defers["$.__views.__alloyId2084!click!penang"] = true;
    $.__views.__alloyId2085 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId2085"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2085);
    $.__views.__alloyId2086 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId2086"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2087"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2087);
    $.__views.__alloyId2088 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId2088"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2088);
    mobileInternet ? $.__views.__alloyId2088.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId2088!click!mobileInternet"] = true;
    $.__views.__alloyId2089 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId2089"
    });
    $.__views.__alloyId2088.add($.__views.__alloyId2089);
    $.__views.__alloyId2090 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId2090"
    });
    $.__views.__alloyId2089.add($.__views.__alloyId2090);
    $.__views.__alloyId2091 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2091"
    });
    $.__views.__alloyId2088.add($.__views.__alloyId2091);
    $.__views.__alloyId2092 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId2092"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2092);
    idd ? $.__views.__alloyId2092.addEventListener("click", idd) : __defers["$.__views.__alloyId2092!click!idd"] = true;
    $.__views.__alloyId2093 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId2093"
    });
    $.__views.__alloyId2092.add($.__views.__alloyId2093);
    $.__views.__alloyId2094 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId2094"
    });
    $.__views.__alloyId2093.add($.__views.__alloyId2094);
    $.__views.__alloyId2095 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2095"
    });
    $.__views.__alloyId2092.add($.__views.__alloyId2095);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2076!click!prepaidPlus"] && $.__views.__alloyId2076.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId2080!click!prepaid"] && $.__views.__alloyId2080.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId2084!click!penang"] && $.__views.__alloyId2084.addEventListener("click", penang);
    __defers["$.__views.__alloyId2088!click!mobileInternet"] && $.__views.__alloyId2088.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId2092!click!idd"] && $.__views.__alloyId2092.addEventListener("click", idd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;