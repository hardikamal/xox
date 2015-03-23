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
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1542"
    });
    $.__views.__alloyId1541.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1543"
    });
    $.__views.__alloyId1541.add($.__views.__alloyId1543);
    back ? $.__views.__alloyId1543.addEventListener("click", back) : __defers["$.__views.__alloyId1543!click!back"] = true;
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
    $.__views.__alloyId1544 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1544"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1544);
    showPicker ? $.__views.__alloyId1544.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1544!click!showPicker"] = true;
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
    $.__views.__alloyId1550 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
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
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
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
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1554"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1554);
    $.__views.__alloyId1555 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1557"
    });
    $.__views.__alloyId1556.add($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1560"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1561"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
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
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
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
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1566"
    });
    $.__views.__alloyId1565.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1569"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1572"
    });
    $.__views.__alloyId1571.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1575"
    });
    $.__views.__alloyId1574.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1576"
    });
    $.__views.__alloyId1574.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
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
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
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
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1581"
    });
    $.__views.__alloyId1580.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1584"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1584);
    $.__views.__alloyId1585 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1585"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1585);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId1586 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
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
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
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
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1590"
    });
    $.__views.__alloyId1589.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1593"
    });
    $.__views.__alloyId1592.add($.__views.__alloyId1593);
    $.__views.__alloyId1594 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1596"
    });
    $.__views.__alloyId1595.add($.__views.__alloyId1596);
    $.__views.__alloyId1597 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1597"
    });
    $.__views.__alloyId1595.add($.__views.__alloyId1597);
    $.__views.__alloyId1598 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
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
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
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
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1602"
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1605"
    });
    $.__views.__alloyId1604.add($.__views.__alloyId1605);
    $.__views.__alloyId1606 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1608"
    });
    $.__views.__alloyId1607.add($.__views.__alloyId1608);
    $.__views.__alloyId1609 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1611"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1611);
    $.__views.__alloyId1612 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1612"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1612);
    $.__views.__alloyId1613 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
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
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
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
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1617"
    });
    $.__views.__alloyId1616.add($.__views.__alloyId1617);
    $.__views.__alloyId1618 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1620"
    });
    $.__views.__alloyId1619.add($.__views.__alloyId1620);
    $.__views.__alloyId1621 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1621"
    });
    $.__views.__alloyId1619.add($.__views.__alloyId1621);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId1622 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
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
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
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
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1626"
    });
    $.__views.__alloyId1625.add($.__views.__alloyId1626);
    $.__views.__alloyId1627 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1629"
    });
    $.__views.__alloyId1628.add($.__views.__alloyId1629);
    $.__views.__alloyId1630 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1632"
    });
    $.__views.__alloyId1631.add($.__views.__alloyId1632);
    $.__views.__alloyId1633 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1633"
    });
    $.__views.__alloyId1631.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
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
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
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
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1638"
    });
    $.__views.__alloyId1637.add($.__views.__alloyId1638);
    $.__views.__alloyId1639 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1641"
    });
    $.__views.__alloyId1640.add($.__views.__alloyId1641);
    $.__views.__alloyId1642 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1644"
    });
    $.__views.__alloyId1643.add($.__views.__alloyId1644);
    $.__views.__alloyId1645 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1647"
    });
    $.__views.__alloyId1646.add($.__views.__alloyId1647);
    $.__views.__alloyId1648 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1648"
    });
    $.__views.__alloyId1646.add($.__views.__alloyId1648);
    $.__views.__alloyId1649 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
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
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
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
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1653"
    });
    $.__views.__alloyId1652.add($.__views.__alloyId1653);
    $.__views.__alloyId1654 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1656"
    });
    $.__views.__alloyId1655.add($.__views.__alloyId1656);
    $.__views.__alloyId1657 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1657"
    });
    $.__views.__alloyId1655.add($.__views.__alloyId1657);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId1658 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
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
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
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
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1662"
    });
    $.__views.__alloyId1661.add($.__views.__alloyId1662);
    $.__views.__alloyId1663 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1665"
    });
    $.__views.__alloyId1664.add($.__views.__alloyId1665);
    $.__views.__alloyId1666 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1668"
    });
    $.__views.__alloyId1667.add($.__views.__alloyId1668);
    $.__views.__alloyId1669 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1669"
    });
    $.__views.__alloyId1667.add($.__views.__alloyId1669);
    $.__views.__alloyId1670 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
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
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
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
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1674"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1674);
    $.__views.__alloyId1675 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1677"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1677);
    $.__views.__alloyId1678 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1680"
    });
    $.__views.__alloyId1679.add($.__views.__alloyId1680);
    $.__views.__alloyId1681 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1683"
    });
    $.__views.__alloyId1682.add($.__views.__alloyId1683);
    $.__views.__alloyId1684 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1684"
    });
    $.__views.__alloyId1682.add($.__views.__alloyId1684);
    $.__views.__alloyId1685 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
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
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
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
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1689"
    });
    $.__views.__alloyId1688.add($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
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
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1692"
    });
    $.__views.__alloyId1691.add($.__views.__alloyId1692);
    $.__views.__alloyId1693 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var rate;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1543!click!back"] && $.__views.__alloyId1543.addEventListener("click", back);
    __defers["$.__views.rateLabel!click!showPicker"] && $.__views.rateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1544!click!showPicker"] && $.__views.__alloyId1544.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1694!click!subscribe"] && $.__views.__alloyId1694.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;