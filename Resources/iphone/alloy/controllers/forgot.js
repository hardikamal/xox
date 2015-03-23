function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function submit() {
        console.log("submit");
    }
    function back() {
        DRAWER.navigation("home", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "forgot";
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
    $.__views.forgot = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "forgot"
    });
    $.__views.forgot && $.addTopLevelView($.__views.forgot);
    $.__views.__alloyId253 = Alloy.createController("_header", {
        id: "__alloyId253",
        __parentSymbol: $.__views.forgot
    });
    $.__views.__alloyId253.setParent($.__views.forgot);
    $.__views.__alloyId254 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId254"
    });
    $.__views.forgot.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createLabel({
        text: "Forgot Username & Password",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId255"
    });
    $.__views.__alloyId254.add($.__views.__alloyId255);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%",
        backgroundColor: "white"
    });
    $.__views.forgot.add($.__views.scrollView);
    $.__views.__alloyId256 = Ti.UI.createLabel({
        text: "Please fill in your email address. We will send you a link to reset your password and username. You may need to check your spam folder or unblock no-reply@xox.com",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "10",
        id: "__alloyId256"
    });
    $.__views.scrollView.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createLabel({
        text: "Username",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "50",
        id: "__alloyId257"
    });
    $.__views.scrollView.add($.__views.__alloyId257);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        width: "100%",
        height: "50",
        borderColor: "black",
        textAlign: "center",
        color: "black"
    });
    $.__views.scrollView.add($.__views.username);
    $.__views.__alloyId258 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId258"
    });
    $.__views.forgot.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId259"
    });
    $.__views.__alloyId258.add($.__views.__alloyId259);
    submit ? $.__views.__alloyId259.addEventListener("click", submit) : __defers["$.__views.__alloyId259!click!submit"] = true;
    $.__views.__alloyId260 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "left",
        id: "__alloyId260"
    });
    $.__views.__alloyId259.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId261"
    });
    $.__views.__alloyId258.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId262"
    });
    $.__views.__alloyId258.add($.__views.__alloyId262);
    back ? $.__views.__alloyId262.addEventListener("click", back) : __defers["$.__views.__alloyId262!click!back"] = true;
    $.__views.__alloyId263 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "left",
        id: "__alloyId263"
    });
    $.__views.__alloyId262.add($.__views.__alloyId263);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    "android" == Ti.Platform.osname && ($.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150);
    __defers["$.__views.__alloyId259!click!submit"] && $.__views.__alloyId259.addEventListener("click", submit);
    __defers["$.__views.__alloyId262!click!back"] && $.__views.__alloyId262.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;