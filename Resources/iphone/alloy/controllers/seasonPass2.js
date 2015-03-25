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
    $.__views.__alloyId2453 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2453"
    });
    $.__views.scrollView.add($.__views.__alloyId2453);
    $.__views.__alloyId2454 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2454"
    });
    $.__views.__alloyId2453.add($.__views.__alloyId2454);
    $.__views.__alloyId2455 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2455"
    });
    $.__views.__alloyId2454.add($.__views.__alloyId2455);
    $.__views.__alloyId2456 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2456"
    });
    $.__views.__alloyId2455.add($.__views.__alloyId2456);
    $.__views.__alloyId2457 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2457"
    });
    $.__views.__alloyId2456.add($.__views.__alloyId2457);
    $.__views.__alloyId2458 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2458"
    });
    $.__views.__alloyId2456.add($.__views.__alloyId2458);
    $.__views.__alloyId2459 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2459"
    });
    $.__views.__alloyId2454.add($.__views.__alloyId2459);
    $.__views.__alloyId2460 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2460"
    });
    $.__views.__alloyId2459.add($.__views.__alloyId2460);
    $.__views.__alloyId2461 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2461"
    });
    $.__views.__alloyId2460.add($.__views.__alloyId2461);
    $.__views.__alloyId2462 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2462"
    });
    $.__views.__alloyId2460.add($.__views.__alloyId2462);
    $.__views.__alloyId2463 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2463"
    });
    $.__views.__alloyId2453.add($.__views.__alloyId2463);
    $.__views.__alloyId2464 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2464"
    });
    $.__views.__alloyId2463.add($.__views.__alloyId2464);
    $.__views.__alloyId2465 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2465"
    });
    $.__views.__alloyId2453.add($.__views.__alloyId2465);
    $.__views.__alloyId2466 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2466"
    });
    $.__views.__alloyId2465.add($.__views.__alloyId2466);
    $.__views.__alloyId2467 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2467"
    });
    $.__views.__alloyId2466.add($.__views.__alloyId2467);
    $.__views.__alloyId2468 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2468"
    });
    $.__views.__alloyId2466.add($.__views.__alloyId2468);
    $.__views.__alloyId2469 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2469"
    });
    $.__views.scrollView.add($.__views.__alloyId2469);
    $.__views.__alloyId2470 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2470"
    });
    $.__views.__alloyId2469.add($.__views.__alloyId2470);
    $.__views.__alloyId2471 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2471"
    });
    $.__views.__alloyId2470.add($.__views.__alloyId2471);
    $.__views.__alloyId2472 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2472"
    });
    $.__views.__alloyId2471.add($.__views.__alloyId2472);
    $.__views.__alloyId2473 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2473"
    });
    $.__views.__alloyId2472.add($.__views.__alloyId2473);
    $.__views.__alloyId2474 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2474"
    });
    $.__views.__alloyId2472.add($.__views.__alloyId2474);
    $.__views.__alloyId2475 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2475"
    });
    $.__views.__alloyId2470.add($.__views.__alloyId2475);
    $.__views.__alloyId2476 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2476"
    });
    $.__views.__alloyId2475.add($.__views.__alloyId2476);
    $.__views.__alloyId2477 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2477"
    });
    $.__views.__alloyId2476.add($.__views.__alloyId2477);
    $.__views.__alloyId2478 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2478"
    });
    $.__views.__alloyId2476.add($.__views.__alloyId2478);
    $.__views.__alloyId2479 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2479"
    });
    $.__views.__alloyId2469.add($.__views.__alloyId2479);
    $.__views.__alloyId2480 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2480"
    });
    $.__views.__alloyId2479.add($.__views.__alloyId2480);
    $.__views.__alloyId2481 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2481"
    });
    $.__views.__alloyId2469.add($.__views.__alloyId2481);
    $.__views.__alloyId2482 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2482"
    });
    $.__views.__alloyId2481.add($.__views.__alloyId2482);
    $.__views.__alloyId2483 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2483"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2483);
    $.__views.__alloyId2484 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2484"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2484);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;