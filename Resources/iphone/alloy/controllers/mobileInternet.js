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
    $.__views.__alloyId669 = Alloy.createController("_header", {
        id: "__alloyId669",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId669.setParent($.__views.mobileInternet);
    $.__views.__alloyId670 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId670"
    });
    $.__views.mobileInternet.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId671"
    });
    $.__views.__alloyId670.add($.__views.__alloyId671);
    $.__views.__alloyId672 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId672"
    });
    $.__views.__alloyId670.add($.__views.__alloyId672);
    back ? $.__views.__alloyId672.addEventListener("click", back) : __defers["$.__views.__alloyId672!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
    $.__views.__alloyId673 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId673"
    });
    $.__views.scrollView.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId674"
    });
    $.__views.__alloyId673.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createLabel({
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId675"
    });
    $.__views.__alloyId674.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId676"
    });
    $.__views.__alloyId673.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createLabel({
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId677"
    });
    $.__views.__alloyId676.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createLabel({
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId678"
    });
    $.__views.__alloyId676.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId679"
    });
    $.__views.__alloyId676.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId680"
    });
    $.__views.__alloyId673.add($.__views.__alloyId680);
    $.__views.__alloyId681 = Ti.UI.createLabel({
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId681"
    });
    $.__views.__alloyId680.add($.__views.__alloyId681);
    $.__views.__alloyId682 = Ti.UI.createLabel({
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId682"
    });
    $.__views.__alloyId680.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createLabel({
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId683"
    });
    $.__views.__alloyId680.add($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId684"
    });
    $.__views.__alloyId673.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createLabel({
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId685"
    });
    $.__views.__alloyId684.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId686"
    });
    $.__views.__alloyId684.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId687"
    });
    $.__views.__alloyId684.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId688"
    });
    $.__views.__alloyId673.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createLabel({
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId689"
    });
    $.__views.__alloyId688.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId690"
    });
    $.__views.__alloyId688.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId691"
    });
    $.__views.__alloyId688.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId692"
    });
    $.__views.__alloyId673.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createLabel({
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId693"
    });
    $.__views.__alloyId692.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId694"
    });
    $.__views.__alloyId692.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId695"
    });
    $.__views.__alloyId692.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId696"
    });
    $.__views.__alloyId673.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId697"
    });
    $.__views.__alloyId696.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId698"
    });
    $.__views.__alloyId696.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId699"
    });
    $.__views.__alloyId696.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId700"
    });
    $.__views.__alloyId673.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId701"
    });
    $.__views.__alloyId700.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId702"
    });
    $.__views.__alloyId700.add($.__views.__alloyId702);
    $.__views.__alloyId703 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId703"
    });
    $.__views.__alloyId700.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId704"
    });
    $.__views.mobileInternet.add($.__views.__alloyId704);
    subscribe ? $.__views.__alloyId704.addEventListener("click", subscribe) : __defers["$.__views.__alloyId704!click!subscribe"] = true;
    $.__views.__alloyId705 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId705"
    });
    $.__views.__alloyId704.add($.__views.__alloyId705);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId672!click!back"] && $.__views.__alloyId672.addEventListener("click", back);
    __defers["$.__views.__alloyId704!click!subscribe"] && $.__views.__alloyId704.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;