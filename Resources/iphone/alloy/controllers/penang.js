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
        DRAWER.navigation("products", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "penang";
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
    $.__views.penang = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "penang"
    });
    $.__views.penang && $.addTopLevelView($.__views.penang);
    $.__views.__alloyId1412 = Alloy.createController("_header", {
        id: "__alloyId1412",
        __parentSymbol: $.__views.penang
    });
    $.__views.__alloyId1412.setParent($.__views.penang);
    $.__views.__alloyId1413 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1413"
    });
    $.__views.penang.add($.__views.__alloyId1413);
    $.__views.__alloyId1414 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1414"
    });
    $.__views.__alloyId1413.add($.__views.__alloyId1414);
    $.__views.__alloyId1415 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1415"
    });
    $.__views.__alloyId1413.add($.__views.__alloyId1415);
    back ? $.__views.__alloyId1415.addEventListener("click", back) : __defers["$.__views.__alloyId1415!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang.add($.__views.scrollView);
    $.__views.__alloyId1416 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1416"
    });
    $.__views.scrollView.add($.__views.__alloyId1416);
    $.__views.__alloyId1417 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1417"
    });
    $.__views.__alloyId1416.add($.__views.__alloyId1417);
    $.__views.__alloyId1418 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1418"
    });
    $.__views.__alloyId1417.add($.__views.__alloyId1418);
    $.__views.__alloyId1419 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1419"
    });
    $.__views.__alloyId1416.add($.__views.__alloyId1419);
    $.__views.__alloyId1420 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1420"
    });
    $.__views.__alloyId1419.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createLabel({
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1421"
    });
    $.__views.__alloyId1419.add($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1422"
    });
    $.__views.scrollView.add($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1423"
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1423);
    $.__views.__alloyId1424 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1424"
    });
    $.__views.__alloyId1423.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1425"
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1425);
    $.__views.__alloyId1426 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1426"
    });
    $.__views.__alloyId1425.add($.__views.__alloyId1426);
    $.__views.__alloyId1427 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1427"
    });
    $.__views.__alloyId1425.add($.__views.__alloyId1427);
    $.__views.__alloyId1428 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1428"
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1428);
    $.__views.__alloyId1429 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1429"
    });
    $.__views.__alloyId1428.add($.__views.__alloyId1429);
    $.__views.__alloyId1430 = Ti.UI.createLabel({
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1430"
    });
    $.__views.__alloyId1428.add($.__views.__alloyId1430);
    $.__views.__alloyId1431 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1431"
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1431);
    $.__views.__alloyId1432 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1432"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1433"
    });
    $.__views.__alloyId1431.add($.__views.__alloyId1433);
    $.__views.__alloyId1434 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1434"
    });
    $.__views.__alloyId1422.add($.__views.__alloyId1434);
    $.__views.__alloyId1435 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1435"
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1436"
    });
    $.__views.__alloyId1434.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1437"
    });
    $.__views.scrollView.add($.__views.__alloyId1437);
    $.__views.__alloyId1438 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1438"
    });
    $.__views.__alloyId1437.add($.__views.__alloyId1438);
    $.__views.__alloyId1439 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1439"
    });
    $.__views.__alloyId1438.add($.__views.__alloyId1439);
    $.__views.__alloyId1440 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1440"
    });
    $.__views.__alloyId1437.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1441"
    });
    $.__views.__alloyId1440.add($.__views.__alloyId1441);
    $.__views.__alloyId1442 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1442"
    });
    $.__views.__alloyId1440.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1443"
    });
    $.__views.__alloyId1437.add($.__views.__alloyId1443);
    $.__views.__alloyId1444 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1444"
    });
    $.__views.__alloyId1443.add($.__views.__alloyId1444);
    $.__views.__alloyId1445 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1445"
    });
    $.__views.__alloyId1443.add($.__views.__alloyId1445);
    $.__views.__alloyId1446 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1446"
    });
    $.__views.penang.add($.__views.__alloyId1446);
    subscribe ? $.__views.__alloyId1446.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1446!click!subscribe"] = true;
    $.__views.__alloyId1447 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1447"
    });
    $.__views.__alloyId1446.add($.__views.__alloyId1447);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1415!click!back"] && $.__views.__alloyId1415.addEventListener("click", back);
    __defers["$.__views.__alloyId1446!click!subscribe"] && $.__views.__alloyId1446.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;