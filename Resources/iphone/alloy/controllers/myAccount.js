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
<<<<<<< HEAD
=======
    }
<<<<<<< HEAD
=======
    function payment() {
        DRAWER.navigation("payment", 1);
>>>>>>> origin/master
    }
>>>>>>> origin/master
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
<<<<<<< HEAD
    }
    function orderingHistory() {
        DRAWER.navigation("orderHistory", 1);
=======
>>>>>>> origin/master
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
    $.__views.__alloyId1028 = Alloy.createController("_header", {
        id: "__alloyId1028",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId1028.setParent($.__views.myAccount);
=======
<<<<<<< HEAD
    $.__views.__alloyId1192 = Alloy.createController("_header", {
        id: "__alloyId1192",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId1192.setParent($.__views.myAccount);
=======
    $.__views.__alloyId706 = Alloy.createController("_header", {
        id: "__alloyId706",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId706.setParent($.__views.myAccount);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
<<<<<<< HEAD
    $.__views.__alloyId1029 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1193 = Ti.UI.createView({
=======
    $.__views.__alloyId707 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1029"
=======
<<<<<<< HEAD
        id: "__alloyId1193"
    });
    $.__views.photo.add($.__views.__alloyId1193);
    $.__views.__alloyId1194 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1194"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1195"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createImageView({
=======
        id: "__alloyId707"
>>>>>>> origin/master
    });
    $.__views.photo.add($.__views.__alloyId1029);
    $.__views.__alloyId1030 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1030"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1030);
    $.__views.__alloyId1031 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1031"
    });
<<<<<<< HEAD
    $.__views.__alloyId1030.add($.__views.__alloyId1031);
    $.__views.__alloyId1032 = Ti.UI.createImageView({
=======
    $.__views.__alloyId708.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1032"
=======
<<<<<<< HEAD
        id: "__alloyId1196"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1196);
    close ? $.__views.__alloyId1196.addEventListener("click", close) : __defers["$.__views.__alloyId1196!click!close"] = true;
    $.__views.__alloyId1197 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1197"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1197);
    gallery ? $.__views.__alloyId1197.addEventListener("click", gallery) : __defers["$.__views.__alloyId1197!click!gallery"] = true;
    $.__views.__alloyId1198 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1198"
    });
    $.__views.__alloyId1197.add($.__views.__alloyId1198);
    $.__views.__alloyId1199 = Ti.UI.createImageView({
=======
        id: "__alloyId710"
>>>>>>> origin/master
    });
    $.__views.__alloyId1030.add($.__views.__alloyId1032);
    close ? $.__views.__alloyId1032.addEventListener("click", close) : __defers["$.__views.__alloyId1032!click!close"] = true;
    $.__views.__alloyId1033 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1033"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1033);
    gallery ? $.__views.__alloyId1033.addEventListener("click", gallery) : __defers["$.__views.__alloyId1033!click!gallery"] = true;
    $.__views.__alloyId1034 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1034"
    });
<<<<<<< HEAD
    $.__views.__alloyId1033.add($.__views.__alloyId1034);
    $.__views.__alloyId1035 = Ti.UI.createImageView({
=======
    $.__views.__alloyId711.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "#66FFFF",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/gallery_icon.png",
<<<<<<< HEAD
        id: "__alloyId1035"
=======
<<<<<<< HEAD
        id: "__alloyId1199"
    });
    $.__views.__alloyId1198.add($.__views.__alloyId1199);
    $.__views.__alloyId1200 = Ti.UI.createView({
        id: "__alloyId1200"
    });
    $.__views.__alloyId1197.add($.__views.__alloyId1200);
    $.__views.__alloyId1201 = Ti.UI.createLabel({
=======
        id: "__alloyId713"
>>>>>>> origin/master
    });
    $.__views.__alloyId1034.add($.__views.__alloyId1035);
    $.__views.__alloyId1036 = Ti.UI.createView({
        id: "__alloyId1036"
    });
<<<<<<< HEAD
    $.__views.__alloyId1033.add($.__views.__alloyId1036);
    $.__views.__alloyId1037 = Ti.UI.createLabel({
=======
    $.__views.__alloyId711.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1037"
=======
<<<<<<< HEAD
        id: "__alloyId1201"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1202"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1202);
    facebook ? $.__views.__alloyId1202.addEventListener("click", facebook) : __defers["$.__views.__alloyId1202!click!facebook"] = true;
    $.__views.__alloyId1203 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1203"
    });
    $.__views.__alloyId1202.add($.__views.__alloyId1203);
    $.__views.__alloyId1204 = Ti.UI.createImageView({
=======
        id: "__alloyId715"
>>>>>>> origin/master
    });
    $.__views.__alloyId1036.add($.__views.__alloyId1037);
    $.__views.__alloyId1038 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1038"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1038);
    facebook ? $.__views.__alloyId1038.addEventListener("click", facebook) : __defers["$.__views.__alloyId1038!click!facebook"] = true;
    $.__views.__alloyId1039 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId1039"
    });
<<<<<<< HEAD
    $.__views.__alloyId1038.add($.__views.__alloyId1039);
    $.__views.__alloyId1040 = Ti.UI.createImageView({
=======
    $.__views.__alloyId716.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/facebook_icon.png",
<<<<<<< HEAD
        id: "__alloyId1040"
=======
<<<<<<< HEAD
        id: "__alloyId1204"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createView({
        id: "__alloyId1205"
    });
    $.__views.__alloyId1202.add($.__views.__alloyId1205);
    $.__views.__alloyId1206 = Ti.UI.createLabel({
=======
        id: "__alloyId718"
>>>>>>> origin/master
    });
    $.__views.__alloyId1039.add($.__views.__alloyId1040);
    $.__views.__alloyId1041 = Ti.UI.createView({
        id: "__alloyId1041"
    });
<<<<<<< HEAD
    $.__views.__alloyId1038.add($.__views.__alloyId1041);
    $.__views.__alloyId1042 = Ti.UI.createLabel({
=======
    $.__views.__alloyId716.add($.__views.__alloyId719);
    $.__views.__alloyId720 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1042"
    });
    $.__views.__alloyId1041.add($.__views.__alloyId1042);
    $.__views.payment = Ti.UI.createView({
        id: "payment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.payment);
    $.__views.__alloyId1043 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId1043"
    });
    $.__views.payment.add($.__views.__alloyId1043);
    $.__views.__alloyId1044 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1044"
    });
    $.__views.__alloyId1043.add($.__views.__alloyId1044);
    $.__views.__alloyId1045 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1045"
    });
    $.__views.__alloyId1044.add($.__views.__alloyId1045);
    $.__views.__alloyId1046 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1046"
    });
    $.__views.__alloyId1044.add($.__views.__alloyId1046);
    closepayment ? $.__views.__alloyId1046.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1046!click!closepayment"] = true;
    $.__views.__alloyId1047 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1047"
    });
    $.__views.__alloyId1043.add($.__views.__alloyId1047);
    paymentPostpaid ? $.__views.__alloyId1047.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1047!click!paymentPostpaid"] = true;
    $.__views.__alloyId1048 = Ti.UI.createView({
        id: "__alloyId1048"
    });
    $.__views.__alloyId1047.add($.__views.__alloyId1048);
    $.__views.__alloyId1049 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1049"
    });
    $.__views.__alloyId1048.add($.__views.__alloyId1049);
    $.__views.__alloyId1050 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1050"
    });
    $.__views.__alloyId1043.add($.__views.__alloyId1050);
    paymentPrepaid ? $.__views.__alloyId1050.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1050!click!paymentPrepaid"] = true;
    $.__views.__alloyId1051 = Ti.UI.createView({
        id: "__alloyId1051"
    });
    $.__views.__alloyId1050.add($.__views.__alloyId1051);
    $.__views.__alloyId1052 = Ti.UI.createLabel({
        text: "Prepaid TopUp",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1052"
    });
    $.__views.__alloyId1051.add($.__views.__alloyId1052);
    $.__views.__alloyId1053 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1206"
    });
    $.__views.__alloyId1205.add($.__views.__alloyId1206);
    $.__views.payment = Ti.UI.createView({
        id: "payment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.payment);
    $.__views.__alloyId1207 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId1207"
    });
    $.__views.payment.add($.__views.__alloyId1207);
    $.__views.__alloyId1208 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1208"
    });
    $.__views.__alloyId1207.add($.__views.__alloyId1208);
    $.__views.__alloyId1209 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1209"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1209);
    $.__views.__alloyId1210 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1210"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1210);
    closepayment ? $.__views.__alloyId1210.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1210!click!closepayment"] = true;
    $.__views.__alloyId1211 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1211"
    });
    $.__views.__alloyId1207.add($.__views.__alloyId1211);
    paymentPostpaid ? $.__views.__alloyId1211.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1211!click!paymentPostpaid"] = true;
    $.__views.__alloyId1212 = Ti.UI.createView({
        id: "__alloyId1212"
    });
    $.__views.__alloyId1211.add($.__views.__alloyId1212);
    $.__views.__alloyId1213 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1213"
    });
    $.__views.__alloyId1212.add($.__views.__alloyId1213);
    $.__views.__alloyId1214 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1214"
    });
    $.__views.__alloyId1207.add($.__views.__alloyId1214);
    paymentPrepaid ? $.__views.__alloyId1214.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1214!click!paymentPrepaid"] = true;
    $.__views.__alloyId1215 = Ti.UI.createView({
        id: "__alloyId1215"
    });
    $.__views.__alloyId1214.add($.__views.__alloyId1215);
    $.__views.__alloyId1216 = Ti.UI.createLabel({
        text: "Prepaid TopUp",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1216"
    });
    $.__views.__alloyId1215.add($.__views.__alloyId1216);
    $.__views.__alloyId1217 = Ti.UI.createView({
=======
        id: "__alloyId720"
    });
    $.__views.__alloyId719.add($.__views.__alloyId720);
    $.__views.__alloyId721 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
