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
        DRAWER.navigation("hopOn3", 1);
    }
    function submit() {
        DRAWER.navigation("hopOn5", 1);
        console.log("submit");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hopOn4";
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
    $.__views.hopOn4 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOn4"
    });
    $.__views.hopOn4 && $.addTopLevelView($.__views.hopOn4);
    $.__views.__alloyId566 = Alloy.createController("_header", {
        id: "__alloyId566",
        __parentSymbol: $.__views.hopOn4
    });
    $.__views.__alloyId566.setParent($.__views.hopOn4);
    $.__views.__alloyId567 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId567"
    });
    $.__views.hopOn4.add($.__views.__alloyId567);
    $.__views.__alloyId568 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId568"
    });
    $.__views.__alloyId567.add($.__views.__alloyId568);
    $.__views.__alloyId569 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId569"
    });
    $.__views.__alloyId567.add($.__views.__alloyId569);
    back ? $.__views.__alloyId569.addEventListener("click", back) : __defers["$.__views.__alloyId569!click!back"] = true;
    $.__views.__alloyId570 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId570"
    });
    $.__views.hopOn4.add($.__views.__alloyId570);
    $.__views.__alloyId571 = Ti.UI.createLabel({
        text: "Step 4 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId571"
    });
    $.__views.__alloyId570.add($.__views.__alloyId571);
    $.__views.__alloyId572 = Ti.UI.createLabel({
        text: "Payment Summary",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId572"
    });
    $.__views.__alloyId570.add($.__views.__alloyId572);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.hopOn4.add($.__views.scrollView);
    $.__views.__alloyId573 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId573"
    });
    $.__views.scrollView.add($.__views.__alloyId573);
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
    $.__views.__alloyId573.add($.__views.item_title);
    $.__views.desc_title = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "Mobile Number",
        id: "desc_title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "50",
        width: "50%",
        top: "5"
    });
    $.__views.__alloyId573.add($.__views.desc_title);
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
    $.__views.__alloyId573.add($.__views.cost_title);
    $.__views.__alloyId574 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId574"
    });
    $.__views.scrollView.add($.__views.__alloyId574);
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
    $.__views.__alloyId574.add($.__views.item_data);
    $.__views.desc_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "MNP - 0102431567",
        id: "desc_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "50%",
        top: "5"
    });
    $.__views.__alloyId574.add($.__views.desc_data);
    $.__views.cost_data = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "RM00.00",
        id: "cost_data",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "30",
        width: "30%",
        top: "5"
    });
    $.__views.__alloyId574.add($.__views.cost_data);
    $.__views.__alloyId575 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        backgroundColor: "#bf0404",
        top: "10",
        height: "50",
        id: "__alloyId575"
    });
    $.__views.scrollView.add($.__views.__alloyId575);
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
    $.__views.__alloyId575.add($.__views.total_payment);
    $.__views.total_price = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "RM00.00",
        id: "total_price",
        backgroundColor: "transparent",
        color: "white",
        width: "20%",
        top: "10"
    });
    $.__views.__alloyId575.add($.__views.total_price);
    $.__views.__alloyId576 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId576"
    });
    $.__views.hopOn4.add($.__views.__alloyId576);
    submit ? $.__views.__alloyId576.addEventListener("click", submit) : __defers["$.__views.__alloyId576!click!submit"] = true;
    $.__views.__alloyId577 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId577"
    });
    $.__views.__alloyId576.add($.__views.__alloyId577);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId569!click!back"] && $.__views.__alloyId569.addEventListener("click", back);
    __defers["$.__views.__alloyId576!click!submit"] && $.__views.__alloyId576.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;