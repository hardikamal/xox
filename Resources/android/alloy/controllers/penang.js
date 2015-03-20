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
        DRAWER.navigation("products", 2);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "penang";
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
    $.__views.penang = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "penang"
    });
    $.__views.penang && $.addTopLevelView($.__views.penang);
    $.__views.__alloyId1303 = Alloy.createController("_header", {
        id: "__alloyId1303",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId1303.setParent($.__views.penang);
    $.__views.__alloyId1304 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1304"
    });
    $.__views.penang.add($.__views.__alloyId1304);
    $.__views.__alloyId1305 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1305"
    });
    $.__views.__alloyId1304.add($.__views.__alloyId1305);
    $.__views.__alloyId1306 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1306"
    });
    $.__views.__alloyId1304.add($.__views.__alloyId1306);
    back ? $.__views.__alloyId1306.addEventListener("click", back) : __defers["$.__views.__alloyId1306!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang.add($.__views.scrollView);
    $.__views.__alloyId1307 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1307"
    });
    $.__views.scrollView.add($.__views.__alloyId1307);
    $.__views.__alloyId1308 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1308"
    });
    $.__views.__alloyId1307.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1309"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1309);
    $.__views.__alloyId1310 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1310"
    });
    $.__views.__alloyId1307.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1311"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1311);
    $.__views.__alloyId1312 = Ti.UI.createLabel({
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1312"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1313"
    });
    $.__views.scrollView.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1314"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1314);
    $.__views.__alloyId1315 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1315"
    });
    $.__views.__alloyId1314.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1316"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1316);
    $.__views.__alloyId1317 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1317"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1317);
    $.__views.__alloyId1318 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1318"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1318);
    $.__views.__alloyId1319 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1319"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1319);
    $.__views.__alloyId1320 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1320"
    });
    $.__views.__alloyId1319.add($.__views.__alloyId1320);
    $.__views.__alloyId1321 = Ti.UI.createLabel({
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1321"
    });
    $.__views.__alloyId1319.add($.__views.__alloyId1321);
    $.__views.__alloyId1322 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1322"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1322);
    $.__views.__alloyId1323 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1323"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1323);
    $.__views.__alloyId1324 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1324"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1324);
    $.__views.__alloyId1325 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1325"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1325);
    $.__views.__alloyId1326 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1326"
    });
    $.__views.__alloyId1325.add($.__views.__alloyId1326);
    $.__views.__alloyId1327 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1327"
    });
    $.__views.__alloyId1325.add($.__views.__alloyId1327);
    $.__views.__alloyId1328 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1328"
    });
    $.__views.scrollView.add($.__views.__alloyId1328);
    $.__views.__alloyId1329 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1329"
    });
    $.__views.__alloyId1328.add($.__views.__alloyId1329);
    $.__views.__alloyId1330 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1330"
    });
    $.__views.__alloyId1329.add($.__views.__alloyId1330);
    $.__views.__alloyId1331 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1331"
    });
    $.__views.__alloyId1328.add($.__views.__alloyId1331);
    $.__views.__alloyId1332 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1332"
    });
    $.__views.__alloyId1331.add($.__views.__alloyId1332);
    $.__views.__alloyId1333 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1333"
    });
    $.__views.__alloyId1331.add($.__views.__alloyId1333);
    $.__views.__alloyId1334 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1334"
    });
    $.__views.__alloyId1328.add($.__views.__alloyId1334);
    $.__views.__alloyId1335 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1335"
    });
    $.__views.__alloyId1334.add($.__views.__alloyId1335);
    $.__views.__alloyId1336 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1336"
    });
    $.__views.__alloyId1334.add($.__views.__alloyId1336);
    $.__views.__alloyId1337 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1337"
    });
    $.__views.penang.add($.__views.__alloyId1337);
    subscribe ? $.__views.__alloyId1337.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1337!click!subscribe"] = true;
    $.__views.__alloyId1338 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1338"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1338);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1306!click!back"] && $.__views.__alloyId1306.addEventListener("click", back);
    __defers["$.__views.__alloyId1337!click!subscribe"] && $.__views.__alloyId1337.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;