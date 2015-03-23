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
<<<<<<< Updated upstream
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
=======
    $.__views.__alloyId1307 = Alloy.createController("_header", {
        id: "__alloyId1307",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId1307.setParent($.__views.promo);
    $.__views.__alloyId1308 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1308"
    });
    $.__views.promo.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< Updated upstream
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
=======
        id: "__alloyId1309"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1309);
    $.__views.__alloyId1310 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1310"
    });
    $.__views.promo.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId1311"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1311);
    promoDetail ? $.__views.__alloyId1311.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1311!click!promoDetail"] = true;
    $.__views.__alloyId1312 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId1312"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1312);
    promoDetail ? $.__views.__alloyId1312.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1312!click!promoDetail"] = true;
    $.__views.__alloyId1313 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId1313"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1313);
    promoDetail ? $.__views.__alloyId1313.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1313!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var clearObject = function() {
        alert("Promo clear cache");
        DRAWER.closeDrawer();
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
    __defers["$.__views.__alloyId1311!click!promoDetail"] && $.__views.__alloyId1311.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1312!click!promoDetail"] && $.__views.__alloyId1312.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1313!click!promoDetail"] && $.__views.__alloyId1313.addEventListener("click", promoDetail);
>>>>>>> Stashed changes
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;