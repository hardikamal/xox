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
    $.__views.__alloyId351 = Alloy.createController("_header", {
        id: "__alloyId351",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId351.setParent($.__views.orderHistory);
    $.__views.__alloyId352 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId352"
    });
    $.__views.orderHistory.add($.__views.__alloyId352);
    $.__views.__alloyId353 = Ti.UI.createLabel({
        text: "Ordering History",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId353"
    });
    $.__views.__alloyId352.add($.__views.__alloyId353);
    $.__views.__alloyId354 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId354"
    });
    $.__views.orderHistory.add($.__views.__alloyId354);
    $.__views.__alloyId355 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId355"
    });
    $.__views.__alloyId354.add($.__views.__alloyId355);
    prepaidPlus ? $.__views.__alloyId355.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId355!click!prepaidPlus"] = true;
    $.__views.__alloyId356 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId356"
    });
    $.__views.__alloyId355.add($.__views.__alloyId356);
    $.__views.__alloyId357 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId357"
    });
    $.__views.__alloyId356.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId358"
    });
    $.__views.__alloyId356.add($.__views.__alloyId358);
    $.__views.__alloyId359 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId359"
    });
    $.__views.__alloyId355.add($.__views.__alloyId359);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId359.add($.__views.arrow1);
    $.__views.__alloyId360 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId360"
    });
    $.__views.__alloyId354.add($.__views.__alloyId360);
    prepaidPlus ? $.__views.__alloyId360.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId360!click!prepaidPlus"] = true;
    $.__views.__alloyId361 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId361"
    });
    $.__views.__alloyId360.add($.__views.__alloyId361);
    $.__views.__alloyId362 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId362"
    });
    $.__views.__alloyId361.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId363"
    });
    $.__views.__alloyId361.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId364"
    });
    $.__views.__alloyId360.add($.__views.__alloyId364);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId364.add($.__views.arrow2);
    $.__views.__alloyId365 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId365"
    });
    $.__views.__alloyId354.add($.__views.__alloyId365);
    prepaidPlus ? $.__views.__alloyId365.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId365!click!prepaidPlus"] = true;
    $.__views.__alloyId366 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId366"
    });
    $.__views.__alloyId365.add($.__views.__alloyId366);
    $.__views.__alloyId367 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId367"
    });
    $.__views.__alloyId366.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId368"
    });
    $.__views.__alloyId366.add($.__views.__alloyId368);
    $.__views.__alloyId369 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId369"
    });
    $.__views.__alloyId365.add($.__views.__alloyId369);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId369.add($.__views.arrow3);
    $.__views.__alloyId370 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId370"
    });
    $.__views.__alloyId354.add($.__views.__alloyId370);
    prepaidPlus ? $.__views.__alloyId370.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId370!click!prepaidPlus"] = true;
    $.__views.__alloyId371 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId371"
    });
    $.__views.__alloyId370.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId372"
    });
    $.__views.__alloyId371.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId373"
    });
    $.__views.__alloyId371.add($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId374"
    });
    $.__views.__alloyId370.add($.__views.__alloyId374);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId374.add($.__views.arrow4);
    $.__views.__alloyId375 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId375"
    });
    $.__views.__alloyId354.add($.__views.__alloyId375);
    prepaidPlus ? $.__views.__alloyId375.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId375!click!prepaidPlus"] = true;
    $.__views.__alloyId376 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId376"
    });
    $.__views.__alloyId375.add($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId377"
    });
    $.__views.__alloyId376.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId378"
    });
    $.__views.__alloyId376.add($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId379"
    });
    $.__views.__alloyId375.add($.__views.__alloyId379);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId379.add($.__views.arrow5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId355!click!prepaidPlus"] && $.__views.__alloyId355.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId360!click!prepaidPlus"] && $.__views.__alloyId360.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId365!click!prepaidPlus"] && $.__views.__alloyId365.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId370!click!prepaidPlus"] && $.__views.__alloyId370.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId375!click!prepaidPlus"] && $.__views.__alloyId375.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;