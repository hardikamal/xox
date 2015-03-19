function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function prepaidPlus() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "orderHistory";
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
    $.__views.orderHistory = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "orderHistory"
    });
    $.__views.orderHistory && $.addTopLevelView($.__views.orderHistory);
<<<<<<< HEAD
    $.__views.__alloyId476 = Alloy.createController("_header", {
        id: "__alloyId476",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId476.setParent($.__views.orderHistory);
    $.__views.__alloyId477 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId477"
    });
    $.__views.orderHistory.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createLabel({
=======
    $.__views.__alloyId366 = Alloy.createController("_header", {
        id: "__alloyId366",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId366.setParent($.__views.orderHistory);
    $.__views.__alloyId367 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId367"
    });
    $.__views.orderHistory.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering History",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId478"
    });
    $.__views.__alloyId477.add($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId479"
    });
    $.__views.orderHistory.add($.__views.__alloyId479);
    $.__views.__alloyId480 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId480"
    });
    $.__views.__alloyId479.add($.__views.__alloyId480);
    prepaidPlus ? $.__views.__alloyId480.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId480!click!prepaidPlus"] = true;
    $.__views.__alloyId481 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId481"
    });
    $.__views.__alloyId480.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createLabel({
=======
        id: "__alloyId368"
    });
    $.__views.__alloyId367.add($.__views.__alloyId368);
    $.__views.__alloyId369 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId369"
    });
    $.__views.orderHistory.add($.__views.__alloyId369);
    $.__views.__alloyId370 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId370"
    });
    $.__views.__alloyId369.add($.__views.__alloyId370);
    prepaidPlus ? $.__views.__alloyId370.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId370!click!prepaidPlus"] = true;
    $.__views.__alloyId371 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId371"
    });
    $.__views.__alloyId370.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId482"
    });
    $.__views.__alloyId481.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createLabel({
=======
        id: "__alloyId372"
    });
    $.__views.__alloyId371.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId483"
    });
    $.__views.__alloyId481.add($.__views.__alloyId483);
    $.__views.__alloyId484 = Ti.UI.createView({
=======
        id: "__alloyId373"
    });
    $.__views.__alloyId371.add($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId484"
    });
    $.__views.__alloyId480.add($.__views.__alloyId484);
=======
        id: "__alloyId374"
    });
    $.__views.__alloyId370.add($.__views.__alloyId374);
>>>>>>> origin/master
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId484.add($.__views.arrow1);
    $.__views.__alloyId485 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId485"
    });
    $.__views.__alloyId479.add($.__views.__alloyId485);
    prepaidPlus ? $.__views.__alloyId485.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId485!click!prepaidPlus"] = true;
    $.__views.__alloyId486 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId486"
    });
    $.__views.__alloyId485.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createLabel({
=======
    $.__views.__alloyId374.add($.__views.arrow1);
    $.__views.__alloyId375 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId375"
    });
    $.__views.__alloyId369.add($.__views.__alloyId375);
    prepaidPlus ? $.__views.__alloyId375.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId375!click!prepaidPlus"] = true;
    $.__views.__alloyId376 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId376"
    });
    $.__views.__alloyId375.add($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId487"
    });
    $.__views.__alloyId486.add($.__views.__alloyId487);
    $.__views.__alloyId488 = Ti.UI.createLabel({
=======
        id: "__alloyId377"
    });
    $.__views.__alloyId376.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId488"
    });
    $.__views.__alloyId486.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createView({
=======
        id: "__alloyId378"
    });
    $.__views.__alloyId376.add($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId489"
    });
    $.__views.__alloyId485.add($.__views.__alloyId489);
=======
        id: "__alloyId379"
    });
    $.__views.__alloyId375.add($.__views.__alloyId379);
>>>>>>> origin/master
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId489.add($.__views.arrow2);
    $.__views.__alloyId490 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId490"
    });
    $.__views.__alloyId479.add($.__views.__alloyId490);
    prepaidPlus ? $.__views.__alloyId490.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId490!click!prepaidPlus"] = true;
    $.__views.__alloyId491 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId491"
    });
    $.__views.__alloyId490.add($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createLabel({
=======
    $.__views.__alloyId379.add($.__views.arrow2);
    $.__views.__alloyId380 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId380"
    });
    $.__views.__alloyId369.add($.__views.__alloyId380);
    prepaidPlus ? $.__views.__alloyId380.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId380!click!prepaidPlus"] = true;
    $.__views.__alloyId381 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId381"
    });
    $.__views.__alloyId380.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId492"
    });
    $.__views.__alloyId491.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createLabel({
=======
        id: "__alloyId382"
    });
    $.__views.__alloyId381.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId493"
    });
    $.__views.__alloyId491.add($.__views.__alloyId493);
    $.__views.__alloyId494 = Ti.UI.createView({
=======
        id: "__alloyId383"
    });
    $.__views.__alloyId381.add($.__views.__alloyId383);
    $.__views.__alloyId384 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId494"
    });
    $.__views.__alloyId490.add($.__views.__alloyId494);
