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
    $.__views.__alloyId2266 = Alloy.createController("_header", {
        id: "__alloyId2266",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId2266.setParent($.__views.subline);
    $.__views.__alloyId2267 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2267"
    });
    $.__views.subline.add($.__views.__alloyId2267);
    $.__views.__alloyId2268 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2268"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2268);
    $.__views.__alloyId2269 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2269"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2269);
    back ? $.__views.__alloyId2269.addEventListener("click", back) : __defers["$.__views.__alloyId2269!click!back"] = true;
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
    $.__views.__alloyId2270 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2270"
    });
    $.__views.scrollView.add($.__views.__alloyId2270);
    $.__views.__alloyId2271 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2271"
    });
    $.__views.__alloyId2270.add($.__views.__alloyId2271);
    $.__views.__alloyId2272 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2272"
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2272);
    $.__views.__alloyId2273 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2273"
    });
    $.__views.__alloyId2272.add($.__views.__alloyId2273);
    $.__views.__alloyId2274 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2274"
    });
    $.__views.__alloyId2272.add($.__views.__alloyId2274);
    $.__views.__alloyId2275 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2275"
    });
    $.__views.__alloyId2270.add($.__views.__alloyId2275);
    $.__views.__alloyId2276 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2276"
    });
    $.__views.__alloyId2275.add($.__views.__alloyId2276);
    $.__views.__alloyId2277 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2277"
    });
    $.__views.__alloyId2270.add($.__views.__alloyId2277);
    setting ? $.__views.__alloyId2277.addEventListener("click", setting) : __defers["$.__views.__alloyId2277!click!setting"] = true;
    $.__views.__alloyId2278 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2278"
    });
    $.__views.__alloyId2277.add($.__views.__alloyId2278);
    $.__views.__alloyId2279 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2279"
    });
    $.__views.__alloyId2270.add($.__views.__alloyId2279);
    $.__views.__alloyId2280 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2280"
    });
    $.__views.__alloyId2279.add($.__views.__alloyId2280);
    $.__views.__alloyId2281 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2281"
    });
    $.__views.scrollView.add($.__views.__alloyId2281);
    $.__views.__alloyId2282 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2282"
    });
    $.__views.scrollView.add($.__views.__alloyId2282);
    $.__views.__alloyId2283 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2283"
    });
    $.__views.__alloyId2282.add($.__views.__alloyId2283);
    $.__views.__alloyId2284 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2284"
    });
    $.__views.__alloyId2283.add($.__views.__alloyId2284);
    $.__views.__alloyId2285 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2285"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2285);
    $.__views.__alloyId2286 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2286"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2286);
    $.__views.__alloyId2287 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2287"
    });
    $.__views.__alloyId2282.add($.__views.__alloyId2287);
    $.__views.__alloyId2288 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2288"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2288);
    $.__views.__alloyId2289 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2289"
    });
    $.__views.__alloyId2282.add($.__views.__alloyId2289);
    $.__views.__alloyId2290 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2290"
    });
    $.__views.__alloyId2289.add($.__views.__alloyId2290);
    $.__views.__alloyId2291 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2291"
    });
    $.__views.__alloyId2282.add($.__views.__alloyId2291);
    $.__views.__alloyId2292 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2292"
    });
    $.__views.__alloyId2291.add($.__views.__alloyId2292);
    $.__views.__alloyId2293 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2293"
    });
    $.__views.scrollView.add($.__views.__alloyId2293);
    $.__views.__alloyId2294 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2294"
    });
    $.__views.scrollView.add($.__views.__alloyId2294);
    $.__views.__alloyId2295 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2295"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2295);
    $.__views.__alloyId2296 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2296"
    });
    $.__views.__alloyId2295.add($.__views.__alloyId2296);
    $.__views.__alloyId2297 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2297"
    });
    $.__views.__alloyId2296.add($.__views.__alloyId2297);
    $.__views.__alloyId2298 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2298"
    });
    $.__views.__alloyId2296.add($.__views.__alloyId2298);
    $.__views.__alloyId2299 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2299"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2299);
    $.__views.__alloyId2300 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2300"
    });
    $.__views.__alloyId2299.add($.__views.__alloyId2300);
    $.__views.__alloyId2301 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2301"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2301);
    $.__views.__alloyId2302 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2302"
    });
    $.__views.__alloyId2301.add($.__views.__alloyId2302);
    $.__views.__alloyId2303 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2303"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2303);
    $.__views.__alloyId2304 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2304"
    });
    $.__views.__alloyId2303.add($.__views.__alloyId2304);
    $.__views.__alloyId2305 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2305"
    });
    $.__views.scrollView.add($.__views.__alloyId2305);
    $.__views.__alloyId2306 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2306"
    });
    $.__views.scrollView.add($.__views.__alloyId2306);
    $.__views.__alloyId2307 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2307"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2307);
    $.__views.__alloyId2308 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2308"
    });
    $.__views.__alloyId2307.add($.__views.__alloyId2308);
    $.__views.__alloyId2309 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2309"
    });
    $.__views.__alloyId2308.add($.__views.__alloyId2309);
    $.__views.__alloyId2310 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2310"
    });
    $.__views.__alloyId2308.add($.__views.__alloyId2310);
    $.__views.__alloyId2311 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2311"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2311);
    $.__views.__alloyId2312 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2312"
    });
    $.__views.__alloyId2311.add($.__views.__alloyId2312);
    $.__views.__alloyId2313 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2313"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2313);
    $.__views.__alloyId2314 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2314"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2314);
    $.__views.__alloyId2315 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2315"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2315);
    $.__views.__alloyId2316 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2316"
    });
    $.__views.__alloyId2315.add($.__views.__alloyId2316);
    $.__views.__alloyId2317 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2317"
    });
    $.__views.scrollView.add($.__views.__alloyId2317);
    $.__views.__alloyId2318 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2318"
    });
    $.__views.scrollView.add($.__views.__alloyId2318);
    $.__views.__alloyId2319 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2319"
    });
    $.__views.__alloyId2318.add($.__views.__alloyId2319);
    $.__views.__alloyId2320 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2320"
    });
    $.__views.__alloyId2319.add($.__views.__alloyId2320);
    $.__views.__alloyId2321 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2321"
    });
    $.__views.__alloyId2320.add($.__views.__alloyId2321);
    $.__views.__alloyId2322 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2322"
    });
    $.__views.__alloyId2320.add($.__views.__alloyId2322);
    $.__views.__alloyId2323 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2323"
    });
    $.__views.__alloyId2318.add($.__views.__alloyId2323);
    $.__views.__alloyId2324 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2324"
    });
    $.__views.__alloyId2323.add($.__views.__alloyId2324);
    $.__views.__alloyId2325 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2325"
    });
    $.__views.__alloyId2318.add($.__views.__alloyId2325);
    $.__views.__alloyId2326 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2326"
    });
    $.__views.__alloyId2325.add($.__views.__alloyId2326);
    $.__views.__alloyId2327 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2327"
    });
    $.__views.__alloyId2318.add($.__views.__alloyId2327);
    $.__views.__alloyId2328 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2328"
    });
    $.__views.__alloyId2327.add($.__views.__alloyId2328);
    $.__views.__alloyId2329 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId2329"
    });
    $.__views.scrollView.add($.__views.__alloyId2329);
    $.__views.__alloyId2330 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId2330"
    });
    $.__views.scrollView.add($.__views.__alloyId2330);
    $.__views.__alloyId2331 = Ti.UI.createView({
        height: "100%",
        width: "55%",
        id: "__alloyId2331"
    });
    $.__views.__alloyId2330.add($.__views.__alloyId2331);
    $.__views.__alloyId2332 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId2332"
    });
    $.__views.__alloyId2331.add($.__views.__alloyId2332);
    $.__views.__alloyId2333 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2333"
    });
    $.__views.__alloyId2332.add($.__views.__alloyId2333);
    $.__views.__alloyId2334 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId2334"
    });
    $.__views.__alloyId2332.add($.__views.__alloyId2334);
    $.__views.__alloyId2335 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2335"
    });
    $.__views.__alloyId2330.add($.__views.__alloyId2335);
    $.__views.__alloyId2336 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId2336"
    });
    $.__views.__alloyId2335.add($.__views.__alloyId2336);
    $.__views.__alloyId2337 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2337"
    });
    $.__views.__alloyId2330.add($.__views.__alloyId2337);
    $.__views.__alloyId2338 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2338"
    });
    $.__views.__alloyId2337.add($.__views.__alloyId2338);
    $.__views.__alloyId2339 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId2339"
    });
    $.__views.__alloyId2330.add($.__views.__alloyId2339);
    $.__views.__alloyId2340 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId2340"
    });
    $.__views.__alloyId2339.add($.__views.__alloyId2340);
    $.__views.__alloyId2341 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId2341"
    });
    $.__views.scrollView.add($.__views.__alloyId2341);
    $.__views.__alloyId2342 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId2342"
    });
    $.__views.subline.add($.__views.__alloyId2342);
    addNumber ? $.__views.__alloyId2342.addEventListener("click", addNumber) : __defers["$.__views.__alloyId2342!click!addNumber"] = true;
    $.__views.__alloyId2343 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId2343"
    });
    $.__views.__alloyId2342.add($.__views.__alloyId2343);
    $.__views.__alloyId2344 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId2344"
    });
    $.__views.__alloyId2343.add($.__views.__alloyId2344);
    $.__views.__alloyId2345 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId2345"
    });
    $.__views.__alloyId2343.add($.__views.__alloyId2345);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId2269!click!back"] && $.__views.__alloyId2269.addEventListener("click", back);
    __defers["$.__views.__alloyId2277!click!setting"] && $.__views.__alloyId2277.addEventListener("click", setting);
    __defers["$.__views.__alloyId2342!click!addNumber"] && $.__views.__alloyId2342.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;