<<<<<<< HEAD
        id: "__alloyId1053"
    });
    $.__views.myAccount.add($.__views.__alloyId1053);
    $.__views.__alloyId1054 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1217"
    });
    $.__views.myAccount.add($.__views.__alloyId1217);
    $.__views.__alloyId1218 = Ti.UI.createView({
=======
        id: "__alloyId721"
    });
    $.__views.myAccount.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
<<<<<<< HEAD
        id: "__alloyId1054"
=======
<<<<<<< HEAD
        id: "__alloyId1218"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1218);
    $.__views.__alloyId1219 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1219"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1219);
    $.__views.__alloyId1220 = Ti.UI.createLabel({
=======
        id: "__alloyId722"
>>>>>>> origin/master
    });
    $.__views.__alloyId1053.add($.__views.__alloyId1054);
    $.__views.__alloyId1055 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1055"
    });
<<<<<<< HEAD
    $.__views.__alloyId1054.add($.__views.__alloyId1055);
    $.__views.__alloyId1056 = Ti.UI.createLabel({
=======
    $.__views.__alloyId722.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId1056"
    });
    $.__views.__alloyId1055.add($.__views.__alloyId1056);
    $.__views.__alloyId1057 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1220"
    });
    $.__views.__alloyId1219.add($.__views.__alloyId1220);
    $.__views.__alloyId1221 = Ti.UI.createLabel({
=======
        id: "__alloyId724"
    });
    $.__views.__alloyId723.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1057"
=======
<<<<<<< HEAD
        id: "__alloyId1221"
    });
    $.__views.__alloyId1219.add($.__views.__alloyId1221);
    $.__views.__alloyId1222 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId1222"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1222);
    $.__views.__alloyId1223 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId1223"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1223);
    $.__views.__alloyId1224 = Ti.UI.createImageView({
=======
        id: "__alloyId725"
>>>>>>> origin/master
    });
    $.__views.__alloyId1055.add($.__views.__alloyId1057);
    $.__views.__alloyId1058 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId1058"
    });
    $.__views.__alloyId1054.add($.__views.__alloyId1058);
    $.__views.__alloyId1059 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId1059"
    });
<<<<<<< HEAD
    $.__views.__alloyId1054.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createImageView({
=======
    $.__views.__alloyId722.add($.__views.__alloyId727);
    $.__views.__alloyId728 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
<<<<<<< HEAD
        id: "__alloyId1060"
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1060);
    editPhoto ? $.__views.__alloyId1060.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1060!click!editPhoto"] = true;
    $.__views.__alloyId1061 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1224"
    });
    $.__views.__alloyId1223.add($.__views.__alloyId1224);
    editPhoto ? $.__views.__alloyId1224.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1224!click!editPhoto"] = true;
    $.__views.__alloyId1225 = Ti.UI.createImageView({
=======
        id: "__alloyId728"
    });
    $.__views.__alloyId727.add($.__views.__alloyId728);
    editPhoto ? $.__views.__alloyId728.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId728!click!editPhoto"] = true;
    $.__views.__alloyId729 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1061"
=======
<<<<<<< HEAD
        id: "__alloyId1225"
    });
    $.__views.__alloyId1223.add($.__views.__alloyId1225);
    editPhoto ? $.__views.__alloyId1225.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1225!click!editPhoto"] = true;
    $.__views.__alloyId1226 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1226"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1226);
    $.__views.__alloyId1227 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId1227"
    });
    $.__views.__alloyId1226.add($.__views.__alloyId1227);
    $.__views.__alloyId1228 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1228"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1228);
    $.__views.__alloyId1229 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId1229"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1229);
    $.__views.__alloyId1230 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId1230"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1230);
    $.__views.__alloyId1231 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId1231"
    });
    $.__views.__alloyId1226.add($.__views.__alloyId1231);
    $.__views.__alloyId1232 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1232"
    });
    $.__views.__alloyId1231.add($.__views.__alloyId1232);
    $.__views.__alloyId1233 = Ti.UI.createLabel({
=======
        id: "__alloyId729"
>>>>>>> origin/master
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1061);
    editPhoto ? $.__views.__alloyId1061.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1061!click!editPhoto"] = true;
    $.__views.__alloyId1062 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1062"
    });
    $.__views.__alloyId1053.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId1063"
    });
    $.__views.__alloyId1062.add($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1064"
    });
<<<<<<< HEAD
    $.__views.__alloyId1063.add($.__views.__alloyId1064);
    $.__views.__alloyId1065 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId1065"
    });
    $.__views.__alloyId1064.add($.__views.__alloyId1065);
    $.__views.__alloyId1066 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId1066"
    });
    $.__views.__alloyId1064.add($.__views.__alloyId1066);
    $.__views.__alloyId1067 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId1067"
    });
    $.__views.__alloyId1062.add($.__views.__alloyId1067);
    $.__views.__alloyId1068 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1068"
    });
    $.__views.__alloyId1067.add($.__views.__alloyId1068);
    $.__views.__alloyId1069 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId1069"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId1070"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1070);
    $.__views.postpaid = Ti.UI.createScrollView({
        id: "postpaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1053.add($.__views.postpaid);
    $.__views.__alloyId1071 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1071"
    });
    $.__views.postpaid.add($.__views.__alloyId1071);
    $.__views.__alloyId1072 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1072"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1073"
    });
    $.__views.__alloyId1072.add($.__views.__alloyId1073);
    accDetail ? $.__views.__alloyId1073.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1073!click!accDetail"] = true;
    $.__views.__alloyId1074 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1074"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1074);
    $.__views.__alloyId1075 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1075"
    });
    $.__views.__alloyId1074.add($.__views.__alloyId1075);
    profile ? $.__views.__alloyId1075.addEventListener("click", profile) : __defers["$.__views.__alloyId1075!click!profile"] = true;
    $.__views.__alloyId1076 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1076"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1076);
    $.__views.__alloyId1077 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1077"
    });
    $.__views.__alloyId1076.add($.__views.__alloyId1077);
    makePayment ? $.__views.__alloyId1077.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1077!click!makePayment"] = true;
    $.__views.__alloyId1078 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1078"
    });
    $.__views.postpaid.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1079"
    });
    $.__views.__alloyId1078.add($.__views.__alloyId1079);
    $.__views.__alloyId1080 = Ti.UI.createLabel({
        text: "Postpaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1080"
=======
    $.__views.__alloyId731.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId733"
    });
    $.__views.__alloyId732.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId734"
    });
    $.__views.__alloyId732.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId735"
    });
    $.__views.__alloyId730.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
<<<<<<< HEAD
        id: "__alloyId1233"
    });
    $.__views.__alloyId1232.add($.__views.__alloyId1233);
    $.__views.__alloyId1234 = Ti.UI.createLabel({
=======
        id: "__alloyId737"
    });
    $.__views.__alloyId736.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
<<<<<<< HEAD
        id: "__alloyId1234"
    });
    $.__views.__alloyId1232.add($.__views.__alloyId1234);
=======
        id: "__alloyId738"
    });
    $.__views.__alloyId736.add($.__views.__alloyId738);
>>>>>>> origin/master
    $.__views.postpaid = Ti.UI.createScrollView({
        id: "postpaid",
        layout: "vertical",
        backgroundColor: "white"
    });
<<<<<<< HEAD
    $.__views.__alloyId1217.add($.__views.postpaid);
    $.__views.__alloyId1235 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1235"
    });
    $.__views.postpaid.add($.__views.__alloyId1235);
    $.__views.__alloyId1236 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1236"
    });
    $.__views.__alloyId1235.add($.__views.__alloyId1236);
    $.__views.__alloyId1237 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1237"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1237);
    accDetail ? $.__views.__alloyId1237.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1237!click!accDetail"] = true;
    $.__views.__alloyId1238 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1238"
    });
    $.__views.__alloyId1235.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1239"
    });
    $.__views.__alloyId1238.add($.__views.__alloyId1239);
    profile ? $.__views.__alloyId1239.addEventListener("click", profile) : __defers["$.__views.__alloyId1239!click!profile"] = true;
    $.__views.__alloyId1240 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1240"
    });
    $.__views.__alloyId1235.add($.__views.__alloyId1240);
    $.__views.__alloyId1241 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1241"
    });
    $.__views.__alloyId1240.add($.__views.__alloyId1241);
    makePayment ? $.__views.__alloyId1241.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1241!click!makePayment"] = true;
    $.__views.__alloyId1242 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1242"
    });
    $.__views.postpaid.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1243"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1243);
    $.__views.__alloyId1244 = Ti.UI.createLabel({
=======
    $.__views.__alloyId721.add($.__views.postpaid);
    $.__views.__alloyId739 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId739"
    });
    $.__views.postpaid.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId740"
    });
    $.__views.__alloyId739.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId741"
    });
    $.__views.__alloyId740.add($.__views.__alloyId741);
    accDetail ? $.__views.__alloyId741.addEventListener("click", accDetail) : __defers["$.__views.__alloyId741!click!accDetail"] = true;
    $.__views.__alloyId742 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId742"
    });
    $.__views.__alloyId739.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId743"
    });
