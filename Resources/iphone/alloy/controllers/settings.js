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
    $.__views.__alloyId1461 = Alloy.createController("_header", {
        id: "__alloyId1461",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId1461.setParent($.__views.win);
    $.__views.__alloyId1462 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId1462"
    });
    $.__views.win.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createLabel({
        text: "Settings",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1463);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.__alloyId1464 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1464"
    });
    $.__views.scrollView.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createLabel({
        text: "Auto Login",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1466"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1467"
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1467);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId1467.add($.__views.switch1);
    login ? $.__views.switch1.addEventListener("change", login) : __defers["$.__views.switch1!change!login"] = true;
    $.__views.__alloyId1468 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1468"
    });
    $.__views.scrollView.add($.__views.__alloyId1468);
    $.__views.__alloyId1469 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
        text: "Push Notification",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1470"
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1470);
    $.__views.__alloyId1471 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1471"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1471);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId1471.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId1472 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId1472"
    });
    $.__views.scrollView.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1473"
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createLabel({
        text: "Social Sharing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1474"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1475"
    });
    $.__views.scrollView.add($.__views.__alloyId1475);
    facebook ? $.__views.__alloyId1475.addEventListener("click", facebook) : __defers["$.__views.__alloyId1475!click!facebook"] = true;
    $.__views.__alloyId1476 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1476"
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createLabel({
        text: "Facebook",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1477"
    });
    $.__views.__alloyId1476.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1478"
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1478);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1478.add($.__views.arrow1);
    $.__views.__alloyId1479 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1479"
    });
    $.__views.scrollView.add($.__views.__alloyId1479);
    twitter ? $.__views.__alloyId1479.addEventListener("click", twitter) : __defers["$.__views.__alloyId1479!click!twitter"] = true;
    $.__views.__alloyId1480 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1480"
    });
    $.__views.__alloyId1479.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createLabel({
        text: "Twitter",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1481"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1482"
    });
    $.__views.__alloyId1479.add($.__views.__alloyId1482);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1482.add($.__views.arrow2);
    $.__views.__alloyId1483 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId1483"
    });
    $.__views.scrollView.add($.__views.__alloyId1483);
    google ? $.__views.__alloyId1483.addEventListener("click", google) : __defers["$.__views.__alloyId1483!click!google"] = true;
    $.__views.__alloyId1484 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId1484"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createLabel({
        text: "Google+",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1485"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        id: "__alloyId1486"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1486);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1486.add($.__views.arrow3);
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
    __defers["$.__views.__alloyId1475!click!facebook"] && $.__views.__alloyId1475.addEventListener("click", facebook);
    __defers["$.__views.__alloyId1479!click!twitter"] && $.__views.__alloyId1479.addEventListener("click", twitter);
    __defers["$.__views.__alloyId1483!click!google"] && $.__views.__alloyId1483.addEventListener("click", google);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;