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
    $.__views.__alloyId1911 = Alloy.createController("_header", {
        id: "__alloyId1911",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1911.setParent($.__views.products);
    $.__views.__alloyId1912 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1912"
    });
    $.__views.products.add($.__views.__alloyId1912);
    $.__views.__alloyId1913 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1913"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1913);
    $.__views.__alloyId1914 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1914"
    });
    $.__views.products.add($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1915"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1915);
    prepaidPlus ? $.__views.__alloyId1915.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1915!click!prepaidPlus"] = true;
    $.__views.__alloyId1916 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1916"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1916);
    $.__views.__alloyId1917 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1917"
    });
    $.__views.__alloyId1916.add($.__views.__alloyId1917);
    $.__views.__alloyId1918 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1918"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1918);
    $.__views.__alloyId1919 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1919"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1919);
    prepaid ? $.__views.__alloyId1919.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1919!click!prepaid"] = true;
    $.__views.__alloyId1920 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1920"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1920);
    $.__views.__alloyId1921 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1921"
    });
    $.__views.__alloyId1920.add($.__views.__alloyId1921);
    $.__views.__alloyId1922 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1922"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1923"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1923);
    penang ? $.__views.__alloyId1923.addEventListener("click", penang) : __defers["$.__views.__alloyId1923!click!penang"] = true;
    $.__views.__alloyId1924 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1924"
    });
    $.__views.__alloyId1923.add($.__views.__alloyId1924);
    $.__views.__alloyId1925 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1925"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1925);
    $.__views.__alloyId1926 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1926"
    });
    $.__views.__alloyId1923.add($.__views.__alloyId1926);
    $.__views.__alloyId1927 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId1927"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1927);
    mobileInternet ? $.__views.__alloyId1927.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId1927!click!mobileInternet"] = true;
    $.__views.__alloyId1928 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
    $.__views.__alloyId1929 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1929"
    });
    $.__views.__alloyId1928.add($.__views.__alloyId1929);
    $.__views.__alloyId1930 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1930"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1930);
    $.__views.__alloyId1931 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId1931"
    });
    $.__views.__alloyId1914.add($.__views.__alloyId1931);
    idd ? $.__views.__alloyId1931.addEventListener("click", idd) : __defers["$.__views.__alloyId1931!click!idd"] = true;
    $.__views.__alloyId1932 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId1932"
    });
    $.__views.__alloyId1931.add($.__views.__alloyId1932);
    $.__views.__alloyId1933 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId1933"
    });
    $.__views.__alloyId1932.add($.__views.__alloyId1933);
    $.__views.__alloyId1934 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1934"
    });
    $.__views.__alloyId1931.add($.__views.__alloyId1934);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1915!click!prepaidPlus"] && $.__views.__alloyId1915.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1919!click!prepaid"] && $.__views.__alloyId1919.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1923!click!penang"] && $.__views.__alloyId1923.addEventListener("click", penang);
    __defers["$.__views.__alloyId1927!click!mobileInternet"] && $.__views.__alloyId1927.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1931!click!idd"] && $.__views.__alloyId1931.addEventListener("click", idd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;