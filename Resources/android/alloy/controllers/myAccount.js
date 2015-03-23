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
<<<<<<< HEAD
    $.__views.__alloyId1202 = Alloy.createController("_header", {
        id: "__alloyId1202",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId1202.setParent($.__views.myAccount);
=======
    $.__views.__alloyId1032 = Alloy.createController("_header", {
        id: "__alloyId1032",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId1032.setParent($.__views.myAccount);
>>>>>>> origin/master
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
<<<<<<< HEAD
    $.__views.__alloyId1203 = Ti.UI.createView({
=======
    $.__views.__alloyId1033 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1203"
    });
    $.__views.photo.add($.__views.__alloyId1203);
    $.__views.__alloyId1204 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1204"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1205"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1205);
    $.__views.__alloyId1206 = Ti.UI.createImageView({
=======
        id: "__alloyId1033"
    });
    $.__views.photo.add($.__views.__alloyId1033);
    $.__views.__alloyId1034 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1034"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1034);
    $.__views.__alloyId1035 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1035"
    });
    $.__views.__alloyId1034.add($.__views.__alloyId1035);
    $.__views.__alloyId1036 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1206"
    });
    $.__views.__alloyId1204.add($.__views.__alloyId1206);
    close ? $.__views.__alloyId1206.addEventListener("click", close) : __defers["$.__views.__alloyId1206!click!close"] = true;
    $.__views.__alloyId1207 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1207"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1207);
    gallery ? $.__views.__alloyId1207.addEventListener("click", gallery) : __defers["$.__views.__alloyId1207!click!gallery"] = true;
    $.__views.__alloyId1208 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1208"
    });
    $.__views.__alloyId1207.add($.__views.__alloyId1208);
    $.__views.__alloyId1209 = Ti.UI.createImageView({
=======
        id: "__alloyId1036"
    });
    $.__views.__alloyId1034.add($.__views.__alloyId1036);
    close ? $.__views.__alloyId1036.addEventListener("click", close) : __defers["$.__views.__alloyId1036!click!close"] = true;
    $.__views.__alloyId1037 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1037"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1037);
    gallery ? $.__views.__alloyId1037.addEventListener("click", gallery) : __defers["$.__views.__alloyId1037!click!gallery"] = true;
    $.__views.__alloyId1038 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1038"
    });
    $.__views.__alloyId1037.add($.__views.__alloyId1038);
    $.__views.__alloyId1039 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "#66FFFF",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/gallery_icon.png",
<<<<<<< HEAD
        id: "__alloyId1209"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1209);
    $.__views.__alloyId1210 = Ti.UI.createView({
        id: "__alloyId1210"
    });
    $.__views.__alloyId1207.add($.__views.__alloyId1210);
    $.__views.__alloyId1211 = Ti.UI.createLabel({
=======
        id: "__alloyId1039"
    });
    $.__views.__alloyId1038.add($.__views.__alloyId1039);
    $.__views.__alloyId1040 = Ti.UI.createView({
        id: "__alloyId1040"
    });
    $.__views.__alloyId1037.add($.__views.__alloyId1040);
    $.__views.__alloyId1041 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1211"
    });
    $.__views.__alloyId1210.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1212"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1212);
    facebook ? $.__views.__alloyId1212.addEventListener("click", facebook) : __defers["$.__views.__alloyId1212!click!facebook"] = true;
    $.__views.__alloyId1213 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1213"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1213);
    $.__views.__alloyId1214 = Ti.UI.createImageView({
=======
        id: "__alloyId1041"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1041);
    $.__views.__alloyId1042 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1042"
    });
    $.__views.__alloyId1033.add($.__views.__alloyId1042);
    facebook ? $.__views.__alloyId1042.addEventListener("click", facebook) : __defers["$.__views.__alloyId1042!click!facebook"] = true;
    $.__views.__alloyId1043 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1043"
    });
    $.__views.__alloyId1042.add($.__views.__alloyId1043);
    $.__views.__alloyId1044 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/facebook_icon.png",
<<<<<<< HEAD
        id: "__alloyId1214"
    });
    $.__views.__alloyId1213.add($.__views.__alloyId1214);
    $.__views.__alloyId1215 = Ti.UI.createView({
        id: "__alloyId1215"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1215);
    $.__views.__alloyId1216 = Ti.UI.createLabel({
=======
        id: "__alloyId1044"
    });
    $.__views.__alloyId1043.add($.__views.__alloyId1044);
    $.__views.__alloyId1045 = Ti.UI.createView({
        id: "__alloyId1045"
    });
    $.__views.__alloyId1042.add($.__views.__alloyId1045);
    $.__views.__alloyId1046 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1216"
    });
    $.__views.__alloyId1215.add($.__views.__alloyId1216);
=======
        id: "__alloyId1046"
    });
    $.__views.__alloyId1045.add($.__views.__alloyId1046);
