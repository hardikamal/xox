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
    $.__views.__alloyId2545 = Alloy.createController("_header", {
        id: "__alloyId2545",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2545.setParent($.__views.support);
    $.__views.__alloyId2546 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2546"
    });
    $.__views.support.add($.__views.__alloyId2546);
    $.__views.__alloyId2547 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2547"
    });
    $.__views.__alloyId2546.add($.__views.__alloyId2547);
    $.__views.__alloyId2548 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2548"
    });
    $.__views.support.add($.__views.__alloyId2548);
    $.__views.__alloyId2549 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2549"
    });
    $.__views.__alloyId2548.add($.__views.__alloyId2549);
    userGuide ? $.__views.__alloyId2549.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2549!click!userGuide"] = true;
    $.__views.__alloyId2550 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2550"
    });
    $.__views.__alloyId2549.add($.__views.__alloyId2550);
    $.__views.__alloyId2551 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2551"
    });
    $.__views.__alloyId2550.add($.__views.__alloyId2551);
    $.__views.__alloyId2552 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2552"
    });
    $.__views.__alloyId2549.add($.__views.__alloyId2552);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2552.add($.__views.arrow1);
    $.__views.__alloyId2553 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2553"
    });
    $.__views.__alloyId2548.add($.__views.__alloyId2553);
    terms ? $.__views.__alloyId2553.addEventListener("click", terms) : __defers["$.__views.__alloyId2553!click!terms"] = true;
    $.__views.__alloyId2554 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2554"
    });
    $.__views.__alloyId2553.add($.__views.__alloyId2554);
    $.__views.__alloyId2555 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2555"
    });
    $.__views.__alloyId2554.add($.__views.__alloyId2555);
    $.__views.__alloyId2556 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2556"
    });
    $.__views.__alloyId2553.add($.__views.__alloyId2556);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2556.add($.__views.arrow2);
    $.__views.__alloyId2557 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2557"
    });
    $.__views.__alloyId2548.add($.__views.__alloyId2557);
    notification ? $.__views.__alloyId2557.addEventListener("click", notification) : __defers["$.__views.__alloyId2557!click!notification"] = true;
    $.__views.__alloyId2558 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2558"
    });
    $.__views.__alloyId2557.add($.__views.__alloyId2558);
    $.__views.__alloyId2559 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2559"
    });
    $.__views.__alloyId2558.add($.__views.__alloyId2559);
    $.__views.__alloyId2560 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2560"
    });
    $.__views.__alloyId2557.add($.__views.__alloyId2560);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2560.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2549!click!userGuide"] && $.__views.__alloyId2549.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2553!click!terms"] && $.__views.__alloyId2553.addEventListener("click", terms);
    __defers["$.__views.__alloyId2557!click!notification"] && $.__views.__alloyId2557.addEventListener("click", notification);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;