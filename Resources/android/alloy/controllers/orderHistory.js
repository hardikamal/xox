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
        DRAWER.navigation("myAccount", 2);
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
    $.__views.__alloyId1373 = Alloy.createController("_header", {
        id: "__alloyId1373",
        __parentSymbol: $.__views.orderHistory
    });
    $.__views.__alloyId1373.setParent($.__views.orderHistory);
    $.__views.__alloyId1374 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1374"
    });
    $.__views.orderHistory.add($.__views.__alloyId1374);
    $.__views.__alloyId1375 = Ti.UI.createLabel({
        text: "Friends & Family",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1375"
    });
    $.__views.__alloyId1374.add($.__views.__alloyId1375);
    $.__views.__alloyId1376 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1376"
    });
    $.__views.__alloyId1374.add($.__views.__alloyId1376);
    back ? $.__views.__alloyId1376.addEventListener("click", back) : __defers["$.__views.__alloyId1376!click!back"] = true;
    $.__views.__alloyId1377 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId1377"
    });
    $.__views.orderHistory.add($.__views.__alloyId1377);
    $.__views.__alloyId1378 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1378"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1378);
    prepaidPlus ? $.__views.__alloyId1378.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1378!click!prepaidPlus"] = true;
    $.__views.__alloyId1379 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1379"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1379);
    $.__views.__alloyId1380 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1380"
    });
    $.__views.__alloyId1379.add($.__views.__alloyId1380);
    $.__views.__alloyId1381 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1381"
    });
    $.__views.__alloyId1379.add($.__views.__alloyId1381);
    $.__views.__alloyId1382 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1382"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1382);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1382.add($.__views.arrow1);
    $.__views.__alloyId1383 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1383"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1383);
    prepaidPlus ? $.__views.__alloyId1383.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1383!click!prepaidPlus"] = true;
    $.__views.__alloyId1384 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1384"
    });
    $.__views.__alloyId1383.add($.__views.__alloyId1384);
    $.__views.__alloyId1385 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1385"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1385);
    $.__views.__alloyId1386 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1386"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1387"
    });
    $.__views.__alloyId1383.add($.__views.__alloyId1387);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1387.add($.__views.arrow2);
    $.__views.__alloyId1388 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1388"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1388);
    prepaidPlus ? $.__views.__alloyId1388.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1388!click!prepaidPlus"] = true;
    $.__views.__alloyId1389 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1389"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1390"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1391"
    });
    $.__views.__alloyId1389.add($.__views.__alloyId1391);
    $.__views.__alloyId1392 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1392"
    });
    $.__views.__alloyId1388.add($.__views.__alloyId1392);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1392.add($.__views.arrow3);
    $.__views.__alloyId1393 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1393"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1393);
    prepaidPlus ? $.__views.__alloyId1393.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1393!click!prepaidPlus"] = true;
    $.__views.__alloyId1394 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1394"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1395"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1396"
    });
    $.__views.__alloyId1394.add($.__views.__alloyId1396);
    $.__views.__alloyId1397 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1397"
    });
    $.__views.__alloyId1393.add($.__views.__alloyId1397);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1397.add($.__views.arrow4);
    $.__views.__alloyId1398 = Ti.UI.createView({
        layout: "composite",
        height: "20%",
        backgroundColor: "#F4F6F5",
        id: "__alloyId1398"
    });
    $.__views.__alloyId1377.add($.__views.__alloyId1398);
    prepaidPlus ? $.__views.__alloyId1398.addEventListener("click", prepaidPlus) : __defers["$.__views.__alloyId1398!click!prepaidPlus"] = true;
    $.__views.__alloyId1399 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId1399"
    });
    $.__views.__alloyId1398.add($.__views.__alloyId1399);
    $.__views.__alloyId1400 = Ti.UI.createLabel({
        text: "Ordering Prepaid",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1400"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1400);
    $.__views.__alloyId1401 = Ti.UI.createLabel({
        text: "#10125",
        backgroundColor: "transparent",
        color: "#9D9F9E",
        left: "5%",
        id: "__alloyId1401"
    });
    $.__views.__alloyId1399.add($.__views.__alloyId1401);
    $.__views.__alloyId1402 = Ti.UI.createView({
        height: "100%",
        width: Ti.UI.SIZE,
        right: "10",
        backgroundColor: "transparent",
        id: "__alloyId1402"
    });
    $.__views.__alloyId1398.add($.__views.__alloyId1402);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1402.add($.__views.arrow5);
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
    __defers["$.__views.__alloyId1376!click!back"] && $.__views.__alloyId1376.addEventListener("click", back);
    __defers["$.__views.__alloyId1378!click!prepaidPlus"] && $.__views.__alloyId1378.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1383!click!prepaidPlus"] && $.__views.__alloyId1383.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1388!click!prepaidPlus"] && $.__views.__alloyId1388.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1393!click!prepaidPlus"] && $.__views.__alloyId1393.addEventListener("click", prepaidPlus);
    __defers["$.__views.__alloyId1398!click!prepaidPlus"] && $.__views.__alloyId1398.addEventListener("click", prepaidPlus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;