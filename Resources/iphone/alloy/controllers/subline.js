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
        DRAWER.navigation("myAccount", 1);
    }
    function addNumber() {
        console.log("addNumber");
        DRAWER.navigation("subline2", 1);
    }
    function setting() {
        DRAWER.navigation("subline4", 1);
    }
    function sublineDetails() {
        DRAWER.navigation("subline3", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline";
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
    $.__views.subline = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline"
    });
    $.__views.subline && $.addTopLevelView($.__views.subline);
    $.__views.__alloyId2515 = Alloy.createController("_header", {
        id: "__alloyId2515",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId2515.setParent($.__views.subline);
    $.__views.__alloyId2516 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2516"
    });
    $.__views.subline.add($.__views.__alloyId2516);
    $.__views.__alloyId2517 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2517"
    });
    $.__views.__alloyId2516.add($.__views.__alloyId2517);
    $.__views.__alloyId2518 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2518"
    });
    $.__views.__alloyId2516.add($.__views.__alloyId2518);
    back ? $.__views.__alloyId2518.addEventListener("click", back) : __defers["$.__views.__alloyId2518!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
    $.__views.empty = Ti.UI.createLabel({
        text: "Currently no Subline",
        id: "empty",
        color: "black"
    });
    $.__views.scrollView.add($.__views.empty);
    $.__views.__alloyId2519 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2519"
    });
    $.__views.scrollView.add($.__views.__alloyId2519);
    $.__views.__alloyId2520 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2520"
    });
    $.__views.__alloyId2519.add($.__views.__alloyId2520);
    $.__views.__alloyId2521 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2521"
    });
    $.__views.__alloyId2520.add($.__views.__alloyId2521);
    $.__views.__alloyId2522 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2522"
    });
    $.__views.__alloyId2521.add($.__views.__alloyId2522);
    $.__views.__alloyId2523 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2523"
    });
    $.__views.__alloyId2521.add($.__views.__alloyId2523);
    $.__views.__alloyId2524 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2524"
    });
    $.__views.__alloyId2519.add($.__views.__alloyId2524);
    sublineDetails ? $.__views.__alloyId2524.addEventListener("click", sublineDetails) : __defers["$.__views.__alloyId2524!click!sublineDetails"] = true;
    $.__views.__alloyId2525 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2525"
    });
    $.__views.__alloyId2524.add($.__views.__alloyId2525);
    $.__views.__alloyId2526 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2526"
    });
    $.__views.__alloyId2519.add($.__views.__alloyId2526);
    setting ? $.__views.__alloyId2526.addEventListener("click", setting) : __defers["$.__views.__alloyId2526!click!setting"] = true;
    $.__views.__alloyId2527 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2527"
    });
    $.__views.__alloyId2526.add($.__views.__alloyId2527);
    $.__views.__alloyId2528 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2528"
    });
    $.__views.__alloyId2519.add($.__views.__alloyId2528);
    $.__views.__alloyId2529 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2529"
    });
    $.__views.__alloyId2528.add($.__views.__alloyId2529);
    $.__views.__alloyId2530 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2530"
    });
    $.__views.scrollView.add($.__views.__alloyId2530);
    $.__views.__alloyId2531 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2531"
    });
    $.__views.scrollView.add($.__views.__alloyId2531);
    $.__views.__alloyId2532 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2532"
    });
    $.__views.__alloyId2531.add($.__views.__alloyId2532);
    $.__views.__alloyId2533 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2533"
    });
    $.__views.__alloyId2532.add($.__views.__alloyId2533);
    $.__views.__alloyId2534 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2534"
    });
    $.__views.__alloyId2533.add($.__views.__alloyId2534);
    $.__views.__alloyId2535 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2535"
    });
    $.__views.__alloyId2533.add($.__views.__alloyId2535);
    $.__views.__alloyId2536 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2536"
    });
    $.__views.__alloyId2531.add($.__views.__alloyId2536);
    $.__views.__alloyId2537 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2537"
    });
    $.__views.__alloyId2536.add($.__views.__alloyId2537);
    $.__views.__alloyId2538 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2538"
    });
    $.__views.__alloyId2531.add($.__views.__alloyId2538);
    $.__views.__alloyId2539 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2539"
    });
    $.__views.__alloyId2538.add($.__views.__alloyId2539);
    $.__views.__alloyId2540 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2540"
    });
    $.__views.__alloyId2531.add($.__views.__alloyId2540);
    $.__views.__alloyId2541 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2541"
    });
    $.__views.__alloyId2540.add($.__views.__alloyId2541);
    $.__views.__alloyId2542 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2542"
    });
    $.__views.scrollView.add($.__views.__alloyId2542);
    $.__views.__alloyId2543 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2543"
    });
    $.__views.scrollView.add($.__views.__alloyId2543);
    $.__views.__alloyId2544 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2544"
    });
    $.__views.__alloyId2543.add($.__views.__alloyId2544);
    $.__views.__alloyId2545 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2545"
    });
    $.__views.__alloyId2544.add($.__views.__alloyId2545);
    $.__views.__alloyId2546 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2546"
    });
    $.__views.__alloyId2545.add($.__views.__alloyId2546);
    $.__views.__alloyId2547 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2547"
    });
    $.__views.__alloyId2545.add($.__views.__alloyId2547);
    $.__views.__alloyId2548 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2548"
    });
    $.__views.__alloyId2543.add($.__views.__alloyId2548);
    $.__views.__alloyId2549 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2549"
    });
    $.__views.__alloyId2548.add($.__views.__alloyId2549);
    $.__views.__alloyId2550 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2550"
    });
    $.__views.__alloyId2543.add($.__views.__alloyId2550);
    $.__views.__alloyId2551 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2551"
    });
    $.__views.__alloyId2550.add($.__views.__alloyId2551);
    $.__views.__alloyId2552 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2552"
    });
    $.__views.__alloyId2543.add($.__views.__alloyId2552);
    $.__views.__alloyId2553 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2553"
    });
    $.__views.__alloyId2552.add($.__views.__alloyId2553);
    $.__views.__alloyId2554 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2554"
    });
    $.__views.scrollView.add($.__views.__alloyId2554);
    $.__views.__alloyId2555 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2555"
    });
    $.__views.scrollView.add($.__views.__alloyId2555);
    $.__views.__alloyId2556 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2556"
    });
    $.__views.__alloyId2555.add($.__views.__alloyId2556);
    $.__views.__alloyId2557 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2557"
    });
    $.__views.__alloyId2556.add($.__views.__alloyId2557);
    $.__views.__alloyId2558 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2558"
    });
    $.__views.__alloyId2557.add($.__views.__alloyId2558);
    $.__views.__alloyId2559 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2559"
    });
    $.__views.__alloyId2557.add($.__views.__alloyId2559);
    $.__views.__alloyId2560 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2560"
    });
    $.__views.__alloyId2555.add($.__views.__alloyId2560);
    $.__views.__alloyId2561 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2561"
    });
    $.__views.__alloyId2560.add($.__views.__alloyId2561);
    $.__views.__alloyId2562 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2562"
    });
    $.__views.__alloyId2555.add($.__views.__alloyId2562);
    $.__views.__alloyId2563 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2563"
    });
    $.__views.__alloyId2562.add($.__views.__alloyId2563);
    $.__views.__alloyId2564 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2564"
    });
    $.__views.__alloyId2555.add($.__views.__alloyId2564);
    $.__views.__alloyId2565 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2565"
    });
    $.__views.__alloyId2564.add($.__views.__alloyId2565);
    $.__views.__alloyId2566 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2566"
    });
    $.__views.scrollView.add($.__views.__alloyId2566);
    $.__views.__alloyId2567 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2567"
    });
    $.__views.scrollView.add($.__views.__alloyId2567);
    $.__views.__alloyId2568 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2568"
    });
    $.__views.__alloyId2567.add($.__views.__alloyId2568);
    $.__views.__alloyId2569 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2569"
    });
    $.__views.__alloyId2568.add($.__views.__alloyId2569);
    $.__views.__alloyId2570 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2570"
    });
    $.__views.__alloyId2569.add($.__views.__alloyId2570);
    $.__views.__alloyId2571 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2571"
    });
    $.__views.__alloyId2569.add($.__views.__alloyId2571);
    $.__views.__alloyId2572 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2572"
    });
    $.__views.__alloyId2567.add($.__views.__alloyId2572);
    $.__views.__alloyId2573 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2573"
    });
    $.__views.__alloyId2572.add($.__views.__alloyId2573);
    $.__views.__alloyId2574 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2574"
    });
    $.__views.__alloyId2567.add($.__views.__alloyId2574);
    $.__views.__alloyId2575 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2575"
    });
    $.__views.__alloyId2574.add($.__views.__alloyId2575);
    $.__views.__alloyId2576 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2576"
    });
    $.__views.__alloyId2567.add($.__views.__alloyId2576);
    $.__views.__alloyId2577 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2577"
    });
    $.__views.__alloyId2576.add($.__views.__alloyId2577);
    $.__views.__alloyId2578 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2578"
    });
    $.__views.scrollView.add($.__views.__alloyId2578);
    $.__views.__alloyId2579 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2579"
    });
    $.__views.scrollView.add($.__views.__alloyId2579);
    $.__views.__alloyId2580 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2580"
    });
    $.__views.__alloyId2579.add($.__views.__alloyId2580);
    $.__views.__alloyId2581 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2581"
    });
    $.__views.__alloyId2580.add($.__views.__alloyId2581);
    $.__views.__alloyId2582 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2582"
    });
    $.__views.__alloyId2581.add($.__views.__alloyId2582);
    $.__views.__alloyId2583 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2583"
    });
    $.__views.__alloyId2581.add($.__views.__alloyId2583);
    $.__views.__alloyId2584 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2584"
    });
    $.__views.__alloyId2579.add($.__views.__alloyId2584);
    $.__views.__alloyId2585 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2585"
    });
    $.__views.__alloyId2584.add($.__views.__alloyId2585);
    $.__views.__alloyId2586 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2586"
    });
    $.__views.__alloyId2579.add($.__views.__alloyId2586);
    $.__views.__alloyId2587 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2587"
    });
    $.__views.__alloyId2586.add($.__views.__alloyId2587);
    $.__views.__alloyId2588 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2588"
    });
    $.__views.__alloyId2579.add($.__views.__alloyId2588);
    $.__views.__alloyId2589 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2589"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2589);
    $.__views.__alloyId2590 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId2590"
    });
    $.__views.scrollView.add($.__views.__alloyId2590);
    $.__views.__alloyId2591 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId2591"
    });
    $.__views.subline.add($.__views.__alloyId2591);
    addNumber ? $.__views.__alloyId2591.addEventListener("click", addNumber) : __defers["$.__views.__alloyId2591!click!addNumber"] = true;
    $.__views.__alloyId2592 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId2592"
    });
    $.__views.__alloyId2591.add($.__views.__alloyId2592);
    $.__views.__alloyId2593 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId2593"
    });
    $.__views.__alloyId2592.add($.__views.__alloyId2593);
    $.__views.__alloyId2594 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId2594"
    });
    $.__views.__alloyId2592.add($.__views.__alloyId2594);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    $.scrollView.children.length > 1 && $.scrollView.remove($.empty);
    console.log("num of child: " + $.scrollView.children.length);
    __defers["$.__views.__alloyId2518!click!back"] && $.__views.__alloyId2518.addEventListener("click", back);
    __defers["$.__views.__alloyId2524!click!sublineDetails"] && $.__views.__alloyId2524.addEventListener("click", sublineDetails);
    __defers["$.__views.__alloyId2526!click!setting"] && $.__views.__alloyId2526.addEventListener("click", setting);
    __defers["$.__views.__alloyId2591!click!addNumber"] && $.__views.__alloyId2591.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;