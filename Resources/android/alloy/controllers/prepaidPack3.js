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
        DRAWER.navigation("prepaidPack2", 1);
    }
    function submit() {
        DRAWER.navigation("prepaidPack4", 1);
        console.log("submit");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack3";
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
    $.__views.prepaidPack3 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack3"
    });
    $.__views.prepaidPack3 && $.addTopLevelView($.__views.prepaidPack3);
<<<<<<< HEAD
    $.__views.__alloyId1800 = Alloy.createController("_header", {
        id: "__alloyId1800",
        __parentSymbol: $.__views.prepaidPack3
    });
    $.__views.__alloyId1800.setParent($.__views.prepaidPack3);
    $.__views.__alloyId1801 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1801"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1801);
    $.__views.__alloyId1802 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1629 = Alloy.createController("_header", {
        id: "__alloyId1629",
        __parentSymbol: $.__views.prepaidPack3
    });
    $.__views.__alloyId1629.setParent($.__views.prepaidPack3);
    $.__views.__alloyId1630 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1630"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1630);
    $.__views.__alloyId1631 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1802"
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1802);
    $.__views.__alloyId1803 = Ti.UI.createImageView({
=======
        id: "__alloyId1631"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1631);
    $.__views.__alloyId1632 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1803"
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1803);
    back ? $.__views.__alloyId1803.addEventListener("click", back) : __defers["$.__views.__alloyId1803!click!back"] = true;
    $.__views.__alloyId1804 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1804"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1804);
    $.__views.__alloyId1805 = Ti.UI.createLabel({
=======
        id: "__alloyId1632"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1632);
    back ? $.__views.__alloyId1632.addEventListener("click", back) : __defers["$.__views.__alloyId1632!click!back"] = true;
    $.__views.__alloyId1633 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1633"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Step 3 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1805"
    });
    $.__views.__alloyId1804.add($.__views.__alloyId1805);
    $.__views.__alloyId1806 = Ti.UI.createLabel({
=======
        id: "__alloyId1634"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1634);
    $.__views.__alloyId1635 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment Summary",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1806"
    });
    $.__views.__alloyId1804.add($.__views.__alloyId1806);
=======
        id: "__alloyId1635"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1635);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.prepaidPack3.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1807 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId1807"
    });
    $.__views.scrollView.add($.__views.__alloyId1807);
=======
    $.__views.__alloyId1636 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId1636"
    });
    $.__views.scrollView.add($.__views.__alloyId1636);
>>>>>>> origin/master
    $.__views.item_title = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "Items No",
        id: "item_title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "50",
        width: "20%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1807.add($.__views.item_title);
=======
    $.__views.__alloyId1636.add($.__views.item_title);
>>>>>>> origin/master
    $.__views.desc_title = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "Description",
        id: "desc_title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "50",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1807.add($.__views.desc_title);
=======
    $.__views.__alloyId1636.add($.__views.desc_title);
>>>>>>> origin/master
    $.__views.cost_title = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "Cost",
        id: "cost_title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "50",
        width: "30%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1807.add($.__views.cost_title);
    $.__views.__alloyId1808 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1808"
    });
    $.__views.scrollView.add($.__views.__alloyId1808);
=======
    $.__views.__alloyId1636.add($.__views.cost_title);
    $.__views.__alloyId1637 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1637"
    });
    $.__views.scrollView.add($.__views.__alloyId1637);
>>>>>>> origin/master
    $.__views.item_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "1",
        id: "item_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "20%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1808.add($.__views.item_data);
=======
    $.__views.__alloyId1637.add($.__views.item_data);
>>>>>>> origin/master
    $.__views.desc_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "Prepaid Reload",
        id: "desc_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1808.add($.__views.desc_data);
=======
    $.__views.__alloyId1637.add($.__views.desc_data);
>>>>>>> origin/master
    $.__views.cost_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "RM30.00",
        id: "cost_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "30%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1808.add($.__views.cost_data);
    $.__views.__alloyId1809 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1809"
    });
    $.__views.scrollView.add($.__views.__alloyId1809);
=======
    $.__views.__alloyId1637.add($.__views.cost_data);
    $.__views.__alloyId1638 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1638"
    });
    $.__views.scrollView.add($.__views.__alloyId1638);
>>>>>>> origin/master
    $.__views.item_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "2",
        id: "item_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "20%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1809.add($.__views.item_data);
=======
    $.__views.__alloyId1638.add($.__views.item_data);
