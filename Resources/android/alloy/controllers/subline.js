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
    function addNumber() {
        console.log("addNumber");
        DRAWER.navigation("subline2", 1);
    }
    function setting() {
        DRAWER.navigation("subline4", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline";
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
    $.__views.subline = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline"
    });
    $.__views.subline && $.addTopLevelView($.__views.subline);
    $.__views.__alloyId2385 = Alloy.createController("_header", {
        id: "__alloyId2385",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId2385.setParent($.__views.subline);
    $.__views.__alloyId2386 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2386"
    });
    $.__views.subline.add($.__views.__alloyId2386);
    $.__views.__alloyId2387 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2387"
    });
    $.__views.__alloyId2386.add($.__views.__alloyId2387);
    $.__views.__alloyId2388 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2388"
    });
    $.__views.__alloyId2386.add($.__views.__alloyId2388);
    back ? $.__views.__alloyId2388.addEventListener("click", back) : __defers["$.__views.__alloyId2388!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
    $.__views.empty = Ti.UI.createLabel({
        text: "Currently no Subline",
        id: "empty",
        color: "black"
    });
    $.__views.scrollView.add($.__views.empty);
    $.__views.__alloyId2389 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2389"
    });
    $.__views.scrollView.add($.__views.__alloyId2389);
    $.__views.__alloyId2390 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2390"
    });
    $.__views.__alloyId2389.add($.__views.__alloyId2390);
    $.__views.__alloyId2391 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2391"
    });
    $.__views.__alloyId2390.add($.__views.__alloyId2391);
    $.__views.__alloyId2392 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2392"
    });
    $.__views.__alloyId2391.add($.__views.__alloyId2392);
    $.__views.__alloyId2393 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2393"
    });
    $.__views.__alloyId2391.add($.__views.__alloyId2393);
    $.__views.__alloyId2394 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2394"
    });
    $.__views.__alloyId2389.add($.__views.__alloyId2394);
    $.__views.__alloyId2395 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2395"
    });
    $.__views.__alloyId2394.add($.__views.__alloyId2395);
    $.__views.__alloyId2396 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2396"
    });
    $.__views.__alloyId2389.add($.__views.__alloyId2396);
    setting ? $.__views.__alloyId2396.addEventListener("click", setting) : __defers["$.__views.__alloyId2396!click!setting"] = true;
    $.__views.__alloyId2397 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2397"
    });
    $.__views.__alloyId2396.add($.__views.__alloyId2397);
    $.__views.__alloyId2398 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2398"
    });
    $.__views.__alloyId2389.add($.__views.__alloyId2398);
    $.__views.__alloyId2399 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2399"
    });
    $.__views.__alloyId2398.add($.__views.__alloyId2399);
    $.__views.__alloyId2400 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2400"
    });
    $.__views.scrollView.add($.__views.__alloyId2400);
    $.__views.__alloyId2401 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2401"
    });
    $.__views.scrollView.add($.__views.__alloyId2401);
    $.__views.__alloyId2402 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2402"
    });
    $.__views.__alloyId2401.add($.__views.__alloyId2402);
    $.__views.__alloyId2403 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2403"
    });
    $.__views.__alloyId2402.add($.__views.__alloyId2403);
    $.__views.__alloyId2404 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2404"
    });
    $.__views.__alloyId2403.add($.__views.__alloyId2404);
    $.__views.__alloyId2405 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2405"
    });
    $.__views.__alloyId2403.add($.__views.__alloyId2405);
    $.__views.__alloyId2406 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2406"
    });
    $.__views.__alloyId2401.add($.__views.__alloyId2406);
    $.__views.__alloyId2407 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2407"
    });
    $.__views.__alloyId2406.add($.__views.__alloyId2407);
    $.__views.__alloyId2408 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2408"
    });
    $.__views.__alloyId2401.add($.__views.__alloyId2408);
    $.__views.__alloyId2409 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2409"
    });
    $.__views.__alloyId2408.add($.__views.__alloyId2409);
    $.__views.__alloyId2410 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2410"
    });
    $.__views.__alloyId2401.add($.__views.__alloyId2410);
    $.__views.__alloyId2411 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2411"
    });
    $.__views.__alloyId2410.add($.__views.__alloyId2411);
    $.__views.__alloyId2412 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2412"
    });
    $.__views.scrollView.add($.__views.__alloyId2412);
    $.__views.__alloyId2413 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2413"
    });
    $.__views.scrollView.add($.__views.__alloyId2413);
    $.__views.__alloyId2414 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2414"
    });
    $.__views.__alloyId2413.add($.__views.__alloyId2414);
    $.__views.__alloyId2415 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2415"
    });
    $.__views.__alloyId2414.add($.__views.__alloyId2415);
    $.__views.__alloyId2416 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2416"
    });
    $.__views.__alloyId2415.add($.__views.__alloyId2416);
    $.__views.__alloyId2417 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2417"
    });
    $.__views.__alloyId2415.add($.__views.__alloyId2417);
    $.__views.__alloyId2418 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2418"
    });
    $.__views.__alloyId2413.add($.__views.__alloyId2418);
    $.__views.__alloyId2419 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2419"
    });
    $.__views.__alloyId2418.add($.__views.__alloyId2419);
    $.__views.__alloyId2420 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2420"
    });
    $.__views.__alloyId2413.add($.__views.__alloyId2420);
    $.__views.__alloyId2421 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2421"
    });
    $.__views.__alloyId2420.add($.__views.__alloyId2421);
    $.__views.__alloyId2422 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2422"
    });
    $.__views.__alloyId2413.add($.__views.__alloyId2422);
    $.__views.__alloyId2423 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2423"
    });
    $.__views.__alloyId2422.add($.__views.__alloyId2423);
    $.__views.__alloyId2424 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2424"
    });
    $.__views.scrollView.add($.__views.__alloyId2424);
    $.__views.__alloyId2425 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2425"
    });
    $.__views.scrollView.add($.__views.__alloyId2425);
    $.__views.__alloyId2426 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2426"
    });
    $.__views.__alloyId2425.add($.__views.__alloyId2426);
    $.__views.__alloyId2427 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2427"
    });
    $.__views.__alloyId2426.add($.__views.__alloyId2427);
    $.__views.__alloyId2428 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2428"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2428);
    $.__views.__alloyId2429 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2429"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2429);
    $.__views.__alloyId2430 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2430"
    });
    $.__views.__alloyId2425.add($.__views.__alloyId2430);
    $.__views.__alloyId2431 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2431"
    });
    $.__views.__alloyId2430.add($.__views.__alloyId2431);
    $.__views.__alloyId2432 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2432"
    });
    $.__views.__alloyId2425.add($.__views.__alloyId2432);
    $.__views.__alloyId2433 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2433"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2433);
    $.__views.__alloyId2434 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2434"
    });
    $.__views.__alloyId2425.add($.__views.__alloyId2434);
    $.__views.__alloyId2435 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2435"
    });
    $.__views.__alloyId2434.add($.__views.__alloyId2435);
    $.__views.__alloyId2436 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2436"
    });
    $.__views.scrollView.add($.__views.__alloyId2436);
    $.__views.__alloyId2437 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2437"
    });
    $.__views.scrollView.add($.__views.__alloyId2437);
    $.__views.__alloyId2438 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2438"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2438);
    $.__views.__alloyId2439 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2439"
    });
    $.__views.__alloyId2438.add($.__views.__alloyId2439);
    $.__views.__alloyId2440 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2440"
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2440);
    $.__views.__alloyId2441 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2441"
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2441);
    $.__views.__alloyId2442 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2442"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2442);
    $.__views.__alloyId2443 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2443"
    });
    $.__views.__alloyId2442.add($.__views.__alloyId2443);
    $.__views.__alloyId2444 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2444"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2444);
    $.__views.__alloyId2445 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2445"
    });
    $.__views.__alloyId2444.add($.__views.__alloyId2445);
    $.__views.__alloyId2446 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2446"
    });
    $.__views.__alloyId2437.add($.__views.__alloyId2446);
    $.__views.__alloyId2447 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2447"
    });
    $.__views.__alloyId2446.add($.__views.__alloyId2447);
    $.__views.__alloyId2448 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2448"
    });
    $.__views.scrollView.add($.__views.__alloyId2448);
    $.__views.__alloyId2449 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2449"
    });
    $.__views.scrollView.add($.__views.__alloyId2449);
    $.__views.__alloyId2450 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2450"
    });
    $.__views.__alloyId2449.add($.__views.__alloyId2450);
    $.__views.__alloyId2451 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2451"
    });
    $.__views.__alloyId2450.add($.__views.__alloyId2451);
    $.__views.__alloyId2452 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2452"
    });
    $.__views.__alloyId2451.add($.__views.__alloyId2452);
    $.__views.__alloyId2453 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2453"
    });
    $.__views.__alloyId2451.add($.__views.__alloyId2453);
    $.__views.__alloyId2454 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2454"
    });
    $.__views.__alloyId2449.add($.__views.__alloyId2454);
    $.__views.__alloyId2455 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2455"
    });
    $.__views.__alloyId2454.add($.__views.__alloyId2455);
    $.__views.__alloyId2456 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2456"
    });
    $.__views.__alloyId2449.add($.__views.__alloyId2456);
    $.__views.__alloyId2457 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2457"
    });
    $.__views.__alloyId2456.add($.__views.__alloyId2457);
    $.__views.__alloyId2458 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2458"
    });
    $.__views.__alloyId2449.add($.__views.__alloyId2458);
    $.__views.__alloyId2459 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2459"
    });
    $.__views.__alloyId2458.add($.__views.__alloyId2459);
    $.__views.__alloyId2460 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId2460"
    });
    $.__views.scrollView.add($.__views.__alloyId2460);
    $.__views.__alloyId2461 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId2461"
    });
    $.__views.subline.add($.__views.__alloyId2461);
    addNumber ? $.__views.__alloyId2461.addEventListener("click", addNumber) : __defers["$.__views.__alloyId2461!click!addNumber"] = true;
    $.__views.__alloyId2462 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId2462"
    });
    $.__views.__alloyId2461.add($.__views.__alloyId2462);
    $.__views.__alloyId2463 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId2463"
    });
    $.__views.__alloyId2462.add($.__views.__alloyId2463);
    $.__views.__alloyId2464 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId2464"
    });
    $.__views.__alloyId2462.add($.__views.__alloyId2464);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId2388!click!back"] && $.__views.__alloyId2388.addEventListener("click", back);
    __defers["$.__views.__alloyId2396!click!setting"] && $.__views.__alloyId2396.addEventListener("click", setting);
    __defers["$.__views.__alloyId2461!click!addNumber"] && $.__views.__alloyId2461.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;