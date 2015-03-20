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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "loyalty";
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
    $.__views.loyalty = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "loyalty"
    });
    $.__views.loyalty && $.addTopLevelView($.__views.loyalty);
    $.__views.__alloyId964 = Alloy.createController("_header", {
        id: "__alloyId964",
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId964.setParent($.__views.loyalty);
    $.__views.__alloyId965 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId965"
    });
    $.__views.loyalty.add($.__views.__alloyId965);
    $.__views.__alloyId966 = Ti.UI.createLabel({
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId966"
    });
    $.__views.__alloyId965.add($.__views.__alloyId966);
    $.__views.__alloyId967 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId967"
    });
    $.__views.__alloyId965.add($.__views.__alloyId967);
    back ? $.__views.__alloyId967.addEventListener("click", back) : __defers["$.__views.__alloyId967!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.loyalty.add($.__views.scrollView);
    $.__views.__alloyId968 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId968"
    });
    $.__views.scrollView.add($.__views.__alloyId968);
    $.__views.__alloyId969 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId969"
    });
    $.__views.__alloyId968.add($.__views.__alloyId969);
    $.__views.__alloyId970 = Ti.UI.createLabel({
        text: "Your Loyalty Points",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
        id: "__alloyId970"
    });
    $.__views.__alloyId969.add($.__views.__alloyId970);
    $.__views.__alloyId971 = Ti.UI.createLabel({
        text: "8500",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
        id: "__alloyId971"
    });
    $.__views.__alloyId969.add($.__views.__alloyId971);
    $.__views.__alloyId972 = Ti.UI.createView({
        height: "50%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId972"
    });
    $.__views.scrollView.add($.__views.__alloyId972);
    $.__views.__alloyId973 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "90%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId973"
    });
    $.__views.__alloyId972.add($.__views.__alloyId973);
    $.__views.__alloyId974 = Ti.UI.createImageView({
        backgroundColor: "yellow",
        width: "40",
        height: "30",
        image: "/images/close_icon.png",
        id: "__alloyId974"
    });
    $.__views.__alloyId973.add($.__views.__alloyId974);
    $.__views.__alloyId975 = Ti.UI.createLabel({
        text: "FREE SMS",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        id: "__alloyId975"
    });
    $.__views.__alloyId973.add($.__views.__alloyId975);
    $.__views.__alloyId976 = Ti.UI.createLabel({
        text: "To redeem free SMS with your Loyalty Points:",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        id: "__alloyId976"
    });
    $.__views.__alloyId973.add($.__views.__alloyId976);
    $.__views.sms = Ti.UI.createLabel({
        id: "sms",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center"
    });
    $.__views.__alloyId973.add($.__views.sms);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";
    __defers["$.__views.__alloyId967!click!back"] && $.__views.__alloyId967.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;