<<<<<<< Updated upstream
    $.__views.__alloyId742.add($.__views.__alloyId743);
    profile ? $.__views.__alloyId743.addEventListener("click", profile) : __defers["$.__views.__alloyId743!click!profile"] = true;
    $.__views.__alloyId744 = Ti.UI.createView({
=======
    $.__views.__alloyId635.add($.__views.__alloyId636);
    profile ? $.__views.__alloyId636.addEventListener("click", profile) : __defers["$.__views.__alloyId636!click!profile"] = true;
    $.__views.__alloyId637 = Ti.UI.createView({
>>>>>>> Stashed changes
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId744"
    });
    $.__views.__alloyId739.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId745"
    });
    $.__views.__alloyId744.add($.__views.__alloyId745);
    payment ? $.__views.__alloyId745.addEventListener("click", payment) : __defers["$.__views.__alloyId745!click!payment"] = true;
    $.__views.__alloyId746 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId746"
    });
    $.__views.postpaid.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId747"
    });
    $.__views.__alloyId746.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Postpaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1244"
    });
    $.__views.__alloyId1243.add($.__views.__alloyId1244);
    accDetail ? $.__views.__alloyId1244.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1244!click!accDetail"] = true;
    $.__views.__alloyId1245 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1245"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1245);
    $.__views.__alloyId1246 = Ti.UI.createLabel({
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1246"
    });
    $.__views.__alloyId1245.add($.__views.__alloyId1246);
    profile ? $.__views.__alloyId1246.addEventListener("click", profile) : __defers["$.__views.__alloyId1246!click!profile"] = true;
    $.__views.__alloyId1247 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1247"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1247);
    $.__views.__alloyId1248 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1248"
    });
    $.__views.__alloyId1247.add($.__views.__alloyId1248);
    makePayment ? $.__views.__alloyId1248.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1248!click!makePayment"] = true;
    $.__views.__alloyId1249 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1249"
    });
    $.__views.postpaid.add($.__views.__alloyId1249);
    $.__views.__alloyId1250 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1250"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1250);
    $.__views.__alloyId1251 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1251"
    });
    $.__views.__alloyId1250.add($.__views.__alloyId1251);
    vas ? $.__views.__alloyId1251.addEventListener("click", vas) : __defers["$.__views.__alloyId1251!click!vas"] = true;
    $.__views.__alloyId1252 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1252"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1253"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1253);
    subline ? $.__views.__alloyId1253.addEventListener("click", subline) : __defers["$.__views.__alloyId1253!click!subline"] = true;
    $.__views.__alloyId1254 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1254"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1254);
    $.__views.__alloyId1255 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1255"
    });
    $.__views.__alloyId1254.add($.__views.__alloyId1255);
    subline ? $.__views.__alloyId1255.addEventListener("click", subline) : __defers["$.__views.__alloyId1255!click!subline"] = true;
    $.__views.__alloyId1256 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1256"
    });
    $.__views.postpaid.add($.__views.__alloyId1256);
    $.__views.__alloyId1257 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1257"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1257);
    $.__views.__alloyId1258 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1258"
    });
    $.__views.__alloyId1257.add($.__views.__alloyId1258);
    subline ? $.__views.__alloyId1258.addEventListener("click", subline) : __defers["$.__views.__alloyId1258!click!subline"] = true;
    $.__views.__alloyId1259 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1259"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1259);
    $.__views.__alloyId1260 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1260"
    });
    $.__views.__alloyId1259.add($.__views.__alloyId1260);
    subline ? $.__views.__alloyId1260.addEventListener("click", subline) : __defers["$.__views.__alloyId1260!click!subline"] = true;
    $.__views.__alloyId1261 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1261"
    });
    $.__views.__alloyId1256.add($.__views.__alloyId1261);
    $.__views.__alloyId1262 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1262"
    });
    $.__views.__alloyId1261.add($.__views.__alloyId1262);
    subline ? $.__views.__alloyId1262.addEventListener("click", subline) : __defers["$.__views.__alloyId1262!click!subline"] = true;
    $.__views.__alloyId1263 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1263"
    });
    $.__views.postpaid.add($.__views.__alloyId1263);
    $.__views.__alloyId1264 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1264"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1264);
    $.__views.__alloyId1265 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1265"
    });
    $.__views.__alloyId1264.add($.__views.__alloyId1265);
    vas ? $.__views.__alloyId1265.addEventListener("click", vas) : __defers["$.__views.__alloyId1265!click!vas"] = true;
    $.__views.__alloyId1266 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1266"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1266);
    $.__views.__alloyId1267 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1267"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1267);
    loyalty ? $.__views.__alloyId1267.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1267!click!loyalty"] = true;
    $.__views.__alloyId1268 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1268"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1268);
    $.__views.__alloyId1269 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1269"
    });
    $.__views.__alloyId1268.add($.__views.__alloyId1269);
    report ? $.__views.__alloyId1269.addEventListener("click", report) : __defers["$.__views.__alloyId1269!click!report"] = true;
    $.__views.__alloyId1270 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1270"
    });
    $.__views.postpaid.add($.__views.__alloyId1270);
    $.__views.__alloyId1271 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1271"
    });
    $.__views.__alloyId1270.add($.__views.__alloyId1271);
    $.__views.__alloyId1272 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1272"
    });
    $.__views.__alloyId1271.add($.__views.__alloyId1272);
    vas ? $.__views.__alloyId1272.addEventListener("click", vas) : __defers["$.__views.__alloyId1272!click!vas"] = true;
    $.__views.__alloyId1273 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1273"
    });
    $.__views.__alloyId1270.add($.__views.__alloyId1273);
    $.__views.__alloyId1274 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1274"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1274);
    loyalty ? $.__views.__alloyId1274.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1274!click!loyalty"] = true;
    $.__views.__alloyId1275 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1275"
    });
    $.__views.__alloyId1270.add($.__views.__alloyId1275);
    $.__views.__alloyId1276 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1276"
    });
    $.__views.__alloyId1275.add($.__views.__alloyId1276);
    loyalty ? $.__views.__alloyId1276.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1276!click!loyalty"] = true;
    $.__views.__alloyId1277 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1277"
    });
    $.__views.postpaid.add($.__views.__alloyId1277);
    $.__views.__alloyId1278 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1278"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1278);
    $.__views.__alloyId1279 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1279"
    });
    $.__views.__alloyId1278.add($.__views.__alloyId1279);
    report ? $.__views.__alloyId1279.addEventListener("click", report) : __defers["$.__views.__alloyId1279!click!report"] = true;
    $.__views.__alloyId1280 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1280"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1280);
    $.__views.__alloyId1281 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId1281"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1281);
    faq ? $.__views.__alloyId1281.addEventListener("click", faq) : __defers["$.__views.__alloyId1281!click!faq"] = true;
    $.__views.__alloyId1282 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1282"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1282);
    $.__views.__alloyId1283 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1283"
    });
    $.__views.__alloyId1282.add($.__views.__alloyId1283);
    orderingHistory ? $.__views.__alloyId1283.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1283!click!orderingHistory"] = true;
    $.__views.__alloyId1284 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1284"
    });
    $.__views.postpaid.add($.__views.__alloyId1284);
    $.__views.__alloyId1285 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1285"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1285);
    $.__views.__alloyId1286 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1286"
    });
    $.__views.__alloyId1285.add($.__views.__alloyId1286);
    report ? $.__views.__alloyId1286.addEventListener("click", report) : __defers["$.__views.__alloyId1286!click!report"] = true;
    $.__views.__alloyId1287 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1287"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1287);
    $.__views.__alloyId1288 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1288"
    });
    $.__views.__alloyId1287.add($.__views.__alloyId1288);
    faq ? $.__views.__alloyId1288.addEventListener("click", faq) : __defers["$.__views.__alloyId1288!click!faq"] = true;
    $.__views.__alloyId1289 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1289"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1289);
    $.__views.__alloyId1290 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1290"
    });
    $.__views.__alloyId1289.add($.__views.__alloyId1290);
    orderingHistory ? $.__views.__alloyId1290.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1290!click!orderingHistory"] = true;
    $.__views.prepaid = Ti.UI.createScrollView({
        id: "prepaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1217.add($.__views.prepaid);
    $.__views.__alloyId1291 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1291"
    });
    $.__views.prepaid.add($.__views.__alloyId1291);
    $.__views.__alloyId1292 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1292"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1292);
    $.__views.__alloyId1293 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1293"
    });
    $.__views.__alloyId1292.add($.__views.__alloyId1293);
    accDetail ? $.__views.__alloyId1293.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1293!click!accDetail"] = true;
    $.__views.__alloyId1294 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1294"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1295"
    });
    $.__views.__alloyId1294.add($.__views.__alloyId1295);
    profile ? $.__views.__alloyId1295.addEventListener("click", profile) : __defers["$.__views.__alloyId1295!click!profile"] = true;
    $.__views.__alloyId1296 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1296"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1296);
    $.__views.__alloyId1297 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1297"
    });
    $.__views.__alloyId1296.add($.__views.__alloyId1297);
    makePayment ? $.__views.__alloyId1297.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1297!click!makePayment"] = true;
    $.__views.__alloyId1298 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1298"
    });
    $.__views.prepaid.add($.__views.__alloyId1298);
    $.__views.__alloyId1299 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1299"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1299);
    $.__views.__alloyId1300 = Ti.UI.createLabel({
=======
        id: "__alloyId748"
>>>>>>> origin/master
    });
    $.__views.__alloyId1079.add($.__views.__alloyId1080);
    accDetail ? $.__views.__alloyId1080.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1080!click!accDetail"] = true;
    $.__views.__alloyId1081 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1081"
    });
    $.__views.__alloyId1078.add($.__views.__alloyId1081);
    $.__views.__alloyId1082 = Ti.UI.createLabel({
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1082"
    });
    $.__views.__alloyId1081.add($.__views.__alloyId1082);
    profile ? $.__views.__alloyId1082.addEventListener("click", profile) : __defers["$.__views.__alloyId1082!click!profile"] = true;
    $.__views.__alloyId1083 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1083"
    });
    $.__views.__alloyId1078.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1084"
    });
    $.__views.__alloyId1083.add($.__views.__alloyId1084);
    makePayment ? $.__views.__alloyId1084.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1084!click!makePayment"] = true;
    $.__views.__alloyId1085 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1085"
    });
    $.__views.postpaid.add($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1086"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1086);
    $.__views.__alloyId1087 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1087"
    });
    $.__views.__alloyId1086.add($.__views.__alloyId1087);
    vas ? $.__views.__alloyId1087.addEventListener("click", vas) : __defers["$.__views.__alloyId1087!click!vas"] = true;
    $.__views.__alloyId1088 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1088"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1088);
    $.__views.__alloyId1089 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1089"
    });
    $.__views.__alloyId1088.add($.__views.__alloyId1089);
    subline ? $.__views.__alloyId1089.addEventListener("click", subline) : __defers["$.__views.__alloyId1089!click!subline"] = true;
    $.__views.__alloyId1090 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1090"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1090);
    $.__views.__alloyId1091 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1091"
    });
    $.__views.__alloyId1090.add($.__views.__alloyId1091);
    subline ? $.__views.__alloyId1091.addEventListener("click", subline) : __defers["$.__views.__alloyId1091!click!subline"] = true;
    $.__views.__alloyId1092 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1092"
    });
    $.__views.postpaid.add($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1093"
    });
    $.__views.__alloyId1092.add($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1094"
    });
    $.__views.__alloyId1093.add($.__views.__alloyId1094);
    subline ? $.__views.__alloyId1094.addEventListener("click", subline) : __defers["$.__views.__alloyId1094!click!subline"] = true;
    $.__views.__alloyId1095 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1095"
    });
    $.__views.__alloyId1092.add($.__views.__alloyId1095);
    $.__views.__alloyId1096 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1096"
    });
    $.__views.__alloyId1095.add($.__views.__alloyId1096);
    subline ? $.__views.__alloyId1096.addEventListener("click", subline) : __defers["$.__views.__alloyId1096!click!subline"] = true;
    $.__views.__alloyId1097 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1097"
    });
    $.__views.__alloyId1092.add($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1098"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1098);
    subline ? $.__views.__alloyId1098.addEventListener("click", subline) : __defers["$.__views.__alloyId1098!click!subline"] = true;
    $.__views.__alloyId1099 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1099"
    });
    $.__views.postpaid.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1100"
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1101"
    });
    $.__views.__alloyId1100.add($.__views.__alloyId1101);
    vas ? $.__views.__alloyId1101.addEventListener("click", vas) : __defers["$.__views.__alloyId1101!click!vas"] = true;
    $.__views.__alloyId1102 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1102"
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1102);
    $.__views.__alloyId1103 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1103"
    });
    $.__views.__alloyId1102.add($.__views.__alloyId1103);
    loyalty ? $.__views.__alloyId1103.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1103!click!loyalty"] = true;
    $.__views.__alloyId1104 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1104"
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1105"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1105);
    report ? $.__views.__alloyId1105.addEventListener("click", report) : __defers["$.__views.__alloyId1105!click!report"] = true;
    $.__views.__alloyId1106 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1106"
    });
    $.__views.postpaid.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1107"
    });
    $.__views.__alloyId1106.add($.__views.__alloyId1107);
    $.__views.__alloyId1108 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1108"
    });
    $.__views.__alloyId1107.add($.__views.__alloyId1108);
    vas ? $.__views.__alloyId1108.addEventListener("click", vas) : __defers["$.__views.__alloyId1108!click!vas"] = true;
    $.__views.__alloyId1109 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1109"
    });
    $.__views.__alloyId1106.add($.__views.__alloyId1109);
    $.__views.__alloyId1110 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1110"
    });
    $.__views.__alloyId1109.add($.__views.__alloyId1110);
    loyalty ? $.__views.__alloyId1110.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1110!click!loyalty"] = true;
    $.__views.__alloyId1111 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1111"
    });
    $.__views.__alloyId1106.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1112"
    });
    $.__views.__alloyId1111.add($.__views.__alloyId1112);
    loyalty ? $.__views.__alloyId1112.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1112!click!loyalty"] = true;
    $.__views.__alloyId1113 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1113"
    });
    $.__views.postpaid.add($.__views.__alloyId1113);
    $.__views.__alloyId1114 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1114"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1114);
    $.__views.__alloyId1115 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1115"
    });
    $.__views.__alloyId1114.add($.__views.__alloyId1115);
    report ? $.__views.__alloyId1115.addEventListener("click", report) : __defers["$.__views.__alloyId1115!click!report"] = true;
    $.__views.__alloyId1116 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1116"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1116);
    $.__views.__alloyId1117 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId1117"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1117);
    faq ? $.__views.__alloyId1117.addEventListener("click", faq) : __defers["$.__views.__alloyId1117!click!faq"] = true;
    $.__views.__alloyId1118 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1118"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1119"
    });
    $.__views.__alloyId1118.add($.__views.__alloyId1119);
    orderingHistory ? $.__views.__alloyId1119.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1119!click!orderingHistory"] = true;
    $.__views.__alloyId1120 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1120"
    });
    $.__views.postpaid.add($.__views.__alloyId1120);
    $.__views.__alloyId1121 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1121"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1121);
    $.__views.__alloyId1122 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1122"
    });
    $.__views.__alloyId1121.add($.__views.__alloyId1122);
    report ? $.__views.__alloyId1122.addEventListener("click", report) : __defers["$.__views.__alloyId1122!click!report"] = true;
    $.__views.__alloyId1123 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1123"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1123);
    $.__views.__alloyId1124 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1124"
    });
    $.__views.__alloyId1123.add($.__views.__alloyId1124);
    faq ? $.__views.__alloyId1124.addEventListener("click", faq) : __defers["$.__views.__alloyId1124!click!faq"] = true;
    $.__views.__alloyId1125 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1125"
    });
    $.__views.__alloyId1120.add($.__views.__alloyId1125);
    $.__views.__alloyId1126 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1126"
    });
    $.__views.__alloyId1125.add($.__views.__alloyId1126);
    orderingHistory ? $.__views.__alloyId1126.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1126!click!orderingHistory"] = true;
    $.__views.prepaid = Ti.UI.createScrollView({
        id: "prepaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1053.add($.__views.prepaid);
    $.__views.__alloyId1127 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1127"
    });
    $.__views.prepaid.add($.__views.__alloyId1127);
    $.__views.__alloyId1128 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1128"
    });
    $.__views.__alloyId1127.add($.__views.__alloyId1128);
    $.__views.__alloyId1129 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1129"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1129);
    accDetail ? $.__views.__alloyId1129.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1129!click!accDetail"] = true;
    $.__views.__alloyId1130 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1130"
    });
    $.__views.__alloyId1127.add($.__views.__alloyId1130);
    $.__views.__alloyId1131 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1131"
    });
    $.__views.__alloyId1130.add($.__views.__alloyId1131);
    profile ? $.__views.__alloyId1131.addEventListener("click", profile) : __defers["$.__views.__alloyId1131!click!profile"] = true;
    $.__views.__alloyId1132 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1132"
    });
    $.__views.__alloyId1127.add($.__views.__alloyId1132);
    $.__views.__alloyId1133 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1133"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1133);
    makePayment ? $.__views.__alloyId1133.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1133!click!makePayment"] = true;
    $.__views.__alloyId1134 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1134"
    });
    $.__views.prepaid.add($.__views.__alloyId1134);
    $.__views.__alloyId1135 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1135"
    });
