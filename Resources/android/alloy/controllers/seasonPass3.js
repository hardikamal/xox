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
    $.__views.__alloyId2559 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2559"
    });
    $.__views.scrollView.add($.__views.__alloyId2559);
    $.__views.__alloyId2560 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2560"
    });
    $.__views.__alloyId2559.add($.__views.__alloyId2560);
    $.__views.__alloyId2561 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2561"
    });
    $.__views.__alloyId2560.add($.__views.__alloyId2561);
    $.__views.__alloyId2562 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2562"
    });
    $.__views.__alloyId2561.add($.__views.__alloyId2562);
    $.__views.__alloyId2563 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2563"
    });
    $.__views.__alloyId2562.add($.__views.__alloyId2563);
    $.__views.__alloyId2564 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2564"
    });
    $.__views.__alloyId2562.add($.__views.__alloyId2564);
    $.__views.__alloyId2565 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2565"
    });
    $.__views.__alloyId2560.add($.__views.__alloyId2565);
    $.__views.__alloyId2566 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2566"
    });
    $.__views.__alloyId2565.add($.__views.__alloyId2566);
    $.__views.__alloyId2567 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2567"
    });
    $.__views.__alloyId2566.add($.__views.__alloyId2567);
    $.__views.__alloyId2568 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2568"
    });
    $.__views.__alloyId2566.add($.__views.__alloyId2568);
    $.__views.__alloyId2569 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2569"
    });
    $.__views.__alloyId2559.add($.__views.__alloyId2569);
    $.__views.__alloyId2570 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2570"
    });
    $.__views.__alloyId2569.add($.__views.__alloyId2570);
    $.__views.__alloyId2571 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2571"
    });
    $.__views.__alloyId2559.add($.__views.__alloyId2571);
    $.__views.__alloyId2572 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2572"
    });
    $.__views.__alloyId2571.add($.__views.__alloyId2572);
    $.__views.__alloyId2573 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2573"
    });
    $.__views.__alloyId2572.add($.__views.__alloyId2573);
    $.__views.__alloyId2574 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2574"
    });
    $.__views.__alloyId2572.add($.__views.__alloyId2574);
    $.__views.__alloyId2575 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2575"
    });
    $.__views.scrollView.add($.__views.__alloyId2575);
    $.__views.__alloyId2576 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2576"
    });
    $.__views.__alloyId2575.add($.__views.__alloyId2576);
    $.__views.__alloyId2577 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2577"
    });
    $.__views.__alloyId2576.add($.__views.__alloyId2577);
    $.__views.__alloyId2578 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2578"
    });
    $.__views.__alloyId2577.add($.__views.__alloyId2578);
    $.__views.__alloyId2579 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2579"
    });
    $.__views.__alloyId2578.add($.__views.__alloyId2579);
    $.__views.__alloyId2580 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2580"
    });
    $.__views.__alloyId2578.add($.__views.__alloyId2580);
    $.__views.__alloyId2581 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2581"
    });
    $.__views.__alloyId2576.add($.__views.__alloyId2581);
    $.__views.__alloyId2582 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2582"
    });
    $.__views.__alloyId2581.add($.__views.__alloyId2582);
    $.__views.__alloyId2583 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2583"
    });
    $.__views.__alloyId2582.add($.__views.__alloyId2583);
    $.__views.__alloyId2584 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2584"
    });
    $.__views.__alloyId2582.add($.__views.__alloyId2584);
    $.__views.__alloyId2585 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2585"
    });
    $.__views.__alloyId2575.add($.__views.__alloyId2585);
    $.__views.__alloyId2586 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2586"
    });
    $.__views.__alloyId2585.add($.__views.__alloyId2586);
    $.__views.__alloyId2587 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2587"
    });
    $.__views.__alloyId2575.add($.__views.__alloyId2587);
    $.__views.__alloyId2588 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2588"
    });
    $.__views.__alloyId2587.add($.__views.__alloyId2588);
    $.__views.__alloyId2589 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2589"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2589);
    $.__views.__alloyId2590 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2590"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2590);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;