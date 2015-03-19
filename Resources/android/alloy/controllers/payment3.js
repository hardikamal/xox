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
    function paymentType(e) {
        console.log("paymentType");
        paymentType = e.row.title;
    }
    function paymentType2(e) {
        console.log("paymentType");
        paymentType2 = e.row.title;
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
    $.__views.__alloyId828 = Alloy.createController("_header", {
        id: "__alloyId828",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId828.setParent($.__views.payment3);
    $.__views.__alloyId829 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId829"
    });
    $.__views.payment3.add($.__views.__alloyId829);
    $.__views.__alloyId830 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId830"
    });
    $.__views.__alloyId829.add($.__views.__alloyId830);
    $.__views.__alloyId831 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId831"
    });
    $.__views.__alloyId829.add($.__views.__alloyId831);
    back ? $.__views.__alloyId831.addEventListener("click", back) : __defers["$.__views.__alloyId831!click!back"] = true;
    $.__views.__alloyId832 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId832"
    });
    $.__views.payment3.add($.__views.__alloyId832);
    $.__views.__alloyId833 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId833"
    });
    $.__views.__alloyId832.add($.__views.__alloyId833);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId834 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId834"
    });
    $.__views.scrollView.add($.__views.__alloyId834);
    $.__views.__alloyId835 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId835"
    });
    $.__views.__alloyId834.add($.__views.__alloyId835);
    $.__views.__alloyId836 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId836"
    });
    $.__views.__alloyId834.add($.__views.__alloyId836);
    $.__views.__alloyId837 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId837"
    });
    $.__views.__alloyId834.add($.__views.__alloyId837);
    $.__views.__alloyId838 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId838"
    });
    $.__views.__alloyId834.add($.__views.__alloyId838);
    $.__views.__alloyId839 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId839"
    });
    $.__views.__alloyId834.add($.__views.__alloyId839);
    $.__views.__alloyId840 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId840"
    });
    $.__views.scrollView.add($.__views.__alloyId840);
    $.__views.__alloyId841 = Ti.UI.createLabel({
        text: "Top Up Amount",
        textAlign: "center",
        color: "black",
        id: "__alloyId841"
    });
    $.__views.__alloyId840.add($.__views.__alloyId841);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId840.add($.__views.picker2);
    var __alloyId842 = [];
    $.__views.__alloyId843 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId843"
    });
    __alloyId842.push($.__views.__alloyId843);
    $.__views.__alloyId844 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId844"
    });
    __alloyId842.push($.__views.__alloyId844);
    $.__views.__alloyId845 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId845"
    });
    __alloyId842.push($.__views.__alloyId845);
    $.__views.__alloyId846 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId846"
    });
    __alloyId842.push($.__views.__alloyId846);
    $.__views.__alloyId847 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId847"
    });
    __alloyId842.push($.__views.__alloyId847);
    $.__views.picker2.add(__alloyId842);
    paymentType2 ? $.__views.picker2.addEventListener("change", paymentType2) : __defers["$.__views.picker2!change!paymentType2"] = true;
    $.__views.__alloyId848 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId848"
    });
    $.__views.__alloyId840.add($.__views.__alloyId848);
    $.__views.__alloyId849 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId849"
    });
    $.__views.scrollView.add($.__views.__alloyId849);
    $.__views.__alloyId850 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId850"
    });
    $.__views.__alloyId849.add($.__views.__alloyId850);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId849.add($.__views.picker);
    var __alloyId851 = [];
    $.__views.__alloyId852 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId852"
    });
    __alloyId851.push($.__views.__alloyId852);
    $.__views.__alloyId853 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId853"
    });
    __alloyId851.push($.__views.__alloyId853);
    $.__views.__alloyId854 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId854"
    });
    __alloyId851.push($.__views.__alloyId854);
    $.__views.picker.add(__alloyId851);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId855 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId855"
    });
    $.__views.__alloyId849.add($.__views.__alloyId855);
    $.__views.__alloyId856 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId856"
    });
    $.__views.payment3.add($.__views.__alloyId856);
    proceed ? $.__views.__alloyId856.addEventListener("click", proceed) : __defers["$.__views.__alloyId856!click!proceed"] = true;
    $.__views.__alloyId857 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId857"
    });
    $.__views.__alloyId856.add($.__views.__alloyId857);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var paymentType;
    __defers["$.__views.__alloyId831!click!back"] && $.__views.__alloyId831.addEventListener("click", back);
    __defers["$.__views.picker2!change!paymentType2"] && $.__views.picker2.addEventListener("change", paymentType2);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId856!click!proceed"] && $.__views.__alloyId856.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;