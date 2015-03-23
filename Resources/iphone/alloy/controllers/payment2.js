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
        DRAWER.navigation("payment", 1);
    }
    function paymentMethod(e) {
        Ti.App.Properties.setString("method", e.source.mod);
        DRAWER.navigation("payment3", 1);
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
    $.__views.__alloyId903 = Alloy.createController("_header", {
        id: "__alloyId903",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId903.setParent($.__views.payment2);
    $.__views.__alloyId904 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId904"
    });
    $.__views.payment2.add($.__views.__alloyId904);
    $.__views.__alloyId905 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId905"
    });
    $.__views.__alloyId904.add($.__views.__alloyId905);
    $.__views.__alloyId906 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId906"
    });
    $.__views.__alloyId904.add($.__views.__alloyId906);
    back ? $.__views.__alloyId906.addEventListener("click", back) : __defers["$.__views.__alloyId906!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment2.add($.__views.scrollView);
    $.__views.__alloyId907 = Ti.UI.createLabel({
        text: "Choose payment method:",
        color: "black",
        top: "20",
        id: "__alloyId907"
    });
    $.__views.scrollView.add($.__views.__alloyId907);
    $.__views.__alloyId908 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "20%",
        width: "90%",
        top: "10",
        mod: "Online Banking",
        borderRadius: "15",
        id: "__alloyId908"
    });
    $.__views.scrollView.add($.__views.__alloyId908);
    paymentMethod ? $.__views.__alloyId908.addEventListener("click", paymentMethod) : __defers["$.__views.__alloyId908!click!paymentMethod"] = true;
    $.__views.__alloyId909 = Ti.UI.createLabel({
        text: "Online Banking",
        color: "white",
        textAlign: "center",
        mod: "10",
        id: "__alloyId909"
    });
    $.__views.__alloyId908.add($.__views.__alloyId909);
    $.__views.__alloyId910 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "20%",
        width: "90%",
        top: "10",
        mod: "Credit Card",
        borderRadius: "15",
        id: "__alloyId910"
    });
    $.__views.scrollView.add($.__views.__alloyId910);
    paymentMethod ? $.__views.__alloyId910.addEventListener("click", paymentMethod) : __defers["$.__views.__alloyId910!click!paymentMethod"] = true;
    $.__views.__alloyId911 = Ti.UI.createLabel({
        text: "Credit Card",
        color: "white",
        textAlign: "center",
        mod: "10",
        id: "__alloyId911"
    });
    $.__views.__alloyId910.add($.__views.__alloyId911);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId906!click!back"] && $.__views.__alloyId906.addEventListener("click", back);
    __defers["$.__views.__alloyId908!click!paymentMethod"] && $.__views.__alloyId908.addEventListener("click", paymentMethod);
    __defers["$.__views.__alloyId910!click!paymentMethod"] && $.__views.__alloyId910.addEventListener("click", paymentMethod);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;