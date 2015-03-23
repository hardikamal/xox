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
    $.__views.__alloyId2186 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2186"
    });
    $.__views.scrollView.add($.__views.__alloyId2186);
    $.__views.__alloyId2187 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2187"
    });
    $.__views.__alloyId2186.add($.__views.__alloyId2187);
    $.__views.__alloyId2188 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2188"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2188);
    $.__views.__alloyId2189 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2189"
    });
    $.__views.__alloyId2188.add($.__views.__alloyId2189);
    $.__views.__alloyId2190 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2190"
    });
    $.__views.__alloyId2189.add($.__views.__alloyId2190);
    $.__views.__alloyId2191 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2191"
    });
    $.__views.__alloyId2189.add($.__views.__alloyId2191);
    $.__views.__alloyId2192 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2192"
    });
    $.__views.__alloyId2187.add($.__views.__alloyId2192);
    $.__views.__alloyId2193 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2193"
    });
    $.__views.__alloyId2192.add($.__views.__alloyId2193);
    $.__views.__alloyId2194 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2194"
    });
    $.__views.__alloyId2193.add($.__views.__alloyId2194);
    $.__views.__alloyId2195 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2195"
    });
    $.__views.__alloyId2193.add($.__views.__alloyId2195);
    $.__views.__alloyId2196 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2196"
    });
    $.__views.__alloyId2186.add($.__views.__alloyId2196);
    $.__views.__alloyId2197 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2197"
    });
    $.__views.__alloyId2196.add($.__views.__alloyId2197);
    $.__views.__alloyId2198 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2198"
    });
    $.__views.__alloyId2186.add($.__views.__alloyId2198);
    $.__views.__alloyId2199 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2199"
    });
    $.__views.__alloyId2198.add($.__views.__alloyId2199);
    $.__views.__alloyId2200 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2200"
    });
    $.__views.__alloyId2199.add($.__views.__alloyId2200);
    $.__views.__alloyId2201 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2201"
    });
    $.__views.__alloyId2199.add($.__views.__alloyId2201);
    $.__views.__alloyId2202 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2202"
    });
    $.__views.scrollView.add($.__views.__alloyId2202);
    $.__views.__alloyId2203 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2203"
    });
    $.__views.__alloyId2202.add($.__views.__alloyId2203);
    $.__views.__alloyId2204 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2204"
    });
    $.__views.__alloyId2203.add($.__views.__alloyId2204);
    $.__views.__alloyId2205 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2205"
    });
    $.__views.__alloyId2204.add($.__views.__alloyId2205);
    $.__views.__alloyId2206 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2206"
    });
    $.__views.__alloyId2205.add($.__views.__alloyId2206);
    $.__views.__alloyId2207 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2207"
    });
    $.__views.__alloyId2205.add($.__views.__alloyId2207);
    $.__views.__alloyId2208 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2208"
    });
    $.__views.__alloyId2203.add($.__views.__alloyId2208);
    $.__views.__alloyId2209 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2209"
    });
    $.__views.__alloyId2208.add($.__views.__alloyId2209);
    $.__views.__alloyId2210 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2210"
    });
    $.__views.__alloyId2209.add($.__views.__alloyId2210);
    $.__views.__alloyId2211 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2211"
    });
    $.__views.__alloyId2209.add($.__views.__alloyId2211);
    $.__views.__alloyId2212 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2212"
    });
    $.__views.__alloyId2202.add($.__views.__alloyId2212);
    $.__views.__alloyId2213 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2213"
    });
    $.__views.__alloyId2212.add($.__views.__alloyId2213);
    $.__views.__alloyId2214 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2214"
    });
    $.__views.__alloyId2202.add($.__views.__alloyId2214);
    $.__views.__alloyId2215 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2215"
    });
    $.__views.__alloyId2214.add($.__views.__alloyId2215);
    $.__views.__alloyId2216 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2216"
    });
    $.__views.__alloyId2215.add($.__views.__alloyId2216);
    $.__views.__alloyId2217 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2217"
    });
    $.__views.__alloyId2215.add($.__views.__alloyId2217);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;