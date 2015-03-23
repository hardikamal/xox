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
<<<<<<< HEAD
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
=======
    $.__views.__alloyId1790 = Alloy.createController("_header", {
        id: "__alloyId1790",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId1790.setParent($.__views.vas);
    $.__views.__alloyId1791 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1791"
    });
    $.__views.vas.add($.__views.__alloyId1791);
    $.__views.__alloyId1792 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2510"
    });
    $.__views.__alloyId2509.add($.__views.__alloyId2510);
    $.__views.__alloyId2511 = Ti.UI.createImageView({
=======
        id: "__alloyId1792"
    });
    $.__views.__alloyId1791.add($.__views.__alloyId1792);
    $.__views.__alloyId1793 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId2511"
    });
    $.__views.__alloyId2509.add($.__views.__alloyId2511);
    back ? $.__views.__alloyId2511.addEventListener("click", back) : __defers["$.__views.__alloyId2511!click!back"] = true;
=======
        id: "__alloyId1793"
    });
    $.__views.__alloyId1791.add($.__views.__alloyId1793);
    back ? $.__views.__alloyId1793.addEventListener("click", back) : __defers["$.__views.__alloyId1793!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId2512 = Ti.UI.createView({
=======
    $.__views.__alloyId1794 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
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
=======
        id: "__alloyId1794"
    });
    $.__views.scrollView.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1795"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2514"
    });
    $.__views.__alloyId2513.add($.__views.__alloyId2514);
    $.__views.__alloyId2515 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2515"
    });
    $.__views.__alloyId2512.add($.__views.__alloyId2515);
=======
        id: "__alloyId1796"
    });
    $.__views.__alloyId1795.add($.__views.__alloyId1796);
    $.__views.__alloyId1797 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1797"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1797);
>>>>>>> origin/master
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
<<<<<<< HEAD
    $.__views.__alloyId2515.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2516 = Ti.UI.createView({
=======
    $.__views.__alloyId1797.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId1798 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
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
=======
        id: "__alloyId1798"
    });
    $.__views.scrollView.add($.__views.__alloyId1798);
    $.__views.__alloyId1799 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1799"
    });
    $.__views.__alloyId1798.add($.__views.__alloyId1799);
    $.__views.__alloyId1800 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2518"
    });
    $.__views.__alloyId2517.add($.__views.__alloyId2518);
    $.__views.__alloyId2519 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2519"
    });
    $.__views.__alloyId2516.add($.__views.__alloyId2519);
=======
        id: "__alloyId1800"
    });
    $.__views.__alloyId1799.add($.__views.__alloyId1800);
    $.__views.__alloyId1801 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1801"
    });
    $.__views.__alloyId1798.add($.__views.__alloyId1801);
>>>>>>> origin/master
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
<<<<<<< HEAD
    $.__views.__alloyId2519.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId2520 = Ti.UI.createView({
=======
    $.__views.__alloyId1801.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId1802 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
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
=======
        id: "__alloyId1802"
    });
    $.__views.scrollView.add($.__views.__alloyId1802);
    $.__views.__alloyId1803 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1803"
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2522"
    });
    $.__views.__alloyId2521.add($.__views.__alloyId2522);
    $.__views.__alloyId2523 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2523"
    });
    $.__views.__alloyId2520.add($.__views.__alloyId2523);
=======
        id: "__alloyId1804"
    });
    $.__views.__alloyId1803.add($.__views.__alloyId1804);
    $.__views.__alloyId1805 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1805"
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1805);
>>>>>>> origin/master
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
<<<<<<< HEAD
    $.__views.__alloyId2523.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId2524 = Ti.UI.createView({
=======
    $.__views.__alloyId1805.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId1806 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
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
=======
        id: "__alloyId1806"
    });
    $.__views.scrollView.add($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId1807"
    });
    $.__views.__alloyId1806.add($.__views.__alloyId1807);
    $.__views.__alloyId1808 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2526"
    });
    $.__views.__alloyId2525.add($.__views.__alloyId2526);
    $.__views.__alloyId2527 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2527"
    });
    $.__views.__alloyId2524.add($.__views.__alloyId2527);
=======
        id: "__alloyId1808"
    });
    $.__views.__alloyId1807.add($.__views.__alloyId1808);
    $.__views.__alloyId1809 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1809"
    });
    $.__views.__alloyId1806.add($.__views.__alloyId1809);
>>>>>>> origin/master
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
<<<<<<< HEAD
    $.__views.__alloyId2527.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId2528 = Ti.UI.createView({
=======
    $.__views.__alloyId1809.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId1810 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
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
=======
        id: "__alloyId1810"
    });
    $.__views.scrollView.add($.__views.__alloyId1810);
    $.__views.__alloyId1811 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId1811"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1811);
    $.__views.__alloyId1812 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "IVR Language",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId1812"
    });
    $.__views.__alloyId1811.add($.__views.__alloyId1812);
    $.__views.__alloyId1813 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId1813"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1813);
    $.__views.__alloyId1814 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "English",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2532"
    });
    $.__views.__alloyId2531.add($.__views.__alloyId2532);
    $.__views.__alloyId2533 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2533"
    });
    $.__views.__alloyId2528.add($.__views.__alloyId2533);
=======
        id: "__alloyId1814"
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1814);
    $.__views.__alloyId1815 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1815"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1815);
>>>>>>> origin/master
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId2533.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2511!click!back"] && $.__views.__alloyId2511.addEventListener("click", back);
=======
    $.__views.__alloyId1815.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId1793!click!back"] && $.__views.__alloyId1793.addEventListener("click", back);
>>>>>>> origin/master
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;