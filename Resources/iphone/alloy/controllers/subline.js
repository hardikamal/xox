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
    $.__views.__alloyId2312 = Alloy.createController("_header", {
        id: "__alloyId2312",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId2312.setParent($.__views.subline);
    $.__views.__alloyId2313 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2313"
    });
    $.__views.subline.add($.__views.__alloyId2313);
    $.__views.__alloyId2314 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2314"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2314);
    $.__views.__alloyId2315 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2315"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2315);
    back ? $.__views.__alloyId2315.addEventListener("click", back) : __defers["$.__views.__alloyId2315!click!back"] = true;
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
    $.__views.__alloyId2316 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2316"
    });
    $.__views.scrollView.add($.__views.__alloyId2316);
    $.__views.__alloyId2317 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2317"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2317);
    $.__views.__alloyId2318 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2318"
    });
    $.__views.__alloyId2317.add($.__views.__alloyId2318);
    $.__views.__alloyId2319 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2319"
    });
    $.__views.__alloyId2318.add($.__views.__alloyId2319);
    $.__views.__alloyId2320 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2320"
    });
    $.__views.__alloyId2318.add($.__views.__alloyId2320);
    $.__views.__alloyId2321 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2321"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2321);
    $.__views.__alloyId2322 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2322"
    });
    $.__views.__alloyId2321.add($.__views.__alloyId2322);
    $.__views.__alloyId2323 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2323"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2323);
    setting ? $.__views.__alloyId2323.addEventListener("click", setting) : __defers["$.__views.__alloyId2323!click!setting"] = true;
    $.__views.__alloyId2324 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2324"
    });
    $.__views.__alloyId2323.add($.__views.__alloyId2324);
    $.__views.__alloyId2325 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2325"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2325);
    $.__views.__alloyId2326 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2326"
    });
    $.__views.__alloyId2325.add($.__views.__alloyId2326);
    $.__views.__alloyId2327 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2327"
    });
    $.__views.scrollView.add($.__views.__alloyId2327);
    $.__views.__alloyId2328 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2328"
    });
    $.__views.scrollView.add($.__views.__alloyId2328);
    $.__views.__alloyId2329 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2329"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2329);
    $.__views.__alloyId2330 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2330"
    });
    $.__views.__alloyId2329.add($.__views.__alloyId2330);
    $.__views.__alloyId2331 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2331"
    });
    $.__views.__alloyId2330.add($.__views.__alloyId2331);
    $.__views.__alloyId2332 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2332"
    });
    $.__views.__alloyId2330.add($.__views.__alloyId2332);
    $.__views.__alloyId2333 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2333"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2333);
    $.__views.__alloyId2334 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2334"
    });
    $.__views.__alloyId2333.add($.__views.__alloyId2334);
    $.__views.__alloyId2335 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2335"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2335);
    $.__views.__alloyId2336 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2336"
    });
    $.__views.__alloyId2335.add($.__views.__alloyId2336);
    $.__views.__alloyId2337 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2337"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2337);
    $.__views.__alloyId2338 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2338"
    });
    $.__views.__alloyId2337.add($.__views.__alloyId2338);
    $.__views.__alloyId2339 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2339"
    });
    $.__views.scrollView.add($.__views.__alloyId2339);
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
        width: "100%",
        height: "2",
        id: "__alloyId2387"
    });
    $.__views.scrollView.add($.__views.__alloyId2387);
    $.__views.__alloyId2388 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId2388"
    });
    $.__views.subline.add($.__views.__alloyId2388);
    addNumber ? $.__views.__alloyId2388.addEventListener("click", addNumber) : __defers["$.__views.__alloyId2388!click!addNumber"] = true;
    $.__views.__alloyId2389 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId2389"
    });
    $.__views.__alloyId2388.add($.__views.__alloyId2389);
    $.__views.__alloyId2390 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId2390"
    });
    $.__views.__alloyId2389.add($.__views.__alloyId2390);
    $.__views.__alloyId2391 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId2391"
    });
    $.__views.__alloyId2389.add($.__views.__alloyId2391);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId2315!click!back"] && $.__views.__alloyId2315.addEventListener("click", back);
    __defers["$.__views.__alloyId2323!click!setting"] && $.__views.__alloyId2323.addEventListener("click", setting);
    __defers["$.__views.__alloyId2388!click!addNumber"] && $.__views.__alloyId2388.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;