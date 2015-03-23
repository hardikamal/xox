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
        DRAWER.navigation("myAccount", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile";
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
    $.__views.profile = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.__alloyId1413 = Alloy.createController("_header", {
        id: "__alloyId1413",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId1413.setParent($.__views.profile);
    $.__views.__alloyId1414 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1414"
    });
    $.__views.profile.add($.__views.__alloyId1414);
    $.__views.__alloyId1415 = Ti.UI.createLabel({
        text: "My Profile",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1415"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1415);
    $.__views.__alloyId1416 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1416"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1416);
    back ? $.__views.__alloyId1416.addEventListener("click", back) : __defers["$.__views.__alloyId1416!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
    $.__views.__alloyId1417 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1417"
    });
    $.__views.scrollView.add($.__views.__alloyId1417);
    $.__views.__alloyId1418 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1418"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1418);
    $.__views.__alloyId1419 = Ti.UI.createLabel({
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1419"
    });
    $.__views.__alloyId1418.add($.__views.__alloyId1419);
    $.__views.__alloyId1420 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1420"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createLabel({
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1421"
    });
    $.__views.__alloyId1420.add($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1422"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1423"
=======
        id: "__alloyId1226"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1423);
    $.__views.__alloyId1424 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1424"
    });
    $.__views.scrollView.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1425"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createLabel({
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1426"
    });
    $.__views.__alloyId1425.add($.__views.__alloyId1426);
    $.__views.__alloyId1427 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1427"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createLabel({
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1428"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1428);
    $.__views.__alloyId1429 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1429"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1429);
    $.__views.__alloyId1430 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1430"
=======
        id: "__alloyId1233"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1429.add($.__views.__alloyId1430);
    $.__views.__alloyId1431 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1431"
    });
    $.__views.scrollView.add($.__views.__alloyId1431);
    $.__views.__alloyId1432 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1432"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createLabel({
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1433"
    });
    $.__views.__alloyId1432.add($.__views.__alloyId1433);
    $.__views.__alloyId1434 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1434"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1434);
    $.__views.__alloyId1435 = Ti.UI.createLabel({
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1435"
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1436"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1437"
=======
        id: "__alloyId1240"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1436.add($.__views.__alloyId1437);
    $.__views.__alloyId1438 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1438"
    });
    $.__views.scrollView.add($.__views.__alloyId1438);
    $.__views.__alloyId1439 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1439"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1439);
    $.__views.__alloyId1440 = Ti.UI.createLabel({
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1440"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1441"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1442"
    });
    $.__views.__alloyId1441.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1443"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1443);
    $.__views.__alloyId1444 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1444"
=======
        id: "__alloyId1247"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1443.add($.__views.__alloyId1444);
    $.__views.__alloyId1445 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1445"
    });
    $.__views.scrollView.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1446"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createLabel({
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1447"
    });
    $.__views.__alloyId1446.add($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1448"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1448);
    $.__views.__alloyId1449 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1449"
    });
    $.__views.__alloyId1448.add($.__views.__alloyId1449);
    $.__views.__alloyId1450 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1450"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1451"
=======
        id: "__alloyId1254"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1451);
    $.__views.__alloyId1452 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1452"
    });
    $.__views.scrollView.add($.__views.__alloyId1452);
    $.__views.__alloyId1453 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1453"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1453);
    $.__views.__alloyId1454 = Ti.UI.createLabel({
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1454"
    });
    $.__views.__alloyId1453.add($.__views.__alloyId1454);
    $.__views.__alloyId1455 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1455"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1456"
    });
    $.__views.__alloyId1455.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1457"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1458"
=======
        id: "__alloyId1261"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1457.add($.__views.__alloyId1458);
    $.__views.__alloyId1459 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1459"
    });
    $.__views.scrollView.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1460"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createLabel({
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1461"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1462"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1464"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1465"
=======
        id: "__alloyId1268"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1466"
    });
    $.__views.scrollView.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1467"
    });
    $.__views.__alloyId1466.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createLabel({
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1468"
    });
    $.__views.__alloyId1467.add($.__views.__alloyId1468);
    $.__views.__alloyId1469 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1466.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1470"
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1470);
    $.__views.__alloyId1471 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1471"
    });
    $.__views.__alloyId1466.add($.__views.__alloyId1471);
    $.__views.__alloyId1472 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1472"
=======
        id: "__alloyId1275"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1473"
    });
    $.__views.scrollView.add($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1474"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createLabel({
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1475"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1476"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1477"
    });
    $.__views.__alloyId1476.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1478"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1479"
=======
        id: "__alloyId1282"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1478.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1480"
    });
    $.__views.scrollView.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1481"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1482"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1483"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1484"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1485"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1486"
=======
        id: "__alloyId1289"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1485.add($.__views.__alloyId1486);
    $.__views.__alloyId1487 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1487"
    });
    $.__views.scrollView.add($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1488"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createLabel({
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1489"
    });
    $.__views.__alloyId1488.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1490"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId1491"
    });
    $.__views.__alloyId1490.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1492"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1492);
    $.__views.__alloyId1493 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId1493"
=======
        id: "__alloyId1296"
>>>>>>> Stashed changes
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
    $.__views.__alloyId1494 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1494"
    });
<<<<<<< Updated upstream
    $.__views.scrollView.add($.__views.__alloyId1494);
    $.__views.__alloyId1495 = Ti.UI.createView({
=======
    $.__views.scrollView.add($.__views.__alloyId1297);
    $.__views.__alloyId1298 = Ti.UI.createView({
>>>>>>> Stashed changes
        width: "40%",
        height: "100%",
        id: "__alloyId1495"
    });
    $.__views.__alloyId1494.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1496"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId1497"
    });
    $.__views.__alloyId1494.add($.__views.__alloyId1497);
    $.__views.__alloyId1498 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId1498"
    });
    $.__views.__alloyId1497.add($.__views.__alloyId1498);
    $.__views.__alloyId1499 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1499"
    });
    $.__views.__alloyId1494.add($.__views.__alloyId1499);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1499.add($.__views.arrow);
    $.__views.__alloyId1500 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1500"
    });
    $.__views.profile.add($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId1501"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1502"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createLabel({
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId1503"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1503);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
<<<<<<< Updated upstream
    __defers["$.__views.__alloyId1416!click!back"] && $.__views.__alloyId1416.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId1219!click!back"] && $.__views.__alloyId1219.addEventListener("click", back);
>>>>>>> Stashed changes
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;