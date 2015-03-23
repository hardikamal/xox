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
    $.__views.__alloyId1283 = Alloy.createController("_header", {
        id: "__alloyId1283",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId1283.setParent($.__views.promo);
    $.__views.__alloyId1284 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1284"
    });
    $.__views.promo.add($.__views.__alloyId1284);
    $.__views.__alloyId1285 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1285"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1285);
    $.__views.__alloyId1286 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1286"
    });
    $.__views.promo.add($.__views.__alloyId1286);
    $.__views.__alloyId1287 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId1287"
    });
    $.__views.__alloyId1286.add($.__views.__alloyId1287);
    promoDetail ? $.__views.__alloyId1287.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1287!click!promoDetail"] = true;
    $.__views.__alloyId1288 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId1288"
    });
    $.__views.__alloyId1286.add($.__views.__alloyId1288);
    promoDetail ? $.__views.__alloyId1288.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1288!click!promoDetail"] = true;
    $.__views.__alloyId1289 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId1289"
    });
    $.__views.__alloyId1286.add($.__views.__alloyId1289);
    promoDetail ? $.__views.__alloyId1289.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1289!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1287!click!promoDetail"] && $.__views.__alloyId1287.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1288!click!promoDetail"] && $.__views.__alloyId1288.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1289!click!promoDetail"] && $.__views.__alloyId1289.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;