<<<<<<< HEAD
    $.__views.__alloyId1134.add($.__views.__alloyId1135);
    $.__views.__alloyId1136 = Ti.UI.createLabel({
=======
    $.__views.__alloyId802.add($.__views.__alloyId803);
    $.__views.__alloyId804 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Prepaid Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1136"
=======
<<<<<<< HEAD
        id: "__alloyId1300"
    });
    $.__views.__alloyId1299.add($.__views.__alloyId1300);
    accDetail ? $.__views.__alloyId1300.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1300!click!accDetail"] = true;
    $.__views.__alloyId1301 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1301"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1301);
    $.__views.__alloyId1302 = Ti.UI.createLabel({
=======
        id: "__alloyId804"
>>>>>>> origin/master
    });
    $.__views.__alloyId1135.add($.__views.__alloyId1136);
    accDetail ? $.__views.__alloyId1136.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1136!click!accDetail"] = true;
    $.__views.__alloyId1137 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1137"
    });
<<<<<<< HEAD
    $.__views.__alloyId1134.add($.__views.__alloyId1137);
    $.__views.__alloyId1138 = Ti.UI.createLabel({
=======
    $.__views.__alloyId802.add($.__views.__alloyId805);
    $.__views.__alloyId806 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "My Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1138"
    });
    $.__views.__alloyId1137.add($.__views.__alloyId1138);
    profile ? $.__views.__alloyId1138.addEventListener("click", profile) : __defers["$.__views.__alloyId1138!click!profile"] = true;
    $.__views.__alloyId1139 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1302"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1302);
    profile ? $.__views.__alloyId1302.addEventListener("click", profile) : __defers["$.__views.__alloyId1302!click!profile"] = true;
    $.__views.__alloyId1303 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1303"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createLabel({
=======
        id: "__alloyId806"
    });
