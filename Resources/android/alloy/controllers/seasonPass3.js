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
    $.__views.__alloyId2238 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2238"
    });
    $.__views.scrollView.add($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2239"
    });
    $.__views.__alloyId2238.add($.__views.__alloyId2239);
    $.__views.__alloyId2240 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2240"
    });
    $.__views.__alloyId2239.add($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2241"
    });
    $.__views.__alloyId2240.add($.__views.__alloyId2241);
    $.__views.__alloyId2242 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2242"
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2243"
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2243);
    $.__views.__alloyId2244 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2244"
    });
    $.__views.__alloyId2239.add($.__views.__alloyId2244);
    $.__views.__alloyId2245 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2245"
    });
    $.__views.__alloyId2244.add($.__views.__alloyId2245);
    $.__views.__alloyId2246 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2246"
    });
    $.__views.__alloyId2245.add($.__views.__alloyId2246);
    $.__views.__alloyId2247 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2247"
    });
    $.__views.__alloyId2245.add($.__views.__alloyId2247);
    $.__views.__alloyId2248 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2248"
    });
    $.__views.__alloyId2238.add($.__views.__alloyId2248);
    $.__views.__alloyId2249 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2249"
    });
    $.__views.__alloyId2248.add($.__views.__alloyId2249);
    $.__views.__alloyId2250 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2250"
    });
    $.__views.__alloyId2238.add($.__views.__alloyId2250);
    $.__views.__alloyId2251 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2251"
    });
    $.__views.__alloyId2250.add($.__views.__alloyId2251);
    $.__views.__alloyId2252 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2252"
    });
    $.__views.__alloyId2251.add($.__views.__alloyId2252);
    $.__views.__alloyId2253 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2253"
    });
    $.__views.__alloyId2251.add($.__views.__alloyId2253);
    $.__views.__alloyId2254 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2254"
    });
    $.__views.scrollView.add($.__views.__alloyId2254);
    $.__views.__alloyId2255 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2255"
    });
    $.__views.__alloyId2254.add($.__views.__alloyId2255);
    $.__views.__alloyId2256 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2256"
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2256);
    $.__views.__alloyId2257 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2257"
    });
    $.__views.__alloyId2256.add($.__views.__alloyId2257);
    $.__views.__alloyId2258 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2258"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2258);
    $.__views.__alloyId2259 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2259"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2259);
    $.__views.__alloyId2260 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2260"
    });
    $.__views.__alloyId2255.add($.__views.__alloyId2260);
    $.__views.__alloyId2261 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2261"
    });
    $.__views.__alloyId2260.add($.__views.__alloyId2261);
    $.__views.__alloyId2262 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2262"
    });
    $.__views.__alloyId2261.add($.__views.__alloyId2262);
    $.__views.__alloyId2263 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2263"
    });
    $.__views.__alloyId2261.add($.__views.__alloyId2263);
    $.__views.__alloyId2264 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2264"
    });
    $.__views.__alloyId2254.add($.__views.__alloyId2264);
    $.__views.__alloyId2265 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2265"
    });
    $.__views.__alloyId2264.add($.__views.__alloyId2265);
    $.__views.__alloyId2266 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2266"
    });
    $.__views.__alloyId2254.add($.__views.__alloyId2266);
    $.__views.__alloyId2267 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2267"
    });
    $.__views.__alloyId2266.add($.__views.__alloyId2267);
    $.__views.__alloyId2268 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2268"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2268);
    $.__views.__alloyId2269 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2269"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2269);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;