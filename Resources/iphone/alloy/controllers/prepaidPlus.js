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
        DRAWER.navigation("products", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPlus";
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
    $.__views.prepaidPlus = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPlus"
    });
    $.__views.prepaidPlus && $.addTopLevelView($.__views.prepaidPlus);
    $.__views.__alloyId283 = Alloy.createController("_header", {
        id: "__alloyId283",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId283.setParent($.__views.prepaidPlus);
    $.__views.__alloyId284 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId284"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId285"
    });
    $.__views.__alloyId284.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createImageView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId286"
    });
    $.__views.__alloyId285.add($.__views.__alloyId286);
    $.__views.__alloyId287 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId287"
    });
    $.__views.__alloyId285.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId288"
    });
    $.__views.__alloyId284.add($.__views.__alloyId288);
    back ? $.__views.__alloyId288.addEventListener("click", back) : __defers["$.__views.__alloyId288!click!back"] = true;
    $.__views.__alloyId289 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%",
        id: "__alloyId289"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId290"
    });
    $.__views.__alloyId289.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId291"
    });
    $.__views.__alloyId290.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        left: "10",
        id: "__alloyId292"
    });
    $.__views.__alloyId291.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId293"
    });
    $.__views.__alloyId290.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId294"
    });
    $.__views.__alloyId293.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId295"
    });
    $.__views.__alloyId293.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId296"
    });
    $.__views.__alloyId290.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId297"
    });
    $.__views.__alloyId296.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        color: "black",
        id: "__alloyId298"
    });
    $.__views.__alloyId296.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId299"
    });
    $.__views.__alloyId289.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId300"
    });
    $.__views.__alloyId299.add($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        left: "10",
        id: "__alloyId301"
    });
    $.__views.__alloyId300.add($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId302"
    });
    $.__views.__alloyId299.add($.__views.__alloyId302);
    $.__views.__alloyId303 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId303"
    });
    $.__views.__alloyId302.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId304"
    });
    $.__views.__alloyId302.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId305"
    });
    $.__views.__alloyId299.add($.__views.__alloyId305);
    $.__views.__alloyId306 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId306"
    });
    $.__views.__alloyId305.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId307"
    });
    $.__views.__alloyId305.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId308"
    });
    $.__views.__alloyId299.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId309"
    });
    $.__views.__alloyId308.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId310"
    });
    $.__views.__alloyId308.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId311"
    });
    $.__views.__alloyId299.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId312"
    });
    $.__views.__alloyId311.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId313"
    });
    $.__views.__alloyId311.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId314"
    });
    $.__views.__alloyId289.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId315"
    });
    $.__views.__alloyId314.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        left: "10",
        id: "__alloyId316"
    });
    $.__views.__alloyId315.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId317"
    });
    $.__views.__alloyId314.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId318"
    });
    $.__views.__alloyId317.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId319"
    });
    $.__views.__alloyId317.add($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId320"
    });
    $.__views.__alloyId314.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId321"
    });
    $.__views.__alloyId320.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        color: "black",
        id: "__alloyId322"
    });
    $.__views.__alloyId320.add($.__views.__alloyId322);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId288!click!back"] && $.__views.__alloyId288.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;