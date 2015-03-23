function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function prepaidPlus() {
        DRAWER.navigation("prepaidPlus", 1);
    }
    function prepaid() {
        DRAWER.navigation("prepaid", 1);
    }
    function penang() {
        DRAWER.navigation("penang", 1);
    }
    function mobileInternet() {
        DRAWER.navigation("mobileInternet", 1);
    }
    function idd() {
        DRAWER.navigation("idd", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "products";
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
    $.__views.products = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "products"
    });
    $.__views.products && $.addTopLevelView($.__views.products);
<<<<<<< HEAD
    $.__views.__alloyId1721 = Alloy.createController("_header", {
        id: "__alloyId1721",
=======
<<<<<<< HEAD
    $.__views.__alloyId1886 = Alloy.createController("_header", {
        id: "__alloyId1886",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1886.setParent($.__views.products);
    $.__views.__alloyId1887 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1887"
    });
    $.__views.products.add($.__views.__alloyId1887);
    $.__views.__alloyId1888 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1389 = Alloy.createController("_header", {
        id: "__alloyId1389",
>>>>>>> origin/master
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1721.setParent($.__views.products);
    $.__views.__alloyId1722 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1722"
    });
<<<<<<< HEAD
    $.__views.products.add($.__views.__alloyId1722);
    $.__views.__alloyId1723 = Ti.UI.createLabel({
=======
    $.__views.products.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId1723"
=======
<<<<<<< HEAD
        id: "__alloyId1888"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1888);
    $.__views.__alloyId1889 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1889"
    });
    $.__views.products.add($.__views.__alloyId1889);
    $.__views.__alloyId1890 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1890"
    });
    $.__views.__alloyId1889.add($.__views.__alloyId1890);
    prepaidPlus ? $.__views.__alloyId1890.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1890!click!prepaidPlus"] = true;
    $.__views.__alloyId1891 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1891"
    });
    $.__views.__alloyId1890.add($.__views.__alloyId1891);
    $.__views.__alloyId1892 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1892"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createLabel({
=======
        id: "__alloyId1391"
>>>>>>> origin/master
    });
    $.__views.__alloyId1722.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1724"
    });
    $.__views.products.add($.__views.__alloyId1724);
    $.__views.__alloyId1725 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1725"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1725);
    prepaidPlus ? $.__views.__alloyId1725.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1725!click!prepaidPlus"] = true;
    $.__views.__alloyId1726 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1726"
    });
    $.__views.__alloyId1725.add($.__views.__alloyId1726);
    $.__views.__alloyId1727 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1727"
    });
<<<<<<< HEAD
    $.__views.__alloyId1726.add($.__views.__alloyId1727);
    $.__views.__alloyId1728 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1394.add($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1728"
=======
<<<<<<< HEAD
        id: "__alloyId1893"
    });
    $.__views.__alloyId1890.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1889.add($.__views.__alloyId1894);
    prepaid ? $.__views.__alloyId1894.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1894!click!prepaid"] = true;
    $.__views.__alloyId1895 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1895"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1896"
    });
    $.__views.__alloyId1895.add($.__views.__alloyId1896);
    $.__views.__alloyId1897 = Ti.UI.createLabel({
=======
        id: "__alloyId1396"
>>>>>>> origin/master
    });
    $.__views.__alloyId1725.add($.__views.__alloyId1728);
    $.__views.__alloyId1729 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1729"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1729);
    prepaid ? $.__views.__alloyId1729.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1729!click!prepaid"] = true;
    $.__views.__alloyId1730 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1730"
    });
    $.__views.__alloyId1729.add($.__views.__alloyId1730);
    $.__views.__alloyId1731 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1731"
    });
<<<<<<< HEAD
    $.__views.__alloyId1730.add($.__views.__alloyId1731);
    $.__views.__alloyId1732 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1398.add($.__views.__alloyId1399);
    $.__views.__alloyId1400 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1732"
=======
<<<<<<< HEAD
        id: "__alloyId1897"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1897);
    $.__views.__alloyId1898 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1898"
    });
    $.__views.__alloyId1889.add($.__views.__alloyId1898);
    penang ? $.__views.__alloyId1898.addEventListener("click", penang) : __defers["$.__views.__alloyId1898!click!penang"] = true;
    $.__views.__alloyId1899 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1899"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1899);
    $.__views.__alloyId1900 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1900"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createLabel({
=======
        id: "__alloyId1400"