<<<<<<< Updated upstream
    $.__views.__alloyId805.add($.__views.__alloyId806);
    profile ? $.__views.__alloyId806.addEventListener("click", profile) : __defers["$.__views.__alloyId806!click!profile"] = true;
    $.__views.__alloyId807 = Ti.UI.createView({
=======
    $.__views.__alloyId698.add($.__views.__alloyId699);
    profile ? $.__views.__alloyId699.addEventListener("click", profile) : __defers["$.__views.__alloyId699!click!profile"] = true;
    $.__views.__alloyId700 = Ti.UI.createView({
>>>>>>> Stashed changes
>>>>>>> origin/master
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1139"
    });
<<<<<<< HEAD
    $.__views.__alloyId1134.add($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createLabel({
=======
    $.__views.__alloyId802.add($.__views.__alloyId807);
    $.__views.__alloyId808 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1140"
=======
<<<<<<< HEAD
        id: "__alloyId1304"
    });
    $.__views.__alloyId1303.add($.__views.__alloyId1304);
    makePayment ? $.__views.__alloyId1304.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1304!click!makePayment"] = true;
    $.__views.__alloyId1305 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1305"
    });
    $.__views.prepaid.add($.__views.__alloyId1305);
    $.__views.__alloyId1306 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1306"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1306);
    $.__views.__alloyId1307 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1307"
    });
    $.__views.__alloyId1306.add($.__views.__alloyId1307);
    vas ? $.__views.__alloyId1307.addEventListener("click", vas) : __defers["$.__views.__alloyId1307!click!vas"] = true;
    $.__views.__alloyId1308 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1308"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1309"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1309);
    subline ? $.__views.__alloyId1309.addEventListener("click", subline) : __defers["$.__views.__alloyId1309!click!subline"] = true;
    $.__views.__alloyId1310 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1310"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1311"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1311);
    subline ? $.__views.__alloyId1311.addEventListener("click", subline) : __defers["$.__views.__alloyId1311!click!subline"] = true;
    $.__views.__alloyId1312 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1312"
    });
    $.__views.prepaid.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1313"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1314"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1314);
    subline ? $.__views.__alloyId1314.addEventListener("click", subline) : __defers["$.__views.__alloyId1314!click!subline"] = true;
    $.__views.__alloyId1315 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1315"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createLabel({
=======
        id: "__alloyId808"
>>>>>>> origin/master
    });
    $.__views.__alloyId1139.add($.__views.__alloyId1140);
    makePayment ? $.__views.__alloyId1140.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1140!click!makePayment"] = true;
    $.__views.__alloyId1141 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1141"
    });
    $.__views.prepaid.add($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1142"
    });
    $.__views.__alloyId1141.add($.__views.__alloyId1142);
    $.__views.__alloyId1143 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1143"
    });
    $.__views.__alloyId1142.add($.__views.__alloyId1143);
    vas ? $.__views.__alloyId1143.addEventListener("click", vas) : __defers["$.__views.__alloyId1143!click!vas"] = true;
    $.__views.__alloyId1144 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1144"
    });
    $.__views.__alloyId1141.add($.__views.__alloyId1144);
    $.__views.__alloyId1145 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1145"
    });
    $.__views.__alloyId1144.add($.__views.__alloyId1145);
    subline ? $.__views.__alloyId1145.addEventListener("click", subline) : __defers["$.__views.__alloyId1145!click!subline"] = true;
    $.__views.__alloyId1146 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1146"
    });
    $.__views.__alloyId1141.add($.__views.__alloyId1146);
    $.__views.__alloyId1147 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1147"
    });
    $.__views.__alloyId1146.add($.__views.__alloyId1147);
    subline ? $.__views.__alloyId1147.addEventListener("click", subline) : __defers["$.__views.__alloyId1147!click!subline"] = true;
    $.__views.__alloyId1148 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1148"
    });
    $.__views.prepaid.add($.__views.__alloyId1148);
    $.__views.__alloyId1149 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1149"
    });
    $.__views.__alloyId1148.add($.__views.__alloyId1149);
    $.__views.__alloyId1150 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1150"
    });
    $.__views.__alloyId1149.add($.__views.__alloyId1150);
    subline ? $.__views.__alloyId1150.addEventListener("click", subline) : __defers["$.__views.__alloyId1150!click!subline"] = true;
    $.__views.__alloyId1151 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1151"
    });
<<<<<<< HEAD
    $.__views.__alloyId1148.add($.__views.__alloyId1151);
    $.__views.__alloyId1152 = Ti.UI.createLabel({
=======
    $.__views.__alloyId816.add($.__views.__alloyId819);
    $.__views.__alloyId820 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1152"
=======
<<<<<<< HEAD
        id: "__alloyId1316"
    });
    $.__views.__alloyId1315.add($.__views.__alloyId1316);
    subline ? $.__views.__alloyId1316.addEventListener("click", subline) : __defers["$.__views.__alloyId1316!click!subline"] = true;
    $.__views.__alloyId1317 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1317"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1317);
    $.__views.__alloyId1318 = Ti.UI.createLabel({
=======
        id: "__alloyId820"
>>>>>>> origin/master
    });
    $.__views.__alloyId1151.add($.__views.__alloyId1152);
    subline ? $.__views.__alloyId1152.addEventListener("click", subline) : __defers["$.__views.__alloyId1152!click!subline"] = true;
    $.__views.__alloyId1153 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1153"
    });
<<<<<<< HEAD
    $.__views.__alloyId1148.add($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createLabel({
=======
    $.__views.__alloyId816.add($.__views.__alloyId821);
    $.__views.__alloyId822 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1154"
=======
<<<<<<< HEAD
        id: "__alloyId1318"
    });
    $.__views.__alloyId1317.add($.__views.__alloyId1318);
    subline ? $.__views.__alloyId1318.addEventListener("click", subline) : __defers["$.__views.__alloyId1318!click!subline"] = true;
    $.__views.__alloyId1319 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1319"
    });
    $.__views.prepaid.add($.__views.__alloyId1319);
    $.__views.__alloyId1320 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1320"
    });
    $.__views.__alloyId1319.add($.__views.__alloyId1320);
    $.__views.__alloyId1321 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1321"
    });
    $.__views.__alloyId1320.add($.__views.__alloyId1321);
    vas ? $.__views.__alloyId1321.addEventListener("click", vas) : __defers["$.__views.__alloyId1321!click!vas"] = true;
    $.__views.__alloyId1322 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1322"
    });
    $.__views.__alloyId1319.add($.__views.__alloyId1322);
    $.__views.__alloyId1323 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1323"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1323);
    loyalty ? $.__views.__alloyId1323.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1323!click!loyalty"] = true;
    $.__views.__alloyId1324 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1324"
    });
    $.__views.__alloyId1319.add($.__views.__alloyId1324);
    $.__views.__alloyId1325 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1325"
    });
    $.__views.__alloyId1324.add($.__views.__alloyId1325);
    report ? $.__views.__alloyId1325.addEventListener("click", report) : __defers["$.__views.__alloyId1325!click!report"] = true;
    $.__views.__alloyId1326 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1326"
    });
    $.__views.prepaid.add($.__views.__alloyId1326);
    $.__views.__alloyId1327 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1327"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1327);
    $.__views.__alloyId1328 = Ti.UI.createLabel({
=======
        id: "__alloyId822"
>>>>>>> origin/master
    });
    $.__views.__alloyId1153.add($.__views.__alloyId1154);
    subline ? $.__views.__alloyId1154.addEventListener("click", subline) : __defers["$.__views.__alloyId1154!click!subline"] = true;
    $.__views.__alloyId1155 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1155"
    });
    $.__views.prepaid.add($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1156"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1157"
    });
    $.__views.__alloyId1156.add($.__views.__alloyId1157);
    vas ? $.__views.__alloyId1157.addEventListener("click", vas) : __defers["$.__views.__alloyId1157!click!vas"] = true;
    $.__views.__alloyId1158 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1158"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1158);
    $.__views.__alloyId1159 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1159"
    });
    $.__views.__alloyId1158.add($.__views.__alloyId1159);
    loyalty ? $.__views.__alloyId1159.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1159!click!loyalty"] = true;
    $.__views.__alloyId1160 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1160"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1160);
    $.__views.__alloyId1161 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1161"
    });
    $.__views.__alloyId1160.add($.__views.__alloyId1161);
    report ? $.__views.__alloyId1161.addEventListener("click", report) : __defers["$.__views.__alloyId1161!click!report"] = true;
    $.__views.__alloyId1162 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1162"
    });
    $.__views.prepaid.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1163"
    });
<<<<<<< HEAD
    $.__views.__alloyId1162.add($.__views.__alloyId1163);
    $.__views.__alloyId1164 = Ti.UI.createLabel({
=======
    $.__views.__alloyId830.add($.__views.__alloyId831);
    $.__views.__alloyId832 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1164"
=======
<<<<<<< HEAD
        id: "__alloyId1328"
    });
    $.__views.__alloyId1327.add($.__views.__alloyId1328);
    vas ? $.__views.__alloyId1328.addEventListener("click", vas) : __defers["$.__views.__alloyId1328!click!vas"] = true;
    $.__views.__alloyId1329 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1329"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1329);
    $.__views.__alloyId1330 = Ti.UI.createLabel({
=======
        id: "__alloyId832"
>>>>>>> origin/master
    });
    $.__views.__alloyId1163.add($.__views.__alloyId1164);
    vas ? $.__views.__alloyId1164.addEventListener("click", vas) : __defers["$.__views.__alloyId1164!click!vas"] = true;
    $.__views.__alloyId1165 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1165"
    });
