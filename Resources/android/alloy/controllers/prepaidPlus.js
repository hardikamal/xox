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
<<<<<<< Updated upstream
        DRAWER.navigation("products", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
<<<<<<< HEAD
    function subscribe() {
        console.log("subscribe");
=======
        DRAWER.navigation("products", 2);
>>>>>>> Stashed changes
    }
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId1890 = Alloy.createController("_header", {
        id: "__alloyId1890",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId1890.setParent($.__views.prepaidPlus);
    $.__views.__alloyId1891 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1891"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1891);
    $.__views.__alloyId1892 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId1892"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId1893"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1823 = Alloy.createController("_header", {
        id: "__alloyId1823",
=======
    $.__views.__alloyId1890 = Alloy.createController("_header", {
        id: "__alloyId1890",
>>>>>>> origin/master
=======
    $.__views.__alloyId1890 = Alloy.createController("_header", {
        id: "__alloyId1890",
>>>>>>> origin/master
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId1890.setParent($.__views.prepaidPlus);
    $.__views.__alloyId1891 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1891"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1891);
    $.__views.__alloyId1892 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId1892"
<<<<<<< HEAD
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId1893"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1894"
    });
<<<<<<< HEAD
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
=======
    $.__views.__alloyId481 = Alloy.createController("_header", {
        id: "__alloyId481",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId481.setParent($.__views.prepaidPlus);
    $.__views.__alloyId482 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId482"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId483"
    });
    $.__views.__alloyId482.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId484"
    });
    $.__views.__alloyId483.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId485"
    });
    $.__views.__alloyId484.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1893.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId1893"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1895"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId486"
    });
    $.__views.__alloyId483.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1895"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1895"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1896"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1829"
=======
        id: "__alloyId1896"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1896"
>>>>>>> origin/master
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1896);
    back ? $.__views.__alloyId1896.addEventListener("click", back) : __defers["$.__views.__alloyId1896!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaidPlus.add($.__views.scrollView);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1897 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1830 = Ti.UI.createView({
=======
    $.__views.__alloyId1659 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId487"
    });
    $.__views.__alloyId482.add($.__views.__alloyId487);
    back ? $.__views.__alloyId487.addEventListener("click", back) : __defers["$.__views.__alloyId487!click!back"] = true;
    $.__views.__alloyId488 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%",
        id: "__alloyId488"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1897 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1897 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1897"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1830"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1897"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1897);
    $.__views.__alloyId1898 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1898"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1897.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1830.add($.__views.__alloyId1831);
    $.__views.__alloyId1832 = Ti.UI.createLabel({
=======
        id: "__alloyId1659"
=======
        id: "__alloyId1897"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1897);
    $.__views.__alloyId1898 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1898"
    });
<<<<<<< HEAD
    $.__views.__alloyId1659.add($.__views.__alloyId1660);
    $.__views.__alloyId1661 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId489"
    });
    $.__views.__alloyId488.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId490"
    });
    $.__views.__alloyId489.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1897.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1897.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1899"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1832"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1899"
>>>>>>> origin/master
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1899);
    $.__views.__alloyId1900 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1900"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1897.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1830.add($.__views.__alloyId1833);
    $.__views.__alloyId1834 = Ti.UI.createLabel({
=======
        id: "__alloyId1661"
=======
        id: "__alloyId1899"
>>>>>>> origin/master
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1899);
    $.__views.__alloyId1900 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1900"
    });
<<<<<<< HEAD
    $.__views.__alloyId1659.add($.__views.__alloyId1662);
    $.__views.__alloyId1663 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId491"
    });
    $.__views.__alloyId490.add($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId492"
    });
    $.__views.__alloyId489.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1897.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1897.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1901"
    });
    $.__views.__alloyId1900.add($.__views.__alloyId1901);
    $.__views.__alloyId1902 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId493"
    });
    $.__views.__alloyId492.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1901"
    });
    $.__views.__alloyId1900.add($.__views.__alloyId1901);
    $.__views.__alloyId1902 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1901"
    });
    $.__views.__alloyId1900.add($.__views.__alloyId1901);
    $.__views.__alloyId1902 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1902"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1835"
=======
        id: "__alloyId1902"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1902"
>>>>>>> origin/master
    });
    $.__views.__alloyId1900.add($.__views.__alloyId1902);
    $.__views.__alloyId1903 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1903"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1897.add($.__views.__alloyId1903);
    $.__views.__alloyId1904 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId494"
    });
    $.__views.__alloyId492.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId495"
    });
    $.__views.__alloyId489.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1897.add($.__views.__alloyId1903);
    $.__views.__alloyId1904 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1897.add($.__views.__alloyId1903);
    $.__views.__alloyId1904 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1904"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1904);
    $.__views.__alloyId1905 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId496"
    });
    $.__views.__alloyId495.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1904"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1904);
    $.__views.__alloyId1905 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1904"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1904);
    $.__views.__alloyId1905 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1905"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1905);
    $.__views.__alloyId1906 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId497"
    });
    $.__views.__alloyId495.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1905"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1905);
    $.__views.__alloyId1906 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1905"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1905);
    $.__views.__alloyId1906 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1906"
    });
    $.__views.scrollView.add($.__views.__alloyId1906);
    $.__views.__alloyId1907 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1907"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1839"
