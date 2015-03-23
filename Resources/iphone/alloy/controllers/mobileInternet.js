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
=======
    $.__views.__alloyId669 = Alloy.createController("_header", {
        id: "__alloyId669",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId669.setParent($.__views.mobileInternet);
    $.__views.__alloyId670 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId670"
    });
    $.__views.mobileInternet.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1157"
    });
    $.__views.__alloyId1156.add($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createImageView({
=======
        id: "__alloyId671"
    });
    $.__views.__alloyId670.add($.__views.__alloyId671);
    $.__views.__alloyId672 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1158"
    });
    $.__views.__alloyId1156.add($.__views.__alloyId1158);
    back ? $.__views.__alloyId1158.addEventListener("click", back) : __defers["$.__views.__alloyId1158!click!back"] = true;
=======
        id: "__alloyId672"
    });
    $.__views.__alloyId670.add($.__views.__alloyId672);
    back ? $.__views.__alloyId672.addEventListener("click", back) : __defers["$.__views.__alloyId672!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1159 = Ti.UI.createView({
=======
    $.__views.__alloyId673 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
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
=======
        id: "__alloyId673"
    });
    $.__views.scrollView.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId674"
    });
    $.__views.__alloyId673.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId675"
    });
    $.__views.__alloyId674.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId676"
    });
    $.__views.__alloyId673.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1163"
    });
    $.__views.__alloyId1162.add($.__views.__alloyId1163);
    $.__views.__alloyId1164 = Ti.UI.createLabel({
=======
        id: "__alloyId677"
    });
    $.__views.__alloyId676.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1164"
    });
    $.__views.__alloyId1162.add($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createLabel({
=======
        id: "__alloyId678"
    });
    $.__views.__alloyId676.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
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
=======
        id: "__alloyId679"
    });
    $.__views.__alloyId676.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId680"
    });
    $.__views.__alloyId673.add($.__views.__alloyId680);
    $.__views.__alloyId681 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1167"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createLabel({
=======
        id: "__alloyId681"
    });
    $.__views.__alloyId680.add($.__views.__alloyId681);
    $.__views.__alloyId682 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1168"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1168);
    $.__views.__alloyId1169 = Ti.UI.createLabel({
=======
        id: "__alloyId682"
    });
    $.__views.__alloyId680.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
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
=======
        id: "__alloyId683"
    });
    $.__views.__alloyId680.add($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId684"
    });
    $.__views.__alloyId673.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1171"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createLabel({
=======
        id: "__alloyId685"
    });
    $.__views.__alloyId684.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1172"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1172);
    $.__views.__alloyId1173 = Ti.UI.createLabel({
=======
        id: "__alloyId686"
    });
    $.__views.__alloyId684.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
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
=======
        id: "__alloyId687"
    });
    $.__views.__alloyId684.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId688"
    });
    $.__views.__alloyId673.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1175"
    });
    $.__views.__alloyId1174.add($.__views.__alloyId1175);
    $.__views.__alloyId1176 = Ti.UI.createLabel({
=======
        id: "__alloyId689"
    });
    $.__views.__alloyId688.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1176"
    });
    $.__views.__alloyId1174.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createLabel({
=======
        id: "__alloyId690"
    });
    $.__views.__alloyId688.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
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
=======
        id: "__alloyId691"
    });
    $.__views.__alloyId688.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId692"
    });
    $.__views.__alloyId673.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1179"
    });
    $.__views.__alloyId1178.add($.__views.__alloyId1179);
    $.__views.__alloyId1180 = Ti.UI.createLabel({
=======
        id: "__alloyId693"
    });
    $.__views.__alloyId692.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1180"
    });
    $.__views.__alloyId1178.add($.__views.__alloyId1180);
    $.__views.__alloyId1181 = Ti.UI.createLabel({
=======
        id: "__alloyId694"
    });
    $.__views.__alloyId692.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
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
=======
        id: "__alloyId695"
    });
    $.__views.__alloyId692.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId696"
    });
    $.__views.__alloyId673.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1183"
    });
    $.__views.__alloyId1182.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createLabel({
=======
        id: "__alloyId697"
    });
    $.__views.__alloyId696.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1184"
    });
    $.__views.__alloyId1182.add($.__views.__alloyId1184);
    $.__views.__alloyId1185 = Ti.UI.createLabel({
=======
        id: "__alloyId698"
    });
    $.__views.__alloyId696.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
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
=======
        id: "__alloyId699"
    });
    $.__views.__alloyId696.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId700"
    });
    $.__views.__alloyId673.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1187"
    });
    $.__views.__alloyId1186.add($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createLabel({
=======
        id: "__alloyId701"
    });
    $.__views.__alloyId700.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1188"
    });
    $.__views.__alloyId1186.add($.__views.__alloyId1188);
    $.__views.__alloyId1189 = Ti.UI.createLabel({
=======
        id: "__alloyId702"
    });
    $.__views.__alloyId700.add($.__views.__alloyId702);
    $.__views.__alloyId703 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
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
=======
        id: "__alloyId703"
    });
    $.__views.__alloyId700.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId704"
    });
    $.__views.mobileInternet.add($.__views.__alloyId704);
    subscribe ? $.__views.__alloyId704.addEventListener("click", subscribe) : __defers["$.__views.__alloyId704!click!subscribe"] = true;
    $.__views.__alloyId705 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId705"
    });
    $.__views.__alloyId704.add($.__views.__alloyId705);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1158!click!back"] && $.__views.__alloyId1158.addEventListener("click", back);
    __defers["$.__views.__alloyId1190!click!subscribe"] && $.__views.__alloyId1190.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId672!click!back"] && $.__views.__alloyId672.addEventListener("click", back);
    __defers["$.__views.__alloyId704!click!subscribe"] && $.__views.__alloyId704.addEventListener("click", subscribe);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;