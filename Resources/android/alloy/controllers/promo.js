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
    $.__views.__alloyId545 = Alloy.createController("_header", {
        id: "__alloyId545",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId545.setParent($.__views.promo);
    $.__views.__alloyId546 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId546"
    });
    $.__views.promo.add($.__views.__alloyId546);
    $.__views.__alloyId547 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId547"
    });
    $.__views.__alloyId546.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId548"
    });
    $.__views.promo.add($.__views.__alloyId548);
    $.__views.__alloyId549 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId549"
    });
    $.__views.__alloyId548.add($.__views.__alloyId549);
    promoDetail ? $.__views.__alloyId549.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId549!click!promoDetail"] = true;
    $.__views.__alloyId550 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId550"
    });
    $.__views.__alloyId548.add($.__views.__alloyId550);
    promoDetail ? $.__views.__alloyId550.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId550!click!promoDetail"] = true;
    $.__views.__alloyId551 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId551"
    });
    $.__views.__alloyId548.add($.__views.__alloyId551);
    promoDetail ? $.__views.__alloyId551.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId551!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId549!click!promoDetail"] && $.__views.__alloyId549.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId550!click!promoDetail"] && $.__views.__alloyId550.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId551!click!promoDetail"] && $.__views.__alloyId551.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;