<<<<<<< HEAD
    $.__views.__alloyId1162.add($.__views.__alloyId1165);
    $.__views.__alloyId1166 = Ti.UI.createLabel({
=======
    $.__views.__alloyId830.add($.__views.__alloyId833);
    $.__views.__alloyId834 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1166"
=======
<<<<<<< HEAD
        id: "__alloyId1330"
    });
    $.__views.__alloyId1329.add($.__views.__alloyId1330);
    loyalty ? $.__views.__alloyId1330.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1330!click!loyalty"] = true;
    $.__views.__alloyId1331 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1331"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1331);
    $.__views.__alloyId1332 = Ti.UI.createLabel({
=======
        id: "__alloyId834"
>>>>>>> origin/master
    });
    $.__views.__alloyId1165.add($.__views.__alloyId1166);
    loyalty ? $.__views.__alloyId1166.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1166!click!loyalty"] = true;
    $.__views.__alloyId1167 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1167"
    });
<<<<<<< HEAD
    $.__views.__alloyId1162.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createLabel({
=======
    $.__views.__alloyId830.add($.__views.__alloyId835);
    $.__views.__alloyId836 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1168"
=======
<<<<<<< HEAD
        id: "__alloyId1332"
    });
    $.__views.__alloyId1331.add($.__views.__alloyId1332);
    loyalty ? $.__views.__alloyId1332.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1332!click!loyalty"] = true;
    $.__views.__alloyId1333 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1333"
    });
    $.__views.prepaid.add($.__views.__alloyId1333);
    $.__views.__alloyId1334 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1334"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1334);
    $.__views.__alloyId1335 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1335"
    });
    $.__views.__alloyId1334.add($.__views.__alloyId1335);
    report ? $.__views.__alloyId1335.addEventListener("click", report) : __defers["$.__views.__alloyId1335!click!report"] = true;
    $.__views.__alloyId1336 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1336"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1336);
    $.__views.__alloyId1337 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId1337"
    });
    $.__views.__alloyId1336.add($.__views.__alloyId1337);
    faq ? $.__views.__alloyId1337.addEventListener("click", faq) : __defers["$.__views.__alloyId1337!click!faq"] = true;
    $.__views.__alloyId1338 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1338"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1338);
    $.__views.__alloyId1339 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1339"
    });
    $.__views.__alloyId1338.add($.__views.__alloyId1339);
    orderingHistory ? $.__views.__alloyId1339.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1339!click!orderingHistory"] = true;
    $.__views.__alloyId1340 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1340"
    });
    $.__views.prepaid.add($.__views.__alloyId1340);
    $.__views.__alloyId1341 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1341"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1341);
    $.__views.__alloyId1342 = Ti.UI.createLabel({
=======
        id: "__alloyId836"
>>>>>>> origin/master
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1168);
    loyalty ? $.__views.__alloyId1168.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1168!click!loyalty"] = true;
    $.__views.__alloyId1169 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1169"
    });
    $.__views.prepaid.add($.__views.__alloyId1169);
    $.__views.__alloyId1170 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1170"
    });
    $.__views.__alloyId1169.add($.__views.__alloyId1170);
    $.__views.__alloyId1171 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1171"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1171);
    report ? $.__views.__alloyId1171.addEventListener("click", report) : __defers["$.__views.__alloyId1171!click!report"] = true;
    $.__views.__alloyId1172 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1172"
    });
    $.__views.__alloyId1169.add($.__views.__alloyId1172);
    $.__views.__alloyId1173 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId1173"
    });
    $.__views.__alloyId1172.add($.__views.__alloyId1173);
    faq ? $.__views.__alloyId1173.addEventListener("click", faq) : __defers["$.__views.__alloyId1173!click!faq"] = true;
    $.__views.__alloyId1174 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1174"
    });
    $.__views.__alloyId1169.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1175"
    });
    $.__views.__alloyId1174.add($.__views.__alloyId1175);
    orderingHistory ? $.__views.__alloyId1175.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1175!click!orderingHistory"] = true;
    $.__views.__alloyId1176 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1176"
    });
    $.__views.prepaid.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1177"
    });
<<<<<<< HEAD
    $.__views.__alloyId1176.add($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createLabel({
=======
    $.__views.__alloyId844.add($.__views.__alloyId845);
    $.__views.__alloyId846 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1178"
=======
<<<<<<< HEAD
        id: "__alloyId1342"
    });
    $.__views.__alloyId1341.add($.__views.__alloyId1342);
    report ? $.__views.__alloyId1342.addEventListener("click", report) : __defers["$.__views.__alloyId1342!click!report"] = true;
    $.__views.__alloyId1343 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1343"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1343);
    $.__views.__alloyId1344 = Ti.UI.createLabel({
=======
        id: "__alloyId846"
>>>>>>> origin/master
    });
    $.__views.__alloyId1177.add($.__views.__alloyId1178);
    report ? $.__views.__alloyId1178.addEventListener("click", report) : __defers["$.__views.__alloyId1178!click!report"] = true;
    $.__views.__alloyId1179 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1179"
    });
<<<<<<< HEAD
    $.__views.__alloyId1176.add($.__views.__alloyId1179);
    $.__views.__alloyId1180 = Ti.UI.createLabel({
=======
    $.__views.__alloyId844.add($.__views.__alloyId847);
    $.__views.__alloyId848 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1180"
=======
<<<<<<< HEAD
        id: "__alloyId1344"
    });
    $.__views.__alloyId1343.add($.__views.__alloyId1344);
    faq ? $.__views.__alloyId1344.addEventListener("click", faq) : __defers["$.__views.__alloyId1344!click!faq"] = true;
    $.__views.__alloyId1345 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1345"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1345);
    $.__views.__alloyId1346 = Ti.UI.createLabel({
=======
        id: "__alloyId848"
>>>>>>> origin/master
    });
    $.__views.__alloyId1179.add($.__views.__alloyId1180);
    faq ? $.__views.__alloyId1180.addEventListener("click", faq) : __defers["$.__views.__alloyId1180!click!faq"] = true;
    $.__views.__alloyId1181 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1181"
    });
<<<<<<< HEAD
    $.__views.__alloyId1176.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createLabel({
=======
    $.__views.__alloyId844.add($.__views.__alloyId849);
    $.__views.__alloyId850 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1182"
    });
    $.__views.__alloyId1181.add($.__views.__alloyId1182);
    orderingHistory ? $.__views.__alloyId1182.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1182!click!orderingHistory"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId1346"
    });
    $.__views.__alloyId1345.add($.__views.__alloyId1346);
    orderingHistory ? $.__views.__alloyId1346.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1346!click!orderingHistory"] = true;
=======
        id: "__alloyId850"
    });
    $.__views.__alloyId849.add($.__views.__alloyId850);
    report ? $.__views.__alloyId850.addEventListener("click", report) : __defers["$.__views.__alloyId850!click!report"] = true;