>>>>>>> origin/master
    $.__views.payment = Ti.UI.createView({
        id: "payment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.payment);
<<<<<<< HEAD
    $.__views.__alloyId1217 = Ti.UI.createView({
=======
    $.__views.__alloyId1047 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1217"
    });
    $.__views.payment.add($.__views.__alloyId1217);
    $.__views.__alloyId1218 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1218"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1218);
    $.__views.__alloyId1219 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1219"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1219);
    $.__views.__alloyId1220 = Ti.UI.createImageView({
=======
        id: "__alloyId1047"
    });
    $.__views.payment.add($.__views.__alloyId1047);
    $.__views.__alloyId1048 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1048"
    });
    $.__views.__alloyId1047.add($.__views.__alloyId1048);
    $.__views.__alloyId1049 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1049"
    });
    $.__views.__alloyId1048.add($.__views.__alloyId1049);
    $.__views.__alloyId1050 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1220"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1220);
    closepayment ? $.__views.__alloyId1220.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1220!click!closepayment"] = true;
    $.__views.__alloyId1221 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1221"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1221);
    paymentPostpaid ? $.__views.__alloyId1221.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1221!click!paymentPostpaid"] = true;
    $.__views.__alloyId1222 = Ti.UI.createView({
        id: "__alloyId1222"
    });
    $.__views.__alloyId1221.add($.__views.__alloyId1222);
    $.__views.__alloyId1223 = Ti.UI.createLabel({
=======
        id: "__alloyId1050"
    });
    $.__views.__alloyId1048.add($.__views.__alloyId1050);
    closepayment ? $.__views.__alloyId1050.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1050!click!closepayment"] = true;
    $.__views.__alloyId1051 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1051"
    });
    $.__views.__alloyId1047.add($.__views.__alloyId1051);
    paymentPostpaid ? $.__views.__alloyId1051.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1051!click!paymentPostpaid"] = true;
    $.__views.__alloyId1052 = Ti.UI.createView({
        id: "__alloyId1052"
    });
    $.__views.__alloyId1051.add($.__views.__alloyId1052);
    $.__views.__alloyId1053 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Pay Postpaid Bill",
        color: "white",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1223"
    });
    $.__views.__alloyId1222.add($.__views.__alloyId1223);
    $.__views.__alloyId1224 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1224"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1224);
    paymentPrepaid ? $.__views.__alloyId1224.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1224!click!paymentPrepaid"] = true;
    $.__views.__alloyId1225 = Ti.UI.createView({
        id: "__alloyId1225"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1225);
    $.__views.__alloyId1226 = Ti.UI.createLabel({
=======
        id: "__alloyId1053"
    });
    $.__views.__alloyId1052.add($.__views.__alloyId1053);
    $.__views.__alloyId1054 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1054"
    });
    $.__views.__alloyId1047.add($.__views.__alloyId1054);
    paymentPrepaid ? $.__views.__alloyId1054.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1054!click!paymentPrepaid"] = true;
    $.__views.__alloyId1055 = Ti.UI.createView({
        id: "__alloyId1055"
    });
    $.__views.__alloyId1054.add($.__views.__alloyId1055);
    $.__views.__alloyId1056 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Prepaid TopUp",
        color: "white",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1226"
    });
    $.__views.__alloyId1225.add($.__views.__alloyId1226);
    $.__views.__alloyId1227 = Ti.UI.createView({
=======
        id: "__alloyId1056"
    });
    $.__views.__alloyId1055.add($.__views.__alloyId1056);
    $.__views.__alloyId1057 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
<<<<<<< HEAD
        id: "__alloyId1227"
    });
    $.__views.myAccount.add($.__views.__alloyId1227);
    $.__views.__alloyId1228 = Ti.UI.createView({
=======
        id: "__alloyId1057"
    });
    $.__views.myAccount.add($.__views.__alloyId1057);
    $.__views.__alloyId1058 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
<<<<<<< HEAD
        id: "__alloyId1228"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1228);
    $.__views.__alloyId1229 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1229"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1229);
    $.__views.__alloyId1230 = Ti.UI.createLabel({
=======
        id: "__alloyId1058"
    });
    $.__views.__alloyId1057.add($.__views.__alloyId1058);
    $.__views.__alloyId1059 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1059"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId1230"
    });
    $.__views.__alloyId1229.add($.__views.__alloyId1230);
    $.__views.__alloyId1231 = Ti.UI.createLabel({
=======
        id: "__alloyId1060"
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1231"
    });
    $.__views.__alloyId1229.add($.__views.__alloyId1231);
    $.__views.__alloyId1232 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId1232"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1232);
    $.__views.__alloyId1233 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId1233"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1233);
    $.__views.__alloyId1234 = Ti.UI.createImageView({
=======
        id: "__alloyId1061"
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1061);
    $.__views.__alloyId1062 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId1062"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId1063"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createImageView({
>>>>>>> origin/master
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
<<<<<<< HEAD
        id: "__alloyId1234"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1234);
    editPhoto ? $.__views.__alloyId1234.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1234!click!editPhoto"] = true;
    $.__views.__alloyId1235 = Ti.UI.createImageView({
=======
        id: "__alloyId1064"
    });
    $.__views.__alloyId1063.add($.__views.__alloyId1064);
    editPhoto ? $.__views.__alloyId1064.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1064!click!editPhoto"] = true;
    $.__views.__alloyId1065 = Ti.UI.createImageView({
>>>>>>> origin/master
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1235"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1235);
    editPhoto ? $.__views.__alloyId1235.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1235!click!editPhoto"] = true;
    $.__views.__alloyId1236 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1236"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1236);
    $.__views.__alloyId1237 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId1237"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1237);
    $.__views.__alloyId1238 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1238"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId1239"
    });
    $.__views.__alloyId1238.add($.__views.__alloyId1239);
    $.__views.__alloyId1240 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId1240"
    });
    $.__views.__alloyId1238.add($.__views.__alloyId1240);
    $.__views.__alloyId1241 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId1241"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1241);
    $.__views.__alloyId1242 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1242"
    });
    $.__views.__alloyId1241.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createLabel({
=======
        id: "__alloyId1065"
    });
    $.__views.__alloyId1063.add($.__views.__alloyId1065);
    editPhoto ? $.__views.__alloyId1065.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1065!click!editPhoto"] = true;
    $.__views.__alloyId1066 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1066"
    });
    $.__views.__alloyId1057.add($.__views.__alloyId1066);
    $.__views.__alloyId1067 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId1067"
    });
    $.__views.__alloyId1066.add($.__views.__alloyId1067);
    $.__views.__alloyId1068 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1068"
    });
    $.__views.__alloyId1067.add($.__views.__alloyId1068);
    $.__views.__alloyId1069 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId1069"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId1070"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1070);
    $.__views.__alloyId1071 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId1071"
    });
    $.__views.__alloyId1066.add($.__views.__alloyId1071);
    $.__views.__alloyId1072 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1072"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
<<<<<<< HEAD
        id: "__alloyId1243"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1243);
    $.__views.__alloyId1244 = Ti.UI.createLabel({
=======
        id: "__alloyId1073"
    });
    $.__views.__alloyId1072.add($.__views.__alloyId1073);
    $.__views.__alloyId1074 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
