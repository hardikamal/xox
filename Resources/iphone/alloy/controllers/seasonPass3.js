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
    $.__views.__alloyId2485 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2485"
    });
    $.__views.scrollView.add($.__views.__alloyId2485);
    $.__views.__alloyId2486 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2486"
    });
    $.__views.__alloyId2485.add($.__views.__alloyId2486);
    $.__views.__alloyId2487 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2487"
    });
    $.__views.__alloyId2486.add($.__views.__alloyId2487);
    $.__views.__alloyId2488 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2488"
    });
    $.__views.__alloyId2487.add($.__views.__alloyId2488);
    $.__views.__alloyId2489 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2489"
    });
    $.__views.__alloyId2488.add($.__views.__alloyId2489);
    $.__views.__alloyId2490 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2490"
    });
    $.__views.__alloyId2488.add($.__views.__alloyId2490);
    $.__views.__alloyId2491 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2491"
    });
    $.__views.__alloyId2486.add($.__views.__alloyId2491);
    $.__views.__alloyId2492 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2492"
    });
    $.__views.__alloyId2491.add($.__views.__alloyId2492);
    $.__views.__alloyId2493 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2493"
    });
    $.__views.__alloyId2492.add($.__views.__alloyId2493);
    $.__views.__alloyId2494 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2494"
    });
    $.__views.__alloyId2492.add($.__views.__alloyId2494);
    $.__views.__alloyId2495 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2495"
    });
    $.__views.__alloyId2485.add($.__views.__alloyId2495);
    $.__views.__alloyId2496 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2496"
    });
    $.__views.__alloyId2495.add($.__views.__alloyId2496);
    $.__views.__alloyId2497 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2497"
    });
    $.__views.__alloyId2485.add($.__views.__alloyId2497);
    $.__views.__alloyId2498 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2498"
    });
    $.__views.__alloyId2497.add($.__views.__alloyId2498);
    $.__views.__alloyId2499 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2499"
    });
    $.__views.__alloyId2498.add($.__views.__alloyId2499);
    $.__views.__alloyId2500 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2500"
    });
    $.__views.__alloyId2498.add($.__views.__alloyId2500);
    $.__views.__alloyId2501 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2501"
    });
    $.__views.scrollView.add($.__views.__alloyId2501);
    $.__views.__alloyId2502 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2502"
    });
    $.__views.__alloyId2501.add($.__views.__alloyId2502);
    $.__views.__alloyId2503 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2503"
    });
    $.__views.__alloyId2502.add($.__views.__alloyId2503);
    $.__views.__alloyId2504 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2504"
    });
    $.__views.__alloyId2503.add($.__views.__alloyId2504);
    $.__views.__alloyId2505 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2505"
    });
    $.__views.__alloyId2504.add($.__views.__alloyId2505);
    $.__views.__alloyId2506 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2506"
    });
    $.__views.__alloyId2504.add($.__views.__alloyId2506);
    $.__views.__alloyId2507 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2507"
    });
    $.__views.__alloyId2502.add($.__views.__alloyId2507);
    $.__views.__alloyId2508 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2508"
    });
    $.__views.__alloyId2507.add($.__views.__alloyId2508);
    $.__views.__alloyId2509 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2509"
    });
    $.__views.__alloyId2508.add($.__views.__alloyId2509);
    $.__views.__alloyId2510 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2510"
    });
    $.__views.__alloyId2508.add($.__views.__alloyId2510);
    $.__views.__alloyId2511 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2511"
    });
    $.__views.__alloyId2501.add($.__views.__alloyId2511);
    $.__views.__alloyId2512 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2512"
    });
    $.__views.__alloyId2511.add($.__views.__alloyId2512);
    $.__views.__alloyId2513 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2513"
    });
    $.__views.__alloyId2501.add($.__views.__alloyId2513);
    $.__views.__alloyId2514 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2514"
    });
    $.__views.__alloyId2513.add($.__views.__alloyId2514);
    $.__views.__alloyId2515 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2515"
    });
    $.__views.__alloyId2514.add($.__views.__alloyId2515);
    $.__views.__alloyId2516 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2516"
    });
    $.__views.__alloyId2514.add($.__views.__alloyId2516);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;