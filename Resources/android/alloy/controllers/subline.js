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
<<<<<<< Updated upstream
        DRAWER.navigation("subline2", 1);
    }
    function setting() {
        DRAWER.navigation("subline4", 1);
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    $.__views.__alloyId2343 = Alloy.createController("_header", {
        id: "__alloyId2343",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId2343.setParent($.__views.subline);
    $.__views.__alloyId2344 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2344"
    });
    $.__views.subline.add($.__views.__alloyId2344);
    $.__views.__alloyId2345 = Ti.UI.createLabel({
=======
    $.__views.__alloyId699 = Alloy.createController("_header", {
        id: "__alloyId699",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId699.setParent($.__views.subline);
    $.__views.__alloyId700 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId700"
    });
    $.__views.subline.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< Updated upstream
        id: "__alloyId2345"
    });
    $.__views.__alloyId2344.add($.__views.__alloyId2345);
    $.__views.__alloyId2346 = Ti.UI.createImageView({
=======
        id: "__alloyId701"
    });
    $.__views.__alloyId700.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2346"
    });
    $.__views.__alloyId2344.add($.__views.__alloyId2346);
    back ? $.__views.__alloyId2346.addEventListener("click", back) : __defers["$.__views.__alloyId2346!click!back"] = true;
=======
        id: "__alloyId702"
    });
    $.__views.__alloyId700.add($.__views.__alloyId702);
    back ? $.__views.__alloyId702.addEventListener("click", back) : __defers["$.__views.__alloyId702!click!back"] = true;
