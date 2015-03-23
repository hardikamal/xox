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
    $.__views.__alloyId1777 = Alloy.createController("_header", {
        id: "__alloyId1777",
        __parentSymbol: $.__views.prepaidPack3
    });
    $.__views.__alloyId1777.setParent($.__views.prepaidPack3);
    $.__views.__alloyId1778 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1778"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1778);
    $.__views.__alloyId1779 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1280 = Alloy.createController("_header", {
        id: "__alloyId1280",
        __parentSymbol: $.__views.prepaidPack3
    });
    $.__views.__alloyId1280.setParent($.__views.prepaidPack3);
    $.__views.__alloyId1281 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1281"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1281);
    $.__views.__alloyId1282 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1779"
    });
    $.__views.__alloyId1778.add($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createImageView({
=======
        id: "__alloyId1282"
    });
    $.__views.__alloyId1281.add($.__views.__alloyId1282);
    $.__views.__alloyId1283 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1780"
    });
    $.__views.__alloyId1778.add($.__views.__alloyId1780);
    back ? $.__views.__alloyId1780.addEventListener("click", back) : __defers["$.__views.__alloyId1780!click!back"] = true;
    $.__views.__alloyId1781 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1781"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1781);
    $.__views.__alloyId1782 = Ti.UI.createLabel({
=======
        id: "__alloyId1283"
    });
    $.__views.__alloyId1281.add($.__views.__alloyId1283);
    back ? $.__views.__alloyId1283.addEventListener("click", back) : __defers["$.__views.__alloyId1283!click!back"] = true;
    $.__views.__alloyId1284 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1284"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1284);
    $.__views.__alloyId1285 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Step 3 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1782"
    });
    $.__views.__alloyId1781.add($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createLabel({
=======
        id: "__alloyId1285"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1285);
    $.__views.__alloyId1286 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment Summary",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1783"
    });
    $.__views.__alloyId1781.add($.__views.__alloyId1783);
=======
        id: "__alloyId1286"
    });
    $.__views.__alloyId1284.add($.__views.__alloyId1286);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.prepaidPack3.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1784 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId1784"
    });
    $.__views.scrollView.add($.__views.__alloyId1784);
=======
    $.__views.__alloyId1287 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId1287"
    });
    $.__views.scrollView.add($.__views.__alloyId1287);
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
    $.__views.__alloyId1784.add($.__views.item_title);
=======
    $.__views.__alloyId1287.add($.__views.item_title);
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
    $.__views.__alloyId1784.add($.__views.desc_title);
=======
    $.__views.__alloyId1287.add($.__views.desc_title);
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
    $.__views.__alloyId1784.add($.__views.cost_title);
    $.__views.__alloyId1785 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1785"
    });
    $.__views.scrollView.add($.__views.__alloyId1785);
=======
    $.__views.__alloyId1287.add($.__views.cost_title);
    $.__views.__alloyId1288 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1288"
    });
    $.__views.scrollView.add($.__views.__alloyId1288);
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
    $.__views.__alloyId1785.add($.__views.item_data);
=======
    $.__views.__alloyId1288.add($.__views.item_data);
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
    $.__views.__alloyId1785.add($.__views.desc_data);
=======
    $.__views.__alloyId1288.add($.__views.desc_data);
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
    $.__views.__alloyId1785.add($.__views.cost_data);
    $.__views.__alloyId1786 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1786"
    });
    $.__views.scrollView.add($.__views.__alloyId1786);
=======
    $.__views.__alloyId1288.add($.__views.cost_data);
    $.__views.__alloyId1289 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1289"
    });
    $.__views.scrollView.add($.__views.__alloyId1289);
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
    $.__views.__alloyId1786.add($.__views.item_data);
=======
    $.__views.__alloyId1289.add($.__views.item_data);
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
    $.__views.__alloyId1786.add($.__views.desc_data);
=======
    $.__views.__alloyId1289.add($.__views.desc_data);
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
    $.__views.__alloyId1786.add($.__views.cost_data);
    $.__views.__alloyId1787 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1787"
    });
    $.__views.scrollView.add($.__views.__alloyId1787);
=======
    $.__views.__alloyId1289.add($.__views.cost_data);
    $.__views.__alloyId1290 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1290"
    });
    $.__views.scrollView.add($.__views.__alloyId1290);
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
    $.__views.__alloyId1787.add($.__views.item_data);
=======
    $.__views.__alloyId1290.add($.__views.item_data);
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
    $.__views.__alloyId1787.add($.__views.desc_data);
=======
    $.__views.__alloyId1290.add($.__views.desc_data);
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
    $.__views.__alloyId1787.add($.__views.cost_data);
    $.__views.__alloyId1788 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1788"
    });
    $.__views.scrollView.add($.__views.__alloyId1788);
=======
    $.__views.__alloyId1290.add($.__views.cost_data);
    $.__views.__alloyId1291 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1291"
    });
    $.__views.scrollView.add($.__views.__alloyId1291);
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
    $.__views.__alloyId1788.add($.__views.item_data);
=======
    $.__views.__alloyId1291.add($.__views.item_data);
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
    $.__views.__alloyId1788.add($.__views.desc_data);
=======
    $.__views.__alloyId1291.add($.__views.desc_data);
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
    $.__views.__alloyId1788.add($.__views.cost_data);
    $.__views.__alloyId1789 = Ti.UI.createView({
=======
    $.__views.__alloyId1291.add($.__views.cost_data);
    $.__views.__alloyId1292 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        width: "100%",
        backgroundColor: "#2f4f4f",
        top: "10",
        height: "50",
<<<<<<< HEAD
        id: "__alloyId1789"
    });
    $.__views.scrollView.add($.__views.__alloyId1789);
=======
        id: "__alloyId1292"
    });
    $.__views.scrollView.add($.__views.__alloyId1292);
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
    $.__views.__alloyId1789.add($.__views.total_payment);
=======
    $.__views.__alloyId1292.add($.__views.total_payment);
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
    $.__views.__alloyId1789.add($.__views.total_price);
    $.__views.__alloyId1790 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1790"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1790);
    submit ? $.__views.__alloyId1790.addEventListener("click", submit) : __defers["$.__views.__alloyId1790!click!submit"] = true;
    $.__views.__alloyId1791 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId1791"
    });
    $.__views.__alloyId1790.add($.__views.__alloyId1791);
=======
    $.__views.__alloyId1292.add($.__views.total_price);
    $.__views.__alloyId1293 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1293"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1293);
    submit ? $.__views.__alloyId1293.addEventListener("click", submit) : __defers["$.__views.__alloyId1293!click!submit"] = true;
    $.__views.__alloyId1294 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId1294"
    });
    $.__views.__alloyId1293.add($.__views.__alloyId1294);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1780!click!back"] && $.__views.__alloyId1780.addEventListener("click", back);
    __defers["$.__views.__alloyId1790!click!submit"] && $.__views.__alloyId1790.addEventListener("click", submit);
=======
    __defers["$.__views.__alloyId1283!click!back"] && $.__views.__alloyId1283.addEventListener("click", back);
    __defers["$.__views.__alloyId1293!click!submit"] && $.__views.__alloyId1293.addEventListener("click", submit);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;