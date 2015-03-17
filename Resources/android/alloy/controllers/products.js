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
    $.__views.__alloyId525 = Alloy.createController("_header", {
        id: "__alloyId525",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId525.setParent($.__views.products);
    $.__views.__alloyId526 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId526"
    });
    $.__views.products.add($.__views.__alloyId526);
    $.__views.__alloyId527 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId527"
    });
    $.__views.__alloyId526.add($.__views.__alloyId527);
    $.__views.__alloyId528 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId528"
    });
    $.__views.products.add($.__views.__alloyId528);
    $.__views.__alloyId529 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId529"
    });
    $.__views.__alloyId528.add($.__views.__alloyId529);
    prepaidPlus ? $.__views.__alloyId529.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId529!click!prepaidPlus"] = true;
    $.__views.__alloyId530 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId530"
    });
    $.__views.__alloyId529.add($.__views.__alloyId530);
    $.__views.__alloyId531 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId531"
    });
    $.__views.__alloyId530.add($.__views.__alloyId531);
    $.__views.__alloyId532 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId532"
    });
    $.__views.__alloyId529.add($.__views.__alloyId532);
    $.__views.__alloyId533 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId533"
    });
    $.__views.__alloyId528.add($.__views.__alloyId533);
    prepaidPlus ? $.__views.__alloyId533.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId533!click!prepaidPlus"] = true;
    $.__views.__alloyId534 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId534"
    });
    $.__views.__alloyId533.add($.__views.__alloyId534);
    $.__views.__alloyId535 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId535"
    });
    $.__views.__alloyId534.add($.__views.__alloyId535);
    $.__views.__alloyId536 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId536"
    });
    $.__views.__alloyId533.add($.__views.__alloyId536);
    $.__views.__alloyId537 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId537"
    });
    $.__views.__alloyId528.add($.__views.__alloyId537);
    prepaidPlus ? $.__views.__alloyId537.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId537!click!prepaidPlus"] = true;
    $.__views.__alloyId538 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId538"
    });
    $.__views.__alloyId537.add($.__views.__alloyId538);
    $.__views.__alloyId539 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId539"
    });
    $.__views.__alloyId538.add($.__views.__alloyId539);
    $.__views.__alloyId540 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId540"
    });
    $.__views.__alloyId537.add($.__views.__alloyId540);
    $.__views.__alloyId541 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId541"
    });
    $.__views.__alloyId528.add($.__views.__alloyId541);
    prepaidPlus ? $.__views.__alloyId541.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId541!click!prepaidPlus"] = true;
    $.__views.__alloyId542 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId542"
    });
    $.__views.__alloyId541.add($.__views.__alloyId542);
    $.__views.__alloyId543 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId543"
    });
    $.__views.__alloyId542.add($.__views.__alloyId543);
    $.__views.__alloyId544 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId544"
    });
    $.__views.__alloyId541.add($.__views.__alloyId544);
    $.__views.__alloyId545 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId545"
    });
    $.__views.__alloyId528.add($.__views.__alloyId545);
    prepaidPlus ? $.__views.__alloyId545.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId545!click!prepaidPlus"] = true;
    $.__views.__alloyId546 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId546"
    });
    $.__views.__alloyId545.add($.__views.__alloyId546);
    $.__views.__alloyId547 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId547"
    });
    $.__views.__alloyId546.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId548"
    });
    $.__views.__alloyId545.add($.__views.__alloyId548);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId529!click!prepaidPlus"] && $.__views.__alloyId529.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId533!click!prepaidPlus"] && $.__views.__alloyId533.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId537!click!prepaidPlus"] && $.__views.__alloyId537.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId541!click!prepaidPlus"] && $.__views.__alloyId541.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId545!click!prepaidPlus"] && $.__views.__alloyId545.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;