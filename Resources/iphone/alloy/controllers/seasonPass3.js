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
    this.__controllerPath = "seasonPass3";
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
    $.__views.__alloyId1626 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId1626"
    });
    $.__views.scrollView.add($.__views.__alloyId1626);
    $.__views.__alloyId1627 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1627"
    });
    $.__views.__alloyId1626.add($.__views.__alloyId1627);
    $.__views.__alloyId1628 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1628"
    });
    $.__views.__alloyId1627.add($.__views.__alloyId1628);
    $.__views.__alloyId1629 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1629"
    });
    $.__views.__alloyId1628.add($.__views.__alloyId1629);
    $.__views.__alloyId1630 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1630"
    });
    $.__views.__alloyId1629.add($.__views.__alloyId1630);
    $.__views.__alloyId1631 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1631"
    });
    $.__views.__alloyId1629.add($.__views.__alloyId1631);
    $.__views.__alloyId1632 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1632"
    });
    $.__views.__alloyId1627.add($.__views.__alloyId1632);
    $.__views.__alloyId1633 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1633"
    });
    $.__views.__alloyId1632.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1634"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1634);
    $.__views.__alloyId1635 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1635"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1635);
    $.__views.__alloyId1636 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1636"
    });
    $.__views.__alloyId1626.add($.__views.__alloyId1636);
    $.__views.__alloyId1637 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1637"
    });
    $.__views.__alloyId1636.add($.__views.__alloyId1637);
    $.__views.__alloyId1638 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1638"
    });
    $.__views.__alloyId1626.add($.__views.__alloyId1638);
    $.__views.__alloyId1639 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1639"
    });
    $.__views.__alloyId1638.add($.__views.__alloyId1639);
    $.__views.__alloyId1640 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1640"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1640);
    $.__views.__alloyId1641 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1641"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1641);
    $.__views.__alloyId1642 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId1642"
    });
    $.__views.scrollView.add($.__views.__alloyId1642);
    $.__views.__alloyId1643 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1643"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1643);
    $.__views.__alloyId1644 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1644"
    });
    $.__views.__alloyId1643.add($.__views.__alloyId1644);
    $.__views.__alloyId1645 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1645"
    });
    $.__views.__alloyId1644.add($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1646"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1646);
    $.__views.__alloyId1647 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1647"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1647);
    $.__views.__alloyId1648 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1648"
    });
    $.__views.__alloyId1643.add($.__views.__alloyId1648);
    $.__views.__alloyId1649 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1649"
    });
    $.__views.__alloyId1648.add($.__views.__alloyId1649);
    $.__views.__alloyId1650 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1650"
    });
    $.__views.__alloyId1649.add($.__views.__alloyId1650);
    $.__views.__alloyId1651 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1651"
    });
    $.__views.__alloyId1649.add($.__views.__alloyId1651);
    $.__views.__alloyId1652 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1652"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1652);
    $.__views.__alloyId1653 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1653"
    });
    $.__views.__alloyId1652.add($.__views.__alloyId1653);
    $.__views.__alloyId1654 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1654"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1654);
    $.__views.__alloyId1655 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1655"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1655);
    $.__views.__alloyId1656 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1656"
    });
    $.__views.__alloyId1655.add($.__views.__alloyId1656);
    $.__views.__alloyId1657 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1657"
    });
    $.__views.__alloyId1655.add($.__views.__alloyId1657);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;