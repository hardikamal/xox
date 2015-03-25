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
        DRAWER.navigation("myAccount", 1);
    }
    function proceed() {
        DRAWER.navigation("payment6", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment3";
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
    $.__views.payment3 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment3"
    });
    $.__views.payment3 && $.addTopLevelView($.__views.payment3);
    $.__views.__alloyId1631 = Alloy.createController("_header", {
        id: "__alloyId1631",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1631.setParent($.__views.payment3);
    $.__views.__alloyId1632 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1632"
    });
    $.__views.payment3.add($.__views.__alloyId1632);
    $.__views.__alloyId1633 = Ti.UI.createLabel({
        color: "white",
        backgroundColor: "transparent",
        font: {
            fontSize: "18dp"
        },
        text: "Payment",
        left: "20",
        id: "__alloyId1633"
    });
    $.__views.__alloyId1632.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1634"
    });
    $.__views.__alloyId1632.add($.__views.__alloyId1634);
    back ? $.__views.__alloyId1634.addEventListener("click", back) : __defers["$.__views.__alloyId1634!click!back"] = true;
    $.__views.__alloyId1635 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1635"
    });
    $.__views.payment3.add($.__views.__alloyId1635);
    $.__views.__alloyId1636 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Prepaid Top Up",
        top: "15",
        left: "20",
        id: "__alloyId1636"
    });
    $.__views.__alloyId1635.add($.__views.__alloyId1636);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId1637 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1637"
    });
    $.__views.scrollView.add($.__views.__alloyId1637);
    $.__views.__alloyId1638 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Mobile Number",
        top: "20",
        textAlign: "center",
        id: "__alloyId1638"
    });
    $.__views.__alloyId1637.add($.__views.__alloyId1638);
    $.__views.__alloyId1639 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "25dp",
            fontWeight: "bold"
        },
        text: "01x 0000000",
        textAlign: "center",
        id: "__alloyId1639"
    });
    $.__views.__alloyId1637.add($.__views.__alloyId1639);
    $.__views.__alloyId1640 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Current Balance (RM)",
        top: "20",
        textAlign: "center",
        id: "__alloyId1640"
    });
    $.__views.__alloyId1637.add($.__views.__alloyId1640);
    $.__views.__alloyId1641 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        text: "00.00",
        textAlign: "center",
        id: "__alloyId1641"
    });
    $.__views.__alloyId1637.add($.__views.__alloyId1641);
    $.__views.__alloyId1642 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1642"
    });
    $.__views.__alloyId1637.add($.__views.__alloyId1642);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1643 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "12dp"
        },
        text: "Top Up Amount",
        textAlign: "center",
        id: "__alloyId1643"
    });
    $.__views.contentView2.add($.__views.__alloyId1643);
    $.__views.pickerContentView2 = Ti.UI.createView({
        id: "pickerContentView2",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView2.add($.__views.pickerContentView2);
    $.__views.paymentLabel2 = Ti.UI.createLabel({
        id: "paymentLabel2",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView2.add($.__views.paymentLabel2);
    $.__views.picker2 = Ti.UI.createPicker({
        color: "black",
        backgroundColor: "#EFEFEF",
        font: {
            fontSize: "12dp"
        },
        id: "picker2",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        visible: "true"
    });
    $.__views.pickerContentView2.add($.__views.picker2);
    var __alloyId1644 = [];
    $.__views.__alloyId1645 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId1645"
    });
    __alloyId1644.push($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1646"
    });
    __alloyId1644.push($.__views.__alloyId1646);
    $.__views.__alloyId1647 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1647"
    });
    __alloyId1644.push($.__views.__alloyId1647);
    $.__views.__alloyId1648 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1648"
    });
    __alloyId1644.push($.__views.__alloyId1648);
    $.__views.__alloyId1649 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1649"
    });
    __alloyId1644.push($.__views.__alloyId1649);
    $.__views.picker2.add(__alloyId1644);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1650 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "12dp"
        },
        text: "Payment Method",
        textAlign: "center",
        id: "__alloyId1650"
    });
    $.__views.contentView.add($.__views.__alloyId1650);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.paymentLabel = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "12dp"
        },
        id: "paymentLabel",
        height: "30",
        width: "100%",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.paymentLabel);
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
    var __alloyId1651 = [];
    $.__views.__alloyId1652 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1652"
    });
    __alloyId1651.push($.__views.__alloyId1652);
    $.__views.__alloyId1653 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1653"
    });
    __alloyId1651.push($.__views.__alloyId1653);
    $.__views.__alloyId1654 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1654"
    });
    __alloyId1651.push($.__views.__alloyId1654);
    $.__views.picker.add(__alloyId1651);
    $.__views.__alloyId1655 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1655"
    });
    $.__views.payment3.add($.__views.__alloyId1655);
    proceed ? $.__views.__alloyId1655.addEventListener("click", proceed) : __defers["$.__views.__alloyId1655!click!proceed"] = true;
    $.__views.__alloyId1656 = Ti.UI.createLabel({
        color: "white",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Submit",
        id: "__alloyId1656"
    });
    $.__views.__alloyId1655.add($.__views.__alloyId1656);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1634!click!back"] && $.__views.__alloyId1634.addEventListener("click", back);
    __defers["$.__views.__alloyId1655!click!proceed"] && $.__views.__alloyId1655.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;