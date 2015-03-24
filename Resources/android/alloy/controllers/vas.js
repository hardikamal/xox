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
<<<<<<< Updated upstream
        DRAWER.navigation("myAccount", 1);
=======
        DRAWER.navigation("myAccount", 2);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
    function billing(e) {
        console.log("billing: " + e.value);
    }
>>>>>>> Stashed changes
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
<<<<<<< HEAD
    $.__views.__alloyId2587 = Alloy.createController("_header", {
        id: "__alloyId2587",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2545 = Alloy.createController("_header", {
        id: "__alloyId2545",
=======
    $.__views.__alloyId2587 = Alloy.createController("_header", {
        id: "__alloyId2587",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2587 = Alloy.createController("_header", {
        id: "__alloyId2587",
>>>>>>> origin/master
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId2587.setParent($.__views.vas);
    $.__views.__alloyId2588 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2588"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.vas.add($.__views.__alloyId2588);
    $.__views.__alloyId2589 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.vas.add($.__views.__alloyId2546);
    $.__views.__alloyId2547 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2224 = Alloy.createController("_header", {
        id: "__alloyId2224",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId2224.setParent($.__views.vas);
    $.__views.__alloyId2225 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2225"
    });
    $.__views.vas.add($.__views.__alloyId2225);
    $.__views.__alloyId2226 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId767 = Alloy.createController("_header", {
        id: "__alloyId767",
        __parentSymbol: $.__views.vas
    });
    $.__views.__alloyId767.setParent($.__views.vas);
    $.__views.__alloyId768 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId768"
    });
    $.__views.vas.add($.__views.__alloyId768);
    $.__views.__alloyId769 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.vas.add($.__views.__alloyId2588);
    $.__views.__alloyId2589 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.vas.add($.__views.__alloyId2588);
    $.__views.__alloyId2589 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2589"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2589);
    $.__views.__alloyId2590 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2547"
    });
    $.__views.__alloyId2546.add($.__views.__alloyId2547);
    $.__views.__alloyId2548 = Ti.UI.createImageView({
=======
        id: "__alloyId2226"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createImageView({
>>>>>>> origin/master
=======
        id: "__alloyId769"
    });
    $.__views.__alloyId768.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
        id: "__alloyId2589"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2589);
    $.__views.__alloyId2590 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2589"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2589);
    $.__views.__alloyId2590 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2590"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2590);
    back ? $.__views.__alloyId2590.addEventListener("click", back) : __defers["$.__views.__alloyId2590!click!back"] = true;
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2548"
    });
    $.__views.__alloyId2546.add($.__views.__alloyId2548);
    back ? $.__views.__alloyId2548.addEventListener("click", back) : __defers["$.__views.__alloyId2548!click!back"] = true;
=======
        id: "__alloyId2227"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2227);
    back ? $.__views.__alloyId2227.addEventListener("click", back) : __defers["$.__views.__alloyId2227!click!back"] = true;
>>>>>>> origin/master
=======
        id: "__alloyId770"
    });
    $.__views.__alloyId768.add($.__views.__alloyId770);
    back ? $.__views.__alloyId770.addEventListener("click", back) : __defers["$.__views.__alloyId770!click!back"] = true;
>>>>>>> Stashed changes
=======
        id: "__alloyId2590"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2590);
    back ? $.__views.__alloyId2590.addEventListener("click", back) : __defers["$.__views.__alloyId2590!click!back"] = true;
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2590"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2590);
    back ? $.__views.__alloyId2590.addEventListener("click", back) : __defers["$.__views.__alloyId2590!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2591 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2549 = Ti.UI.createView({
=======
    $.__views.__alloyId2228 = Ti.UI.createView({
>>>>>>> origin/master
=======
    $.__views.__alloyId2591 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2591 = Ti.UI.createView({
>>>>>>> origin/master
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
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2591.add($.__views.__alloyId2592);
    $.__views.__alloyId2593 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2549.add($.__views.__alloyId2550);
    $.__views.__alloyId2551 = Ti.UI.createLabel({
=======
        id: "__alloyId2228"
    });
    $.__views.scrollView.add($.__views.__alloyId2228);
    $.__views.__alloyId2229 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId2229"
    });
    $.__views.__alloyId2228.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId771 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "20%",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId771"
    });
    $.__views.scrollView.add($.__views.__alloyId771);
    $.__views.__alloyId772 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId772"
    });
    $.__views.__alloyId771.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2591.add($.__views.__alloyId2592);
    $.__views.__alloyId2593 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2591.add($.__views.__alloyId2592);
    $.__views.__alloyId2593 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2593"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2551"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2593"
>>>>>>> origin/master
    });
    $.__views.__alloyId2592.add($.__views.__alloyId2593);
    $.__views.__alloyId2594 = Ti.UI.createView({
        width: "30%",
        height: "100%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2594"
    });
    $.__views.__alloyId2591.add($.__views.__alloyId2594);
=======
        id: "__alloyId2552"
=======
        id: "__alloyId2593"
>>>>>>> origin/master
    });
    $.__views.__alloyId2592.add($.__views.__alloyId2593);
    $.__views.__alloyId2594 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2594"
    });
<<<<<<< HEAD
    $.__views.__alloyId2228.add($.__views.__alloyId2231);
>>>>>>> origin/master
=======
        id: "__alloyId773"
    });
    $.__views.__alloyId772.add($.__views.__alloyId773);
    $.__views.__alloyId774 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId774"
    });
    $.__views.__alloyId771.add($.__views.__alloyId774);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2591.add($.__views.__alloyId2594);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2594"
    });
    $.__views.__alloyId2591.add($.__views.__alloyId2594);