>>>>>>> Stashed changes
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
<<<<<<< Updated upstream
    $.__views.empty = Ti.UI.createLabel({
        text: "Currently no Subline",
        id: "empty",
        color: "black"
    });
    $.__views.scrollView.add($.__views.empty);
    $.__views.__alloyId2347 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2347"
    });
    $.__views.scrollView.add($.__views.__alloyId2347);
    $.__views.__alloyId2348 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2348"
    });
    $.__views.__alloyId2347.add($.__views.__alloyId2348);
    $.__views.__alloyId2349 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2349"
    });
    $.__views.__alloyId2348.add($.__views.__alloyId2349);
    $.__views.__alloyId2350 = Ti.UI.createLabel({
=======
    $.__views.__alloyId703 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId703"
    });
    $.__views.scrollView.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId704"
    });
    $.__views.__alloyId703.add($.__views.__alloyId704);
    $.__views.__alloyId705 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId705"
    });
    $.__views.__alloyId704.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2350"
    });
    $.__views.__alloyId2349.add($.__views.__alloyId2350);
    $.__views.__alloyId2351 = Ti.UI.createLabel({
=======
        id: "__alloyId706"
    });
    $.__views.__alloyId705.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2351"
    });
    $.__views.__alloyId2349.add($.__views.__alloyId2351);
    $.__views.__alloyId2352 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2352"
    });
    $.__views.__alloyId2347.add($.__views.__alloyId2352);
    $.__views.__alloyId2353 = Ti.UI.createImageView({
=======
        id: "__alloyId707"
    });
    $.__views.__alloyId705.add($.__views.__alloyId707);
    $.__views.__alloyId708 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId708"
    });
    $.__views.__alloyId703.add($.__views.__alloyId708);
    $.__views.__alloyId709 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2353"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2353);
    $.__views.__alloyId2354 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2354"
    });
    $.__views.__alloyId2347.add($.__views.__alloyId2354);
    setting ? $.__views.__alloyId2354.addEventListener("click", setting) : __defers["$.__views.__alloyId2354!click!setting"] = true;
    $.__views.__alloyId2355 = Ti.UI.createImageView({
=======
        id: "__alloyId709"
    });
    $.__views.__alloyId708.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId710"
    });
    $.__views.__alloyId703.add($.__views.__alloyId710);
    $.__views.__alloyId711 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2355"
    });
    $.__views.__alloyId2354.add($.__views.__alloyId2355);
    $.__views.__alloyId2356 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2356"
    });
    $.__views.__alloyId2347.add($.__views.__alloyId2356);
    $.__views.__alloyId2357 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2357"
    });
    $.__views.__alloyId2356.add($.__views.__alloyId2357);
    $.__views.__alloyId2358 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2358"
    });
    $.__views.scrollView.add($.__views.__alloyId2358);
    $.__views.__alloyId2359 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2359"
    });
    $.__views.scrollView.add($.__views.__alloyId2359);
    $.__views.__alloyId2360 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2360"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2360);
    $.__views.__alloyId2361 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2361"
    });
    $.__views.__alloyId2360.add($.__views.__alloyId2361);
    $.__views.__alloyId2362 = Ti.UI.createLabel({
=======
        id: "__alloyId711"
    });
    $.__views.__alloyId710.add($.__views.__alloyId711);
    $.__views.__alloyId712 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId712"
    });
    $.__views.scrollView.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId713"
    });
    $.__views.scrollView.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId714"
    });
    $.__views.__alloyId713.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId715"
    });
    $.__views.__alloyId714.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2362"
    });
    $.__views.__alloyId2361.add($.__views.__alloyId2362);
    $.__views.__alloyId2363 = Ti.UI.createLabel({
=======
        id: "__alloyId716"
    });
    $.__views.__alloyId715.add($.__views.__alloyId716);
    $.__views.__alloyId717 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2363"
    });
    $.__views.__alloyId2361.add($.__views.__alloyId2363);
    $.__views.__alloyId2364 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2364"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2364);
    $.__views.__alloyId2365 = Ti.UI.createImageView({
=======
        id: "__alloyId717"
    });
    $.__views.__alloyId715.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId718"
    });
    $.__views.__alloyId713.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2365"
    });
    $.__views.__alloyId2364.add($.__views.__alloyId2365);
    $.__views.__alloyId2366 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2366"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2366);
    $.__views.__alloyId2367 = Ti.UI.createImageView({
=======
        id: "__alloyId719"
    });
    $.__views.__alloyId718.add($.__views.__alloyId719);
    $.__views.__alloyId720 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId720"
    });
    $.__views.__alloyId713.add($.__views.__alloyId720);
    $.__views.__alloyId721 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2367"
    });
    $.__views.__alloyId2366.add($.__views.__alloyId2367);
    $.__views.__alloyId2368 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2368"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2368);
    $.__views.__alloyId2369 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2369"
    });
    $.__views.__alloyId2368.add($.__views.__alloyId2369);
    $.__views.__alloyId2370 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2370"
    });
    $.__views.scrollView.add($.__views.__alloyId2370);
    $.__views.__alloyId2371 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2371"
    });
    $.__views.scrollView.add($.__views.__alloyId2371);
    $.__views.__alloyId2372 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2372"
    });
    $.__views.__alloyId2371.add($.__views.__alloyId2372);
    $.__views.__alloyId2373 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2373"
    });
    $.__views.__alloyId2372.add($.__views.__alloyId2373);
    $.__views.__alloyId2374 = Ti.UI.createLabel({
=======
        id: "__alloyId721"
    });
    $.__views.__alloyId720.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId722"
    });
    $.__views.scrollView.add($.__views.__alloyId722);
    $.__views.__alloyId723 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId723"
    });
    $.__views.scrollView.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId724"
    });
    $.__views.__alloyId723.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId725"
    });
    $.__views.__alloyId724.add($.__views.__alloyId725);
    $.__views.__alloyId726 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2374"
    });
    $.__views.__alloyId2373.add($.__views.__alloyId2374);
    $.__views.__alloyId2375 = Ti.UI.createLabel({
=======
        id: "__alloyId726"
    });
    $.__views.__alloyId725.add($.__views.__alloyId726);
    $.__views.__alloyId727 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2375"
    });
    $.__views.__alloyId2373.add($.__views.__alloyId2375);
    $.__views.__alloyId2376 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2376"
    });
    $.__views.__alloyId2371.add($.__views.__alloyId2376);
    $.__views.__alloyId2377 = Ti.UI.createImageView({
=======
        id: "__alloyId727"
    });
    $.__views.__alloyId725.add($.__views.__alloyId727);
    $.__views.__alloyId728 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId728"
    });
    $.__views.__alloyId723.add($.__views.__alloyId728);
    $.__views.__alloyId729 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2377"
    });
    $.__views.__alloyId2376.add($.__views.__alloyId2377);
    $.__views.__alloyId2378 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2378"
    });
    $.__views.__alloyId2371.add($.__views.__alloyId2378);
    $.__views.__alloyId2379 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2379"
    });
    $.__views.__alloyId2378.add($.__views.__alloyId2379);
    $.__views.__alloyId2380 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2380"
    });
    $.__views.__alloyId2371.add($.__views.__alloyId2380);
    $.__views.__alloyId2381 = Ti.UI.createImageView({
=======
        id: "__alloyId729"
    });
    $.__views.__alloyId728.add($.__views.__alloyId729);
    $.__views.__alloyId730 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId730"
    });
    $.__views.__alloyId723.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2381"
    });
    $.__views.__alloyId2380.add($.__views.__alloyId2381);
    $.__views.__alloyId2382 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2382"
    });
    $.__views.scrollView.add($.__views.__alloyId2382);
    $.__views.__alloyId2383 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2383"
    });
    $.__views.scrollView.add($.__views.__alloyId2383);
    $.__views.__alloyId2384 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2384"
    });
    $.__views.__alloyId2383.add($.__views.__alloyId2384);
    $.__views.__alloyId2385 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2385"
    });
    $.__views.__alloyId2384.add($.__views.__alloyId2385);
    $.__views.__alloyId2386 = Ti.UI.createLabel({
=======
        id: "__alloyId731"
    });
    $.__views.__alloyId730.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId732"
    });
    $.__views.scrollView.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId733"
    });
    $.__views.scrollView.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId734"
    });
    $.__views.__alloyId733.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId735"
    });
    $.__views.__alloyId734.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2386"
    });
    $.__views.__alloyId2385.add($.__views.__alloyId2386);
    $.__views.__alloyId2387 = Ti.UI.createLabel({
=======
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2387"
    });
    $.__views.__alloyId2385.add($.__views.__alloyId2387);
    $.__views.__alloyId2388 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2388"
    });
    $.__views.__alloyId2383.add($.__views.__alloyId2388);
    $.__views.__alloyId2389 = Ti.UI.createImageView({
=======
        id: "__alloyId737"
    });
    $.__views.__alloyId735.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId738"
    });
    $.__views.__alloyId733.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2389"
    });
    $.__views.__alloyId2388.add($.__views.__alloyId2389);
    $.__views.__alloyId2390 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2390"
    });
    $.__views.__alloyId2383.add($.__views.__alloyId2390);
    $.__views.__alloyId2391 = Ti.UI.createImageView({
=======
        id: "__alloyId739"
    });
    $.__views.__alloyId738.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId740"
    });
    $.__views.__alloyId733.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2391"
    });
    $.__views.__alloyId2390.add($.__views.__alloyId2391);
    $.__views.__alloyId2392 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2392"
    });
    $.__views.__alloyId2383.add($.__views.__alloyId2392);
    $.__views.__alloyId2393 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2393"
    });
    $.__views.__alloyId2392.add($.__views.__alloyId2393);
    $.__views.__alloyId2394 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2394"
    });
    $.__views.scrollView.add($.__views.__alloyId2394);
    $.__views.__alloyId2395 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2395"
    });
    $.__views.scrollView.add($.__views.__alloyId2395);
    $.__views.__alloyId2396 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2396"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2396);
    $.__views.__alloyId2397 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2397"
    });
    $.__views.__alloyId2396.add($.__views.__alloyId2397);
    $.__views.__alloyId2398 = Ti.UI.createLabel({
=======
        id: "__alloyId741"
    });
    $.__views.__alloyId740.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId742"
    });
    $.__views.scrollView.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId743"
    });
    $.__views.scrollView.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId744"
    });
    $.__views.__alloyId743.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId745"
    });
    $.__views.__alloyId744.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2398"
    });
    $.__views.__alloyId2397.add($.__views.__alloyId2398);
    $.__views.__alloyId2399 = Ti.UI.createLabel({
=======
        id: "__alloyId746"
    });
    $.__views.__alloyId745.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2399"
    });
    $.__views.__alloyId2397.add($.__views.__alloyId2399);
    $.__views.__alloyId2400 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2400"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2400);
    $.__views.__alloyId2401 = Ti.UI.createImageView({
=======
        id: "__alloyId747"
    });
    $.__views.__alloyId745.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId748"
    });
    $.__views.__alloyId743.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2401"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2401);
    $.__views.__alloyId2402 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2402"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2402);
    $.__views.__alloyId2403 = Ti.UI.createImageView({
=======
        id: "__alloyId749"
    });
    $.__views.__alloyId748.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId750"
    });
    $.__views.__alloyId743.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2403"
    });
    $.__views.__alloyId2402.add($.__views.__alloyId2403);
    $.__views.__alloyId2404 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2404"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2404);
    $.__views.__alloyId2405 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2405"
    });
    $.__views.__alloyId2404.add($.__views.__alloyId2405);
    $.__views.__alloyId2406 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2406"
    });
    $.__views.scrollView.add($.__views.__alloyId2406);
    $.__views.__alloyId2407 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2407"
    });
    $.__views.scrollView.add($.__views.__alloyId2407);
    $.__views.__alloyId2408 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2408"
    });
    $.__views.__alloyId2407.add($.__views.__alloyId2408);
    $.__views.__alloyId2409 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2409"
    });
    $.__views.__alloyId2408.add($.__views.__alloyId2409);
    $.__views.__alloyId2410 = Ti.UI.createLabel({
=======
        id: "__alloyId751"
    });
    $.__views.__alloyId750.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId752"
    });
    $.__views.scrollView.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId753"
    });
    $.__views.scrollView.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId754"
    });
    $.__views.__alloyId753.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId755"
    });
    $.__views.__alloyId754.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2410"
    });
    $.__views.__alloyId2409.add($.__views.__alloyId2410);
    $.__views.__alloyId2411 = Ti.UI.createLabel({
=======
        id: "__alloyId756"
    });
    $.__views.__alloyId755.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< Updated upstream
        id: "__alloyId2411"
    });
    $.__views.__alloyId2409.add($.__views.__alloyId2411);
    $.__views.__alloyId2412 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2412"
    });
    $.__views.__alloyId2407.add($.__views.__alloyId2412);
    $.__views.__alloyId2413 = Ti.UI.createImageView({
=======
        id: "__alloyId757"
    });
    $.__views.__alloyId755.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId758"
    });
    $.__views.__alloyId753.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2413"
    });
    $.__views.__alloyId2412.add($.__views.__alloyId2413);
    $.__views.__alloyId2414 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2414"
    });
    $.__views.__alloyId2407.add($.__views.__alloyId2414);
    $.__views.__alloyId2415 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2415"
    });
    $.__views.__alloyId2414.add($.__views.__alloyId2415);
    $.__views.__alloyId2416 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2416"
    });
    $.__views.__alloyId2407.add($.__views.__alloyId2416);
    $.__views.__alloyId2417 = Ti.UI.createImageView({
=======
        id: "__alloyId759"
    });
    $.__views.__alloyId758.add($.__views.__alloyId759);
    $.__views.__alloyId760 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId760"
    });
    $.__views.__alloyId753.add($.__views.__alloyId760);
    $.__views.__alloyId761 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< Updated upstream
        id: "__alloyId2417"
    });
    $.__views.__alloyId2416.add($.__views.__alloyId2417);
    $.__views.__alloyId2418 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId2418"
    });
    $.__views.scrollView.add($.__views.__alloyId2418);
    $.__views.__alloyId2419 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId2419"
    });
    $.__views.subline.add($.__views.__alloyId2419);
    addNumber ? $.__views.__alloyId2419.addEventListener("click", addNumber) : __defers["$.__views.__alloyId2419!click!addNumber"] = true;
    $.__views.__alloyId2420 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId2420"
    });
    $.__views.__alloyId2419.add($.__views.__alloyId2420);
    $.__views.__alloyId2421 = Ti.UI.createImageView({
=======
        id: "__alloyId761"
    });
    $.__views.__alloyId760.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId762"
    });
    $.__views.scrollView.add($.__views.__alloyId762);
    $.__views.__alloyId763 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId763"
    });
    $.__views.subline.add($.__views.__alloyId763);
    addNumber ? $.__views.__alloyId763.addEventListener("click", addNumber) : __defers["$.__views.__alloyId763!click!addNumber"] = true;
    $.__views.__alloyId764 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId764"
    });
    $.__views.__alloyId763.add($.__views.__alloyId764);
    $.__views.__alloyId765 = Ti.UI.createImageView({
>>>>>>> Stashed changes
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
<<<<<<< Updated upstream
        id: "__alloyId2421"
    });
    $.__views.__alloyId2420.add($.__views.__alloyId2421);
    $.__views.__alloyId2422 = Ti.UI.createLabel({
=======
        id: "__alloyId765"
    });
    $.__views.__alloyId764.add($.__views.__alloyId765);
    $.__views.__alloyId766 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
<<<<<<< Updated upstream
        id: "__alloyId2422"
    });
    $.__views.__alloyId2420.add($.__views.__alloyId2422);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId2346!click!back"] && $.__views.__alloyId2346.addEventListener("click", back);
    __defers["$.__views.__alloyId2354!click!setting"] && $.__views.__alloyId2354.addEventListener("click", setting);
    __defers["$.__views.__alloyId2419!click!addNumber"] && $.__views.__alloyId2419.addEventListener("click", addNumber);
=======
        id: "__alloyId766"
    });
    $.__views.__alloyId764.add($.__views.__alloyId766);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    __defers["$.__views.__alloyId702!click!back"] && $.__views.__alloyId702.addEventListener("click", back);
    __defers["$.__views.__alloyId763!click!addNumber"] && $.__views.__alloyId763.addEventListener("click", addNumber);
>>>>>>> Stashed changes
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;