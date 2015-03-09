function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function back() {
        DRAWER.navigation("home", 2);
    }
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
    $.__views.__alloyId162 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId162"
    });
    $.__views.promo.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createView({
        left: "10",
        backgroundColor: "white",
        width: "40",
        height: "40",
        id: "__alloyId163"
    });
    $.__views.__alloyId162.add($.__views.__alloyId163);
    back ? $.__views.__alloyId163.addEventListener("click", back) : __defers["$.__views.__alloyId163!click!back"] = true;
    $.__views.__alloyId164 = Ti.UI.createLabel({
        text: "XOX",
        color: "white",
        id: "__alloyId164"
    });
    $.__views.__alloyId162.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId165"
    });
    $.__views.promo.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createLabel({
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId166"
    });
    $.__views.__alloyId165.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId167"
    });
    $.__views.promo.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId168"
    });
    $.__views.__alloyId167.add($.__views.__alloyId168);
    promoDetail ? $.__views.__alloyId168.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId168!click!promoDetail"] = true;
    $.__views.__alloyId169 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId169"
    });
    $.__views.__alloyId167.add($.__views.__alloyId169);
    promoDetail ? $.__views.__alloyId169.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId169!click!promoDetail"] = true;
    $.__views.__alloyId170 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId170"
    });
    $.__views.__alloyId167.add($.__views.__alloyId170);
    promoDetail ? $.__views.__alloyId170.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId170!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId163!click!back"] && $.__views.__alloyId163.addEventListener("click", back);
    __defers["$.__views.__alloyId168!click!promoDetail"] && $.__views.__alloyId168.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId169!click!promoDetail"] && $.__views.__alloyId169.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId170!click!promoDetail"] && $.__views.__alloyId170.addEventListener("click", promoDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;