<<<<<<< HEAD
        id: "__alloyId1244"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1244);
=======
        id: "__alloyId1074"
    });
    $.__views.__alloyId1072.add($.__views.__alloyId1074);
>>>>>>> origin/master
    $.__views.postpaid = Ti.UI.createScrollView({
        id: "postpaid",
        layout: "vertical",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId1227.add($.__views.postpaid);
    $.__views.__alloyId1245 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1245"
    });
    $.__views.postpaid.add($.__views.__alloyId1245);
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
    $.__views.postpaid.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1253"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1253);
    $.__views.__alloyId1254 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1057.add($.__views.postpaid);
    $.__views.__alloyId1075 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1075"
    });
    $.__views.postpaid.add($.__views.__alloyId1075);
    $.__views.__alloyId1076 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1076"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1076);
    $.__views.__alloyId1077 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1077"
    });
    $.__views.__alloyId1076.add($.__views.__alloyId1077);
    accDetail ? $.__views.__alloyId1077.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1077!click!accDetail"] = true;
    $.__views.__alloyId1078 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1078"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1079"
    });
    $.__views.__alloyId1078.add($.__views.__alloyId1079);
    profile ? $.__views.__alloyId1079.addEventListener("click", profile) : __defers["$.__views.__alloyId1079!click!profile"] = true;
    $.__views.__alloyId1080 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1080"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1080);
    $.__views.__alloyId1081 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1081"
    });
    $.__views.__alloyId1080.add($.__views.__alloyId1081);
    makePayment ? $.__views.__alloyId1081.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1081!click!makePayment"] = true;
    $.__views.__alloyId1082 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1082"
    });
    $.__views.postpaid.add($.__views.__alloyId1082);
    $.__views.__alloyId1083 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1083"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Postpaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
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
=======
        id: "__alloyId1084"
    });
    $.__views.__alloyId1083.add($.__views.__alloyId1084);
    accDetail ? $.__views.__alloyId1084.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1084!click!accDetail"] = true;
    $.__views.__alloyId1085 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1085"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
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
=======
        id: "__alloyId1086"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1086);
    profile ? $.__views.__alloyId1086.addEventListener("click", profile) : __defers["$.__views.__alloyId1086!click!profile"] = true;
    $.__views.__alloyId1087 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1087"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1087);
    $.__views.__alloyId1088 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
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
    $.__views.postpaid.add($.__views.__alloyId1259);
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
    $.__views.postpaid.add($.__views.__alloyId1266);
    $.__views.__alloyId1267 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1267"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1267);
    $.__views.__alloyId1268 = Ti.UI.createLabel({
=======
        id: "__alloyId1088"
    });
    $.__views.__alloyId1087.add($.__views.__alloyId1088);
    makePayment ? $.__views.__alloyId1088.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1088!click!makePayment"] = true;
    $.__views.__alloyId1089 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1089"
    });
    $.__views.postpaid.add($.__views.__alloyId1089);
    $.__views.__alloyId1090 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1090"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1090);
    $.__views.__alloyId1091 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1091"
    });
    $.__views.__alloyId1090.add($.__views.__alloyId1091);
    vas ? $.__views.__alloyId1091.addEventListener("click", vas) : __defers["$.__views.__alloyId1091!click!vas"] = true;
    $.__views.__alloyId1092 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1092"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1093"
    });
    $.__views.__alloyId1092.add($.__views.__alloyId1093);
    subline ? $.__views.__alloyId1093.addEventListener("click", subline) : __defers["$.__views.__alloyId1093!click!subline"] = true;
    $.__views.__alloyId1094 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1094"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1094);
    $.__views.__alloyId1095 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1095"
    });
    $.__views.__alloyId1094.add($.__views.__alloyId1095);
    subline ? $.__views.__alloyId1095.addEventListener("click", subline) : __defers["$.__views.__alloyId1095!click!subline"] = true;
    $.__views.__alloyId1096 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1096"
    });
    $.__views.postpaid.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1097"
    });
    $.__views.__alloyId1096.add($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
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
=======
        id: "__alloyId1098"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1098);
    subline ? $.__views.__alloyId1098.addEventListener("click", subline) : __defers["$.__views.__alloyId1098!click!subline"] = true;
    $.__views.__alloyId1099 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1099"
    });
    $.__views.__alloyId1096.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
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
=======
        id: "__alloyId1100"
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1100);
    subline ? $.__views.__alloyId1100.addEventListener("click", subline) : __defers["$.__views.__alloyId1100!click!subline"] = true;
    $.__views.__alloyId1101 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1101"
    });
    $.__views.__alloyId1096.add($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
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
    $.__views.postpaid.add($.__views.__alloyId1273);
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
    $.__views.postpaid.add($.__views.__alloyId1280);
    $.__views.__alloyId1281 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1281"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1281);
    $.__views.__alloyId1282 = Ti.UI.createLabel({
=======
        id: "__alloyId1102"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1102);
    subline ? $.__views.__alloyId1102.addEventListener("click", subline) : __defers["$.__views.__alloyId1102!click!subline"] = true;
    $.__views.__alloyId1103 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1103"
    });
    $.__views.postpaid.add($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1104"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1105"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1105);
    vas ? $.__views.__alloyId1105.addEventListener("click", vas) : __defers["$.__views.__alloyId1105!click!vas"] = true;
    $.__views.__alloyId1106 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1106"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1107"
    });
    $.__views.__alloyId1106.add($.__views.__alloyId1107);
    loyalty ? $.__views.__alloyId1107.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1107!click!loyalty"] = true;
    $.__views.__alloyId1108 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1108"
    });
    $.__views.__alloyId1103.add($.__views.__alloyId1108);
    $.__views.__alloyId1109 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1109"
    });
    $.__views.__alloyId1108.add($.__views.__alloyId1109);
    report ? $.__views.__alloyId1109.addEventListener("click", report) : __defers["$.__views.__alloyId1109!click!report"] = true;
    $.__views.__alloyId1110 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1110"
    });
    $.__views.postpaid.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1111"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
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
=======
        id: "__alloyId1112"
    });
    $.__views.__alloyId1111.add($.__views.__alloyId1112);
    vas ? $.__views.__alloyId1112.addEventListener("click", vas) : __defers["$.__views.__alloyId1112!click!vas"] = true;
    $.__views.__alloyId1113 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1113"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1113);
    $.__views.__alloyId1114 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
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
=======
        id: "__alloyId1114"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1114);
    loyalty ? $.__views.__alloyId1114.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1114!click!loyalty"] = true;
    $.__views.__alloyId1115 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1115"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1115);
    $.__views.__alloyId1116 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
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
    $.__views.postpaid.add($.__views.__alloyId1287);
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
    $.__views.postpaid.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1295"
    });
    $.__views.__alloyId1294.add($.__views.__alloyId1295);
    $.__views.__alloyId1296 = Ti.UI.createLabel({
=======
        id: "__alloyId1116"
    });
    $.__views.__alloyId1115.add($.__views.__alloyId1116);
    loyalty ? $.__views.__alloyId1116.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1116!click!loyalty"] = true;
    $.__views.__alloyId1117 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1117"
    });
    $.__views.postpaid.add($.__views.__alloyId1117);
    $.__views.__alloyId1118 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1118"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1119"
    });
    $.__views.__alloyId1118.add($.__views.__alloyId1119);
    report ? $.__views.__alloyId1119.addEventListener("click", report) : __defers["$.__views.__alloyId1119!click!report"] = true;
    $.__views.__alloyId1120 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1120"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1120);
    $.__views.__alloyId1121 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId1121"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1121);
    faq ? $.__views.__alloyId1121.addEventListener("click", faq) : __defers["$.__views.__alloyId1121!click!faq"] = true;
    $.__views.__alloyId1122 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1122"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1122);
    $.__views.__alloyId1123 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1123"
    });
    $.__views.__alloyId1122.add($.__views.__alloyId1123);
    orderingHistory ? $.__views.__alloyId1123.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1123!click!orderingHistory"] = true;
    $.__views.__alloyId1124 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1124"
    });
    $.__views.postpaid.add($.__views.__alloyId1124);
    $.__views.__alloyId1125 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1125"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1125);
    $.__views.__alloyId1126 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
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
=======
        id: "__alloyId1126"
    });
    $.__views.__alloyId1125.add($.__views.__alloyId1126);
    report ? $.__views.__alloyId1126.addEventListener("click", report) : __defers["$.__views.__alloyId1126!click!report"] = true;
    $.__views.__alloyId1127 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1127"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1127);
    $.__views.__alloyId1128 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
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
=======
        id: "__alloyId1128"
    });
    $.__views.__alloyId1127.add($.__views.__alloyId1128);
    faq ? $.__views.__alloyId1128.addEventListener("click", faq) : __defers["$.__views.__alloyId1128!click!faq"] = true;
    $.__views.__alloyId1129 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1129"
    });
    $.__views.__alloyId1124.add($.__views.__alloyId1129);
    $.__views.__alloyId1130 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1300"
    });
    $.__views.__alloyId1299.add($.__views.__alloyId1300);
    orderingHistory ? $.__views.__alloyId1300.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1300!click!orderingHistory"] = true;
