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
    $.__views.__alloyId1675 = Alloy.createController("_header", {
        id: "__alloyId1675",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId1675.setParent($.__views.support);
    $.__views.__alloyId1676 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1676"
    });
    $.__views.support.add($.__views.__alloyId1676);
    $.__views.__alloyId1677 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1677"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1677);
    $.__views.__alloyId1678 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1678"
    });
    $.__views.support.add($.__views.__alloyId1678);
    $.__views.__alloyId1679 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1679"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1679);
    userGuide ? $.__views.__alloyId1679.addEventListener("click", userGuide) : __defers["$.__views.__alloyId1679!click!userGuide"] = true;
    $.__views.__alloyId1680 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1680"
    });
    $.__views.__alloyId1679.add($.__views.__alloyId1680);
    $.__views.__alloyId1681 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1681"
    });
    $.__views.__alloyId1680.add($.__views.__alloyId1681);
    $.__views.__alloyId1682 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1682"
    });
    $.__views.__alloyId1679.add($.__views.__alloyId1682);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1682.add($.__views.arrow1);
    $.__views.__alloyId1683 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1683"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1683);
    terms ? $.__views.__alloyId1683.addEventListener("click", terms) : __defers["$.__views.__alloyId1683!click!terms"] = true;
    $.__views.__alloyId1684 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1684"
    });
    $.__views.__alloyId1683.add($.__views.__alloyId1684);
    $.__views.__alloyId1685 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1685"
    });
    $.__views.__alloyId1684.add($.__views.__alloyId1685);
    $.__views.__alloyId1686 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1686"
    });
    $.__views.__alloyId1683.add($.__views.__alloyId1686);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1686.add($.__views.arrow2);
    $.__views.__alloyId1687 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1687"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1687);
    notification ? $.__views.__alloyId1687.addEventListener("click", notification) : __defers["$.__views.__alloyId1687!click!notification"] = true;
    $.__views.__alloyId1688 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1688"
    });
    $.__views.__alloyId1687.add($.__views.__alloyId1688);
    $.__views.__alloyId1689 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1689"
    });
    $.__views.__alloyId1688.add($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1690"
    });
    $.__views.__alloyId1687.add($.__views.__alloyId1690);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1690.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1679!click!userGuide"] && $.__views.__alloyId1679.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId1683!click!terms"] && $.__views.__alloyId1683.addEventListener("click", terms);
    __defers["$.__views.__alloyId1687!click!notification"] && $.__views.__alloyId1687.addEventListener("click", notification);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;