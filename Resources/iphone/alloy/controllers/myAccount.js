function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function faq() {
        DRAWER.navigation("faq", 1);
    }
    function accDetail() {
        DRAWER.navigation("accountDetails", 1);
    }
    function subline() {
        DRAWER.navigation("subline", 1);
    }
    function vas() {
        DRAWER.navigation("vas", 1);
    }
    function loyalty() {
        DRAWER.navigation("loyalty", 1);
    }
    function profile() {
        DRAWER.navigation("profile", 1);
    }
    function report() {
        DRAWER.navigation("report", 1);
    }
    function orderingHistory() {
        DRAWER.navigation("orderHistory", 1);
    }
    function editPhoto() {
        console.log("editPhoto");
        $.photo.zIndex = 2;
    }
    function makePayment() {
        console.log("makePayment");
        $.payment.zIndex = 2;
    }
    function close() {
        console.log("close");
        $.photo.zIndex = 0;
    }
    function closepayment() {
        console.log("closepayment");
        $.payment.zIndex = 0;
    }
    function paymentPostpaid() {
        DRAWER.navigation("payment2", 1);
    }
    function paymentPrepaid() {
        DRAWER.navigation("payment3", 1);
    }
    function gallery() {
        console.log("gallery");
        $.photo.zIndex = 0;
    }
    function facebook() {
        console.log("facebook");
        $.photo.zIndex = 0;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "myAccount";
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
    $.__views.myAccount = Ti.UI.createView({
        backgroundColor: "black",
        layout: "composite",
        id: "myAccount"
    });
    $.__views.myAccount && $.addTopLevelView($.__views.myAccount);
    $.__views.__alloyId1146 = Alloy.createController("_header", {
        id: "__alloyId1146",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId1146.setParent($.__views.myAccount);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
    $.__views.__alloyId1147 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId1147"
    });
    $.__views.photo.add($.__views.__alloyId1147);
    $.__views.__alloyId1148 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1148"
    });
    $.__views.__alloyId1147.add($.__views.__alloyId1148);
    $.__views.__alloyId1149 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1149"
    });
    $.__views.__alloyId1148.add($.__views.__alloyId1149);
    $.__views.__alloyId1150 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1150"
    });
    $.__views.__alloyId1148.add($.__views.__alloyId1150);
    close ? $.__views.__alloyId1150.addEventListener("click", close) : __defers["$.__views.__alloyId1150!click!close"] = true;
    $.__views.__alloyId1151 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1151"
    });
    $.__views.__alloyId1147.add($.__views.__alloyId1151);
    gallery ? $.__views.__alloyId1151.addEventListener("click", gallery) : __defers["$.__views.__alloyId1151!click!gallery"] = true;
    $.__views.__alloyId1152 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1152"
    });
    $.__views.__alloyId1151.add($.__views.__alloyId1152);
    $.__views.__alloyId1153 = Ti.UI.createImageView({
        backgroundColor: "#66FFFF",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/gallery_icon.png",
        id: "__alloyId1153"
    });
    $.__views.__alloyId1152.add($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createView({
        id: "__alloyId1154"
    });
    $.__views.__alloyId1151.add($.__views.__alloyId1154);
    $.__views.__alloyId1155 = Ti.UI.createLabel({
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1155"
    });
    $.__views.__alloyId1154.add($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1156"
    });
    $.__views.__alloyId1147.add($.__views.__alloyId1156);
    facebook ? $.__views.__alloyId1156.addEventListener("click", facebook) : __defers["$.__views.__alloyId1156!click!facebook"] = true;
    $.__views.__alloyId1157 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1157"
    });
    $.__views.__alloyId1156.add($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/facebook_icon.png",
        id: "__alloyId1158"
    });
    $.__views.__alloyId1157.add($.__views.__alloyId1158);
    $.__views.__alloyId1159 = Ti.UI.createView({
        id: "__alloyId1159"
    });
    $.__views.__alloyId1156.add($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createLabel({
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1160"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1160);
    $.__views.payment = Ti.UI.createView({
        id: "payment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.payment);
    $.__views.__alloyId1161 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId1161"
    });
    $.__views.payment.add($.__views.__alloyId1161);
    $.__views.__alloyId1162 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1162"
    });
    $.__views.__alloyId1161.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1163"
    });
    $.__views.__alloyId1162.add($.__views.__alloyId1163);
    $.__views.__alloyId1164 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1164"
    });
    $.__views.__alloyId1162.add($.__views.__alloyId1164);
    closepayment ? $.__views.__alloyId1164.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1164!click!closepayment"] = true;
    $.__views.__alloyId1165 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1165"
    });
    $.__views.__alloyId1161.add($.__views.__alloyId1165);
    paymentPostpaid ? $.__views.__alloyId1165.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1165!click!paymentPostpaid"] = true;
    $.__views.__alloyId1166 = Ti.UI.createView({
        id: "__alloyId1166"
    });
    $.__views.__alloyId1165.add($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1167"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1168"
    });
    $.__views.__alloyId1161.add($.__views.__alloyId1168);
    paymentPrepaid ? $.__views.__alloyId1168.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1168!click!paymentPrepaid"] = true;
    $.__views.__alloyId1169 = Ti.UI.createView({
        id: "__alloyId1169"
    });
    $.__views.__alloyId1168.add($.__views.__alloyId1169);
    $.__views.__alloyId1170 = Ti.UI.createLabel({
        text: "Prepaid TopUp",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1170"
    });
    $.__views.__alloyId1169.add($.__views.__alloyId1170);
    $.__views.__alloyId1171 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
        id: "__alloyId1171"
    });
    $.__views.myAccount.add($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId1172"
    });
    $.__views.__alloyId1171.add($.__views.__alloyId1172);
    $.__views.__alloyId1173 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1173"
    });
    $.__views.__alloyId1172.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId1174"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId1175"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1175);
    $.__views.__alloyId1176 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId1176"
    });
    $.__views.__alloyId1172.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId1177"
    });
    $.__views.__alloyId1172.add($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
        id: "__alloyId1178"
    });
    $.__views.__alloyId1177.add($.__views.__alloyId1178);
    editPhoto ? $.__views.__alloyId1178.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1178!click!editPhoto"] = true;
    $.__views.__alloyId1179 = Ti.UI.createImageView({
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
        id: "__alloyId1179"
    });
    $.__views.__alloyId1177.add($.__views.__alloyId1179);
    editPhoto ? $.__views.__alloyId1179.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1179!click!editPhoto"] = true;
    $.__views.__alloyId1180 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1180"
    });
    $.__views.__alloyId1171.add($.__views.__alloyId1180);
    $.__views.__alloyId1181 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId1181"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1182"
    });
    $.__views.__alloyId1181.add($.__views.__alloyId1182);
    $.__views.__alloyId1183 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId1183"
    });
    $.__views.__alloyId1182.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId1184"
    });
    $.__views.__alloyId1182.add($.__views.__alloyId1184);
    $.__views.__alloyId1185 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId1185"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1186"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1186);
    $.__views.__alloyId1187 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId1187"
    });
    $.__views.__alloyId1186.add($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId1188"
    });
    $.__views.__alloyId1186.add($.__views.__alloyId1188);
    $.__views.postpaid = Ti.UI.createScrollView({
        id: "postpaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1171.add($.__views.postpaid);
    $.__views.__alloyId1189 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1189"
    });
    $.__views.postpaid.add($.__views.__alloyId1189);
    $.__views.__alloyId1190 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1190"
    });
    $.__views.__alloyId1189.add($.__views.__alloyId1190);
    $.__views.__alloyId1191 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1191"
    });
    $.__views.__alloyId1190.add($.__views.__alloyId1191);
    accDetail ? $.__views.__alloyId1191.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1191!click!accDetail"] = true;
    $.__views.__alloyId1192 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1192"
    });
    $.__views.__alloyId1189.add($.__views.__alloyId1192);
    $.__views.__alloyId1193 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1193"
    });
    $.__views.__alloyId1192.add($.__views.__alloyId1193);
    profile ? $.__views.__alloyId1193.addEventListener("click", profile) : __defers["$.__views.__alloyId1193!click!profile"] = true;
    $.__views.__alloyId1194 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1194"
    });
    $.__views.__alloyId1189.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1195"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1195);
    makePayment ? $.__views.__alloyId1195.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1195!click!makePayment"] = true;
    $.__views.__alloyId1196 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1196"
    });
    $.__views.postpaid.add($.__views.__alloyId1196);
    $.__views.__alloyId1197 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1197"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1197);
    $.__views.__alloyId1198 = Ti.UI.createLabel({
        text: "Postpaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1198"
    });
    $.__views.__alloyId1197.add($.__views.__alloyId1198);
    accDetail ? $.__views.__alloyId1198.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1198!click!accDetail"] = true;
    $.__views.__alloyId1199 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1199"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1199);
    $.__views.__alloyId1200 = Ti.UI.createLabel({
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1200"
    });
    $.__views.__alloyId1199.add($.__views.__alloyId1200);
    profile ? $.__views.__alloyId1200.addEventListener("click", profile) : __defers["$.__views.__alloyId1200!click!profile"] = true;
    $.__views.__alloyId1201 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1201"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1202"
    });
    $.__views.__alloyId1201.add($.__views.__alloyId1202);
    makePayment ? $.__views.__alloyId1202.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1202!click!makePayment"] = true;
    $.__views.__alloyId1203 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1203"
    });
    $.__views.postpaid.add($.__views.__alloyId1203);
    $.__views.__alloyId1204 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1204"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1205"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1205);
    vas ? $.__views.__alloyId1205.addEventListener("click", vas) : __defers["$.__views.__alloyId1205!click!vas"] = true;
    $.__views.__alloyId1206 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1206"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1206);
    $.__views.__alloyId1207 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1207"
    });
    $.__views.__alloyId1206.add($.__views.__alloyId1207);
    subline ? $.__views.__alloyId1207.addEventListener("click", subline) : __defers["$.__views.__alloyId1207!click!subline"] = true;
    $.__views.__alloyId1208 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1208"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1208);
    $.__views.__alloyId1209 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1209"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1209);
    subline ? $.__views.__alloyId1209.addEventListener("click", subline) : __defers["$.__views.__alloyId1209!click!subline"] = true;
    $.__views.__alloyId1210 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1210"
    });
    $.__views.postpaid.add($.__views.__alloyId1210);
    $.__views.__alloyId1211 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1211"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1212"
    });
    $.__views.__alloyId1211.add($.__views.__alloyId1212);
    subline ? $.__views.__alloyId1212.addEventListener("click", subline) : __defers["$.__views.__alloyId1212!click!subline"] = true;
    $.__views.__alloyId1213 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1213"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1213);
    $.__views.__alloyId1214 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1214"
    });
    $.__views.__alloyId1213.add($.__views.__alloyId1214);
    subline ? $.__views.__alloyId1214.addEventListener("click", subline) : __defers["$.__views.__alloyId1214!click!subline"] = true;
    $.__views.__alloyId1215 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1215"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1215);
    $.__views.__alloyId1216 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1216"
    });
    $.__views.__alloyId1215.add($.__views.__alloyId1216);
    subline ? $.__views.__alloyId1216.addEventListener("click", subline) : __defers["$.__views.__alloyId1216!click!subline"] = true;
    $.__views.__alloyId1217 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1217"
    });
    $.__views.postpaid.add($.__views.__alloyId1217);
    $.__views.__alloyId1218 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1218"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1218);
    $.__views.__alloyId1219 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1219"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1219);
    vas ? $.__views.__alloyId1219.addEventListener("click", vas) : __defers["$.__views.__alloyId1219!click!vas"] = true;
    $.__views.__alloyId1220 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1220"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1220);
    $.__views.__alloyId1221 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1221"
    });
    $.__views.__alloyId1220.add($.__views.__alloyId1221);
    loyalty ? $.__views.__alloyId1221.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1221!click!loyalty"] = true;
    $.__views.__alloyId1222 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1222"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1222);
    $.__views.__alloyId1223 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1223"
    });
    $.__views.__alloyId1222.add($.__views.__alloyId1223);
    report ? $.__views.__alloyId1223.addEventListener("click", report) : __defers["$.__views.__alloyId1223!click!report"] = true;
    $.__views.__alloyId1224 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1224"
    });
    $.__views.postpaid.add($.__views.__alloyId1224);
    $.__views.__alloyId1225 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1225"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1225);
    $.__views.__alloyId1226 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1226"
    });
    $.__views.__alloyId1225.add($.__views.__alloyId1226);
    vas ? $.__views.__alloyId1226.addEventListener("click", vas) : __defers["$.__views.__alloyId1226!click!vas"] = true;
    $.__views.__alloyId1227 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1227"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1227);
    $.__views.__alloyId1228 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1228"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1228);
    loyalty ? $.__views.__alloyId1228.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1228!click!loyalty"] = true;
    $.__views.__alloyId1229 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1229"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1229);
    $.__views.__alloyId1230 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1230"
    });
    $.__views.__alloyId1229.add($.__views.__alloyId1230);
    loyalty ? $.__views.__alloyId1230.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1230!click!loyalty"] = true;
    $.__views.__alloyId1231 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1231"
    });
    $.__views.postpaid.add($.__views.__alloyId1231);
    $.__views.__alloyId1232 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1232"
    });
    $.__views.__alloyId1231.add($.__views.__alloyId1232);
    $.__views.__alloyId1233 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1233"
    });
    $.__views.__alloyId1232.add($.__views.__alloyId1233);
    report ? $.__views.__alloyId1233.addEventListener("click", report) : __defers["$.__views.__alloyId1233!click!report"] = true;
    $.__views.__alloyId1234 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1234"
    });
    $.__views.__alloyId1231.add($.__views.__alloyId1234);
    $.__views.__alloyId1235 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId1235"
    });
    $.__views.__alloyId1234.add($.__views.__alloyId1235);
    faq ? $.__views.__alloyId1235.addEventListener("click", faq) : __defers["$.__views.__alloyId1235!click!faq"] = true;
    $.__views.__alloyId1236 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1236"
    });
    $.__views.__alloyId1231.add($.__views.__alloyId1236);
    $.__views.__alloyId1237 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1237"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1237);
    orderingHistory ? $.__views.__alloyId1237.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1237!click!orderingHistory"] = true;
    $.__views.__alloyId1238 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1238"
    });
    $.__views.postpaid.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1239"
    });
    $.__views.__alloyId1238.add($.__views.__alloyId1239);
    $.__views.__alloyId1240 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1240"
    });
    $.__views.__alloyId1239.add($.__views.__alloyId1240);
    report ? $.__views.__alloyId1240.addEventListener("click", report) : __defers["$.__views.__alloyId1240!click!report"] = true;
    $.__views.__alloyId1241 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1241"
    });
    $.__views.__alloyId1238.add($.__views.__alloyId1241);
    $.__views.__alloyId1242 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1242"
    });
    $.__views.__alloyId1241.add($.__views.__alloyId1242);
    faq ? $.__views.__alloyId1242.addEventListener("click", faq) : __defers["$.__views.__alloyId1242!click!faq"] = true;
    $.__views.__alloyId1243 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1243"
    });
    $.__views.__alloyId1238.add($.__views.__alloyId1243);
    $.__views.__alloyId1244 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1244"
    });
    $.__views.__alloyId1243.add($.__views.__alloyId1244);
    orderingHistory ? $.__views.__alloyId1244.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1244!click!orderingHistory"] = true;
    $.__views.prepaid = Ti.UI.createScrollView({
        id: "prepaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1171.add($.__views.prepaid);
    $.__views.__alloyId1245 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1245"
    });
    $.__views.prepaid.add($.__views.__alloyId1245);
    $.__views.__alloyId1246 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1246"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1246);
    $.__views.__alloyId1247 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1247"
    });
    $.__views.__alloyId1246.add($.__views.__alloyId1247);
    accDetail ? $.__views.__alloyId1247.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1247!click!accDetail"] = true;
    $.__views.__alloyId1248 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1248"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1248);
    $.__views.__alloyId1249 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1249"
    });
    $.__views.__alloyId1248.add($.__views.__alloyId1249);
    profile ? $.__views.__alloyId1249.addEventListener("click", profile) : __defers["$.__views.__alloyId1249!click!profile"] = true;
    $.__views.__alloyId1250 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1250"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1250);
    $.__views.__alloyId1251 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1251"
    });
    $.__views.__alloyId1250.add($.__views.__alloyId1251);
    makePayment ? $.__views.__alloyId1251.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1251!click!makePayment"] = true;
    $.__views.__alloyId1252 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1252"
    });
    $.__views.prepaid.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1253"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1253);
    $.__views.__alloyId1254 = Ti.UI.createLabel({
        text: "Prepaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1254"
    });
    $.__views.__alloyId1253.add($.__views.__alloyId1254);
    accDetail ? $.__views.__alloyId1254.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1254!click!accDetail"] = true;
    $.__views.__alloyId1255 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1255"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1255);
    $.__views.__alloyId1256 = Ti.UI.createLabel({
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1256"
    });
    $.__views.__alloyId1255.add($.__views.__alloyId1256);
    profile ? $.__views.__alloyId1256.addEventListener("click", profile) : __defers["$.__views.__alloyId1256!click!profile"] = true;
    $.__views.__alloyId1257 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1257"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1257);
    $.__views.__alloyId1258 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1258"
    });
    $.__views.__alloyId1257.add($.__views.__alloyId1258);
    makePayment ? $.__views.__alloyId1258.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1258!click!makePayment"] = true;
    $.__views.__alloyId1259 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1259"
    });
    $.__views.prepaid.add($.__views.__alloyId1259);
    $.__views.__alloyId1260 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1260"
    });
    $.__views.__alloyId1259.add($.__views.__alloyId1260);
    $.__views.__alloyId1261 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1261"
    });
    $.__views.__alloyId1260.add($.__views.__alloyId1261);
    vas ? $.__views.__alloyId1261.addEventListener("click", vas) : __defers["$.__views.__alloyId1261!click!vas"] = true;
    $.__views.__alloyId1262 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1262"
    });
    $.__views.__alloyId1259.add($.__views.__alloyId1262);
    $.__views.__alloyId1263 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1263"
    });
    $.__views.__alloyId1262.add($.__views.__alloyId1263);
    subline ? $.__views.__alloyId1263.addEventListener("click", subline) : __defers["$.__views.__alloyId1263!click!subline"] = true;
    $.__views.__alloyId1264 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1264"
    });
    $.__views.__alloyId1259.add($.__views.__alloyId1264);
    $.__views.__alloyId1265 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1265"
    });
    $.__views.__alloyId1264.add($.__views.__alloyId1265);
    subline ? $.__views.__alloyId1265.addEventListener("click", subline) : __defers["$.__views.__alloyId1265!click!subline"] = true;
    $.__views.__alloyId1266 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1266"
    });
    $.__views.prepaid.add($.__views.__alloyId1266);
    $.__views.__alloyId1267 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1267"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1267);
    $.__views.__alloyId1268 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1268"
    });
    $.__views.__alloyId1267.add($.__views.__alloyId1268);
    subline ? $.__views.__alloyId1268.addEventListener("click", subline) : __defers["$.__views.__alloyId1268!click!subline"] = true;
    $.__views.__alloyId1269 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1269"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1269);
    $.__views.__alloyId1270 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1270"
    });
    $.__views.__alloyId1269.add($.__views.__alloyId1270);
    subline ? $.__views.__alloyId1270.addEventListener("click", subline) : __defers["$.__views.__alloyId1270!click!subline"] = true;
    $.__views.__alloyId1271 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1271"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1271);
    $.__views.__alloyId1272 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1272"
    });
    $.__views.__alloyId1271.add($.__views.__alloyId1272);
    subline ? $.__views.__alloyId1272.addEventListener("click", subline) : __defers["$.__views.__alloyId1272!click!subline"] = true;
    $.__views.__alloyId1273 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1273"
    });
    $.__views.prepaid.add($.__views.__alloyId1273);
    $.__views.__alloyId1274 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1274"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1274);
    $.__views.__alloyId1275 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1275"
    });
    $.__views.__alloyId1274.add($.__views.__alloyId1275);
    vas ? $.__views.__alloyId1275.addEventListener("click", vas) : __defers["$.__views.__alloyId1275!click!vas"] = true;
    $.__views.__alloyId1276 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1276"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1276);
    $.__views.__alloyId1277 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1277"
    });
    $.__views.__alloyId1276.add($.__views.__alloyId1277);
    loyalty ? $.__views.__alloyId1277.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1277!click!loyalty"] = true;
    $.__views.__alloyId1278 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1278"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1278);
    $.__views.__alloyId1279 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1279"
    });
    $.__views.__alloyId1278.add($.__views.__alloyId1279);
    report ? $.__views.__alloyId1279.addEventListener("click", report) : __defers["$.__views.__alloyId1279!click!report"] = true;
    $.__views.__alloyId1280 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1280"
    });
    $.__views.prepaid.add($.__views.__alloyId1280);
    $.__views.__alloyId1281 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1281"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1281);
    $.__views.__alloyId1282 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1282"
    });
    $.__views.__alloyId1281.add($.__views.__alloyId1282);
    vas ? $.__views.__alloyId1282.addEventListener("click", vas) : __defers["$.__views.__alloyId1282!click!vas"] = true;
    $.__views.__alloyId1283 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1283"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1283);
    $.__views.__alloyId1284 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1284"
    });
    $.__views.__alloyId1283.add($.__views.__alloyId1284);
    loyalty ? $.__views.__alloyId1284.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1284!click!loyalty"] = true;
    $.__views.__alloyId1285 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1285"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1285);
    $.__views.__alloyId1286 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1286"
    });
    $.__views.__alloyId1285.add($.__views.__alloyId1286);
    loyalty ? $.__views.__alloyId1286.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1286!click!loyalty"] = true;
    $.__views.__alloyId1287 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1287"
    });
    $.__views.prepaid.add($.__views.__alloyId1287);
    $.__views.__alloyId1288 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1288"
    });
    $.__views.__alloyId1287.add($.__views.__alloyId1288);
    $.__views.__alloyId1289 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1289"
    });
    $.__views.__alloyId1288.add($.__views.__alloyId1289);
    report ? $.__views.__alloyId1289.addEventListener("click", report) : __defers["$.__views.__alloyId1289!click!report"] = true;
    $.__views.__alloyId1290 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1290"
    });
    $.__views.__alloyId1287.add($.__views.__alloyId1290);
    $.__views.__alloyId1291 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId1291"
    });
    $.__views.__alloyId1290.add($.__views.__alloyId1291);
    faq ? $.__views.__alloyId1291.addEventListener("click", faq) : __defers["$.__views.__alloyId1291!click!faq"] = true;
    $.__views.__alloyId1292 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1292"
    });
    $.__views.__alloyId1287.add($.__views.__alloyId1292);
    $.__views.__alloyId1293 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1293"
    });
    $.__views.__alloyId1292.add($.__views.__alloyId1293);
    orderingHistory ? $.__views.__alloyId1293.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1293!click!orderingHistory"] = true;
    $.__views.__alloyId1294 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1294"
    });
    $.__views.prepaid.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1295"
    });
    $.__views.__alloyId1294.add($.__views.__alloyId1295);
    $.__views.__alloyId1296 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1296"
    });
    $.__views.__alloyId1295.add($.__views.__alloyId1296);
    report ? $.__views.__alloyId1296.addEventListener("click", report) : __defers["$.__views.__alloyId1296!click!report"] = true;
    $.__views.__alloyId1297 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1297"
    });
    $.__views.__alloyId1294.add($.__views.__alloyId1297);
    $.__views.__alloyId1298 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1298"
    });
    $.__views.__alloyId1297.add($.__views.__alloyId1298);
    faq ? $.__views.__alloyId1298.addEventListener("click", faq) : __defers["$.__views.__alloyId1298!click!faq"] = true;
    $.__views.__alloyId1299 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1299"
    });
    $.__views.__alloyId1294.add($.__views.__alloyId1299);
    $.__views.__alloyId1300 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1300"
    });
    $.__views.__alloyId1299.add($.__views.__alloyId1300);
    orderingHistory ? $.__views.__alloyId1300.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1300!click!orderingHistory"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var status = "postpaid";
    var new_event = [ [ "Season Pass", "/images/acc_button_01.png" ] ];
    if ("postpaid" == status) {
        console.log("postpaid");
        $.prepaid.height = 0;
    } else {
        console.log("prepaid");
        $.postpaid.height = 0;
    }
    if (new_event[0].length > 0) {
        var view = Titanium.UI.createView({
            width: Ti.UI.FILL,
            height: "30%",
            layout: "horizontal"
        });
        var image_view = Titanium.UI.createView({
            width: "33%",
            height: Ti.UI.FILL
        });
        var image = Ti.UI.createImageView({
            width: "80",
            height: "80",
            image: new_event[0][1]
        });
        var view2 = Titanium.UI.createView({
            width: Ti.UI.FILL,
            height: "15%",
            layout: "horizontal"
        });
        var label_view = Titanium.UI.createView({
            width: "33%",
            height: Ti.UI.FILL
        });
        var label = Titanium.UI.createLabel({
            color: "#41B9C7",
            textAlign: "center",
            top: "0",
            text: new_event[0][0]
        });
        image_view.add(image);
        view.add(image_view);
        label_view.add(label);
        view2.add(label_view);
        if ("postpaid" == status) {
            $.postpaid.add(view);
            $.postpaid.add(view2);
        } else {
            $.prepaid.add(view);
            $.prepaid.add(view2);
        }
    }
    __defers["$.__views.__alloyId1150!click!close"] && $.__views.__alloyId1150.addEventListener("click", close);
    __defers["$.__views.__alloyId1151!click!gallery"] && $.__views.__alloyId1151.addEventListener("click", gallery);
    __defers["$.__views.__alloyId1156!click!facebook"] && $.__views.__alloyId1156.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1164!click!closepayment"] && $.__views.__alloyId1164.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1165!click!paymentPostpaid"] && $.__views.__alloyId1165.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1168!click!paymentPrepaid"] && $.__views.__alloyId1168.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1178!click!editPhoto"] && $.__views.__alloyId1178.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1179!click!editPhoto"] && $.__views.__alloyId1179.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1191!click!accDetail"] && $.__views.__alloyId1191.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1193!click!profile"] && $.__views.__alloyId1193.addEventListener("click", profile);
    __defers["$.__views.__alloyId1195!click!makePayment"] && $.__views.__alloyId1195.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1198!click!accDetail"] && $.__views.__alloyId1198.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1200!click!profile"] && $.__views.__alloyId1200.addEventListener("click", profile);
    __defers["$.__views.__alloyId1202!click!makePayment"] && $.__views.__alloyId1202.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1205!click!vas"] && $.__views.__alloyId1205.addEventListener("click", vas);
    __defers["$.__views.__alloyId1207!click!subline"] && $.__views.__alloyId1207.addEventListener("click", subline);
    __defers["$.__views.__alloyId1209!click!subline"] && $.__views.__alloyId1209.addEventListener("click", subline);
    __defers["$.__views.__alloyId1212!click!subline"] && $.__views.__alloyId1212.addEventListener("click", subline);
    __defers["$.__views.__alloyId1214!click!subline"] && $.__views.__alloyId1214.addEventListener("click", subline);
    __defers["$.__views.__alloyId1216!click!subline"] && $.__views.__alloyId1216.addEventListener("click", subline);
    __defers["$.__views.__alloyId1219!click!vas"] && $.__views.__alloyId1219.addEventListener("click", vas);
    __defers["$.__views.__alloyId1221!click!loyalty"] && $.__views.__alloyId1221.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1223!click!report"] && $.__views.__alloyId1223.addEventListener("click", report);
    __defers["$.__views.__alloyId1226!click!vas"] && $.__views.__alloyId1226.addEventListener("click", vas);
    __defers["$.__views.__alloyId1228!click!loyalty"] && $.__views.__alloyId1228.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1230!click!loyalty"] && $.__views.__alloyId1230.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1233!click!report"] && $.__views.__alloyId1233.addEventListener("click", report);
    __defers["$.__views.__alloyId1235!click!faq"] && $.__views.__alloyId1235.addEventListener("click", faq);
    __defers["$.__views.__alloyId1237!click!orderingHistory"] && $.__views.__alloyId1237.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1240!click!report"] && $.__views.__alloyId1240.addEventListener("click", report);
    __defers["$.__views.__alloyId1242!click!faq"] && $.__views.__alloyId1242.addEventListener("click", faq);
    __defers["$.__views.__alloyId1244!click!orderingHistory"] && $.__views.__alloyId1244.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1247!click!accDetail"] && $.__views.__alloyId1247.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1249!click!profile"] && $.__views.__alloyId1249.addEventListener("click", profile);
    __defers["$.__views.__alloyId1251!click!makePayment"] && $.__views.__alloyId1251.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1254!click!accDetail"] && $.__views.__alloyId1254.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1256!click!profile"] && $.__views.__alloyId1256.addEventListener("click", profile);
    __defers["$.__views.__alloyId1258!click!makePayment"] && $.__views.__alloyId1258.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1261!click!vas"] && $.__views.__alloyId1261.addEventListener("click", vas);
    __defers["$.__views.__alloyId1263!click!subline"] && $.__views.__alloyId1263.addEventListener("click", subline);
    __defers["$.__views.__alloyId1265!click!subline"] && $.__views.__alloyId1265.addEventListener("click", subline);
    __defers["$.__views.__alloyId1268!click!subline"] && $.__views.__alloyId1268.addEventListener("click", subline);
    __defers["$.__views.__alloyId1270!click!subline"] && $.__views.__alloyId1270.addEventListener("click", subline);
    __defers["$.__views.__alloyId1272!click!subline"] && $.__views.__alloyId1272.addEventListener("click", subline);
    __defers["$.__views.__alloyId1275!click!vas"] && $.__views.__alloyId1275.addEventListener("click", vas);
    __defers["$.__views.__alloyId1277!click!loyalty"] && $.__views.__alloyId1277.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1279!click!report"] && $.__views.__alloyId1279.addEventListener("click", report);
    __defers["$.__views.__alloyId1282!click!vas"] && $.__views.__alloyId1282.addEventListener("click", vas);
    __defers["$.__views.__alloyId1284!click!loyalty"] && $.__views.__alloyId1284.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1286!click!loyalty"] && $.__views.__alloyId1286.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1289!click!report"] && $.__views.__alloyId1289.addEventListener("click", report);
    __defers["$.__views.__alloyId1291!click!faq"] && $.__views.__alloyId1291.addEventListener("click", faq);
    __defers["$.__views.__alloyId1293!click!orderingHistory"] && $.__views.__alloyId1293.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1296!click!report"] && $.__views.__alloyId1296.addEventListener("click", report);
    __defers["$.__views.__alloyId1298!click!faq"] && $.__views.__alloyId1298.addEventListener("click", faq);
    __defers["$.__views.__alloyId1300!click!orderingHistory"] && $.__views.__alloyId1300.addEventListener("click", orderingHistory);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;