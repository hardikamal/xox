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
    $.__views.__alloyId2318 = Alloy.createController("_header", {
        id: "__alloyId2318",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId2318.setParent($.__views.win);
    $.__views.__alloyId2319 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId2319"
    });
    $.__views.win.add($.__views.__alloyId2319);
    $.__views.__alloyId2320 = Ti.UI.createLabel({
        text: "Settings",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2320"
    });
    $.__views.__alloyId2319.add($.__views.__alloyId2320);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.__alloyId2321 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2321"
    });
    $.__views.scrollView.add($.__views.__alloyId2321);
    $.__views.__alloyId2322 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2322"
    });
    $.__views.__alloyId2321.add($.__views.__alloyId2322);
    $.__views.__alloyId2323 = Ti.UI.createLabel({
        text: "Push Notification",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2323"
    });
    $.__views.__alloyId2322.add($.__views.__alloyId2323);
    $.__views.__alloyId2324 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2324"
    });
    $.__views.__alloyId2321.add($.__views.__alloyId2324);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2324.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId2325 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2325"
    });
    $.__views.scrollView.add($.__views.__alloyId2325);
    $.__views.__alloyId2326 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2326"
    });
    $.__views.__alloyId2325.add($.__views.__alloyId2326);
    $.__views.__alloyId2327 = Ti.UI.createLabel({
        text: "Social Sharing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2327"
    });
    $.__views.__alloyId2326.add($.__views.__alloyId2327);
    $.__views.__alloyId2328 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2328"
    });
    $.__views.scrollView.add($.__views.__alloyId2328);
    facebook ? $.__views.__alloyId2328.addEventListener("click", facebook) : __defers["$.__views.__alloyId2328!click!facebook"] = true;
    $.__views.__alloyId2329 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2329"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2329);
    $.__views.__alloyId2330 = Ti.UI.createLabel({
        text: "Facebook",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2330"
    });
    $.__views.__alloyId2329.add($.__views.__alloyId2330);
    $.__views.__alloyId2331 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2331"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2331);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2331.add($.__views.arrow1);
    $.__views.__alloyId2332 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2332"
    });
    $.__views.scrollView.add($.__views.__alloyId2332);
    twitter ? $.__views.__alloyId2332.addEventListener("click", twitter) : __defers["$.__views.__alloyId2332!click!twitter"] = true;
    $.__views.__alloyId2333 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2333"
    });
    $.__views.__alloyId2332.add($.__views.__alloyId2333);
    $.__views.__alloyId2334 = Ti.UI.createLabel({
        text: "Twitter",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2334"
    });
    $.__views.__alloyId2333.add($.__views.__alloyId2334);
    $.__views.__alloyId2335 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2335"
    });
    $.__views.__alloyId2332.add($.__views.__alloyId2335);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2335.add($.__views.arrow2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    console.log("android");
    $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    __defers["$.__views.switch2!change!notification"] && $.__views.switch2.addEventListener("change", notification);
    __defers["$.__views.__alloyId2328!click!facebook"] && $.__views.__alloyId2328.addEventListener("click", facebook);
    __defers["$.__views.__alloyId2332!click!twitter"] && $.__views.__alloyId2332.addEventListener("click", twitter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;