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
        DRAWER.navigation("products", 2);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "penang";
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
    $.__views.penang = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "penang"
    });
    $.__views.penang && $.addTopLevelView($.__views.penang);
    $.__views.__alloyId864 = Alloy.createController("_header", {
        id: "__alloyId864",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId864.setParent($.__views.penang);
    $.__views.__alloyId865 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId865"
    });
    $.__views.penang.add($.__views.__alloyId865);
    $.__views.__alloyId866 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId866"
    });
    $.__views.__alloyId865.add($.__views.__alloyId866);
    $.__views.__alloyId867 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId867"
    });
    $.__views.__alloyId865.add($.__views.__alloyId867);
    back ? $.__views.__alloyId867.addEventListener("click", back) : __defers["$.__views.__alloyId867!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang.add($.__views.scrollView);
    $.__views.__alloyId868 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId868"
    });
    $.__views.scrollView.add($.__views.__alloyId868);
    $.__views.__alloyId869 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId869"
    });
    $.__views.__alloyId868.add($.__views.__alloyId869);
    $.__views.__alloyId870 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId870"
    });
    $.__views.__alloyId869.add($.__views.__alloyId870);
    $.__views.__alloyId871 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId871"
    });
    $.__views.__alloyId868.add($.__views.__alloyId871);
    $.__views.__alloyId872 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId872"
    });
    $.__views.__alloyId871.add($.__views.__alloyId872);
    $.__views.__alloyId873 = Ti.UI.createLabel({
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId873"
    });
    $.__views.__alloyId871.add($.__views.__alloyId873);
    $.__views.__alloyId874 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId874"
    });
    $.__views.scrollView.add($.__views.__alloyId874);
    $.__views.__alloyId875 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId875"
    });
    $.__views.__alloyId874.add($.__views.__alloyId875);
    $.__views.__alloyId876 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId876"
    });
    $.__views.__alloyId875.add($.__views.__alloyId876);
    $.__views.__alloyId877 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId877"
    });
    $.__views.__alloyId874.add($.__views.__alloyId877);
    $.__views.__alloyId878 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId878"
    });
    $.__views.__alloyId877.add($.__views.__alloyId878);
    $.__views.__alloyId879 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId879"
    });
    $.__views.__alloyId877.add($.__views.__alloyId879);
    $.__views.__alloyId880 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId880"
    });
    $.__views.__alloyId874.add($.__views.__alloyId880);
    $.__views.__alloyId881 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId881"
    });
    $.__views.__alloyId880.add($.__views.__alloyId881);
    $.__views.__alloyId882 = Ti.UI.createLabel({
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId882"
    });
    $.__views.__alloyId880.add($.__views.__alloyId882);
    $.__views.__alloyId883 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId883"
    });
    $.__views.__alloyId874.add($.__views.__alloyId883);
    $.__views.__alloyId884 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId884"
    });
    $.__views.__alloyId883.add($.__views.__alloyId884);
    $.__views.__alloyId885 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId885"
    });
    $.__views.__alloyId883.add($.__views.__alloyId885);
    $.__views.__alloyId886 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId886"
    });
    $.__views.__alloyId874.add($.__views.__alloyId886);
    $.__views.__alloyId887 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId887"
    });
    $.__views.__alloyId886.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId888"
    });
    $.__views.__alloyId886.add($.__views.__alloyId888);
    $.__views.__alloyId889 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId889"
    });
    $.__views.scrollView.add($.__views.__alloyId889);
    $.__views.__alloyId890 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId890"
    });
    $.__views.__alloyId889.add($.__views.__alloyId890);
    $.__views.__alloyId891 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId891"
    });
    $.__views.__alloyId890.add($.__views.__alloyId891);
    $.__views.__alloyId892 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId892"
    });
    $.__views.__alloyId889.add($.__views.__alloyId892);
    $.__views.__alloyId893 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId893"
    });
    $.__views.__alloyId892.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId894"
    });
    $.__views.__alloyId892.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId895"
    });
    $.__views.__alloyId889.add($.__views.__alloyId895);
    $.__views.__alloyId896 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId896"
    });
    $.__views.__alloyId895.add($.__views.__alloyId896);
    $.__views.__alloyId897 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId897"
    });
    $.__views.__alloyId895.add($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId898"
    });
    $.__views.penang.add($.__views.__alloyId898);
    subscribe ? $.__views.__alloyId898.addEventListener("click", subscribe) : __defers["$.__views.__alloyId898!click!subscribe"] = true;
    $.__views.__alloyId899 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId899"
    });
    $.__views.__alloyId898.add($.__views.__alloyId899);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId867!click!back"] && $.__views.__alloyId867.addEventListener("click", back);
    __defers["$.__views.__alloyId898!click!subscribe"] && $.__views.__alloyId898.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;