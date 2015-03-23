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
        DRAWER.navigation("products", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mobileInternet";
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
    $.__views.mobileInternet = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "mobileInternet"
    });
    $.__views.mobileInternet && $.addTopLevelView($.__views.mobileInternet);
    $.__views.__alloyId728 = Alloy.createController("_header", {
        id: "__alloyId728",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId728.setParent($.__views.mobileInternet);
    $.__views.__alloyId729 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId729"
    });
    $.__views.mobileInternet.add($.__views.__alloyId729);
    $.__views.__alloyId730 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId730"
    });
    $.__views.__alloyId729.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId731"
    });
    $.__views.__alloyId729.add($.__views.__alloyId731);
    back ? $.__views.__alloyId731.addEventListener("click", back) : __defers["$.__views.__alloyId731!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
    $.__views.__alloyId732 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId732"
    });
    $.__views.scrollView.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId733"
    });
    $.__views.__alloyId732.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createLabel({
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId734"
    });
    $.__views.__alloyId733.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId735"
    });
    $.__views.__alloyId732.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createLabel({
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createLabel({
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId737"
    });
    $.__views.__alloyId735.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId738"
    });
    $.__views.__alloyId735.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId739"
    });
    $.__views.__alloyId732.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createLabel({
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId740"
    });
    $.__views.__alloyId739.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createLabel({
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId741"
    });
    $.__views.__alloyId739.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createLabel({
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId742"
    });
    $.__views.__alloyId739.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId743"
    });
    $.__views.__alloyId732.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createLabel({
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId744"
    });
    $.__views.__alloyId743.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId745"
    });
    $.__views.__alloyId743.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId746"
    });
    $.__views.__alloyId743.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId747"
    });
    $.__views.__alloyId732.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createLabel({
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId748"
    });
    $.__views.__alloyId747.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId749"
    });
    $.__views.__alloyId747.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId750"
    });
    $.__views.__alloyId747.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId751"
    });
    $.__views.__alloyId732.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId752"
    });
    $.__views.__alloyId751.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId753"
    });
    $.__views.__alloyId751.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId754"
    });
    $.__views.__alloyId751.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId755"
    });
    $.__views.__alloyId732.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createLabel({
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId756"
    });
    $.__views.__alloyId755.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId757"
    });
    $.__views.__alloyId755.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId758"
    });
    $.__views.__alloyId755.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId759"
    });
    $.__views.__alloyId732.add($.__views.__alloyId759);
    $.__views.__alloyId760 = Ti.UI.createLabel({
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId760"
    });
    $.__views.__alloyId759.add($.__views.__alloyId760);
    $.__views.__alloyId761 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId761"
    });
    $.__views.__alloyId759.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId762"
    });
    $.__views.__alloyId759.add($.__views.__alloyId762);
    $.__views.__alloyId763 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId763"
    });
    $.__views.mobileInternet.add($.__views.__alloyId763);
    subscribe ? $.__views.__alloyId763.addEventListener("click", subscribe) : __defers["$.__views.__alloyId763!click!subscribe"] = true;
    $.__views.__alloyId764 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId764"
    });
    $.__views.__alloyId763.add($.__views.__alloyId764);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId731!click!back"] && $.__views.__alloyId731.addEventListener("click", back);
    __defers["$.__views.__alloyId763!click!subscribe"] && $.__views.__alloyId763.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;