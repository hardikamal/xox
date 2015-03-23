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
    function rate(e) {
        console.log("rate");
        rate = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.rateLabel.text = rate);
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
    function showPicker() {
        console.log("showPicker");
        console.log("$.pickerView.visible: " + $.pickerView.visible);
        if ("false" == $.pickerView.visible) {
            console.log("false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            console.log("else false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            console.log("else true");
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function done() {
        console.log("done");
        $.contentView.height = 50;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
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
<<<<<<< HEAD
    $.__views.__alloyId1375 = Alloy.createController("_header", {
        id: "__alloyId1375",
=======
<<<<<<< HEAD
    $.__views.__alloyId1540 = Alloy.createController("_header", {
        id: "__alloyId1540",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId1540.setParent($.__views.prepaid);
    $.__views.__alloyId1541 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1541"
    });
    $.__views.prepaid.add($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1043 = Alloy.createController("_header", {
        id: "__alloyId1043",
>>>>>>> origin/master
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId1375.setParent($.__views.prepaid);
    $.__views.__alloyId1376 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1376"
    });
<<<<<<< HEAD
    $.__views.prepaid.add($.__views.__alloyId1376);
    $.__views.__alloyId1377 = Ti.UI.createLabel({
=======
    $.__views.prepaid.add($.__views.__alloyId1044);
    $.__views.__alloyId1045 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1377"
    });
    $.__views.__alloyId1376.add($.__views.__alloyId1377);
    $.__views.__alloyId1378 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1542"
    });
    $.__views.__alloyId1541.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createImageView({
=======
        id: "__alloyId1045"
    });
    $.__views.__alloyId1044.add($.__views.__alloyId1045);
    $.__views.__alloyId1046 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1378"
    });
    $.__views.__alloyId1376.add($.__views.__alloyId1378);
    back ? $.__views.__alloyId1378.addEventListener("click", back) : __defers["$.__views.__alloyId1378!click!back"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId1543"
    });
    $.__views.__alloyId1541.add($.__views.__alloyId1543);
    back ? $.__views.__alloyId1543.addEventListener("click", back) : __defers["$.__views.__alloyId1543!click!back"] = true;
=======
        id: "__alloyId1046"
    });
    $.__views.__alloyId1044.add($.__views.__alloyId1046);
    back ? $.__views.__alloyId1046.addEventListener("click", back) : __defers["$.__views.__alloyId1046!click!back"] = true;
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50"
    });
    $.__views.prepaid.add($.__views.contentView);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.rateLabel = Ti.UI.createLabel({
        id: "rateLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.rateLabel);
    showPicker ? $.__views.rateLabel.addEventListener("click", showPicker) : __defers["$.__views.rateLabel!click!showPicker"] = true;
<<<<<<< HEAD
    $.__views.__alloyId1379 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1544 = Ti.UI.createImageView({
=======
    $.__views.__alloyId1047 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId1379"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1379);
    showPicker ? $.__views.__alloyId1379.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1379!click!showPicker"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId1544"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1544);
    showPicker ? $.__views.__alloyId1544.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1544!click!showPicker"] = true;
=======
        id: "__alloyId1047"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1047);
    showPicker ? $.__views.__alloyId1047.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1047!click!showPicker"] = true;
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50",
        backgroundColor: "blue"
    });
    $.__views.pickerContentView.add($.__views.pickerView);
    $.__views.done = Ti.UI.createButton({
        title: "Done",
        id: "done",
        height: "30",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        top: "0",
        left: "0",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.done);
    done ? $.__views.done.addEventListener("click", done) : __defers["$.__views.done!click!done"] = true;
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "30",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.picker);
<<<<<<< HEAD
    var __alloyId1380 = [];
    $.__views.__alloyId1381 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId1545 = [];
    $.__views.__alloyId1546 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1546"
    });
    __alloyId1545.push($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1547"
    });
    __alloyId1545.push($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1548"
    });
    __alloyId1545.push($.__views.__alloyId1548);
    $.__views.__alloyId1549 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1549"
    });
    __alloyId1545.push($.__views.__alloyId1549);
    $.__views.picker.add(__alloyId1545);
=======
    var __alloyId1048 = [];
    $.__views.__alloyId1049 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "All States",
        id: "__alloyId1381"
    });
    __alloyId1380.push($.__views.__alloyId1381);
    $.__views.__alloyId1382 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1382"
    });
    __alloyId1380.push($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1383"
    });
    __alloyId1380.push($.__views.__alloyId1383);
    $.__views.__alloyId1384 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1384"
    });
<<<<<<< HEAD
    __alloyId1380.push($.__views.__alloyId1384);
    $.__views.picker.add(__alloyId1380);
=======
    __alloyId1048.push($.__views.__alloyId1052);
    $.__views.picker.add(__alloyId1048);
>>>>>>> origin/master
>>>>>>> origin/master
    rate ? $.__views.picker.addEventListener("change", rate) : __defers["$.__views.picker!change!rate"] = true;
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
<<<<<<< HEAD
    $.__views.__alloyId1385 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1550 = Ti.UI.createView({
=======
    $.__views.__alloyId1053 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
<<<<<<< HEAD
        id: "__alloyId1385"
=======
<<<<<<< HEAD
        id: "__alloyId1550"
    });
    $.__views.view1.add($.__views.__alloyId1550);
    $.__views.__alloyId1551 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1551"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1551);
    $.__views.__alloyId1552 = Ti.UI.createLabel({
=======
        id: "__alloyId1053"
>>>>>>> origin/master
    });
    $.__views.view1.add($.__views.__alloyId1385);
    $.__views.__alloyId1386 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1386"
    });
<<<<<<< HEAD
    $.__views.__alloyId1385.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1053.add($.__views.__alloyId1054);
    $.__views.__alloyId1055 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1387"
=======
<<<<<<< HEAD
        id: "__alloyId1552"
    });
    $.__views.__alloyId1551.add($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1553"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createLabel({
=======
        id: "__alloyId1055"
>>>>>>> origin/master
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1387);
    $.__views.__alloyId1388 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1388"
    });
<<<<<<< HEAD
    $.__views.__alloyId1385.add($.__views.__alloyId1388);
    $.__views.__alloyId1389 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1053.add($.__views.__alloyId1056);
    $.__views.__alloyId1057 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1389"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1554"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1554);
    $.__views.__alloyId1555 = Ti.UI.createLabel({
=======
        id: "__alloyId1057"
    });
    $.__views.__alloyId1056.add($.__views.__alloyId1057);
    $.__views.__alloyId1058 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1390"
