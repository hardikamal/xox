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
    $.__views.__alloyId450 = Alloy.createController("_header", {
        id: "__alloyId450",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId450.setParent($.__views.mobileInternet);
    $.__views.__alloyId451 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId451"
    });
    $.__views.mobileInternet.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId452"
    });
    $.__views.__alloyId451.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId453"
    });
    $.__views.__alloyId451.add($.__views.__alloyId453);
    back ? $.__views.__alloyId453.addEventListener("click", back) : __defers["$.__views.__alloyId453!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
    $.__views.__alloyId454 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId454"
    });
    $.__views.scrollView.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId455"
    });
    $.__views.__alloyId454.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createLabel({
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId456"
    });
    $.__views.__alloyId455.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId457"
    });
    $.__views.__alloyId454.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createLabel({
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId458"
    });
    $.__views.__alloyId457.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createLabel({
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId459"
    });
    $.__views.__alloyId457.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId460"
    });
    $.__views.__alloyId457.add($.__views.__alloyId460);
    $.__views.__alloyId461 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId461"
    });
    $.__views.__alloyId454.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createLabel({
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId462"
    });
    $.__views.__alloyId461.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createLabel({
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId463"
    });
    $.__views.__alloyId461.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createLabel({
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId464"
    });
    $.__views.__alloyId461.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId465"
    });
    $.__views.__alloyId454.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createLabel({
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId467"
    });
    $.__views.__alloyId465.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId468"
    });
    $.__views.__alloyId465.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId469"
    });
    $.__views.__alloyId454.add($.__views.__alloyId469);
    $.__views.__alloyId470 = Ti.UI.createLabel({
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId470"
    });
    $.__views.__alloyId469.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId471"
    });
    $.__views.__alloyId469.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId472"
    });
    $.__views.__alloyId469.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId473"
    });
    $.__views.__alloyId454.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createLabel({
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId475"
    });
    $.__views.__alloyId473.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId476"
    });
    $.__views.__alloyId473.add($.__views.__alloyId476);
    $.__views.__alloyId477 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId477"
    });
    $.__views.__alloyId454.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createLabel({
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId478"
    });
    $.__views.__alloyId477.add($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId479"
    });
    $.__views.__alloyId477.add($.__views.__alloyId479);
    $.__views.__alloyId480 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId480"
    });
    $.__views.__alloyId477.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId481"
    });
    $.__views.__alloyId454.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createLabel({
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId482"
    });
    $.__views.__alloyId481.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId483"
    });
    $.__views.__alloyId481.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId484"
    });
    $.__views.__alloyId481.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId485"
    });
    $.__views.mobileInternet.add($.__views.__alloyId485);
    subscribe ? $.__views.__alloyId485.addEventListener("click", subscribe) : __defers["$.__views.__alloyId485!click!subscribe"] = true;
    $.__views.__alloyId486 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId486"
    });
    $.__views.__alloyId485.add($.__views.__alloyId486);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId453!click!back"] && $.__views.__alloyId453.addEventListener("click", back);
    __defers["$.__views.__alloyId485!click!subscribe"] && $.__views.__alloyId485.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;