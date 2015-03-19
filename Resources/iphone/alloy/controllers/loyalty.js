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
    $.__views.__alloyId531 = Alloy.createController("_header", {
        id: "__alloyId531",
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId531.setParent($.__views.loyalty);
    $.__views.__alloyId532 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId532"
    });
    $.__views.loyalty.add($.__views.__alloyId532);
    $.__views.__alloyId533 = Ti.UI.createLabel({
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId533"
    });
    $.__views.__alloyId532.add($.__views.__alloyId533);
    $.__views.__alloyId534 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId534"
    });
    $.__views.__alloyId532.add($.__views.__alloyId534);
    back ? $.__views.__alloyId534.addEventListener("click", back) : __defers["$.__views.__alloyId534!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.loyalty.add($.__views.scrollView);
    $.__views.__alloyId535 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId535"
    });
    $.__views.scrollView.add($.__views.__alloyId535);
    $.__views.__alloyId536 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId536"
    });
    $.__views.__alloyId535.add($.__views.__alloyId536);
    $.__views.__alloyId537 = Ti.UI.createLabel({
        text: "Your Loyalty Points",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
        id: "__alloyId537"
    });
    $.__views.__alloyId536.add($.__views.__alloyId537);
    $.__views.__alloyId538 = Ti.UI.createLabel({
        text: "8500",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
        id: "__alloyId538"
    });
    $.__views.__alloyId536.add($.__views.__alloyId538);
    $.__views.__alloyId539 = Ti.UI.createView({
        height: "50%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId539"
    });
    $.__views.scrollView.add($.__views.__alloyId539);
    $.__views.__alloyId540 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "90%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId540"
    });
    $.__views.__alloyId539.add($.__views.__alloyId540);
    $.__views.__alloyId541 = Ti.UI.createImageView({
        backgroundColor: "yellow",
        width: "40",
        height: "30",
        image: "/images/close_icon.png",
        id: "__alloyId541"
    });
    $.__views.__alloyId540.add($.__views.__alloyId541);
    $.__views.__alloyId542 = Ti.UI.createLabel({
        text: "FREE SMS",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        id: "__alloyId542"
    });
    $.__views.__alloyId540.add($.__views.__alloyId542);
    $.__views.__alloyId543 = Ti.UI.createLabel({
        text: "To redeem free SMS with your Loyalty Points:",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
        id: "__alloyId543"
    });
    $.__views.__alloyId540.add($.__views.__alloyId543);
    $.__views.sms = Ti.UI.createLabel({
        id: "sms",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center"
    });
    $.__views.__alloyId540.add($.__views.sms);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sms.text = "SMS : Key in LYT< space >RED< space >SMS< space >< SMS Amount > send to 23388";
    __defers["$.__views.__alloyId534!click!back"] && $.__views.__alloyId534.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;