>>>>>>> origin/master
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
    __defers["$.__views.__alloyId1032!click!close"] && $.__views.__alloyId1032.addEventListener("click", close);
    __defers["$.__views.__alloyId1033!click!gallery"] && $.__views.__alloyId1033.addEventListener("click", gallery);
    __defers["$.__views.__alloyId1038!click!facebook"] && $.__views.__alloyId1038.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1046!click!closepayment"] && $.__views.__alloyId1046.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1047!click!paymentPostpaid"] && $.__views.__alloyId1047.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1050!click!paymentPrepaid"] && $.__views.__alloyId1050.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1060!click!editPhoto"] && $.__views.__alloyId1060.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1061!click!editPhoto"] && $.__views.__alloyId1061.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1073!click!accDetail"] && $.__views.__alloyId1073.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1075!click!profile"] && $.__views.__alloyId1075.addEventListener("click", profile);
    __defers["$.__views.__alloyId1077!click!makePayment"] && $.__views.__alloyId1077.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1080!click!accDetail"] && $.__views.__alloyId1080.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1082!click!profile"] && $.__views.__alloyId1082.addEventListener("click", profile);
    __defers["$.__views.__alloyId1084!click!makePayment"] && $.__views.__alloyId1084.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1087!click!vas"] && $.__views.__alloyId1087.addEventListener("click", vas);
    __defers["$.__views.__alloyId1089!click!subline"] && $.__views.__alloyId1089.addEventListener("click", subline);
    __defers["$.__views.__alloyId1091!click!subline"] && $.__views.__alloyId1091.addEventListener("click", subline);
    __defers["$.__views.__alloyId1094!click!subline"] && $.__views.__alloyId1094.addEventListener("click", subline);
    __defers["$.__views.__alloyId1096!click!subline"] && $.__views.__alloyId1096.addEventListener("click", subline);
    __defers["$.__views.__alloyId1098!click!subline"] && $.__views.__alloyId1098.addEventListener("click", subline);
    __defers["$.__views.__alloyId1101!click!vas"] && $.__views.__alloyId1101.addEventListener("click", vas);
    __defers["$.__views.__alloyId1103!click!loyalty"] && $.__views.__alloyId1103.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1105!click!report"] && $.__views.__alloyId1105.addEventListener("click", report);
    __defers["$.__views.__alloyId1108!click!vas"] && $.__views.__alloyId1108.addEventListener("click", vas);
    __defers["$.__views.__alloyId1110!click!loyalty"] && $.__views.__alloyId1110.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1112!click!loyalty"] && $.__views.__alloyId1112.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1115!click!report"] && $.__views.__alloyId1115.addEventListener("click", report);
    __defers["$.__views.__alloyId1117!click!faq"] && $.__views.__alloyId1117.addEventListener("click", faq);
    __defers["$.__views.__alloyId1119!click!orderingHistory"] && $.__views.__alloyId1119.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1122!click!report"] && $.__views.__alloyId1122.addEventListener("click", report);
    __defers["$.__views.__alloyId1124!click!faq"] && $.__views.__alloyId1124.addEventListener("click", faq);
    __defers["$.__views.__alloyId1126!click!orderingHistory"] && $.__views.__alloyId1126.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1129!click!accDetail"] && $.__views.__alloyId1129.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1131!click!profile"] && $.__views.__alloyId1131.addEventListener("click", profile);
    __defers["$.__views.__alloyId1133!click!makePayment"] && $.__views.__alloyId1133.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1136!click!accDetail"] && $.__views.__alloyId1136.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1138!click!profile"] && $.__views.__alloyId1138.addEventListener("click", profile);
    __defers["$.__views.__alloyId1140!click!makePayment"] && $.__views.__alloyId1140.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1143!click!vas"] && $.__views.__alloyId1143.addEventListener("click", vas);
    __defers["$.__views.__alloyId1145!click!subline"] && $.__views.__alloyId1145.addEventListener("click", subline);
    __defers["$.__views.__alloyId1147!click!subline"] && $.__views.__alloyId1147.addEventListener("click", subline);
    __defers["$.__views.__alloyId1150!click!subline"] && $.__views.__alloyId1150.addEventListener("click", subline);
    __defers["$.__views.__alloyId1152!click!subline"] && $.__views.__alloyId1152.addEventListener("click", subline);
    __defers["$.__views.__alloyId1154!click!subline"] && $.__views.__alloyId1154.addEventListener("click", subline);
    __defers["$.__views.__alloyId1157!click!vas"] && $.__views.__alloyId1157.addEventListener("click", vas);
    __defers["$.__views.__alloyId1159!click!loyalty"] && $.__views.__alloyId1159.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1161!click!report"] && $.__views.__alloyId1161.addEventListener("click", report);
    __defers["$.__views.__alloyId1164!click!vas"] && $.__views.__alloyId1164.addEventListener("click", vas);
    __defers["$.__views.__alloyId1166!click!loyalty"] && $.__views.__alloyId1166.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1168!click!loyalty"] && $.__views.__alloyId1168.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1171!click!report"] && $.__views.__alloyId1171.addEventListener("click", report);
    __defers["$.__views.__alloyId1173!click!faq"] && $.__views.__alloyId1173.addEventListener("click", faq);
    __defers["$.__views.__alloyId1175!click!orderingHistory"] && $.__views.__alloyId1175.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1178!click!report"] && $.__views.__alloyId1178.addEventListener("click", report);
    __defers["$.__views.__alloyId1180!click!faq"] && $.__views.__alloyId1180.addEventListener("click", faq);
    __defers["$.__views.__alloyId1182!click!orderingHistory"] && $.__views.__alloyId1182.addEventListener("click", orderingHistory);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1196!click!close"] && $.__views.__alloyId1196.addEventListener("click", close);
    __defers["$.__views.__alloyId1197!click!gallery"] && $.__views.__alloyId1197.addEventListener("click", gallery);
    __defers["$.__views.__alloyId1202!click!facebook"] && $.__views.__alloyId1202.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1210!click!closepayment"] && $.__views.__alloyId1210.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1211!click!paymentPostpaid"] && $.__views.__alloyId1211.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1214!click!paymentPrepaid"] && $.__views.__alloyId1214.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1224!click!editPhoto"] && $.__views.__alloyId1224.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1225!click!editPhoto"] && $.__views.__alloyId1225.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1237!click!accDetail"] && $.__views.__alloyId1237.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1239!click!profile"] && $.__views.__alloyId1239.addEventListener("click", profile);
    __defers["$.__views.__alloyId1241!click!makePayment"] && $.__views.__alloyId1241.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1244!click!accDetail"] && $.__views.__alloyId1244.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1246!click!profile"] && $.__views.__alloyId1246.addEventListener("click", profile);
    __defers["$.__views.__alloyId1248!click!makePayment"] && $.__views.__alloyId1248.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1251!click!vas"] && $.__views.__alloyId1251.addEventListener("click", vas);
    __defers["$.__views.__alloyId1253!click!subline"] && $.__views.__alloyId1253.addEventListener("click", subline);
    __defers["$.__views.__alloyId1255!click!subline"] && $.__views.__alloyId1255.addEventListener("click", subline);
    __defers["$.__views.__alloyId1258!click!subline"] && $.__views.__alloyId1258.addEventListener("click", subline);
    __defers["$.__views.__alloyId1260!click!subline"] && $.__views.__alloyId1260.addEventListener("click", subline);
    __defers["$.__views.__alloyId1262!click!subline"] && $.__views.__alloyId1262.addEventListener("click", subline);
    __defers["$.__views.__alloyId1265!click!vas"] && $.__views.__alloyId1265.addEventListener("click", vas);
    __defers["$.__views.__alloyId1267!click!loyalty"] && $.__views.__alloyId1267.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1269!click!report"] && $.__views.__alloyId1269.addEventListener("click", report);
    __defers["$.__views.__alloyId1272!click!vas"] && $.__views.__alloyId1272.addEventListener("click", vas);
    __defers["$.__views.__alloyId1274!click!loyalty"] && $.__views.__alloyId1274.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1276!click!loyalty"] && $.__views.__alloyId1276.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1279!click!report"] && $.__views.__alloyId1279.addEventListener("click", report);
    __defers["$.__views.__alloyId1281!click!faq"] && $.__views.__alloyId1281.addEventListener("click", faq);
    __defers["$.__views.__alloyId1283!click!orderingHistory"] && $.__views.__alloyId1283.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1286!click!report"] && $.__views.__alloyId1286.addEventListener("click", report);
    __defers["$.__views.__alloyId1288!click!faq"] && $.__views.__alloyId1288.addEventListener("click", faq);
    __defers["$.__views.__alloyId1290!click!orderingHistory"] && $.__views.__alloyId1290.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1293!click!accDetail"] && $.__views.__alloyId1293.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1295!click!profile"] && $.__views.__alloyId1295.addEventListener("click", profile);
    __defers["$.__views.__alloyId1297!click!makePayment"] && $.__views.__alloyId1297.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1300!click!accDetail"] && $.__views.__alloyId1300.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1302!click!profile"] && $.__views.__alloyId1302.addEventListener("click", profile);
    __defers["$.__views.__alloyId1304!click!makePayment"] && $.__views.__alloyId1304.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1307!click!vas"] && $.__views.__alloyId1307.addEventListener("click", vas);
    __defers["$.__views.__alloyId1309!click!subline"] && $.__views.__alloyId1309.addEventListener("click", subline);
    __defers["$.__views.__alloyId1311!click!subline"] && $.__views.__alloyId1311.addEventListener("click", subline);
    __defers["$.__views.__alloyId1314!click!subline"] && $.__views.__alloyId1314.addEventListener("click", subline);
    __defers["$.__views.__alloyId1316!click!subline"] && $.__views.__alloyId1316.addEventListener("click", subline);
    __defers["$.__views.__alloyId1318!click!subline"] && $.__views.__alloyId1318.addEventListener("click", subline);
    __defers["$.__views.__alloyId1321!click!vas"] && $.__views.__alloyId1321.addEventListener("click", vas);
    __defers["$.__views.__alloyId1323!click!loyalty"] && $.__views.__alloyId1323.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1325!click!report"] && $.__views.__alloyId1325.addEventListener("click", report);
    __defers["$.__views.__alloyId1328!click!vas"] && $.__views.__alloyId1328.addEventListener("click", vas);
    __defers["$.__views.__alloyId1330!click!loyalty"] && $.__views.__alloyId1330.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1332!click!loyalty"] && $.__views.__alloyId1332.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1335!click!report"] && $.__views.__alloyId1335.addEventListener("click", report);
    __defers["$.__views.__alloyId1337!click!faq"] && $.__views.__alloyId1337.addEventListener("click", faq);
    __defers["$.__views.__alloyId1339!click!orderingHistory"] && $.__views.__alloyId1339.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1342!click!report"] && $.__views.__alloyId1342.addEventListener("click", report);
    __defers["$.__views.__alloyId1344!click!faq"] && $.__views.__alloyId1344.addEventListener("click", faq);
    __defers["$.__views.__alloyId1346!click!orderingHistory"] && $.__views.__alloyId1346.addEventListener("click", orderingHistory);
