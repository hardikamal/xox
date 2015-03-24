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
    $.__views.__alloyId2587 = Alloy.createController("_header", {
        id: "__alloyId2587",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId2587.setParent($.__views.vas);
    $.__views.__alloyId2588 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2588"
    });
    $.__views.vas.add($.__views.__alloyId2588);
    $.__views.__alloyId2589 = Ti.UI.createLabel({
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2589"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2589);
    $.__views.__alloyId2590 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2590"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2590);
    back ? $.__views.__alloyId2590.addEventListener("click", back) : __defers["$.__views.__alloyId2590!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId2591 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2591"
    });
    $.__views.scrollView.add($.__views.__alloyId2591);
    $.__views.__alloyId2592 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2592"
    });
    $.__views.__alloyId2591.add($.__views.__alloyId2592);
    $.__views.__alloyId2593 = Ti.UI.createLabel({
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2593"
    });
    $.__views.__alloyId2592.add($.__views.__alloyId2593);
    $.__views.__alloyId2594 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2594"
    });
    $.__views.__alloyId2591.add($.__views.__alloyId2594);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId2594.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2595 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2595"
    });
    $.__views.scrollView.add($.__views.__alloyId2595);
    $.__views.__alloyId2596 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2596"
    });
    $.__views.__alloyId2595.add($.__views.__alloyId2596);
    $.__views.__alloyId2597 = Ti.UI.createLabel({
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2597"
    });
    $.__views.__alloyId2596.add($.__views.__alloyId2597);
    $.__views.__alloyId2598 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2598"
    });
    $.__views.__alloyId2595.add($.__views.__alloyId2598);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2598.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId2599 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2599"
    });
    $.__views.scrollView.add($.__views.__alloyId2599);
    $.__views.__alloyId2600 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2600"
    });
    $.__views.__alloyId2599.add($.__views.__alloyId2600);
    $.__views.__alloyId2601 = Ti.UI.createLabel({
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2601"
    });
    $.__views.__alloyId2600.add($.__views.__alloyId2601);
    $.__views.__alloyId2602 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2602"
    });
    $.__views.__alloyId2599.add($.__views.__alloyId2602);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId2602.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId2603 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2603"
    });
    $.__views.scrollView.add($.__views.__alloyId2603);
    $.__views.__alloyId2604 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2604"
    });
    $.__views.__alloyId2603.add($.__views.__alloyId2604);
    $.__views.__alloyId2605 = Ti.UI.createLabel({
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2605"
    });
    $.__views.__alloyId2604.add($.__views.__alloyId2605);
    $.__views.__alloyId2606 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2606"
    });
    $.__views.__alloyId2603.add($.__views.__alloyId2606);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId2606.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId2607 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2607"
    });
    $.__views.scrollView.add($.__views.__alloyId2607);
    $.__views.__alloyId2608 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId2608"
    });
    $.__views.__alloyId2607.add($.__views.__alloyId2608);
    $.__views.__alloyId2609 = Ti.UI.createLabel({
        text: "IVR Language",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2609"
    });
    $.__views.__alloyId2608.add($.__views.__alloyId2609);
    $.__views.__alloyId2610 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2610"
    });
    $.__views.__alloyId2607.add($.__views.__alloyId2610);
    $.__views.__alloyId2611 = Ti.UI.createLabel({
        text: "English",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2611"
    });
    $.__views.__alloyId2610.add($.__views.__alloyId2611);
    $.__views.__alloyId2612 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2612"
    });
    $.__views.__alloyId2607.add($.__views.__alloyId2612);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2612.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2590!click!back"] && $.__views.__alloyId2590.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;