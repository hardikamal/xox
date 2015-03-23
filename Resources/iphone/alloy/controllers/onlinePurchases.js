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
    $.__views.__alloyId1189 = Alloy.createController("_header", {
        id: "__alloyId1189",
=======
<<<<<<< HEAD
    $.__views.__alloyId1353 = Alloy.createController("_header", {
        id: "__alloyId1353",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1353.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1354 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1354"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1354);
    $.__views.__alloyId1355 = Ti.UI.createLabel({
=======
    $.__views.__alloyId857 = Alloy.createController("_header", {
        id: "__alloyId857",
>>>>>>> origin/master
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1189.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1190 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1190"
    });
<<<<<<< HEAD
    $.__views.onlinePurchases.add($.__views.__alloyId1190);
    $.__views.__alloyId1191 = Ti.UI.createLabel({
=======
    $.__views.onlinePurchases.add($.__views.__alloyId858);
    $.__views.__alloyId859 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId1191"
=======
<<<<<<< HEAD
        id: "__alloyId1355"
    });
    $.__views.__alloyId1354.add($.__views.__alloyId1355);
    $.__views.__alloyId1356 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1356"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1356);
    $.__views.__alloyId1357 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1357"
    });
    $.__views.__alloyId1356.add($.__views.__alloyId1357);
    hopOn ? $.__views.__alloyId1357.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1357!click!hopOn"] = true;
    $.__views.__alloyId1358 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1358"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1358);
    $.__views.__alloyId1359 = Ti.UI.createLabel({
=======
        id: "__alloyId859"
>>>>>>> origin/master
    });
    $.__views.__alloyId1190.add($.__views.__alloyId1191);
    $.__views.__alloyId1192 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1192"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1192);
    $.__views.__alloyId1193 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1193"
    });
    $.__views.__alloyId1192.add($.__views.__alloyId1193);
    hopOn ? $.__views.__alloyId1193.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1193!click!hopOn"] = true;
    $.__views.__alloyId1194 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1194"
    });
<<<<<<< HEAD
    $.__views.__alloyId1193.add($.__views.__alloyId1194);
    $.__views.__alloyId1195 = Ti.UI.createLabel({
=======
    $.__views.__alloyId861.add($.__views.__alloyId862);
    $.__views.__alloyId863 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1195"
=======
<<<<<<< HEAD
        id: "__alloyId1359"
    });
    $.__views.__alloyId1357.add($.__views.__alloyId1359);
    $.__views.__alloyId1360 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1360"
    });
    $.__views.__alloyId1356.add($.__views.__alloyId1360);
    prepaidPack ? $.__views.__alloyId1360.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId1360!click!prepaidPack"] = true;
    $.__views.__alloyId1361 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1361"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1361);
    $.__views.__alloyId1362 = Ti.UI.createLabel({
=======
        id: "__alloyId863"
>>>>>>> origin/master
    });
    $.__views.__alloyId1193.add($.__views.__alloyId1195);
    $.__views.__alloyId1196 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1196"
    });
    $.__views.__alloyId1192.add($.__views.__alloyId1196);
    prepaidPack ? $.__views.__alloyId1196.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId1196!click!prepaidPack"] = true;
    $.__views.__alloyId1197 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1197"
    });
<<<<<<< HEAD
    $.__views.__alloyId1196.add($.__views.__alloyId1197);
    $.__views.__alloyId1198 = Ti.UI.createLabel({
=======
    $.__views.__alloyId864.add($.__views.__alloyId865);
    $.__views.__alloyId866 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1198"
=======
<<<<<<< HEAD
        id: "__alloyId1362"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1362);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1357!click!hopOn"] && $.__views.__alloyId1357.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1360!click!prepaidPack"] && $.__views.__alloyId1360.addEventListener("click", prepaidPack);
=======
        id: "__alloyId866"
>>>>>>> origin/master
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1198);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1193!click!hopOn"] && $.__views.__alloyId1193.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1196!click!prepaidPack"] && $.__views.__alloyId1196.addEventListener("click", prepaidPack);
=======
    __defers["$.__views.__alloyId861!click!hopOn"] && $.__views.__alloyId861.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId864!click!prepaidPack"] && $.__views.__alloyId864.addEventListener("click", prepaidPack);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;