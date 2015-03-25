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
    $.__views.__alloyId2900 = Alloy.createController("_header", {
        id: "__alloyId2900",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId2900.setParent($.__views.vas);
    $.__views.__alloyId2901 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2901"
    });
    $.__views.vas.add($.__views.__alloyId2901);
    $.__views.__alloyId2902 = Ti.UI.createLabel({
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2902"
    });
    $.__views.__alloyId2901.add($.__views.__alloyId2902);
    $.__views.__alloyId2903 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2903"
    });
    $.__views.__alloyId2901.add($.__views.__alloyId2903);
    back ? $.__views.__alloyId2903.addEventListener("click", back) : __defers["$.__views.__alloyId2903!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId2904 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2904"
    });
    $.__views.scrollView.add($.__views.__alloyId2904);
    $.__views.__alloyId2905 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2905"
    });
    $.__views.__alloyId2904.add($.__views.__alloyId2905);
    $.__views.__alloyId2906 = Ti.UI.createLabel({
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2906"
    });
    $.__views.__alloyId2905.add($.__views.__alloyId2906);
    $.__views.__alloyId2907 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2907"
    });
    $.__views.__alloyId2904.add($.__views.__alloyId2907);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId2907.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2908 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2908"
    });
    $.__views.scrollView.add($.__views.__alloyId2908);
    $.__views.__alloyId2909 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2909"
    });
    $.__views.__alloyId2908.add($.__views.__alloyId2909);
    $.__views.__alloyId2910 = Ti.UI.createLabel({
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2910"
    });
    $.__views.__alloyId2909.add($.__views.__alloyId2910);
    $.__views.__alloyId2911 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2911"
    });
    $.__views.__alloyId2908.add($.__views.__alloyId2911);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2911.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId2912 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2912"
    });
    $.__views.scrollView.add($.__views.__alloyId2912);
    $.__views.__alloyId2913 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2913"
    });
    $.__views.__alloyId2912.add($.__views.__alloyId2913);
    $.__views.__alloyId2914 = Ti.UI.createLabel({
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2914"
    });
    $.__views.__alloyId2913.add($.__views.__alloyId2914);
    $.__views.__alloyId2915 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2915"
    });
    $.__views.__alloyId2912.add($.__views.__alloyId2915);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId2915.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId2916 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2916"
    });
    $.__views.scrollView.add($.__views.__alloyId2916);
    $.__views.__alloyId2917 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2917"
    });
    $.__views.__alloyId2916.add($.__views.__alloyId2917);
    $.__views.__alloyId2918 = Ti.UI.createLabel({
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2918"
    });
    $.__views.__alloyId2917.add($.__views.__alloyId2918);
    $.__views.__alloyId2919 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2919"
    });
    $.__views.__alloyId2916.add($.__views.__alloyId2919);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId2919.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId2920 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2920"
    });
    $.__views.scrollView.add($.__views.__alloyId2920);
    $.__views.__alloyId2921 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId2921"
    });
    $.__views.__alloyId2920.add($.__views.__alloyId2921);
    $.__views.__alloyId2922 = Ti.UI.createLabel({
        text: "IVR Language",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2922"
    });
    $.__views.__alloyId2921.add($.__views.__alloyId2922);
    $.__views.__alloyId2923 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2923"
    });
    $.__views.__alloyId2920.add($.__views.__alloyId2923);
    $.__views.__alloyId2924 = Ti.UI.createLabel({
        text: "English",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2924"
    });
    $.__views.__alloyId2923.add($.__views.__alloyId2924);
    $.__views.__alloyId2925 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2925"
    });
    $.__views.__alloyId2920.add($.__views.__alloyId2925);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2925.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2903!click!back"] && $.__views.__alloyId2903.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;