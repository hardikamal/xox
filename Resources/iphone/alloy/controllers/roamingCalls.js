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
        "prepaid" == Alloy.Globals.userPlan ? DRAWER.navigation("prepaidStatement", 1) : DRAWER.navigation("postpaidStatement", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "roamingCalls";
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
    $.__views.roamingCalls = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "roamingCalls"
    });
    $.__views.roamingCalls && $.addTopLevelView($.__views.roamingCalls);
    $.__views.__alloyId2255 = Alloy.createController("_header", {
        id: "__alloyId2255",
        __parentSymbol: $.__views.roamingCalls
    });
    $.__views.__alloyId2255.setParent($.__views.roamingCalls);
    $.__views.__alloyId2256 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2256"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2256);
    $.__views.__alloyId2257 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2257"
    });
    $.__views.__alloyId2256.add($.__views.__alloyId2257);
    $.__views.__alloyId2258 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2258"
    });
    $.__views.__alloyId2256.add($.__views.__alloyId2258);
    back ? $.__views.__alloyId2258.addEventListener("click", back) : __defers["$.__views.__alloyId2258!click!back"] = true;
    $.__views.__alloyId2259 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2259"
    });
    $.__views.roamingCalls.add($.__views.__alloyId2259);
    $.__views.__alloyId2260 = Ti.UI.createLabel({
        text: "Roaming Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId2260"
    });
    $.__views.__alloyId2259.add($.__views.__alloyId2260);
    var __alloyId2261 = [];
    $.__views.__alloyId2262 = Ti.UI.createTableViewSection({
        id: "__alloyId2262"
    });
    __alloyId2261.push($.__views.__alloyId2262);
    $.__views.__alloyId2263 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2263"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2263);
    $.__views.__alloyId2264 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2264"
    });
    $.__views.__alloyId2263.add($.__views.__alloyId2264);
    $.__views.__alloyId2265 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2265"
    });
    $.__views.__alloyId2264.add($.__views.__alloyId2265);
    $.__views.__alloyId2266 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2266"
    });
    $.__views.__alloyId2263.add($.__views.__alloyId2266);
    $.__views.__alloyId2267 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2267"
    });
    $.__views.__alloyId2266.add($.__views.__alloyId2267);
    $.__views.__alloyId2268 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2268"
    });
    $.__views.__alloyId2263.add($.__views.__alloyId2268);
    $.__views.__alloyId2269 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2269"
    });
    $.__views.__alloyId2268.add($.__views.__alloyId2269);
    $.__views.__alloyId2270 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2270"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2270);
    $.__views.__alloyId2271 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2271"
    });
    $.__views.__alloyId2270.add($.__views.__alloyId2271);
    $.__views.__alloyId2272 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2272"
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2272);
    $.__views.__alloyId2273 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2273"
    });
    $.__views.__alloyId2270.add($.__views.__alloyId2273);
    $.__views.__alloyId2274 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2274"
    });
    $.__views.__alloyId2273.add($.__views.__alloyId2274);
    $.__views.__alloyId2275 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2275"
    });
    $.__views.__alloyId2270.add($.__views.__alloyId2275);
    $.__views.__alloyId2276 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2276"
    });
    $.__views.__alloyId2275.add($.__views.__alloyId2276);
    $.__views.__alloyId2277 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2277"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2277);
    $.__views.__alloyId2278 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2278"
    });
    $.__views.__alloyId2277.add($.__views.__alloyId2278);
    $.__views.__alloyId2279 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2279"
    });
    $.__views.__alloyId2278.add($.__views.__alloyId2279);
    $.__views.__alloyId2280 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2280"
    });
    $.__views.__alloyId2277.add($.__views.__alloyId2280);
    $.__views.__alloyId2281 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2281"
    });
    $.__views.__alloyId2280.add($.__views.__alloyId2281);
    $.__views.__alloyId2282 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2282"
    });
    $.__views.__alloyId2277.add($.__views.__alloyId2282);
    $.__views.__alloyId2283 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2283"
    });
    $.__views.__alloyId2282.add($.__views.__alloyId2283);
    $.__views.__alloyId2284 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2284"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2284);
    $.__views.__alloyId2285 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2285"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2285);
    $.__views.__alloyId2286 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2286"
    });
    $.__views.__alloyId2285.add($.__views.__alloyId2286);
    $.__views.__alloyId2287 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2287"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2287);
    $.__views.__alloyId2288 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2288"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2288);
    $.__views.__alloyId2289 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2289"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2289);
    $.__views.__alloyId2290 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2290"
    });
    $.__views.__alloyId2289.add($.__views.__alloyId2290);
    $.__views.__alloyId2291 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2291"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2291);
    $.__views.__alloyId2292 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2292"
    });
    $.__views.__alloyId2291.add($.__views.__alloyId2292);
    $.__views.__alloyId2293 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2293"
    });
    $.__views.__alloyId2292.add($.__views.__alloyId2293);
    $.__views.__alloyId2294 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2294"
    });
    $.__views.__alloyId2291.add($.__views.__alloyId2294);
    $.__views.__alloyId2295 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2295"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2295);
    $.__views.__alloyId2296 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2296"
    });
    $.__views.__alloyId2291.add($.__views.__alloyId2296);
    $.__views.__alloyId2297 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2297"
    });
    $.__views.__alloyId2296.add($.__views.__alloyId2297);
    $.__views.__alloyId2298 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2298"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2298);
    $.__views.__alloyId2299 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2299"
    });
    $.__views.__alloyId2298.add($.__views.__alloyId2299);
    $.__views.__alloyId2300 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2300"
    });
    $.__views.__alloyId2299.add($.__views.__alloyId2300);
    $.__views.__alloyId2301 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2301"
    });
    $.__views.__alloyId2298.add($.__views.__alloyId2301);
    $.__views.__alloyId2302 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2302"
    });
    $.__views.__alloyId2301.add($.__views.__alloyId2302);
    $.__views.__alloyId2303 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2303"
    });
    $.__views.__alloyId2298.add($.__views.__alloyId2303);
    $.__views.__alloyId2304 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2304"
    });
    $.__views.__alloyId2303.add($.__views.__alloyId2304);
    $.__views.__alloyId2305 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2305"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2305);
    $.__views.__alloyId2306 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2306"
    });
    $.__views.__alloyId2305.add($.__views.__alloyId2306);
    $.__views.__alloyId2307 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2307"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2307);
    $.__views.__alloyId2308 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2308"
    });
    $.__views.__alloyId2305.add($.__views.__alloyId2308);
    $.__views.__alloyId2309 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2309"
    });
    $.__views.__alloyId2308.add($.__views.__alloyId2309);
    $.__views.__alloyId2310 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2310"
    });
    $.__views.__alloyId2305.add($.__views.__alloyId2310);
    $.__views.__alloyId2311 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2311"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2311);
    $.__views.__alloyId2312 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId2312"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2312);
    $.__views.__alloyId2313 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2313"
    });
    $.__views.__alloyId2312.add($.__views.__alloyId2313);
    $.__views.__alloyId2314 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2314"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2314);
    $.__views.__alloyId2315 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId2315"
    });
    $.__views.__alloyId2312.add($.__views.__alloyId2315);
    $.__views.__alloyId2316 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2316"
    });
    $.__views.__alloyId2315.add($.__views.__alloyId2316);
    $.__views.__alloyId2317 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId2317"
    });
    $.__views.__alloyId2312.add($.__views.__alloyId2317);
    $.__views.__alloyId2318 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2318"
    });
    $.__views.__alloyId2317.add($.__views.__alloyId2318);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId2261,
        id: "table",
        scrollable: "true"
    });
    $.__views.roamingCalls.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2258!click!back"] && $.__views.__alloyId2258.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;