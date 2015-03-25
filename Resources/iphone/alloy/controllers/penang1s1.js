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
    $.__views.__alloyId1744 = Alloy.createController("_header", {
        id: "__alloyId1744",
        __parentSymbol: $.__views.penang1s1
    });
    $.__views.__alloyId1744.setParent($.__views.penang1s1);
    $.__views.__alloyId1745 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1745"
    });
    $.__views.penang1s1.add($.__views.__alloyId1745);
    $.__views.__alloyId1746 = Ti.UI.createLabel({
        text: "PENANG PACK UNITED PACK SIGNATURE BASIC",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1746"
    });
    $.__views.__alloyId1745.add($.__views.__alloyId1746);
    $.__views.__alloyId1747 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1747"
    });
    $.__views.__alloyId1745.add($.__views.__alloyId1747);
    back ? $.__views.__alloyId1747.addEventListener("click", back) : __defers["$.__views.__alloyId1747!click!back"] = true;
    $.__views.__alloyId1748 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1748"
    });
    $.__views.penang1s1.add($.__views.__alloyId1748);
    $.__views.__alloyId1749 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1749"
    });
    $.__views.__alloyId1748.add($.__views.__alloyId1749);
    $.__views.__alloyId1750 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1750"
    });
    $.__views.__alloyId1748.add($.__views.__alloyId1750);
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
    $.__views.__alloyId1751 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1751"
    });
    $.__views.contentView.add($.__views.__alloyId1751);
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
    $.__views.__alloyId1752 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1752"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1752);
    showPicker ? $.__views.__alloyId1752.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1752!click!showPicker"] = true;
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
    var __alloyId1753 = [];
    $.__views.__alloyId1754 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1754"
    });
    __alloyId1753.push($.__views.__alloyId1754);
    $.__views.__alloyId1755 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1755"
    });
    __alloyId1753.push($.__views.__alloyId1755);
    $.__views.__alloyId1756 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1756"
    });
    __alloyId1753.push($.__views.__alloyId1756);
    $.__views.picker.add(__alloyId1753);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1757 = Ti.UI.createLabel({
        text: "Number Selection",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1757"
    });
    $.__views.scrollView.add($.__views.__alloyId1757);
    $.__views.__alloyId1758 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1758"
    });
    $.__views.scrollView.add($.__views.__alloyId1758);
    $.__views.__alloyId1759 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1759"
    });
    $.__views.__alloyId1758.add($.__views.__alloyId1759);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1",
        height: "50"
    });
    $.__views.__alloyId1759.add($.__views.switch1);
    $.__views.__alloyId1760 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1760"
    });
    $.__views.__alloyId1759.add($.__views.__alloyId1760);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId1759.add($.__views.switch2);
    $.__views.__alloyId1761 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1761"
    });
    $.__views.__alloyId1759.add($.__views.__alloyId1761);
    $.__views.__alloyId1762 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1762"
    });
    $.__views.scrollView.add($.__views.__alloyId1762);
    $.__views.__alloyId1763 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1763"
    });
    $.__views.__alloyId1762.add($.__views.__alloyId1763);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId1763.add($.__views.switch3);
    $.__views.__alloyId1764 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1764"
    });
    $.__views.__alloyId1763.add($.__views.__alloyId1764);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId1763.add($.__views.switch4);
    $.__views.__alloyId1765 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1765"
    });
    $.__views.__alloyId1763.add($.__views.__alloyId1765);
    $.__views.__alloyId1766 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1766"
    });
    $.__views.scrollView.add($.__views.__alloyId1766);
    $.__views.__alloyId1767 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1767"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1767);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId1767.add($.__views.switch5);
    $.__views.__alloyId1768 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1768"
    });
    $.__views.__alloyId1767.add($.__views.__alloyId1768);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId1767.add($.__views.switch6);
    $.__views.__alloyId1769 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1769"
    });
    $.__views.__alloyId1767.add($.__views.__alloyId1769);
    $.__views.__alloyId1770 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1770"
    });
    $.__views.scrollView.add($.__views.__alloyId1770);
    $.__views.__alloyId1771 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1771"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1771);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId1771.add($.__views.switch7);
    $.__views.__alloyId1772 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1772"
    });
    $.__views.__alloyId1771.add($.__views.__alloyId1772);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId1771.add($.__views.switch8);
    $.__views.__alloyId1773 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1773"
    });
    $.__views.__alloyId1771.add($.__views.__alloyId1773);
    $.__views.__alloyId1774 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1774"
    });
    $.__views.scrollView.add($.__views.__alloyId1774);
    $.__views.__alloyId1775 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1775"
    });
    $.__views.__alloyId1774.add($.__views.__alloyId1775);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId1775.add($.__views.switch9);
    $.__views.__alloyId1776 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1776"
    });
    $.__views.__alloyId1775.add($.__views.__alloyId1776);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId1775.add($.__views.switch10);
    $.__views.__alloyId1777 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1777"
    });
    $.__views.__alloyId1775.add($.__views.__alloyId1777);
    $.__views.__alloyId1778 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1778"
    });
    $.__views.scrollView.add($.__views.__alloyId1778);
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
    $.__views.__alloyId1779 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1779"
    });
    $.__views.pickerContentView2.add($.__views.__alloyId1779);
    showPicker ? $.__views.__alloyId1779.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1779!click!showPicker"] = true;
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
    var __alloyId1780 = [];
    $.__views.__alloyId1781 = Ti.UI.createPickerRow({
        title: "None",
        id: "__alloyId1781"
    });
    __alloyId1780.push($.__views.__alloyId1781);
    $.__views.__alloyId1782 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1782"
    });
    __alloyId1780.push($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1783"
    });
    __alloyId1780.push($.__views.__alloyId1783);
    $.__views.__alloyId1784 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1784"
    });
    __alloyId1780.push($.__views.__alloyId1784);
    $.__views.picker2.add(__alloyId1780);
    topUp ? $.__views.picker2.addEventListener("change", topUp) : __defers["$.__views.picker2!change!topUp"] = true;
    $.__views.__alloyId1785 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1785"
    });
    $.__views.penang1s1.add($.__views.__alloyId1785);
    next ? $.__views.__alloyId1785.addEventListener("click", next) : __defers["$.__views.__alloyId1785!click!next"] = true;
    $.__views.__alloyId1786 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1786"
    });
    $.__views.__alloyId1785.add($.__views.__alloyId1786);
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
    __defers["$.__views.__alloyId1747!click!back"] && $.__views.__alloyId1747.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1752!click!showPicker"] && $.__views.__alloyId1752.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.topUpLabel!click!showPicker2"] && $.__views.topUpLabel.addEventListener("click", showPicker2);
    __defers["$.__views.__alloyId1779!click!showPicker"] && $.__views.__alloyId1779.addEventListener("click", showPicker);
    __defers["$.__views.done2!click!done2"] && $.__views.done2.addEventListener("click", done2);
    __defers["$.__views.picker2!change!topUp"] && $.__views.picker2.addEventListener("change", topUp);
    __defers["$.__views.__alloyId1785!click!next"] && $.__views.__alloyId1785.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;