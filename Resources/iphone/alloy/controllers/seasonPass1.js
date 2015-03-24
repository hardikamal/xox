function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function checkout(e) {
        console.log("e.source.mod: " + e.source.mod);
        Ti.App.Properties.setString("seasonPass", e.source.mod);
        DRAWER.navigation("seasonPassCheckout1", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass1";
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2108 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2352 = Ti.UI.createView({
=======
    $.__views.__alloyId2108 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2108 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2352"
    });
    $.__views.scrollView.add($.__views.__alloyId2352);
    checkout ? $.__views.__alloyId2352.addEventListener("click", checkout) : __defers["$.__views.__alloyId2352!click!checkout"] = true;
    $.__views.__alloyId2353 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2108"
    });
    $.__views.scrollView.add($.__views.__alloyId2108);
    checkout ? $.__views.__alloyId2108.addEventListener("click", checkout) : __defers["$.__views.__alloyId2108!click!checkout"] = true;
    $.__views.__alloyId2109 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2353"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2353);
    $.__views.__alloyId2354 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2109"
    });
    $.__views.__alloyId2108.add($.__views.__alloyId2109);
    $.__views.__alloyId2110 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2354"
    });
    $.__views.__alloyId2353.add($.__views.__alloyId2354);
    $.__views.__alloyId2355 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2110"
    });
    $.__views.__alloyId2109.add($.__views.__alloyId2110);
    $.__views.__alloyId2111 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2111"
    });
    $.__views.__alloyId2110.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2355"
    });
    $.__views.__alloyId2354.add($.__views.__alloyId2355);
    $.__views.__alloyId2356 = Ti.UI.createLabel({
=======
        id: "__alloyId2111"
    });
    $.__views.__alloyId2110.add($.__views.__alloyId2111);
    $.__views.__alloyId2112 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2356"
    });
    $.__views.__alloyId2355.add($.__views.__alloyId2356);
    $.__views.__alloyId2357 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2112"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2112);
    $.__views.__alloyId2113 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2113"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2113);
    $.__views.__alloyId2114 = Ti.UI.createView({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2357"
    });
    $.__views.__alloyId2355.add($.__views.__alloyId2357);
    $.__views.__alloyId2358 = Ti.UI.createView({
=======
        id: "__alloyId2113"
    });
    $.__views.__alloyId2111.add($.__views.__alloyId2113);
    $.__views.__alloyId2114 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2358"
    });
    $.__views.__alloyId2353.add($.__views.__alloyId2358);
    $.__views.__alloyId2359 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2114"
    });
    $.__views.__alloyId2109.add($.__views.__alloyId2114);
    $.__views.__alloyId2115 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2115"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2359"
    });
    $.__views.__alloyId2358.add($.__views.__alloyId2359);
    $.__views.__alloyId2360 = Ti.UI.createLabel({
=======
        id: "__alloyId2115"
    });
    $.__views.__alloyId2114.add($.__views.__alloyId2115);
    $.__views.__alloyId2116 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2360"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2360);
    $.__views.__alloyId2361 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2116"
    });
    $.__views.__alloyId2115.add($.__views.__alloyId2116);
    $.__views.__alloyId2117 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2117"
    });
    $.__views.__alloyId2115.add($.__views.__alloyId2117);
    $.__views.__alloyId2118 = Ti.UI.createView({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2361"
    });
    $.__views.__alloyId2359.add($.__views.__alloyId2361);
    $.__views.__alloyId2362 = Ti.UI.createView({
=======
        id: "__alloyId2117"
    });
    $.__views.__alloyId2115.add($.__views.__alloyId2117);
    $.__views.__alloyId2118 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2362"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2362);
    $.__views.__alloyId2363 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2118"
    });
    $.__views.__alloyId2108.add($.__views.__alloyId2118);
    $.__views.__alloyId2119 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2119"
    });
    $.__views.__alloyId2118.add($.__views.__alloyId2119);
    $.__views.__alloyId2120 = Ti.UI.createView({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2363"
    });
    $.__views.__alloyId2362.add($.__views.__alloyId2363);
    $.__views.__alloyId2364 = Ti.UI.createView({
=======
        id: "__alloyId2119"
    });
    $.__views.__alloyId2118.add($.__views.__alloyId2119);
    $.__views.__alloyId2120 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2364"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2364);
    $.__views.__alloyId2365 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2120"
    });
    $.__views.__alloyId2108.add($.__views.__alloyId2120);
    $.__views.__alloyId2121 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2121"
    });
    $.__views.__alloyId2120.add($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2365"
    });
    $.__views.__alloyId2364.add($.__views.__alloyId2365);
    $.__views.__alloyId2366 = Ti.UI.createLabel({
=======
        id: "__alloyId2121"
    });
    $.__views.__alloyId2120.add($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2366"
    });
    $.__views.__alloyId2365.add($.__views.__alloyId2366);
    $.__views.__alloyId2367 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2122"
    });
    $.__views.__alloyId2121.add($.__views.__alloyId2122);
    $.__views.__alloyId2123 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "1",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2123"
    });
    $.__views.__alloyId2121.add($.__views.__alloyId2123);
    $.__views.__alloyId2124 = Ti.UI.createView({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2367"
    });
    $.__views.__alloyId2365.add($.__views.__alloyId2367);
    $.__views.__alloyId2368 = Ti.UI.createView({
=======
        id: "__alloyId2123"
    });
    $.__views.__alloyId2121.add($.__views.__alloyId2123);
    $.__views.__alloyId2124 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2368"
    });
    $.__views.scrollView.add($.__views.__alloyId2368);
    checkout ? $.__views.__alloyId2368.addEventListener("click", checkout) : __defers["$.__views.__alloyId2368!click!checkout"] = true;
    $.__views.__alloyId2369 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2124"
    });
    $.__views.scrollView.add($.__views.__alloyId2124);
    checkout ? $.__views.__alloyId2124.addEventListener("click", checkout) : __defers["$.__views.__alloyId2124!click!checkout"] = true;
    $.__views.__alloyId2125 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2125"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2125);
    $.__views.__alloyId2126 = Ti.UI.createView({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2369"
    });
    $.__views.__alloyId2368.add($.__views.__alloyId2369);
    $.__views.__alloyId2370 = Ti.UI.createView({
=======
        id: "__alloyId2125"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2125);
    $.__views.__alloyId2126 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2370"
    });
    $.__views.__alloyId2369.add($.__views.__alloyId2370);
    $.__views.__alloyId2371 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2126"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2126);
    $.__views.__alloyId2127 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2371"
    });
    $.__views.__alloyId2370.add($.__views.__alloyId2371);
    $.__views.__alloyId2372 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2127"
    });
    $.__views.__alloyId2126.add($.__views.__alloyId2127);
    $.__views.__alloyId2128 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2128"
    });
    $.__views.__alloyId2127.add($.__views.__alloyId2128);
    $.__views.__alloyId2129 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2372"
    });
    $.__views.__alloyId2371.add($.__views.__alloyId2372);
    $.__views.__alloyId2373 = Ti.UI.createLabel({
=======
        id: "__alloyId2128"
    });
    $.__views.__alloyId2127.add($.__views.__alloyId2128);
    $.__views.__alloyId2129 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2373"
    });
    $.__views.__alloyId2371.add($.__views.__alloyId2373);
    $.__views.__alloyId2374 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2129"
    });
    $.__views.__alloyId2127.add($.__views.__alloyId2129);
    $.__views.__alloyId2130 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2130"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2130);
    $.__views.__alloyId2131 = Ti.UI.createView({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2374"
    });
    $.__views.__alloyId2369.add($.__views.__alloyId2374);
    $.__views.__alloyId2375 = Ti.UI.createView({
=======
        id: "__alloyId2130"
    });
    $.__views.__alloyId2125.add($.__views.__alloyId2130);
    $.__views.__alloyId2131 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2375"
    });
    $.__views.__alloyId2374.add($.__views.__alloyId2375);
    $.__views.__alloyId2376 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2131"
    });
    $.__views.__alloyId2130.add($.__views.__alloyId2131);
    $.__views.__alloyId2132 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2132"
    });
    $.__views.__alloyId2131.add($.__views.__alloyId2132);
    $.__views.__alloyId2133 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2376"
    });
    $.__views.__alloyId2375.add($.__views.__alloyId2376);
    $.__views.__alloyId2377 = Ti.UI.createLabel({
=======
        id: "__alloyId2132"
    });
    $.__views.__alloyId2131.add($.__views.__alloyId2132);
    $.__views.__alloyId2133 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2377"
    });
    $.__views.__alloyId2375.add($.__views.__alloyId2377);
    $.__views.__alloyId2378 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2133"
    });
    $.__views.__alloyId2131.add($.__views.__alloyId2133);
    $.__views.__alloyId2134 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2134"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2134);
    $.__views.__alloyId2135 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2378"
    });
    $.__views.__alloyId2368.add($.__views.__alloyId2378);
    $.__views.__alloyId2379 = Ti.UI.createLabel({
=======
        id: "__alloyId2134"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2134);
    $.__views.__alloyId2135 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2379"
    });
    $.__views.__alloyId2378.add($.__views.__alloyId2379);
    $.__views.__alloyId2380 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2135"
    });
    $.__views.__alloyId2134.add($.__views.__alloyId2135);
    $.__views.__alloyId2136 = Ti.UI.createView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2136"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2136);
    $.__views.__alloyId2137 = Ti.UI.createView({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2380"
    });
    $.__views.__alloyId2368.add($.__views.__alloyId2380);
    $.__views.__alloyId2381 = Ti.UI.createView({
=======
        id: "__alloyId2136"
    });
    $.__views.__alloyId2124.add($.__views.__alloyId2136);
    $.__views.__alloyId2137 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2381"
    });
    $.__views.__alloyId2380.add($.__views.__alloyId2381);
    $.__views.__alloyId2382 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2137"
    });
    $.__views.__alloyId2136.add($.__views.__alloyId2137);
    $.__views.__alloyId2138 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId2138"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2138);
    $.__views.__alloyId2139 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2382"
    });
    $.__views.__alloyId2381.add($.__views.__alloyId2382);
    $.__views.__alloyId2383 = Ti.UI.createLabel({
=======
        id: "__alloyId2138"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2138);
    $.__views.__alloyId2139 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "2",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2383"
    });
    $.__views.__alloyId2381.add($.__views.__alloyId2383);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2352!click!checkout"] && $.__views.__alloyId2352.addEventListener("click", checkout);
    __defers["$.__views.__alloyId2368!click!checkout"] && $.__views.__alloyId2368.addEventListener("click", checkout);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId2139"
    });
    $.__views.__alloyId2137.add($.__views.__alloyId2139);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2108!click!checkout"] && $.__views.__alloyId2108.addEventListener("click", checkout);
    __defers["$.__views.__alloyId2124!click!checkout"] && $.__views.__alloyId2124.addEventListener("click", checkout);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;