>>>>>>> origin/master
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2594.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2552.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2553 = Ti.UI.createView({
=======
    $.__views.__alloyId2231.add($.__views.switch1);
=======
    $.__views.__alloyId2594.add($.__views.switch1);
>>>>>>> origin/master
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2594.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
>>>>>>> origin/master
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
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.__alloyId2595.add($.__views.__alloyId2596);
    $.__views.__alloyId2597 = Ti.UI.createLabel({
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId2232.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId774.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId775 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "20%",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId775"
    });
    $.__views.scrollView.add($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId776"
    });
    $.__views.__alloyId775.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2595.add($.__views.__alloyId2596);
    $.__views.__alloyId2597 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId2595.add($.__views.__alloyId2596);
    $.__views.__alloyId2597 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2597"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2555"
=======
        id: "__alloyId2597"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2597"
>>>>>>> origin/master
    });
    $.__views.__alloyId2596.add($.__views.__alloyId2597);
    $.__views.__alloyId2598 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2598"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2595.add($.__views.__alloyId2598);
=======
<<<<<<< HEAD
    $.__views.__alloyId2553.add($.__views.__alloyId2556);
=======
        id: "__alloyId2234"
    });
    $.__views.__alloyId2233.add($.__views.__alloyId2234);
    $.__views.__alloyId2235 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2235"
    });
    $.__views.__alloyId2232.add($.__views.__alloyId2235);
>>>>>>> origin/master
=======
        id: "__alloyId777"
    });
    $.__views.__alloyId776.add($.__views.__alloyId777);
    $.__views.__alloyId778 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId778"
    });
    $.__views.__alloyId775.add($.__views.__alloyId778);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2595.add($.__views.__alloyId2598);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2595.add($.__views.__alloyId2598);
>>>>>>> origin/master
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2598.add($.__views.switch2);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2556.add($.__views.switch2);
=======
    $.__views.__alloyId2598.add($.__views.switch2);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2598.add($.__views.switch2);
>>>>>>> origin/master
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
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.__alloyId2599.add($.__views.__alloyId2600);
    $.__views.__alloyId2601 = Ti.UI.createLabel({
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId2236.add($.__views.__alloyId2237);
    $.__views.__alloyId2238 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId778.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId779 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "20%",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId779"
    });
    $.__views.scrollView.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId780"
    });
    $.__views.__alloyId779.add($.__views.__alloyId780);
    $.__views.__alloyId781 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2599.add($.__views.__alloyId2600);
    $.__views.__alloyId2601 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId2599.add($.__views.__alloyId2600);
    $.__views.__alloyId2601 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2601"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2559"
=======
        id: "__alloyId2601"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2601"
>>>>>>> origin/master
    });
    $.__views.__alloyId2600.add($.__views.__alloyId2601);
    $.__views.__alloyId2602 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2602"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2599.add($.__views.__alloyId2602);
=======
<<<<<<< HEAD
    $.__views.__alloyId2557.add($.__views.__alloyId2560);
=======
        id: "__alloyId2238"
    });
    $.__views.__alloyId2237.add($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2239"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2239);
>>>>>>> origin/master
=======
        id: "__alloyId781"
    });
    $.__views.__alloyId780.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId782"
    });
    $.__views.__alloyId779.add($.__views.__alloyId782);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2599.add($.__views.__alloyId2602);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2599.add($.__views.__alloyId2602);
>>>>>>> origin/master
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2602.add($.__views.switch3);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2560.add($.__views.switch3);
=======
    $.__views.__alloyId2602.add($.__views.switch3);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2602.add($.__views.switch3);
>>>>>>> origin/master
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
=======
    $.__views.__alloyId782.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId783 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "20%",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId783"
    });
    $.__views.scrollView.add($.__views.__alloyId783);
    $.__views.__alloyId784 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId784"
    });
    $.__views.__alloyId783.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createLabel({
        text: "Itemized Billing",
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2605"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2563"
=======
        id: "__alloyId2605"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2605"
>>>>>>> origin/master
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
=======
        id: "__alloyId785"
    });
    $.__views.__alloyId784.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId786"
    });
    $.__views.__alloyId783.add($.__views.__alloyId786);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4"
    });
    $.__views.__alloyId786.add($.__views.switch4);
    billing ? $.__views.switch4.addEventListener("change", billing) : __defers["$.__views.switch4!change!billing"] = true;
    $.__views.__alloyId787 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "20%",
        width: "90%",
        backgroundColor: "white",
        id: "__alloyId787"
    });
    $.__views.scrollView.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createView({
        width: "70%",
        height: "100%",
        id: "__alloyId788"
    });
    $.__views.__alloyId787.add($.__views.__alloyId788);
    $.__views.__alloyId789 = Ti.UI.createLabel({
        text: "International Direct Dial",
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2609"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2567"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2609"
>>>>>>> origin/master
    });
    $.__views.__alloyId2608.add($.__views.__alloyId2609);
    $.__views.__alloyId2610 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2610"
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
    $.__views.__alloyId2565.add($.__views.__alloyId2568);
    $.__views.__alloyId2569 = Ti.UI.createLabel({
=======
        id: "__alloyId2246"
=======
        id: "__alloyId2609"
>>>>>>> origin/master
    });
    $.__views.__alloyId2608.add($.__views.__alloyId2609);
    $.__views.__alloyId2610 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2610"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
=======
        id: "__alloyId789"
    });
    $.__views.__alloyId788.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId790"
    });
    $.__views.__alloyId787.add($.__views.__alloyId790);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId790.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId770!click!back"] && $.__views.__alloyId770.addEventListener("click", back);
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch4!change!billing"] && $.__views.switch4.addEventListener("change", billing);
>>>>>>> Stashed changes
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;