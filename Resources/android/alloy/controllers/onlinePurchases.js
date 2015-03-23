function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function prepaidPack() {
        DRAWER.navigation("prepaidPack", 1);
    }
    function hopOn() {
        DRAWER.navigation("hopOn", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "onlinePurchases";
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
    $.__views.onlinePurchases = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "onlinePurchases"
    });
    $.__views.onlinePurchases && $.addTopLevelView($.__views.onlinePurchases);
<<<<<<< HEAD
    $.__views.__alloyId1363 = Alloy.createController("_header", {
        id: "__alloyId1363",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1363.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1364 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1364"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1364);
    $.__views.__alloyId1365 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1193 = Alloy.createController("_header", {
        id: "__alloyId1193",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1193.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1194 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1194"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId1365"
    });
    $.__views.__alloyId1364.add($.__views.__alloyId1365);
    $.__views.__alloyId1366 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1366"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1367"
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1367);
    hopOn ? $.__views.__alloyId1367.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1367!click!hopOn"] = true;
    $.__views.__alloyId1368 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1368"
    });
    $.__views.__alloyId1367.add($.__views.__alloyId1368);
    $.__views.__alloyId1369 = Ti.UI.createLabel({
=======
        id: "__alloyId1195"
    });
    $.__views.__alloyId1194.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1196"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1196);
    $.__views.__alloyId1197 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1197"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1197);
    hopOn ? $.__views.__alloyId1197.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1197!click!hopOn"] = true;
    $.__views.__alloyId1198 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1198"
    });
    $.__views.__alloyId1197.add($.__views.__alloyId1198);
    $.__views.__alloyId1199 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1369"
    });
    $.__views.__alloyId1367.add($.__views.__alloyId1369);
    $.__views.__alloyId1370 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1370"
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1370);
    prepaidPack ? $.__views.__alloyId1370.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId1370!click!prepaidPack"] = true;
    $.__views.__alloyId1371 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1371"
    });
    $.__views.__alloyId1370.add($.__views.__alloyId1371);
    $.__views.__alloyId1372 = Ti.UI.createLabel({
=======
        id: "__alloyId1199"
    });
    $.__views.__alloyId1197.add($.__views.__alloyId1199);
    $.__views.__alloyId1200 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1200"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1200);
    prepaidPack ? $.__views.__alloyId1200.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId1200!click!prepaidPack"] = true;
    $.__views.__alloyId1201 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1201"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1372"
    });
    $.__views.__alloyId1370.add($.__views.__alloyId1372);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1367!click!hopOn"] && $.__views.__alloyId1367.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1370!click!prepaidPack"] && $.__views.__alloyId1370.addEventListener("click", prepaidPack);
=======
        id: "__alloyId1202"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1202);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1197!click!hopOn"] && $.__views.__alloyId1197.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1200!click!prepaidPack"] && $.__views.__alloyId1200.addEventListener("click", prepaidPack);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;