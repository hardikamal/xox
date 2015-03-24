function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function plan(e) {
        console.log("plan");
        plan = e.row.title;
    }
    function back() {
        DRAWER.navigation("internetManagement", 1);
    }
    function submit() {
        console.log("submit");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "internetManagement2";
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
    $.__views.internetManagement2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "internetManagement2"
    });
    $.__views.internetManagement2 && $.addTopLevelView($.__views.internetManagement2);
    $.__views.__alloyId1097 = Alloy.createController("_header", {
        id: "__alloyId1097",
        __parentSymbol: $.__views.internetManagement2
    });
    $.__views.__alloyId1097.setParent($.__views.internetManagement2);
    $.__views.__alloyId1098 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1098"
    });
    $.__views.internetManagement2.add($.__views.__alloyId1098);
    $.__views.__alloyId1099 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1099"
    });
    $.__views.__alloyId1098.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1100"
    });
    $.__views.__alloyId1098.add($.__views.__alloyId1100);
    back ? $.__views.__alloyId1100.addEventListener("click", back) : __defers["$.__views.__alloyId1100!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement2.add($.__views.scrollView);
    $.__views.__alloyId1101 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1101"
    });
    $.__views.scrollView.add($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1102"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1102);
    $.__views.__alloyId1103 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1103"
    });
    $.__views.scrollView.add($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1104"
    });
    $.__views.scrollView.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createLabel({
        text: "Current Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1105"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1106"
    });
    $.__views.scrollView.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1107"
    });
    $.__views.scrollView.add($.__views.__alloyId1107);
    $.__views.__alloyId1108 = Ti.UI.createLabel({
        text: "Current Postpaid Available Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1108"
    });
    $.__views.__alloyId1107.add($.__views.__alloyId1108);
    $.__views.__alloyId1109 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1109"
    });
    $.__views.scrollView.add($.__views.__alloyId1109);
    $.__views.__alloyId1110 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1110"
    });
    $.__views.scrollView.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createLabel({
        text: "Currently Prepaid Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1111"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1112"
    });
    $.__views.scrollView.add($.__views.__alloyId1112);
    $.__views.__alloyId1113 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1113"
    });
    $.__views.scrollView.add($.__views.__alloyId1113);
    $.__views.__alloyId1114 = Ti.UI.createLabel({
        text: "Currently EWallet Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1114"
    });
    $.__views.__alloyId1113.add($.__views.__alloyId1114);
    $.__views.__alloyId1115 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1115"
    });
    $.__views.scrollView.add($.__views.__alloyId1115);
    $.__views.__alloyId1116 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1116"
    });
    $.__views.scrollView.add($.__views.__alloyId1116);
    $.__views.__alloyId1117 = Ti.UI.createLabel({
        text: "Season Pass Data Counter (MB) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1117"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1117);
    $.__views.__alloyId1118 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1118"
    });
    $.__views.scrollView.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId1119"
    });
    $.__views.scrollView.add($.__views.__alloyId1119);
    $.__views.__alloyId1120 = Ti.UI.createLabel({
        text: "Subscribe / Upgrade to :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId1120"
    });
    $.__views.__alloyId1119.add($.__views.__alloyId1120);
    $.__views.__alloyId1121 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1121"
    });
    $.__views.__alloyId1119.add($.__views.__alloyId1121);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1121.add($.__views.picker);
    var __alloyId1122 = [];
    $.__views.__alloyId1123 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1123"
    });
    __alloyId1122.push($.__views.__alloyId1123);
    $.__views.__alloyId1124 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1124"
    });
    __alloyId1122.push($.__views.__alloyId1124);
    $.__views.__alloyId1125 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1125"
    });
    __alloyId1122.push($.__views.__alloyId1125);
    $.__views.__alloyId1126 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1126"
    });
    __alloyId1122.push($.__views.__alloyId1126);
    $.__views.picker.add(__alloyId1122);
    plan ? $.__views.picker.addEventListener("change", plan) : __defers["$.__views.picker!change!plan"] = true;
    $.__views.__alloyId1127 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1127"
    });
    $.__views.__alloyId1121.add($.__views.__alloyId1127);
    $.__views.__alloyId1128 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1128"
    });
    $.__views.scrollView.add($.__views.__alloyId1128);
    $.__views.__alloyId1129 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1129"
    });
    $.__views.internetManagement2.add($.__views.__alloyId1129);
    submit ? $.__views.__alloyId1129.addEventListener("click", submit) : __defers["$.__views.__alloyId1129!click!submit"] = true;
    $.__views.__alloyId1130 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        id: "__alloyId1130"
    });
    $.__views.__alloyId1129.add($.__views.__alloyId1130);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
    var plan;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1100!click!back"] && $.__views.__alloyId1100.addEventListener("click", back);
    __defers["$.__views.picker!change!plan"] && $.__views.picker.addEventListener("change", plan);
    __defers["$.__views.__alloyId1129!click!submit"] && $.__views.__alloyId1129.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;