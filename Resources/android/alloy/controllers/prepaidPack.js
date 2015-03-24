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
    $.__views.__alloyId1775 = Alloy.createController("_header", {
        id: "__alloyId1775",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1775.setParent($.__views.prepaidPack);
    $.__views.__alloyId1776 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1776"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1776);
    $.__views.__alloyId1777 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1777"
    });
    $.__views.__alloyId1776.add($.__views.__alloyId1777);
    $.__views.__alloyId1778 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1778"
    });
    $.__views.__alloyId1776.add($.__views.__alloyId1778);
    back ? $.__views.__alloyId1778.addEventListener("click", back) : __defers["$.__views.__alloyId1778!click!back"] = true;
    $.__views.__alloyId1779 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1779"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1780"
    });
    $.__views.__alloyId1779.add($.__views.__alloyId1780);
    $.__views.__alloyId1781 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1781"
    });
    $.__views.__alloyId1779.add($.__views.__alloyId1781);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.__alloyId1782 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId1782"
    });
    $.__views.scrollView.add($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1783"
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1783);
    $.__views.__alloyId1784 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId1784"
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1784);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1784.add($.__views.picker);
    var __alloyId1785 = [];
    $.__views.__alloyId1786 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1786"
    });
    __alloyId1785.push($.__views.__alloyId1786);
    $.__views.__alloyId1787 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1787"
    });
    __alloyId1785.push($.__views.__alloyId1787);
    $.__views.__alloyId1788 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1788"
    });
    __alloyId1785.push($.__views.__alloyId1788);
    $.__views.picker.add(__alloyId1785);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1789 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1789"
    });
    $.__views.__alloyId1784.add($.__views.__alloyId1789);
    $.__views.__alloyId1790 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1790"
    });
    $.__views.scrollView.add($.__views.__alloyId1790);
    $.__views.__alloyId1791 = Ti.UI.createLabel({
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
        id: "__alloyId1791"
    });
    $.__views.__alloyId1790.add($.__views.__alloyId1791);
    $.__views.__alloyId1792 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1792"
    });
    $.__views.__alloyId1790.add($.__views.__alloyId1792);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1792.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1793 = Ti.UI.createLabel({
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
        id: "__alloyId1793"
    });
    $.__views.__alloyId1792.add($.__views.__alloyId1793);
    $.__views.__alloyId1794 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1794"
    });
    $.__views.scrollView.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId1795"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1796"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1796);
    $.__views.__alloyId1797 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1797"
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1797);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId1797.add($.__views.switch2);
    $.__views.__alloyId1798 = Ti.UI.createLabel({
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1798"
    });
    $.__views.__alloyId1797.add($.__views.__alloyId1798);
    $.__views.__alloyId1799 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1799"
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1799);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId1799.add($.__views.switch3);
    $.__views.__alloyId1800 = Ti.UI.createLabel({
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1800"
    });
    $.__views.__alloyId1799.add($.__views.__alloyId1800);
    $.__views.__alloyId1801 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1801"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1801);
    $.__views.__alloyId1802 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1802"
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1802);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId1802.add($.__views.switch4);
    $.__views.__alloyId1803 = Ti.UI.createLabel({
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1803"
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1804"
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1804);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId1804.add($.__views.switch5);
    $.__views.__alloyId1805 = Ti.UI.createLabel({
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1805"
    });
    $.__views.__alloyId1804.add($.__views.__alloyId1805);
    $.__views.__alloyId1806 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1806"
    });
    $.__views.scrollView.add($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId1807"
    });
    $.__views.__alloyId1806.add($.__views.__alloyId1807);
    $.__views.__alloyId1808 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId1808"
    });
    $.__views.__alloyId1806.add($.__views.__alloyId1808);
    $.__views.__alloyId1809 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1809"
    });
    $.__views.scrollView.add($.__views.__alloyId1809);
    $.__views.__alloyId1810 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1810"
    });
    $.__views.__alloyId1809.add($.__views.__alloyId1810);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId1810.add($.__views.switch6);
    $.__views.__alloyId1811 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1811"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1811);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId1810.add($.__views.switch7);
    $.__views.__alloyId1812 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1812"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1812);
    $.__views.__alloyId1813 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1813"
    });
    $.__views.scrollView.add($.__views.__alloyId1813);
    $.__views.__alloyId1814 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1814"
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1814);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId1814.add($.__views.switch8);
    $.__views.__alloyId1815 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1815"
    });
    $.__views.__alloyId1814.add($.__views.__alloyId1815);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId1814.add($.__views.switch9);
    $.__views.__alloyId1816 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1816"
    });
    $.__views.__alloyId1814.add($.__views.__alloyId1816);
    $.__views.__alloyId1817 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1817"
    });
    $.__views.scrollView.add($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1818"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1818);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId1818.add($.__views.switch10);
    $.__views.__alloyId1819 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1819"
    });
    $.__views.__alloyId1818.add($.__views.__alloyId1819);
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
    $.__views.__alloyId1818.add($.__views.switch11);
    $.__views.__alloyId1820 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1820"
    });
    $.__views.__alloyId1818.add($.__views.__alloyId1820);
    $.__views.__alloyId1821 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1821"
    });
    $.__views.scrollView.add($.__views.__alloyId1821);
    $.__views.__alloyId1822 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1822"
    });
    $.__views.__alloyId1821.add($.__views.__alloyId1822);
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
    $.__views.__alloyId1822.add($.__views.switch12);
    $.__views.__alloyId1823 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1823"
    });
    $.__views.__alloyId1822.add($.__views.__alloyId1823);
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
    $.__views.__alloyId1822.add($.__views.switch13);
    $.__views.__alloyId1824 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1824"
    });
    $.__views.__alloyId1822.add($.__views.__alloyId1824);
    $.__views.__alloyId1825 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1825"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1825);
    next ? $.__views.__alloyId1825.addEventListener("click", next) : __defers["$.__views.__alloyId1825!click!next"] = true;
    $.__views.__alloyId1826 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1826"
    });
    $.__views.__alloyId1825.add($.__views.__alloyId1826);
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
    $.picker.setSelectedRow(0, 0, false);
    var simType;
    __defers["$.__views.__alloyId1778!click!back"] && $.__views.__alloyId1778.addEventListener("click", back);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1825!click!next"] && $.__views.__alloyId1825.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;