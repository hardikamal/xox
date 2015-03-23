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
    $.__views.__alloyId1458 = Alloy.createController("_header", {
        id: "__alloyId1458",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId1458.setParent($.__views.penang);
    $.__views.__alloyId1459 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1459"
    });
    $.__views.penang.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1460"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1461"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1461);
    back ? $.__views.__alloyId1461.addEventListener("click", back) : __defers["$.__views.__alloyId1461!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang.add($.__views.scrollView);
    $.__views.__alloyId1462 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1462"
    });
    $.__views.scrollView.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1464"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1466"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createLabel({
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1467"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1468"
    });
    $.__views.scrollView.add($.__views.__alloyId1468);
    $.__views.__alloyId1469 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1470"
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1470);
    $.__views.__alloyId1471 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1471"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1471);
    $.__views.__alloyId1472 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1472"
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1473"
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1474"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1475"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createLabel({
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1476"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1477"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1478"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1479"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1480"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1481"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1482"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1483"
    });
    $.__views.scrollView.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1484"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1485"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1486"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1486);
    $.__views.__alloyId1487 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1487"
    });
    $.__views.__alloyId1486.add($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1488"
    });
    $.__views.__alloyId1486.add($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1489"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1490"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1491"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1492"
    });
    $.__views.penang.add($.__views.__alloyId1492);
    subscribe ? $.__views.__alloyId1492.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1492!click!subscribe"] = true;
    $.__views.__alloyId1493 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1493"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1461!click!back"] && $.__views.__alloyId1461.addEventListener("click", back);
    __defers["$.__views.__alloyId1492!click!subscribe"] && $.__views.__alloyId1492.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;