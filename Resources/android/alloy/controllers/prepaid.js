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
        DRAWER.navigation("products", 2);
    }
    function rate(e) {
        console.log("rate");
        rate = e.row.title;
        switch (e.rowIndex) {
          case 0:
            $.view1.setVisible(true);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 1:
            $.view1.setVisible(false);
            $.view2.setVisible(true);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 2:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(true);
            $.view4.setVisible(false);
            break;

          case 3:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(true);
        }
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaid";
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
    $.__views.prepaid = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaid"
    });
    $.__views.prepaid && $.addTopLevelView($.__views.prepaid);
    $.__views.__alloyId1387 = Alloy.createController("_header", {
        id: "__alloyId1387",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId1387.setParent($.__views.prepaid);
    $.__views.__alloyId1388 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1388"
    });
    $.__views.prepaid.add($.__views.__alloyId1388);
    $.__views.__alloyId1389 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1389"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1390"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1390);
    back ? $.__views.__alloyId1390.addEventListener("click", back) : __defers["$.__views.__alloyId1390!click!back"] = true;
    $.__views.__alloyId1391 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        id: "__alloyId1391"
    });
    $.__views.prepaid.add($.__views.__alloyId1391);
    $.__views.__alloyId1392 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1392"
    });
    $.__views.__alloyId1391.add($.__views.__alloyId1392);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1392.add($.__views.picker);
    var __alloyId1393 = [];
    $.__views.__alloyId1394 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1394"
    });
    __alloyId1393.push($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1395"
    });
    __alloyId1393.push($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1396"
    });
    __alloyId1393.push($.__views.__alloyId1396);
    $.__views.__alloyId1397 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1397"
    });
    __alloyId1393.push($.__views.__alloyId1397);
    $.__views.picker.add(__alloyId1393);
    rate ? $.__views.picker.addEventListener("change", rate) : __defers["$.__views.picker!change!rate"] = true;
    $.__views.__alloyId1398 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1398"
    });
    $.__views.__alloyId1392.add($.__views.__alloyId1398);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "composite",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaid.add($.__views.scrollView);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "true"
    });
    $.__views.scrollView.add($.__views.view1);
    $.__views.__alloyId1399 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId1399"
    });
    $.__views.view1.add($.__views.__alloyId1399);
    $.__views.__alloyId1400 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1400"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1400);
    $.__views.__alloyId1401 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1401"
    });
    $.__views.__alloyId1400.add($.__views.__alloyId1401);
    $.__views.__alloyId1402 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1402"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1402);
    $.__views.__alloyId1403 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1403"
    });
    $.__views.__alloyId1402.add($.__views.__alloyId1403);
    $.__views.__alloyId1404 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1404"
    });
    $.__views.__alloyId1402.add($.__views.__alloyId1404);
    $.__views.__alloyId1405 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1405"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1405);
    $.__views.__alloyId1406 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1406"
    });
    $.__views.__alloyId1405.add($.__views.__alloyId1406);
    $.__views.__alloyId1407 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1407"
    });
    $.__views.__alloyId1405.add($.__views.__alloyId1407);
    $.__views.__alloyId1408 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1408"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1408);
    $.__views.__alloyId1409 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1409"
    });
    $.__views.__alloyId1408.add($.__views.__alloyId1409);
    $.__views.__alloyId1410 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1410"
    });
    $.__views.__alloyId1408.add($.__views.__alloyId1410);
    $.__views.__alloyId1411 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1411"
    });
    $.__views.view1.add($.__views.__alloyId1411);
    $.__views.__alloyId1412 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1412"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1412);
    $.__views.__alloyId1413 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1413"
    });
    $.__views.__alloyId1412.add($.__views.__alloyId1413);
    $.__views.__alloyId1414 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1414"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1414);
    $.__views.__alloyId1415 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1415"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1415);
    $.__views.__alloyId1416 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1416"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1416);
    $.__views.__alloyId1417 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1417"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1417);
    $.__views.__alloyId1418 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1418"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1418);
    $.__views.__alloyId1419 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1419"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1419);
    $.__views.__alloyId1420 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1420"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1421"
    });
    $.__views.__alloyId1420.add($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1422"
    });
    $.__views.__alloyId1420.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1423"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1423);
    $.__views.__alloyId1424 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1424"
    });
    $.__views.__alloyId1423.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1425"
    });
    $.__views.__alloyId1423.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1426"
    });
    $.__views.view1.add($.__views.__alloyId1426);
    $.__views.__alloyId1427 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1427"
    });
    $.__views.__alloyId1426.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1428"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1428);
    $.__views.__alloyId1429 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1429"
    });
    $.__views.__alloyId1426.add($.__views.__alloyId1429);
    $.__views.__alloyId1430 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1430"
    });
    $.__views.__alloyId1429.add($.__views.__alloyId1430);
    $.__views.__alloyId1431 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1431"
    });
    $.__views.__alloyId1429.add($.__views.__alloyId1431);
    $.__views.__alloyId1432 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1432"
    });
    $.__views.__alloyId1426.add($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1433"
    });
    $.__views.__alloyId1432.add($.__views.__alloyId1433);
    $.__views.__alloyId1434 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1434"
    });
    $.__views.__alloyId1432.add($.__views.__alloyId1434);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId1435 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId1435"
    });
    $.__views.view2.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1436"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1437"
    });
    $.__views.__alloyId1436.add($.__views.__alloyId1437);
    $.__views.__alloyId1438 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1438"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1438);
    $.__views.__alloyId1439 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1439"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1439);
    $.__views.__alloyId1440 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1440"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1441"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1442"
    });
    $.__views.__alloyId1441.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1443"
    });
    $.__views.__alloyId1441.add($.__views.__alloyId1443);
    $.__views.__alloyId1444 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1444"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1444);
    $.__views.__alloyId1445 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1445"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1446"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1447"
    });
    $.__views.view2.add($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1448"
    });
    $.__views.__alloyId1447.add($.__views.__alloyId1448);
    $.__views.__alloyId1449 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1449"
    });
    $.__views.__alloyId1448.add($.__views.__alloyId1449);
    $.__views.__alloyId1450 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1450"
    });
    $.__views.__alloyId1447.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1451"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1451);
    $.__views.__alloyId1452 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1452"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1452);
    $.__views.__alloyId1453 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1453"
    });
    $.__views.__alloyId1447.add($.__views.__alloyId1453);
    $.__views.__alloyId1454 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1454"
    });
    $.__views.__alloyId1453.add($.__views.__alloyId1454);
    $.__views.__alloyId1455 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1455"
    });
    $.__views.__alloyId1453.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1456"
    });
    $.__views.__alloyId1447.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1457"
    });
    $.__views.__alloyId1456.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1458"
    });
    $.__views.__alloyId1456.add($.__views.__alloyId1458);
    $.__views.__alloyId1459 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1459"
    });
    $.__views.__alloyId1447.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1460"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1461"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1462"
    });
    $.__views.view2.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1464"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1465"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1466"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1467"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1468"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1468);
    $.__views.__alloyId1469 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1470"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1470);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId1471 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId1471"
    });
    $.__views.view3.add($.__views.__alloyId1471);
    $.__views.__alloyId1472 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1472"
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1473"
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1474"
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1475"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1476"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1477"
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1478"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1479"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1480"
    });
    $.__views.__alloyId1471.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1481"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1482"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1483"
    });
    $.__views.view3.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1484"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
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
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1487"
    });
    $.__views.__alloyId1486.add($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1490"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1491"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1492"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1492);
    $.__views.__alloyId1493 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1493"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
    $.__views.__alloyId1494 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1494"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1494);
    $.__views.__alloyId1495 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1495"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1496"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1497"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1497);
    $.__views.__alloyId1498 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1498"
    });
    $.__views.view3.add($.__views.__alloyId1498);
    $.__views.__alloyId1499 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1499"
    });
    $.__views.__alloyId1498.add($.__views.__alloyId1499);
    $.__views.__alloyId1500 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1500"
    });
    $.__views.__alloyId1499.add($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1501"
    });
    $.__views.__alloyId1498.add($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1502"
    });
    $.__views.__alloyId1501.add($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1503"
    });
    $.__views.__alloyId1501.add($.__views.__alloyId1503);
    $.__views.__alloyId1504 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1504"
    });
    $.__views.__alloyId1498.add($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1505"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1505);
    $.__views.__alloyId1506 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1506"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1506);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId1507 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId1507"
    });
    $.__views.view4.add($.__views.__alloyId1507);
    $.__views.__alloyId1508 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1508"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1508);
    $.__views.__alloyId1509 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1509"
    });
    $.__views.__alloyId1508.add($.__views.__alloyId1509);
    $.__views.__alloyId1510 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1510"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1510);
    $.__views.__alloyId1511 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1511"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1512"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1512);
    $.__views.__alloyId1513 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1513"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1513);
    $.__views.__alloyId1514 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1514"
    });
    $.__views.__alloyId1513.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1515"
    });
    $.__views.__alloyId1513.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1516"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1516);
    $.__views.__alloyId1517 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1517"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1517);
    $.__views.__alloyId1518 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1518"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1519"
    });
    $.__views.view4.add($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1520"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1520);
    $.__views.__alloyId1521 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1521"
    });
    $.__views.__alloyId1520.add($.__views.__alloyId1521);
    $.__views.__alloyId1522 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1522"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1522);
    $.__views.__alloyId1523 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1523"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1523);
    $.__views.__alloyId1524 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1524"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1524);
    $.__views.__alloyId1525 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1525"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1525);
    $.__views.__alloyId1526 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1526"
    });
    $.__views.__alloyId1525.add($.__views.__alloyId1526);
    $.__views.__alloyId1527 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1527"
    });
    $.__views.__alloyId1525.add($.__views.__alloyId1527);
    $.__views.__alloyId1528 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1528"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1528);
    $.__views.__alloyId1529 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1529"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1529);
    $.__views.__alloyId1530 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1530"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1530);
    $.__views.__alloyId1531 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1531"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1531);
    $.__views.__alloyId1532 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1532"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1532);
    $.__views.__alloyId1533 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1533"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1533);
    $.__views.__alloyId1534 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1534"
    });
    $.__views.view4.add($.__views.__alloyId1534);
    $.__views.__alloyId1535 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1535"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1535);
    $.__views.__alloyId1536 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1536"
    });
    $.__views.__alloyId1535.add($.__views.__alloyId1536);
    $.__views.__alloyId1537 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1537"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1537);
    $.__views.__alloyId1538 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1538"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1538);
    $.__views.__alloyId1539 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1539"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1539);
    $.__views.__alloyId1540 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1540"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1541"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1542"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1543"
    });
    $.__views.prepaid.add($.__views.__alloyId1543);
    subscribe ? $.__views.__alloyId1543.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1543!click!subscribe"] = true;
    $.__views.__alloyId1544 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1544"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var rate;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1390!click!back"] && $.__views.__alloyId1390.addEventListener("click", back);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1543!click!subscribe"] && $.__views.__alloyId1543.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;