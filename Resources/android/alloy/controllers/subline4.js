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
        DRAWER.navigation("subline", 1);
    }
    function subscribe() {
        console.log("subscribe");
        DRAWER.navigation("subline5", 1);
    }
    function plan(e) {
        console.log("plan");
        plan = e.row.title;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline4";
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
    $.__views.subline4 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline4"
    });
    $.__views.subline4 && $.addTopLevelView($.__views.subline4);
    $.__views.__alloyId2444 = Alloy.createController("_header", {
        id: "__alloyId2444",
        __parentSymbol: $.__views.subline4
    });
    $.__views.__alloyId2444.setParent($.__views.subline4);
    $.__views.__alloyId2445 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2445"
    });
    $.__views.subline4.add($.__views.__alloyId2445);
    $.__views.__alloyId2446 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2446"
    });
    $.__views.__alloyId2445.add($.__views.__alloyId2446);
    $.__views.__alloyId2447 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2447"
    });
    $.__views.__alloyId2445.add($.__views.__alloyId2447);
    back ? $.__views.__alloyId2447.addEventListener("click", back) : __defers["$.__views.__alloyId2447!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.subline4.add($.__views.scrollView);
    $.__views.__alloyId2448 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2448"
    });
    $.__views.scrollView.add($.__views.__alloyId2448);
    $.__views.__alloyId2449 = Ti.UI.createLabel({
        text: "MSISDN",
        width: "40%",
        height: "50",
        color: "black",
        left: "20",
        id: "__alloyId2449"
    });
    $.__views.__alloyId2448.add($.__views.__alloyId2449);
    $.__views.__alloyId2450 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        width: "auto",
        height: "50",
        color: "black",
        id: "__alloyId2450"
    });
    $.__views.__alloyId2448.add($.__views.__alloyId2450);
    $.__views.__alloyId2451 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        left: "5%",
        height: "2",
        id: "__alloyId2451"
    });
    $.__views.scrollView.add($.__views.__alloyId2451);
    $.__views.__alloyId2452 = Ti.UI.createLabel({
        text: "No Mobile Internet Plan available.",
        width: "100%",
        color: "gray",
        bottom: "20",
        left: "20",
        id: "__alloyId2452"
    });
    $.__views.scrollView.add($.__views.__alloyId2452);
    $.__views.__alloyId2453 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId2453"
    });
    $.__views.scrollView.add($.__views.__alloyId2453);
    $.__views.__alloyId2454 = Ti.UI.createLabel({
        text: "Subscribe Plan",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId2454"
    });
    $.__views.__alloyId2453.add($.__views.__alloyId2454);
    $.__views.__alloyId2455 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2455"
    });
    $.__views.__alloyId2453.add($.__views.__alloyId2455);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2455.add($.__views.picker);
    var __alloyId2456 = [];
    $.__views.__alloyId2457 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2457"
    });
    __alloyId2456.push($.__views.__alloyId2457);
    $.__views.__alloyId2458 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2458"
    });
    __alloyId2456.push($.__views.__alloyId2458);
    $.__views.__alloyId2459 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2459"
    });
    __alloyId2456.push($.__views.__alloyId2459);
    $.__views.__alloyId2460 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2460"
    });
    __alloyId2456.push($.__views.__alloyId2460);
    $.__views.picker.add(__alloyId2456);
    plan ? $.__views.picker.addEventListener("change", plan) : __defers["$.__views.picker!change!plan"] = true;
    $.__views.__alloyId2461 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2461"
    });
    $.__views.__alloyId2455.add($.__views.__alloyId2461);
    $.__views.__alloyId2462 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2462"
    });
    $.__views.subline4.add($.__views.__alloyId2462);
    subscribe ? $.__views.__alloyId2462.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2462!click!subscribe"] = true;
    $.__views.__alloyId2463 = Ti.UI.createLabel({
        text: "Subscribe",
        color: "white",
        id: "__alloyId2463"
    });
    $.__views.__alloyId2462.add($.__views.__alloyId2463);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    var plan;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2447!click!back"] && $.__views.__alloyId2447.addEventListener("click", back);
    __defers["$.__views.picker!change!plan"] && $.__views.picker.addEventListener("change", plan);
    __defers["$.__views.__alloyId2462!click!subscribe"] && $.__views.__alloyId2462.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;