=======
        id: "__alloyId1130"
    });
    $.__views.__alloyId1129.add($.__views.__alloyId1130);
    orderingHistory ? $.__views.__alloyId1130.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1130!click!orderingHistory"] = true;
>>>>>>> origin/master
    $.__views.prepaid = Ti.UI.createScrollView({
        id: "prepaid",
        layout: "vertical",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId1227.add($.__views.prepaid);
    $.__views.__alloyId1301 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1301"
    });
    $.__views.prepaid.add($.__views.__alloyId1301);
    $.__views.__alloyId1302 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1302"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1302);
    $.__views.__alloyId1303 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1303"
    });
    $.__views.__alloyId1302.add($.__views.__alloyId1303);
    accDetail ? $.__views.__alloyId1303.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1303!click!accDetail"] = true;
    $.__views.__alloyId1304 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1304"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1304);
    $.__views.__alloyId1305 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1305"
    });
    $.__views.__alloyId1304.add($.__views.__alloyId1305);
    profile ? $.__views.__alloyId1305.addEventListener("click", profile) : __defers["$.__views.__alloyId1305!click!profile"] = true;
    $.__views.__alloyId1306 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1306"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1306);
    $.__views.__alloyId1307 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1307"
    });
    $.__views.__alloyId1306.add($.__views.__alloyId1307);
    makePayment ? $.__views.__alloyId1307.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1307!click!makePayment"] = true;
    $.__views.__alloyId1308 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1308"
    });
    $.__views.prepaid.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1309"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1309);
    $.__views.__alloyId1310 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1057.add($.__views.prepaid);
    $.__views.__alloyId1131 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1131"
    });
    $.__views.prepaid.add($.__views.__alloyId1131);
    $.__views.__alloyId1132 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1132"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1132);
    $.__views.__alloyId1133 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1133"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1133);
    accDetail ? $.__views.__alloyId1133.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1133!click!accDetail"] = true;
    $.__views.__alloyId1134 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1134"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1134);
    $.__views.__alloyId1135 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1135"
    });
    $.__views.__alloyId1134.add($.__views.__alloyId1135);
    profile ? $.__views.__alloyId1135.addEventListener("click", profile) : __defers["$.__views.__alloyId1135!click!profile"] = true;
    $.__views.__alloyId1136 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1136"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1136);
    $.__views.__alloyId1137 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1137"
    });
    $.__views.__alloyId1136.add($.__views.__alloyId1137);
    makePayment ? $.__views.__alloyId1137.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1137!click!makePayment"] = true;
    $.__views.__alloyId1138 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1138"
    });
    $.__views.prepaid.add($.__views.__alloyId1138);
    $.__views.__alloyId1139 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1139"
    });
    $.__views.__alloyId1138.add($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Prepaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1310"
    });
    $.__views.__alloyId1309.add($.__views.__alloyId1310);
    accDetail ? $.__views.__alloyId1310.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1310!click!accDetail"] = true;
    $.__views.__alloyId1311 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1311"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1311);
    $.__views.__alloyId1312 = Ti.UI.createLabel({
=======
        id: "__alloyId1140"
    });
    $.__views.__alloyId1139.add($.__views.__alloyId1140);
    accDetail ? $.__views.__alloyId1140.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1140!click!accDetail"] = true;
    $.__views.__alloyId1141 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1141"
    });
    $.__views.__alloyId1138.add($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1312"
    });
    $.__views.__alloyId1311.add($.__views.__alloyId1312);
    profile ? $.__views.__alloyId1312.addEventListener("click", profile) : __defers["$.__views.__alloyId1312!click!profile"] = true;
    $.__views.__alloyId1313 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1313"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createLabel({
