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
    $.__views.__alloyId171 = Ti.UI.createView({
        layout: "vertical",
        top: "0",
        bottom: "50",
        id: "__alloyId171"
    });
    $.__views.promoDetail.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId172"
    });
    $.__views.__alloyId171.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createView({
        left: "10",
        backgroundColor: "white",
        width: "40",
        height: "40",
        id: "__alloyId173"
    });
    $.__views.__alloyId172.add($.__views.__alloyId173);
    back ? $.__views.__alloyId173.addEventListener("click", back) : __defers["$.__views.__alloyId173!click!back"] = true;
    $.__views.__alloyId174 = Ti.UI.createLabel({
        text: "XOX",
        color: "white",
        id: "__alloyId174"
    });
    $.__views.__alloyId172.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createView({
        layout: "vertical",
        width: "auto",
        top: "10",
        id: "__alloyId175"
    });
    $.__views.__alloyId171.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createView({
        height: "40",
        width: "40",
        backgroundColor: "black",
        right: "10",
        bottom: "10",
        id: "__alloyId176"
    });
    $.__views.__alloyId175.add($.__views.__alloyId176);
    back ? $.__views.__alloyId176.addEventListener("click", back) : __defers["$.__views.__alloyId176!click!back"] = true;
    $.__views.__alloyId177 = Ti.UI.createView({
        width: "280",
        height: "200",
        backgroundColor: "yellow",
        bottom: "10",
        id: "__alloyId177"
    });
    $.__views.__alloyId175.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createScrollView({
        contentHeight: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        bottom: "10",
        id: "__alloyId178"
    });
    $.__views.__alloyId175.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, sed errem solet euripidis ad, sint putent at nam, vel falli causae ea. Mei facete electram prodesset at, vix id elitr percipit reprehendunt. Pri ex reque movet constituto, at assentior sententiae deterruisset vim. Nam illud dolores eu, sed an nobis antiopam. Laudem labore facilisi vim eu, sumo soluta comprehensam te sed. Ea per nostrum menandri, ne quo quas eligendi.No habeo novum contentiones eos. Pri te solum prodesset abhorreant, ut illum corrumpit mnesarchum est, porro movet nullam id vim. An ius affert neglegentur, at eam quis animal accumsan. Ea utinam verear eam, sea eu essent ullamcorper. Et quo falli doctus similique.",
        color: "#E6E7E9",
        textAlign: "left",
        id: "__alloyId179"
    });
    $.__views.__alloyId178.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createView({
        layout: "horizontal",
        backgroundColor: "#333333",
        height: "50",
        bottom: "0",
        id: "__alloyId180"
    });
    $.__views.promoDetail.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#3E6AC3",
        id: "__alloyId182"
    });
    $.__views.__alloyId180.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId183"
    });
    $.__views.__alloyId180.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#E04A32",
        id: "__alloyId184"
    });
    $.__views.__alloyId180.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId185"
    });
    $.__views.__alloyId180.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#27ACEC",
        id: "__alloyId186"
    });
    $.__views.__alloyId180.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId187"
    });
    $.__views.__alloyId180.add($.__views.__alloyId187);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId173!click!back"] && $.__views.__alloyId173.addEventListener("click", back);
    __defers["$.__views.__alloyId176!click!back"] && $.__views.__alloyId176.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;