=======
<<<<<<< HEAD
        id: "__alloyId1555"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1555);
    $.__views.__alloyId1556 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1556"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createLabel({
=======
        id: "__alloyId1058"
>>>>>>> origin/master
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1391"
    });
<<<<<<< HEAD
    $.__views.__alloyId1385.add($.__views.__alloyId1391);
    $.__views.__alloyId1392 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1053.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1392"
    });
    $.__views.__alloyId1391.add($.__views.__alloyId1392);
    $.__views.__alloyId1393 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1557"
    });
    $.__views.__alloyId1556.add($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createLabel({
=======
        id: "__alloyId1060"
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1393"
=======
<<<<<<< HEAD
        id: "__alloyId1558"
    });
    $.__views.__alloyId1556.add($.__views.__alloyId1558);
    $.__views.__alloyId1559 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1559"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createLabel({
=======
        id: "__alloyId1061"
>>>>>>> origin/master
    });
    $.__views.__alloyId1391.add($.__views.__alloyId1393);
    $.__views.__alloyId1394 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1394"
    });
<<<<<<< HEAD
    $.__views.__alloyId1385.add($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1053.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1395"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1560"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createLabel({
=======
        id: "__alloyId1063"
    });
    $.__views.__alloyId1062.add($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1396"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1396);
    $.__views.__alloyId1397 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1561"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createView({
=======
        id: "__alloyId1064"
    });
    $.__views.__alloyId1062.add($.__views.__alloyId1064);
    $.__views.__alloyId1065 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1397"
=======
<<<<<<< HEAD
        id: "__alloyId1562"
    });
    $.__views.view1.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1563"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1563);
    $.__views.__alloyId1564 = Ti.UI.createLabel({
=======
        id: "__alloyId1065"
>>>>>>> origin/master
    });
    $.__views.view1.add($.__views.__alloyId1397);
    $.__views.__alloyId1398 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1398"
    });
<<<<<<< HEAD
    $.__views.__alloyId1397.add($.__views.__alloyId1398);
    $.__views.__alloyId1399 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1065.add($.__views.__alloyId1066);
    $.__views.__alloyId1067 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1399"
=======
<<<<<<< HEAD
        id: "__alloyId1564"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1564);
    $.__views.__alloyId1565 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1565"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createLabel({
=======
        id: "__alloyId1067"
>>>>>>> origin/master
    });
    $.__views.__alloyId1398.add($.__views.__alloyId1399);
    $.__views.__alloyId1400 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1400"
    });
<<<<<<< HEAD
    $.__views.__alloyId1397.add($.__views.__alloyId1400);
    $.__views.__alloyId1401 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1065.add($.__views.__alloyId1068);
    $.__views.__alloyId1069 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1401"
    });
    $.__views.__alloyId1400.add($.__views.__alloyId1401);
    $.__views.__alloyId1402 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1566"
    });
    $.__views.__alloyId1565.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createLabel({
=======
        id: "__alloyId1069"
    });
    $.__views.__alloyId1068.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1402"
=======
<<<<<<< HEAD
        id: "__alloyId1567"
    });
    $.__views.__alloyId1565.add($.__views.__alloyId1567);
    $.__views.__alloyId1568 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1568"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1568);
    $.__views.__alloyId1569 = Ti.UI.createLabel({
=======
        id: "__alloyId1070"
>>>>>>> origin/master
    });
    $.__views.__alloyId1400.add($.__views.__alloyId1402);
    $.__views.__alloyId1403 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1403"
    });
<<<<<<< HEAD
    $.__views.__alloyId1397.add($.__views.__alloyId1403);
    $.__views.__alloyId1404 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1065.add($.__views.__alloyId1071);
    $.__views.__alloyId1072 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1404"
    });
    $.__views.__alloyId1403.add($.__views.__alloyId1404);
    $.__views.__alloyId1405 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1569"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createLabel({
=======
        id: "__alloyId1072"
    });
    $.__views.__alloyId1071.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1405"
=======
<<<<<<< HEAD
        id: "__alloyId1570"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1571"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1571);
    $.__views.__alloyId1572 = Ti.UI.createLabel({
=======
        id: "__alloyId1073"
>>>>>>> origin/master
    });
    $.__views.__alloyId1403.add($.__views.__alloyId1405);
    $.__views.__alloyId1406 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1406"
    });
<<<<<<< HEAD
    $.__views.__alloyId1397.add($.__views.__alloyId1406);
    $.__views.__alloyId1407 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1065.add($.__views.__alloyId1074);
    $.__views.__alloyId1075 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1407"
    });
    $.__views.__alloyId1406.add($.__views.__alloyId1407);
    $.__views.__alloyId1408 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1572"
    });
    $.__views.__alloyId1571.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createLabel({
=======
        id: "__alloyId1075"
    });
    $.__views.__alloyId1074.add($.__views.__alloyId1075);
    $.__views.__alloyId1076 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1408"
=======
<<<<<<< HEAD
        id: "__alloyId1573"
    });
    $.__views.__alloyId1571.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1574"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1574);
    $.__views.__alloyId1575 = Ti.UI.createLabel({
=======
        id: "__alloyId1076"
>>>>>>> origin/master
    });
    $.__views.__alloyId1406.add($.__views.__alloyId1408);
    $.__views.__alloyId1409 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1409"
    });
<<<<<<< HEAD
    $.__views.__alloyId1397.add($.__views.__alloyId1409);
    $.__views.__alloyId1410 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1065.add($.__views.__alloyId1077);
    $.__views.__alloyId1078 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1410"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1410);
    $.__views.__alloyId1411 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1575"
    });
    $.__views.__alloyId1574.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createLabel({
=======
        id: "__alloyId1078"
    });
    $.__views.__alloyId1077.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1411"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1411);
    $.__views.__alloyId1412 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1576"
    });
    $.__views.__alloyId1574.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createView({
=======
        id: "__alloyId1079"
    });
    $.__views.__alloyId1077.add($.__views.__alloyId1079);
    $.__views.__alloyId1080 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1412"
=======
<<<<<<< HEAD
        id: "__alloyId1577"
    });
    $.__views.view1.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1578"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createLabel({
=======
        id: "__alloyId1080"
>>>>>>> origin/master
    });
    $.__views.view1.add($.__views.__alloyId1412);
    $.__views.__alloyId1413 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1413"
    });
