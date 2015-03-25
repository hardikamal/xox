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
        DRAWER.navigation("switchXOX", 1);
    }
    function proceed() {
        console.log("proceed");
        DRAWER.navigation("switchXOX3", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "switchXOX2";
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
    $.__views.switchXOX2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "switchXOX2"
    });
    $.__views.switchXOX2 && $.addTopLevelView($.__views.switchXOX2);
    $.__views.__alloyId2784 = Alloy.createController("_header", {
        id: "__alloyId2784",
        __parentSymbol: $.__views.switchXOX2
    });
    $.__views.__alloyId2784.setParent($.__views.switchXOX2);
    $.__views.__alloyId2785 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId2785"
    });
    $.__views.switchXOX2.add($.__views.__alloyId2785);
    $.__views.__alloyId2786 = Ti.UI.createLabel({
        text: "#1758 SWITCH TO XOX",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId2786"
    });
    $.__views.__alloyId2785.add($.__views.__alloyId2786);
    $.__views.__alloyId2787 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2787"
    });
    $.__views.__alloyId2785.add($.__views.__alloyId2787);
    back ? $.__views.__alloyId2787.addEventListener("click", back) : __defers["$.__views.__alloyId2787!click!back"] = true;
    $.__views.__alloyId2788 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2788"
    });
    $.__views.switchXOX2.add($.__views.__alloyId2788);
    $.__views.__alloyId2789 = Ti.UI.createLabel({
        text: "Step 1 of 2",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2789"
    });
    $.__views.__alloyId2788.add($.__views.__alloyId2789);
    $.__views.__alloyId2790 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId2790"
    });
    $.__views.__alloyId2788.add($.__views.__alloyId2790);
    $.__views.__alloyId2791 = Ti.UI.createView({
        layout: "vertical",
        height: "30",
        backgroundColor: "black",
        id: "__alloyId2791"
    });
    $.__views.switchXOX2.add($.__views.__alloyId2791);
    $.__views.__alloyId2792 = Ti.UI.createLabel({
        text: "DETAILS",
        backgroundColor: "transparent",
        color: "white",
        height: "100%",
        left: "20",
        id: "__alloyId2792"
    });
    $.__views.__alloyId2791.add($.__views.__alloyId2792);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.switchXOX2.add($.__views.scrollView);
    $.__views.__alloyId2793 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId2793"
    });
    $.__views.scrollView.add($.__views.__alloyId2793);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2"
    });
    $.__views.scrollView.add($.__views.mobileNo);
    $.__views.__alloyId2794 = Ti.UI.createLabel({
        text: "Name",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId2794"
    });
    $.__views.scrollView.add($.__views.__alloyId2794);
    $.__views.name = Ti.UI.createTextField({
        id: "name",
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2"
    });
    $.__views.scrollView.add($.__views.name);
    $.__views.__alloyId2795 = Ti.UI.createLabel({
        text: "Email",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId2795"
    });
    $.__views.scrollView.add($.__views.__alloyId2795);
    $.__views.email = Ti.UI.createTextField({
        id: "email",
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2"
    });
    $.__views.scrollView.add($.__views.email);
    $.__views.__alloyId2796 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId2796"
    });
    $.__views.switchXOX2.add($.__views.__alloyId2796);
    proceed ? $.__views.__alloyId2796.addEventListener("click", proceed) : __defers["$.__views.__alloyId2796!click!proceed"] = true;
    $.__views.__alloyId2797 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId2797"
    });
    $.__views.__alloyId2796.add($.__views.__alloyId2797);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    __defers["$.__views.__alloyId2787!click!back"] && $.__views.__alloyId2787.addEventListener("click", back);
    __defers["$.__views.__alloyId2796!click!proceed"] && $.__views.__alloyId2796.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;