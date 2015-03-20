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
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
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
    $.__views.__alloyId1545 = Alloy.createController("_header", {
        id: "__alloyId1545",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1545.setParent($.__views.prepaidPack);
    $.__views.__alloyId1546 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1546"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1547"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1548"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1548);
    back ? $.__views.__alloyId1548.addEventListener("click", back) : __defers["$.__views.__alloyId1548!click!back"] = true;
    $.__views.__alloyId1549 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1549"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1550"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1550);
    $.__views.__alloyId1551 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1551"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1551);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.__alloyId1552 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId1552"
    });
    $.__views.scrollView.add($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1553"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId1554"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1554);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1554.add($.__views.picker);
    var __alloyId1555 = [];
    $.__views.__alloyId1556 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1556"
    });
    __alloyId1555.push($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1557"
    });
    __alloyId1555.push($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1558"
    });
    __alloyId1555.push($.__views.__alloyId1558);
    $.__views.picker.add(__alloyId1555);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1559 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1559"
    });
    $.__views.__alloyId1554.add($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1560"
    });
    $.__views.scrollView.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createLabel({
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
        id: "__alloyId1561"
    });
    $.__views.__alloyId1560.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1562"
    });
    $.__views.__alloyId1560.add($.__views.__alloyId1562);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1562.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1563 = Ti.UI.createLabel({
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
        id: "__alloyId1563"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1563);
    $.__views.__alloyId1564 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1564"
    });
    $.__views.scrollView.add($.__views.__alloyId1564);
    $.__views.__alloyId1565 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId1565"
    });
    $.__views.__alloyId1564.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1566"
    });
    $.__views.__alloyId1564.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1567"
    });
    $.__views.__alloyId1566.add($.__views.__alloyId1567);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId1567.add($.__views.switch2);
    $.__views.__alloyId1568 = Ti.UI.createLabel({
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1568"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1568);
    $.__views.__alloyId1569 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1569"
    });
    $.__views.__alloyId1566.add($.__views.__alloyId1569);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId1569.add($.__views.switch3);
    $.__views.__alloyId1570 = Ti.UI.createLabel({
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1570"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1571"
    });
    $.__views.__alloyId1564.add($.__views.__alloyId1571);
    $.__views.__alloyId1572 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1572"
    });
    $.__views.__alloyId1571.add($.__views.__alloyId1572);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId1572.add($.__views.switch4);
    $.__views.__alloyId1573 = Ti.UI.createLabel({
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1573"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1574"
    });
    $.__views.__alloyId1571.add($.__views.__alloyId1574);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId1574.add($.__views.switch5);
    $.__views.__alloyId1575 = Ti.UI.createLabel({
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1575"
    });
    $.__views.__alloyId1574.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1576"
    });
    $.__views.scrollView.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId1577"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId1578"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1579"
    });
    $.__views.scrollView.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1580"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1580);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId1580.add($.__views.switch6);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1581"
    });
    $.__views.__alloyId1580.add($.__views.__alloyId1581);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId1580.add($.__views.switch7);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1582"
    });
    $.__views.__alloyId1580.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1583"
    });
    $.__views.scrollView.add($.__views.__alloyId1583);
    $.__views.__alloyId1584 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1584"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1584);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId1584.add($.__views.switch8);
    $.__views.__alloyId1585 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1585"
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1585);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId1584.add($.__views.switch9);
    $.__views.__alloyId1586 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1586"
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1587"
    });
    $.__views.scrollView.add($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1588"
    });
    $.__views.__alloyId1587.add($.__views.__alloyId1588);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId1588.add($.__views.switch10);
    $.__views.__alloyId1589 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1589"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1589);
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
    $.__views.__alloyId1588.add($.__views.switch11);
    $.__views.__alloyId1590 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1590"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1591"
    });
    $.__views.scrollView.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1592"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1592);
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
    $.__views.__alloyId1592.add($.__views.switch12);
    $.__views.__alloyId1593 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1593"
    });
    $.__views.__alloyId1592.add($.__views.__alloyId1593);
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
    $.__views.__alloyId1592.add($.__views.switch13);
    $.__views.__alloyId1594 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1594"
    });
    $.__views.__alloyId1592.add($.__views.__alloyId1594);
    $.__views.__alloyId1595 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1595"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1595);
    next ? $.__views.__alloyId1595.addEventListener("click", next) : __defers["$.__views.__alloyId1595!click!next"] = true;
    $.__views.__alloyId1596 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1596"
    });
    $.__views.__alloyId1595.add($.__views.__alloyId1596);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
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
    var simType;
    __defers["$.__views.__alloyId1548!click!back"] && $.__views.__alloyId1548.addEventListener("click", back);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1595!click!next"] && $.__views.__alloyId1595.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;