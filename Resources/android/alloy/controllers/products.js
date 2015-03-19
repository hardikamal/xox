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
    $.__views.__alloyId1207 = Alloy.createController("_header", {
        id: "__alloyId1207",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1207.setParent($.__views.products);
    $.__views.__alloyId1208 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1208"
    });
    $.__views.products.add($.__views.__alloyId1208);
    $.__views.__alloyId1209 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1209"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1209);
    $.__views.__alloyId1210 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1210"
    });
    $.__views.products.add($.__views.__alloyId1210);
    $.__views.__alloyId1211 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1211"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1211);
    prepaidPlus ? $.__views.__alloyId1211.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1211!click!prepaidPlus"] = true;
    $.__views.__alloyId1212 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1212"
    });
    $.__views.__alloyId1211.add($.__views.__alloyId1212);
    $.__views.__alloyId1213 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1213"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1213);
    $.__views.__alloyId1214 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1214"
    });
    $.__views.__alloyId1211.add($.__views.__alloyId1214);
    $.__views.__alloyId1215 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1215"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1215);
    prepaid ? $.__views.__alloyId1215.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1215!click!prepaid"] = true;
    $.__views.__alloyId1216 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1216"
    });
    $.__views.__alloyId1215.add($.__views.__alloyId1216);
    $.__views.__alloyId1217 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1217"
    });
    $.__views.__alloyId1216.add($.__views.__alloyId1217);
    $.__views.__alloyId1218 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1218"
    });
    $.__views.__alloyId1215.add($.__views.__alloyId1218);
    $.__views.__alloyId1219 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1219"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1219);
    penang ? $.__views.__alloyId1219.addEventListener("click", penang) : __defers["$.__views.__alloyId1219!click!penang"] = true;
    $.__views.__alloyId1220 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1220"
    });
    $.__views.__alloyId1219.add($.__views.__alloyId1220);
    $.__views.__alloyId1221 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1221"
    });
    $.__views.__alloyId1220.add($.__views.__alloyId1221);
    $.__views.__alloyId1222 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1222"
    });
    $.__views.__alloyId1219.add($.__views.__alloyId1222);
    $.__views.__alloyId1223 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId1223"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1223);
    mobileInternet ? $.__views.__alloyId1223.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId1223!click!mobileInternet"] = true;
    $.__views.__alloyId1224 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId1224"
    });
    $.__views.__alloyId1223.add($.__views.__alloyId1224);
    $.__views.__alloyId1225 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1225"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1225);
    $.__views.__alloyId1226 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1226"
    });
    $.__views.__alloyId1223.add($.__views.__alloyId1226);
    $.__views.__alloyId1227 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId1227"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1227);
    idd ? $.__views.__alloyId1227.addEventListener("click", idd) : __defers["$.__views.__alloyId1227!click!idd"] = true;
    $.__views.__alloyId1228 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId1228"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1228);
    $.__views.__alloyId1229 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId1229"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1229);
    $.__views.__alloyId1230 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1230"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1230);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1211!click!prepaidPlus"] && $.__views.__alloyId1211.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1215!click!prepaid"] && $.__views.__alloyId1215.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1219!click!penang"] && $.__views.__alloyId1219.addEventListener("click", penang);
    __defers["$.__views.__alloyId1223!click!mobileInternet"] && $.__views.__alloyId1223.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1227!click!idd"] && $.__views.__alloyId1227.addEventListener("click", idd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;