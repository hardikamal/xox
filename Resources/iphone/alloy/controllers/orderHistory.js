function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function prepaidPlus() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "orderHistory";
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
    $.__views.orderHistory = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "orderHistory"
    });
    $.__views.orderHistory && $.addTopLevelView($.__views.orderHistory);
    $.__views.__alloyId109 = Alloy.createController("_header", {
        id: "__alloyId109",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId109.setParent($.__views.orderHistory);
    $.__views.__alloyId110 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId110"
    });
    $.__views.orderHistory.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createLabel({
        text: "Ordering History",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId112"
    });
    $.__views.orderHistory.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    prepaidPlus ? $.__views.__alloyId113.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId113!click!prepaidPlus"] = true;
    $.__views.__alloyId114 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId116"
    });
    $.__views.__alloyId114.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId117"
    });
    $.__views.__alloyId113.add($.__views.__alloyId117);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId117.add($.__views.arrow1);
    $.__views.__alloyId118 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId118"
    });
    $.__views.__alloyId112.add($.__views.__alloyId118);
    prepaidPlus ? $.__views.__alloyId118.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId118!click!prepaidPlus"] = true;
    $.__views.__alloyId119 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId121"
    });
    $.__views.__alloyId119.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId122"
    });
    $.__views.__alloyId118.add($.__views.__alloyId122);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId122.add($.__views.arrow2);
    $.__views.__alloyId123 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId123"
    });
    $.__views.__alloyId112.add($.__views.__alloyId123);
    prepaidPlus ? $.__views.__alloyId123.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId123!click!prepaidPlus"] = true;
    $.__views.__alloyId124 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId125"
    });
    $.__views.__alloyId124.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId126"
    });
    $.__views.__alloyId124.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId127"
    });
    $.__views.__alloyId123.add($.__views.__alloyId127);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId127.add($.__views.arrow3);
    $.__views.__alloyId128 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId128"
    });
    $.__views.__alloyId112.add($.__views.__alloyId128);
    prepaidPlus ? $.__views.__alloyId128.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId128!click!prepaidPlus"] = true;
    $.__views.__alloyId129 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId131"
    });
    $.__views.__alloyId129.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId132"
    });
    $.__views.__alloyId128.add($.__views.__alloyId132);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId132.add($.__views.arrow4);
    $.__views.__alloyId133 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId133"
    });
    $.__views.__alloyId112.add($.__views.__alloyId133);
    prepaidPlus ? $.__views.__alloyId133.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId133!click!prepaidPlus"] = true;
    $.__views.__alloyId134 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId136"
    });
    $.__views.__alloyId134.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId137"
    });
    $.__views.__alloyId133.add($.__views.__alloyId137);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId137.add($.__views.arrow5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId113!click!prepaidPlus"] && $.__views.__alloyId113.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId118!click!prepaidPlus"] && $.__views.__alloyId118.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId123!click!prepaidPlus"] && $.__views.__alloyId123.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId128!click!prepaidPlus"] && $.__views.__alloyId128.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId133!click!prepaidPlus"] && $.__views.__alloyId133.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;