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
    function purchase() {
        console.log("purchase");
        DRAWER.navigation("onlinePurchases", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mobileData";
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
    $.__views.mobileData = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "mobileData"
    });
    $.__views.mobileData && $.addTopLevelView($.__views.mobileData);
    $.__views.__alloyId1155 = Alloy.createController("_header", {
        id: "__alloyId1155",
        __parentSymbol: $.__views.mobileData
    });
    $.__views.__alloyId1155.setParent($.__views.mobileData);
    $.__views.__alloyId1156 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1156"
    });
    $.__views.mobileData.add($.__views.__alloyId1156);
    $.__views.__alloyId1157 = Ti.UI.createLabel({
        text: "High Speed Internet Pack",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1157"
    });
    $.__views.__alloyId1156.add($.__views.__alloyId1157);
    $.__views.__alloyId1158 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1158"
    });
    $.__views.__alloyId1156.add($.__views.__alloyId1158);
    back ? $.__views.__alloyId1158.addEventListener("click", back) : __defers["$.__views.__alloyId1158!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.mobileData.add($.__views.scrollView);
    $.__views.__alloyId1159 = Ti.UI.createLabel({
        text: "XOX Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1159"
    });
    $.__views.scrollView.add($.__views.__alloyId1159);
    $.__views.__alloyId1160 = Ti.UI.createLabel({
        text: "High Speed Internet Pack RM0",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1160"
    });
    $.__views.scrollView.add($.__views.__alloyId1160);
    $.__views.__alloyId1161 = Ti.UI.createLabel({
        text: "You get:",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1161"
    });
    $.__views.scrollView.add($.__views.__alloyId1161);
    $.__views.__alloyId1162 = Ti.UI.createLabel({
        text: "FREE SIM pack delivered to your doorstep.\nFREE 200MB Mobile Data Plan",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1162"
    });
    $.__views.scrollView.add($.__views.__alloyId1162);
    $.__views.__alloyId1163 = Ti.UI.createLabel({
        text: "How to subscribe Mobile Internet Plan",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1163"
    });
    $.__views.scrollView.add($.__views.__alloyId1163);
    $.__views.__alloyId1164 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1164"
    });
    $.__views.mobileData.add($.__views.__alloyId1164);
    purchase ? $.__views.__alloyId1164.addEventListener("click", purchase) : __defers["$.__views.__alloyId1164!click!purchase"] = true;
    $.__views.__alloyId1165 = Ti.UI.createLabel({
        text: "PURCHASE NOW",
        color: "white",
        id: "__alloyId1165"
    });
    $.__views.__alloyId1164.add($.__views.__alloyId1165);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1158!click!back"] && $.__views.__alloyId1158.addEventListener("click", back);
    __defers["$.__views.__alloyId1164!click!purchase"] && $.__views.__alloyId1164.addEventListener("click", purchase);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;