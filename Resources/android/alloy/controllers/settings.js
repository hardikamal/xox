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
    $.__views.__alloyId1478 = Alloy.createController("_header", {
        id: "__alloyId1478",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId1478.setParent($.__views.win);
    $.__views.__alloyId1479 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId1479"
    });
    $.__views.win.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createLabel({
        text: "Settings",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1480"
    });
    $.__views.__alloyId1479.add($.__views.__alloyId1480);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.__alloyId1481 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1481"
    });
    $.__views.scrollView.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1482"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createLabel({
        text: "Auto Login",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1483"
    });
    $.__views.__alloyId1482.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1484"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1484);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1484.add($.__views.switch1);
    login ? $.__views.switch1.addEventListener("change", login) : __defers["$.__views.switch1!change!login"] = true;
    $.__views.__alloyId1485 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1485"
    });
    $.__views.scrollView.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1486"
    });
    $.__views.__alloyId1485.add($.__views.__alloyId1486);
    $.__views.__alloyId1487 = Ti.UI.createLabel({
        text: "Push Notification",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1487"
    });
    $.__views.__alloyId1486.add($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1488"
    });
    $.__views.__alloyId1485.add($.__views.__alloyId1488);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId1488.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId1489 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1489"
    });
    $.__views.scrollView.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1490"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
        text: "Social Sharing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1491"
    });
    $.__views.__alloyId1490.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1492"
    });
    $.__views.scrollView.add($.__views.__alloyId1492);
    facebook ? $.__views.__alloyId1492.addEventListener("click", facebook) : __defers["$.__views.__alloyId1492!click!facebook"] = true;
    $.__views.__alloyId1493 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1493"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
    $.__views.__alloyId1494 = Ti.UI.createLabel({
        text: "Facebook",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1494"
    });
    $.__views.__alloyId1493.add($.__views.__alloyId1494);
    $.__views.__alloyId1495 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1495"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1495);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1495.add($.__views.arrow1);
    $.__views.__alloyId1496 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1496"
    });
    $.__views.scrollView.add($.__views.__alloyId1496);
    twitter ? $.__views.__alloyId1496.addEventListener("click", twitter) : __defers["$.__views.__alloyId1496!click!twitter"] = true;
    $.__views.__alloyId1497 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1497"
    });
    $.__views.__alloyId1496.add($.__views.__alloyId1497);
    $.__views.__alloyId1498 = Ti.UI.createLabel({
        text: "Twitter",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1498"
    });
    $.__views.__alloyId1497.add($.__views.__alloyId1498);
    $.__views.__alloyId1499 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1499"
    });
    $.__views.__alloyId1496.add($.__views.__alloyId1499);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1499.add($.__views.arrow2);
    $.__views.__alloyId1500 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1500"
    });
    $.__views.scrollView.add($.__views.__alloyId1500);
    google ? $.__views.__alloyId1500.addEventListener("click", google) : __defers["$.__views.__alloyId1500!click!google"] = true;
    $.__views.__alloyId1501 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1501"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createLabel({
        text: "Google+",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1502"
    });
    $.__views.__alloyId1501.add($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        id: "__alloyId1503"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1503);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1503.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    console.log("android");
    $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    __defers["$.__views.switch1!change!login"] && $.__views.switch1.addEventListener("change", login);
    __defers["$.__views.switch2!change!notification"] && $.__views.switch2.addEventListener("change", notification);
    __defers["$.__views.__alloyId1492!click!facebook"] && $.__views.__alloyId1492.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1496!click!twitter"] && $.__views.__alloyId1496.addEventListener("click", twitter);
    __defers["$.__views.__alloyId1500!click!google"] && $.__views.__alloyId1500.addEventListener("click", google);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;