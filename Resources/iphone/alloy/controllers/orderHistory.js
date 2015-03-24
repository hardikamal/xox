function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function prepaidPlus() {}
    function back() {
        DRAWER.navigation("myAccount", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "orderHistory";
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
    $.__views.orderHistory = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "orderHistory"
    });
    $.__views.orderHistory && $.addTopLevelView($.__views.orderHistory);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
    $.__views.__alloyId1317 = Alloy.createController("_header", {
        id: "__alloyId1317",
        __parentSymbol: $.__views.orderHistory
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1388 = Alloy.createController("_header", {
        id: "__alloyId1388",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId1388.setParent($.__views.orderHistory);
    $.__views.__alloyId1389 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1389"
    });
    $.__views.orderHistory.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createLabel({
        text: "Ordering History",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1390"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createImageView({
=======
    $.__views.__alloyId1317 = Alloy.createController("_header", {
        id: "__alloyId1317",
        __parentSymbol: $.__views.orderHistory
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1317.setParent($.__views.orderHistory);
    $.__views.__alloyId1318 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1318"
    });
    $.__views.orderHistory.add($.__views.__alloyId1318);
    $.__views.__alloyId1319 = Ti.UI.createLabel({
        text: "Friends & Family",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1319"
    });
    $.__views.__alloyId1318.add($.__views.__alloyId1319);
    $.__views.__alloyId1320 = Ti.UI.createImageView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1317.setParent($.__views.orderHistory);
    $.__views.__alloyId1318 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1318"
    });
    $.__views.orderHistory.add($.__views.__alloyId1318);
    $.__views.__alloyId1319 = Ti.UI.createLabel({
        text: "Friends & Family",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1319"
    });
    $.__views.__alloyId1318.add($.__views.__alloyId1319);
    $.__views.__alloyId1320 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1320"
    });
=======
<<<<<<< HEAD
        id: "__alloyId1391"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1391);
    back ? $.__views.__alloyId1391.addEventListener("click", back) : __defers["$.__views.__alloyId1391!click!back"] = true;
    $.__views.__alloyId1392 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1392"
    });
    $.__views.orderHistory.add($.__views.__alloyId1392);
    $.__views.__alloyId1393 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1393"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1393);
    prepaidPlus ? $.__views.__alloyId1393.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1393!click!prepaidPlus"] = true;
    $.__views.__alloyId1394 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1394"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createLabel({
=======
        id: "__alloyId1320"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1318.add($.__views.__alloyId1320);
    back ? $.__views.__alloyId1320.addEventListener("click", back) : __defers["$.__views.__alloyId1320!click!back"] = true;
    $.__views.__alloyId1321 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1321"
    });
    $.__views.orderHistory.add($.__views.__alloyId1321);
    $.__views.__alloyId1322 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1322"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1322);
    prepaidPlus ? $.__views.__alloyId1322.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1322!click!prepaidPlus"] = true;
    $.__views.__alloyId1323 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1323"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1323);
    $.__views.__alloyId1324 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1320"
    });
    $.__views.__alloyId1318.add($.__views.__alloyId1320);
    back ? $.__views.__alloyId1320.addEventListener("click", back) : __defers["$.__views.__alloyId1320!click!back"] = true;
    $.__views.__alloyId1321 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1321"
    });
    $.__views.orderHistory.add($.__views.__alloyId1321);
    $.__views.__alloyId1322 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1322"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1322);
    prepaidPlus ? $.__views.__alloyId1322.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1322!click!prepaidPlus"] = true;
    $.__views.__alloyId1323 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1323"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1323);
    $.__views.__alloyId1324 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1324"
    });
    $.__views.__alloyId1323.add($.__views.__alloyId1324);
    $.__views.__alloyId1325 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1395"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createLabel({
=======
        id: "__alloyId1324"
    });
    $.__views.__alloyId1323.add($.__views.__alloyId1324);
    $.__views.__alloyId1325 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1396"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1396);
    $.__views.__alloyId1397 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1325"
    });
    $.__views.__alloyId1323.add($.__views.__alloyId1325);
    $.__views.__alloyId1326 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1326"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1326);
=======
<<<<<<< HEAD
        id: "__alloyId1397"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1397);
=======
        id: "__alloyId1326"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1326);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1326"
    });
    $.__views.__alloyId1322.add($.__views.__alloyId1326);
