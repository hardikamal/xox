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
    this.__controllerPath = "penang";
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
    $.__views.penang = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "penang"
    });
    $.__views.penang && $.addTopLevelView($.__views.penang);
<<<<<<< HEAD
    $.__views.__alloyId1293 = Alloy.createController("_header", {
        id: "__alloyId1293",
=======
<<<<<<< HEAD
    $.__views.__alloyId1458 = Alloy.createController("_header", {
        id: "__alloyId1458",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId1458.setParent($.__views.penang);
    $.__views.__alloyId1459 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1459"
    });
    $.__views.penang.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createLabel({
=======
    $.__views.__alloyId961 = Alloy.createController("_header", {
        id: "__alloyId961",
>>>>>>> origin/master
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId1293.setParent($.__views.penang);
    $.__views.__alloyId1294 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1294"
    });
<<<<<<< HEAD
    $.__views.penang.add($.__views.__alloyId1294);
    $.__views.__alloyId1295 = Ti.UI.createLabel({
=======
    $.__views.penang.add($.__views.__alloyId962);
    $.__views.__alloyId963 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1295"
    });
    $.__views.__alloyId1294.add($.__views.__alloyId1295);
    $.__views.__alloyId1296 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1460"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createImageView({
=======
        id: "__alloyId963"
    });
    $.__views.__alloyId962.add($.__views.__alloyId963);
    $.__views.__alloyId964 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1296"
    });
    $.__views.__alloyId1294.add($.__views.__alloyId1296);
    back ? $.__views.__alloyId1296.addEventListener("click", back) : __defers["$.__views.__alloyId1296!click!back"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId1461"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1461);
    back ? $.__views.__alloyId1461.addEventListener("click", back) : __defers["$.__views.__alloyId1461!click!back"] = true;
=======
        id: "__alloyId964"
    });
    $.__views.__alloyId962.add($.__views.__alloyId964);
    back ? $.__views.__alloyId964.addEventListener("click", back) : __defers["$.__views.__alloyId964!click!back"] = true;
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1297 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1462 = Ti.UI.createView({
=======
    $.__views.__alloyId965 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1297"
=======
<<<<<<< HEAD
        id: "__alloyId1462"
    });
    $.__views.scrollView.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createLabel({
=======
        id: "__alloyId965"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1297);
    $.__views.__alloyId1298 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1298"
    });
<<<<<<< HEAD
    $.__views.__alloyId1297.add($.__views.__alloyId1298);
    $.__views.__alloyId1299 = Ti.UI.createLabel({
=======
    $.__views.__alloyId965.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1299"
=======
<<<<<<< HEAD
        id: "__alloyId1464"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createLabel({
=======
        id: "__alloyId967"
>>>>>>> origin/master
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1299);
    $.__views.__alloyId1300 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1300"
    });
<<<<<<< HEAD
    $.__views.__alloyId1297.add($.__views.__alloyId1300);
    $.__views.__alloyId1301 = Ti.UI.createLabel({
=======
    $.__views.__alloyId965.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1301"
    });
    $.__views.__alloyId1300.add($.__views.__alloyId1301);
    $.__views.__alloyId1302 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1466"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createLabel({
=======
        id: "__alloyId969"
    });
    $.__views.__alloyId968.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1302"
    });
    $.__views.__alloyId1300.add($.__views.__alloyId1302);
    $.__views.__alloyId1303 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1467"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createView({
=======
        id: "__alloyId970"
    });
    $.__views.__alloyId968.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1303"
=======
<<<<<<< HEAD
        id: "__alloyId1468"
    });
    $.__views.scrollView.add($.__views.__alloyId1468);
    $.__views.__alloyId1469 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
=======
        id: "__alloyId971"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1304"
    });
<<<<<<< HEAD
    $.__views.__alloyId1303.add($.__views.__alloyId1304);
    $.__views.__alloyId1305 = Ti.UI.createLabel({
=======
    $.__views.__alloyId971.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1305"
=======
<<<<<<< HEAD
        id: "__alloyId1470"
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1470);
    $.__views.__alloyId1471 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1471"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1471);
    $.__views.__alloyId1472 = Ti.UI.createLabel({
=======
        id: "__alloyId973"
>>>>>>> origin/master
    });
    $.__views.__alloyId1304.add($.__views.__alloyId1305);
    $.__views.__alloyId1306 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1306"
    });
<<<<<<< HEAD
    $.__views.__alloyId1303.add($.__views.__alloyId1306);
    $.__views.__alloyId1307 = Ti.UI.createLabel({
=======
    $.__views.__alloyId971.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1307"
    });
    $.__views.__alloyId1306.add($.__views.__alloyId1307);
    $.__views.__alloyId1308 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1472"
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createLabel({
=======
        id: "__alloyId975"
    });
    $.__views.__alloyId974.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1308"
=======
<<<<<<< HEAD
        id: "__alloyId1473"
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1474"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createLabel({
=======
        id: "__alloyId976"
>>>>>>> origin/master
    });
    $.__views.__alloyId1306.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1309"
    });
<<<<<<< HEAD
    $.__views.__alloyId1303.add($.__views.__alloyId1309);
    $.__views.__alloyId1310 = Ti.UI.createLabel({
=======
    $.__views.__alloyId971.add($.__views.__alloyId977);
    $.__views.__alloyId978 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1310"
    });
    $.__views.__alloyId1309.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1475"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createLabel({
=======
        id: "__alloyId978"
    });
    $.__views.__alloyId977.add($.__views.__alloyId978);
    $.__views.__alloyId979 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1311"
