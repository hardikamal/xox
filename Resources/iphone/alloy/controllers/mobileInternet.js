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
    $.__views.__alloyId1155 = Alloy.createController("_header", {
        id: "__alloyId1155",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId1155.setParent($.__views.mobileInternet);
    $.__views.__alloyId1156 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1156"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1157"
    });
    $.__views.__alloyId1156.add($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1158"
    });
    $.__views.__alloyId1156.add($.__views.__alloyId1158);
    back ? $.__views.__alloyId1158.addEventListener("click", back) : __defers["$.__views.__alloyId1158!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
    $.__views.__alloyId1159 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1159"
    });
    $.__views.scrollView.add($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1160"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1160);
    $.__views.__alloyId1161 = Ti.UI.createLabel({
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1161"
    });
    $.__views.__alloyId1160.add($.__views.__alloyId1161);
    $.__views.__alloyId1162 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1162"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createLabel({
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1163"
    });
    $.__views.__alloyId1162.add($.__views.__alloyId1163);
    $.__views.__alloyId1164 = Ti.UI.createLabel({
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1164"
    });
    $.__views.__alloyId1162.add($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1165"
    });
    $.__views.__alloyId1162.add($.__views.__alloyId1165);
    $.__views.__alloyId1166 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1166"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createLabel({
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1167"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createLabel({
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1168"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1168);
    $.__views.__alloyId1169 = Ti.UI.createLabel({
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1169"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1169);
    $.__views.__alloyId1170 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1170"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1170);
    $.__views.__alloyId1171 = Ti.UI.createLabel({
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1171"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1172"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1172);
    $.__views.__alloyId1173 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1173"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1174"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createLabel({
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1175"
    });
    $.__views.__alloyId1174.add($.__views.__alloyId1175);
    $.__views.__alloyId1176 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1176"
    });
    $.__views.__alloyId1174.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1177"
    });
    $.__views.__alloyId1174.add($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1178"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1178);
    $.__views.__alloyId1179 = Ti.UI.createLabel({
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1179"
    });
    $.__views.__alloyId1178.add($.__views.__alloyId1179);
    $.__views.__alloyId1180 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1180"
    });
    $.__views.__alloyId1178.add($.__views.__alloyId1180);
    $.__views.__alloyId1181 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1181"
    });
    $.__views.__alloyId1178.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1182"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1182);
    $.__views.__alloyId1183 = Ti.UI.createLabel({
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1183"
    });
    $.__views.__alloyId1182.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId1184"
    });
    $.__views.__alloyId1182.add($.__views.__alloyId1184);
    $.__views.__alloyId1185 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1185"
    });
    $.__views.__alloyId1182.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1186"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1186);
    $.__views.__alloyId1187 = Ti.UI.createLabel({
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1187"
    });
    $.__views.__alloyId1186.add($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createLabel({
        text: "30 days",
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
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1190"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1190);
    subscribe ? $.__views.__alloyId1190.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1190!click!subscribe"] = true;
    $.__views.__alloyId1191 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1191"
    });
    $.__views.__alloyId1190.add($.__views.__alloyId1191);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1158!click!back"] && $.__views.__alloyId1158.addEventListener("click", back);
    __defers["$.__views.__alloyId1190!click!subscribe"] && $.__views.__alloyId1190.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;