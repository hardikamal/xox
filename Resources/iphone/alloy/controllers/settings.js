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
    $.__views.__alloyId2561 = Alloy.createController("_header", {
        id: "__alloyId2561",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId2561.setParent($.__views.win);
    $.__views.__alloyId2562 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId2562"
    });
    $.__views.win.add($.__views.__alloyId2562);
    $.__views.__alloyId2563 = Ti.UI.createLabel({
        color: "white",
        backgroundColor: "transparent",
        font: {
            fontSize: "18dp"
        },
        text: "Settings",
        left: "10",
        top: "10",
        id: "__alloyId2563"
    });
    $.__views.__alloyId2562.add($.__views.__alloyId2563);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.__alloyId2564 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2564"
    });
    $.__views.scrollView.add($.__views.__alloyId2564);
    $.__views.__alloyId2565 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2565"
    });
    $.__views.__alloyId2564.add($.__views.__alloyId2565);
    $.__views.__alloyId2566 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Push Notification",
        textAlign: "left",
        left: "10",
        id: "__alloyId2566"
    });
    $.__views.__alloyId2565.add($.__views.__alloyId2566);
    $.__views.__alloyId2567 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2567"
    });
    $.__views.__alloyId2564.add($.__views.__alloyId2567);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2567.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId2568 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2568"
    });
    $.__views.scrollView.add($.__views.__alloyId2568);
    $.__views.__alloyId2569 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2569"
    });
    $.__views.__alloyId2568.add($.__views.__alloyId2569);
    $.__views.__alloyId2570 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Social Sharing",
        textAlign: "left",
        left: "10",
        id: "__alloyId2570"
    });
    $.__views.__alloyId2569.add($.__views.__alloyId2570);
    $.__views.__alloyId2571 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2571"
    });
    $.__views.scrollView.add($.__views.__alloyId2571);
    facebook ? $.__views.__alloyId2571.addEventListener("click", facebook) : __defers["$.__views.__alloyId2571!click!facebook"] = true;
    $.__views.__alloyId2572 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2572"
    });
    $.__views.__alloyId2571.add($.__views.__alloyId2572);
    $.__views.__alloyId2573 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Facebook",
        textAlign: "left",
        left: "10",
        id: "__alloyId2573"
    });
    $.__views.__alloyId2572.add($.__views.__alloyId2573);
    $.__views.__alloyId2574 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2574"
    });
    $.__views.__alloyId2571.add($.__views.__alloyId2574);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2574.add($.__views.arrow1);
    $.__views.__alloyId2575 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2575"
    });
    $.__views.scrollView.add($.__views.__alloyId2575);
    twitter ? $.__views.__alloyId2575.addEventListener("click", twitter) : __defers["$.__views.__alloyId2575!click!twitter"] = true;
    $.__views.__alloyId2576 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2576"
    });
    $.__views.__alloyId2575.add($.__views.__alloyId2576);
    $.__views.__alloyId2577 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Twitter",
        textAlign: "left",
        left: "10",
        id: "__alloyId2577"
    });
    $.__views.__alloyId2576.add($.__views.__alloyId2577);
    $.__views.__alloyId2578 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2578"
    });
    $.__views.__alloyId2575.add($.__views.__alloyId2578);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2578.add($.__views.arrow2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    }
    __defers["$.__views.switch2!change!notification"] && $.__views.switch2.addEventListener("change", notification);
    __defers["$.__views.__alloyId2571!click!facebook"] && $.__views.__alloyId2571.addEventListener("click", facebook);
    __defers["$.__views.__alloyId2575!click!twitter"] && $.__views.__alloyId2575.addEventListener("click", twitter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;