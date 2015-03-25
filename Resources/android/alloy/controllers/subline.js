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
    $.__views.__alloyId2657 = Alloy.createController("_header", {
        id: "__alloyId2657",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId2657.setParent($.__views.subline);
    $.__views.__alloyId2658 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2658"
    });
    $.__views.subline.add($.__views.__alloyId2658);
    $.__views.__alloyId2659 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2659"
    });
    $.__views.__alloyId2658.add($.__views.__alloyId2659);
    $.__views.__alloyId2660 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2660"
    });
    $.__views.__alloyId2658.add($.__views.__alloyId2660);
    back ? $.__views.__alloyId2660.addEventListener("click", back) : __defers["$.__views.__alloyId2660!click!back"] = true;
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
    $.__views.__alloyId2661 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2661"
    });
    $.__views.scrollView.add($.__views.__alloyId2661);
    $.__views.__alloyId2662 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2662"
    });
    $.__views.__alloyId2661.add($.__views.__alloyId2662);
    $.__views.__alloyId2663 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2663"
    });
    $.__views.__alloyId2662.add($.__views.__alloyId2663);
    $.__views.__alloyId2664 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2664"
    });
    $.__views.__alloyId2663.add($.__views.__alloyId2664);
    $.__views.__alloyId2665 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2665"
    });
    $.__views.__alloyId2663.add($.__views.__alloyId2665);
    $.__views.__alloyId2666 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2666"
    });
    $.__views.__alloyId2661.add($.__views.__alloyId2666);
    sublineDetails ? $.__views.__alloyId2666.addEventListener("click", sublineDetails) : __defers["$.__views.__alloyId2666!click!sublineDetails"] = true;
    $.__views.__alloyId2667 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2667"
    });
    $.__views.__alloyId2666.add($.__views.__alloyId2667);
    $.__views.__alloyId2668 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2668"
    });
    $.__views.__alloyId2661.add($.__views.__alloyId2668);
    setting ? $.__views.__alloyId2668.addEventListener("click", setting) : __defers["$.__views.__alloyId2668!click!setting"] = true;
    $.__views.__alloyId2669 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2669"
    });
    $.__views.__alloyId2668.add($.__views.__alloyId2669);
    $.__views.__alloyId2670 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2670"
    });
    $.__views.__alloyId2661.add($.__views.__alloyId2670);
    $.__views.__alloyId2671 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2671"
    });
    $.__views.__alloyId2670.add($.__views.__alloyId2671);
    $.__views.__alloyId2672 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2672"
    });
    $.__views.scrollView.add($.__views.__alloyId2672);
    $.__views.__alloyId2673 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2673"
    });
    $.__views.scrollView.add($.__views.__alloyId2673);
    $.__views.__alloyId2674 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2674"
    });
    $.__views.__alloyId2673.add($.__views.__alloyId2674);
    $.__views.__alloyId2675 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2675"
    });
    $.__views.__alloyId2674.add($.__views.__alloyId2675);
    $.__views.__alloyId2676 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2676"
    });
    $.__views.__alloyId2675.add($.__views.__alloyId2676);
    $.__views.__alloyId2677 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2677"
    });
    $.__views.__alloyId2675.add($.__views.__alloyId2677);
    $.__views.__alloyId2678 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2678"
    });
    $.__views.__alloyId2673.add($.__views.__alloyId2678);
    $.__views.__alloyId2679 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2679"
    });
    $.__views.__alloyId2678.add($.__views.__alloyId2679);
    $.__views.__alloyId2680 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2680"
    });
    $.__views.__alloyId2673.add($.__views.__alloyId2680);
    $.__views.__alloyId2681 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2681"
    });
    $.__views.__alloyId2680.add($.__views.__alloyId2681);
    $.__views.__alloyId2682 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2682"
    });
    $.__views.__alloyId2673.add($.__views.__alloyId2682);
    $.__views.__alloyId2683 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2683"
    });
    $.__views.__alloyId2682.add($.__views.__alloyId2683);
    $.__views.__alloyId2684 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2684"
    });
    $.__views.scrollView.add($.__views.__alloyId2684);
    $.__views.__alloyId2685 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2685"
    });
    $.__views.scrollView.add($.__views.__alloyId2685);
    $.__views.__alloyId2686 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2686"
    });
    $.__views.__alloyId2685.add($.__views.__alloyId2686);
    $.__views.__alloyId2687 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2687"
    });
    $.__views.__alloyId2686.add($.__views.__alloyId2687);
    $.__views.__alloyId2688 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2688"
    });
    $.__views.__alloyId2687.add($.__views.__alloyId2688);
    $.__views.__alloyId2689 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2689"
    });
    $.__views.__alloyId2687.add($.__views.__alloyId2689);
    $.__views.__alloyId2690 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2690"
    });
    $.__views.__alloyId2685.add($.__views.__alloyId2690);
    $.__views.__alloyId2691 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2691"
    });
    $.__views.__alloyId2690.add($.__views.__alloyId2691);
    $.__views.__alloyId2692 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2692"
    });
    $.__views.__alloyId2685.add($.__views.__alloyId2692);
    $.__views.__alloyId2693 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2693"
    });
    $.__views.__alloyId2692.add($.__views.__alloyId2693);
    $.__views.__alloyId2694 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2694"
    });
    $.__views.__alloyId2685.add($.__views.__alloyId2694);
    $.__views.__alloyId2695 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2695"
    });
    $.__views.__alloyId2694.add($.__views.__alloyId2695);
    $.__views.__alloyId2696 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2696"
    });
    $.__views.scrollView.add($.__views.__alloyId2696);
    $.__views.__alloyId2697 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2697"
    });
    $.__views.scrollView.add($.__views.__alloyId2697);
    $.__views.__alloyId2698 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2698"
    });
    $.__views.__alloyId2697.add($.__views.__alloyId2698);
    $.__views.__alloyId2699 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2699"
    });
    $.__views.__alloyId2698.add($.__views.__alloyId2699);
    $.__views.__alloyId2700 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2700"
    });
    $.__views.__alloyId2699.add($.__views.__alloyId2700);
    $.__views.__alloyId2701 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2701"
    });
    $.__views.__alloyId2699.add($.__views.__alloyId2701);
    $.__views.__alloyId2702 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2702"
    });
    $.__views.__alloyId2697.add($.__views.__alloyId2702);
    $.__views.__alloyId2703 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2703"
    });
    $.__views.__alloyId2702.add($.__views.__alloyId2703);
    $.__views.__alloyId2704 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2704"
    });
    $.__views.__alloyId2697.add($.__views.__alloyId2704);
    $.__views.__alloyId2705 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2705"
    });
    $.__views.__alloyId2704.add($.__views.__alloyId2705);
    $.__views.__alloyId2706 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2706"
    });
    $.__views.__alloyId2697.add($.__views.__alloyId2706);
    $.__views.__alloyId2707 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2707"
    });
    $.__views.__alloyId2706.add($.__views.__alloyId2707);
    $.__views.__alloyId2708 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2708"
    });
    $.__views.scrollView.add($.__views.__alloyId2708);
    $.__views.__alloyId2709 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2709"
    });
    $.__views.scrollView.add($.__views.__alloyId2709);
    $.__views.__alloyId2710 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2710"
    });
    $.__views.__alloyId2709.add($.__views.__alloyId2710);
    $.__views.__alloyId2711 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2711"
    });
    $.__views.__alloyId2710.add($.__views.__alloyId2711);
    $.__views.__alloyId2712 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2712"
    });
    $.__views.__alloyId2711.add($.__views.__alloyId2712);
    $.__views.__alloyId2713 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2713"
    });
    $.__views.__alloyId2711.add($.__views.__alloyId2713);
    $.__views.__alloyId2714 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2714"
    });
    $.__views.__alloyId2709.add($.__views.__alloyId2714);
    $.__views.__alloyId2715 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2715"
    });
    $.__views.__alloyId2714.add($.__views.__alloyId2715);
    $.__views.__alloyId2716 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2716"
    });
    $.__views.__alloyId2709.add($.__views.__alloyId2716);
    $.__views.__alloyId2717 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2717"
    });
    $.__views.__alloyId2716.add($.__views.__alloyId2717);
    $.__views.__alloyId2718 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2718"
    });
    $.__views.__alloyId2709.add($.__views.__alloyId2718);
    $.__views.__alloyId2719 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2719"
    });
    $.__views.__alloyId2718.add($.__views.__alloyId2719);
    $.__views.__alloyId2720 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2720"
    });
    $.__views.scrollView.add($.__views.__alloyId2720);
    $.__views.__alloyId2721 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2721"
    });
    $.__views.scrollView.add($.__views.__alloyId2721);
    $.__views.__alloyId2722 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2722"
    });
    $.__views.__alloyId2721.add($.__views.__alloyId2722);
    $.__views.__alloyId2723 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2723"
    });
    $.__views.__alloyId2722.add($.__views.__alloyId2723);
    $.__views.__alloyId2724 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2724"
    });
    $.__views.__alloyId2723.add($.__views.__alloyId2724);
    $.__views.__alloyId2725 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2725"
    });
    $.__views.__alloyId2723.add($.__views.__alloyId2725);
    $.__views.__alloyId2726 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2726"
    });
    $.__views.__alloyId2721.add($.__views.__alloyId2726);
    $.__views.__alloyId2727 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2727"
    });
    $.__views.__alloyId2726.add($.__views.__alloyId2727);
    $.__views.__alloyId2728 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2728"
    });
    $.__views.__alloyId2721.add($.__views.__alloyId2728);
    $.__views.__alloyId2729 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2729"
    });
    $.__views.__alloyId2728.add($.__views.__alloyId2729);
    $.__views.__alloyId2730 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2730"
    });
    $.__views.__alloyId2721.add($.__views.__alloyId2730);
    $.__views.__alloyId2731 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2731"
    });
    $.__views.__alloyId2730.add($.__views.__alloyId2731);
    $.__views.__alloyId2732 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId2732"
    });
    $.__views.scrollView.add($.__views.__alloyId2732);
    $.__views.__alloyId2733 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId2733"
    });
    $.__views.subline.add($.__views.__alloyId2733);
    addNumber ? $.__views.__alloyId2733.addEventListener("click", addNumber) : __defers["$.__views.__alloyId2733!click!addNumber"] = true;
    $.__views.__alloyId2734 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId2734"
    });
    $.__views.__alloyId2733.add($.__views.__alloyId2734);
    $.__views.__alloyId2735 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId2735"
    });
    $.__views.__alloyId2734.add($.__views.__alloyId2735);
    $.__views.__alloyId2736 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId2736"
    });
    $.__views.__alloyId2734.add($.__views.__alloyId2736);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    $.scrollView.children.length > 1 && $.scrollView.remove($.empty);
    console.log("num of child: " + $.scrollView.children.length);
    __defers["$.__views.__alloyId2660!click!back"] && $.__views.__alloyId2660.addEventListener("click", back);
    __defers["$.__views.__alloyId2666!click!sublineDetails"] && $.__views.__alloyId2666.addEventListener("click", sublineDetails);
    __defers["$.__views.__alloyId2668!click!setting"] && $.__views.__alloyId2668.addEventListener("click", setting);
    __defers["$.__views.__alloyId2733!click!addNumber"] && $.__views.__alloyId2733.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;