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
<<<<<<< HEAD
    $.__views.__alloyId1823 = Alloy.createController("_header", {
        id: "__alloyId1823",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId1823.setParent($.__views.prepaidPlus);
    $.__views.__alloyId1824 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1824"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1824);
    $.__views.__alloyId1825 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId1825"
    });
    $.__views.__alloyId1824.add($.__views.__alloyId1825);
    $.__views.__alloyId1826 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId1826"
    });
    $.__views.__alloyId1825.add($.__views.__alloyId1826);
    $.__views.__alloyId1827 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1827"
    });
    $.__views.__alloyId1826.add($.__views.__alloyId1827);
    $.__views.__alloyId1828 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1652 = Alloy.createController("_header", {
        id: "__alloyId1652",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId1652.setParent($.__views.prepaidPlus);
    $.__views.__alloyId1653 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1653"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1653);
    $.__views.__alloyId1654 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId1654"
    });
    $.__views.__alloyId1653.add($.__views.__alloyId1654);
    $.__views.__alloyId1655 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId1655"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1655);
    $.__views.__alloyId1656 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1656"
    });
    $.__views.__alloyId1655.add($.__views.__alloyId1656);
    $.__views.__alloyId1657 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1828"
    });
    $.__views.__alloyId1825.add($.__views.__alloyId1828);
    $.__views.__alloyId1829 = Ti.UI.createImageView({
=======
        id: "__alloyId1657"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1657);
    $.__views.__alloyId1658 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1829"
    });
    $.__views.__alloyId1824.add($.__views.__alloyId1829);
    back ? $.__views.__alloyId1829.addEventListener("click", back) : __defers["$.__views.__alloyId1829!click!back"] = true;
