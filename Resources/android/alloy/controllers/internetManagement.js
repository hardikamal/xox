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
    $.__views.__alloyId1089 = Alloy.createController("_header", {
        id: "__alloyId1089",
        __parentSymbol: $.__views.internetManagement
    });
    $.__views.__alloyId1089.setParent($.__views.internetManagement);
    $.__views.__alloyId1090 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1090"
    });
    $.__views.internetManagement.add($.__views.__alloyId1090);
    $.__views.__alloyId1091 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1091"
    });
    $.__views.__alloyId1090.add($.__views.__alloyId1091);
    $.__views.__alloyId1092 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1092"
    });
    $.__views.__alloyId1090.add($.__views.__alloyId1092);
    back ? $.__views.__alloyId1092.addEventListener("click", back) : __defers["$.__views.__alloyId1092!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement.add($.__views.scrollView);
    $.__views.__alloyId1093 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1093"
    });
    $.__views.scrollView.add($.__views.__alloyId1093);
    $.__views.__alloyId1094 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1094"
    });
    $.__views.__alloyId1093.add($.__views.__alloyId1094);
    $.__views.__alloyId1095 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1095"
    });
    $.__views.scrollView.add($.__views.__alloyId1095);
    $.__views.__alloyId1096 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1096"
    });
    $.__views.scrollView.add($.__views.__alloyId1096);
    $.__views.__alloyId1097 = Ti.UI.createLabel({
        text: "Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1097"
    });
    $.__views.__alloyId1096.add($.__views.__alloyId1097);
    $.__views.__alloyId1098 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1098"
    });
    $.__views.scrollView.add($.__views.__alloyId1098);
    $.__views.__alloyId1099 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1099"
    });
    $.__views.scrollView.add($.__views.__alloyId1099);
    $.__views.__alloyId1100 = Ti.UI.createLabel({
        text: "Subscription Date :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1100"
    });
    $.__views.__alloyId1099.add($.__views.__alloyId1100);
    $.__views.__alloyId1101 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1101"
    });
    $.__views.scrollView.add($.__views.__alloyId1101);
    $.__views.__alloyId1102 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1102"
    });
    $.__views.scrollView.add($.__views.__alloyId1102);
    $.__views.__alloyId1103 = Ti.UI.createLabel({
        text: "Subscription End Date :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1103"
    });
    $.__views.__alloyId1102.add($.__views.__alloyId1103);
    $.__views.__alloyId1104 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1104"
    });
    $.__views.scrollView.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1105"
    });
    $.__views.scrollView.add($.__views.__alloyId1105);
    $.__views.__alloyId1106 = Ti.UI.createLabel({
        text: "Entitled Quota :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1106"
    });
    $.__views.__alloyId1105.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1107"
    });
    $.__views.scrollView.add($.__views.__alloyId1107);
    $.__views.__alloyId1108 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1108"
    });
    $.__views.scrollView.add($.__views.__alloyId1108);
    $.__views.__alloyId1109 = Ti.UI.createLabel({
        text: "Balance Quota :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1109"
    });
    $.__views.__alloyId1108.add($.__views.__alloyId1109);
    $.__views.__alloyId1110 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1110"
    });
    $.__views.scrollView.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1111"
    });
    $.__views.scrollView.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createLabel({
        text: "Last updated by :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1112"
    });
    $.__views.__alloyId1111.add($.__views.__alloyId1112);
    $.__views.__alloyId1113 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1113"
    });
    $.__views.scrollView.add($.__views.__alloyId1113);
    $.__views.__alloyId1114 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1114"
    });
    $.__views.internetManagement.add($.__views.__alloyId1114);
    $.__views.__alloyId1115 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1115"
    });
    $.__views.__alloyId1114.add($.__views.__alloyId1115);
    subscribe ? $.__views.__alloyId1115.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1115!click!subscribe"] = true;
    $.__views.__alloyId1116 = Ti.UI.createLabel({
        text: "Subscribe/Upgrade Plan",
        color: "white",
        textAlign: "center",
        id: "__alloyId1116"
    });
    $.__views.__alloyId1115.add($.__views.__alloyId1116);
    $.__views.__alloyId1117 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1117"
    });
    $.__views.__alloyId1114.add($.__views.__alloyId1117);
    $.__views.__alloyId1118 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1118"
    });
    $.__views.__alloyId1114.add($.__views.__alloyId1118);
    addOn ? $.__views.__alloyId1118.addEventListener("click", addOn) : __defers["$.__views.__alloyId1118!click!addOn"] = true;
    $.__views.__alloyId1119 = Ti.UI.createLabel({
        text: "Add On",
        color: "white",
        textAlign: "center",
        id: "__alloyId1119"
    });
    $.__views.__alloyId1118.add($.__views.__alloyId1119);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1092!click!back"] && $.__views.__alloyId1092.addEventListener("click", back);
    __defers["$.__views.__alloyId1115!click!subscribe"] && $.__views.__alloyId1115.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId1118!click!addOn"] && $.__views.__alloyId1118.addEventListener("click", addOn);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;