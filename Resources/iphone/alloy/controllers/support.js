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
    $.__views.__alloyId2161 = Alloy.createController("_header", {
        id: "__alloyId2161",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2161.setParent($.__views.support);
    $.__views.__alloyId2162 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2162"
    });
    $.__views.support.add($.__views.__alloyId2162);
    $.__views.__alloyId2163 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2163"
    });
    $.__views.__alloyId2162.add($.__views.__alloyId2163);
    $.__views.__alloyId2164 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2164"
    });
    $.__views.support.add($.__views.__alloyId2164);
    $.__views.__alloyId2165 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2165"
    });
    $.__views.__alloyId2164.add($.__views.__alloyId2165);
    userGuide ? $.__views.__alloyId2165.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2165!click!userGuide"] = true;
    $.__views.__alloyId2166 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2166"
    });
    $.__views.__alloyId2165.add($.__views.__alloyId2166);
    $.__views.__alloyId2167 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2167"
    });
    $.__views.__alloyId2166.add($.__views.__alloyId2167);
    $.__views.__alloyId2168 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2168"
    });
    $.__views.__alloyId2165.add($.__views.__alloyId2168);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2168.add($.__views.arrow1);
    $.__views.__alloyId2169 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2169"
    });
    $.__views.__alloyId2164.add($.__views.__alloyId2169);
    terms ? $.__views.__alloyId2169.addEventListener("click", terms) : __defers["$.__views.__alloyId2169!click!terms"] = true;
    $.__views.__alloyId2170 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2170"
    });
    $.__views.__alloyId2169.add($.__views.__alloyId2170);
    $.__views.__alloyId2171 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2171"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2171);
    $.__views.__alloyId2172 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2172"
    });
    $.__views.__alloyId2169.add($.__views.__alloyId2172);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2172.add($.__views.arrow2);
    $.__views.__alloyId2173 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2173"
    });
    $.__views.__alloyId2164.add($.__views.__alloyId2173);
    notification ? $.__views.__alloyId2173.addEventListener("click", notification) : __defers["$.__views.__alloyId2173!click!notification"] = true;
    $.__views.__alloyId2174 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2174"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2174);
    $.__views.__alloyId2175 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2175"
    });
    $.__views.__alloyId2174.add($.__views.__alloyId2175);
    $.__views.__alloyId2176 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2176"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2176);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2176.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2165!click!userGuide"] && $.__views.__alloyId2165.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2169!click!terms"] && $.__views.__alloyId2169.addEventListener("click", terms);
    __defers["$.__views.__alloyId2173!click!notification"] && $.__views.__alloyId2173.addEventListener("click", notification);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;