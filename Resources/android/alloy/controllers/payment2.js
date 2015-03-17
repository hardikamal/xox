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
    $.__views.__alloyId415 = Alloy.createController("_header", {
        id: "__alloyId415",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId415.setParent($.__views.payment2);
    $.__views.__alloyId416 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId416"
    });
    $.__views.payment2.add($.__views.__alloyId416);
    $.__views.__alloyId417 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId417"
    });
    $.__views.__alloyId416.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId418"
    });
    $.__views.__alloyId416.add($.__views.__alloyId418);
    back ? $.__views.__alloyId418.addEventListener("click", back) : __defers["$.__views.__alloyId418!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment2.add($.__views.scrollView);
    $.__views.__alloyId419 = Ti.UI.createLabel({
        text: "Choose payment method:",
        color: "black",
        top: "20",
        id: "__alloyId419"
    });
    $.__views.scrollView.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "20%",
        width: "90%",
        top: "10",
        mod: "Online Banking",
        borderRadius: "15",
        id: "__alloyId420"
    });
    $.__views.scrollView.add($.__views.__alloyId420);
    paymentMethod ? $.__views.__alloyId420.addEventListener("click", paymentMethod) : __defers["$.__views.__alloyId420!click!paymentMethod"] = true;
    $.__views.__alloyId421 = Ti.UI.createLabel({
        text: "Online Banking",
        color: "white",
        textAlign: "center",
        mod: "10",
        id: "__alloyId421"
    });
    $.__views.__alloyId420.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "20%",
        width: "90%",
        top: "10",
        mod: "Credit Card",
        borderRadius: "15",
        id: "__alloyId422"
    });
    $.__views.scrollView.add($.__views.__alloyId422);
    paymentMethod ? $.__views.__alloyId422.addEventListener("click", paymentMethod) : __defers["$.__views.__alloyId422!click!paymentMethod"] = true;
    $.__views.__alloyId423 = Ti.UI.createLabel({
        text: "Credit Card",
        color: "white",
        textAlign: "center",
        mod: "10",
        id: "__alloyId423"
    });
    $.__views.__alloyId422.add($.__views.__alloyId423);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId418!click!back"] && $.__views.__alloyId418.addEventListener("click", back);
    __defers["$.__views.__alloyId420!click!paymentMethod"] && $.__views.__alloyId420.addEventListener("click", paymentMethod);
    __defers["$.__views.__alloyId422!click!paymentMethod"] && $.__views.__alloyId422.addEventListener("click", paymentMethod);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;