=======
        id: "__alloyId1142"
    });
    $.__views.__alloyId1141.add($.__views.__alloyId1142);
    profile ? $.__views.__alloyId1142.addEventListener("click", profile) : __defers["$.__views.__alloyId1142!click!profile"] = true;
    $.__views.__alloyId1143 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1143"
    });
    $.__views.__alloyId1138.add($.__views.__alloyId1143);
    $.__views.__alloyId1144 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1314"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1314);
    makePayment ? $.__views.__alloyId1314.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1314!click!makePayment"] = true;
    $.__views.__alloyId1315 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1315"
    });
    $.__views.prepaid.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1316"
    });
    $.__views.__alloyId1315.add($.__views.__alloyId1316);
    $.__views.__alloyId1317 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1317"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1317);
    vas ? $.__views.__alloyId1317.addEventListener("click", vas) : __defers["$.__views.__alloyId1317!click!vas"] = true;
    $.__views.__alloyId1318 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1318"
    });
    $.__views.__alloyId1315.add($.__views.__alloyId1318);
    $.__views.__alloyId1319 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1319"
    });
    $.__views.__alloyId1318.add($.__views.__alloyId1319);
    subline ? $.__views.__alloyId1319.addEventListener("click", subline) : __defers["$.__views.__alloyId1319!click!subline"] = true;
    $.__views.__alloyId1320 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1320"
    });
    $.__views.__alloyId1315.add($.__views.__alloyId1320);
    $.__views.__alloyId1321 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1321"
    });
    $.__views.__alloyId1320.add($.__views.__alloyId1321);
    subline ? $.__views.__alloyId1321.addEventListener("click", subline) : __defers["$.__views.__alloyId1321!click!subline"] = true;
    $.__views.__alloyId1322 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1322"
    });
    $.__views.prepaid.add($.__views.__alloyId1322);
    $.__views.__alloyId1323 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1323"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1323);
    $.__views.__alloyId1324 = Ti.UI.createLabel({
=======
        id: "__alloyId1144"
    });
    $.__views.__alloyId1143.add($.__views.__alloyId1144);
    makePayment ? $.__views.__alloyId1144.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1144!click!makePayment"] = true;
    $.__views.__alloyId1145 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1145"
    });
    $.__views.prepaid.add($.__views.__alloyId1145);
    $.__views.__alloyId1146 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1146"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1146);
    $.__views.__alloyId1147 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1147"
    });
    $.__views.__alloyId1146.add($.__views.__alloyId1147);
    vas ? $.__views.__alloyId1147.addEventListener("click", vas) : __defers["$.__views.__alloyId1147!click!vas"] = true;
    $.__views.__alloyId1148 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1148"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1148);
    $.__views.__alloyId1149 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1149"
    });
    $.__views.__alloyId1148.add($.__views.__alloyId1149);
    subline ? $.__views.__alloyId1149.addEventListener("click", subline) : __defers["$.__views.__alloyId1149!click!subline"] = true;
    $.__views.__alloyId1150 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1150"
    });
    $.__views.__alloyId1145.add($.__views.__alloyId1150);
    $.__views.__alloyId1151 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1151"
    });
    $.__views.__alloyId1150.add($.__views.__alloyId1151);
    subline ? $.__views.__alloyId1151.addEventListener("click", subline) : __defers["$.__views.__alloyId1151!click!subline"] = true;
    $.__views.__alloyId1152 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1152"
    });
    $.__views.prepaid.add($.__views.__alloyId1152);
    $.__views.__alloyId1153 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1153"
    });
    $.__views.__alloyId1152.add($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1324"
    });
    $.__views.__alloyId1323.add($.__views.__alloyId1324);
    subline ? $.__views.__alloyId1324.addEventListener("click", subline) : __defers["$.__views.__alloyId1324!click!subline"] = true;
    $.__views.__alloyId1325 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1325"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1325);
    $.__views.__alloyId1326 = Ti.UI.createLabel({
=======
        id: "__alloyId1154"
    });
    $.__views.__alloyId1153.add($.__views.__alloyId1154);
    subline ? $.__views.__alloyId1154.addEventListener("click", subline) : __defers["$.__views.__alloyId1154!click!subline"] = true;
    $.__views.__alloyId1155 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1155"
    });
    $.__views.__alloyId1152.add($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1326"
    });
    $.__views.__alloyId1325.add($.__views.__alloyId1326);
    subline ? $.__views.__alloyId1326.addEventListener("click", subline) : __defers["$.__views.__alloyId1326!click!subline"] = true;
    $.__views.__alloyId1327 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1327"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1327);
    $.__views.__alloyId1328 = Ti.UI.createLabel({
=======
        id: "__alloyId1156"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1156);
    subline ? $.__views.__alloyId1156.addEventListener("click", subline) : __defers["$.__views.__alloyId1156!click!subline"] = true;
    $.__views.__alloyId1157 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1157"
    });
    $.__views.__alloyId1152.add($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1328"
    });
    $.__views.__alloyId1327.add($.__views.__alloyId1328);
    subline ? $.__views.__alloyId1328.addEventListener("click", subline) : __defers["$.__views.__alloyId1328!click!subline"] = true;
    $.__views.__alloyId1329 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1329"
    });
    $.__views.prepaid.add($.__views.__alloyId1329);
    $.__views.__alloyId1330 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1330"
    });
    $.__views.__alloyId1329.add($.__views.__alloyId1330);
    $.__views.__alloyId1331 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1331"
    });
    $.__views.__alloyId1330.add($.__views.__alloyId1331);
    vas ? $.__views.__alloyId1331.addEventListener("click", vas) : __defers["$.__views.__alloyId1331!click!vas"] = true;
    $.__views.__alloyId1332 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1332"
    });
    $.__views.__alloyId1329.add($.__views.__alloyId1332);
    $.__views.__alloyId1333 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1333"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1333);
    loyalty ? $.__views.__alloyId1333.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1333!click!loyalty"] = true;
    $.__views.__alloyId1334 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1334"
    });
    $.__views.__alloyId1329.add($.__views.__alloyId1334);
    $.__views.__alloyId1335 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1335"
    });
    $.__views.__alloyId1334.add($.__views.__alloyId1335);
    report ? $.__views.__alloyId1335.addEventListener("click", report) : __defers["$.__views.__alloyId1335!click!report"] = true;
    $.__views.__alloyId1336 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1336"
    });
    $.__views.prepaid.add($.__views.__alloyId1336);
    $.__views.__alloyId1337 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1337"
    });
    $.__views.__alloyId1336.add($.__views.__alloyId1337);
    $.__views.__alloyId1338 = Ti.UI.createLabel({
=======
        id: "__alloyId1158"
    });
    $.__views.__alloyId1157.add($.__views.__alloyId1158);
    subline ? $.__views.__alloyId1158.addEventListener("click", subline) : __defers["$.__views.__alloyId1158!click!subline"] = true;
    $.__views.__alloyId1159 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1159"
    });
    $.__views.prepaid.add($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1160"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1160);
    $.__views.__alloyId1161 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1161"
    });
    $.__views.__alloyId1160.add($.__views.__alloyId1161);
    vas ? $.__views.__alloyId1161.addEventListener("click", vas) : __defers["$.__views.__alloyId1161!click!vas"] = true;
    $.__views.__alloyId1162 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1162"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1163"
    });
    $.__views.__alloyId1162.add($.__views.__alloyId1163);
    loyalty ? $.__views.__alloyId1163.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1163!click!loyalty"] = true;
    $.__views.__alloyId1164 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1164"
    });
    $.__views.__alloyId1159.add($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1165"
    });
    $.__views.__alloyId1164.add($.__views.__alloyId1165);
    report ? $.__views.__alloyId1165.addEventListener("click", report) : __defers["$.__views.__alloyId1165!click!report"] = true;
    $.__views.__alloyId1166 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1166"
    });
    $.__views.prepaid.add($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1167"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1338"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1338);
    vas ? $.__views.__alloyId1338.addEventListener("click", vas) : __defers["$.__views.__alloyId1338!click!vas"] = true;
    $.__views.__alloyId1339 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1339"
    });
    $.__views.__alloyId1336.add($.__views.__alloyId1339);
    $.__views.__alloyId1340 = Ti.UI.createLabel({
=======
        id: "__alloyId1168"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1168);
    vas ? $.__views.__alloyId1168.addEventListener("click", vas) : __defers["$.__views.__alloyId1168!click!vas"] = true;
    $.__views.__alloyId1169 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1169"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1169);
    $.__views.__alloyId1170 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1340"
    });
    $.__views.__alloyId1339.add($.__views.__alloyId1340);
    loyalty ? $.__views.__alloyId1340.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1340!click!loyalty"] = true;
    $.__views.__alloyId1341 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1341"
    });
    $.__views.__alloyId1336.add($.__views.__alloyId1341);
    $.__views.__alloyId1342 = Ti.UI.createLabel({
=======
        id: "__alloyId1170"
    });
    $.__views.__alloyId1169.add($.__views.__alloyId1170);
    loyalty ? $.__views.__alloyId1170.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1170!click!loyalty"] = true;
    $.__views.__alloyId1171 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1171"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1342"
    });
    $.__views.__alloyId1341.add($.__views.__alloyId1342);
    loyalty ? $.__views.__alloyId1342.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1342!click!loyalty"] = true;
    $.__views.__alloyId1343 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1343"
    });
    $.__views.prepaid.add($.__views.__alloyId1343);
    $.__views.__alloyId1344 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1344"
    });
    $.__views.__alloyId1343.add($.__views.__alloyId1344);
    $.__views.__alloyId1345 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1345"
    });
    $.__views.__alloyId1344.add($.__views.__alloyId1345);
    report ? $.__views.__alloyId1345.addEventListener("click", report) : __defers["$.__views.__alloyId1345!click!report"] = true;
    $.__views.__alloyId1346 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1346"
    });
    $.__views.__alloyId1343.add($.__views.__alloyId1346);
    $.__views.__alloyId1347 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId1347"
    });
    $.__views.__alloyId1346.add($.__views.__alloyId1347);
    faq ? $.__views.__alloyId1347.addEventListener("click", faq) : __defers["$.__views.__alloyId1347!click!faq"] = true;
    $.__views.__alloyId1348 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1348"
    });
    $.__views.__alloyId1343.add($.__views.__alloyId1348);
    $.__views.__alloyId1349 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1349"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1349);
    orderingHistory ? $.__views.__alloyId1349.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1349!click!orderingHistory"] = true;
    $.__views.__alloyId1350 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1350"
    });
    $.__views.prepaid.add($.__views.__alloyId1350);
    $.__views.__alloyId1351 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1351"
    });
    $.__views.__alloyId1350.add($.__views.__alloyId1351);
    $.__views.__alloyId1352 = Ti.UI.createLabel({
=======
        id: "__alloyId1172"
    });
    $.__views.__alloyId1171.add($.__views.__alloyId1172);
    loyalty ? $.__views.__alloyId1172.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1172!click!loyalty"] = true;
    $.__views.__alloyId1173 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1173"
    });
    $.__views.prepaid.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1174"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1175"
    });
    $.__views.__alloyId1174.add($.__views.__alloyId1175);
    report ? $.__views.__alloyId1175.addEventListener("click", report) : __defers["$.__views.__alloyId1175!click!report"] = true;
    $.__views.__alloyId1176 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1176"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId1177"
    });
    $.__views.__alloyId1176.add($.__views.__alloyId1177);
    faq ? $.__views.__alloyId1177.addEventListener("click", faq) : __defers["$.__views.__alloyId1177!click!faq"] = true;
    $.__views.__alloyId1178 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1178"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1178);
    $.__views.__alloyId1179 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1179"
    });
    $.__views.__alloyId1178.add($.__views.__alloyId1179);
    orderingHistory ? $.__views.__alloyId1179.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1179!click!orderingHistory"] = true;
    $.__views.__alloyId1180 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1180"
    });
    $.__views.prepaid.add($.__views.__alloyId1180);
    $.__views.__alloyId1181 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1181"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1352"
    });
    $.__views.__alloyId1351.add($.__views.__alloyId1352);
    report ? $.__views.__alloyId1352.addEventListener("click", report) : __defers["$.__views.__alloyId1352!click!report"] = true;
    $.__views.__alloyId1353 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1353"
    });
    $.__views.__alloyId1350.add($.__views.__alloyId1353);
    $.__views.__alloyId1354 = Ti.UI.createLabel({
=======
        id: "__alloyId1182"
    });
    $.__views.__alloyId1181.add($.__views.__alloyId1182);
    report ? $.__views.__alloyId1182.addEventListener("click", report) : __defers["$.__views.__alloyId1182!click!report"] = true;
    $.__views.__alloyId1183 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1183"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1354"
    });
    $.__views.__alloyId1353.add($.__views.__alloyId1354);
    faq ? $.__views.__alloyId1354.addEventListener("click", faq) : __defers["$.__views.__alloyId1354!click!faq"] = true;
    $.__views.__alloyId1355 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1355"
    });
    $.__views.__alloyId1350.add($.__views.__alloyId1355);
    $.__views.__alloyId1356 = Ti.UI.createLabel({
=======
        id: "__alloyId1184"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1184);
    faq ? $.__views.__alloyId1184.addEventListener("click", faq) : __defers["$.__views.__alloyId1184!click!faq"] = true;
    $.__views.__alloyId1185 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1185"
    });
    $.__views.__alloyId1180.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1356"
    });
    $.__views.__alloyId1355.add($.__views.__alloyId1356);
    orderingHistory ? $.__views.__alloyId1356.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1356!click!orderingHistory"] = true;
