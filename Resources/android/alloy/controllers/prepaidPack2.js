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
    $.__views.__alloyId1110 = Alloy.createController("_header", {
        id: "__alloyId1110",
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId1110.setParent($.__views.prepaidPack2);
    $.__views.__alloyId1111 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1111"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1112"
    });
    $.__views.__alloyId1111.add($.__views.__alloyId1112);
    $.__views.__alloyId1113 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1113"
    });
    $.__views.__alloyId1111.add($.__views.__alloyId1113);
    back ? $.__views.__alloyId1113.addEventListener("click", back) : __defers["$.__views.__alloyId1113!click!back"] = true;
    $.__views.__alloyId1114 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1114"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1114);
    $.__views.__alloyId1115 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1115"
    });
    $.__views.__alloyId1114.add($.__views.__alloyId1115);
    $.__views.__alloyId1116 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1116"
    });
    $.__views.__alloyId1114.add($.__views.__alloyId1116);
    $.__views.__alloyId1117 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId1117"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1117);
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
    $.__views.__alloyId1117.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId1117.add($.__views.prepaid_mandatory);
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
    $.__views.__alloyId1118 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1118"
    });
    $.__views.contentView.add($.__views.__alloyId1118);
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
    var __alloyId1119 = [];
    $.__views.__alloyId1120 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1120"
    });
    __alloyId1119.push($.__views.__alloyId1120);
    $.__views.__alloyId1121 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1121"
    });
    __alloyId1119.push($.__views.__alloyId1121);
    $.__views.__alloyId1122 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1122"
    });
    __alloyId1119.push($.__views.__alloyId1122);
    $.__views.picker.add(__alloyId1119);
    $.__views.__alloyId1123 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1123"
    });
    $.__views.scrollView.add($.__views.__alloyId1123);
    $.__views.__alloyId1124 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1124"
    });
    $.__views.__alloyId1123.add($.__views.__alloyId1124);
    $.__views.__alloyId1125 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1125"
    });
    $.__views.__alloyId1123.add($.__views.__alloyId1125);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1126 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1126"
    });
    $.__views.contentView2.add($.__views.__alloyId1126);
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
    var __alloyId1127 = [];
    $.__views.__alloyId1128 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1128"
    });
    __alloyId1127.push($.__views.__alloyId1128);
    $.__views.__alloyId1129 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1129"
    });
    __alloyId1127.push($.__views.__alloyId1129);
    $.__views.__alloyId1130 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1130"
    });
    __alloyId1127.push($.__views.__alloyId1130);
    $.__views.picker.add(__alloyId1127);
    $.__views.__alloyId1131 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1131"
    });
    $.__views.scrollView.add($.__views.__alloyId1131);
    $.__views.__alloyId1132 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1132"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1132);
    $.__views.__alloyId1133 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1133"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1133);
    $.__views.__alloyId1134 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1134"
    });
    $.__views.scrollView.add($.__views.__alloyId1134);
    $.__views.__alloyId1135 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1135"
    });
    $.__views.__alloyId1134.add($.__views.__alloyId1135);
    $.__views.__alloyId1136 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1136"
    });
    $.__views.__alloyId1134.add($.__views.__alloyId1136);
    $.__views.__alloyId1137 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1137"
    });
    $.__views.scrollView.add($.__views.__alloyId1137);
    $.__views.__alloyId1138 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1138"
    });
    $.__views.__alloyId1137.add($.__views.__alloyId1138);
    $.__views.__alloyId1139 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1139"
    });
    $.__views.__alloyId1137.add($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1140"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1140);
    proceed ? $.__views.__alloyId1140.addEventListener("click", proceed) : __defers["$.__views.__alloyId1140!click!proceed"] = true;
    $.__views.__alloyId1141 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1141"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1141);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    __defers["$.__views.__alloyId1113!click!back"] && $.__views.__alloyId1113.addEventListener("click", back);
    __defers["$.__views.__alloyId1140!click!proceed"] && $.__views.__alloyId1140.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;