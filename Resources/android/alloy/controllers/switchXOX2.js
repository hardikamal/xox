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
    $.__views.__alloyId2928 = Alloy.createController("_header", {
        id: "__alloyId2928",
        __parentSymbol: $.__views.switchXOX2
    });
    $.__views.__alloyId2928.setParent($.__views.switchXOX2);
    $.__views.__alloyId2929 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId2929"
    });
    $.__views.switchXOX2.add($.__views.__alloyId2929);
    $.__views.__alloyId2930 = Ti.UI.createLabel({
        text: "#1758 SWITCH TO XOX",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId2930"
    });
    $.__views.__alloyId2929.add($.__views.__alloyId2930);
    $.__views.__alloyId2931 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2931"
    });
    $.__views.__alloyId2929.add($.__views.__alloyId2931);
    back ? $.__views.__alloyId2931.addEventListener("click", back) : __defers["$.__views.__alloyId2931!click!back"] = true;
    $.__views.__alloyId2932 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2932"
    });
    $.__views.switchXOX2.add($.__views.__alloyId2932);
    $.__views.__alloyId2933 = Ti.UI.createLabel({
        text: "Step 1 of 2",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2933"
    });
    $.__views.__alloyId2932.add($.__views.__alloyId2933);
    $.__views.__alloyId2934 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId2934"
    });
    $.__views.__alloyId2932.add($.__views.__alloyId2934);
    $.__views.__alloyId2935 = Ti.UI.createView({
        layout: "vertical",
        height: "30",
        backgroundColor: "black",
        id: "__alloyId2935"
    });
    $.__views.switchXOX2.add($.__views.__alloyId2935);
    $.__views.__alloyId2936 = Ti.UI.createLabel({
        text: "DETAILS",
        backgroundColor: "transparent",
        color: "white",
        height: "100%",
        left: "20",
        id: "__alloyId2936"
    });
    $.__views.__alloyId2935.add($.__views.__alloyId2936);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.switchXOX2.add($.__views.scrollView);
    $.__views.__alloyId2937 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId2937"
    });
    $.__views.scrollView.add($.__views.__alloyId2937);
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
    $.__views.__alloyId2938 = Ti.UI.createLabel({
        text: "Name",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId2938"
    });
    $.__views.scrollView.add($.__views.__alloyId2938);
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
    $.__views.__alloyId2939 = Ti.UI.createLabel({
        text: "Email",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId2939"
    });
    $.__views.scrollView.add($.__views.__alloyId2939);
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
    $.__views.__alloyId2940 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId2940"
    });
    $.__views.switchXOX2.add($.__views.__alloyId2940);
    proceed ? $.__views.__alloyId2940.addEventListener("click", proceed) : __defers["$.__views.__alloyId2940!click!proceed"] = true;
    $.__views.__alloyId2941 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId2941"
    });
    $.__views.__alloyId2940.add($.__views.__alloyId2941);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    __defers["$.__views.__alloyId2931!click!back"] && $.__views.__alloyId2931.addEventListener("click", back);
    __defers["$.__views.__alloyId2940!click!proceed"] && $.__views.__alloyId2940.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;