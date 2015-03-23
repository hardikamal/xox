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
    $.__views.__alloyId1800 = Alloy.createController("_header", {
        id: "__alloyId1800",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId1800.setParent($.__views.prepaidPlus);
    $.__views.__alloyId1801 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1801"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1801);
    $.__views.__alloyId1802 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId1802"
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1802);
    $.__views.__alloyId1803 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId1803"
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1804"
    });
    $.__views.__alloyId1803.add($.__views.__alloyId1804);
    $.__views.__alloyId1805 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1805"
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1805);
    $.__views.__alloyId1806 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1806"
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1806);
    back ? $.__views.__alloyId1806.addEventListener("click", back) : __defers["$.__views.__alloyId1806!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaidPlus.add($.__views.scrollView);
    $.__views.__alloyId1807 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1807"
    });
    $.__views.scrollView.add($.__views.__alloyId1807);
    $.__views.__alloyId1808 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1808"
    });
    $.__views.__alloyId1807.add($.__views.__alloyId1808);
    $.__views.__alloyId1809 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1809"
    });
    $.__views.__alloyId1808.add($.__views.__alloyId1809);
    $.__views.__alloyId1810 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1810"
    });
    $.__views.__alloyId1807.add($.__views.__alloyId1810);
    $.__views.__alloyId1811 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1811"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1811);
    $.__views.__alloyId1812 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1812"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1812);
    $.__views.__alloyId1813 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1813"
    });
    $.__views.__alloyId1807.add($.__views.__alloyId1813);
    $.__views.__alloyId1814 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1814"
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1814);
    $.__views.__alloyId1815 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1815"
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1815);
    $.__views.__alloyId1816 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1816"
    });
    $.__views.scrollView.add($.__views.__alloyId1816);
    $.__views.__alloyId1817 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1817"
    });
    $.__views.__alloyId1816.add($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1818"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1818);
    $.__views.__alloyId1819 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1819"
    });
    $.__views.__alloyId1816.add($.__views.__alloyId1819);
    $.__views.__alloyId1820 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1820"
    });
    $.__views.__alloyId1819.add($.__views.__alloyId1820);
    $.__views.__alloyId1821 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1821"
    });
    $.__views.__alloyId1819.add($.__views.__alloyId1821);
    $.__views.__alloyId1822 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1822"
    });
    $.__views.__alloyId1816.add($.__views.__alloyId1822);
    $.__views.__alloyId1823 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1823"
    });
    $.__views.__alloyId1822.add($.__views.__alloyId1823);
    $.__views.__alloyId1824 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1824"
    });
    $.__views.__alloyId1822.add($.__views.__alloyId1824);
    $.__views.__alloyId1825 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1825"
    });
    $.__views.__alloyId1816.add($.__views.__alloyId1825);
    $.__views.__alloyId1826 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1826"
    });
    $.__views.__alloyId1825.add($.__views.__alloyId1826);
    $.__views.__alloyId1827 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1827"
    });
    $.__views.__alloyId1825.add($.__views.__alloyId1827);
    $.__views.__alloyId1828 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1828"
    });
    $.__views.__alloyId1816.add($.__views.__alloyId1828);
    $.__views.__alloyId1829 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1829"
    });
    $.__views.__alloyId1828.add($.__views.__alloyId1829);
    $.__views.__alloyId1830 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1830"
    });
    $.__views.__alloyId1828.add($.__views.__alloyId1830);
    $.__views.__alloyId1831 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1831"
    });
    $.__views.scrollView.add($.__views.__alloyId1831);
    $.__views.__alloyId1832 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1832"
    });
    $.__views.__alloyId1831.add($.__views.__alloyId1832);
    $.__views.__alloyId1833 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1833"
    });
    $.__views.__alloyId1832.add($.__views.__alloyId1833);
    $.__views.__alloyId1834 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1834"
    });
    $.__views.__alloyId1831.add($.__views.__alloyId1834);
    $.__views.__alloyId1835 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1835"
    });
    $.__views.__alloyId1834.add($.__views.__alloyId1835);
    $.__views.__alloyId1836 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1836"
    });
    $.__views.__alloyId1834.add($.__views.__alloyId1836);
    $.__views.__alloyId1837 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1837"
    });
    $.__views.__alloyId1831.add($.__views.__alloyId1837);
    $.__views.__alloyId1838 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1838"
    });
    $.__views.__alloyId1837.add($.__views.__alloyId1838);
    $.__views.__alloyId1839 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1839"
    });
    $.__views.__alloyId1837.add($.__views.__alloyId1839);
    $.__views.__alloyId1840 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1840"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1840);
    subscribe ? $.__views.__alloyId1840.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1840!click!subscribe"] = true;
    $.__views.__alloyId1841 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1841"
    });
    $.__views.__alloyId1840.add($.__views.__alloyId1841);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 100 - .2 * Ti.Platform.displayCaps.platformHeight;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1806!click!back"] && $.__views.__alloyId1806.addEventListener("click", back);
    __defers["$.__views.__alloyId1840!click!subscribe"] && $.__views.__alloyId1840.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;