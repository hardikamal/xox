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
    $.__views.__alloyId1192 = Alloy.createController("_header", {
        id: "__alloyId1192",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1192.setParent($.__views.products);
    $.__views.__alloyId1193 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1193"
    });
    $.__views.products.add($.__views.__alloyId1193);
    $.__views.__alloyId1194 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1194"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1195"
    });
    $.__views.products.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1196"
    });
    $.__views.__alloyId1195.add($.__views.__alloyId1196);
    prepaidPlus ? $.__views.__alloyId1196.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1196!click!prepaidPlus"] = true;
    $.__views.__alloyId1197 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1197"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1197);
    $.__views.__alloyId1198 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1198"
    });
    $.__views.__alloyId1197.add($.__views.__alloyId1198);
    $.__views.__alloyId1199 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1199"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1199);
    $.__views.__alloyId1200 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1200"
    });
    $.__views.__alloyId1195.add($.__views.__alloyId1200);
    prepaid ? $.__views.__alloyId1200.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1200!click!prepaid"] = true;
    $.__views.__alloyId1201 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1201"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1202"
    });
    $.__views.__alloyId1201.add($.__views.__alloyId1202);
    $.__views.__alloyId1203 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1203"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1203);
    $.__views.__alloyId1204 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1204"
    });
    $.__views.__alloyId1195.add($.__views.__alloyId1204);
    penang ? $.__views.__alloyId1204.addEventListener("click", penang) : __defers["$.__views.__alloyId1204!click!penang"] = true;
    $.__views.__alloyId1205 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1205"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1205);
    $.__views.__alloyId1206 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1206"
    });
    $.__views.__alloyId1205.add($.__views.__alloyId1206);
    $.__views.__alloyId1207 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1207"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1207);
    $.__views.__alloyId1208 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId1208"
    });
    $.__views.__alloyId1195.add($.__views.__alloyId1208);
    mobileInternet ? $.__views.__alloyId1208.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId1208!click!mobileInternet"] = true;
    $.__views.__alloyId1209 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId1209"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1209);
    $.__views.__alloyId1210 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1210"
    });
    $.__views.__alloyId1209.add($.__views.__alloyId1210);
    $.__views.__alloyId1211 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1211"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId1212"
    });
    $.__views.__alloyId1195.add($.__views.__alloyId1212);
    idd ? $.__views.__alloyId1212.addEventListener("click", idd) : __defers["$.__views.__alloyId1212!click!idd"] = true;
    $.__views.__alloyId1213 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId1213"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1213);
    $.__views.__alloyId1214 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId1214"
    });
    $.__views.__alloyId1213.add($.__views.__alloyId1214);
    $.__views.__alloyId1215 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1215"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1215);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1196!click!prepaidPlus"] && $.__views.__alloyId1196.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1200!click!prepaid"] && $.__views.__alloyId1200.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1204!click!penang"] && $.__views.__alloyId1204.addEventListener("click", penang);
    __defers["$.__views.__alloyId1208!click!mobileInternet"] && $.__views.__alloyId1208.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1212!click!idd"] && $.__views.__alloyId1212.addEventListener("click", idd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;