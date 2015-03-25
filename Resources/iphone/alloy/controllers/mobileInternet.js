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
    this.__controllerPath = "mobileInternet";
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
    $.__views.mobileInternet = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "mobileInternet"
    });
    $.__views.mobileInternet && $.addTopLevelView($.__views.mobileInternet);
    $.__views.__alloyId1233 = Alloy.createController("_header", {
        id: "__alloyId1233",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId1233.setParent($.__views.mobileInternet);
    $.__views.__alloyId1234 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1234"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1234);
    $.__views.__alloyId1235 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1235"
    });
    $.__views.__alloyId1234.add($.__views.__alloyId1235);
    $.__views.__alloyId1236 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1236"
    });
    $.__views.__alloyId1234.add($.__views.__alloyId1236);
    back ? $.__views.__alloyId1236.addEventListener("click", back) : __defers["$.__views.__alloyId1236!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
    $.__views.__alloyId1237 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1237"
    });
    $.__views.scrollView.add($.__views.__alloyId1237);
    $.__views.__alloyId1238 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1238"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createLabel({
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1239"
    });
    $.__views.__alloyId1238.add($.__views.__alloyId1239);
    $.__views.__alloyId1240 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1240"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1240);
    $.__views.__alloyId1241 = Ti.UI.createLabel({
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1241"
    });
    $.__views.__alloyId1240.add($.__views.__alloyId1241);
    $.__views.__alloyId1242 = Ti.UI.createLabel({
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1242"
    });
    $.__views.__alloyId1240.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1243"
    });
    $.__views.__alloyId1240.add($.__views.__alloyId1243);
    $.__views.__alloyId1244 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1244"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1244);
    $.__views.__alloyId1245 = Ti.UI.createLabel({
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1245"
    });
    $.__views.__alloyId1244.add($.__views.__alloyId1245);
    $.__views.__alloyId1246 = Ti.UI.createLabel({
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1246"
    });
    $.__views.__alloyId1244.add($.__views.__alloyId1246);
    $.__views.__alloyId1247 = Ti.UI.createLabel({
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1247"
    });
    $.__views.__alloyId1244.add($.__views.__alloyId1247);
    $.__views.__alloyId1248 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1248"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1248);
    $.__views.__alloyId1249 = Ti.UI.createLabel({
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1249"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1249);
    $.__views.__alloyId1250 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1250"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1250);
    $.__views.__alloyId1251 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1251"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1251);
    $.__views.__alloyId1252 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1252"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createLabel({
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1253"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1253);
    $.__views.__alloyId1254 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1254"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1254);
    $.__views.__alloyId1255 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1255"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1255);
    $.__views.__alloyId1256 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1256"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1256);
    $.__views.__alloyId1257 = Ti.UI.createLabel({
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1257"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1257);
    $.__views.__alloyId1258 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1258"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1258);
    $.__views.__alloyId1259 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1259"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1259);
    $.__views.__alloyId1260 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1260"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1260);
    $.__views.__alloyId1261 = Ti.UI.createLabel({
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1261"
    });
    $.__views.__alloyId1260.add($.__views.__alloyId1261);
    $.__views.__alloyId1262 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1262"
    });
    $.__views.__alloyId1260.add($.__views.__alloyId1262);
    $.__views.__alloyId1263 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1263"
    });
    $.__views.__alloyId1260.add($.__views.__alloyId1263);
    $.__views.__alloyId1264 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1264"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1264);
    $.__views.__alloyId1265 = Ti.UI.createLabel({
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1265"
    });
    $.__views.__alloyId1264.add($.__views.__alloyId1265);
    $.__views.__alloyId1266 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1266"
    });
    $.__views.__alloyId1264.add($.__views.__alloyId1266);
    $.__views.__alloyId1267 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1267"
    });
    $.__views.__alloyId1264.add($.__views.__alloyId1267);
    $.__views.__alloyId1268 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1268"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1268);
    subscribe ? $.__views.__alloyId1268.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1268!click!subscribe"] = true;
    $.__views.__alloyId1269 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1269"
    });
    $.__views.__alloyId1268.add($.__views.__alloyId1269);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1236!click!back"] && $.__views.__alloyId1236.addEventListener("click", back);
    __defers["$.__views.__alloyId1268!click!subscribe"] && $.__views.__alloyId1268.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;