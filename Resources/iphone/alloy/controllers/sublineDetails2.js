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
    $.__views.__alloyId2782 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2782"
    });
    $.__views.scrollView.add($.__views.__alloyId2782);
    $.__views.__alloyId2783 = Ti.UI.createLabel({
        text: "Subline Profile",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2783"
    });
    $.__views.__alloyId2782.add($.__views.__alloyId2783);
    $.__views.__alloyId2784 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2784"
    });
    $.__views.scrollView.add($.__views.__alloyId2784);
    $.__views.__alloyId2785 = Ti.UI.createLabel({
        text: "Mobile Number",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2785"
    });
    $.__views.__alloyId2784.add($.__views.__alloyId2785);
    $.__views.__alloyId2786 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2786"
    });
    $.__views.__alloyId2784.add($.__views.__alloyId2786);
    $.__views.__alloyId2787 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2787"
    });
    $.__views.scrollView.add($.__views.__alloyId2787);
    $.__views.__alloyId2788 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2788"
    });
    $.__views.scrollView.add($.__views.__alloyId2788);
    $.__views.__alloyId2789 = Ti.UI.createLabel({
        text: "Name",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2789"
    });
    $.__views.__alloyId2788.add($.__views.__alloyId2789);
    $.__views.__alloyId2790 = Ti.UI.createLabel({
        text: "william",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2790"
    });
    $.__views.__alloyId2788.add($.__views.__alloyId2790);
    $.__views.__alloyId2791 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2791"
    });
    $.__views.scrollView.add($.__views.__alloyId2791);
    $.__views.__alloyId2792 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2792"
    });
    $.__views.scrollView.add($.__views.__alloyId2792);
    $.__views.__alloyId2793 = Ti.UI.createLabel({
        text: "Subscription Plan",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2793"
    });
    $.__views.__alloyId2792.add($.__views.__alloyId2793);
    $.__views.__alloyId2794 = Ti.UI.createLabel({
        text: "ATM Offer",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2794"
    });
    $.__views.__alloyId2792.add($.__views.__alloyId2794);
    $.__views.__alloyId2795 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2795"
    });
    $.__views.scrollView.add($.__views.__alloyId2795);
    $.__views.__alloyId2796 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2796"
    });
    $.__views.scrollView.add($.__views.__alloyId2796);
    $.__views.__alloyId2797 = Ti.UI.createLabel({
        text: "Effective Date",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2797"
    });
    $.__views.__alloyId2796.add($.__views.__alloyId2797);
    $.__views.__alloyId2798 = Ti.UI.createLabel({
        text: "02-Jan-2015",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2798"
    });
    $.__views.__alloyId2796.add($.__views.__alloyId2798);
    $.__views.__alloyId2799 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2799"
    });
    $.__views.scrollView.add($.__views.__alloyId2799);
    $.__views.__alloyId2800 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2800"
    });
    $.__views.scrollView.add($.__views.__alloyId2800);
    $.__views.__alloyId2801 = Ti.UI.createLabel({
        text: "Loyalty Point",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2801"
    });
    $.__views.__alloyId2800.add($.__views.__alloyId2801);
    $.__views.__alloyId2802 = Ti.UI.createLabel({
        text: "000",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2802"
    });
    $.__views.__alloyId2800.add($.__views.__alloyId2802);
    $.__views.__alloyId2803 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2803"
    });
    $.__views.scrollView.add($.__views.__alloyId2803);
    $.__views.__alloyId2804 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2804"
    });
    $.__views.scrollView.add($.__views.__alloyId2804);
    $.__views.__alloyId2805 = Ti.UI.createLabel({
        text: "IVR Language",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2805"
    });
    $.__views.__alloyId2804.add($.__views.__alloyId2805);
    $.__views.__alloyId2806 = Ti.UI.createLabel({
        text: "Chinese",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2806"
    });
    $.__views.__alloyId2804.add($.__views.__alloyId2806);
    $.__views.__alloyId2807 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2807"
    });
    $.__views.scrollView.add($.__views.__alloyId2807);
    $.__views.__alloyId2808 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2808"
    });
    $.__views.scrollView.add($.__views.__alloyId2808);
    $.__views.__alloyId2809 = Ti.UI.createLabel({
        text: "Status",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2809"
    });
    $.__views.__alloyId2808.add($.__views.__alloyId2809);
    $.__views.__alloyId2810 = Ti.UI.createLabel({
        text: "Activated",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2810"
    });
    $.__views.__alloyId2808.add($.__views.__alloyId2810);
    $.__views.__alloyId2811 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2811"
    });
    $.__views.scrollView.add($.__views.__alloyId2811);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;