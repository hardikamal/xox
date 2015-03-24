function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function accDetail() {
        DRAWER.navigation("accountDetails", 1);
    }
    function subline() {
        DRAWER.navigation("subline", 1);
    }
    function seasonPass() {
        DRAWER.navigation("seasonPass", 1);
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
    function billStatement() {
        DRAWER.navigation("accountDetails2", 1);
    }
    function familyFriend() {
        DRAWER.navigation("familyFriend", 1);
    }
    function internetManagement() {
        DRAWER.navigation("internetManagement", 1);
    }
    function editPhoto() {
        console.log("editPhoto");
        $.photo.zIndex = 2;
    }
    function makePayment() {
        "postpaid" == status ? $.postpaidPayment.zIndex = 2 : "prepaid" == status && ($.prepaidPayment.zIndex = 2);
    }
    function close() {
        console.log("close");
        $.photo.zIndex = 0;
    }
    function closepayment() {
        "postpaid" == status ? $.postpaidPayment.zIndex = 0 : "prepaid" == status && ($.prepaidPayment.zIndex = 0);
    }
    function paymentPostpaid() {
        DRAWER.navigation("payment2", 1);
    }
    function postpaidTopup() {
        DRAWER.navigation("payment3", 1);
    }
    function prepaidTopup() {
        DRAWER.navigation("payment3", 1);
    }
    function pinVoucher() {
        DRAWER.navigation("payment4", 1);
    }
    function airtime() {
        DRAWER.navigation("payment5", 1);
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
    $.__views.__alloyId1216 = Alloy.createController("_header", {
        id: "__alloyId1216",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId1216.setParent($.__views.myAccount);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
    $.__views.__alloyId1217 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId1217"
    });
    $.__views.photo.add($.__views.__alloyId1217);
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
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1220"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1220);
    close ? $.__views.__alloyId1220.addEventListener("click", close) : __defers["$.__views.__alloyId1220!click!close"] = true;
    $.__views.__alloyId1221 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1221"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1221);
    gallery ? $.__views.__alloyId1221.addEventListener("click", gallery) : __defers["$.__views.__alloyId1221!click!gallery"] = true;
    $.__views.__alloyId1222 = Ti.UI.createView({
        id: "__alloyId1222"
    });
    $.__views.__alloyId1221.add($.__views.__alloyId1222);
    $.__views.__alloyId1223 = Ti.UI.createLabel({
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
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
    facebook ? $.__views.__alloyId1224.addEventListener("click", facebook) : __defers["$.__views.__alloyId1224!click!facebook"] = true;
    $.__views.__alloyId1225 = Ti.UI.createView({
        id: "__alloyId1225"
    });
    $.__views.__alloyId1224.add($.__views.__alloyId1225);
    $.__views.__alloyId1226 = Ti.UI.createLabel({
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1226"
    });
    $.__views.__alloyId1225.add($.__views.__alloyId1226);
    $.__views.postpaidPayment = Ti.UI.createView({
        id: "postpaidPayment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.postpaidPayment);
    $.__views.__alloyId1227 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "35%",
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: "1",
        id: "__alloyId1227"
    });
    $.__views.postpaidPayment.add($.__views.__alloyId1227);
    $.__views.__alloyId1228 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1228"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1228);
    $.__views.__alloyId1229 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "white",
        id: "__alloyId1229"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1229);
    $.__views.__alloyId1230 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "20",
        image: "/images/close_icon.png",
        id: "__alloyId1230"
    });
    $.__views.__alloyId1228.add($.__views.__alloyId1230);
    closepayment ? $.__views.__alloyId1230.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1230!click!closepayment"] = true;
    $.__views.__alloyId1231 = Ti.UI.createView({
        layout: "horizontal",
        height: "70%",
        id: "__alloyId1231"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1231);
    $.__views.__alloyId1232 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "15",
        id: "__alloyId1232"
    });
    $.__views.__alloyId1231.add($.__views.__alloyId1232);
    paymentPostpaid ? $.__views.__alloyId1232.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1232!click!paymentPostpaid"] = true;
    $.__views.__alloyId1233 = Ti.UI.createView({
        id: "__alloyId1233"
    });
    $.__views.__alloyId1232.add($.__views.__alloyId1233);
    $.__views.__alloyId1234 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1234"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1234);
    $.__views.__alloyId1235 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        id: "__alloyId1235"
    });
    $.__views.__alloyId1231.add($.__views.__alloyId1235);
    postpaidTopup ? $.__views.__alloyId1235.addEventListener("click", postpaidTopup) : __defers["$.__views.__alloyId1235!click!postpaidTopup"] = true;
    $.__views.__alloyId1236 = Ti.UI.createView({
        id: "__alloyId1236"
    });
    $.__views.__alloyId1235.add($.__views.__alloyId1236);
    $.__views.__alloyId1237 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1237"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1237);
    $.__views.prepaidPayment = Ti.UI.createView({
        id: "prepaidPayment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.prepaidPayment);
    $.__views.__alloyId1238 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "35%",
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: "1",
        id: "__alloyId1238"
    });
    $.__views.prepaidPayment.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1239"
    });
    $.__views.__alloyId1238.add($.__views.__alloyId1239);
    $.__views.__alloyId1240 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "white",
        id: "__alloyId1240"
    });
    $.__views.__alloyId1239.add($.__views.__alloyId1240);
    $.__views.__alloyId1241 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "20",
        image: "/images/close_icon.png",
        id: "__alloyId1241"
    });
    $.__views.__alloyId1239.add($.__views.__alloyId1241);
    closepayment ? $.__views.__alloyId1241.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1241!click!closepayment"] = true;
    $.__views.__alloyId1242 = Ti.UI.createView({
        layout: "horizontal",
        height: "70%",
        id: "__alloyId1242"
    });
    $.__views.__alloyId1238.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "15",
        id: "__alloyId1243"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1243);
    prepaidTopup ? $.__views.__alloyId1243.addEventListener("click", prepaidTopup) : __defers["$.__views.__alloyId1243!click!prepaidTopup"] = true;
    $.__views.__alloyId1244 = Ti.UI.createView({
        id: "__alloyId1244"
    });
    $.__views.__alloyId1243.add($.__views.__alloyId1244);
    $.__views.__alloyId1245 = Ti.UI.createLabel({
        text: "Top Up",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1245"
    });
    $.__views.__alloyId1244.add($.__views.__alloyId1245);
    $.__views.__alloyId1246 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        id: "__alloyId1246"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1246);
    pinVoucher ? $.__views.__alloyId1246.addEventListener("click", pinVoucher) : __defers["$.__views.__alloyId1246!click!pinVoucher"] = true;
    $.__views.__alloyId1247 = Ti.UI.createView({
        id: "__alloyId1247"
    });
    $.__views.__alloyId1246.add($.__views.__alloyId1247);
    $.__views.__alloyId1248 = Ti.UI.createLabel({
        text: "Pin Voucher",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1248"
    });
    $.__views.__alloyId1247.add($.__views.__alloyId1248);
    $.__views.__alloyId1249 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        right: "10",
        id: "__alloyId1249"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1249);
    airtime ? $.__views.__alloyId1249.addEventListener("click", airtime) : __defers["$.__views.__alloyId1249!click!airtime"] = true;
    $.__views.__alloyId1250 = Ti.UI.createView({
        id: "__alloyId1250"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1250);
    $.__views.__alloyId1251 = Ti.UI.createLabel({
        text: "AirTime Transfer",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1251"
    });
    $.__views.__alloyId1250.add($.__views.__alloyId1251);
    $.__views.__alloyId1252 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
        id: "__alloyId1252"
    });
    $.__views.myAccount.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId1253"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1253);
    $.__views.__alloyId1254 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1254"
    });
    $.__views.__alloyId1253.add($.__views.__alloyId1254);
    $.__views.__alloyId1255 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId1255"
    });
    $.__views.__alloyId1254.add($.__views.__alloyId1255);
    $.__views.__alloyId1256 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId1256"
    });
    $.__views.__alloyId1254.add($.__views.__alloyId1256);
    $.__views.__alloyId1257 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId1257"
    });
    $.__views.__alloyId1253.add($.__views.__alloyId1257);
    $.__views.__alloyId1258 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId1258"
    });
    $.__views.__alloyId1253.add($.__views.__alloyId1258);
    $.__views.__alloyId1259 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
        id: "__alloyId1259"
    });
    $.__views.__alloyId1258.add($.__views.__alloyId1259);
    editPhoto ? $.__views.__alloyId1259.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1259!click!editPhoto"] = true;
    $.__views.__alloyId1260 = Ti.UI.createImageView({
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
        id: "__alloyId1260"
    });
    $.__views.__alloyId1258.add($.__views.__alloyId1260);
    editPhoto ? $.__views.__alloyId1260.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1260!click!editPhoto"] = true;
    $.__views.__alloyId1261 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1261"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1261);
    $.__views.__alloyId1262 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId1262"
    });
    $.__views.__alloyId1261.add($.__views.__alloyId1262);
    $.__views.__alloyId1263 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1263"
    });
    $.__views.__alloyId1262.add($.__views.__alloyId1263);
    $.__views.__alloyId1264 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId1264"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1264);
    $.__views.__alloyId1265 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId1265"
    });
    $.__views.__alloyId1263.add($.__views.__alloyId1265);
    $.__views.__alloyId1266 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId1266"
    });
    $.__views.__alloyId1261.add($.__views.__alloyId1266);
    $.__views.__alloyId1267 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1267"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1267);
    $.__views.__alloyId1268 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId1268"
    });
    $.__views.__alloyId1267.add($.__views.__alloyId1268);
    $.__views.__alloyId1269 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId1269"
    });
    $.__views.__alloyId1267.add($.__views.__alloyId1269);
    $.__views.postpaid = Ti.UI.createScrollView({
        id: "postpaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1252.add($.__views.postpaid);
    $.__views.__alloyId1270 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
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
    $.__views.__alloyId1272 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1272"
    });
    $.__views.__alloyId1271.add($.__views.__alloyId1272);
    accDetail ? $.__views.__alloyId1272.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1272!click!accDetail"] = true;
    $.__views.__alloyId1273 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1273"
    });
    $.__views.__alloyId1270.add($.__views.__alloyId1273);
    $.__views.__alloyId1274 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1274"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1274);
    billStatement ? $.__views.__alloyId1274.addEventListener("click", billStatement) : __defers["$.__views.__alloyId1274!click!billStatement"] = true;
    $.__views.__alloyId1275 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1275"
    });
    $.__views.__alloyId1270.add($.__views.__alloyId1275);
    $.__views.__alloyId1276 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1276"
    });
    $.__views.__alloyId1275.add($.__views.__alloyId1276);
    makePayment ? $.__views.__alloyId1276.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1276!click!makePayment"] = true;
    $.__views.__alloyId1277 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
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
    $.__views.__alloyId1279 = Ti.UI.createLabel({
        text: "Account / Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1279"
    });
    $.__views.__alloyId1278.add($.__views.__alloyId1279);
    accDetail ? $.__views.__alloyId1279.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1279!click!accDetail"] = true;
    $.__views.__alloyId1280 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1280"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1280);
    $.__views.__alloyId1281 = Ti.UI.createLabel({
        text: "Bill Statement",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1281"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1281);
    profile ? $.__views.__alloyId1281.addEventListener("click", profile) : __defers["$.__views.__alloyId1281!click!profile"] = true;
    $.__views.__alloyId1282 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1282"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1282);
    $.__views.__alloyId1283 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1283"
    });
    $.__views.__alloyId1282.add($.__views.__alloyId1283);
    makePayment ? $.__views.__alloyId1283.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1283!click!makePayment"] = true;
    $.__views.__alloyId1284 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
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
    $.__views.__alloyId1286 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1286"
    });
    $.__views.__alloyId1285.add($.__views.__alloyId1286);
    internetManagement ? $.__views.__alloyId1286.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1286!click!internetManagement"] = true;
    $.__views.__alloyId1287 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1287"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1287);
    $.__views.__alloyId1288 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1288"
    });
    $.__views.__alloyId1287.add($.__views.__alloyId1288);
    subline ? $.__views.__alloyId1288.addEventListener("click", subline) : __defers["$.__views.__alloyId1288!click!subline"] = true;
    $.__views.__alloyId1289 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1289"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1289);
    $.__views.__alloyId1290 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1290"
    });
    $.__views.__alloyId1289.add($.__views.__alloyId1290);
    subline ? $.__views.__alloyId1290.addEventListener("click", subline) : __defers["$.__views.__alloyId1290!click!subline"] = true;
    $.__views.__alloyId1291 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1291"
    });
    $.__views.postpaid.add($.__views.__alloyId1291);
    $.__views.__alloyId1292 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1292"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1292);
    $.__views.__alloyId1293 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1293"
    });
    $.__views.__alloyId1292.add($.__views.__alloyId1293);
    internetManagement ? $.__views.__alloyId1293.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1293!click!internetManagement"] = true;
    $.__views.__alloyId1294 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1294"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1295"
    });
    $.__views.__alloyId1294.add($.__views.__alloyId1295);
    subline ? $.__views.__alloyId1295.addEventListener("click", subline) : __defers["$.__views.__alloyId1295!click!subline"] = true;
    $.__views.__alloyId1296 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1296"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1296);
    $.__views.__alloyId1297 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1297"
    });
    $.__views.__alloyId1296.add($.__views.__alloyId1297);
    familyFriend ? $.__views.__alloyId1297.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1297!click!familyFriend"] = true;
    $.__views.__alloyId1298 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1298"
    });
    $.__views.postpaid.add($.__views.__alloyId1298);
    $.__views.__alloyId1299 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1299"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1299);
    $.__views.__alloyId1300 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1300"
    });
    $.__views.__alloyId1299.add($.__views.__alloyId1300);
    loyalty ? $.__views.__alloyId1300.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1300!click!loyalty"] = true;
    $.__views.__alloyId1301 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1301"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1301);
    $.__views.__alloyId1302 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1302"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1302);
    report ? $.__views.__alloyId1302.addEventListener("click", report) : __defers["$.__views.__alloyId1302!click!report"] = true;
    $.__views.__alloyId1303 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1303"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1304"
    });
    $.__views.__alloyId1303.add($.__views.__alloyId1304);
    orderingHistory ? $.__views.__alloyId1304.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1304!click!orderingHistory"] = true;
    $.__views.__alloyId1305 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1305"
    });
    $.__views.postpaid.add($.__views.__alloyId1305);
    $.__views.__alloyId1306 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1306"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1306);
    $.__views.__alloyId1307 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1307"
    });
    $.__views.__alloyId1306.add($.__views.__alloyId1307);
    loyalty ? $.__views.__alloyId1307.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1307!click!loyalty"] = true;
    $.__views.__alloyId1308 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1308"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1309"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1309);
    loyalty ? $.__views.__alloyId1309.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1309!click!loyalty"] = true;
    $.__views.__alloyId1310 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1310"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1311"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1311);
    orderingHistory ? $.__views.__alloyId1311.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1311!click!orderingHistory"] = true;
    $.__views.prepaid = Ti.UI.createScrollView({
        id: "prepaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1252.add($.__views.prepaid);
    $.__views.__alloyId1312 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
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
    $.__views.__alloyId1314 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1314"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1314);
    accDetail ? $.__views.__alloyId1314.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1314!click!accDetail"] = true;
    $.__views.__alloyId1315 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1315"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1316"
    });
    $.__views.__alloyId1315.add($.__views.__alloyId1316);
    billStatement ? $.__views.__alloyId1316.addEventListener("click", billStatement) : __defers["$.__views.__alloyId1316!click!billStatement"] = true;
    $.__views.__alloyId1317 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1317"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1317);
    $.__views.__alloyId1318 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1318"
    });
    $.__views.__alloyId1317.add($.__views.__alloyId1318);
    makePayment ? $.__views.__alloyId1318.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1318!click!makePayment"] = true;
    $.__views.__alloyId1319 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
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
    $.__views.__alloyId1321 = Ti.UI.createLabel({
        text: "Account / Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1321"
    });
    $.__views.__alloyId1320.add($.__views.__alloyId1321);
    accDetail ? $.__views.__alloyId1321.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1321!click!accDetail"] = true;
    $.__views.__alloyId1322 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1322"
    });
    $.__views.__alloyId1319.add($.__views.__alloyId1322);
    $.__views.__alloyId1323 = Ti.UI.createLabel({
        text: "Bill Statement",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1323"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1323);
    billStatement ? $.__views.__alloyId1323.addEventListener("click", billStatement) : __defers["$.__views.__alloyId1323!click!billStatement"] = true;
    $.__views.__alloyId1324 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1324"
    });
    $.__views.__alloyId1319.add($.__views.__alloyId1324);
    $.__views.__alloyId1325 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1325"
    });
    $.__views.__alloyId1324.add($.__views.__alloyId1325);
    makePayment ? $.__views.__alloyId1325.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1325!click!makePayment"] = true;
    $.__views.__alloyId1326 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
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
    $.__views.__alloyId1328 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1328"
    });
    $.__views.__alloyId1327.add($.__views.__alloyId1328);
    internetManagement ? $.__views.__alloyId1328.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1328!click!internetManagement"] = true;
    $.__views.__alloyId1329 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1329"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1329);
    $.__views.__alloyId1330 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1330"
    });
    $.__views.__alloyId1329.add($.__views.__alloyId1330);
    subline ? $.__views.__alloyId1330.addEventListener("click", subline) : __defers["$.__views.__alloyId1330!click!subline"] = true;
    $.__views.__alloyId1331 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1331"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1331);
    $.__views.__alloyId1332 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1332"
    });
    $.__views.__alloyId1331.add($.__views.__alloyId1332);
    familyFriend ? $.__views.__alloyId1332.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1332!click!familyFriend"] = true;
    $.__views.__alloyId1333 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
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
    $.__views.__alloyId1335 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1335"
    });
    $.__views.__alloyId1334.add($.__views.__alloyId1335);
    internetManagement ? $.__views.__alloyId1335.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1335!click!internetManagement"] = true;
    $.__views.__alloyId1336 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1336"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1336);
    $.__views.__alloyId1337 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1337"
    });
    $.__views.__alloyId1336.add($.__views.__alloyId1337);
    subline ? $.__views.__alloyId1337.addEventListener("click", subline) : __defers["$.__views.__alloyId1337!click!subline"] = true;
    $.__views.__alloyId1338 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1338"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1338);
    $.__views.__alloyId1339 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1339"
    });
    $.__views.__alloyId1338.add($.__views.__alloyId1339);
    familyFriend ? $.__views.__alloyId1339.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1339!click!familyFriend"] = true;
    $.__views.__alloyId1340 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
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
    $.__views.__alloyId1342 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1342"
    });
    $.__views.__alloyId1341.add($.__views.__alloyId1342);
    seasonPass ? $.__views.__alloyId1342.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1342!click!seasonPass"] = true;
    $.__views.__alloyId1343 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1343"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1343);
    $.__views.__alloyId1344 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1344"
    });
    $.__views.__alloyId1343.add($.__views.__alloyId1344);
    loyalty ? $.__views.__alloyId1344.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1344!click!loyalty"] = true;
    $.__views.__alloyId1345 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1345"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1345);
    $.__views.__alloyId1346 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1346"
    });
    $.__views.__alloyId1345.add($.__views.__alloyId1346);
    orderingHistory ? $.__views.__alloyId1346.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1346!click!orderingHistory"] = true;
    $.__views.__alloyId1347 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1347"
    });
    $.__views.prepaid.add($.__views.__alloyId1347);
    $.__views.__alloyId1348 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1348"
    });
    $.__views.__alloyId1347.add($.__views.__alloyId1348);
    $.__views.__alloyId1349 = Ti.UI.createLabel({
        text: "Season Pass",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1349"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1349);
    seasonPass ? $.__views.__alloyId1349.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1349!click!seasonPass"] = true;
    $.__views.__alloyId1350 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1350"
    });
    $.__views.__alloyId1347.add($.__views.__alloyId1350);
    $.__views.__alloyId1351 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1351"
    });
    $.__views.__alloyId1350.add($.__views.__alloyId1351);
    loyalty ? $.__views.__alloyId1351.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1351!click!loyalty"] = true;
    $.__views.__alloyId1352 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1352"
    });
    $.__views.__alloyId1347.add($.__views.__alloyId1352);
    $.__views.__alloyId1353 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1353"
    });
    $.__views.__alloyId1352.add($.__views.__alloyId1353);
    orderingHistory ? $.__views.__alloyId1353.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1353!click!orderingHistory"] = true;
    $.__views.__alloyId1354 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1354"
    });
    $.__views.prepaid.add($.__views.__alloyId1354);
    $.__views.__alloyId1355 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1355"
    });
    $.__views.__alloyId1354.add($.__views.__alloyId1355);
    $.__views.__alloyId1356 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1356"
    });
    $.__views.__alloyId1355.add($.__views.__alloyId1356);
    $.__views.__alloyId1357 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1357"
    });
    $.__views.__alloyId1354.add($.__views.__alloyId1357);
    $.__views.__alloyId1358 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1358"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1358);
    $.__views.__alloyId1359 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1359"
    });
    $.__views.prepaid.add($.__views.__alloyId1359);
    $.__views.__alloyId1360 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1360"
    });
    $.__views.__alloyId1359.add($.__views.__alloyId1360);
    $.__views.__alloyId1361 = Ti.UI.createLabel({
        text: "My Ticket",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1361"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1361);
    $.__views.__alloyId1362 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1362"
    });
    $.__views.__alloyId1359.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1363"
    });
    $.__views.__alloyId1362.add($.__views.__alloyId1363);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var status = "prepaid";
    var new_event = [ [ "New Event", "/images/acc_button_01.png" ] ];
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
    __defers["$.__views.__alloyId1220!click!close"] && $.__views.__alloyId1220.addEventListener("click", close);
    __defers["$.__views.__alloyId1221!click!gallery"] && $.__views.__alloyId1221.addEventListener("click", gallery);
    __defers["$.__views.__alloyId1224!click!facebook"] && $.__views.__alloyId1224.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1230!click!closepayment"] && $.__views.__alloyId1230.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1232!click!paymentPostpaid"] && $.__views.__alloyId1232.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1235!click!postpaidTopup"] && $.__views.__alloyId1235.addEventListener("click", postpaidTopup);
    __defers["$.__views.__alloyId1241!click!closepayment"] && $.__views.__alloyId1241.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1243!click!prepaidTopup"] && $.__views.__alloyId1243.addEventListener("click", prepaidTopup);
    __defers["$.__views.__alloyId1246!click!pinVoucher"] && $.__views.__alloyId1246.addEventListener("click", pinVoucher);
    __defers["$.__views.__alloyId1249!click!airtime"] && $.__views.__alloyId1249.addEventListener("click", airtime);
    __defers["$.__views.__alloyId1259!click!editPhoto"] && $.__views.__alloyId1259.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1260!click!editPhoto"] && $.__views.__alloyId1260.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1272!click!accDetail"] && $.__views.__alloyId1272.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1274!click!billStatement"] && $.__views.__alloyId1274.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1276!click!makePayment"] && $.__views.__alloyId1276.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1279!click!accDetail"] && $.__views.__alloyId1279.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1281!click!profile"] && $.__views.__alloyId1281.addEventListener("click", profile);
    __defers["$.__views.__alloyId1283!click!makePayment"] && $.__views.__alloyId1283.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1286!click!internetManagement"] && $.__views.__alloyId1286.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1288!click!subline"] && $.__views.__alloyId1288.addEventListener("click", subline);
    __defers["$.__views.__alloyId1290!click!subline"] && $.__views.__alloyId1290.addEventListener("click", subline);
    __defers["$.__views.__alloyId1293!click!internetManagement"] && $.__views.__alloyId1293.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1295!click!subline"] && $.__views.__alloyId1295.addEventListener("click", subline);
    __defers["$.__views.__alloyId1297!click!familyFriend"] && $.__views.__alloyId1297.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1300!click!loyalty"] && $.__views.__alloyId1300.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1302!click!report"] && $.__views.__alloyId1302.addEventListener("click", report);
    __defers["$.__views.__alloyId1304!click!orderingHistory"] && $.__views.__alloyId1304.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1307!click!loyalty"] && $.__views.__alloyId1307.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1309!click!loyalty"] && $.__views.__alloyId1309.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1311!click!orderingHistory"] && $.__views.__alloyId1311.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1314!click!accDetail"] && $.__views.__alloyId1314.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1316!click!billStatement"] && $.__views.__alloyId1316.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1318!click!makePayment"] && $.__views.__alloyId1318.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1321!click!accDetail"] && $.__views.__alloyId1321.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1323!click!billStatement"] && $.__views.__alloyId1323.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1325!click!makePayment"] && $.__views.__alloyId1325.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1328!click!internetManagement"] && $.__views.__alloyId1328.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1330!click!subline"] && $.__views.__alloyId1330.addEventListener("click", subline);
    __defers["$.__views.__alloyId1332!click!familyFriend"] && $.__views.__alloyId1332.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1335!click!internetManagement"] && $.__views.__alloyId1335.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1337!click!subline"] && $.__views.__alloyId1337.addEventListener("click", subline);
    __defers["$.__views.__alloyId1339!click!familyFriend"] && $.__views.__alloyId1339.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1342!click!seasonPass"] && $.__views.__alloyId1342.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1344!click!loyalty"] && $.__views.__alloyId1344.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1346!click!orderingHistory"] && $.__views.__alloyId1346.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1349!click!seasonPass"] && $.__views.__alloyId1349.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1351!click!loyalty"] && $.__views.__alloyId1351.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1353!click!orderingHistory"] && $.__views.__alloyId1353.addEventListener("click", orderingHistory);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;