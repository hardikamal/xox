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
        DRAWER.navigation("onlinePurchases", 1);
    }
    function highSpeed(e) {
        console.log("e.value: " + e.value);
    }
    function next() {
        DRAWER.navigation("prepaidPack2", 1);
        console.log("next");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack";
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
    $.__views.prepaidPack = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack"
    });
    $.__views.prepaidPack && $.addTopLevelView($.__views.prepaidPack);
<<<<<<< HEAD
    $.__views.__alloyId1531 = Alloy.createController("_header", {
        id: "__alloyId1531",
=======
<<<<<<< HEAD
    $.__views.__alloyId1696 = Alloy.createController("_header", {
        id: "__alloyId1696",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1696.setParent($.__views.prepaidPack);
    $.__views.__alloyId1697 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1697"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1697);
    $.__views.__alloyId1698 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1199 = Alloy.createController("_header", {
        id: "__alloyId1199",
>>>>>>> origin/master
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1531.setParent($.__views.prepaidPack);
    $.__views.__alloyId1532 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1532"
    });
<<<<<<< HEAD
    $.__views.prepaidPack.add($.__views.__alloyId1532);
    $.__views.__alloyId1533 = Ti.UI.createLabel({
=======
    $.__views.prepaidPack.add($.__views.__alloyId1200);
    $.__views.__alloyId1201 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1533"
    });
    $.__views.__alloyId1532.add($.__views.__alloyId1533);
    $.__views.__alloyId1534 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1698"
    });
    $.__views.__alloyId1697.add($.__views.__alloyId1698);
    $.__views.__alloyId1699 = Ti.UI.createImageView({
=======
        id: "__alloyId1201"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1534"
=======
<<<<<<< HEAD
        id: "__alloyId1699"
    });
    $.__views.__alloyId1697.add($.__views.__alloyId1699);
    back ? $.__views.__alloyId1699.addEventListener("click", back) : __defers["$.__views.__alloyId1699!click!back"] = true;
    $.__views.__alloyId1700 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1700"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1700);
    $.__views.__alloyId1701 = Ti.UI.createLabel({
=======
        id: "__alloyId1202"
>>>>>>> origin/master
    });
    $.__views.__alloyId1532.add($.__views.__alloyId1534);
    back ? $.__views.__alloyId1534.addEventListener("click", back) : __defers["$.__views.__alloyId1534!click!back"] = true;
    $.__views.__alloyId1535 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1535"
    });
<<<<<<< HEAD
    $.__views.prepaidPack.add($.__views.__alloyId1535);
    $.__views.__alloyId1536 = Ti.UI.createLabel({
=======
    $.__views.prepaidPack.add($.__views.__alloyId1203);
    $.__views.__alloyId1204 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1536"
    });
    $.__views.__alloyId1535.add($.__views.__alloyId1536);
    $.__views.__alloyId1537 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1701"
    });
    $.__views.__alloyId1700.add($.__views.__alloyId1701);
    $.__views.__alloyId1702 = Ti.UI.createLabel({
=======
        id: "__alloyId1204"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1537"
    });
    $.__views.__alloyId1535.add($.__views.__alloyId1537);
=======
<<<<<<< HEAD
        id: "__alloyId1702"
    });
    $.__views.__alloyId1700.add($.__views.__alloyId1702);
=======
        id: "__alloyId1205"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1205);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
<<<<<<< HEAD
    $.__views.__alloyId1538 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1703 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1206 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1538"
    });
    $.__views.contentView.add($.__views.__alloyId1538);
=======
<<<<<<< HEAD
        id: "__alloyId1703"
    });
    $.__views.contentView.add($.__views.__alloyId1703);
=======
        id: "__alloyId1206"
    });
    $.__views.contentView.add($.__views.__alloyId1206);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.simLabel = Ti.UI.createLabel({
        id: "simLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.simLabel);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
<<<<<<< HEAD
    var __alloyId1539 = [];
    $.__views.__alloyId1540 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId1704 = [];
    $.__views.__alloyId1705 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1705"
    });
    __alloyId1704.push($.__views.__alloyId1705);
    $.__views.__alloyId1706 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1706"
    });
    __alloyId1704.push($.__views.__alloyId1706);
    $.__views.__alloyId1707 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1707"
    });
    __alloyId1704.push($.__views.__alloyId1707);
    $.__views.picker.add(__alloyId1704);
    $.__views.__alloyId1708 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1708"
    });
    $.__views.scrollView.add($.__views.__alloyId1708);
    $.__views.__alloyId1709 = Ti.UI.createLabel({
=======
    var __alloyId1207 = [];
    $.__views.__alloyId1208 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "Standard SIM",
        id: "__alloyId1540"
    });
    __alloyId1539.push($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1541"
    });
    __alloyId1539.push($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1542"
    });
    __alloyId1539.push($.__views.__alloyId1542);
    $.__views.picker.add(__alloyId1539);
    $.__views.__alloyId1543 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1543"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1543);
    $.__views.__alloyId1544 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
