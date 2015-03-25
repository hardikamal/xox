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
    function back() {
        DRAWER.navigation("myAccount", 1);
    }
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
    $.__views.__alloyId1448 = Alloy.createController("_header", {
        id: "__alloyId1448",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId1448.setParent($.__views.orderHistory);
    $.__views.__alloyId1449 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1449"
    });
    $.__views.orderHistory.add($.__views.__alloyId1449);
    $.__views.__alloyId1450 = Ti.UI.createLabel({
        text: "Friends & Family",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1450"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1451"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1451);
    back ? $.__views.__alloyId1451.addEventListener("click", back) : __defers["$.__views.__alloyId1451!click!back"] = true;
    $.__views.__alloyId1452 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1452"
    });
    $.__views.orderHistory.add($.__views.__alloyId1452);
    $.__views.__alloyId1453 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1453"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1453);
    prepaidPlus ? $.__views.__alloyId1453.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1453!click!prepaidPlus"] = true;
    $.__views.__alloyId1454 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1454"
    });
    $.__views.__alloyId1453.add($.__views.__alloyId1454);
    $.__views.__alloyId1455 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1455"
    });
    $.__views.__alloyId1454.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1456"
    });
    $.__views.__alloyId1454.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1457"
    });
    $.__views.__alloyId1453.add($.__views.__alloyId1457);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1457.add($.__views.arrow1);
    $.__views.__alloyId1458 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1458"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1458);
    prepaidPlus ? $.__views.__alloyId1458.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1458!click!prepaidPlus"] = true;
    $.__views.__alloyId1459 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1459"
    });
    $.__views.__alloyId1458.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1460"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1461"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1462"
    });
    $.__views.__alloyId1458.add($.__views.__alloyId1462);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1462.add($.__views.arrow2);
    $.__views.__alloyId1463 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1463);
    prepaidPlus ? $.__views.__alloyId1463.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1463!click!prepaidPlus"] = true;
    $.__views.__alloyId1464 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1464"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1466"
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1467"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1467);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1467.add($.__views.arrow3);
    $.__views.__alloyId1468 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1468"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1468);
    prepaidPlus ? $.__views.__alloyId1468.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1468!click!prepaidPlus"] = true;
    $.__views.__alloyId1469 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1469"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1470"
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1470);
    $.__views.__alloyId1471 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1471"
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1471);
    $.__views.__alloyId1472 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1472"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1472);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1472.add($.__views.arrow4);
    $.__views.__alloyId1473 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1473"
    });
    $.__views.__alloyId1452.add($.__views.__alloyId1473);
    prepaidPlus ? $.__views.__alloyId1473.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1473!click!prepaidPlus"] = true;
    $.__views.__alloyId1474 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1474"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1475"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1476"
    });
    $.__views.__alloyId1474.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1477"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1477);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1477.add($.__views.arrow5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    var clearObject = function() {
        alert("order history clear cache");
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
    __defers["$.__views.__alloyId1451!click!back"] && $.__views.__alloyId1451.addEventListener("click", back);
    __defers["$.__views.__alloyId1453!click!prepaidPlus"] && $.__views.__alloyId1453.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1458!click!prepaidPlus"] && $.__views.__alloyId1458.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1463!click!prepaidPlus"] && $.__views.__alloyId1463.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1468!click!prepaidPlus"] && $.__views.__alloyId1468.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1473!click!prepaidPlus"] && $.__views.__alloyId1473.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;