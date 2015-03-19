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
        DRAWER.navigation("myAccount", 2);
    }
    function addNumber() {
        console.log("addNumber");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline";
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
    $.__views.subline = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline"
    });
    $.__views.subline && $.addTopLevelView($.__views.subline);
    $.__views.__alloyId1504 = Alloy.createController("_header", {
        id: "__alloyId1504",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId1504.setParent($.__views.subline);
    $.__views.__alloyId1505 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1505"
    });
    $.__views.subline.add($.__views.__alloyId1505);
    $.__views.__alloyId1506 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1506"
    });
    $.__views.__alloyId1505.add($.__views.__alloyId1506);
    $.__views.__alloyId1507 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1507"
    });
    $.__views.__alloyId1505.add($.__views.__alloyId1507);
    back ? $.__views.__alloyId1507.addEventListener("click", back) : __defers["$.__views.__alloyId1507!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
    $.__views.__alloyId1508 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1508"
    });
    $.__views.scrollView.add($.__views.__alloyId1508);
    $.__views.__alloyId1509 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1509"
    });
    $.__views.__alloyId1508.add($.__views.__alloyId1509);
    $.__views.__alloyId1510 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1510"
    });
    $.__views.__alloyId1509.add($.__views.__alloyId1510);
    $.__views.__alloyId1511 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1511"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1512"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1512);
    $.__views.__alloyId1513 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1513"
    });
    $.__views.__alloyId1508.add($.__views.__alloyId1513);
    $.__views.__alloyId1514 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1514"
    });
    $.__views.__alloyId1513.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1515"
    });
    $.__views.__alloyId1508.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1516"
    });
    $.__views.__alloyId1515.add($.__views.__alloyId1516);
    $.__views.__alloyId1517 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1517"
    });
    $.__views.scrollView.add($.__views.__alloyId1517);
    $.__views.__alloyId1518 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1518"
    });
    $.__views.scrollView.add($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1519"
    });
    $.__views.__alloyId1518.add($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1520"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1520);
    $.__views.__alloyId1521 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1521"
    });
    $.__views.__alloyId1520.add($.__views.__alloyId1521);
    $.__views.__alloyId1522 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1522"
    });
    $.__views.__alloyId1520.add($.__views.__alloyId1522);
    $.__views.__alloyId1523 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1523"
    });
    $.__views.__alloyId1518.add($.__views.__alloyId1523);
    $.__views.__alloyId1524 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1524"
    });
    $.__views.__alloyId1523.add($.__views.__alloyId1524);
    $.__views.__alloyId1525 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1525"
    });
    $.__views.__alloyId1518.add($.__views.__alloyId1525);
    $.__views.__alloyId1526 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1526"
    });
    $.__views.__alloyId1525.add($.__views.__alloyId1526);
    $.__views.__alloyId1527 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1527"
    });
    $.__views.scrollView.add($.__views.__alloyId1527);
    $.__views.__alloyId1528 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1528"
    });
    $.__views.scrollView.add($.__views.__alloyId1528);
    $.__views.__alloyId1529 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1529"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1529);
    $.__views.__alloyId1530 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1530"
    });
    $.__views.__alloyId1529.add($.__views.__alloyId1530);
    $.__views.__alloyId1531 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1531"
    });
    $.__views.__alloyId1530.add($.__views.__alloyId1531);
    $.__views.__alloyId1532 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1532"
    });
    $.__views.__alloyId1530.add($.__views.__alloyId1532);
    $.__views.__alloyId1533 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1533"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1533);
    $.__views.__alloyId1534 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1534"
    });
    $.__views.__alloyId1533.add($.__views.__alloyId1534);
    $.__views.__alloyId1535 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1535"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1535);
    $.__views.__alloyId1536 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1536"
    });
    $.__views.__alloyId1535.add($.__views.__alloyId1536);
    $.__views.__alloyId1537 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1537"
    });
    $.__views.scrollView.add($.__views.__alloyId1537);
    $.__views.__alloyId1538 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1538"
    });
    $.__views.scrollView.add($.__views.__alloyId1538);
    $.__views.__alloyId1539 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1539"
    });
    $.__views.__alloyId1538.add($.__views.__alloyId1539);
    $.__views.__alloyId1540 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1540"
    });
    $.__views.__alloyId1539.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1541"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1542"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1543"
    });
    $.__views.__alloyId1538.add($.__views.__alloyId1543);
    $.__views.__alloyId1544 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1544"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1545"
    });
    $.__views.__alloyId1538.add($.__views.__alloyId1545);
    $.__views.__alloyId1546 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1546"
    });
    $.__views.__alloyId1545.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1547"
    });
    $.__views.scrollView.add($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1548"
    });
    $.__views.scrollView.add($.__views.__alloyId1548);
    $.__views.__alloyId1549 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1549"
    });
    $.__views.__alloyId1548.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1550"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1550);
    $.__views.__alloyId1551 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1551"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1551);
    $.__views.__alloyId1552 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1552"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1553"
    });
    $.__views.__alloyId1548.add($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1554"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1554);
    $.__views.__alloyId1555 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1555"
    });
    $.__views.__alloyId1548.add($.__views.__alloyId1555);
    $.__views.__alloyId1556 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1556"
    });
    $.__views.__alloyId1555.add($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1557"
    });
    $.__views.scrollView.add($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1558"
    });
    $.__views.scrollView.add($.__views.__alloyId1558);
    $.__views.__alloyId1559 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1559"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1560"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1561"
    });
    $.__views.__alloyId1560.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1562"
    });
    $.__views.__alloyId1560.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1563"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1563);
    $.__views.__alloyId1564 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1564"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1564);
    $.__views.__alloyId1565 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1565"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1566"
    });
    $.__views.__alloyId1565.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId1567"
    });
    $.__views.scrollView.add($.__views.__alloyId1567);
    $.__views.__alloyId1568 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1568"
    });
    $.__views.subline.add($.__views.__alloyId1568);
    addNumber ? $.__views.__alloyId1568.addEventListener("click", addNumber) : __defers["$.__views.__alloyId1568!click!addNumber"] = true;
    $.__views.__alloyId1569 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId1569"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId1570"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId1571"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1571);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1507!click!back"] && $.__views.__alloyId1507.addEventListener("click", back);
    __defers["$.__views.__alloyId1568!click!addNumber"] && $.__views.__alloyId1568.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;