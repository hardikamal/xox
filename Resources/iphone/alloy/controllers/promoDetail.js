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
    $.__views.__alloyId349 = Alloy.createController("_header", {
        id: "__alloyId349",
        __parentSymbol: $.__views.promoDetail
    });
    $.__views.__alloyId349.setParent($.__views.promoDetail);
    $.__views.__alloyId350 = Ti.UI.createView({
        layout: "vertical",
        width: "auto",
        top: "60",
        bottom: "50",
        id: "__alloyId350"
    });
    $.__views.promoDetail.add($.__views.__alloyId350);
    $.__views.__alloyId351 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        bottom: "10",
        image: "/images/close_icon.png",
        id: "__alloyId351"
    });
    $.__views.__alloyId350.add($.__views.__alloyId351);
    back ? $.__views.__alloyId351.addEventListener("click", back) : __defers["$.__views.__alloyId351!click!back"] = true;
    $.__views.__alloyId352 = Ti.UI.createView({
        width: "280",
        height: "200",
        backgroundColor: "yellow",
        bottom: "10",
        id: "__alloyId352"
    });
    $.__views.__alloyId350.add($.__views.__alloyId352);
    $.__views.__alloyId353 = Ti.UI.createScrollView({
        contentHeight: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId353"
    });
    $.__views.__alloyId350.add($.__views.__alloyId353);
    $.__views.__alloyId354 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, sed errem solet euripidis ad, sint putent at nam, vel falli causae ea. Mei facete electram prodesset at, vix id elitr percipit reprehendunt. Pri ex reque movet constituto, at assentior sententiae deterruisset vim. Nam illud dolores eu, sed an nobis antiopam. Laudem labore facilisi vim eu, sumo soluta comprehensam te sed. Ea per nostrum menandri, ne quo quas eligendi.No habeo novum contentiones eos. Pri te solum prodesset abhorreant, ut illum corrumpit mnesarchum est, porro movet nullam id vim. An ius affert neglegentur, at eam quis animal accumsan. Ea utinam verear eam, sea eu essent ullamcorper. Et quo falli doctus similique.",
        color: "#E6E7E9",
        textAlign: "left",
        id: "__alloyId354"
    });
    $.__views.__alloyId353.add($.__views.__alloyId354);
    $.__views.__alloyId355 = Ti.UI.createView({
        layout: "horizontal",
        backgroundColor: "#333333",
        height: "50",
        bottom: "0",
        id: "__alloyId355"
    });
    $.__views.promoDetail.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId356"
    });
    $.__views.__alloyId355.add($.__views.__alloyId356);
    $.__views.__alloyId357 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#3E6AC3",
        id: "__alloyId357"
    });
    $.__views.__alloyId355.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId358"
    });
    $.__views.__alloyId355.add($.__views.__alloyId358);
    $.__views.__alloyId359 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#E04A32",
        id: "__alloyId359"
    });
    $.__views.__alloyId355.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId360"
    });
    $.__views.__alloyId355.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#27ACEC",
        id: "__alloyId361"
    });
    $.__views.__alloyId355.add($.__views.__alloyId361);
    $.__views.__alloyId362 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId362"
    });
    $.__views.__alloyId355.add($.__views.__alloyId362);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId351!click!back"] && $.__views.__alloyId351.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;