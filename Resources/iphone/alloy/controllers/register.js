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
    $.__views.__alloyId1305 = Alloy.createController("_header", {
        id: "__alloyId1305",
        __parentSymbol: $.__views.register
    });
    $.__views.__alloyId1305.setParent($.__views.register);
    $.__views.__alloyId1306 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1306"
    });
    $.__views.register.add($.__views.__alloyId1306);
    $.__views.__alloyId1307 = Ti.UI.createLabel({
        text: "New User Registration",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1307"
    });
    $.__views.__alloyId1306.add($.__views.__alloyId1307);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%",
        backgroundColor: "white"
    });
    $.__views.register.add($.__views.scrollView);
    $.__views.__alloyId1308 = Ti.UI.createLabel({
        text: "1. Click on the New User Registration link.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "10",
        id: "__alloyId1308"
    });
    $.__views.scrollView.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createLabel({
        text: "2. Key in your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1309"
    });
    $.__views.scrollView.add($.__views.__alloyId1309);
    $.__views.__alloyId1310 = Ti.UI.createLabel({
        text: "3. You will receive an activation code via SMS to your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1310"
    });
    $.__views.scrollView.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createLabel({
        text: "4. Upon receiving your activation code via SMS, key in the code to verify and register your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1311"
    });
    $.__views.scrollView.add($.__views.__alloyId1311);
    $.__views.__alloyId1312 = Ti.UI.createLabel({
        text: "5. Fill in your details and clicks submit.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1312"
    });
    $.__views.scrollView.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createLabel({
        text: "6. An e-mail will be sent to your e-mail. You are required to click on the link in the e-mail to activate your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1313"
    });
    $.__views.scrollView.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createLabel({
        text: "7. You may now access Self Care to start managing your XinXun account",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1314"
    });
    $.__views.scrollView.add($.__views.__alloyId1314);
    $.__views.__alloyId1315 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "50",
        id: "__alloyId1315"
    });
    $.__views.scrollView.add($.__views.__alloyId1315);
    $.__views.mobileNumber = Ti.UI.createTextField({
        id: "mobileNumber",
        width: "100%",
        height: "50",
        borderColor: "black",
        textAlign: "center",
        color: "black"
    });
    $.__views.scrollView.add($.__views.mobileNumber);
    $.__views.__alloyId1316 = Ti.UI.createLabel({
        text: "Example: 60111234567",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1316"
    });
    $.__views.scrollView.add($.__views.__alloyId1316);
    $.__views.__alloyId1317 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1317"
    });
    $.__views.register.add($.__views.__alloyId1317);
    $.__views.__alloyId1318 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1318"
    });
    $.__views.__alloyId1317.add($.__views.__alloyId1318);
    submit ? $.__views.__alloyId1318.addEventListener("click", submit) : __defers["$.__views.__alloyId1318!click!submit"] = true;
    $.__views.__alloyId1319 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "left",
        id: "__alloyId1319"
    });
    $.__views.__alloyId1318.add($.__views.__alloyId1319);
    $.__views.__alloyId1320 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId1320"
    });
    $.__views.__alloyId1317.add($.__views.__alloyId1320);
    $.__views.__alloyId1321 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1321"
    });
    $.__views.__alloyId1317.add($.__views.__alloyId1321);
    back ? $.__views.__alloyId1321.addEventListener("click", back) : __defers["$.__views.__alloyId1321!click!back"] = true;
    $.__views.__alloyId1322 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "left",
        id: "__alloyId1322"
    });
    $.__views.__alloyId1321.add($.__views.__alloyId1322);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    "android" == Ti.Platform.osname && ($.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150);
    __defers["$.__views.__alloyId1318!click!submit"] && $.__views.__alloyId1318.addEventListener("click", submit);
    __defers["$.__views.__alloyId1321!click!back"] && $.__views.__alloyId1321.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;