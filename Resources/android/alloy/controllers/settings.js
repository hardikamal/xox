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
    $.__views.__alloyId2367 = Alloy.createController("_header", {
        id: "__alloyId2367",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId2367.setParent($.__views.win);
    $.__views.__alloyId2368 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#836EAF",
        id: "__alloyId2368"
    });
    $.__views.win.add($.__views.__alloyId2368);
    $.__views.__alloyId2369 = Ti.UI.createLabel({
        text: "Settings",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2369"
    });
    $.__views.__alloyId2368.add($.__views.__alloyId2369);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.win.add($.__views.scrollView);
    $.__views.__alloyId2370 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2370"
    });
    $.__views.scrollView.add($.__views.__alloyId2370);
    $.__views.__alloyId2371 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2371"
    });
    $.__views.__alloyId2370.add($.__views.__alloyId2371);
    $.__views.__alloyId2372 = Ti.UI.createLabel({
        text: "Push Notification",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2372"
    });
    $.__views.__alloyId2371.add($.__views.__alloyId2372);
    $.__views.__alloyId2373 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2373"
    });
    $.__views.__alloyId2370.add($.__views.__alloyId2373);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2373.add($.__views.switch2);
    notification ? $.__views.switch2.addEventListener("change", notification) : __defers["$.__views.switch2!change!notification"] = true;
    $.__views.__alloyId2374 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2374"
    });
    $.__views.scrollView.add($.__views.__alloyId2374);
    $.__views.__alloyId2375 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2375"
    });
    $.__views.__alloyId2374.add($.__views.__alloyId2375);
    $.__views.__alloyId2376 = Ti.UI.createLabel({
        text: "Social Sharing",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2376"
    });
    $.__views.__alloyId2375.add($.__views.__alloyId2376);
    $.__views.__alloyId2377 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2377"
    });
    $.__views.scrollView.add($.__views.__alloyId2377);
    facebook ? $.__views.__alloyId2377.addEventListener("click", facebook) : __defers["$.__views.__alloyId2377!click!facebook"] = true;
    $.__views.__alloyId2378 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2378"
    });
    $.__views.__alloyId2377.add($.__views.__alloyId2378);
    $.__views.__alloyId2379 = Ti.UI.createLabel({
        text: "Facebook",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2379"
    });
    $.__views.__alloyId2378.add($.__views.__alloyId2379);
    $.__views.__alloyId2380 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2380"
    });
    $.__views.__alloyId2377.add($.__views.__alloyId2380);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2380.add($.__views.arrow1);
    $.__views.__alloyId2381 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2381"
    });
    $.__views.scrollView.add($.__views.__alloyId2381);
    twitter ? $.__views.__alloyId2381.addEventListener("click", twitter) : __defers["$.__views.__alloyId2381!click!twitter"] = true;
    $.__views.__alloyId2382 = Ti.UI.createView({
        width: "100%",
        height: "100%",
        id: "__alloyId2382"
    });
    $.__views.__alloyId2381.add($.__views.__alloyId2382);
    $.__views.__alloyId2383 = Ti.UI.createLabel({
        text: "Twitter",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2383"
    });
    $.__views.__alloyId2382.add($.__views.__alloyId2383);
    $.__views.__alloyId2384 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2384"
    });
    $.__views.__alloyId2381.add($.__views.__alloyId2384);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2384.add($.__views.arrow2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    console.log("android");
    $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    __defers["$.__views.switch2!change!notification"] && $.__views.switch2.addEventListener("change", notification);
    __defers["$.__views.__alloyId2377!click!facebook"] && $.__views.__alloyId2377.addEventListener("click", facebook);
    __defers["$.__views.__alloyId2381!click!twitter"] && $.__views.__alloyId2381.addEventListener("click", twitter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;