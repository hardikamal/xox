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
    this.__controllerPath = "seasonPass2";
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
    $.__views.__alloyId2255 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId2213 = Ti.UI.createView({
=======
    $.__views.__alloyId2024 = Ti.UI.createView({
>>>>>>> origin/master
=======
    $.__views.__alloyId2255 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2255"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2255);
    $.__views.__alloyId2256 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2213);
    $.__views.__alloyId2214 = Ti.UI.createView({
=======
        id: "__alloyId2024"
    });
    $.__views.scrollView.add($.__views.__alloyId2024);
    $.__views.__alloyId2025 = Ti.UI.createView({
>>>>>>> origin/master
=======
    $.__views.__alloyId635 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "90%",
        top: "10",
        id: "__alloyId635"
    });
    $.__views.scrollView.add($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.scrollView.add($.__views.__alloyId2255);
    $.__views.__alloyId2256 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId2256"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2214"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2256);
    $.__views.__alloyId2257 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2257"
    });
    $.__views.__alloyId2256.add($.__views.__alloyId2257);
    $.__views.__alloyId2258 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
<<<<<<< HEAD
        id: "__alloyId2258"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2258);
    $.__views.__alloyId2259 = Ti.UI.createLabel({
=======
        id: "__alloyId2216"
=======
        id: "__alloyId2256"
>>>>>>> origin/master
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2256);
    $.__views.__alloyId2257 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2257"
    });
    $.__views.__alloyId2256.add($.__views.__alloyId2257);
    $.__views.__alloyId2258 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2258"
    });
<<<<<<< HEAD
    $.__views.__alloyId2026.add($.__views.__alloyId2027);
    $.__views.__alloyId2028 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId636"
    });
    $.__views.__alloyId635.add($.__views.__alloyId636);
    $.__views.__alloyId637 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId637"
    });
    $.__views.__alloyId636.add($.__views.__alloyId637);
    $.__views.__alloyId638 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId638"
    });
    $.__views.__alloyId637.add($.__views.__alloyId638);
    $.__views.__alloyId639 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2257.add($.__views.__alloyId2258);
    $.__views.__alloyId2259 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2259"
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2259);
    $.__views.__alloyId2260 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2217"
    });
    $.__views.__alloyId2216.add($.__views.__alloyId2217);
    $.__views.__alloyId2218 = Ti.UI.createLabel({
=======
        id: "__alloyId2028"
    });
    $.__views.__alloyId2027.add($.__views.__alloyId2028);
    $.__views.__alloyId2029 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId639"
    });
    $.__views.__alloyId638.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2259"
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2259);
    $.__views.__alloyId2260 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2260"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2218"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2260);
    $.__views.__alloyId2261 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2261"
    });
