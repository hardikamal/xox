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
<<<<<<< HEAD
    $.__views.__alloyId710 = Alloy.createController("_header", {
        id: "__alloyId710",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId710.setParent($.__views.promo);
    $.__views.__alloyId711 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId711"
    });
    $.__views.promo.add($.__views.__alloyId711);
    $.__views.__alloyId712 = Ti.UI.createLabel({
=======
    $.__views.__alloyId549 = Alloy.createController("_header", {
        id: "__alloyId549",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId549.setParent($.__views.promo);
    $.__views.__alloyId550 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId550"
    });
    $.__views.promo.add($.__views.__alloyId550);
    $.__views.__alloyId551 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId712"
    });
    $.__views.__alloyId711.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId713"
    });
    $.__views.promo.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId714"
    });
    $.__views.__alloyId713.add($.__views.__alloyId714);
    promoDetail ? $.__views.__alloyId714.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId714!click!promoDetail"] = true;
    $.__views.__alloyId715 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId715"
    });
    $.__views.__alloyId713.add($.__views.__alloyId715);
    promoDetail ? $.__views.__alloyId715.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId715!click!promoDetail"] = true;
    $.__views.__alloyId716 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId716"
    });
    $.__views.__alloyId713.add($.__views.__alloyId716);
    promoDetail ? $.__views.__alloyId716.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId716!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId714!click!promoDetail"] && $.__views.__alloyId714.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId715!click!promoDetail"] && $.__views.__alloyId715.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId716!click!promoDetail"] && $.__views.__alloyId716.addEventListener("click", promoDetail);
=======
        id: "__alloyId551"
    });
    $.__views.__alloyId550.add($.__views.__alloyId551);
    $.__views.__alloyId552 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId552"
    });
    $.__views.promo.add($.__views.__alloyId552);
    $.__views.__alloyId553 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId553"
    });
    $.__views.__alloyId552.add($.__views.__alloyId553);
    promoDetail ? $.__views.__alloyId553.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId553!click!promoDetail"] = true;
    $.__views.__alloyId554 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId554"
    });
    $.__views.__alloyId552.add($.__views.__alloyId554);
    promoDetail ? $.__views.__alloyId554.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId554!click!promoDetail"] = true;
    $.__views.__alloyId555 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId555"
    });
    $.__views.__alloyId552.add($.__views.__alloyId555);
    promoDetail ? $.__views.__alloyId555.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId555!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId553!click!promoDetail"] && $.__views.__alloyId553.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId554!click!promoDetail"] && $.__views.__alloyId554.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId555!click!promoDetail"] && $.__views.__alloyId555.addEventListener("click", promoDetail);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;