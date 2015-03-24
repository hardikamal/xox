function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass3";
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId2287 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2245 = Ti.UI.createView({
=======
    $.__views.__alloyId2056 = Ti.UI.createView({
>>>>>>> origin/master
=======
    $.__views.__alloyId2287 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2287"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2287);
    $.__views.__alloyId2288 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2245);
    $.__views.__alloyId2246 = Ti.UI.createView({
=======
        id: "__alloyId2056"
    });
    $.__views.scrollView.add($.__views.__alloyId2056);
    $.__views.__alloyId2057 = Ti.UI.createView({
>>>>>>> origin/master
=======
    $.__views.__alloyId667 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "90%",
        top: "10",
        id: "__alloyId667"
    });
    $.__views.scrollView.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.scrollView.add($.__views.__alloyId2287);
    $.__views.__alloyId2288 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId2288"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2246"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2288);
    $.__views.__alloyId2289 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2289"
    });
    $.__views.__alloyId2288.add($.__views.__alloyId2289);
    $.__views.__alloyId2290 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
<<<<<<< HEAD
        id: "__alloyId2290"
    });
    $.__views.__alloyId2289.add($.__views.__alloyId2290);
    $.__views.__alloyId2291 = Ti.UI.createLabel({
=======
        id: "__alloyId2248"
=======
        id: "__alloyId2288"
>>>>>>> origin/master
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2288);
    $.__views.__alloyId2289 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2289"
    });
    $.__views.__alloyId2288.add($.__views.__alloyId2289);
    $.__views.__alloyId2290 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2290"
    });
<<<<<<< HEAD
    $.__views.__alloyId2058.add($.__views.__alloyId2059);
    $.__views.__alloyId2060 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId668"
    });
    $.__views.__alloyId667.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId669"
    });
    $.__views.__alloyId668.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId670"
    });
    $.__views.__alloyId669.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2289.add($.__views.__alloyId2290);
    $.__views.__alloyId2291 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2291"
    });
    $.__views.__alloyId2290.add($.__views.__alloyId2291);
    $.__views.__alloyId2292 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2249"
    });
    $.__views.__alloyId2248.add($.__views.__alloyId2249);
    $.__views.__alloyId2250 = Ti.UI.createLabel({
=======
        id: "__alloyId2060"
    });
    $.__views.__alloyId2059.add($.__views.__alloyId2060);
    $.__views.__alloyId2061 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId671"
    });
    $.__views.__alloyId670.add($.__views.__alloyId671);
    $.__views.__alloyId672 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2291"
    });
    $.__views.__alloyId2290.add($.__views.__alloyId2291);
    $.__views.__alloyId2292 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2292"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2250"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2290.add($.__views.__alloyId2292);
    $.__views.__alloyId2293 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2293"
    });
<<<<<<< HEAD
    $.__views.__alloyId2288.add($.__views.__alloyId2293);
    $.__views.__alloyId2294 = Ti.UI.createView({
=======
    $.__views.__alloyId2246.add($.__views.__alloyId2251);
    $.__views.__alloyId2252 = Ti.UI.createView({
=======
        id: "__alloyId2061"
=======
        id: "__alloyId2292"
>>>>>>> origin/master
    });
    $.__views.__alloyId2290.add($.__views.__alloyId2292);
    $.__views.__alloyId2293 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2293"
    });
