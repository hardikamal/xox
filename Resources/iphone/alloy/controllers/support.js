function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function userGuide() {
        DRAWER.navigation("userGuide", 1);
    }
    function terms() {
        DRAWER.navigation("terms", 1);
    }
    function notification() {
        DRAWER.navigation("notification", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "support";
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
    $.__views.support = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "support"
    });
    $.__views.support && $.addTopLevelView($.__views.support);
    $.__views.__alloyId2470 = Alloy.createController("_header", {
        id: "__alloyId2470",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2470.setParent($.__views.support);
    $.__views.__alloyId2471 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2471"
    });
    $.__views.support.add($.__views.__alloyId2471);
    $.__views.__alloyId2472 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2472"
    });
    $.__views.__alloyId2471.add($.__views.__alloyId2472);
    $.__views.__alloyId2473 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2473"
    });
    $.__views.support.add($.__views.__alloyId2473);
    $.__views.__alloyId2474 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2474"
    });
    $.__views.__alloyId2473.add($.__views.__alloyId2474);
    userGuide ? $.__views.__alloyId2474.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2474!click!userGuide"] = true;
    $.__views.__alloyId2475 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2475"
    });
    $.__views.__alloyId2474.add($.__views.__alloyId2475);
    $.__views.__alloyId2476 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2476"
    });
    $.__views.__alloyId2475.add($.__views.__alloyId2476);
    $.__views.__alloyId2477 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2477"
    });
    $.__views.__alloyId2474.add($.__views.__alloyId2477);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2477.add($.__views.arrow1);
    $.__views.__alloyId2478 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2478"
    });
    $.__views.__alloyId2473.add($.__views.__alloyId2478);
    terms ? $.__views.__alloyId2478.addEventListener("click", terms) : __defers["$.__views.__alloyId2478!click!terms"] = true;
    $.__views.__alloyId2479 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2479"
    });
    $.__views.__alloyId2478.add($.__views.__alloyId2479);
    $.__views.__alloyId2480 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2480"
    });
    $.__views.__alloyId2479.add($.__views.__alloyId2480);
    $.__views.__alloyId2481 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2481"
    });
    $.__views.__alloyId2478.add($.__views.__alloyId2481);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2481.add($.__views.arrow2);
    $.__views.__alloyId2482 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2482"
    });
    $.__views.__alloyId2473.add($.__views.__alloyId2482);
    notification ? $.__views.__alloyId2482.addEventListener("click", notification) : __defers["$.__views.__alloyId2482!click!notification"] = true;
    $.__views.__alloyId2483 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2483"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2483);
    $.__views.__alloyId2484 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2484"
    });
    $.__views.__alloyId2483.add($.__views.__alloyId2484);
    $.__views.__alloyId2485 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2485"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2485);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2485.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2474!click!userGuide"] && $.__views.__alloyId2474.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2478!click!terms"] && $.__views.__alloyId2478.addEventListener("click", terms);
    __defers["$.__views.__alloyId2482!click!notification"] && $.__views.__alloyId2482.addEventListener("click", notification);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;