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
    $.__views.__alloyId1424 = Alloy.createController("_header", {
        id: "__alloyId1424",
        __parentSymbol: $.__views.onlinePurchases
    });
    $.__views.__alloyId1424.setParent($.__views.onlinePurchases);
    $.__views.__alloyId1425 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#1C6D83",
        id: "__alloyId1425"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createLabel({
        text: "Online Purchases",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1426"
    });
    $.__views.__alloyId1425.add($.__views.__alloyId1426);
    $.__views.__alloyId1427 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1427"
    });
    $.__views.onlinePurchases.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1428"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1428);
    $.__views.__alloyId1429 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "red",
        id: "__alloyId1429"
    });
    $.__views.__alloyId1428.add($.__views.__alloyId1429);
    panda ? $.__views.__alloyId1429.addEventListener("click", panda) : __defers["$.__views.__alloyId1429!click!panda"] = true;
    $.__views.__alloyId1430 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        color: "white",
        textAlign: "center",
        id: "__alloyId1430"
    });
    $.__views.__alloyId1429.add($.__views.__alloyId1430);
    $.__views.__alloyId1431 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "blue",
        id: "__alloyId1431"
    });
    $.__views.__alloyId1428.add($.__views.__alloyId1431);
    hopOn ? $.__views.__alloyId1431.addEventListener("click", hopOn) : __defers["$.__views.__alloyId1431!click!hopOn"] = true;
    $.__views.__alloyId1432 = Ti.UI.createLabel({
        text: "HOP ON",
        color: "white",
        textAlign: "center",
        id: "__alloyId1432"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1433"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1433);
    $.__views.__alloyId1434 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "green",
        id: "__alloyId1434"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1434);
    seasonPass ? $.__views.__alloyId1434.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId1434!click!seasonPass"] = true;
    $.__views.__alloyId1435 = Ti.UI.createLabel({
        text: "SEASON PASS",
        color: "white",
        textAlign: "center",
        id: "__alloyId1435"
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "yellow",
        id: "__alloyId1436"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1436);
    topUp ? $.__views.__alloyId1436.addEventListener("click", topUp) : __defers["$.__views.__alloyId1436!click!topUp"] = true;
    $.__views.__alloyId1437 = Ti.UI.createLabel({
        text: "TOP UP",
        color: "white",
        textAlign: "center",
        id: "__alloyId1437"
    });
    $.__views.__alloyId1436.add($.__views.__alloyId1437);
    $.__views.__alloyId1438 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1438"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1438);
    $.__views.__alloyId1439 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "red",
        id: "__alloyId1439"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1439);
    penang ? $.__views.__alloyId1439.addEventListener("click", penang) : __defers["$.__views.__alloyId1439!click!penang"] = true;
    $.__views.__alloyId1440 = Ti.UI.createLabel({
        text: "PENANG PACK UNITED PACK SIGNATURE BASIC",
        color: "white",
        textAlign: "center",
        id: "__alloyId1440"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "blue",
        id: "__alloyId1441"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1441);
    premium ? $.__views.__alloyId1441.addEventListener("click", premium) : __defers["$.__views.__alloyId1441!click!premium"] = true;
    $.__views.__alloyId1442 = Ti.UI.createLabel({
        text: "PREMIUM",
        color: "white",
        textAlign: "center",
        id: "__alloyId1442"
    });
    $.__views.__alloyId1441.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createView({
        layout: "horizontal",
        height: "30%",
        width: "100%",
        id: "__alloyId1443"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1443);
    $.__views.__alloyId1444 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "green",
        id: "__alloyId1444"
    });
    $.__views.__alloyId1443.add($.__views.__alloyId1444);
    switchXOX ? $.__views.__alloyId1444.addEventListener("click", switchXOX) : __defers["$.__views.__alloyId1444!click!switchXOX"] = true;
    $.__views.__alloyId1445 = Ti.UI.createLabel({
        text: "#1758 SWITCH TO XOX",
        color: "white",
        textAlign: "center",
        id: "__alloyId1445"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createView({
        height: "100%",
        width: "50%",
        backgroundColor: "yellow",
        id: "__alloyId1446"
    });
    $.__views.__alloyId1443.add($.__views.__alloyId1446);
    mobileData ? $.__views.__alloyId1446.addEventListener("click", mobileData) : __defers["$.__views.__alloyId1446!click!mobileData"] = true;
    $.__views.__alloyId1447 = Ti.UI.createLabel({
        text: "HIGH SPEED MOBILE DATA",
        color: "white",
        textAlign: "center",
        id: "__alloyId1447"
    });
    $.__views.__alloyId1446.add($.__views.__alloyId1447);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1429!click!panda"] && $.__views.__alloyId1429.addEventListener("click", panda);
    __defers["$.__views.__alloyId1431!click!hopOn"] && $.__views.__alloyId1431.addEventListener("click", hopOn);
    __defers["$.__views.__alloyId1434!click!seasonPass"] && $.__views.__alloyId1434.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId1436!click!topUp"] && $.__views.__alloyId1436.addEventListener("click", topUp);
    __defers["$.__views.__alloyId1439!click!penang"] && $.__views.__alloyId1439.addEventListener("click", penang);
    __defers["$.__views.__alloyId1441!click!premium"] && $.__views.__alloyId1441.addEventListener("click", premium);
    __defers["$.__views.__alloyId1444!click!switchXOX"] && $.__views.__alloyId1444.addEventListener("click", switchXOX);
    __defers["$.__views.__alloyId1446!click!mobileData"] && $.__views.__alloyId1446.addEventListener("click", mobileData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;