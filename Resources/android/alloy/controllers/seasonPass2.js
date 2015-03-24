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
    $.__views.__alloyId2255 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2255"
    });
    $.__views.scrollView.add($.__views.__alloyId2255);
    $.__views.__alloyId2256 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2256"
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
    $.__views.__alloyId2257.add($.__views.__alloyId2258);
    $.__views.__alloyId2259 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2259"
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2259);
    $.__views.__alloyId2260 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2260"
    });
    $.__views.__alloyId2258.add($.__views.__alloyId2260);
    $.__views.__alloyId2261 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2261"
    });
    $.__views.__alloyId2256.add($.__views.__alloyId2261);
    $.__views.__alloyId2262 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2262"
    });
    $.__views.__alloyId2261.add($.__views.__alloyId2262);
    $.__views.__alloyId2263 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2263"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2263);
    $.__views.__alloyId2264 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2264"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2264);
    $.__views.__alloyId2265 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2265"
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2265);
    $.__views.__alloyId2266 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2266"
    });
    $.__views.__alloyId2265.add($.__views.__alloyId2266);
    $.__views.__alloyId2267 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2267"
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2267);
    $.__views.__alloyId2268 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2268"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2268);
    $.__views.__alloyId2269 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2269"
    });
    $.__views.__alloyId2268.add($.__views.__alloyId2269);
    $.__views.__alloyId2270 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2270"
    });
    $.__views.__alloyId2268.add($.__views.__alloyId2270);
    $.__views.__alloyId2271 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2271"
    });
    $.__views.scrollView.add($.__views.__alloyId2271);
    $.__views.__alloyId2272 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2272"
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
    $.__views.__alloyId2273.add($.__views.__alloyId2274);
    $.__views.__alloyId2275 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2275"
    });
    $.__views.__alloyId2274.add($.__views.__alloyId2275);
    $.__views.__alloyId2276 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2276"
    });
    $.__views.__alloyId2274.add($.__views.__alloyId2276);
    $.__views.__alloyId2277 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2277"
    });
    $.__views.__alloyId2272.add($.__views.__alloyId2277);
    $.__views.__alloyId2278 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2278"
    });
    $.__views.__alloyId2277.add($.__views.__alloyId2278);
    $.__views.__alloyId2279 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2279"
    });
    $.__views.__alloyId2278.add($.__views.__alloyId2279);
    $.__views.__alloyId2280 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2280"
    });
    $.__views.__alloyId2278.add($.__views.__alloyId2280);
    $.__views.__alloyId2281 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2281"
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2281);
    $.__views.__alloyId2282 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2282"
    });
    $.__views.__alloyId2281.add($.__views.__alloyId2282);
    $.__views.__alloyId2283 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2283"
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2283);
    $.__views.__alloyId2284 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2284"
    });
    $.__views.__alloyId2283.add($.__views.__alloyId2284);
    $.__views.__alloyId2285 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2285"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2285);
    $.__views.__alloyId2286 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2286"
    });
    $.__views.__alloyId2284.add($.__views.__alloyId2286);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;