=======
<<<<<<< Updated upstream
    __defers["$.__views.__alloyId710!click!close"] && $.__views.__alloyId710.addEventListener("click", close);
    __defers["$.__views.__alloyId711!click!gallery"] && $.__views.__alloyId711.addEventListener("click", gallery);
    __defers["$.__views.__alloyId716!click!facebook"] && $.__views.__alloyId716.addEventListener("click", facebook);
    __defers["$.__views.__alloyId728!click!editPhoto"] && $.__views.__alloyId728.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId729!click!editPhoto"] && $.__views.__alloyId729.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId741!click!accDetail"] && $.__views.__alloyId741.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId743!click!profile"] && $.__views.__alloyId743.addEventListener("click", profile);
    __defers["$.__views.__alloyId745!click!payment"] && $.__views.__alloyId745.addEventListener("click", payment);
    __defers["$.__views.__alloyId748!click!accDetail"] && $.__views.__alloyId748.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId750!click!profile"] && $.__views.__alloyId750.addEventListener("click", profile);
    __defers["$.__views.__alloyId752!click!payment"] && $.__views.__alloyId752.addEventListener("click", payment);
    __defers["$.__views.__alloyId755!click!vas"] && $.__views.__alloyId755.addEventListener("click", vas);
    __defers["$.__views.__alloyId757!click!subline"] && $.__views.__alloyId757.addEventListener("click", subline);
    __defers["$.__views.__alloyId759!click!subline"] && $.__views.__alloyId759.addEventListener("click", subline);
    __defers["$.__views.__alloyId762!click!subline"] && $.__views.__alloyId762.addEventListener("click", subline);
    __defers["$.__views.__alloyId764!click!subline"] && $.__views.__alloyId764.addEventListener("click", subline);
    __defers["$.__views.__alloyId766!click!subline"] && $.__views.__alloyId766.addEventListener("click", subline);
    __defers["$.__views.__alloyId769!click!vas"] && $.__views.__alloyId769.addEventListener("click", vas);
    __defers["$.__views.__alloyId771!click!loyalty"] && $.__views.__alloyId771.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId773!click!report"] && $.__views.__alloyId773.addEventListener("click", report);
    __defers["$.__views.__alloyId776!click!vas"] && $.__views.__alloyId776.addEventListener("click", vas);
    __defers["$.__views.__alloyId778!click!loyalty"] && $.__views.__alloyId778.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId780!click!loyalty"] && $.__views.__alloyId780.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId783!click!report"] && $.__views.__alloyId783.addEventListener("click", report);
    __defers["$.__views.__alloyId785!click!faq"] && $.__views.__alloyId785.addEventListener("click", faq);
    __defers["$.__views.__alloyId787!click!report"] && $.__views.__alloyId787.addEventListener("click", report);
    __defers["$.__views.__alloyId790!click!report"] && $.__views.__alloyId790.addEventListener("click", report);
    __defers["$.__views.__alloyId792!click!faq"] && $.__views.__alloyId792.addEventListener("click", faq);
    __defers["$.__views.__alloyId794!click!report"] && $.__views.__alloyId794.addEventListener("click", report);
    __defers["$.__views.__alloyId797!click!accDetail"] && $.__views.__alloyId797.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId799!click!profile"] && $.__views.__alloyId799.addEventListener("click", profile);
    __defers["$.__views.__alloyId801!click!payment"] && $.__views.__alloyId801.addEventListener("click", payment);
    __defers["$.__views.__alloyId804!click!accDetail"] && $.__views.__alloyId804.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId806!click!profile"] && $.__views.__alloyId806.addEventListener("click", profile);
    __defers["$.__views.__alloyId808!click!payment"] && $.__views.__alloyId808.addEventListener("click", payment);
    __defers["$.__views.__alloyId811!click!vas"] && $.__views.__alloyId811.addEventListener("click", vas);
    __defers["$.__views.__alloyId813!click!subline"] && $.__views.__alloyId813.addEventListener("click", subline);
    __defers["$.__views.__alloyId815!click!subline"] && $.__views.__alloyId815.addEventListener("click", subline);
    __defers["$.__views.__alloyId818!click!subline"] && $.__views.__alloyId818.addEventListener("click", subline);
    __defers["$.__views.__alloyId820!click!subline"] && $.__views.__alloyId820.addEventListener("click", subline);
    __defers["$.__views.__alloyId822!click!subline"] && $.__views.__alloyId822.addEventListener("click", subline);
    __defers["$.__views.__alloyId825!click!vas"] && $.__views.__alloyId825.addEventListener("click", vas);
    __defers["$.__views.__alloyId827!click!loyalty"] && $.__views.__alloyId827.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId829!click!report"] && $.__views.__alloyId829.addEventListener("click", report);
    __defers["$.__views.__alloyId832!click!vas"] && $.__views.__alloyId832.addEventListener("click", vas);
    __defers["$.__views.__alloyId834!click!loyalty"] && $.__views.__alloyId834.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId836!click!loyalty"] && $.__views.__alloyId836.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId839!click!report"] && $.__views.__alloyId839.addEventListener("click", report);
    __defers["$.__views.__alloyId841!click!faq"] && $.__views.__alloyId841.addEventListener("click", faq);
    __defers["$.__views.__alloyId843!click!report"] && $.__views.__alloyId843.addEventListener("click", report);
    __defers["$.__views.__alloyId846!click!report"] && $.__views.__alloyId846.addEventListener("click", report);
    __defers["$.__views.__alloyId848!click!faq"] && $.__views.__alloyId848.addEventListener("click", faq);
    __defers["$.__views.__alloyId850!click!report"] && $.__views.__alloyId850.addEventListener("click", report);
=======
    __defers["$.__views.__alloyId603!click!close"] && $.__views.__alloyId603.addEventListener("click", close);
    __defers["$.__views.__alloyId604!click!gallery"] && $.__views.__alloyId604.addEventListener("click", gallery);
    __defers["$.__views.__alloyId609!click!facebook"] && $.__views.__alloyId609.addEventListener("click", facebook);
    __defers["$.__views.__alloyId621!click!editPhoto"] && $.__views.__alloyId621.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId622!click!editPhoto"] && $.__views.__alloyId622.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId634!click!accDetail"] && $.__views.__alloyId634.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId636!click!profile"] && $.__views.__alloyId636.addEventListener("click", profile);
    __defers["$.__views.__alloyId638!click!payment"] && $.__views.__alloyId638.addEventListener("click", payment);
    __defers["$.__views.__alloyId641!click!accDetail"] && $.__views.__alloyId641.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId643!click!profile"] && $.__views.__alloyId643.addEventListener("click", profile);
    __defers["$.__views.__alloyId645!click!payment"] && $.__views.__alloyId645.addEventListener("click", payment);
    __defers["$.__views.__alloyId648!click!vas"] && $.__views.__alloyId648.addEventListener("click", vas);
    __defers["$.__views.__alloyId650!click!subline"] && $.__views.__alloyId650.addEventListener("click", subline);
    __defers["$.__views.__alloyId652!click!subline"] && $.__views.__alloyId652.addEventListener("click", subline);
    __defers["$.__views.__alloyId655!click!subline"] && $.__views.__alloyId655.addEventListener("click", subline);
    __defers["$.__views.__alloyId657!click!subline"] && $.__views.__alloyId657.addEventListener("click", subline);
    __defers["$.__views.__alloyId659!click!subline"] && $.__views.__alloyId659.addEventListener("click", subline);
    __defers["$.__views.__alloyId662!click!vas"] && $.__views.__alloyId662.addEventListener("click", vas);
    __defers["$.__views.__alloyId664!click!loyalty"] && $.__views.__alloyId664.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId666!click!report"] && $.__views.__alloyId666.addEventListener("click", report);
    __defers["$.__views.__alloyId669!click!vas"] && $.__views.__alloyId669.addEventListener("click", vas);
    __defers["$.__views.__alloyId671!click!loyalty"] && $.__views.__alloyId671.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId673!click!loyalty"] && $.__views.__alloyId673.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId676!click!report"] && $.__views.__alloyId676.addEventListener("click", report);
    __defers["$.__views.__alloyId678!click!faq"] && $.__views.__alloyId678.addEventListener("click", faq);
    __defers["$.__views.__alloyId680!click!report"] && $.__views.__alloyId680.addEventListener("click", report);
    __defers["$.__views.__alloyId683!click!report"] && $.__views.__alloyId683.addEventListener("click", report);
    __defers["$.__views.__alloyId685!click!faq"] && $.__views.__alloyId685.addEventListener("click", faq);
    __defers["$.__views.__alloyId687!click!report"] && $.__views.__alloyId687.addEventListener("click", report);
    __defers["$.__views.__alloyId690!click!accDetail"] && $.__views.__alloyId690.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId692!click!profile"] && $.__views.__alloyId692.addEventListener("click", profile);
    __defers["$.__views.__alloyId694!click!payment"] && $.__views.__alloyId694.addEventListener("click", payment);
    __defers["$.__views.__alloyId697!click!accDetail"] && $.__views.__alloyId697.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId699!click!profile"] && $.__views.__alloyId699.addEventListener("click", profile);
    __defers["$.__views.__alloyId701!click!payment"] && $.__views.__alloyId701.addEventListener("click", payment);
    __defers["$.__views.__alloyId704!click!vas"] && $.__views.__alloyId704.addEventListener("click", vas);
    __defers["$.__views.__alloyId706!click!subline"] && $.__views.__alloyId706.addEventListener("click", subline);
    __defers["$.__views.__alloyId708!click!subline"] && $.__views.__alloyId708.addEventListener("click", subline);
    __defers["$.__views.__alloyId711!click!subline"] && $.__views.__alloyId711.addEventListener("click", subline);
    __defers["$.__views.__alloyId713!click!subline"] && $.__views.__alloyId713.addEventListener("click", subline);
    __defers["$.__views.__alloyId715!click!subline"] && $.__views.__alloyId715.addEventListener("click", subline);
    __defers["$.__views.__alloyId718!click!vas"] && $.__views.__alloyId718.addEventListener("click", vas);
    __defers["$.__views.__alloyId720!click!loyalty"] && $.__views.__alloyId720.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId722!click!report"] && $.__views.__alloyId722.addEventListener("click", report);
    __defers["$.__views.__alloyId725!click!vas"] && $.__views.__alloyId725.addEventListener("click", vas);
    __defers["$.__views.__alloyId727!click!loyalty"] && $.__views.__alloyId727.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId729!click!loyalty"] && $.__views.__alloyId729.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId732!click!report"] && $.__views.__alloyId732.addEventListener("click", report);
    __defers["$.__views.__alloyId734!click!faq"] && $.__views.__alloyId734.addEventListener("click", faq);
    __defers["$.__views.__alloyId736!click!report"] && $.__views.__alloyId736.addEventListener("click", report);
    __defers["$.__views.__alloyId739!click!report"] && $.__views.__alloyId739.addEventListener("click", report);
    __defers["$.__views.__alloyId741!click!faq"] && $.__views.__alloyId741.addEventListener("click", faq);
    __defers["$.__views.__alloyId743!click!report"] && $.__views.__alloyId743.addEventListener("click", report);
>>>>>>> Stashed changes
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;