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
<<<<<<< Updated upstream
        DRAWER.navigation("prepaidPack", 1);
    }
    function hopOn() {
        DRAWER.navigation("hopOn", 1);
=======
        DRAWER.navigation("prepaidPack", 2);
>>>>>>> Stashed changes
    }
    function hopOn() {
        DRAWER.navigation("hopOn", 1);
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
    $.__views.__alloyId1419 = Alloy.createController("_header", {
        id: "__alloyId1419",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1363 = Alloy.createController("_header", {
        id: "__alloyId1363",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1419.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1420 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1420"
    });
<<<<<<< HEAD
    $.__views.onlinePurchases.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createLabel({
=======
    $.__views.onlinePurchases.add($.__views.__alloyId1364);
    $.__views.__alloyId1365 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1193 = Alloy.createController("_header", {
        id: "__alloyId1193",
=======
    $.__views.__alloyId1419 = Alloy.createController("_header", {
        id: "__alloyId1419",
>>>>>>> origin/master
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1419.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1420 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1420"
    });
<<<<<<< HEAD
    $.__views.onlinePurchases.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId355 = Alloy.createController("_header", {
        id: "__alloyId355",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId355.setParent($.__views.onlinePurchases);
    $.__views.__alloyId356 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId356"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId356);
    $.__views.__alloyId357 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.onlinePurchases.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId1421"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1365"
=======
        id: "__alloyId1421"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1420.add($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1422"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1423"
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1423);
    hopOn ? $.__views.__alloyId1423.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1423!click!hopOn"] = true;
    $.__views.__alloyId1424 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1424"
    });
<<<<<<< HEAD
    $.__views.__alloyId1423.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId357"
    });
    $.__views.__alloyId356.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId358"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId358);
    $.__views.__alloyId359 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId359"
    });
    $.__views.__alloyId358.add($.__views.__alloyId359);
    prepaidPack ? $.__views.__alloyId359.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId359!click!prepaidPack"] = true;
    $.__views.__alloyId360 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId360"
    });
    $.__views.__alloyId359.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1423.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1425"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1369"
=======
        id: "__alloyId1425"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1423.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1426"
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1426);
    prepaidPack ? $.__views.__alloyId1426.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId1426!click!prepaidPack"] = true;
    $.__views.__alloyId1427 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1427"
    });
<<<<<<< HEAD
    $.__views.__alloyId1426.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId361"
    });
    $.__views.__alloyId359.add($.__views.__alloyId361);
    $.__views.__alloyId362 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId362"
    });
    $.__views.__alloyId358.add($.__views.__alloyId362);
    prepaidPack ? $.__views.__alloyId362.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId362!click!prepaidPack"] = true;
    $.__views.__alloyId363 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId363"
    });
    $.__views.__alloyId362.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1426.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1428"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1372"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1426.add($.__views.__alloyId1428);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1423!click!hopOn"] && $.__views.__alloyId1423.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1426!click!prepaidPack"] && $.__views.__alloyId1426.addEventListener("click", prepaidPack);
=======
    __defers["$.__views.__alloyId1367!click!hopOn"] && $.__views.__alloyId1367.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1370!click!prepaidPack"] && $.__views.__alloyId1370.addEventListener("click", prepaidPack);
=======
        id: "__alloyId1202"
=======
        id: "__alloyId1428"
>>>>>>> origin/master
    });
    $.__views.__alloyId1426.add($.__views.__alloyId1428);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1197!click!hopOn"] && $.__views.__alloyId1197.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1200!click!prepaidPack"] && $.__views.__alloyId1200.addEventListener("click", prepaidPack);
>>>>>>> origin/master
=======
        id: "__alloyId364"
    });
    $.__views.__alloyId362.add($.__views.__alloyId364);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId359!click!prepaidPack"] && $.__views.__alloyId359.addEventListener("click", prepaidPack);
    __defers["$.__views.__alloyId362!click!prepaidPack"] && $.__views.__alloyId362.addEventListener("click", prepaidPack);
>>>>>>> Stashed changes
=======
    __defers["$.__views.__alloyId1423!click!hopOn"] && $.__views.__alloyId1423.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1426!click!prepaidPack"] && $.__views.__alloyId1426.addEventListener("click", prepaidPack);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;