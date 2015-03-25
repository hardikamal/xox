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
    $.__views.__alloyId2579 = Alloy.createController("_header", {
        id: "__alloyId2579",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId2579.setParent($.__views.subline);
    $.__views.__alloyId2580 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2580"
    });
    $.__views.subline.add($.__views.__alloyId2580);
    $.__views.__alloyId2581 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2581"
    });
    $.__views.__alloyId2580.add($.__views.__alloyId2581);
    $.__views.__alloyId2582 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2582"
    });
    $.__views.__alloyId2580.add($.__views.__alloyId2582);
    back ? $.__views.__alloyId2582.addEventListener("click", back) : __defers["$.__views.__alloyId2582!click!back"] = true;
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
    $.__views.__alloyId2583 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2583"
    });
    $.__views.scrollView.add($.__views.__alloyId2583);
    $.__views.__alloyId2584 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2584"
    });
    $.__views.__alloyId2583.add($.__views.__alloyId2584);
    $.__views.__alloyId2585 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2585"
    });
    $.__views.__alloyId2584.add($.__views.__alloyId2585);
    $.__views.__alloyId2586 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2586"
    });
    $.__views.__alloyId2585.add($.__views.__alloyId2586);
    $.__views.__alloyId2587 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2587"
    });
    $.__views.__alloyId2585.add($.__views.__alloyId2587);
    $.__views.__alloyId2588 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2588"
    });
    $.__views.__alloyId2583.add($.__views.__alloyId2588);
    sublineDetails ? $.__views.__alloyId2588.addEventListener("click", sublineDetails) : __defers["$.__views.__alloyId2588!click!sublineDetails"] = true;
    $.__views.__alloyId2589 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2589"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2589);
    $.__views.__alloyId2590 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2590"
    });
    $.__views.__alloyId2583.add($.__views.__alloyId2590);
    setting ? $.__views.__alloyId2590.addEventListener("click", setting) : __defers["$.__views.__alloyId2590!click!setting"] = true;
    $.__views.__alloyId2591 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2591"
    });
    $.__views.__alloyId2590.add($.__views.__alloyId2591);
    $.__views.__alloyId2592 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2592"
    });
    $.__views.__alloyId2583.add($.__views.__alloyId2592);
    $.__views.__alloyId2593 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2593"
    });
    $.__views.__alloyId2592.add($.__views.__alloyId2593);
    $.__views.__alloyId2594 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2594"
    });
    $.__views.scrollView.add($.__views.__alloyId2594);
    $.__views.__alloyId2595 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2595"
    });
    $.__views.scrollView.add($.__views.__alloyId2595);
    $.__views.__alloyId2596 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2596"
    });
    $.__views.__alloyId2595.add($.__views.__alloyId2596);
    $.__views.__alloyId2597 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2597"
    });
    $.__views.__alloyId2596.add($.__views.__alloyId2597);
    $.__views.__alloyId2598 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2598"
    });
    $.__views.__alloyId2597.add($.__views.__alloyId2598);
    $.__views.__alloyId2599 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2599"
    });
    $.__views.__alloyId2597.add($.__views.__alloyId2599);
    $.__views.__alloyId2600 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2600"
    });
    $.__views.__alloyId2595.add($.__views.__alloyId2600);
    $.__views.__alloyId2601 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2601"
    });
    $.__views.__alloyId2600.add($.__views.__alloyId2601);
    $.__views.__alloyId2602 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2602"
    });
    $.__views.__alloyId2595.add($.__views.__alloyId2602);
    $.__views.__alloyId2603 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2603"
    });
    $.__views.__alloyId2602.add($.__views.__alloyId2603);
    $.__views.__alloyId2604 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2604"
    });
    $.__views.__alloyId2595.add($.__views.__alloyId2604);
    $.__views.__alloyId2605 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2605"
    });
    $.__views.__alloyId2604.add($.__views.__alloyId2605);
    $.__views.__alloyId2606 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2606"
    });
    $.__views.scrollView.add($.__views.__alloyId2606);
    $.__views.__alloyId2607 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2607"
    });
    $.__views.scrollView.add($.__views.__alloyId2607);
    $.__views.__alloyId2608 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2608"
    });
    $.__views.__alloyId2607.add($.__views.__alloyId2608);
    $.__views.__alloyId2609 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2609"
    });
    $.__views.__alloyId2608.add($.__views.__alloyId2609);
    $.__views.__alloyId2610 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2610"
    });
    $.__views.__alloyId2609.add($.__views.__alloyId2610);
    $.__views.__alloyId2611 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2611"
    });
    $.__views.__alloyId2609.add($.__views.__alloyId2611);
    $.__views.__alloyId2612 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2612"
    });
    $.__views.__alloyId2607.add($.__views.__alloyId2612);
    $.__views.__alloyId2613 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2613"
    });
    $.__views.__alloyId2612.add($.__views.__alloyId2613);
    $.__views.__alloyId2614 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2614"
    });
    $.__views.__alloyId2607.add($.__views.__alloyId2614);
    $.__views.__alloyId2615 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2615"
    });
    $.__views.__alloyId2614.add($.__views.__alloyId2615);
    $.__views.__alloyId2616 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2616"
    });
    $.__views.__alloyId2607.add($.__views.__alloyId2616);
    $.__views.__alloyId2617 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2617"
    });
    $.__views.__alloyId2616.add($.__views.__alloyId2617);
    $.__views.__alloyId2618 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2618"
    });
    $.__views.scrollView.add($.__views.__alloyId2618);
    $.__views.__alloyId2619 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2619"
    });
    $.__views.scrollView.add($.__views.__alloyId2619);
    $.__views.__alloyId2620 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2620"
    });
    $.__views.__alloyId2619.add($.__views.__alloyId2620);
    $.__views.__alloyId2621 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2621"
    });
    $.__views.__alloyId2620.add($.__views.__alloyId2621);
    $.__views.__alloyId2622 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2622"
    });
    $.__views.__alloyId2621.add($.__views.__alloyId2622);
    $.__views.__alloyId2623 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2623"
    });
    $.__views.__alloyId2621.add($.__views.__alloyId2623);
    $.__views.__alloyId2624 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2624"
    });
    $.__views.__alloyId2619.add($.__views.__alloyId2624);
    $.__views.__alloyId2625 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2625"
    });
    $.__views.__alloyId2624.add($.__views.__alloyId2625);
    $.__views.__alloyId2626 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2626"
    });
    $.__views.__alloyId2619.add($.__views.__alloyId2626);
    $.__views.__alloyId2627 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2627"
    });
    $.__views.__alloyId2626.add($.__views.__alloyId2627);
    $.__views.__alloyId2628 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2628"
    });
    $.__views.__alloyId2619.add($.__views.__alloyId2628);
    $.__views.__alloyId2629 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2629"
    });
    $.__views.__alloyId2628.add($.__views.__alloyId2629);
    $.__views.__alloyId2630 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2630"
    });
    $.__views.scrollView.add($.__views.__alloyId2630);
    $.__views.__alloyId2631 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2631"
    });
    $.__views.scrollView.add($.__views.__alloyId2631);
    $.__views.__alloyId2632 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2632"
    });
    $.__views.__alloyId2631.add($.__views.__alloyId2632);
    $.__views.__alloyId2633 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2633"
    });
    $.__views.__alloyId2632.add($.__views.__alloyId2633);
    $.__views.__alloyId2634 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2634"
    });
    $.__views.__alloyId2633.add($.__views.__alloyId2634);
    $.__views.__alloyId2635 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2635"
    });
    $.__views.__alloyId2633.add($.__views.__alloyId2635);
    $.__views.__alloyId2636 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2636"
    });
    $.__views.__alloyId2631.add($.__views.__alloyId2636);
    $.__views.__alloyId2637 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2637"
    });
    $.__views.__alloyId2636.add($.__views.__alloyId2637);
    $.__views.__alloyId2638 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2638"
    });
    $.__views.__alloyId2631.add($.__views.__alloyId2638);
    $.__views.__alloyId2639 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2639"
    });
    $.__views.__alloyId2638.add($.__views.__alloyId2639);
    $.__views.__alloyId2640 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2640"
    });
    $.__views.__alloyId2631.add($.__views.__alloyId2640);
    $.__views.__alloyId2641 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2641"
    });
    $.__views.__alloyId2640.add($.__views.__alloyId2641);
    $.__views.__alloyId2642 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2642"
    });
    $.__views.scrollView.add($.__views.__alloyId2642);
    $.__views.__alloyId2643 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2643"
    });
    $.__views.scrollView.add($.__views.__alloyId2643);
    $.__views.__alloyId2644 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2644"
    });
    $.__views.__alloyId2643.add($.__views.__alloyId2644);
    $.__views.__alloyId2645 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2645"
    });
    $.__views.__alloyId2644.add($.__views.__alloyId2645);
    $.__views.__alloyId2646 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2646"
    });
    $.__views.__alloyId2645.add($.__views.__alloyId2646);
    $.__views.__alloyId2647 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2647"
    });
    $.__views.__alloyId2645.add($.__views.__alloyId2647);
    $.__views.__alloyId2648 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2648"
    });
    $.__views.__alloyId2643.add($.__views.__alloyId2648);
    $.__views.__alloyId2649 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2649"
    });
    $.__views.__alloyId2648.add($.__views.__alloyId2649);
    $.__views.__alloyId2650 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2650"
    });
    $.__views.__alloyId2643.add($.__views.__alloyId2650);
    $.__views.__alloyId2651 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2651"
    });
    $.__views.__alloyId2650.add($.__views.__alloyId2651);
    $.__views.__alloyId2652 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2652"
    });
    $.__views.__alloyId2643.add($.__views.__alloyId2652);
    $.__views.__alloyId2653 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2653"
    });
    $.__views.__alloyId2652.add($.__views.__alloyId2653);
    $.__views.__alloyId2654 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId2654"
    });
    $.__views.scrollView.add($.__views.__alloyId2654);
    $.__views.__alloyId2655 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId2655"
    });
    $.__views.subline.add($.__views.__alloyId2655);
    addNumber ? $.__views.__alloyId2655.addEventListener("click", addNumber) : __defers["$.__views.__alloyId2655!click!addNumber"] = true;
    $.__views.__alloyId2656 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId2656"
    });
    $.__views.__alloyId2655.add($.__views.__alloyId2656);
    $.__views.__alloyId2657 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId2657"
    });
    $.__views.__alloyId2656.add($.__views.__alloyId2657);
    $.__views.__alloyId2658 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId2658"
    });
    $.__views.__alloyId2656.add($.__views.__alloyId2658);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    $.scrollView.children.length > 1 && $.scrollView.remove($.empty);
    console.log("num of child: " + $.scrollView.children.length);
    __defers["$.__views.__alloyId2582!click!back"] && $.__views.__alloyId2582.addEventListener("click", back);
    __defers["$.__views.__alloyId2588!click!sublineDetails"] && $.__views.__alloyId2588.addEventListener("click", sublineDetails);
    __defers["$.__views.__alloyId2590!click!setting"] && $.__views.__alloyId2590.addEventListener("click", setting);
    __defers["$.__views.__alloyId2655!click!addNumber"] && $.__views.__alloyId2655.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;