>>>>>>> origin/master
    $.__views.desc_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "Prepaid Reload",
        id: "desc_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1809.add($.__views.desc_data);
=======
    $.__views.__alloyId1638.add($.__views.desc_data);
>>>>>>> origin/master
    $.__views.cost_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "RM50.00",
        id: "cost_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "30%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1809.add($.__views.cost_data);
    $.__views.__alloyId1810 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1810"
    });
    $.__views.scrollView.add($.__views.__alloyId1810);
=======
    $.__views.__alloyId1638.add($.__views.cost_data);
    $.__views.__alloyId1639 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1639"
    });
    $.__views.scrollView.add($.__views.__alloyId1639);
>>>>>>> origin/master
    $.__views.item_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "3",
        id: "item_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "20%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1810.add($.__views.item_data);
=======
    $.__views.__alloyId1639.add($.__views.item_data);
>>>>>>> origin/master
    $.__views.desc_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "Prepaid Reload",
        id: "desc_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1810.add($.__views.desc_data);
=======
    $.__views.__alloyId1639.add($.__views.desc_data);
>>>>>>> origin/master
    $.__views.cost_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "RM100.00",
        id: "cost_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "30%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1810.add($.__views.cost_data);
    $.__views.__alloyId1811 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1811"
    });
    $.__views.scrollView.add($.__views.__alloyId1811);
=======
    $.__views.__alloyId1639.add($.__views.cost_data);
    $.__views.__alloyId1640 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1640"
    });
    $.__views.scrollView.add($.__views.__alloyId1640);
>>>>>>> origin/master
    $.__views.item_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "4",
        id: "item_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "20%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1811.add($.__views.item_data);
=======
    $.__views.__alloyId1640.add($.__views.item_data);
>>>>>>> origin/master
    $.__views.desc_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "Prepaid Reload",
        id: "desc_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1811.add($.__views.desc_data);
=======
    $.__views.__alloyId1640.add($.__views.desc_data);
>>>>>>> origin/master
    $.__views.cost_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "RM150.00",
        id: "cost_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "30%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1811.add($.__views.cost_data);
    $.__views.__alloyId1812 = Ti.UI.createView({
=======
    $.__views.__alloyId1640.add($.__views.cost_data);
    $.__views.__alloyId1641 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        width: "100%",
        backgroundColor: "#2f4f4f",
        top: "10",
        height: "50",
<<<<<<< HEAD
        id: "__alloyId1812"
    });
    $.__views.scrollView.add($.__views.__alloyId1812);
=======
        id: "__alloyId1641"
    });
    $.__views.scrollView.add($.__views.__alloyId1641);
>>>>>>> origin/master
    $.__views.total_payment = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "TOTAL PAYMENT",
        id: "total_payment",
        backgroundColor: "transparent",
        color: "white",
        top: "10",
        left: "20",
        width: "65%"
    });
<<<<<<< HEAD
    $.__views.__alloyId1812.add($.__views.total_payment);
=======
    $.__views.__alloyId1641.add($.__views.total_payment);
>>>>>>> origin/master
    $.__views.total_price = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "RM190.00",
        id: "total_price",
        backgroundColor: "transparent",
        color: "white",
        width: "20%",
        top: "10"
    });
<<<<<<< HEAD
    $.__views.__alloyId1812.add($.__views.total_price);
    $.__views.__alloyId1813 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1813"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1813);
    submit ? $.__views.__alloyId1813.addEventListener("click", submit) : __defers["$.__views.__alloyId1813!click!submit"] = true;
    $.__views.__alloyId1814 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId1814"
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1814);
=======
    $.__views.__alloyId1641.add($.__views.total_price);
    $.__views.__alloyId1642 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1642"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1642);
    submit ? $.__views.__alloyId1642.addEventListener("click", submit) : __defers["$.__views.__alloyId1642!click!submit"] = true;
    $.__views.__alloyId1643 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId1643"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1643);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
<<<<<<< HEAD
    __defers["$.__views.__alloyId1803!click!back"] && $.__views.__alloyId1803.addEventListener("click", back);
    __defers["$.__views.__alloyId1813!click!submit"] && $.__views.__alloyId1813.addEventListener("click", submit);
=======
    __defers["$.__views.__alloyId1632!click!back"] && $.__views.__alloyId1632.addEventListener("click", back);
    __defers["$.__views.__alloyId1642!click!submit"] && $.__views.__alloyId1642.addEventListener("click", submit);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;