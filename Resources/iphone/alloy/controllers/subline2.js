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
    $.__views.__alloyId2659 = Alloy.createController("_header", {
        id: "__alloyId2659",
        __parentSymbol: $.__views.subline2
    });
    $.__views.__alloyId2659.setParent($.__views.subline2);
    $.__views.tacView = Ti.UI.createView({
        id: "tacView",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.subline2.add($.__views.tacView);
    $.__views.__alloyId2660 = Ti.UI.createView({
        layout: "vertical",
        width: "90%",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        borderColor: "white",
        id: "__alloyId2660"
    });
    $.__views.tacView.add($.__views.__alloyId2660);
    $.__views.__alloyId2661 = Ti.UI.createView({
        height: "50",
        width: Ti.UI.FILL,
        id: "__alloyId2661"
    });
    $.__views.__alloyId2660.add($.__views.__alloyId2661);
    $.__views.__alloyId2662 = Ti.UI.createLabel({
        text: "Activation Code",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "10",
        id: "__alloyId2662"
    });
    $.__views.__alloyId2661.add($.__views.__alloyId2662);
    $.__views.__alloyId2663 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2663"
    });
    $.__views.__alloyId2661.add($.__views.__alloyId2663);
    close ? $.__views.__alloyId2663.addEventListener("click", close) : __defers["$.__views.__alloyId2663!click!close"] = true;
    $.__views.__alloyId2664 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#E6E7E9",
        id: "__alloyId2664"
    });
    $.__views.__alloyId2660.add($.__views.__alloyId2664);
    $.__views.__alloyId2665 = Ti.UI.createLabel({
        text: "A TAC has been sent to the sub-line. Please check and enter below for verification.",
        color: "black",
        width: Ti.UI.FILL,
        textAlign: "left",
        left: "10",
        id: "__alloyId2665"
    });
    $.__views.__alloyId2664.add($.__views.__alloyId2665);
    $.__views.__alloyId2666 = Ti.UI.createLabel({
        text: "Mobile Number: 01x0000000",
        color: "black",
        width: Ti.UI.FILL,
        textAlign: "left",
        left: "10",
        top: "10",
        id: "__alloyId2666"
    });
    $.__views.__alloyId2664.add($.__views.__alloyId2666);
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
    $.__views.__alloyId2664.add($.__views.tac);
    $.__views.__alloyId2667 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId2667"
    });
    $.__views.__alloyId2664.add($.__views.__alloyId2667);
    $.__views.__alloyId2668 = Ti.UI.createLabel({
        text: "If you do not receive TAC within 3 minutes, please",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "10",
        top: "10",
        id: "__alloyId2668"
    });
    $.__views.__alloyId2667.add($.__views.__alloyId2668);
    $.__views.__alloyId2669 = Ti.UI.createLabel({
        text: "click here.",
        color: "black",
        width: Ti.UI.SIZE,
        textAlign: "left",
        left: "0",
        id: "__alloyId2669"
    });
    $.__views.__alloyId2667.add($.__views.__alloyId2669);
    resend ? $.__views.__alloyId2669.addEventListener("click", resend) : __defers["$.__views.__alloyId2669!click!resend"] = true;
    $.__views.__alloyId2670 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2670"
    });
    $.__views.__alloyId2660.add($.__views.__alloyId2670);
    submit2 ? $.__views.__alloyId2670.addEventListener("click", submit2) : __defers["$.__views.__alloyId2670!click!submit2"] = true;
    $.__views.__alloyId2671 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId2671"
    });
    $.__views.__alloyId2670.add($.__views.__alloyId2671);
    $.__views.__alloyId2672 = Ti.UI.createView({
        layout: "vertical",
        top: "50",
        zIndex: "1",
        id: "__alloyId2672"
    });
    $.__views.subline2.add($.__views.__alloyId2672);
    $.__views.__alloyId2673 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2673"
    });
    $.__views.__alloyId2672.add($.__views.__alloyId2673);
    $.__views.__alloyId2674 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2674"
    });
    $.__views.__alloyId2673.add($.__views.__alloyId2674);
    $.__views.__alloyId2675 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2675"
    });
    $.__views.__alloyId2673.add($.__views.__alloyId2675);
    back ? $.__views.__alloyId2675.addEventListener("click", back) : __defers["$.__views.__alloyId2675!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.__alloyId2672.add($.__views.scrollView);
    $.__views.__alloyId2676 = Ti.UI.createLabel({
        text: "1. Key in Sub-line XOX mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2676"
    });
    $.__views.scrollView.add($.__views.__alloyId2676);
    $.__views.__alloyId2677 = Ti.UI.createLabel({
        text: "2. You will receive an activation code via SMS to your sub-line XOX mobile number.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2677"
    });
    $.__views.scrollView.add($.__views.__alloyId2677);
    $.__views.__alloyId2678 = Ti.UI.createLabel({
        text: "3. Upon receiving your activition code via SMS, key in the code to verify and add your sub-line account.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2678"
    });
    $.__views.scrollView.add($.__views.__alloyId2678);
    $.__views.__alloyId2679 = Ti.UI.createLabel({
        text: "4. You may now manage your sub-line account.",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2679"
    });
    $.__views.scrollView.add($.__views.__alloyId2679);
    $.__views.__alloyId2680 = Ti.UI.createLabel({
        text: "Subline Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        top: "20",
        id: "__alloyId2680"
    });
    $.__views.scrollView.add($.__views.__alloyId2680);
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
    $.__views.__alloyId2681 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2681"
    });
    $.__views.__alloyId2672.add($.__views.__alloyId2681);
    $.__views.__alloyId2682 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2682"
    });
    $.__views.__alloyId2681.add($.__views.__alloyId2682);
    submit ? $.__views.__alloyId2682.addEventListener("click", submit) : __defers["$.__views.__alloyId2682!click!submit"] = true;
    $.__views.__alloyId2683 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        textAlign: "center",
        id: "__alloyId2683"
    });
    $.__views.__alloyId2682.add($.__views.__alloyId2683);
    $.__views.__alloyId2684 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2684"
    });
    $.__views.__alloyId2681.add($.__views.__alloyId2684);
    $.__views.__alloyId2685 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2685"
    });
    $.__views.__alloyId2681.add($.__views.__alloyId2685);
    back ? $.__views.__alloyId2685.addEventListener("click", back) : __defers["$.__views.__alloyId2685!click!back"] = true;
    $.__views.__alloyId2686 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId2686"
    });
    $.__views.__alloyId2685.add($.__views.__alloyId2686);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId2663!click!close"] && $.__views.__alloyId2663.addEventListener("click", close);
    __defers["$.__views.__alloyId2669!click!resend"] && $.__views.__alloyId2669.addEventListener("click", resend);
    __defers["$.__views.__alloyId2670!click!submit2"] && $.__views.__alloyId2670.addEventListener("click", submit2);
    __defers["$.__views.__alloyId2675!click!back"] && $.__views.__alloyId2675.addEventListener("click", back);
    __defers["$.__views.__alloyId2682!click!submit"] && $.__views.__alloyId2682.addEventListener("click", submit);
    __defers["$.__views.__alloyId2685!click!back"] && $.__views.__alloyId2685.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;