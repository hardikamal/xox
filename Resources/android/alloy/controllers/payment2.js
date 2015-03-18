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
        DRAWER.navigation("payment", 2);
    }
    function paymentMethod(e) {
        Ti.App.Properties.setString("method", e.source.mod);
        DRAWER.navigation("payment3", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment2";
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
    $.__views.payment2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment2"
    });
    $.__views.payment2 && $.addTopLevelView($.__views.payment2);
    $.__views.__alloyId525 = Alloy.createController("_header", {
        id: "__alloyId525",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId525.setParent($.__views.payment2);
    $.__views.__alloyId526 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId526"
    });
    $.__views.payment2.add($.__views.__alloyId526);
    $.__views.__alloyId527 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId527"
    });
    $.__views.__alloyId526.add($.__views.__alloyId527);
    $.__views.__alloyId528 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId528"
    });
    $.__views.__alloyId526.add($.__views.__alloyId528);
    back ? $.__views.__alloyId528.addEventListener("click", back) : __defers["$.__views.__alloyId528!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment2.add($.__views.scrollView);
    $.__views.__alloyId529 = Ti.UI.createLabel({
        text: "Choose payment method:",
        color: "black",
        top: "20",
        id: "__alloyId529"
    });
    $.__views.scrollView.add($.__views.__alloyId529);
    $.__views.__alloyId530 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "20%",
        width: "90%",
        top: "10",
        mod: "Online Banking",
        borderRadius: "15",
        id: "__alloyId530"
    });
    $.__views.scrollView.add($.__views.__alloyId530);
    paymentMethod ? $.__views.__alloyId530.addEventListener("click", paymentMethod) : __defers["$.__views.__alloyId530!click!paymentMethod"] = true;
    $.__views.__alloyId531 = Ti.UI.createLabel({
        text: "Online Banking",
        color: "white",
        textAlign: "center",
        mod: "10",
        id: "__alloyId531"
    });
    $.__views.__alloyId530.add($.__views.__alloyId531);
    $.__views.__alloyId532 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "20%",
        width: "90%",
        top: "10",
        mod: "Credit Card",
        borderRadius: "15",
        id: "__alloyId532"
    });
    $.__views.scrollView.add($.__views.__alloyId532);
    paymentMethod ? $.__views.__alloyId532.addEventListener("click", paymentMethod) : __defers["$.__views.__alloyId532!click!paymentMethod"] = true;
    $.__views.__alloyId533 = Ti.UI.createLabel({
        text: "Credit Card",
        color: "white",
        textAlign: "center",
        mod: "10",
        id: "__alloyId533"
    });
    $.__views.__alloyId532.add($.__views.__alloyId533);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId528!click!back"] && $.__views.__alloyId528.addEventListener("click", back);
    __defers["$.__views.__alloyId530!click!paymentMethod"] && $.__views.__alloyId530.addEventListener("click", paymentMethod);
    __defers["$.__views.__alloyId532!click!paymentMethod"] && $.__views.__alloyId532.addEventListener("click", paymentMethod);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;