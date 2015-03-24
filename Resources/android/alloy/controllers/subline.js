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
        DRAWER.navigation("myAccount", 2);
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
    $.__views.__alloyId2336 = Alloy.createController("_header", {
        id: "__alloyId2336",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId2336.setParent($.__views.subline);
    $.__views.__alloyId2337 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2337"
    });
    $.__views.subline.add($.__views.__alloyId2337);
    $.__views.__alloyId2338 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2338"
    });
    $.__views.__alloyId2337.add($.__views.__alloyId2338);
    $.__views.__alloyId2339 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2339"
    });
    $.__views.__alloyId2337.add($.__views.__alloyId2339);
    back ? $.__views.__alloyId2339.addEventListener("click", back) : __defers["$.__views.__alloyId2339!click!back"] = true;
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
    $.__views.__alloyId2340 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2340"
    });
    $.__views.scrollView.add($.__views.__alloyId2340);
    $.__views.__alloyId2341 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2341"
    });
    $.__views.__alloyId2340.add($.__views.__alloyId2341);
    $.__views.__alloyId2342 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2342"
    });
    $.__views.__alloyId2341.add($.__views.__alloyId2342);
    $.__views.__alloyId2343 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2343"
    });
    $.__views.__alloyId2342.add($.__views.__alloyId2343);
    $.__views.__alloyId2344 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2344"
    });
    $.__views.__alloyId2342.add($.__views.__alloyId2344);
    $.__views.__alloyId2345 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2345"
    });
    $.__views.__alloyId2340.add($.__views.__alloyId2345);
    $.__views.__alloyId2346 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2346"
    });
    $.__views.__alloyId2345.add($.__views.__alloyId2346);
    $.__views.__alloyId2347 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2347"
    });
    $.__views.__alloyId2340.add($.__views.__alloyId2347);
    setting ? $.__views.__alloyId2347.addEventListener("click", setting) : __defers["$.__views.__alloyId2347!click!setting"] = true;
    $.__views.__alloyId2348 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2348"
    });
    $.__views.__alloyId2347.add($.__views.__alloyId2348);
    $.__views.__alloyId2349 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2349"
    });
    $.__views.__alloyId2340.add($.__views.__alloyId2349);
    $.__views.__alloyId2350 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2350"
    });
    $.__views.__alloyId2349.add($.__views.__alloyId2350);
    $.__views.__alloyId2351 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2351"
    });
    $.__views.scrollView.add($.__views.__alloyId2351);
    $.__views.__alloyId2352 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2352"
    });
    $.__views.scrollView.add($.__views.__alloyId2352);
    $.__views.__alloyId2353 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2353"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2353);
    $.__views.__alloyId2354 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2354"
    });
    $.__views.__alloyId2353.add($.__views.__alloyId2354);
    $.__views.__alloyId2355 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2355"
    });
    $.__views.__alloyId2354.add($.__views.__alloyId2355);
    $.__views.__alloyId2356 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2356"
    });
    $.__views.__alloyId2354.add($.__views.__alloyId2356);
    $.__views.__alloyId2357 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2357"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2357);
    $.__views.__alloyId2358 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2358"
    });
    $.__views.__alloyId2357.add($.__views.__alloyId2358);
    $.__views.__alloyId2359 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2359"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2359);
    $.__views.__alloyId2360 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2360"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2360);
    $.__views.__alloyId2361 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2361"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2361);
    $.__views.__alloyId2362 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2362"
    });
    $.__views.__alloyId2361.add($.__views.__alloyId2362);
    $.__views.__alloyId2363 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2363"
    });
    $.__views.scrollView.add($.__views.__alloyId2363);
    $.__views.__alloyId2364 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2364"
    });
    $.__views.scrollView.add($.__views.__alloyId2364);
    $.__views.__alloyId2365 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2365"
    });
    $.__views.__alloyId2364.add($.__views.__alloyId2365);
    $.__views.__alloyId2366 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2366"
    });
    $.__views.__alloyId2365.add($.__views.__alloyId2366);
    $.__views.__alloyId2367 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2367"
    });
    $.__views.__alloyId2366.add($.__views.__alloyId2367);
    $.__views.__alloyId2368 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2368"
    });
    $.__views.__alloyId2366.add($.__views.__alloyId2368);
    $.__views.__alloyId2369 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2369"
    });
    $.__views.__alloyId2364.add($.__views.__alloyId2369);
    $.__views.__alloyId2370 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2370"
    });
    $.__views.__alloyId2369.add($.__views.__alloyId2370);
    $.__views.__alloyId2371 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2371"
    });
    $.__views.__alloyId2364.add($.__views.__alloyId2371);
    $.__views.__alloyId2372 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2372"
    });
    $.__views.__alloyId2371.add($.__views.__alloyId2372);
    $.__views.__alloyId2373 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2373"
    });
    $.__views.__alloyId2364.add($.__views.__alloyId2373);
    $.__views.__alloyId2374 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2374"
    });
    $.__views.__alloyId2373.add($.__views.__alloyId2374);
    $.__views.__alloyId2375 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2375"
    });
    $.__views.scrollView.add($.__views.__alloyId2375);
    $.__views.__alloyId2376 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2376"
    });
    $.__views.scrollView.add($.__views.__alloyId2376);
    $.__views.__alloyId2377 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2377"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2377);
    $.__views.__alloyId2378 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2378"
    });
    $.__views.__alloyId2377.add($.__views.__alloyId2378);
    $.__views.__alloyId2379 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2379"
    });
    $.__views.__alloyId2378.add($.__views.__alloyId2379);
    $.__views.__alloyId2380 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2380"
    });
    $.__views.__alloyId2378.add($.__views.__alloyId2380);
    $.__views.__alloyId2381 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2381"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2381);
    $.__views.__alloyId2382 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2382"
    });
    $.__views.__alloyId2381.add($.__views.__alloyId2382);
    $.__views.__alloyId2383 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2383"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2383);
    $.__views.__alloyId2384 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2384"
    });
    $.__views.__alloyId2383.add($.__views.__alloyId2384);
    $.__views.__alloyId2385 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2385"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2385);
    $.__views.__alloyId2386 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2386"
    });
    $.__views.__alloyId2385.add($.__views.__alloyId2386);
    $.__views.__alloyId2387 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2387"
    });
    $.__views.scrollView.add($.__views.__alloyId2387);
    $.__views.__alloyId2388 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2388"
    });
    $.__views.scrollView.add($.__views.__alloyId2388);
    $.__views.__alloyId2389 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2389"
    });
    $.__views.__alloyId2388.add($.__views.__alloyId2389);
    $.__views.__alloyId2390 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2390"
    });
    $.__views.__alloyId2389.add($.__views.__alloyId2390);
    $.__views.__alloyId2391 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2391"
    });
    $.__views.__alloyId2390.add($.__views.__alloyId2391);
    $.__views.__alloyId2392 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2392"
    });
    $.__views.__alloyId2390.add($.__views.__alloyId2392);
    $.__views.__alloyId2393 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2393"
    });
    $.__views.__alloyId2388.add($.__views.__alloyId2393);
    $.__views.__alloyId2394 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2394"
    });
    $.__views.__alloyId2393.add($.__views.__alloyId2394);
    $.__views.__alloyId2395 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2395"
    });
    $.__views.__alloyId2388.add($.__views.__alloyId2395);
    $.__views.__alloyId2396 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2396"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2396);
    $.__views.__alloyId2397 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2397"
    });
    $.__views.__alloyId2388.add($.__views.__alloyId2397);
    $.__views.__alloyId2398 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2398"
    });
    $.__views.__alloyId2397.add($.__views.__alloyId2398);
    $.__views.__alloyId2399 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2399"
    });
    $.__views.scrollView.add($.__views.__alloyId2399);
    $.__views.__alloyId2400 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2400"
    });
    $.__views.scrollView.add($.__views.__alloyId2400);
    $.__views.__alloyId2401 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2401"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2401);
    $.__views.__alloyId2402 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2402"
    });
    $.__views.__alloyId2401.add($.__views.__alloyId2402);
    $.__views.__alloyId2403 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2403"
    });
    $.__views.__alloyId2402.add($.__views.__alloyId2403);
    $.__views.__alloyId2404 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2404"
    });
    $.__views.__alloyId2402.add($.__views.__alloyId2404);
    $.__views.__alloyId2405 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2405"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2405);
    $.__views.__alloyId2406 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2406"
    });
    $.__views.__alloyId2405.add($.__views.__alloyId2406);
    $.__views.__alloyId2407 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2407"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2407);
    $.__views.__alloyId2408 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2408"
    });
    $.__views.__alloyId2407.add($.__views.__alloyId2408);
    $.__views.__alloyId2409 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2409"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2409);
    $.__views.__alloyId2410 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2410"
    });
    $.__views.__alloyId2409.add($.__views.__alloyId2410);
    $.__views.__alloyId2411 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId2411"
    });
    $.__views.scrollView.add($.__views.__alloyId2411);
    $.__views.__alloyId2412 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId2412"
    });
    $.__views.subline.add($.__views.__alloyId2412);
    addNumber ? $.__views.__alloyId2412.addEventListener("click", addNumber) : __defers["$.__views.__alloyId2412!click!addNumber"] = true;
    $.__views.__alloyId2413 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId2413"
    });
    $.__views.__alloyId2412.add($.__views.__alloyId2413);
    $.__views.__alloyId2414 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId2414"
    });
    $.__views.__alloyId2413.add($.__views.__alloyId2414);
    $.__views.__alloyId2415 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId2415"
    });
    $.__views.__alloyId2413.add($.__views.__alloyId2415);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId2339!click!back"] && $.__views.__alloyId2339.addEventListener("click", back);
    __defers["$.__views.__alloyId2347!click!setting"] && $.__views.__alloyId2347.addEventListener("click", setting);
    __defers["$.__views.__alloyId2412!click!addNumber"] && $.__views.__alloyId2412.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;