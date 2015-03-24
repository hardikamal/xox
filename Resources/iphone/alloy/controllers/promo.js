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
    $.__views.__alloyId1957 = Alloy.createController("_header", {
        id: "__alloyId1957",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId1957.setParent($.__views.promo);
    $.__views.__alloyId1958 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1958"
    });
    $.__views.promo.add($.__views.__alloyId1958);
    $.__views.__alloyId1959 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1959"
    });
    $.__views.__alloyId1958.add($.__views.__alloyId1959);
    $.__views.__alloyId1960 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1960"
    });
    $.__views.promo.add($.__views.__alloyId1960);
    $.__views.__alloyId1961 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId1961"
    });
    $.__views.__alloyId1960.add($.__views.__alloyId1961);
    promoDetail ? $.__views.__alloyId1961.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1961!click!promoDetail"] = true;
    $.__views.__alloyId1962 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId1962"
    });
    $.__views.__alloyId1960.add($.__views.__alloyId1962);
    promoDetail ? $.__views.__alloyId1962.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1962!click!promoDetail"] = true;
    $.__views.__alloyId1963 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId1963"
    });
    $.__views.__alloyId1960.add($.__views.__alloyId1963);
    promoDetail ? $.__views.__alloyId1963.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1963!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var clearObject = function() {
        alert("Promo clear cache");
        DRAWER.closeDrawer();
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
    __defers["$.__views.__alloyId1961!click!promoDetail"] && $.__views.__alloyId1961.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1962!click!promoDetail"] && $.__views.__alloyId1962.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1963!click!promoDetail"] && $.__views.__alloyId1963.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;