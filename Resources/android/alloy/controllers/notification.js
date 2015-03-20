function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
    $.__views.notification = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "notification"
    });
    $.__views.notification && $.addTopLevelView($.__views.notification);
    $.__views.__alloyId1187 = Alloy.createController("_header", {
        id: "__alloyId1187",
        __parentSymbol: $.__views.notification
    });
    $.__views.__alloyId1187.setParent($.__views.notification);
    $.__views.__alloyId1188 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1188"
    });
    $.__views.notification.add($.__views.__alloyId1188);
    $.__views.__alloyId1189 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1189"
    });
    $.__views.__alloyId1188.add($.__views.__alloyId1189);
    $.__views.__alloyId1190 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1190"
    });
    $.__views.notification.add($.__views.__alloyId1190);
    $.__views.__alloyId1191 = Ti.UI.createLabel({
        text: "Notification",
        left: "5%",
        height: "50",
        textAlign: "left",
        color: "black",
        id: "__alloyId1191"
    });
    $.__views.__alloyId1190.add($.__views.__alloyId1191);
    $.__views.__alloyId1192 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId1192"
    });
    $.__views.notification.add($.__views.__alloyId1192);
    $.__views.title = Ti.UI.createLabel({
        id: "title",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
    $.__views.__alloyId1192.add($.__views.title);
    $.__views.label = Ti.UI.createLabel({
        id: "label",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
    $.__views.__alloyId1192.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.title.text = "1.Title";
    $.label.text = "1.You can buy a top-up card from any authorised dealer in the form of:\n1.Top-Up Card / Voucher at any XOX Authorised Dealers\n2..Electronic Code / Top-Up Slip at\n3.Top-Up through XOX Self-Care Portal\n\nTop-up your prepaid account via:\n\nUSSD\na.Top-up your own prepaid account: Key in *132*1*<16-digit Pin Code># and press\nb.Top-up your friend's account: Key in *132*1*< 16-digit Pin Code >*< Mobile Number ># and press\nEXAMPLE: *132*1*< 16-digit Pin Code >*010300XXXX# and press";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;