=======
        id: "__alloyId1186"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1186);
    orderingHistory ? $.__views.__alloyId1186.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1186!click!orderingHistory"] = true;
>>>>>>> origin/master
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
<<<<<<< HEAD
    __defers["$.__views.__alloyId1206!click!close"] && $.__views.__alloyId1206.addEventListener("click", close);
    __defers["$.__views.__alloyId1207!click!gallery"] && $.__views.__alloyId1207.addEventListener("click", gallery);
    __defers["$.__views.__alloyId1212!click!facebook"] && $.__views.__alloyId1212.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1220!click!closepayment"] && $.__views.__alloyId1220.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1221!click!paymentPostpaid"] && $.__views.__alloyId1221.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1224!click!paymentPrepaid"] && $.__views.__alloyId1224.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1234!click!editPhoto"] && $.__views.__alloyId1234.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1235!click!editPhoto"] && $.__views.__alloyId1235.addEventListener("click", editPhoto);
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
    __defers["$.__views.__alloyId1303!click!accDetail"] && $.__views.__alloyId1303.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1305!click!profile"] && $.__views.__alloyId1305.addEventListener("click", profile);
    __defers["$.__views.__alloyId1307!click!makePayment"] && $.__views.__alloyId1307.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1310!click!accDetail"] && $.__views.__alloyId1310.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1312!click!profile"] && $.__views.__alloyId1312.addEventListener("click", profile);
    __defers["$.__views.__alloyId1314!click!makePayment"] && $.__views.__alloyId1314.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1317!click!vas"] && $.__views.__alloyId1317.addEventListener("click", vas);
    __defers["$.__views.__alloyId1319!click!subline"] && $.__views.__alloyId1319.addEventListener("click", subline);
    __defers["$.__views.__alloyId1321!click!subline"] && $.__views.__alloyId1321.addEventListener("click", subline);
    __defers["$.__views.__alloyId1324!click!subline"] && $.__views.__alloyId1324.addEventListener("click", subline);
    __defers["$.__views.__alloyId1326!click!subline"] && $.__views.__alloyId1326.addEventListener("click", subline);
    __defers["$.__views.__alloyId1328!click!subline"] && $.__views.__alloyId1328.addEventListener("click", subline);
    __defers["$.__views.__alloyId1331!click!vas"] && $.__views.__alloyId1331.addEventListener("click", vas);
    __defers["$.__views.__alloyId1333!click!loyalty"] && $.__views.__alloyId1333.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1335!click!report"] && $.__views.__alloyId1335.addEventListener("click", report);
    __defers["$.__views.__alloyId1338!click!vas"] && $.__views.__alloyId1338.addEventListener("click", vas);
    __defers["$.__views.__alloyId1340!click!loyalty"] && $.__views.__alloyId1340.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1342!click!loyalty"] && $.__views.__alloyId1342.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1345!click!report"] && $.__views.__alloyId1345.addEventListener("click", report);
    __defers["$.__views.__alloyId1347!click!faq"] && $.__views.__alloyId1347.addEventListener("click", faq);
    __defers["$.__views.__alloyId1349!click!orderingHistory"] && $.__views.__alloyId1349.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1352!click!report"] && $.__views.__alloyId1352.addEventListener("click", report);
    __defers["$.__views.__alloyId1354!click!faq"] && $.__views.__alloyId1354.addEventListener("click", faq);
    __defers["$.__views.__alloyId1356!click!orderingHistory"] && $.__views.__alloyId1356.addEventListener("click", orderingHistory);
