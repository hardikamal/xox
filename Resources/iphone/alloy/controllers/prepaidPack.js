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
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1698"
    });
    $.__views.__alloyId1697.add($.__views.__alloyId1698);
    $.__views.__alloyId1699 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
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
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1701"
    });
    $.__views.__alloyId1700.add($.__views.__alloyId1701);
    $.__views.__alloyId1702 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1702"
    });
    $.__views.__alloyId1700.add($.__views.__alloyId1702);
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
    $.__views.__alloyId1703 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1703"
    });
    $.__views.contentView.add($.__views.__alloyId1703);
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
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
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
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1710.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1711 = Ti.UI.createLabel({
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
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
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
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
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId1715.add($.__views.switch2);
    $.__views.__alloyId1716 = Ti.UI.createLabel({
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1716"
    });
    $.__views.__alloyId1715.add($.__views.__alloyId1716);
    $.__views.__alloyId1717 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1717"
    });
    $.__views.__alloyId1714.add($.__views.__alloyId1717);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId1717.add($.__views.switch3);
    $.__views.__alloyId1718 = Ti.UI.createLabel({
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
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
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId1720.add($.__views.switch4);
    $.__views.__alloyId1721 = Ti.UI.createLabel({
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1721"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1721);
    $.__views.__alloyId1722 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1722"
    });
    $.__views.__alloyId1719.add($.__views.__alloyId1722);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId1722.add($.__views.switch5);
    $.__views.__alloyId1723 = Ti.UI.createLabel({
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
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
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId1725"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1725);
    $.__views.__alloyId1726 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
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
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId1728.add($.__views.switch6);
    $.__views.__alloyId1729 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1729"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1729);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId1728.add($.__views.switch7);
    $.__views.__alloyId1730 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
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
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId1732.add($.__views.switch8);
    $.__views.__alloyId1733 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1733"
    });
    $.__views.__alloyId1732.add($.__views.__alloyId1733);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId1732.add($.__views.switch9);
    $.__views.__alloyId1734 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
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
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId1736.add($.__views.switch10);
    $.__views.__alloyId1737 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1737"
    });
    $.__views.__alloyId1736.add($.__views.__alloyId1737);
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
    $.__views.__alloyId1736.add($.__views.switch11);
    $.__views.__alloyId1738 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
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
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
    $.__views.__alloyId1740.add($.__views.switch12);
    $.__views.__alloyId1741 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1741"
    });
    $.__views.__alloyId1740.add($.__views.__alloyId1741);
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
    $.__views.__alloyId1740.add($.__views.switch13);
    $.__views.__alloyId1742 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
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
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1699!click!back"] && $.__views.__alloyId1699.addEventListener("click", back);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1743!click!next"] && $.__views.__alloyId1743.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;