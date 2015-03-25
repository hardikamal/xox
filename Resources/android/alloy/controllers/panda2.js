function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
    }
    function topUp(e) {
        console.log("topUp");
        topUp = e.row.title;
    }
    function back() {
        DRAWER.navigation("panda", 1);
    }
    function next() {
        console.log("next");
        DRAWER.navigation("panda3", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "panda2";
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
    $.__views.panda2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "panda2"
    });
    $.__views.panda2 && $.addTopLevelView($.__views.panda2);
    $.__views.__alloyId1525 = Alloy.createController("_header", {
        id: "__alloyId1525",
        __parentSymbol: $.__views.panda2
    });
    $.__views.__alloyId1525.setParent($.__views.panda2);
    $.__views.__alloyId1526 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1526"
    });
    $.__views.panda2.add($.__views.__alloyId1526);
    $.__views.__alloyId1527 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1527"
    });
    $.__views.__alloyId1526.add($.__views.__alloyId1527);
    $.__views.__alloyId1528 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1528"
    });
    $.__views.__alloyId1526.add($.__views.__alloyId1528);
    back ? $.__views.__alloyId1528.addEventListener("click", back) : __defers["$.__views.__alloyId1528!click!back"] = true;
    $.__views.__alloyId1529 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1529"
    });
    $.__views.panda2.add($.__views.__alloyId1529);
    $.__views.__alloyId1530 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1530"
    });
    $.__views.__alloyId1529.add($.__views.__alloyId1530);
    $.__views.__alloyId1531 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1531"
    });
    $.__views.__alloyId1529.add($.__views.__alloyId1531);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.panda2.add($.__views.scrollView);
    $.__views.__alloyId1532 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId1532"
    });
    $.__views.scrollView.add($.__views.__alloyId1532);
    $.__views.__alloyId1533 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1533"
    });
    $.__views.__alloyId1532.add($.__views.__alloyId1533);
    $.__views.__alloyId1534 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId1534"
    });
    $.__views.__alloyId1532.add($.__views.__alloyId1534);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1534.add($.__views.picker);
    var __alloyId1535 = [];
    $.__views.__alloyId1536 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1536"
    });
    __alloyId1535.push($.__views.__alloyId1536);
    $.__views.__alloyId1537 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1537"
    });
    __alloyId1535.push($.__views.__alloyId1537);
    $.__views.__alloyId1538 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1538"
    });
    __alloyId1535.push($.__views.__alloyId1538);
    $.__views.picker.add(__alloyId1535);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1539 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1539"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1539);
    $.__views.__alloyId1540 = Ti.UI.createLabel({
        text: "Number Selection",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1540"
    });
    $.__views.scrollView.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1541"
    });
    $.__views.scrollView.add($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1542"
    });
    $.__views.__alloyId1541.add($.__views.__alloyId1542);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1",
        height: "50"
    });
    $.__views.__alloyId1542.add($.__views.switch1);
    $.__views.__alloyId1543 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1543"
    });
    $.__views.__alloyId1542.add($.__views.__alloyId1543);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId1542.add($.__views.switch2);
    $.__views.__alloyId1544 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1544"
    });
    $.__views.__alloyId1542.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1545"
    });
    $.__views.scrollView.add($.__views.__alloyId1545);
    $.__views.__alloyId1546 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1546"
    });
    $.__views.__alloyId1545.add($.__views.__alloyId1546);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId1546.add($.__views.switch3);
    $.__views.__alloyId1547 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1547"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1547);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId1546.add($.__views.switch4);
    $.__views.__alloyId1548 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1548"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1548);
    $.__views.__alloyId1549 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1549"
    });
    $.__views.scrollView.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1550"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1550);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId1550.add($.__views.switch5);
    $.__views.__alloyId1551 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1551"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1551);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId1550.add($.__views.switch6);
    $.__views.__alloyId1552 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1552"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1553"
    });
    $.__views.scrollView.add($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1554"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1554);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId1554.add($.__views.switch7);
    $.__views.__alloyId1555 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1555"
    });
    $.__views.__alloyId1554.add($.__views.__alloyId1555);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId1554.add($.__views.switch8);
    $.__views.__alloyId1556 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1556"
    });
    $.__views.__alloyId1554.add($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1557"
    });
    $.__views.scrollView.add($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1558"
    });
    $.__views.__alloyId1557.add($.__views.__alloyId1558);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId1558.add($.__views.switch9);
    $.__views.__alloyId1559 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1559"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1559);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId1558.add($.__views.switch10);
    $.__views.__alloyId1560 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1560"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1561"
    });
    $.__views.scrollView.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId1562"
    });
    $.__views.scrollView.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "100%",
        id: "__alloyId1563"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1563);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1563.add($.__views.picker2);
    var __alloyId1564 = [];
    $.__views.__alloyId1565 = Ti.UI.createPickerRow({
        title: "None",
        id: "__alloyId1565"
    });
    __alloyId1564.push($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1566"
    });
    __alloyId1564.push($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1567"
    });
    __alloyId1564.push($.__views.__alloyId1567);
    $.__views.__alloyId1568 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1568"
    });
    __alloyId1564.push($.__views.__alloyId1568);
    $.__views.picker2.add(__alloyId1564);
    topUp ? $.__views.picker2.addEventListener("change", topUp) : __defers["$.__views.picker2!change!topUp"] = true;
    $.__views.__alloyId1569 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1569"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1570"
    });
    $.__views.panda2.add($.__views.__alloyId1570);
    next ? $.__views.__alloyId1570.addEventListener("click", next) : __defers["$.__views.__alloyId1570!click!next"] = true;
    $.__views.__alloyId1571 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1571"
    });
    $.__views.__alloyId1570.add($.__views.__alloyId1571);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    $.picker.setSelectedRow(0, 0, false);
    $.picker2.setSelectedRow(0, 0, false);
    var simType;
    var topUp;
    __defers["$.__views.__alloyId1528!click!back"] && $.__views.__alloyId1528.addEventListener("click", back);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.picker2!change!topUp"] && $.__views.picker2.addEventListener("change", topUp);
    __defers["$.__views.__alloyId1570!click!next"] && $.__views.__alloyId1570.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;