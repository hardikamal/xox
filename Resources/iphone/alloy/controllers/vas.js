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
        DRAWER.navigation("myAccount", 1);
    }
    function forwarding(e) {
        console.log("forwarding: " + e.value);
    }
    function presentation(e) {
        console.log("presentation: " + e.value);
    }
    function restriction(e) {
        console.log("restriction: " + e.value);
    }
    function international(e) {
        console.log("international: " + e.value);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "vas";
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
    $.__views.vas = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "vas"
    });
    $.__views.vas && $.addTopLevelView($.__views.vas);
    $.__views.__alloyId2836 = Alloy.createController("_header", {
        id: "__alloyId2836",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId2836.setParent($.__views.vas);
    $.__views.__alloyId2837 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2837"
    });
    $.__views.vas.add($.__views.__alloyId2837);
    $.__views.__alloyId2838 = Ti.UI.createLabel({
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2838"
    });
    $.__views.__alloyId2837.add($.__views.__alloyId2838);
    $.__views.__alloyId2839 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2839"
    });
    $.__views.__alloyId2837.add($.__views.__alloyId2839);
    back ? $.__views.__alloyId2839.addEventListener("click", back) : __defers["$.__views.__alloyId2839!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId2840 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2840"
    });
    $.__views.scrollView.add($.__views.__alloyId2840);
    $.__views.__alloyId2841 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2841"
    });
    $.__views.__alloyId2840.add($.__views.__alloyId2841);
    $.__views.__alloyId2842 = Ti.UI.createLabel({
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2842"
    });
    $.__views.__alloyId2841.add($.__views.__alloyId2842);
    $.__views.__alloyId2843 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2843"
    });
    $.__views.__alloyId2840.add($.__views.__alloyId2843);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId2843.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2844 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2844"
    });
    $.__views.scrollView.add($.__views.__alloyId2844);
    $.__views.__alloyId2845 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2845"
    });
    $.__views.__alloyId2844.add($.__views.__alloyId2845);
    $.__views.__alloyId2846 = Ti.UI.createLabel({
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2846"
    });
    $.__views.__alloyId2845.add($.__views.__alloyId2846);
    $.__views.__alloyId2847 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2847"
    });
    $.__views.__alloyId2844.add($.__views.__alloyId2847);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2847.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId2848 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2848"
    });
    $.__views.scrollView.add($.__views.__alloyId2848);
    $.__views.__alloyId2849 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2849"
    });
    $.__views.__alloyId2848.add($.__views.__alloyId2849);
    $.__views.__alloyId2850 = Ti.UI.createLabel({
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2850"
    });
    $.__views.__alloyId2849.add($.__views.__alloyId2850);
    $.__views.__alloyId2851 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2851"
    });
    $.__views.__alloyId2848.add($.__views.__alloyId2851);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId2851.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId2852 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2852"
    });
    $.__views.scrollView.add($.__views.__alloyId2852);
    $.__views.__alloyId2853 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2853"
    });
    $.__views.__alloyId2852.add($.__views.__alloyId2853);
    $.__views.__alloyId2854 = Ti.UI.createLabel({
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2854"
    });
    $.__views.__alloyId2853.add($.__views.__alloyId2854);
    $.__views.__alloyId2855 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2855"
    });
    $.__views.__alloyId2852.add($.__views.__alloyId2855);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId2855.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId2856 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2856"
    });
    $.__views.scrollView.add($.__views.__alloyId2856);
    $.__views.__alloyId2857 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId2857"
    });
    $.__views.__alloyId2856.add($.__views.__alloyId2857);
    $.__views.__alloyId2858 = Ti.UI.createLabel({
        text: "IVR Language",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2858"
    });
    $.__views.__alloyId2857.add($.__views.__alloyId2858);
    $.__views.__alloyId2859 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2859"
    });
    $.__views.__alloyId2856.add($.__views.__alloyId2859);
    $.__views.__alloyId2860 = Ti.UI.createLabel({
        text: "English",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2860"
    });
    $.__views.__alloyId2859.add($.__views.__alloyId2860);
    $.__views.__alloyId2861 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2861"
    });
    $.__views.__alloyId2856.add($.__views.__alloyId2861);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2861.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2839!click!back"] && $.__views.__alloyId2839.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;