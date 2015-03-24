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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
    $.__views.__alloyId1109 = Alloy.createController("_header", {
        id: "__alloyId1109",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId1109.setParent($.__views.mobileInternet);
    $.__views.__alloyId1110 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1166 = Alloy.createController("_header", {
        id: "__alloyId1166",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId1166.setParent($.__views.mobileInternet);
    $.__views.__alloyId1167 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1167"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1109 = Alloy.createController("_header", {
        id: "__alloyId1109",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId1109.setParent($.__views.mobileInternet);
    $.__views.__alloyId1110 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1110"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1110"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1168"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1168);
    $.__views.__alloyId1169 = Ti.UI.createImageView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1111"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createImageView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1111"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1169"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1169);
    back ? $.__views.__alloyId1169.addEventListener("click", back) : __defers["$.__views.__alloyId1169!click!back"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1112"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1112);
    back ? $.__views.__alloyId1112.addEventListener("click", back) : __defers["$.__views.__alloyId1112!click!back"] = true;
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1112"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1112);
    back ? $.__views.__alloyId1112.addEventListener("click", back) : __defers["$.__views.__alloyId1112!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1113 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1170 = Ti.UI.createView({
=======
    $.__views.__alloyId1113 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1113 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId1170"
    });
    $.__views.scrollView.add($.__views.__alloyId1170);
    $.__views.__alloyId1171 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1171"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
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
>>>>>>> origin/master
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1172"
    });
    $.__views.__alloyId1171.add($.__views.__alloyId1172);
    $.__views.__alloyId1173 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1173"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
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
>>>>>>> origin/master
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1117"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1117);
    $.__views.__alloyId1118 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1174"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createLabel({
=======
=======
>>>>>>> origin/master
        id: "__alloyId1117"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1117);
    $.__views.__alloyId1118 = Ti.UI.createLabel({
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1118"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1175"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1175);
    $.__views.__alloyId1176 = Ti.UI.createLabel({
=======
        id: "__alloyId1118"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1118"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId1176"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1177"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
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
>>>>>>> origin/master
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1121"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1121);
    $.__views.__alloyId1122 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1178"
    });
    $.__views.__alloyId1177.add($.__views.__alloyId1178);
    $.__views.__alloyId1179 = Ti.UI.createLabel({
=======
        id: "__alloyId1121"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1121);
    $.__views.__alloyId1122 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1179"
    });
    $.__views.__alloyId1177.add($.__views.__alloyId1179);
    $.__views.__alloyId1180 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1122"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1122);
    $.__views.__alloyId1123 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1122"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1122);
    $.__views.__alloyId1123 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1123"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1123);
    $.__views.__alloyId1124 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1124"
<<<<<<< HEAD
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1124);
    $.__views.__alloyId1125 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1180"
    });
    $.__views.__alloyId1177.add($.__views.__alloyId1180);
    $.__views.__alloyId1181 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1181"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1124);
    $.__views.__alloyId1125 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1125"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1125);
    $.__views.__alloyId1126 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1182"
    });
    $.__views.__alloyId1181.add($.__views.__alloyId1182);
    $.__views.__alloyId1183 = Ti.UI.createLabel({
=======
        id: "__alloyId1125"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1125);
    $.__views.__alloyId1126 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1126"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1126);
    $.__views.__alloyId1127 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1183"
    });
    $.__views.__alloyId1181.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createLabel({
=======
        id: "__alloyId1126"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1126);
    $.__views.__alloyId1127 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1126"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1126);
    $.__views.__alloyId1127 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1184"
    });
    $.__views.__alloyId1181.add($.__views.__alloyId1184);
    $.__views.__alloyId1185 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1185"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1129"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1129);
    $.__views.__alloyId1130 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1186"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1186);
    $.__views.__alloyId1187 = Ti.UI.createLabel({
=======
        id: "__alloyId1129"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1129);
    $.__views.__alloyId1130 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1187"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1130"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1130);
    $.__views.__alloyId1131 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1130"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1130);
    $.__views.__alloyId1131 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1188"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1188);
    $.__views.__alloyId1189 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1189"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1189);
    $.__views.__alloyId1190 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1133"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1133);
    $.__views.__alloyId1134 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1190"
    });
    $.__views.__alloyId1189.add($.__views.__alloyId1190);
    $.__views.__alloyId1191 = Ti.UI.createLabel({
=======
        id: "__alloyId1133"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1133);
    $.__views.__alloyId1134 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1134"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1134);
    $.__views.__alloyId1135 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1191"
    });
    $.__views.__alloyId1189.add($.__views.__alloyId1191);
    $.__views.__alloyId1192 = Ti.UI.createLabel({
=======
=======
>>>>>>> origin/master
        id: "__alloyId1134"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1134);
    $.__views.__alloyId1135 = Ti.UI.createLabel({
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1192"
    });
    $.__views.__alloyId1189.add($.__views.__alloyId1192);
    $.__views.__alloyId1193 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1193"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1193);
    $.__views.__alloyId1194 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1137"
    });
    $.__views.__alloyId1136.add($.__views.__alloyId1137);
    $.__views.__alloyId1138 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1194"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createLabel({
=======
        id: "__alloyId1137"
    });
    $.__views.__alloyId1136.add($.__views.__alloyId1137);
    $.__views.__alloyId1138 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1195"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1138"
    });
    $.__views.__alloyId1136.add($.__views.__alloyId1138);
    $.__views.__alloyId1139 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1196"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1196);
    $.__views.__alloyId1197 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1197"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1197);
    $.__views.__alloyId1198 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1141"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1198"
    });
    $.__views.__alloyId1197.add($.__views.__alloyId1198);
    $.__views.__alloyId1199 = Ti.UI.createLabel({
=======
        id: "__alloyId1141"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1199"
    });
    $.__views.__alloyId1197.add($.__views.__alloyId1199);
    $.__views.__alloyId1200 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1142"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1142);
    $.__views.__alloyId1143 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
    });
    $.__views.__alloyId1144.add($.__views.__alloyId1145);
=======
<<<<<<< HEAD
        id: "__alloyId1200"
    });
    $.__views.__alloyId1197.add($.__views.__alloyId1200);
    $.__views.__alloyId1201 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1201"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1201);
    subscribe ? $.__views.__alloyId1201.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1201!click!subscribe"] = true;
    $.__views.__alloyId1202 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1202"
    });
    $.__views.__alloyId1201.add($.__views.__alloyId1202);
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1144.add($.__views.__alloyId1145);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId1112!click!back"] && $.__views.__alloyId1112.addEventListener("click", back);
    __defers["$.__views.__alloyId1144!click!subscribe"] && $.__views.__alloyId1144.addEventListener("click", subscribe);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1169!click!back"] && $.__views.__alloyId1169.addEventListener("click", back);
    __defers["$.__views.__alloyId1201!click!subscribe"] && $.__views.__alloyId1201.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId1112!click!back"] && $.__views.__alloyId1112.addEventListener("click", back);
    __defers["$.__views.__alloyId1144!click!subscribe"] && $.__views.__alloyId1144.addEventListener("click", subscribe);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId1112!click!back"] && $.__views.__alloyId1112.addEventListener("click", back);
    __defers["$.__views.__alloyId1144!click!subscribe"] && $.__views.__alloyId1144.addEventListener("click", subscribe);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;