<<<<<<< HEAD
    $.__views.__alloyId2057.add($.__views.__alloyId2062);
    $.__views.__alloyId2063 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId672"
    });
    $.__views.__alloyId670.add($.__views.__alloyId672);
    $.__views.__alloyId673 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId673"
    });
    $.__views.__alloyId668.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2288.add($.__views.__alloyId2293);
    $.__views.__alloyId2294 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2294"
    });
    $.__views.__alloyId2293.add($.__views.__alloyId2294);
    $.__views.__alloyId2295 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2252"
    });
    $.__views.__alloyId2251.add($.__views.__alloyId2252);
    $.__views.__alloyId2253 = Ti.UI.createLabel({
=======
        id: "__alloyId2063"
    });
    $.__views.__alloyId2062.add($.__views.__alloyId2063);
    $.__views.__alloyId2064 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId674"
    });
    $.__views.__alloyId673.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2294"
    });
    $.__views.__alloyId2293.add($.__views.__alloyId2294);
    $.__views.__alloyId2295 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2295"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2295);
    $.__views.__alloyId2296 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2253"
    });
    $.__views.__alloyId2252.add($.__views.__alloyId2253);
    $.__views.__alloyId2254 = Ti.UI.createLabel({
=======
        id: "__alloyId2064"
    });
    $.__views.__alloyId2063.add($.__views.__alloyId2064);
    $.__views.__alloyId2065 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId675"
    });
    $.__views.__alloyId674.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2295"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2295);
    $.__views.__alloyId2296 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2296"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2296);
    $.__views.__alloyId2297 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2254"
    });
    $.__views.__alloyId2252.add($.__views.__alloyId2254);
    $.__views.__alloyId2255 = Ti.UI.createView({
=======
        id: "__alloyId2065"
    });
    $.__views.__alloyId2063.add($.__views.__alloyId2065);
    $.__views.__alloyId2066 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId676"
    });
    $.__views.__alloyId674.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId2296"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2296);
    $.__views.__alloyId2297 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId2297"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2297);
    $.__views.__alloyId2298 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2255"
    });
    $.__views.__alloyId2245.add($.__views.__alloyId2255);
    $.__views.__alloyId2256 = Ti.UI.createLabel({
=======
        id: "__alloyId2066"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2066);
    $.__views.__alloyId2067 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId677"
    });
    $.__views.__alloyId667.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2297"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2297);
    $.__views.__alloyId2298 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2298"
    });
    $.__views.__alloyId2297.add($.__views.__alloyId2298);
    $.__views.__alloyId2299 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2256"
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2256);
    $.__views.__alloyId2257 = Ti.UI.createView({
=======
        id: "__alloyId2067"
    });
    $.__views.__alloyId2066.add($.__views.__alloyId2067);
    $.__views.__alloyId2068 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId678"
    });
    $.__views.__alloyId677.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId2298"
    });
    $.__views.__alloyId2297.add($.__views.__alloyId2298);
    $.__views.__alloyId2299 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId2299"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2257"
=======
        id: "__alloyId2299"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2299);
    $.__views.__alloyId2300 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2300"
    });
<<<<<<< HEAD
    $.__views.__alloyId2299.add($.__views.__alloyId2300);
    $.__views.__alloyId2301 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2257.add($.__views.__alloyId2258);
    $.__views.__alloyId2259 = Ti.UI.createLabel({
=======
        id: "__alloyId2068"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2068);
    $.__views.__alloyId2069 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2069"
    });
    $.__views.__alloyId2068.add($.__views.__alloyId2069);
    $.__views.__alloyId2070 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId679"
    });
    $.__views.__alloyId667.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId680"
    });
    $.__views.__alloyId679.add($.__views.__alloyId680);
    $.__views.__alloyId681 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2299.add($.__views.__alloyId2300);
    $.__views.__alloyId2301 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2301"
    });
    $.__views.__alloyId2300.add($.__views.__alloyId2301);
    $.__views.__alloyId2302 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2259"
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2259);
    $.__views.__alloyId2260 = Ti.UI.createLabel({
=======
        id: "__alloyId2070"
    });
    $.__views.__alloyId2069.add($.__views.__alloyId2070);
    $.__views.__alloyId2071 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId681"
    });
    $.__views.__alloyId680.add($.__views.__alloyId681);
    $.__views.__alloyId682 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2301"
    });
    $.__views.__alloyId2300.add($.__views.__alloyId2301);
    $.__views.__alloyId2302 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2302"
    });
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2260"
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2260);
    $.__views.__alloyId2261 = Ti.UI.createView({
=======
        id: "__alloyId2071"
=======
        id: "__alloyId2302"
>>>>>>> origin/master
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId2300.add($.__views.__alloyId2302);
    $.__views.__alloyId2303 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2303"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2303);
    $.__views.__alloyId2304 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2261);
    $.__views.__alloyId2262 = Ti.UI.createView({
=======
        id: "__alloyId2072"
    });
    $.__views.scrollView.add($.__views.__alloyId2072);
    $.__views.__alloyId2073 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId682"
    });
    $.__views.__alloyId680.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId683"
    });
    $.__views.scrollView.add($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.scrollView.add($.__views.__alloyId2303);
    $.__views.__alloyId2304 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId2304"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2262"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2303.add($.__views.__alloyId2304);
    $.__views.__alloyId2305 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2305"
    });
    $.__views.__alloyId2304.add($.__views.__alloyId2305);
    $.__views.__alloyId2306 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
