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
    $.__views.__alloyId1499 = Alloy.createController("_header", {
        id: "__alloyId1499",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId1499.setParent($.__views.win);
    $.__views.__alloyId1500 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId1500"
    });
    $.__views.win.add($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createLabel({
        text: "Settings",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1501"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1501);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.__alloyId1502 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1502"
    });
    $.__views.scrollView.add($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1503"
    });
    $.__views.__alloyId1502.add($.__views.__alloyId1503);
    $.__views.__alloyId1504 = Ti.UI.createLabel({
        text: "Push Notification",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1504"
    });
    $.__views.__alloyId1503.add($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1505"
    });
    $.__views.__alloyId1502.add($.__views.__alloyId1505);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId1505.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId1506 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1506"
    });
    $.__views.scrollView.add($.__views.__alloyId1506);
    $.__views.__alloyId1507 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1507"
    });
    $.__views.__alloyId1506.add($.__views.__alloyId1507);
    $.__views.__alloyId1508 = Ti.UI.createLabel({
        text: "Social Sharing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1508"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1508);
    $.__views.__alloyId1509 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1509"
    });
    $.__views.scrollView.add($.__views.__alloyId1509);
    facebook ? $.__views.__alloyId1509.addEventListener("click", facebook) : __defers["$.__views.__alloyId1509!click!facebook"] = true;
    $.__views.__alloyId1510 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1510"
    });
    $.__views.__alloyId1509.add($.__views.__alloyId1510);
    $.__views.__alloyId1511 = Ti.UI.createLabel({
        text: "Facebook",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1511"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1512"
    });
    $.__views.__alloyId1509.add($.__views.__alloyId1512);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1512.add($.__views.arrow1);
    $.__views.__alloyId1513 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1513"
    });
    $.__views.scrollView.add($.__views.__alloyId1513);
    twitter ? $.__views.__alloyId1513.addEventListener("click", twitter) : __defers["$.__views.__alloyId1513!click!twitter"] = true;
    $.__views.__alloyId1514 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1514"
    });
    $.__views.__alloyId1513.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createLabel({
        text: "Twitter",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1515"
    });
    $.__views.__alloyId1514.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1516"
    });
    $.__views.__alloyId1513.add($.__views.__alloyId1516);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1516.add($.__views.arrow2);
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
    __defers["$.__views.__alloyId1509!click!facebook"] && $.__views.__alloyId1509.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1513!click!twitter"] && $.__views.__alloyId1513.addEventListener("click", twitter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;