function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass3";
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.__alloyId1446 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId1446"
    });
    $.__views.scrollView.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1447"
    });
    $.__views.__alloyId1446.add($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1448"
    });
    $.__views.__alloyId1447.add($.__views.__alloyId1448);
    $.__views.__alloyId1449 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1449"
    });
    $.__views.__alloyId1448.add($.__views.__alloyId1449);
    $.__views.__alloyId1450 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1450"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1451"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1451);
    $.__views.__alloyId1452 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1452"
    });
    $.__views.__alloyId1447.add($.__views.__alloyId1452);
    $.__views.__alloyId1453 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1453"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1453);
    $.__views.__alloyId1454 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1454"
    });
    $.__views.__alloyId1453.add($.__views.__alloyId1454);
    $.__views.__alloyId1455 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1455"
    });
    $.__views.__alloyId1453.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1456"
    });
    $.__views.__alloyId1446.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1457"
    });
    $.__views.__alloyId1456.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1458"
    });
    $.__views.__alloyId1446.add($.__views.__alloyId1458);
    $.__views.__alloyId1459 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1459"
    });
    $.__views.__alloyId1458.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1460"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1461"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId1462"
    });
    $.__views.scrollView.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1464"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1466"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1467"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1468"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1468);
    $.__views.__alloyId1469 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1470"
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1470);
    $.__views.__alloyId1471 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1471"
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1471);
    $.__views.__alloyId1472 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1472"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1473"
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1474"
    });
    $.__views.__alloyId1462.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1475"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1476"
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1477"
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1477);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;