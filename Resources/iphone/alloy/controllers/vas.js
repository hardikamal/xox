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
    $.__views.__alloyId2462 = Alloy.createController("_header", {
        id: "__alloyId2462",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId2462.setParent($.__views.vas);
    $.__views.__alloyId2463 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2463"
    });
    $.__views.vas.add($.__views.__alloyId2463);
    $.__views.__alloyId2464 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2819 = Alloy.createController("_header", {
        id: "__alloyId2819",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId2819.setParent($.__views.vas);
    $.__views.__alloyId2820 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2820"
    });
    $.__views.vas.add($.__views.__alloyId2820);
    $.__views.__alloyId2821 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2462 = Alloy.createController("_header", {
        id: "__alloyId2462",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId2462.setParent($.__views.vas);
    $.__views.__alloyId2463 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2463"
    });
    $.__views.vas.add($.__views.__alloyId2463);
    $.__views.__alloyId2464 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2464"
    });
    $.__views.__alloyId2463.add($.__views.__alloyId2464);
    $.__views.__alloyId2465 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId2821"
    });
    $.__views.__alloyId2820.add($.__views.__alloyId2821);
    $.__views.__alloyId2822 = Ti.UI.createImageView({
=======
        id: "__alloyId2464"
    });
    $.__views.__alloyId2463.add($.__views.__alloyId2464);
    $.__views.__alloyId2465 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2822"
    });
    $.__views.__alloyId2820.add($.__views.__alloyId2822);
    back ? $.__views.__alloyId2822.addEventListener("click", back) : __defers["$.__views.__alloyId2822!click!back"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2465"
    });
    $.__views.__alloyId2463.add($.__views.__alloyId2465);
    back ? $.__views.__alloyId2465.addEventListener("click", back) : __defers["$.__views.__alloyId2465!click!back"] = true;
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId2466 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2823 = Ti.UI.createView({
=======
    $.__views.__alloyId2466 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId2466"
    });
    $.__views.scrollView.add($.__views.__alloyId2466);
    $.__views.__alloyId2467 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2467"
    });
    $.__views.__alloyId2466.add($.__views.__alloyId2467);
    $.__views.__alloyId2468 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2823"
    });
    $.__views.scrollView.add($.__views.__alloyId2823);
    $.__views.__alloyId2824 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2824"
    });
    $.__views.__alloyId2823.add($.__views.__alloyId2824);
    $.__views.__alloyId2825 = Ti.UI.createLabel({
=======
        id: "__alloyId2466"
    });
    $.__views.scrollView.add($.__views.__alloyId2466);
    $.__views.__alloyId2467 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2467"
    });
    $.__views.__alloyId2466.add($.__views.__alloyId2467);
    $.__views.__alloyId2468 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2468"
    });
=======
<<<<<<< HEAD
        id: "__alloyId2825"
    });
    $.__views.__alloyId2824.add($.__views.__alloyId2825);
    $.__views.__alloyId2826 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2826"
    });
    $.__views.__alloyId2823.add($.__views.__alloyId2826);
=======
        id: "__alloyId2468"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId2467.add($.__views.__alloyId2468);
    $.__views.__alloyId2469 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2469"
    });
    $.__views.__alloyId2466.add($.__views.__alloyId2469);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
<<<<<<< HEAD
    $.__views.__alloyId2469.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2470 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2826.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2827 = Ti.UI.createView({
=======
    $.__views.__alloyId2469.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2470 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2827"
    });
    $.__views.scrollView.add($.__views.__alloyId2827);
    $.__views.__alloyId2828 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2828"
    });
    $.__views.__alloyId2827.add($.__views.__alloyId2828);
    $.__views.__alloyId2829 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2470"
    });
    $.__views.scrollView.add($.__views.__alloyId2470);
    $.__views.__alloyId2471 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2471"
    });
    $.__views.__alloyId2470.add($.__views.__alloyId2471);
    $.__views.__alloyId2472 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2472"
    });
    $.__views.__alloyId2471.add($.__views.__alloyId2472);
    $.__views.__alloyId2473 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2473"
    });
    $.__views.__alloyId2470.add($.__views.__alloyId2473);
=======
<<<<<<< HEAD
        id: "__alloyId2829"
    });
    $.__views.__alloyId2828.add($.__views.__alloyId2829);
    $.__views.__alloyId2830 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2830"
    });
    $.__views.__alloyId2827.add($.__views.__alloyId2830);
=======
        id: "__alloyId2472"
    });
    $.__views.__alloyId2471.add($.__views.__alloyId2472);
    $.__views.__alloyId2473 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2473"
    });
    $.__views.__alloyId2470.add($.__views.__alloyId2473);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
