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
    $.__views.__alloyId2140 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        id: "__alloyId2140"
    });
    $.__views.scrollView.add($.__views.__alloyId2140);
    $.__views.__alloyId2141 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2141"
    });
    $.__views.__alloyId2140.add($.__views.__alloyId2141);
    $.__views.__alloyId2142 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2142"
    });
    $.__views.__alloyId2141.add($.__views.__alloyId2142);
    $.__views.__alloyId2143 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2143"
    });
    $.__views.__alloyId2142.add($.__views.__alloyId2143);
    $.__views.__alloyId2144 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2144"
    });
    $.__views.__alloyId2143.add($.__views.__alloyId2144);
    $.__views.__alloyId2145 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2145"
    });
    $.__views.__alloyId2143.add($.__views.__alloyId2145);
    $.__views.__alloyId2146 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2146"
    });
    $.__views.__alloyId2141.add($.__views.__alloyId2146);
    $.__views.__alloyId2147 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2147"
    });
    $.__views.__alloyId2146.add($.__views.__alloyId2147);
    $.__views.__alloyId2148 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2148"
    });
    $.__views.__alloyId2147.add($.__views.__alloyId2148);
    $.__views.__alloyId2149 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2149"
    });
    $.__views.__alloyId2147.add($.__views.__alloyId2149);
    $.__views.__alloyId2150 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2150"
    });
    $.__views.__alloyId2140.add($.__views.__alloyId2150);
    $.__views.__alloyId2151 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2151"
    });
    $.__views.__alloyId2150.add($.__views.__alloyId2151);
    $.__views.__alloyId2152 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2152"
    });
    $.__views.__alloyId2140.add($.__views.__alloyId2152);
    $.__views.__alloyId2153 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2153"
    });
    $.__views.__alloyId2152.add($.__views.__alloyId2153);
    $.__views.__alloyId2154 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2154"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2154);
    $.__views.__alloyId2155 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2155"
    });
    $.__views.__alloyId2153.add($.__views.__alloyId2155);
    $.__views.__alloyId2156 = Ti.UI.createView({
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId2156"
    });
    $.__views.scrollView.add($.__views.__alloyId2156);
    $.__views.__alloyId2157 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2157"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2157);
    $.__views.__alloyId2158 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId2158"
    });
    $.__views.__alloyId2157.add($.__views.__alloyId2158);
    $.__views.__alloyId2159 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2159"
    });
    $.__views.__alloyId2158.add($.__views.__alloyId2159);
    $.__views.__alloyId2160 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2160"
    });
    $.__views.__alloyId2159.add($.__views.__alloyId2160);
    $.__views.__alloyId2161 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2161"
    });
    $.__views.__alloyId2159.add($.__views.__alloyId2161);
    $.__views.__alloyId2162 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId2162"
    });
    $.__views.__alloyId2157.add($.__views.__alloyId2162);
    $.__views.__alloyId2163 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId2163"
    });
    $.__views.__alloyId2162.add($.__views.__alloyId2163);
    $.__views.__alloyId2164 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2164"
    });
    $.__views.__alloyId2163.add($.__views.__alloyId2164);
    $.__views.__alloyId2165 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId2165"
    });
    $.__views.__alloyId2163.add($.__views.__alloyId2165);
    $.__views.__alloyId2166 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId2166"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2166);
    $.__views.__alloyId2167 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId2167"
    });
    $.__views.__alloyId2166.add($.__views.__alloyId2167);
    $.__views.__alloyId2168 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2168"
    });
    $.__views.__alloyId2156.add($.__views.__alloyId2168);
    $.__views.__alloyId2169 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId2169"
    });
    $.__views.__alloyId2168.add($.__views.__alloyId2169);
    $.__views.__alloyId2170 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2170"
    });
    $.__views.__alloyId2169.add($.__views.__alloyId2170);
    $.__views.__alloyId2171 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId2171"
    });
    $.__views.__alloyId2169.add($.__views.__alloyId2171);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;