<<<<<<< HEAD
        id: "__alloyId1544"
=======
<<<<<<< HEAD
        id: "__alloyId1709"
    });
    $.__views.__alloyId1708.add($.__views.__alloyId1709);
    $.__views.__alloyId1710 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1710"
    });
    $.__views.__alloyId1708.add($.__views.__alloyId1710);
=======
        id: "__alloyId1212"
>>>>>>> origin/master
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1545"
    });
<<<<<<< HEAD
    $.__views.__alloyId1543.add($.__views.__alloyId1545);
=======
    $.__views.__alloyId1211.add($.__views.__alloyId1213);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
<<<<<<< HEAD
    $.__views.__alloyId1545.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1546 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1710.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1711 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1213.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1214 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1546"
=======
<<<<<<< HEAD
        id: "__alloyId1711"
    });
    $.__views.__alloyId1710.add($.__views.__alloyId1711);
    $.__views.__alloyId1712 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1712"
    });
    $.__views.scrollView.add($.__views.__alloyId1712);
    $.__views.__alloyId1713 = Ti.UI.createLabel({
=======
        id: "__alloyId1214"
>>>>>>> origin/master
    });
    $.__views.__alloyId1545.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1547"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId1215);
    $.__views.__alloyId1216 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1548"
=======
<<<<<<< HEAD
        id: "__alloyId1713"
    });
    $.__views.__alloyId1712.add($.__views.__alloyId1713);
    $.__views.__alloyId1714 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1714"
    });
    $.__views.__alloyId1712.add($.__views.__alloyId1714);
    $.__views.__alloyId1715 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1715"
    });
    $.__views.__alloyId1714.add($.__views.__alloyId1715);
=======
        id: "__alloyId1216"
>>>>>>> origin/master
    });
    $.__views.__alloyId1547.add($.__views.__alloyId1548);
    $.__views.__alloyId1549 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1549"
    });
    $.__views.__alloyId1547.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1550"
    });
<<<<<<< HEAD
    $.__views.__alloyId1549.add($.__views.__alloyId1550);
=======
    $.__views.__alloyId1217.add($.__views.__alloyId1218);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1550.add($.__views.switch2);
    $.__views.__alloyId1551 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1715.add($.__views.switch2);
    $.__views.__alloyId1716 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1218.add($.__views.switch2);
    $.__views.__alloyId1219 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1551"
=======
<<<<<<< HEAD
        id: "__alloyId1716"
    });
    $.__views.__alloyId1715.add($.__views.__alloyId1716);
    $.__views.__alloyId1717 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1717"
    });
    $.__views.__alloyId1714.add($.__views.__alloyId1717);
=======
        id: "__alloyId1219"
>>>>>>> origin/master
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1551);
    $.__views.__alloyId1552 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1552"
    });
<<<<<<< HEAD
    $.__views.__alloyId1549.add($.__views.__alloyId1552);
=======
    $.__views.__alloyId1217.add($.__views.__alloyId1220);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1552.add($.__views.switch3);
    $.__views.__alloyId1553 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1717.add($.__views.switch3);
    $.__views.__alloyId1718 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1220.add($.__views.switch3);
    $.__views.__alloyId1221 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1553"
=======
<<<<<<< HEAD
        id: "__alloyId1718"
    });
    $.__views.__alloyId1717.add($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1719"
    });
    $.__views.__alloyId1712.add($.__views.__alloyId1719);
    $.__views.__alloyId1720 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1720"
    });
    $.__views.__alloyId1719.add($.__views.__alloyId1720);
=======
        id: "__alloyId1221"
>>>>>>> origin/master
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1554"
    });
    $.__views.__alloyId1547.add($.__views.__alloyId1554);
    $.__views.__alloyId1555 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1555"
    });
<<<<<<< HEAD
    $.__views.__alloyId1554.add($.__views.__alloyId1555);
=======
    $.__views.__alloyId1222.add($.__views.__alloyId1223);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1555.add($.__views.switch4);
    $.__views.__alloyId1556 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1720.add($.__views.switch4);
    $.__views.__alloyId1721 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1223.add($.__views.switch4);
    $.__views.__alloyId1224 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1556"
