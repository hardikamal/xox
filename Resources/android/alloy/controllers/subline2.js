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
    $.__views.__alloyId2423 = Alloy.createController("_header", {
        id: "__alloyId2423",
        __parentSymbol: $.__views.subline2
    });
    $.__views.__alloyId2423.setParent($.__views.subline2);
    $.__views.tacView = Ti.UI.createView({
        id: "tacView",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.subline2.add($.__views.tacView);
    $.__views.__alloyId2424 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        borderColor: "white",
        id: "__alloyId2424"
    });
    $.__views.tacView.add($.__views.__alloyId2424);
    $.__views.__alloyId2425 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId2425"
    });
    $.__views.__alloyId2424.add($.__views.__alloyId2425);
    $.__views.__alloyId2426 = Ti.UI.createLabel({
        text: "Activation Code",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "10",
        id: "__alloyId2426"
    });
    $.__views.__alloyId2425.add($.__views.__alloyId2426);
    $.__views.__alloyId2427 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2427"
    });
    $.__views.__alloyId2425.add($.__views.__alloyId2427);
    close ? $.__views.__alloyId2427.addEventListener("click", close) : __defers["$.__views.__alloyId2427!click!close"] = true;
    $.__views.__alloyId2428 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#E6E7E9",
        id: "__alloyId2428"
    });
    $.__views.__alloyId2424.add($.__views.__alloyId2428);
    $.__views.__alloyId2429 = Ti.UI.createLabel({
        text: "A TAC has been sent to the sub-line. Please check and enter below for verification.",
        color: "black",
        width: Ti.UI.FILL,
        textAlign: "left",
        left: "10",
        id: "__alloyId2429"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2429);
    $.__views.__alloyId2430 = Ti.UI.createLabel({
        text: "Mobile Number: 01x0000000",
        color: "black",
        width: Ti.UI.FILL,
        textAlign: "left",
        left: "10",
        top: "10",
        id: "__alloyId2430"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2430);
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
    $.__views.__alloyId2428.add($.__views.tac);
    $.__views.__alloyId2431 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId2431"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2431);
    $.__views.__alloyId2432 = Ti.UI.createLabel({
        text: "If you do not receive TAC within 3 minutes, please",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "10",
        top: "10",
        id: "__alloyId2432"
    });
    $.__views.__alloyId2431.add($.__views.__alloyId2432);
    $.__views.__alloyId2433 = Ti.UI.createLabel({
        text: "click here.",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "0",
        id: "__alloyId2433"
    });
    $.__views.__alloyId2431.add($.__views.__alloyId2433);
    resend ? $.__views.__alloyId2433.addEventListener("click", resend) : __defers["$.__views.__alloyId2433!click!resend"] = true;
    $.__views.__alloyId2434 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2434"
    });
    $.__views.__alloyId2424.add($.__views.__alloyId2434);
    submit2 ? $.__views.__alloyId2434.addEventListener("click", submit2) : __defers["$.__views.__alloyId2434!click!submit2"] = true;
    $.__views.__alloyId2435 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId2435"
    });
    $.__views.__alloyId2434.add($.__views.__alloyId2435);
    $.__views.__alloyId2436 = Ti.UI.createView({
        layout: "vertical",
        top: "50",
        zIndex: "1",
        id: "__alloyId2436"
    });
    $.__views.subline2.add($.__views.__alloyId2436);
    $.__views.__alloyId2437 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2437"
    });
    $.__views.__alloyId2436.add($.__views.__alloyId2437);
    $.__views.__alloyId2438 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2438"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2438);
    $.__views.__alloyId2439 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2439"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2439);
    back ? $.__views.__alloyId2439.addEventListener("click", back) : __defers["$.__views.__alloyId2439!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.__alloyId2436.add($.__views.scrollView);
    $.__views.__alloyId2440 = Ti.UI.createLabel({
        text: "1. Key in Sub-line XOX mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2440"
    });
    $.__views.scrollView.add($.__views.__alloyId2440);
    $.__views.__alloyId2441 = Ti.UI.createLabel({
        text: "2. You will receive an activation code via SMS to your sub-line XOX mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2441"
    });
    $.__views.scrollView.add($.__views.__alloyId2441);
    $.__views.__alloyId2442 = Ti.UI.createLabel({
        text: "3. Upon receiving your activition code via SMS, key in the code to verify and add your sub-line account.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2442"
    });
    $.__views.scrollView.add($.__views.__alloyId2442);
    $.__views.__alloyId2443 = Ti.UI.createLabel({
        text: "4. You may now manage your sub-line account.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2443"
    });
    $.__views.scrollView.add($.__views.__alloyId2443);
    $.__views.__alloyId2444 = Ti.UI.createLabel({
        text: "Subline Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        top: "20",
        id: "__alloyId2444"
    });
    $.__views.scrollView.add($.__views.__alloyId2444);
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
    $.__views.__alloyId2445 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2445"
    });
    $.__views.__alloyId2436.add($.__views.__alloyId2445);
    $.__views.__alloyId2446 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2446"
    });
    $.__views.__alloyId2445.add($.__views.__alloyId2446);
    submit ? $.__views.__alloyId2446.addEventListener("click", submit) : __defers["$.__views.__alloyId2446!click!submit"] = true;
    $.__views.__alloyId2447 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId2447"
    });
    $.__views.__alloyId2446.add($.__views.__alloyId2447);
    $.__views.__alloyId2448 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2448"
    });
    $.__views.__alloyId2445.add($.__views.__alloyId2448);
    $.__views.__alloyId2449 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2449"
    });
    $.__views.__alloyId2445.add($.__views.__alloyId2449);
    back ? $.__views.__alloyId2449.addEventListener("click", back) : __defers["$.__views.__alloyId2449!click!back"] = true;
    $.__views.__alloyId2450 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId2450"
    });
    $.__views.__alloyId2449.add($.__views.__alloyId2450);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId2427!click!close"] && $.__views.__alloyId2427.addEventListener("click", close);
    __defers["$.__views.__alloyId2433!click!resend"] && $.__views.__alloyId2433.addEventListener("click", resend);
    __defers["$.__views.__alloyId2434!click!submit2"] && $.__views.__alloyId2434.addEventListener("click", submit2);
    __defers["$.__views.__alloyId2439!click!back"] && $.__views.__alloyId2439.addEventListener("click", back);
    __defers["$.__views.__alloyId2446!click!submit"] && $.__views.__alloyId2446.addEventListener("click", submit);
    __defers["$.__views.__alloyId2449!click!back"] && $.__views.__alloyId2449.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;