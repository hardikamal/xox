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
    $.__views.__alloyId2392 = Alloy.createController("_header", {
        id: "__alloyId2392",
        __parentSymbol: $.__views.subline2
    });
    $.__views.__alloyId2392.setParent($.__views.subline2);
    $.__views.tacView = Ti.UI.createView({
        id: "tacView",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.subline2.add($.__views.tacView);
    $.__views.__alloyId2393 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        borderColor: "white",
        id: "__alloyId2393"
    });
    $.__views.tacView.add($.__views.__alloyId2393);
    $.__views.__alloyId2394 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId2394"
    });
    $.__views.__alloyId2393.add($.__views.__alloyId2394);
    $.__views.__alloyId2395 = Ti.UI.createLabel({
        text: "Activation Code",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "10",
        id: "__alloyId2395"
    });
    $.__views.__alloyId2394.add($.__views.__alloyId2395);
    $.__views.__alloyId2396 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2396"
    });
    $.__views.__alloyId2394.add($.__views.__alloyId2396);
    close ? $.__views.__alloyId2396.addEventListener("click", close) : __defers["$.__views.__alloyId2396!click!close"] = true;
    $.__views.__alloyId2397 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#E6E7E9",
        id: "__alloyId2397"
    });
    $.__views.__alloyId2393.add($.__views.__alloyId2397);
    $.__views.__alloyId2398 = Ti.UI.createLabel({
        text: "A TAC has been sent to the sub-line. Please check and enter below for verification.",
        color: "black",
        width: Ti.UI.FILL,
        textAlign: "left",
        left: "10",
        id: "__alloyId2398"
    });
    $.__views.__alloyId2397.add($.__views.__alloyId2398);
    $.__views.__alloyId2399 = Ti.UI.createLabel({
        text: "Mobile Number: 01x0000000",
        color: "black",
        width: Ti.UI.FILL,
        textAlign: "left",
        left: "10",
        top: "10",
        id: "__alloyId2399"
    });
    $.__views.__alloyId2397.add($.__views.__alloyId2399);
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
    $.__views.__alloyId2397.add($.__views.tac);
    $.__views.__alloyId2400 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId2400"
    });
    $.__views.__alloyId2397.add($.__views.__alloyId2400);
    $.__views.__alloyId2401 = Ti.UI.createLabel({
        text: "If you do not receive TAC within 3 minutes, please",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "10",
        top: "10",
        id: "__alloyId2401"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2401);
    $.__views.__alloyId2402 = Ti.UI.createLabel({
        text: "click here.",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "0",
        id: "__alloyId2402"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2402);
    resend ? $.__views.__alloyId2402.addEventListener("click", resend) : __defers["$.__views.__alloyId2402!click!resend"] = true;
    $.__views.__alloyId2403 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2403"
    });
    $.__views.__alloyId2393.add($.__views.__alloyId2403);
    submit2 ? $.__views.__alloyId2403.addEventListener("click", submit2) : __defers["$.__views.__alloyId2403!click!submit2"] = true;
    $.__views.__alloyId2404 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId2404"
    });
    $.__views.__alloyId2403.add($.__views.__alloyId2404);
    $.__views.__alloyId2405 = Ti.UI.createView({
        layout: "vertical",
        top: "50",
        zIndex: "1",
        id: "__alloyId2405"
    });
    $.__views.subline2.add($.__views.__alloyId2405);
    $.__views.__alloyId2406 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2406"
    });
    $.__views.__alloyId2405.add($.__views.__alloyId2406);
    $.__views.__alloyId2407 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2407"
    });
    $.__views.__alloyId2406.add($.__views.__alloyId2407);
    $.__views.__alloyId2408 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2408"
    });
    $.__views.__alloyId2406.add($.__views.__alloyId2408);
    back ? $.__views.__alloyId2408.addEventListener("click", back) : __defers["$.__views.__alloyId2408!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.__alloyId2405.add($.__views.scrollView);
    $.__views.__alloyId2409 = Ti.UI.createLabel({
        text: "1. Key in Sub-line XOX mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2409"
    });
    $.__views.scrollView.add($.__views.__alloyId2409);
    $.__views.__alloyId2410 = Ti.UI.createLabel({
        text: "2. You will receive an activation code via SMS to your sub-line XOX mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2410"
    });
    $.__views.scrollView.add($.__views.__alloyId2410);
    $.__views.__alloyId2411 = Ti.UI.createLabel({
        text: "3. Upon receiving your activition code via SMS, key in the code to verify and add your sub-line account.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2411"
    });
    $.__views.scrollView.add($.__views.__alloyId2411);
    $.__views.__alloyId2412 = Ti.UI.createLabel({
        text: "4. You may now manage your sub-line account.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2412"
    });
    $.__views.scrollView.add($.__views.__alloyId2412);
    $.__views.__alloyId2413 = Ti.UI.createLabel({
        text: "Subline Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        top: "20",
        id: "__alloyId2413"
    });
    $.__views.scrollView.add($.__views.__alloyId2413);
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
    $.__views.__alloyId2414 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2414"
    });
    $.__views.__alloyId2405.add($.__views.__alloyId2414);
    $.__views.__alloyId2415 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2415"
    });
    $.__views.__alloyId2414.add($.__views.__alloyId2415);
    submit ? $.__views.__alloyId2415.addEventListener("click", submit) : __defers["$.__views.__alloyId2415!click!submit"] = true;
    $.__views.__alloyId2416 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId2416"
    });
    $.__views.__alloyId2415.add($.__views.__alloyId2416);
    $.__views.__alloyId2417 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2417"
    });
    $.__views.__alloyId2414.add($.__views.__alloyId2417);
    $.__views.__alloyId2418 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2418"
    });
    $.__views.__alloyId2414.add($.__views.__alloyId2418);
    back ? $.__views.__alloyId2418.addEventListener("click", back) : __defers["$.__views.__alloyId2418!click!back"] = true;
    $.__views.__alloyId2419 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId2419"
    });
    $.__views.__alloyId2418.add($.__views.__alloyId2419);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId2396!click!close"] && $.__views.__alloyId2396.addEventListener("click", close);
    __defers["$.__views.__alloyId2402!click!resend"] && $.__views.__alloyId2402.addEventListener("click", resend);
    __defers["$.__views.__alloyId2403!click!submit2"] && $.__views.__alloyId2403.addEventListener("click", submit2);
    __defers["$.__views.__alloyId2408!click!back"] && $.__views.__alloyId2408.addEventListener("click", back);
    __defers["$.__views.__alloyId2415!click!submit"] && $.__views.__alloyId2415.addEventListener("click", submit);
    __defers["$.__views.__alloyId2418!click!back"] && $.__views.__alloyId2418.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;