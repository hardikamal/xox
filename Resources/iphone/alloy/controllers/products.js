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
    $.__views.__alloyId555 = Alloy.createController("_header", {
        id: "__alloyId555",
        __parentSymbol: $.__views.products
    });
    $.__views.__alloyId555.setParent($.__views.products);
    $.__views.__alloyId556 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#FBB62D",
        id: "__alloyId556"
    });
    $.__views.products.add($.__views.__alloyId556);
    $.__views.__alloyId557 = Ti.UI.createLabel({
        text: "Products",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId557"
    });
    $.__views.__alloyId556.add($.__views.__alloyId557);
    $.__views.__alloyId558 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId558"
    });
    $.__views.products.add($.__views.__alloyId558);
    $.__views.__alloyId559 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId559"
    });
    $.__views.__alloyId558.add($.__views.__alloyId559);
    prepaidPlus ? $.__views.__alloyId559.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId559!click!prepaidPlus"] = true;
    $.__views.__alloyId560 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId560"
    });
    $.__views.__alloyId559.add($.__views.__alloyId560);
    $.__views.__alloyId561 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId561"
    });
    $.__views.__alloyId560.add($.__views.__alloyId561);
    $.__views.__alloyId562 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId562"
    });
    $.__views.__alloyId559.add($.__views.__alloyId562);
    $.__views.__alloyId563 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId563"
    });
    $.__views.__alloyId558.add($.__views.__alloyId563);
    prepaidPlus ? $.__views.__alloyId563.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId563!click!prepaidPlus"] = true;
    $.__views.__alloyId564 = Ti.UI.createView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId564"
    });
    $.__views.__alloyId563.add($.__views.__alloyId564);
    $.__views.__alloyId565 = Ti.UI.createImageView({
        image: "/images/products_02.png",
        height: "55",
        width: "65",
        id: "__alloyId565"
    });
    $.__views.__alloyId564.add($.__views.__alloyId565);
    $.__views.__alloyId566 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId566"
    });
    $.__views.__alloyId563.add($.__views.__alloyId566);
    $.__views.__alloyId567 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId567"
    });
    $.__views.__alloyId558.add($.__views.__alloyId567);
    prepaidPlus ? $.__views.__alloyId567.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId567!click!prepaidPlus"] = true;
    $.__views.__alloyId568 = Ti.UI.createView({
        backgroundColor: "#134D5B",
        height: "100%",
        width: "25%",
        id: "__alloyId568"
    });
    $.__views.__alloyId567.add($.__views.__alloyId568);
    $.__views.__alloyId569 = Ti.UI.createImageView({
        image: "/images/products_03.png",
        height: "38",
        width: "38",
        id: "__alloyId569"
    });
    $.__views.__alloyId568.add($.__views.__alloyId569);
    $.__views.__alloyId570 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId570"
    });
    $.__views.__alloyId567.add($.__views.__alloyId570);
    $.__views.__alloyId571 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#28404C",
        id: "__alloyId571"
    });
    $.__views.__alloyId558.add($.__views.__alloyId571);
    prepaidPlus ? $.__views.__alloyId571.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId571!click!prepaidPlus"] = true;
    $.__views.__alloyId572 = Ti.UI.createView({
        backgroundColor: "#1A2D34",
        height: "100%",
        width: "25%",
        id: "__alloyId572"
    });
    $.__views.__alloyId571.add($.__views.__alloyId572);
    $.__views.__alloyId573 = Ti.UI.createImageView({
        image: "/images/products_04.png",
        height: "50",
        width: "35",
        id: "__alloyId573"
    });
    $.__views.__alloyId572.add($.__views.__alloyId573);
    $.__views.__alloyId574 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId574"
    });
    $.__views.__alloyId571.add($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#646461",
        id: "__alloyId575"
    });
    $.__views.__alloyId558.add($.__views.__alloyId575);
    prepaidPlus ? $.__views.__alloyId575.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId575!click!prepaidPlus"] = true;
    $.__views.__alloyId576 = Ti.UI.createView({
        backgroundColor: "#454543",
        height: "100%",
        width: "25%",
        id: "__alloyId576"
    });
    $.__views.__alloyId575.add($.__views.__alloyId576);
    $.__views.__alloyId577 = Ti.UI.createImageView({
        image: "/images/products_05.png",
        height: "41",
        width: "41",
        id: "__alloyId577"
    });
    $.__views.__alloyId576.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createLabel({
        text: "IDD",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId578"
    });
    $.__views.__alloyId575.add($.__views.__alloyId578);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId559!click!prepaidPlus"] && $.__views.__alloyId559.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId563!click!prepaidPlus"] && $.__views.__alloyId563.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId567!click!prepaidPlus"] && $.__views.__alloyId567.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId571!click!prepaidPlus"] && $.__views.__alloyId571.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId575!click!prepaidPlus"] && $.__views.__alloyId575.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;