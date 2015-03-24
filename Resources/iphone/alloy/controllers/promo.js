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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    $.__views.__alloyId2184 = Alloy.createController("_header", {
        id: "__alloyId2184",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId2184.setParent($.__views.promo);
    $.__views.__alloyId2185 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2185"
    });
    $.__views.promo.add($.__views.__alloyId2185);
    $.__views.__alloyId2186 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2186"
    });
    $.__views.__alloyId2185.add($.__views.__alloyId2186);
    $.__views.__alloyId2187 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2187"
    });
    $.__views.promo.add($.__views.__alloyId2187);
    $.__views.__alloyId2188 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId2188"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2188);
    promoDetail ? $.__views.__alloyId2188.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2188!click!promoDetail"] = true;
    $.__views.__alloyId2189 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId2189"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2189);
    promoDetail ? $.__views.__alloyId2189.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2189!click!promoDetail"] = true;
    $.__views.__alloyId2190 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId2190"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2190);
    promoDetail ? $.__views.__alloyId2190.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId2190!click!promoDetail"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    var clearObject = function() {
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1961!click!promoDetail"] && $.__views.__alloyId1961.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1962!click!promoDetail"] && $.__views.__alloyId1962.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1963!click!promoDetail"] && $.__views.__alloyId1963.addEventListener("click", promoDetail);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2188!click!promoDetail"] && $.__views.__alloyId2188.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2189!click!promoDetail"] && $.__views.__alloyId2189.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId2190!click!promoDetail"] && $.__views.__alloyId2190.addEventListener("click", promoDetail);
=======
    __defers["$.__views.__alloyId1961!click!promoDetail"] && $.__views.__alloyId1961.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1962!click!promoDetail"] && $.__views.__alloyId1962.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1963!click!promoDetail"] && $.__views.__alloyId1963.addEventListener("click", promoDetail);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;