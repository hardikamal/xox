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
    $.__views.__alloyId1359 = Alloy.createController("_header", {
        id: "__alloyId1359",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1359.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1360 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1360"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1360);
    $.__views.__alloyId1361 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1361"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1361);
    $.__views.__alloyId1362 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1362"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1363"
    });
    $.__views.__alloyId1362.add($.__views.__alloyId1363);
    $.__views.__alloyId1364 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "red",
        id: "__alloyId1364"
    });
    $.__views.__alloyId1363.add($.__views.__alloyId1364);
    panda ? $.__views.__alloyId1364.addEventListener("click", panda) : __defers["$.__views.__alloyId1364!click!panda"] = true;
    $.__views.__alloyId1365 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        color: "white",
        textAlign: "center",
        id: "__alloyId1365"
    });
    $.__views.__alloyId1364.add($.__views.__alloyId1365);
    $.__views.__alloyId1366 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "blue",
        id: "__alloyId1366"
    });
    $.__views.__alloyId1363.add($.__views.__alloyId1366);
    hopOn ? $.__views.__alloyId1366.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1366!click!hopOn"] = true;
    $.__views.__alloyId1367 = Ti.UI.createLabel({
        text: "HOP ON",
        color: "white",
        textAlign: "center",
        id: "__alloyId1367"
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1367);
    $.__views.__alloyId1368 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1368"
    });
    $.__views.__alloyId1362.add($.__views.__alloyId1368);
    $.__views.__alloyId1369 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "green",
        id: "__alloyId1369"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1369);
    seasonPass ? $.__views.__alloyId1369.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1369!click!seasonPass"] = true;
    $.__views.__alloyId1370 = Ti.UI.createLabel({
        text: "SEASON PASS",
        color: "white",
        textAlign: "center",
        id: "__alloyId1370"
    });
    $.__views.__alloyId1369.add($.__views.__alloyId1370);
    $.__views.__alloyId1371 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "yellow",
        id: "__alloyId1371"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1371);
    topUp ? $.__views.__alloyId1371.addEventListener("click", topUp) : __defers["$.__views.__alloyId1371!click!topUp"] = true;
    $.__views.__alloyId1372 = Ti.UI.createLabel({
        text: "TOP UP",
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
    $.__views.__alloyId1362.add($.__views.__alloyId1373);
    $.__views.__alloyId1374 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "red",
        id: "__alloyId1374"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1374);
    penang ? $.__views.__alloyId1374.addEventListener("click", penang) : __defers["$.__views.__alloyId1374!click!penang"] = true;
    $.__views.__alloyId1375 = Ti.UI.createLabel({
        text: "PENANG PACK UNITED PACK SIGNATURE BASIC",
        color: "white",
        textAlign: "center",
        id: "__alloyId1375"
    });
    $.__views.__alloyId1374.add($.__views.__alloyId1375);
    $.__views.__alloyId1376 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "blue",
        id: "__alloyId1376"
    });
    $.__views.__alloyId1373.add($.__views.__alloyId1376);
    premium ? $.__views.__alloyId1376.addEventListener("click", premium) : __defers["$.__views.__alloyId1376!click!premium"] = true;
    $.__views.__alloyId1377 = Ti.UI.createLabel({
        text: "PREMIUM",
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
    $.__views.__alloyId1362.add($.__views.__alloyId1378);
    $.__views.__alloyId1379 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "green",
        id: "__alloyId1379"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1379);
    switchXOX ? $.__views.__alloyId1379.addEventListener("click", switchXOX) : __defers["$.__views.__alloyId1379!click!switchXOX"] = true;
    $.__views.__alloyId1380 = Ti.UI.createLabel({
        text: "#1758 SWITCH TO XOX",
        color: "white",
        textAlign: "center",
        id: "__alloyId1380"
    });
    $.__views.__alloyId1379.add($.__views.__alloyId1380);
    $.__views.__alloyId1381 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "yellow",
        id: "__alloyId1381"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1381);
    mobileData ? $.__views.__alloyId1381.addEventListener("click", mobileData) : __defers["$.__views.__alloyId1381!click!mobileData"] = true;
    $.__views.__alloyId1382 = Ti.UI.createLabel({
        text: "HIGH SPEED MOBILE DATA",
        color: "white",
        textAlign: "center",
        id: "__alloyId1382"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1382);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1364!click!panda"] && $.__views.__alloyId1364.addEventListener("click", panda);
    __defers["$.__views.__alloyId1366!click!hopOn"] && $.__views.__alloyId1366.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1369!click!seasonPass"] && $.__views.__alloyId1369.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1371!click!topUp"] && $.__views.__alloyId1371.addEventListener("click", topUp);
    __defers["$.__views.__alloyId1374!click!penang"] && $.__views.__alloyId1374.addEventListener("click", penang);
    __defers["$.__views.__alloyId1376!click!premium"] && $.__views.__alloyId1376.addEventListener("click", premium);
    __defers["$.__views.__alloyId1379!click!switchXOX"] && $.__views.__alloyId1379.addEventListener("click", switchXOX);
    __defers["$.__views.__alloyId1381!click!mobileData"] && $.__views.__alloyId1381.addEventListener("click", mobileData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;