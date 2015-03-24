function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function done() {
        DRAWER.navigation("onlinePurchases", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hopOn5";
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
    $.__views.hopOn5 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "hopOn5"
    });
    $.__views.hopOn5 && $.addTopLevelView($.__views.hopOn5);
<<<<<<< HEAD
    $.__views.__alloyId585 = Alloy.createController("_header", {
        id: "__alloyId585",
=======
<<<<<<< HEAD
    $.__views.__alloyId631 = Alloy.createController("_header", {
        id: "__alloyId631",
=======
    $.__views.__alloyId585 = Alloy.createController("_header", {
        id: "__alloyId585",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        __parentSymbol: $.__views.hopOn5
    });
    $.__views.__alloyId585.setParent($.__views.hopOn5);
    $.__views.__alloyId586 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId586"
    });
<<<<<<< HEAD
    $.__views.hopOn5.add($.__views.__alloyId586);
    $.__views.__alloyId587 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.hopOn5.add($.__views.__alloyId632);
    $.__views.__alloyId633 = Ti.UI.createLabel({
=======
    $.__views.hopOn5.add($.__views.__alloyId586);
    $.__views.__alloyId587 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId587"
=======
<<<<<<< HEAD
        id: "__alloyId633"
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId586.add($.__views.__alloyId587);
    $.__views.__alloyId588 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId588"
    });
<<<<<<< HEAD
    $.__views.hopOn5.add($.__views.__alloyId588);
    $.__views.__alloyId589 = Ti.UI.createLabel({
=======
    $.__views.hopOn5.add($.__views.__alloyId634);
    $.__views.__alloyId635 = Ti.UI.createLabel({
=======
        id: "__alloyId587"
    });
    $.__views.__alloyId586.add($.__views.__alloyId587);
    $.__views.__alloyId588 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId588"
    });
    $.__views.hopOn5.add($.__views.__alloyId588);
    $.__views.__alloyId589 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Step 5 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId589"
    });
    $.__views.__alloyId588.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId635"
    });
    $.__views.__alloyId634.add($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createLabel({
=======
        id: "__alloyId589"
    });
    $.__views.__alloyId588.add($.__views.__alloyId589);
    $.__views.__alloyId590 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Porting Info",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId590"
    });
    $.__views.__alloyId588.add($.__views.__alloyId590);
=======
<<<<<<< HEAD
        id: "__alloyId636"
    });
    $.__views.__alloyId634.add($.__views.__alloyId636);
=======
        id: "__alloyId590"
    });
    $.__views.__alloyId588.add($.__views.__alloyId590);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.hopOn5.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId591 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId637 = Ti.UI.createView({
=======
    $.__views.__alloyId591 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        width: "90%",
        height: "100",
        id: "__alloyId591"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId591);
=======
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId637);
=======
    $.__views.scrollView.add($.__views.__alloyId591);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.item_title = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "HopOn Registration done. We will keep you update, Thank you.",
        id: "item_title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "100",
        width: "90%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId591.add($.__views.item_title);
    $.__views.__alloyId592 = Ti.UI.createButton({
=======
<<<<<<< HEAD
    $.__views.__alloyId637.add($.__views.item_title);
    $.__views.__alloyId638 = Ti.UI.createButton({
=======
    $.__views.__alloyId591.add($.__views.item_title);
    $.__views.__alloyId592 = Ti.UI.createButton({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        title: "Done",
        color: "red",
        borderColor: "red",
        backgroundColor: "white",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
<<<<<<< HEAD
        id: "__alloyId592"
    });
    $.__views.scrollView.add($.__views.__alloyId592);
    done ? $.__views.__alloyId592.addEventListener("click", done) : __defers["$.__views.__alloyId592!click!done"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId638"
    });
    $.__views.scrollView.add($.__views.__alloyId638);
    done ? $.__views.__alloyId638.addEventListener("click", done) : __defers["$.__views.__alloyId638!click!done"] = true;
=======
        id: "__alloyId592"
    });
    $.__views.scrollView.add($.__views.__alloyId592);
    done ? $.__views.__alloyId592.addEventListener("click", done) : __defers["$.__views.__alloyId592!click!done"] = true;
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId592!click!done"] && $.__views.__alloyId592.addEventListener("click", done);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId638!click!done"] && $.__views.__alloyId638.addEventListener("click", done);
=======
    __defers["$.__views.__alloyId592!click!done"] && $.__views.__alloyId592.addEventListener("click", done);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;