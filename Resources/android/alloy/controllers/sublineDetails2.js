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
    $.__views.__alloyId2862 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2862"
    });
    $.__views.scrollView.add($.__views.__alloyId2862);
    $.__views.__alloyId2863 = Ti.UI.createLabel({
        text: "Subline Profile",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2863"
    });
    $.__views.__alloyId2862.add($.__views.__alloyId2863);
    $.__views.__alloyId2864 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2864"
    });
    $.__views.scrollView.add($.__views.__alloyId2864);
    $.__views.__alloyId2865 = Ti.UI.createLabel({
        text: "Mobile Number",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2865"
    });
    $.__views.__alloyId2864.add($.__views.__alloyId2865);
    $.__views.__alloyId2866 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2866"
    });
    $.__views.__alloyId2864.add($.__views.__alloyId2866);
    $.__views.__alloyId2867 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2867"
    });
    $.__views.scrollView.add($.__views.__alloyId2867);
    $.__views.__alloyId2868 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2868"
    });
    $.__views.scrollView.add($.__views.__alloyId2868);
    $.__views.__alloyId2869 = Ti.UI.createLabel({
        text: "Name",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2869"
    });
    $.__views.__alloyId2868.add($.__views.__alloyId2869);
    $.__views.__alloyId2870 = Ti.UI.createLabel({
        text: "william",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2870"
    });
    $.__views.__alloyId2868.add($.__views.__alloyId2870);
    $.__views.__alloyId2871 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2871"
    });
    $.__views.scrollView.add($.__views.__alloyId2871);
    $.__views.__alloyId2872 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2872"
    });
    $.__views.scrollView.add($.__views.__alloyId2872);
    $.__views.__alloyId2873 = Ti.UI.createLabel({
        text: "Subscription Plan",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2873"
    });
    $.__views.__alloyId2872.add($.__views.__alloyId2873);
    $.__views.__alloyId2874 = Ti.UI.createLabel({
        text: "ATM Offer",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2874"
    });
    $.__views.__alloyId2872.add($.__views.__alloyId2874);
    $.__views.__alloyId2875 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2875"
    });
    $.__views.scrollView.add($.__views.__alloyId2875);
    $.__views.__alloyId2876 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2876"
    });
    $.__views.scrollView.add($.__views.__alloyId2876);
    $.__views.__alloyId2877 = Ti.UI.createLabel({
        text: "Effective Date",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2877"
    });
    $.__views.__alloyId2876.add($.__views.__alloyId2877);
    $.__views.__alloyId2878 = Ti.UI.createLabel({
        text: "02-Jan-2015",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2878"
    });
    $.__views.__alloyId2876.add($.__views.__alloyId2878);
    $.__views.__alloyId2879 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2879"
    });
    $.__views.scrollView.add($.__views.__alloyId2879);
    $.__views.__alloyId2880 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2880"
    });
    $.__views.scrollView.add($.__views.__alloyId2880);
    $.__views.__alloyId2881 = Ti.UI.createLabel({
        text: "Loyalty Point",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2881"
    });
    $.__views.__alloyId2880.add($.__views.__alloyId2881);
    $.__views.__alloyId2882 = Ti.UI.createLabel({
        text: "000",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2882"
    });
    $.__views.__alloyId2880.add($.__views.__alloyId2882);
    $.__views.__alloyId2883 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2883"
    });
    $.__views.scrollView.add($.__views.__alloyId2883);
    $.__views.__alloyId2884 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2884"
    });
    $.__views.scrollView.add($.__views.__alloyId2884);
    $.__views.__alloyId2885 = Ti.UI.createLabel({
        text: "IVR Language",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2885"
    });
    $.__views.__alloyId2884.add($.__views.__alloyId2885);
    $.__views.__alloyId2886 = Ti.UI.createLabel({
        text: "Chinese",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2886"
    });
    $.__views.__alloyId2884.add($.__views.__alloyId2886);
    $.__views.__alloyId2887 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2887"
    });
    $.__views.scrollView.add($.__views.__alloyId2887);
    $.__views.__alloyId2888 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2888"
    });
    $.__views.scrollView.add($.__views.__alloyId2888);
    $.__views.__alloyId2889 = Ti.UI.createLabel({
        text: "Status",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2889"
    });
    $.__views.__alloyId2888.add($.__views.__alloyId2889);
    $.__views.__alloyId2890 = Ti.UI.createLabel({
        text: "Activated",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2890"
    });
    $.__views.__alloyId2888.add($.__views.__alloyId2890);
    $.__views.__alloyId2891 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2891"
    });
    $.__views.scrollView.add($.__views.__alloyId2891);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;