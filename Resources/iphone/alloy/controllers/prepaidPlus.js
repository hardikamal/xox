function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function back() {
        DRAWER.navigation("products", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPlus";
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
    $.__views.prepaidPlus = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPlus"
    });
    $.__views.prepaidPlus && $.addTopLevelView($.__views.prepaidPlus);
    $.__views.__alloyId99 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId99"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        left: "10",
        backgroundColor: "white",
        width: "40",
        height: "40",
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    back ? $.__views.__alloyId100.addEventListener("click", back) : __defers["$.__views.__alloyId100!click!back"] = true;
    $.__views.__alloyId101 = Ti.UI.createLabel({
        text: "XOX",
        color: "white",
        id: "__alloyId101"
    });
    $.__views.__alloyId99.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId102"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId105"
    });
    $.__views.__alloyId103.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        backgroundColor: "black",
        width: "40",
        height: "40",
        right: "10",
        id: "__alloyId106"
    });
    $.__views.__alloyId102.add($.__views.__alloyId106);
    back ? $.__views.__alloyId106.addEventListener("click", back) : __defers["$.__views.__alloyId106!click!back"] = true;
    $.__views.__alloyId107 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%",
        id: "__alloyId107"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        left: "10",
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId111"
    });
    $.__views.__alloyId108.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId113"
    });
    $.__views.__alloyId111.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId114"
    });
    $.__views.__alloyId108.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        color: "black",
        id: "__alloyId116"
    });
    $.__views.__alloyId114.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId117"
    });
    $.__views.__alloyId107.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        left: "10",
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId120"
    });
    $.__views.__alloyId117.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId122"
    });
    $.__views.__alloyId120.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId123"
    });
    $.__views.__alloyId117.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId125"
    });
    $.__views.__alloyId123.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId126"
    });
    $.__views.__alloyId117.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId128"
    });
    $.__views.__alloyId126.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId129"
    });
    $.__views.__alloyId117.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId131"
    });
    $.__views.__alloyId129.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId132"
    });
    $.__views.__alloyId107.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId133"
    });
    $.__views.__alloyId132.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        left: "10",
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId135"
    });
    $.__views.__alloyId132.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId136"
    });
    $.__views.__alloyId135.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId137"
    });
    $.__views.__alloyId135.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId138"
    });
    $.__views.__alloyId132.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId139"
    });
    $.__views.__alloyId138.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId140"
    });
    $.__views.__alloyId138.add($.__views.__alloyId140);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId100!click!back"] && $.__views.__alloyId100.addEventListener("click", back);
    __defers["$.__views.__alloyId106!click!back"] && $.__views.__alloyId106.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;