=======
        id: "__alloyId1658"
    });
    $.__views.__alloyId1653.add($.__views.__alloyId1658);
    back ? $.__views.__alloyId1658.addEventListener("click", back) : __defers["$.__views.__alloyId1658!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaidPlus.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1830 = Ti.UI.createView({
=======
    $.__views.__alloyId1659 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1830"
    });
    $.__views.scrollView.add($.__views.__alloyId1830);
    $.__views.__alloyId1831 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1831"
    });
    $.__views.__alloyId1830.add($.__views.__alloyId1831);
    $.__views.__alloyId1832 = Ti.UI.createLabel({
=======
        id: "__alloyId1659"
    });
    $.__views.scrollView.add($.__views.__alloyId1659);
    $.__views.__alloyId1660 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1660"
    });
    $.__views.__alloyId1659.add($.__views.__alloyId1660);
    $.__views.__alloyId1661 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1832"
    });
    $.__views.__alloyId1831.add($.__views.__alloyId1832);
    $.__views.__alloyId1833 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1833"
    });
    $.__views.__alloyId1830.add($.__views.__alloyId1833);
    $.__views.__alloyId1834 = Ti.UI.createLabel({
=======
        id: "__alloyId1661"
    });
    $.__views.__alloyId1660.add($.__views.__alloyId1661);
    $.__views.__alloyId1662 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1662"
    });
    $.__views.__alloyId1659.add($.__views.__alloyId1662);
    $.__views.__alloyId1663 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1834"
    });
    $.__views.__alloyId1833.add($.__views.__alloyId1834);
    $.__views.__alloyId1835 = Ti.UI.createLabel({
=======
        id: "__alloyId1663"
    });
    $.__views.__alloyId1662.add($.__views.__alloyId1663);
    $.__views.__alloyId1664 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1835"
    });
    $.__views.__alloyId1833.add($.__views.__alloyId1835);
    $.__views.__alloyId1836 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1836"
    });
    $.__views.__alloyId1830.add($.__views.__alloyId1836);
    $.__views.__alloyId1837 = Ti.UI.createLabel({
=======
        id: "__alloyId1664"
    });
    $.__views.__alloyId1662.add($.__views.__alloyId1664);
    $.__views.__alloyId1665 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1665"
    });
    $.__views.__alloyId1659.add($.__views.__alloyId1665);
    $.__views.__alloyId1666 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1837"
    });
    $.__views.__alloyId1836.add($.__views.__alloyId1837);
    $.__views.__alloyId1838 = Ti.UI.createLabel({
=======
        id: "__alloyId1666"
    });
    $.__views.__alloyId1665.add($.__views.__alloyId1666);
    $.__views.__alloyId1667 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1838"
    });
    $.__views.__alloyId1836.add($.__views.__alloyId1838);
    $.__views.__alloyId1839 = Ti.UI.createView({
=======
        id: "__alloyId1667"
    });
    $.__views.__alloyId1665.add($.__views.__alloyId1667);
    $.__views.__alloyId1668 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1839"
    });
    $.__views.scrollView.add($.__views.__alloyId1839);
    $.__views.__alloyId1840 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1840"
    });
    $.__views.__alloyId1839.add($.__views.__alloyId1840);
    $.__views.__alloyId1841 = Ti.UI.createLabel({
=======
        id: "__alloyId1668"
    });
    $.__views.scrollView.add($.__views.__alloyId1668);
    $.__views.__alloyId1669 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1669"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1669);
    $.__views.__alloyId1670 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1841"
    });
    $.__views.__alloyId1840.add($.__views.__alloyId1841);
    $.__views.__alloyId1842 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1842"
    });
    $.__views.__alloyId1839.add($.__views.__alloyId1842);
    $.__views.__alloyId1843 = Ti.UI.createLabel({
=======
        id: "__alloyId1670"
    });
    $.__views.__alloyId1669.add($.__views.__alloyId1670);
    $.__views.__alloyId1671 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1671"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1671);
    $.__views.__alloyId1672 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1843"
    });
    $.__views.__alloyId1842.add($.__views.__alloyId1843);
    $.__views.__alloyId1844 = Ti.UI.createLabel({
=======
        id: "__alloyId1672"
    });
    $.__views.__alloyId1671.add($.__views.__alloyId1672);
    $.__views.__alloyId1673 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1844"
    });
    $.__views.__alloyId1842.add($.__views.__alloyId1844);
    $.__views.__alloyId1845 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1845"
    });
    $.__views.__alloyId1839.add($.__views.__alloyId1845);
    $.__views.__alloyId1846 = Ti.UI.createLabel({
=======
        id: "__alloyId1673"
    });
    $.__views.__alloyId1671.add($.__views.__alloyId1673);
    $.__views.__alloyId1674 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1674"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1674);
    $.__views.__alloyId1675 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1846"
    });
    $.__views.__alloyId1845.add($.__views.__alloyId1846);
    $.__views.__alloyId1847 = Ti.UI.createLabel({
=======
        id: "__alloyId1675"
    });
    $.__views.__alloyId1674.add($.__views.__alloyId1675);
    $.__views.__alloyId1676 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1847"
    });
    $.__views.__alloyId1845.add($.__views.__alloyId1847);
    $.__views.__alloyId1848 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1848"
    });
    $.__views.__alloyId1839.add($.__views.__alloyId1848);
    $.__views.__alloyId1849 = Ti.UI.createLabel({
=======
        id: "__alloyId1676"
    });
    $.__views.__alloyId1674.add($.__views.__alloyId1676);
    $.__views.__alloyId1677 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1677"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1677);
    $.__views.__alloyId1678 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1849"
    });
    $.__views.__alloyId1848.add($.__views.__alloyId1849);
    $.__views.__alloyId1850 = Ti.UI.createLabel({
=======
        id: "__alloyId1678"
    });
    $.__views.__alloyId1677.add($.__views.__alloyId1678);
    $.__views.__alloyId1679 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1850"
    });
    $.__views.__alloyId1848.add($.__views.__alloyId1850);
    $.__views.__alloyId1851 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1851"
    });
    $.__views.__alloyId1839.add($.__views.__alloyId1851);
    $.__views.__alloyId1852 = Ti.UI.createLabel({
=======
        id: "__alloyId1679"
    });
    $.__views.__alloyId1677.add($.__views.__alloyId1679);
    $.__views.__alloyId1680 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1680"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1680);
    $.__views.__alloyId1681 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1852"
    });
    $.__views.__alloyId1851.add($.__views.__alloyId1852);
    $.__views.__alloyId1853 = Ti.UI.createLabel({
=======
        id: "__alloyId1681"
    });
    $.__views.__alloyId1680.add($.__views.__alloyId1681);
    $.__views.__alloyId1682 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1853"
    });
    $.__views.__alloyId1851.add($.__views.__alloyId1853);
    $.__views.__alloyId1854 = Ti.UI.createView({
=======
        id: "__alloyId1682"
    });
    $.__views.__alloyId1680.add($.__views.__alloyId1682);
    $.__views.__alloyId1683 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1854"
    });
    $.__views.scrollView.add($.__views.__alloyId1854);
    $.__views.__alloyId1855 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1855"
    });
    $.__views.__alloyId1854.add($.__views.__alloyId1855);
    $.__views.__alloyId1856 = Ti.UI.createLabel({
=======
        id: "__alloyId1683"
    });
    $.__views.scrollView.add($.__views.__alloyId1683);
    $.__views.__alloyId1684 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1684"
    });
    $.__views.__alloyId1683.add($.__views.__alloyId1684);
    $.__views.__alloyId1685 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1856"
    });
    $.__views.__alloyId1855.add($.__views.__alloyId1856);
    $.__views.__alloyId1857 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1857"
    });
    $.__views.__alloyId1854.add($.__views.__alloyId1857);
    $.__views.__alloyId1858 = Ti.UI.createLabel({
=======
        id: "__alloyId1685"
    });
    $.__views.__alloyId1684.add($.__views.__alloyId1685);
    $.__views.__alloyId1686 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1686"
    });
    $.__views.__alloyId1683.add($.__views.__alloyId1686);
    $.__views.__alloyId1687 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1858"
    });
    $.__views.__alloyId1857.add($.__views.__alloyId1858);
    $.__views.__alloyId1859 = Ti.UI.createLabel({
=======
        id: "__alloyId1687"
    });
    $.__views.__alloyId1686.add($.__views.__alloyId1687);
    $.__views.__alloyId1688 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1859"
    });
    $.__views.__alloyId1857.add($.__views.__alloyId1859);
    $.__views.__alloyId1860 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1860"
    });
    $.__views.__alloyId1854.add($.__views.__alloyId1860);
    $.__views.__alloyId1861 = Ti.UI.createLabel({
=======
        id: "__alloyId1688"
    });
    $.__views.__alloyId1686.add($.__views.__alloyId1688);
    $.__views.__alloyId1689 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1689"
    });
    $.__views.__alloyId1683.add($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1861"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1861);
    $.__views.__alloyId1862 = Ti.UI.createLabel({
=======
        id: "__alloyId1690"
    });
    $.__views.__alloyId1689.add($.__views.__alloyId1690);
    $.__views.__alloyId1691 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1862"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1862);
    $.__views.__alloyId1863 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1863"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1863);
    subscribe ? $.__views.__alloyId1863.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1863!click!subscribe"] = true;
    $.__views.__alloyId1864 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1864"
    });
    $.__views.__alloyId1863.add($.__views.__alloyId1864);
=======
        id: "__alloyId1691"
    });
    $.__views.__alloyId1689.add($.__views.__alloyId1691);
    $.__views.__alloyId1692 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1692"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1692);
    subscribe ? $.__views.__alloyId1692.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1692!click!subscribe"] = true;
    $.__views.__alloyId1693 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1693"
    });
    $.__views.__alloyId1692.add($.__views.__alloyId1693);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 100 - .2 * Ti.Platform.displayCaps.platformHeight;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
<<<<<<< HEAD
    __defers["$.__views.__alloyId1829!click!back"] && $.__views.__alloyId1829.addEventListener("click", back);
    __defers["$.__views.__alloyId1863!click!subscribe"] && $.__views.__alloyId1863.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId1658!click!back"] && $.__views.__alloyId1658.addEventListener("click", back);
    __defers["$.__views.__alloyId1692!click!subscribe"] && $.__views.__alloyId1692.addEventListener("click", subscribe);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;