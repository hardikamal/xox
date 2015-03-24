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
<<<<<<< HEAD
    $.__views.__alloyId2385 = Alloy.createController("_header", {
        id: "__alloyId2385",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
    $.__views.__alloyId2343 = Alloy.createController("_header", {
        id: "__alloyId2343",
=======
    $.__views.__alloyId2385 = Alloy.createController("_header", {
        id: "__alloyId2385",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId2385.setParent($.__views.subline);
    $.__views.__alloyId2386 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2386"
    });
<<<<<<< HEAD
    $.__views.subline.add($.__views.__alloyId2386);
    $.__views.__alloyId2387 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.subline.add($.__views.__alloyId2386);
    $.__views.__alloyId2387 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2387"
    });
    $.__views.__alloyId2386.add($.__views.__alloyId2387);
    $.__views.__alloyId2388 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId2387"
    });
    $.__views.__alloyId2386.add($.__views.__alloyId2387);
    $.__views.__alloyId2388 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId2388"
    });
    $.__views.__alloyId2386.add($.__views.__alloyId2388);
    back ? $.__views.__alloyId2388.addEventListener("click", back) : __defers["$.__views.__alloyId2388!click!back"] = true;
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId2388"
    });
    $.__views.__alloyId2386.add($.__views.__alloyId2388);
    back ? $.__views.__alloyId2388.addEventListener("click", back) : __defers["$.__views.__alloyId2388!click!back"] = true;
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2390.add($.__views.__alloyId2391);
    $.__views.__alloyId2392 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2390.add($.__views.__alloyId2391);
    $.__views.__alloyId2392 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2392"
    });
    $.__views.__alloyId2391.add($.__views.__alloyId2392);
    $.__views.__alloyId2393 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId2392"
    });
    $.__views.__alloyId2391.add($.__views.__alloyId2392);
    $.__views.__alloyId2393 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2393"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2351"
=======
        id: "__alloyId2393"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2391.add($.__views.__alloyId2393);
    $.__views.__alloyId2394 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2394"
    });
<<<<<<< HEAD
    $.__views.__alloyId2389.add($.__views.__alloyId2394);
    $.__views.__alloyId2395 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2389.add($.__views.__alloyId2394);
    $.__views.__alloyId2395 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2395"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2353"
=======
        id: "__alloyId2395"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2394.add($.__views.__alloyId2395);
    $.__views.__alloyId2396 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2396"
    });
<<<<<<< HEAD
    $.__views.__alloyId2389.add($.__views.__alloyId2396);
    setting ? $.__views.__alloyId2396.addEventListener("click", setting) : __defers["$.__views.__alloyId2396!click!setting"] = true;
    $.__views.__alloyId2397 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2389.add($.__views.__alloyId2396);
    setting ? $.__views.__alloyId2396.addEventListener("click", setting) : __defers["$.__views.__alloyId2396!click!setting"] = true;
    $.__views.__alloyId2397 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2397"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2355"
=======
        id: "__alloyId2397"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2402.add($.__views.__alloyId2403);
    $.__views.__alloyId2404 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2402.add($.__views.__alloyId2403);
    $.__views.__alloyId2404 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2404"
    });
    $.__views.__alloyId2403.add($.__views.__alloyId2404);
    $.__views.__alloyId2405 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId2404"
    });
    $.__views.__alloyId2403.add($.__views.__alloyId2404);
    $.__views.__alloyId2405 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2405"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2363"
=======
        id: "__alloyId2405"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2403.add($.__views.__alloyId2405);
    $.__views.__alloyId2406 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2406"
    });
<<<<<<< HEAD
    $.__views.__alloyId2401.add($.__views.__alloyId2406);
    $.__views.__alloyId2407 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2401.add($.__views.__alloyId2406);
    $.__views.__alloyId2407 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2407"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2365"
=======
        id: "__alloyId2407"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2406.add($.__views.__alloyId2407);
    $.__views.__alloyId2408 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2408"
    });
<<<<<<< HEAD
    $.__views.__alloyId2401.add($.__views.__alloyId2408);
    $.__views.__alloyId2409 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2401.add($.__views.__alloyId2408);
    $.__views.__alloyId2409 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2409"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2367"
=======
        id: "__alloyId2409"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2414.add($.__views.__alloyId2415);
    $.__views.__alloyId2416 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2414.add($.__views.__alloyId2415);
    $.__views.__alloyId2416 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2416"
    });
    $.__views.__alloyId2415.add($.__views.__alloyId2416);
    $.__views.__alloyId2417 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId2416"
    });
    $.__views.__alloyId2415.add($.__views.__alloyId2416);
    $.__views.__alloyId2417 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2417"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2375"
=======
        id: "__alloyId2417"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2415.add($.__views.__alloyId2417);
    $.__views.__alloyId2418 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2418"
    });
<<<<<<< HEAD
    $.__views.__alloyId2413.add($.__views.__alloyId2418);
    $.__views.__alloyId2419 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2413.add($.__views.__alloyId2418);
    $.__views.__alloyId2419 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2419"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2377"
