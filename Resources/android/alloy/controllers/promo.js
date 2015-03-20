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
    $.__views.__alloyId1857 = Alloy.createController("_header", {
        id: "__alloyId1857",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId1857.setParent($.__views.promo);
    $.__views.__alloyId1858 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1858"
    });
    $.__views.promo.add($.__views.__alloyId1858);
    $.__views.__alloyId1859 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1859"
    });
    $.__views.__alloyId1858.add($.__views.__alloyId1859);
    $.__views.__alloyId1860 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1860"
    });
    $.__views.promo.add($.__views.__alloyId1860);
    $.__views.__alloyId1861 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId1861"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1861);
    promoDetail ? $.__views.__alloyId1861.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1861!click!promoDetail"] = true;
    $.__views.__alloyId1862 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId1862"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1862);
    promoDetail ? $.__views.__alloyId1862.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1862!click!promoDetail"] = true;
    $.__views.__alloyId1863 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId1863"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1863);
    promoDetail ? $.__views.__alloyId1863.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1863!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1861!click!promoDetail"] && $.__views.__alloyId1861.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1862!click!promoDetail"] && $.__views.__alloyId1862.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1863!click!promoDetail"] && $.__views.__alloyId1863.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;