=======
<<<<<<< HEAD
        id: "__alloyId1476"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1477"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createLabel({
=======
        id: "__alloyId979"
>>>>>>> origin/master
    });
    $.__views.__alloyId1309.add($.__views.__alloyId1311);
    $.__views.__alloyId1312 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1312"
    });
<<<<<<< HEAD
    $.__views.__alloyId1303.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createLabel({
=======
    $.__views.__alloyId971.add($.__views.__alloyId980);
    $.__views.__alloyId981 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1313"
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1478"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
=======
        id: "__alloyId981"
    });
    $.__views.__alloyId980.add($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1314"
=======
<<<<<<< HEAD
        id: "__alloyId1479"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1480"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createLabel({
=======
        id: "__alloyId982"
>>>>>>> origin/master
    });
    $.__views.__alloyId1312.add($.__views.__alloyId1314);
    $.__views.__alloyId1315 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1315"
    });
<<<<<<< HEAD
    $.__views.__alloyId1303.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createLabel({
=======
    $.__views.__alloyId971.add($.__views.__alloyId983);
    $.__views.__alloyId984 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1316"
    });
    $.__views.__alloyId1315.add($.__views.__alloyId1316);
    $.__views.__alloyId1317 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1481"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
=======
        id: "__alloyId984"
    });
    $.__views.__alloyId983.add($.__views.__alloyId984);
    $.__views.__alloyId985 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1317"
    });
    $.__views.__alloyId1315.add($.__views.__alloyId1317);
    $.__views.__alloyId1318 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1482"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createView({
=======
        id: "__alloyId985"
    });
    $.__views.__alloyId983.add($.__views.__alloyId985);
    $.__views.__alloyId986 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1318"
=======
<<<<<<< HEAD
        id: "__alloyId1483"
    });
    $.__views.scrollView.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1484"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createLabel({
=======
        id: "__alloyId986"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1318);
    $.__views.__alloyId1319 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1319"
    });
<<<<<<< HEAD
    $.__views.__alloyId1318.add($.__views.__alloyId1319);
    $.__views.__alloyId1320 = Ti.UI.createLabel({
=======
    $.__views.__alloyId986.add($.__views.__alloyId987);
    $.__views.__alloyId988 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1320"
=======
<<<<<<< HEAD
        id: "__alloyId1485"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1486"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1486);
    $.__views.__alloyId1487 = Ti.UI.createLabel({
=======
        id: "__alloyId988"
>>>>>>> origin/master
    });
    $.__views.__alloyId1319.add($.__views.__alloyId1320);
    $.__views.__alloyId1321 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1321"
    });
<<<<<<< HEAD
    $.__views.__alloyId1318.add($.__views.__alloyId1321);
    $.__views.__alloyId1322 = Ti.UI.createLabel({
=======
    $.__views.__alloyId986.add($.__views.__alloyId989);
    $.__views.__alloyId990 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1322"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1322);
    $.__views.__alloyId1323 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1487"
    });
    $.__views.__alloyId1486.add($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createLabel({
=======
        id: "__alloyId990"
    });
    $.__views.__alloyId989.add($.__views.__alloyId990);
    $.__views.__alloyId991 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1323"
=======
<<<<<<< HEAD
        id: "__alloyId1488"
    });
    $.__views.__alloyId1486.add($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1489"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createLabel({
=======
        id: "__alloyId991"
>>>>>>> origin/master
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1323);
    $.__views.__alloyId1324 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1324"
    });
<<<<<<< HEAD
    $.__views.__alloyId1318.add($.__views.__alloyId1324);
    $.__views.__alloyId1325 = Ti.UI.createLabel({
=======
    $.__views.__alloyId986.add($.__views.__alloyId992);
    $.__views.__alloyId993 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1325"
    });
    $.__views.__alloyId1324.add($.__views.__alloyId1325);
    $.__views.__alloyId1326 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1490"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
=======
        id: "__alloyId993"
    });
    $.__views.__alloyId992.add($.__views.__alloyId993);
    $.__views.__alloyId994 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1326"
=======
<<<<<<< HEAD
        id: "__alloyId1491"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1492"
    });
    $.__views.penang.add($.__views.__alloyId1492);
    subscribe ? $.__views.__alloyId1492.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1492!click!subscribe"] = true;
    $.__views.__alloyId1493 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1493"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
=======
        id: "__alloyId994"
>>>>>>> origin/master
    });
    $.__views.__alloyId1324.add($.__views.__alloyId1326);
    $.__views.__alloyId1327 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1327"
    });
    $.__views.penang.add($.__views.__alloyId1327);
    subscribe ? $.__views.__alloyId1327.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1327!click!subscribe"] = true;
    $.__views.__alloyId1328 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1328"
    });
<<<<<<< HEAD
    $.__views.__alloyId1327.add($.__views.__alloyId1328);
=======
    $.__views.__alloyId995.add($.__views.__alloyId996);
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
    __defers["$.__views.__alloyId1296!click!back"] && $.__views.__alloyId1296.addEventListener("click", back);
    __defers["$.__views.__alloyId1327!click!subscribe"] && $.__views.__alloyId1327.addEventListener("click", subscribe);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1461!click!back"] && $.__views.__alloyId1461.addEventListener("click", back);
    __defers["$.__views.__alloyId1492!click!subscribe"] && $.__views.__alloyId1492.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId964!click!back"] && $.__views.__alloyId964.addEventListener("click", back);
    __defers["$.__views.__alloyId995!click!subscribe"] && $.__views.__alloyId995.addEventListener("click", subscribe);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;