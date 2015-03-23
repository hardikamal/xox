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
    this.__controllerPath = "prepaidPlus";
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
    $.__views.prepaidPlus = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPlus"
    });
    $.__views.prepaidPlus && $.addTopLevelView($.__views.prepaidPlus);
    $.__views.__alloyId1217 = Alloy.createController("_header", {
        id: "__alloyId1217",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId1217.setParent($.__views.prepaidPlus);
    $.__views.__alloyId1218 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1218"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1218);
    $.__views.__alloyId1219 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId1219"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1219);
    $.__views.__alloyId1220 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId1220"
    });
    $.__views.__alloyId1219.add($.__views.__alloyId1220);
    $.__views.__alloyId1221 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1221"
    });
    $.__views.__alloyId1220.add($.__views.__alloyId1221);
    $.__views.__alloyId1222 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1222"
    });
    $.__views.__alloyId1219.add($.__views.__alloyId1222);
    $.__views.__alloyId1223 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1223"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1223);
    back ? $.__views.__alloyId1223.addEventListener("click", back) : __defers["$.__views.__alloyId1223!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaidPlus.add($.__views.scrollView);
    $.__views.__alloyId1224 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1224"
    });
    $.__views.scrollView.add($.__views.__alloyId1224);
    $.__views.__alloyId1225 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1225"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1225);
    $.__views.__alloyId1226 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1226"
    });
    $.__views.__alloyId1225.add($.__views.__alloyId1226);
    $.__views.__alloyId1227 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1227"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1227);
    $.__views.__alloyId1228 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1228"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1228);
    $.__views.__alloyId1229 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1229"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1229);
    $.__views.__alloyId1230 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1230"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1230);
    $.__views.__alloyId1231 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1231"
    });
    $.__views.__alloyId1230.add($.__views.__alloyId1231);
    $.__views.__alloyId1232 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1232"
    });
    $.__views.__alloyId1230.add($.__views.__alloyId1232);
    $.__views.__alloyId1233 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1233"
    });
    $.__views.scrollView.add($.__views.__alloyId1233);
    $.__views.__alloyId1234 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1234"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1234);
    $.__views.__alloyId1235 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1235"
    });
    $.__views.__alloyId1234.add($.__views.__alloyId1235);
    $.__views.__alloyId1236 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1236"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1236);
    $.__views.__alloyId1237 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1237"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1237);
    $.__views.__alloyId1238 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1238"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1239"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1239);
    $.__views.__alloyId1240 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1240"
    });
    $.__views.__alloyId1239.add($.__views.__alloyId1240);
    $.__views.__alloyId1241 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1241"
    });
    $.__views.__alloyId1239.add($.__views.__alloyId1241);
    $.__views.__alloyId1242 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1242"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1243"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1243);
    $.__views.__alloyId1244 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1244"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1244);
    $.__views.__alloyId1245 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1245"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1245);
    $.__views.__alloyId1246 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1246"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1246);
    $.__views.__alloyId1247 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1247"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1247);
    $.__views.__alloyId1248 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1248"
    });
    $.__views.scrollView.add($.__views.__alloyId1248);
    $.__views.__alloyId1249 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1249"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1249);
    $.__views.__alloyId1250 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1250"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1250);
    $.__views.__alloyId1251 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1251"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1251);
    $.__views.__alloyId1252 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1252"
    });
    $.__views.__alloyId1251.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1253"
    });
    $.__views.__alloyId1251.add($.__views.__alloyId1253);
    $.__views.__alloyId1254 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1254"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1254);
    $.__views.__alloyId1255 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1255"
    });
    $.__views.__alloyId1254.add($.__views.__alloyId1255);
    $.__views.__alloyId1256 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1256"
    });
    $.__views.__alloyId1254.add($.__views.__alloyId1256);
    $.__views.__alloyId1257 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1257"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1257);
    subscribe ? $.__views.__alloyId1257.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1257!click!subscribe"] = true;
    $.__views.__alloyId1258 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1258"
    });
    $.__views.__alloyId1257.add($.__views.__alloyId1258);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 100 - .2 * Ti.Platform.displayCaps.platformHeight;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1223!click!back"] && $.__views.__alloyId1223.addEventListener("click", back);
    __defers["$.__views.__alloyId1257!click!subscribe"] && $.__views.__alloyId1257.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;