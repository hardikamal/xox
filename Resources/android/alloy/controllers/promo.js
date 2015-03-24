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
    $.__views.__alloyId2070 = Alloy.createController("_header", {
        id: "__alloyId2070",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId2070.setParent($.__views.promo);
    $.__views.__alloyId2071 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2071"
    });
    $.__views.promo.add($.__views.__alloyId2071);
    $.__views.__alloyId2072 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2072"
    });
    $.__views.__alloyId2071.add($.__views.__alloyId2072);
    $.__views.__alloyId2073 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2073"
    });
    $.__views.promo.add($.__views.__alloyId2073);
    $.__views.__alloyId2074 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId2074"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2074);
    promoDetail ? $.__views.__alloyId2074.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2074!click!promoDetail"] = true;
    $.__views.__alloyId2075 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId2075"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2075);
    promoDetail ? $.__views.__alloyId2075.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2075!click!promoDetail"] = true;
    $.__views.__alloyId2076 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId2076"
    });
    $.__views.__alloyId2073.add($.__views.__alloyId2076);
    promoDetail ? $.__views.__alloyId2076.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2076!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var clearObject = function() {
        alert("Promo clear cache");
        DRAWER.closeDrawer();
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
    __defers["$.__views.__alloyId2074!click!promoDetail"] && $.__views.__alloyId2074.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2075!click!promoDetail"] && $.__views.__alloyId2075.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2076!click!promoDetail"] && $.__views.__alloyId2076.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;