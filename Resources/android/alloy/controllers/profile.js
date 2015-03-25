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
    function accountDetails() {
        DRAWER.navigation("accountDetails", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile";
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
    $.__views.profile = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.__alloyId2232 = Alloy.createController("_header", {
        id: "__alloyId2232",
        __parentSymbol: $.__views.profile
    });
    $.__views.__alloyId2232.setParent($.__views.profile);
    $.__views.__alloyId2233 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2233"
    });
    $.__views.profile.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2234"
    });
    $.__views.__alloyId2233.add($.__views.__alloyId2234);
    $.__views.__alloyId2235 = Ti.UI.createLabel({
        text: "Account Details",
        backgroundColor: "transparent",
        height: "50",
        width: "45%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: "white",
        id: "__alloyId2235"
    });
    $.__views.__alloyId2234.add($.__views.__alloyId2235);
    accountDetails ? $.__views.__alloyId2235.addEventListener("click", accountDetails) : __defers["$.__views.__alloyId2235!click!accountDetails"] = true;
    $.__views.__alloyId2236 = Ti.UI.createLabel({
        text: "My Profile",
        backgroundColor: "#bf0404",
        height: "50",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "45%",
        color: "white",
        id: "__alloyId2236"
    });
    $.__views.__alloyId2234.add($.__views.__alloyId2236);
    $.__views.__alloyId2237 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "10%",
        height: "30",
        top: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2237"
    });
    $.__views.__alloyId2234.add($.__views.__alloyId2237);
    back ? $.__views.__alloyId2237.addEventListener("click", back) : __defers["$.__views.__alloyId2237!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.profile.add($.__views.scrollView);
    $.__views.__alloyId2238 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2238"
    });
    $.__views.scrollView.add($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2239"
    });
    $.__views.__alloyId2238.add($.__views.__alloyId2239);
    $.__views.__alloyId2240 = Ti.UI.createLabel({
        text: "Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2240"
    });
    $.__views.__alloyId2239.add($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2241"
    });
    $.__views.__alloyId2238.add($.__views.__alloyId2241);
    $.__views.__alloyId2242 = Ti.UI.createLabel({
        text: "No.8 Jalan Puchong,Selangor...",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2242"
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2243"
    });
    $.__views.__alloyId2238.add($.__views.__alloyId2243);
    $.__views.__alloyId2244 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2244"
    });
    $.__views.__alloyId2243.add($.__views.__alloyId2244);
    $.__views.__alloyId2245 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2245"
    });
    $.__views.scrollView.add($.__views.__alloyId2245);
    $.__views.__alloyId2246 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2246"
    });
    $.__views.__alloyId2245.add($.__views.__alloyId2246);
    $.__views.__alloyId2247 = Ti.UI.createLabel({
        text: "NRIC/Passport/Armed Force ID",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2247"
    });
    $.__views.__alloyId2246.add($.__views.__alloyId2247);
    $.__views.__alloyId2248 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2248"
    });
    $.__views.__alloyId2245.add($.__views.__alloyId2248);
    $.__views.__alloyId2249 = Ti.UI.createLabel({
        text: "000000 00 0000",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2249"
    });
    $.__views.__alloyId2248.add($.__views.__alloyId2249);
    $.__views.__alloyId2250 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2250"
    });
    $.__views.__alloyId2245.add($.__views.__alloyId2250);
    $.__views.__alloyId2251 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2251"
    });
    $.__views.__alloyId2250.add($.__views.__alloyId2251);
    $.__views.__alloyId2252 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2252"
    });
    $.__views.scrollView.add($.__views.__alloyId2252);
    $.__views.__alloyId2253 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2253"
    });
    $.__views.__alloyId2252.add($.__views.__alloyId2253);
    $.__views.__alloyId2254 = Ti.UI.createLabel({
        text: "Email Address",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2254"
    });
    $.__views.__alloyId2253.add($.__views.__alloyId2254);
    $.__views.__alloyId2255 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2255"
    });
    $.__views.__alloyId2252.add($.__views.__alloyId2255);
    $.__views.__alloyId2256 = Ti.UI.createLabel({
        text: "sample@gmail.com",
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2256"
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2256);
    $.__views.__alloyId2257 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2257"
    });
    $.__views.__alloyId2252.add($.__views.__alloyId2257);
    $.__views.__alloyId2258 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2258"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2258);
    $.__views.__alloyId2259 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2259"
    });
    $.__views.scrollView.add($.__views.__alloyId2259);
    $.__views.__alloyId2260 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2260"
    });
    $.__views.__alloyId2259.add($.__views.__alloyId2260);
    $.__views.__alloyId2261 = Ti.UI.createLabel({
        text: "Birthday",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2261"
    });
    $.__views.__alloyId2260.add($.__views.__alloyId2261);
    $.__views.__alloyId2262 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2262"
    });
    $.__views.__alloyId2259.add($.__views.__alloyId2262);
    $.__views.__alloyId2263 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2263"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2263);
    $.__views.__alloyId2264 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2264"
    });
    $.__views.__alloyId2259.add($.__views.__alloyId2264);
    $.__views.__alloyId2265 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2265"
    });
    $.__views.__alloyId2264.add($.__views.__alloyId2265);
    $.__views.__alloyId2266 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2266"
    });
    $.__views.scrollView.add($.__views.__alloyId2266);
    $.__views.__alloyId2267 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2267"
    });
    $.__views.__alloyId2266.add($.__views.__alloyId2267);
    $.__views.__alloyId2268 = Ti.UI.createLabel({
        text: "Gender",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2268"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2268);
    $.__views.__alloyId2269 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2269"
    });
    $.__views.__alloyId2266.add($.__views.__alloyId2269);
    $.__views.__alloyId2270 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2270"
    });
    $.__views.__alloyId2269.add($.__views.__alloyId2270);
    $.__views.__alloyId2271 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2271"
    });
    $.__views.__alloyId2266.add($.__views.__alloyId2271);
    $.__views.__alloyId2272 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2272"
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2272);
    $.__views.__alloyId2273 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2273"
    });
    $.__views.scrollView.add($.__views.__alloyId2273);
    $.__views.__alloyId2274 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2274"
    });
    $.__views.__alloyId2273.add($.__views.__alloyId2274);
    $.__views.__alloyId2275 = Ti.UI.createLabel({
        text: "Proessional Group/Job",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2275"
    });
    $.__views.__alloyId2274.add($.__views.__alloyId2275);
    $.__views.__alloyId2276 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2276"
    });
    $.__views.__alloyId2273.add($.__views.__alloyId2276);
    $.__views.__alloyId2277 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2277"
    });
    $.__views.__alloyId2276.add($.__views.__alloyId2277);
    $.__views.__alloyId2278 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2278"
    });
    $.__views.__alloyId2273.add($.__views.__alloyId2278);
    $.__views.__alloyId2279 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2279"
    });
    $.__views.__alloyId2278.add($.__views.__alloyId2279);
    $.__views.__alloyId2280 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2280"
    });
    $.__views.scrollView.add($.__views.__alloyId2280);
    $.__views.__alloyId2281 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2281"
    });
    $.__views.__alloyId2280.add($.__views.__alloyId2281);
    $.__views.__alloyId2282 = Ti.UI.createLabel({
        text: "Income Group",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2282"
    });
    $.__views.__alloyId2281.add($.__views.__alloyId2282);
    $.__views.__alloyId2283 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2283"
    });
    $.__views.__alloyId2280.add($.__views.__alloyId2283);
    $.__views.__alloyId2284 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2284"
    });
    $.__views.__alloyId2283.add($.__views.__alloyId2284);
    $.__views.__alloyId2285 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2285"
    });
    $.__views.__alloyId2280.add($.__views.__alloyId2285);
    $.__views.__alloyId2286 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2286"
    });
    $.__views.__alloyId2285.add($.__views.__alloyId2286);
    $.__views.__alloyId2287 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2287"
    });
    $.__views.scrollView.add($.__views.__alloyId2287);
    $.__views.__alloyId2288 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2288"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2288);
    $.__views.__alloyId2289 = Ti.UI.createLabel({
        text: "Interest",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2289"
    });
    $.__views.__alloyId2288.add($.__views.__alloyId2289);
    $.__views.__alloyId2290 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2290"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2290);
    $.__views.__alloyId2291 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2291"
    });
    $.__views.__alloyId2290.add($.__views.__alloyId2291);
    $.__views.__alloyId2292 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2292"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2292);
    $.__views.__alloyId2293 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2293"
    });
    $.__views.__alloyId2292.add($.__views.__alloyId2293);
    $.__views.__alloyId2294 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2294"
    });
    $.__views.scrollView.add($.__views.__alloyId2294);
    $.__views.__alloyId2295 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2295"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2295);
    $.__views.__alloyId2296 = Ti.UI.createLabel({
        text: "Marital Status",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2296"
    });
    $.__views.__alloyId2295.add($.__views.__alloyId2296);
    $.__views.__alloyId2297 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2297"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2297);
    $.__views.__alloyId2298 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2298"
    });
    $.__views.__alloyId2297.add($.__views.__alloyId2298);
    $.__views.__alloyId2299 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2299"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2299);
    $.__views.__alloyId2300 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2300"
    });
    $.__views.__alloyId2299.add($.__views.__alloyId2300);
    $.__views.__alloyId2301 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2301"
    });
    $.__views.scrollView.add($.__views.__alloyId2301);
    $.__views.__alloyId2302 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2302"
    });
    $.__views.__alloyId2301.add($.__views.__alloyId2302);
    $.__views.__alloyId2303 = Ti.UI.createLabel({
        text: "Race",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2303"
    });
    $.__views.__alloyId2302.add($.__views.__alloyId2303);
    $.__views.__alloyId2304 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2304"
    });
    $.__views.__alloyId2301.add($.__views.__alloyId2304);
    $.__views.__alloyId2305 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2305"
    });
    $.__views.__alloyId2304.add($.__views.__alloyId2305);
    $.__views.__alloyId2306 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2306"
    });
    $.__views.__alloyId2301.add($.__views.__alloyId2306);
    $.__views.__alloyId2307 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2307"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2307);
    $.__views.__alloyId2308 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2308"
    });
    $.__views.scrollView.add($.__views.__alloyId2308);
    $.__views.__alloyId2309 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2309"
    });
    $.__views.__alloyId2308.add($.__views.__alloyId2309);
    $.__views.__alloyId2310 = Ti.UI.createLabel({
        text: "Religion",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2310"
    });
    $.__views.__alloyId2309.add($.__views.__alloyId2310);
    $.__views.__alloyId2311 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2311"
    });
    $.__views.__alloyId2308.add($.__views.__alloyId2311);
    $.__views.__alloyId2312 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        left: "10",
        id: "__alloyId2312"
    });
    $.__views.__alloyId2311.add($.__views.__alloyId2312);
    $.__views.__alloyId2313 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2313"
    });
    $.__views.__alloyId2308.add($.__views.__alloyId2313);
    $.__views.__alloyId2314 = Ti.UI.createLabel({
        text: "EDIT",
        backgroundColor: "transparent",
        color: "red",
        textAlign: "left",
        id: "__alloyId2314"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2314);
    $.__views.__alloyId2315 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2315"
    });
    $.__views.scrollView.add($.__views.__alloyId2315);
    $.__views.__alloyId2316 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2316"
    });
    $.__views.__alloyId2315.add($.__views.__alloyId2316);
    $.__views.__alloyId2317 = Ti.UI.createLabel({
        text: "Change Password",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2317"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2317);
    $.__views.__alloyId2318 = Ti.UI.createView({
        width: "40%",
        height: "100%",
        id: "__alloyId2318"
    });
    $.__views.__alloyId2315.add($.__views.__alloyId2318);
    $.__views.__alloyId2319 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: "#9D9DB9",
        textAlign: "left",
        id: "__alloyId2319"
    });
    $.__views.__alloyId2318.add($.__views.__alloyId2319);
    $.__views.__alloyId2320 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId2320"
    });
    $.__views.__alloyId2315.add($.__views.__alloyId2320);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2320.add($.__views.arrow);
    $.__views.__alloyId2321 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2321"
    });
    $.__views.profile.add($.__views.__alloyId2321);
    $.__views.__alloyId2322 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId2322"
    });
    $.__views.__alloyId2321.add($.__views.__alloyId2322);
    $.__views.__alloyId2323 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "0.5%",
        id: "__alloyId2323"
    });
    $.__views.__alloyId2321.add($.__views.__alloyId2323);
    $.__views.__alloyId2324 = Ti.UI.createLabel({
        text: "Clear",
        color: "white",
        height: "100%",
        width: "49.72%",
        textAlign: "center",
        id: "__alloyId2324"
    });
    $.__views.__alloyId2321.add($.__views.__alloyId2324);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId2235!click!accountDetails"] && $.__views.__alloyId2235.addEventListener("click", accountDetails);
    __defers["$.__views.__alloyId2237!click!back"] && $.__views.__alloyId2237.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;