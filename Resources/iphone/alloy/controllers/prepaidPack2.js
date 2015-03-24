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
    $.__views.__alloyId1699 = Alloy.createController("_header", {
        id: "__alloyId1699",
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId1699.setParent($.__views.prepaidPack2);
    $.__views.__alloyId1700 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1700"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1700);
    $.__views.__alloyId1701 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1701"
    });
    $.__views.__alloyId1700.add($.__views.__alloyId1701);
    $.__views.__alloyId1702 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1702"
    });
    $.__views.__alloyId1700.add($.__views.__alloyId1702);
    back ? $.__views.__alloyId1702.addEventListener("click", back) : __defers["$.__views.__alloyId1702!click!back"] = true;
    $.__views.__alloyId1703 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1703"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1703);
    $.__views.__alloyId1704 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1704"
    });
    $.__views.__alloyId1703.add($.__views.__alloyId1704);
    $.__views.__alloyId1705 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1705"
    });
    $.__views.__alloyId1703.add($.__views.__alloyId1705);
    $.__views.__alloyId1706 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId1706"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1706);
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
    $.__views.__alloyId1706.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId1706.add($.__views.prepaid_mandatory);
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
    $.__views.__alloyId1707 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1707"
    });
    $.__views.contentView.add($.__views.__alloyId1707);
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
    var __alloyId1708 = [];
    $.__views.__alloyId1709 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1709"
    });
    __alloyId1708.push($.__views.__alloyId1709);
    $.__views.__alloyId1710 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1710"
    });
    __alloyId1708.push($.__views.__alloyId1710);
    $.__views.__alloyId1711 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1711"
    });
    __alloyId1708.push($.__views.__alloyId1711);
    $.__views.picker.add(__alloyId1708);
    $.__views.__alloyId1712 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1712"
    });
    $.__views.scrollView.add($.__views.__alloyId1712);
    $.__views.__alloyId1713 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1713"
    });
    $.__views.__alloyId1712.add($.__views.__alloyId1713);
    $.__views.__alloyId1714 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1714"
    });
    $.__views.__alloyId1712.add($.__views.__alloyId1714);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1715 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1715"
    });
    $.__views.contentView2.add($.__views.__alloyId1715);
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
    var __alloyId1716 = [];
    $.__views.__alloyId1717 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1717"
    });
    __alloyId1716.push($.__views.__alloyId1717);
    $.__views.__alloyId1718 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1718"
    });
    __alloyId1716.push($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1719"
    });
    __alloyId1716.push($.__views.__alloyId1719);
    $.__views.picker.add(__alloyId1716);
    $.__views.__alloyId1720 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1720"
    });
    $.__views.scrollView.add($.__views.__alloyId1720);
    $.__views.__alloyId1721 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1721"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1721);
    $.__views.__alloyId1722 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1722"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1722);
    $.__views.__alloyId1723 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1723"
    });
    $.__views.scrollView.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1724"
    });
    $.__views.__alloyId1723.add($.__views.__alloyId1724);
    $.__views.__alloyId1725 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1725"
    });
    $.__views.__alloyId1723.add($.__views.__alloyId1725);
    $.__views.__alloyId1726 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1726"
    });
    $.__views.scrollView.add($.__views.__alloyId1726);
    $.__views.__alloyId1727 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1727"
    });
    $.__views.__alloyId1726.add($.__views.__alloyId1727);
    $.__views.__alloyId1728 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1728"
    });
    $.__views.__alloyId1726.add($.__views.__alloyId1728);
    $.__views.__alloyId1729 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1729"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1729);
    proceed ? $.__views.__alloyId1729.addEventListener("click", proceed) : __defers["$.__views.__alloyId1729!click!proceed"] = true;
    $.__views.__alloyId1730 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1730"
    });
    $.__views.__alloyId1729.add($.__views.__alloyId1730);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId1702!click!back"] && $.__views.__alloyId1702.addEventListener("click", back);
    __defers["$.__views.__alloyId1729!click!proceed"] && $.__views.__alloyId1729.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;