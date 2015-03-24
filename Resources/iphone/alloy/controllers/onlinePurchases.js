function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function hopOn() {
        DRAWER.navigation("hopOn", 1);
    }
    function panda() {
        console.log("panda");
        DRAWER.navigation("panda", 1);
    }
    function hopOn() {
        console.log("hopOn");
        DRAWER.navigation("hopOn", 1);
    }
<<<<<<< HEAD
    function seasonPass() {
        console.log("seasonPass");
        DRAWER.navigation("seasonPass", 1);
    }
    function topUp() {
        console.log("topUp");
    }
    function penang() {
        console.log("penang");
        DRAWER.navigation("penang", 1);
    }
    function premium() {
        console.log("premium");
    }
    function switchXOX() {
        console.log("switchXOX");
        DRAWER.navigation("switchXOX", 1);
    }
    function mobileData() {
        console.log("mobileData");
        DRAWER.navigation("mobileData", 1);
=======
    function hopOn() {
        DRAWER.navigation("hopOn", 1);
>>>>>>> origin/master
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
=======
<<<<<<< HEAD
    $.__views.__alloyId1364 = Alloy.createController("_header", {
        id: "__alloyId1364",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1364.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1365 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1365"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1365);
    $.__views.__alloyId1366 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1307 = Alloy.createController("_header", {
        id: "__alloyId1307",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1307.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1308 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1308"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1308);
    $.__views.__alloyId1309 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1366"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1367"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1367);
    $.__views.__alloyId1368 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1368"
    });
    $.__views.__alloyId1367.add($.__views.__alloyId1368);
    $.__views.__alloyId1369 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "red",
        id: "__alloyId1369"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1369);
    panda ? $.__views.__alloyId1369.addEventListener("click", panda) : __defers["$.__views.__alloyId1369!click!panda"] = true;
    $.__views.__alloyId1370 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        color: "white",
        textAlign: "center",
        id: "__alloyId1370"
    });
    $.__views.__alloyId1369.add($.__views.__alloyId1370);
    $.__views.__alloyId1371 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "blue",
        id: "__alloyId1371"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1371);
    hopOn ? $.__views.__alloyId1371.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1371!click!hopOn"] = true;
    $.__views.__alloyId1372 = Ti.UI.createLabel({
        text: "HOP ON",
        color: "white",
        textAlign: "center",
        id: "__alloyId1372"
    });
    $.__views.__alloyId1371.add($.__views.__alloyId1372);
    $.__views.__alloyId1373 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1373"
    });
    $.__views.__alloyId1367.add($.__views.__alloyId1373);
    $.__views.__alloyId1374 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "green",
        id: "__alloyId1374"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1374);
    seasonPass ? $.__views.__alloyId1374.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1374!click!seasonPass"] = true;
    $.__views.__alloyId1375 = Ti.UI.createLabel({
        text: "SEASON PASS",
        color: "white",
        textAlign: "center",
        id: "__alloyId1375"
    });
    $.__views.__alloyId1374.add($.__views.__alloyId1375);
    $.__views.__alloyId1376 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "yellow",
        id: "__alloyId1376"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1376);
    topUp ? $.__views.__alloyId1376.addEventListener("click", topUp) : __defers["$.__views.__alloyId1376!click!topUp"] = true;
    $.__views.__alloyId1377 = Ti.UI.createLabel({
        text: "TOP UP",
        color: "white",
        textAlign: "center",
        id: "__alloyId1377"
    });
    $.__views.__alloyId1376.add($.__views.__alloyId1377);
    $.__views.__alloyId1378 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1378"
    });
    $.__views.__alloyId1367.add($.__views.__alloyId1378);
    $.__views.__alloyId1379 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "red",
        id: "__alloyId1379"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1379);
    penang ? $.__views.__alloyId1379.addEventListener("click", penang) : __defers["$.__views.__alloyId1379!click!penang"] = true;
    $.__views.__alloyId1380 = Ti.UI.createLabel({
        text: "PENANG PACK UNITED PACK SIGNATURE BASIC",
        color: "white",
        textAlign: "center",
        id: "__alloyId1380"
    });
    $.__views.__alloyId1379.add($.__views.__alloyId1380);
    $.__views.__alloyId1381 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "blue",
        id: "__alloyId1381"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1381);
    premium ? $.__views.__alloyId1381.addEventListener("click", premium) : __defers["$.__views.__alloyId1381!click!premium"] = true;
    $.__views.__alloyId1382 = Ti.UI.createLabel({
        text: "PREMIUM",
        color: "white",
        textAlign: "center",
        id: "__alloyId1382"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1383"
    });
    $.__views.__alloyId1367.add($.__views.__alloyId1383);
    $.__views.__alloyId1384 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "green",
        id: "__alloyId1384"
    });
    $.__views.__alloyId1383.add($.__views.__alloyId1384);
    switchXOX ? $.__views.__alloyId1384.addEventListener("click", switchXOX) : __defers["$.__views.__alloyId1384!click!switchXOX"] = true;
    $.__views.__alloyId1385 = Ti.UI.createLabel({
        text: "#1758 SWITCH TO XOX",
        color: "white",
        textAlign: "center",
        id: "__alloyId1385"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1385);
    $.__views.__alloyId1386 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "yellow",
        id: "__alloyId1386"
    });
    $.__views.__alloyId1383.add($.__views.__alloyId1386);
    mobileData ? $.__views.__alloyId1386.addEventListener("click", mobileData) : __defers["$.__views.__alloyId1386!click!mobileData"] = true;
    $.__views.__alloyId1387 = Ti.UI.createLabel({
        text: "HIGH SPEED MOBILE DATA",
        color: "white",
        textAlign: "center",
        id: "__alloyId1387"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1387);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1369!click!panda"] && $.__views.__alloyId1369.addEventListener("click", panda);
    __defers["$.__views.__alloyId1371!click!hopOn"] && $.__views.__alloyId1371.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1374!click!seasonPass"] && $.__views.__alloyId1374.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1376!click!topUp"] && $.__views.__alloyId1376.addEventListener("click", topUp);
    __defers["$.__views.__alloyId1379!click!penang"] && $.__views.__alloyId1379.addEventListener("click", penang);
    __defers["$.__views.__alloyId1381!click!premium"] && $.__views.__alloyId1381.addEventListener("click", premium);
    __defers["$.__views.__alloyId1384!click!switchXOX"] && $.__views.__alloyId1384.addEventListener("click", switchXOX);
    __defers["$.__views.__alloyId1386!click!mobileData"] && $.__views.__alloyId1386.addEventListener("click", mobileData);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1309"
    });
    $.__views.__alloyId1308.add($.__views.__alloyId1309);
    $.__views.__alloyId1310 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1310"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1310);
    $.__views.__alloyId1311 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId1311"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1311);
    hopOn ? $.__views.__alloyId1311.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1311!click!hopOn"] = true;
    $.__views.__alloyId1312 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "25%",
        id: "__alloyId1312"
    });
    $.__views.__alloyId1311.add($.__views.__alloyId1312);
    $.__views.__alloyId1313 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1313"
    });
    $.__views.__alloyId1311.add($.__views.__alloyId1313);
    $.__views.__alloyId1314 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1314"
    });
    $.__views.__alloyId1310.add($.__views.__alloyId1314);
    prepaidPack ? $.__views.__alloyId1314.addEventListener("click", prepaidPack) : __defers["$.__views.__alloyId1314!click!prepaidPack"] = true;
    $.__views.__alloyId1315 = Ti.UI.createImageView({
        backgroundColor: "#358790",
        height: "100%",
        width: "25%",
        id: "__alloyId1315"
    });
    $.__views.__alloyId1314.add($.__views.__alloyId1315);
    $.__views.__alloyId1316 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1316"
    });
    $.__views.__alloyId1314.add($.__views.__alloyId1316);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1311!click!hopOn"] && $.__views.__alloyId1311.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1314!click!prepaidPack"] && $.__views.__alloyId1314.addEventListener("click", prepaidPack);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;