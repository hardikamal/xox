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
    $.__views.__alloyId1504 = Alloy.createController("_header", {
        id: "__alloyId1504",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId1504.setParent($.__views.promo);
    $.__views.__alloyId1505 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1505"
    });
    $.__views.promo.add($.__views.__alloyId1505);
    $.__views.__alloyId1506 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1506"
    });
    $.__views.__alloyId1505.add($.__views.__alloyId1506);
    $.__views.__alloyId1507 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1507"
    });
    $.__views.promo.add($.__views.__alloyId1507);
    $.__views.__alloyId1508 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId1508"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1508);
    promoDetail ? $.__views.__alloyId1508.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1508!click!promoDetail"] = true;
    $.__views.__alloyId1509 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId1509"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1509);
    promoDetail ? $.__views.__alloyId1509.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1509!click!promoDetail"] = true;
    $.__views.__alloyId1510 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId1510"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1510);
    promoDetail ? $.__views.__alloyId1510.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1510!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1508!click!promoDetail"] && $.__views.__alloyId1508.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1509!click!promoDetail"] && $.__views.__alloyId1509.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1510!click!promoDetail"] && $.__views.__alloyId1510.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;