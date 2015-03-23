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
    $.__views.__alloyId1558 = Alloy.createController("_header", {
        id: "__alloyId1558",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId1558.setParent($.__views.prepaid);
    $.__views.__alloyId1559 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1559"
    });
    $.__views.prepaid.add($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1560"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1561"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1561);
    back ? $.__views.__alloyId1561.addEventListener("click", back) : __defers["$.__views.__alloyId1561!click!back"] = true;
    $.__views.__alloyId1562 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        id: "__alloyId1562"
    });
    $.__views.prepaid.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1563"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1563);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1563.add($.__views.picker);
    var __alloyId1564 = [];
    $.__views.__alloyId1565 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1565"
    });
    __alloyId1564.push($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1566"
    });
    __alloyId1564.push($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1567"
    });
    __alloyId1564.push($.__views.__alloyId1567);
    $.__views.__alloyId1568 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1568"
    });
    __alloyId1564.push($.__views.__alloyId1568);
    $.__views.picker.add(__alloyId1564);
    rate ? $.__views.picker.addEventListener("change", rate) : __defers["$.__views.picker!change!rate"] = true;
    $.__views.__alloyId1569 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1569"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1569);
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
    $.__views.__alloyId1570 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId1570"
    });
    $.__views.view1.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1571"
    });
    $.__views.__alloyId1570.add($.__views.__alloyId1571);
    $.__views.__alloyId1572 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1572"
    });
    $.__views.__alloyId1571.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1573"
    });
    $.__views.__alloyId1570.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1574"
    });
    $.__views.__alloyId1573.add($.__views.__alloyId1574);
    $.__views.__alloyId1575 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1575"
    });
    $.__views.__alloyId1573.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1576"
    });
    $.__views.__alloyId1570.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1577"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1578"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1579"
    });
    $.__views.__alloyId1570.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1580"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1580);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1581"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1582"
    });
    $.__views.view1.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1583"
    });
    $.__views.__alloyId1582.add($.__views.__alloyId1583);
    $.__views.__alloyId1584 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1584"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1584);
    $.__views.__alloyId1585 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1585"
    });
    $.__views.__alloyId1582.add($.__views.__alloyId1585);
    $.__views.__alloyId1586 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1586"
    });
    $.__views.__alloyId1585.add($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1587"
    });
    $.__views.__alloyId1585.add($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1588"
    });
    $.__views.__alloyId1582.add($.__views.__alloyId1588);
    $.__views.__alloyId1589 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1589"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1589);
    $.__views.__alloyId1590 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1590"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1591"
    });
    $.__views.__alloyId1582.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1592"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1592);
    $.__views.__alloyId1593 = Ti.UI.createLabel({
        text: "50cent",
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
    $.__views.__alloyId1582.add($.__views.__alloyId1594);
    $.__views.__alloyId1595 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1595"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1595);
    $.__views.__alloyId1596 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1596"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1596);
    $.__views.__alloyId1597 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1597"
    });
    $.__views.view1.add($.__views.__alloyId1597);
    $.__views.__alloyId1598 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1598"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1598);
    $.__views.__alloyId1599 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1599"
    });
    $.__views.__alloyId1598.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1600"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1600);
    $.__views.__alloyId1601 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1601"
    });
    $.__views.__alloyId1600.add($.__views.__alloyId1601);
    $.__views.__alloyId1602 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1602"
    });
    $.__views.__alloyId1600.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1603"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1603);
    $.__views.__alloyId1604 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1604"
    });
    $.__views.__alloyId1603.add($.__views.__alloyId1604);
    $.__views.__alloyId1605 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1605"
    });
    $.__views.__alloyId1603.add($.__views.__alloyId1605);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId1606 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId1606"
    });
    $.__views.view2.add($.__views.__alloyId1606);
    $.__views.__alloyId1607 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1607"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1607);
    $.__views.__alloyId1608 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1608"
    });
    $.__views.__alloyId1607.add($.__views.__alloyId1608);
    $.__views.__alloyId1609 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1609"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1610"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1611"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1611);
    $.__views.__alloyId1612 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1612"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1612);
    $.__views.__alloyId1613 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1613"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1613);
    $.__views.__alloyId1614 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1614"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1614);
    $.__views.__alloyId1615 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1615"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1615);
    $.__views.__alloyId1616 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1616"
    });
    $.__views.__alloyId1615.add($.__views.__alloyId1616);
    $.__views.__alloyId1617 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1617"
    });
    $.__views.__alloyId1615.add($.__views.__alloyId1617);
    $.__views.__alloyId1618 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1618"
    });
    $.__views.view2.add($.__views.__alloyId1618);
    $.__views.__alloyId1619 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1619"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1619);
    $.__views.__alloyId1620 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1620"
    });
    $.__views.__alloyId1619.add($.__views.__alloyId1620);
    $.__views.__alloyId1621 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1621"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1621);
    $.__views.__alloyId1622 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1622"
    });
    $.__views.__alloyId1621.add($.__views.__alloyId1622);
    $.__views.__alloyId1623 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1623"
    });
    $.__views.__alloyId1621.add($.__views.__alloyId1623);
    $.__views.__alloyId1624 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1624"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1624);
    $.__views.__alloyId1625 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1625"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1625);
    $.__views.__alloyId1626 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1626"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1626);
    $.__views.__alloyId1627 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1627"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1627);
    $.__views.__alloyId1628 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1628"
    });
    $.__views.__alloyId1627.add($.__views.__alloyId1628);
    $.__views.__alloyId1629 = Ti.UI.createLabel({
        text: "50cent",
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
    $.__views.__alloyId1618.add($.__views.__alloyId1630);
    $.__views.__alloyId1631 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1631"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1631);
    $.__views.__alloyId1632 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1632"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1632);
    $.__views.__alloyId1633 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1633"
    });
    $.__views.view2.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1634"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1634);
    $.__views.__alloyId1635 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1635"
    });
    $.__views.__alloyId1634.add($.__views.__alloyId1635);
    $.__views.__alloyId1636 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1636"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1636);
    $.__views.__alloyId1637 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1637"
    });
    $.__views.__alloyId1636.add($.__views.__alloyId1637);
    $.__views.__alloyId1638 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1638"
    });
    $.__views.__alloyId1636.add($.__views.__alloyId1638);
    $.__views.__alloyId1639 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1639"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1639);
    $.__views.__alloyId1640 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1640"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1640);
    $.__views.__alloyId1641 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1641"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1641);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId1642 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId1642"
    });
    $.__views.view3.add($.__views.__alloyId1642);
    $.__views.__alloyId1643 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1643"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1643);
    $.__views.__alloyId1644 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1644"
    });
    $.__views.__alloyId1643.add($.__views.__alloyId1644);
    $.__views.__alloyId1645 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1645"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1646"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1646);
    $.__views.__alloyId1647 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1647"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1647);
    $.__views.__alloyId1648 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1648"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1648);
    $.__views.__alloyId1649 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1649"
    });
    $.__views.__alloyId1648.add($.__views.__alloyId1649);
    $.__views.__alloyId1650 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1650"
    });
    $.__views.__alloyId1648.add($.__views.__alloyId1650);
    $.__views.__alloyId1651 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1651"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1651);
    $.__views.__alloyId1652 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1652"
    });
    $.__views.__alloyId1651.add($.__views.__alloyId1652);
    $.__views.__alloyId1653 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1653"
    });
    $.__views.__alloyId1651.add($.__views.__alloyId1653);
    $.__views.__alloyId1654 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1654"
    });
    $.__views.view3.add($.__views.__alloyId1654);
    $.__views.__alloyId1655 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1655"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1655);
    $.__views.__alloyId1656 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1656"
    });
    $.__views.__alloyId1655.add($.__views.__alloyId1656);
    $.__views.__alloyId1657 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1657"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1657);
    $.__views.__alloyId1658 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1658"
    });
    $.__views.__alloyId1657.add($.__views.__alloyId1658);
    $.__views.__alloyId1659 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1659"
    });
    $.__views.__alloyId1657.add($.__views.__alloyId1659);
    $.__views.__alloyId1660 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1660"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1660);
    $.__views.__alloyId1661 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1661"
    });
    $.__views.__alloyId1660.add($.__views.__alloyId1661);
    $.__views.__alloyId1662 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1662"
    });
    $.__views.__alloyId1660.add($.__views.__alloyId1662);
    $.__views.__alloyId1663 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1663"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1663);
    $.__views.__alloyId1664 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1664"
    });
    $.__views.__alloyId1663.add($.__views.__alloyId1664);
    $.__views.__alloyId1665 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1665"
    });
    $.__views.__alloyId1663.add($.__views.__alloyId1665);
    $.__views.__alloyId1666 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1666"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1666);
    $.__views.__alloyId1667 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1667"
    });
    $.__views.__alloyId1666.add($.__views.__alloyId1667);
    $.__views.__alloyId1668 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1668"
    });
    $.__views.__alloyId1666.add($.__views.__alloyId1668);
    $.__views.__alloyId1669 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1669"
    });
    $.__views.view3.add($.__views.__alloyId1669);
    $.__views.__alloyId1670 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1670"
    });
    $.__views.__alloyId1669.add($.__views.__alloyId1670);
    $.__views.__alloyId1671 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1671"
    });
    $.__views.__alloyId1670.add($.__views.__alloyId1671);
    $.__views.__alloyId1672 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1672"
    });
    $.__views.__alloyId1669.add($.__views.__alloyId1672);
    $.__views.__alloyId1673 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1673"
    });
    $.__views.__alloyId1672.add($.__views.__alloyId1673);
    $.__views.__alloyId1674 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1674"
    });
    $.__views.__alloyId1672.add($.__views.__alloyId1674);
    $.__views.__alloyId1675 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1675"
    });
    $.__views.__alloyId1669.add($.__views.__alloyId1675);
    $.__views.__alloyId1676 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1676"
    });
    $.__views.__alloyId1675.add($.__views.__alloyId1676);
    $.__views.__alloyId1677 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1677"
    });
    $.__views.__alloyId1675.add($.__views.__alloyId1677);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId1678 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId1678"
    });
    $.__views.view4.add($.__views.__alloyId1678);
    $.__views.__alloyId1679 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1679"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1679);
    $.__views.__alloyId1680 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1680"
    });
    $.__views.__alloyId1679.add($.__views.__alloyId1680);
    $.__views.__alloyId1681 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1681"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1681);
    $.__views.__alloyId1682 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1682"
    });
    $.__views.__alloyId1681.add($.__views.__alloyId1682);
    $.__views.__alloyId1683 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1683"
    });
    $.__views.__alloyId1681.add($.__views.__alloyId1683);
    $.__views.__alloyId1684 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1684"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1684);
    $.__views.__alloyId1685 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1685"
    });
    $.__views.__alloyId1684.add($.__views.__alloyId1685);
    $.__views.__alloyId1686 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1686"
    });
    $.__views.__alloyId1684.add($.__views.__alloyId1686);
    $.__views.__alloyId1687 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1687"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1687);
    $.__views.__alloyId1688 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1688"
    });
    $.__views.__alloyId1687.add($.__views.__alloyId1688);
    $.__views.__alloyId1689 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1689"
    });
    $.__views.__alloyId1687.add($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1690"
    });
    $.__views.view4.add($.__views.__alloyId1690);
    $.__views.__alloyId1691 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1691"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1691);
    $.__views.__alloyId1692 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1692"
    });
    $.__views.__alloyId1691.add($.__views.__alloyId1692);
    $.__views.__alloyId1693 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1693"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1693);
    $.__views.__alloyId1694 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1694"
    });
    $.__views.__alloyId1693.add($.__views.__alloyId1694);
    $.__views.__alloyId1695 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1695"
    });
    $.__views.__alloyId1693.add($.__views.__alloyId1695);
    $.__views.__alloyId1696 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1696"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1696);
    $.__views.__alloyId1697 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1697"
    });
    $.__views.__alloyId1696.add($.__views.__alloyId1697);
    $.__views.__alloyId1698 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1698"
    });
    $.__views.__alloyId1696.add($.__views.__alloyId1698);
    $.__views.__alloyId1699 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1699"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1699);
    $.__views.__alloyId1700 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1700"
    });
    $.__views.__alloyId1699.add($.__views.__alloyId1700);
    $.__views.__alloyId1701 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1701"
    });
    $.__views.__alloyId1699.add($.__views.__alloyId1701);
    $.__views.__alloyId1702 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1702"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1702);
    $.__views.__alloyId1703 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1703"
    });
    $.__views.__alloyId1702.add($.__views.__alloyId1703);
    $.__views.__alloyId1704 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1704"
    });
    $.__views.__alloyId1702.add($.__views.__alloyId1704);
    $.__views.__alloyId1705 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1705"
    });
    $.__views.view4.add($.__views.__alloyId1705);
    $.__views.__alloyId1706 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1706"
    });
    $.__views.__alloyId1705.add($.__views.__alloyId1706);
    $.__views.__alloyId1707 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1707"
    });
    $.__views.__alloyId1706.add($.__views.__alloyId1707);
    $.__views.__alloyId1708 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1708"
    });
    $.__views.__alloyId1705.add($.__views.__alloyId1708);
    $.__views.__alloyId1709 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1709"
    });
    $.__views.__alloyId1708.add($.__views.__alloyId1709);
    $.__views.__alloyId1710 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1710"
    });
    $.__views.__alloyId1708.add($.__views.__alloyId1710);
    $.__views.__alloyId1711 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1711"
    });
    $.__views.__alloyId1705.add($.__views.__alloyId1711);
    $.__views.__alloyId1712 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1712"
    });
    $.__views.__alloyId1711.add($.__views.__alloyId1712);
    $.__views.__alloyId1713 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1713"
    });
    $.__views.__alloyId1711.add($.__views.__alloyId1713);
    $.__views.__alloyId1714 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1714"
    });
    $.__views.prepaid.add($.__views.__alloyId1714);
    subscribe ? $.__views.__alloyId1714.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1714!click!subscribe"] = true;
    $.__views.__alloyId1715 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1715"
    });
    $.__views.__alloyId1714.add($.__views.__alloyId1715);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var rate;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1561!click!back"] && $.__views.__alloyId1561.addEventListener("click", back);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1714!click!subscribe"] && $.__views.__alloyId1714.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;