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
    $.__views.__alloyId1840 = Alloy.createController("_header", {
        id: "__alloyId1840",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1840.setParent($.__views.products);
    $.__views.__alloyId1841 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1841"
    });
    $.__views.products.add($.__views.__alloyId1841);
    $.__views.__alloyId1842 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2067 = Alloy.createController("_header", {
        id: "__alloyId2067",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId2067.setParent($.__views.products);
    $.__views.__alloyId2068 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId2068"
    });
    $.__views.products.add($.__views.__alloyId2068);
    $.__views.__alloyId2069 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1840 = Alloy.createController("_header", {
        id: "__alloyId1840",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1840.setParent($.__views.products);
    $.__views.__alloyId1841 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1841"
    });
    $.__views.products.add($.__views.__alloyId1841);
    $.__views.__alloyId1842 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId1842"
    });
=======
<<<<<<< HEAD
        id: "__alloyId2069"
    });
    $.__views.__alloyId2068.add($.__views.__alloyId2069);
    $.__views.__alloyId2070 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2070"
    });
    $.__views.products.add($.__views.__alloyId2070);
    $.__views.__alloyId2071 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId2071"
    });
    $.__views.__alloyId2070.add($.__views.__alloyId2071);
    prepaidPlus ? $.__views.__alloyId2071.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId2071!click!prepaidPlus"] = true;
    $.__views.__alloyId2072 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId2072"
    });
    $.__views.__alloyId2071.add($.__views.__alloyId2072);
    $.__views.__alloyId2073 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId2073"
    });
    $.__views.__alloyId2072.add($.__views.__alloyId2073);
    $.__views.__alloyId2074 = Ti.UI.createLabel({
=======
        id: "__alloyId1842"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1841.add($.__views.__alloyId1842);
    $.__views.__alloyId1843 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1843"
    });
    $.__views.products.add($.__views.__alloyId1843);
    $.__views.__alloyId1844 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1844"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1844);
    prepaidPlus ? $.__views.__alloyId1844.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1844!click!prepaidPlus"] = true;
    $.__views.__alloyId1845 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1845"
    });
    $.__views.__alloyId1844.add($.__views.__alloyId1845);
    $.__views.__alloyId1846 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1846"
    });
    $.__views.__alloyId1845.add($.__views.__alloyId1846);
    $.__views.__alloyId1847 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1847"
    });
    $.__views.__alloyId1844.add($.__views.__alloyId1847);
    $.__views.__alloyId1848 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1848"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1848);
    prepaid ? $.__views.__alloyId1848.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1848!click!prepaid"] = true;
    $.__views.__alloyId1849 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1849"
    });
    $.__views.__alloyId1848.add($.__views.__alloyId1849);
    $.__views.__alloyId1850 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1850"
    });
    $.__views.__alloyId1849.add($.__views.__alloyId1850);
    $.__views.__alloyId1851 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2074"
    });
    $.__views.__alloyId2071.add($.__views.__alloyId2074);
    $.__views.__alloyId2075 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2075"
    });
    $.__views.__alloyId2070.add($.__views.__alloyId2075);
    prepaid ? $.__views.__alloyId2075.addEventListener("click", prepaid) : __defers["$.__views.__alloyId2075!click!prepaid"] = true;
    $.__views.__alloyId2076 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId2076"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2076);
    $.__views.__alloyId2077 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId2077"
    });
    $.__views.__alloyId2076.add($.__views.__alloyId2077);
    $.__views.__alloyId2078 = Ti.UI.createLabel({
=======
        id: "__alloyId1847"
    });
    $.__views.__alloyId1844.add($.__views.__alloyId1847);
    $.__views.__alloyId1848 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1848"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1848);
    prepaid ? $.__views.__alloyId1848.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1848!click!prepaid"] = true;
    $.__views.__alloyId1849 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1849"
    });
    $.__views.__alloyId1848.add($.__views.__alloyId1849);
    $.__views.__alloyId1850 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1850"
    });
    $.__views.__alloyId1849.add($.__views.__alloyId1850);
    $.__views.__alloyId1851 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1851"
    });
    $.__views.__alloyId1848.add($.__views.__alloyId1851);
    $.__views.__alloyId1852 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1852"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1852);
    penang ? $.__views.__alloyId1852.addEventListener("click", penang) : __defers["$.__views.__alloyId1852!click!penang"] = true;
    $.__views.__alloyId1853 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1853"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1853);
    $.__views.__alloyId1854 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1854"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1854);
    $.__views.__alloyId1855 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2078"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2078);
    $.__views.__alloyId2079 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId2079"
    });
    $.__views.__alloyId2070.add($.__views.__alloyId2079);
    penang ? $.__views.__alloyId2079.addEventListener("click", penang) : __defers["$.__views.__alloyId2079!click!penang"] = true;
    $.__views.__alloyId2080 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId2080"
    });
    $.__views.__alloyId2079.add($.__views.__alloyId2080);
    $.__views.__alloyId2081 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId2081"
    });
    $.__views.__alloyId2080.add($.__views.__alloyId2081);
    $.__views.__alloyId2082 = Ti.UI.createLabel({
=======
        id: "__alloyId1851"
    });
    $.__views.__alloyId1848.add($.__views.__alloyId1851);
    $.__views.__alloyId1852 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1852"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1852);
    penang ? $.__views.__alloyId1852.addEventListener("click", penang) : __defers["$.__views.__alloyId1852!click!penang"] = true;
    $.__views.__alloyId1853 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1853"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1853);
    $.__views.__alloyId1854 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1854"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1854);
    $.__views.__alloyId1855 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1855"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1855);
    $.__views.__alloyId1856 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId1856"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1856);
    mobileInternet ? $.__views.__alloyId1856.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId1856!click!mobileInternet"] = true;
    $.__views.__alloyId1857 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId1857"
    });
    $.__views.__alloyId1856.add($.__views.__alloyId1857);
    $.__views.__alloyId1858 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1858"
    });
    $.__views.__alloyId1857.add($.__views.__alloyId1858);
    $.__views.__alloyId1859 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2082"
    });
    $.__views.__alloyId2079.add($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId2083"
    });
    $.__views.__alloyId2070.add($.__views.__alloyId2083);
    mobileInternet ? $.__views.__alloyId2083.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId2083!click!mobileInternet"] = true;
    $.__views.__alloyId2084 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId2084"
    });
    $.__views.__alloyId2083.add($.__views.__alloyId2084);
    $.__views.__alloyId2085 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId2085"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2085);
    $.__views.__alloyId2086 = Ti.UI.createLabel({
=======
        id: "__alloyId1855"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1855);
    $.__views.__alloyId1856 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId1856"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1856);
    mobileInternet ? $.__views.__alloyId1856.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId1856!click!mobileInternet"] = true;
    $.__views.__alloyId1857 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId1857"
    });
    $.__views.__alloyId1856.add($.__views.__alloyId1857);
    $.__views.__alloyId1858 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1858"
    });
    $.__views.__alloyId1857.add($.__views.__alloyId1858);
    $.__views.__alloyId1859 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1859"
    });