=======
        id: "__alloyId2419"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2413.add($.__views.__alloyId2422);
    $.__views.__alloyId2423 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2413.add($.__views.__alloyId2422);
    $.__views.__alloyId2423 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2423"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2381"
=======
        id: "__alloyId2423"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2426.add($.__views.__alloyId2427);
    $.__views.__alloyId2428 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2426.add($.__views.__alloyId2427);
    $.__views.__alloyId2428 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2428"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2428);
    $.__views.__alloyId2429 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId2428"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2428);
    $.__views.__alloyId2429 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2429"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2387"
=======
        id: "__alloyId2429"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2429);
    $.__views.__alloyId2430 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2430"
    });
<<<<<<< HEAD
    $.__views.__alloyId2425.add($.__views.__alloyId2430);
    $.__views.__alloyId2431 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2425.add($.__views.__alloyId2430);
    $.__views.__alloyId2431 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2431"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2389"
=======
        id: "__alloyId2431"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2430.add($.__views.__alloyId2431);
    $.__views.__alloyId2432 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2432"
    });
<<<<<<< HEAD
    $.__views.__alloyId2425.add($.__views.__alloyId2432);
    $.__views.__alloyId2433 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2425.add($.__views.__alloyId2432);
    $.__views.__alloyId2433 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2433"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2391"
=======
        id: "__alloyId2433"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2438.add($.__views.__alloyId2439);
    $.__views.__alloyId2440 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2438.add($.__views.__alloyId2439);
    $.__views.__alloyId2440 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2440"
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2440);
    $.__views.__alloyId2441 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId2440"
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2440);
    $.__views.__alloyId2441 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2441"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2399"
=======
        id: "__alloyId2441"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2441);
    $.__views.__alloyId2442 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2442"
    });
<<<<<<< HEAD
    $.__views.__alloyId2437.add($.__views.__alloyId2442);
    $.__views.__alloyId2443 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2437.add($.__views.__alloyId2442);
    $.__views.__alloyId2443 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2443"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2401"
=======
        id: "__alloyId2443"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2442.add($.__views.__alloyId2443);
    $.__views.__alloyId2444 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2444"
    });
<<<<<<< HEAD
    $.__views.__alloyId2437.add($.__views.__alloyId2444);
    $.__views.__alloyId2445 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2437.add($.__views.__alloyId2444);
    $.__views.__alloyId2445 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2445"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2403"
=======
        id: "__alloyId2445"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2450.add($.__views.__alloyId2451);
    $.__views.__alloyId2452 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2450.add($.__views.__alloyId2451);
    $.__views.__alloyId2452 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2452"
    });
    $.__views.__alloyId2451.add($.__views.__alloyId2452);
    $.__views.__alloyId2453 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId2452"
    });
    $.__views.__alloyId2451.add($.__views.__alloyId2452);
    $.__views.__alloyId2453 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
<<<<<<< HEAD
        id: "__alloyId2453"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2411"
=======
        id: "__alloyId2453"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2451.add($.__views.__alloyId2453);
    $.__views.__alloyId2454 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2454"
    });
<<<<<<< HEAD
    $.__views.__alloyId2449.add($.__views.__alloyId2454);
    $.__views.__alloyId2455 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2449.add($.__views.__alloyId2454);
    $.__views.__alloyId2455 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
<<<<<<< HEAD
        id: "__alloyId2455"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2413"
=======
        id: "__alloyId2455"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2449.add($.__views.__alloyId2458);
    $.__views.__alloyId2459 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2449.add($.__views.__alloyId2458);
    $.__views.__alloyId2459 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
<<<<<<< HEAD
        id: "__alloyId2459"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2417"
=======
        id: "__alloyId2459"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2461.add($.__views.__alloyId2462);
    $.__views.__alloyId2463 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId2461.add($.__views.__alloyId2462);
    $.__views.__alloyId2463 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
<<<<<<< HEAD
        id: "__alloyId2463"
    });
    $.__views.__alloyId2462.add($.__views.__alloyId2463);
    $.__views.__alloyId2464 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId2463"
    });
    $.__views.__alloyId2462.add($.__views.__alloyId2463);
    $.__views.__alloyId2464 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId2464"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
        id: "__alloyId2422"
=======
        id: "__alloyId2464"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2462.add($.__views.__alloyId2464);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
<<<<<<< HEAD
    __defers["$.__views.__alloyId2388!click!back"] && $.__views.__alloyId2388.addEventListener("click", back);
    __defers["$.__views.__alloyId2396!click!setting"] && $.__views.__alloyId2396.addEventListener("click", setting);
    __defers["$.__views.__alloyId2461!click!addNumber"] && $.__views.__alloyId2461.addEventListener("click", addNumber);
=======
<<<<<<< HEAD
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
=======
    __defers["$.__views.__alloyId2388!click!back"] && $.__views.__alloyId2388.addEventListener("click", back);
    __defers["$.__views.__alloyId2396!click!setting"] && $.__views.__alloyId2396.addEventListener("click", setting);
    __defers["$.__views.__alloyId2461!click!addNumber"] && $.__views.__alloyId2461.addEventListener("click", addNumber);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;