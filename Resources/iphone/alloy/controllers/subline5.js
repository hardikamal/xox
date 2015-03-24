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
        DRAWER.navigation("subline4", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline5";
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
    $.__views.subline5 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline5"
    });
    $.__views.subline5 && $.addTopLevelView($.__views.subline5);
    $.__views.__alloyId2392 = Alloy.createController("_header", {
        id: "__alloyId2392",
        __parentSymbol: $.__views.subline5
    });
    $.__views.__alloyId2392.setParent($.__views.subline5);
    $.__views.__alloyId2393 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2393"
    });
    $.__views.subline5.add($.__views.__alloyId2393);
    $.__views.__alloyId2394 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2394"
    });
    $.__views.__alloyId2393.add($.__views.__alloyId2394);
    $.__views.__alloyId2395 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2395"
    });
    $.__views.__alloyId2393.add($.__views.__alloyId2395);
    back ? $.__views.__alloyId2395.addEventListener("click", back) : __defers["$.__views.__alloyId2395!click!back"] = true;
    $.__views.__alloyId2396 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "white",
        id: "__alloyId2396"
    });
    $.__views.subline5.add($.__views.__alloyId2396);
    $.__views.__alloyId2397 = Ti.UI.createLabel({
        text: "Subline Data Subscription Request",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2397"
    });
    $.__views.__alloyId2396.add($.__views.__alloyId2397);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.subline5.add($.__views.scrollView);
    $.__views.__alloyId2398 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2398"
    });
    $.__views.scrollView.add($.__views.__alloyId2398);
    $.__views.__alloyId2399 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2399"
    });
    $.__views.__alloyId2398.add($.__views.__alloyId2399);
    $.__views.__alloyId2400 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2400"
    });
    $.__views.__alloyId2398.add($.__views.__alloyId2400);
    $.__views.__alloyId2401 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2401"
    });
    $.__views.scrollView.add($.__views.__alloyId2401);
    $.__views.__alloyId2402 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2402"
    });
    $.__views.scrollView.add($.__views.__alloyId2402);
    $.__views.__alloyId2403 = Ti.UI.createLabel({
        text: "Data Plan",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2403"
    });
    $.__views.__alloyId2402.add($.__views.__alloyId2403);
    $.__views.__alloyId2404 = Ti.UI.createLabel({
        text: "M500MB",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2404"
    });
    $.__views.__alloyId2402.add($.__views.__alloyId2404);
    $.__views.__alloyId2405 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2405"
    });
    $.__views.scrollView.add($.__views.__alloyId2405);
    $.__views.__alloyId2406 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2406"
    });
    $.__views.scrollView.add($.__views.__alloyId2406);
    $.__views.__alloyId2407 = Ti.UI.createLabel({
        text: "Current Prepaid Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2407"
    });
    $.__views.__alloyId2406.add($.__views.__alloyId2407);
    $.__views.__alloyId2408 = Ti.UI.createLabel({
        text: "88.88",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2408"
    });
    $.__views.__alloyId2406.add($.__views.__alloyId2408);
    $.__views.__alloyId2409 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2409"
    });
    $.__views.scrollView.add($.__views.__alloyId2409);
    $.__views.__alloyId2410 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2410"
    });
    $.__views.scrollView.add($.__views.__alloyId2410);
    $.__views.__alloyId2411 = Ti.UI.createLabel({
        text: "Current EWallet Balance(RM)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2411"
    });
    $.__views.__alloyId2410.add($.__views.__alloyId2411);
    $.__views.__alloyId2412 = Ti.UI.createLabel({
        text: "0.00",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2412"
    });
    $.__views.__alloyId2410.add($.__views.__alloyId2412);
    $.__views.__alloyId2413 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2413"
    });
    $.__views.scrollView.add($.__views.__alloyId2413);
    $.__views.__alloyId2414 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2414"
    });
    $.__views.scrollView.add($.__views.__alloyId2414);
    $.__views.__alloyId2415 = Ti.UI.createLabel({
        text: "Season Pass Data Counter(MB)",
        backgroundColor: "transparent",
        width: "50%",
        color: "black",
        left: "5",
        height: "auto",
        id: "__alloyId2415"
    });
    $.__views.__alloyId2414.add($.__views.__alloyId2415);
    $.__views.__alloyId2416 = Ti.UI.createLabel({
        text: "0",
        backgroundColor: "transparent",
        width: "auto",
        color: "black",
        height: "auto",
        id: "__alloyId2416"
    });
    $.__views.__alloyId2414.add($.__views.__alloyId2416);
    $.__views.__alloyId2417 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "1",
        id: "__alloyId2417"
    });
    $.__views.scrollView.add($.__views.__alloyId2417);
    $.__views.__alloyId2418 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "black",
        id: "__alloyId2418"
    });
    $.__views.subline5.add($.__views.__alloyId2418);
    $.__views.__alloyId2419 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2419"
    });
    $.__views.__alloyId2418.add($.__views.__alloyId2419);
    subscribe ? $.__views.__alloyId2419.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2419!click!subscribe"] = true;
    $.__views.__alloyId2420 = Ti.UI.createLabel({
        text: "Subscribe",
        color: "white",
        textAlign: "center",
        id: "__alloyId2420"
    });
    $.__views.__alloyId2419.add($.__views.__alloyId2420);
    $.__views.__alloyId2421 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2421"
    });
    $.__views.__alloyId2418.add($.__views.__alloyId2421);
    $.__views.__alloyId2422 = Ti.UI.createView({
        height: "100%",
        width: "49.72%",
        backgroundColor: "black",
        id: "__alloyId2422"
    });
    $.__views.__alloyId2418.add($.__views.__alloyId2422);
    back ? $.__views.__alloyId2422.addEventListener("click", back) : __defers["$.__views.__alloyId2422!click!back"] = true;
    $.__views.__alloyId2423 = Ti.UI.createLabel({
        text: "Cancel",
        color: "white",
        textAlign: "center",
        id: "__alloyId2423"
    });
    $.__views.__alloyId2422.add($.__views.__alloyId2423);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId2395!click!back"] && $.__views.__alloyId2395.addEventListener("click", back);
    __defers["$.__views.__alloyId2419!click!subscribe"] && $.__views.__alloyId2419.addEventListener("click", subscribe);
    __defers["$.__views.__alloyId2422!click!back"] && $.__views.__alloyId2422.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;