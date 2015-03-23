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
    $.__views.__alloyId2508 = Alloy.createController("_header", {
        id: "__alloyId2508",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId2508.setParent($.__views.vas);
    $.__views.__alloyId2509 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2509"
    });
    $.__views.vas.add($.__views.__alloyId2509);
    $.__views.__alloyId2510 = Ti.UI.createLabel({
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2510"
    });
    $.__views.__alloyId2509.add($.__views.__alloyId2510);
    $.__views.__alloyId2511 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2511"
    });
    $.__views.__alloyId2509.add($.__views.__alloyId2511);
    back ? $.__views.__alloyId2511.addEventListener("click", back) : __defers["$.__views.__alloyId2511!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId2512 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2512"
    });
    $.__views.scrollView.add($.__views.__alloyId2512);
    $.__views.__alloyId2513 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2513"
    });
    $.__views.__alloyId2512.add($.__views.__alloyId2513);
    $.__views.__alloyId2514 = Ti.UI.createLabel({
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2514"
    });
    $.__views.__alloyId2513.add($.__views.__alloyId2514);
    $.__views.__alloyId2515 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2515"
    });
    $.__views.__alloyId2512.add($.__views.__alloyId2515);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId2515.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2516 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2516"
    });
    $.__views.scrollView.add($.__views.__alloyId2516);
    $.__views.__alloyId2517 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2517"
    });
    $.__views.__alloyId2516.add($.__views.__alloyId2517);
    $.__views.__alloyId2518 = Ti.UI.createLabel({
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2518"
    });
    $.__views.__alloyId2517.add($.__views.__alloyId2518);
    $.__views.__alloyId2519 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2519"
    });
    $.__views.__alloyId2516.add($.__views.__alloyId2519);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2519.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId2520 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2520"
    });
    $.__views.scrollView.add($.__views.__alloyId2520);
    $.__views.__alloyId2521 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2521"
    });
    $.__views.__alloyId2520.add($.__views.__alloyId2521);
    $.__views.__alloyId2522 = Ti.UI.createLabel({
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2522"
    });
    $.__views.__alloyId2521.add($.__views.__alloyId2522);
    $.__views.__alloyId2523 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2523"
    });
    $.__views.__alloyId2520.add($.__views.__alloyId2523);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId2523.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId2524 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2524"
    });
    $.__views.scrollView.add($.__views.__alloyId2524);
    $.__views.__alloyId2525 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2525"
    });
    $.__views.__alloyId2524.add($.__views.__alloyId2525);
    $.__views.__alloyId2526 = Ti.UI.createLabel({
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2526"
    });
    $.__views.__alloyId2525.add($.__views.__alloyId2526);
    $.__views.__alloyId2527 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2527"
    });
    $.__views.__alloyId2524.add($.__views.__alloyId2527);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId2527.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId2528 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId2528"
    });
    $.__views.scrollView.add($.__views.__alloyId2528);
    $.__views.__alloyId2529 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId2529"
    });
    $.__views.__alloyId2528.add($.__views.__alloyId2529);
    $.__views.__alloyId2530 = Ti.UI.createLabel({
        text: "IVR Language",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2530"
    });
    $.__views.__alloyId2529.add($.__views.__alloyId2530);
    $.__views.__alloyId2531 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2531"
    });
    $.__views.__alloyId2528.add($.__views.__alloyId2531);
    $.__views.__alloyId2532 = Ti.UI.createLabel({
        text: "English",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2532"
    });
    $.__views.__alloyId2531.add($.__views.__alloyId2532);
    $.__views.__alloyId2533 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2533"
    });
    $.__views.__alloyId2528.add($.__views.__alloyId2533);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2533.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2511!click!back"] && $.__views.__alloyId2511.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;