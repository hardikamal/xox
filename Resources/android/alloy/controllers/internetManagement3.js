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
    function charge(e) {
        console.log("charge");
        charge = e.row.title;
    }
    function back() {
        DRAWER.navigation("internetManagement", 1);
    }
    function submit() {
        console.log("submit");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "internetManagement3";
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
    $.__views.internetManagement3 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "internetManagement3"
    });
    $.__views.internetManagement3 && $.addTopLevelView($.__views.internetManagement3);
    $.__views.__alloyId1068 = Alloy.createController("_header", {
        id: "__alloyId1068",
        __parentSymbol: $.__views.internetManagement3
    });
    $.__views.__alloyId1068.setParent($.__views.internetManagement3);
    $.__views.__alloyId1069 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1069"
    });
    $.__views.internetManagement3.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1070"
    });
    $.__views.__alloyId1069.add($.__views.__alloyId1070);
    $.__views.__alloyId1071 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1071"
    });
    $.__views.__alloyId1069.add($.__views.__alloyId1071);
    back ? $.__views.__alloyId1071.addEventListener("click", back) : __defers["$.__views.__alloyId1071!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement3.add($.__views.scrollView);
    $.__views.__alloyId1072 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1072"
    });
    $.__views.scrollView.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1073"
    });
    $.__views.__alloyId1072.add($.__views.__alloyId1073);
    $.__views.__alloyId1074 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1074"
    });
    $.__views.scrollView.add($.__views.__alloyId1074);
    $.__views.__alloyId1075 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1075"
    });
    $.__views.scrollView.add($.__views.__alloyId1075);
    $.__views.__alloyId1076 = Ti.UI.createLabel({
        text: "Current Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1076"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1076);
    $.__views.__alloyId1077 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1077"
    });
    $.__views.scrollView.add($.__views.__alloyId1077);
    $.__views.__alloyId1078 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1078"
    });
    $.__views.scrollView.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createLabel({
        text: "Current Postpaid Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1079"
    });
    $.__views.__alloyId1078.add($.__views.__alloyId1079);
    $.__views.__alloyId1080 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1080"
    });
    $.__views.scrollView.add($.__views.__alloyId1080);
    $.__views.__alloyId1081 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1081"
    });
    $.__views.scrollView.add($.__views.__alloyId1081);
    $.__views.__alloyId1082 = Ti.UI.createLabel({
        text: "Currently Prepaid Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1082"
    });
    $.__views.__alloyId1081.add($.__views.__alloyId1082);
    $.__views.__alloyId1083 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1083"
    });
    $.__views.scrollView.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1084"
    });
    $.__views.scrollView.add($.__views.__alloyId1084);
    $.__views.__alloyId1085 = Ti.UI.createLabel({
        text: "Currently EWallet Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1085"
    });
    $.__views.__alloyId1084.add($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1086"
    });
    $.__views.scrollView.add($.__views.__alloyId1086);
    $.__views.__alloyId1087 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId1087"
    });
    $.__views.scrollView.add($.__views.__alloyId1087);
    $.__views.__alloyId1088 = Ti.UI.createLabel({
        text: "Add-On Package :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId1088"
    });
    $.__views.__alloyId1087.add($.__views.__alloyId1088);
    $.__views.__alloyId1089 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1089"
    });
    $.__views.__alloyId1087.add($.__views.__alloyId1089);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1089.add($.__views.picker);
    var __alloyId1090 = [];
    $.__views.__alloyId1091 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1091"
    });
    __alloyId1090.push($.__views.__alloyId1091);
    $.__views.__alloyId1092 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1092"
    });
    __alloyId1090.push($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1093"
    });
    __alloyId1090.push($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1094"
    });
    __alloyId1090.push($.__views.__alloyId1094);
    $.__views.picker.add(__alloyId1090);
    plan ? $.__views.picker.addEventListener("change", plan) : __defers["$.__views.picker!change!plan"] = true;
    $.__views.__alloyId1095 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1095"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1095);
    $.__views.__alloyId1096 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1096"
    });
    $.__views.scrollView.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId1097"
    });
    $.__views.scrollView.add($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createLabel({
        text: "Charge-to :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId1098"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1098);
    $.__views.__alloyId1099 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1099"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1099);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1099.add($.__views.picker2);
    var __alloyId1100 = [];
    $.__views.__alloyId1101 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1101"
    });
    __alloyId1100.push($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1102"
    });
    __alloyId1100.push($.__views.__alloyId1102);
    $.__views.__alloyId1103 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1103"
    });
    __alloyId1100.push($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1104"
    });
    __alloyId1100.push($.__views.__alloyId1104);
    $.__views.picker2.add(__alloyId1100);
    charge ? $.__views.picker2.addEventListener("change", charge) : __defers["$.__views.picker2!change!charge"] = true;
    $.__views.__alloyId1105 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1105"
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1106"
    });
    $.__views.scrollView.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1107"
    });
    $.__views.internetManagement3.add($.__views.__alloyId1107);
    submit ? $.__views.__alloyId1107.addEventListener("click", submit) : __defers["$.__views.__alloyId1107!click!submit"] = true;
    $.__views.__alloyId1108 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        id: "__alloyId1108"
    });
    $.__views.__alloyId1107.add($.__views.__alloyId1108);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
    var plan;
    var charge;
    $.picker.setSelectedRow(0, 0, false);
    $.picker2.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1071!click!back"] && $.__views.__alloyId1071.addEventListener("click", back);
    __defers["$.__views.picker!change!plan"] && $.__views.picker.addEventListener("change", plan);
    __defers["$.__views.picker2!change!charge"] && $.__views.picker2.addEventListener("change", charge);
    __defers["$.__views.__alloyId1107!click!submit"] && $.__views.__alloyId1107.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;