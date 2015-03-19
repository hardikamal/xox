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
        DRAWER.navigation("userGuide", 2);
    }
    function terms() {
        DRAWER.navigation("terms", 2);
    }
    function notification() {
        DRAWER.navigation("notification", 2);
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
    $.__views.__alloyId1555 = Alloy.createController("_header", {
        id: "__alloyId1555",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId1555.setParent($.__views.support);
    $.__views.__alloyId1556 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1556"
    });
    $.__views.support.add($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1557"
    });
    $.__views.__alloyId1556.add($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1558"
    });
    $.__views.support.add($.__views.__alloyId1558);
    $.__views.__alloyId1559 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1559"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1559);
    userGuide ? $.__views.__alloyId1559.addEventListener("click", userGuide) : __defers["$.__views.__alloyId1559!click!userGuide"] = true;
    $.__views.__alloyId1560 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1560"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1561"
    });
    $.__views.__alloyId1560.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1562"
    });
    $.__views.__alloyId1559.add($.__views.__alloyId1562);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1562.add($.__views.arrow1);
    $.__views.__alloyId1563 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1563"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1563);
    terms ? $.__views.__alloyId1563.addEventListener("click", terms) : __defers["$.__views.__alloyId1563!click!terms"] = true;
    $.__views.__alloyId1564 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1564"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1564);
    $.__views.__alloyId1565 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1565"
    });
    $.__views.__alloyId1564.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1566"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1566);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1566.add($.__views.arrow2);
    $.__views.__alloyId1567 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1567"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1567);
    notification ? $.__views.__alloyId1567.addEventListener("click", notification) : __defers["$.__views.__alloyId1567!click!notification"] = true;
    $.__views.__alloyId1568 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1568"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1568);
    $.__views.__alloyId1569 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1569"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1570"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1570);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1570.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1559!click!userGuide"] && $.__views.__alloyId1559.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId1563!click!terms"] && $.__views.__alloyId1563.addEventListener("click", terms);
    __defers["$.__views.__alloyId1567!click!notification"] && $.__views.__alloyId1567.addEventListener("click", notification);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;