<<<<<<< HEAD
    $.__views.__alloyId1412.add($.__views.__alloyId1413);
    $.__views.__alloyId1414 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1080.add($.__views.__alloyId1081);
    $.__views.__alloyId1082 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1414"
=======
<<<<<<< HEAD
        id: "__alloyId1579"
    });
    $.__views.__alloyId1578.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1580"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1580);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
=======
        id: "__alloyId1082"
>>>>>>> origin/master
    });
    $.__views.__alloyId1413.add($.__views.__alloyId1414);
    $.__views.__alloyId1415 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1415"
    });
<<<<<<< HEAD
    $.__views.__alloyId1412.add($.__views.__alloyId1415);
    $.__views.__alloyId1416 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1080.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1416"
    });
    $.__views.__alloyId1415.add($.__views.__alloyId1416);
    $.__views.__alloyId1417 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1581"
    });
    $.__views.__alloyId1580.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
=======
        id: "__alloyId1084"
    });
    $.__views.__alloyId1083.add($.__views.__alloyId1084);
    $.__views.__alloyId1085 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1417"
=======
<<<<<<< HEAD
        id: "__alloyId1582"
    });
    $.__views.__alloyId1580.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1583"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1583);
    $.__views.__alloyId1584 = Ti.UI.createLabel({
=======
        id: "__alloyId1085"
>>>>>>> origin/master
    });
    $.__views.__alloyId1415.add($.__views.__alloyId1417);
    $.__views.__alloyId1418 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1418"
    });
<<<<<<< HEAD
    $.__views.__alloyId1412.add($.__views.__alloyId1418);
    $.__views.__alloyId1419 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1080.add($.__views.__alloyId1086);
    $.__views.__alloyId1087 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1419"
    });
    $.__views.__alloyId1418.add($.__views.__alloyId1419);
    $.__views.__alloyId1420 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1584"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1584);
    $.__views.__alloyId1585 = Ti.UI.createLabel({
=======
        id: "__alloyId1087"
    });
    $.__views.__alloyId1086.add($.__views.__alloyId1087);
    $.__views.__alloyId1088 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1420"
    });
    $.__views.__alloyId1418.add($.__views.__alloyId1420);
=======
<<<<<<< HEAD
        id: "__alloyId1585"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1585);
=======
        id: "__alloyId1088"
    });
    $.__views.__alloyId1086.add($.__views.__alloyId1088);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
<<<<<<< HEAD
    $.__views.__alloyId1421 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1586 = Ti.UI.createView({
=======
    $.__views.__alloyId1089 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
<<<<<<< HEAD
        id: "__alloyId1421"
=======
<<<<<<< HEAD
        id: "__alloyId1586"
    });
    $.__views.view2.add($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1587"
    });
    $.__views.__alloyId1586.add($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createLabel({
=======
        id: "__alloyId1089"
>>>>>>> origin/master
    });
    $.__views.view2.add($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1422"
    });
<<<<<<< HEAD
    $.__views.__alloyId1421.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1089.add($.__views.__alloyId1090);
    $.__views.__alloyId1091 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1423"
=======
<<<<<<< HEAD
        id: "__alloyId1588"
    });
    $.__views.__alloyId1587.add($.__views.__alloyId1588);
    $.__views.__alloyId1589 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1589"
    });
    $.__views.__alloyId1586.add($.__views.__alloyId1589);
    $.__views.__alloyId1590 = Ti.UI.createLabel({
=======
        id: "__alloyId1091"
>>>>>>> origin/master
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1423);
    $.__views.__alloyId1424 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1424"
    });
<<<<<<< HEAD
    $.__views.__alloyId1421.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1089.add($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1425"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1590"
    });
    $.__views.__alloyId1589.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createLabel({
=======
        id: "__alloyId1093"
    });
    $.__views.__alloyId1092.add($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1426"
=======
<<<<<<< HEAD
        id: "__alloyId1591"
    });
    $.__views.__alloyId1589.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1592"
    });
    $.__views.__alloyId1586.add($.__views.__alloyId1592);
    $.__views.__alloyId1593 = Ti.UI.createLabel({
=======
        id: "__alloyId1094"
>>>>>>> origin/master
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1426);
    $.__views.__alloyId1427 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1427"
    });
<<<<<<< HEAD
    $.__views.__alloyId1421.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1089.add($.__views.__alloyId1095);
    $.__views.__alloyId1096 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1428"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1428);
    $.__views.__alloyId1429 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1593"
    });
    $.__views.__alloyId1592.add($.__views.__alloyId1593);
    $.__views.__alloyId1594 = Ti.UI.createLabel({
=======
        id: "__alloyId1096"
    });
    $.__views.__alloyId1095.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1429"
=======
<<<<<<< HEAD
        id: "__alloyId1594"
    });
    $.__views.__alloyId1592.add($.__views.__alloyId1594);
    $.__views.__alloyId1595 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1595"
    });
    $.__views.__alloyId1586.add($.__views.__alloyId1595);
    $.__views.__alloyId1596 = Ti.UI.createLabel({
=======
        id: "__alloyId1097"
>>>>>>> origin/master
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1429);
    $.__views.__alloyId1430 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1430"
    });
<<<<<<< HEAD
    $.__views.__alloyId1421.add($.__views.__alloyId1430);
    $.__views.__alloyId1431 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1089.add($.__views.__alloyId1098);
    $.__views.__alloyId1099 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1431"
    });
    $.__views.__alloyId1430.add($.__views.__alloyId1431);
    $.__views.__alloyId1432 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1596"
    });
    $.__views.__alloyId1595.add($.__views.__alloyId1596);
    $.__views.__alloyId1597 = Ti.UI.createLabel({
=======
        id: "__alloyId1099"
    });
    $.__views.__alloyId1098.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1432"
    });
    $.__views.__alloyId1430.add($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1597"
    });
    $.__views.__alloyId1595.add($.__views.__alloyId1597);
    $.__views.__alloyId1598 = Ti.UI.createView({
=======
        id: "__alloyId1100"
    });
    $.__views.__alloyId1098.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1433"
=======
<<<<<<< HEAD
        id: "__alloyId1598"
    });
    $.__views.view2.add($.__views.__alloyId1598);
    $.__views.__alloyId1599 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1599"
    });
    $.__views.__alloyId1598.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createLabel({
=======
        id: "__alloyId1101"
>>>>>>> origin/master
    });
    $.__views.view2.add($.__views.__alloyId1433);
    $.__views.__alloyId1434 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1434"
    });
