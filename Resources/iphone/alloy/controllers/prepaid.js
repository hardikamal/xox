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
    $.__views.__alloyId1494 = Alloy.createController("_header", {
        id: "__alloyId1494",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId1494.setParent($.__views.prepaid);
    $.__views.__alloyId1495 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1495"
    });
    $.__views.prepaid.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1496"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1497"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1497);
    back ? $.__views.__alloyId1497.addEventListener("click", back) : __defers["$.__views.__alloyId1497!click!back"] = true;
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
    $.__views.__alloyId1498 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1498"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1498);
    showPicker ? $.__views.__alloyId1498.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1498!click!showPicker"] = true;
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
    var __alloyId1499 = [];
    $.__views.__alloyId1500 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1500"
    });
    __alloyId1499.push($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1501"
    });
    __alloyId1499.push($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1502"
    });
    __alloyId1499.push($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1503"
    });
    __alloyId1499.push($.__views.__alloyId1503);
    $.__views.picker.add(__alloyId1499);
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
    $.__views.__alloyId1504 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId1504"
    });
    $.__views.view1.add($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1505"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1505);
    $.__views.__alloyId1506 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1506"
    });
    $.__views.__alloyId1505.add($.__views.__alloyId1506);
    $.__views.__alloyId1507 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1507"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1507);
    $.__views.__alloyId1508 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1508"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1508);
    $.__views.__alloyId1509 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1509"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1509);
    $.__views.__alloyId1510 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1510"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1510);
    $.__views.__alloyId1511 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1511"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1512"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1512);
    $.__views.__alloyId1513 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1513"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1513);
    $.__views.__alloyId1514 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1514"
    });
    $.__views.__alloyId1513.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1515"
    });
    $.__views.__alloyId1513.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1516"
    });
    $.__views.view1.add($.__views.__alloyId1516);
    $.__views.__alloyId1517 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1517"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1517);
    $.__views.__alloyId1518 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1518"
    });
    $.__views.__alloyId1517.add($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1519"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1520"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1520);
    $.__views.__alloyId1521 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1521"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1521);
    $.__views.__alloyId1522 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1522"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1522);
    $.__views.__alloyId1523 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1523"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1523);
    $.__views.__alloyId1524 = Ti.UI.createLabel({
        text: "12cent",
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
    $.__views.__alloyId1516.add($.__views.__alloyId1525);
    $.__views.__alloyId1526 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1526"
    });
    $.__views.__alloyId1525.add($.__views.__alloyId1526);
    $.__views.__alloyId1527 = Ti.UI.createLabel({
        text: "50cent",
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
    $.__views.__alloyId1516.add($.__views.__alloyId1528);
    $.__views.__alloyId1529 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1529"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1529);
    $.__views.__alloyId1530 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1530"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1530);
    $.__views.__alloyId1531 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1531"
    });
    $.__views.view1.add($.__views.__alloyId1531);
    $.__views.__alloyId1532 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1532"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1532);
    $.__views.__alloyId1533 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1533"
    });
    $.__views.__alloyId1532.add($.__views.__alloyId1533);
    $.__views.__alloyId1534 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1534"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1534);
    $.__views.__alloyId1535 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1535"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1535);
    $.__views.__alloyId1536 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1536"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1536);
    $.__views.__alloyId1537 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1537"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1537);
    $.__views.__alloyId1538 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1538"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1538);
    $.__views.__alloyId1539 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1539"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1539);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId1540 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId1540"
    });
    $.__views.view2.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1541"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1542"
    });
    $.__views.__alloyId1541.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1543"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1543);
    $.__views.__alloyId1544 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1544"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1545"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1545);
    $.__views.__alloyId1546 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1546"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1547"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1548"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1548);
    $.__views.__alloyId1549 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1549"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1550"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1550);
    $.__views.__alloyId1551 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1551"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1551);
    $.__views.__alloyId1552 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1552"
    });
    $.__views.view2.add($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1553"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1554"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1554);
    $.__views.__alloyId1555 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1555"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1555);
    $.__views.__alloyId1556 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1556"
    });
    $.__views.__alloyId1555.add($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1557"
    });
    $.__views.__alloyId1555.add($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1558"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1558);
    $.__views.__alloyId1559 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1559"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1560"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1561"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1562"
    });
    $.__views.__alloyId1561.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1563"
    });
    $.__views.__alloyId1561.add($.__views.__alloyId1563);
    $.__views.__alloyId1564 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1564"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1564);
    $.__views.__alloyId1565 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1565"
    });
    $.__views.__alloyId1564.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1566"
    });
    $.__views.__alloyId1564.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1567"
    });
    $.__views.view2.add($.__views.__alloyId1567);
    $.__views.__alloyId1568 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1568"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1568);
    $.__views.__alloyId1569 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1569"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1570"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1571"
    });
    $.__views.__alloyId1570.add($.__views.__alloyId1571);
    $.__views.__alloyId1572 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1572"
    });
    $.__views.__alloyId1570.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1573"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1574"
    });
    $.__views.__alloyId1573.add($.__views.__alloyId1574);
    $.__views.__alloyId1575 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1575"
    });
    $.__views.__alloyId1573.add($.__views.__alloyId1575);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId1576 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId1576"
    });
    $.__views.view3.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1577"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1578"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1579"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1580"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1580);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1581"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1582"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1583"
    });
    $.__views.__alloyId1582.add($.__views.__alloyId1583);
    $.__views.__alloyId1584 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1584"
    });
    $.__views.__alloyId1582.add($.__views.__alloyId1584);
    $.__views.__alloyId1585 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1585"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1585);
    $.__views.__alloyId1586 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1586"
    });
    $.__views.__alloyId1585.add($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1587"
    });
    $.__views.__alloyId1585.add($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1588"
    });
    $.__views.view3.add($.__views.__alloyId1588);
    $.__views.__alloyId1589 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1589"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1589);
    $.__views.__alloyId1590 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1590"
    });
    $.__views.__alloyId1589.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1591"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1592"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1592);
    $.__views.__alloyId1593 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1593"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1593);
    $.__views.__alloyId1594 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1594"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1594);
    $.__views.__alloyId1595 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1595"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1595);
    $.__views.__alloyId1596 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1596"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1596);
    $.__views.__alloyId1597 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1597"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1597);
    $.__views.__alloyId1598 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1598"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1598);
    $.__views.__alloyId1599 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1599"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1600"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1600);
    $.__views.__alloyId1601 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1601"
    });
    $.__views.__alloyId1600.add($.__views.__alloyId1601);
    $.__views.__alloyId1602 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1602"
    });
    $.__views.__alloyId1600.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1603"
    });
    $.__views.view3.add($.__views.__alloyId1603);
    $.__views.__alloyId1604 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1604"
    });
    $.__views.__alloyId1603.add($.__views.__alloyId1604);
    $.__views.__alloyId1605 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1605"
    });
    $.__views.__alloyId1604.add($.__views.__alloyId1605);
    $.__views.__alloyId1606 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1606"
    });
    $.__views.__alloyId1603.add($.__views.__alloyId1606);
    $.__views.__alloyId1607 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1607"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1607);
    $.__views.__alloyId1608 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1608"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1608);
    $.__views.__alloyId1609 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1609"
    });
    $.__views.__alloyId1603.add($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1610"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1611"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1611);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId1612 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId1612"
    });
    $.__views.view4.add($.__views.__alloyId1612);
    $.__views.__alloyId1613 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1613"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1613);
    $.__views.__alloyId1614 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1614"
    });
    $.__views.__alloyId1613.add($.__views.__alloyId1614);
    $.__views.__alloyId1615 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1615"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1615);
    $.__views.__alloyId1616 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1616"
    });
    $.__views.__alloyId1615.add($.__views.__alloyId1616);
    $.__views.__alloyId1617 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1617"
    });
    $.__views.__alloyId1615.add($.__views.__alloyId1617);
    $.__views.__alloyId1618 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1618"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1618);
    $.__views.__alloyId1619 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1619"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1619);
    $.__views.__alloyId1620 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1620"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1620);
    $.__views.__alloyId1621 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1621"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1621);
    $.__views.__alloyId1622 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1622"
    });
    $.__views.__alloyId1621.add($.__views.__alloyId1622);
    $.__views.__alloyId1623 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1623"
    });
    $.__views.__alloyId1621.add($.__views.__alloyId1623);
    $.__views.__alloyId1624 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1624"
    });
    $.__views.view4.add($.__views.__alloyId1624);
    $.__views.__alloyId1625 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1625"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1625);
    $.__views.__alloyId1626 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1626"
    });
    $.__views.__alloyId1625.add($.__views.__alloyId1626);
    $.__views.__alloyId1627 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1627"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1627);
    $.__views.__alloyId1628 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1628"
    });
    $.__views.__alloyId1627.add($.__views.__alloyId1628);
    $.__views.__alloyId1629 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1629"
    });
    $.__views.__alloyId1627.add($.__views.__alloyId1629);
    $.__views.__alloyId1630 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1630"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1630);
    $.__views.__alloyId1631 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1631"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1631);
    $.__views.__alloyId1632 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1632"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1632);
    $.__views.__alloyId1633 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1633"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1634"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1634);
    $.__views.__alloyId1635 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1635"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1635);
    $.__views.__alloyId1636 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1636"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1636);
    $.__views.__alloyId1637 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1637"
    });
    $.__views.__alloyId1636.add($.__views.__alloyId1637);
    $.__views.__alloyId1638 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1638"
    });
    $.__views.__alloyId1636.add($.__views.__alloyId1638);
    $.__views.__alloyId1639 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1639"
    });
    $.__views.view4.add($.__views.__alloyId1639);
    $.__views.__alloyId1640 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1640"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1640);
    $.__views.__alloyId1641 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1641"
    });
    $.__views.__alloyId1640.add($.__views.__alloyId1641);
    $.__views.__alloyId1642 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1642"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1642);
    $.__views.__alloyId1643 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1643"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1643);
    $.__views.__alloyId1644 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1644"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1644);
    $.__views.__alloyId1645 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1645"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1646"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1646);
    $.__views.__alloyId1647 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1647"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1647);
    $.__views.__alloyId1648 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1648"
    });
    $.__views.prepaid.add($.__views.__alloyId1648);
    subscribe ? $.__views.__alloyId1648.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1648!click!subscribe"] = true;
    $.__views.__alloyId1649 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1649"
    });
    $.__views.__alloyId1648.add($.__views.__alloyId1649);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var rate;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1497!click!back"] && $.__views.__alloyId1497.addEventListener("click", back);
    __defers["$.__views.rateLabel!click!showPicker"] && $.__views.rateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1498!click!showPicker"] && $.__views.__alloyId1498.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1648!click!subscribe"] && $.__views.__alloyId1648.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;