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
    $.__views.__alloyId640 = Alloy.createController("_header", {
        id: "__alloyId640",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId640.setParent($.__views.penang);
    $.__views.__alloyId641 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId641"
    });
    $.__views.penang.add($.__views.__alloyId641);
    $.__views.__alloyId642 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId642"
    });
    $.__views.__alloyId641.add($.__views.__alloyId642);
    $.__views.__alloyId643 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId643"
    });
    $.__views.__alloyId641.add($.__views.__alloyId643);
    back ? $.__views.__alloyId643.addEventListener("click", back) : __defers["$.__views.__alloyId643!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang.add($.__views.scrollView);
    $.__views.__alloyId644 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId644"
    });
    $.__views.scrollView.add($.__views.__alloyId644);
    $.__views.__alloyId645 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId645"
    });
    $.__views.__alloyId644.add($.__views.__alloyId645);
    $.__views.__alloyId646 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId646"
    });
    $.__views.__alloyId645.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId647"
    });
    $.__views.__alloyId644.add($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId648"
    });
    $.__views.__alloyId647.add($.__views.__alloyId648);
    $.__views.__alloyId649 = Ti.UI.createLabel({
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId649"
    });
    $.__views.__alloyId647.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId650"
    });
    $.__views.scrollView.add($.__views.__alloyId650);
    $.__views.__alloyId651 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId651"
    });
    $.__views.__alloyId650.add($.__views.__alloyId651);
    $.__views.__alloyId652 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId652"
    });
    $.__views.__alloyId651.add($.__views.__alloyId652);
    $.__views.__alloyId653 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId653"
    });
    $.__views.__alloyId650.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId654"
    });
    $.__views.__alloyId653.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId655"
    });
    $.__views.__alloyId653.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId656"
    });
    $.__views.__alloyId650.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId657"
    });
    $.__views.__alloyId656.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createLabel({
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId658"
    });
    $.__views.__alloyId656.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId659"
    });
    $.__views.__alloyId650.add($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId660"
    });
    $.__views.__alloyId659.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId661"
    });
    $.__views.__alloyId659.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId662"
    });
    $.__views.__alloyId650.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId663"
    });
    $.__views.__alloyId662.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId664"
    });
    $.__views.__alloyId662.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId665"
    });
    $.__views.scrollView.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId666"
    });
    $.__views.__alloyId665.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId667"
    });
    $.__views.__alloyId666.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId668"
    });
    $.__views.__alloyId665.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId669"
    });
    $.__views.__alloyId668.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId670"
    });
    $.__views.__alloyId668.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId671"
    });
    $.__views.__alloyId665.add($.__views.__alloyId671);
    $.__views.__alloyId672 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId672"
    });
    $.__views.__alloyId671.add($.__views.__alloyId672);
    $.__views.__alloyId673 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId673"
    });
    $.__views.__alloyId671.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId674"
    });
    $.__views.penang.add($.__views.__alloyId674);
    subscribe ? $.__views.__alloyId674.addEventListener("click", subscribe) : __defers["$.__views.__alloyId674!click!subscribe"] = true;
    $.__views.__alloyId675 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId675"
    });
    $.__views.__alloyId674.add($.__views.__alloyId675);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId643!click!back"] && $.__views.__alloyId643.addEventListener("click", back);
    __defers["$.__views.__alloyId674!click!subscribe"] && $.__views.__alloyId674.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;