<<<<<<< HEAD
    $.__views.__alloyId1433.add($.__views.__alloyId1434);
    $.__views.__alloyId1435 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1101.add($.__views.__alloyId1102);
    $.__views.__alloyId1103 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1435"
=======
<<<<<<< HEAD
        id: "__alloyId1600"
    });
    $.__views.__alloyId1599.add($.__views.__alloyId1600);
    $.__views.__alloyId1601 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1601"
    });
    $.__views.__alloyId1598.add($.__views.__alloyId1601);
    $.__views.__alloyId1602 = Ti.UI.createLabel({
=======
        id: "__alloyId1103"
>>>>>>> origin/master
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1436"
    });
<<<<<<< HEAD
    $.__views.__alloyId1433.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1101.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1437"
    });
    $.__views.__alloyId1436.add($.__views.__alloyId1437);
    $.__views.__alloyId1438 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1602"
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createLabel({
=======
        id: "__alloyId1105"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1438"
=======
<<<<<<< HEAD
        id: "__alloyId1603"
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1603);
    $.__views.__alloyId1604 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1604"
    });
    $.__views.__alloyId1598.add($.__views.__alloyId1604);
    $.__views.__alloyId1605 = Ti.UI.createLabel({
=======
        id: "__alloyId1106"
>>>>>>> origin/master
    });
    $.__views.__alloyId1436.add($.__views.__alloyId1438);
    $.__views.__alloyId1439 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1439"
    });
<<<<<<< HEAD
    $.__views.__alloyId1433.add($.__views.__alloyId1439);
    $.__views.__alloyId1440 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1101.add($.__views.__alloyId1107);
    $.__views.__alloyId1108 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1440"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1605"
    });
    $.__views.__alloyId1604.add($.__views.__alloyId1605);
    $.__views.__alloyId1606 = Ti.UI.createLabel({
=======
        id: "__alloyId1108"
    });
    $.__views.__alloyId1107.add($.__views.__alloyId1108);
    $.__views.__alloyId1109 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1441"
=======
<<<<<<< HEAD
        id: "__alloyId1606"
    });
    $.__views.__alloyId1604.add($.__views.__alloyId1606);
    $.__views.__alloyId1607 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1607"
    });
    $.__views.__alloyId1598.add($.__views.__alloyId1607);
    $.__views.__alloyId1608 = Ti.UI.createLabel({
=======
        id: "__alloyId1109"
>>>>>>> origin/master
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1442"
    });
<<<<<<< HEAD
    $.__views.__alloyId1433.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1101.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1443"
    });
    $.__views.__alloyId1442.add($.__views.__alloyId1443);
    $.__views.__alloyId1444 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1608"
    });
    $.__views.__alloyId1607.add($.__views.__alloyId1608);
    $.__views.__alloyId1609 = Ti.UI.createLabel({
=======
        id: "__alloyId1111"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1444"
=======
<<<<<<< HEAD
        id: "__alloyId1609"
    });
    $.__views.__alloyId1607.add($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1610"
    });
    $.__views.__alloyId1598.add($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createLabel({
=======
        id: "__alloyId1112"
>>>>>>> origin/master
    });
    $.__views.__alloyId1442.add($.__views.__alloyId1444);
    $.__views.__alloyId1445 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1445"
    });
<<<<<<< HEAD
    $.__views.__alloyId1433.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1101.add($.__views.__alloyId1113);
    $.__views.__alloyId1114 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1446"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1611"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1611);
    $.__views.__alloyId1612 = Ti.UI.createLabel({
=======
        id: "__alloyId1114"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1114);
    $.__views.__alloyId1115 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1447"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1612"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1612);
    $.__views.__alloyId1613 = Ti.UI.createView({
=======
        id: "__alloyId1115"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1115);
    $.__views.__alloyId1116 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1448"
=======
<<<<<<< HEAD
        id: "__alloyId1613"
    });
    $.__views.view2.add($.__views.__alloyId1613);
    $.__views.__alloyId1614 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1614"
    });
    $.__views.__alloyId1613.add($.__views.__alloyId1614);
    $.__views.__alloyId1615 = Ti.UI.createLabel({
=======
        id: "__alloyId1116"
>>>>>>> origin/master
    });
    $.__views.view2.add($.__views.__alloyId1448);
    $.__views.__alloyId1449 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1449"
    });
<<<<<<< HEAD
    $.__views.__alloyId1448.add($.__views.__alloyId1449);
    $.__views.__alloyId1450 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1116.add($.__views.__alloyId1117);
    $.__views.__alloyId1118 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1450"
=======
<<<<<<< HEAD
        id: "__alloyId1615"
    });
    $.__views.__alloyId1614.add($.__views.__alloyId1615);
    $.__views.__alloyId1616 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1616"
    });
    $.__views.__alloyId1613.add($.__views.__alloyId1616);
    $.__views.__alloyId1617 = Ti.UI.createLabel({
=======
        id: "__alloyId1118"
>>>>>>> origin/master
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1451"
    });
<<<<<<< HEAD
    $.__views.__alloyId1448.add($.__views.__alloyId1451);
    $.__views.__alloyId1452 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1116.add($.__views.__alloyId1119);
    $.__views.__alloyId1120 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1452"
    });
    $.__views.__alloyId1451.add($.__views.__alloyId1452);
    $.__views.__alloyId1453 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1617"
    });
    $.__views.__alloyId1616.add($.__views.__alloyId1617);
    $.__views.__alloyId1618 = Ti.UI.createLabel({
=======
        id: "__alloyId1120"
    });
    $.__views.__alloyId1119.add($.__views.__alloyId1120);
    $.__views.__alloyId1121 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1453"
=======
<<<<<<< HEAD
        id: "__alloyId1618"
    });
    $.__views.__alloyId1616.add($.__views.__alloyId1618);
    $.__views.__alloyId1619 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1619"
    });
    $.__views.__alloyId1613.add($.__views.__alloyId1619);
    $.__views.__alloyId1620 = Ti.UI.createLabel({
=======
        id: "__alloyId1121"
>>>>>>> origin/master
    });
    $.__views.__alloyId1451.add($.__views.__alloyId1453);
    $.__views.__alloyId1454 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1454"
    });
<<<<<<< HEAD
    $.__views.__alloyId1448.add($.__views.__alloyId1454);
    $.__views.__alloyId1455 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1116.add($.__views.__alloyId1122);
    $.__views.__alloyId1123 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1455"
    });
    $.__views.__alloyId1454.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1620"
    });
    $.__views.__alloyId1619.add($.__views.__alloyId1620);
    $.__views.__alloyId1621 = Ti.UI.createLabel({
=======
        id: "__alloyId1123"
    });
    $.__views.__alloyId1122.add($.__views.__alloyId1123);
    $.__views.__alloyId1124 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1456"
    });
    $.__views.__alloyId1454.add($.__views.__alloyId1456);
