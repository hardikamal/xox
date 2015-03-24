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
    $.__views.__alloyId1617 = Alloy.createController("_header", {
        id: "__alloyId1617",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId1617.setParent($.__views.prepaid);
    $.__views.__alloyId1618 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1618"
    });
    $.__views.prepaid.add($.__views.__alloyId1618);
    $.__views.__alloyId1619 = Ti.UI.createLabel({
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1619"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1619);
    $.__views.__alloyId1620 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1620"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1620);
    back ? $.__views.__alloyId1620.addEventListener("click", back) : __defers["$.__views.__alloyId1620!click!back"] = true;
    $.__views.__alloyId1621 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        id: "__alloyId1621"
    });
    $.__views.prepaid.add($.__views.__alloyId1621);
    $.__views.__alloyId1622 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1622"
    });
    $.__views.__alloyId1621.add($.__views.__alloyId1622);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1622.add($.__views.picker);
    var __alloyId1623 = [];
    $.__views.__alloyId1624 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1624"
    });
    __alloyId1623.push($.__views.__alloyId1624);
    $.__views.__alloyId1625 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1625"
    });
    __alloyId1623.push($.__views.__alloyId1625);
    $.__views.__alloyId1626 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1626"
    });
    __alloyId1623.push($.__views.__alloyId1626);
    $.__views.__alloyId1627 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1627"
    });
    __alloyId1623.push($.__views.__alloyId1627);
    $.__views.picker.add(__alloyId1623);
    rate ? $.__views.picker.addEventListener("change", rate) : __defers["$.__views.picker!change!rate"] = true;
    $.__views.__alloyId1628 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1628"
    });
    $.__views.__alloyId1622.add($.__views.__alloyId1628);
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
    $.__views.__alloyId1629 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
        id: "__alloyId1629"
    });
    $.__views.view1.add($.__views.__alloyId1629);
    $.__views.__alloyId1630 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1630"
    });
    $.__views.__alloyId1629.add($.__views.__alloyId1630);
    $.__views.__alloyId1631 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1631"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1631);
    $.__views.__alloyId1632 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1632"
    });
    $.__views.__alloyId1629.add($.__views.__alloyId1632);
    $.__views.__alloyId1633 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1633"
    });
    $.__views.__alloyId1632.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1634"
    });
    $.__views.__alloyId1632.add($.__views.__alloyId1634);
    $.__views.__alloyId1635 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1635"
    });
    $.__views.__alloyId1629.add($.__views.__alloyId1635);
    $.__views.__alloyId1636 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1636"
    });
    $.__views.__alloyId1635.add($.__views.__alloyId1636);
    $.__views.__alloyId1637 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1637"
    });
    $.__views.__alloyId1635.add($.__views.__alloyId1637);
    $.__views.__alloyId1638 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1638"
    });
    $.__views.__alloyId1629.add($.__views.__alloyId1638);
    $.__views.__alloyId1639 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1639"
    });
    $.__views.__alloyId1638.add($.__views.__alloyId1639);
    $.__views.__alloyId1640 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1640"
    });
    $.__views.__alloyId1638.add($.__views.__alloyId1640);
    $.__views.__alloyId1641 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1641"
    });
    $.__views.view1.add($.__views.__alloyId1641);
    $.__views.__alloyId1642 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1642"
    });
    $.__views.__alloyId1641.add($.__views.__alloyId1642);
    $.__views.__alloyId1643 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1643"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1643);
    $.__views.__alloyId1644 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1644"
    });
    $.__views.__alloyId1641.add($.__views.__alloyId1644);
    $.__views.__alloyId1645 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1645"
    });
    $.__views.__alloyId1644.add($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1646"
    });
    $.__views.__alloyId1644.add($.__views.__alloyId1646);
    $.__views.__alloyId1647 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1647"
    });
    $.__views.__alloyId1641.add($.__views.__alloyId1647);
    $.__views.__alloyId1648 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1648"
    });
    $.__views.__alloyId1647.add($.__views.__alloyId1648);
    $.__views.__alloyId1649 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1649"
    });
    $.__views.__alloyId1647.add($.__views.__alloyId1649);
    $.__views.__alloyId1650 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1650"
    });
    $.__views.__alloyId1641.add($.__views.__alloyId1650);
    $.__views.__alloyId1651 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1651"
    });
    $.__views.__alloyId1650.add($.__views.__alloyId1651);
    $.__views.__alloyId1652 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1652"
    });
    $.__views.__alloyId1650.add($.__views.__alloyId1652);
    $.__views.__alloyId1653 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1653"
    });
    $.__views.__alloyId1641.add($.__views.__alloyId1653);
    $.__views.__alloyId1654 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1654"
    });
    $.__views.__alloyId1653.add($.__views.__alloyId1654);
    $.__views.__alloyId1655 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1655"
    });
    $.__views.__alloyId1653.add($.__views.__alloyId1655);
    $.__views.__alloyId1656 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1656"
    });
    $.__views.view1.add($.__views.__alloyId1656);
    $.__views.__alloyId1657 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1657"
    });
    $.__views.__alloyId1656.add($.__views.__alloyId1657);
    $.__views.__alloyId1658 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1658"
    });
    $.__views.__alloyId1657.add($.__views.__alloyId1658);
    $.__views.__alloyId1659 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1659"
    });
    $.__views.__alloyId1656.add($.__views.__alloyId1659);
    $.__views.__alloyId1660 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1660"
    });
    $.__views.__alloyId1659.add($.__views.__alloyId1660);
    $.__views.__alloyId1661 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1661"
    });
    $.__views.__alloyId1659.add($.__views.__alloyId1661);
    $.__views.__alloyId1662 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1662"
    });
    $.__views.__alloyId1656.add($.__views.__alloyId1662);
    $.__views.__alloyId1663 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1663"
    });
    $.__views.__alloyId1662.add($.__views.__alloyId1663);
    $.__views.__alloyId1664 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1664"
    });
    $.__views.__alloyId1662.add($.__views.__alloyId1664);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
    $.__views.__alloyId1665 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
        id: "__alloyId1665"
    });
    $.__views.view2.add($.__views.__alloyId1665);
    $.__views.__alloyId1666 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1666"
    });
    $.__views.__alloyId1665.add($.__views.__alloyId1666);
    $.__views.__alloyId1667 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1667"
    });
    $.__views.__alloyId1666.add($.__views.__alloyId1667);
    $.__views.__alloyId1668 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1668"
    });
    $.__views.__alloyId1665.add($.__views.__alloyId1668);
    $.__views.__alloyId1669 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1669"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1669);
    $.__views.__alloyId1670 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1670"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1670);
    $.__views.__alloyId1671 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1671"
    });
    $.__views.__alloyId1665.add($.__views.__alloyId1671);
    $.__views.__alloyId1672 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1672"
    });
    $.__views.__alloyId1671.add($.__views.__alloyId1672);
    $.__views.__alloyId1673 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1673"
    });
    $.__views.__alloyId1671.add($.__views.__alloyId1673);
    $.__views.__alloyId1674 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1674"
    });
    $.__views.__alloyId1665.add($.__views.__alloyId1674);
    $.__views.__alloyId1675 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1675"
    });
    $.__views.__alloyId1674.add($.__views.__alloyId1675);
    $.__views.__alloyId1676 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1676"
    });
    $.__views.__alloyId1674.add($.__views.__alloyId1676);
    $.__views.__alloyId1677 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1677"
    });
    $.__views.view2.add($.__views.__alloyId1677);
    $.__views.__alloyId1678 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1678"
    });
    $.__views.__alloyId1677.add($.__views.__alloyId1678);
    $.__views.__alloyId1679 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1679"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1679);
    $.__views.__alloyId1680 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1680"
    });
    $.__views.__alloyId1677.add($.__views.__alloyId1680);
    $.__views.__alloyId1681 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1681"
    });
    $.__views.__alloyId1680.add($.__views.__alloyId1681);
    $.__views.__alloyId1682 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1682"
    });
    $.__views.__alloyId1680.add($.__views.__alloyId1682);
    $.__views.__alloyId1683 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1683"
    });
    $.__views.__alloyId1677.add($.__views.__alloyId1683);
    $.__views.__alloyId1684 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1684"
    });
    $.__views.__alloyId1683.add($.__views.__alloyId1684);
    $.__views.__alloyId1685 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1685"
    });
    $.__views.__alloyId1683.add($.__views.__alloyId1685);
    $.__views.__alloyId1686 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1686"
    });
    $.__views.__alloyId1677.add($.__views.__alloyId1686);
    $.__views.__alloyId1687 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1687"
    });
    $.__views.__alloyId1686.add($.__views.__alloyId1687);
    $.__views.__alloyId1688 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1688"
    });
    $.__views.__alloyId1686.add($.__views.__alloyId1688);
    $.__views.__alloyId1689 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1689"
    });
    $.__views.__alloyId1677.add($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1690"
    });
    $.__views.__alloyId1689.add($.__views.__alloyId1690);
    $.__views.__alloyId1691 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1691"
    });
    $.__views.__alloyId1689.add($.__views.__alloyId1691);
    $.__views.__alloyId1692 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1692"
    });
    $.__views.view2.add($.__views.__alloyId1692);
    $.__views.__alloyId1693 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1693"
    });
    $.__views.__alloyId1692.add($.__views.__alloyId1693);
    $.__views.__alloyId1694 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1694"
    });
    $.__views.__alloyId1693.add($.__views.__alloyId1694);
    $.__views.__alloyId1695 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1695"
    });
    $.__views.__alloyId1692.add($.__views.__alloyId1695);
    $.__views.__alloyId1696 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1696"
    });
    $.__views.__alloyId1695.add($.__views.__alloyId1696);
    $.__views.__alloyId1697 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1697"
    });
    $.__views.__alloyId1695.add($.__views.__alloyId1697);
    $.__views.__alloyId1698 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1698"
    });
    $.__views.__alloyId1692.add($.__views.__alloyId1698);
    $.__views.__alloyId1699 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1699"
    });
    $.__views.__alloyId1698.add($.__views.__alloyId1699);
    $.__views.__alloyId1700 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1700"
    });
    $.__views.__alloyId1698.add($.__views.__alloyId1700);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
    $.__views.__alloyId1701 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
        id: "__alloyId1701"
    });
    $.__views.view3.add($.__views.__alloyId1701);
    $.__views.__alloyId1702 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1702"
    });
    $.__views.__alloyId1701.add($.__views.__alloyId1702);
    $.__views.__alloyId1703 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1703"
    });
    $.__views.__alloyId1702.add($.__views.__alloyId1703);
    $.__views.__alloyId1704 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1704"
    });
    $.__views.__alloyId1701.add($.__views.__alloyId1704);
    $.__views.__alloyId1705 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1705"
    });
    $.__views.__alloyId1704.add($.__views.__alloyId1705);
    $.__views.__alloyId1706 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1706"
    });
    $.__views.__alloyId1704.add($.__views.__alloyId1706);
    $.__views.__alloyId1707 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1707"
    });
    $.__views.__alloyId1701.add($.__views.__alloyId1707);
    $.__views.__alloyId1708 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1708"
    });
    $.__views.__alloyId1707.add($.__views.__alloyId1708);
    $.__views.__alloyId1709 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1709"
    });
    $.__views.__alloyId1707.add($.__views.__alloyId1709);
    $.__views.__alloyId1710 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1710"
    });
    $.__views.__alloyId1701.add($.__views.__alloyId1710);
    $.__views.__alloyId1711 = Ti.UI.createLabel({
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1711"
    });
    $.__views.__alloyId1710.add($.__views.__alloyId1711);
    $.__views.__alloyId1712 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1712"
    });
    $.__views.__alloyId1710.add($.__views.__alloyId1712);
    $.__views.__alloyId1713 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1713"
    });
    $.__views.view3.add($.__views.__alloyId1713);
    $.__views.__alloyId1714 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1714"
    });
    $.__views.__alloyId1713.add($.__views.__alloyId1714);
    $.__views.__alloyId1715 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1715"
    });
    $.__views.__alloyId1714.add($.__views.__alloyId1715);
    $.__views.__alloyId1716 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1716"
    });
    $.__views.__alloyId1713.add($.__views.__alloyId1716);
    $.__views.__alloyId1717 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1717"
    });
    $.__views.__alloyId1716.add($.__views.__alloyId1717);
    $.__views.__alloyId1718 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1718"
    });
    $.__views.__alloyId1716.add($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1719"
    });
    $.__views.__alloyId1713.add($.__views.__alloyId1719);
    $.__views.__alloyId1720 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1720"
    });
    $.__views.__alloyId1719.add($.__views.__alloyId1720);
    $.__views.__alloyId1721 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1721"
    });
    $.__views.__alloyId1719.add($.__views.__alloyId1721);
    $.__views.__alloyId1722 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1722"
    });
    $.__views.__alloyId1713.add($.__views.__alloyId1722);
    $.__views.__alloyId1723 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1723"
    });
    $.__views.__alloyId1722.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1724"
    });
    $.__views.__alloyId1722.add($.__views.__alloyId1724);
    $.__views.__alloyId1725 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1725"
    });
    $.__views.__alloyId1713.add($.__views.__alloyId1725);
    $.__views.__alloyId1726 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1726"
    });
    $.__views.__alloyId1725.add($.__views.__alloyId1726);
    $.__views.__alloyId1727 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1727"
    });
    $.__views.__alloyId1725.add($.__views.__alloyId1727);
    $.__views.__alloyId1728 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1728"
    });
    $.__views.view3.add($.__views.__alloyId1728);
    $.__views.__alloyId1729 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1729"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1729);
    $.__views.__alloyId1730 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1730"
    });
    $.__views.__alloyId1729.add($.__views.__alloyId1730);
    $.__views.__alloyId1731 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1731"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1731);
    $.__views.__alloyId1732 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1732"
    });
    $.__views.__alloyId1731.add($.__views.__alloyId1732);
    $.__views.__alloyId1733 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1733"
    });
    $.__views.__alloyId1731.add($.__views.__alloyId1733);
    $.__views.__alloyId1734 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1734"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1734);
    $.__views.__alloyId1735 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1735"
    });
    $.__views.__alloyId1734.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1736"
    });
    $.__views.__alloyId1734.add($.__views.__alloyId1736);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
    $.__views.__alloyId1737 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
        id: "__alloyId1737"
    });
    $.__views.view4.add($.__views.__alloyId1737);
    $.__views.__alloyId1738 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1738"
    });
    $.__views.__alloyId1737.add($.__views.__alloyId1738);
    $.__views.__alloyId1739 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1739"
    });
    $.__views.__alloyId1738.add($.__views.__alloyId1739);
    $.__views.__alloyId1740 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1740"
    });
    $.__views.__alloyId1737.add($.__views.__alloyId1740);
    $.__views.__alloyId1741 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1741"
    });
    $.__views.__alloyId1740.add($.__views.__alloyId1741);
    $.__views.__alloyId1742 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1742"
    });
    $.__views.__alloyId1740.add($.__views.__alloyId1742);
    $.__views.__alloyId1743 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1743"
    });
    $.__views.__alloyId1737.add($.__views.__alloyId1743);
    $.__views.__alloyId1744 = Ti.UI.createLabel({
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1744"
    });
    $.__views.__alloyId1743.add($.__views.__alloyId1744);
    $.__views.__alloyId1745 = Ti.UI.createLabel({
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1745"
    });
    $.__views.__alloyId1743.add($.__views.__alloyId1745);
    $.__views.__alloyId1746 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1746"
    });
    $.__views.__alloyId1737.add($.__views.__alloyId1746);
    $.__views.__alloyId1747 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1747"
    });
    $.__views.__alloyId1746.add($.__views.__alloyId1747);
    $.__views.__alloyId1748 = Ti.UI.createLabel({
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1748"
    });
    $.__views.__alloyId1746.add($.__views.__alloyId1748);
    $.__views.__alloyId1749 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1749"
    });
    $.__views.view4.add($.__views.__alloyId1749);
    $.__views.__alloyId1750 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1750"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1750);
    $.__views.__alloyId1751 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1751"
    });
    $.__views.__alloyId1750.add($.__views.__alloyId1751);
    $.__views.__alloyId1752 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1752"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1752);
    $.__views.__alloyId1753 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1753"
    });
    $.__views.__alloyId1752.add($.__views.__alloyId1753);
    $.__views.__alloyId1754 = Ti.UI.createLabel({
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1754"
    });
    $.__views.__alloyId1752.add($.__views.__alloyId1754);
    $.__views.__alloyId1755 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1755"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1755);
    $.__views.__alloyId1756 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1756"
    });
    $.__views.__alloyId1755.add($.__views.__alloyId1756);
    $.__views.__alloyId1757 = Ti.UI.createLabel({
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1757"
    });
    $.__views.__alloyId1755.add($.__views.__alloyId1757);
    $.__views.__alloyId1758 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1758"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1758);
    $.__views.__alloyId1759 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1759"
    });
    $.__views.__alloyId1758.add($.__views.__alloyId1759);
    $.__views.__alloyId1760 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1760"
    });
    $.__views.__alloyId1758.add($.__views.__alloyId1760);
    $.__views.__alloyId1761 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1761"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1761);
    $.__views.__alloyId1762 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1762"
    });
    $.__views.__alloyId1761.add($.__views.__alloyId1762);
    $.__views.__alloyId1763 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1763"
    });
    $.__views.__alloyId1761.add($.__views.__alloyId1763);
    $.__views.__alloyId1764 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1764"
    });
    $.__views.view4.add($.__views.__alloyId1764);
    $.__views.__alloyId1765 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1765"
    });
    $.__views.__alloyId1764.add($.__views.__alloyId1765);
    $.__views.__alloyId1766 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1766"
    });
    $.__views.__alloyId1765.add($.__views.__alloyId1766);
    $.__views.__alloyId1767 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1767"
    });
    $.__views.__alloyId1764.add($.__views.__alloyId1767);
    $.__views.__alloyId1768 = Ti.UI.createLabel({
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1768"
    });
    $.__views.__alloyId1767.add($.__views.__alloyId1768);
    $.__views.__alloyId1769 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1769"
    });
    $.__views.__alloyId1767.add($.__views.__alloyId1769);
    $.__views.__alloyId1770 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1770"
    });
    $.__views.__alloyId1764.add($.__views.__alloyId1770);
    $.__views.__alloyId1771 = Ti.UI.createLabel({
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1771"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1771);
    $.__views.__alloyId1772 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1772"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1772);
    $.__views.__alloyId1773 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1773"
    });
    $.__views.prepaid.add($.__views.__alloyId1773);
    subscribe ? $.__views.__alloyId1773.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1773!click!subscribe"] = true;
    $.__views.__alloyId1774 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1774"
    });
    $.__views.__alloyId1773.add($.__views.__alloyId1774);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var rate;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1620!click!back"] && $.__views.__alloyId1620.addEventListener("click", back);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1773!click!subscribe"] && $.__views.__alloyId1773.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;