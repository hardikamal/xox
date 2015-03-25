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
    $.__views.__alloyId2748 = Alloy.createController("_header", {
        id: "__alloyId2748",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2748.setParent($.__views.support);
    $.__views.__alloyId2749 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2749"
    });
    $.__views.support.add($.__views.__alloyId2749);
    $.__views.__alloyId2750 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2750"
    });
    $.__views.__alloyId2749.add($.__views.__alloyId2750);
    $.__views.__alloyId2751 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2751"
    });
    $.__views.support.add($.__views.__alloyId2751);
    $.__views.__alloyId2752 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2752"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2752);
    faq ? $.__views.__alloyId2752.addEventListener("click", faq) : __defers["$.__views.__alloyId2752!click!faq"] = true;
    $.__views.__alloyId2753 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2753"
    });
    $.__views.__alloyId2752.add($.__views.__alloyId2753);
    $.__views.__alloyId2754 = Ti.UI.createLabel({
        text: "FAQs",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2754"
    });
    $.__views.__alloyId2753.add($.__views.__alloyId2754);
    $.__views.__alloyId2755 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2755"
    });
    $.__views.__alloyId2752.add($.__views.__alloyId2755);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2755.add($.__views.arrow1);
    $.__views.__alloyId2756 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2756"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2756);
    $.__views.__alloyId2757 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2757"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2757);
    userGuide ? $.__views.__alloyId2757.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2757!click!userGuide"] = true;
    $.__views.__alloyId2758 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2758"
    });
    $.__views.__alloyId2757.add($.__views.__alloyId2758);
    $.__views.__alloyId2759 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2759"
    });
    $.__views.__alloyId2758.add($.__views.__alloyId2759);
    $.__views.__alloyId2760 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2760"
    });
    $.__views.__alloyId2757.add($.__views.__alloyId2760);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2760.add($.__views.arrow2);
    $.__views.__alloyId2761 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2761"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2761);
    $.__views.__alloyId2762 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2762"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2762);
    terms ? $.__views.__alloyId2762.addEventListener("click", terms) : __defers["$.__views.__alloyId2762!click!terms"] = true;
    $.__views.__alloyId2763 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2763"
    });
    $.__views.__alloyId2762.add($.__views.__alloyId2763);
    $.__views.__alloyId2764 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2764"
    });
    $.__views.__alloyId2763.add($.__views.__alloyId2764);
    $.__views.__alloyId2765 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2765"
    });
    $.__views.__alloyId2762.add($.__views.__alloyId2765);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2765.add($.__views.arrow3);
    $.__views.__alloyId2766 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2766"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2766);
    $.__views.__alloyId2767 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2767"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2767);
    notification ? $.__views.__alloyId2767.addEventListener("click", notification) : __defers["$.__views.__alloyId2767!click!notification"] = true;
    $.__views.__alloyId2768 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2768"
    });
    $.__views.__alloyId2767.add($.__views.__alloyId2768);
    $.__views.__alloyId2769 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2769"
    });
    $.__views.__alloyId2768.add($.__views.__alloyId2769);
    $.__views.__alloyId2770 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2770"
    });
    $.__views.__alloyId2767.add($.__views.__alloyId2770);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2770.add($.__views.arrow4);
    $.__views.__alloyId2771 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2771"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2771);
    $.__views.__alloyId2772 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2772"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2772);
    feedback ? $.__views.__alloyId2772.addEventListener("click", feedback) : __defers["$.__views.__alloyId2772!click!feedback"] = true;
    $.__views.__alloyId2773 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2773"
    });
    $.__views.__alloyId2772.add($.__views.__alloyId2773);
    $.__views.__alloyId2774 = Ti.UI.createLabel({
        text: "Feedback",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2774"
    });
    $.__views.__alloyId2773.add($.__views.__alloyId2774);
    $.__views.__alloyId2775 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2775"
    });
    $.__views.__alloyId2772.add($.__views.__alloyId2775);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2775.add($.__views.arrow5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2752!click!faq"] && $.__views.__alloyId2752.addEventListener("click", faq);
    __defers["$.__views.__alloyId2757!click!userGuide"] && $.__views.__alloyId2757.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2762!click!terms"] && $.__views.__alloyId2762.addEventListener("click", terms);
    __defers["$.__views.__alloyId2767!click!notification"] && $.__views.__alloyId2767.addEventListener("click", notification);
    __defers["$.__views.__alloyId2772!click!feedback"] && $.__views.__alloyId2772.addEventListener("click", feedback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;