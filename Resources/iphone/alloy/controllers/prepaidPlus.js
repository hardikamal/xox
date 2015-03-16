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
    $.__views.__alloyId481 = Alloy.createController("_header", {
        id: "__alloyId481",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId481.setParent($.__views.prepaidPlus);
    $.__views.__alloyId482 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId482"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId483"
    });
    $.__views.__alloyId482.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId484"
    });
    $.__views.__alloyId483.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId485"
    });
    $.__views.__alloyId484.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createLabel({
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId486"
    });
    $.__views.__alloyId483.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId487"
    });
    $.__views.__alloyId482.add($.__views.__alloyId487);
    back ? $.__views.__alloyId487.addEventListener("click", back) : __defers["$.__views.__alloyId487!click!back"] = true;
    $.__views.__alloyId488 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%",
        id: "__alloyId488"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId489"
    });
    $.__views.__alloyId488.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId490"
    });
    $.__views.__alloyId489.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId491"
    });
    $.__views.__alloyId490.add($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId492"
    });
    $.__views.__alloyId489.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createLabel({
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId493"
    });
    $.__views.__alloyId492.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId494"
    });
    $.__views.__alloyId492.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId495"
    });
    $.__views.__alloyId489.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId496"
    });
    $.__views.__alloyId495.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createLabel({
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId497"
    });
    $.__views.__alloyId495.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId498"
    });
    $.__views.__alloyId488.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId499"
    });
    $.__views.__alloyId498.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId500"
    });
    $.__views.__alloyId499.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId501"
    });
    $.__views.__alloyId498.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId502"
    });
    $.__views.__alloyId501.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId503"
    });
    $.__views.__alloyId501.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId504"
    });
    $.__views.__alloyId498.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId505"
    });
    $.__views.__alloyId504.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId506"
    });
    $.__views.__alloyId504.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId507"
    });
    $.__views.__alloyId498.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId508"
    });
    $.__views.__alloyId507.add($.__views.__alloyId508);
    $.__views.__alloyId509 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId509"
    });
    $.__views.__alloyId507.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId510"
    });
    $.__views.__alloyId498.add($.__views.__alloyId510);
    $.__views.__alloyId511 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId511"
    });
    $.__views.__alloyId510.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId512"
    });
    $.__views.__alloyId510.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId513"
    });
    $.__views.__alloyId488.add($.__views.__alloyId513);
    $.__views.__alloyId514 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId514"
    });
    $.__views.__alloyId513.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId515"
    });
    $.__views.__alloyId514.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId516"
    });
    $.__views.__alloyId513.add($.__views.__alloyId516);
    $.__views.__alloyId517 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId517"
    });
    $.__views.__alloyId516.add($.__views.__alloyId517);
    $.__views.__alloyId518 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId518"
    });
    $.__views.__alloyId516.add($.__views.__alloyId518);
    $.__views.__alloyId519 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId519"
    });
    $.__views.__alloyId513.add($.__views.__alloyId519);
    $.__views.__alloyId520 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId520"
    });
    $.__views.__alloyId519.add($.__views.__alloyId520);
    $.__views.__alloyId521 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId521"
    });
    $.__views.__alloyId519.add($.__views.__alloyId521);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId487!click!back"] && $.__views.__alloyId487.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;