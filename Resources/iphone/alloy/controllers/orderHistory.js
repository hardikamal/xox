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
    $.__views.__alloyId364 = Alloy.createController("_header", {
        id: "__alloyId364",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId364.setParent($.__views.orderHistory);
    $.__views.__alloyId365 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId365"
    });
    $.__views.orderHistory.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createLabel({
=======
    $.__views.__alloyId575 = Alloy.createController("_header", {
        id: "__alloyId575",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId575.setParent($.__views.orderHistory);
    $.__views.__alloyId576 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId576"
    });
    $.__views.orderHistory.add($.__views.__alloyId576);
    $.__views.__alloyId577 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering History",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId366"
    });
    $.__views.__alloyId365.add($.__views.__alloyId366);
    $.__views.__alloyId367 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId367"
    });
    $.__views.orderHistory.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId368"
    });
    $.__views.__alloyId367.add($.__views.__alloyId368);
    prepaidPlus ? $.__views.__alloyId368.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId368!click!prepaidPlus"] = true;
    $.__views.__alloyId369 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId369"
    });
    $.__views.__alloyId368.add($.__views.__alloyId369);
    $.__views.__alloyId370 = Ti.UI.createLabel({
=======
        id: "__alloyId577"
    });
    $.__views.__alloyId576.add($.__views.__alloyId577);
    $.__views.__alloyId578 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId578"
    });
    $.__views.orderHistory.add($.__views.__alloyId578);
    $.__views.__alloyId579 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId579"
    });
    $.__views.__alloyId578.add($.__views.__alloyId579);
    prepaidPlus ? $.__views.__alloyId579.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId579!click!prepaidPlus"] = true;
    $.__views.__alloyId580 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId580"
    });
    $.__views.__alloyId579.add($.__views.__alloyId580);
    $.__views.__alloyId581 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId370"
    });
    $.__views.__alloyId369.add($.__views.__alloyId370);
    $.__views.__alloyId371 = Ti.UI.createLabel({
=======
        id: "__alloyId581"
    });
    $.__views.__alloyId580.add($.__views.__alloyId581);
    $.__views.__alloyId582 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId371"
    });
    $.__views.__alloyId369.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createView({
=======
        id: "__alloyId582"
    });
    $.__views.__alloyId580.add($.__views.__alloyId582);
    $.__views.__alloyId583 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId372"
    });
    $.__views.__alloyId368.add($.__views.__alloyId372);
=======
        id: "__alloyId583"
    });
    $.__views.__alloyId579.add($.__views.__alloyId583);
>>>>>>> origin/master
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId372.add($.__views.arrow1);
    $.__views.__alloyId373 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId373"
    });
    $.__views.__alloyId367.add($.__views.__alloyId373);
    prepaidPlus ? $.__views.__alloyId373.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId373!click!prepaidPlus"] = true;
    $.__views.__alloyId374 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId374"
    });
    $.__views.__alloyId373.add($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createLabel({
=======
    $.__views.__alloyId583.add($.__views.arrow1);
    $.__views.__alloyId584 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId584"
    });
    $.__views.__alloyId578.add($.__views.__alloyId584);
    prepaidPlus ? $.__views.__alloyId584.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId584!click!prepaidPlus"] = true;
    $.__views.__alloyId585 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId585"
    });
    $.__views.__alloyId584.add($.__views.__alloyId585);
    $.__views.__alloyId586 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId375"
    });
    $.__views.__alloyId374.add($.__views.__alloyId375);
    $.__views.__alloyId376 = Ti.UI.createLabel({
=======
        id: "__alloyId586"
    });
    $.__views.__alloyId585.add($.__views.__alloyId586);
    $.__views.__alloyId587 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId376"
    });
    $.__views.__alloyId374.add($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createView({
=======
        id: "__alloyId587"
    });
    $.__views.__alloyId585.add($.__views.__alloyId587);
    $.__views.__alloyId588 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId377"
    });
    $.__views.__alloyId373.add($.__views.__alloyId377);
=======
        id: "__alloyId588"
    });
    $.__views.__alloyId584.add($.__views.__alloyId588);
>>>>>>> origin/master
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId377.add($.__views.arrow2);
    $.__views.__alloyId378 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId378"
    });
    $.__views.__alloyId367.add($.__views.__alloyId378);
    prepaidPlus ? $.__views.__alloyId378.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId378!click!prepaidPlus"] = true;
    $.__views.__alloyId379 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId379"
    });
    $.__views.__alloyId378.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createLabel({
=======
    $.__views.__alloyId588.add($.__views.arrow2);
    $.__views.__alloyId589 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId589"
    });
    $.__views.__alloyId578.add($.__views.__alloyId589);
    prepaidPlus ? $.__views.__alloyId589.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId589!click!prepaidPlus"] = true;
    $.__views.__alloyId590 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId590"
    });
    $.__views.__alloyId589.add($.__views.__alloyId590);
    $.__views.__alloyId591 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId380"
    });
    $.__views.__alloyId379.add($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createLabel({
=======
        id: "__alloyId591"
    });
    $.__views.__alloyId590.add($.__views.__alloyId591);
    $.__views.__alloyId592 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId381"
    });
    $.__views.__alloyId379.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createView({
=======
        id: "__alloyId592"
    });
    $.__views.__alloyId590.add($.__views.__alloyId592);
    $.__views.__alloyId593 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId382"
    });
    $.__views.__alloyId378.add($.__views.__alloyId382);
