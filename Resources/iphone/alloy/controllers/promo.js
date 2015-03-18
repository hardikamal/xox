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
    $.__views.__alloyId949 = Alloy.createController("_header", {
        id: "__alloyId949",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId949.setParent($.__views.promo);
    $.__views.__alloyId950 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId950"
    });
    $.__views.promo.add($.__views.__alloyId950);
    $.__views.__alloyId951 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId951"
    });
    $.__views.__alloyId950.add($.__views.__alloyId951);
    $.__views.__alloyId952 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId952"
    });
    $.__views.promo.add($.__views.__alloyId952);
    $.__views.__alloyId953 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId953"
    });
    $.__views.__alloyId952.add($.__views.__alloyId953);
    promoDetail ? $.__views.__alloyId953.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId953!click!promoDetail"] = true;
    $.__views.__alloyId954 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId954"
    });
    $.__views.__alloyId952.add($.__views.__alloyId954);
    promoDetail ? $.__views.__alloyId954.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId954!click!promoDetail"] = true;
    $.__views.__alloyId955 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId955"
    });
    $.__views.__alloyId952.add($.__views.__alloyId955);
    promoDetail ? $.__views.__alloyId955.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId955!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId953!click!promoDetail"] && $.__views.__alloyId953.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId954!click!promoDetail"] && $.__views.__alloyId954.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId955!click!promoDetail"] && $.__views.__alloyId955.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;