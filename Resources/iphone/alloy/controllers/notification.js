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
        DRAWER.navigation("support", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notification";
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
    $.__views.notification = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "notification"
    });
    $.__views.notification && $.addTopLevelView($.__views.notification);
    $.__views.__alloyId1419 = Alloy.createController("_header", {
        id: "__alloyId1419",
        __parentSymbol: $.__views.notification
    });
    $.__views.__alloyId1419.setParent($.__views.notification);
    $.__views.__alloyId1420 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1420"
    });
    $.__views.notification.add($.__views.__alloyId1420);
    $.__views.__alloyId1421 = Ti.UI.createLabel({
        color: "white",
        backgroundColor: "transparent",
        font: {
            fontSize: "18dp"
        },
        text: "Notification",
        left: "20",
        id: "__alloyId1421"
    });
    $.__views.__alloyId1420.add($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1422"
    });
    $.__views.__alloyId1420.add($.__views.__alloyId1422);
    back ? $.__views.__alloyId1422.addEventListener("click", back) : __defers["$.__views.__alloyId1422!click!back"] = true;
    $.__views.__alloyId1423 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId1423"
    });
    $.__views.notification.add($.__views.__alloyId1423);
    $.__views.title = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "25dp",
            fontWeight: "bold"
        },
        id: "title",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left"
    });
    $.__views.__alloyId1423.add($.__views.title);
    $.__views.label = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        id: "label",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left"
    });
    $.__views.__alloyId1423.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.title.text = "1.Title";
    $.label.text = "1.You can buy a top-up card from any authorised dealer in the form of:\n1.Top-Up Card / Voucher at any XOX Authorised Dealers\n2..Electronic Code / Top-Up Slip at\n3.Top-Up through XOX Self-Care Portal\n\nTop-up your prepaid account via:\n\nUSSD\na.Top-up your own prepaid account: Key in *132*1*<16-digit Pin Code># and press\nb.Top-up your friend's account: Key in *132*1*< 16-digit Pin Code >*< Mobile Number ># and press\nEXAMPLE: *132*1*< 16-digit Pin Code >*010300XXXX# and press";
    __defers["$.__views.__alloyId1422!click!back"] && $.__views.__alloyId1422.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;