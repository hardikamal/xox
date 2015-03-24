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
    this.__controllerPath = "prepaidPlus";
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
    $.__views.prepaidPlus = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPlus"
    });
    $.__views.prepaidPlus && $.addTopLevelView($.__views.prepaidPlus);
    $.__views.__alloyId1754 = Alloy.createController("_header", {
        id: "__alloyId1754",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId1754.setParent($.__views.prepaidPlus);
    $.__views.__alloyId1755 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1755"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1755);
    $.__views.__alloyId1756 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId1756"
    });
    $.__views.__alloyId1755.add($.__views.__alloyId1756);
    $.__views.__alloyId1757 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId1757"
    });
    $.__views.__alloyId1756.add($.__views.__alloyId1757);
    $.__views.__alloyId1758 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1758"
    });
    $.__views.__alloyId1757.add($.__views.__alloyId1758);
    $.__views.__alloyId1759 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1759"
    });
    $.__views.__alloyId1756.add($.__views.__alloyId1759);
    $.__views.__alloyId1760 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1760"
    });
    $.__views.__alloyId1755.add($.__views.__alloyId1760);
    back ? $.__views.__alloyId1760.addEventListener("click", back) : __defers["$.__views.__alloyId1760!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaidPlus.add($.__views.scrollView);
    $.__views.__alloyId1761 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1761"
    });
    $.__views.scrollView.add($.__views.__alloyId1761);
    $.__views.__alloyId1762 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1762"
    });
    $.__views.__alloyId1761.add($.__views.__alloyId1762);
    $.__views.__alloyId1763 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1763"
    });
    $.__views.__alloyId1762.add($.__views.__alloyId1763);
    $.__views.__alloyId1764 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1764"
    });
    $.__views.__alloyId1761.add($.__views.__alloyId1764);
    $.__views.__alloyId1765 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1765"
    });
    $.__views.__alloyId1764.add($.__views.__alloyId1765);
    $.__views.__alloyId1766 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1766"
    });
    $.__views.__alloyId1764.add($.__views.__alloyId1766);
    $.__views.__alloyId1767 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1767"
    });
    $.__views.__alloyId1761.add($.__views.__alloyId1767);
    $.__views.__alloyId1768 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1768"
    });
    $.__views.__alloyId1767.add($.__views.__alloyId1768);
    $.__views.__alloyId1769 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1769"
    });
    $.__views.__alloyId1767.add($.__views.__alloyId1769);
    $.__views.__alloyId1770 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1770"
    });
    $.__views.scrollView.add($.__views.__alloyId1770);
    $.__views.__alloyId1771 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1771"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1771);
    $.__views.__alloyId1772 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1772"
    });
    $.__views.__alloyId1771.add($.__views.__alloyId1772);
    $.__views.__alloyId1773 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1773"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1773);
    $.__views.__alloyId1774 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1774"
    });
    $.__views.__alloyId1773.add($.__views.__alloyId1774);
    $.__views.__alloyId1775 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1775"
    });
    $.__views.__alloyId1773.add($.__views.__alloyId1775);
    $.__views.__alloyId1776 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1776"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1776);
    $.__views.__alloyId1777 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1777"
    });
    $.__views.__alloyId1776.add($.__views.__alloyId1777);
    $.__views.__alloyId1778 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1778"
    });
    $.__views.__alloyId1776.add($.__views.__alloyId1778);
    $.__views.__alloyId1779 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1779"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1780"
    });
    $.__views.__alloyId1779.add($.__views.__alloyId1780);
    $.__views.__alloyId1781 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1781"
    });
    $.__views.__alloyId1779.add($.__views.__alloyId1781);
    $.__views.__alloyId1782 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1782"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1783"
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1783);
    $.__views.__alloyId1784 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1784"
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1784);
    $.__views.__alloyId1785 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1785"
    });
    $.__views.scrollView.add($.__views.__alloyId1785);
    $.__views.__alloyId1786 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1786"
    });
    $.__views.__alloyId1785.add($.__views.__alloyId1786);
    $.__views.__alloyId1787 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1787"
    });
    $.__views.__alloyId1786.add($.__views.__alloyId1787);
    $.__views.__alloyId1788 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1788"
    });
    $.__views.__alloyId1785.add($.__views.__alloyId1788);
    $.__views.__alloyId1789 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1789"
    });
    $.__views.__alloyId1788.add($.__views.__alloyId1789);
    $.__views.__alloyId1790 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1790"
    });
    $.__views.__alloyId1788.add($.__views.__alloyId1790);
    $.__views.__alloyId1791 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1791"
    });
    $.__views.__alloyId1785.add($.__views.__alloyId1791);
    $.__views.__alloyId1792 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1792"
    });
    $.__views.__alloyId1791.add($.__views.__alloyId1792);
    $.__views.__alloyId1793 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1793"
    });
    $.__views.__alloyId1791.add($.__views.__alloyId1793);
    $.__views.__alloyId1794 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1794"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1794);
    subscribe ? $.__views.__alloyId1794.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1794!click!subscribe"] = true;
    $.__views.__alloyId1795 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1795"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1795);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 100 - .2 * Ti.Platform.displayCaps.platformHeight;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1760!click!back"] && $.__views.__alloyId1760.addEventListener("click", back);
    __defers["$.__views.__alloyId1794!click!subscribe"] && $.__views.__alloyId1794.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;