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
    $.__views.__alloyId566 = Alloy.createController("_header", {
        id: "__alloyId566",
        __parentSymbol: $.__views.mobileInternet
    });
    $.__views.__alloyId566.setParent($.__views.mobileInternet);
    $.__views.__alloyId567 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId567"
    });
    $.__views.mobileInternet.add($.__views.__alloyId567);
    $.__views.__alloyId568 = Ti.UI.createLabel({
        text: "MOBILE INTERNET",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId568"
    });
    $.__views.__alloyId567.add($.__views.__alloyId568);
    $.__views.__alloyId569 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId569"
    });
    $.__views.__alloyId567.add($.__views.__alloyId569);
    back ? $.__views.__alloyId569.addEventListener("click", back) : __defers["$.__views.__alloyId569!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.mobileInternet.add($.__views.scrollView);
    $.__views.__alloyId570 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId570"
    });
    $.__views.scrollView.add($.__views.__alloyId570);
    $.__views.__alloyId571 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId571"
    });
    $.__views.__alloyId570.add($.__views.__alloyId571);
    $.__views.__alloyId572 = Ti.UI.createLabel({
        text: "Mobile Data Plan",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId572"
    });
    $.__views.__alloyId571.add($.__views.__alloyId572);
    $.__views.__alloyId573 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId573"
    });
    $.__views.__alloyId570.add($.__views.__alloyId573);
    $.__views.__alloyId574 = Ti.UI.createLabel({
        text: "Daily 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId574"
    });
    $.__views.__alloyId573.add($.__views.__alloyId574);
    $.__views.__alloyId575 = Ti.UI.createLabel({
        text: "24 hours",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId575"
    });
    $.__views.__alloyId573.add($.__views.__alloyId575);
    $.__views.__alloyId576 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId576"
    });
    $.__views.__alloyId573.add($.__views.__alloyId576);
    $.__views.__alloyId577 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId577"
    });
    $.__views.__alloyId570.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createLabel({
        text: "Weekly 250MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId578"
    });
    $.__views.__alloyId577.add($.__views.__alloyId578);
    $.__views.__alloyId579 = Ti.UI.createLabel({
        text: "7 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId579"
    });
    $.__views.__alloyId577.add($.__views.__alloyId579);
    $.__views.__alloyId580 = Ti.UI.createLabel({
        text: "RM10",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId580"
    });
    $.__views.__alloyId577.add($.__views.__alloyId580);
    $.__views.__alloyId581 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId581"
    });
    $.__views.__alloyId570.add($.__views.__alloyId581);
    $.__views.__alloyId582 = Ti.UI.createLabel({
        text: "Monthly 500MB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId582"
    });
    $.__views.__alloyId581.add($.__views.__alloyId582);
    $.__views.__alloyId583 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId583"
    });
    $.__views.__alloyId581.add($.__views.__alloyId583);
    $.__views.__alloyId584 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId584"
    });
    $.__views.__alloyId581.add($.__views.__alloyId584);
    $.__views.__alloyId585 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId585"
    });
    $.__views.__alloyId570.add($.__views.__alloyId585);
    $.__views.__alloyId586 = Ti.UI.createLabel({
        text: "Monthly 1GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId586"
    });
    $.__views.__alloyId585.add($.__views.__alloyId586);
    $.__views.__alloyId587 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId587"
    });
    $.__views.__alloyId585.add($.__views.__alloyId587);
    $.__views.__alloyId588 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId588"
    });
    $.__views.__alloyId585.add($.__views.__alloyId588);
    $.__views.__alloyId589 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId589"
    });
    $.__views.__alloyId570.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createLabel({
        text: "Monthly 3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId590"
    });
    $.__views.__alloyId589.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId591"
    });
    $.__views.__alloyId589.add($.__views.__alloyId591);
    $.__views.__alloyId592 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId592"
    });
    $.__views.__alloyId589.add($.__views.__alloyId592);
    $.__views.__alloyId593 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId593"
    });
    $.__views.__alloyId570.add($.__views.__alloyId593);
    $.__views.__alloyId594 = Ti.UI.createLabel({
        text: "Monthly 5GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId594"
    });
    $.__views.__alloyId593.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId595"
    });
    $.__views.__alloyId593.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId596"
    });
    $.__views.__alloyId593.add($.__views.__alloyId596);
    $.__views.__alloyId597 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId597"
    });
    $.__views.__alloyId570.add($.__views.__alloyId597);
    $.__views.__alloyId598 = Ti.UI.createLabel({
        text: "Data Promo 2.3GB",
        width: "55%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId598"
    });
    $.__views.__alloyId597.add($.__views.__alloyId598);
    $.__views.__alloyId599 = Ti.UI.createLabel({
        text: "30 days",
        width: "25%",
        height: "30",
        color: "black",
        id: "__alloyId599"
    });
    $.__views.__alloyId597.add($.__views.__alloyId599);
    $.__views.__alloyId600 = Ti.UI.createLabel({
        text: "RM7",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId600"
    });
    $.__views.__alloyId597.add($.__views.__alloyId600);
    $.__views.__alloyId601 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId601"
    });
    $.__views.mobileInternet.add($.__views.__alloyId601);
    subscribe ? $.__views.__alloyId601.addEventListener("click", subscribe) : __defers["$.__views.__alloyId601!click!subscribe"] = true;
    $.__views.__alloyId602 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId602"
    });
    $.__views.__alloyId601.add($.__views.__alloyId602);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId569!click!back"] && $.__views.__alloyId569.addEventListener("click", back);
    __defers["$.__views.__alloyId601!click!subscribe"] && $.__views.__alloyId601.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;