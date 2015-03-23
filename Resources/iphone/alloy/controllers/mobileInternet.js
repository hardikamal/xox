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
    $.__views.__alloyId991 = Alloy.createController("_header", {
        id: "__alloyId991",
=======
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
>>>>>>> origin/master
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId991.setParent($.__views.mobileInternet);
    $.__views.__alloyId992 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId992"
    });
<<<<<<< HEAD
    $.__views.mobileInternet.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createLabel({
=======
    $.__views.mobileInternet.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId993"
    });
    $.__views.__alloyId992.add($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createImageView({
=======
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
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId994"
    });
    $.__views.__alloyId992.add($.__views.__alloyId994);
    back ? $.__views.__alloyId994.addEventListener("click", back) : __defers["$.__views.__alloyId994!click!back"] = true;
=======
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
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId995 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1159 = Ti.UI.createView({
=======
    $.__views.__alloyId673 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId995"
=======
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
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId995);
    $.__views.__alloyId996 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId996"
    });
<<<<<<< HEAD
    $.__views.__alloyId995.add($.__views.__alloyId996);
    $.__views.__alloyId997 = Ti.UI.createLabel({
=======
    $.__views.__alloyId673.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId997"
=======
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
>>>>>>> origin/master
    });
    $.__views.__alloyId996.add($.__views.__alloyId997);
    $.__views.__alloyId998 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId998"
    });
<<<<<<< HEAD
    $.__views.__alloyId995.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createLabel({
=======
    $.__views.__alloyId673.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId999"
    });
    $.__views.__alloyId998.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1000"
    });
    $.__views.__alloyId998.add($.__views.__alloyId1000);
    $.__views.__alloyId1001 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1001"
=======
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
>>>>>>> origin/master
    });
    $.__views.__alloyId998.add($.__views.__alloyId1001);
    $.__views.__alloyId1002 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1002"
    });
<<<<<<< HEAD
    $.__views.__alloyId995.add($.__views.__alloyId1002);
    $.__views.__alloyId1003 = Ti.UI.createLabel({
=======
    $.__views.__alloyId673.add($.__views.__alloyId680);
    $.__views.__alloyId681 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1003"
    });
    $.__views.__alloyId1002.add($.__views.__alloyId1003);
    $.__views.__alloyId1004 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1004"
    });
    $.__views.__alloyId1002.add($.__views.__alloyId1004);
    $.__views.__alloyId1005 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1005"
=======
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
>>>>>>> origin/master
    });
    $.__views.__alloyId1002.add($.__views.__alloyId1005);
    $.__views.__alloyId1006 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1006"
    });
<<<<<<< HEAD
    $.__views.__alloyId995.add($.__views.__alloyId1006);
    $.__views.__alloyId1007 = Ti.UI.createLabel({
=======
    $.__views.__alloyId673.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1007"
    });
    $.__views.__alloyId1006.add($.__views.__alloyId1007);
    $.__views.__alloyId1008 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1008"
    });
    $.__views.__alloyId1006.add($.__views.__alloyId1008);
    $.__views.__alloyId1009 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1009"
=======
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
>>>>>>> origin/master
    });
    $.__views.__alloyId1006.add($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1010"
    });
<<<<<<< HEAD
    $.__views.__alloyId995.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createLabel({
=======
    $.__views.__alloyId673.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1011"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1011);
    $.__views.__alloyId1012 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1012"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1012);
    $.__views.__alloyId1013 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1013"
=======
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
>>>>>>> origin/master
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1013);
    $.__views.__alloyId1014 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1014"
    });
<<<<<<< HEAD
    $.__views.__alloyId995.add($.__views.__alloyId1014);
    $.__views.__alloyId1015 = Ti.UI.createLabel({
=======
    $.__views.__alloyId673.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1015"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1015);
    $.__views.__alloyId1016 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1016"
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1016);
    $.__views.__alloyId1017 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1017"
=======
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
>>>>>>> origin/master
    });
    $.__views.__alloyId1014.add($.__views.__alloyId1017);
    $.__views.__alloyId1018 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1018"
    });
<<<<<<< HEAD
    $.__views.__alloyId995.add($.__views.__alloyId1018);
    $.__views.__alloyId1019 = Ti.UI.createLabel({
=======
    $.__views.__alloyId673.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1019"
    });
    $.__views.__alloyId1018.add($.__views.__alloyId1019);
    $.__views.__alloyId1020 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1020"
    });
    $.__views.__alloyId1018.add($.__views.__alloyId1020);
    $.__views.__alloyId1021 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1021"
=======
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
>>>>>>> origin/master
    });
    $.__views.__alloyId1018.add($.__views.__alloyId1021);
    $.__views.__alloyId1022 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1022"
    });
<<<<<<< HEAD
    $.__views.__alloyId995.add($.__views.__alloyId1022);
    $.__views.__alloyId1023 = Ti.UI.createLabel({
=======
    $.__views.__alloyId673.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1023"
    });
    $.__views.__alloyId1022.add($.__views.__alloyId1023);
    $.__views.__alloyId1024 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1024"
    });
    $.__views.__alloyId1022.add($.__views.__alloyId1024);
    $.__views.__alloyId1025 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1025"
=======
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
>>>>>>> origin/master
    });
    $.__views.__alloyId1022.add($.__views.__alloyId1025);
    $.__views.__alloyId1026 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1026"
    });
    $.__views.mobileInternet.add($.__views.__alloyId1026);
    subscribe ? $.__views.__alloyId1026.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1026!click!subscribe"] = true;
    $.__views.__alloyId1027 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1027"
    });
<<<<<<< HEAD
    $.__views.__alloyId1026.add($.__views.__alloyId1027);
=======
    $.__views.__alloyId704.add($.__views.__alloyId705);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId994!click!back"] && $.__views.__alloyId994.addEventListener("click", back);
    __defers["$.__views.__alloyId1026!click!subscribe"] && $.__views.__alloyId1026.addEventListener("click", subscribe);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1158!click!back"] && $.__views.__alloyId1158.addEventListener("click", back);
    __defers["$.__views.__alloyId1190!click!subscribe"] && $.__views.__alloyId1190.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId672!click!back"] && $.__views.__alloyId672.addEventListener("click", back);
    __defers["$.__views.__alloyId704!click!subscribe"] && $.__views.__alloyId704.addEventListener("click", subscribe);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;