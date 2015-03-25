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
    function logout() {
        console.log("logout");
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
    $.__views.__alloyId1270 = Alloy.createController("_header", {
        id: "__alloyId1270",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId1270.setParent($.__views.myAccount);
    $.__views.__alloyId1271 = Ti.UI.createImageView({
        backgroundColor: "blue",
        width: "90",
        height: "30",
        right: "10",
        top: "10",
        id: "__alloyId1271"
    });
    $.__views.myAccount.add($.__views.__alloyId1271);
    logout ? $.__views.__alloyId1271.addEventListener("click", logout) : __defers["$.__views.__alloyId1271!click!logout"] = true;
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
    $.__views.__alloyId1272 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId1272"
    });
    $.__views.photo.add($.__views.__alloyId1272);
    $.__views.__alloyId1273 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1273"
    });
    $.__views.__alloyId1272.add($.__views.__alloyId1273);
    $.__views.__alloyId1274 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1274"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1274);
    $.__views.__alloyId1275 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1275"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1275);
    close ? $.__views.__alloyId1275.addEventListener("click", close) : __defers["$.__views.__alloyId1275!click!close"] = true;
    $.__views.__alloyId1276 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1276"
    });
    $.__views.__alloyId1272.add($.__views.__alloyId1276);
    gallery ? $.__views.__alloyId1276.addEventListener("click", gallery) : __defers["$.__views.__alloyId1276!click!gallery"] = true;
    $.__views.__alloyId1277 = Ti.UI.createView({
        id: "__alloyId1277"
    });
    $.__views.__alloyId1276.add($.__views.__alloyId1277);
    $.__views.__alloyId1278 = Ti.UI.createLabel({
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1278"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1278);
    $.__views.__alloyId1279 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1279"
    });
    $.__views.__alloyId1272.add($.__views.__alloyId1279);
    facebook ? $.__views.__alloyId1279.addEventListener("click", facebook) : __defers["$.__views.__alloyId1279!click!facebook"] = true;
    $.__views.__alloyId1280 = Ti.UI.createView({
        id: "__alloyId1280"
    });
    $.__views.__alloyId1279.add($.__views.__alloyId1280);
    $.__views.__alloyId1281 = Ti.UI.createLabel({
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1281"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1281);
    $.__views.postpaidPayment = Ti.UI.createView({
        id: "postpaidPayment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.postpaidPayment);
    $.__views.__alloyId1282 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "35%",
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: "1",
        id: "__alloyId1282"
    });
    $.__views.postpaidPayment.add($.__views.__alloyId1282);
    $.__views.__alloyId1283 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1283"
    });
    $.__views.__alloyId1282.add($.__views.__alloyId1283);
    $.__views.__alloyId1284 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "white",
        id: "__alloyId1284"
    });
    $.__views.__alloyId1283.add($.__views.__alloyId1284);
    $.__views.__alloyId1285 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "20",
        image: "/images/close_icon.png",
        id: "__alloyId1285"
    });
    $.__views.__alloyId1283.add($.__views.__alloyId1285);
    closepayment ? $.__views.__alloyId1285.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1285!click!closepayment"] = true;
    $.__views.__alloyId1286 = Ti.UI.createView({
        layout: "horizontal",
        height: "70%",
        id: "__alloyId1286"
    });
    $.__views.__alloyId1282.add($.__views.__alloyId1286);
    $.__views.__alloyId1287 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "15",
        id: "__alloyId1287"
    });
    $.__views.__alloyId1286.add($.__views.__alloyId1287);
    paymentPostpaid ? $.__views.__alloyId1287.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1287!click!paymentPostpaid"] = true;
    $.__views.__alloyId1288 = Ti.UI.createView({
        id: "__alloyId1288"
    });
    $.__views.__alloyId1287.add($.__views.__alloyId1288);
    $.__views.__alloyId1289 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1289"
    });
    $.__views.__alloyId1288.add($.__views.__alloyId1289);
    $.__views.__alloyId1290 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        id: "__alloyId1290"
    });
    $.__views.__alloyId1286.add($.__views.__alloyId1290);
    postpaidTopup ? $.__views.__alloyId1290.addEventListener("click", postpaidTopup) : __defers["$.__views.__alloyId1290!click!postpaidTopup"] = true;
    $.__views.__alloyId1291 = Ti.UI.createView({
        id: "__alloyId1291"
    });
    $.__views.__alloyId1290.add($.__views.__alloyId1291);
    $.__views.__alloyId1292 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1292"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1292);
    $.__views.prepaidPayment = Ti.UI.createView({
        id: "prepaidPayment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.prepaidPayment);
    $.__views.__alloyId1293 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "35%",
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: "1",
        id: "__alloyId1293"
    });
    $.__views.prepaidPayment.add($.__views.__alloyId1293);
    $.__views.__alloyId1294 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1294"
    });
    $.__views.__alloyId1293.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "white",
        id: "__alloyId1295"
    });
    $.__views.__alloyId1294.add($.__views.__alloyId1295);
    $.__views.__alloyId1296 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "20",
        image: "/images/close_icon.png",
        id: "__alloyId1296"
    });
    $.__views.__alloyId1294.add($.__views.__alloyId1296);
    closepayment ? $.__views.__alloyId1296.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1296!click!closepayment"] = true;
    $.__views.__alloyId1297 = Ti.UI.createView({
        layout: "horizontal",
        height: "70%",
        id: "__alloyId1297"
    });
    $.__views.__alloyId1293.add($.__views.__alloyId1297);
    $.__views.__alloyId1298 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "15",
        id: "__alloyId1298"
    });
    $.__views.__alloyId1297.add($.__views.__alloyId1298);
    prepaidTopup ? $.__views.__alloyId1298.addEventListener("click", prepaidTopup) : __defers["$.__views.__alloyId1298!click!prepaidTopup"] = true;
    $.__views.__alloyId1299 = Ti.UI.createView({
        id: "__alloyId1299"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1299);
    $.__views.__alloyId1300 = Ti.UI.createLabel({
        text: "Top Up",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1300"
    });
    $.__views.__alloyId1299.add($.__views.__alloyId1300);
    $.__views.__alloyId1301 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        id: "__alloyId1301"
    });
    $.__views.__alloyId1297.add($.__views.__alloyId1301);
    pinVoucher ? $.__views.__alloyId1301.addEventListener("click", pinVoucher) : __defers["$.__views.__alloyId1301!click!pinVoucher"] = true;
    $.__views.__alloyId1302 = Ti.UI.createView({
        id: "__alloyId1302"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1302);
    $.__views.__alloyId1303 = Ti.UI.createLabel({
        text: "Pin Voucher",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1303"
    });
    $.__views.__alloyId1302.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        right: "10",
        id: "__alloyId1304"
    });
    $.__views.__alloyId1297.add($.__views.__alloyId1304);
    airtime ? $.__views.__alloyId1304.addEventListener("click", airtime) : __defers["$.__views.__alloyId1304!click!airtime"] = true;
    $.__views.__alloyId1305 = Ti.UI.createView({
        id: "__alloyId1305"
    });
    $.__views.__alloyId1304.add($.__views.__alloyId1305);
    $.__views.__alloyId1306 = Ti.UI.createLabel({
        text: "AirTime Transfer",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1306"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1306);
    $.__views.__alloyId1307 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
        id: "__alloyId1307"
    });
    $.__views.myAccount.add($.__views.__alloyId1307);
    $.__views.__alloyId1308 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId1308"
    });
    $.__views.__alloyId1307.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1309"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1309);
    $.__views.__alloyId1310 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId1310"
    });
    $.__views.__alloyId1309.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId1311"
    });
    $.__views.__alloyId1309.add($.__views.__alloyId1311);
    $.__views.__alloyId1312 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId1312"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId1313"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
        id: "__alloyId1314"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1314);
    editPhoto ? $.__views.__alloyId1314.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1314!click!editPhoto"] = true;
    $.__views.__alloyId1315 = Ti.UI.createImageView({
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
        id: "__alloyId1315"
    });
    $.__views.__alloyId1313.add($.__views.__alloyId1315);
    editPhoto ? $.__views.__alloyId1315.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1315!click!editPhoto"] = true;
    $.__views.__alloyId1316 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1316"
    });
    $.__views.__alloyId1307.add($.__views.__alloyId1316);
    $.__views.__alloyId1317 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId1317"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1317);
    $.__views.__alloyId1318 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1318"
    });
    $.__views.__alloyId1317.add($.__views.__alloyId1318);
    $.__views.__alloyId1319 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId1319"
    });
    $.__views.__alloyId1318.add($.__views.__alloyId1319);
    $.__views.__alloyId1320 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId1320"
    });
    $.__views.__alloyId1318.add($.__views.__alloyId1320);
    $.__views.__alloyId1321 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId1321"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1321);
    $.__views.__alloyId1322 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1322"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1322);
    $.__views.__alloyId1323 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId1323"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1323);
    $.__views.__alloyId1324 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId1324"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1324);
    $.__views.postpaid = Ti.UI.createScrollView({
        id: "postpaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1307.add($.__views.postpaid);
    $.__views.__alloyId1325 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1325"
    });
    $.__views.postpaid.add($.__views.__alloyId1325);
    $.__views.__alloyId1326 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1326"
    });
    $.__views.__alloyId1325.add($.__views.__alloyId1326);
    $.__views.__alloyId1327 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1327"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1327);
    accDetail ? $.__views.__alloyId1327.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1327!click!accDetail"] = true;
    $.__views.__alloyId1328 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1328"
    });
    $.__views.__alloyId1325.add($.__views.__alloyId1328);
    $.__views.__alloyId1329 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1329"
    });
    $.__views.__alloyId1328.add($.__views.__alloyId1329);
    billStatement ? $.__views.__alloyId1329.addEventListener("click", billStatement) : __defers["$.__views.__alloyId1329!click!billStatement"] = true;
    $.__views.__alloyId1330 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1330"
    });
    $.__views.__alloyId1325.add($.__views.__alloyId1330);
    $.__views.__alloyId1331 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1331"
    });
    $.__views.__alloyId1330.add($.__views.__alloyId1331);
    makePayment ? $.__views.__alloyId1331.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1331!click!makePayment"] = true;
    $.__views.__alloyId1332 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId1332"
    });
    $.__views.postpaid.add($.__views.__alloyId1332);
    $.__views.__alloyId1333 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1333"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1333);
    $.__views.__alloyId1334 = Ti.UI.createLabel({
        text: "Account / Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1334"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1334);
    accDetail ? $.__views.__alloyId1334.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1334!click!accDetail"] = true;
    $.__views.__alloyId1335 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1335"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1335);
    $.__views.__alloyId1336 = Ti.UI.createLabel({
        text: "Bill Statement",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1336"
    });
    $.__views.__alloyId1335.add($.__views.__alloyId1336);
    profile ? $.__views.__alloyId1336.addEventListener("click", profile) : __defers["$.__views.__alloyId1336!click!profile"] = true;
    $.__views.__alloyId1337 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1337"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1337);
    $.__views.__alloyId1338 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1338"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1338);
    makePayment ? $.__views.__alloyId1338.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1338!click!makePayment"] = true;
    $.__views.__alloyId1339 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1339"
    });
    $.__views.postpaid.add($.__views.__alloyId1339);
    $.__views.__alloyId1340 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1340"
    });
    $.__views.__alloyId1339.add($.__views.__alloyId1340);
    $.__views.__alloyId1341 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1341"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1341);
    internetManagement ? $.__views.__alloyId1341.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1341!click!internetManagement"] = true;
    $.__views.__alloyId1342 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1342"
    });
    $.__views.__alloyId1339.add($.__views.__alloyId1342);
    $.__views.__alloyId1343 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1343"
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1343);
    subline ? $.__views.__alloyId1343.addEventListener("click", subline) : __defers["$.__views.__alloyId1343!click!subline"] = true;
    $.__views.__alloyId1344 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1344"
    });
    $.__views.__alloyId1339.add($.__views.__alloyId1344);
    $.__views.__alloyId1345 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1345"
    });
    $.__views.__alloyId1344.add($.__views.__alloyId1345);
    subline ? $.__views.__alloyId1345.addEventListener("click", subline) : __defers["$.__views.__alloyId1345!click!subline"] = true;
    $.__views.__alloyId1346 = Ti.UI.createView({
        layout: "horizontal",
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId1346"
    });
    $.__views.postpaid.add($.__views.__alloyId1346);
    $.__views.__alloyId1347 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1347"
    });
    $.__views.__alloyId1346.add($.__views.__alloyId1347);
    $.__views.__alloyId1348 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1348"
    });
    $.__views.__alloyId1347.add($.__views.__alloyId1348);
    internetManagement ? $.__views.__alloyId1348.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1348!click!internetManagement"] = true;
    $.__views.__alloyId1349 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1349"
    });
    $.__views.__alloyId1346.add($.__views.__alloyId1349);
    $.__views.__alloyId1350 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1350"
    });
    $.__views.__alloyId1349.add($.__views.__alloyId1350);
    subline ? $.__views.__alloyId1350.addEventListener("click", subline) : __defers["$.__views.__alloyId1350!click!subline"] = true;
    $.__views.__alloyId1351 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1351"
    });
    $.__views.__alloyId1346.add($.__views.__alloyId1351);
    $.__views.__alloyId1352 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1352"
    });
    $.__views.__alloyId1351.add($.__views.__alloyId1352);
    familyFriend ? $.__views.__alloyId1352.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1352!click!familyFriend"] = true;
    $.__views.__alloyId1353 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1353"
    });
    $.__views.postpaid.add($.__views.__alloyId1353);
    $.__views.__alloyId1354 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1354"
    });
    $.__views.__alloyId1353.add($.__views.__alloyId1354);
    $.__views.__alloyId1355 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1355"
    });
    $.__views.__alloyId1354.add($.__views.__alloyId1355);
    loyalty ? $.__views.__alloyId1355.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1355!click!loyalty"] = true;
    $.__views.__alloyId1356 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1356"
    });
    $.__views.__alloyId1353.add($.__views.__alloyId1356);
    $.__views.__alloyId1357 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1357"
    });
    $.__views.__alloyId1356.add($.__views.__alloyId1357);
    report ? $.__views.__alloyId1357.addEventListener("click", report) : __defers["$.__views.__alloyId1357!click!report"] = true;
    $.__views.__alloyId1358 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1358"
    });
    $.__views.__alloyId1353.add($.__views.__alloyId1358);
    $.__views.__alloyId1359 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1359"
    });
    $.__views.__alloyId1358.add($.__views.__alloyId1359);
    orderingHistory ? $.__views.__alloyId1359.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1359!click!orderingHistory"] = true;
    $.__views.__alloyId1360 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId1360"
    });
    $.__views.postpaid.add($.__views.__alloyId1360);
    $.__views.__alloyId1361 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1361"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1361);
    $.__views.__alloyId1362 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1362"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1362);
    loyalty ? $.__views.__alloyId1362.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1362!click!loyalty"] = true;
    $.__views.__alloyId1363 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1363"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1363);
    $.__views.__alloyId1364 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1364"
    });
    $.__views.__alloyId1363.add($.__views.__alloyId1364);
    loyalty ? $.__views.__alloyId1364.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1364!click!loyalty"] = true;
    $.__views.__alloyId1365 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1365"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1365);
    $.__views.__alloyId1366 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1366"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1366);
    orderingHistory ? $.__views.__alloyId1366.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1366!click!orderingHistory"] = true;
    $.__views.prepaid = Ti.UI.createScrollView({
        id: "prepaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1307.add($.__views.prepaid);
    $.__views.__alloyId1367 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1367"
    });
    $.__views.prepaid.add($.__views.__alloyId1367);
    $.__views.__alloyId1368 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1368"
    });
    $.__views.__alloyId1367.add($.__views.__alloyId1368);
    $.__views.__alloyId1369 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1369"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1369);
    accDetail ? $.__views.__alloyId1369.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1369!click!accDetail"] = true;
    $.__views.__alloyId1370 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1370"
    });
    $.__views.__alloyId1367.add($.__views.__alloyId1370);
    $.__views.__alloyId1371 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1371"
    });
    $.__views.__alloyId1370.add($.__views.__alloyId1371);
    billStatement ? $.__views.__alloyId1371.addEventListener("click", billStatement) : __defers["$.__views.__alloyId1371!click!billStatement"] = true;
    $.__views.__alloyId1372 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1372"
    });
    $.__views.__alloyId1367.add($.__views.__alloyId1372);
    $.__views.__alloyId1373 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1373"
    });
    $.__views.__alloyId1372.add($.__views.__alloyId1373);
    makePayment ? $.__views.__alloyId1373.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1373!click!makePayment"] = true;
    $.__views.__alloyId1374 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId1374"
    });
    $.__views.prepaid.add($.__views.__alloyId1374);
    $.__views.__alloyId1375 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1375"
    });
    $.__views.__alloyId1374.add($.__views.__alloyId1375);
    $.__views.__alloyId1376 = Ti.UI.createLabel({
        text: "Account / Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1376"
    });
    $.__views.__alloyId1375.add($.__views.__alloyId1376);
    accDetail ? $.__views.__alloyId1376.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1376!click!accDetail"] = true;
    $.__views.__alloyId1377 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1377"
    });
    $.__views.__alloyId1374.add($.__views.__alloyId1377);
    $.__views.__alloyId1378 = Ti.UI.createLabel({
        text: "Bill Statement",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1378"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1378);
    billStatement ? $.__views.__alloyId1378.addEventListener("click", billStatement) : __defers["$.__views.__alloyId1378!click!billStatement"] = true;
    $.__views.__alloyId1379 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1379"
    });
    $.__views.__alloyId1374.add($.__views.__alloyId1379);
    $.__views.__alloyId1380 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1380"
    });
    $.__views.__alloyId1379.add($.__views.__alloyId1380);
    makePayment ? $.__views.__alloyId1380.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1380!click!makePayment"] = true;
    $.__views.__alloyId1381 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1381"
    });
    $.__views.prepaid.add($.__views.__alloyId1381);
    $.__views.__alloyId1382 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1382"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1383"
    });
    $.__views.__alloyId1382.add($.__views.__alloyId1383);
    internetManagement ? $.__views.__alloyId1383.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1383!click!internetManagement"] = true;
    $.__views.__alloyId1384 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1384"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1384);
    $.__views.__alloyId1385 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1385"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1385);
    subline ? $.__views.__alloyId1385.addEventListener("click", subline) : __defers["$.__views.__alloyId1385!click!subline"] = true;
    $.__views.__alloyId1386 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1386"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1387"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1387);
    familyFriend ? $.__views.__alloyId1387.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1387!click!familyFriend"] = true;
    $.__views.__alloyId1388 = Ti.UI.createView({
        layout: "horizontal",
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId1388"
    });
    $.__views.prepaid.add($.__views.__alloyId1388);
    $.__views.__alloyId1389 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1389"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1390"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1390);
    internetManagement ? $.__views.__alloyId1390.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1390!click!internetManagement"] = true;
    $.__views.__alloyId1391 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1391"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1391);
    $.__views.__alloyId1392 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1392"
    });
    $.__views.__alloyId1391.add($.__views.__alloyId1392);
    subline ? $.__views.__alloyId1392.addEventListener("click", subline) : __defers["$.__views.__alloyId1392!click!subline"] = true;
    $.__views.__alloyId1393 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1393"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1393);
    $.__views.__alloyId1394 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1394"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1394);
    familyFriend ? $.__views.__alloyId1394.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1394!click!familyFriend"] = true;
    $.__views.__alloyId1395 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1395"
    });
    $.__views.prepaid.add($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1396"
    });
    $.__views.__alloyId1395.add($.__views.__alloyId1396);
    $.__views.__alloyId1397 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1397"
    });
    $.__views.__alloyId1396.add($.__views.__alloyId1397);
    seasonPass ? $.__views.__alloyId1397.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1397!click!seasonPass"] = true;
    $.__views.__alloyId1398 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1398"
    });
    $.__views.__alloyId1395.add($.__views.__alloyId1398);
    $.__views.__alloyId1399 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1399"
    });
    $.__views.__alloyId1398.add($.__views.__alloyId1399);
    loyalty ? $.__views.__alloyId1399.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1399!click!loyalty"] = true;
    $.__views.__alloyId1400 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1400"
    });
    $.__views.__alloyId1395.add($.__views.__alloyId1400);
    $.__views.__alloyId1401 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1401"
    });
    $.__views.__alloyId1400.add($.__views.__alloyId1401);
    orderingHistory ? $.__views.__alloyId1401.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1401!click!orderingHistory"] = true;
    $.__views.__alloyId1402 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId1402"
    });
    $.__views.prepaid.add($.__views.__alloyId1402);
    $.__views.__alloyId1403 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1403"
    });
    $.__views.__alloyId1402.add($.__views.__alloyId1403);
    $.__views.__alloyId1404 = Ti.UI.createLabel({
        text: "Season Pass",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1404"
    });
    $.__views.__alloyId1403.add($.__views.__alloyId1404);
    seasonPass ? $.__views.__alloyId1404.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1404!click!seasonPass"] = true;
    $.__views.__alloyId1405 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1405"
    });
    $.__views.__alloyId1402.add($.__views.__alloyId1405);
    $.__views.__alloyId1406 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1406"
    });
    $.__views.__alloyId1405.add($.__views.__alloyId1406);
    loyalty ? $.__views.__alloyId1406.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1406!click!loyalty"] = true;
    $.__views.__alloyId1407 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1407"
    });
    $.__views.__alloyId1402.add($.__views.__alloyId1407);
    $.__views.__alloyId1408 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1408"
    });
    $.__views.__alloyId1407.add($.__views.__alloyId1408);
    orderingHistory ? $.__views.__alloyId1408.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1408!click!orderingHistory"] = true;
    $.__views.__alloyId1409 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1409"
    });
    $.__views.prepaid.add($.__views.__alloyId1409);
    $.__views.__alloyId1410 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1410"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1410);
    $.__views.__alloyId1411 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1411"
    });
    $.__views.__alloyId1410.add($.__views.__alloyId1411);
    $.__views.__alloyId1412 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1412"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1412);
    $.__views.__alloyId1413 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1413"
    });
    $.__views.__alloyId1412.add($.__views.__alloyId1413);
    $.__views.__alloyId1414 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId1414"
    });
    $.__views.prepaid.add($.__views.__alloyId1414);
    $.__views.__alloyId1415 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1415"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1415);
    $.__views.__alloyId1416 = Ti.UI.createLabel({
        text: "My Ticket",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1416"
    });
    $.__views.__alloyId1415.add($.__views.__alloyId1416);
    $.__views.__alloyId1417 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1417"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1417);
    $.__views.__alloyId1418 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1418"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1418);
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
            height: "40%",
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
            height: "20%",
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
    __defers["$.__views.__alloyId1271!click!logout"] && $.__views.__alloyId1271.addEventListener("click", logout);
    __defers["$.__views.__alloyId1275!click!close"] && $.__views.__alloyId1275.addEventListener("click", close);
    __defers["$.__views.__alloyId1276!click!gallery"] && $.__views.__alloyId1276.addEventListener("click", gallery);
    __defers["$.__views.__alloyId1279!click!facebook"] && $.__views.__alloyId1279.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1285!click!closepayment"] && $.__views.__alloyId1285.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1287!click!paymentPostpaid"] && $.__views.__alloyId1287.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1290!click!postpaidTopup"] && $.__views.__alloyId1290.addEventListener("click", postpaidTopup);
    __defers["$.__views.__alloyId1296!click!closepayment"] && $.__views.__alloyId1296.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1298!click!prepaidTopup"] && $.__views.__alloyId1298.addEventListener("click", prepaidTopup);
    __defers["$.__views.__alloyId1301!click!pinVoucher"] && $.__views.__alloyId1301.addEventListener("click", pinVoucher);
    __defers["$.__views.__alloyId1304!click!airtime"] && $.__views.__alloyId1304.addEventListener("click", airtime);
    __defers["$.__views.__alloyId1314!click!editPhoto"] && $.__views.__alloyId1314.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1315!click!editPhoto"] && $.__views.__alloyId1315.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1327!click!accDetail"] && $.__views.__alloyId1327.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1329!click!billStatement"] && $.__views.__alloyId1329.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1331!click!makePayment"] && $.__views.__alloyId1331.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1334!click!accDetail"] && $.__views.__alloyId1334.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1336!click!profile"] && $.__views.__alloyId1336.addEventListener("click", profile);
    __defers["$.__views.__alloyId1338!click!makePayment"] && $.__views.__alloyId1338.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1341!click!internetManagement"] && $.__views.__alloyId1341.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1343!click!subline"] && $.__views.__alloyId1343.addEventListener("click", subline);
    __defers["$.__views.__alloyId1345!click!subline"] && $.__views.__alloyId1345.addEventListener("click", subline);
    __defers["$.__views.__alloyId1348!click!internetManagement"] && $.__views.__alloyId1348.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1350!click!subline"] && $.__views.__alloyId1350.addEventListener("click", subline);
    __defers["$.__views.__alloyId1352!click!familyFriend"] && $.__views.__alloyId1352.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1355!click!loyalty"] && $.__views.__alloyId1355.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1357!click!report"] && $.__views.__alloyId1357.addEventListener("click", report);
    __defers["$.__views.__alloyId1359!click!orderingHistory"] && $.__views.__alloyId1359.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1362!click!loyalty"] && $.__views.__alloyId1362.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1364!click!loyalty"] && $.__views.__alloyId1364.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1366!click!orderingHistory"] && $.__views.__alloyId1366.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1369!click!accDetail"] && $.__views.__alloyId1369.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1371!click!billStatement"] && $.__views.__alloyId1371.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1373!click!makePayment"] && $.__views.__alloyId1373.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1376!click!accDetail"] && $.__views.__alloyId1376.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1378!click!billStatement"] && $.__views.__alloyId1378.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1380!click!makePayment"] && $.__views.__alloyId1380.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1383!click!internetManagement"] && $.__views.__alloyId1383.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1385!click!subline"] && $.__views.__alloyId1385.addEventListener("click", subline);
    __defers["$.__views.__alloyId1387!click!familyFriend"] && $.__views.__alloyId1387.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1390!click!internetManagement"] && $.__views.__alloyId1390.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1392!click!subline"] && $.__views.__alloyId1392.addEventListener("click", subline);
    __defers["$.__views.__alloyId1394!click!familyFriend"] && $.__views.__alloyId1394.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1397!click!seasonPass"] && $.__views.__alloyId1397.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1399!click!loyalty"] && $.__views.__alloyId1399.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1401!click!orderingHistory"] && $.__views.__alloyId1401.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1404!click!seasonPass"] && $.__views.__alloyId1404.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1406!click!loyalty"] && $.__views.__alloyId1406.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1408!click!orderingHistory"] && $.__views.__alloyId1408.addEventListener("click", orderingHistory);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;