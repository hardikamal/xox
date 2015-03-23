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
<<<<<<< HEAD
        DRAWER.navigation("products", 1);
=======
        DRAWER.navigation("products", 2);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId1474 = Alloy.createController("_header", {
        id: "__alloyId1474",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId1474.setParent($.__views.penang);
    $.__views.__alloyId1475 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1475"
    });
    $.__views.penang.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1476"
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createImageView({
=======
        id: "__alloyId1305"
    });
    $.__views.__alloyId1304.add($.__views.__alloyId1305);
    $.__views.__alloyId1306 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1477"
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1477);
    back ? $.__views.__alloyId1477.addEventListener("click", back) : __defers["$.__views.__alloyId1477!click!back"] = true;
=======
        id: "__alloyId1306"
    });
    $.__views.__alloyId1304.add($.__views.__alloyId1306);
    back ? $.__views.__alloyId1306.addEventListener("click", back) : __defers["$.__views.__alloyId1306!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1478 = Ti.UI.createView({
=======
    $.__views.__alloyId1307 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1478"
    });
    $.__views.scrollView.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1479"
    });
    $.__views.__alloyId1478.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1480"
    });
    $.__views.__alloyId1479.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1481"
    });
    $.__views.__alloyId1478.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1482"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createLabel({
=======
        id: "__alloyId1311"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1311);
    $.__views.__alloyId1312 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1483"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createView({
=======
        id: "__alloyId1312"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1484"
    });
    $.__views.scrollView.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1485"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1486"
    });
    $.__views.__alloyId1485.add($.__views.__alloyId1486);
    $.__views.__alloyId1487 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1487"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1488"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createLabel({
=======
        id: "__alloyId1317"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1317);
    $.__views.__alloyId1318 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1489"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1490"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1491"
    });
    $.__views.__alloyId1490.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createLabel({
=======
        id: "__alloyId1320"
    });
    $.__views.__alloyId1319.add($.__views.__alloyId1320);
    $.__views.__alloyId1321 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1492"
    });
    $.__views.__alloyId1490.add($.__views.__alloyId1492);
    $.__views.__alloyId1493 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1493"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1493);
    $.__views.__alloyId1494 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1494"
    });
    $.__views.__alloyId1493.add($.__views.__alloyId1494);
    $.__views.__alloyId1495 = Ti.UI.createLabel({
=======
        id: "__alloyId1323"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1323);
    $.__views.__alloyId1324 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1495"
    });
    $.__views.__alloyId1493.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1496"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1497"
    });
    $.__views.__alloyId1496.add($.__views.__alloyId1497);
    $.__views.__alloyId1498 = Ti.UI.createLabel({
=======
        id: "__alloyId1326"
    });
    $.__views.__alloyId1325.add($.__views.__alloyId1326);
    $.__views.__alloyId1327 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1498"
    });
    $.__views.__alloyId1496.add($.__views.__alloyId1498);
    $.__views.__alloyId1499 = Ti.UI.createView({
=======
        id: "__alloyId1327"
    });
    $.__views.__alloyId1325.add($.__views.__alloyId1327);
    $.__views.__alloyId1328 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1499"
    });
    $.__views.scrollView.add($.__views.__alloyId1499);
    $.__views.__alloyId1500 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1500"
    });
    $.__views.__alloyId1499.add($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1501"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1502"
    });
    $.__views.__alloyId1499.add($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1503"
    });
    $.__views.__alloyId1502.add($.__views.__alloyId1503);
    $.__views.__alloyId1504 = Ti.UI.createLabel({
=======
        id: "__alloyId1332"
    });
    $.__views.__alloyId1331.add($.__views.__alloyId1332);
    $.__views.__alloyId1333 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1504"
    });
    $.__views.__alloyId1502.add($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1505"
    });
    $.__views.__alloyId1499.add($.__views.__alloyId1505);
    $.__views.__alloyId1506 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1506"
    });
    $.__views.__alloyId1505.add($.__views.__alloyId1506);
    $.__views.__alloyId1507 = Ti.UI.createLabel({
=======
        id: "__alloyId1335"
    });
    $.__views.__alloyId1334.add($.__views.__alloyId1335);
    $.__views.__alloyId1336 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1507"
    });
    $.__views.__alloyId1505.add($.__views.__alloyId1507);
    $.__views.__alloyId1508 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1508"
    });
    $.__views.penang.add($.__views.__alloyId1508);
    subscribe ? $.__views.__alloyId1508.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1508!click!subscribe"] = true;
    $.__views.__alloyId1509 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1509"
    });
    $.__views.__alloyId1508.add($.__views.__alloyId1509);
=======
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
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
<<<<<<< HEAD
    __defers["$.__views.__alloyId1477!click!back"] && $.__views.__alloyId1477.addEventListener("click", back);
    __defers["$.__views.__alloyId1508!click!subscribe"] && $.__views.__alloyId1508.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId1306!click!back"] && $.__views.__alloyId1306.addEventListener("click", back);
    __defers["$.__views.__alloyId1337!click!subscribe"] && $.__views.__alloyId1337.addEventListener("click", subscribe);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;