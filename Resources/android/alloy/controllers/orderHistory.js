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
    $.__views.__alloyId1477 = Alloy.createController("_header", {
        id: "__alloyId1477",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId1477.setParent($.__views.orderHistory);
    $.__views.__alloyId1478 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1478"
    });
    $.__views.orderHistory.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
        text: "Friends & Family",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1479"
    });
    $.__views.__alloyId1478.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1480"
    });
    $.__views.__alloyId1478.add($.__views.__alloyId1480);
    back ? $.__views.__alloyId1480.addEventListener("click", back) : __defers["$.__views.__alloyId1480!click!back"] = true;
    $.__views.__alloyId1481 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1481"
    });
    $.__views.orderHistory.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1482"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1482);
    prepaidPlus ? $.__views.__alloyId1482.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1482!click!prepaidPlus"] = true;
    $.__views.__alloyId1483 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1483"
    });
    $.__views.__alloyId1482.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1484"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1485"
    });
    $.__views.__alloyId1483.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1486"
    });
    $.__views.__alloyId1482.add($.__views.__alloyId1486);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1486.add($.__views.arrow1);
    $.__views.__alloyId1487 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1487"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1487);
    prepaidPlus ? $.__views.__alloyId1487.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1487!click!prepaidPlus"] = true;
    $.__views.__alloyId1488 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1488"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1489"
    });
    $.__views.__alloyId1488.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1490"
    });
    $.__views.__alloyId1488.add($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1491"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1491);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1491.add($.__views.arrow2);
    $.__views.__alloyId1492 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1492"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1492);
    prepaidPlus ? $.__views.__alloyId1492.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1492!click!prepaidPlus"] = true;
    $.__views.__alloyId1493 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1493"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
    $.__views.__alloyId1494 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1494"
    });
    $.__views.__alloyId1493.add($.__views.__alloyId1494);
    $.__views.__alloyId1495 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1495"
    });
    $.__views.__alloyId1493.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1496"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1496);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1496.add($.__views.arrow3);
    $.__views.__alloyId1497 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1497"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1497);
    prepaidPlus ? $.__views.__alloyId1497.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1497!click!prepaidPlus"] = true;
    $.__views.__alloyId1498 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1498"
    });
    $.__views.__alloyId1497.add($.__views.__alloyId1498);
    $.__views.__alloyId1499 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1499"
    });
    $.__views.__alloyId1498.add($.__views.__alloyId1499);
    $.__views.__alloyId1500 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1500"
    });
    $.__views.__alloyId1498.add($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1501"
    });
    $.__views.__alloyId1497.add($.__views.__alloyId1501);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1501.add($.__views.arrow4);
    $.__views.__alloyId1502 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1502"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1502);
    prepaidPlus ? $.__views.__alloyId1502.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1502!click!prepaidPlus"] = true;
    $.__views.__alloyId1503 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1503"
    });
    $.__views.__alloyId1502.add($.__views.__alloyId1503);
    $.__views.__alloyId1504 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1504"
    });
    $.__views.__alloyId1503.add($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1505"
    });
    $.__views.__alloyId1503.add($.__views.__alloyId1505);
    $.__views.__alloyId1506 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1506"
    });
    $.__views.__alloyId1502.add($.__views.__alloyId1506);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1506.add($.__views.arrow5);
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
    __defers["$.__views.__alloyId1480!click!back"] && $.__views.__alloyId1480.addEventListener("click", back);
    __defers["$.__views.__alloyId1482!click!prepaidPlus"] && $.__views.__alloyId1482.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1487!click!prepaidPlus"] && $.__views.__alloyId1487.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1492!click!prepaidPlus"] && $.__views.__alloyId1492.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1497!click!prepaidPlus"] && $.__views.__alloyId1497.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1502!click!prepaidPlus"] && $.__views.__alloyId1502.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;