=======
    __defers["$.__views.__alloyId1036!click!close"] && $.__views.__alloyId1036.addEventListener("click", close);
    __defers["$.__views.__alloyId1037!click!gallery"] && $.__views.__alloyId1037.addEventListener("click", gallery);
    __defers["$.__views.__alloyId1042!click!facebook"] && $.__views.__alloyId1042.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1050!click!closepayment"] && $.__views.__alloyId1050.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1051!click!paymentPostpaid"] && $.__views.__alloyId1051.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1054!click!paymentPrepaid"] && $.__views.__alloyId1054.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1064!click!editPhoto"] && $.__views.__alloyId1064.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1065!click!editPhoto"] && $.__views.__alloyId1065.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1077!click!accDetail"] && $.__views.__alloyId1077.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1079!click!profile"] && $.__views.__alloyId1079.addEventListener("click", profile);
    __defers["$.__views.__alloyId1081!click!makePayment"] && $.__views.__alloyId1081.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1084!click!accDetail"] && $.__views.__alloyId1084.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1086!click!profile"] && $.__views.__alloyId1086.addEventListener("click", profile);
    __defers["$.__views.__alloyId1088!click!makePayment"] && $.__views.__alloyId1088.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1091!click!vas"] && $.__views.__alloyId1091.addEventListener("click", vas);
    __defers["$.__views.__alloyId1093!click!subline"] && $.__views.__alloyId1093.addEventListener("click", subline);
    __defers["$.__views.__alloyId1095!click!subline"] && $.__views.__alloyId1095.addEventListener("click", subline);
    __defers["$.__views.__alloyId1098!click!subline"] && $.__views.__alloyId1098.addEventListener("click", subline);
    __defers["$.__views.__alloyId1100!click!subline"] && $.__views.__alloyId1100.addEventListener("click", subline);
    __defers["$.__views.__alloyId1102!click!subline"] && $.__views.__alloyId1102.addEventListener("click", subline);
    __defers["$.__views.__alloyId1105!click!vas"] && $.__views.__alloyId1105.addEventListener("click", vas);
    __defers["$.__views.__alloyId1107!click!loyalty"] && $.__views.__alloyId1107.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1109!click!report"] && $.__views.__alloyId1109.addEventListener("click", report);
    __defers["$.__views.__alloyId1112!click!vas"] && $.__views.__alloyId1112.addEventListener("click", vas);
    __defers["$.__views.__alloyId1114!click!loyalty"] && $.__views.__alloyId1114.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1116!click!loyalty"] && $.__views.__alloyId1116.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1119!click!report"] && $.__views.__alloyId1119.addEventListener("click", report);
    __defers["$.__views.__alloyId1121!click!faq"] && $.__views.__alloyId1121.addEventListener("click", faq);
    __defers["$.__views.__alloyId1123!click!orderingHistory"] && $.__views.__alloyId1123.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1126!click!report"] && $.__views.__alloyId1126.addEventListener("click", report);
    __defers["$.__views.__alloyId1128!click!faq"] && $.__views.__alloyId1128.addEventListener("click", faq);
    __defers["$.__views.__alloyId1130!click!orderingHistory"] && $.__views.__alloyId1130.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1133!click!accDetail"] && $.__views.__alloyId1133.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1135!click!profile"] && $.__views.__alloyId1135.addEventListener("click", profile);
    __defers["$.__views.__alloyId1137!click!makePayment"] && $.__views.__alloyId1137.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1140!click!accDetail"] && $.__views.__alloyId1140.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1142!click!profile"] && $.__views.__alloyId1142.addEventListener("click", profile);
    __defers["$.__views.__alloyId1144!click!makePayment"] && $.__views.__alloyId1144.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1147!click!vas"] && $.__views.__alloyId1147.addEventListener("click", vas);
    __defers["$.__views.__alloyId1149!click!subline"] && $.__views.__alloyId1149.addEventListener("click", subline);
    __defers["$.__views.__alloyId1151!click!subline"] && $.__views.__alloyId1151.addEventListener("click", subline);
    __defers["$.__views.__alloyId1154!click!subline"] && $.__views.__alloyId1154.addEventListener("click", subline);
    __defers["$.__views.__alloyId1156!click!subline"] && $.__views.__alloyId1156.addEventListener("click", subline);
    __defers["$.__views.__alloyId1158!click!subline"] && $.__views.__alloyId1158.addEventListener("click", subline);
    __defers["$.__views.__alloyId1161!click!vas"] && $.__views.__alloyId1161.addEventListener("click", vas);
    __defers["$.__views.__alloyId1163!click!loyalty"] && $.__views.__alloyId1163.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1165!click!report"] && $.__views.__alloyId1165.addEventListener("click", report);
    __defers["$.__views.__alloyId1168!click!vas"] && $.__views.__alloyId1168.addEventListener("click", vas);
    __defers["$.__views.__alloyId1170!click!loyalty"] && $.__views.__alloyId1170.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1172!click!loyalty"] && $.__views.__alloyId1172.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1175!click!report"] && $.__views.__alloyId1175.addEventListener("click", report);
    __defers["$.__views.__alloyId1177!click!faq"] && $.__views.__alloyId1177.addEventListener("click", faq);
    __defers["$.__views.__alloyId1179!click!orderingHistory"] && $.__views.__alloyId1179.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1182!click!report"] && $.__views.__alloyId1182.addEventListener("click", report);
    __defers["$.__views.__alloyId1184!click!faq"] && $.__views.__alloyId1184.addEventListener("click", faq);
    __defers["$.__views.__alloyId1186!click!orderingHistory"] && $.__views.__alloyId1186.addEventListener("click", orderingHistory);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;