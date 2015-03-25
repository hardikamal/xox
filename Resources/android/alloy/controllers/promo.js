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
    $.__views.__alloyId2325 = Alloy.createController("_header", {
        id: "__alloyId2325",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId2325.setParent($.__views.promo);
    $.__views.__alloyId2326 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2326"
    });
    $.__views.promo.add($.__views.__alloyId2326);
    $.__views.__alloyId2327 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2327"
    });
    $.__views.__alloyId2326.add($.__views.__alloyId2327);
    $.__views.__alloyId2328 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2328"
    });
    $.__views.promo.add($.__views.__alloyId2328);
    $.__views.__alloyId2329 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId2329"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2329);
    promoDetail ? $.__views.__alloyId2329.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2329!click!promoDetail"] = true;
    $.__views.__alloyId2330 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId2330"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2330);
    promoDetail ? $.__views.__alloyId2330.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2330!click!promoDetail"] = true;
    $.__views.__alloyId2331 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId2331"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2331);
    promoDetail ? $.__views.__alloyId2331.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2331!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var clearObject = function() {
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
    __defers["$.__views.__alloyId2329!click!promoDetail"] && $.__views.__alloyId2329.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2330!click!promoDetail"] && $.__views.__alloyId2330.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2331!click!promoDetail"] && $.__views.__alloyId2331.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;