<<<<<<< HEAD
        id: "__alloyId2306"
    });
    $.__views.__alloyId2305.add($.__views.__alloyId2306);
    $.__views.__alloyId2307 = Ti.UI.createLabel({
=======
        id: "__alloyId2264"
=======
        id: "__alloyId2304"
>>>>>>> origin/master
    });
    $.__views.__alloyId2303.add($.__views.__alloyId2304);
    $.__views.__alloyId2305 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2305"
    });
    $.__views.__alloyId2304.add($.__views.__alloyId2305);
    $.__views.__alloyId2306 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2306"
    });
<<<<<<< HEAD
    $.__views.__alloyId2074.add($.__views.__alloyId2075);
    $.__views.__alloyId2076 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId684"
    });
    $.__views.__alloyId683.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId685"
    });
    $.__views.__alloyId684.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId686"
    });
    $.__views.__alloyId685.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2305.add($.__views.__alloyId2306);
    $.__views.__alloyId2307 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2307"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2307);
    $.__views.__alloyId2308 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2265"
    });
    $.__views.__alloyId2264.add($.__views.__alloyId2265);
    $.__views.__alloyId2266 = Ti.UI.createLabel({
=======
        id: "__alloyId2076"
    });
    $.__views.__alloyId2075.add($.__views.__alloyId2076);
    $.__views.__alloyId2077 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId687"
    });
    $.__views.__alloyId686.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2307"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2307);
    $.__views.__alloyId2308 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2308"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2266"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2308);
    $.__views.__alloyId2309 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2309"
    });
