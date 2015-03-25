function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function back() {
        "prepaid" == Alloy.Globals.userPlan ? DRAWER.navigation("prepaidStatement", 1) : DRAWER.navigation("postpaidStatement", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "roamingCalls";
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
    $.__views.roamingCalls = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "roamingCalls"
    });
    $.__views.roamingCalls && $.addTopLevelView($.__views.roamingCalls);
    $.__views.__alloyId2393 = Alloy.createController("_header", {
        id: "__alloyId2393",
        __parentSymbol: $.__views.roamingCalls
    });
    $.__views.__alloyId2393.setParent($.__views.roamingCalls);
    $.__views.__alloyId2394 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2394"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2394);
    $.__views.__alloyId2395 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2395"
    });
    $.__views.__alloyId2394.add($.__views.__alloyId2395);
    $.__views.__alloyId2396 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2396"
    });
    $.__views.__alloyId2394.add($.__views.__alloyId2396);
    back ? $.__views.__alloyId2396.addEventListener("click", back) : __defers["$.__views.__alloyId2396!click!back"] = true;
    $.__views.__alloyId2397 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2397"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2397);
    $.__views.__alloyId2398 = Ti.UI.createLabel({
        text: "Roaming Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId2398"
    });
    $.__views.__alloyId2397.add($.__views.__alloyId2398);
    var __alloyId2399 = [];
    $.__views.__alloyId2400 = Ti.UI.createTableViewSection({
        id: "__alloyId2400"
    });
    __alloyId2399.push($.__views.__alloyId2400);
    $.__views.__alloyId2401 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2401"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2401);
    $.__views.__alloyId2402 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2402"
    });
    $.__views.__alloyId2401.add($.__views.__alloyId2402);
    $.__views.__alloyId2403 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2403"
    });
    $.__views.__alloyId2402.add($.__views.__alloyId2403);
    $.__views.__alloyId2404 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2404"
    });
    $.__views.__alloyId2401.add($.__views.__alloyId2404);
    $.__views.__alloyId2405 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2405"
    });
    $.__views.__alloyId2404.add($.__views.__alloyId2405);
    $.__views.__alloyId2406 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2406"
    });
    $.__views.__alloyId2401.add($.__views.__alloyId2406);
    $.__views.__alloyId2407 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2407"
    });
    $.__views.__alloyId2406.add($.__views.__alloyId2407);
    $.__views.__alloyId2408 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2408"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2408);
    $.__views.__alloyId2409 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2409"
    });
    $.__views.__alloyId2408.add($.__views.__alloyId2409);
    $.__views.__alloyId2410 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2410"
    });
    $.__views.__alloyId2409.add($.__views.__alloyId2410);
    $.__views.__alloyId2411 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2411"
    });
    $.__views.__alloyId2408.add($.__views.__alloyId2411);
    $.__views.__alloyId2412 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2412"
    });
    $.__views.__alloyId2411.add($.__views.__alloyId2412);
    $.__views.__alloyId2413 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2413"
    });
    $.__views.__alloyId2408.add($.__views.__alloyId2413);
    $.__views.__alloyId2414 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2414"
    });
    $.__views.__alloyId2413.add($.__views.__alloyId2414);
    $.__views.__alloyId2415 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2415"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2415);
    $.__views.__alloyId2416 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2416"
    });
    $.__views.__alloyId2415.add($.__views.__alloyId2416);
    $.__views.__alloyId2417 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2417"
    });
    $.__views.__alloyId2416.add($.__views.__alloyId2417);
    $.__views.__alloyId2418 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2418"
    });
    $.__views.__alloyId2415.add($.__views.__alloyId2418);
    $.__views.__alloyId2419 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2419"
    });
    $.__views.__alloyId2418.add($.__views.__alloyId2419);
    $.__views.__alloyId2420 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2420"
    });
    $.__views.__alloyId2415.add($.__views.__alloyId2420);
    $.__views.__alloyId2421 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2421"
    });
    $.__views.__alloyId2420.add($.__views.__alloyId2421);
    $.__views.__alloyId2422 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2422"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2422);
    $.__views.__alloyId2423 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2423"
    });
    $.__views.__alloyId2422.add($.__views.__alloyId2423);
    $.__views.__alloyId2424 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2424"
    });
    $.__views.__alloyId2423.add($.__views.__alloyId2424);
    $.__views.__alloyId2425 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2425"
    });
    $.__views.__alloyId2422.add($.__views.__alloyId2425);
    $.__views.__alloyId2426 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2426"
    });
    $.__views.__alloyId2425.add($.__views.__alloyId2426);
    $.__views.__alloyId2427 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2427"
    });
    $.__views.__alloyId2422.add($.__views.__alloyId2427);
    $.__views.__alloyId2428 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2428"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2428);
    $.__views.__alloyId2429 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2429"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2429);
    $.__views.__alloyId2430 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2430"
    });
    $.__views.__alloyId2429.add($.__views.__alloyId2430);
    $.__views.__alloyId2431 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2431"
    });
    $.__views.__alloyId2430.add($.__views.__alloyId2431);
    $.__views.__alloyId2432 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2432"
    });
    $.__views.__alloyId2429.add($.__views.__alloyId2432);
    $.__views.__alloyId2433 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2433"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2433);
    $.__views.__alloyId2434 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2434"
    });
    $.__views.__alloyId2429.add($.__views.__alloyId2434);
    $.__views.__alloyId2435 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2435"
    });
    $.__views.__alloyId2434.add($.__views.__alloyId2435);
    $.__views.__alloyId2436 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2436"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2436);
    $.__views.__alloyId2437 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2437"
    });
    $.__views.__alloyId2436.add($.__views.__alloyId2437);
    $.__views.__alloyId2438 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2438"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2438);
    $.__views.__alloyId2439 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2439"
    });
    $.__views.__alloyId2436.add($.__views.__alloyId2439);
    $.__views.__alloyId2440 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2440"
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2440);
    $.__views.__alloyId2441 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2441"
    });
    $.__views.__alloyId2436.add($.__views.__alloyId2441);
    $.__views.__alloyId2442 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2442"
    });
    $.__views.__alloyId2441.add($.__views.__alloyId2442);
    $.__views.__alloyId2443 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2443"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2443);
    $.__views.__alloyId2444 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2444"
    });
    $.__views.__alloyId2443.add($.__views.__alloyId2444);
    $.__views.__alloyId2445 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2445"
    });
    $.__views.__alloyId2444.add($.__views.__alloyId2445);
    $.__views.__alloyId2446 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2446"
    });
    $.__views.__alloyId2443.add($.__views.__alloyId2446);
    $.__views.__alloyId2447 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2447"
    });
    $.__views.__alloyId2446.add($.__views.__alloyId2447);
    $.__views.__alloyId2448 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2448"
    });
    $.__views.__alloyId2443.add($.__views.__alloyId2448);
    $.__views.__alloyId2449 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2449"
    });
    $.__views.__alloyId2448.add($.__views.__alloyId2449);
    $.__views.__alloyId2450 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2450"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2450);
    $.__views.__alloyId2451 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2451"
    });
    $.__views.__alloyId2450.add($.__views.__alloyId2451);
    $.__views.__alloyId2452 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2452"
    });
    $.__views.__alloyId2451.add($.__views.__alloyId2452);
    $.__views.__alloyId2453 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2453"
    });
    $.__views.__alloyId2450.add($.__views.__alloyId2453);
    $.__views.__alloyId2454 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2454"
    });
    $.__views.__alloyId2453.add($.__views.__alloyId2454);
    $.__views.__alloyId2455 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2455"
    });
    $.__views.__alloyId2450.add($.__views.__alloyId2455);
    $.__views.__alloyId2456 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2456"
    });
    $.__views.__alloyId2455.add($.__views.__alloyId2456);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2399,
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingCalls.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2396!click!back"] && $.__views.__alloyId2396.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;