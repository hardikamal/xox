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
        DRAWER.navigation("penang", 1);
    }
    function next() {
        console.log("next");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "penang1s1";
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
    $.__views.penang1s1 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "penang1s1"
    });
    $.__views.penang1s1 && $.addTopLevelView($.__views.penang1s1);
    $.__views.__alloyId1620 = Alloy.createController("_header", {
        id: "__alloyId1620",
        __parentSymbol: $.__views.penang1s1
    });
    $.__views.__alloyId1620.setParent($.__views.penang1s1);
    $.__views.__alloyId1621 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1621"
    });
    $.__views.penang1s1.add($.__views.__alloyId1621);
    $.__views.__alloyId1622 = Ti.UI.createLabel({
        text: "PENANG PACK UNITED PACK SIGNATURE BASIC",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1622"
    });
    $.__views.__alloyId1621.add($.__views.__alloyId1622);
    $.__views.__alloyId1623 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1623"
    });
    $.__views.__alloyId1621.add($.__views.__alloyId1623);
    back ? $.__views.__alloyId1623.addEventListener("click", back) : __defers["$.__views.__alloyId1623!click!back"] = true;
    $.__views.__alloyId1624 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1624"
    });
    $.__views.penang1s1.add($.__views.__alloyId1624);
    $.__views.__alloyId1625 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1625"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1625);
    $.__views.__alloyId1626 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1626"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1626);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.penang1s1.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1627 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1627"
    });
    $.__views.contentView.add($.__views.__alloyId1627);
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
    $.__views.__alloyId1628 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1628"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1628);
    showPicker ? $.__views.__alloyId1628.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1628!click!showPicker"] = true;
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
    var __alloyId1629 = [];
    $.__views.__alloyId1630 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1630"
    });
    __alloyId1629.push($.__views.__alloyId1630);
    $.__views.__alloyId1631 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1631"
    });
    __alloyId1629.push($.__views.__alloyId1631);
    $.__views.__alloyId1632 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1632"
    });
    __alloyId1629.push($.__views.__alloyId1632);
    $.__views.picker.add(__alloyId1629);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1633 = Ti.UI.createLabel({
        text: "Number Selection",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1633"
    });
    $.__views.scrollView.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1634"
    });
    $.__views.scrollView.add($.__views.__alloyId1634);
    $.__views.__alloyId1635 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1635"
    });
    $.__views.__alloyId1634.add($.__views.__alloyId1635);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1",
        height: "50"
    });
    $.__views.__alloyId1635.add($.__views.switch1);
    $.__views.__alloyId1636 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1636"
    });
    $.__views.__alloyId1635.add($.__views.__alloyId1636);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId1635.add($.__views.switch2);
    $.__views.__alloyId1637 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1637"
    });
    $.__views.__alloyId1635.add($.__views.__alloyId1637);
    $.__views.__alloyId1638 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1638"
    });
    $.__views.scrollView.add($.__views.__alloyId1638);
    $.__views.__alloyId1639 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1639"
    });
    $.__views.__alloyId1638.add($.__views.__alloyId1639);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId1639.add($.__views.switch3);
    $.__views.__alloyId1640 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1640"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1640);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId1639.add($.__views.switch4);
    $.__views.__alloyId1641 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1641"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1641);
    $.__views.__alloyId1642 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1642"
    });
    $.__views.scrollView.add($.__views.__alloyId1642);
    $.__views.__alloyId1643 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1643"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1643);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId1643.add($.__views.switch5);
    $.__views.__alloyId1644 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1644"
    });
    $.__views.__alloyId1643.add($.__views.__alloyId1644);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId1643.add($.__views.switch6);
    $.__views.__alloyId1645 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1645"
    });
    $.__views.__alloyId1643.add($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1646"
    });
    $.__views.scrollView.add($.__views.__alloyId1646);
    $.__views.__alloyId1647 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1647"
    });
    $.__views.__alloyId1646.add($.__views.__alloyId1647);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId1647.add($.__views.switch7);
    $.__views.__alloyId1648 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1648"
    });
    $.__views.__alloyId1647.add($.__views.__alloyId1648);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId1647.add($.__views.switch8);
    $.__views.__alloyId1649 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1649"
    });
    $.__views.__alloyId1647.add($.__views.__alloyId1649);
    $.__views.__alloyId1650 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1650"
    });
    $.__views.scrollView.add($.__views.__alloyId1650);
    $.__views.__alloyId1651 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1651"
    });
    $.__views.__alloyId1650.add($.__views.__alloyId1651);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId1651.add($.__views.switch9);
    $.__views.__alloyId1652 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1652"
    });
    $.__views.__alloyId1651.add($.__views.__alloyId1652);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId1651.add($.__views.switch10);
    $.__views.__alloyId1653 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1653"
    });
    $.__views.__alloyId1651.add($.__views.__alloyId1653);
    $.__views.__alloyId1654 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1654"
    });
    $.__views.scrollView.add($.__views.__alloyId1654);
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
    $.__views.__alloyId1655 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1655"
    });
    $.__views.pickerContentView2.add($.__views.__alloyId1655);
    showPicker ? $.__views.__alloyId1655.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1655!click!showPicker"] = true;
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
    var __alloyId1656 = [];
    $.__views.__alloyId1657 = Ti.UI.createPickerRow({
        title: "None",
        id: "__alloyId1657"
    });
    __alloyId1656.push($.__views.__alloyId1657);
    $.__views.__alloyId1658 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1658"
    });
    __alloyId1656.push($.__views.__alloyId1658);
    $.__views.__alloyId1659 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1659"
    });
    __alloyId1656.push($.__views.__alloyId1659);
    $.__views.__alloyId1660 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1660"
    });
    __alloyId1656.push($.__views.__alloyId1660);
    $.__views.picker2.add(__alloyId1656);
    topUp ? $.__views.picker2.addEventListener("change", topUp) : __defers["$.__views.picker2!change!topUp"] = true;
    $.__views.__alloyId1661 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1661"
    });
    $.__views.penang1s1.add($.__views.__alloyId1661);
    next ? $.__views.__alloyId1661.addEventListener("click", next) : __defers["$.__views.__alloyId1661!click!next"] = true;
    $.__views.__alloyId1662 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1662"
    });
    $.__views.__alloyId1661.add($.__views.__alloyId1662);
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
    __defers["$.__views.__alloyId1623!click!back"] && $.__views.__alloyId1623.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1628!click!showPicker"] && $.__views.__alloyId1628.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.topUpLabel!click!showPicker2"] && $.__views.topUpLabel.addEventListener("click", showPicker2);
    __defers["$.__views.__alloyId1655!click!showPicker"] && $.__views.__alloyId1655.addEventListener("click", showPicker);
    __defers["$.__views.done2!click!done2"] && $.__views.done2.addEventListener("click", done2);
    __defers["$.__views.picker2!change!topUp"] && $.__views.picker2.addEventListener("change", topUp);
    __defers["$.__views.__alloyId1661!click!next"] && $.__views.__alloyId1661.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;