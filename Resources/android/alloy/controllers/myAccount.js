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
    $.__views.__alloyId1299 = Alloy.createController("_header", {
        id: "__alloyId1299",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId1299.setParent($.__views.myAccount);
    $.__views.__alloyId1300 = Ti.UI.createImageView({
        backgroundColor: "blue",
        width: "90",
        height: "30",
        right: "10",
        top: "10",
        id: "__alloyId1300"
    });
    $.__views.myAccount.add($.__views.__alloyId1300);
    logout ? $.__views.__alloyId1300.addEventListener("click", logout) : __defers["$.__views.__alloyId1300!click!logout"] = true;
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
    $.__views.__alloyId1301 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId1301"
    });
    $.__views.photo.add($.__views.__alloyId1301);
    $.__views.__alloyId1302 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1302"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1302);
    $.__views.__alloyId1303 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId1303"
    });
    $.__views.__alloyId1302.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1304"
    });
    $.__views.__alloyId1302.add($.__views.__alloyId1304);
    close ? $.__views.__alloyId1304.addEventListener("click", close) : __defers["$.__views.__alloyId1304!click!close"] = true;
    $.__views.__alloyId1305 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1305"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1305);
    gallery ? $.__views.__alloyId1305.addEventListener("click", gallery) : __defers["$.__views.__alloyId1305!click!gallery"] = true;
    $.__views.__alloyId1306 = Ti.UI.createView({
        id: "__alloyId1306"
    });
    $.__views.__alloyId1305.add($.__views.__alloyId1306);
    $.__views.__alloyId1307 = Ti.UI.createLabel({
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1307"
    });
    $.__views.__alloyId1306.add($.__views.__alloyId1307);
    $.__views.__alloyId1308 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId1308"
    });
    $.__views.__alloyId1301.add($.__views.__alloyId1308);
    facebook ? $.__views.__alloyId1308.addEventListener("click", facebook) : __defers["$.__views.__alloyId1308!click!facebook"] = true;
    $.__views.__alloyId1309 = Ti.UI.createView({
        id: "__alloyId1309"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1309);
    $.__views.__alloyId1310 = Ti.UI.createLabel({
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1310"
    });
    $.__views.__alloyId1309.add($.__views.__alloyId1310);
    $.__views.postpaidPayment = Ti.UI.createView({
        id: "postpaidPayment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.postpaidPayment);
    $.__views.__alloyId1311 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "35%",
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: "1",
        id: "__alloyId1311"
    });
    $.__views.postpaidPayment.add($.__views.__alloyId1311);
    $.__views.__alloyId1312 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1312"
    });
    $.__views.__alloyId1311.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "white",
        id: "__alloyId1313"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "20",
        image: "/images/close_icon.png",
        id: "__alloyId1314"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1314);
    closepayment ? $.__views.__alloyId1314.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1314!click!closepayment"] = true;
    $.__views.__alloyId1315 = Ti.UI.createView({
        layout: "horizontal",
        height: "70%",
        id: "__alloyId1315"
    });
    $.__views.__alloyId1311.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "15",
        id: "__alloyId1316"
    });
    $.__views.__alloyId1315.add($.__views.__alloyId1316);
    paymentPostpaid ? $.__views.__alloyId1316.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1316!click!paymentPostpaid"] = true;
    $.__views.__alloyId1317 = Ti.UI.createView({
        id: "__alloyId1317"
    });
    $.__views.__alloyId1316.add($.__views.__alloyId1317);
    $.__views.__alloyId1318 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1318"
    });
    $.__views.__alloyId1317.add($.__views.__alloyId1318);
    $.__views.__alloyId1319 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        id: "__alloyId1319"
    });
    $.__views.__alloyId1315.add($.__views.__alloyId1319);
    postpaidTopup ? $.__views.__alloyId1319.addEventListener("click", postpaidTopup) : __defers["$.__views.__alloyId1319!click!postpaidTopup"] = true;
    $.__views.__alloyId1320 = Ti.UI.createView({
        id: "__alloyId1320"
    });
    $.__views.__alloyId1319.add($.__views.__alloyId1320);
    $.__views.__alloyId1321 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1321"
    });
    $.__views.__alloyId1320.add($.__views.__alloyId1321);
    $.__views.prepaidPayment = Ti.UI.createView({
        id: "prepaidPayment",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.prepaidPayment);
    $.__views.__alloyId1322 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "35%",
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: "1",
        id: "__alloyId1322"
    });
    $.__views.prepaidPayment.add($.__views.__alloyId1322);
    $.__views.__alloyId1323 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId1323"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1323);
    $.__views.__alloyId1324 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "white",
        id: "__alloyId1324"
    });
    $.__views.__alloyId1323.add($.__views.__alloyId1324);
    $.__views.__alloyId1325 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "20",
        image: "/images/close_icon.png",
        id: "__alloyId1325"
    });
    $.__views.__alloyId1323.add($.__views.__alloyId1325);
    closepayment ? $.__views.__alloyId1325.addEventListener("click", closepayment) : __defers["$.__views.__alloyId1325!click!closepayment"] = true;
    $.__views.__alloyId1326 = Ti.UI.createView({
        layout: "horizontal",
        height: "70%",
        id: "__alloyId1326"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1326);
    $.__views.__alloyId1327 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "15",
        id: "__alloyId1327"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1327);
    prepaidTopup ? $.__views.__alloyId1327.addEventListener("click", prepaidTopup) : __defers["$.__views.__alloyId1327!click!prepaidTopup"] = true;
    $.__views.__alloyId1328 = Ti.UI.createView({
        id: "__alloyId1328"
    });
    $.__views.__alloyId1327.add($.__views.__alloyId1328);
    $.__views.__alloyId1329 = Ti.UI.createLabel({
        text: "Top Up",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1329"
    });
    $.__views.__alloyId1328.add($.__views.__alloyId1329);
    $.__views.__alloyId1330 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        id: "__alloyId1330"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1330);
    pinVoucher ? $.__views.__alloyId1330.addEventListener("click", pinVoucher) : __defers["$.__views.__alloyId1330!click!pinVoucher"] = true;
    $.__views.__alloyId1331 = Ti.UI.createView({
        id: "__alloyId1331"
    });
    $.__views.__alloyId1330.add($.__views.__alloyId1331);
    $.__views.__alloyId1332 = Ti.UI.createLabel({
        text: "Pin Voucher",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1332"
    });
    $.__views.__alloyId1331.add($.__views.__alloyId1332);
    $.__views.__alloyId1333 = Ti.UI.createView({
        layout: "horizontal",
        width: "28%",
        height: "40%",
        backgroundColor: "#3E6AC3",
        left: "10",
        right: "10",
        id: "__alloyId1333"
    });
    $.__views.__alloyId1326.add($.__views.__alloyId1333);
    airtime ? $.__views.__alloyId1333.addEventListener("click", airtime) : __defers["$.__views.__alloyId1333!click!airtime"] = true;
    $.__views.__alloyId1334 = Ti.UI.createView({
        id: "__alloyId1334"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1334);
    $.__views.__alloyId1335 = Ti.UI.createLabel({
        text: "AirTime Transfer",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId1335"
    });
    $.__views.__alloyId1334.add($.__views.__alloyId1335);
    $.__views.__alloyId1336 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
        id: "__alloyId1336"
    });
    $.__views.myAccount.add($.__views.__alloyId1336);
    $.__views.__alloyId1337 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId1337"
    });
    $.__views.__alloyId1336.add($.__views.__alloyId1337);
    $.__views.__alloyId1338 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1338"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1338);
    $.__views.__alloyId1339 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId1339"
    });
    $.__views.__alloyId1338.add($.__views.__alloyId1339);
    $.__views.__alloyId1340 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId1340"
    });
    $.__views.__alloyId1338.add($.__views.__alloyId1340);
    $.__views.__alloyId1341 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId1341"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1341);
    $.__views.__alloyId1342 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId1342"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1342);
    $.__views.__alloyId1343 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
        id: "__alloyId1343"
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1343);
    editPhoto ? $.__views.__alloyId1343.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1343!click!editPhoto"] = true;
    $.__views.__alloyId1344 = Ti.UI.createImageView({
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
        id: "__alloyId1344"
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1344);
    editPhoto ? $.__views.__alloyId1344.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId1344!click!editPhoto"] = true;
    $.__views.__alloyId1345 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId1345"
    });
    $.__views.__alloyId1336.add($.__views.__alloyId1345);
    $.__views.__alloyId1346 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId1346"
    });
    $.__views.__alloyId1345.add($.__views.__alloyId1346);
    $.__views.__alloyId1347 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1347"
    });
    $.__views.__alloyId1346.add($.__views.__alloyId1347);
    $.__views.__alloyId1348 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId1348"
    });
    $.__views.__alloyId1347.add($.__views.__alloyId1348);
    $.__views.__alloyId1349 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId1349"
    });
    $.__views.__alloyId1347.add($.__views.__alloyId1349);
    $.__views.__alloyId1350 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId1350"
    });
    $.__views.__alloyId1345.add($.__views.__alloyId1350);
    $.__views.__alloyId1351 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1351"
    });
    $.__views.__alloyId1350.add($.__views.__alloyId1351);
    $.__views.__alloyId1352 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId1352"
    });
    $.__views.__alloyId1351.add($.__views.__alloyId1352);
    $.__views.__alloyId1353 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId1353"
    });
    $.__views.__alloyId1351.add($.__views.__alloyId1353);
    $.__views.postpaid = Ti.UI.createScrollView({
        id: "postpaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1336.add($.__views.postpaid);
    $.__views.__alloyId1354 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
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
    $.__views.__alloyId1356 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1356"
    });
    $.__views.__alloyId1355.add($.__views.__alloyId1356);
    accDetail ? $.__views.__alloyId1356.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1356!click!accDetail"] = true;
    $.__views.__alloyId1357 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1357"
    });
    $.__views.__alloyId1354.add($.__views.__alloyId1357);
    $.__views.__alloyId1358 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1358"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1358);
    billStatement ? $.__views.__alloyId1358.addEventListener("click", billStatement) : __defers["$.__views.__alloyId1358!click!billStatement"] = true;
    $.__views.__alloyId1359 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1359"
    });
    $.__views.__alloyId1354.add($.__views.__alloyId1359);
    $.__views.__alloyId1360 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1360"
    });
    $.__views.__alloyId1359.add($.__views.__alloyId1360);
    makePayment ? $.__views.__alloyId1360.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1360!click!makePayment"] = true;
    $.__views.__alloyId1361 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId1361"
    });
    $.__views.postpaid.add($.__views.__alloyId1361);
    $.__views.__alloyId1362 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1362"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createLabel({
        text: "Account / Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
    $.__views.__alloyId1365 = Ti.UI.createLabel({
        text: "Bill Statement",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1365"
    });
    $.__views.__alloyId1364.add($.__views.__alloyId1365);
    profile ? $.__views.__alloyId1365.addEventListener("click", profile) : __defers["$.__views.__alloyId1365!click!profile"] = true;
    $.__views.__alloyId1366 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1366"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1367"
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1367);
    makePayment ? $.__views.__alloyId1367.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1367!click!makePayment"] = true;
    $.__views.__alloyId1368 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1368"
    });
    $.__views.postpaid.add($.__views.__alloyId1368);
    $.__views.__alloyId1369 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1369"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1369);
    $.__views.__alloyId1370 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1370"
    });
    $.__views.__alloyId1369.add($.__views.__alloyId1370);
    internetManagement ? $.__views.__alloyId1370.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1370!click!internetManagement"] = true;
    $.__views.__alloyId1371 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1371"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1371);
    $.__views.__alloyId1372 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1372"
    });
    $.__views.__alloyId1371.add($.__views.__alloyId1372);
    subline ? $.__views.__alloyId1372.addEventListener("click", subline) : __defers["$.__views.__alloyId1372!click!subline"] = true;
    $.__views.__alloyId1373 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1373"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1373);
    $.__views.__alloyId1374 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1374"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1374);
    subline ? $.__views.__alloyId1374.addEventListener("click", subline) : __defers["$.__views.__alloyId1374!click!subline"] = true;
    $.__views.__alloyId1375 = Ti.UI.createView({
        layout: "horizontal",
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId1375"
    });
    $.__views.postpaid.add($.__views.__alloyId1375);
    $.__views.__alloyId1376 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1376"
    });
    $.__views.__alloyId1375.add($.__views.__alloyId1376);
    $.__views.__alloyId1377 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
    $.__views.__alloyId1379 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
    $.__views.__alloyId1381 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1381"
    });
    $.__views.__alloyId1380.add($.__views.__alloyId1381);
    familyFriend ? $.__views.__alloyId1381.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1381!click!familyFriend"] = true;
    $.__views.__alloyId1382 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1382"
    });
    $.__views.postpaid.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1383"
    });
    $.__views.__alloyId1382.add($.__views.__alloyId1383);
    $.__views.__alloyId1384 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1384"
    });
    $.__views.__alloyId1383.add($.__views.__alloyId1384);
    loyalty ? $.__views.__alloyId1384.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1384!click!loyalty"] = true;
    $.__views.__alloyId1385 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1385"
    });
    $.__views.__alloyId1382.add($.__views.__alloyId1385);
    $.__views.__alloyId1386 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1386"
    });
    $.__views.__alloyId1385.add($.__views.__alloyId1386);
    report ? $.__views.__alloyId1386.addEventListener("click", report) : __defers["$.__views.__alloyId1386!click!report"] = true;
    $.__views.__alloyId1387 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1387"
    });
    $.__views.__alloyId1382.add($.__views.__alloyId1387);
    $.__views.__alloyId1388 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1388"
    });
    $.__views.__alloyId1387.add($.__views.__alloyId1388);
    orderingHistory ? $.__views.__alloyId1388.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1388!click!orderingHistory"] = true;
    $.__views.__alloyId1389 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId1389"
    });
    $.__views.postpaid.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1390"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1391"
    });
    $.__views.__alloyId1390.add($.__views.__alloyId1391);
    loyalty ? $.__views.__alloyId1391.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1391!click!loyalty"] = true;
    $.__views.__alloyId1392 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1392"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1392);
    $.__views.__alloyId1393 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
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
    $.__views.__alloyId1395 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1395"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1395);
    orderingHistory ? $.__views.__alloyId1395.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1395!click!orderingHistory"] = true;
    $.__views.prepaid = Ti.UI.createScrollView({
        id: "prepaid",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.__alloyId1336.add($.__views.prepaid);
    $.__views.__alloyId1396 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
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
    $.__views.__alloyId1398 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId1398"
    });
    $.__views.__alloyId1397.add($.__views.__alloyId1398);
    accDetail ? $.__views.__alloyId1398.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1398!click!accDetail"] = true;
    $.__views.__alloyId1399 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1399"
    });
    $.__views.__alloyId1396.add($.__views.__alloyId1399);
    $.__views.__alloyId1400 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1400"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1400);
    billStatement ? $.__views.__alloyId1400.addEventListener("click", billStatement) : __defers["$.__views.__alloyId1400!click!billStatement"] = true;
    $.__views.__alloyId1401 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1401"
    });
    $.__views.__alloyId1396.add($.__views.__alloyId1401);
    $.__views.__alloyId1402 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId1402"
    });
    $.__views.__alloyId1401.add($.__views.__alloyId1402);
    makePayment ? $.__views.__alloyId1402.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1402!click!makePayment"] = true;
    $.__views.__alloyId1403 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
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
    $.__views.__alloyId1405 = Ti.UI.createLabel({
        text: "Account / Profile",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1405"
    });
    $.__views.__alloyId1404.add($.__views.__alloyId1405);
    accDetail ? $.__views.__alloyId1405.addEventListener("click", accDetail) : __defers["$.__views.__alloyId1405!click!accDetail"] = true;
    $.__views.__alloyId1406 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1406"
    });
    $.__views.__alloyId1403.add($.__views.__alloyId1406);
    $.__views.__alloyId1407 = Ti.UI.createLabel({
        text: "Bill Statement",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1407"
    });
    $.__views.__alloyId1406.add($.__views.__alloyId1407);
    billStatement ? $.__views.__alloyId1407.addEventListener("click", billStatement) : __defers["$.__views.__alloyId1407!click!billStatement"] = true;
    $.__views.__alloyId1408 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1408"
    });
    $.__views.__alloyId1403.add($.__views.__alloyId1408);
    $.__views.__alloyId1409 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1409"
    });
    $.__views.__alloyId1408.add($.__views.__alloyId1409);
    makePayment ? $.__views.__alloyId1409.addEventListener("click", makePayment) : __defers["$.__views.__alloyId1409!click!makePayment"] = true;
    $.__views.__alloyId1410 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1410"
    });
    $.__views.prepaid.add($.__views.__alloyId1410);
    $.__views.__alloyId1411 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1411"
    });
    $.__views.__alloyId1410.add($.__views.__alloyId1411);
    $.__views.__alloyId1412 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1412"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1412);
    internetManagement ? $.__views.__alloyId1412.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1412!click!internetManagement"] = true;
    $.__views.__alloyId1413 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1413"
    });
    $.__views.__alloyId1410.add($.__views.__alloyId1413);
    $.__views.__alloyId1414 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId1414"
    });
    $.__views.__alloyId1413.add($.__views.__alloyId1414);
    subline ? $.__views.__alloyId1414.addEventListener("click", subline) : __defers["$.__views.__alloyId1414!click!subline"] = true;
    $.__views.__alloyId1415 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1415"
    });
    $.__views.__alloyId1410.add($.__views.__alloyId1415);
    $.__views.__alloyId1416 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1416"
    });
    $.__views.__alloyId1415.add($.__views.__alloyId1416);
    familyFriend ? $.__views.__alloyId1416.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1416!click!familyFriend"] = true;
    $.__views.__alloyId1417 = Ti.UI.createView({
        layout: "horizontal",
        height: "25%",
        width: Ti.UI.FILL,
        id: "__alloyId1417"
    });
    $.__views.prepaid.add($.__views.__alloyId1417);
    $.__views.__alloyId1418 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1418"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1418);
    $.__views.__alloyId1419 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1419"
    });
    $.__views.__alloyId1418.add($.__views.__alloyId1419);
    internetManagement ? $.__views.__alloyId1419.addEventListener("click", internetManagement) : __defers["$.__views.__alloyId1419!click!internetManagement"] = true;
    $.__views.__alloyId1420 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1420"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1421"
    });
    $.__views.__alloyId1420.add($.__views.__alloyId1421);
    subline ? $.__views.__alloyId1421.addEventListener("click", subline) : __defers["$.__views.__alloyId1421!click!subline"] = true;
    $.__views.__alloyId1422 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1422"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createLabel({
        text: "Friends & Family",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1423"
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1423);
    familyFriend ? $.__views.__alloyId1423.addEventListener("click", familyFriend) : __defers["$.__views.__alloyId1423!click!familyFriend"] = true;
    $.__views.__alloyId1424 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1424"
    });
    $.__views.prepaid.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1425"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId1426"
    });
    $.__views.__alloyId1425.add($.__views.__alloyId1426);
    seasonPass ? $.__views.__alloyId1426.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1426!click!seasonPass"] = true;
    $.__views.__alloyId1427 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1427"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId1428"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1428);
    loyalty ? $.__views.__alloyId1428.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1428!click!loyalty"] = true;
    $.__views.__alloyId1429 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1429"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1429);
    $.__views.__alloyId1430 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1430"
    });
    $.__views.__alloyId1429.add($.__views.__alloyId1430);
    orderingHistory ? $.__views.__alloyId1430.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1430!click!orderingHistory"] = true;
    $.__views.__alloyId1431 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId1431"
    });
    $.__views.prepaid.add($.__views.__alloyId1431);
    $.__views.__alloyId1432 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1432"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createLabel({
        text: "Season Pass",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1433"
    });
    $.__views.__alloyId1432.add($.__views.__alloyId1433);
    seasonPass ? $.__views.__alloyId1433.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1433!click!seasonPass"] = true;
    $.__views.__alloyId1434 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1434"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1434);
    $.__views.__alloyId1435 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1435"
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1435);
    loyalty ? $.__views.__alloyId1435.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1435!click!loyalty"] = true;
    $.__views.__alloyId1436 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1436"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createLabel({
        text: "Ordering History",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1437"
    });
    $.__views.__alloyId1436.add($.__views.__alloyId1437);
    orderingHistory ? $.__views.__alloyId1437.addEventListener("click", orderingHistory) : __defers["$.__views.__alloyId1437!click!orderingHistory"] = true;
    $.__views.__alloyId1438 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId1438"
    });
    $.__views.prepaid.add($.__views.__alloyId1438);
    $.__views.__alloyId1439 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1439"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1439);
    $.__views.__alloyId1440 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1440"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1441"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId1442"
    });
    $.__views.__alloyId1441.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId1443"
    });
    $.__views.prepaid.add($.__views.__alloyId1443);
    $.__views.__alloyId1444 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1444"
    });
    $.__views.__alloyId1443.add($.__views.__alloyId1444);
    $.__views.__alloyId1445 = Ti.UI.createLabel({
        text: "My Ticket",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1445"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId1446"
    });
    $.__views.__alloyId1443.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createLabel({
        text: "Email Notification",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId1447"
    });
    $.__views.__alloyId1446.add($.__views.__alloyId1447);
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
    __defers["$.__views.__alloyId1300!click!logout"] && $.__views.__alloyId1300.addEventListener("click", logout);
    __defers["$.__views.__alloyId1304!click!close"] && $.__views.__alloyId1304.addEventListener("click", close);
    __defers["$.__views.__alloyId1305!click!gallery"] && $.__views.__alloyId1305.addEventListener("click", gallery);
    __defers["$.__views.__alloyId1308!click!facebook"] && $.__views.__alloyId1308.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1314!click!closepayment"] && $.__views.__alloyId1314.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1316!click!paymentPostpaid"] && $.__views.__alloyId1316.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1319!click!postpaidTopup"] && $.__views.__alloyId1319.addEventListener("click", postpaidTopup);
    __defers["$.__views.__alloyId1325!click!closepayment"] && $.__views.__alloyId1325.addEventListener("click", closepayment);
    __defers["$.__views.__alloyId1327!click!prepaidTopup"] && $.__views.__alloyId1327.addEventListener("click", prepaidTopup);
    __defers["$.__views.__alloyId1330!click!pinVoucher"] && $.__views.__alloyId1330.addEventListener("click", pinVoucher);
    __defers["$.__views.__alloyId1333!click!airtime"] && $.__views.__alloyId1333.addEventListener("click", airtime);
    __defers["$.__views.__alloyId1343!click!editPhoto"] && $.__views.__alloyId1343.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1344!click!editPhoto"] && $.__views.__alloyId1344.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId1356!click!accDetail"] && $.__views.__alloyId1356.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1358!click!billStatement"] && $.__views.__alloyId1358.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1360!click!makePayment"] && $.__views.__alloyId1360.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1363!click!accDetail"] && $.__views.__alloyId1363.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1365!click!profile"] && $.__views.__alloyId1365.addEventListener("click", profile);
    __defers["$.__views.__alloyId1367!click!makePayment"] && $.__views.__alloyId1367.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1370!click!internetManagement"] && $.__views.__alloyId1370.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1372!click!subline"] && $.__views.__alloyId1372.addEventListener("click", subline);
    __defers["$.__views.__alloyId1374!click!subline"] && $.__views.__alloyId1374.addEventListener("click", subline);
    __defers["$.__views.__alloyId1377!click!internetManagement"] && $.__views.__alloyId1377.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1379!click!subline"] && $.__views.__alloyId1379.addEventListener("click", subline);
    __defers["$.__views.__alloyId1381!click!familyFriend"] && $.__views.__alloyId1381.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1384!click!loyalty"] && $.__views.__alloyId1384.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1386!click!report"] && $.__views.__alloyId1386.addEventListener("click", report);
    __defers["$.__views.__alloyId1388!click!orderingHistory"] && $.__views.__alloyId1388.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1391!click!loyalty"] && $.__views.__alloyId1391.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1393!click!loyalty"] && $.__views.__alloyId1393.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1395!click!orderingHistory"] && $.__views.__alloyId1395.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1398!click!accDetail"] && $.__views.__alloyId1398.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1400!click!billStatement"] && $.__views.__alloyId1400.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1402!click!makePayment"] && $.__views.__alloyId1402.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1405!click!accDetail"] && $.__views.__alloyId1405.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId1407!click!billStatement"] && $.__views.__alloyId1407.addEventListener("click", billStatement);
    __defers["$.__views.__alloyId1409!click!makePayment"] && $.__views.__alloyId1409.addEventListener("click", makePayment);
    __defers["$.__views.__alloyId1412!click!internetManagement"] && $.__views.__alloyId1412.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1414!click!subline"] && $.__views.__alloyId1414.addEventListener("click", subline);
    __defers["$.__views.__alloyId1416!click!familyFriend"] && $.__views.__alloyId1416.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1419!click!internetManagement"] && $.__views.__alloyId1419.addEventListener("click", internetManagement);
    __defers["$.__views.__alloyId1421!click!subline"] && $.__views.__alloyId1421.addEventListener("click", subline);
    __defers["$.__views.__alloyId1423!click!familyFriend"] && $.__views.__alloyId1423.addEventListener("click", familyFriend);
    __defers["$.__views.__alloyId1426!click!seasonPass"] && $.__views.__alloyId1426.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1428!click!loyalty"] && $.__views.__alloyId1428.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1430!click!orderingHistory"] && $.__views.__alloyId1430.addEventListener("click", orderingHistory);
    __defers["$.__views.__alloyId1433!click!seasonPass"] && $.__views.__alloyId1433.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1435!click!loyalty"] && $.__views.__alloyId1435.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId1437!click!orderingHistory"] && $.__views.__alloyId1437.addEventListener("click", orderingHistory);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;