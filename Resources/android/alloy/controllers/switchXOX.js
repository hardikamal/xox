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
    function register() {
        console.log("register");
        DRAWER.navigation("switchXOX2", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "switchXOX";
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
    $.__views.switchXOX = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "switchXOX"
    });
    $.__views.switchXOX && $.addTopLevelView($.__views.switchXOX);
    $.__views.__alloyId2920 = Alloy.createController("_header", {
        id: "__alloyId2920",
        __parentSymbol: $.__views.switchXOX
    });
    $.__views.__alloyId2920.setParent($.__views.switchXOX);
    $.__views.__alloyId2921 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId2921"
    });
    $.__views.switchXOX.add($.__views.__alloyId2921);
    $.__views.__alloyId2922 = Ti.UI.createLabel({
        text: "#1758 SWITCH TO XOX",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId2922"
    });
    $.__views.__alloyId2921.add($.__views.__alloyId2922);
    $.__views.__alloyId2923 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2923"
    });
    $.__views.__alloyId2921.add($.__views.__alloyId2923);
    back ? $.__views.__alloyId2923.addEventListener("click", back) : __defers["$.__views.__alloyId2923!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.switchXOX.add($.__views.scrollView);
    $.__views.__alloyId2924 = Ti.UI.createLabel({
        text: "*Special hor Penang Nia!!!",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2924"
    });
    $.__views.scrollView.add($.__views.__alloyId2924);
    $.__views.__alloyId2925 = Ti.UI.createLabel({
        text: "FREE DATA* \nEVERY MONTH!",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2925"
    });
    $.__views.scrollView.add($.__views.__alloyId2925);
    $.__views.__alloyId2926 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId2926"
    });
    $.__views.switchXOX.add($.__views.__alloyId2926);
    register ? $.__views.__alloyId2926.addEventListener("click", register) : __defers["$.__views.__alloyId2926!click!register"] = true;
    $.__views.__alloyId2927 = Ti.UI.createLabel({
        text: "REGISTER NOW",
        color: "white",
        id: "__alloyId2927"
    });
    $.__views.__alloyId2926.add($.__views.__alloyId2927);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId2923!click!back"] && $.__views.__alloyId2923.addEventListener("click", back);
    __defers["$.__views.__alloyId2926!click!register"] && $.__views.__alloyId2926.addEventListener("click", register);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;