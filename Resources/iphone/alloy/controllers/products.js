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
        DRAWER.navigation("prepaidPlus", 2);
    }
    function prepaid() {
        DRAWER.navigation("prepaid", 2);
    }
    function penang() {
        DRAWER.navigation("penang", 2);
    }
    function mobileInternet() {
        DRAWER.navigation("mobileInternet", 2);
    }
    function idd() {
        DRAWER.navigation("idd", 2);
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
    $.__views.__alloyId1721 = Alloy.createController("_header", {
        id: "__alloyId1721",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1721.setParent($.__views.products);
    $.__views.__alloyId1722 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1722"
    });
    $.__views.products.add($.__views.__alloyId1722);
    $.__views.__alloyId1723 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1723"
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
    $.__views.__alloyId1726.add($.__views.__alloyId1727);
    $.__views.__alloyId1728 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1728"
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
    $.__views.__alloyId1730.add($.__views.__alloyId1731);
    $.__views.__alloyId1732 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1732"
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
    $.__views.__alloyId1734.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1736"
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
    $.__views.__alloyId1738.add($.__views.__alloyId1739);
    $.__views.__alloyId1740 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1740"
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
    $.__views.__alloyId1742.add($.__views.__alloyId1743);
    $.__views.__alloyId1744 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1744"
    });
    $.__views.__alloyId1741.add($.__views.__alloyId1744);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1725!click!prepaidPlus"] && $.__views.__alloyId1725.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1729!click!prepaid"] && $.__views.__alloyId1729.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1733!click!penang"] && $.__views.__alloyId1733.addEventListener("click", penang);
    __defers["$.__views.__alloyId1737!click!mobileInternet"] && $.__views.__alloyId1737.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1741!click!idd"] && $.__views.__alloyId1741.addEventListener("click", idd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;