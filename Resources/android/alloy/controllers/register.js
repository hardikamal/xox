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
    $.__views.__alloyId2347 = Alloy.createController("_header", {
        id: "__alloyId2347",
        __parentSymbol: $.__views.register
    });
    $.__views.__alloyId2347.setParent($.__views.register);
    $.__views.__alloyId2348 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2348"
    });
    $.__views.register.add($.__views.__alloyId2348);
    $.__views.__alloyId2349 = Ti.UI.createLabel({
        text: "New User Registration",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2349"
    });
    $.__views.__alloyId2348.add($.__views.__alloyId2349);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%",
        backgroundColor: "white"
    });
    $.__views.register.add($.__views.scrollView);
    $.__views.__alloyId2350 = Ti.UI.createLabel({
        text: "1. Click on the New User Registration link.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "10",
        id: "__alloyId2350"
    });
    $.__views.scrollView.add($.__views.__alloyId2350);
    $.__views.__alloyId2351 = Ti.UI.createLabel({
        text: "2. Key in your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2351"
    });
    $.__views.scrollView.add($.__views.__alloyId2351);
    $.__views.__alloyId2352 = Ti.UI.createLabel({
        text: "3. You will receive an activation code via SMS to your XinXun mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2352"
    });
    $.__views.scrollView.add($.__views.__alloyId2352);
    $.__views.__alloyId2353 = Ti.UI.createLabel({
        text: "4. Upon receiving your activation code via SMS, key in the code to verify and register your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2353"
    });
    $.__views.scrollView.add($.__views.__alloyId2353);
    $.__views.__alloyId2354 = Ti.UI.createLabel({
        text: "5. Fill in your details and clicks submit.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2354"
    });
    $.__views.scrollView.add($.__views.__alloyId2354);
    $.__views.__alloyId2355 = Ti.UI.createLabel({
        text: "6. An e-mail will be sent to your e-mail. You are required to click on the link in the e-mail to activate your Self Care account.",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2355"
    });
    $.__views.scrollView.add($.__views.__alloyId2355);
    $.__views.__alloyId2356 = Ti.UI.createLabel({
        text: "7. You may now access Self Care to start managing your XinXun account",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2356"
    });
    $.__views.scrollView.add($.__views.__alloyId2356);
    $.__views.__alloyId2357 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        top: "50",
        id: "__alloyId2357"
    });
    $.__views.scrollView.add($.__views.__alloyId2357);
    $.__views.mobileNumber = Ti.UI.createTextField({
        id: "mobileNumber",
        width: "100%",
        height: "50",
        borderColor: "black",
        textAlign: "center",
        color: "black"
    });
    $.__views.scrollView.add($.__views.mobileNumber);
    $.__views.__alloyId2358 = Ti.UI.createLabel({
        text: "Example: 60111234567",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2358"
    });
    $.__views.scrollView.add($.__views.__alloyId2358);
    $.__views.__alloyId2359 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2359"
    });
    $.__views.register.add($.__views.__alloyId2359);
    $.__views.__alloyId2360 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2360"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2360);
    submit ? $.__views.__alloyId2360.addEventListener("click", submit) : __defers["$.__views.__alloyId2360!click!submit"] = true;
    $.__views.__alloyId2361 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "left",
        id: "__alloyId2361"
    });
    $.__views.__alloyId2360.add($.__views.__alloyId2361);
    $.__views.__alloyId2362 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2362"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2362);
    $.__views.__alloyId2363 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2363"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2363);
    back ? $.__views.__alloyId2363.addEventListener("click", back) : __defers["$.__views.__alloyId2363!click!back"] = true;
    $.__views.__alloyId2364 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "left",
        id: "__alloyId2364"
    });
    $.__views.__alloyId2363.add($.__views.__alloyId2364);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId2360!click!submit"] && $.__views.__alloyId2360.addEventListener("click", submit);
    __defers["$.__views.__alloyId2363!click!back"] && $.__views.__alloyId2363.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;