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
        DRAWER.navigation("promo", 2);
    }
    function buy() {
        console.log("buy");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "promoDetail";
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
    $.__views.promoDetail = Ti.UI.createView({
        backgroundColor: "white",
        layout: "composite",
        fullscreen: "true",
        id: "promoDetail"
    });
    $.__views.promoDetail && $.addTopLevelView($.__views.promoDetail);
    $.__views.__alloyId2260 = Alloy.createController("_header", {
        id: "__alloyId2260",
        __parentSymbol: $.__views.promoDetail
    });
    $.__views.__alloyId2260.setParent($.__views.promoDetail);
    $.__views.__alloyId2261 = Ti.UI.createView({
        layout: "vertical",
        width: "auto",
        top: "60",
        bottom: "50",
        id: "__alloyId2261"
    });
    $.__views.promoDetail.add($.__views.__alloyId2261);
    $.__views.__alloyId2262 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        bottom: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2262"
    });
    $.__views.__alloyId2261.add($.__views.__alloyId2262);
    back ? $.__views.__alloyId2262.addEventListener("click", back) : __defers["$.__views.__alloyId2262!click!back"] = true;
    $.__views.__alloyId2263 = Ti.UI.createView({
        width: "280",
        height: "200",
        backgroundColor: "yellow",
        bottom: "10",
        id: "__alloyId2263"
    });
    $.__views.__alloyId2261.add($.__views.__alloyId2263);
    $.__views.__alloyId2264 = Ti.UI.createScrollView({
        layout: "vertical",
        contentHeight: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId2264"
    });
    $.__views.__alloyId2261.add($.__views.__alloyId2264);
    $.__views.__alloyId2265 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, sed errem solet euripidis ad, sint putent at nam, vel falli causae ea. Mei facete electram prodesset at, vix id elitr percipit reprehendunt. Pri ex reque movet constituto, at assentior sententiae deterruisset vim. Nam illud dolores eu, sed an nobis antiopam. Laudem labore facilisi vim eu, sumo soluta comprehensam te sed. Ea per nostrum menandri, ne quo quas eligendi.No habeo novum contentiones eos. Pri te solum prodesset abhorreant, ut illum corrumpit mnesarchum est, porro movet nullam id vim. An ius affert neglegentur, at eam quis animal accumsan. Ea utinam verear eam, sea eu essent ullamcorper. Et quo falli doctus similique.",
        color: "#E6E7E9",
        textAlign: "left",
        id: "__alloyId2265"
    });
    $.__views.__alloyId2264.add($.__views.__alloyId2265);
    $.__views.__alloyId2266 = Ti.UI.createButton({
        title: "Buy Now",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        backgroundColor: "white",
        height: "40",
        width: "120",
        borderRadius: "20",
        top: "40",
        id: "__alloyId2266"
    });
    $.__views.__alloyId2264.add($.__views.__alloyId2266);
    buy ? $.__views.__alloyId2266.addEventListener("click", buy) : __defers["$.__views.__alloyId2266!click!buy"] = true;
    $.__views.__alloyId2267 = Ti.UI.createView({
        layout: "horizontal",
        backgroundColor: "#333333",
        height: "50",
        bottom: "0",
        id: "__alloyId2267"
    });
    $.__views.promoDetail.add($.__views.__alloyId2267);
    $.__views.__alloyId2268 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId2268"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2268);
    $.__views.__alloyId2269 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#3E6AC3",
        id: "__alloyId2269"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2269);
    $.__views.__alloyId2270 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId2270"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2270);
    $.__views.__alloyId2271 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#E04A32",
        id: "__alloyId2271"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2271);
    $.__views.__alloyId2272 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId2272"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2272);
    $.__views.__alloyId2273 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#27ACEC",
        id: "__alloyId2273"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2273);
    $.__views.__alloyId2274 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId2274"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2274);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2262!click!back"] && $.__views.__alloyId2262.addEventListener("click", back);
    __defers["$.__views.__alloyId2266!click!buy"] && $.__views.__alloyId2266.addEventListener("click", buy);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;