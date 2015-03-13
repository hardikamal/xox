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
        DRAWER.navigation("promoDetail", 2);
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
    $.__views.__alloyId495 = Alloy.createController("_header", {
        id: "__alloyId495",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId495.setParent($.__views.promo);
    $.__views.__alloyId496 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId496"
    });
    $.__views.promo.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId497"
    });
    $.__views.__alloyId496.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId498"
    });
    $.__views.promo.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId499"
    });
    $.__views.__alloyId498.add($.__views.__alloyId499);
    promoDetail ? $.__views.__alloyId499.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId499!click!promoDetail"] = true;
    $.__views.__alloyId500 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId500"
    });
    $.__views.__alloyId498.add($.__views.__alloyId500);
    promoDetail ? $.__views.__alloyId500.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId500!click!promoDetail"] = true;
    $.__views.__alloyId501 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId501"
    });
    $.__views.__alloyId498.add($.__views.__alloyId501);
    promoDetail ? $.__views.__alloyId501.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId501!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId499!click!promoDetail"] && $.__views.__alloyId499.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId500!click!promoDetail"] && $.__views.__alloyId500.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId501!click!promoDetail"] && $.__views.__alloyId501.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;