function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function reloadHeaderMenu() {
        var module = Ti.App.Properties.getString("module");
        var isRoot = Ti.App.Properties.getString("root");
        if (null !== module && "" != module && "1" != isRoot) {
            $.leftButton.width = "20";
            $.leftButton.mod = "back";
            $.leftButton.image = "home" == module ? "/images/others_08_oren.png" : "/images/others_08.png";
        } else {
            $.leftButton.width = "35";
            $.leftButton.image = "/images/menu_button.png";
            $.leftButton.mod = "menu";
        }
    }
    function menuToggle() {
        var module = Ti.App.Properties.getString("module");
        Ti.App.Properties.getString("root");
        if (null !== module && "" != module) {
            Ti.App.Properties.setString("module", "");
            DRAWER.navigation(module, 1);
        } else "menu" == $.leftButton.mod && DRAWER.closeToggle();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "_header";
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
    $.__views.header = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "50",
        top: 0,
        layout: "composite",
        id: "header",
        backgroundColor: "#000000"
    });
    $.__views.header && $.addTopLevelView($.__views.header);
    $.__views.leftButton = Ti.UI.createImageView({
        zIndex: "11",
        id: "leftButton",
        mod: "menu",
        image: "/images/menu_button.png",
        left: "10",
        height: "30"
    });
    $.__views.header.add($.__views.leftButton);
    menuToggle ? $.__views.leftButton.addEventListener("touchend", menuToggle) : __defers["$.__views.leftButton!touchend!menuToggle"] = true;
    $.__views.__alloyId0 = Ti.UI.createImageView({
        zIndex: "10",
        height: "30",
        image: "/images/XOX_logo.png",
        id: "__alloyId0"
    });
    $.__views.header.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "1",
        backgroundColor: "#ed1c24",
        bottom: "0",
        id: "__alloyId1"
    });
    $.__views.header.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    setTimeout(function() {
        reloadHeaderMenu();
    }, 100);
    __defers["$.__views.leftButton!touchend!menuToggle"] && $.__views.leftButton.addEventListener("touchend", menuToggle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;