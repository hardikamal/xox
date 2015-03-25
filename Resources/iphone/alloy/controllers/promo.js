function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function promoDetail() {
        DRAWER.navigation("promoDetail", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "promo";
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
    $.__views.promo = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "promo"
    });
    $.__views.promo && $.addTopLevelView($.__views.promo);
    $.__views.__alloyId2253 = Alloy.createController("_header", {
        id: "__alloyId2253",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId2253.setParent($.__views.promo);
    $.__views.__alloyId2254 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2254"
    });
    $.__views.promo.add($.__views.__alloyId2254);
    $.__views.__alloyId2255 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2255"
    });
    $.__views.__alloyId2254.add($.__views.__alloyId2255);
    $.__views.__alloyId2256 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2256"
    });
    $.__views.promo.add($.__views.__alloyId2256);
    $.__views.__alloyId2257 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId2257"
    });
    $.__views.__alloyId2256.add($.__views.__alloyId2257);
    promoDetail ? $.__views.__alloyId2257.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2257!click!promoDetail"] = true;
    $.__views.__alloyId2258 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId2258"
    });
    $.__views.__alloyId2256.add($.__views.__alloyId2258);
    promoDetail ? $.__views.__alloyId2258.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2258!click!promoDetail"] = true;
    $.__views.__alloyId2259 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId2259"
    });
    $.__views.__alloyId2256.add($.__views.__alloyId2259);
    promoDetail ? $.__views.__alloyId2259.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2259!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var clearObject = function() {
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
    __defers["$.__views.__alloyId2257!click!promoDetail"] && $.__views.__alloyId2257.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2258!click!promoDetail"] && $.__views.__alloyId2258.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2259!click!promoDetail"] && $.__views.__alloyId2259.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;