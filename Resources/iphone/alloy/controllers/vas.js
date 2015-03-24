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
        text: "VAS Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2464"
    });
    $.__views.__alloyId2463.add($.__views.__alloyId2464);
    $.__views.__alloyId2465 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2465"
    });
    $.__views.__alloyId2463.add($.__views.__alloyId2465);
    back ? $.__views.__alloyId2465.addEventListener("click", back) : __defers["$.__views.__alloyId2465!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.vas.add($.__views.scrollView);
    $.__views.__alloyId2466 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
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
        text: "Call Forwarding",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2468"
    });
    $.__views.__alloyId2467.add($.__views.__alloyId2468);
    $.__views.__alloyId2469 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2469"
    });
    $.__views.__alloyId2466.add($.__views.__alloyId2469);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId2469.add($.__views.switch1);
    forwarding ? $.__views.switch1.addEventListener("change", forwarding) : __defers["$.__views.switch1!change!forwarding"] = true;
    $.__views.__alloyId2470 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
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
        text: "Caller Line Identification Presentation",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2472"
    });
    $.__views.__alloyId2471.add($.__views.__alloyId2472);
    $.__views.__alloyId2473 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2473"
    });
    $.__views.__alloyId2470.add($.__views.__alloyId2473);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2"
    });
    $.__views.__alloyId2473.add($.__views.switch2);
    presentation ? $.__views.switch2.addEventListener("change", presentation) : __defers["$.__views.switch2!change!presentation"] = true;
    $.__views.__alloyId2474 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
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
        text: "Caller Line Identification Restriction",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2476"
    });
    $.__views.__alloyId2475.add($.__views.__alloyId2476);
    $.__views.__alloyId2477 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2477"
    });
    $.__views.__alloyId2474.add($.__views.__alloyId2477);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3"
    });
    $.__views.__alloyId2477.add($.__views.switch3);
    restriction ? $.__views.switch3.addEventListener("change", restriction) : __defers["$.__views.switch3!change!restriction"] = true;
    $.__views.__alloyId2478 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
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
        text: "International Direct Dial",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2480"
    });
    $.__views.__alloyId2479.add($.__views.__alloyId2480);
    $.__views.__alloyId2481 = Ti.UI.createView({
        width: "30%",
        height: "100%",
        id: "__alloyId2481"
    });
    $.__views.__alloyId2478.add($.__views.__alloyId2481);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5"
    });
    $.__views.__alloyId2481.add($.__views.switch5);
    international ? $.__views.switch5.addEventListener("change", international) : __defers["$.__views.switch5!change!international"] = true;
    $.__views.__alloyId2482 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "90%",
        backgroundColor: "white",
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
        text: "IVR Language",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        text: "English",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2486"
    });
    $.__views.__alloyId2485.add($.__views.__alloyId2486);
    $.__views.__alloyId2487 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2487"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2487);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2487.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId2465!click!back"] && $.__views.__alloyId2465.addEventListener("click", back);
    __defers["$.__views.switch1!change!forwarding"] && $.__views.switch1.addEventListener("change", forwarding);
    __defers["$.__views.switch2!change!presentation"] && $.__views.switch2.addEventListener("change", presentation);
    __defers["$.__views.switch3!change!restriction"] && $.__views.switch3.addEventListener("change", restriction);
    __defers["$.__views.switch5!change!international"] && $.__views.switch5.addEventListener("change", international);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;