>>>>>>> origin/master
    });
    $.__views.__alloyId1729.add($.__views.__alloyId1732);
    $.__views.__alloyId1733 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1733"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1733);
    penang ? $.__views.__alloyId1733.addEventListener("click", penang) : __defers["$.__views.__alloyId1733!click!penang"] = true;
    $.__views.__alloyId1734 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1734"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1734);
    $.__views.__alloyId1735 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1735"
    });
<<<<<<< HEAD
    $.__views.__alloyId1734.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1402.add($.__views.__alloyId1403);
    $.__views.__alloyId1404 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1736"
=======
<<<<<<< HEAD
        id: "__alloyId1901"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1901);
    $.__views.__alloyId1902 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId1902"
    });
    $.__views.__alloyId1889.add($.__views.__alloyId1902);
    mobileInternet ? $.__views.__alloyId1902.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId1902!click!mobileInternet"] = true;
    $.__views.__alloyId1903 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId1903"
    });
    $.__views.__alloyId1902.add($.__views.__alloyId1903);
    $.__views.__alloyId1904 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1904"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1904);
    $.__views.__alloyId1905 = Ti.UI.createLabel({
=======
        id: "__alloyId1404"
>>>>>>> origin/master
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1736);
    $.__views.__alloyId1737 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId1737"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1737);
    mobileInternet ? $.__views.__alloyId1737.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId1737!click!mobileInternet"] = true;
    $.__views.__alloyId1738 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId1738"
    });
    $.__views.__alloyId1737.add($.__views.__alloyId1738);
    $.__views.__alloyId1739 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1739"
    });
<<<<<<< HEAD
    $.__views.__alloyId1738.add($.__views.__alloyId1739);
    $.__views.__alloyId1740 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1406.add($.__views.__alloyId1407);
    $.__views.__alloyId1408 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1740"
=======
<<<<<<< HEAD
        id: "__alloyId1905"
    });
    $.__views.__alloyId1902.add($.__views.__alloyId1905);
    $.__views.__alloyId1906 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId1906"
    });
    $.__views.__alloyId1889.add($.__views.__alloyId1906);
    idd ? $.__views.__alloyId1906.addEventListener("click", idd) : __defers["$.__views.__alloyId1906!click!idd"] = true;
    $.__views.__alloyId1907 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId1907"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId1908"
    });
    $.__views.__alloyId1907.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createLabel({
=======
        id: "__alloyId1408"
>>>>>>> origin/master
    });
    $.__views.__alloyId1737.add($.__views.__alloyId1740);
    $.__views.__alloyId1741 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId1741"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1741);
    idd ? $.__views.__alloyId1741.addEventListener("click", idd) : __defers["$.__views.__alloyId1741!click!idd"] = true;
    $.__views.__alloyId1742 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId1742"
    });
    $.__views.__alloyId1741.add($.__views.__alloyId1742);
    $.__views.__alloyId1743 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId1743"
    });
<<<<<<< HEAD
    $.__views.__alloyId1742.add($.__views.__alloyId1743);
    $.__views.__alloyId1744 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1410.add($.__views.__alloyId1411);
    $.__views.__alloyId1412 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1744"
=======
<<<<<<< HEAD
        id: "__alloyId1909"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1909);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1890!click!prepaidPlus"] && $.__views.__alloyId1890.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1894!click!prepaid"] && $.__views.__alloyId1894.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1898!click!penang"] && $.__views.__alloyId1898.addEventListener("click", penang);
    __defers["$.__views.__alloyId1902!click!mobileInternet"] && $.__views.__alloyId1902.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1906!click!idd"] && $.__views.__alloyId1906.addEventListener("click", idd);
=======
        id: "__alloyId1412"
>>>>>>> origin/master
    });
    $.__views.__alloyId1741.add($.__views.__alloyId1744);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1725!click!prepaidPlus"] && $.__views.__alloyId1725.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1729!click!prepaid"] && $.__views.__alloyId1729.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1733!click!penang"] && $.__views.__alloyId1733.addEventListener("click", penang);
    __defers["$.__views.__alloyId1737!click!mobileInternet"] && $.__views.__alloyId1737.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1741!click!idd"] && $.__views.__alloyId1741.addEventListener("click", idd);
=======
    __defers["$.__views.__alloyId1393!click!prepaidPlus"] && $.__views.__alloyId1393.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1397!click!prepaid"] && $.__views.__alloyId1397.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1401!click!penang"] && $.__views.__alloyId1401.addEventListener("click", penang);
    __defers["$.__views.__alloyId1405!click!mobileInternet"] && $.__views.__alloyId1405.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1409!click!idd"] && $.__views.__alloyId1409.addEventListener("click", idd);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;