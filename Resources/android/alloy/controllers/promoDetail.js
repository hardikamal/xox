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
    $.__views.__alloyId2332 = Alloy.createController("_header", {
        id: "__alloyId2332",
        __parentSymbol: $.__views.promoDetail
    });
    $.__views.__alloyId2332.setParent($.__views.promoDetail);
    $.__views.__alloyId2333 = Ti.UI.createView({
        layout: "vertical",
        width: "auto",
        top: "60",
        bottom: "50",
        id: "__alloyId2333"
    });
    $.__views.promoDetail.add($.__views.__alloyId2333);
    $.__views.__alloyId2334 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        bottom: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2334"
    });
    $.__views.__alloyId2333.add($.__views.__alloyId2334);
    back ? $.__views.__alloyId2334.addEventListener("click", back) : __defers["$.__views.__alloyId2334!click!back"] = true;
    $.__views.__alloyId2335 = Ti.UI.createView({
        width: "280",
        height: "200",
        backgroundColor: "yellow",
        bottom: "10",
        id: "__alloyId2335"
    });
    $.__views.__alloyId2333.add($.__views.__alloyId2335);
    $.__views.__alloyId2336 = Ti.UI.createScrollView({
        layout: "vertical",
        contentHeight: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId2336"
    });
    $.__views.__alloyId2333.add($.__views.__alloyId2336);
    $.__views.__alloyId2337 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, sed errem solet euripidis ad, sint putent at nam, vel falli causae ea. Mei facete electram prodesset at, vix id elitr percipit reprehendunt. Pri ex reque movet constituto, at assentior sententiae deterruisset vim. Nam illud dolores eu, sed an nobis antiopam. Laudem labore facilisi vim eu, sumo soluta comprehensam te sed. Ea per nostrum menandri, ne quo quas eligendi.No habeo novum contentiones eos. Pri te solum prodesset abhorreant, ut illum corrumpit mnesarchum est, porro movet nullam id vim. An ius affert neglegentur, at eam quis animal accumsan. Ea utinam verear eam, sea eu essent ullamcorper. Et quo falli doctus similique.",
        color: "#E6E7E9",
        textAlign: "left",
        id: "__alloyId2337"
    });
    $.__views.__alloyId2336.add($.__views.__alloyId2337);
    $.__views.__alloyId2338 = Ti.UI.createButton({
        title: "Buy Now",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        backgroundColor: "white",
        height: "40",
        width: "120",
        borderRadius: "20",
        top: "40",
        id: "__alloyId2338"
    });
    $.__views.__alloyId2336.add($.__views.__alloyId2338);
    buy ? $.__views.__alloyId2338.addEventListener("click", buy) : __defers["$.__views.__alloyId2338!click!buy"] = true;
    $.__views.__alloyId2339 = Ti.UI.createView({
        layout: "horizontal",
        backgroundColor: "#333333",
        height: "50",
        bottom: "0",
        id: "__alloyId2339"
    });
    $.__views.promoDetail.add($.__views.__alloyId2339);
    $.__views.__alloyId2340 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId2340"
    });
    $.__views.__alloyId2339.add($.__views.__alloyId2340);
    $.__views.__alloyId2341 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#3E6AC3",
        id: "__alloyId2341"
    });
    $.__views.__alloyId2339.add($.__views.__alloyId2341);
    $.__views.__alloyId2342 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId2342"
    });
    $.__views.__alloyId2339.add($.__views.__alloyId2342);
    $.__views.__alloyId2343 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#E04A32",
        id: "__alloyId2343"
    });
    $.__views.__alloyId2339.add($.__views.__alloyId2343);
    $.__views.__alloyId2344 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId2344"
    });
    $.__views.__alloyId2339.add($.__views.__alloyId2344);
    $.__views.__alloyId2345 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#27ACEC",
        id: "__alloyId2345"
    });
    $.__views.__alloyId2339.add($.__views.__alloyId2345);
    $.__views.__alloyId2346 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId2346"
    });
    $.__views.__alloyId2339.add($.__views.__alloyId2346);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2334!click!back"] && $.__views.__alloyId2334.addEventListener("click", back);
    __defers["$.__views.__alloyId2338!click!buy"] && $.__views.__alloyId2338.addEventListener("click", buy);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;