<<<<<<< HEAD
    $.__views.__alloyId2256.add($.__views.__alloyId2261);
    $.__views.__alloyId2262 = Ti.UI.createView({
=======
    $.__views.__alloyId2214.add($.__views.__alloyId2219);
    $.__views.__alloyId2220 = Ti.UI.createView({
=======
        id: "__alloyId2029"
=======
        id: "__alloyId2260"
>>>>>>> origin/master
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2260);
    $.__views.__alloyId2261 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2261"
    });
<<<<<<< HEAD
    $.__views.__alloyId2025.add($.__views.__alloyId2030);
    $.__views.__alloyId2031 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId640"
    });
    $.__views.__alloyId638.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId641"
    });
    $.__views.__alloyId636.add($.__views.__alloyId641);
    $.__views.__alloyId642 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2256.add($.__views.__alloyId2261);
    $.__views.__alloyId2262 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2262"
    });
    $.__views.__alloyId2261.add($.__views.__alloyId2262);
    $.__views.__alloyId2263 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2220"
    });
    $.__views.__alloyId2219.add($.__views.__alloyId2220);
    $.__views.__alloyId2221 = Ti.UI.createLabel({
=======
        id: "__alloyId2031"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2031);
    $.__views.__alloyId2032 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId642"
    });
    $.__views.__alloyId641.add($.__views.__alloyId642);
    $.__views.__alloyId643 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2262"
    });
    $.__views.__alloyId2261.add($.__views.__alloyId2262);
    $.__views.__alloyId2263 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2263"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2263);
    $.__views.__alloyId2264 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2221"
    });
    $.__views.__alloyId2220.add($.__views.__alloyId2221);
    $.__views.__alloyId2222 = Ti.UI.createLabel({
=======
        id: "__alloyId2032"
    });
    $.__views.__alloyId2031.add($.__views.__alloyId2032);
    $.__views.__alloyId2033 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId643"
    });
    $.__views.__alloyId642.add($.__views.__alloyId643);
    $.__views.__alloyId644 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2263"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2263);
    $.__views.__alloyId2264 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2264"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2264);
    $.__views.__alloyId2265 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2222"
    });
    $.__views.__alloyId2220.add($.__views.__alloyId2222);
    $.__views.__alloyId2223 = Ti.UI.createView({
=======
        id: "__alloyId2033"
    });
    $.__views.__alloyId2031.add($.__views.__alloyId2033);
    $.__views.__alloyId2034 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId644"
    });
    $.__views.__alloyId642.add($.__views.__alloyId644);
    $.__views.__alloyId645 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId2264"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2264);
    $.__views.__alloyId2265 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId2265"
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2265);
    $.__views.__alloyId2266 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2223"
    });
    $.__views.__alloyId2213.add($.__views.__alloyId2223);
    $.__views.__alloyId2224 = Ti.UI.createLabel({
=======
        id: "__alloyId2034"
    });
    $.__views.__alloyId2024.add($.__views.__alloyId2034);
    $.__views.__alloyId2035 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId645"
    });
    $.__views.__alloyId635.add($.__views.__alloyId645);
    $.__views.__alloyId646 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2265"
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2265);
    $.__views.__alloyId2266 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2266"
    });
    $.__views.__alloyId2265.add($.__views.__alloyId2266);
    $.__views.__alloyId2267 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2224"
    });
    $.__views.__alloyId2223.add($.__views.__alloyId2224);
    $.__views.__alloyId2225 = Ti.UI.createView({
=======
        id: "__alloyId2035"
    });
    $.__views.__alloyId2034.add($.__views.__alloyId2035);
    $.__views.__alloyId2036 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId646"
    });
    $.__views.__alloyId645.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId2266"
    });
    $.__views.__alloyId2265.add($.__views.__alloyId2266);
    $.__views.__alloyId2267 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId2267"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2225"
=======
        id: "__alloyId2267"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2267);
    $.__views.__alloyId2268 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2268"
    });
<<<<<<< HEAD
    $.__views.__alloyId2267.add($.__views.__alloyId2268);
    $.__views.__alloyId2269 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createLabel({
=======
        id: "__alloyId2036"
    });
    $.__views.__alloyId2024.add($.__views.__alloyId2036);
    $.__views.__alloyId2037 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2037"
    });
    $.__views.__alloyId2036.add($.__views.__alloyId2037);
    $.__views.__alloyId2038 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId647"
    });
    $.__views.__alloyId635.add($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId648"
    });
    $.__views.__alloyId647.add($.__views.__alloyId648);
    $.__views.__alloyId649 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2267.add($.__views.__alloyId2268);
    $.__views.__alloyId2269 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2269"
    });
    $.__views.__alloyId2268.add($.__views.__alloyId2269);
    $.__views.__alloyId2270 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2227"
    });
    $.__views.__alloyId2226.add($.__views.__alloyId2227);
    $.__views.__alloyId2228 = Ti.UI.createLabel({
=======
        id: "__alloyId2038"
    });
    $.__views.__alloyId2037.add($.__views.__alloyId2038);
    $.__views.__alloyId2039 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId649"
    });
    $.__views.__alloyId648.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2269"
    });
    $.__views.__alloyId2268.add($.__views.__alloyId2269);
    $.__views.__alloyId2270 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2270"
    });
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2228"
    });
    $.__views.__alloyId2226.add($.__views.__alloyId2228);
    $.__views.__alloyId2229 = Ti.UI.createView({
=======
        id: "__alloyId2039"
=======
        id: "__alloyId2270"
>>>>>>> origin/master
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId2268.add($.__views.__alloyId2270);
    $.__views.__alloyId2271 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2271"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2271);
    $.__views.__alloyId2272 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createView({
=======
        id: "__alloyId2040"
    });
    $.__views.scrollView.add($.__views.__alloyId2040);
    $.__views.__alloyId2041 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId650"
    });
    $.__views.__alloyId648.add($.__views.__alloyId650);
    $.__views.__alloyId651 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId651"
    });
    $.__views.scrollView.add($.__views.__alloyId651);
    $.__views.__alloyId652 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.scrollView.add($.__views.__alloyId2271);
    $.__views.__alloyId2272 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId2272"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2230"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2272);
    $.__views.__alloyId2273 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2273"
    });
    $.__views.__alloyId2272.add($.__views.__alloyId2273);
    $.__views.__alloyId2274 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
