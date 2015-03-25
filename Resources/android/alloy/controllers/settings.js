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
    $.__views.__alloyId2639 = Alloy.createController("_header", {
        id: "__alloyId2639",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId2639.setParent($.__views.win);
    $.__views.__alloyId2640 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId2640"
    });
    $.__views.win.add($.__views.__alloyId2640);
    $.__views.__alloyId2641 = Ti.UI.createLabel({
        text: "Settings",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2641"
    });
    $.__views.__alloyId2640.add($.__views.__alloyId2641);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.__alloyId2642 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2642"
    });
    $.__views.scrollView.add($.__views.__alloyId2642);
    $.__views.__alloyId2643 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2643"
    });
    $.__views.__alloyId2642.add($.__views.__alloyId2643);
    $.__views.__alloyId2644 = Ti.UI.createLabel({
        text: "Push Notification",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2644"
    });
    $.__views.__alloyId2643.add($.__views.__alloyId2644);
    $.__views.__alloyId2645 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2645"
    });
    $.__views.__alloyId2642.add($.__views.__alloyId2645);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2645.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId2646 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2646"
    });
    $.__views.scrollView.add($.__views.__alloyId2646);
    $.__views.__alloyId2647 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2647"
    });
    $.__views.__alloyId2646.add($.__views.__alloyId2647);
    $.__views.__alloyId2648 = Ti.UI.createLabel({
        text: "Social Sharing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2648"
    });
    $.__views.__alloyId2647.add($.__views.__alloyId2648);
    $.__views.__alloyId2649 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2649"
    });
    $.__views.scrollView.add($.__views.__alloyId2649);
    facebook ? $.__views.__alloyId2649.addEventListener("click", facebook) : __defers["$.__views.__alloyId2649!click!facebook"] = true;
    $.__views.__alloyId2650 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2650"
    });
    $.__views.__alloyId2649.add($.__views.__alloyId2650);
    $.__views.__alloyId2651 = Ti.UI.createLabel({
        text: "Facebook",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2651"
    });
    $.__views.__alloyId2650.add($.__views.__alloyId2651);
    $.__views.__alloyId2652 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2652"
    });
    $.__views.__alloyId2649.add($.__views.__alloyId2652);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2652.add($.__views.arrow1);
    $.__views.__alloyId2653 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2653"
    });
    $.__views.scrollView.add($.__views.__alloyId2653);
    twitter ? $.__views.__alloyId2653.addEventListener("click", twitter) : __defers["$.__views.__alloyId2653!click!twitter"] = true;
    $.__views.__alloyId2654 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2654"
    });
    $.__views.__alloyId2653.add($.__views.__alloyId2654);
    $.__views.__alloyId2655 = Ti.UI.createLabel({
        text: "Twitter",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2655"
    });
    $.__views.__alloyId2654.add($.__views.__alloyId2655);
    $.__views.__alloyId2656 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2656"
    });
    $.__views.__alloyId2653.add($.__views.__alloyId2656);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2656.add($.__views.arrow2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    console.log("android");
    $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    __defers["$.__views.switch2!change!notification"] && $.__views.switch2.addEventListener("change", notification);
    __defers["$.__views.__alloyId2649!click!facebook"] && $.__views.__alloyId2649.addEventListener("click", facebook);
    __defers["$.__views.__alloyId2653!click!twitter"] && $.__views.__alloyId2653.addEventListener("click", twitter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;