<<<<<<< HEAD
    $.__views.__alloyId2304.add($.__views.__alloyId2309);
    $.__views.__alloyId2310 = Ti.UI.createView({
=======
    $.__views.__alloyId2262.add($.__views.__alloyId2267);
    $.__views.__alloyId2268 = Ti.UI.createView({
=======
        id: "__alloyId2077"
=======
        id: "__alloyId2308"
>>>>>>> origin/master
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2308);
    $.__views.__alloyId2309 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2309"
    });
<<<<<<< HEAD
    $.__views.__alloyId2073.add($.__views.__alloyId2078);
    $.__views.__alloyId2079 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId688"
    });
    $.__views.__alloyId686.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId689"
    });
    $.__views.__alloyId684.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2304.add($.__views.__alloyId2309);
    $.__views.__alloyId2310 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2310"
    });
    $.__views.__alloyId2309.add($.__views.__alloyId2310);
    $.__views.__alloyId2311 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2268"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2268);
    $.__views.__alloyId2269 = Ti.UI.createLabel({
=======
        id: "__alloyId2079"
    });
    $.__views.__alloyId2078.add($.__views.__alloyId2079);
    $.__views.__alloyId2080 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId690"
    });
    $.__views.__alloyId689.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2310"
    });
    $.__views.__alloyId2309.add($.__views.__alloyId2310);
    $.__views.__alloyId2311 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2311"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2311);
    $.__views.__alloyId2312 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2269"
    });
    $.__views.__alloyId2268.add($.__views.__alloyId2269);
    $.__views.__alloyId2270 = Ti.UI.createLabel({
=======
        id: "__alloyId2080"
    });
    $.__views.__alloyId2079.add($.__views.__alloyId2080);
    $.__views.__alloyId2081 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId691"
    });
    $.__views.__alloyId690.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2311"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2311);
    $.__views.__alloyId2312 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2312"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2312);
    $.__views.__alloyId2313 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2270"
    });
    $.__views.__alloyId2268.add($.__views.__alloyId2270);
    $.__views.__alloyId2271 = Ti.UI.createView({
=======
        id: "__alloyId2081"
    });
    $.__views.__alloyId2079.add($.__views.__alloyId2081);
    $.__views.__alloyId2082 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId692"
    });
    $.__views.__alloyId690.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId2312"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2312);
    $.__views.__alloyId2313 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId2313"
    });
    $.__views.__alloyId2303.add($.__views.__alloyId2313);
    $.__views.__alloyId2314 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2271"
    });
    $.__views.__alloyId2261.add($.__views.__alloyId2271);
    $.__views.__alloyId2272 = Ti.UI.createLabel({
=======
        id: "__alloyId2082"
    });
    $.__views.__alloyId2072.add($.__views.__alloyId2082);
    $.__views.__alloyId2083 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId693"
    });
    $.__views.__alloyId683.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2313"
    });
    $.__views.__alloyId2303.add($.__views.__alloyId2313);
    $.__views.__alloyId2314 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2314"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2314);
    $.__views.__alloyId2315 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2272"
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2272);
    $.__views.__alloyId2273 = Ti.UI.createView({
=======
        id: "__alloyId2083"
    });
    $.__views.__alloyId2082.add($.__views.__alloyId2083);
    $.__views.__alloyId2084 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId694"
    });
    $.__views.__alloyId693.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId2314"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2314);
    $.__views.__alloyId2315 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId2315"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2273"
=======
        id: "__alloyId2315"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2303.add($.__views.__alloyId2315);
    $.__views.__alloyId2316 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2316"
    });
<<<<<<< HEAD
    $.__views.__alloyId2315.add($.__views.__alloyId2316);
    $.__views.__alloyId2317 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2273.add($.__views.__alloyId2274);
    $.__views.__alloyId2275 = Ti.UI.createLabel({
=======
        id: "__alloyId2084"
    });
    $.__views.__alloyId2072.add($.__views.__alloyId2084);
    $.__views.__alloyId2085 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2085"
    });
    $.__views.__alloyId2084.add($.__views.__alloyId2085);
    $.__views.__alloyId2086 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId695"
    });
    $.__views.__alloyId683.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId696"
    });
    $.__views.__alloyId695.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2315.add($.__views.__alloyId2316);
    $.__views.__alloyId2317 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2317"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2317);
    $.__views.__alloyId2318 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2275"
    });
    $.__views.__alloyId2274.add($.__views.__alloyId2275);
    $.__views.__alloyId2276 = Ti.UI.createLabel({
=======
        id: "__alloyId2086"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2086);
    $.__views.__alloyId2087 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId697"
    });
    $.__views.__alloyId696.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2317"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2317);
    $.__views.__alloyId2318 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2318"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2318);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2276"
    });
    $.__views.__alloyId2274.add($.__views.__alloyId2276);
=======
        id: "__alloyId2087"
    });
    $.__views.__alloyId2085.add($.__views.__alloyId2087);
>>>>>>> origin/master
=======
        id: "__alloyId698"
    });
    $.__views.__alloyId696.add($.__views.__alloyId698);
>>>>>>> Stashed changes
=======
        id: "__alloyId2318"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2318);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;