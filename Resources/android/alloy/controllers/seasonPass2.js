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
    $.__views.__alloyId2213 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2213"
    });
    $.__views.scrollView.add($.__views.__alloyId2213);
    $.__views.__alloyId2214 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2214"
    });
    $.__views.__alloyId2213.add($.__views.__alloyId2214);
    $.__views.__alloyId2215 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2215"
    });
    $.__views.__alloyId2214.add($.__views.__alloyId2215);
    $.__views.__alloyId2216 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2216"
    });
    $.__views.__alloyId2215.add($.__views.__alloyId2216);
    $.__views.__alloyId2217 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2217"
    });
    $.__views.__alloyId2216.add($.__views.__alloyId2217);
    $.__views.__alloyId2218 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2218"
    });
    $.__views.__alloyId2216.add($.__views.__alloyId2218);
    $.__views.__alloyId2219 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2219"
    });
    $.__views.__alloyId2214.add($.__views.__alloyId2219);
    $.__views.__alloyId2220 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2220"
    });
    $.__views.__alloyId2219.add($.__views.__alloyId2220);
    $.__views.__alloyId2221 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2221"
    });
    $.__views.__alloyId2220.add($.__views.__alloyId2221);
    $.__views.__alloyId2222 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2222"
    });
    $.__views.__alloyId2220.add($.__views.__alloyId2222);
    $.__views.__alloyId2223 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2223"
    });
    $.__views.__alloyId2213.add($.__views.__alloyId2223);
    $.__views.__alloyId2224 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2224"
    });
    $.__views.__alloyId2223.add($.__views.__alloyId2224);
    $.__views.__alloyId2225 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2225"
    });
    $.__views.__alloyId2213.add($.__views.__alloyId2225);
    $.__views.__alloyId2226 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2226"
    });
    $.__views.__alloyId2225.add($.__views.__alloyId2226);
    $.__views.__alloyId2227 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2227"
    });
    $.__views.__alloyId2226.add($.__views.__alloyId2227);
    $.__views.__alloyId2228 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2228"
    });
    $.__views.__alloyId2226.add($.__views.__alloyId2228);
    $.__views.__alloyId2229 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2229"
    });
    $.__views.scrollView.add($.__views.__alloyId2229);
    $.__views.__alloyId2230 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2230"
    });
    $.__views.__alloyId2229.add($.__views.__alloyId2230);
    $.__views.__alloyId2231 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2231"
    });
    $.__views.__alloyId2230.add($.__views.__alloyId2231);
    $.__views.__alloyId2232 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2232"
    });
    $.__views.__alloyId2231.add($.__views.__alloyId2232);
    $.__views.__alloyId2233 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2233"
    });
    $.__views.__alloyId2232.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2234"
    });
    $.__views.__alloyId2232.add($.__views.__alloyId2234);
    $.__views.__alloyId2235 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2235"
    });
    $.__views.__alloyId2230.add($.__views.__alloyId2235);
    $.__views.__alloyId2236 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2236"
    });
    $.__views.__alloyId2235.add($.__views.__alloyId2236);
    $.__views.__alloyId2237 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2237"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2237);
    $.__views.__alloyId2238 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2238"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2239"
    });
    $.__views.__alloyId2229.add($.__views.__alloyId2239);
    $.__views.__alloyId2240 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2240"
    });
    $.__views.__alloyId2239.add($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2241"
    });
    $.__views.__alloyId2229.add($.__views.__alloyId2241);
    $.__views.__alloyId2242 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2242"
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2243"
    });
    $.__views.__alloyId2242.add($.__views.__alloyId2243);
    $.__views.__alloyId2244 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2244"
    });
    $.__views.__alloyId2242.add($.__views.__alloyId2244);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;