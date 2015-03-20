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
    this.__controllerPath = "seasonPass2";
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
    $.__views.__alloyId1594 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId1594"
    });
    $.__views.scrollView.add($.__views.__alloyId1594);
    $.__views.__alloyId1595 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1595"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1595);
    $.__views.__alloyId1596 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1596"
    });
    $.__views.__alloyId1595.add($.__views.__alloyId1596);
    $.__views.__alloyId1597 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1597"
    });
    $.__views.__alloyId1596.add($.__views.__alloyId1597);
    $.__views.__alloyId1598 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1598"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1598);
    $.__views.__alloyId1599 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1599"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1600"
    });
    $.__views.__alloyId1595.add($.__views.__alloyId1600);
    $.__views.__alloyId1601 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1601"
    });
    $.__views.__alloyId1600.add($.__views.__alloyId1601);
    $.__views.__alloyId1602 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1602"
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1603"
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1603);
    $.__views.__alloyId1604 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1604"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1604);
    $.__views.__alloyId1605 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1605"
    });
    $.__views.__alloyId1604.add($.__views.__alloyId1605);
    $.__views.__alloyId1606 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1606"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1606);
    $.__views.__alloyId1607 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1607"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1607);
    $.__views.__alloyId1608 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1608"
    });
    $.__views.__alloyId1607.add($.__views.__alloyId1608);
    $.__views.__alloyId1609 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1609"
    });
    $.__views.__alloyId1607.add($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId1610"
    });
    $.__views.scrollView.add($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1611"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1611);
    $.__views.__alloyId1612 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1612"
    });
    $.__views.__alloyId1611.add($.__views.__alloyId1612);
    $.__views.__alloyId1613 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1613"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1613);
    $.__views.__alloyId1614 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1614"
    });
    $.__views.__alloyId1613.add($.__views.__alloyId1614);
    $.__views.__alloyId1615 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1615"
    });
    $.__views.__alloyId1613.add($.__views.__alloyId1615);
    $.__views.__alloyId1616 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1616"
    });
    $.__views.__alloyId1611.add($.__views.__alloyId1616);
    $.__views.__alloyId1617 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1617"
    });
    $.__views.__alloyId1616.add($.__views.__alloyId1617);
    $.__views.__alloyId1618 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1618"
    });
    $.__views.__alloyId1617.add($.__views.__alloyId1618);
    $.__views.__alloyId1619 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1619"
    });
    $.__views.__alloyId1617.add($.__views.__alloyId1619);
    $.__views.__alloyId1620 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1620"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1620);
    $.__views.__alloyId1621 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1621"
    });
    $.__views.__alloyId1620.add($.__views.__alloyId1621);
    $.__views.__alloyId1622 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1622"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1622);
    $.__views.__alloyId1623 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1623"
    });
    $.__views.__alloyId1622.add($.__views.__alloyId1623);
    $.__views.__alloyId1624 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1624"
    });
    $.__views.__alloyId1623.add($.__views.__alloyId1624);
    $.__views.__alloyId1625 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1625"
    });
    $.__views.__alloyId1623.add($.__views.__alloyId1625);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;