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
    $.__views.__alloyId2028 = Alloy.createController("_header", {
        id: "__alloyId2028",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId2028.setParent($.__views.promo);
    $.__views.__alloyId2029 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2029"
    });
    $.__views.promo.add($.__views.__alloyId2029);
    $.__views.__alloyId2030 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2030"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2030);
    $.__views.__alloyId2031 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2031"
    });
    $.__views.promo.add($.__views.__alloyId2031);
    $.__views.__alloyId2032 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId2032"
    });
    $.__views.__alloyId2031.add($.__views.__alloyId2032);
    promoDetail ? $.__views.__alloyId2032.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2032!click!promoDetail"] = true;
    $.__views.__alloyId2033 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId2033"
    });
    $.__views.__alloyId2031.add($.__views.__alloyId2033);
    promoDetail ? $.__views.__alloyId2033.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2033!click!promoDetail"] = true;
    $.__views.__alloyId2034 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId2034"
    });
    $.__views.__alloyId2031.add($.__views.__alloyId2034);
    promoDetail ? $.__views.__alloyId2034.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2034!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var clearObject = function() {
        alert("Promo clear cache");
        DRAWER.closeDrawer();
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
    __defers["$.__views.__alloyId2032!click!promoDetail"] && $.__views.__alloyId2032.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2033!click!promoDetail"] && $.__views.__alloyId2033.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2034!click!promoDetail"] && $.__views.__alloyId2034.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;