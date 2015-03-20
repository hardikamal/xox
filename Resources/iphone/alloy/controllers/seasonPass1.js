function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass1";
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.__alloyId1562 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId1562"
    });
    $.__views.scrollView.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1563"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1563);
    $.__views.__alloyId1564 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1564"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1564);
    $.__views.__alloyId1565 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1565"
    });
    $.__views.__alloyId1564.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1566"
    });
    $.__views.__alloyId1565.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1567"
    });
    $.__views.__alloyId1565.add($.__views.__alloyId1567);
    $.__views.__alloyId1568 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1568"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1568);
    $.__views.__alloyId1569 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1569"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1570"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1571"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1571);
    $.__views.__alloyId1572 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1572"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1573"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1574"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1574);
    $.__views.__alloyId1575 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1575"
    });
    $.__views.__alloyId1574.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1576"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1577"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId1578"
    });
    $.__views.scrollView.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1579"
    });
    $.__views.__alloyId1578.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1580"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1580);
    $.__views.__alloyId1581 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1581"
    });
    $.__views.__alloyId1580.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1582"
    });
    $.__views.__alloyId1581.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1583"
    });
    $.__views.__alloyId1581.add($.__views.__alloyId1583);
    $.__views.__alloyId1584 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1584"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1584);
    $.__views.__alloyId1585 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1585"
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1585);
    $.__views.__alloyId1586 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1586"
    });
    $.__views.__alloyId1585.add($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1587"
    });
    $.__views.__alloyId1585.add($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1588"
    });
    $.__views.__alloyId1578.add($.__views.__alloyId1588);
    $.__views.__alloyId1589 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1589"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1589);
    $.__views.__alloyId1590 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1590"
    });
    $.__views.__alloyId1578.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1591"
    });
    $.__views.__alloyId1590.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1592"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1592);
    $.__views.__alloyId1593 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1593"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1593);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;