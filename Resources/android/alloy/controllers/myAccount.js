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
    $.__views.__alloyId1265 = Alloy.createController("_header", {
        id: "__alloyId1265",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId1265.setParent($.__views.myAccount);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
    $.__views.__alloyId1266 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId1266"
    });
    $.__views.photo.add($.__views.__alloyId1266);
    $.__views.__alloyId1267 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1267"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1267);
    $.__views.__alloyId1268 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1268"
    });
    $.__views.__alloyId1267.add($.__views.__alloyId1268);
    $.__views.__alloyId1269 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1269"
    });
    $.__views.__alloyId1267.add($.__views.__alloyId1269);
    close ? $.__views.__alloyId1269.addEventListener("click", close) : __defers["$.__views.__alloyId1269!click!close"] = true;
    $.__views.__alloyId1270 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1270"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1270);
    gallery ? $.__views.__alloyId1270.addEventListener("click", gallery) : __defers["$.__views.__alloyId1270!click!gallery"] = true;
    $.__views.__alloyId1271 = Ti.UI.createView({
        id: "__alloyId1271"
    });
    $.__views.__alloyId1270.add($.__views.__alloyId1271);
    $.__views.__alloyId1272 = Ti.UI.createLabel({
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1272"
    });
    $.__views.__alloyId1271.add($.__views.__alloyId1272);
    $.__views.__alloyId1273 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1273"
    });
    $.__views.__alloyId1266.add($.__views.__alloyId1273);
    facebook ? $.__views.__alloyId1273.addEventListener("click", facebook) : __defers["$.__views.__alloyId1273!click!facebook"] = true;
    $.__views.__alloyId1274 = Ti.UI.createView({
        id: "__alloyId1274"
    });
    $.__views.__alloyId1273.add($.__views.__alloyId1274);
    $.__views.__alloyId1275 = Ti.UI.createLabel({
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1275"
    });
    $.__views.__alloyId1274.add($.__views.__alloyId1275);
    $.__views.postpaidPayment = Ti.UI.createView({
        id: "postpaidPayment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.postpaidPayment);
    $.__views.__alloyId1276 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "35%",
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: "1",
        id: "__alloyId1276"
    });
    $.__views.postpaidPayment.add($.__views.__alloyId1276);
    $.__views.__alloyId1277 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1277"
    });
    $.__views.__alloyId1276.add($.__views.__alloyId1277);
    $.__views.__alloyId1278 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "white",
        id: "__alloyId1278"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1278);
    $.__views.__alloyId1279 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "20",
        image: "/images/close_icon.png",
        id: "__alloyId1279"
    });
    $.__views.__alloyId1277.add($.__views.__alloyId1279);
    closepayment ? $.__views.__alloyId1279.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1279!click!closepayment"] = true;
    $.__views.__alloyId1280 = Ti.UI.createView({
        layout: "horizontal",
        height: "70%",
        id: "__alloyId1280"
    });
    $.__views.__alloyId1276.add($.__views.__alloyId1280);
    $.__views.__alloyId1281 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "15",
        id: "__alloyId1281"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1281);
    paymentPostpaid ? $.__views.__alloyId1281.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1281!click!paymentPostpaid"] = true;
    $.__views.__alloyId1282 = Ti.UI.createView({
        id: "__alloyId1282"
    });
    $.__views.__alloyId1281.add($.__views.__alloyId1282);
    $.__views.__alloyId1283 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1283"
    });
    $.__views.__alloyId1282.add($.__views.__alloyId1283);
    $.__views.__alloyId1284 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        id: "__alloyId1284"
    });
    $.__views.__alloyId1280.add($.__views.__alloyId1284);
    postpaidTopup ? $.__views.__alloyId1284.addEventListener("click", postpaidTopup) : __defers["$.__views.__alloyId1284!click!postpaidTopup"] = true;
    $.__views.__alloyId1285 = Ti.UI.createView({
        id: "__alloyId1285"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1285);
    $.__views.__alloyId1286 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1286"
    });
    $.__views.__alloyId1285.add($.__views.__alloyId1286);
    $.__views.prepaidPayment = Ti.UI.createView({
        id: "prepaidPayment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.prepaidPayment);
    $.__views.__alloyId1287 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "35%",
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: "1",
        id: "__alloyId1287"
    });
    $.__views.prepaidPayment.add($.__views.__alloyId1287);
    $.__views.__alloyId1288 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1288"
    });
    $.__views.__alloyId1287.add($.__views.__alloyId1288);
    $.__views.__alloyId1289 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "white",
        id: "__alloyId1289"
    });
    $.__views.__alloyId1288.add($.__views.__alloyId1289);
    $.__views.__alloyId1290 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "20",
        image: "/images/close_icon.png",
        id: "__alloyId1290"
    });
    $.__views.__alloyId1288.add($.__views.__alloyId1290);
    closepayment ? $.__views.__alloyId1290.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1290!click!closepayment"] = true;
    $.__views.__alloyId1291 = Ti.UI.createView({
        layout: "horizontal",
        height: "70%",
        id: "__alloyId1291"
    });
    $.__views.__alloyId1287.add($.__views.__alloyId1291);
    $.__views.__alloyId1292 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "15",
        id: "__alloyId1292"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1292);
    prepaidTopup ? $.__views.__alloyId1292.addEventListener("click", prepaidTopup) : __defers["$.__views.__alloyId1292!click!prepaidTopup"] = true;
    $.__views.__alloyId1293 = Ti.UI.createView({
        id: "__alloyId1293"
    });
    $.__views.__alloyId1292.add($.__views.__alloyId1293);
    $.__views.__alloyId1294 = Ti.UI.createLabel({
        text: "Top Up",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1294"
    });
    $.__views.__alloyId1293.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        id: "__alloyId1295"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1295);
    pinVoucher ? $.__views.__alloyId1295.addEventListener("click", pinVoucher) : __defers["$.__views.__alloyId1295!click!pinVoucher"] = true;
    $.__views.__alloyId1296 = Ti.UI.createView({
        id: "__alloyId1296"
    });
    $.__views.__alloyId1295.add($.__views.__alloyId1296);
    $.__views.__alloyId1297 = Ti.UI.createLabel({
        text: "Pin Voucher",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1297"
    });
    $.__views.__alloyId1296.add($.__views.__alloyId1297);
    $.__views.__alloyId1298 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        right: "10",
        id: "__alloyId1298"
    });
    $.__views.__alloyId1291.add($.__views.__alloyId1298);
    airtime ? $.__views.__alloyId1298.addEventListener("click", airtime) : __defers["$.__views.__alloyId1298!click!airtime"] = true;
    $.__views.__alloyId1299 = Ti.UI.createView({
        id: "__alloyId1299"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1299);
    $.__views.__alloyId1300 = Ti.UI.createLabel({
        text: "AirTime Transfer",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1300"
    });
    $.__views.__alloyId1299.add($.__views.__alloyId1300);
    $.__views.__alloyId1301 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
        id: "__alloyId1301"
    });
    $.__views.myAccount.add($.__views.__alloyId1301);
    $.__views.__alloyId1302 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId1302"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1302);
    $.__views.__alloyId1303 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1303"
    });
    $.__views.__alloyId1302.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId1304"
    });
    $.__views.__alloyId1303.add($.__views.__alloyId1304);
    $.__views.__alloyId1305 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId1305"
    });
    $.__views.__alloyId1303.add($.__views.__alloyId1305);
    $.__views.__alloyId1306 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId1306"
    });
    $.__views.__alloyId1302.add($.__views.__alloyId1306);
    $.__views.__alloyId1307 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId1307"
    });
    $.__views.__alloyId1302.add($.__views.__alloyId1307);
    $.__views.__alloyId1308 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
        id: "__alloyId1308"
    });
    $.__views.__alloyId1307.add($.__views.__alloyId1308);
    editPhoto ? $.__views.__alloyId1308.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1308!click!editPhoto"] = true;
    $.__views.__alloyId1309 = Ti.UI.createImageView({
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
        id: "__alloyId1309"
    });
    $.__views.__alloyId1307.add($.__views.__alloyId1309);
    editPhoto ? $.__views.__alloyId1309.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1309!click!editPhoto"] = true;
    $.__views.__alloyId1310 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1310"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId1311"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1311);
    $.__views.__alloyId1312 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1312"
    });
    $.__views.__alloyId1311.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId1313"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId1314"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1314);
    $.__views.__alloyId1315 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId1315"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1316"
    });
    $.__views.__alloyId1315.add($.__views.__alloyId1316);
    $.__views.__alloyId1317 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId1317"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1317);
    $.__views.__alloyId1318 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId1318"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1318);
    $.__views.postpaid = Ti.UI.createScrollView({
        id: "postpaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1301.add($.__views.postpaid);
    $.__views.__alloyId1319 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1319"
    });
    $.__views.postpaid.add($.__views.__alloyId1319);
    $.__views.__alloyId1320 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1320"
    });
    $.__views.__alloyId1319.add($.__views.__alloyId1320);
    $.__views.__alloyId1321 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
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
    $.__views.__alloyId1323 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
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
    $.__views.__alloyId1325 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1325"
    });
    $.__views.__alloyId1324.add($.__views.__alloyId1325);
    makePayment ? $.__views.__alloyId1325.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1325!click!makePayment"] = true;
    $.__views.__alloyId1326 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1326"
    });
    $.__views.postpaid.add($.__views.__alloyId1326);
    $.__views.__alloyId1327 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1327"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1327);
    $.__views.__alloyId1328 = Ti.UI.createLabel({
        text: "Account / Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1328"
    });
    $.__views.__alloyId1327.add($.__views.__alloyId1328);
    accDetail ? $.__views.__alloyId1328.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1328!click!accDetail"] = true;
    $.__views.__alloyId1329 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1329"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1329);
    $.__views.__alloyId1330 = Ti.UI.createLabel({
        text: "Bill Statement",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1330"
    });
    $.__views.__alloyId1329.add($.__views.__alloyId1330);
    profile ? $.__views.__alloyId1330.addEventListener("click", profile) : __defers["$.__views.__alloyId1330!click!profile"] = true;
    $.__views.__alloyId1331 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1331"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1331);
    $.__views.__alloyId1332 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1332"
    });
    $.__views.__alloyId1331.add($.__views.__alloyId1332);
    makePayment ? $.__views.__alloyId1332.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1332!click!makePayment"] = true;
    $.__views.__alloyId1333 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1333"
    });
    $.__views.postpaid.add($.__views.__alloyId1333);
    $.__views.__alloyId1334 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1334"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1334);
    $.__views.__alloyId1335 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
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
    $.__views.__alloyId1337 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
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
    $.__views.__alloyId1339 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1339"
    });
    $.__views.__alloyId1338.add($.__views.__alloyId1339);
    subline ? $.__views.__alloyId1339.addEventListener("click", subline) : __defers["$.__views.__alloyId1339!click!subline"] = true;
    $.__views.__alloyId1340 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1340"
    });
    $.__views.postpaid.add($.__views.__alloyId1340);
    $.__views.__alloyId1341 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1341"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1341);
    $.__views.__alloyId1342 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1342"
    });
    $.__views.__alloyId1341.add($.__views.__alloyId1342);
    internetManagement ? $.__views.__alloyId1342.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1342!click!internetManagement"] = true;
    $.__views.__alloyId1343 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1343"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1343);
    $.__views.__alloyId1344 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1344"
    });
    $.__views.__alloyId1343.add($.__views.__alloyId1344);
    subline ? $.__views.__alloyId1344.addEventListener("click", subline) : __defers["$.__views.__alloyId1344!click!subline"] = true;
    $.__views.__alloyId1345 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1345"
    });
    $.__views.__alloyId1340.add($.__views.__alloyId1345);
    $.__views.__alloyId1346 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1346"
    });
    $.__views.__alloyId1345.add($.__views.__alloyId1346);
    familyFriend ? $.__views.__alloyId1346.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1346!click!familyFriend"] = true;
    $.__views.__alloyId1347 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1347"
    });
    $.__views.postpaid.add($.__views.__alloyId1347);
    $.__views.__alloyId1348 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1348"
    });
    $.__views.__alloyId1347.add($.__views.__alloyId1348);
    $.__views.__alloyId1349 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1349"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1349);
    loyalty ? $.__views.__alloyId1349.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1349!click!loyalty"] = true;
    $.__views.__alloyId1350 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1350"
    });
    $.__views.__alloyId1347.add($.__views.__alloyId1350);
    $.__views.__alloyId1351 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1351"
    });
    $.__views.__alloyId1350.add($.__views.__alloyId1351);
    report ? $.__views.__alloyId1351.addEventListener("click", report) : __defers["$.__views.__alloyId1351!click!report"] = true;
    $.__views.__alloyId1352 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1352"
    });
    $.__views.__alloyId1347.add($.__views.__alloyId1352);
    $.__views.__alloyId1353 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1353"
    });
    $.__views.__alloyId1352.add($.__views.__alloyId1353);
    orderingHistory ? $.__views.__alloyId1353.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1353!click!orderingHistory"] = true;
    $.__views.__alloyId1354 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1354"
    });
    $.__views.postpaid.add($.__views.__alloyId1354);
    $.__views.__alloyId1355 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1355"
    });
    $.__views.__alloyId1354.add($.__views.__alloyId1355);
    $.__views.__alloyId1356 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1356"
    });
    $.__views.__alloyId1355.add($.__views.__alloyId1356);
    loyalty ? $.__views.__alloyId1356.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1356!click!loyalty"] = true;
    $.__views.__alloyId1357 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1357"
    });
    $.__views.__alloyId1354.add($.__views.__alloyId1357);
    $.__views.__alloyId1358 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1358"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1358);
    loyalty ? $.__views.__alloyId1358.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1358!click!loyalty"] = true;
    $.__views.__alloyId1359 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1359"
    });
    $.__views.__alloyId1354.add($.__views.__alloyId1359);
    $.__views.__alloyId1360 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1360"
    });
    $.__views.__alloyId1359.add($.__views.__alloyId1360);
    orderingHistory ? $.__views.__alloyId1360.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1360!click!orderingHistory"] = true;
    $.__views.prepaid = Ti.UI.createScrollView({
        id: "prepaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1301.add($.__views.prepaid);
    $.__views.__alloyId1361 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1361"
    });
    $.__views.prepaid.add($.__views.__alloyId1361);
    $.__views.__alloyId1362 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1362"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1363"
    });
    $.__views.__alloyId1362.add($.__views.__alloyId1363);
    accDetail ? $.__views.__alloyId1363.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1363!click!accDetail"] = true;
    $.__views.__alloyId1364 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1364"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1364);
    $.__views.__alloyId1365 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1365"
    });
    $.__views.__alloyId1364.add($.__views.__alloyId1365);
    billStatement ? $.__views.__alloyId1365.addEventListener("click", billStatement) : __defers["$.__views.__alloyId1365!click!billStatement"] = true;
    $.__views.__alloyId1366 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1366"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1367"
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1367);
    makePayment ? $.__views.__alloyId1367.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1367!click!makePayment"] = true;
    $.__views.__alloyId1368 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1368"
    });
    $.__views.prepaid.add($.__views.__alloyId1368);
    $.__views.__alloyId1369 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1369"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1369);
    $.__views.__alloyId1370 = Ti.UI.createLabel({
        text: "Account / Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1370"
    });
    $.__views.__alloyId1369.add($.__views.__alloyId1370);
    accDetail ? $.__views.__alloyId1370.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1370!click!accDetail"] = true;
    $.__views.__alloyId1371 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1371"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1371);
    $.__views.__alloyId1372 = Ti.UI.createLabel({
        text: "Bill Statement",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1372"
    });
    $.__views.__alloyId1371.add($.__views.__alloyId1372);
    billStatement ? $.__views.__alloyId1372.addEventListener("click", billStatement) : __defers["$.__views.__alloyId1372!click!billStatement"] = true;
    $.__views.__alloyId1373 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1373"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1373);
    $.__views.__alloyId1374 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1374"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1374);
    makePayment ? $.__views.__alloyId1374.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1374!click!makePayment"] = true;
    $.__views.__alloyId1375 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1375"
    });
    $.__views.prepaid.add($.__views.__alloyId1375);
    $.__views.__alloyId1376 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1376"
    });
    $.__views.__alloyId1375.add($.__views.__alloyId1376);
    $.__views.__alloyId1377 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1377"
    });
    $.__views.__alloyId1376.add($.__views.__alloyId1377);
    internetManagement ? $.__views.__alloyId1377.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1377!click!internetManagement"] = true;
    $.__views.__alloyId1378 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1378"
    });
    $.__views.__alloyId1375.add($.__views.__alloyId1378);
    $.__views.__alloyId1379 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1379"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1379);
    subline ? $.__views.__alloyId1379.addEventListener("click", subline) : __defers["$.__views.__alloyId1379!click!subline"] = true;
    $.__views.__alloyId1380 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1380"
    });
    $.__views.__alloyId1375.add($.__views.__alloyId1380);
    $.__views.__alloyId1381 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1381"
    });
    $.__views.__alloyId1380.add($.__views.__alloyId1381);
    familyFriend ? $.__views.__alloyId1381.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1381!click!familyFriend"] = true;
    $.__views.__alloyId1382 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1382"
    });
    $.__views.prepaid.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1383"
    });
    $.__views.__alloyId1382.add($.__views.__alloyId1383);
    $.__views.__alloyId1384 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1384"
    });
    $.__views.__alloyId1383.add($.__views.__alloyId1384);
    internetManagement ? $.__views.__alloyId1384.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1384!click!internetManagement"] = true;
    $.__views.__alloyId1385 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1385"
    });
    $.__views.__alloyId1382.add($.__views.__alloyId1385);
    $.__views.__alloyId1386 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1386"
    });
    $.__views.__alloyId1385.add($.__views.__alloyId1386);
    subline ? $.__views.__alloyId1386.addEventListener("click", subline) : __defers["$.__views.__alloyId1386!click!subline"] = true;
    $.__views.__alloyId1387 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1387"
    });
    $.__views.__alloyId1382.add($.__views.__alloyId1387);
    $.__views.__alloyId1388 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1388"
    });
    $.__views.__alloyId1387.add($.__views.__alloyId1388);
    familyFriend ? $.__views.__alloyId1388.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1388!click!familyFriend"] = true;
    $.__views.__alloyId1389 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1389"
    });
    $.__views.prepaid.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1390"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1391"
    });
    $.__views.__alloyId1390.add($.__views.__alloyId1391);
    seasonPass ? $.__views.__alloyId1391.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1391!click!seasonPass"] = true;
    $.__views.__alloyId1392 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1392"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1392);
    $.__views.__alloyId1393 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1393"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1393);
    loyalty ? $.__views.__alloyId1393.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1393!click!loyalty"] = true;
    $.__views.__alloyId1394 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1394"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1395"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1395);
    orderingHistory ? $.__views.__alloyId1395.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1395!click!orderingHistory"] = true;
    $.__views.__alloyId1396 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1396"
    });
    $.__views.prepaid.add($.__views.__alloyId1396);
    $.__views.__alloyId1397 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1397"
    });
    $.__views.__alloyId1396.add($.__views.__alloyId1397);
    $.__views.__alloyId1398 = Ti.UI.createLabel({
        text: "Season Pass",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1398"
    });
    $.__views.__alloyId1397.add($.__views.__alloyId1398);
    seasonPass ? $.__views.__alloyId1398.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1398!click!seasonPass"] = true;
    $.__views.__alloyId1399 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1399"
    });
    $.__views.__alloyId1396.add($.__views.__alloyId1399);
    $.__views.__alloyId1400 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1400"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1400);
    loyalty ? $.__views.__alloyId1400.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1400!click!loyalty"] = true;
    $.__views.__alloyId1401 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1401"
    });
    $.__views.__alloyId1396.add($.__views.__alloyId1401);
    $.__views.__alloyId1402 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1402"
    });
    $.__views.__alloyId1401.add($.__views.__alloyId1402);
    orderingHistory ? $.__views.__alloyId1402.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1402!click!orderingHistory"] = true;
    $.__views.__alloyId1403 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: Ti.UI.FILL,
        id: "__alloyId1403"
    });
    $.__views.prepaid.add($.__views.__alloyId1403);
    $.__views.__alloyId1404 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1404"
    });
    $.__views.__alloyId1403.add($.__views.__alloyId1404);
    $.__views.__alloyId1405 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1405"
    });
    $.__views.__alloyId1404.add($.__views.__alloyId1405);
    $.__views.__alloyId1406 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1406"
    });
    $.__views.__alloyId1403.add($.__views.__alloyId1406);
    $.__views.__alloyId1407 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1407"
    });
    $.__views.__alloyId1406.add($.__views.__alloyId1407);
    $.__views.__alloyId1408 = Ti.UI.createView({
        layout: "horizontal",
        height: "15%",
        width: Ti.UI.FILL,
        id: "__alloyId1408"
    });
    $.__views.prepaid.add($.__views.__alloyId1408);
    $.__views.__alloyId1409 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1409"
    });
    $.__views.__alloyId1408.add($.__views.__alloyId1409);
    $.__views.__alloyId1410 = Ti.UI.createLabel({
        text: "My Ticket",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1410"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1410);
    $.__views.__alloyId1411 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1411"
    });
    $.__views.__alloyId1408.add($.__views.__alloyId1411);
    $.__views.__alloyId1412 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1412"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1412);
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
    __defers["$.__views.__alloyId1269!click!close"] && $.__views.__alloyId1269.addEventListener("click", close);
    __defers["$.__views.__alloyId1270!click!gallery"] && $.__views.__alloyId1270.addEventListener("click", gallery);
    __defers["$.__views.__alloyId1273!click!facebook"] && $.__views.__alloyId1273.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1279!click!closepayment"] && $.__views.__alloyId1279.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1281!click!paymentPostpaid"] && $.__views.__alloyId1281.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1284!click!postpaidTopup"] && $.__views.__alloyId1284.addEventListener("click", postpaidTopup);
    __defers["$.__views.__alloyId1290!click!closepayment"] && $.__views.__alloyId1290.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1292!click!prepaidTopup"] && $.__views.__alloyId1292.addEventListener("click", prepaidTopup);
    __defers["$.__views.__alloyId1295!click!pinVoucher"] && $.__views.__alloyId1295.addEventListener("click", pinVoucher);
    __defers["$.__views.__alloyId1298!click!airtime"] && $.__views.__alloyId1298.addEventListener("click", airtime);
    __defers["$.__views.__alloyId1308!click!editPhoto"] && $.__views.__alloyId1308.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1309!click!editPhoto"] && $.__views.__alloyId1309.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1321!click!accDetail"] && $.__views.__alloyId1321.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1323!click!billStatement"] && $.__views.__alloyId1323.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1325!click!makePayment"] && $.__views.__alloyId1325.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1328!click!accDetail"] && $.__views.__alloyId1328.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1330!click!profile"] && $.__views.__alloyId1330.addEventListener("click", profile);
    __defers["$.__views.__alloyId1332!click!makePayment"] && $.__views.__alloyId1332.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1335!click!internetManagement"] && $.__views.__alloyId1335.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1337!click!subline"] && $.__views.__alloyId1337.addEventListener("click", subline);
    __defers["$.__views.__alloyId1339!click!subline"] && $.__views.__alloyId1339.addEventListener("click", subline);
    __defers["$.__views.__alloyId1342!click!internetManagement"] && $.__views.__alloyId1342.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1344!click!subline"] && $.__views.__alloyId1344.addEventListener("click", subline);
    __defers["$.__views.__alloyId1346!click!familyFriend"] && $.__views.__alloyId1346.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1349!click!loyalty"] && $.__views.__alloyId1349.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1351!click!report"] && $.__views.__alloyId1351.addEventListener("click", report);
    __defers["$.__views.__alloyId1353!click!orderingHistory"] && $.__views.__alloyId1353.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1356!click!loyalty"] && $.__views.__alloyId1356.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1358!click!loyalty"] && $.__views.__alloyId1358.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1360!click!orderingHistory"] && $.__views.__alloyId1360.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1363!click!accDetail"] && $.__views.__alloyId1363.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1365!click!billStatement"] && $.__views.__alloyId1365.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1367!click!makePayment"] && $.__views.__alloyId1367.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1370!click!accDetail"] && $.__views.__alloyId1370.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1372!click!billStatement"] && $.__views.__alloyId1372.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1374!click!makePayment"] && $.__views.__alloyId1374.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1377!click!internetManagement"] && $.__views.__alloyId1377.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1379!click!subline"] && $.__views.__alloyId1379.addEventListener("click", subline);
    __defers["$.__views.__alloyId1381!click!familyFriend"] && $.__views.__alloyId1381.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1384!click!internetManagement"] && $.__views.__alloyId1384.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1386!click!subline"] && $.__views.__alloyId1386.addEventListener("click", subline);
    __defers["$.__views.__alloyId1388!click!familyFriend"] && $.__views.__alloyId1388.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1391!click!seasonPass"] && $.__views.__alloyId1391.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1393!click!loyalty"] && $.__views.__alloyId1393.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1395!click!orderingHistory"] && $.__views.__alloyId1395.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1398!click!seasonPass"] && $.__views.__alloyId1398.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1400!click!loyalty"] && $.__views.__alloyId1400.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1402!click!orderingHistory"] && $.__views.__alloyId1402.addEventListener("click", orderingHistory);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;