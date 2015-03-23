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
<<<<<<< HEAD
    $.__views.__alloyId645 = Alloy.createController("_header", {
        id: "__alloyId645",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId645.setParent($.__views.prepaidPlus);
    $.__views.__alloyId646 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId646"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId647"
    });
    $.__views.__alloyId646.add($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId648"
    });
    $.__views.__alloyId647.add($.__views.__alloyId648);
    $.__views.__alloyId649 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId649"
    });
    $.__views.__alloyId648.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createLabel({
=======
    $.__views.__alloyId484 = Alloy.createController("_header", {
        id: "__alloyId484",
        __parentSymbol: $.__views.prepaidPlus
    });
    $.__views.__alloyId484.setParent($.__views.prepaidPlus);
    $.__views.__alloyId485 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#EB2127",
        id: "__alloyId485"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createView({
        layout: "horizontal",
        left: "0",
        id: "__alloyId486"
    });
    $.__views.__alloyId485.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createView({
        backgroundColor: "#A3161A",
        height: "100%",
        width: "30%",
        id: "__alloyId487"
    });
    $.__views.__alloyId486.add($.__views.__alloyId487);
    $.__views.__alloyId488 = Ti.UI.createImageView({
        image: "/images/products_01.png",
        height: "32",
        width: "50",
        id: "__alloyId488"
    });
    $.__views.__alloyId487.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "PREPAID PLUS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId650"
    });
    $.__views.__alloyId647.add($.__views.__alloyId650);
    $.__views.__alloyId651 = Ti.UI.createImageView({
=======
        id: "__alloyId489"
    });
    $.__views.__alloyId486.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId651"
    });
    $.__views.__alloyId646.add($.__views.__alloyId651);
    back ? $.__views.__alloyId651.addEventListener("click", back) : __defers["$.__views.__alloyId651!click!back"] = true;
    $.__views.__alloyId652 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%",
        id: "__alloyId652"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId652);
    $.__views.__alloyId653 = Ti.UI.createView({
=======
        id: "__alloyId490"
    });
    $.__views.__alloyId485.add($.__views.__alloyId490);
    back ? $.__views.__alloyId490.addEventListener("click", back) : __defers["$.__views.__alloyId490!click!back"] = true;
    $.__views.__alloyId491 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%",
        id: "__alloyId491"
    });
    $.__views.prepaidPlus.add($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId653"
    });
    $.__views.__alloyId652.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId654"
    });
    $.__views.__alloyId653.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createLabel({
=======
        id: "__alloyId492"
    });
    $.__views.__alloyId491.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId493"
    });
    $.__views.__alloyId492.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId655"
    });
    $.__views.__alloyId654.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId656"
    });
    $.__views.__alloyId653.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createLabel({
=======
        id: "__alloyId494"
    });
    $.__views.__alloyId493.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId495"
    });
    $.__views.__alloyId492.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId657"
    });
    $.__views.__alloyId656.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createLabel({
=======
        id: "__alloyId496"
    });
    $.__views.__alloyId495.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId658"
    });
    $.__views.__alloyId656.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId659"
    });
    $.__views.__alloyId653.add($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createLabel({
=======
        id: "__alloyId497"
    });
    $.__views.__alloyId495.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId498"
    });
    $.__views.__alloyId492.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId660"
    });
    $.__views.__alloyId659.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createLabel({
=======
        id: "__alloyId499"
    });
    $.__views.__alloyId498.add($.__views.__alloyId499);
    $.__views.__alloyId500 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "15cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId661"
    });
    $.__views.__alloyId659.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createView({
=======
        id: "__alloyId500"
    });
    $.__views.__alloyId498.add($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId662"
    });
    $.__views.__alloyId652.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId663"
    });
    $.__views.__alloyId662.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createLabel({
=======
        id: "__alloyId501"
    });
    $.__views.__alloyId491.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId502"
    });
    $.__views.__alloyId501.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId664"
    });
    $.__views.__alloyId663.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId665"
    });
    $.__views.__alloyId662.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createLabel({
=======
        id: "__alloyId503"
    });
    $.__views.__alloyId502.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId504"
    });
    $.__views.__alloyId501.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId666"
    });
    $.__views.__alloyId665.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createLabel({
=======
        id: "__alloyId505"
    });
    $.__views.__alloyId504.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId667"
    });
    $.__views.__alloyId665.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId668"
    });
    $.__views.__alloyId662.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createLabel({
=======
        id: "__alloyId506"
    });
    $.__views.__alloyId504.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId507"
    });
    $.__views.__alloyId501.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId669"
    });
    $.__views.__alloyId668.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createLabel({
=======
        id: "__alloyId508"
    });
    $.__views.__alloyId507.add($.__views.__alloyId508);
    $.__views.__alloyId509 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId670"
    });
    $.__views.__alloyId668.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId671"
    });
    $.__views.__alloyId662.add($.__views.__alloyId671);
    $.__views.__alloyId672 = Ti.UI.createLabel({
=======
        id: "__alloyId509"
    });
    $.__views.__alloyId507.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId510"
    });
    $.__views.__alloyId501.add($.__views.__alloyId510);
    $.__views.__alloyId511 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId672"
    });
    $.__views.__alloyId671.add($.__views.__alloyId672);
    $.__views.__alloyId673 = Ti.UI.createLabel({
=======
        id: "__alloyId511"
    });
    $.__views.__alloyId510.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId673"
    });
    $.__views.__alloyId671.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId674"
    });
    $.__views.__alloyId662.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createLabel({
=======
        id: "__alloyId512"
    });
    $.__views.__alloyId510.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId513"
    });
    $.__views.__alloyId501.add($.__views.__alloyId513);
    $.__views.__alloyId514 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId675"
    });
    $.__views.__alloyId674.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createLabel({
=======
        id: "__alloyId514"
    });
    $.__views.__alloyId513.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId676"
    });
    $.__views.__alloyId674.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createView({
=======
        id: "__alloyId515"
    });
    $.__views.__alloyId513.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId677"
    });
    $.__views.__alloyId652.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId678"
    });
    $.__views.__alloyId677.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createLabel({
=======
        id: "__alloyId516"
    });
    $.__views.__alloyId491.add($.__views.__alloyId516);
    $.__views.__alloyId517 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId517"
    });
    $.__views.__alloyId516.add($.__views.__alloyId517);
    $.__views.__alloyId518 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId679"
    });
    $.__views.__alloyId678.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId680"
    });
    $.__views.__alloyId677.add($.__views.__alloyId680);
    $.__views.__alloyId681 = Ti.UI.createLabel({
=======
        id: "__alloyId518"
    });
    $.__views.__alloyId517.add($.__views.__alloyId518);
    $.__views.__alloyId519 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId519"
    });
    $.__views.__alloyId516.add($.__views.__alloyId519);
    $.__views.__alloyId520 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId681"
    });
    $.__views.__alloyId680.add($.__views.__alloyId681);
    $.__views.__alloyId682 = Ti.UI.createLabel({
=======
        id: "__alloyId520"
    });
    $.__views.__alloyId519.add($.__views.__alloyId520);
    $.__views.__alloyId521 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId682"
    });
    $.__views.__alloyId680.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId683"
    });
    $.__views.__alloyId677.add($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createLabel({
=======
        id: "__alloyId521"
    });
    $.__views.__alloyId519.add($.__views.__alloyId521);
    $.__views.__alloyId522 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId522"
    });
    $.__views.__alloyId516.add($.__views.__alloyId522);
    $.__views.__alloyId523 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId684"
    });
    $.__views.__alloyId683.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createLabel({
=======
        id: "__alloyId523"
    });
    $.__views.__alloyId522.add($.__views.__alloyId523);
    $.__views.__alloyId524 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId685"
    });
    $.__views.__alloyId683.add($.__views.__alloyId685);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId651!click!back"] && $.__views.__alloyId651.addEventListener("click", back);
=======
        id: "__alloyId524"
    });
    $.__views.__alloyId522.add($.__views.__alloyId524);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId490!click!back"] && $.__views.__alloyId490.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;