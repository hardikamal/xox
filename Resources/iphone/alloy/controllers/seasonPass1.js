function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function checkout(e) {
        console.log("e.source.mod: " + e.source.mod);
        Ti.App.Properties.setString("seasonPass", e.source.mod);
        DRAWER.navigation("seasonPassCheckout1", 1);
    }
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
    var __defers = {};
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.__alloyId2421 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        mod: "1",
        id: "__alloyId2421"
    });
    $.__views.scrollView.add($.__views.__alloyId2421);
    checkout ? $.__views.__alloyId2421.addEventListener("click", checkout) : __defers["$.__views.__alloyId2421!click!checkout"] = true;
    $.__views.__alloyId2422 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        mod: "1",
        id: "__alloyId2422"
    });
    $.__views.__alloyId2421.add($.__views.__alloyId2422);
    $.__views.__alloyId2423 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "1",
        id: "__alloyId2423"
    });
    $.__views.__alloyId2422.add($.__views.__alloyId2423);
    $.__views.__alloyId2424 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
        id: "__alloyId2424"
    });
    $.__views.__alloyId2423.add($.__views.__alloyId2424);
    $.__views.__alloyId2425 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        mod: "1",
        id: "__alloyId2425"
    });
    $.__views.__alloyId2424.add($.__views.__alloyId2425);
    $.__views.__alloyId2426 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        mod: "1",
        id: "__alloyId2426"
    });
    $.__views.__alloyId2424.add($.__views.__alloyId2426);
    $.__views.__alloyId2427 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "1",
        id: "__alloyId2427"
    });
    $.__views.__alloyId2422.add($.__views.__alloyId2427);
    $.__views.__alloyId2428 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        mod: "1",
        id: "__alloyId2428"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2428);
    $.__views.__alloyId2429 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "1",
        id: "__alloyId2429"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2429);
    $.__views.__alloyId2430 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "1",
        id: "__alloyId2430"
    });
    $.__views.__alloyId2428.add($.__views.__alloyId2430);
    $.__views.__alloyId2431 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        mod: "1",
        id: "__alloyId2431"
    });
    $.__views.__alloyId2421.add($.__views.__alloyId2431);
    $.__views.__alloyId2432 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        mod: "1",
        id: "__alloyId2432"
    });
    $.__views.__alloyId2431.add($.__views.__alloyId2432);
    $.__views.__alloyId2433 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        mod: "1",
        id: "__alloyId2433"
    });
    $.__views.__alloyId2421.add($.__views.__alloyId2433);
    $.__views.__alloyId2434 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
        id: "__alloyId2434"
    });
    $.__views.__alloyId2433.add($.__views.__alloyId2434);
    $.__views.__alloyId2435 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "1",
        id: "__alloyId2435"
    });
    $.__views.__alloyId2434.add($.__views.__alloyId2435);
    $.__views.__alloyId2436 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "1",
        id: "__alloyId2436"
    });
    $.__views.__alloyId2434.add($.__views.__alloyId2436);
    $.__views.__alloyId2437 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        mod: "2",
        id: "__alloyId2437"
    });
    $.__views.scrollView.add($.__views.__alloyId2437);
    checkout ? $.__views.__alloyId2437.addEventListener("click", checkout) : __defers["$.__views.__alloyId2437!click!checkout"] = true;
    $.__views.__alloyId2438 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        mod: "2",
        id: "__alloyId2438"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2438);
    $.__views.__alloyId2439 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "2",
        id: "__alloyId2439"
    });
    $.__views.__alloyId2438.add($.__views.__alloyId2439);
    $.__views.__alloyId2440 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
        id: "__alloyId2440"
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2440);
    $.__views.__alloyId2441 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        mod: "2",
        id: "__alloyId2441"
    });
    $.__views.__alloyId2440.add($.__views.__alloyId2441);
    $.__views.__alloyId2442 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        mod: "2",
        id: "__alloyId2442"
    });
    $.__views.__alloyId2440.add($.__views.__alloyId2442);
    $.__views.__alloyId2443 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "2",
        id: "__alloyId2443"
    });
    $.__views.__alloyId2438.add($.__views.__alloyId2443);
    $.__views.__alloyId2444 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        mod: "2",
        id: "__alloyId2444"
    });
    $.__views.__alloyId2443.add($.__views.__alloyId2444);
    $.__views.__alloyId2445 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "2",
        id: "__alloyId2445"
    });
    $.__views.__alloyId2444.add($.__views.__alloyId2445);
    $.__views.__alloyId2446 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "2",
        id: "__alloyId2446"
    });
    $.__views.__alloyId2444.add($.__views.__alloyId2446);
    $.__views.__alloyId2447 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        mod: "2",
        id: "__alloyId2447"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2447);
    $.__views.__alloyId2448 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        mod: "2",
        id: "__alloyId2448"
    });
    $.__views.__alloyId2447.add($.__views.__alloyId2448);
    $.__views.__alloyId2449 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        mod: "2",
        id: "__alloyId2449"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2449);
    $.__views.__alloyId2450 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
        id: "__alloyId2450"
    });
    $.__views.__alloyId2449.add($.__views.__alloyId2450);
    $.__views.__alloyId2451 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "2",
        id: "__alloyId2451"
    });
    $.__views.__alloyId2450.add($.__views.__alloyId2451);
    $.__views.__alloyId2452 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "2",
        id: "__alloyId2452"
    });
    $.__views.__alloyId2450.add($.__views.__alloyId2452);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2421!click!checkout"] && $.__views.__alloyId2421.addEventListener("click", checkout);
    __defers["$.__views.__alloyId2437!click!checkout"] && $.__views.__alloyId2437.addEventListener("click", checkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;