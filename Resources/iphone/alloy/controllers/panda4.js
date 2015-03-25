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
    $.__views.__alloyId1503 = Alloy.createController("_header", {
        id: "__alloyId1503",
        __parentSymbol: $.__views.panda4
    });
    $.__views.__alloyId1503.setParent($.__views.panda4);
    $.__views.__alloyId1504 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1504"
    });
    $.__views.panda4.add($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1505"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1505);
    $.__views.__alloyId1506 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1506"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1506);
    back ? $.__views.__alloyId1506.addEventListener("click", back) : __defers["$.__views.__alloyId1506!click!back"] = true;
    $.__views.__alloyId1507 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1507"
    });
    $.__views.panda4.add($.__views.__alloyId1507);
    $.__views.__alloyId1508 = Ti.UI.createLabel({
        text: "Step 3 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1508"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1508);
    $.__views.__alloyId1509 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1509"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1509);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.panda4.add($.__views.scrollView);
    $.__views.__alloyId1510 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1510"
    });
    $.__views.scrollView.add($.__views.__alloyId1510);
    $.__views.__alloyId1511 = Ti.UI.createLabel({
        text: "ITEMS No.",
        backgroundColor: "transparent",
        width: "20%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1511"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        width: "50%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1512"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1512);
    $.__views.__alloyId1513 = Ti.UI.createLabel({
        text: "Cost",
        backgroundColor: "transparent",
        width: "auto",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1513"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1513);
    $.__views.__alloyId1514 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1514"
    });
    $.__views.scrollView.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createLabel({
        text: "1",
        backgroundColor: "transparent",
        width: "20%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1515"
    });
    $.__views.__alloyId1514.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createLabel({
        text: "MNP-0182224567 (Standard Sim)",
        backgroundColor: "transparent",
        width: "50%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1516"
    });
    $.__views.__alloyId1514.add($.__views.__alloyId1516);
    $.__views.__alloyId1517 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        width: "auto",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1517"
    });
    $.__views.__alloyId1514.add($.__views.__alloyId1517);
    $.__views.__alloyId1518 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId1518"
    });
    $.__views.scrollView.add($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createLabel({
        text: "TOTAL PAYMENT",
        backgroundColor: "transparent",
        height: "100%",
        width: "70%",
        textAlign: "center",
        color: "black",
        id: "__alloyId1519"
    });
    $.__views.__alloyId1518.add($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        height: "100%",
        width: "auto",
        textAlign: "center",
        color: "black",
        id: "__alloyId1520"
    });
    $.__views.__alloyId1518.add($.__views.__alloyId1520);
    $.__views.__alloyId1521 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1521"
    });
    $.__views.panda4.add($.__views.__alloyId1521);
    submit ? $.__views.__alloyId1521.addEventListener("click", submit) : __defers["$.__views.__alloyId1521!click!submit"] = true;
    $.__views.__alloyId1522 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId1522"
    });
    $.__views.__alloyId1521.add($.__views.__alloyId1522);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1506!click!back"] && $.__views.__alloyId1506.addEventListener("click", back);
    __defers["$.__views.__alloyId1521!click!submit"] && $.__views.__alloyId1521.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;