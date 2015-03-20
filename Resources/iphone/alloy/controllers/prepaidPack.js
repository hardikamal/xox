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
    $.__views.__alloyId1199 = Alloy.createController("_header", {
        id: "__alloyId1199",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1199.setParent($.__views.prepaidPack);
    $.__views.__alloyId1200 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1200"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1200);
    $.__views.__alloyId1201 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1201"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1202"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1202);
    back ? $.__views.__alloyId1202.addEventListener("click", back) : __defers["$.__views.__alloyId1202!click!back"] = true;
    $.__views.__alloyId1203 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1203"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1203);
    $.__views.__alloyId1204 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1204"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1205"
    });
    $.__views.__alloyId1203.add($.__views.__alloyId1205);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1206 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId1206"
    });
    $.__views.contentView.add($.__views.__alloyId1206);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.simLabel = Ti.UI.createLabel({
        id: "simLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.simLabel);
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
    var __alloyId1207 = [];
    $.__views.__alloyId1208 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1208"
    });
    __alloyId1207.push($.__views.__alloyId1208);
    $.__views.__alloyId1209 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1209"
    });
    __alloyId1207.push($.__views.__alloyId1209);
    $.__views.__alloyId1210 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1210"
    });
    __alloyId1207.push($.__views.__alloyId1210);
    $.__views.picker.add(__alloyId1207);
    $.__views.__alloyId1211 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1211"
    });
    $.__views.scrollView.add($.__views.__alloyId1211);
    $.__views.__alloyId1212 = Ti.UI.createLabel({
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
        id: "__alloyId1212"
    });
    $.__views.__alloyId1211.add($.__views.__alloyId1212);
    $.__views.__alloyId1213 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1213"
    });
    $.__views.__alloyId1211.add($.__views.__alloyId1213);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1213.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1214 = Ti.UI.createLabel({
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
        id: "__alloyId1214"
    });
    $.__views.__alloyId1213.add($.__views.__alloyId1214);
    $.__views.__alloyId1215 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1215"
    });
    $.__views.scrollView.add($.__views.__alloyId1215);
    $.__views.__alloyId1216 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId1216"
    });
    $.__views.__alloyId1215.add($.__views.__alloyId1216);
    $.__views.__alloyId1217 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1217"
    });
    $.__views.__alloyId1215.add($.__views.__alloyId1217);
    $.__views.__alloyId1218 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1218"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1218);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId1218.add($.__views.switch2);
    $.__views.__alloyId1219 = Ti.UI.createLabel({
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1219"
    });
    $.__views.__alloyId1218.add($.__views.__alloyId1219);
    $.__views.__alloyId1220 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1220"
    });
    $.__views.__alloyId1217.add($.__views.__alloyId1220);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId1220.add($.__views.switch3);
    $.__views.__alloyId1221 = Ti.UI.createLabel({
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1221"
    });
    $.__views.__alloyId1220.add($.__views.__alloyId1221);
    $.__views.__alloyId1222 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1222"
    });
    $.__views.__alloyId1215.add($.__views.__alloyId1222);
    $.__views.__alloyId1223 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1223"
    });
    $.__views.__alloyId1222.add($.__views.__alloyId1223);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId1223.add($.__views.switch4);
    $.__views.__alloyId1224 = Ti.UI.createLabel({
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1224"
    });
    $.__views.__alloyId1223.add($.__views.__alloyId1224);
    $.__views.__alloyId1225 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1225"
    });
    $.__views.__alloyId1222.add($.__views.__alloyId1225);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId1225.add($.__views.switch5);
    $.__views.__alloyId1226 = Ti.UI.createLabel({
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId1226"
    });
    $.__views.__alloyId1225.add($.__views.__alloyId1226);
    $.__views.__alloyId1227 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1227"
    });
    $.__views.scrollView.add($.__views.__alloyId1227);
    $.__views.__alloyId1228 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId1228"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1228);
    $.__views.__alloyId1229 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId1229"
    });
    $.__views.__alloyId1227.add($.__views.__alloyId1229);
    $.__views.__alloyId1230 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1230"
    });
    $.__views.scrollView.add($.__views.__alloyId1230);
    $.__views.__alloyId1231 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1231"
    });
    $.__views.__alloyId1230.add($.__views.__alloyId1231);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId1231.add($.__views.switch6);
    $.__views.__alloyId1232 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1232"
    });
    $.__views.__alloyId1231.add($.__views.__alloyId1232);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId1231.add($.__views.switch7);
    $.__views.__alloyId1233 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1233"
    });
    $.__views.__alloyId1231.add($.__views.__alloyId1233);
    $.__views.__alloyId1234 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1234"
    });
    $.__views.scrollView.add($.__views.__alloyId1234);
    $.__views.__alloyId1235 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1235"
    });
    $.__views.__alloyId1234.add($.__views.__alloyId1235);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId1235.add($.__views.switch8);
    $.__views.__alloyId1236 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1236"
    });
    $.__views.__alloyId1235.add($.__views.__alloyId1236);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId1235.add($.__views.switch9);
    $.__views.__alloyId1237 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1237"
    });
    $.__views.__alloyId1235.add($.__views.__alloyId1237);
    $.__views.__alloyId1238 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1238"
    });
    $.__views.scrollView.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1239"
    });
    $.__views.__alloyId1238.add($.__views.__alloyId1239);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId1239.add($.__views.switch10);
    $.__views.__alloyId1240 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1240"
    });
    $.__views.__alloyId1239.add($.__views.__alloyId1240);
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
    $.__views.__alloyId1239.add($.__views.switch11);
    $.__views.__alloyId1241 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1241"
    });
    $.__views.__alloyId1239.add($.__views.__alloyId1241);
    $.__views.__alloyId1242 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1242"
    });
    $.__views.scrollView.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1243"
    });
    $.__views.__alloyId1242.add($.__views.__alloyId1243);
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
    $.__views.__alloyId1243.add($.__views.switch12);
    $.__views.__alloyId1244 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1244"
    });
    $.__views.__alloyId1243.add($.__views.__alloyId1244);
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
    $.__views.__alloyId1243.add($.__views.switch13);
    $.__views.__alloyId1245 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1245"
    });
    $.__views.__alloyId1243.add($.__views.__alloyId1245);
    $.__views.__alloyId1246 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1246"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1246);
    next ? $.__views.__alloyId1246.addEventListener("click", next) : __defers["$.__views.__alloyId1246!click!next"] = true;
    $.__views.__alloyId1247 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1247"
    });
    $.__views.__alloyId1246.add($.__views.__alloyId1247);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
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
    }
    __defers["$.__views.__alloyId1202!click!back"] && $.__views.__alloyId1202.addEventListener("click", back);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1246!click!next"] && $.__views.__alloyId1246.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;