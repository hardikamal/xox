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
    $.__views.__alloyId2088 = Alloy.createController("_header", {
        id: "__alloyId2088",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId2088.setParent($.__views.win);
    $.__views.__alloyId2089 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId2089"
    });
    $.__views.win.add($.__views.__alloyId2089);
    $.__views.__alloyId2090 = Ti.UI.createLabel({
        text: "Settings",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2090"
    });
    $.__views.__alloyId2089.add($.__views.__alloyId2090);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.__alloyId2091 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2091"
    });
    $.__views.scrollView.add($.__views.__alloyId2091);
    $.__views.__alloyId2092 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2092"
    });
    $.__views.__alloyId2091.add($.__views.__alloyId2092);
    $.__views.__alloyId2093 = Ti.UI.createLabel({
        text: "Auto Login",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2093"
    });
    $.__views.__alloyId2092.add($.__views.__alloyId2093);
    $.__views.__alloyId2094 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2094"
    });
    $.__views.__alloyId2091.add($.__views.__alloyId2094);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId2094.add($.__views.switch1);
    login ? $.__views.switch1.addEventListener("change", login) : __defers["$.__views.switch1!change!login"] = true;
    $.__views.__alloyId2095 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2095"
    });
    $.__views.scrollView.add($.__views.__alloyId2095);
    $.__views.__alloyId2096 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2096"
    });
    $.__views.__alloyId2095.add($.__views.__alloyId2096);
    $.__views.__alloyId2097 = Ti.UI.createLabel({
        text: "Push Notification",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2097"
    });
    $.__views.__alloyId2096.add($.__views.__alloyId2097);
    $.__views.__alloyId2098 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2098"
    });
    $.__views.__alloyId2095.add($.__views.__alloyId2098);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2098.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId2099 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2099"
    });
    $.__views.scrollView.add($.__views.__alloyId2099);
    $.__views.__alloyId2100 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2100"
    });
    $.__views.__alloyId2099.add($.__views.__alloyId2100);
    $.__views.__alloyId2101 = Ti.UI.createLabel({
        text: "Social Sharing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2101"
    });
    $.__views.__alloyId2100.add($.__views.__alloyId2101);
    $.__views.__alloyId2102 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2102"
    });
    $.__views.scrollView.add($.__views.__alloyId2102);
    facebook ? $.__views.__alloyId2102.addEventListener("click", facebook) : __defers["$.__views.__alloyId2102!click!facebook"] = true;
    $.__views.__alloyId2103 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2103"
    });
    $.__views.__alloyId2102.add($.__views.__alloyId2103);
    $.__views.__alloyId2104 = Ti.UI.createLabel({
        text: "Facebook",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2104"
    });
    $.__views.__alloyId2103.add($.__views.__alloyId2104);
    $.__views.__alloyId2105 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2105"
    });
    $.__views.__alloyId2102.add($.__views.__alloyId2105);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2105.add($.__views.arrow1);
    $.__views.__alloyId2106 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2106"
    });
    $.__views.scrollView.add($.__views.__alloyId2106);
    twitter ? $.__views.__alloyId2106.addEventListener("click", twitter) : __defers["$.__views.__alloyId2106!click!twitter"] = true;
    $.__views.__alloyId2107 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2107"
    });
    $.__views.__alloyId2106.add($.__views.__alloyId2107);
    $.__views.__alloyId2108 = Ti.UI.createLabel({
        text: "Twitter",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2108"
    });
    $.__views.__alloyId2107.add($.__views.__alloyId2108);
    $.__views.__alloyId2109 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2109"
    });
    $.__views.__alloyId2106.add($.__views.__alloyId2109);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2109.add($.__views.arrow2);
    $.__views.__alloyId2110 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2110"
    });
    $.__views.scrollView.add($.__views.__alloyId2110);
    google ? $.__views.__alloyId2110.addEventListener("click", google) : __defers["$.__views.__alloyId2110!click!google"] = true;
    $.__views.__alloyId2111 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2111"
    });
    $.__views.__alloyId2110.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createLabel({
        text: "Google+",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2112"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        id: "__alloyId2113"
    });
    $.__views.__alloyId2110.add($.__views.__alloyId2113);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2113.add($.__views.arrow3);
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
    __defers["$.__views.__alloyId2102!click!facebook"] && $.__views.__alloyId2102.addEventListener("click", facebook);
    __defers["$.__views.__alloyId2106!click!twitter"] && $.__views.__alloyId2106.addEventListener("click", twitter);
    __defers["$.__views.__alloyId2110!click!google"] && $.__views.__alloyId2110.addEventListener("click", google);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;