=======
<<<<<<< HEAD
        id: "__alloyId1621"
    });
    $.__views.__alloyId1619.add($.__views.__alloyId1621);
=======
        id: "__alloyId1124"
    });
    $.__views.__alloyId1122.add($.__views.__alloyId1124);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
<<<<<<< HEAD
    $.__views.__alloyId1457 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1622 = Ti.UI.createView({
=======
    $.__views.__alloyId1125 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
<<<<<<< HEAD
        id: "__alloyId1457"
=======
<<<<<<< HEAD
        id: "__alloyId1622"
    });
    $.__views.view3.add($.__views.__alloyId1622);
    $.__views.__alloyId1623 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1623"
    });
    $.__views.__alloyId1622.add($.__views.__alloyId1623);
    $.__views.__alloyId1624 = Ti.UI.createLabel({
=======
        id: "__alloyId1125"
>>>>>>> origin/master
    });
    $.__views.view3.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1458"
    });
<<<<<<< HEAD
    $.__views.__alloyId1457.add($.__views.__alloyId1458);
    $.__views.__alloyId1459 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1125.add($.__views.__alloyId1126);
    $.__views.__alloyId1127 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1459"
=======
<<<<<<< HEAD
        id: "__alloyId1624"
    });
    $.__views.__alloyId1623.add($.__views.__alloyId1624);
    $.__views.__alloyId1625 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1625"
    });
    $.__views.__alloyId1622.add($.__views.__alloyId1625);
    $.__views.__alloyId1626 = Ti.UI.createLabel({
=======
        id: "__alloyId1127"
>>>>>>> origin/master
    });
    $.__views.__alloyId1458.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1460"
    });
<<<<<<< HEAD
    $.__views.__alloyId1457.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1125.add($.__views.__alloyId1128);
    $.__views.__alloyId1129 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1461"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1626"
    });
    $.__views.__alloyId1625.add($.__views.__alloyId1626);
    $.__views.__alloyId1627 = Ti.UI.createLabel({
=======
        id: "__alloyId1129"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1129);
    $.__views.__alloyId1130 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1462"
=======
<<<<<<< HEAD
        id: "__alloyId1627"
    });
    $.__views.__alloyId1625.add($.__views.__alloyId1627);
    $.__views.__alloyId1628 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1628"
    });
    $.__views.__alloyId1622.add($.__views.__alloyId1628);
    $.__views.__alloyId1629 = Ti.UI.createLabel({
=======
        id: "__alloyId1130"
>>>>>>> origin/master
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1463"
    });
<<<<<<< HEAD
    $.__views.__alloyId1457.add($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1125.add($.__views.__alloyId1131);
    $.__views.__alloyId1132 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1464"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1629"
    });
    $.__views.__alloyId1628.add($.__views.__alloyId1629);
    $.__views.__alloyId1630 = Ti.UI.createLabel({
=======
        id: "__alloyId1132"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1132);
    $.__views.__alloyId1133 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1465"
=======
<<<<<<< HEAD
        id: "__alloyId1630"
    });
    $.__views.__alloyId1628.add($.__views.__alloyId1630);
    $.__views.__alloyId1631 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1631"
    });
    $.__views.__alloyId1622.add($.__views.__alloyId1631);
    $.__views.__alloyId1632 = Ti.UI.createLabel({
=======
        id: "__alloyId1133"
>>>>>>> origin/master
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1466"
    });
<<<<<<< HEAD
    $.__views.__alloyId1457.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1125.add($.__views.__alloyId1134);
    $.__views.__alloyId1135 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1467"
    });
    $.__views.__alloyId1466.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1632"
    });
    $.__views.__alloyId1631.add($.__views.__alloyId1632);
    $.__views.__alloyId1633 = Ti.UI.createLabel({
=======
        id: "__alloyId1135"
    });
    $.__views.__alloyId1134.add($.__views.__alloyId1135);
    $.__views.__alloyId1136 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1468"
    });
    $.__views.__alloyId1466.add($.__views.__alloyId1468);
    $.__views.__alloyId1469 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1633"
    });
    $.__views.__alloyId1631.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createView({
=======
        id: "__alloyId1136"
    });
    $.__views.__alloyId1134.add($.__views.__alloyId1136);
    $.__views.__alloyId1137 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1469"
=======
<<<<<<< HEAD
        id: "__alloyId1634"
    });
    $.__views.view3.add($.__views.__alloyId1634);
    $.__views.__alloyId1635 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1635"
    });
    $.__views.__alloyId1634.add($.__views.__alloyId1635);
    $.__views.__alloyId1636 = Ti.UI.createLabel({
=======
        id: "__alloyId1137"
>>>>>>> origin/master
    });
    $.__views.view3.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1470"
    });
<<<<<<< HEAD
    $.__views.__alloyId1469.add($.__views.__alloyId1470);
    $.__views.__alloyId1471 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1137.add($.__views.__alloyId1138);
    $.__views.__alloyId1139 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1471"
=======
<<<<<<< HEAD
        id: "__alloyId1636"
    });
    $.__views.__alloyId1635.add($.__views.__alloyId1636);
    $.__views.__alloyId1637 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1637"
    });
    $.__views.__alloyId1634.add($.__views.__alloyId1637);
    $.__views.__alloyId1638 = Ti.UI.createLabel({
=======
        id: "__alloyId1139"
>>>>>>> origin/master
    });
    $.__views.__alloyId1470.add($.__views.__alloyId1471);
    $.__views.__alloyId1472 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1472"
    });
<<<<<<< HEAD
    $.__views.__alloyId1469.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1137.add($.__views.__alloyId1140);
    $.__views.__alloyId1141 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1473"
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1638"
    });
    $.__views.__alloyId1637.add($.__views.__alloyId1638);
    $.__views.__alloyId1639 = Ti.UI.createLabel({
=======
        id: "__alloyId1141"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1474"
=======
<<<<<<< HEAD
        id: "__alloyId1639"
    });
    $.__views.__alloyId1637.add($.__views.__alloyId1639);
    $.__views.__alloyId1640 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1640"
    });
    $.__views.__alloyId1634.add($.__views.__alloyId1640);
    $.__views.__alloyId1641 = Ti.UI.createLabel({
=======
        id: "__alloyId1142"
>>>>>>> origin/master
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1475"
    });
