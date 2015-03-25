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
    $.__views.__alloyId2892 = Alloy.createController("_header", {
        id: "__alloyId2892",
        __parentSymbol: $.__views.support
    });
    $.__views.__alloyId2892.setParent($.__views.support);
    $.__views.__alloyId2893 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2893"
    });
    $.__views.support.add($.__views.__alloyId2893);
    $.__views.__alloyId2894 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId2894"
    });
    $.__views.__alloyId2893.add($.__views.__alloyId2894);
    $.__views.__alloyId2895 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId2895"
    });
    $.__views.support.add($.__views.__alloyId2895);
    $.__views.__alloyId2896 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2896"
    });
    $.__views.__alloyId2895.add($.__views.__alloyId2896);
    faq ? $.__views.__alloyId2896.addEventListener("click", faq) : __defers["$.__views.__alloyId2896!click!faq"] = true;
    $.__views.__alloyId2897 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2897"
    });
    $.__views.__alloyId2896.add($.__views.__alloyId2897);
    $.__views.__alloyId2898 = Ti.UI.createLabel({
        text: "FAQs",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2898"
    });
    $.__views.__alloyId2897.add($.__views.__alloyId2898);
    $.__views.__alloyId2899 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2899"
    });
    $.__views.__alloyId2896.add($.__views.__alloyId2899);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2899.add($.__views.arrow1);
    $.__views.__alloyId2900 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2900"
    });
    $.__views.__alloyId2895.add($.__views.__alloyId2900);
    $.__views.__alloyId2901 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2901"
    });
    $.__views.__alloyId2895.add($.__views.__alloyId2901);
    userGuide ? $.__views.__alloyId2901.addEventListener("click", userGuide) : __defers["$.__views.__alloyId2901!click!userGuide"] = true;
    $.__views.__alloyId2902 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2902"
    });
    $.__views.__alloyId2901.add($.__views.__alloyId2902);
    $.__views.__alloyId2903 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2903"
    });
    $.__views.__alloyId2902.add($.__views.__alloyId2903);
    $.__views.__alloyId2904 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2904"
    });
    $.__views.__alloyId2901.add($.__views.__alloyId2904);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2904.add($.__views.arrow2);
    $.__views.__alloyId2905 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2905"
    });
    $.__views.__alloyId2895.add($.__views.__alloyId2905);
    $.__views.__alloyId2906 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2906"
    });
    $.__views.__alloyId2895.add($.__views.__alloyId2906);
    terms ? $.__views.__alloyId2906.addEventListener("click", terms) : __defers["$.__views.__alloyId2906!click!terms"] = true;
    $.__views.__alloyId2907 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2907"
    });
    $.__views.__alloyId2906.add($.__views.__alloyId2907);
    $.__views.__alloyId2908 = Ti.UI.createLabel({
        text: "Terms & Conditions",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2908"
    });
    $.__views.__alloyId2907.add($.__views.__alloyId2908);
    $.__views.__alloyId2909 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2909"
    });
    $.__views.__alloyId2906.add($.__views.__alloyId2909);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2909.add($.__views.arrow3);
    $.__views.__alloyId2910 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2910"
    });
    $.__views.__alloyId2895.add($.__views.__alloyId2910);
    $.__views.__alloyId2911 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2911"
    });
    $.__views.__alloyId2895.add($.__views.__alloyId2911);
    notification ? $.__views.__alloyId2911.addEventListener("click", notification) : __defers["$.__views.__alloyId2911!click!notification"] = true;
    $.__views.__alloyId2912 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2912"
    });
    $.__views.__alloyId2911.add($.__views.__alloyId2912);
    $.__views.__alloyId2913 = Ti.UI.createLabel({
        text: "Notification",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2913"
    });
    $.__views.__alloyId2912.add($.__views.__alloyId2913);
    $.__views.__alloyId2914 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2914"
    });
    $.__views.__alloyId2911.add($.__views.__alloyId2914);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2914.add($.__views.arrow4);
    $.__views.__alloyId2915 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        width: "100%",
        height: "1",
        id: "__alloyId2915"
    });
    $.__views.__alloyId2895.add($.__views.__alloyId2915);
    $.__views.__alloyId2916 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId2916"
    });
    $.__views.__alloyId2895.add($.__views.__alloyId2916);
    feedback ? $.__views.__alloyId2916.addEventListener("click", feedback) : __defers["$.__views.__alloyId2916!click!feedback"] = true;
    $.__views.__alloyId2917 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2917"
    });
    $.__views.__alloyId2916.add($.__views.__alloyId2917);
    $.__views.__alloyId2918 = Ti.UI.createLabel({
        text: "Feedback",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2918"
    });
    $.__views.__alloyId2917.add($.__views.__alloyId2918);
    $.__views.__alloyId2919 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId2919"
    });
    $.__views.__alloyId2916.add($.__views.__alloyId2919);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2919.add($.__views.arrow5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2896!click!faq"] && $.__views.__alloyId2896.addEventListener("click", faq);
    __defers["$.__views.__alloyId2901!click!userGuide"] && $.__views.__alloyId2901.addEventListener("click", userGuide);
    __defers["$.__views.__alloyId2906!click!terms"] && $.__views.__alloyId2906.addEventListener("click", terms);
    __defers["$.__views.__alloyId2911!click!notification"] && $.__views.__alloyId2911.addEventListener("click", notification);
    __defers["$.__views.__alloyId2916!click!feedback"] && $.__views.__alloyId2916.addEventListener("click", feedback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;