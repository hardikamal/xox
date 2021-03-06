function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showPicker() {
        console.log("showPicker");
        if ("false" == $.pickerView.visible) {
            $.contentView.height = 250;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            $.contentView.height = 250;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.simLabel.text = simType);
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
    function topUp(e) {
        console.log("topUp");
        topUp = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.topUpLabel.text = topUp);
    }
    function showPicker2() {
        console.log("showPicker2");
        console.log("$.pickerView.visible: " + $.pickerView2.visible);
        if ("false" == $.pickerView2.visible) {
            console.log("false");
            $.contentView2.height = 300;
            $.pickerView2.height = 250;
            $.pickerContentView2.height = 250;
            $.pickerView2.setVisible(true);
            $.done2.setVisible(true);
            $.picker2.setVisible(true);
        } else if (false == $.pickerView2.visible) {
            console.log("else false");
            $.contentView2.height = 300;
            $.pickerView2.height = 250;
            $.pickerContentView2.height = 250;
            $.pickerView2.setVisible(true);
            $.done2.setVisible(true);
            $.picker2.setVisible(true);
        } else {
            console.log("else true");
            $.contentView2.height = 50;
            $.pickerView2.height = 50;
            $.pickerContentView2.height = 50;
            $.pickerView2.setVisible(false);
            $.done2.setVisible(false);
            $.picker2.setVisible(false);
        }
    }
    function done2() {
        console.log("done2");
        $.contentView2.height = 50;
        $.pickerView2.height = 50;
        $.pickerContentView2.height = 50;
        $.pickerView2.setVisible(false);
        $.done2.setVisible(false);
        $.picker2.setVisible(false);
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
    $.__views.__alloyId1496 = Alloy.createController("_header", {
        id: "__alloyId1496",
        __parentSymbol: $.__views.panda2
    });
    $.__views.__alloyId1496.setParent($.__views.panda2);
    $.__views.__alloyId1497 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1497"
    });
    $.__views.panda2.add($.__views.__alloyId1497);
    $.__views.__alloyId1498 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1498"
    });
    $.__views.__alloyId1497.add($.__views.__alloyId1498);
    $.__views.__alloyId1499 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1499"
    });
    $.__views.__alloyId1497.add($.__views.__alloyId1499);
    back ? $.__views.__alloyId1499.addEventListener("click", back) : __defers["$.__views.__alloyId1499!click!back"] = true;
    $.__views.__alloyId1500 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1500"
    });
    $.__views.panda2.add($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1501"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1502"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1502);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.panda2.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1503 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1503"
    });
    $.__views.contentView.add($.__views.__alloyId1503);
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
    showPicker ? $.__views.simLabel.addEventListener("click", showPicker) : __defers["$.__views.simLabel!click!showPicker"] = true;
    $.__views.__alloyId1504 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1504"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1504);
    showPicker ? $.__views.__alloyId1504.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1504!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50"
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
    var __alloyId1505 = [];
    $.__views.__alloyId1506 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1506"
    });
    __alloyId1505.push($.__views.__alloyId1506);
    $.__views.__alloyId1507 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1507"
    });
    __alloyId1505.push($.__views.__alloyId1507);
    $.__views.__alloyId1508 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1508"
    });
    __alloyId1505.push($.__views.__alloyId1508);
    $.__views.picker.add(__alloyId1505);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1509 = Ti.UI.createLabel({
        text: "Number Selection",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1509"
    });
    $.__views.scrollView.add($.__views.__alloyId1509);
    $.__views.__alloyId1510 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1510"
    });
    $.__views.scrollView.add($.__views.__alloyId1510);
    $.__views.__alloyId1511 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1511"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1511);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1",
        height: "50"
    });
    $.__views.__alloyId1511.add($.__views.switch1);
    $.__views.__alloyId1512 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1512"
    });
    $.__views.__alloyId1511.add($.__views.__alloyId1512);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId1511.add($.__views.switch2);
    $.__views.__alloyId1513 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1513"
    });
    $.__views.__alloyId1511.add($.__views.__alloyId1513);
    $.__views.__alloyId1514 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1514"
    });
    $.__views.scrollView.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1515"
    });
    $.__views.__alloyId1514.add($.__views.__alloyId1515);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId1515.add($.__views.switch3);
    $.__views.__alloyId1516 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1516"
    });
    $.__views.__alloyId1515.add($.__views.__alloyId1516);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId1515.add($.__views.switch4);
    $.__views.__alloyId1517 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1517"
    });
    $.__views.__alloyId1515.add($.__views.__alloyId1517);
    $.__views.__alloyId1518 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1518"
    });
    $.__views.scrollView.add($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1519"
    });
    $.__views.__alloyId1518.add($.__views.__alloyId1519);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId1519.add($.__views.switch5);
    $.__views.__alloyId1520 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1520"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1520);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId1519.add($.__views.switch6);
    $.__views.__alloyId1521 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1521"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1521);
    $.__views.__alloyId1522 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1522"
    });
    $.__views.scrollView.add($.__views.__alloyId1522);
    $.__views.__alloyId1523 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1523"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1523);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId1523.add($.__views.switch7);
    $.__views.__alloyId1524 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1524"
    });
    $.__views.__alloyId1523.add($.__views.__alloyId1524);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId1523.add($.__views.switch8);
    $.__views.__alloyId1525 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1525"
    });
    $.__views.__alloyId1523.add($.__views.__alloyId1525);
    $.__views.__alloyId1526 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1526"
    });
    $.__views.scrollView.add($.__views.__alloyId1526);
    $.__views.__alloyId1527 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1527"
    });
    $.__views.__alloyId1526.add($.__views.__alloyId1527);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId1527.add($.__views.switch9);
    $.__views.__alloyId1528 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1528"
    });
    $.__views.__alloyId1527.add($.__views.__alloyId1528);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId1527.add($.__views.switch10);
    $.__views.__alloyId1529 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1529"
    });
    $.__views.__alloyId1527.add($.__views.__alloyId1529);
    $.__views.__alloyId1530 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1530"
    });
    $.__views.scrollView.add($.__views.__alloyId1530);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "50"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.pickerContentView2 = Ti.UI.createView({
        id: "pickerContentView2",
        layout: "composite",
        height: "50",
        width: "100%"
    });
    $.__views.contentView2.add($.__views.pickerContentView2);
    $.__views.topUpLabel = Ti.UI.createLabel({
        id: "topUpLabel",
        height: "30",
        width: "99%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView2.add($.__views.topUpLabel);
    showPicker2 ? $.__views.topUpLabel.addEventListener("click", showPicker2) : __defers["$.__views.topUpLabel!click!showPicker2"] = true;
    $.__views.__alloyId1531 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1531"
    });
    $.__views.pickerContentView2.add($.__views.__alloyId1531);
    showPicker ? $.__views.__alloyId1531.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1531!click!showPicker"] = true;
    $.__views.pickerView2 = Ti.UI.createView({
        id: "pickerView2",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50",
        backgroundColor: "blue"
    });
    $.__views.pickerContentView2.add($.__views.pickerView2);
    $.__views.done2 = Ti.UI.createButton({
        title: "Done",
        id: "done2",
        height: "30",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        top: "0",
        left: "0",
        visible: "false"
    });
    $.__views.pickerView2.add($.__views.done2);
    done2 ? $.__views.done2.addEventListener("click", done2) : __defers["$.__views.done2!click!done2"] = true;
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "30",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "false"
    });
    $.__views.pickerView2.add($.__views.picker2);
    var __alloyId1532 = [];
    $.__views.__alloyId1533 = Ti.UI.createPickerRow({
        title: "None",
        id: "__alloyId1533"
    });
    __alloyId1532.push($.__views.__alloyId1533);
    $.__views.__alloyId1534 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1534"
    });
    __alloyId1532.push($.__views.__alloyId1534);
    $.__views.__alloyId1535 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1535"
    });
    __alloyId1532.push($.__views.__alloyId1535);
    $.__views.__alloyId1536 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1536"
    });
    __alloyId1532.push($.__views.__alloyId1536);
    $.__views.picker2.add(__alloyId1532);
    topUp ? $.__views.picker2.addEventListener("change", topUp) : __defers["$.__views.picker2!change!topUp"] = true;
    $.__views.__alloyId1537 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1537"
    });
    $.__views.panda2.add($.__views.__alloyId1537);
    next ? $.__views.__alloyId1537.addEventListener("click", next) : __defers["$.__views.__alloyId1537!click!next"] = true;
    $.__views.__alloyId1538 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1538"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1538);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    $.picker.setSelectedRow(0, 0, false);
    $.picker2.setSelectedRow(0, 0, false);
    var simType;
    var topUp;
    __defers["$.__views.__alloyId1499!click!back"] && $.__views.__alloyId1499.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1504!click!showPicker"] && $.__views.__alloyId1504.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.topUpLabel!click!showPicker2"] && $.__views.topUpLabel.addEventListener("click", showPicker2);
    __defers["$.__views.__alloyId1531!click!showPicker"] && $.__views.__alloyId1531.addEventListener("click", showPicker);
    __defers["$.__views.done2!click!done2"] && $.__views.done2.addEventListener("click", done2);
    __defers["$.__views.picker2!change!topUp"] && $.__views.picker2.addEventListener("change", topUp);
    __defers["$.__views.__alloyId1537!click!next"] && $.__views.__alloyId1537.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;