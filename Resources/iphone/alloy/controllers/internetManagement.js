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
        DRAWER.navigation("myAccount", 1);
    }
    function subscribe() {
        console.log("subscribe");
        DRAWER.navigation("internetManagement2", 1);
    }
    function addOn() {
        console.log("addOn");
        DRAWER.navigation("internetManagement3", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "internetManagement";
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
    $.__views.internetManagement = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "internetManagement"
    });
    $.__views.internetManagement && $.addTopLevelView($.__views.internetManagement);
    $.__views.__alloyId1066 = Alloy.createController("_header", {
        id: "__alloyId1066",
        __parentSymbol: $.__views.internetManagement
    });
    $.__views.__alloyId1066.setParent($.__views.internetManagement);
    $.__views.__alloyId1067 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1067"
    });
    $.__views.internetManagement.add($.__views.__alloyId1067);
    $.__views.__alloyId1068 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1068"
    });
    $.__views.__alloyId1067.add($.__views.__alloyId1068);
    $.__views.__alloyId1069 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1069"
    });
    $.__views.__alloyId1067.add($.__views.__alloyId1069);
    back ? $.__views.__alloyId1069.addEventListener("click", back) : __defers["$.__views.__alloyId1069!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement.add($.__views.scrollView);
    $.__views.__alloyId1070 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1070"
    });
    $.__views.scrollView.add($.__views.__alloyId1070);
    $.__views.__alloyId1071 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1071"
    });
    $.__views.__alloyId1070.add($.__views.__alloyId1071);
    $.__views.__alloyId1072 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1072"
    });
    $.__views.scrollView.add($.__views.__alloyId1072);
    $.__views.__alloyId1073 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1073"
    });
    $.__views.scrollView.add($.__views.__alloyId1073);
    $.__views.__alloyId1074 = Ti.UI.createLabel({
        text: "Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1074"
    });
    $.__views.__alloyId1073.add($.__views.__alloyId1074);
    $.__views.__alloyId1075 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1075"
    });
    $.__views.scrollView.add($.__views.__alloyId1075);
    $.__views.__alloyId1076 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1076"
    });
    $.__views.scrollView.add($.__views.__alloyId1076);
    $.__views.__alloyId1077 = Ti.UI.createLabel({
        text: "Subscription Date :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1077"
    });
    $.__views.__alloyId1076.add($.__views.__alloyId1077);
    $.__views.__alloyId1078 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1078"
    });
    $.__views.scrollView.add($.__views.__alloyId1078);
    $.__views.__alloyId1079 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1079"
    });
    $.__views.scrollView.add($.__views.__alloyId1079);
    $.__views.__alloyId1080 = Ti.UI.createLabel({
        text: "Subscription End Date :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1080"
    });
    $.__views.__alloyId1079.add($.__views.__alloyId1080);
    $.__views.__alloyId1081 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1081"
    });
    $.__views.scrollView.add($.__views.__alloyId1081);
    $.__views.__alloyId1082 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1082"
    });
    $.__views.scrollView.add($.__views.__alloyId1082);
    $.__views.__alloyId1083 = Ti.UI.createLabel({
        text: "Entitled Quota :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1083"
    });
    $.__views.__alloyId1082.add($.__views.__alloyId1083);
    $.__views.__alloyId1084 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1084"
    });
    $.__views.scrollView.add($.__views.__alloyId1084);
    $.__views.__alloyId1085 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1085"
    });
    $.__views.scrollView.add($.__views.__alloyId1085);
    $.__views.__alloyId1086 = Ti.UI.createLabel({
        text: "Balance Quota :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1086"
    });
    $.__views.__alloyId1085.add($.__views.__alloyId1086);
    $.__views.__alloyId1087 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1087"
    });
    $.__views.scrollView.add($.__views.__alloyId1087);
    $.__views.__alloyId1088 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1088"
    });
    $.__views.scrollView.add($.__views.__alloyId1088);
    $.__views.__alloyId1089 = Ti.UI.createLabel({
        text: "Last updated by :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1089"
    });
    $.__views.__alloyId1088.add($.__views.__alloyId1089);
    $.__views.__alloyId1090 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1090"
    });
    $.__views.scrollView.add($.__views.__alloyId1090);
    $.__views.__alloyId1091 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1091"
    });
    $.__views.internetManagement.add($.__views.__alloyId1091);
    $.__views.__alloyId1092 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1092"
    });
    $.__views.__alloyId1091.add($.__views.__alloyId1092);
    subscribe ? $.__views.__alloyId1092.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1092!click!subscribe"] = true;
    $.__views.__alloyId1093 = Ti.UI.createLabel({
        text: "Subscribe/Upgrade Plan",
        color: "white",
        textAlign: "center",
        id: "__alloyId1093"
    });
    $.__views.__alloyId1092.add($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1094"
    });
    $.__views.__alloyId1091.add($.__views.__alloyId1094);
    $.__views.__alloyId1095 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1095"
    });
    $.__views.__alloyId1091.add($.__views.__alloyId1095);
    addOn ? $.__views.__alloyId1095.addEventListener("click", addOn) : __defers["$.__views.__alloyId1095!click!addOn"] = true;
    $.__views.__alloyId1096 = Ti.UI.createLabel({
        text: "Add On",
        color: "white",
        textAlign: "center",
        id: "__alloyId1096"
    });
    $.__views.__alloyId1095.add($.__views.__alloyId1096);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1069!click!back"] && $.__views.__alloyId1069.addEventListener("click", back);
    __defers["$.__views.__alloyId1092!click!subscribe"] && $.__views.__alloyId1092.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId1095!click!addOn"] && $.__views.__alloyId1095.addEventListener("click", addOn);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;