=======
        id: "__alloyId593"
    });
    $.__views.__alloyId589.add($.__views.__alloyId593);
>>>>>>> origin/master
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId382.add($.__views.arrow3);
    $.__views.__alloyId383 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId383"
    });
    $.__views.__alloyId367.add($.__views.__alloyId383);
    prepaidPlus ? $.__views.__alloyId383.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId383!click!prepaidPlus"] = true;
    $.__views.__alloyId384 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId384"
    });
    $.__views.__alloyId383.add($.__views.__alloyId384);
    $.__views.__alloyId385 = Ti.UI.createLabel({
=======
    $.__views.__alloyId593.add($.__views.arrow3);
    $.__views.__alloyId594 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId594"
    });
    $.__views.__alloyId578.add($.__views.__alloyId594);
    prepaidPlus ? $.__views.__alloyId594.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId594!click!prepaidPlus"] = true;
    $.__views.__alloyId595 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId595"
    });
    $.__views.__alloyId594.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId385"
    });
    $.__views.__alloyId384.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createLabel({
=======
        id: "__alloyId596"
    });
    $.__views.__alloyId595.add($.__views.__alloyId596);
    $.__views.__alloyId597 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId386"
    });
    $.__views.__alloyId384.add($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createView({
=======
        id: "__alloyId597"
    });
    $.__views.__alloyId595.add($.__views.__alloyId597);
    $.__views.__alloyId598 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId387"
    });
    $.__views.__alloyId383.add($.__views.__alloyId387);
=======
        id: "__alloyId598"
    });
    $.__views.__alloyId594.add($.__views.__alloyId598);
>>>>>>> origin/master
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId387.add($.__views.arrow4);
    $.__views.__alloyId388 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId388"
    });
    $.__views.__alloyId367.add($.__views.__alloyId388);
    prepaidPlus ? $.__views.__alloyId388.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId388!click!prepaidPlus"] = true;
    $.__views.__alloyId389 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId389"
    });
    $.__views.__alloyId388.add($.__views.__alloyId389);
    $.__views.__alloyId390 = Ti.UI.createLabel({
=======
    $.__views.__alloyId598.add($.__views.arrow4);
    $.__views.__alloyId599 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId599"
    });
    $.__views.__alloyId578.add($.__views.__alloyId599);
    prepaidPlus ? $.__views.__alloyId599.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId599!click!prepaidPlus"] = true;
    $.__views.__alloyId600 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId600"
    });
    $.__views.__alloyId599.add($.__views.__alloyId600);
    $.__views.__alloyId601 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId390"
    });
    $.__views.__alloyId389.add($.__views.__alloyId390);
    $.__views.__alloyId391 = Ti.UI.createLabel({
=======
        id: "__alloyId601"
    });
    $.__views.__alloyId600.add($.__views.__alloyId601);
    $.__views.__alloyId602 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
<<<<<<< HEAD
        id: "__alloyId391"
    });
    $.__views.__alloyId389.add($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createView({
=======
        id: "__alloyId602"
    });
    $.__views.__alloyId600.add($.__views.__alloyId602);
    $.__views.__alloyId603 = Ti.UI.createView({
>>>>>>> origin/master
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "__alloyId392"
    });
    $.__views.__alloyId388.add($.__views.__alloyId392);
=======
        id: "__alloyId603"
    });
    $.__views.__alloyId599.add($.__views.__alloyId603);
>>>>>>> origin/master
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId392.add($.__views.arrow5);
=======
    $.__views.__alloyId603.add($.__views.arrow5);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
<<<<<<< HEAD
    __defers["$.__views.__alloyId368!click!prepaidPlus"] && $.__views.__alloyId368.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId373!click!prepaidPlus"] && $.__views.__alloyId373.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId378!click!prepaidPlus"] && $.__views.__alloyId378.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId383!click!prepaidPlus"] && $.__views.__alloyId383.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId388!click!prepaidPlus"] && $.__views.__alloyId388.addEventListener("click", prepaidPlus);
=======
    __defers["$.__views.__alloyId579!click!prepaidPlus"] && $.__views.__alloyId579.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId584!click!prepaidPlus"] && $.__views.__alloyId584.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId589!click!prepaidPlus"] && $.__views.__alloyId589.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId594!click!prepaidPlus"] && $.__views.__alloyId594.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId599!click!prepaidPlus"] && $.__views.__alloyId599.addEventListener("click", prepaidPlus);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;