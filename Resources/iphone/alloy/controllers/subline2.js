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
        DRAWER.navigation("subline", 1);
    }
    function submit() {
        console.log("submit");
        $.tacView.zIndex = 2;
    }
    function submit2() {
        console.log("submit2");
    }
    function close() {
        console.log("close");
        $.tacView.zIndex = 0;
    }
    function resend() {
        console.log("resend");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline2";
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
    $.__views.subline2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "composite",
        fullscreen: "true",
        id: "subline2"
    });
    $.__views.subline2 && $.addTopLevelView($.__views.subline2);
    $.__views.__alloyId2346 = Alloy.createController("_header", {
        id: "__alloyId2346",
        __parentSymbol: $.__views.subline2
    });
    $.__views.__alloyId2346.setParent($.__views.subline2);
    $.__views.tacView = Ti.UI.createView({
        id: "tacView",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.subline2.add($.__views.tacView);
    $.__views.__alloyId2347 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        borderColor: "white",
        id: "__alloyId2347"
    });
    $.__views.tacView.add($.__views.__alloyId2347);
    $.__views.__alloyId2348 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId2348"
    });
    $.__views.__alloyId2347.add($.__views.__alloyId2348);
    $.__views.__alloyId2349 = Ti.UI.createLabel({
        text: "Activation Code",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "10",
        id: "__alloyId2349"
    });
    $.__views.__alloyId2348.add($.__views.__alloyId2349);
    $.__views.__alloyId2350 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2350"
    });
    $.__views.__alloyId2348.add($.__views.__alloyId2350);
    close ? $.__views.__alloyId2350.addEventListener("click", close) : __defers["$.__views.__alloyId2350!click!close"] = true;
    $.__views.__alloyId2351 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#E6E7E9",
        id: "__alloyId2351"
    });
    $.__views.__alloyId2347.add($.__views.__alloyId2351);
    $.__views.__alloyId2352 = Ti.UI.createLabel({
        text: "A TAC has been sent to the sub-line. Please check and enter below for verification.",
        color: "black",
        width: Ti.UI.FILL,
        textAlign: "left",
        left: "10",
        id: "__alloyId2352"
    });
    $.__views.__alloyId2351.add($.__views.__alloyId2352);
    $.__views.__alloyId2353 = Ti.UI.createLabel({
        text: "Mobile Number: 01x0000000",
        color: "black",
        width: Ti.UI.FILL,
        textAlign: "left",
        left: "10",
        top: "10",
        id: "__alloyId2353"
    });
    $.__views.__alloyId2351.add($.__views.__alloyId2353);
    $.__views.tac = Ti.UI.createTextField({
        id: "tac",
        width: "90%",
        height: "50",
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        textAlign: "left",
        hintText: "TAC Number"
    });
    $.__views.__alloyId2351.add($.__views.tac);
    $.__views.__alloyId2354 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId2354"
    });
    $.__views.__alloyId2351.add($.__views.__alloyId2354);
    $.__views.__alloyId2355 = Ti.UI.createLabel({
        text: "If you do not receive TAC within 3 minutes, please",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "10",
        top: "10",
        id: "__alloyId2355"
    });
    $.__views.__alloyId2354.add($.__views.__alloyId2355);
    $.__views.__alloyId2356 = Ti.UI.createLabel({
        text: "click here.",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "0",
        id: "__alloyId2356"
    });
    $.__views.__alloyId2354.add($.__views.__alloyId2356);
    resend ? $.__views.__alloyId2356.addEventListener("click", resend) : __defers["$.__views.__alloyId2356!click!resend"] = true;
    $.__views.__alloyId2357 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2357"
    });
    $.__views.__alloyId2347.add($.__views.__alloyId2357);
    submit2 ? $.__views.__alloyId2357.addEventListener("click", submit2) : __defers["$.__views.__alloyId2357!click!submit2"] = true;
    $.__views.__alloyId2358 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId2358"
    });
    $.__views.__alloyId2357.add($.__views.__alloyId2358);
    $.__views.__alloyId2359 = Ti.UI.createView({
        layout: "vertical",
        top: "50",
        zIndex: "1",
        id: "__alloyId2359"
    });
    $.__views.subline2.add($.__views.__alloyId2359);
    $.__views.__alloyId2360 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2360"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2360);
    $.__views.__alloyId2361 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2361"
    });
    $.__views.__alloyId2360.add($.__views.__alloyId2361);
    $.__views.__alloyId2362 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2362"
    });
    $.__views.__alloyId2360.add($.__views.__alloyId2362);
    back ? $.__views.__alloyId2362.addEventListener("click", back) : __defers["$.__views.__alloyId2362!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.__alloyId2359.add($.__views.scrollView);
    $.__views.__alloyId2363 = Ti.UI.createLabel({
        text: "1. Key in Sub-line XOX mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2363"
    });
    $.__views.scrollView.add($.__views.__alloyId2363);
    $.__views.__alloyId2364 = Ti.UI.createLabel({
        text: "2. You will receive an activation code via SMS to your sub-line XOX mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2364"
    });
    $.__views.scrollView.add($.__views.__alloyId2364);
    $.__views.__alloyId2365 = Ti.UI.createLabel({
        text: "3. Upon receiving your activition code via SMS, key in the code to verify and add your sub-line account.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2365"
    });
    $.__views.scrollView.add($.__views.__alloyId2365);
    $.__views.__alloyId2366 = Ti.UI.createLabel({
        text: "4. You may now manage your sub-line account.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2366"
    });
    $.__views.scrollView.add($.__views.__alloyId2366);
    $.__views.__alloyId2367 = Ti.UI.createLabel({
        text: "Subline Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        top: "20",
        id: "__alloyId2367"
    });
    $.__views.scrollView.add($.__views.__alloyId2367);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "90%",
        height: "50",
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD
    });
    $.__views.scrollView.add($.__views.mobileNo);
    $.__views.__alloyId2368 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2368"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2368);
    $.__views.__alloyId2369 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2369"
    });
    $.__views.__alloyId2368.add($.__views.__alloyId2369);
    submit ? $.__views.__alloyId2369.addEventListener("click", submit) : __defers["$.__views.__alloyId2369!click!submit"] = true;
    $.__views.__alloyId2370 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId2370"
    });
    $.__views.__alloyId2369.add($.__views.__alloyId2370);
    $.__views.__alloyId2371 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2371"
    });
    $.__views.__alloyId2368.add($.__views.__alloyId2371);
    $.__views.__alloyId2372 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2372"
    });
    $.__views.__alloyId2368.add($.__views.__alloyId2372);
    back ? $.__views.__alloyId2372.addEventListener("click", back) : __defers["$.__views.__alloyId2372!click!back"] = true;
    $.__views.__alloyId2373 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId2373"
    });
    $.__views.__alloyId2372.add($.__views.__alloyId2373);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId2350!click!close"] && $.__views.__alloyId2350.addEventListener("click", close);
    __defers["$.__views.__alloyId2356!click!resend"] && $.__views.__alloyId2356.addEventListener("click", resend);
    __defers["$.__views.__alloyId2357!click!submit2"] && $.__views.__alloyId2357.addEventListener("click", submit2);
    __defers["$.__views.__alloyId2362!click!back"] && $.__views.__alloyId2362.addEventListener("click", back);
    __defers["$.__views.__alloyId2369!click!submit"] && $.__views.__alloyId2369.addEventListener("click", submit);
    __defers["$.__views.__alloyId2372!click!back"] && $.__views.__alloyId2372.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;