>>>>>>> origin/master
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1397.add($.__views.arrow1);
    $.__views.__alloyId1398 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1398"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1398);
    prepaidPlus ? $.__views.__alloyId1398.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1398!click!prepaidPlus"] = true;
    $.__views.__alloyId1399 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1399"
    });
    $.__views.__alloyId1398.add($.__views.__alloyId1399);
    $.__views.__alloyId1400 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1326.add($.__views.arrow1);
    $.__views.__alloyId1327 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1327"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1327);
    prepaidPlus ? $.__views.__alloyId1327.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1327!click!prepaidPlus"] = true;
    $.__views.__alloyId1328 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1328"
    });
    $.__views.__alloyId1327.add($.__views.__alloyId1328);
    $.__views.__alloyId1329 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1326.add($.__views.arrow1);
    $.__views.__alloyId1327 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1327"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1327);
    prepaidPlus ? $.__views.__alloyId1327.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1327!click!prepaidPlus"] = true;
    $.__views.__alloyId1328 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1328"
    });
    $.__views.__alloyId1327.add($.__views.__alloyId1328);
    $.__views.__alloyId1329 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1329"
    });
    $.__views.__alloyId1328.add($.__views.__alloyId1329);
    $.__views.__alloyId1330 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1400"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1400);
    $.__views.__alloyId1401 = Ti.UI.createLabel({
=======
        id: "__alloyId1329"
    });
    $.__views.__alloyId1328.add($.__views.__alloyId1329);
    $.__views.__alloyId1330 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1401"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1401);
    $.__views.__alloyId1402 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1330"
    });
    $.__views.__alloyId1328.add($.__views.__alloyId1330);
    $.__views.__alloyId1331 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1331"
    });
    $.__views.__alloyId1327.add($.__views.__alloyId1331);
=======
<<<<<<< HEAD
        id: "__alloyId1402"
    });
    $.__views.__alloyId1398.add($.__views.__alloyId1402);
=======
        id: "__alloyId1331"
    });
    $.__views.__alloyId1327.add($.__views.__alloyId1331);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1331"
    });
    $.__views.__alloyId1327.add($.__views.__alloyId1331);
>>>>>>> origin/master
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1402.add($.__views.arrow2);
    $.__views.__alloyId1403 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1403"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1403);
    prepaidPlus ? $.__views.__alloyId1403.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1403!click!prepaidPlus"] = true;
    $.__views.__alloyId1404 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1404"
    });
    $.__views.__alloyId1403.add($.__views.__alloyId1404);
    $.__views.__alloyId1405 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1331.add($.__views.arrow2);
    $.__views.__alloyId1332 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1332"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1332);
    prepaidPlus ? $.__views.__alloyId1332.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1332!click!prepaidPlus"] = true;
    $.__views.__alloyId1333 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1333"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1333);
    $.__views.__alloyId1334 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1331.add($.__views.arrow2);
    $.__views.__alloyId1332 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1332"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1332);
    prepaidPlus ? $.__views.__alloyId1332.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1332!click!prepaidPlus"] = true;
    $.__views.__alloyId1333 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1333"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1333);
    $.__views.__alloyId1334 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1334"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1334);
    $.__views.__alloyId1335 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1405"
    });
    $.__views.__alloyId1404.add($.__views.__alloyId1405);
    $.__views.__alloyId1406 = Ti.UI.createLabel({
=======
        id: "__alloyId1334"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1334);
    $.__views.__alloyId1335 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1406"
    });
    $.__views.__alloyId1404.add($.__views.__alloyId1406);
    $.__views.__alloyId1407 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1335"
    });
    $.__views.__alloyId1333.add($.__views.__alloyId1335);
    $.__views.__alloyId1336 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1336"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1336);
=======
<<<<<<< HEAD
        id: "__alloyId1407"
    });
    $.__views.__alloyId1403.add($.__views.__alloyId1407);
=======
        id: "__alloyId1336"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1336);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1336"
    });
    $.__views.__alloyId1332.add($.__views.__alloyId1336);
>>>>>>> origin/master
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1407.add($.__views.arrow3);
    $.__views.__alloyId1408 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1408"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1408);
    prepaidPlus ? $.__views.__alloyId1408.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1408!click!prepaidPlus"] = true;
    $.__views.__alloyId1409 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1409"
    });
    $.__views.__alloyId1408.add($.__views.__alloyId1409);
    $.__views.__alloyId1410 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1336.add($.__views.arrow3);
    $.__views.__alloyId1337 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1337"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1337);
    prepaidPlus ? $.__views.__alloyId1337.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1337!click!prepaidPlus"] = true;
    $.__views.__alloyId1338 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1338"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1338);
    $.__views.__alloyId1339 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1336.add($.__views.arrow3);
    $.__views.__alloyId1337 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1337"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1337);
    prepaidPlus ? $.__views.__alloyId1337.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1337!click!prepaidPlus"] = true;
    $.__views.__alloyId1338 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1338"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1338);
    $.__views.__alloyId1339 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1339"
    });
    $.__views.__alloyId1338.add($.__views.__alloyId1339);
    $.__views.__alloyId1340 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1410"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1410);
    $.__views.__alloyId1411 = Ti.UI.createLabel({
=======
        id: "__alloyId1339"
    });
    $.__views.__alloyId1338.add($.__views.__alloyId1339);
    $.__views.__alloyId1340 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1411"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1411);
    $.__views.__alloyId1412 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1340"
    });
    $.__views.__alloyId1338.add($.__views.__alloyId1340);
    $.__views.__alloyId1341 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1341"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1341);
