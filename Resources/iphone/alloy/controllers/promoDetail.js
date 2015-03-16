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
    $.__views.__alloyId553 = Alloy.createController("_header", {
        id: "__alloyId553",
        __parentSymbol: $.__views.promoDetail
    });
    $.__views.__alloyId553.setParent($.__views.promoDetail);
    $.__views.__alloyId554 = Ti.UI.createView({
        layout: "vertical",
        width: "auto",
        top: "60",
        bottom: "50",
        id: "__alloyId554"
    });
    $.__views.promoDetail.add($.__views.__alloyId554);
    $.__views.__alloyId555 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        bottom: "10",
        image: "/images/close_icon.png",
        id: "__alloyId555"
    });
    $.__views.__alloyId554.add($.__views.__alloyId555);
    back ? $.__views.__alloyId555.addEventListener("click", back) : __defers["$.__views.__alloyId555!click!back"] = true;
    $.__views.__alloyId556 = Ti.UI.createView({
        width: "280",
        height: "200",
        backgroundColor: "yellow",
        bottom: "10",
        id: "__alloyId556"
    });
    $.__views.__alloyId554.add($.__views.__alloyId556);
    $.__views.__alloyId557 = Ti.UI.createScrollView({
        contentHeight: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId557"
    });
    $.__views.__alloyId554.add($.__views.__alloyId557);
    $.__views.__alloyId558 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, sed errem solet euripidis ad, sint putent at nam, vel falli causae ea. Mei facete electram prodesset at, vix id elitr percipit reprehendunt. Pri ex reque movet constituto, at assentior sententiae deterruisset vim. Nam illud dolores eu, sed an nobis antiopam. Laudem labore facilisi vim eu, sumo soluta comprehensam te sed. Ea per nostrum menandri, ne quo quas eligendi.No habeo novum contentiones eos. Pri te solum prodesset abhorreant, ut illum corrumpit mnesarchum est, porro movet nullam id vim. An ius affert neglegentur, at eam quis animal accumsan. Ea utinam verear eam, sea eu essent ullamcorper. Et quo falli doctus similique.",
        color: "#E6E7E9",
        textAlign: "left",
        id: "__alloyId558"
    });
    $.__views.__alloyId557.add($.__views.__alloyId558);
    $.__views.__alloyId559 = Ti.UI.createView({
        layout: "horizontal",
        backgroundColor: "#333333",
        height: "50",
        bottom: "0",
        id: "__alloyId559"
    });
    $.__views.promoDetail.add($.__views.__alloyId559);
    $.__views.__alloyId560 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId560"
    });
    $.__views.__alloyId559.add($.__views.__alloyId560);
    $.__views.__alloyId561 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#3E6AC3",
        id: "__alloyId561"
    });
    $.__views.__alloyId559.add($.__views.__alloyId561);
    $.__views.__alloyId562 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId562"
    });
    $.__views.__alloyId559.add($.__views.__alloyId562);
    $.__views.__alloyId563 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#E04A32",
        id: "__alloyId563"
    });
    $.__views.__alloyId559.add($.__views.__alloyId563);
    $.__views.__alloyId564 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId564"
    });
    $.__views.__alloyId559.add($.__views.__alloyId564);
    $.__views.__alloyId565 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#27ACEC",
        id: "__alloyId565"
    });
    $.__views.__alloyId559.add($.__views.__alloyId565);
    $.__views.__alloyId566 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId566"
    });
    $.__views.__alloyId559.add($.__views.__alloyId566);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId555!click!back"] && $.__views.__alloyId555.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;