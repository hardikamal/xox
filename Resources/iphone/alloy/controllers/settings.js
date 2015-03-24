function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function notification(e) {
        console.log("notification: " + e.value);
    }
    function facebook() {
        console.log("facebook");
    }
    function twitter() {
        console.log("twitter");
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
    $.__views.__alloyId2248 = Alloy.createController("_header", {
        id: "__alloyId2248",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId2248.setParent($.__views.win);
    $.__views.__alloyId2249 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId2249"
    });
    $.__views.win.add($.__views.__alloyId2249);
    $.__views.__alloyId2250 = Ti.UI.createLabel({
        text: "Settings",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2250"
    });
    $.__views.__alloyId2249.add($.__views.__alloyId2250);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.__alloyId2251 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2251"
    });
    $.__views.scrollView.add($.__views.__alloyId2251);
    $.__views.__alloyId2252 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2252"
    });
    $.__views.__alloyId2251.add($.__views.__alloyId2252);
    $.__views.__alloyId2253 = Ti.UI.createLabel({
        text: "Push Notification",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2253"
    });
    $.__views.__alloyId2252.add($.__views.__alloyId2253);
    $.__views.__alloyId2254 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2254"
    });
    $.__views.__alloyId2251.add($.__views.__alloyId2254);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2254.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId2255 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2255"
    });
    $.__views.scrollView.add($.__views.__alloyId2255);
    $.__views.__alloyId2256 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2256"
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2256);
    $.__views.__alloyId2257 = Ti.UI.createLabel({
        text: "Social Sharing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2257"
    });
    $.__views.__alloyId2256.add($.__views.__alloyId2257);
    $.__views.__alloyId2258 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2258"
    });
    $.__views.scrollView.add($.__views.__alloyId2258);
    facebook ? $.__views.__alloyId2258.addEventListener("click", facebook) : __defers["$.__views.__alloyId2258!click!facebook"] = true;
    $.__views.__alloyId2259 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2259"
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2259);
    $.__views.__alloyId2260 = Ti.UI.createLabel({
        text: "Facebook",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2260"
    });
    $.__views.__alloyId2259.add($.__views.__alloyId2260);
    $.__views.__alloyId2261 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2261"
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2261);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2261.add($.__views.arrow1);
    $.__views.__alloyId2262 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2262"
    });
    $.__views.scrollView.add($.__views.__alloyId2262);
    twitter ? $.__views.__alloyId2262.addEventListener("click", twitter) : __defers["$.__views.__alloyId2262!click!twitter"] = true;
    $.__views.__alloyId2263 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2263"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2263);
    $.__views.__alloyId2264 = Ti.UI.createLabel({
        text: "Twitter",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2264"
    });
    $.__views.__alloyId2263.add($.__views.__alloyId2264);
    $.__views.__alloyId2265 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2265"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2265);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2265.add($.__views.arrow2);
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
    __defers["$.__views.switch2!change!notification"] && $.__views.switch2.addEventListener("change", notification);
    __defers["$.__views.__alloyId2258!click!facebook"] && $.__views.__alloyId2258.addEventListener("click", facebook);
    __defers["$.__views.__alloyId2262!click!twitter"] && $.__views.__alloyId2262.addEventListener("click", twitter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;