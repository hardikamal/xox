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
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
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
    $.__views.__alloyId1058 = Alloy.createController("_header", {
        id: "__alloyId1058",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1058.setParent($.__views.prepaidPack);
    $.__views.__alloyId1059 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1059"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1060"
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1061"
    });
    $.__views.__alloyId1059.add($.__views.__alloyId1061);
    back ? $.__views.__alloyId1061.addEventListener("click", back) : __defers["$.__views.__alloyId1061!click!back"] = true;
    $.__views.__alloyId1062 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1062"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1063"
    });
    $.__views.__alloyId1062.add($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1064"
    });
    $.__views.__alloyId1062.add($.__views.__alloyId1064);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.__alloyId1065 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId1065"
    });
    $.__views.scrollView.add($.__views.__alloyId1065);
    $.__views.__alloyId1066 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1066"
    });
    $.__views.__alloyId1065.add($.__views.__alloyId1066);
    $.__views.__alloyId1067 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId1067"
    });
    $.__views.__alloyId1065.add($.__views.__alloyId1067);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1067.add($.__views.picker);
    var __alloyId1068 = [];
    $.__views.__alloyId1069 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1069"
    });
    __alloyId1068.push($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1070"
    });
    __alloyId1068.push($.__views.__alloyId1070);
    $.__views.__alloyId1071 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1071"
    });
    __alloyId1068.push($.__views.__alloyId1071);
    $.__views.picker.add(__alloyId1068);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1072 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1072"
    });
    $.__views.__alloyId1067.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1073"
    });
    $.__views.scrollView.add($.__views.__alloyId1073);
    $.__views.__alloyId1074 = Ti.UI.createLabel({
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
        id: "__alloyId1074"
    });
    $.__views.__alloyId1073.add($.__views.__alloyId1074);
    $.__views.__alloyId1075 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1075"
    });
    $.__views.__alloyId1073.add($.__views.__alloyId1075);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1075.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1076 = Ti.UI.createLabel({
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
        id: "__alloyId1076"
    });
    $.__views.__alloyId1075.add($.__views.__alloyId1076);
    $.__views.__alloyId1077 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1077"
    });
    $.__views.scrollView.add($.__views.__alloyId1077);
    $.__views.__alloyId1078 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId1078"
    });
    $.__views.__alloyId1077.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1079"
    });
    $.__views.__alloyId1077.add($.__views.__alloyId1079);
    $.__views.__alloyId1080 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1080"
    });
    $.__views.__alloyId1079.add($.__views.__alloyId1080);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId1080.add($.__views.switch2);
    $.__views.__alloyId1081 = Ti.UI.createLabel({
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1081"
    });
    $.__views.__alloyId1080.add($.__views.__alloyId1081);
    $.__views.__alloyId1082 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1082"
    });
    $.__views.__alloyId1079.add($.__views.__alloyId1082);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId1082.add($.__views.switch3);
    $.__views.__alloyId1083 = Ti.UI.createLabel({
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1083"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1084"
    });
    $.__views.__alloyId1077.add($.__views.__alloyId1084);
    $.__views.__alloyId1085 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1085"
    });
    $.__views.__alloyId1084.add($.__views.__alloyId1085);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId1085.add($.__views.switch4);
    $.__views.__alloyId1086 = Ti.UI.createLabel({
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1086"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1086);
    $.__views.__alloyId1087 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1087"
    });
    $.__views.__alloyId1084.add($.__views.__alloyId1087);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId1087.add($.__views.switch5);
    $.__views.__alloyId1088 = Ti.UI.createLabel({
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1088"
    });
    $.__views.__alloyId1087.add($.__views.__alloyId1088);
    $.__views.__alloyId1089 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1089"
    });
    $.__views.scrollView.add($.__views.__alloyId1089);
    $.__views.__alloyId1090 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId1090"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1090);
    $.__views.__alloyId1091 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId1091"
    });
    $.__views.__alloyId1089.add($.__views.__alloyId1091);
    $.__views.__alloyId1092 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1092"
    });
    $.__views.scrollView.add($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1093"
    });
    $.__views.__alloyId1092.add($.__views.__alloyId1093);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId1093.add($.__views.switch6);
    $.__views.__alloyId1094 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
        id: "__alloyId1094"
    });
    $.__views.__alloyId1093.add($.__views.__alloyId1094);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId1093.add($.__views.switch7);
    $.__views.__alloyId1095 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
        id: "__alloyId1095"
    });
    $.__views.__alloyId1093.add($.__views.__alloyId1095);
    $.__views.__alloyId1096 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1096"
    });
    $.__views.scrollView.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1097"
    });
    $.__views.__alloyId1096.add($.__views.__alloyId1097);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId1097.add($.__views.switch8);
    $.__views.__alloyId1098 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
        id: "__alloyId1098"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1098);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId1097.add($.__views.switch9);
    $.__views.__alloyId1099 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
        id: "__alloyId1099"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1100"
    });
    $.__views.scrollView.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1101"
    });
    $.__views.__alloyId1100.add($.__views.__alloyId1101);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId1101.add($.__views.switch10);
    $.__views.__alloyId1102 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
        id: "__alloyId1102"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1102);
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
    $.__views.__alloyId1101.add($.__views.switch11);
    $.__views.__alloyId1103 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
        id: "__alloyId1103"
    });
    $.__views.__alloyId1101.add($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1104"
    });
    $.__views.scrollView.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1105"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1105);
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
    $.__views.__alloyId1105.add($.__views.switch12);
    $.__views.__alloyId1106 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
        id: "__alloyId1106"
    });
    $.__views.__alloyId1105.add($.__views.__alloyId1106);
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
    $.__views.__alloyId1105.add($.__views.switch13);
    $.__views.__alloyId1107 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "35%",
        left: "10",
        id: "__alloyId1107"
    });
    $.__views.__alloyId1105.add($.__views.__alloyId1107);
    $.__views.__alloyId1108 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1108"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1108);
    next ? $.__views.__alloyId1108.addEventListener("click", next) : __defers["$.__views.__alloyId1108!click!next"] = true;
    $.__views.__alloyId1109 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1109"
    });
    $.__views.__alloyId1108.add($.__views.__alloyId1109);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
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
    var simType;
    __defers["$.__views.__alloyId1061!click!back"] && $.__views.__alloyId1061.addEventListener("click", back);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1108!click!next"] && $.__views.__alloyId1108.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;