=======
<<<<<<< HEAD
        id: "__alloyId1721"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1721);
    $.__views.__alloyId1722 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1722"
    });
    $.__views.__alloyId1719.add($.__views.__alloyId1722);
=======
        id: "__alloyId1224"
>>>>>>> origin/master
    });
    $.__views.__alloyId1555.add($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1557"
    });
<<<<<<< HEAD
    $.__views.__alloyId1554.add($.__views.__alloyId1557);
=======
    $.__views.__alloyId1222.add($.__views.__alloyId1225);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1557.add($.__views.switch5);
    $.__views.__alloyId1558 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1722.add($.__views.switch5);
    $.__views.__alloyId1723 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1225.add($.__views.switch5);
    $.__views.__alloyId1226 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1558"
=======
<<<<<<< HEAD
        id: "__alloyId1723"
    });
    $.__views.__alloyId1722.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1724"
    });
    $.__views.scrollView.add($.__views.__alloyId1724);
    $.__views.__alloyId1725 = Ti.UI.createLabel({
=======
        id: "__alloyId1226"
>>>>>>> origin/master
    });
    $.__views.__alloyId1557.add($.__views.__alloyId1558);
    $.__views.__alloyId1559 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1559"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId1227);
    $.__views.__alloyId1228 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1560"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createTextField({
=======
<<<<<<< HEAD
        id: "__alloyId1725"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1725);
    $.__views.__alloyId1726 = Ti.UI.createTextField({
=======
        id: "__alloyId1228"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1228);
    $.__views.__alloyId1229 = Ti.UI.createTextField({
>>>>>>> origin/master
>>>>>>> origin/master
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId1561"
=======
<<<<<<< HEAD
        id: "__alloyId1726"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1726);
    $.__views.__alloyId1727 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1727"
    });
    $.__views.scrollView.add($.__views.__alloyId1727);
    $.__views.__alloyId1728 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1728"
    });
    $.__views.__alloyId1727.add($.__views.__alloyId1728);
=======
        id: "__alloyId1229"
>>>>>>> origin/master
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1562"
    });
    $.__views.scrollView.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1563"
    });
<<<<<<< HEAD
    $.__views.__alloyId1562.add($.__views.__alloyId1563);
=======
    $.__views.__alloyId1230.add($.__views.__alloyId1231);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1563.add($.__views.switch6);
    $.__views.__alloyId1564 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1728.add($.__views.switch6);
    $.__views.__alloyId1729 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1231.add($.__views.switch6);
    $.__views.__alloyId1232 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1564"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1564);
=======
<<<<<<< HEAD
        id: "__alloyId1729"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1729);
=======
        id: "__alloyId1232"
    });
    $.__views.__alloyId1231.add($.__views.__alloyId1232);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1563.add($.__views.switch7);
    $.__views.__alloyId1565 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1728.add($.__views.switch7);
    $.__views.__alloyId1730 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1231.add($.__views.switch7);
    $.__views.__alloyId1233 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1565"
=======
<<<<<<< HEAD
        id: "__alloyId1730"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1730);
    $.__views.__alloyId1731 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1731"
    });
    $.__views.scrollView.add($.__views.__alloyId1731);
    $.__views.__alloyId1732 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1732"
    });
    $.__views.__alloyId1731.add($.__views.__alloyId1732);
=======
        id: "__alloyId1233"
>>>>>>> origin/master
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1566"
    });
    $.__views.scrollView.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1567"
    });
<<<<<<< HEAD
    $.__views.__alloyId1566.add($.__views.__alloyId1567);
=======
    $.__views.__alloyId1234.add($.__views.__alloyId1235);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1567.add($.__views.switch8);
    $.__views.__alloyId1568 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1732.add($.__views.switch8);
    $.__views.__alloyId1733 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1235.add($.__views.switch8);
    $.__views.__alloyId1236 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1568"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1568);
=======
<<<<<<< HEAD
        id: "__alloyId1733"
    });
    $.__views.__alloyId1732.add($.__views.__alloyId1733);
=======
        id: "__alloyId1236"
    });
    $.__views.__alloyId1235.add($.__views.__alloyId1236);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1567.add($.__views.switch9);
    $.__views.__alloyId1569 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1732.add($.__views.switch9);
    $.__views.__alloyId1734 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1235.add($.__views.switch9);
    $.__views.__alloyId1237 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1569"
