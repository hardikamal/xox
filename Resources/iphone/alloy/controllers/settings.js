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
    $.__views.__alloyId2067 = Alloy.createController("_header", {
        id: "__alloyId2067",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId2067.setParent($.__views.win);
    $.__views.__alloyId2068 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId2068"
    });
    $.__views.win.add($.__views.__alloyId2068);
    $.__views.__alloyId2069 = Ti.UI.createLabel({
        text: "Settings",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2069"
    });
    $.__views.__alloyId2068.add($.__views.__alloyId2069);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.__alloyId2070 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2070"
    });
    $.__views.scrollView.add($.__views.__alloyId2070);
    $.__views.__alloyId2071 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2071"
    });
    $.__views.__alloyId2070.add($.__views.__alloyId2071);
    $.__views.__alloyId2072 = Ti.UI.createLabel({
        text: "Auto Login",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2072"
    });
    $.__views.__alloyId2071.add($.__views.__alloyId2072);
    $.__views.__alloyId2073 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2073"
    });
    $.__views.__alloyId2070.add($.__views.__alloyId2073);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId2073.add($.__views.switch1);
    login ? $.__views.switch1.addEventListener("change", login) : __defers["$.__views.switch1!change!login"] = true;
    $.__views.__alloyId2074 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2074"
    });
    $.__views.scrollView.add($.__views.__alloyId2074);
    $.__views.__alloyId2075 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2075"
    });
    $.__views.__alloyId2074.add($.__views.__alloyId2075);
    $.__views.__alloyId2076 = Ti.UI.createLabel({
        text: "Push Notification",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2076"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2076);
    $.__views.__alloyId2077 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2077"
    });
    $.__views.__alloyId2074.add($.__views.__alloyId2077);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2077.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId2078 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2078"
    });
    $.__views.scrollView.add($.__views.__alloyId2078);
    $.__views.__alloyId2079 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2079"
    });
    $.__views.__alloyId2078.add($.__views.__alloyId2079);
    $.__views.__alloyId2080 = Ti.UI.createLabel({
        text: "Social Sharing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2080"
    });
    $.__views.__alloyId2079.add($.__views.__alloyId2080);
    $.__views.__alloyId2081 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2081"
    });
    $.__views.scrollView.add($.__views.__alloyId2081);
    facebook ? $.__views.__alloyId2081.addEventListener("click", facebook) : __defers["$.__views.__alloyId2081!click!facebook"] = true;
    $.__views.__alloyId2082 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2082"
    });
    $.__views.__alloyId2081.add($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createLabel({
        text: "Facebook",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2083"
    });
    $.__views.__alloyId2082.add($.__views.__alloyId2083);
    $.__views.__alloyId2084 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2084"
    });
    $.__views.__alloyId2081.add($.__views.__alloyId2084);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2084.add($.__views.arrow1);
    $.__views.__alloyId2085 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2085"
    });
    $.__views.scrollView.add($.__views.__alloyId2085);
    twitter ? $.__views.__alloyId2085.addEventListener("click", twitter) : __defers["$.__views.__alloyId2085!click!twitter"] = true;
    $.__views.__alloyId2086 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2086"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createLabel({
        text: "Twitter",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2087"
    });
    $.__views.__alloyId2086.add($.__views.__alloyId2087);
    $.__views.__alloyId2088 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2088"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2088);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2088.add($.__views.arrow2);
    $.__views.__alloyId2089 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2089"
    });
    $.__views.scrollView.add($.__views.__alloyId2089);
    google ? $.__views.__alloyId2089.addEventListener("click", google) : __defers["$.__views.__alloyId2089!click!google"] = true;
    $.__views.__alloyId2090 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2090"
    });
    $.__views.__alloyId2089.add($.__views.__alloyId2090);
    $.__views.__alloyId2091 = Ti.UI.createLabel({
        text: "Google+",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2091"
    });
    $.__views.__alloyId2090.add($.__views.__alloyId2091);
    $.__views.__alloyId2092 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        id: "__alloyId2092"
    });
    $.__views.__alloyId2089.add($.__views.__alloyId2092);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2092.add($.__views.arrow3);
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
    __defers["$.__views.__alloyId2081!click!facebook"] && $.__views.__alloyId2081.addEventListener("click", facebook);
    __defers["$.__views.__alloyId2085!click!twitter"] && $.__views.__alloyId2085.addEventListener("click", twitter);
    __defers["$.__views.__alloyId2089!click!google"] && $.__views.__alloyId2089.addEventListener("click", google);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;