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
    $.__views.__alloyId953 = Alloy.createController("_header", {
        id: "__alloyId953",
        __parentSymbol: $.__views.internetManagement
    });
    $.__views.__alloyId953.setParent($.__views.internetManagement);
    $.__views.__alloyId954 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId954"
    });
    $.__views.internetManagement.add($.__views.__alloyId954);
    $.__views.__alloyId955 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId955"
    });
    $.__views.__alloyId954.add($.__views.__alloyId955);
    $.__views.__alloyId956 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId956"
    });
    $.__views.__alloyId954.add($.__views.__alloyId956);
    back ? $.__views.__alloyId956.addEventListener("click", back) : __defers["$.__views.__alloyId956!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement.add($.__views.scrollView);
    $.__views.__alloyId957 = Ti.UI.createView({
        height: "50",
        id: "__alloyId957"
    });
    $.__views.scrollView.add($.__views.__alloyId957);
    $.__views.__alloyId958 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId958"
    });
    $.__views.__alloyId957.add($.__views.__alloyId958);
    $.__views.__alloyId959 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId959"
    });
    $.__views.scrollView.add($.__views.__alloyId959);
    $.__views.__alloyId960 = Ti.UI.createView({
        height: "50",
        id: "__alloyId960"
    });
    $.__views.scrollView.add($.__views.__alloyId960);
    $.__views.__alloyId961 = Ti.UI.createLabel({
        text: "Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId961"
    });
    $.__views.__alloyId960.add($.__views.__alloyId961);
    $.__views.__alloyId962 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId962"
    });
    $.__views.scrollView.add($.__views.__alloyId962);
    $.__views.__alloyId963 = Ti.UI.createView({
        height: "50",
        id: "__alloyId963"
    });
    $.__views.scrollView.add($.__views.__alloyId963);
    $.__views.__alloyId964 = Ti.UI.createLabel({
        text: "Subscription Date :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId964"
    });
    $.__views.__alloyId963.add($.__views.__alloyId964);
    $.__views.__alloyId965 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId965"
    });
    $.__views.scrollView.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createView({
        height: "50",
        id: "__alloyId966"
    });
    $.__views.scrollView.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createLabel({
        text: "Subscription End Date :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId967"
    });
    $.__views.__alloyId966.add($.__views.__alloyId967);
    $.__views.__alloyId968 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId968"
    });
    $.__views.scrollView.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createView({
        height: "50",
        id: "__alloyId969"
    });
    $.__views.scrollView.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createLabel({
        text: "Entitled Quota :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId970"
    });
    $.__views.__alloyId969.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId971"
    });
    $.__views.scrollView.add($.__views.__alloyId971);
    $.__views.__alloyId972 = Ti.UI.createView({
        height: "50",
        id: "__alloyId972"
    });
    $.__views.scrollView.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createLabel({
        text: "Balance Quota :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId973"
    });
    $.__views.__alloyId972.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId974"
    });
    $.__views.scrollView.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createView({
        height: "50",
        id: "__alloyId975"
    });
    $.__views.scrollView.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createLabel({
        text: "Last updated by :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId976"
    });
    $.__views.__alloyId975.add($.__views.__alloyId976);
    $.__views.__alloyId977 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId977"
    });
    $.__views.scrollView.add($.__views.__alloyId977);
    $.__views.__alloyId978 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId978"
    });
    $.__views.internetManagement.add($.__views.__alloyId978);
    $.__views.__alloyId979 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId979"
    });
    $.__views.__alloyId978.add($.__views.__alloyId979);
    subscribe ? $.__views.__alloyId979.addEventListener("click", subscribe) : __defers["$.__views.__alloyId979!click!subscribe"] = true;
    $.__views.__alloyId980 = Ti.UI.createLabel({
        text: "Subscribe/Upgrade Plan",
        color: "white",
        textAlign: "center",
        id: "__alloyId980"
    });
    $.__views.__alloyId979.add($.__views.__alloyId980);
    $.__views.__alloyId981 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId981"
    });
    $.__views.__alloyId978.add($.__views.__alloyId981);
    $.__views.__alloyId982 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId982"
    });
    $.__views.__alloyId978.add($.__views.__alloyId982);
    addOn ? $.__views.__alloyId982.addEventListener("click", addOn) : __defers["$.__views.__alloyId982!click!addOn"] = true;
    $.__views.__alloyId983 = Ti.UI.createLabel({
        text: "Add On",
        color: "white",
        textAlign: "center",
        id: "__alloyId983"
    });
    $.__views.__alloyId982.add($.__views.__alloyId983);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId956!click!back"] && $.__views.__alloyId956.addEventListener("click", back);
    __defers["$.__views.__alloyId979!click!subscribe"] && $.__views.__alloyId979.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId982!click!addOn"] && $.__views.__alloyId982.addEventListener("click", addOn);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;