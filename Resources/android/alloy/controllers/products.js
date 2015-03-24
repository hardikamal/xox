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
    $.__views.__alloyId1953 = Alloy.createController("_header", {
        id: "__alloyId1953",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId1953.setParent($.__views.products);
    $.__views.__alloyId1954 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId1954"
    });
    $.__views.products.add($.__views.__alloyId1954);
    $.__views.__alloyId1955 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1955"
    });
    $.__views.__alloyId1954.add($.__views.__alloyId1955);
    $.__views.__alloyId1956 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1956"
    });
    $.__views.products.add($.__views.__alloyId1956);
    $.__views.__alloyId1957 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1957"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1957);
    prepaidPlus ? $.__views.__alloyId1957.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1957!click!prepaidPlus"] = true;
    $.__views.__alloyId1958 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1958"
    });
    $.__views.__alloyId1957.add($.__views.__alloyId1958);
    $.__views.__alloyId1959 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId1959"
    });
    $.__views.__alloyId1958.add($.__views.__alloyId1959);
    $.__views.__alloyId1960 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1960"
    });
    $.__views.__alloyId1957.add($.__views.__alloyId1960);
    $.__views.__alloyId1961 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1961"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1961);
    prepaid ? $.__views.__alloyId1961.addEventListener("click", prepaid) : __defers["$.__views.__alloyId1961!click!prepaid"] = true;
    $.__views.__alloyId1962 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1962"
    });
    $.__views.__alloyId1961.add($.__views.__alloyId1962);
    $.__views.__alloyId1963 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId1963"
    });
    $.__views.__alloyId1962.add($.__views.__alloyId1963);
    $.__views.__alloyId1964 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1964"
    });
    $.__views.__alloyId1961.add($.__views.__alloyId1964);
    $.__views.__alloyId1965 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1965"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1965);
    penang ? $.__views.__alloyId1965.addEventListener("click", penang) : __defers["$.__views.__alloyId1965!click!penang"] = true;
    $.__views.__alloyId1966 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId1966"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1966);
    $.__views.__alloyId1967 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId1967"
    });
    $.__views.__alloyId1966.add($.__views.__alloyId1967);
    $.__views.__alloyId1968 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1968"
    });
    $.__views.__alloyId1965.add($.__views.__alloyId1968);
    $.__views.__alloyId1969 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId1969"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1969);
    mobileInternet ? $.__views.__alloyId1969.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId1969!click!mobileInternet"] = true;
    $.__views.__alloyId1970 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId1970"
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1970);
    $.__views.__alloyId1971 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId1971"
    });
    $.__views.__alloyId1970.add($.__views.__alloyId1971);
    $.__views.__alloyId1972 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1972"
    });
    $.__views.__alloyId1969.add($.__views.__alloyId1972);
    $.__views.__alloyId1973 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId1973"
    });
    $.__views.__alloyId1956.add($.__views.__alloyId1973);
    idd ? $.__views.__alloyId1973.addEventListener("click", idd) : __defers["$.__views.__alloyId1973!click!idd"] = true;
    $.__views.__alloyId1974 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId1974"
    });
    $.__views.__alloyId1973.add($.__views.__alloyId1974);
    $.__views.__alloyId1975 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId1975"
    });
    $.__views.__alloyId1974.add($.__views.__alloyId1975);
    $.__views.__alloyId1976 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1976"
    });
    $.__views.__alloyId1973.add($.__views.__alloyId1976);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1957!click!prepaidPlus"] && $.__views.__alloyId1957.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1961!click!prepaid"] && $.__views.__alloyId1961.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId1965!click!penang"] && $.__views.__alloyId1965.addEventListener("click", penang);
    __defers["$.__views.__alloyId1969!click!mobileInternet"] && $.__views.__alloyId1969.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId1973!click!idd"] && $.__views.__alloyId1973.addEventListener("click", idd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;