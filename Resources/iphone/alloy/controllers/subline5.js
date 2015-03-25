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
        DRAWER.navigation("subline4", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline5";
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
    $.__views.subline5 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline5"
    });
    $.__views.subline5 && $.addTopLevelView($.__views.subline5);
    $.__views.__alloyId2713 = Alloy.createController("_header", {
        id: "__alloyId2713",
        __parentSymbol: $.__views.subline5
    });
    $.__views.__alloyId2713.setParent($.__views.subline5);
    $.__views.__alloyId2714 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2714"
    });
    $.__views.subline5.add($.__views.__alloyId2714);
    $.__views.__alloyId2715 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2715"
    });
    $.__views.__alloyId2714.add($.__views.__alloyId2715);
    $.__views.__alloyId2716 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2716"
    });
    $.__views.__alloyId2714.add($.__views.__alloyId2716);
    back ? $.__views.__alloyId2716.addEventListener("click", back) : __defers["$.__views.__alloyId2716!click!back"] = true;
    $.__views.__alloyId2717 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "white",
        id: "__alloyId2717"
    });
    $.__views.subline5.add($.__views.__alloyId2717);
    $.__views.__alloyId2718 = Ti.UI.createLabel({
        text: "Subline Data Subscription Request",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2718"
    });
    $.__views.__alloyId2717.add($.__views.__alloyId2718);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.subline5.add($.__views.scrollView);
    $.__views.__alloyId2719 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2719"
    });
    $.__views.scrollView.add($.__views.__alloyId2719);
    $.__views.__alloyId2720 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2720"
    });
    $.__views.__alloyId2719.add($.__views.__alloyId2720);
    $.__views.__alloyId2721 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2721"
    });
    $.__views.__alloyId2719.add($.__views.__alloyId2721);
    $.__views.__alloyId2722 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2722"
    });
    $.__views.scrollView.add($.__views.__alloyId2722);
    $.__views.__alloyId2723 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2723"
    });
    $.__views.scrollView.add($.__views.__alloyId2723);
    $.__views.__alloyId2724 = Ti.UI.createLabel({
        text: "Data Plan",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2724"
    });
    $.__views.__alloyId2723.add($.__views.__alloyId2724);
    $.__views.__alloyId2725 = Ti.UI.createLabel({
        text: "M500MB",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2725"
    });
    $.__views.__alloyId2723.add($.__views.__alloyId2725);
    $.__views.__alloyId2726 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2726"
    });
    $.__views.scrollView.add($.__views.__alloyId2726);
    $.__views.__alloyId2727 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2727"
    });
    $.__views.scrollView.add($.__views.__alloyId2727);
    $.__views.__alloyId2728 = Ti.UI.createLabel({
        text: "Current Prepaid Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2728"
    });
    $.__views.__alloyId2727.add($.__views.__alloyId2728);
    $.__views.__alloyId2729 = Ti.UI.createLabel({
        text: "88.88",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2729"
    });
    $.__views.__alloyId2727.add($.__views.__alloyId2729);
    $.__views.__alloyId2730 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2730"
    });
    $.__views.scrollView.add($.__views.__alloyId2730);
    $.__views.__alloyId2731 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2731"
    });
    $.__views.scrollView.add($.__views.__alloyId2731);
    $.__views.__alloyId2732 = Ti.UI.createLabel({
        text: "Current EWallet Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2732"
    });
    $.__views.__alloyId2731.add($.__views.__alloyId2732);
    $.__views.__alloyId2733 = Ti.UI.createLabel({
        text: "0.00",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2733"
    });
    $.__views.__alloyId2731.add($.__views.__alloyId2733);
    $.__views.__alloyId2734 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2734"
    });
    $.__views.scrollView.add($.__views.__alloyId2734);
    $.__views.__alloyId2735 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2735"
    });
    $.__views.scrollView.add($.__views.__alloyId2735);
    $.__views.__alloyId2736 = Ti.UI.createLabel({
        text: "Season Pass Data Counter(MB)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2736"
    });
    $.__views.__alloyId2735.add($.__views.__alloyId2736);
    $.__views.__alloyId2737 = Ti.UI.createLabel({
        text: "0",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2737"
    });
    $.__views.__alloyId2735.add($.__views.__alloyId2737);
    $.__views.__alloyId2738 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2738"
    });
    $.__views.scrollView.add($.__views.__alloyId2738);
    $.__views.__alloyId2739 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2739"
    });
    $.__views.subline5.add($.__views.__alloyId2739);
    $.__views.__alloyId2740 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2740"
    });
    $.__views.__alloyId2739.add($.__views.__alloyId2740);
    subscribe ? $.__views.__alloyId2740.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2740!click!subscribe"] = true;
    $.__views.__alloyId2741 = Ti.UI.createLabel({
        text: "Subscribe",
        color: "white",
        textAlign: "center",
        id: "__alloyId2741"
    });
    $.__views.__alloyId2740.add($.__views.__alloyId2741);
    $.__views.__alloyId2742 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2742"
    });
    $.__views.__alloyId2739.add($.__views.__alloyId2742);
    $.__views.__alloyId2743 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2743"
    });
    $.__views.__alloyId2739.add($.__views.__alloyId2743);
    back ? $.__views.__alloyId2743.addEventListener("click", back) : __defers["$.__views.__alloyId2743!click!back"] = true;
    $.__views.__alloyId2744 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId2744"
    });
    $.__views.__alloyId2743.add($.__views.__alloyId2744);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId2716!click!back"] && $.__views.__alloyId2716.addEventListener("click", back);
    __defers["$.__views.__alloyId2740!click!subscribe"] && $.__views.__alloyId2740.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId2743!click!back"] && $.__views.__alloyId2743.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;