=======
<<<<<<< HEAD
        id: "__alloyId1412"
    });
    $.__views.__alloyId1408.add($.__views.__alloyId1412);
=======
        id: "__alloyId1341"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1341);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1341"
    });
    $.__views.__alloyId1337.add($.__views.__alloyId1341);
>>>>>>> origin/master
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
    $.__views.__alloyId1341.add($.__views.arrow4);
    $.__views.__alloyId1342 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1342"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1342);
    prepaidPlus ? $.__views.__alloyId1342.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1342!click!prepaidPlus"] = true;
    $.__views.__alloyId1343 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1343"
<<<<<<< HEAD
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1343);
    $.__views.__alloyId1344 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1412.add($.__views.arrow4);
    $.__views.__alloyId1413 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1413"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1413);
    prepaidPlus ? $.__views.__alloyId1413.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1413!click!prepaidPlus"] = true;
    $.__views.__alloyId1414 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1414"
    });
    $.__views.__alloyId1413.add($.__views.__alloyId1414);
    $.__views.__alloyId1415 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1341.add($.__views.arrow4);
    $.__views.__alloyId1342 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1342"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1342);
    prepaidPlus ? $.__views.__alloyId1342.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1342!click!prepaidPlus"] = true;
    $.__views.__alloyId1343 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1343"
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1343);
    $.__views.__alloyId1344 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1343);
    $.__views.__alloyId1344 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1344"
    });
    $.__views.__alloyId1343.add($.__views.__alloyId1344);
    $.__views.__alloyId1345 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1415"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1415);
    $.__views.__alloyId1416 = Ti.UI.createLabel({
=======
        id: "__alloyId1344"
    });
    $.__views.__alloyId1343.add($.__views.__alloyId1344);
    $.__views.__alloyId1345 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1345"
    });
    $.__views.__alloyId1343.add($.__views.__alloyId1345);
    $.__views.__alloyId1346 = Ti.UI.createView({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1416"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1416);
    $.__views.__alloyId1417 = Ti.UI.createView({
=======
        id: "__alloyId1345"
    });
    $.__views.__alloyId1343.add($.__views.__alloyId1345);
    $.__views.__alloyId1346 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1346"
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1346);
=======
<<<<<<< HEAD
        id: "__alloyId1417"
    });
    $.__views.__alloyId1413.add($.__views.__alloyId1417);
=======
        id: "__alloyId1346"
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1346);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1346"
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1346);
>>>>>>> origin/master
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1346.add($.__views.arrow5);
=======
<<<<<<< HEAD
    $.__views.__alloyId1417.add($.__views.arrow5);
=======
    $.__views.__alloyId1346.add($.__views.arrow5);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1346.add($.__views.arrow5);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    var clearObject = function() {
        alert("order history clear cache");
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1391!click!back"] && $.__views.__alloyId1391.addEventListener("click", back);
    __defers["$.__views.__alloyId1393!click!prepaidPlus"] && $.__views.__alloyId1393.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1398!click!prepaidPlus"] && $.__views.__alloyId1398.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1403!click!prepaidPlus"] && $.__views.__alloyId1403.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1408!click!prepaidPlus"] && $.__views.__alloyId1408.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1413!click!prepaidPlus"] && $.__views.__alloyId1413.addEventListener("click", prepaidPlus);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    __defers["$.__views.__alloyId1320!click!back"] && $.__views.__alloyId1320.addEventListener("click", back);
    __defers["$.__views.__alloyId1322!click!prepaidPlus"] && $.__views.__alloyId1322.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1327!click!prepaidPlus"] && $.__views.__alloyId1327.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1332!click!prepaidPlus"] && $.__views.__alloyId1332.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1337!click!prepaidPlus"] && $.__views.__alloyId1337.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1342!click!prepaidPlus"] && $.__views.__alloyId1342.addEventListener("click", prepaidPlus);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;