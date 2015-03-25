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
    $.__views.__alloyId1453 = Alloy.createController("_header", {
        id: "__alloyId1453",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1453.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1454 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1454"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1454);
    $.__views.__alloyId1455 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1455"
    });
    $.__views.__alloyId1454.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1456"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1457"
    });
    $.__views.__alloyId1456.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "red",
        id: "__alloyId1458"
    });
    $.__views.__alloyId1457.add($.__views.__alloyId1458);
    panda ? $.__views.__alloyId1458.addEventListener("click", panda) : __defers["$.__views.__alloyId1458!click!panda"] = true;
    $.__views.__alloyId1459 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        color: "white",
        textAlign: "center",
        id: "__alloyId1459"
    });
    $.__views.__alloyId1458.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "blue",
        id: "__alloyId1460"
    });
    $.__views.__alloyId1457.add($.__views.__alloyId1460);
    hopOn ? $.__views.__alloyId1460.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1460!click!hopOn"] = true;
    $.__views.__alloyId1461 = Ti.UI.createLabel({
        text: "HOP ON",
        color: "white",
        textAlign: "center",
        id: "__alloyId1461"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1462"
    });
    $.__views.__alloyId1456.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "green",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1463);
    seasonPass ? $.__views.__alloyId1463.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1463!click!seasonPass"] = true;
    $.__views.__alloyId1464 = Ti.UI.createLabel({
        text: "SEASON PASS",
        color: "white",
        textAlign: "center",
        id: "__alloyId1464"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "yellow",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1465);
    topUp ? $.__views.__alloyId1465.addEventListener("click", topUp) : __defers["$.__views.__alloyId1465!click!topUp"] = true;
    $.__views.__alloyId1466 = Ti.UI.createLabel({
        text: "TOP UP",
        color: "white",
        textAlign: "center",
        id: "__alloyId1466"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1467"
    });
    $.__views.__alloyId1456.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "red",
        id: "__alloyId1468"
    });
    $.__views.__alloyId1467.add($.__views.__alloyId1468);
    penang ? $.__views.__alloyId1468.addEventListener("click", penang) : __defers["$.__views.__alloyId1468!click!penang"] = true;
    $.__views.__alloyId1469 = Ti.UI.createLabel({
        text: "PENANG PACK UNITED PACK SIGNATURE BASIC",
        color: "white",
        textAlign: "center",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "blue",
        id: "__alloyId1470"
    });
    $.__views.__alloyId1467.add($.__views.__alloyId1470);
    premium ? $.__views.__alloyId1470.addEventListener("click", premium) : __defers["$.__views.__alloyId1470!click!premium"] = true;
    $.__views.__alloyId1471 = Ti.UI.createLabel({
        text: "PREMIUM",
        color: "white",
        textAlign: "center",
        id: "__alloyId1471"
    });
    $.__views.__alloyId1470.add($.__views.__alloyId1471);
    $.__views.__alloyId1472 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1472"
    });
    $.__views.__alloyId1456.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "green",
        id: "__alloyId1473"
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1473);
    switchXOX ? $.__views.__alloyId1473.addEventListener("click", switchXOX) : __defers["$.__views.__alloyId1473!click!switchXOX"] = true;
    $.__views.__alloyId1474 = Ti.UI.createLabel({
        text: "#1758 SWITCH TO XOX",
        color: "white",
        textAlign: "center",
        id: "__alloyId1474"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "yellow",
        id: "__alloyId1475"
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1475);
    mobileData ? $.__views.__alloyId1475.addEventListener("click", mobileData) : __defers["$.__views.__alloyId1475!click!mobileData"] = true;
    $.__views.__alloyId1476 = Ti.UI.createLabel({
        text: "HIGH SPEED MOBILE DATA",
        color: "white",
        textAlign: "center",
        id: "__alloyId1476"
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1476);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1458!click!panda"] && $.__views.__alloyId1458.addEventListener("click", panda);
    __defers["$.__views.__alloyId1460!click!hopOn"] && $.__views.__alloyId1460.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1463!click!seasonPass"] && $.__views.__alloyId1463.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1465!click!topUp"] && $.__views.__alloyId1465.addEventListener("click", topUp);
    __defers["$.__views.__alloyId1468!click!penang"] && $.__views.__alloyId1468.addEventListener("click", penang);
    __defers["$.__views.__alloyId1470!click!premium"] && $.__views.__alloyId1470.addEventListener("click", premium);
    __defers["$.__views.__alloyId1473!click!switchXOX"] && $.__views.__alloyId1473.addEventListener("click", switchXOX);
    __defers["$.__views.__alloyId1475!click!mobileData"] && $.__views.__alloyId1475.addEventListener("click", mobileData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;