<<<<<<< HEAD
    $.__views.__alloyId1469.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1137.add($.__views.__alloyId1143);
    $.__views.__alloyId1144 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1476"
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1641"
    });
    $.__views.__alloyId1640.add($.__views.__alloyId1641);
    $.__views.__alloyId1642 = Ti.UI.createLabel({
=======
        id: "__alloyId1144"
    });
    $.__views.__alloyId1143.add($.__views.__alloyId1144);
    $.__views.__alloyId1145 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1477"
=======
<<<<<<< HEAD
        id: "__alloyId1642"
    });
    $.__views.__alloyId1640.add($.__views.__alloyId1642);
    $.__views.__alloyId1643 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1643"
    });
    $.__views.__alloyId1634.add($.__views.__alloyId1643);
    $.__views.__alloyId1644 = Ti.UI.createLabel({
=======
        id: "__alloyId1145"
>>>>>>> origin/master
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1478"
    });
<<<<<<< HEAD
    $.__views.__alloyId1469.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1137.add($.__views.__alloyId1146);
    $.__views.__alloyId1147 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1479"
    });
    $.__views.__alloyId1478.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1644"
    });
    $.__views.__alloyId1643.add($.__views.__alloyId1644);
    $.__views.__alloyId1645 = Ti.UI.createLabel({
=======
        id: "__alloyId1147"
    });
    $.__views.__alloyId1146.add($.__views.__alloyId1147);
    $.__views.__alloyId1148 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1480"
=======
<<<<<<< HEAD
        id: "__alloyId1645"
    });
    $.__views.__alloyId1643.add($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1646"
    });
    $.__views.__alloyId1634.add($.__views.__alloyId1646);
    $.__views.__alloyId1647 = Ti.UI.createLabel({
=======
        id: "__alloyId1148"
>>>>>>> origin/master
    });
    $.__views.__alloyId1478.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1481"
    });
<<<<<<< HEAD
    $.__views.__alloyId1469.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1137.add($.__views.__alloyId1149);
    $.__views.__alloyId1150 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1482"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1647"
    });
    $.__views.__alloyId1646.add($.__views.__alloyId1647);
    $.__views.__alloyId1648 = Ti.UI.createLabel({
=======
        id: "__alloyId1150"
    });
    $.__views.__alloyId1149.add($.__views.__alloyId1150);
    $.__views.__alloyId1151 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1483"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1648"
    });
    $.__views.__alloyId1646.add($.__views.__alloyId1648);
    $.__views.__alloyId1649 = Ti.UI.createView({
=======
        id: "__alloyId1151"
    });
    $.__views.__alloyId1149.add($.__views.__alloyId1151);
    $.__views.__alloyId1152 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1484"
=======
<<<<<<< HEAD
        id: "__alloyId1649"
    });
    $.__views.view3.add($.__views.__alloyId1649);
    $.__views.__alloyId1650 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1650"
    });
    $.__views.__alloyId1649.add($.__views.__alloyId1650);
    $.__views.__alloyId1651 = Ti.UI.createLabel({
=======
        id: "__alloyId1152"
>>>>>>> origin/master
    });
    $.__views.view3.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1485"
    });
<<<<<<< HEAD
    $.__views.__alloyId1484.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1152.add($.__views.__alloyId1153);
    $.__views.__alloyId1154 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1486"
=======
<<<<<<< HEAD
        id: "__alloyId1651"
    });
    $.__views.__alloyId1650.add($.__views.__alloyId1651);
    $.__views.__alloyId1652 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1652"
    });
    $.__views.__alloyId1649.add($.__views.__alloyId1652);
    $.__views.__alloyId1653 = Ti.UI.createLabel({
=======
        id: "__alloyId1154"
>>>>>>> origin/master
    });
    $.__views.__alloyId1485.add($.__views.__alloyId1486);
    $.__views.__alloyId1487 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1487"
    });
<<<<<<< HEAD
    $.__views.__alloyId1484.add($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1152.add($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1488"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1653"
    });
    $.__views.__alloyId1652.add($.__views.__alloyId1653);
    $.__views.__alloyId1654 = Ti.UI.createLabel({
=======
        id: "__alloyId1156"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1489"
=======
<<<<<<< HEAD
        id: "__alloyId1654"
    });
    $.__views.__alloyId1652.add($.__views.__alloyId1654);
    $.__views.__alloyId1655 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1655"
    });
    $.__views.__alloyId1649.add($.__views.__alloyId1655);
    $.__views.__alloyId1656 = Ti.UI.createLabel({
=======
        id: "__alloyId1157"
>>>>>>> origin/master
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1490"
    });
<<<<<<< HEAD
    $.__views.__alloyId1484.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1152.add($.__views.__alloyId1158);
    $.__views.__alloyId1159 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1491"
    });
    $.__views.__alloyId1490.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1656"
    });
    $.__views.__alloyId1655.add($.__views.__alloyId1656);
    $.__views.__alloyId1657 = Ti.UI.createLabel({
=======
        id: "__alloyId1159"
    });
    $.__views.__alloyId1158.add($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1492"
    });
    $.__views.__alloyId1490.add($.__views.__alloyId1492);
=======
<<<<<<< HEAD
        id: "__alloyId1657"
    });
    $.__views.__alloyId1655.add($.__views.__alloyId1657);
=======
        id: "__alloyId1160"
    });
    $.__views.__alloyId1158.add($.__views.__alloyId1160);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
<<<<<<< HEAD
    $.__views.__alloyId1493 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1658 = Ti.UI.createView({
=======
    $.__views.__alloyId1161 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
<<<<<<< HEAD
        id: "__alloyId1493"
=======
<<<<<<< HEAD
        id: "__alloyId1658"
    });
    $.__views.view4.add($.__views.__alloyId1658);
    $.__views.__alloyId1659 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1659"
    });
    $.__views.__alloyId1658.add($.__views.__alloyId1659);
    $.__views.__alloyId1660 = Ti.UI.createLabel({
=======
        id: "__alloyId1161"
>>>>>>> origin/master
    });
    $.__views.view4.add($.__views.__alloyId1493);
    $.__views.__alloyId1494 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1494"
    });
<<<<<<< HEAD
    $.__views.__alloyId1493.add($.__views.__alloyId1494);
    $.__views.__alloyId1495 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1161.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1495"
