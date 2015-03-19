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
    $.__views.__alloyId1127 = Alloy.createController("_header", {
        id: "__alloyId1127",
        __parentSymbol: $.__views.prepaidPack3
    });
    $.__views.__alloyId1127.setParent($.__views.prepaidPack3);
    $.__views.__alloyId1128 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1128"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1128);
    $.__views.__alloyId1129 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1129"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1129);
    $.__views.__alloyId1130 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1130"
    });
    $.__views.__alloyId1128.add($.__views.__alloyId1130);
    back ? $.__views.__alloyId1130.addEventListener("click", back) : __defers["$.__views.__alloyId1130!click!back"] = true;
    $.__views.__alloyId1131 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1131"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1131);
    $.__views.__alloyId1132 = Ti.UI.createLabel({
        text: "Step 3 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1132"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1132);
    $.__views.__alloyId1133 = Ti.UI.createLabel({
        text: "Payment Summary",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1133"
    });
    $.__views.__alloyId1131.add($.__views.__alloyId1133);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.prepaidPack3.add($.__views.scrollView);
    $.__views.__alloyId1134 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId1134"
    });
    $.__views.scrollView.add($.__views.__alloyId1134);
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
    $.__views.__alloyId1134.add($.__views.item_title);
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
    $.__views.__alloyId1134.add($.__views.desc_title);
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
    $.__views.__alloyId1134.add($.__views.cost_title);
    $.__views.__alloyId1135 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1135"
    });
    $.__views.scrollView.add($.__views.__alloyId1135);
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
    $.__views.__alloyId1135.add($.__views.item_data);
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
    $.__views.__alloyId1135.add($.__views.desc_data);
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
    $.__views.__alloyId1135.add($.__views.cost_data);
    $.__views.__alloyId1136 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1136"
    });
    $.__views.scrollView.add($.__views.__alloyId1136);
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
    $.__views.__alloyId1136.add($.__views.item_data);
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
    $.__views.__alloyId1136.add($.__views.desc_data);
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
    $.__views.__alloyId1136.add($.__views.cost_data);
    $.__views.__alloyId1137 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1137"
    });
    $.__views.scrollView.add($.__views.__alloyId1137);
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
    $.__views.__alloyId1137.add($.__views.item_data);
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
    $.__views.__alloyId1137.add($.__views.desc_data);
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
    $.__views.__alloyId1137.add($.__views.cost_data);
    $.__views.__alloyId1138 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId1138"
    });
    $.__views.scrollView.add($.__views.__alloyId1138);
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
    $.__views.__alloyId1138.add($.__views.item_data);
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
    $.__views.__alloyId1138.add($.__views.desc_data);
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
    $.__views.__alloyId1138.add($.__views.cost_data);
    $.__views.__alloyId1139 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        backgroundColor: "#2f4f4f",
        top: "10",
        height: "50",
        id: "__alloyId1139"
    });
    $.__views.scrollView.add($.__views.__alloyId1139);
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
    $.__views.__alloyId1139.add($.__views.total_payment);
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
    $.__views.__alloyId1139.add($.__views.total_price);
    $.__views.__alloyId1140 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1140"
    });
    $.__views.prepaidPack3.add($.__views.__alloyId1140);
    submit ? $.__views.__alloyId1140.addEventListener("click", submit) : __defers["$.__views.__alloyId1140!click!submit"] = true;
    $.__views.__alloyId1141 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId1141"
    });
    $.__views.__alloyId1140.add($.__views.__alloyId1141);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1130!click!back"] && $.__views.__alloyId1130.addEventListener("click", back);
    __defers["$.__views.__alloyId1140!click!submit"] && $.__views.__alloyId1140.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;