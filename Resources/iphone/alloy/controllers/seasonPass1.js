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
    this.__controllerPath = "seasonPass1";
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
    $.__views.__alloyId1365 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId1365"
    });
    $.__views.scrollView.add($.__views.__alloyId1365);
    $.__views.__alloyId1366 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1366"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1367"
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1367);
    $.__views.__alloyId1368 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1368"
    });
    $.__views.__alloyId1367.add($.__views.__alloyId1368);
    $.__views.__alloyId1369 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1369"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1369);
    $.__views.__alloyId1370 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1370"
    });
    $.__views.__alloyId1368.add($.__views.__alloyId1370);
    $.__views.__alloyId1371 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1371"
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1371);
    $.__views.__alloyId1372 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1372"
    });
    $.__views.__alloyId1371.add($.__views.__alloyId1372);
    $.__views.__alloyId1373 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1373"
    });
    $.__views.__alloyId1372.add($.__views.__alloyId1373);
    $.__views.__alloyId1374 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1374"
    });
    $.__views.__alloyId1372.add($.__views.__alloyId1374);
    $.__views.__alloyId1375 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1375"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1375);
    $.__views.__alloyId1376 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1376"
    });
    $.__views.__alloyId1375.add($.__views.__alloyId1376);
    $.__views.__alloyId1377 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1377"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1377);
    $.__views.__alloyId1378 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1378"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1378);
    $.__views.__alloyId1379 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1379"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1379);
    $.__views.__alloyId1380 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1380"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1380);
    $.__views.__alloyId1381 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId1381"
    });
    $.__views.scrollView.add($.__views.__alloyId1381);
    $.__views.__alloyId1382 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1382"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId1383"
    });
    $.__views.__alloyId1382.add($.__views.__alloyId1383);
    $.__views.__alloyId1384 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1384"
    });
    $.__views.__alloyId1383.add($.__views.__alloyId1384);
    $.__views.__alloyId1385 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1385"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1385);
    $.__views.__alloyId1386 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1386"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId1387"
    });
    $.__views.__alloyId1382.add($.__views.__alloyId1387);
    $.__views.__alloyId1388 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId1388"
    });
    $.__views.__alloyId1387.add($.__views.__alloyId1388);
    $.__views.__alloyId1389 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1389"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId1390"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId1391"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1391);
    $.__views.__alloyId1392 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId1392"
    });
    $.__views.__alloyId1391.add($.__views.__alloyId1392);
    $.__views.__alloyId1393 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1393"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1393);
    $.__views.__alloyId1394 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1394"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1395"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId1396"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1396);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;