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
    $.__views.__alloyId1684 = Alloy.createController("_header", {
        id: "__alloyId1684",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId1684.setParent($.__views.subline);
    $.__views.__alloyId1685 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1685"
    });
    $.__views.subline.add($.__views.__alloyId1685);
    $.__views.__alloyId1686 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1686"
    });
    $.__views.__alloyId1685.add($.__views.__alloyId1686);
    $.__views.__alloyId1687 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1687"
    });
    $.__views.__alloyId1685.add($.__views.__alloyId1687);
    back ? $.__views.__alloyId1687.addEventListener("click", back) : __defers["$.__views.__alloyId1687!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
    $.__views.__alloyId1688 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1688"
    });
    $.__views.scrollView.add($.__views.__alloyId1688);
    $.__views.__alloyId1689 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1689"
    });
    $.__views.__alloyId1688.add($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1690"
    });
    $.__views.__alloyId1689.add($.__views.__alloyId1690);
    $.__views.__alloyId1691 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1691"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1691);
    $.__views.__alloyId1692 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1692"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1692);
    $.__views.__alloyId1693 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1693"
    });
    $.__views.__alloyId1688.add($.__views.__alloyId1693);
    $.__views.__alloyId1694 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1694"
    });
    $.__views.__alloyId1693.add($.__views.__alloyId1694);
    $.__views.__alloyId1695 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1695"
    });
    $.__views.__alloyId1688.add($.__views.__alloyId1695);
    $.__views.__alloyId1696 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1696"
    });
    $.__views.__alloyId1695.add($.__views.__alloyId1696);
    $.__views.__alloyId1697 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1697"
    });
    $.__views.scrollView.add($.__views.__alloyId1697);
    $.__views.__alloyId1698 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1698"
    });
    $.__views.scrollView.add($.__views.__alloyId1698);
    $.__views.__alloyId1699 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1699"
    });
    $.__views.__alloyId1698.add($.__views.__alloyId1699);
    $.__views.__alloyId1700 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1700"
    });
    $.__views.__alloyId1699.add($.__views.__alloyId1700);
    $.__views.__alloyId1701 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1701"
    });
    $.__views.__alloyId1700.add($.__views.__alloyId1701);
    $.__views.__alloyId1702 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1702"
    });
    $.__views.__alloyId1700.add($.__views.__alloyId1702);
    $.__views.__alloyId1703 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1703"
    });
    $.__views.__alloyId1698.add($.__views.__alloyId1703);
    $.__views.__alloyId1704 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1704"
    });
    $.__views.__alloyId1703.add($.__views.__alloyId1704);
    $.__views.__alloyId1705 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1705"
    });
    $.__views.__alloyId1698.add($.__views.__alloyId1705);
    $.__views.__alloyId1706 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1706"
    });
    $.__views.__alloyId1705.add($.__views.__alloyId1706);
    $.__views.__alloyId1707 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1707"
    });
    $.__views.scrollView.add($.__views.__alloyId1707);
    $.__views.__alloyId1708 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1708"
    });
    $.__views.scrollView.add($.__views.__alloyId1708);
    $.__views.__alloyId1709 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1709"
    });
    $.__views.__alloyId1708.add($.__views.__alloyId1709);
    $.__views.__alloyId1710 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1710"
    });
    $.__views.__alloyId1709.add($.__views.__alloyId1710);
    $.__views.__alloyId1711 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1711"
    });
    $.__views.__alloyId1710.add($.__views.__alloyId1711);
    $.__views.__alloyId1712 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1712"
    });
    $.__views.__alloyId1710.add($.__views.__alloyId1712);
    $.__views.__alloyId1713 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1713"
    });
    $.__views.__alloyId1708.add($.__views.__alloyId1713);
    $.__views.__alloyId1714 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1714"
    });
    $.__views.__alloyId1713.add($.__views.__alloyId1714);
    $.__views.__alloyId1715 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1715"
    });
    $.__views.__alloyId1708.add($.__views.__alloyId1715);
    $.__views.__alloyId1716 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1716"
    });
    $.__views.__alloyId1715.add($.__views.__alloyId1716);
    $.__views.__alloyId1717 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1717"
    });
    $.__views.scrollView.add($.__views.__alloyId1717);
    $.__views.__alloyId1718 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1718"
    });
    $.__views.scrollView.add($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1719"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1719);
    $.__views.__alloyId1720 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1720"
    });
    $.__views.__alloyId1719.add($.__views.__alloyId1720);
    $.__views.__alloyId1721 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1721"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1721);
    $.__views.__alloyId1722 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1722"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1722);
    $.__views.__alloyId1723 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1723"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1724"
    });
    $.__views.__alloyId1723.add($.__views.__alloyId1724);
    $.__views.__alloyId1725 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1725"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1725);
    $.__views.__alloyId1726 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1726"
    });
    $.__views.__alloyId1725.add($.__views.__alloyId1726);
    $.__views.__alloyId1727 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1727"
    });
    $.__views.scrollView.add($.__views.__alloyId1727);
    $.__views.__alloyId1728 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1728"
    });
    $.__views.scrollView.add($.__views.__alloyId1728);
    $.__views.__alloyId1729 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1729"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1729);
    $.__views.__alloyId1730 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1730"
    });
    $.__views.__alloyId1729.add($.__views.__alloyId1730);
    $.__views.__alloyId1731 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1731"
    });
    $.__views.__alloyId1730.add($.__views.__alloyId1731);
    $.__views.__alloyId1732 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1732"
    });
    $.__views.__alloyId1730.add($.__views.__alloyId1732);
    $.__views.__alloyId1733 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1733"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1733);
    $.__views.__alloyId1734 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1734"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1734);
    $.__views.__alloyId1735 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1735"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1736"
    });
    $.__views.__alloyId1735.add($.__views.__alloyId1736);
    $.__views.__alloyId1737 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId1737"
    });
    $.__views.scrollView.add($.__views.__alloyId1737);
    $.__views.__alloyId1738 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId1738"
    });
    $.__views.scrollView.add($.__views.__alloyId1738);
    $.__views.__alloyId1739 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId1739"
    });
    $.__views.__alloyId1738.add($.__views.__alloyId1739);
    $.__views.__alloyId1740 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1740"
    });
    $.__views.__alloyId1739.add($.__views.__alloyId1740);
    $.__views.__alloyId1741 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1741"
    });
    $.__views.__alloyId1740.add($.__views.__alloyId1741);
    $.__views.__alloyId1742 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId1742"
    });
    $.__views.__alloyId1740.add($.__views.__alloyId1742);
    $.__views.__alloyId1743 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1743"
    });
    $.__views.__alloyId1738.add($.__views.__alloyId1743);
    $.__views.__alloyId1744 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId1744"
    });
    $.__views.__alloyId1743.add($.__views.__alloyId1744);
    $.__views.__alloyId1745 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId1745"
    });
    $.__views.__alloyId1738.add($.__views.__alloyId1745);
    $.__views.__alloyId1746 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId1746"
    });
    $.__views.__alloyId1745.add($.__views.__alloyId1746);
    $.__views.__alloyId1747 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId1747"
    });
    $.__views.scrollView.add($.__views.__alloyId1747);
    $.__views.__alloyId1748 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1748"
    });
    $.__views.subline.add($.__views.__alloyId1748);
    addNumber ? $.__views.__alloyId1748.addEventListener("click", addNumber) : __defers["$.__views.__alloyId1748!click!addNumber"] = true;
    $.__views.__alloyId1749 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId1749"
    });
    $.__views.__alloyId1748.add($.__views.__alloyId1749);
    $.__views.__alloyId1750 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId1750"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1750);
    $.__views.__alloyId1751 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId1751"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1751);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1687!click!back"] && $.__views.__alloyId1687.addEventListener("click", back);
    __defers["$.__views.__alloyId1748!click!addNumber"] && $.__views.__alloyId1748.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;