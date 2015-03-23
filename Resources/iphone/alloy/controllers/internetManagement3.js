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
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.planLabel.text = plan);
    }
    function showPicker() {
        console.log("showPicker");
        console.log("$.pickerView.visible: " + $.pickerView.visible);
        if ("false" == $.pickerView.visible) {
            console.log("false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            console.log("else false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            console.log("else true");
            $.contentView.height = 100;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function done() {
        console.log("done");
        $.contentView.height = 100;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
    }
    function charge(e) {
        console.log("charge");
        charge = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.chargeLabel.text = charge);
    }
    function showPicker2() {
        console.log("showPicker2");
        console.log("$.pickerView.visible: " + $.pickerView2.visible);
        if ("false" == $.pickerView2.visible) {
            console.log("false");
            $.contentView2.height = 300;
            $.pickerView2.height = 250;
            $.pickerContentView2.height = 250;
            $.pickerView2.setVisible(true);
            $.done2.setVisible(true);
            $.picker2.setVisible(true);
        } else if (false == $.pickerView2.visible) {
            console.log("else false");
            $.contentView2.height = 300;
            $.pickerView2.height = 250;
            $.pickerContentView2.height = 250;
            $.pickerView2.setVisible(true);
            $.done2.setVisible(true);
            $.picker2.setVisible(true);
        } else {
            console.log("else true");
            $.contentView2.height = 100;
            $.pickerView2.height = 50;
            $.pickerContentView2.height = 50;
            $.pickerView2.setVisible(false);
            $.done2.setVisible(false);
            $.picker2.setVisible(false);
        }
    }
    function done2() {
        console.log("done2");
        $.contentView2.height = 100;
        $.pickerView2.height = 50;
        $.pickerContentView2.height = 50;
        $.pickerView2.setVisible(false);
        $.done2.setVisible(false);
        $.picker2.setVisible(false);
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
    $.__views.__alloyId1062 = Alloy.createController("_header", {
        id: "__alloyId1062",
        __parentSymbol: $.__views.internetManagement3
    });
    $.__views.__alloyId1062.setParent($.__views.internetManagement3);
    $.__views.__alloyId1063 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1063"
    });
    $.__views.internetManagement3.add($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1064"
    });
    $.__views.__alloyId1063.add($.__views.__alloyId1064);
    $.__views.__alloyId1065 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1065"
    });
    $.__views.__alloyId1063.add($.__views.__alloyId1065);
    back ? $.__views.__alloyId1065.addEventListener("click", back) : __defers["$.__views.__alloyId1065!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement3.add($.__views.scrollView);
    $.__views.__alloyId1066 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1066"
    });
    $.__views.scrollView.add($.__views.__alloyId1066);
    $.__views.__alloyId1067 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1067"
    });
    $.__views.__alloyId1066.add($.__views.__alloyId1067);
    $.__views.__alloyId1068 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1068"
    });
    $.__views.scrollView.add($.__views.__alloyId1068);
    $.__views.__alloyId1069 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1069"
    });
    $.__views.scrollView.add($.__views.__alloyId1069);
    $.__views.__alloyId1070 = Ti.UI.createLabel({
        text: "Current Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1070"
    });
    $.__views.__alloyId1069.add($.__views.__alloyId1070);
    $.__views.__alloyId1071 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1071"
    });
    $.__views.scrollView.add($.__views.__alloyId1071);
    $.__views.__alloyId1072 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1072"
    });
    $.__views.scrollView.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createLabel({
        text: "Current Postpaid Balance (RM) :",
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
        text: "Currently Prepaid Balance (RM) :",
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
        text: "Currently EWallet Balance (RM) :",
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
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "100"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1081 = Ti.UI.createLabel({
        text: "Add-On Package :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId1081"
    });
    $.__views.contentView.add($.__views.__alloyId1081);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.planLabel = Ti.UI.createLabel({
        id: "planLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.planLabel);
    showPicker ? $.__views.planLabel.addEventListener("click", showPicker) : __defers["$.__views.planLabel!click!showPicker"] = true;
    $.__views.__alloyId1082 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1082"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1082);
    showPicker ? $.__views.__alloyId1082.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1082!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50",
        backgroundColor: "blue"
    });
    $.__views.pickerContentView.add($.__views.pickerView);
    $.__views.done = Ti.UI.createButton({
        title: "Done",
        id: "done",
        height: "30",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        top: "0",
        left: "0",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.done);
    done ? $.__views.done.addEventListener("click", done) : __defers["$.__views.done!click!done"] = true;
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "30",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.picker);
    var __alloyId1083 = [];
    $.__views.__alloyId1084 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1084"
    });
    __alloyId1083.push($.__views.__alloyId1084);
    $.__views.__alloyId1085 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1085"
    });
    __alloyId1083.push($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1086"
    });
    __alloyId1083.push($.__views.__alloyId1086);
    $.__views.__alloyId1087 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1087"
    });
    __alloyId1083.push($.__views.__alloyId1087);
    $.__views.picker.add(__alloyId1083);
    plan ? $.__views.picker.addEventListener("change", plan) : __defers["$.__views.picker!change!plan"] = true;
    $.__views.__alloyId1088 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1088"
    });
    $.__views.scrollView.add($.__views.__alloyId1088);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "100"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1089 = Ti.UI.createLabel({
        text: "Charge-to :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId1089"
    });
    $.__views.contentView2.add($.__views.__alloyId1089);
    $.__views.pickerContentView2 = Ti.UI.createView({
        id: "pickerContentView2",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView2.add($.__views.pickerContentView2);
    $.__views.chargeLabel = Ti.UI.createLabel({
        id: "chargeLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView2.add($.__views.chargeLabel);
    showPicker2 ? $.__views.chargeLabel.addEventListener("click", showPicker2) : __defers["$.__views.chargeLabel!click!showPicker2"] = true;
    $.__views.__alloyId1090 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1090"
    });
    $.__views.pickerContentView2.add($.__views.__alloyId1090);
    showPicker ? $.__views.__alloyId1090.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1090!click!showPicker"] = true;
    $.__views.pickerView2 = Ti.UI.createView({
        id: "pickerView2",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50",
        backgroundColor: "blue"
    });
    $.__views.pickerContentView2.add($.__views.pickerView2);
    $.__views.done2 = Ti.UI.createButton({
        title: "Done",
        id: "done2",
        height: "30",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        top: "0",
        left: "0",
        visible: "false"
    });
    $.__views.pickerView2.add($.__views.done2);
    done2 ? $.__views.done2.addEventListener("click", done2) : __defers["$.__views.done2!click!done2"] = true;
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "30",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "false"
    });
    $.__views.pickerView2.add($.__views.picker2);
    var __alloyId1091 = [];
    $.__views.__alloyId1092 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1092"
    });
    __alloyId1091.push($.__views.__alloyId1092);
    $.__views.__alloyId1093 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1093"
    });
    __alloyId1091.push($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1094"
    });
    __alloyId1091.push($.__views.__alloyId1094);
    $.__views.__alloyId1095 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1095"
    });
    __alloyId1091.push($.__views.__alloyId1095);
    $.__views.picker2.add(__alloyId1091);
    charge ? $.__views.picker2.addEventListener("change", charge) : __defers["$.__views.picker2!change!charge"] = true;
    $.__views.__alloyId1096 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1096"
    });
    $.__views.scrollView.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1097"
    });
    $.__views.internetManagement3.add($.__views.__alloyId1097);
    submit ? $.__views.__alloyId1097.addEventListener("click", submit) : __defers["$.__views.__alloyId1097!click!submit"] = true;
    $.__views.__alloyId1098 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        id: "__alloyId1098"
    });
    $.__views.__alloyId1097.add($.__views.__alloyId1098);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
        $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
    }
    var plan;
    var charge;
    $.picker.setSelectedRow(0, 0, false);
    $.picker2.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1065!click!back"] && $.__views.__alloyId1065.addEventListener("click", back);
    __defers["$.__views.planLabel!click!showPicker"] && $.__views.planLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1082!click!showPicker"] && $.__views.__alloyId1082.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!plan"] && $.__views.picker.addEventListener("change", plan);
    __defers["$.__views.chargeLabel!click!showPicker2"] && $.__views.chargeLabel.addEventListener("click", showPicker2);
    __defers["$.__views.__alloyId1090!click!showPicker"] && $.__views.__alloyId1090.addEventListener("click", showPicker);
    __defers["$.__views.done2!click!done2"] && $.__views.done2.addEventListener("click", done2);
    __defers["$.__views.picker2!change!charge"] && $.__views.picker2.addEventListener("change", charge);
    __defers["$.__views.__alloyId1097!click!submit"] && $.__views.__alloyId1097.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;