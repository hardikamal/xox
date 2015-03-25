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
    $.__views.__alloyId2189 = Alloy.createController("_header", {
        id: "__alloyId2189",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId2189.setParent($.__views.promo);
    $.__views.__alloyId2190 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2190"
    });
    $.__views.promo.add($.__views.__alloyId2190);
    $.__views.__alloyId2191 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2191"
    });
    $.__views.__alloyId2190.add($.__views.__alloyId2191);
    $.__views.__alloyId2192 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2192"
    });
    $.__views.promo.add($.__views.__alloyId2192);
    $.__views.__alloyId2193 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId2193"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2193);
    promoDetail ? $.__views.__alloyId2193.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2193!click!promoDetail"] = true;
    $.__views.__alloyId2194 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId2194"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2194);
    promoDetail ? $.__views.__alloyId2194.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2194!click!promoDetail"] = true;
    $.__views.__alloyId2195 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId2195"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2195);
    promoDetail ? $.__views.__alloyId2195.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2195!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var clearObject = function() {
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
    __defers["$.__views.__alloyId2193!click!promoDetail"] && $.__views.__alloyId2193.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2194!click!promoDetail"] && $.__views.__alloyId2194.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2195!click!promoDetail"] && $.__views.__alloyId2195.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;