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
    this.__controllerPath = "register";
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
    $.__views.register = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "register"
    });
    $.__views.register && $.addTopLevelView($.__views.register);
    $.__views.__alloyId2043 = Alloy.createController("_header", {
        id: "__alloyId2043",
        __parentSymbol: $.__views.register
    });
    $.__views.__alloyId2043.setParent($.__views.register);
    $.__views.__alloyId2044 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2044"
    });
    $.__views.register.add($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createLabel({
        text: "New User Registration",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2045"
    });
    $.__views.__alloyId2044.add($.__views.__alloyId2045);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%",
        backgroundColor: "white"
    });
    $.__views.register.add($.__views.scrollView);
    $.__views.__alloyId2046 = Ti.UI.createLabel({
        text: "1. Click on the New User Registration link.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "10",
        id: "__alloyId2046"
    });
    $.__views.scrollView.add($.__views.__alloyId2046);
    $.__views.__alloyId2047 = Ti.UI.createLabel({
        text: "2. Key in your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2047"
    });
    $.__views.scrollView.add($.__views.__alloyId2047);
    $.__views.__alloyId2048 = Ti.UI.createLabel({
        text: "3. You will receive an activation code via SMS to your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2048"
    });
    $.__views.scrollView.add($.__views.__alloyId2048);
    $.__views.__alloyId2049 = Ti.UI.createLabel({
        text: "4. Upon receiving your activation code via SMS, key in the code to verify and register your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2049"
    });
    $.__views.scrollView.add($.__views.__alloyId2049);
    $.__views.__alloyId2050 = Ti.UI.createLabel({
        text: "5. Fill in your details and clicks submit.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2050"
    });
    $.__views.scrollView.add($.__views.__alloyId2050);
    $.__views.__alloyId2051 = Ti.UI.createLabel({
        text: "6. An e-mail will be sent to your e-mail. You are required to click on the link in the e-mail to activate your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2051"
    });
    $.__views.scrollView.add($.__views.__alloyId2051);
    $.__views.__alloyId2052 = Ti.UI.createLabel({
        text: "7. You may now access Self Care to start managing your XinXun account",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2052"
    });
    $.__views.scrollView.add($.__views.__alloyId2052);
    $.__views.__alloyId2053 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "50",
        id: "__alloyId2053"
    });
    $.__views.scrollView.add($.__views.__alloyId2053);
    $.__views.mobileNumber = Ti.UI.createTextField({
        id: "mobileNumber",
        width: "100%",
        height: "50",
        borderColor: "black",
        textAlign: "center",
        color: "black"
    });
    $.__views.scrollView.add($.__views.mobileNumber);
    $.__views.__alloyId2054 = Ti.UI.createLabel({
        text: "Example: 60111234567",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2054"
    });
    $.__views.scrollView.add($.__views.__alloyId2054);
    $.__views.__alloyId2055 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2055"
    });
    $.__views.register.add($.__views.__alloyId2055);
    $.__views.__alloyId2056 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2056"
    });
    $.__views.__alloyId2055.add($.__views.__alloyId2056);
    submit ? $.__views.__alloyId2056.addEventListener("click", submit) : __defers["$.__views.__alloyId2056!click!submit"] = true;
    $.__views.__alloyId2057 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "left",
        id: "__alloyId2057"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2057);
    $.__views.__alloyId2058 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2058"
    });
    $.__views.__alloyId2055.add($.__views.__alloyId2058);
    $.__views.__alloyId2059 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2059"
    });
    $.__views.__alloyId2055.add($.__views.__alloyId2059);
    back ? $.__views.__alloyId2059.addEventListener("click", back) : __defers["$.__views.__alloyId2059!click!back"] = true;
    $.__views.__alloyId2060 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "left",
        id: "__alloyId2060"
    });
    $.__views.__alloyId2059.add($.__views.__alloyId2060);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId2056!click!submit"] && $.__views.__alloyId2056.addEventListener("click", submit);
    __defers["$.__views.__alloyId2059!click!back"] && $.__views.__alloyId2059.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;