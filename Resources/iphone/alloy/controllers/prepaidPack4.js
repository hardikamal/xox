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
    this.__controllerPath = "prepaidPack4";
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
    $.__views.prepaidPack4 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack4"
    });
    $.__views.prepaidPack4 && $.addTopLevelView($.__views.prepaidPack4);
<<<<<<< HEAD
    $.__views.__alloyId1792 = Alloy.createController("_header", {
        id: "__alloyId1792",
        __parentSymbol: $.__views.prepaidPack4
    });
    $.__views.__alloyId1792.setParent($.__views.prepaidPack4);
    $.__views.__alloyId1793 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1793"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId1793);
    $.__views.__alloyId1794 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1295 = Alloy.createController("_header", {
        id: "__alloyId1295",
        __parentSymbol: $.__views.prepaidPack4
    });
    $.__views.__alloyId1295.setParent($.__views.prepaidPack4);
    $.__views.__alloyId1296 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1296"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId1296);
    $.__views.__alloyId1297 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1794"
    });
    $.__views.__alloyId1793.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1795"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createLabel({
=======
        id: "__alloyId1297"
    });
    $.__views.__alloyId1296.add($.__views.__alloyId1297);
    $.__views.__alloyId1298 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1298"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId1298);
    $.__views.__alloyId1299 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Step 4 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1796"
    });
    $.__views.__alloyId1795.add($.__views.__alloyId1796);
    $.__views.__alloyId1797 = Ti.UI.createLabel({
=======
        id: "__alloyId1299"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1299);
    $.__views.__alloyId1300 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Complete",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1797"
    });
    $.__views.__alloyId1795.add($.__views.__alloyId1797);
=======
        id: "__alloyId1300"
    });
    $.__views.__alloyId1298.add($.__views.__alloyId1300);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.prepaidPack4.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1798 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "100",
        id: "__alloyId1798"
    });
    $.__views.scrollView.add($.__views.__alloyId1798);
=======
    $.__views.__alloyId1301 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "100",
        id: "__alloyId1301"
    });
    $.__views.scrollView.add($.__views.__alloyId1301);
>>>>>>> origin/master
    $.__views.item_title = Ti.UI.createLabel({
        font: {
            fontSize: "15dp"
        },
        text: "Transcation completed, Thank you.",
        id: "item_title",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: "100",
        width: "90%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1798.add($.__views.item_title);
    $.__views.__alloyId1799 = Ti.UI.createButton({
=======
    $.__views.__alloyId1301.add($.__views.item_title);
    $.__views.__alloyId1302 = Ti.UI.createButton({
>>>>>>> origin/master
        title: "Done",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        backgroundColor: "white",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
<<<<<<< HEAD
        id: "__alloyId1799"
    });
    $.__views.scrollView.add($.__views.__alloyId1799);
    done ? $.__views.__alloyId1799.addEventListener("click", done) : __defers["$.__views.__alloyId1799!click!done"] = true;
=======
        id: "__alloyId1302"
    });
    $.__views.scrollView.add($.__views.__alloyId1302);
    done ? $.__views.__alloyId1302.addEventListener("click", done) : __defers["$.__views.__alloyId1302!click!done"] = true;
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1799!click!done"] && $.__views.__alloyId1799.addEventListener("click", done);
=======
    __defers["$.__views.__alloyId1302!click!done"] && $.__views.__alloyId1302.addEventListener("click", done);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;