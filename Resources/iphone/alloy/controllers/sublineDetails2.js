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
    this.__controllerPath = "sublineDetails2";
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
    $.__views.sublineDetails2 = Ti.UI.createView({
        layout: "composite",
        id: "sublineDetails2"
    });
    $.__views.sublineDetails2 && $.addTopLevelView($.__views.sublineDetails2);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF",
        top: "0"
    });
    $.__views.sublineDetails2.add($.__views.scrollView);
    $.__views.__alloyId2718 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2718"
    });
    $.__views.scrollView.add($.__views.__alloyId2718);
    $.__views.__alloyId2719 = Ti.UI.createLabel({
        text: "Subline Profile",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2719"
    });
    $.__views.__alloyId2718.add($.__views.__alloyId2719);
    $.__views.__alloyId2720 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2720"
    });
    $.__views.scrollView.add($.__views.__alloyId2720);
    $.__views.__alloyId2721 = Ti.UI.createLabel({
        text: "Mobile Number",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2721"
    });
    $.__views.__alloyId2720.add($.__views.__alloyId2721);
    $.__views.__alloyId2722 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2722"
    });
    $.__views.__alloyId2720.add($.__views.__alloyId2722);
    $.__views.__alloyId2723 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2723"
    });
    $.__views.scrollView.add($.__views.__alloyId2723);
    $.__views.__alloyId2724 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2724"
    });
    $.__views.scrollView.add($.__views.__alloyId2724);
    $.__views.__alloyId2725 = Ti.UI.createLabel({
        text: "Name",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2725"
    });
    $.__views.__alloyId2724.add($.__views.__alloyId2725);
    $.__views.__alloyId2726 = Ti.UI.createLabel({
        text: "william",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2726"
    });
    $.__views.__alloyId2724.add($.__views.__alloyId2726);
    $.__views.__alloyId2727 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2727"
    });
    $.__views.scrollView.add($.__views.__alloyId2727);
    $.__views.__alloyId2728 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2728"
    });
    $.__views.scrollView.add($.__views.__alloyId2728);
    $.__views.__alloyId2729 = Ti.UI.createLabel({
        text: "Subscription Plan",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2729"
    });
    $.__views.__alloyId2728.add($.__views.__alloyId2729);
    $.__views.__alloyId2730 = Ti.UI.createLabel({
        text: "ATM Offer",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2730"
    });
    $.__views.__alloyId2728.add($.__views.__alloyId2730);
    $.__views.__alloyId2731 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2731"
    });
    $.__views.scrollView.add($.__views.__alloyId2731);
    $.__views.__alloyId2732 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2732"
    });
    $.__views.scrollView.add($.__views.__alloyId2732);
    $.__views.__alloyId2733 = Ti.UI.createLabel({
        text: "Effective Date",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2733"
    });
    $.__views.__alloyId2732.add($.__views.__alloyId2733);
    $.__views.__alloyId2734 = Ti.UI.createLabel({
        text: "02-Jan-2015",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2734"
    });
    $.__views.__alloyId2732.add($.__views.__alloyId2734);
    $.__views.__alloyId2735 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2735"
    });
    $.__views.scrollView.add($.__views.__alloyId2735);
    $.__views.__alloyId2736 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2736"
    });
    $.__views.scrollView.add($.__views.__alloyId2736);
    $.__views.__alloyId2737 = Ti.UI.createLabel({
        text: "Loyalty Point",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2737"
    });
    $.__views.__alloyId2736.add($.__views.__alloyId2737);
    $.__views.__alloyId2738 = Ti.UI.createLabel({
        text: "000",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2738"
    });
    $.__views.__alloyId2736.add($.__views.__alloyId2738);
    $.__views.__alloyId2739 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2739"
    });
    $.__views.scrollView.add($.__views.__alloyId2739);
    $.__views.__alloyId2740 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2740"
    });
    $.__views.scrollView.add($.__views.__alloyId2740);
    $.__views.__alloyId2741 = Ti.UI.createLabel({
        text: "IVR Language",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2741"
    });
    $.__views.__alloyId2740.add($.__views.__alloyId2741);
    $.__views.__alloyId2742 = Ti.UI.createLabel({
        text: "Chinese",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2742"
    });
    $.__views.__alloyId2740.add($.__views.__alloyId2742);
    $.__views.__alloyId2743 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2743"
    });
    $.__views.scrollView.add($.__views.__alloyId2743);
    $.__views.__alloyId2744 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2744"
    });
    $.__views.scrollView.add($.__views.__alloyId2744);
    $.__views.__alloyId2745 = Ti.UI.createLabel({
        text: "Status",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2745"
    });
    $.__views.__alloyId2744.add($.__views.__alloyId2745);
    $.__views.__alloyId2746 = Ti.UI.createLabel({
        text: "Activated",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2746"
    });
    $.__views.__alloyId2744.add($.__views.__alloyId2746);
    $.__views.__alloyId2747 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2747"
    });
    $.__views.scrollView.add($.__views.__alloyId2747);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;