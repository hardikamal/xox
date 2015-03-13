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
    $.__views.__alloyId471 = Alloy.createController("_header", {
        id: "__alloyId471",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId471.setParent($.__views.products);
    $.__views.__alloyId472 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId472"
    });
    $.__views.products.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId473"
    });
    $.__views.__alloyId472.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId474"
    });
    $.__views.products.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId475"
    });
    $.__views.__alloyId474.add($.__views.__alloyId475);
    prepaidPlus ? $.__views.__alloyId475.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId475!click!prepaidPlus"] = true;
    $.__views.__alloyId476 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId476"
    });
    $.__views.__alloyId475.add($.__views.__alloyId476);
    $.__views.__alloyId477 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId477"
    });
    $.__views.__alloyId476.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId478"
    });
    $.__views.__alloyId475.add($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId479"
    });
    $.__views.__alloyId474.add($.__views.__alloyId479);
    prepaidPlus ? $.__views.__alloyId479.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId479!click!prepaidPlus"] = true;
    $.__views.__alloyId480 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId480"
    });
    $.__views.__alloyId479.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId481"
    });
    $.__views.__alloyId480.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId482"
    });
    $.__views.__alloyId479.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId483"
    });
    $.__views.__alloyId474.add($.__views.__alloyId483);
    prepaidPlus ? $.__views.__alloyId483.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId483!click!prepaidPlus"] = true;
    $.__views.__alloyId484 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId484"
    });
    $.__views.__alloyId483.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId485"
    });
    $.__views.__alloyId484.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId486"
    });
    $.__views.__alloyId483.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId487"
    });
    $.__views.__alloyId474.add($.__views.__alloyId487);
    prepaidPlus ? $.__views.__alloyId487.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId487!click!prepaidPlus"] = true;
    $.__views.__alloyId488 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId488"
    });
    $.__views.__alloyId487.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId489"
    });
    $.__views.__alloyId488.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId490"
    });
    $.__views.__alloyId487.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId491"
    });
    $.__views.__alloyId474.add($.__views.__alloyId491);
    prepaidPlus ? $.__views.__alloyId491.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId491!click!prepaidPlus"] = true;
    $.__views.__alloyId492 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId492"
    });
    $.__views.__alloyId491.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId493"
    });
    $.__views.__alloyId492.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId494"
    });
    $.__views.__alloyId491.add($.__views.__alloyId494);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId475!click!prepaidPlus"] && $.__views.__alloyId475.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId479!click!prepaidPlus"] && $.__views.__alloyId479.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId483!click!prepaidPlus"] && $.__views.__alloyId483.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId487!click!prepaidPlus"] && $.__views.__alloyId487.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId491!click!prepaidPlus"] && $.__views.__alloyId491.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;