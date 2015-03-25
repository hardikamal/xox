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
    $.__views.__alloyId1566 = Alloy.createController("_header", {
        id: "__alloyId1566",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1566.setParent($.__views.payment3);
    $.__views.__alloyId1567 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1567"
    });
    $.__views.payment3.add($.__views.__alloyId1567);
    $.__views.__alloyId1568 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1568"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1568);
    $.__views.__alloyId1569 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1569"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1569);
    back ? $.__views.__alloyId1569.addEventListener("click", back) : __defers["$.__views.__alloyId1569!click!back"] = true;
    $.__views.__alloyId1570 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1570"
    });
    $.__views.payment3.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1571"
    });
    $.__views.__alloyId1570.add($.__views.__alloyId1571);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId1572 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1572"
    });
    $.__views.scrollView.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1573"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1574"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1574);
    $.__views.__alloyId1575 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1575"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1576"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1577"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1577);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1578 = Ti.UI.createLabel({
        text: "Top Up Amount",
        textAlign: "center",
        color: "black",
        id: "__alloyId1578"
    });
    $.__views.contentView2.add($.__views.__alloyId1578);
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
        id: "picker2",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView2.add($.__views.picker2);
    var __alloyId1579 = [];
    $.__views.__alloyId1580 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId1580"
    });
    __alloyId1579.push($.__views.__alloyId1580);
    $.__views.__alloyId1581 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1581"
    });
    __alloyId1579.push($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1582"
    });
    __alloyId1579.push($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1583"
    });
    __alloyId1579.push($.__views.__alloyId1583);
    $.__views.__alloyId1584 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1584"
    });
    __alloyId1579.push($.__views.__alloyId1584);
    $.__views.picker2.add(__alloyId1579);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1585 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1585"
    });
    $.__views.contentView.add($.__views.__alloyId1585);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.paymentLabel = Ti.UI.createLabel({
        id: "paymentLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
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
    var __alloyId1586 = [];
    $.__views.__alloyId1587 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1587"
    });
    __alloyId1586.push($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1588"
    });
    __alloyId1586.push($.__views.__alloyId1588);
    $.__views.__alloyId1589 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1589"
    });
    __alloyId1586.push($.__views.__alloyId1589);
    $.__views.picker.add(__alloyId1586);
    $.__views.__alloyId1590 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1590"
    });
    $.__views.payment3.add($.__views.__alloyId1590);
    proceed ? $.__views.__alloyId1590.addEventListener("click", proceed) : __defers["$.__views.__alloyId1590!click!proceed"] = true;
    $.__views.__alloyId1591 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1591"
    });
    $.__views.__alloyId1590.add($.__views.__alloyId1591);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1569!click!back"] && $.__views.__alloyId1569.addEventListener("click", back);
    __defers["$.__views.__alloyId1590!click!proceed"] && $.__views.__alloyId1590.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;