=======
<<<<<<< HEAD
        id: "__alloyId2086"
    });
    $.__views.__alloyId2083.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId2087"
    });
    $.__views.__alloyId2070.add($.__views.__alloyId2087);
    idd ? $.__views.__alloyId2087.addEventListener("click", idd) : __defers["$.__views.__alloyId2087!click!idd"] = true;
    $.__views.__alloyId2088 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId2088"
    });
    $.__views.__alloyId2087.add($.__views.__alloyId2088);
    $.__views.__alloyId2089 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId2089"
    });
    $.__views.__alloyId2088.add($.__views.__alloyId2089);
    $.__views.__alloyId2090 = Ti.UI.createLabel({
=======
        id: "__alloyId1859"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1856.add($.__views.__alloyId1859);
    $.__views.__alloyId1860 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId1860"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1860);
    idd ? $.__views.__alloyId1860.addEventListener("click", idd) : __defers["$.__views.__alloyId1860!click!idd"] = true;
    $.__views.__alloyId1861 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId1861"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1861);
    $.__views.__alloyId1862 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId1862"
    });
    $.__views.__alloyId1861.add($.__views.__alloyId1862);
    $.__views.__alloyId1863 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2090"
    });
    $.__views.__alloyId2087.add($.__views.__alloyId2090);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2071!click!prepaidPlus"] && $.__views.__alloyId2071.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId2075!click!prepaid"] && $.__views.__alloyId2075.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId2079!click!penang"] && $.__views.__alloyId2079.addEventListener("click", penang);
    __defers["$.__views.__alloyId2083!click!mobileInternet"] && $.__views.__alloyId2083.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId2087!click!idd"] && $.__views.__alloyId2087.addEventListener("click", idd);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1863"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1863);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1844!click!prepaidPlus"] && $.__views.__alloyId1844.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1848!click!prepaid"] && $.__views.__alloyId1848.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1852!click!penang"] && $.__views.__alloyId1852.addEventListener("click", penang);
    __defers["$.__views.__alloyId1856!click!mobileInternet"] && $.__views.__alloyId1856.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1860!click!idd"] && $.__views.__alloyId1860.addEventListener("click", idd);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;