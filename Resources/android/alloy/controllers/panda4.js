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
    $.__views.__alloyId1605 = Alloy.createController("_header", {
        id: "__alloyId1605",
        __parentSymbol: $.__views.panda4
    });
    $.__views.__alloyId1605.setParent($.__views.panda4);
    $.__views.__alloyId1606 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1606"
    });
    $.__views.panda4.add($.__views.__alloyId1606);
    $.__views.__alloyId1607 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1607"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1607);
    $.__views.__alloyId1608 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1608"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1608);
    back ? $.__views.__alloyId1608.addEventListener("click", back) : __defers["$.__views.__alloyId1608!click!back"] = true;
    $.__views.__alloyId1609 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1609"
    });
    $.__views.panda4.add($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createLabel({
        text: "Step 3 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1610"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1611"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1611);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.panda4.add($.__views.scrollView);
    $.__views.__alloyId1612 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1612"
    });
    $.__views.scrollView.add($.__views.__alloyId1612);
    $.__views.__alloyId1613 = Ti.UI.createLabel({
        text: "ITEMS No.",
        backgroundColor: "transparent",
        width: "20%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1613"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1613);
    $.__views.__alloyId1614 = Ti.UI.createLabel({
        text: "Mobile Number",
        backgroundColor: "transparent",
        width: "50%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1614"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1614);
    $.__views.__alloyId1615 = Ti.UI.createLabel({
        text: "Cost",
        backgroundColor: "transparent",
        width: "auto",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1615"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1615);
    $.__views.__alloyId1616 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1616"
    });
    $.__views.scrollView.add($.__views.__alloyId1616);
    $.__views.__alloyId1617 = Ti.UI.createLabel({
        text: "1",
        backgroundColor: "transparent",
        width: "20%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1617"
    });
    $.__views.__alloyId1616.add($.__views.__alloyId1617);
    $.__views.__alloyId1618 = Ti.UI.createLabel({
        text: "MNP-0182224567 (Standard Sim)",
        backgroundColor: "transparent",
        width: "50%",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1618"
    });
    $.__views.__alloyId1616.add($.__views.__alloyId1618);
    $.__views.__alloyId1619 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        width: "auto",
        textAlign: "center",
        color: "black",
        top: "0",
        id: "__alloyId1619"
    });
    $.__views.__alloyId1616.add($.__views.__alloyId1619);
    $.__views.__alloyId1620 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId1620"
    });
    $.__views.scrollView.add($.__views.__alloyId1620);
    $.__views.__alloyId1621 = Ti.UI.createLabel({
        text: "TOTAL PAYMENT",
        backgroundColor: "transparent",
        height: "100%",
        width: "70%",
        textAlign: "center",
        color: "black",
        id: "__alloyId1621"
    });
    $.__views.__alloyId1620.add($.__views.__alloyId1621);
    $.__views.__alloyId1622 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        height: "100%",
        width: "auto",
        textAlign: "center",
        color: "black",
        id: "__alloyId1622"
    });
    $.__views.__alloyId1620.add($.__views.__alloyId1622);
    $.__views.__alloyId1623 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1623"
    });
    $.__views.panda4.add($.__views.__alloyId1623);
    submit ? $.__views.__alloyId1623.addEventListener("click", submit) : __defers["$.__views.__alloyId1623!click!submit"] = true;
    $.__views.__alloyId1624 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId1624"
    });
    $.__views.__alloyId1623.add($.__views.__alloyId1624);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId1608!click!back"] && $.__views.__alloyId1608.addEventListener("click", back);
    __defers["$.__views.__alloyId1623!click!submit"] && $.__views.__alloyId1623.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;