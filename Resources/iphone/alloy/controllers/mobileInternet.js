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
        DRAWER.navigation("products", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mobileInternet";
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
    $.__views.mobileInternet = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "mobileInternet"
    });
    $.__views.mobileInternet && $.addTopLevelView($.__views.mobileInternet);
    $.__views.__alloyId1109 = Alloy.createController("_header", {
        id: "__alloyId1109",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId1109.setParent($.__views.mobileInternet);
    $.__views.__alloyId1110 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1110"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1111"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1112"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1112);
    back ? $.__views.__alloyId1112.addEventListener("click", back) : __defers["$.__views.__alloyId1112!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
    $.__views.__alloyId1113 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1113"
    });
    $.__views.scrollView.add($.__views.__alloyId1113);
    $.__views.__alloyId1114 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1114"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1114);
    $.__views.__alloyId1115 = Ti.UI.createLabel({
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1115"
    });
    $.__views.__alloyId1114.add($.__views.__alloyId1115);
    $.__views.__alloyId1116 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1116"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1116);
    $.__views.__alloyId1117 = Ti.UI.createLabel({
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1117"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1117);
    $.__views.__alloyId1118 = Ti.UI.createLabel({
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1118"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1119"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1119);
    $.__views.__alloyId1120 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1120"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1120);
    $.__views.__alloyId1121 = Ti.UI.createLabel({
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1121"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1121);
    $.__views.__alloyId1122 = Ti.UI.createLabel({
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1122"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1122);
    $.__views.__alloyId1123 = Ti.UI.createLabel({
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1123"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1123);
    $.__views.__alloyId1124 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1124"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1124);
    $.__views.__alloyId1125 = Ti.UI.createLabel({
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1125"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1125);
    $.__views.__alloyId1126 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1126"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1126);
    $.__views.__alloyId1127 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1127"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1127);
    $.__views.__alloyId1128 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1128"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1128);
    $.__views.__alloyId1129 = Ti.UI.createLabel({
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1129"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1129);
    $.__views.__alloyId1130 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1130"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1130);
    $.__views.__alloyId1131 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1131"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1131);
    $.__views.__alloyId1132 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1132"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1132);
    $.__views.__alloyId1133 = Ti.UI.createLabel({
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1133"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1133);
    $.__views.__alloyId1134 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1134"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1134);
    $.__views.__alloyId1135 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1135"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1135);
    $.__views.__alloyId1136 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1136"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1136);
    $.__views.__alloyId1137 = Ti.UI.createLabel({
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1137"
    });
    $.__views.__alloyId1136.add($.__views.__alloyId1137);
    $.__views.__alloyId1138 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1138"
    });
    $.__views.__alloyId1136.add($.__views.__alloyId1138);
    $.__views.__alloyId1139 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1139"
    });
    $.__views.__alloyId1136.add($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1140"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1140);
    $.__views.__alloyId1141 = Ti.UI.createLabel({
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1141"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1142"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1142);
    $.__views.__alloyId1143 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1143"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1143);
    $.__views.__alloyId1144 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1144"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1144);
    subscribe ? $.__views.__alloyId1144.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1144!click!subscribe"] = true;
    $.__views.__alloyId1145 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1145"
    });
    $.__views.__alloyId1144.add($.__views.__alloyId1145);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1112!click!back"] && $.__views.__alloyId1112.addEventListener("click", back);
    __defers["$.__views.__alloyId1144!click!subscribe"] && $.__views.__alloyId1144.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;