=======
        id: "__alloyId1906"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1906);
    $.__views.__alloyId1907 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1907"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1668);
    $.__views.__alloyId1669 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1669"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1669);
    $.__views.__alloyId1670 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId498"
    });
    $.__views.__alloyId488.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId499"
    });
    $.__views.__alloyId498.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1906.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1906"
    });
    $.__views.scrollView.add($.__views.__alloyId1906);
    $.__views.__alloyId1907 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1907"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1908"
    });
    $.__views.__alloyId1907.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1909"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1909);
    $.__views.__alloyId1910 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1841"
=======
        id: "__alloyId1908"
>>>>>>> origin/master
=======
        id: "__alloyId1908"
>>>>>>> origin/master
    });
    $.__views.__alloyId1907.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1909"
    });
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        id: "__alloyId500"
    });
    $.__views.__alloyId499.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId501"
    });
    $.__views.__alloyId498.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1906.add($.__views.__alloyId1909);
    $.__views.__alloyId1910 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1906.add($.__views.__alloyId1909);
    $.__views.__alloyId1910 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1910"
    });
    $.__views.__alloyId1909.add($.__views.__alloyId1910);
    $.__views.__alloyId1911 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId502"
    });
    $.__views.__alloyId501.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1910"
    });
    $.__views.__alloyId1909.add($.__views.__alloyId1910);
    $.__views.__alloyId1911 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1910"
    });
    $.__views.__alloyId1909.add($.__views.__alloyId1910);
    $.__views.__alloyId1911 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1911"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1844"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1911"
>>>>>>> origin/master
    });
    $.__views.__alloyId1909.add($.__views.__alloyId1911);
    $.__views.__alloyId1912 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1912"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1906.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1839.add($.__views.__alloyId1845);
    $.__views.__alloyId1846 = Ti.UI.createLabel({
=======
        id: "__alloyId1673"
=======
        id: "__alloyId1911"
>>>>>>> origin/master
    });
    $.__views.__alloyId1909.add($.__views.__alloyId1911);
    $.__views.__alloyId1912 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1912"
    });
<<<<<<< HEAD
    $.__views.__alloyId1668.add($.__views.__alloyId1674);
    $.__views.__alloyId1675 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId503"
    });
    $.__views.__alloyId501.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId504"
    });
    $.__views.__alloyId498.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1906.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1906.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1913"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1913);
    $.__views.__alloyId1914 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId505"
    });
    $.__views.__alloyId504.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1913"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1913);
    $.__views.__alloyId1914 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1913"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1913);
    $.__views.__alloyId1914 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1914"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1847"
=======
        id: "__alloyId1914"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1914"
>>>>>>> origin/master
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1915"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1906.add($.__views.__alloyId1915);
    $.__views.__alloyId1916 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId506"
    });
    $.__views.__alloyId504.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId507"
    });
    $.__views.__alloyId498.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1906.add($.__views.__alloyId1915);
    $.__views.__alloyId1916 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1906.add($.__views.__alloyId1915);
    $.__views.__alloyId1916 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1916"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1916);
    $.__views.__alloyId1917 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId508"
    });
    $.__views.__alloyId507.add($.__views.__alloyId508);
    $.__views.__alloyId509 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1916"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1916);
    $.__views.__alloyId1917 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1916"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1916);
    $.__views.__alloyId1917 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1917"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1850"
=======
        id: "__alloyId1917"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1917"
>>>>>>> origin/master
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1917);
    $.__views.__alloyId1918 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1918"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1906.add($.__views.__alloyId1918);
    $.__views.__alloyId1919 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId509"
    });
    $.__views.__alloyId507.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId510"
    });
    $.__views.__alloyId498.add($.__views.__alloyId510);
    $.__views.__alloyId511 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1906.add($.__views.__alloyId1918);
    $.__views.__alloyId1919 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1906.add($.__views.__alloyId1918);
    $.__views.__alloyId1919 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1919"
    });
    $.__views.__alloyId1918.add($.__views.__alloyId1919);
    $.__views.__alloyId1920 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId511"
    });
    $.__views.__alloyId510.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1919"
    });
    $.__views.__alloyId1918.add($.__views.__alloyId1919);
    $.__views.__alloyId1920 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1919"
    });
    $.__views.__alloyId1918.add($.__views.__alloyId1919);
    $.__views.__alloyId1920 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1920"
    });
    $.__views.__alloyId1918.add($.__views.__alloyId1920);
    $.__views.__alloyId1921 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId512"
    });
    $.__views.__alloyId510.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1920"
    });
    $.__views.__alloyId1918.add($.__views.__alloyId1920);
    $.__views.__alloyId1921 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1920"
    });
    $.__views.__alloyId1918.add($.__views.__alloyId1920);
    $.__views.__alloyId1921 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1921"
    });
    $.__views.scrollView.add($.__views.__alloyId1921);
    $.__views.__alloyId1922 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1922"
    });
    $.__views.__alloyId1921.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1854"