=======
        id: "__alloyId384"
    });
    $.__views.__alloyId380.add($.__views.__alloyId384);
>>>>>>> origin/master
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId494.add($.__views.arrow3);
    $.__views.__alloyId495 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId495"
    });
    $.__views.__alloyId479.add($.__views.__alloyId495);
    prepaidPlus ? $.__views.__alloyId495.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId495!click!prepaidPlus"] = true;
    $.__views.__alloyId496 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId496"
    });
    $.__views.__alloyId495.add($.__views.__alloyId496);
    $.__views.__alloyId497 = Ti.UI.createLabel({
=======
    $.__views.__alloyId384.add($.__views.arrow3);
    $.__views.__alloyId385 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId385"
    });
    $.__views.__alloyId369.add($.__views.__alloyId385);
    prepaidPlus ? $.__views.__alloyId385.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId385!click!prepaidPlus"] = true;
    $.__views.__alloyId386 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId386"
    });
    $.__views.__alloyId385.add($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId497"
    });
    $.__views.__alloyId496.add($.__views.__alloyId497);
    $.__views.__alloyId498 = Ti.UI.createLabel({
=======
        id: "__alloyId387"
    });
    $.__views.__alloyId386.add($.__views.__alloyId387);
    $.__views.__alloyId388 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId498"
    });
    $.__views.__alloyId496.add($.__views.__alloyId498);
    $.__views.__alloyId499 = Ti.UI.createView({
=======
        id: "__alloyId388"
    });
    $.__views.__alloyId386.add($.__views.__alloyId388);
    $.__views.__alloyId389 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId499"
    });
    $.__views.__alloyId495.add($.__views.__alloyId499);
=======
        id: "__alloyId389"
    });
    $.__views.__alloyId385.add($.__views.__alloyId389);
>>>>>>> origin/master
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId499.add($.__views.arrow4);
    $.__views.__alloyId500 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId500"
    });
    $.__views.__alloyId479.add($.__views.__alloyId500);
    prepaidPlus ? $.__views.__alloyId500.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId500!click!prepaidPlus"] = true;
    $.__views.__alloyId501 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId501"
    });
    $.__views.__alloyId500.add($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createLabel({
=======
    $.__views.__alloyId389.add($.__views.arrow4);
    $.__views.__alloyId390 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId390"
    });
    $.__views.__alloyId369.add($.__views.__alloyId390);
    prepaidPlus ? $.__views.__alloyId390.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId390!click!prepaidPlus"] = true;
    $.__views.__alloyId391 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId391"
    });
    $.__views.__alloyId390.add($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId502"
    });
    $.__views.__alloyId501.add($.__views.__alloyId502);
    $.__views.__alloyId503 = Ti.UI.createLabel({
=======
        id: "__alloyId392"
    });
    $.__views.__alloyId391.add($.__views.__alloyId392);
    $.__views.__alloyId393 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId503"
    });
    $.__views.__alloyId501.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createView({
=======
        id: "__alloyId393"
    });
    $.__views.__alloyId391.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId504"
    });
    $.__views.__alloyId500.add($.__views.__alloyId504);
=======
        id: "__alloyId394"
    });
    $.__views.__alloyId390.add($.__views.__alloyId394);
>>>>>>> origin/master
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId504.add($.__views.arrow5);
=======
    $.__views.__alloyId394.add($.__views.arrow5);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
<<<<<<< HEAD
    __defers["$.__views.__alloyId480!click!prepaidPlus"] && $.__views.__alloyId480.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId485!click!prepaidPlus"] && $.__views.__alloyId485.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId490!click!prepaidPlus"] && $.__views.__alloyId490.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId495!click!prepaidPlus"] && $.__views.__alloyId495.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId500!click!prepaidPlus"] && $.__views.__alloyId500.addEventListener("click", prepaidPlus);
=======
    __defers["$.__views.__alloyId370!click!prepaidPlus"] && $.__views.__alloyId370.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId375!click!prepaidPlus"] && $.__views.__alloyId375.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId380!click!prepaidPlus"] && $.__views.__alloyId380.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId385!click!prepaidPlus"] && $.__views.__alloyId385.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId390!click!prepaidPlus"] && $.__views.__alloyId390.addEventListener("click", prepaidPlus);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;