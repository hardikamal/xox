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
        DRAWER.navigation("myAccount", 2);
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
    $.__views.__alloyId1003 = Alloy.createController("_header", {
        id: "__alloyId1003",
        __parentSymbol: $.__views.internetManagement
    });
    $.__views.__alloyId1003.setParent($.__views.internetManagement);
    $.__views.__alloyId1004 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1004"
    });
    $.__views.internetManagement.add($.__views.__alloyId1004);
    $.__views.__alloyId1005 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1005"
    });
    $.__views.__alloyId1004.add($.__views.__alloyId1005);
    $.__views.__alloyId1006 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1006"
    });
    $.__views.__alloyId1004.add($.__views.__alloyId1006);
    back ? $.__views.__alloyId1006.addEventListener("click", back) : __defers["$.__views.__alloyId1006!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement.add($.__views.scrollView);
    $.__views.__alloyId1007 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1007"
    });
    $.__views.scrollView.add($.__views.__alloyId1007);
    $.__views.__alloyId1008 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1008"
    });
    $.__views.__alloyId1007.add($.__views.__alloyId1008);
    $.__views.__alloyId1009 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1009"
    });
    $.__views.scrollView.add($.__views.__alloyId1009);
    $.__views.__alloyId1010 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1010"
    });
    $.__views.scrollView.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createLabel({
        text: "Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1011"
    });
    $.__views.__alloyId1010.add($.__views.__alloyId1011);
    $.__views.__alloyId1012 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1012"
    });
    $.__views.scrollView.add($.__views.__alloyId1012);
    $.__views.__alloyId1013 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1013"
    });
    $.__views.scrollView.add($.__views.__alloyId1013);
    $.__views.__alloyId1014 = Ti.UI.createLabel({
        text: "Subscription Date :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1014"
    });
    $.__views.__alloyId1013.add($.__views.__alloyId1014);
    $.__views.__alloyId1015 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1015"
    });
    $.__views.scrollView.add($.__views.__alloyId1015);
    $.__views.__alloyId1016 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1016"
    });
    $.__views.scrollView.add($.__views.__alloyId1016);
    $.__views.__alloyId1017 = Ti.UI.createLabel({
        text: "Subscription End Date :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1017"
    });
    $.__views.__alloyId1016.add($.__views.__alloyId1017);
    $.__views.__alloyId1018 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1018"
    });
    $.__views.scrollView.add($.__views.__alloyId1018);
    $.__views.__alloyId1019 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1019"
    });
    $.__views.scrollView.add($.__views.__alloyId1019);
    $.__views.__alloyId1020 = Ti.UI.createLabel({
        text: "Entitled Quota :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1020"
    });
    $.__views.__alloyId1019.add($.__views.__alloyId1020);
    $.__views.__alloyId1021 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1021"
    });
    $.__views.scrollView.add($.__views.__alloyId1021);
    $.__views.__alloyId1022 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1022"
    });
    $.__views.scrollView.add($.__views.__alloyId1022);
    $.__views.__alloyId1023 = Ti.UI.createLabel({
        text: "Balance Quota :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1023"
    });
    $.__views.__alloyId1022.add($.__views.__alloyId1023);
    $.__views.__alloyId1024 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1024"
    });
    $.__views.scrollView.add($.__views.__alloyId1024);
    $.__views.__alloyId1025 = Ti.UI.createView({
        height: "50",
        id: "__alloyId1025"
    });
    $.__views.scrollView.add($.__views.__alloyId1025);
    $.__views.__alloyId1026 = Ti.UI.createLabel({
        text: "Last updated by :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1026"
    });
    $.__views.__alloyId1025.add($.__views.__alloyId1026);
    $.__views.__alloyId1027 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1027"
    });
    $.__views.scrollView.add($.__views.__alloyId1027);
    $.__views.__alloyId1028 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1028"
    });
    $.__views.internetManagement.add($.__views.__alloyId1028);
    $.__views.__alloyId1029 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1029"
    });
    $.__views.__alloyId1028.add($.__views.__alloyId1029);
    subscribe ? $.__views.__alloyId1029.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1029!click!subscribe"] = true;
    $.__views.__alloyId1030 = Ti.UI.createLabel({
        text: "Subscribe/Upgrade Plan",
        color: "white",
        textAlign: "center",
        id: "__alloyId1030"
    });
    $.__views.__alloyId1029.add($.__views.__alloyId1030);
    $.__views.__alloyId1031 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1031"
    });
    $.__views.__alloyId1028.add($.__views.__alloyId1031);
    $.__views.__alloyId1032 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1032"
    });
    $.__views.__alloyId1028.add($.__views.__alloyId1032);
    addOn ? $.__views.__alloyId1032.addEventListener("click", addOn) : __defers["$.__views.__alloyId1032!click!addOn"] = true;
    $.__views.__alloyId1033 = Ti.UI.createLabel({
        text: "Add On",
        color: "white",
        textAlign: "center",
        id: "__alloyId1033"
    });
    $.__views.__alloyId1032.add($.__views.__alloyId1033);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId1006!click!back"] && $.__views.__alloyId1006.addEventListener("click", back);
    __defers["$.__views.__alloyId1029!click!subscribe"] && $.__views.__alloyId1029.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId1032!click!addOn"] && $.__views.__alloyId1032.addEventListener("click", addOn);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;