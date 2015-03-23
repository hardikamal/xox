function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function checkout(e) {
        console.log("e.source.mod: " + e.source.mod);
        Ti.App.Properties.setString("seasonPass", e.source.mod);
        DRAWER.navigation("seasonPassCheckout1", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass1";
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.__alloyId2154 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        mod: "1",
        id: "__alloyId2154"
    });
    $.__views.scrollView.add($.__views.__alloyId2154);
    checkout ? $.__views.__alloyId2154.addEventListener("click", checkout) : __defers["$.__views.__alloyId2154!click!checkout"] = true;
    $.__views.__alloyId2155 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        mod: "1",
        id: "__alloyId2155"
    });
    $.__views.__alloyId2154.add($.__views.__alloyId2155);
    $.__views.__alloyId2156 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "1",
        id: "__alloyId2156"
    });
    $.__views.__alloyId2155.add($.__views.__alloyId2156);
    $.__views.__alloyId2157 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
        id: "__alloyId2157"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2157);
    $.__views.__alloyId2158 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        mod: "1",
        id: "__alloyId2158"
    });
    $.__views.__alloyId2157.add($.__views.__alloyId2158);
    $.__views.__alloyId2159 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        mod: "1",
        id: "__alloyId2159"
    });
    $.__views.__alloyId2157.add($.__views.__alloyId2159);
    $.__views.__alloyId2160 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "1",
        id: "__alloyId2160"
    });
    $.__views.__alloyId2155.add($.__views.__alloyId2160);
    $.__views.__alloyId2161 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        mod: "1",
        id: "__alloyId2161"
    });
    $.__views.__alloyId2160.add($.__views.__alloyId2161);
    $.__views.__alloyId2162 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "1",
        id: "__alloyId2162"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2162);
    $.__views.__alloyId2163 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "1",
        id: "__alloyId2163"
    });
    $.__views.__alloyId2161.add($.__views.__alloyId2163);
    $.__views.__alloyId2164 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        mod: "1",
        id: "__alloyId2164"
    });
    $.__views.__alloyId2154.add($.__views.__alloyId2164);
    $.__views.__alloyId2165 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        mod: "1",
        id: "__alloyId2165"
    });
    $.__views.__alloyId2164.add($.__views.__alloyId2165);
    $.__views.__alloyId2166 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        mod: "1",
        id: "__alloyId2166"
    });
    $.__views.__alloyId2154.add($.__views.__alloyId2166);
    $.__views.__alloyId2167 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "1",
        id: "__alloyId2167"
    });
    $.__views.__alloyId2166.add($.__views.__alloyId2167);
    $.__views.__alloyId2168 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "1",
        id: "__alloyId2168"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2168);
    $.__views.__alloyId2169 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "1",
        id: "__alloyId2169"
    });
    $.__views.__alloyId2167.add($.__views.__alloyId2169);
    $.__views.__alloyId2170 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        mod: "2",
        id: "__alloyId2170"
    });
    $.__views.scrollView.add($.__views.__alloyId2170);
    checkout ? $.__views.__alloyId2170.addEventListener("click", checkout) : __defers["$.__views.__alloyId2170!click!checkout"] = true;
    $.__views.__alloyId2171 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        mod: "2",
        id: "__alloyId2171"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2171);
    $.__views.__alloyId2172 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        mod: "2",
        id: "__alloyId2172"
    });
    $.__views.__alloyId2171.add($.__views.__alloyId2172);
    $.__views.__alloyId2173 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
        id: "__alloyId2173"
    });
    $.__views.__alloyId2172.add($.__views.__alloyId2173);
    $.__views.__alloyId2174 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        mod: "2",
        id: "__alloyId2174"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2174);
    $.__views.__alloyId2175 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        mod: "2",
        id: "__alloyId2175"
    });
    $.__views.__alloyId2173.add($.__views.__alloyId2175);
    $.__views.__alloyId2176 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        mod: "2",
        id: "__alloyId2176"
    });
    $.__views.__alloyId2171.add($.__views.__alloyId2176);
    $.__views.__alloyId2177 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        mod: "2",
        id: "__alloyId2177"
    });
    $.__views.__alloyId2176.add($.__views.__alloyId2177);
    $.__views.__alloyId2178 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "2",
        id: "__alloyId2178"
    });
    $.__views.__alloyId2177.add($.__views.__alloyId2178);
    $.__views.__alloyId2179 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        mod: "2",
        id: "__alloyId2179"
    });
    $.__views.__alloyId2177.add($.__views.__alloyId2179);
    $.__views.__alloyId2180 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        mod: "2",
        id: "__alloyId2180"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2180);
    $.__views.__alloyId2181 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        mod: "2",
        id: "__alloyId2181"
    });
    $.__views.__alloyId2180.add($.__views.__alloyId2181);
    $.__views.__alloyId2182 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        mod: "2",
        id: "__alloyId2182"
    });
    $.__views.__alloyId2170.add($.__views.__alloyId2182);
    $.__views.__alloyId2183 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        mod: "2",
        id: "__alloyId2183"
    });
    $.__views.__alloyId2182.add($.__views.__alloyId2183);
    $.__views.__alloyId2184 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "2",
        id: "__alloyId2184"
    });
    $.__views.__alloyId2183.add($.__views.__alloyId2184);
    $.__views.__alloyId2185 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        mod: "2",
        id: "__alloyId2185"
    });
    $.__views.__alloyId2183.add($.__views.__alloyId2185);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2154!click!checkout"] && $.__views.__alloyId2154.addEventListener("click", checkout);
    __defers["$.__views.__alloyId2170!click!checkout"] && $.__views.__alloyId2170.addEventListener("click", checkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;