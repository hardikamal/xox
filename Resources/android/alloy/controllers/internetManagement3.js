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
    $.__views.__alloyId1131 = Alloy.createController("_header", {
        id: "__alloyId1131",
        __parentSymbol: $.__views.internetManagement3
    });
    $.__views.__alloyId1131.setParent($.__views.internetManagement3);
    $.__views.__alloyId1132 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1132"
    });
    $.__views.internetManagement3.add($.__views.__alloyId1132);
    $.__views.__alloyId1133 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1133"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1133);
    $.__views.__alloyId1134 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1134"
    });
    $.__views.__alloyId1132.add($.__views.__alloyId1134);
    back ? $.__views.__alloyId1134.addEventListener("click", back) : __defers["$.__views.__alloyId1134!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement3.add($.__views.scrollView);
    $.__views.__alloyId1135 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1135"
    });
    $.__views.scrollView.add($.__views.__alloyId1135);
    $.__views.__alloyId1136 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1136"
    });
    $.__views.__alloyId1135.add($.__views.__alloyId1136);
    $.__views.__alloyId1137 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1137"
    });
    $.__views.scrollView.add($.__views.__alloyId1137);
    $.__views.__alloyId1138 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1138"
    });
    $.__views.scrollView.add($.__views.__alloyId1138);
    $.__views.__alloyId1139 = Ti.UI.createLabel({
        text: "Current Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1139"
    });
    $.__views.__alloyId1138.add($.__views.__alloyId1139);
    $.__views.__alloyId1140 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1140"
    });
    $.__views.scrollView.add($.__views.__alloyId1140);
    $.__views.__alloyId1141 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1141"
    });
    $.__views.scrollView.add($.__views.__alloyId1141);
    $.__views.__alloyId1142 = Ti.UI.createLabel({
        text: "Current Postpaid Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1142"
    });
    $.__views.__alloyId1141.add($.__views.__alloyId1142);
    $.__views.__alloyId1143 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1143"
    });
    $.__views.scrollView.add($.__views.__alloyId1143);
    $.__views.__alloyId1144 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1144"
    });
    $.__views.scrollView.add($.__views.__alloyId1144);
    $.__views.__alloyId1145 = Ti.UI.createLabel({
        text: "Currently Prepaid Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1145"
    });
    $.__views.__alloyId1144.add($.__views.__alloyId1145);
    $.__views.__alloyId1146 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1146"
    });
    $.__views.scrollView.add($.__views.__alloyId1146);
    $.__views.__alloyId1147 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1147"
    });
    $.__views.scrollView.add($.__views.__alloyId1147);
    $.__views.__alloyId1148 = Ti.UI.createLabel({
        text: "Currently EWallet Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1148"
    });
    $.__views.__alloyId1147.add($.__views.__alloyId1148);
    $.__views.__alloyId1149 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1149"
    });
    $.__views.scrollView.add($.__views.__alloyId1149);
    $.__views.__alloyId1150 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId1150"
    });
    $.__views.scrollView.add($.__views.__alloyId1150);
    $.__views.__alloyId1151 = Ti.UI.createLabel({
        text: "Add-On Package :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId1151"
    });
    $.__views.__alloyId1150.add($.__views.__alloyId1151);
    $.__views.__alloyId1152 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1152"
    });
    $.__views.__alloyId1150.add($.__views.__alloyId1152);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1152.add($.__views.picker);
    var __alloyId1153 = [];
    $.__views.__alloyId1154 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1154"
    });
    __alloyId1153.push($.__views.__alloyId1154);
    $.__views.__alloyId1155 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1155"
    });
    __alloyId1153.push($.__views.__alloyId1155);
    $.__views.__alloyId1156 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1156"
    });
    __alloyId1153.push($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1157"
    });
    __alloyId1153.push($.__views.__alloyId1157);
    $.__views.picker.add(__alloyId1153);
    plan ? $.__views.picker.addEventListener("change", plan) : __defers["$.__views.picker!change!plan"] = true;
    $.__views.__alloyId1158 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1158"
    });
    $.__views.__alloyId1152.add($.__views.__alloyId1158);
    $.__views.__alloyId1159 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1159"
    });
    $.__views.scrollView.add($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId1160"
    });
    $.__views.scrollView.add($.__views.__alloyId1160);
    $.__views.__alloyId1161 = Ti.UI.createLabel({
        text: "Charge-to :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId1161"
    });
    $.__views.__alloyId1160.add($.__views.__alloyId1161);
    $.__views.__alloyId1162 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1162"
    });
    $.__views.__alloyId1160.add($.__views.__alloyId1162);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1162.add($.__views.picker2);
    var __alloyId1163 = [];
    $.__views.__alloyId1164 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1164"
    });
    __alloyId1163.push($.__views.__alloyId1164);
    $.__views.__alloyId1165 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1165"
    });
    __alloyId1163.push($.__views.__alloyId1165);
    $.__views.__alloyId1166 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1166"
    });
    __alloyId1163.push($.__views.__alloyId1166);
    $.__views.__alloyId1167 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1167"
    });
    __alloyId1163.push($.__views.__alloyId1167);
    $.__views.picker2.add(__alloyId1163);
    charge ? $.__views.picker2.addEventListener("change", charge) : __defers["$.__views.picker2!change!charge"] = true;
    $.__views.__alloyId1168 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1168"
    });
    $.__views.__alloyId1162.add($.__views.__alloyId1168);
    $.__views.__alloyId1169 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1169"
    });
    $.__views.scrollView.add($.__views.__alloyId1169);
    $.__views.__alloyId1170 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1170"
    });
    $.__views.internetManagement3.add($.__views.__alloyId1170);
    submit ? $.__views.__alloyId1170.addEventListener("click", submit) : __defers["$.__views.__alloyId1170!click!submit"] = true;
    $.__views.__alloyId1171 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        id: "__alloyId1171"
    });
    $.__views.__alloyId1170.add($.__views.__alloyId1171);
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
    __defers["$.__views.__alloyId1134!click!back"] && $.__views.__alloyId1134.addEventListener("click", back);
    __defers["$.__views.picker!change!plan"] && $.__views.picker.addEventListener("change", plan);
    __defers["$.__views.picker2!change!charge"] && $.__views.picker2.addEventListener("change", charge);
    __defers["$.__views.__alloyId1170!click!submit"] && $.__views.__alloyId1170.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;