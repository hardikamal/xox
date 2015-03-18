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
    $.__views.__alloyId925 = Alloy.createController("_header", {
        id: "__alloyId925",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId925.setParent($.__views.products);
    $.__views.__alloyId926 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId926"
    });
    $.__views.products.add($.__views.__alloyId926);
    $.__views.__alloyId927 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId927"
    });
    $.__views.__alloyId926.add($.__views.__alloyId927);
    $.__views.__alloyId928 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId928"
    });
    $.__views.products.add($.__views.__alloyId928);
    $.__views.__alloyId929 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId929"
    });
    $.__views.__alloyId928.add($.__views.__alloyId929);
    prepaidPlus ? $.__views.__alloyId929.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId929!click!prepaidPlus"] = true;
    $.__views.__alloyId930 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId930"
    });
    $.__views.__alloyId929.add($.__views.__alloyId930);
    $.__views.__alloyId931 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId931"
    });
    $.__views.__alloyId930.add($.__views.__alloyId931);
    $.__views.__alloyId932 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId932"
    });
    $.__views.__alloyId929.add($.__views.__alloyId932);
    $.__views.__alloyId933 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId933"
    });
    $.__views.__alloyId928.add($.__views.__alloyId933);
    prepaid ? $.__views.__alloyId933.addEventListener("click", prepaid) : __defers["$.__views.__alloyId933!click!prepaid"] = true;
    $.__views.__alloyId934 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId934"
    });
    $.__views.__alloyId933.add($.__views.__alloyId934);
    $.__views.__alloyId935 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId935"
    });
    $.__views.__alloyId934.add($.__views.__alloyId935);
    $.__views.__alloyId936 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId936"
    });
    $.__views.__alloyId933.add($.__views.__alloyId936);
    $.__views.__alloyId937 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId937"
    });
    $.__views.__alloyId928.add($.__views.__alloyId937);
    penang ? $.__views.__alloyId937.addEventListener("click", penang) : __defers["$.__views.__alloyId937!click!penang"] = true;
    $.__views.__alloyId938 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId938"
    });
    $.__views.__alloyId937.add($.__views.__alloyId938);
    $.__views.__alloyId939 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId939"
    });
    $.__views.__alloyId938.add($.__views.__alloyId939);
    $.__views.__alloyId940 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId940"
    });
    $.__views.__alloyId937.add($.__views.__alloyId940);
    $.__views.__alloyId941 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId941"
    });
    $.__views.__alloyId928.add($.__views.__alloyId941);
    mobileInternet ? $.__views.__alloyId941.addEventListener("click", mobileInternet) : __defers["$.__views.__alloyId941!click!mobileInternet"] = true;
    $.__views.__alloyId942 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId942"
    });
    $.__views.__alloyId941.add($.__views.__alloyId942);
    $.__views.__alloyId943 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId943"
    });
    $.__views.__alloyId942.add($.__views.__alloyId943);
    $.__views.__alloyId944 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId944"
    });
    $.__views.__alloyId941.add($.__views.__alloyId944);
    $.__views.__alloyId945 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId945"
    });
    $.__views.__alloyId928.add($.__views.__alloyId945);
    idd ? $.__views.__alloyId945.addEventListener("click", idd) : __defers["$.__views.__alloyId945!click!idd"] = true;
    $.__views.__alloyId946 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId946"
    });
    $.__views.__alloyId945.add($.__views.__alloyId946);
    $.__views.__alloyId947 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId947"
    });
    $.__views.__alloyId946.add($.__views.__alloyId947);
    $.__views.__alloyId948 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId948"
    });
    $.__views.__alloyId945.add($.__views.__alloyId948);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId929!click!prepaidPlus"] && $.__views.__alloyId929.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId933!click!prepaid"] && $.__views.__alloyId933.addEventListener("click", prepaid);
    __defers["$.__views.__alloyId937!click!penang"] && $.__views.__alloyId937.addEventListener("click", penang);
    __defers["$.__views.__alloyId941!click!mobileInternet"] && $.__views.__alloyId941.addEventListener("click", mobileInternet);
    __defers["$.__views.__alloyId945!click!idd"] && $.__views.__alloyId945.addEventListener("click", idd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;