=======
        id: "__alloyId1921"
>>>>>>> origin/master
=======
        id: "__alloyId1921"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1921);
    $.__views.__alloyId1922 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1922"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1683);
    $.__views.__alloyId1684 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1684"
    });
    $.__views.__alloyId1683.add($.__views.__alloyId1684);
    $.__views.__alloyId1685 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId513"
    });
    $.__views.__alloyId488.add($.__views.__alloyId513);
    $.__views.__alloyId514 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId514"
    });
    $.__views.__alloyId513.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1921.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1921.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1923"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1856"
=======
        id: "__alloyId1923"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1923"
>>>>>>> origin/master
    });
    $.__views.__alloyId1922.add($.__views.__alloyId1923);
    $.__views.__alloyId1924 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1924"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1921.add($.__views.__alloyId1924);
    $.__views.__alloyId1925 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId515"
    });
    $.__views.__alloyId514.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId516"
    });
    $.__views.__alloyId513.add($.__views.__alloyId516);
    $.__views.__alloyId517 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1921.add($.__views.__alloyId1924);
    $.__views.__alloyId1925 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1921.add($.__views.__alloyId1924);
    $.__views.__alloyId1925 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1925"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1925);
    $.__views.__alloyId1926 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId517"
    });
    $.__views.__alloyId516.add($.__views.__alloyId517);
    $.__views.__alloyId518 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1925"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1925);
    $.__views.__alloyId1926 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1925"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1925);
    $.__views.__alloyId1926 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1926"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1859"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1926"
>>>>>>> origin/master
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1926);
    $.__views.__alloyId1927 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1927"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1921.add($.__views.__alloyId1927);
    $.__views.__alloyId1928 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1854.add($.__views.__alloyId1860);
    $.__views.__alloyId1861 = Ti.UI.createLabel({
=======
        id: "__alloyId1688"
=======
        id: "__alloyId1926"
>>>>>>> origin/master
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1926);
    $.__views.__alloyId1927 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1927"
    });
<<<<<<< HEAD
    $.__views.__alloyId1683.add($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId518"
    });
    $.__views.__alloyId516.add($.__views.__alloyId518);
    $.__views.__alloyId519 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId519"
    });
    $.__views.__alloyId513.add($.__views.__alloyId519);
    $.__views.__alloyId520 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1921.add($.__views.__alloyId1927);
    $.__views.__alloyId1928 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1921.add($.__views.__alloyId1927);
    $.__views.__alloyId1928 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
        id: "__alloyId520"
    });
    $.__views.__alloyId519.add($.__views.__alloyId520);
    $.__views.__alloyId521 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1929"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1862"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1929"
>>>>>>> origin/master
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1929);
    $.__views.__alloyId1930 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1930"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1930);
    subscribe ? $.__views.__alloyId1930.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1930!click!subscribe"] = true;
    $.__views.__alloyId1931 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1931"
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
    $.__views.__alloyId1863.add($.__views.__alloyId1864);
=======
        id: "__alloyId1691"
=======
        id: "__alloyId1929"
>>>>>>> origin/master
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1929);
    $.__views.__alloyId1930 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1930"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId1930);
    subscribe ? $.__views.__alloyId1930.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1930!click!subscribe"] = true;
    $.__views.__alloyId1931 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1931"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    $.__views.__alloyId1930.add($.__views.__alloyId1931);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 100 - .2 * Ti.Platform.displayCaps.platformHeight;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId1896!click!back"] && $.__views.__alloyId1896.addEventListener("click", back);
    __defers["$.__views.__alloyId1930!click!subscribe"] && $.__views.__alloyId1930.addEventListener("click", subscribe);
=======
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId1829!click!back"] && $.__views.__alloyId1829.addEventListener("click", back);
    __defers["$.__views.__alloyId1863!click!subscribe"] && $.__views.__alloyId1863.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId1658!click!back"] && $.__views.__alloyId1658.addEventListener("click", back);
    __defers["$.__views.__alloyId1692!click!subscribe"] && $.__views.__alloyId1692.addEventListener("click", subscribe);
>>>>>>> origin/master
=======
        id: "__alloyId521"
    });
    $.__views.__alloyId519.add($.__views.__alloyId521);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId487!click!back"] && $.__views.__alloyId487.addEventListener("click", back);
>>>>>>> Stashed changes
=======
    __defers["$.__views.__alloyId1896!click!back"] && $.__views.__alloyId1896.addEventListener("click", back);
    __defers["$.__views.__alloyId1930!click!subscribe"] && $.__views.__alloyId1930.addEventListener("click", subscribe);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId1896!click!back"] && $.__views.__alloyId1896.addEventListener("click", back);
    __defers["$.__views.__alloyId1930!click!subscribe"] && $.__views.__alloyId1930.addEventListener("click", subscribe);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;