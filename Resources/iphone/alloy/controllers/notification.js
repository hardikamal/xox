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
<<<<<<< HEAD
=======
>>>>>>> origin/master
    $.__views.__alloyId1301 = Alloy.createController("_header", {
        id: "__alloyId1301",
        __parentSymbol: $.__views.notification
    });
    $.__views.__alloyId1301.setParent($.__views.notification);
    $.__views.__alloyId1302 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1302"
    });
    $.__views.notification.add($.__views.__alloyId1302);
    $.__views.__alloyId1303 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1358 = Alloy.createController("_header", {
        id: "__alloyId1358",
        __parentSymbol: $.__views.notification
    });
    $.__views.__alloyId1358.setParent($.__views.notification);
    $.__views.__alloyId1359 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1359"
    });
    $.__views.notification.add($.__views.__alloyId1359);
    $.__views.__alloyId1360 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1301 = Alloy.createController("_header", {
        id: "__alloyId1301",
        __parentSymbol: $.__views.notification
    });
    $.__views.__alloyId1301.setParent($.__views.notification);
    $.__views.__alloyId1302 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1302"
    });
    $.__views.notification.add($.__views.__alloyId1302);
    $.__views.__alloyId1303 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1303"
    });
    $.__views.__alloyId1302.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1304"
    });
    $.__views.notification.add($.__views.__alloyId1304);
    $.__views.__alloyId1305 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1360"
    });
    $.__views.__alloyId1359.add($.__views.__alloyId1360);
    $.__views.__alloyId1361 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1361"
    });
    $.__views.notification.add($.__views.__alloyId1361);
    $.__views.__alloyId1362 = Ti.UI.createLabel({
=======
        id: "__alloyId1303"
    });
    $.__views.__alloyId1302.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1304"
    });
    $.__views.notification.add($.__views.__alloyId1304);
    $.__views.__alloyId1305 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1303"
    });
    $.__views.__alloyId1302.add($.__views.__alloyId1303);
    $.__views.__alloyId1304 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1304"
    });
    $.__views.notification.add($.__views.__alloyId1304);
    $.__views.__alloyId1305 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Notification",
        left: "5%",
        height: "50",
        textAlign: "left",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1362"
    });
    $.__views.__alloyId1361.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId1363"
    });
    $.__views.notification.add($.__views.__alloyId1363);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1305"
    });
    $.__views.__alloyId1304.add($.__views.__alloyId1305);
    $.__views.__alloyId1306 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId1306"
    });
    $.__views.notification.add($.__views.__alloyId1306);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
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
<<<<<<< HEAD
    $.__views.__alloyId1306.add($.__views.title);
=======
<<<<<<< HEAD
    $.__views.__alloyId1363.add($.__views.title);
=======
    $.__views.__alloyId1306.add($.__views.title);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1306.add($.__views.title);
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
<<<<<<< HEAD
    $.__views.__alloyId1306.add($.__views.label);
=======
<<<<<<< HEAD
    $.__views.__alloyId1363.add($.__views.label);
=======
    $.__views.__alloyId1306.add($.__views.label);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1306.add($.__views.label);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.title.text = "1.Title";
    $.label.text = "1.You can buy a top-up card from any authorised dealer in the form of:\n1.Top-Up Card / Voucher at any XOX Authorised Dealers\n2..Electronic Code / Top-Up Slip at\n3.Top-Up through XOX Self-Care Portal\n\nTop-up your prepaid account via:\n\nUSSD\na.Top-up your own prepaid account: Key in *132*1*<16-digit Pin Code># and press\nb.Top-up your friend's account: Key in *132*1*< 16-digit Pin Code >*< Mobile Number ># and press\nEXAMPLE: *132*1*< 16-digit Pin Code >*010300XXXX# and press";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;