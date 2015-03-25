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
    $.__views.__alloyId1262 = Alloy.createController("_header", {
        id: "__alloyId1262",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId1262.setParent($.__views.mobileInternet);
    $.__views.__alloyId1263 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1263"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1263);
    $.__views.__alloyId1264 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1264"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1264);
    $.__views.__alloyId1265 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1265"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1265);
    back ? $.__views.__alloyId1265.addEventListener("click", back) : __defers["$.__views.__alloyId1265!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
    $.__views.__alloyId1266 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1266"
    });
    $.__views.scrollView.add($.__views.__alloyId1266);
    $.__views.__alloyId1267 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1267"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1267);
    $.__views.__alloyId1268 = Ti.UI.createLabel({
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1268"
    });
    $.__views.__alloyId1267.add($.__views.__alloyId1268);
    $.__views.__alloyId1269 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1269"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1269);
    $.__views.__alloyId1270 = Ti.UI.createLabel({
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1270"
    });
    $.__views.__alloyId1269.add($.__views.__alloyId1270);
    $.__views.__alloyId1271 = Ti.UI.createLabel({
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1271"
    });
    $.__views.__alloyId1269.add($.__views.__alloyId1271);
    $.__views.__alloyId1272 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1272"
    });
    $.__views.__alloyId1269.add($.__views.__alloyId1272);
    $.__views.__alloyId1273 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1273"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1273);
    $.__views.__alloyId1274 = Ti.UI.createLabel({
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1274"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1274);
    $.__views.__alloyId1275 = Ti.UI.createLabel({
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1275"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1275);
    $.__views.__alloyId1276 = Ti.UI.createLabel({
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1276"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1276);
    $.__views.__alloyId1277 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1277"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1277);
    $.__views.__alloyId1278 = Ti.UI.createLabel({
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1278"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1278);
    $.__views.__alloyId1279 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1279"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1279);
    $.__views.__alloyId1280 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1280"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1280);
    $.__views.__alloyId1281 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1281"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1281);
    $.__views.__alloyId1282 = Ti.UI.createLabel({
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1282"
    });
    $.__views.__alloyId1281.add($.__views.__alloyId1282);
    $.__views.__alloyId1283 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1283"
    });
    $.__views.__alloyId1281.add($.__views.__alloyId1283);
    $.__views.__alloyId1284 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1284"
    });
    $.__views.__alloyId1281.add($.__views.__alloyId1284);
    $.__views.__alloyId1285 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1285"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1285);
    $.__views.__alloyId1286 = Ti.UI.createLabel({
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1286"
    });
    $.__views.__alloyId1285.add($.__views.__alloyId1286);
    $.__views.__alloyId1287 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1287"
    });
    $.__views.__alloyId1285.add($.__views.__alloyId1287);
    $.__views.__alloyId1288 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1288"
    });
    $.__views.__alloyId1285.add($.__views.__alloyId1288);
    $.__views.__alloyId1289 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1289"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1289);
    $.__views.__alloyId1290 = Ti.UI.createLabel({
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1290"
    });
    $.__views.__alloyId1289.add($.__views.__alloyId1290);
    $.__views.__alloyId1291 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1291"
    });
    $.__views.__alloyId1289.add($.__views.__alloyId1291);
    $.__views.__alloyId1292 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1292"
    });
    $.__views.__alloyId1289.add($.__views.__alloyId1292);
    $.__views.__alloyId1293 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1293"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1293);
    $.__views.__alloyId1294 = Ti.UI.createLabel({
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1294"
    });
    $.__views.__alloyId1293.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1295"
    });
    $.__views.__alloyId1293.add($.__views.__alloyId1295);
    $.__views.__alloyId1296 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1296"
    });
    $.__views.__alloyId1293.add($.__views.__alloyId1296);
    $.__views.__alloyId1297 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1297"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1297);
    subscribe ? $.__views.__alloyId1297.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1297!click!subscribe"] = true;
    $.__views.__alloyId1298 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1298"
    });
    $.__views.__alloyId1297.add($.__views.__alloyId1298);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1265!click!back"] && $.__views.__alloyId1265.addEventListener("click", back);
    __defers["$.__views.__alloyId1297!click!subscribe"] && $.__views.__alloyId1297.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;