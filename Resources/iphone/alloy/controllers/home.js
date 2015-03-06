function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
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
    $.__views.home = Ti.UI.createView({
        backgroundColor: "#ffffff",
        layout: "vertical",
        backgroundImage: "/images/BG_Large.jpg",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.__alloyId2 = Alloy.createController("_header", {
        id: "__alloyId2",
        __parentSymbol: $.__views.home
    });
    $.__views.__alloyId2.setParent($.__views.home);
    $.__views.scrollView = Ti.UI.createScrollView({
        backgroundColor: "transparent",
        id: "scrollView",
        top: "0",
        layout: "vertical",
        disableBounce: "true",
        height: Ti.UI.SIZE,
        scrollType: "vertical"
    });
    $.__views.home.add($.__views.scrollView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.Properties.setString("root", "1");
    var pHeight = Ti.Platform.displayCaps.platformHeight;
    $.scrollView.height = pHeight - 50;
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;