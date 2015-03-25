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
    $.__views.__alloyId2527 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2527"
    });
    $.__views.scrollView.add($.__views.__alloyId2527);
    $.__views.__alloyId2528 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2528"
    });
    $.__views.__alloyId2527.add($.__views.__alloyId2528);
    $.__views.__alloyId2529 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2529"
    });
    $.__views.__alloyId2528.add($.__views.__alloyId2529);
    $.__views.__alloyId2530 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2530"
    });
    $.__views.__alloyId2529.add($.__views.__alloyId2530);
    $.__views.__alloyId2531 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2531"
    });
    $.__views.__alloyId2530.add($.__views.__alloyId2531);
    $.__views.__alloyId2532 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2532"
    });
    $.__views.__alloyId2530.add($.__views.__alloyId2532);
    $.__views.__alloyId2533 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2533"
    });
    $.__views.__alloyId2528.add($.__views.__alloyId2533);
    $.__views.__alloyId2534 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2534"
    });
    $.__views.__alloyId2533.add($.__views.__alloyId2534);
    $.__views.__alloyId2535 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2535"
    });
    $.__views.__alloyId2534.add($.__views.__alloyId2535);
    $.__views.__alloyId2536 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2536"
    });
    $.__views.__alloyId2534.add($.__views.__alloyId2536);
    $.__views.__alloyId2537 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2537"
    });
    $.__views.__alloyId2527.add($.__views.__alloyId2537);
    $.__views.__alloyId2538 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2538"
    });
    $.__views.__alloyId2537.add($.__views.__alloyId2538);
    $.__views.__alloyId2539 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2539"
    });
    $.__views.__alloyId2527.add($.__views.__alloyId2539);
    $.__views.__alloyId2540 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2540"
    });
    $.__views.__alloyId2539.add($.__views.__alloyId2540);
    $.__views.__alloyId2541 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2541"
    });
    $.__views.__alloyId2540.add($.__views.__alloyId2541);
    $.__views.__alloyId2542 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2542"
    });
    $.__views.__alloyId2540.add($.__views.__alloyId2542);
    $.__views.__alloyId2543 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2543"
    });
    $.__views.scrollView.add($.__views.__alloyId2543);
    $.__views.__alloyId2544 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2544"
    });
    $.__views.__alloyId2543.add($.__views.__alloyId2544);
    $.__views.__alloyId2545 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2545"
    });
    $.__views.__alloyId2544.add($.__views.__alloyId2545);
    $.__views.__alloyId2546 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2546"
    });
    $.__views.__alloyId2545.add($.__views.__alloyId2546);
    $.__views.__alloyId2547 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2547"
    });
    $.__views.__alloyId2546.add($.__views.__alloyId2547);
    $.__views.__alloyId2548 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2548"
    });
    $.__views.__alloyId2546.add($.__views.__alloyId2548);
    $.__views.__alloyId2549 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2549"
    });
    $.__views.__alloyId2544.add($.__views.__alloyId2549);
    $.__views.__alloyId2550 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2550"
    });
    $.__views.__alloyId2549.add($.__views.__alloyId2550);
    $.__views.__alloyId2551 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2551"
    });
    $.__views.__alloyId2550.add($.__views.__alloyId2551);
    $.__views.__alloyId2552 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2552"
    });
    $.__views.__alloyId2550.add($.__views.__alloyId2552);
    $.__views.__alloyId2553 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2553"
    });
    $.__views.__alloyId2543.add($.__views.__alloyId2553);
    $.__views.__alloyId2554 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2554"
    });
    $.__views.__alloyId2553.add($.__views.__alloyId2554);
    $.__views.__alloyId2555 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2555"
    });
    $.__views.__alloyId2543.add($.__views.__alloyId2555);
    $.__views.__alloyId2556 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2556"
    });
    $.__views.__alloyId2555.add($.__views.__alloyId2556);
    $.__views.__alloyId2557 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2557"
    });
    $.__views.__alloyId2556.add($.__views.__alloyId2557);
    $.__views.__alloyId2558 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2558"
    });
    $.__views.__alloyId2556.add($.__views.__alloyId2558);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;