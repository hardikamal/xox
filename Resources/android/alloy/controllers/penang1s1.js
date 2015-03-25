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
    $.__views.__alloyId1791 = Alloy.createController("_header", {
        id: "__alloyId1791",
        __parentSymbol: $.__views.penang1s1
    });
    $.__views.__alloyId1791.setParent($.__views.penang1s1);
    $.__views.__alloyId1792 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1792"
    });
    $.__views.penang1s1.add($.__views.__alloyId1792);
    $.__views.__alloyId1793 = Ti.UI.createLabel({
        text: "PENANG PACK UNITED PACK SIGNATURE BASIC",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1793"
    });
    $.__views.__alloyId1792.add($.__views.__alloyId1793);
    $.__views.__alloyId1794 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1794"
    });
    $.__views.__alloyId1792.add($.__views.__alloyId1794);
    back ? $.__views.__alloyId1794.addEventListener("click", back) : __defers["$.__views.__alloyId1794!click!back"] = true;
    $.__views.__alloyId1795 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1795"
    });
    $.__views.penang1s1.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1796"
    });
    $.__views.__alloyId1795.add($.__views.__alloyId1796);
    $.__views.__alloyId1797 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1797"
    });
    $.__views.__alloyId1795.add($.__views.__alloyId1797);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.penang1s1.add($.__views.scrollView);
    $.__views.__alloyId1798 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId1798"
    });
    $.__views.scrollView.add($.__views.__alloyId1798);
    $.__views.__alloyId1799 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1799"
    });
    $.__views.__alloyId1798.add($.__views.__alloyId1799);
    $.__views.__alloyId1800 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId1800"
    });
    $.__views.__alloyId1798.add($.__views.__alloyId1800);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1800.add($.__views.picker);
    var __alloyId1801 = [];
    $.__views.__alloyId1802 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1802"
    });
    __alloyId1801.push($.__views.__alloyId1802);
    $.__views.__alloyId1803 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1803"
    });
    __alloyId1801.push($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1804"
    });
    __alloyId1801.push($.__views.__alloyId1804);
    $.__views.picker.add(__alloyId1801);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1805 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1805"
    });
    $.__views.__alloyId1800.add($.__views.__alloyId1805);
    $.__views.__alloyId1806 = Ti.UI.createLabel({
        text: "Number Selection",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1806"
    });
    $.__views.scrollView.add($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1807"
    });
    $.__views.scrollView.add($.__views.__alloyId1807);
    $.__views.__alloyId1808 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1808"
    });
    $.__views.__alloyId1807.add($.__views.__alloyId1808);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1",
        height: "50"
    });
    $.__views.__alloyId1808.add($.__views.switch1);
    $.__views.__alloyId1809 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1809"
    });
    $.__views.__alloyId1808.add($.__views.__alloyId1809);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId1808.add($.__views.switch2);
    $.__views.__alloyId1810 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1810"
    });
    $.__views.__alloyId1808.add($.__views.__alloyId1810);
    $.__views.__alloyId1811 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1811"
    });
    $.__views.scrollView.add($.__views.__alloyId1811);
    $.__views.__alloyId1812 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1812"
    });
    $.__views.__alloyId1811.add($.__views.__alloyId1812);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId1812.add($.__views.switch3);
    $.__views.__alloyId1813 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1813"
    });
    $.__views.__alloyId1812.add($.__views.__alloyId1813);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId1812.add($.__views.switch4);
    $.__views.__alloyId1814 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1814"
    });
    $.__views.__alloyId1812.add($.__views.__alloyId1814);
    $.__views.__alloyId1815 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1815"
    });
    $.__views.scrollView.add($.__views.__alloyId1815);
    $.__views.__alloyId1816 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1816"
    });
    $.__views.__alloyId1815.add($.__views.__alloyId1816);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId1816.add($.__views.switch5);
    $.__views.__alloyId1817 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1817"
    });
    $.__views.__alloyId1816.add($.__views.__alloyId1817);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId1816.add($.__views.switch6);
    $.__views.__alloyId1818 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1818"
    });
    $.__views.__alloyId1816.add($.__views.__alloyId1818);
    $.__views.__alloyId1819 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1819"
    });
    $.__views.scrollView.add($.__views.__alloyId1819);
    $.__views.__alloyId1820 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1820"
    });
    $.__views.__alloyId1819.add($.__views.__alloyId1820);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId1820.add($.__views.switch7);
    $.__views.__alloyId1821 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1821"
    });
    $.__views.__alloyId1820.add($.__views.__alloyId1821);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId1820.add($.__views.switch8);
    $.__views.__alloyId1822 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1822"
    });
    $.__views.__alloyId1820.add($.__views.__alloyId1822);
    $.__views.__alloyId1823 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1823"
    });
    $.__views.scrollView.add($.__views.__alloyId1823);
    $.__views.__alloyId1824 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1824"
    });
    $.__views.__alloyId1823.add($.__views.__alloyId1824);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId1824.add($.__views.switch9);
    $.__views.__alloyId1825 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1825"
    });
    $.__views.__alloyId1824.add($.__views.__alloyId1825);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId1824.add($.__views.switch10);
    $.__views.__alloyId1826 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1826"
    });
    $.__views.__alloyId1824.add($.__views.__alloyId1826);
    $.__views.__alloyId1827 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1827"
    });
    $.__views.scrollView.add($.__views.__alloyId1827);
    $.__views.__alloyId1828 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId1828"
    });
    $.__views.scrollView.add($.__views.__alloyId1828);
    $.__views.__alloyId1829 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "100%",
        id: "__alloyId1829"
    });
    $.__views.__alloyId1828.add($.__views.__alloyId1829);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1829.add($.__views.picker2);
    var __alloyId1830 = [];
    $.__views.__alloyId1831 = Ti.UI.createPickerRow({
        title: "None",
        id: "__alloyId1831"
    });
    __alloyId1830.push($.__views.__alloyId1831);
    $.__views.__alloyId1832 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1832"
    });
    __alloyId1830.push($.__views.__alloyId1832);
    $.__views.__alloyId1833 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1833"
    });
    __alloyId1830.push($.__views.__alloyId1833);
    $.__views.__alloyId1834 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1834"
    });
    __alloyId1830.push($.__views.__alloyId1834);
    $.__views.picker2.add(__alloyId1830);
    topUp ? $.__views.picker2.addEventListener("change", topUp) : __defers["$.__views.picker2!change!topUp"] = true;
    $.__views.__alloyId1835 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1835"
    });
    $.__views.__alloyId1829.add($.__views.__alloyId1835);
    $.__views.__alloyId1836 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1836"
    });
    $.__views.penang1s1.add($.__views.__alloyId1836);
    next ? $.__views.__alloyId1836.addEventListener("click", next) : __defers["$.__views.__alloyId1836!click!next"] = true;
    $.__views.__alloyId1837 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1837"
    });
    $.__views.__alloyId1836.add($.__views.__alloyId1837);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    $.picker.setSelectedRow(0, 0, false);
    $.picker2.setSelectedRow(0, 0, false);
    var simType;
    var topUp;
    __defers["$.__views.__alloyId1794!click!back"] && $.__views.__alloyId1794.addEventListener("click", back);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.picker2!change!topUp"] && $.__views.picker2.addEventListener("change", topUp);
    __defers["$.__views.__alloyId1836!click!next"] && $.__views.__alloyId1836.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;