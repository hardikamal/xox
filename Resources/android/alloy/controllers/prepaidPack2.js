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
        DRAWER.navigation("prepaidPack", 1);
    }
    function proceed() {
        DRAWER.navigation("prepaidPack3", 1);
        console.log("proceed");
    }
    function salutation(e) {
        console.log("salutationType");
        salutationType = e.row.title;
    }
    function regType(e) {
        console.log("operatorType");
        regType = e.row.title;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack2";
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
    $.__views.prepaidPack2 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack2"
    });
    $.__views.prepaidPack2 && $.addTopLevelView($.__views.prepaidPack2);
    $.__views.__alloyId1778 = Alloy.createController("_header", {
        id: "__alloyId1778",
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId1778.setParent($.__views.prepaidPack2);
    $.__views.__alloyId1779 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1779"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1780"
    });
    $.__views.__alloyId1779.add($.__views.__alloyId1780);
    $.__views.__alloyId1781 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1781"
    });
    $.__views.__alloyId1779.add($.__views.__alloyId1781);
    back ? $.__views.__alloyId1781.addEventListener("click", back) : __defers["$.__views.__alloyId1781!click!back"] = true;
    $.__views.__alloyId1782 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1782"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1783"
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1783);
    $.__views.__alloyId1784 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1784"
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1784);
    $.__views.__alloyId1785 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId1785"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1785);
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "PERSONAL DETAILS",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "38%"
    });
    $.__views.__alloyId1785.add($.__views.prepaid_subtitle);
    $.__views.prepaid_mandatory = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "*Please fill in the Mandatory field",
        id: "prepaid_mandatory",
        backgroundColor: "transparent",
        color: "red",
        width: "50%",
        top: "5"
    });
    $.__views.__alloyId1785.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack2.add($.__views.scrollView);
    $.__views.__alloyId1786 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId1786"
    });
    $.__views.scrollView.add($.__views.__alloyId1786);
    $.__views.__alloyId1787 = Ti.UI.createLabel({
        text: "Salutation",
        textAlign: "left",
        color: "black",
        id: "__alloyId1787"
    });
    $.__views.__alloyId1786.add($.__views.__alloyId1787);
    $.__views.__alloyId1788 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId1788"
    });
    $.__views.__alloyId1786.add($.__views.__alloyId1788);
    $.__views.__alloyId1789 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId1789"
    });
    $.__views.__alloyId1788.add($.__views.__alloyId1789);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        top: "10",
        bottom: "10",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1789.add($.__views.picker);
    var __alloyId1790 = [];
    $.__views.__alloyId1791 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId1791"
    });
    __alloyId1790.push($.__views.__alloyId1791);
    $.__views.__alloyId1792 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1792"
    });
    __alloyId1790.push($.__views.__alloyId1792);
    $.__views.__alloyId1793 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1793"
    });
    __alloyId1790.push($.__views.__alloyId1793);
    $.__views.picker.add(__alloyId1790);
    salutation ? $.__views.picker.addEventListener("change", salutation) : __defers["$.__views.picker!change!salutation"] = true;
    $.__views.__alloyId1794 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId1794"
    });
    $.__views.__alloyId1789.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1795"
    });
    $.__views.scrollView.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1796"
    });
    $.__views.__alloyId1795.add($.__views.__alloyId1796);
    $.__views.__alloyId1797 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1797"
    });
    $.__views.__alloyId1795.add($.__views.__alloyId1797);
    $.__views.__alloyId1798 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId1798"
    });
    $.__views.scrollView.add($.__views.__alloyId1798);
    $.__views.__alloyId1799 = Ti.UI.createLabel({
        text: "Reg Type",
        textAlign: "left",
        color: "black",
        id: "__alloyId1799"
    });
    $.__views.__alloyId1798.add($.__views.__alloyId1799);
    $.__views.__alloyId1800 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId1800"
    });
    $.__views.__alloyId1798.add($.__views.__alloyId1800);
    $.__views.__alloyId1801 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId1801"
    });
    $.__views.__alloyId1800.add($.__views.__alloyId1801);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        top: "10",
        bottom: "10",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1801.add($.__views.picker2);
    var __alloyId1802 = [];
    $.__views.__alloyId1803 = Ti.UI.createPickerRow({
        title: "Select An Option",
        id: "__alloyId1803"
    });
    __alloyId1802.push($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1804"
    });
    __alloyId1802.push($.__views.__alloyId1804);
    $.__views.__alloyId1805 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1805"
    });
    __alloyId1802.push($.__views.__alloyId1805);
    $.__views.picker2.add(__alloyId1802);
    regType ? $.__views.picker2.addEventListener("change", regType) : __defers["$.__views.picker2!change!regType"] = true;
    $.__views.__alloyId1806 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId1806"
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1807"
    });
    $.__views.scrollView.add($.__views.__alloyId1807);
    $.__views.__alloyId1808 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1808"
    });
    $.__views.__alloyId1807.add($.__views.__alloyId1808);
    $.__views.__alloyId1809 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1809"
    });
    $.__views.__alloyId1807.add($.__views.__alloyId1809);
    $.__views.__alloyId1810 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1810"
    });
    $.__views.scrollView.add($.__views.__alloyId1810);
    $.__views.__alloyId1811 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1811"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1811);
    $.__views.__alloyId1812 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1812"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1812);
    $.__views.__alloyId1813 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1813"
    });
    $.__views.scrollView.add($.__views.__alloyId1813);
    $.__views.__alloyId1814 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1814"
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1814);
    $.__views.__alloyId1815 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1815"
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1815);
    $.__views.__alloyId1816 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1816"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1816);
    proceed ? $.__views.__alloyId1816.addEventListener("click", proceed) : __defers["$.__views.__alloyId1816!click!proceed"] = true;
    $.__views.__alloyId1817 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1817"
    });
    $.__views.__alloyId1816.add($.__views.__alloyId1817);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var salutationType;
    var regType;
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    __defers["$.__views.__alloyId1781!click!back"] && $.__views.__alloyId1781.addEventListener("click", back);
    __defers["$.__views.picker!change!salutation"] && $.__views.picker.addEventListener("change", salutation);
    __defers["$.__views.picker2!change!regType"] && $.__views.picker2.addEventListener("change", regType);
    __defers["$.__views.__alloyId1816!click!proceed"] && $.__views.__alloyId1816.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;