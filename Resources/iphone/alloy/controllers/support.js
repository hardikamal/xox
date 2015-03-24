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
    $.__views.__alloyId2424 = Alloy.createController("_header", {
        id: "__alloyId2424",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2424.setParent($.__views.support);
    $.__views.__alloyId2425 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2425"
    });
    $.__views.support.add($.__views.__alloyId2425);
    $.__views.__alloyId2426 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2426"
    });
    $.__views.__alloyId2425.add($.__views.__alloyId2426);
    $.__views.__alloyId2427 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2427"
    });
    $.__views.support.add($.__views.__alloyId2427);
    $.__views.__alloyId2428 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2428"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2428);
    userGuide ? $.__views.__alloyId2428.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2428!click!userGuide"] = true;
    $.__views.__alloyId2429 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2429"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2429);
    $.__views.__alloyId2430 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2430"
    });
    $.__views.__alloyId2429.add($.__views.__alloyId2430);
    $.__views.__alloyId2431 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2431"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2431);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2431.add($.__views.arrow1);
    $.__views.__alloyId2432 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2432"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2432);
    terms ? $.__views.__alloyId2432.addEventListener("click", terms) : __defers["$.__views.__alloyId2432!click!terms"] = true;
    $.__views.__alloyId2433 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2433"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2433);
    $.__views.__alloyId2434 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2434"
    });
    $.__views.__alloyId2433.add($.__views.__alloyId2434);
    $.__views.__alloyId2435 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2435"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2435);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2435.add($.__views.arrow2);
    $.__views.__alloyId2436 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2436"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2436);
    notification ? $.__views.__alloyId2436.addEventListener("click", notification) : __defers["$.__views.__alloyId2436!click!notification"] = true;
    $.__views.__alloyId2437 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2437"
    });
    $.__views.__alloyId2436.add($.__views.__alloyId2437);
    $.__views.__alloyId2438 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2438"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2438);
    $.__views.__alloyId2439 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2439"
    });
    $.__views.__alloyId2436.add($.__views.__alloyId2439);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2439.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2428!click!userGuide"] && $.__views.__alloyId2428.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2432!click!terms"] && $.__views.__alloyId2432.addEventListener("click", terms);
    __defers["$.__views.__alloyId2436!click!notification"] && $.__views.__alloyId2436.addEventListener("click", notification);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;