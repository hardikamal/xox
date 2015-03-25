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
    $.__views.__alloyId1154 = Alloy.createController("_header", {
        id: "__alloyId1154",
        __parentSymbol: $.__views.internetManagement3
    });
    $.__views.__alloyId1154.setParent($.__views.internetManagement3);
    $.__views.__alloyId1155 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1155"
    });
    $.__views.internetManagement3.add($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1156"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1157"
    });
    $.__views.__alloyId1155.add($.__views.__alloyId1157);
    back ? $.__views.__alloyId1157.addEventListener("click", back) : __defers["$.__views.__alloyId1157!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement3.add($.__views.scrollView);
    $.__views.__alloyId1158 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1158"
    });
    $.__views.scrollView.add($.__views.__alloyId1158);
    $.__views.__alloyId1159 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1159"
    });
    $.__views.__alloyId1158.add($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1160"
    });
    $.__views.scrollView.add($.__views.__alloyId1160);
    $.__views.__alloyId1161 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1161"
    });
    $.__views.scrollView.add($.__views.__alloyId1161);
    $.__views.__alloyId1162 = Ti.UI.createLabel({
        text: "Current Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1162"
    });
    $.__views.__alloyId1161.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1163"
    });
    $.__views.scrollView.add($.__views.__alloyId1163);
    $.__views.__alloyId1164 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1164"
    });
    $.__views.scrollView.add($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createLabel({
        text: "Current Postpaid Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1165"
    });
    $.__views.__alloyId1164.add($.__views.__alloyId1165);
    $.__views.__alloyId1166 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1166"
    });
    $.__views.scrollView.add($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1167"
    });
    $.__views.scrollView.add($.__views.__alloyId1167);
    $.__views.__alloyId1168 = Ti.UI.createLabel({
        text: "Currently Prepaid Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1168"
    });
    $.__views.__alloyId1167.add($.__views.__alloyId1168);
    $.__views.__alloyId1169 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1169"
    });
    $.__views.scrollView.add($.__views.__alloyId1169);
    $.__views.__alloyId1170 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1170"
    });
    $.__views.scrollView.add($.__views.__alloyId1170);
    $.__views.__alloyId1171 = Ti.UI.createLabel({
        text: "Currently EWallet Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1171"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1171);
    $.__views.__alloyId1172 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1172"
    });
    $.__views.scrollView.add($.__views.__alloyId1172);
    $.__views.__alloyId1173 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId1173"
    });
    $.__views.scrollView.add($.__views.__alloyId1173);
    $.__views.__alloyId1174 = Ti.UI.createLabel({
        text: "Add-On Package :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId1174"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1174);
    $.__views.__alloyId1175 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1175"
    });
    $.__views.__alloyId1173.add($.__views.__alloyId1175);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1175.add($.__views.picker);
    var __alloyId1176 = [];
    $.__views.__alloyId1177 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1177"
    });
    __alloyId1176.push($.__views.__alloyId1177);
    $.__views.__alloyId1178 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1178"
    });
    __alloyId1176.push($.__views.__alloyId1178);
    $.__views.__alloyId1179 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1179"
    });
    __alloyId1176.push($.__views.__alloyId1179);
    $.__views.__alloyId1180 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1180"
    });
    __alloyId1176.push($.__views.__alloyId1180);
    $.__views.picker.add(__alloyId1176);
    plan ? $.__views.picker.addEventListener("change", plan) : __defers["$.__views.picker!change!plan"] = true;
    $.__views.__alloyId1181 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1181"
    });
    $.__views.__alloyId1175.add($.__views.__alloyId1181);
    $.__views.__alloyId1182 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1182"
    });
    $.__views.scrollView.add($.__views.__alloyId1182);
    $.__views.__alloyId1183 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId1183"
    });
    $.__views.scrollView.add($.__views.__alloyId1183);
    $.__views.__alloyId1184 = Ti.UI.createLabel({
        text: "Charge-to :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId1184"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1184);
    $.__views.__alloyId1185 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1185"
    });
    $.__views.__alloyId1183.add($.__views.__alloyId1185);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1185.add($.__views.picker2);
    var __alloyId1186 = [];
    $.__views.__alloyId1187 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1187"
    });
    __alloyId1186.push($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1188"
    });
    __alloyId1186.push($.__views.__alloyId1188);
    $.__views.__alloyId1189 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1189"
    });
    __alloyId1186.push($.__views.__alloyId1189);
    $.__views.__alloyId1190 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1190"
    });
    __alloyId1186.push($.__views.__alloyId1190);
    $.__views.picker2.add(__alloyId1186);
    charge ? $.__views.picker2.addEventListener("change", charge) : __defers["$.__views.picker2!change!charge"] = true;
    $.__views.__alloyId1191 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1191"
    });
    $.__views.__alloyId1185.add($.__views.__alloyId1191);
    $.__views.__alloyId1192 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1192"
    });
    $.__views.scrollView.add($.__views.__alloyId1192);
    $.__views.__alloyId1193 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1193"
    });
    $.__views.internetManagement3.add($.__views.__alloyId1193);
    submit ? $.__views.__alloyId1193.addEventListener("click", submit) : __defers["$.__views.__alloyId1193!click!submit"] = true;
    $.__views.__alloyId1194 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        id: "__alloyId1194"
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1194);
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
    __defers["$.__views.__alloyId1157!click!back"] && $.__views.__alloyId1157.addEventListener("click", back);
    __defers["$.__views.picker!change!plan"] && $.__views.picker.addEventListener("change", plan);
    __defers["$.__views.picker2!change!charge"] && $.__views.picker2.addEventListener("change", charge);
    __defers["$.__views.__alloyId1193!click!submit"] && $.__views.__alloyId1193.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;