<<<<<<< HEAD
        id: "__alloyId2274"
    });
    $.__views.__alloyId2273.add($.__views.__alloyId2274);
    $.__views.__alloyId2275 = Ti.UI.createLabel({
=======
        id: "__alloyId2232"
=======
        id: "__alloyId2272"
>>>>>>> origin/master
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2272);
    $.__views.__alloyId2273 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2273"
    });
    $.__views.__alloyId2272.add($.__views.__alloyId2273);
    $.__views.__alloyId2274 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2274"
    });
<<<<<<< HEAD
    $.__views.__alloyId2042.add($.__views.__alloyId2043);
    $.__views.__alloyId2044 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId652"
    });
    $.__views.__alloyId651.add($.__views.__alloyId652);
    $.__views.__alloyId653 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId653"
    });
    $.__views.__alloyId652.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId654"
    });
    $.__views.__alloyId653.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2273.add($.__views.__alloyId2274);
    $.__views.__alloyId2275 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2275"
    });
    $.__views.__alloyId2274.add($.__views.__alloyId2275);
    $.__views.__alloyId2276 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2233"
    });
    $.__views.__alloyId2232.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createLabel({
=======
        id: "__alloyId2044"
    });
    $.__views.__alloyId2043.add($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId655"
    });
    $.__views.__alloyId654.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2275"
    });
    $.__views.__alloyId2274.add($.__views.__alloyId2275);
    $.__views.__alloyId2276 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2276"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2234"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2274.add($.__views.__alloyId2276);
    $.__views.__alloyId2277 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2277"
    });
<<<<<<< HEAD
    $.__views.__alloyId2272.add($.__views.__alloyId2277);
    $.__views.__alloyId2278 = Ti.UI.createView({
=======
    $.__views.__alloyId2230.add($.__views.__alloyId2235);
    $.__views.__alloyId2236 = Ti.UI.createView({
=======
        id: "__alloyId2045"
=======
        id: "__alloyId2276"
>>>>>>> origin/master
    });
    $.__views.__alloyId2274.add($.__views.__alloyId2276);
    $.__views.__alloyId2277 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2277"
    });
<<<<<<< HEAD
    $.__views.__alloyId2041.add($.__views.__alloyId2046);
    $.__views.__alloyId2047 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId656"
    });
    $.__views.__alloyId654.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId657"
    });
    $.__views.__alloyId652.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2272.add($.__views.__alloyId2277);
    $.__views.__alloyId2278 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId2278"
    });
    $.__views.__alloyId2277.add($.__views.__alloyId2278);
    $.__views.__alloyId2279 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2236"
    });
    $.__views.__alloyId2235.add($.__views.__alloyId2236);
    $.__views.__alloyId2237 = Ti.UI.createLabel({
=======
        id: "__alloyId2047"
    });
    $.__views.__alloyId2046.add($.__views.__alloyId2047);
    $.__views.__alloyId2048 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId658"
    });
    $.__views.__alloyId657.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2278"
    });
    $.__views.__alloyId2277.add($.__views.__alloyId2278);
    $.__views.__alloyId2279 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2279"
    });
    $.__views.__alloyId2278.add($.__views.__alloyId2279);
    $.__views.__alloyId2280 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2237"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2237);
    $.__views.__alloyId2238 = Ti.UI.createLabel({
=======
        id: "__alloyId2048"
    });
    $.__views.__alloyId2047.add($.__views.__alloyId2048);
    $.__views.__alloyId2049 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId659"
    });
    $.__views.__alloyId658.add($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2279"
    });
    $.__views.__alloyId2278.add($.__views.__alloyId2279);
    $.__views.__alloyId2280 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2280"
    });
    $.__views.__alloyId2278.add($.__views.__alloyId2280);
    $.__views.__alloyId2281 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2238"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createView({
