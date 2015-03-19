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
    $.__views.__alloyId1572 = Alloy.createController("_header", {
        id: "__alloyId1572",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId1572.setParent($.__views.support);
    $.__views.__alloyId1573 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1573"
    });
    $.__views.support.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1574"
    });
    $.__views.__alloyId1573.add($.__views.__alloyId1574);
    $.__views.__alloyId1575 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1575"
    });
    $.__views.support.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1576"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1576);
    userGuide ? $.__views.__alloyId1576.addEventListener("click", userGuide) : __defers["$.__views.__alloyId1576!click!userGuide"] = true;
    $.__views.__alloyId1577 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1577"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1578"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1579"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1579);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1579.add($.__views.arrow1);
    $.__views.__alloyId1580 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1580"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1580);
    terms ? $.__views.__alloyId1580.addEventListener("click", terms) : __defers["$.__views.__alloyId1580!click!terms"] = true;
    $.__views.__alloyId1581 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1581"
    });
    $.__views.__alloyId1580.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1582"
    });
    $.__views.__alloyId1581.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1583"
    });
    $.__views.__alloyId1580.add($.__views.__alloyId1583);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1583.add($.__views.arrow2);
    $.__views.__alloyId1584 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1584"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1584);
    notification ? $.__views.__alloyId1584.addEventListener("click", notification) : __defers["$.__views.__alloyId1584!click!notification"] = true;
    $.__views.__alloyId1585 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1585"
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1585);
    $.__views.__alloyId1586 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1586"
    });
    $.__views.__alloyId1585.add($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1587"
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1587);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1587.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1576!click!userGuide"] && $.__views.__alloyId1576.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId1580!click!terms"] && $.__views.__alloyId1580.addEventListener("click", terms);
    __defers["$.__views.__alloyId1584!click!notification"] && $.__views.__alloyId1584.addEventListener("click", notification);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;