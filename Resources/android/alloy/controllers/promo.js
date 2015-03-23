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
<<<<<<< Updated upstream
        DRAWER.navigation("promoDetail", 1);
=======
        DRAWER.navigation("promoDetail", 2);
>>>>>>> Stashed changes
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
<<<<<<< HEAD
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
=======
    $.__views.__alloyId1857 = Alloy.createController("_header", {
        id: "__alloyId1857",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId1857.setParent($.__views.promo);
    $.__views.__alloyId1858 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1858"
    });
    $.__views.promo.add($.__views.__alloyId1858);
    $.__views.__alloyId1859 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId546 = Alloy.createController("_header", {
        id: "__alloyId546",
        __parentSymbol: $.__views.promo
    });
    $.__views.__alloyId546.setParent($.__views.promo);
    $.__views.__alloyId547 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId547"
    });
    $.__views.promo.add($.__views.__alloyId547);
    $.__views.__alloyId548 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Promo / News",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< Updated upstream
<<<<<<< HEAD
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
=======
        id: "__alloyId1859"
    });
    $.__views.__alloyId1858.add($.__views.__alloyId1859);
    $.__views.__alloyId1860 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1860"
    });
    $.__views.promo.add($.__views.__alloyId1860);
    $.__views.__alloyId1861 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId1861"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1861);
    promoDetail ? $.__views.__alloyId1861.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1861!click!promoDetail"] = true;
    $.__views.__alloyId1862 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId1862"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1862);
    promoDetail ? $.__views.__alloyId1862.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1862!click!promoDetail"] = true;
    $.__views.__alloyId1863 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId1863"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1863);
    promoDetail ? $.__views.__alloyId1863.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId1863!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1861!click!promoDetail"] && $.__views.__alloyId1861.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1862!click!promoDetail"] && $.__views.__alloyId1862.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId1863!click!promoDetail"] && $.__views.__alloyId1863.addEventListener("click", promoDetail);
>>>>>>> origin/master
=======
        id: "__alloyId548"
    });
    $.__views.__alloyId547.add($.__views.__alloyId548);
    $.__views.__alloyId549 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId549"
    });
    $.__views.promo.add($.__views.__alloyId549);
    $.__views.__alloyId550 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "red",
        id: "__alloyId550"
    });
    $.__views.__alloyId549.add($.__views.__alloyId550);
    promoDetail ? $.__views.__alloyId550.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId550!click!promoDetail"] = true;
    $.__views.__alloyId551 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "green",
        id: "__alloyId551"
    });
    $.__views.__alloyId549.add($.__views.__alloyId551);
    promoDetail ? $.__views.__alloyId551.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId551!click!promoDetail"] = true;
    $.__views.__alloyId552 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "yellow",
        id: "__alloyId552"
    });
    $.__views.__alloyId549.add($.__views.__alloyId552);
    promoDetail ? $.__views.__alloyId552.addEventListener("click", promoDetail) : __defers["$.__views.__alloyId552!click!promoDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId550!click!promoDetail"] && $.__views.__alloyId550.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId551!click!promoDetail"] && $.__views.__alloyId551.addEventListener("click", promoDetail);
    __defers["$.__views.__alloyId552!click!promoDetail"] && $.__views.__alloyId552.addEventListener("click", promoDetail);
>>>>>>> Stashed changes
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;