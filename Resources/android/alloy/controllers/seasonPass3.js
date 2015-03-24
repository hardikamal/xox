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
    $.__views.__alloyId2287 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2287"
    });
    $.__views.scrollView.add($.__views.__alloyId2287);
    $.__views.__alloyId2288 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2288"
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
    $.__views.__alloyId2289.add($.__views.__alloyId2290);
    $.__views.__alloyId2291 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2291"
    });
    $.__views.__alloyId2290.add($.__views.__alloyId2291);
    $.__views.__alloyId2292 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2292"
    });
    $.__views.__alloyId2290.add($.__views.__alloyId2292);
    $.__views.__alloyId2293 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2293"
    });
    $.__views.__alloyId2288.add($.__views.__alloyId2293);
    $.__views.__alloyId2294 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2294"
    });
    $.__views.__alloyId2293.add($.__views.__alloyId2294);
    $.__views.__alloyId2295 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2295"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2295);
    $.__views.__alloyId2296 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2296"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2296);
    $.__views.__alloyId2297 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2297"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2297);
    $.__views.__alloyId2298 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2298"
    });
    $.__views.__alloyId2297.add($.__views.__alloyId2298);
    $.__views.__alloyId2299 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2299"
    });
    $.__views.__alloyId2287.add($.__views.__alloyId2299);
    $.__views.__alloyId2300 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2300"
    });
    $.__views.__alloyId2299.add($.__views.__alloyId2300);
    $.__views.__alloyId2301 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2301"
    });
    $.__views.__alloyId2300.add($.__views.__alloyId2301);
    $.__views.__alloyId2302 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2302"
    });
    $.__views.__alloyId2300.add($.__views.__alloyId2302);
    $.__views.__alloyId2303 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2303"
    });
    $.__views.scrollView.add($.__views.__alloyId2303);
    $.__views.__alloyId2304 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2304"
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
    $.__views.__alloyId2305.add($.__views.__alloyId2306);
    $.__views.__alloyId2307 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2307"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2307);
    $.__views.__alloyId2308 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2308"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2308);
    $.__views.__alloyId2309 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2309"
    });
    $.__views.__alloyId2304.add($.__views.__alloyId2309);
    $.__views.__alloyId2310 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2310"
    });
    $.__views.__alloyId2309.add($.__views.__alloyId2310);
    $.__views.__alloyId2311 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2311"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2311);
    $.__views.__alloyId2312 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2312"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2312);
    $.__views.__alloyId2313 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2313"
    });
    $.__views.__alloyId2303.add($.__views.__alloyId2313);
    $.__views.__alloyId2314 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2314"
    });
    $.__views.__alloyId2313.add($.__views.__alloyId2314);
    $.__views.__alloyId2315 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2315"
    });
    $.__views.__alloyId2303.add($.__views.__alloyId2315);
    $.__views.__alloyId2316 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2316"
    });
    $.__views.__alloyId2315.add($.__views.__alloyId2316);
    $.__views.__alloyId2317 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2317"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2317);
    $.__views.__alloyId2318 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2318"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2318);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;