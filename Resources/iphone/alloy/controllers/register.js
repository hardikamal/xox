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
    $.__views.__alloyId2275 = Alloy.createController("_header", {
        id: "__alloyId2275",
        __parentSymbol: $.__views.register
    });
    $.__views.__alloyId2275.setParent($.__views.register);
    $.__views.__alloyId2276 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2276"
    });
    $.__views.register.add($.__views.__alloyId2276);
    $.__views.__alloyId2277 = Ti.UI.createLabel({
        text: "New User Registration",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2277"
    });
    $.__views.__alloyId2276.add($.__views.__alloyId2277);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%",
        backgroundColor: "white"
    });
    $.__views.register.add($.__views.scrollView);
    $.__views.__alloyId2278 = Ti.UI.createLabel({
        text: "1. Click on the New User Registration link.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "10",
        id: "__alloyId2278"
    });
    $.__views.scrollView.add($.__views.__alloyId2278);
    $.__views.__alloyId2279 = Ti.UI.createLabel({
        text: "2. Key in your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2279"
    });
    $.__views.scrollView.add($.__views.__alloyId2279);
    $.__views.__alloyId2280 = Ti.UI.createLabel({
        text: "3. You will receive an activation code via SMS to your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2280"
    });
    $.__views.scrollView.add($.__views.__alloyId2280);
    $.__views.__alloyId2281 = Ti.UI.createLabel({
        text: "4. Upon receiving your activation code via SMS, key in the code to verify and register your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2281"
    });
    $.__views.scrollView.add($.__views.__alloyId2281);
    $.__views.__alloyId2282 = Ti.UI.createLabel({
        text: "5. Fill in your details and clicks submit.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2282"
    });
    $.__views.scrollView.add($.__views.__alloyId2282);
    $.__views.__alloyId2283 = Ti.UI.createLabel({
        text: "6. An e-mail will be sent to your e-mail. You are required to click on the link in the e-mail to activate your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2283"
    });
    $.__views.scrollView.add($.__views.__alloyId2283);
    $.__views.__alloyId2284 = Ti.UI.createLabel({
        text: "7. You may now access Self Care to start managing your XinXun account",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2284"
    });
    $.__views.scrollView.add($.__views.__alloyId2284);
    $.__views.__alloyId2285 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "50",
        id: "__alloyId2285"
    });
    $.__views.scrollView.add($.__views.__alloyId2285);
    $.__views.mobileNumber = Ti.UI.createTextField({
        id: "mobileNumber",
        width: "100%",
        height: "50",
        borderColor: "black",
        textAlign: "center",
        color: "black"
    });
    $.__views.scrollView.add($.__views.mobileNumber);
    $.__views.__alloyId2286 = Ti.UI.createLabel({
        text: "Example: 60111234567",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2286"
    });
    $.__views.scrollView.add($.__views.__alloyId2286);
    $.__views.__alloyId2287 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2287"
    });
    $.__views.register.add($.__views.__alloyId2287);
    $.__views.__alloyId2288 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2288"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2288);
    submit ? $.__views.__alloyId2288.addEventListener("click", submit) : __defers["$.__views.__alloyId2288!click!submit"] = true;
    $.__views.__alloyId2289 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "left",
        id: "__alloyId2289"
    });
    $.__views.__alloyId2288.add($.__views.__alloyId2289);
    $.__views.__alloyId2290 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2290"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2290);
    $.__views.__alloyId2291 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2291"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2291);
    back ? $.__views.__alloyId2291.addEventListener("click", back) : __defers["$.__views.__alloyId2291!click!back"] = true;
    $.__views.__alloyId2292 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "left",
        id: "__alloyId2292"
    });
    $.__views.__alloyId2291.add($.__views.__alloyId2292);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    "android" == Ti.Platform.osname && ($.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150);
    __defers["$.__views.__alloyId2288!click!submit"] && $.__views.__alloyId2288.addEventListener("click", submit);
    __defers["$.__views.__alloyId2291!click!back"] && $.__views.__alloyId2291.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;