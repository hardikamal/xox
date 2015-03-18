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
    this.__controllerPath = "prepaidPlus";
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
    $.__views.prepaidPlus = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPlus"
    });
    $.__views.prepaidPlus && $.addTopLevelView($.__views.prepaidPlus);
    $.__views.__alloyId883 = Alloy.createController("_header", {
        id: "__alloyId883",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId883.setParent($.__views.prepaidPlus);
    $.__views.__alloyId884 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId884"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId884);
    $.__views.__alloyId885 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId885"
    });
    $.__views.__alloyId884.add($.__views.__alloyId885);
    $.__views.__alloyId886 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId886"
    });
    $.__views.__alloyId885.add($.__views.__alloyId886);
    $.__views.__alloyId887 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId887"
    });
    $.__views.__alloyId886.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId888"
    });
    $.__views.__alloyId885.add($.__views.__alloyId888);
    $.__views.__alloyId889 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId889"
    });
    $.__views.__alloyId884.add($.__views.__alloyId889);
    back ? $.__views.__alloyId889.addEventListener("click", back) : __defers["$.__views.__alloyId889!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaidPlus.add($.__views.scrollView);
    $.__views.__alloyId890 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId890"
    });
    $.__views.scrollView.add($.__views.__alloyId890);
    $.__views.__alloyId891 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId891"
    });
    $.__views.__alloyId890.add($.__views.__alloyId891);
    $.__views.__alloyId892 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId892"
    });
    $.__views.__alloyId891.add($.__views.__alloyId892);
    $.__views.__alloyId893 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId893"
    });
    $.__views.__alloyId890.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId894"
    });
    $.__views.__alloyId893.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId895"
    });
    $.__views.__alloyId893.add($.__views.__alloyId895);
    $.__views.__alloyId896 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId896"
    });
    $.__views.__alloyId890.add($.__views.__alloyId896);
    $.__views.__alloyId897 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId897"
    });
    $.__views.__alloyId896.add($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId898"
    });
    $.__views.__alloyId896.add($.__views.__alloyId898);
    $.__views.__alloyId899 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId899"
    });
    $.__views.scrollView.add($.__views.__alloyId899);
    $.__views.__alloyId900 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId900"
    });
    $.__views.__alloyId899.add($.__views.__alloyId900);
    $.__views.__alloyId901 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId901"
    });
    $.__views.__alloyId900.add($.__views.__alloyId901);
    $.__views.__alloyId902 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId902"
    });
    $.__views.__alloyId899.add($.__views.__alloyId902);
    $.__views.__alloyId903 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId903"
    });
    $.__views.__alloyId902.add($.__views.__alloyId903);
    $.__views.__alloyId904 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId904"
    });
    $.__views.__alloyId902.add($.__views.__alloyId904);
    $.__views.__alloyId905 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId905"
    });
    $.__views.__alloyId899.add($.__views.__alloyId905);
    $.__views.__alloyId906 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId906"
    });
    $.__views.__alloyId905.add($.__views.__alloyId906);
    $.__views.__alloyId907 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId907"
    });
    $.__views.__alloyId905.add($.__views.__alloyId907);
    $.__views.__alloyId908 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId908"
    });
    $.__views.__alloyId899.add($.__views.__alloyId908);
    $.__views.__alloyId909 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId909"
    });
    $.__views.__alloyId908.add($.__views.__alloyId909);
    $.__views.__alloyId910 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId910"
    });
    $.__views.__alloyId908.add($.__views.__alloyId910);
    $.__views.__alloyId911 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId911"
    });
    $.__views.__alloyId899.add($.__views.__alloyId911);
    $.__views.__alloyId912 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId912"
    });
    $.__views.__alloyId911.add($.__views.__alloyId912);
    $.__views.__alloyId913 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId913"
    });
    $.__views.__alloyId911.add($.__views.__alloyId913);
    $.__views.__alloyId914 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId914"
    });
    $.__views.scrollView.add($.__views.__alloyId914);
    $.__views.__alloyId915 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId915"
    });
    $.__views.__alloyId914.add($.__views.__alloyId915);
    $.__views.__alloyId916 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId916"
    });
    $.__views.__alloyId915.add($.__views.__alloyId916);
    $.__views.__alloyId917 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId917"
    });
    $.__views.__alloyId914.add($.__views.__alloyId917);
    $.__views.__alloyId918 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId918"
    });
    $.__views.__alloyId917.add($.__views.__alloyId918);
    $.__views.__alloyId919 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId919"
    });
    $.__views.__alloyId917.add($.__views.__alloyId919);
    $.__views.__alloyId920 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId920"
    });
    $.__views.__alloyId914.add($.__views.__alloyId920);
    $.__views.__alloyId921 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId921"
    });
    $.__views.__alloyId920.add($.__views.__alloyId921);
    $.__views.__alloyId922 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId922"
    });
    $.__views.__alloyId920.add($.__views.__alloyId922);
    $.__views.__alloyId923 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId923"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId923);
    subscribe ? $.__views.__alloyId923.addEventListener("click", subscribe) : __defers["$.__views.__alloyId923!click!subscribe"] = true;
    $.__views.__alloyId924 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId924"
    });
    $.__views.__alloyId923.add($.__views.__alloyId924);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 100 - .2 * Ti.Platform.displayCaps.platformHeight;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId889!click!back"] && $.__views.__alloyId889.addEventListener("click", back);
    __defers["$.__views.__alloyId923!click!subscribe"] && $.__views.__alloyId923.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;