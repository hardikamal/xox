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
    $.__views.__alloyId2028 = Alloy.createController("_header", {
        id: "__alloyId2028",
        __parentSymbol: $.__views.promoDetail
    });
    $.__views.__alloyId2028.setParent($.__views.promoDetail);
    $.__views.__alloyId2029 = Ti.UI.createView({
        layout: "vertical",
        width: "auto",
        top: "60",
        bottom: "50",
        id: "__alloyId2029"
    });
    $.__views.promoDetail.add($.__views.__alloyId2029);
    $.__views.__alloyId2030 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        bottom: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2030"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2030);
    back ? $.__views.__alloyId2030.addEventListener("click", back) : __defers["$.__views.__alloyId2030!click!back"] = true;
    $.__views.__alloyId2031 = Ti.UI.createView({
        width: "280",
        height: "200",
        backgroundColor: "yellow",
        bottom: "10",
        id: "__alloyId2031"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2031);
    $.__views.__alloyId2032 = Ti.UI.createScrollView({
        layout: "vertical",
        contentHeight: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        bottom: "0",
        id: "__alloyId2032"
    });
    $.__views.__alloyId2029.add($.__views.__alloyId2032);
    $.__views.__alloyId2033 = Ti.UI.createLabel({
        text: "Lorem ipsum dolor sit amet, sed errem solet euripidis ad, sint putent at nam, vel falli causae ea. Mei facete electram prodesset at, vix id elitr percipit reprehendunt. Pri ex reque movet constituto, at assentior sententiae deterruisset vim. Nam illud dolores eu, sed an nobis antiopam. Laudem labore facilisi vim eu, sumo soluta comprehensam te sed. Ea per nostrum menandri, ne quo quas eligendi.No habeo novum contentiones eos. Pri te solum prodesset abhorreant, ut illum corrumpit mnesarchum est, porro movet nullam id vim. An ius affert neglegentur, at eam quis animal accumsan. Ea utinam verear eam, sea eu essent ullamcorper. Et quo falli doctus similique.",
        color: "#E6E7E9",
        textAlign: "left",
        id: "__alloyId2033"
    });
    $.__views.__alloyId2032.add($.__views.__alloyId2033);
    $.__views.__alloyId2034 = Ti.UI.createButton({
        title: "Buy Now",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        backgroundColor: "white",
        height: "40",
        width: "120",
        borderRadius: "20",
        top: "40",
        id: "__alloyId2034"
    });
    $.__views.__alloyId2032.add($.__views.__alloyId2034);
    buy ? $.__views.__alloyId2034.addEventListener("click", buy) : __defers["$.__views.__alloyId2034!click!buy"] = true;
    $.__views.__alloyId2035 = Ti.UI.createView({
        layout: "horizontal",
        backgroundColor: "#333333",
        height: "50",
        bottom: "0",
        id: "__alloyId2035"
    });
    $.__views.promoDetail.add($.__views.__alloyId2035);
    $.__views.__alloyId2036 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId2036"
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2036);
    $.__views.__alloyId2037 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#3E6AC3",
        id: "__alloyId2037"
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2037);
    $.__views.__alloyId2038 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId2038"
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2038);
    $.__views.__alloyId2039 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#E04A32",
        id: "__alloyId2039"
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2039);
    $.__views.__alloyId2040 = Ti.UI.createView({
        width: "2%",
        id: "__alloyId2040"
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2040);
    $.__views.__alloyId2041 = Ti.UI.createView({
        width: "30%",
        height: "30",
        backgroundColor: "#27ACEC",
        id: "__alloyId2041"
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2041);
    $.__views.__alloyId2042 = Ti.UI.createView({
        width: "3%",
        id: "__alloyId2042"
    });
    $.__views.__alloyId2035.add($.__views.__alloyId2042);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2030!click!back"] && $.__views.__alloyId2030.addEventListener("click", back);
    __defers["$.__views.__alloyId2034!click!buy"] && $.__views.__alloyId2034.addEventListener("click", buy);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;