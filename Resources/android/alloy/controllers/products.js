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
<<<<<<< HEAD
    $.__views.__alloyId686 = Alloy.createController("_header", {
        id: "__alloyId686",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId686.setParent($.__views.products);
    $.__views.__alloyId687 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId687"
    });
    $.__views.products.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId688"
    });
    $.__views.__alloyId687.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId689"
    });
    $.__views.products.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId690"
    });
    $.__views.__alloyId689.add($.__views.__alloyId690);
    prepaidPlus ? $.__views.__alloyId690.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId690!click!prepaidPlus"] = true;
    $.__views.__alloyId691 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId691"
    });
    $.__views.__alloyId690.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId692"
    });
    $.__views.__alloyId691.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId693"
    });
    $.__views.__alloyId690.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId694"
    });
    $.__views.__alloyId689.add($.__views.__alloyId694);
    prepaidPlus ? $.__views.__alloyId694.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId694!click!prepaidPlus"] = true;
    $.__views.__alloyId695 = Ti.UI.createView({
        backgroundColor: "#358790",
=======
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
>>>>>>> origin/master
        height: "100%",
        width: "25%",
        id: "__alloyId695"
    });
<<<<<<< HEAD
    $.__views.__alloyId694.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId696"
    });
    $.__views.__alloyId695.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
        text: "PREPAID",
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId697"
    });
    $.__views.__alloyId694.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
<<<<<<< HEAD
        backgroundColor: "#1C6D83",
        id: "__alloyId698"
    });
    $.__views.__alloyId689.add($.__views.__alloyId698);
    prepaidPlus ? $.__views.__alloyId698.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId698!click!prepaidPlus"] = true;
    $.__views.__alloyId699 = Ti.UI.createView({
        backgroundColor: "#134D5B",
=======
        backgroundColor: "#4CC4D2",
        id: "__alloyId533"
    });
    $.__views.__alloyId528.add($.__views.__alloyId533);
    prepaidPlus ? $.__views.__alloyId533.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId533!click!prepaidPlus"] = true;
    $.__views.__alloyId534 = Ti.UI.createView({
        backgroundColor: "#358790",
>>>>>>> origin/master
        height: "100%",
        width: "25%",
        id: "__alloyId699"
    });
<<<<<<< HEAD
    $.__views.__alloyId698.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId700"
    });
    $.__views.__alloyId699.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
        text: "PENANG #1758",
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId701"
    });
    $.__views.__alloyId698.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
<<<<<<< HEAD
        backgroundColor: "#28404C",
        id: "__alloyId702"
    });
    $.__views.__alloyId689.add($.__views.__alloyId702);
    prepaidPlus ? $.__views.__alloyId702.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId702!click!prepaidPlus"] = true;
    $.__views.__alloyId703 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
=======
        backgroundColor: "#1C6D83",
        id: "__alloyId537"
    });
    $.__views.__alloyId528.add($.__views.__alloyId537);
    prepaidPlus ? $.__views.__alloyId537.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId537!click!prepaidPlus"] = true;
    $.__views.__alloyId538 = Ti.UI.createView({
        backgroundColor: "#134D5B",
>>>>>>> origin/master
        height: "100%",
        width: "25%",
        id: "__alloyId703"
    });
<<<<<<< HEAD
    $.__views.__alloyId702.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId704"
    });
    $.__views.__alloyId703.add($.__views.__alloyId704);
    $.__views.__alloyId705 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId705"
    });
    $.__views.__alloyId702.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
<<<<<<< HEAD
        backgroundColor: "#646461",
        id: "__alloyId706"
    });
    $.__views.__alloyId689.add($.__views.__alloyId706);
    prepaidPlus ? $.__views.__alloyId706.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId706!click!prepaidPlus"] = true;
    $.__views.__alloyId707 = Ti.UI.createView({
        backgroundColor: "#454543",
=======
        backgroundColor: "#28404C",
        id: "__alloyId541"
    });
    $.__views.__alloyId528.add($.__views.__alloyId541);
    prepaidPlus ? $.__views.__alloyId541.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId541!click!prepaidPlus"] = true;
    $.__views.__alloyId542 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
>>>>>>> origin/master
        height: "100%",
        width: "25%",
        id: "__alloyId707"
    });
<<<<<<< HEAD
    $.__views.__alloyId706.add($.__views.__alloyId707);
    $.__views.__alloyId708 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId708"
    });
    $.__views.__alloyId707.add($.__views.__alloyId708);
    $.__views.__alloyId709 = Ti.UI.createLabel({
        text: "IDD",
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId709"
    });
<<<<<<< HEAD
    $.__views.__alloyId706.add($.__views.__alloyId709);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId690!click!prepaidPlus"] && $.__views.__alloyId690.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId694!click!prepaidPlus"] && $.__views.__alloyId694.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId698!click!prepaidPlus"] && $.__views.__alloyId698.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId702!click!prepaidPlus"] && $.__views.__alloyId702.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId706!click!prepaidPlus"] && $.__views.__alloyId706.addEventListener("click", prepaidPlus);
=======
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
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;