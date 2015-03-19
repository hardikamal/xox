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
    this.__controllerPath = "seasonPass2";
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
    $.__views.__alloyId1414 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId1414"
    });
    $.__views.scrollView.add($.__views.__alloyId1414);
    $.__views.__alloyId1415 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1415"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1415);
    $.__views.__alloyId1416 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1416"
    });
    $.__views.__alloyId1415.add($.__views.__alloyId1416);
    $.__views.__alloyId1417 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1417"
    });
    $.__views.__alloyId1416.add($.__views.__alloyId1417);
    $.__views.__alloyId1418 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1418"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1418);
    $.__views.__alloyId1419 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1419"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1419);
    $.__views.__alloyId1420 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1420"
    });
    $.__views.__alloyId1415.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1421"
    });
    $.__views.__alloyId1420.add($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1422"
    });
    $.__views.__alloyId1421.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1423"
    });
    $.__views.__alloyId1421.add($.__views.__alloyId1423);
    $.__views.__alloyId1424 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1424"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1425"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1426"
    });
    $.__views.__alloyId1414.add($.__views.__alloyId1426);
    $.__views.__alloyId1427 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1427"
    });
    $.__views.__alloyId1426.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1428"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1428);
    $.__views.__alloyId1429 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1429"
    });
    $.__views.__alloyId1427.add($.__views.__alloyId1429);
    $.__views.__alloyId1430 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId1430"
    });
    $.__views.scrollView.add($.__views.__alloyId1430);
    $.__views.__alloyId1431 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1431"
    });
    $.__views.__alloyId1430.add($.__views.__alloyId1431);
    $.__views.__alloyId1432 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1432"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1433"
    });
    $.__views.__alloyId1432.add($.__views.__alloyId1433);
    $.__views.__alloyId1434 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1434"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1434);
    $.__views.__alloyId1435 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1435"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1436"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1437"
    });
    $.__views.__alloyId1436.add($.__views.__alloyId1437);
    $.__views.__alloyId1438 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1438"
    });
    $.__views.__alloyId1437.add($.__views.__alloyId1438);
    $.__views.__alloyId1439 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1439"
    });
    $.__views.__alloyId1437.add($.__views.__alloyId1439);
    $.__views.__alloyId1440 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1440"
    });
    $.__views.__alloyId1430.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1441"
    });
    $.__views.__alloyId1440.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1442"
    });
    $.__views.__alloyId1430.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1443"
    });
    $.__views.__alloyId1442.add($.__views.__alloyId1443);
    $.__views.__alloyId1444 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1444"
    });
    $.__views.__alloyId1443.add($.__views.__alloyId1444);
    $.__views.__alloyId1445 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1445"
    });
    $.__views.__alloyId1443.add($.__views.__alloyId1445);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;