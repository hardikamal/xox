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
    $.__views.__alloyId1768 = Alloy.createController("_header", {
        id: "__alloyId1768",
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId1768.setParent($.__views.prepaidPack2);
    $.__views.__alloyId1769 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1769"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1769);
    $.__views.__alloyId1770 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1770"
    });
    $.__views.__alloyId1769.add($.__views.__alloyId1770);
    $.__views.__alloyId1771 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1771"
    });
    $.__views.__alloyId1769.add($.__views.__alloyId1771);
    back ? $.__views.__alloyId1771.addEventListener("click", back) : __defers["$.__views.__alloyId1771!click!back"] = true;
    $.__views.__alloyId1772 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1772"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1772);
    $.__views.__alloyId1773 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1773"
    });
    $.__views.__alloyId1772.add($.__views.__alloyId1773);
    $.__views.__alloyId1774 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1774"
    });
    $.__views.__alloyId1772.add($.__views.__alloyId1774);
    $.__views.__alloyId1775 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId1775"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1775);
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
    $.__views.__alloyId1775.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId1775.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack2.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "80",
        bottom: "5",
        top: "5"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1776 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1776"
    });
    $.__views.contentView.add($.__views.__alloyId1776);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.contentView.add($.__views.picker);
    var __alloyId1777 = [];
    $.__views.__alloyId1778 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1778"
    });
    __alloyId1777.push($.__views.__alloyId1778);
    $.__views.__alloyId1779 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1779"
    });
    __alloyId1777.push($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1780"
    });
    __alloyId1777.push($.__views.__alloyId1780);
    $.__views.picker.add(__alloyId1777);
    $.__views.__alloyId1781 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1781"
    });
    $.__views.scrollView.add($.__views.__alloyId1781);
    $.__views.__alloyId1782 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1782"
    });
    $.__views.__alloyId1781.add($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1783"
    });
    $.__views.__alloyId1781.add($.__views.__alloyId1783);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1784 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1784"
    });
    $.__views.contentView2.add($.__views.__alloyId1784);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.contentView2.add($.__views.picker);
    var __alloyId1785 = [];
    $.__views.__alloyId1786 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1786"
    });
    __alloyId1785.push($.__views.__alloyId1786);
    $.__views.__alloyId1787 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1787"
    });
    __alloyId1785.push($.__views.__alloyId1787);
    $.__views.__alloyId1788 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1788"
    });
    __alloyId1785.push($.__views.__alloyId1788);
    $.__views.picker.add(__alloyId1785);
    $.__views.__alloyId1789 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1789"
    });
    $.__views.scrollView.add($.__views.__alloyId1789);
    $.__views.__alloyId1790 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1790"
    });
    $.__views.__alloyId1789.add($.__views.__alloyId1790);
    $.__views.__alloyId1791 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1791"
    });
    $.__views.__alloyId1789.add($.__views.__alloyId1791);
    $.__views.__alloyId1792 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1792"
    });
    $.__views.scrollView.add($.__views.__alloyId1792);
    $.__views.__alloyId1793 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1793"
    });
    $.__views.__alloyId1792.add($.__views.__alloyId1793);
    $.__views.__alloyId1794 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1794"
    });
    $.__views.__alloyId1792.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1795"
    });
    $.__views.scrollView.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createLabel({
        text: "Date of Birth*",
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
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1798"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1798);
    proceed ? $.__views.__alloyId1798.addEventListener("click", proceed) : __defers["$.__views.__alloyId1798!click!proceed"] = true;
    $.__views.__alloyId1799 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1799"
    });
    $.__views.__alloyId1798.add($.__views.__alloyId1799);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    __defers["$.__views.__alloyId1771!click!back"] && $.__views.__alloyId1771.addEventListener("click", back);
    __defers["$.__views.__alloyId1798!click!proceed"] && $.__views.__alloyId1798.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;