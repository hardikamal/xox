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
    $.__views.__alloyId635 = Alloy.createController("_header", {
        id: "__alloyId635",
        __parentSymbol: $.__views.hopOn4
    });
    $.__views.__alloyId635.setParent($.__views.hopOn4);
    $.__views.__alloyId636 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId636"
    });
    $.__views.hopOn4.add($.__views.__alloyId636);
    $.__views.__alloyId637 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId637"
    });
    $.__views.__alloyId636.add($.__views.__alloyId637);
    $.__views.__alloyId638 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId638"
    });
    $.__views.__alloyId636.add($.__views.__alloyId638);
    back ? $.__views.__alloyId638.addEventListener("click", back) : __defers["$.__views.__alloyId638!click!back"] = true;
    $.__views.__alloyId639 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId639"
    });
    $.__views.hopOn4.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createLabel({
        text: "Step 4 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId640"
    });
    $.__views.__alloyId639.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createLabel({
        text: "Payment Summary",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId641"
    });
    $.__views.__alloyId639.add($.__views.__alloyId641);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.hopOn4.add($.__views.scrollView);
    $.__views.__alloyId642 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "50",
        id: "__alloyId642"
    });
    $.__views.scrollView.add($.__views.__alloyId642);
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
    $.__views.__alloyId642.add($.__views.item_title);
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
    $.__views.__alloyId642.add($.__views.desc_title);
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
    $.__views.__alloyId642.add($.__views.cost_title);
    $.__views.__alloyId643 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "30",
        id: "__alloyId643"
    });
    $.__views.scrollView.add($.__views.__alloyId643);
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
    $.__views.__alloyId643.add($.__views.item_data);
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
    $.__views.__alloyId643.add($.__views.desc_data);
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
    $.__views.__alloyId643.add($.__views.cost_data);
    $.__views.__alloyId644 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        backgroundColor: "#bf0404",
        top: "10",
        height: "50",
        id: "__alloyId644"
    });
    $.__views.scrollView.add($.__views.__alloyId644);
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
    $.__views.__alloyId644.add($.__views.total_payment);
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
    $.__views.__alloyId644.add($.__views.total_price);
    $.__views.__alloyId645 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId645"
    });
    $.__views.hopOn4.add($.__views.__alloyId645);
    submit ? $.__views.__alloyId645.addEventListener("click", submit) : __defers["$.__views.__alloyId645!click!submit"] = true;
    $.__views.__alloyId646 = Ti.UI.createLabel({
        text: "SUBMIT",
        color: "white",
        id: "__alloyId646"
    });
    $.__views.__alloyId645.add($.__views.__alloyId646);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId638!click!back"] && $.__views.__alloyId638.addEventListener("click", back);
    __defers["$.__views.__alloyId645!click!submit"] && $.__views.__alloyId645.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;