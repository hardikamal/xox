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
    $.__views.__alloyId1162 = Alloy.createController("_header", {
        id: "__alloyId1162",
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId1162.setParent($.__views.prepaidPack2);
    $.__views.__alloyId1163 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1163"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1163);
    $.__views.__alloyId1164 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1164"
    });
    $.__views.__alloyId1163.add($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1165"
    });
    $.__views.__alloyId1163.add($.__views.__alloyId1165);
    back ? $.__views.__alloyId1165.addEventListener("click", back) : __defers["$.__views.__alloyId1165!click!back"] = true;
    $.__views.__alloyId1166 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1166"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1167"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1168"
    });
    $.__views.__alloyId1166.add($.__views.__alloyId1168);
    $.__views.__alloyId1169 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId1169"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1169);
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
    $.__views.__alloyId1169.add($.__views.prepaid_subtitle);
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
    $.__views.__alloyId1169.add($.__views.prepaid_mandatory);
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
    $.__views.__alloyId1170 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1170"
    });
    $.__views.contentView.add($.__views.__alloyId1170);
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
    var __alloyId1171 = [];
    $.__views.__alloyId1172 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1172"
    });
    __alloyId1171.push($.__views.__alloyId1172);
    $.__views.__alloyId1173 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1173"
    });
    __alloyId1171.push($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1174"
    });
    __alloyId1171.push($.__views.__alloyId1174);
    $.__views.picker.add(__alloyId1171);
    $.__views.__alloyId1175 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1175"
    });
    $.__views.scrollView.add($.__views.__alloyId1175);
    $.__views.__alloyId1176 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1176"
    });
    $.__views.__alloyId1175.add($.__views.__alloyId1176);
    $.__views.__alloyId1177 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1177"
    });
    $.__views.__alloyId1175.add($.__views.__alloyId1177);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1178 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1178"
    });
    $.__views.contentView2.add($.__views.__alloyId1178);
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
    var __alloyId1179 = [];
    $.__views.__alloyId1180 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1180"
    });
    __alloyId1179.push($.__views.__alloyId1180);
    $.__views.__alloyId1181 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1181"
    });
    __alloyId1179.push($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1182"
    });
    __alloyId1179.push($.__views.__alloyId1182);
    $.__views.picker.add(__alloyId1179);
    $.__views.__alloyId1183 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1183"
    });
    $.__views.scrollView.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1184"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1184);
    $.__views.__alloyId1185 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1185"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1186"
    });
    $.__views.scrollView.add($.__views.__alloyId1186);
    $.__views.__alloyId1187 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1187"
    });
    $.__views.__alloyId1186.add($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1188"
    });
    $.__views.__alloyId1186.add($.__views.__alloyId1188);
    $.__views.__alloyId1189 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1189"
    });
    $.__views.scrollView.add($.__views.__alloyId1189);
    $.__views.__alloyId1190 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
        id: "__alloyId1190"
    });
    $.__views.__alloyId1189.add($.__views.__alloyId1190);
    $.__views.__alloyId1191 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1191"
    });
    $.__views.__alloyId1189.add($.__views.__alloyId1191);
    $.__views.__alloyId1192 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1192"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1192);
    proceed ? $.__views.__alloyId1192.addEventListener("click", proceed) : __defers["$.__views.__alloyId1192!click!proceed"] = true;
    $.__views.__alloyId1193 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1193"
    });
    $.__views.__alloyId1192.add($.__views.__alloyId1193);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId1165!click!back"] && $.__views.__alloyId1165.addEventListener("click", back);
    __defers["$.__views.__alloyId1192!click!proceed"] && $.__views.__alloyId1192.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;