=======
        id: "__alloyId2049"
    });
    $.__views.__alloyId2047.add($.__views.__alloyId2049);
    $.__views.__alloyId2050 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId660"
    });
    $.__views.__alloyId658.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId2280"
    });
    $.__views.__alloyId2278.add($.__views.__alloyId2280);
    $.__views.__alloyId2281 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId2281"
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2281);
    $.__views.__alloyId2282 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2239"
    });
    $.__views.__alloyId2229.add($.__views.__alloyId2239);
    $.__views.__alloyId2240 = Ti.UI.createLabel({
=======
        id: "__alloyId2050"
    });
    $.__views.__alloyId2040.add($.__views.__alloyId2050);
    $.__views.__alloyId2051 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId661"
    });
    $.__views.__alloyId651.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2281"
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2281);
    $.__views.__alloyId2282 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2282"
    });
    $.__views.__alloyId2281.add($.__views.__alloyId2282);
    $.__views.__alloyId2283 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2240"
    });
    $.__views.__alloyId2239.add($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createView({
=======
        id: "__alloyId2051"
    });
    $.__views.__alloyId2050.add($.__views.__alloyId2051);
    $.__views.__alloyId2052 = Ti.UI.createView({
>>>>>>> origin/master
=======
        id: "__alloyId662"
    });
    $.__views.__alloyId661.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createView({
>>>>>>> Stashed changes
=======
        id: "__alloyId2282"
    });
    $.__views.__alloyId2281.add($.__views.__alloyId2282);
    $.__views.__alloyId2283 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId2283"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2241"
=======
        id: "__alloyId2283"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2283);
    $.__views.__alloyId2284 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2284"
    });
<<<<<<< HEAD
    $.__views.__alloyId2283.add($.__views.__alloyId2284);
    $.__views.__alloyId2285 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createLabel({
=======
        id: "__alloyId2052"
    });
    $.__views.__alloyId2040.add($.__views.__alloyId2052);
    $.__views.__alloyId2053 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2053"
    });
    $.__views.__alloyId2052.add($.__views.__alloyId2053);
    $.__views.__alloyId2054 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId663"
    });
    $.__views.__alloyId651.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId664"
    });
    $.__views.__alloyId663.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId2283.add($.__views.__alloyId2284);
    $.__views.__alloyId2285 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2285"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2285);
    $.__views.__alloyId2286 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2243"
    });
    $.__views.__alloyId2242.add($.__views.__alloyId2243);
    $.__views.__alloyId2244 = Ti.UI.createLabel({
=======
        id: "__alloyId2054"
    });
    $.__views.__alloyId2053.add($.__views.__alloyId2054);
    $.__views.__alloyId2055 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId665"
    });
    $.__views.__alloyId664.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
        id: "__alloyId2285"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2285);
    $.__views.__alloyId2286 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2286"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2286);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId2244"
    });
    $.__views.__alloyId2242.add($.__views.__alloyId2244);
=======
        id: "__alloyId2055"
    });
    $.__views.__alloyId2053.add($.__views.__alloyId2055);
>>>>>>> origin/master
=======
        id: "__alloyId666"
    });
    $.__views.__alloyId664.add($.__views.__alloyId666);
>>>>>>> Stashed changes
=======
        id: "__alloyId2286"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2286);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;