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
        DRAWER.navigation("subline4", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline5";
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
    $.__views.subline5 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline5"
    });
    $.__views.subline5 && $.addTopLevelView($.__views.subline5);
    $.__views.__alloyId1643 = Alloy.createController("_header", {
        id: "__alloyId1643",
        __parentSymbol: $.__views.subline5
    });
    $.__views.__alloyId1643.setParent($.__views.subline5);
    $.__views.__alloyId1644 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1644"
    });
    $.__views.subline5.add($.__views.__alloyId1644);
    $.__views.__alloyId1645 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1645"
    });
    $.__views.__alloyId1644.add($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1646"
    });
    $.__views.__alloyId1644.add($.__views.__alloyId1646);
    back ? $.__views.__alloyId1646.addEventListener("click", back) : __defers["$.__views.__alloyId1646!click!back"] = true;
    $.__views.__alloyId1647 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "white",
        id: "__alloyId1647"
    });
    $.__views.subline5.add($.__views.__alloyId1647);
    $.__views.__alloyId1648 = Ti.UI.createLabel({
        text: "Subline Data Subscription Request",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1648"
    });
    $.__views.__alloyId1647.add($.__views.__alloyId1648);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.subline5.add($.__views.scrollView);
    $.__views.__alloyId1649 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1649"
    });
    $.__views.scrollView.add($.__views.__alloyId1649);
    $.__views.__alloyId1650 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId1650"
    });
    $.__views.__alloyId1649.add($.__views.__alloyId1650);
    $.__views.__alloyId1651 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId1651"
    });
    $.__views.__alloyId1649.add($.__views.__alloyId1651);
    $.__views.__alloyId1652 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId1652"
    });
    $.__views.scrollView.add($.__views.__alloyId1652);
    $.__views.__alloyId1653 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1653"
    });
    $.__views.scrollView.add($.__views.__alloyId1653);
    $.__views.__alloyId1654 = Ti.UI.createLabel({
        text: "Data Plan",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId1654"
    });
    $.__views.__alloyId1653.add($.__views.__alloyId1654);
    $.__views.__alloyId1655 = Ti.UI.createLabel({
        text: "M500MB",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId1655"
    });
    $.__views.__alloyId1653.add($.__views.__alloyId1655);
    $.__views.__alloyId1656 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId1656"
    });
    $.__views.scrollView.add($.__views.__alloyId1656);
    $.__views.__alloyId1657 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1657"
    });
    $.__views.scrollView.add($.__views.__alloyId1657);
    $.__views.__alloyId1658 = Ti.UI.createLabel({
        text: "Current Prepaid Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId1658"
    });
    $.__views.__alloyId1657.add($.__views.__alloyId1658);
    $.__views.__alloyId1659 = Ti.UI.createLabel({
        text: "88.88",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId1659"
    });
    $.__views.__alloyId1657.add($.__views.__alloyId1659);
    $.__views.__alloyId1660 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId1660"
    });
    $.__views.scrollView.add($.__views.__alloyId1660);
    $.__views.__alloyId1661 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1661"
    });
    $.__views.scrollView.add($.__views.__alloyId1661);
    $.__views.__alloyId1662 = Ti.UI.createLabel({
        text: "Current EWallet Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId1662"
    });
    $.__views.__alloyId1661.add($.__views.__alloyId1662);
    $.__views.__alloyId1663 = Ti.UI.createLabel({
        text: "0.00",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId1663"
    });
    $.__views.__alloyId1661.add($.__views.__alloyId1663);
    $.__views.__alloyId1664 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId1664"
    });
    $.__views.scrollView.add($.__views.__alloyId1664);
    $.__views.__alloyId1665 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1665"
    });
    $.__views.scrollView.add($.__views.__alloyId1665);
    $.__views.__alloyId1666 = Ti.UI.createLabel({
        text: "Season Pass Data Counter(MB)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId1666"
    });
    $.__views.__alloyId1665.add($.__views.__alloyId1666);
    $.__views.__alloyId1667 = Ti.UI.createLabel({
        text: "0",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId1667"
    });
    $.__views.__alloyId1665.add($.__views.__alloyId1667);
    $.__views.__alloyId1668 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId1668"
    });
    $.__views.scrollView.add($.__views.__alloyId1668);
    $.__views.__alloyId1669 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId1669"
    });
    $.__views.subline5.add($.__views.__alloyId1669);
    $.__views.__alloyId1670 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId1670"
    });
    $.__views.__alloyId1669.add($.__views.__alloyId1670);
    subscribe ? $.__views.__alloyId1670.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1670!click!subscribe"] = true;
    $.__views.__alloyId1671 = Ti.UI.createLabel({
        text: "Subscribe",
        color: "white",
        textAlign: "center",
        id: "__alloyId1671"
    });
    $.__views.__alloyId1670.add($.__views.__alloyId1671);
    $.__views.__alloyId1672 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1672"
    });
    $.__views.__alloyId1669.add($.__views.__alloyId1672);
    $.__views.__alloyId1673 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId1673"
    });
    $.__views.__alloyId1669.add($.__views.__alloyId1673);
    back ? $.__views.__alloyId1673.addEventListener("click", back) : __defers["$.__views.__alloyId1673!click!back"] = true;
    $.__views.__alloyId1674 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId1674"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1674);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1646!click!back"] && $.__views.__alloyId1646.addEventListener("click", back);
    __defers["$.__views.__alloyId1670!click!subscribe"] && $.__views.__alloyId1670.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId1673!click!back"] && $.__views.__alloyId1673.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;