=======
<<<<<<< HEAD
        id: "__alloyId1660"
    });
    $.__views.__alloyId1659.add($.__views.__alloyId1660);
    $.__views.__alloyId1661 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1661"
    });
    $.__views.__alloyId1658.add($.__views.__alloyId1661);
    $.__views.__alloyId1662 = Ti.UI.createLabel({
=======
        id: "__alloyId1163"
>>>>>>> origin/master
    });
    $.__views.__alloyId1494.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1496"
    });
<<<<<<< HEAD
    $.__views.__alloyId1493.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1161.add($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1497"
    });
    $.__views.__alloyId1496.add($.__views.__alloyId1497);
    $.__views.__alloyId1498 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1662"
    });
    $.__views.__alloyId1661.add($.__views.__alloyId1662);
    $.__views.__alloyId1663 = Ti.UI.createLabel({
=======
        id: "__alloyId1165"
    });
    $.__views.__alloyId1164.add($.__views.__alloyId1165);
    $.__views.__alloyId1166 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1498"
=======
<<<<<<< HEAD
        id: "__alloyId1663"
    });
    $.__views.__alloyId1661.add($.__views.__alloyId1663);
    $.__views.__alloyId1664 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1664"
    });
    $.__views.__alloyId1658.add($.__views.__alloyId1664);
    $.__views.__alloyId1665 = Ti.UI.createLabel({
=======
        id: "__alloyId1166"
>>>>>>> origin/master
    });
    $.__views.__alloyId1496.add($.__views.__alloyId1498);
    $.__views.__alloyId1499 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1499"
    });
<<<<<<< HEAD
    $.__views.__alloyId1493.add($.__views.__alloyId1499);
    $.__views.__alloyId1500 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1161.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1500"
    });
    $.__views.__alloyId1499.add($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1665"
    });
    $.__views.__alloyId1664.add($.__views.__alloyId1665);
    $.__views.__alloyId1666 = Ti.UI.createLabel({
=======
        id: "__alloyId1168"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1168);
    $.__views.__alloyId1169 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1501"
=======
<<<<<<< HEAD
        id: "__alloyId1666"
    });
    $.__views.__alloyId1664.add($.__views.__alloyId1666);
    $.__views.__alloyId1667 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1667"
    });
    $.__views.__alloyId1658.add($.__views.__alloyId1667);
    $.__views.__alloyId1668 = Ti.UI.createLabel({
=======
        id: "__alloyId1169"
>>>>>>> origin/master
    });
    $.__views.__alloyId1499.add($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1502"
    });
<<<<<<< HEAD
    $.__views.__alloyId1493.add($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1161.add($.__views.__alloyId1170);
    $.__views.__alloyId1171 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1503"
    });
    $.__views.__alloyId1502.add($.__views.__alloyId1503);
    $.__views.__alloyId1504 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1668"
    });
    $.__views.__alloyId1667.add($.__views.__alloyId1668);
    $.__views.__alloyId1669 = Ti.UI.createLabel({
=======
        id: "__alloyId1171"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1504"
    });
    $.__views.__alloyId1502.add($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1669"
    });
    $.__views.__alloyId1667.add($.__views.__alloyId1669);
    $.__views.__alloyId1670 = Ti.UI.createView({
=======
        id: "__alloyId1172"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1172);
    $.__views.__alloyId1173 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1505"
=======
<<<<<<< HEAD
        id: "__alloyId1670"
    });
    $.__views.view4.add($.__views.__alloyId1670);
    $.__views.__alloyId1671 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1671"
    });
    $.__views.__alloyId1670.add($.__views.__alloyId1671);
    $.__views.__alloyId1672 = Ti.UI.createLabel({
=======
        id: "__alloyId1173"
>>>>>>> origin/master
    });
    $.__views.view4.add($.__views.__alloyId1505);
    $.__views.__alloyId1506 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1506"
    });
<<<<<<< HEAD
    $.__views.__alloyId1505.add($.__views.__alloyId1506);
    $.__views.__alloyId1507 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1507"
=======
<<<<<<< HEAD
        id: "__alloyId1672"
    });
    $.__views.__alloyId1671.add($.__views.__alloyId1672);
    $.__views.__alloyId1673 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1673"
    });
    $.__views.__alloyId1670.add($.__views.__alloyId1673);
    $.__views.__alloyId1674 = Ti.UI.createLabel({
=======
        id: "__alloyId1175"
>>>>>>> origin/master
    });
    $.__views.__alloyId1506.add($.__views.__alloyId1507);
    $.__views.__alloyId1508 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1508"
    });
<<<<<<< HEAD
    $.__views.__alloyId1505.add($.__views.__alloyId1508);
    $.__views.__alloyId1509 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1173.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1509"
    });
    $.__views.__alloyId1508.add($.__views.__alloyId1509);
    $.__views.__alloyId1510 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1674"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1674);
    $.__views.__alloyId1675 = Ti.UI.createLabel({
=======
        id: "__alloyId1177"
    });
    $.__views.__alloyId1176.add($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1510"
=======
<<<<<<< HEAD
        id: "__alloyId1675"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1675);
    $.__views.__alloyId1676 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1676"
    });
    $.__views.__alloyId1670.add($.__views.__alloyId1676);
    $.__views.__alloyId1677 = Ti.UI.createLabel({
=======
        id: "__alloyId1178"
>>>>>>> origin/master
    });
    $.__views.__alloyId1508.add($.__views.__alloyId1510);
    $.__views.__alloyId1511 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1511"
    });
<<<<<<< HEAD
    $.__views.__alloyId1505.add($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1173.add($.__views.__alloyId1179);
    $.__views.__alloyId1180 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1512"
    });
    $.__views.__alloyId1511.add($.__views.__alloyId1512);
    $.__views.__alloyId1513 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1677"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1677);
    $.__views.__alloyId1678 = Ti.UI.createLabel({
=======
        id: "__alloyId1180"
    });
    $.__views.__alloyId1179.add($.__views.__alloyId1180);
    $.__views.__alloyId1181 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1513"
=======
<<<<<<< HEAD
        id: "__alloyId1678"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1678);
    $.__views.__alloyId1679 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1679"
    });
    $.__views.__alloyId1670.add($.__views.__alloyId1679);
    $.__views.__alloyId1680 = Ti.UI.createLabel({
=======
        id: "__alloyId1181"
>>>>>>> origin/master
    });
    $.__views.__alloyId1511.add($.__views.__alloyId1513);
    $.__views.__alloyId1514 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1514"
    });
