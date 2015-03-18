function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function login(e) {
        console.log("login: " + e.value);
    }
    function notification(e) {
        console.log("notification: " + e.value);
    }
    function facebook() {
        console.log("facebook");
    }
    function twitter() {
        console.log("twitter");
    }
    function google() {
        console.log("google");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
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
    $.__views.win = Ti.UI.createView({
        layout: "vertical",
        id: "win",
        backgroundColor: "white"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId1103 = Alloy.createController("_header", {
        id: "__alloyId1103",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId1103.setParent($.__views.win);
    $.__views.__alloyId1104 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId1104"
    });
    $.__views.win.add($.__views.__alloyId1104);
    $.__views.__alloyId1105 = Ti.UI.createLabel({
        text: "Settings",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1105"
    });
    $.__views.__alloyId1104.add($.__views.__alloyId1105);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.__alloyId1106 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1106"
    });
    $.__views.scrollView.add($.__views.__alloyId1106);
    $.__views.__alloyId1107 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1107"
    });
    $.__views.__alloyId1106.add($.__views.__alloyId1107);
    $.__views.__alloyId1108 = Ti.UI.createLabel({
        text: "Auto Login",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1108"
    });
    $.__views.__alloyId1107.add($.__views.__alloyId1108);
    $.__views.__alloyId1109 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1109"
    });
    $.__views.__alloyId1106.add($.__views.__alloyId1109);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1109.add($.__views.switch1);
    login ? $.__views.switch1.addEventListener("change", login) : __defers["$.__views.switch1!change!login"] = true;
    $.__views.__alloyId1110 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1110"
    });
    $.__views.scrollView.add($.__views.__alloyId1110);
    $.__views.__alloyId1111 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1111"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1111);
    $.__views.__alloyId1112 = Ti.UI.createLabel({
        text: "Push Notification",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1112"
    });
    $.__views.__alloyId1111.add($.__views.__alloyId1112);
    $.__views.__alloyId1113 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1113"
    });
    $.__views.__alloyId1110.add($.__views.__alloyId1113);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId1113.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId1114 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1114"
    });
    $.__views.scrollView.add($.__views.__alloyId1114);
    $.__views.__alloyId1115 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1115"
    });
    $.__views.__alloyId1114.add($.__views.__alloyId1115);
    $.__views.__alloyId1116 = Ti.UI.createLabel({
        text: "Social Sharing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1116"
    });
    $.__views.__alloyId1115.add($.__views.__alloyId1116);
    $.__views.__alloyId1117 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1117"
    });
    $.__views.scrollView.add($.__views.__alloyId1117);
    facebook ? $.__views.__alloyId1117.addEventListener("click", facebook) : __defers["$.__views.__alloyId1117!click!facebook"] = true;
    $.__views.__alloyId1118 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1118"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1118);
    $.__views.__alloyId1119 = Ti.UI.createLabel({
        text: "Facebook",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1119"
    });
    $.__views.__alloyId1118.add($.__views.__alloyId1119);
    $.__views.__alloyId1120 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1120"
    });
    $.__views.__alloyId1117.add($.__views.__alloyId1120);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1120.add($.__views.arrow1);
    $.__views.__alloyId1121 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1121"
    });
    $.__views.scrollView.add($.__views.__alloyId1121);
    twitter ? $.__views.__alloyId1121.addEventListener("click", twitter) : __defers["$.__views.__alloyId1121!click!twitter"] = true;
    $.__views.__alloyId1122 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1122"
    });
    $.__views.__alloyId1121.add($.__views.__alloyId1122);
    $.__views.__alloyId1123 = Ti.UI.createLabel({
        text: "Twitter",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1123"
    });
    $.__views.__alloyId1122.add($.__views.__alloyId1123);
    $.__views.__alloyId1124 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1124"
    });
    $.__views.__alloyId1121.add($.__views.__alloyId1124);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1124.add($.__views.arrow2);
    $.__views.__alloyId1125 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1125"
    });
    $.__views.scrollView.add($.__views.__alloyId1125);
    google ? $.__views.__alloyId1125.addEventListener("click", google) : __defers["$.__views.__alloyId1125!click!google"] = true;
    $.__views.__alloyId1126 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1126"
    });
    $.__views.__alloyId1125.add($.__views.__alloyId1126);
    $.__views.__alloyId1127 = Ti.UI.createLabel({
        text: "Google+",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1127"
    });
    $.__views.__alloyId1126.add($.__views.__alloyId1127);
    $.__views.__alloyId1128 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        id: "__alloyId1128"
    });
    $.__views.__alloyId1125.add($.__views.__alloyId1128);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1128.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    }
    __defers["$.__views.switch1!change!login"] && $.__views.switch1.addEventListener("change", login);
    __defers["$.__views.switch2!change!notification"] && $.__views.switch2.addEventListener("change", notification);
    __defers["$.__views.__alloyId1117!click!facebook"] && $.__views.__alloyId1117.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1121!click!twitter"] && $.__views.__alloyId1121.addEventListener("click", twitter);
    __defers["$.__views.__alloyId1125!click!google"] && $.__views.__alloyId1125.addEventListener("click", google);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;