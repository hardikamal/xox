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
    $.__views.__alloyId1095 = Alloy.createController("_header", {
        id: "__alloyId1095",
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId1095.setParent($.__views.prepaidPack2);
    $.__views.__alloyId1096 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1096"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1097"
    });
    $.__views.__alloyId1096.add($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1098"
    });
    $.__views.__alloyId1096.add($.__views.__alloyId1098);
    back ? $.__views.__alloyId1098.addEventListener("click", back) : __defers["$.__views.__alloyId1098!click!back"] = true;
    $.__views.__alloyId1099 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1099"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1100"
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1101"
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId1102"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1102);
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
    $.__views.__alloyId1102.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId1102.add($.__views.prepaid_mandatory);
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
    $.__views.__alloyId1103 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1103"
    });
    $.__views.contentView.add($.__views.__alloyId1103);
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
    var __alloyId1104 = [];
    $.__views.__alloyId1105 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1105"
    });
    __alloyId1104.push($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1106"
    });
    __alloyId1104.push($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1107"
    });
    __alloyId1104.push($.__views.__alloyId1107);
    $.__views.picker.add(__alloyId1104);
    $.__views.__alloyId1108 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1108"
    });
    $.__views.scrollView.add($.__views.__alloyId1108);
    $.__views.__alloyId1109 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1109"
    });
    $.__views.__alloyId1108.add($.__views.__alloyId1109);
    $.__views.__alloyId1110 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1110"
    });
    $.__views.__alloyId1108.add($.__views.__alloyId1110);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1111 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1111"
    });
    $.__views.contentView2.add($.__views.__alloyId1111);
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
    var __alloyId1112 = [];
    $.__views.__alloyId1113 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1113"
    });
    __alloyId1112.push($.__views.__alloyId1113);
    $.__views.__alloyId1114 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1114"
    });
    __alloyId1112.push($.__views.__alloyId1114);
    $.__views.__alloyId1115 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1115"
    });
    __alloyId1112.push($.__views.__alloyId1115);
    $.__views.picker.add(__alloyId1112);
    $.__views.__alloyId1116 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1116"
    });
    $.__views.scrollView.add($.__views.__alloyId1116);
    $.__views.__alloyId1117 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1117"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1117);
    $.__views.__alloyId1118 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1118"
    });
    $.__views.__alloyId1116.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1119"
    });
    $.__views.scrollView.add($.__views.__alloyId1119);
    $.__views.__alloyId1120 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1120"
    });
    $.__views.__alloyId1119.add($.__views.__alloyId1120);
    $.__views.__alloyId1121 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1121"
    });
    $.__views.__alloyId1119.add($.__views.__alloyId1121);
    $.__views.__alloyId1122 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1122"
    });
    $.__views.scrollView.add($.__views.__alloyId1122);
    $.__views.__alloyId1123 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1123"
    });
    $.__views.__alloyId1122.add($.__views.__alloyId1123);
    $.__views.__alloyId1124 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1124"
    });
    $.__views.__alloyId1122.add($.__views.__alloyId1124);
    $.__views.__alloyId1125 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1125"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1125);
    proceed ? $.__views.__alloyId1125.addEventListener("click", proceed) : __defers["$.__views.__alloyId1125!click!proceed"] = true;
    $.__views.__alloyId1126 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1126"
    });
    $.__views.__alloyId1125.add($.__views.__alloyId1126);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId1098!click!back"] && $.__views.__alloyId1098.addEventListener("click", back);
    __defers["$.__views.__alloyId1125!click!proceed"] && $.__views.__alloyId1125.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;