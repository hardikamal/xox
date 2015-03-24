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
    $.__views.__alloyId442 = Alloy.createController("_header", {
        id: "__alloyId442",
        __parentSymbol: $.__views.forgot
    });
    $.__views.__alloyId442.setParent($.__views.forgot);
    $.__views.__alloyId443 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId443"
    });
    $.__views.forgot.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createLabel({
        text: "Forgot Username & Password",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId444"
    });
    $.__views.__alloyId443.add($.__views.__alloyId444);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%",
        backgroundColor: "white"
    });
    $.__views.forgot.add($.__views.scrollView);
    $.__views.__alloyId445 = Ti.UI.createLabel({
        text: "Please fill in your email address. We will send you a link to reset your password and username. You may need to check your spam folder or unblock no-reply@xox.com",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "10",
        id: "__alloyId445"
    });
    $.__views.scrollView.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createLabel({
        text: "Username",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "50",
        id: "__alloyId446"
    });
    $.__views.scrollView.add($.__views.__alloyId446);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        width: "100%",
        height: "50",
        borderColor: "black",
        textAlign: "center",
        color: "black"
    });
    $.__views.scrollView.add($.__views.username);
    $.__views.__alloyId447 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId447"
    });
    $.__views.forgot.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId448"
    });
    $.__views.__alloyId447.add($.__views.__alloyId448);
    submit ? $.__views.__alloyId448.addEventListener("click", submit) : __defers["$.__views.__alloyId448!click!submit"] = true;
    $.__views.__alloyId449 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "left",
        id: "__alloyId449"
    });
    $.__views.__alloyId448.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId450"
    });
    $.__views.__alloyId447.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId451"
    });
    $.__views.__alloyId447.add($.__views.__alloyId451);
    back ? $.__views.__alloyId451.addEventListener("click", back) : __defers["$.__views.__alloyId451!click!back"] = true;
    $.__views.__alloyId452 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "left",
        id: "__alloyId452"
    });
    $.__views.__alloyId451.add($.__views.__alloyId452);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    "android" == Ti.Platform.osname && ($.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150);
    __defers["$.__views.__alloyId448!click!submit"] && $.__views.__alloyId448.addEventListener("click", submit);
    __defers["$.__views.__alloyId451!click!back"] && $.__views.__alloyId451.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;