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
    $.__views.__alloyId1558 = Alloy.createController("_header", {
        id: "__alloyId1558",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId1558.setParent($.__views.penang);
    $.__views.__alloyId1559 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1559"
    });
    $.__views.penang.add($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1560"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1561"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1561);
    back ? $.__views.__alloyId1561.addEventListener("click", back) : __defers["$.__views.__alloyId1561!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang.add($.__views.scrollView);
    $.__views.__alloyId1562 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1562"
    });
    $.__views.scrollView.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1563"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1563);
    $.__views.__alloyId1564 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1564"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1564);
    $.__views.__alloyId1565 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1565"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1566"
    });
    $.__views.__alloyId1565.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createLabel({
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1567"
    });
    $.__views.__alloyId1565.add($.__views.__alloyId1567);
    $.__views.__alloyId1568 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1568"
    });
    $.__views.scrollView.add($.__views.__alloyId1568);
    $.__views.__alloyId1569 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1569"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1570"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1571"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1571);
    $.__views.__alloyId1572 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1572"
    });
    $.__views.__alloyId1571.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1573"
    });
    $.__views.__alloyId1571.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1574"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1574);
    $.__views.__alloyId1575 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1575"
    });
    $.__views.__alloyId1574.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createLabel({
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1576"
    });
    $.__views.__alloyId1574.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1577"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1578"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1579"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1580"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1580);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1581"
    });
    $.__views.__alloyId1580.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1582"
    });
    $.__views.__alloyId1580.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1583"
    });
    $.__views.scrollView.add($.__views.__alloyId1583);
    $.__views.__alloyId1584 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1584"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1584);
    $.__views.__alloyId1585 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1585"
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1585);
    $.__views.__alloyId1586 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1586"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1587"
    });
    $.__views.__alloyId1586.add($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1588"
    });
    $.__views.__alloyId1586.add($.__views.__alloyId1588);
    $.__views.__alloyId1589 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1589"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1589);
    $.__views.__alloyId1590 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1590"
    });
    $.__views.__alloyId1589.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1591"
    });
    $.__views.__alloyId1589.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1592"
    });
    $.__views.penang.add($.__views.__alloyId1592);
    subscribe ? $.__views.__alloyId1592.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1592!click!subscribe"] = true;
    $.__views.__alloyId1593 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1593"
    });
    $.__views.__alloyId1592.add($.__views.__alloyId1593);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1561!click!back"] && $.__views.__alloyId1561.addEventListener("click", back);
    __defers["$.__views.__alloyId1592!click!subscribe"] && $.__views.__alloyId1592.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;