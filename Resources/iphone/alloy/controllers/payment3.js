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
    $.__views.__alloyId822 = Alloy.createController("_header", {
        id: "__alloyId822",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId822.setParent($.__views.payment3);
    $.__views.__alloyId823 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId823"
    });
    $.__views.payment3.add($.__views.__alloyId823);
    $.__views.__alloyId824 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId824"
    });
    $.__views.__alloyId823.add($.__views.__alloyId824);
    $.__views.__alloyId825 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId825"
    });
    $.__views.__alloyId823.add($.__views.__alloyId825);
    back ? $.__views.__alloyId825.addEventListener("click", back) : __defers["$.__views.__alloyId825!click!back"] = true;
    $.__views.__alloyId826 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId826"
    });
    $.__views.payment3.add($.__views.__alloyId826);
    $.__views.__alloyId827 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId827"
    });
    $.__views.__alloyId826.add($.__views.__alloyId827);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId828 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId828"
    });
    $.__views.scrollView.add($.__views.__alloyId828);
    $.__views.__alloyId829 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId829"
    });
    $.__views.__alloyId828.add($.__views.__alloyId829);
    $.__views.__alloyId830 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId830"
    });
    $.__views.__alloyId828.add($.__views.__alloyId830);
    $.__views.__alloyId831 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId831"
    });
    $.__views.__alloyId828.add($.__views.__alloyId831);
    $.__views.__alloyId832 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId832"
    });
    $.__views.__alloyId828.add($.__views.__alloyId832);
    $.__views.__alloyId833 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId833"
    });
    $.__views.__alloyId828.add($.__views.__alloyId833);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId834 = Ti.UI.createLabel({
        text: "Top Up Amount",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId834"
    });
    $.__views.contentView2.add($.__views.__alloyId834);
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
    var __alloyId835 = [];
    $.__views.__alloyId836 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId836"
    });
    __alloyId835.push($.__views.__alloyId836);
    $.__views.__alloyId837 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId837"
    });
    __alloyId835.push($.__views.__alloyId837);
    $.__views.__alloyId838 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId838"
    });
    __alloyId835.push($.__views.__alloyId838);
    $.__views.__alloyId839 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId839"
    });
    __alloyId835.push($.__views.__alloyId839);
    $.__views.__alloyId840 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId840"
    });
    __alloyId835.push($.__views.__alloyId840);
    $.__views.picker2.add(__alloyId835);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId841 = Ti.UI.createLabel({
        text: "Payment Method",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId841"
    });
    $.__views.contentView.add($.__views.__alloyId841);
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
    var __alloyId842 = [];
    $.__views.__alloyId843 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId843"
    });
    __alloyId842.push($.__views.__alloyId843);
    $.__views.__alloyId844 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId844"
    });
    __alloyId842.push($.__views.__alloyId844);
    $.__views.__alloyId845 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId845"
    });
    __alloyId842.push($.__views.__alloyId845);
    $.__views.picker.add(__alloyId842);
    $.__views.__alloyId846 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId846"
    });
    $.__views.payment3.add($.__views.__alloyId846);
    proceed ? $.__views.__alloyId846.addEventListener("click", proceed) : __defers["$.__views.__alloyId846!click!proceed"] = true;
    $.__views.__alloyId847 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId847"
    });
    $.__views.__alloyId846.add($.__views.__alloyId847);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId825!click!back"] && $.__views.__alloyId825.addEventListener("click", back);
    __defers["$.__views.__alloyId846!click!proceed"] && $.__views.__alloyId846.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;