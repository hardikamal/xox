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
    $.__views.__alloyId1034 = Alloy.createController("_header", {
        id: "__alloyId1034",
        __parentSymbol: $.__views.internetManagement2
    });
    $.__views.__alloyId1034.setParent($.__views.internetManagement2);
    $.__views.__alloyId1035 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1035"
    });
    $.__views.internetManagement2.add($.__views.__alloyId1035);
    $.__views.__alloyId1036 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1036"
    });
    $.__views.__alloyId1035.add($.__views.__alloyId1036);
    $.__views.__alloyId1037 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1037"
    });
    $.__views.__alloyId1035.add($.__views.__alloyId1037);
    back ? $.__views.__alloyId1037.addEventListener("click", back) : __defers["$.__views.__alloyId1037!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement2.add($.__views.scrollView);
    $.__views.__alloyId1038 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1038"
    });
    $.__views.scrollView.add($.__views.__alloyId1038);
    $.__views.__alloyId1039 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1039"
    });
    $.__views.__alloyId1038.add($.__views.__alloyId1039);
    $.__views.__alloyId1040 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1040"
    });
    $.__views.scrollView.add($.__views.__alloyId1040);
    $.__views.__alloyId1041 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1041"
    });
    $.__views.scrollView.add($.__views.__alloyId1041);
    $.__views.__alloyId1042 = Ti.UI.createLabel({
        text: "Current Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1042"
    });
    $.__views.__alloyId1041.add($.__views.__alloyId1042);
    $.__views.__alloyId1043 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1043"
    });
    $.__views.scrollView.add($.__views.__alloyId1043);
    $.__views.__alloyId1044 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1044"
    });
    $.__views.scrollView.add($.__views.__alloyId1044);
    $.__views.__alloyId1045 = Ti.UI.createLabel({
        text: "Current Postpaid Available Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1045"
    });
    $.__views.__alloyId1044.add($.__views.__alloyId1045);
    $.__views.__alloyId1046 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1046"
    });
    $.__views.scrollView.add($.__views.__alloyId1046);
    $.__views.__alloyId1047 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1047"
    });
    $.__views.scrollView.add($.__views.__alloyId1047);
    $.__views.__alloyId1048 = Ti.UI.createLabel({
        text: "Currently Prepaid Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1048"
    });
    $.__views.__alloyId1047.add($.__views.__alloyId1048);
    $.__views.__alloyId1049 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1049"
    });
    $.__views.scrollView.add($.__views.__alloyId1049);
    $.__views.__alloyId1050 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1050"
    });
    $.__views.scrollView.add($.__views.__alloyId1050);
    $.__views.__alloyId1051 = Ti.UI.createLabel({
        text: "Currently EWallet Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1051"
    });
    $.__views.__alloyId1050.add($.__views.__alloyId1051);
    $.__views.__alloyId1052 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1052"
    });
    $.__views.scrollView.add($.__views.__alloyId1052);
    $.__views.__alloyId1053 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1053"
    });
    $.__views.scrollView.add($.__views.__alloyId1053);
    $.__views.__alloyId1054 = Ti.UI.createLabel({
        text: "Season Pass Data Counter (MB) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1054"
    });
    $.__views.__alloyId1053.add($.__views.__alloyId1054);
    $.__views.__alloyId1055 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1055"
    });
    $.__views.scrollView.add($.__views.__alloyId1055);
    $.__views.__alloyId1056 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId1056"
    });
    $.__views.scrollView.add($.__views.__alloyId1056);
    $.__views.__alloyId1057 = Ti.UI.createLabel({
        text: "Subscribe / Upgrade to :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId1057"
    });
    $.__views.__alloyId1056.add($.__views.__alloyId1057);
    $.__views.__alloyId1058 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1058"
    });
    $.__views.__alloyId1056.add($.__views.__alloyId1058);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1058.add($.__views.picker);
    var __alloyId1059 = [];
    $.__views.__alloyId1060 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1060"
    });
    __alloyId1059.push($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1061"
    });
    __alloyId1059.push($.__views.__alloyId1061);
    $.__views.__alloyId1062 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1062"
    });
    __alloyId1059.push($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1063"
    });
    __alloyId1059.push($.__views.__alloyId1063);
    $.__views.picker.add(__alloyId1059);
    plan ? $.__views.picker.addEventListener("change", plan) : __defers["$.__views.picker!change!plan"] = true;
    $.__views.__alloyId1064 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1064"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1064);
    $.__views.__alloyId1065 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1065"
    });
    $.__views.scrollView.add($.__views.__alloyId1065);
    $.__views.__alloyId1066 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1066"
    });
    $.__views.internetManagement2.add($.__views.__alloyId1066);
    submit ? $.__views.__alloyId1066.addEventListener("click", submit) : __defers["$.__views.__alloyId1066!click!submit"] = true;
    $.__views.__alloyId1067 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        id: "__alloyId1067"
    });
    $.__views.__alloyId1066.add($.__views.__alloyId1067);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
    var plan;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1037!click!back"] && $.__views.__alloyId1037.addEventListener("click", back);
    __defers["$.__views.picker!change!plan"] && $.__views.picker.addEventListener("change", plan);
    __defers["$.__views.__alloyId1066!click!submit"] && $.__views.__alloyId1066.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;