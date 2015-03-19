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
        DRAWER.navigation("payment", 1);
    }
    function proceed() {
        DRAWER.navigation("payment4", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment2";
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
    $.__views.payment2 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment2"
    });
    $.__views.payment2 && $.addTopLevelView($.__views.payment2);
    $.__views.__alloyId801 = Alloy.createController("_header", {
        id: "__alloyId801",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId801.setParent($.__views.payment2);
    $.__views.__alloyId802 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId802"
    });
    $.__views.payment2.add($.__views.__alloyId802);
    $.__views.__alloyId803 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId803"
    });
    $.__views.__alloyId802.add($.__views.__alloyId803);
    $.__views.__alloyId804 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId804"
    });
    $.__views.__alloyId802.add($.__views.__alloyId804);
    back ? $.__views.__alloyId804.addEventListener("click", back) : __defers["$.__views.__alloyId804!click!back"] = true;
    $.__views.__alloyId805 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId805"
    });
    $.__views.payment2.add($.__views.__alloyId805);
    $.__views.__alloyId806 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId806"
    });
    $.__views.__alloyId805.add($.__views.__alloyId806);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment2.add($.__views.scrollView);
    $.__views.__alloyId807 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId807"
    });
    $.__views.scrollView.add($.__views.__alloyId807);
    $.__views.__alloyId808 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId808"
    });
    $.__views.__alloyId807.add($.__views.__alloyId808);
    $.__views.__alloyId809 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId809"
    });
    $.__views.__alloyId807.add($.__views.__alloyId809);
    $.__views.__alloyId810 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId810"
    });
    $.__views.__alloyId807.add($.__views.__alloyId810);
    $.__views.__alloyId811 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId811"
    });
    $.__views.__alloyId807.add($.__views.__alloyId811);
    $.__views.__alloyId812 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId812"
    });
    $.__views.__alloyId807.add($.__views.__alloyId812);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId813 = Ti.UI.createLabel({
        text: "Bill Payment Amount (RM)",
        color: "black",
        id: "__alloyId813"
    });
    $.__views.contentView2.add($.__views.__alloyId813);
    $.__views.__alloyId814 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId814"
    });
    $.__views.contentView2.add($.__views.__alloyId814);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId815 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId815"
    });
    $.__views.contentView.add($.__views.__alloyId815);
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
    var __alloyId816 = [];
    $.__views.__alloyId817 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId817"
    });
    __alloyId816.push($.__views.__alloyId817);
    $.__views.__alloyId818 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId818"
    });
    __alloyId816.push($.__views.__alloyId818);
    $.__views.__alloyId819 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId819"
    });
    __alloyId816.push($.__views.__alloyId819);
    $.__views.picker.add(__alloyId816);
    $.__views.__alloyId820 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId820"
    });
    $.__views.payment2.add($.__views.__alloyId820);
    proceed ? $.__views.__alloyId820.addEventListener("click", proceed) : __defers["$.__views.__alloyId820!click!proceed"] = true;
    $.__views.__alloyId821 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId821"
    });
    $.__views.__alloyId820.add($.__views.__alloyId821);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId804!click!back"] && $.__views.__alloyId804.addEventListener("click", back);
    __defers["$.__views.__alloyId820!click!proceed"] && $.__views.__alloyId820.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;