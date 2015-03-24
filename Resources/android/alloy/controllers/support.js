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
    $.__views.__alloyId2496 = Alloy.createController("_header", {
        id: "__alloyId2496",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2496.setParent($.__views.support);
    $.__views.__alloyId2497 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2497"
    });
    $.__views.support.add($.__views.__alloyId2497);
    $.__views.__alloyId2498 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2498"
    });
    $.__views.__alloyId2497.add($.__views.__alloyId2498);
    $.__views.__alloyId2499 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2499"
    });
    $.__views.support.add($.__views.__alloyId2499);
    $.__views.__alloyId2500 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2500"
    });
    $.__views.__alloyId2499.add($.__views.__alloyId2500);
    userGuide ? $.__views.__alloyId2500.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2500!click!userGuide"] = true;
    $.__views.__alloyId2501 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2501"
    });
    $.__views.__alloyId2500.add($.__views.__alloyId2501);
    $.__views.__alloyId2502 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2502"
    });
    $.__views.__alloyId2501.add($.__views.__alloyId2502);
    $.__views.__alloyId2503 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2503"
    });
    $.__views.__alloyId2500.add($.__views.__alloyId2503);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2503.add($.__views.arrow1);
    $.__views.__alloyId2504 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2504"
    });
    $.__views.__alloyId2499.add($.__views.__alloyId2504);
    terms ? $.__views.__alloyId2504.addEventListener("click", terms) : __defers["$.__views.__alloyId2504!click!terms"] = true;
    $.__views.__alloyId2505 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2505"
    });
    $.__views.__alloyId2504.add($.__views.__alloyId2505);
    $.__views.__alloyId2506 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2506"
    });
    $.__views.__alloyId2505.add($.__views.__alloyId2506);
    $.__views.__alloyId2507 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2507"
    });
    $.__views.__alloyId2504.add($.__views.__alloyId2507);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2507.add($.__views.arrow2);
    $.__views.__alloyId2508 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2508"
    });
    $.__views.__alloyId2499.add($.__views.__alloyId2508);
    notification ? $.__views.__alloyId2508.addEventListener("click", notification) : __defers["$.__views.__alloyId2508!click!notification"] = true;
    $.__views.__alloyId2509 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2509"
    });
    $.__views.__alloyId2508.add($.__views.__alloyId2509);
    $.__views.__alloyId2510 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2510"
    });
    $.__views.__alloyId2509.add($.__views.__alloyId2510);
    $.__views.__alloyId2511 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2511"
    });
    $.__views.__alloyId2508.add($.__views.__alloyId2511);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2511.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2500!click!userGuide"] && $.__views.__alloyId2500.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2504!click!terms"] && $.__views.__alloyId2504.addEventListener("click", terms);
    __defers["$.__views.__alloyId2508!click!notification"] && $.__views.__alloyId2508.addEventListener("click", notification);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;