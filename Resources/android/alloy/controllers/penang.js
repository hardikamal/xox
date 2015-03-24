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
    $.__views.__alloyId1509 = Alloy.createController("_header", {
        id: "__alloyId1509",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId1509.setParent($.__views.penang);
    $.__views.__alloyId1510 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1510"
    });
    $.__views.penang.add($.__views.__alloyId1510);
    $.__views.__alloyId1511 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1511"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1512"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1512);
    back ? $.__views.__alloyId1512.addEventListener("click", back) : __defers["$.__views.__alloyId1512!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang.add($.__views.scrollView);
    $.__views.__alloyId1513 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1513"
    });
    $.__views.scrollView.add($.__views.__alloyId1513);
    $.__views.__alloyId1514 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1514"
    });
    $.__views.__alloyId1513.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1515"
    });
    $.__views.__alloyId1514.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1516"
    });
    $.__views.__alloyId1513.add($.__views.__alloyId1516);
    $.__views.__alloyId1517 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1517"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1517);
    $.__views.__alloyId1518 = Ti.UI.createLabel({
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1518"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1519"
    });
    $.__views.scrollView.add($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1520"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1520);
    $.__views.__alloyId1521 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1521"
    });
    $.__views.__alloyId1520.add($.__views.__alloyId1521);
    $.__views.__alloyId1522 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1522"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1522);
    $.__views.__alloyId1523 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1523"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1523);
    $.__views.__alloyId1524 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1524"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1524);
    $.__views.__alloyId1525 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1525"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1525);
    $.__views.__alloyId1526 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1526"
    });
    $.__views.__alloyId1525.add($.__views.__alloyId1526);
    $.__views.__alloyId1527 = Ti.UI.createLabel({
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1527"
    });
    $.__views.__alloyId1525.add($.__views.__alloyId1527);
    $.__views.__alloyId1528 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1528"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1528);
    $.__views.__alloyId1529 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1529"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1529);
    $.__views.__alloyId1530 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1530"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1530);
    $.__views.__alloyId1531 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1531"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1531);
    $.__views.__alloyId1532 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1532"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1532);
    $.__views.__alloyId1533 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1533"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1533);
    $.__views.__alloyId1534 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1534"
    });
    $.__views.scrollView.add($.__views.__alloyId1534);
    $.__views.__alloyId1535 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1535"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1535);
    $.__views.__alloyId1536 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1536"
    });
    $.__views.__alloyId1535.add($.__views.__alloyId1536);
    $.__views.__alloyId1537 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1537"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1537);
    $.__views.__alloyId1538 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1538"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1538);
    $.__views.__alloyId1539 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1539"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1539);
    $.__views.__alloyId1540 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1540"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1541"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1542"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1543"
    });
    $.__views.penang.add($.__views.__alloyId1543);
    subscribe ? $.__views.__alloyId1543.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1543!click!subscribe"] = true;
    $.__views.__alloyId1544 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1544"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1512!click!back"] && $.__views.__alloyId1512.addEventListener("click", back);
    __defers["$.__views.__alloyId1543!click!subscribe"] && $.__views.__alloyId1543.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;