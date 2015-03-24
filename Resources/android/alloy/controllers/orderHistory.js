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
    $.__views.__alloyId1429 = Alloy.createController("_header", {
        id: "__alloyId1429",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId1429.setParent($.__views.orderHistory);
    $.__views.__alloyId1430 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1430"
    });
    $.__views.orderHistory.add($.__views.__alloyId1430);
    $.__views.__alloyId1431 = Ti.UI.createLabel({
        text: "Friends & Family",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1431"
    });
    $.__views.__alloyId1430.add($.__views.__alloyId1431);
    $.__views.__alloyId1432 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1432"
    });
    $.__views.__alloyId1430.add($.__views.__alloyId1432);
    back ? $.__views.__alloyId1432.addEventListener("click", back) : __defers["$.__views.__alloyId1432!click!back"] = true;
    $.__views.__alloyId1433 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1433"
    });
    $.__views.orderHistory.add($.__views.__alloyId1433);
    $.__views.__alloyId1434 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1434"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1434);
    prepaidPlus ? $.__views.__alloyId1434.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1434!click!prepaidPlus"] = true;
    $.__views.__alloyId1435 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1435"
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1436"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1437"
    });
    $.__views.__alloyId1435.add($.__views.__alloyId1437);
    $.__views.__alloyId1438 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1438"
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1438);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1438.add($.__views.arrow1);
    $.__views.__alloyId1439 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1439"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1439);
    prepaidPlus ? $.__views.__alloyId1439.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1439!click!prepaidPlus"] = true;
    $.__views.__alloyId1440 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1440"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1441"
    });
    $.__views.__alloyId1440.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1442"
    });
    $.__views.__alloyId1440.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1443"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1443);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1443.add($.__views.arrow2);
    $.__views.__alloyId1444 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1444"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1444);
    prepaidPlus ? $.__views.__alloyId1444.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1444!click!prepaidPlus"] = true;
    $.__views.__alloyId1445 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1445"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1446"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1447"
    });
    $.__views.__alloyId1445.add($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1448"
    });
    $.__views.__alloyId1444.add($.__views.__alloyId1448);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1448.add($.__views.arrow3);
    $.__views.__alloyId1449 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1449"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1449);
    prepaidPlus ? $.__views.__alloyId1449.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1449!click!prepaidPlus"] = true;
    $.__views.__alloyId1450 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1450"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1451"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1451);
    $.__views.__alloyId1452 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1452"
    });
    $.__views.__alloyId1450.add($.__views.__alloyId1452);
    $.__views.__alloyId1453 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1453"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1453);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1453.add($.__views.arrow4);
    $.__views.__alloyId1454 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1454"
    });
    $.__views.__alloyId1433.add($.__views.__alloyId1454);
    prepaidPlus ? $.__views.__alloyId1454.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1454!click!prepaidPlus"] = true;
    $.__views.__alloyId1455 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1455"
    });
    $.__views.__alloyId1454.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1456"
    });
    $.__views.__alloyId1455.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1457"
    });
    $.__views.__alloyId1455.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1458"
    });
    $.__views.__alloyId1454.add($.__views.__alloyId1458);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1458.add($.__views.arrow5);
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
    __defers["$.__views.__alloyId1432!click!back"] && $.__views.__alloyId1432.addEventListener("click", back);
    __defers["$.__views.__alloyId1434!click!prepaidPlus"] && $.__views.__alloyId1434.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1439!click!prepaidPlus"] && $.__views.__alloyId1439.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1444!click!prepaidPlus"] && $.__views.__alloyId1444.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1449!click!prepaidPlus"] && $.__views.__alloyId1449.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1454!click!prepaidPlus"] && $.__views.__alloyId1454.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;