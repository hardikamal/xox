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
    $.__views.__alloyId1179 = Alloy.createController("_header", {
        id: "__alloyId1179",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId1179.setParent($.__views.mobileInternet);
    $.__views.__alloyId1180 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1180"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1180);
    $.__views.__alloyId1181 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1181"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1182"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1182);
    back ? $.__views.__alloyId1182.addEventListener("click", back) : __defers["$.__views.__alloyId1182!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
    $.__views.__alloyId1183 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1183"
    });
    $.__views.scrollView.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1184"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1184);
    $.__views.__alloyId1185 = Ti.UI.createLabel({
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1185"
    });
    $.__views.__alloyId1184.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1186"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1186);
    $.__views.__alloyId1187 = Ti.UI.createLabel({
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1187"
    });
    $.__views.__alloyId1186.add($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createLabel({
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1188"
    });
    $.__views.__alloyId1186.add($.__views.__alloyId1188);
    $.__views.__alloyId1189 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1189"
    });
    $.__views.__alloyId1186.add($.__views.__alloyId1189);
    $.__views.__alloyId1190 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1190"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1190);
    $.__views.__alloyId1191 = Ti.UI.createLabel({
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1191"
    });
    $.__views.__alloyId1190.add($.__views.__alloyId1191);
    $.__views.__alloyId1192 = Ti.UI.createLabel({
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1192"
    });
    $.__views.__alloyId1190.add($.__views.__alloyId1192);
    $.__views.__alloyId1193 = Ti.UI.createLabel({
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1193"
    });
    $.__views.__alloyId1190.add($.__views.__alloyId1193);
    $.__views.__alloyId1194 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1194"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createLabel({
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1195"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1196"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1196);
    $.__views.__alloyId1197 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1197"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1197);
    $.__views.__alloyId1198 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1198"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1198);
    $.__views.__alloyId1199 = Ti.UI.createLabel({
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1199"
    });
    $.__views.__alloyId1198.add($.__views.__alloyId1199);
    $.__views.__alloyId1200 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1200"
    });
    $.__views.__alloyId1198.add($.__views.__alloyId1200);
    $.__views.__alloyId1201 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1201"
    });
    $.__views.__alloyId1198.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1202"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1202);
    $.__views.__alloyId1203 = Ti.UI.createLabel({
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1203"
    });
    $.__views.__alloyId1202.add($.__views.__alloyId1203);
    $.__views.__alloyId1204 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1204"
    });
    $.__views.__alloyId1202.add($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1205"
    });
    $.__views.__alloyId1202.add($.__views.__alloyId1205);
    $.__views.__alloyId1206 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1206"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1206);
    $.__views.__alloyId1207 = Ti.UI.createLabel({
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1207"
    });
    $.__views.__alloyId1206.add($.__views.__alloyId1207);
    $.__views.__alloyId1208 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1208"
    });
    $.__views.__alloyId1206.add($.__views.__alloyId1208);
    $.__views.__alloyId1209 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1209"
    });
    $.__views.__alloyId1206.add($.__views.__alloyId1209);
    $.__views.__alloyId1210 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1210"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1210);
    $.__views.__alloyId1211 = Ti.UI.createLabel({
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1211"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1212"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1212);
    $.__views.__alloyId1213 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1213"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1213);
    $.__views.__alloyId1214 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1214"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1214);
    subscribe ? $.__views.__alloyId1214.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1214!click!subscribe"] = true;
    $.__views.__alloyId1215 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1215"
    });
    $.__views.__alloyId1214.add($.__views.__alloyId1215);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1182!click!back"] && $.__views.__alloyId1182.addEventListener("click", back);
    __defers["$.__views.__alloyId1214!click!subscribe"] && $.__views.__alloyId1214.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;