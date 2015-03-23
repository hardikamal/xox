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
    $.__views.__alloyId2025 = Alloy.createController("_header", {
        id: "__alloyId2025",
        __parentSymbol: $.__views.register
    });
    $.__views.__alloyId2025.setParent($.__views.register);
    $.__views.__alloyId2026 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2026"
    });
    $.__views.register.add($.__views.__alloyId2026);
    $.__views.__alloyId2027 = Ti.UI.createLabel({
        text: "New User Registration",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2027"
    });
    $.__views.__alloyId2026.add($.__views.__alloyId2027);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%",
        backgroundColor: "white"
    });
    $.__views.register.add($.__views.scrollView);
    $.__views.__alloyId2028 = Ti.UI.createLabel({
        text: "1. Click on the New User Registration link.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "10",
        id: "__alloyId2028"
    });
    $.__views.scrollView.add($.__views.__alloyId2028);
    $.__views.__alloyId2029 = Ti.UI.createLabel({
        text: "2. Key in your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2029"
    });
    $.__views.scrollView.add($.__views.__alloyId2029);
    $.__views.__alloyId2030 = Ti.UI.createLabel({
        text: "3. You will receive an activation code via SMS to your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2030"
    });
    $.__views.scrollView.add($.__views.__alloyId2030);
    $.__views.__alloyId2031 = Ti.UI.createLabel({
        text: "4. Upon receiving your activation code via SMS, key in the code to verify and register your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2031"
    });
    $.__views.scrollView.add($.__views.__alloyId2031);
    $.__views.__alloyId2032 = Ti.UI.createLabel({
        text: "5. Fill in your details and clicks submit.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2032"
    });
    $.__views.scrollView.add($.__views.__alloyId2032);
    $.__views.__alloyId2033 = Ti.UI.createLabel({
        text: "6. An e-mail will be sent to your e-mail. You are required to click on the link in the e-mail to activate your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2033"
    });
    $.__views.scrollView.add($.__views.__alloyId2033);
    $.__views.__alloyId2034 = Ti.UI.createLabel({
        text: "7. You may now access Self Care to start managing your XinXun account",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2034"
    });
    $.__views.scrollView.add($.__views.__alloyId2034);
    $.__views.__alloyId2035 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "50",
        id: "__alloyId2035"
    });
    $.__views.scrollView.add($.__views.__alloyId2035);
    $.__views.mobileNumber = Ti.UI.createTextField({
        id: "mobileNumber",
        width: "100%",
        height: "50",
        borderColor: "black",
        textAlign: "center",
        color: "black"
    });
    $.__views.scrollView.add($.__views.mobileNumber);
    $.__views.__alloyId2036 = Ti.UI.createLabel({
        text: "Example: 60111234567",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2036"
    });
    $.__views.scrollView.add($.__views.__alloyId2036);
    $.__views.__alloyId2037 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2037"
    });
    $.__views.register.add($.__views.__alloyId2037);
    $.__views.__alloyId2038 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2038"
    });
    $.__views.__alloyId2037.add($.__views.__alloyId2038);
    submit ? $.__views.__alloyId2038.addEventListener("click", submit) : __defers["$.__views.__alloyId2038!click!submit"] = true;
    $.__views.__alloyId2039 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "left",
        id: "__alloyId2039"
    });
    $.__views.__alloyId2038.add($.__views.__alloyId2039);
    $.__views.__alloyId2040 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2040"
    });
    $.__views.__alloyId2037.add($.__views.__alloyId2040);
    $.__views.__alloyId2041 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2041"
    });
    $.__views.__alloyId2037.add($.__views.__alloyId2041);
    back ? $.__views.__alloyId2041.addEventListener("click", back) : __defers["$.__views.__alloyId2041!click!back"] = true;
    $.__views.__alloyId2042 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "left",
        id: "__alloyId2042"
    });
    $.__views.__alloyId2041.add($.__views.__alloyId2042);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    "android" == Ti.Platform.osname && ($.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150);
    __defers["$.__views.__alloyId2038!click!submit"] && $.__views.__alloyId2038.addEventListener("click", submit);
    __defers["$.__views.__alloyId2041!click!back"] && $.__views.__alloyId2041.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;