<<<<<<< HEAD
    $.__views.__alloyId2473.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId2474 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2830.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId2831 = Ti.UI.createView({
=======
    $.__views.__alloyId2473.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId2474 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2831"
    });
    $.__views.scrollView.add($.__views.__alloyId2831);
    $.__views.__alloyId2832 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2832"
    });
    $.__views.__alloyId2831.add($.__views.__alloyId2832);
    $.__views.__alloyId2833 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2474"
    });
    $.__views.scrollView.add($.__views.__alloyId2474);
    $.__views.__alloyId2475 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2475"
    });
    $.__views.__alloyId2474.add($.__views.__alloyId2475);
    $.__views.__alloyId2476 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2476"
    });
    $.__views.__alloyId2475.add($.__views.__alloyId2476);
    $.__views.__alloyId2477 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2477"
    });
    $.__views.__alloyId2474.add($.__views.__alloyId2477);
=======
<<<<<<< HEAD
        id: "__alloyId2833"
    });
    $.__views.__alloyId2832.add($.__views.__alloyId2833);
    $.__views.__alloyId2834 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2834"
    });
    $.__views.__alloyId2831.add($.__views.__alloyId2834);
=======
        id: "__alloyId2476"
    });
    $.__views.__alloyId2475.add($.__views.__alloyId2476);
    $.__views.__alloyId2477 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2477"
    });
    $.__views.__alloyId2474.add($.__views.__alloyId2477);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
<<<<<<< HEAD
    $.__views.__alloyId2477.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId2478 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2834.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId2835 = Ti.UI.createView({
=======
    $.__views.__alloyId2477.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId2478 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId2478"
    });
    $.__views.scrollView.add($.__views.__alloyId2478);
    $.__views.__alloyId2479 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2479"
    });
    $.__views.__alloyId2478.add($.__views.__alloyId2479);
    $.__views.__alloyId2480 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2835"
    });
    $.__views.scrollView.add($.__views.__alloyId2835);
    $.__views.__alloyId2836 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2836"
    });
    $.__views.__alloyId2835.add($.__views.__alloyId2836);
    $.__views.__alloyId2837 = Ti.UI.createLabel({
=======
        id: "__alloyId2478"
    });
    $.__views.scrollView.add($.__views.__alloyId2478);
    $.__views.__alloyId2479 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2479"
    });
    $.__views.__alloyId2478.add($.__views.__alloyId2479);
    $.__views.__alloyId2480 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2480"
    });
    $.__views.__alloyId2479.add($.__views.__alloyId2480);
    $.__views.__alloyId2481 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2481"
    });
    $.__views.__alloyId2478.add($.__views.__alloyId2481);
=======
<<<<<<< HEAD
        id: "__alloyId2837"
    });
    $.__views.__alloyId2836.add($.__views.__alloyId2837);
    $.__views.__alloyId2838 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2838"
    });
    $.__views.__alloyId2835.add($.__views.__alloyId2838);
=======
        id: "__alloyId2480"
    });
    $.__views.__alloyId2479.add($.__views.__alloyId2480);
    $.__views.__alloyId2481 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2481"
    });
    $.__views.__alloyId2478.add($.__views.__alloyId2481);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
<<<<<<< HEAD
    $.__views.__alloyId2481.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId2482 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2838.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId2839 = Ti.UI.createView({
=======
    $.__views.__alloyId2481.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId2482 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId2482"
    });
    $.__views.scrollView.add($.__views.__alloyId2482);
    $.__views.__alloyId2483 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId2483"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2483);
    $.__views.__alloyId2484 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2839"
    });
    $.__views.scrollView.add($.__views.__alloyId2839);
    $.__views.__alloyId2840 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId2840"
    });
    $.__views.__alloyId2839.add($.__views.__alloyId2840);
    $.__views.__alloyId2841 = Ti.UI.createLabel({
=======
        id: "__alloyId2482"
    });
    $.__views.scrollView.add($.__views.__alloyId2482);
    $.__views.__alloyId2483 = Ti.UI.createView({
        width: "50%",
        height: "100%",
        id: "__alloyId2483"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2483);
    $.__views.__alloyId2484 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "IVR Language",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2841"
    });
    $.__views.__alloyId2840.add($.__views.__alloyId2841);
    $.__views.__alloyId2842 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2842"
    });
    $.__views.__alloyId2839.add($.__views.__alloyId2842);
    $.__views.__alloyId2843 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2484"
    });
    $.__views.__alloyId2483.add($.__views.__alloyId2484);
    $.__views.__alloyId2485 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2485"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2485);
    $.__views.__alloyId2486 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "English",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId2486"
    });
    $.__views.__alloyId2485.add($.__views.__alloyId2486);
    $.__views.__alloyId2487 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2487"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2487);
=======
<<<<<<< HEAD
        id: "__alloyId2843"
    });
    $.__views.__alloyId2842.add($.__views.__alloyId2843);
    $.__views.__alloyId2844 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2844"
    });
    $.__views.__alloyId2839.add($.__views.__alloyId2844);
=======
        id: "__alloyId2486"
    });
    $.__views.__alloyId2485.add($.__views.__alloyId2486);
    $.__views.__alloyId2487 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2487"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2487);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId2844.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2822!click!back"] && $.__views.__alloyId2822.addEventListener("click", back);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId2487.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2465!click!back"] && $.__views.__alloyId2465.addEventListener("click", back);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;