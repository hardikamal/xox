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
<<<<<<< HEAD
    $.__views.__alloyId1183 = Alloy.createController("_header", {
        id: "__alloyId1183",
=======
<<<<<<< HEAD
    $.__views.__alloyId1347 = Alloy.createController("_header", {
        id: "__alloyId1347",
        __parentSymbol: $.__views.notification
    });
    $.__views.__alloyId1347.setParent($.__views.notification);
    $.__views.__alloyId1348 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1348"
    });
    $.__views.notification.add($.__views.__alloyId1348);
    $.__views.__alloyId1349 = Ti.UI.createLabel({
=======
    $.__views.__alloyId851 = Alloy.createController("_header", {
        id: "__alloyId851",
>>>>>>> origin/master
        __parentSymbol: $.__views.notification
    });
    $.__views.__alloyId1183.setParent($.__views.notification);
    $.__views.__alloyId1184 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1184"
    });
<<<<<<< HEAD
    $.__views.notification.add($.__views.__alloyId1184);
    $.__views.__alloyId1185 = Ti.UI.createLabel({
=======
    $.__views.notification.add($.__views.__alloyId852);
    $.__views.__alloyId853 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId1185"
=======
<<<<<<< HEAD
        id: "__alloyId1349"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1349);
    $.__views.__alloyId1350 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1350"
    });
    $.__views.notification.add($.__views.__alloyId1350);
    $.__views.__alloyId1351 = Ti.UI.createLabel({
=======
        id: "__alloyId853"
>>>>>>> origin/master
    });
    $.__views.__alloyId1184.add($.__views.__alloyId1185);
    $.__views.__alloyId1186 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1186"
    });
<<<<<<< HEAD
    $.__views.notification.add($.__views.__alloyId1186);
    $.__views.__alloyId1187 = Ti.UI.createLabel({
=======
    $.__views.notification.add($.__views.__alloyId854);
    $.__views.__alloyId855 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Notification",
        left: "5%",
        height: "50",
        textAlign: "left",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1187"
=======
<<<<<<< HEAD
        id: "__alloyId1351"
    });
    $.__views.__alloyId1350.add($.__views.__alloyId1351);
    $.__views.__alloyId1352 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId1352"
    });
    $.__views.notification.add($.__views.__alloyId1352);
=======
        id: "__alloyId855"
>>>>>>> origin/master
    });
    $.__views.__alloyId1186.add($.__views.__alloyId1187);
    $.__views.__alloyId1188 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId1188"
    });
<<<<<<< HEAD
    $.__views.notification.add($.__views.__alloyId1188);
=======
    $.__views.notification.add($.__views.__alloyId856);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.title = Ti.UI.createLabel({
        id: "title",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
<<<<<<< HEAD
    $.__views.__alloyId1188.add($.__views.title);
=======
<<<<<<< HEAD
    $.__views.__alloyId1352.add($.__views.title);
=======
    $.__views.__alloyId856.add($.__views.title);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.label = Ti.UI.createLabel({
        id: "label",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
<<<<<<< HEAD
    $.__views.__alloyId1188.add($.__views.label);
=======
<<<<<<< HEAD
    $.__views.__alloyId1352.add($.__views.label);
=======
    $.__views.__alloyId856.add($.__views.label);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.title.text = "1.Title";
    $.label.text = "1.You can buy a top-up card from any authorised dealer in the form of:\n1.Top-Up Card / Voucher at any XOX Authorised Dealers\n2..Electronic Code / Top-Up Slip at\n3.Top-Up through XOX Self-Care Portal\n\nTop-up your prepaid account via:\n\nUSSD\na.Top-up your own prepaid account: Key in *132*1*<16-digit Pin Code># and press\nb.Top-up your friend's account: Key in *132*1*< 16-digit Pin Code >*< Mobile Number ># and press\nEXAMPLE: *132*1*< 16-digit Pin Code >*010300XXXX# and press";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;