<<<<<<< HEAD
    $.__views.__alloyId1505.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1173.add($.__views.__alloyId1182);
    $.__views.__alloyId1183 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1515"
    });
    $.__views.__alloyId1514.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1680"
    });
    $.__views.__alloyId1679.add($.__views.__alloyId1680);
    $.__views.__alloyId1681 = Ti.UI.createLabel({
=======
        id: "__alloyId1183"
    });
    $.__views.__alloyId1182.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1516"
=======
<<<<<<< HEAD
        id: "__alloyId1681"
    });
    $.__views.__alloyId1679.add($.__views.__alloyId1681);
    $.__views.__alloyId1682 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1682"
    });
    $.__views.__alloyId1670.add($.__views.__alloyId1682);
    $.__views.__alloyId1683 = Ti.UI.createLabel({
=======
        id: "__alloyId1184"
>>>>>>> origin/master
    });
    $.__views.__alloyId1514.add($.__views.__alloyId1516);
    $.__views.__alloyId1517 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1517"
    });
<<<<<<< HEAD
    $.__views.__alloyId1505.add($.__views.__alloyId1517);
    $.__views.__alloyId1518 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1173.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1518"
    });
    $.__views.__alloyId1517.add($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1683"
    });
    $.__views.__alloyId1682.add($.__views.__alloyId1683);
    $.__views.__alloyId1684 = Ti.UI.createLabel({
=======
        id: "__alloyId1186"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1186);
    $.__views.__alloyId1187 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1519"
    });
    $.__views.__alloyId1517.add($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1684"
    });
    $.__views.__alloyId1682.add($.__views.__alloyId1684);
    $.__views.__alloyId1685 = Ti.UI.createView({
=======
        id: "__alloyId1187"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1520"
=======
<<<<<<< HEAD
        id: "__alloyId1685"
    });
    $.__views.view4.add($.__views.__alloyId1685);
    $.__views.__alloyId1686 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1686"
    });
    $.__views.__alloyId1685.add($.__views.__alloyId1686);
    $.__views.__alloyId1687 = Ti.UI.createLabel({
=======
        id: "__alloyId1188"
>>>>>>> origin/master
    });
    $.__views.view4.add($.__views.__alloyId1520);
    $.__views.__alloyId1521 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1521"
    });
<<<<<<< HEAD
    $.__views.__alloyId1520.add($.__views.__alloyId1521);
    $.__views.__alloyId1522 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1188.add($.__views.__alloyId1189);
    $.__views.__alloyId1190 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1522"
=======
<<<<<<< HEAD
        id: "__alloyId1687"
    });
    $.__views.__alloyId1686.add($.__views.__alloyId1687);
    $.__views.__alloyId1688 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1688"
    });
    $.__views.__alloyId1685.add($.__views.__alloyId1688);
    $.__views.__alloyId1689 = Ti.UI.createLabel({
=======
        id: "__alloyId1190"
>>>>>>> origin/master
    });
    $.__views.__alloyId1521.add($.__views.__alloyId1522);
    $.__views.__alloyId1523 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1523"
    });
<<<<<<< HEAD
    $.__views.__alloyId1520.add($.__views.__alloyId1523);
    $.__views.__alloyId1524 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1188.add($.__views.__alloyId1191);
    $.__views.__alloyId1192 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1524"
    });
    $.__views.__alloyId1523.add($.__views.__alloyId1524);
    $.__views.__alloyId1525 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1689"
    });
    $.__views.__alloyId1688.add($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createLabel({
=======
        id: "__alloyId1192"
    });
    $.__views.__alloyId1191.add($.__views.__alloyId1192);
    $.__views.__alloyId1193 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1525"
=======
<<<<<<< HEAD
        id: "__alloyId1690"
    });
    $.__views.__alloyId1688.add($.__views.__alloyId1690);
    $.__views.__alloyId1691 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1691"
    });
    $.__views.__alloyId1685.add($.__views.__alloyId1691);
    $.__views.__alloyId1692 = Ti.UI.createLabel({
=======
        id: "__alloyId1193"
>>>>>>> origin/master
    });
    $.__views.__alloyId1523.add($.__views.__alloyId1525);
    $.__views.__alloyId1526 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1526"
    });
<<<<<<< HEAD
    $.__views.__alloyId1520.add($.__views.__alloyId1526);
    $.__views.__alloyId1527 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1188.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1527"
    });
    $.__views.__alloyId1526.add($.__views.__alloyId1527);
    $.__views.__alloyId1528 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1692"
    });
    $.__views.__alloyId1691.add($.__views.__alloyId1692);
    $.__views.__alloyId1693 = Ti.UI.createLabel({
=======
        id: "__alloyId1195"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1528"
=======
<<<<<<< HEAD
        id: "__alloyId1693"
    });
    $.__views.__alloyId1691.add($.__views.__alloyId1693);
    $.__views.__alloyId1694 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1694"
    });
    $.__views.prepaid.add($.__views.__alloyId1694);
    subscribe ? $.__views.__alloyId1694.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1694!click!subscribe"] = true;
    $.__views.__alloyId1695 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1695"
    });
    $.__views.__alloyId1694.add($.__views.__alloyId1695);
=======
        id: "__alloyId1196"
>>>>>>> origin/master
    });
    $.__views.__alloyId1526.add($.__views.__alloyId1528);
    $.__views.__alloyId1529 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1529"
    });
    $.__views.prepaid.add($.__views.__alloyId1529);
    subscribe ? $.__views.__alloyId1529.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1529!click!subscribe"] = true;
    $.__views.__alloyId1530 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1530"
    });
<<<<<<< HEAD
    $.__views.__alloyId1529.add($.__views.__alloyId1530);
=======
    $.__views.__alloyId1197.add($.__views.__alloyId1198);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var rate;
    $.picker.setSelectedRow(0, 0, false);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1378!click!back"] && $.__views.__alloyId1378.addEventListener("click", back);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1543!click!back"] && $.__views.__alloyId1543.addEventListener("click", back);
    __defers["$.__views.rateLabel!click!showPicker"] && $.__views.rateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1544!click!showPicker"] && $.__views.__alloyId1544.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1694!click!subscribe"] && $.__views.__alloyId1694.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId1046!click!back"] && $.__views.__alloyId1046.addEventListener("click", back);
>>>>>>> origin/master
    __defers["$.__views.rateLabel!click!showPicker"] && $.__views.rateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1379!click!showPicker"] && $.__views.__alloyId1379.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1529!click!subscribe"] && $.__views.__alloyId1529.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId1197!click!subscribe"] && $.__views.__alloyId1197.addEventListener("click", subscribe);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;