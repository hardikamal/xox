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
    $.__views.__alloyId2182 = Alloy.createController("_header", {
        id: "__alloyId2182",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2182.setParent($.__views.support);
    $.__views.__alloyId2183 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2183"
    });
    $.__views.support.add($.__views.__alloyId2183);
    $.__views.__alloyId2184 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2184"
    });
    $.__views.__alloyId2183.add($.__views.__alloyId2184);
    $.__views.__alloyId2185 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2185"
    });
    $.__views.support.add($.__views.__alloyId2185);
    $.__views.__alloyId2186 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2186"
    });
    $.__views.__alloyId2185.add($.__views.__alloyId2186);
    userGuide ? $.__views.__alloyId2186.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2186!click!userGuide"] = true;
    $.__views.__alloyId2187 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2187"
    });
    $.__views.__alloyId2186.add($.__views.__alloyId2187);
    $.__views.__alloyId2188 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2188"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2188);
    $.__views.__alloyId2189 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2189"
    });
    $.__views.__alloyId2186.add($.__views.__alloyId2189);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2189.add($.__views.arrow1);
    $.__views.__alloyId2190 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2190"
    });
    $.__views.__alloyId2185.add($.__views.__alloyId2190);
    terms ? $.__views.__alloyId2190.addEventListener("click", terms) : __defers["$.__views.__alloyId2190!click!terms"] = true;
    $.__views.__alloyId2191 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2191"
    });
    $.__views.__alloyId2190.add($.__views.__alloyId2191);
    $.__views.__alloyId2192 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2192"
    });
    $.__views.__alloyId2191.add($.__views.__alloyId2192);
    $.__views.__alloyId2193 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2193"
    });
    $.__views.__alloyId2190.add($.__views.__alloyId2193);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2193.add($.__views.arrow2);
    $.__views.__alloyId2194 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2194"
    });
    $.__views.__alloyId2185.add($.__views.__alloyId2194);
    notification ? $.__views.__alloyId2194.addEventListener("click", notification) : __defers["$.__views.__alloyId2194!click!notification"] = true;
    $.__views.__alloyId2195 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2195"
    });
    $.__views.__alloyId2194.add($.__views.__alloyId2195);
    $.__views.__alloyId2196 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2196"
    });
    $.__views.__alloyId2195.add($.__views.__alloyId2196);
    $.__views.__alloyId2197 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2197"
    });
    $.__views.__alloyId2194.add($.__views.__alloyId2197);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2197.add($.__views.arrow3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2186!click!userGuide"] && $.__views.__alloyId2186.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2190!click!terms"] && $.__views.__alloyId2190.addEventListener("click", terms);
    __defers["$.__views.__alloyId2194!click!notification"] && $.__views.__alloyId2194.addEventListener("click", notification);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;