=======
<<<<<<< HEAD
        id: "__alloyId1734"
    });
    $.__views.__alloyId1732.add($.__views.__alloyId1734);
    $.__views.__alloyId1735 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1735"
    });
    $.__views.scrollView.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1736"
    });
    $.__views.__alloyId1735.add($.__views.__alloyId1736);
=======
        id: "__alloyId1237"
>>>>>>> origin/master
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1570"
    });
    $.__views.scrollView.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1571"
    });
<<<<<<< HEAD
    $.__views.__alloyId1570.add($.__views.__alloyId1571);
=======
    $.__views.__alloyId1238.add($.__views.__alloyId1239);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1571.add($.__views.switch10);
    $.__views.__alloyId1572 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1736.add($.__views.switch10);
    $.__views.__alloyId1737 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1239.add($.__views.switch10);
    $.__views.__alloyId1240 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1572"
    });
    $.__views.__alloyId1571.add($.__views.__alloyId1572);
=======
<<<<<<< HEAD
        id: "__alloyId1737"
    });
    $.__views.__alloyId1736.add($.__views.__alloyId1737);
=======
        id: "__alloyId1240"
    });
    $.__views.__alloyId1239.add($.__views.__alloyId1240);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1571.add($.__views.switch11);
    $.__views.__alloyId1573 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1736.add($.__views.switch11);
    $.__views.__alloyId1738 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1239.add($.__views.switch11);
    $.__views.__alloyId1241 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1573"
=======
<<<<<<< HEAD
        id: "__alloyId1738"
    });
    $.__views.__alloyId1736.add($.__views.__alloyId1738);
    $.__views.__alloyId1739 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1739"
    });
    $.__views.scrollView.add($.__views.__alloyId1739);
    $.__views.__alloyId1740 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1740"
    });
    $.__views.__alloyId1739.add($.__views.__alloyId1740);
=======
        id: "__alloyId1241"
>>>>>>> origin/master
    });
    $.__views.__alloyId1571.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1574"
    });
    $.__views.scrollView.add($.__views.__alloyId1574);
    $.__views.__alloyId1575 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1575"
    });
<<<<<<< HEAD
    $.__views.__alloyId1574.add($.__views.__alloyId1575);
=======
    $.__views.__alloyId1242.add($.__views.__alloyId1243);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1575.add($.__views.switch12);
    $.__views.__alloyId1576 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1740.add($.__views.switch12);
    $.__views.__alloyId1741 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1243.add($.__views.switch12);
    $.__views.__alloyId1244 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1576"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1576);
=======
<<<<<<< HEAD
        id: "__alloyId1741"
    });
    $.__views.__alloyId1740.add($.__views.__alloyId1741);
=======
        id: "__alloyId1244"
    });
    $.__views.__alloyId1243.add($.__views.__alloyId1244);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1575.add($.__views.switch13);
    $.__views.__alloyId1577 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1740.add($.__views.switch13);
    $.__views.__alloyId1742 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1243.add($.__views.switch13);
    $.__views.__alloyId1245 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1577"
=======
<<<<<<< HEAD
        id: "__alloyId1742"
    });
    $.__views.__alloyId1740.add($.__views.__alloyId1742);
    $.__views.__alloyId1743 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1743"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1743);
    next ? $.__views.__alloyId1743.addEventListener("click", next) : __defers["$.__views.__alloyId1743!click!next"] = true;
    $.__views.__alloyId1744 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1744"
    });
    $.__views.__alloyId1743.add($.__views.__alloyId1744);
=======
        id: "__alloyId1245"
>>>>>>> origin/master
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1578"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1578);
    next ? $.__views.__alloyId1578.addEventListener("click", next) : __defers["$.__views.__alloyId1578!click!next"] = true;
    $.__views.__alloyId1579 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1579"
    });
<<<<<<< HEAD
    $.__views.__alloyId1578.add($.__views.__alloyId1579);
=======
    $.__views.__alloyId1246.add($.__views.__alloyId1247);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
        $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch3.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch4.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch5.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch6.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch7.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch8.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch9.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch10.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch11.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch12.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch13.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1534!click!back"] && $.__views.__alloyId1534.addEventListener("click", back);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1578!click!next"] && $.__views.__alloyId1578.addEventListener("click", next);
=======
<<<<<<< HEAD
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1699!click!back"] && $.__views.__alloyId1699.addEventListener("click", back);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1743!click!next"] && $.__views.__alloyId1743.addEventListener("click", next);
=======
    __defers["$.__views.__alloyId1202!click!back"] && $.__views.__alloyId1202.addEventListener("click", back);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1246!click!next"] && $.__views.__alloyId1246.addEventListener("click", next);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;