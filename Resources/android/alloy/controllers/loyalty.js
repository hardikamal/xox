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
        DRAWER.navigation("myAccount", 1);
    }
    function loyalty() {
        console.log("loyalty");
        DRAWER.navigation("loyalty2", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "loyalty";
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
    $.__views.loyalty = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "loyalty"
    });
    $.__views.loyalty && $.addTopLevelView($.__views.loyalty);
    $.__views.__alloyId1195 = Alloy.createController("_header", {
        id: "__alloyId1195",
        __parentSymbol: $.__views.loyalty
    });
    $.__views.__alloyId1195.setParent($.__views.loyalty);
    $.__views.__alloyId1196 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId1196"
    });
    $.__views.loyalty.add($.__views.__alloyId1196);
    $.__views.__alloyId1197 = Ti.UI.createLabel({
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1197"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1197);
    $.__views.__alloyId1198 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1198"
    });
    $.__views.__alloyId1196.add($.__views.__alloyId1198);
    back ? $.__views.__alloyId1198.addEventListener("click", back) : __defers["$.__views.__alloyId1198!click!back"] = true;
    $.__views.__alloyId1199 = Ti.UI.createView({
        height: "100",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1199"
    });
    $.__views.loyalty.add($.__views.__alloyId1199);
    $.__views.__alloyId1200 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        backgroundColor: "#E6E7E9",
        id: "__alloyId1200"
    });
    $.__views.__alloyId1199.add($.__views.__alloyId1200);
    $.__views.__alloyId1201 = Ti.UI.createLabel({
        text: "Your Loyalty Points",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
        id: "__alloyId1201"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1201);
    $.__views.__alloyId1202 = Ti.UI.createLabel({
        text: "8500",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "center",
        id: "__alloyId1202"
    });
    $.__views.__alloyId1200.add($.__views.__alloyId1202);
    $.__views.__alloyId1203 = Ti.UI.createView({
        backgroundColor: "black",
        width: "100%",
        height: "1",
        id: "__alloyId1203"
    });
    $.__views.loyalty.add($.__views.__alloyId1203);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.loyalty.add($.__views.scrollView);
    $.__views.__alloyId1204 = Ti.UI.createLabel({
        text: "Because you deserve it.",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        top: "10",
        bottom: "10",
        id: "__alloyId1204"
    });
    $.__views.scrollView.add($.__views.__alloyId1204);
    $.__views.__alloyId1205 = Ti.UI.createLabel({
        text: "Emerging as one of the fastest growing mobile networks in Malaysia, we want to gice something back to you, our customers for your string support and belief in us. Earn loyatly points when you make a top-up or payment each and every time.",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1205"
    });
    $.__views.scrollView.add($.__views.__alloyId1205);
    $.__views.__alloyId1206 = Ti.UI.createLabel({
        text: "For prepaid & Hybrid Plan",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        top: "10",
        bottom: "10",
        id: "__alloyId1206"
    });
    $.__views.scrollView.add($.__views.__alloyId1206);
    $.__views.__alloyId1207 = Ti.UI.createLabel({
        text: "Prepaid and Hybrid plan subscribers automatically get to enjoy this loyalty program. A total accumulation of 10 loyalty points will award you with 1 free outgoing SMS text message. More presents will be coming soon to more of our different plans so stay tuned!",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId1207"
    });
    $.__views.scrollView.add($.__views.__alloyId1207);
    $.__views.__alloyId1208 = Ti.UI.createView({
        height: "50",
        backgroundColor: "black",
        id: "__alloyId1208"
    });
    $.__views.loyalty.add($.__views.__alloyId1208);
    loyalty ? $.__views.__alloyId1208.addEventListener("click", loyalty) : __defers["$.__views.__alloyId1208!click!loyalty"] = true;
    $.__views.__alloyId1209 = Ti.UI.createLabel({
        text: "Loyalty Rewards",
        color: "white",
        id: "__alloyId1209"
    });
    $.__views.__alloyId1208.add($.__views.__alloyId1209);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 250;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 250;
    __defers["$.__views.__alloyId1198!click!back"] && $.__views.__alloyId1198.addEventListener("click", back);
    __defers["$.__views.__alloyId1208!click!loyalty"] && $.__views.__alloyId1208.addEventListener("click", loyalty);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;