function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function faq() {
        DRAWER.navigation("faq", 1);
    }
    function userGuide() {
        DRAWER.navigation("userGuide", 1);
    }
    function terms() {
        DRAWER.navigation("terms", 1);
    }
    function notification() {
        DRAWER.navigation("notification", 1);
    }
    function feedback() {
        console.log("feedback");
        DRAWER.navigation("report", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "support";
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
    $.__views.support = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "support"
    });
    $.__views.support && $.addTopLevelView($.__views.support);
    $.__views.__alloyId2812 = Alloy.createController("_header", {
        id: "__alloyId2812",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2812.setParent($.__views.support);
    $.__views.__alloyId2813 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2813"
    });
    $.__views.support.add($.__views.__alloyId2813);
    $.__views.__alloyId2814 = Ti.UI.createLabel({
        color: "white",
        backgroundColor: "transparent",
        font: {
            fontSize: "18dp"
        },
        text: "Support",
        left: "10",
        top: "10",
        id: "__alloyId2814"
    });
    $.__views.__alloyId2813.add($.__views.__alloyId2814);
    $.__views.__alloyId2815 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2815"
    });
    $.__views.support.add($.__views.__alloyId2815);
    $.__views.__alloyId2816 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2816"
    });
    $.__views.__alloyId2815.add($.__views.__alloyId2816);
    faq ? $.__views.__alloyId2816.addEventListener("click", faq) : __defers["$.__views.__alloyId2816!click!faq"] = true;
    $.__views.__alloyId2817 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2817"
    });
    $.__views.__alloyId2816.add($.__views.__alloyId2817);
    $.__views.__alloyId2818 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        text: "FAQs",
        left: "5%",
        id: "__alloyId2818"
    });
    $.__views.__alloyId2817.add($.__views.__alloyId2818);
    $.__views.__alloyId2819 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2819"
    });
    $.__views.__alloyId2816.add($.__views.__alloyId2819);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2819.add($.__views.arrow1);
    $.__views.__alloyId2820 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2820"
    });
    $.__views.__alloyId2815.add($.__views.__alloyId2820);
    $.__views.__alloyId2821 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2821"
    });
    $.__views.__alloyId2815.add($.__views.__alloyId2821);
    userGuide ? $.__views.__alloyId2821.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2821!click!userGuide"] = true;
    $.__views.__alloyId2822 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2822"
    });
    $.__views.__alloyId2821.add($.__views.__alloyId2822);
    $.__views.__alloyId2823 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        text: "User Guide",
        left: "5%",
        id: "__alloyId2823"
    });
    $.__views.__alloyId2822.add($.__views.__alloyId2823);
    $.__views.__alloyId2824 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2824"
    });
    $.__views.__alloyId2821.add($.__views.__alloyId2824);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2824.add($.__views.arrow2);
    $.__views.__alloyId2825 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2825"
    });
    $.__views.__alloyId2815.add($.__views.__alloyId2825);
    $.__views.__alloyId2826 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2826"
    });
    $.__views.__alloyId2815.add($.__views.__alloyId2826);
    terms ? $.__views.__alloyId2826.addEventListener("click", terms) : __defers["$.__views.__alloyId2826!click!terms"] = true;
    $.__views.__alloyId2827 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2827"
    });
    $.__views.__alloyId2826.add($.__views.__alloyId2827);
    $.__views.__alloyId2828 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        text: "Terms & Conditions",
        left: "5%",
        id: "__alloyId2828"
    });
    $.__views.__alloyId2827.add($.__views.__alloyId2828);
    $.__views.__alloyId2829 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2829"
    });
    $.__views.__alloyId2826.add($.__views.__alloyId2829);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2829.add($.__views.arrow3);
    $.__views.__alloyId2830 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2830"
    });
    $.__views.__alloyId2815.add($.__views.__alloyId2830);
    $.__views.__alloyId2831 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2831"
    });
    $.__views.__alloyId2815.add($.__views.__alloyId2831);
    notification ? $.__views.__alloyId2831.addEventListener("click", notification) : __defers["$.__views.__alloyId2831!click!notification"] = true;
    $.__views.__alloyId2832 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2832"
    });
    $.__views.__alloyId2831.add($.__views.__alloyId2832);
    $.__views.__alloyId2833 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        text: "Notification",
        left: "5%",
        id: "__alloyId2833"
    });
    $.__views.__alloyId2832.add($.__views.__alloyId2833);
    $.__views.__alloyId2834 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2834"
    });
    $.__views.__alloyId2831.add($.__views.__alloyId2834);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2834.add($.__views.arrow4);
    $.__views.__alloyId2835 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2835"
    });
    $.__views.__alloyId2815.add($.__views.__alloyId2835);
    $.__views.__alloyId2836 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2836"
    });
    $.__views.__alloyId2815.add($.__views.__alloyId2836);
    feedback ? $.__views.__alloyId2836.addEventListener("click", feedback) : __defers["$.__views.__alloyId2836!click!feedback"] = true;
    $.__views.__alloyId2837 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2837"
    });
    $.__views.__alloyId2836.add($.__views.__alloyId2837);
    $.__views.__alloyId2838 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        text: "Feedback",
        left: "5%",
        id: "__alloyId2838"
    });
    $.__views.__alloyId2837.add($.__views.__alloyId2838);
    $.__views.__alloyId2839 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2839"
    });
    $.__views.__alloyId2836.add($.__views.__alloyId2839);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2839.add($.__views.arrow5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2816!click!faq"] && $.__views.__alloyId2816.addEventListener("click", faq);
    __defers["$.__views.__alloyId2821!click!userGuide"] && $.__views.__alloyId2821.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2826!click!terms"] && $.__views.__alloyId2826.addEventListener("click", terms);
    __defers["$.__views.__alloyId2831!click!notification"] && $.__views.__alloyId2831.addEventListener("click", notification);
    __defers["$.__views.__alloyId2836!click!feedback"] && $.__views.__alloyId2836.addEventListener("click", feedback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;