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
        DRAWER.navigation("panda3", 1);
    }
    function submit() {
        console.log("submit");
        DRAWER.navigation("panda5", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "panda4";
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
    $.__views.panda4 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "panda4"
    });
    $.__views.panda4 && $.addTopLevelView($.__views.panda4);
    $.__views.__alloyId1568 = Alloy.createController("_header", {
        id: "__alloyId1568",
        __parentSymbol: $.__views.panda4
    });
    $.__views.__alloyId1568.setParent($.__views.panda4);
    $.__views.__alloyId1569 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1569"
    });
    $.__views.panda4.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1570"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1571"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1571);
    back ? $.__views.__alloyId1571.addEventListener("click", back) : __defers["$.__views.__alloyId1571!click!back"] = true;
    $.__views.__alloyId1572 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1572"
    });
    $.__views.panda4.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createLabel({
        text: "Step 3 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1573"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1574"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1574);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.panda4.add($.__views.scrollView);
    $.__views.__alloyId1575 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1575"
    });
    $.__views.scrollView.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createLabel({
        text: "ITEMS No.",
        backgroundColor: "transparent",
        width: "20%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1576"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        width: "50%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1577"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createLabel({
        text: "Cost",
        backgroundColor: "transparent",
        width: "auto",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1578"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1579"
    });
    $.__views.scrollView.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createLabel({
        text: "1",
        backgroundColor: "transparent",
        width: "20%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1580"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1580);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
        text: "MNP-0182224567 (Standard Sim)",
        backgroundColor: "transparent",
        width: "50%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1581"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        width: "auto",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1582"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId1583"
    });
    $.__views.scrollView.add($.__views.__alloyId1583);
    $.__views.__alloyId1584 = Ti.UI.createLabel({
        text: "TOTAL PAYMENT",
        backgroundColor: "transparent",
        height: "100%",
        width: "70%",
        textAlign: "center",
        color: "black",
        id: "__alloyId1584"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1584);
    $.__views.__alloyId1585 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        height: "100%",
        width: "auto",
        textAlign: "center",
        color: "black",
        id: "__alloyId1585"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1585);
    $.__views.__alloyId1586 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1586"
    });
    $.__views.panda4.add($.__views.__alloyId1586);
    submit ? $.__views.__alloyId1586.addEventListener("click", submit) : __defers["$.__views.__alloyId1586!click!submit"] = true;
    $.__views.__alloyId1587 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId1587"
    });
    $.__views.__alloyId1586.add($.__views.__alloyId1587);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1571!click!back"] && $.__views.__alloyId1571.addEventListener("click", back);
    __defers["$.__views.__alloyId1586!click!submit"] && $.__views.__alloyId1586.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;