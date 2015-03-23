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
    $.__views.__alloyId1815 = Alloy.createController("_header", {
        id: "__alloyId1815",
        __parentSymbol: $.__views.prepaidPack4
    });
    $.__views.__alloyId1815.setParent($.__views.prepaidPack4);
    $.__views.__alloyId1816 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1816"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId1816);
    $.__views.__alloyId1817 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1644 = Alloy.createController("_header", {
        id: "__alloyId1644",
        __parentSymbol: $.__views.prepaidPack4
    });
    $.__views.__alloyId1644.setParent($.__views.prepaidPack4);
    $.__views.__alloyId1645 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1645"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1817"
    });
    $.__views.__alloyId1816.add($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1818"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId1818);
    $.__views.__alloyId1819 = Ti.UI.createLabel({
=======
        id: "__alloyId1646"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1646);
    $.__views.__alloyId1647 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1647"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId1647);
    $.__views.__alloyId1648 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Step 4 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1819"
    });
    $.__views.__alloyId1818.add($.__views.__alloyId1819);
    $.__views.__alloyId1820 = Ti.UI.createLabel({
=======
        id: "__alloyId1648"
    });
    $.__views.__alloyId1647.add($.__views.__alloyId1648);
    $.__views.__alloyId1649 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Complete",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1820"
    });
    $.__views.__alloyId1818.add($.__views.__alloyId1820);
=======
        id: "__alloyId1649"
    });
    $.__views.__alloyId1647.add($.__views.__alloyId1649);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.prepaidPack4.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1821 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "100",
        id: "__alloyId1821"
    });
    $.__views.scrollView.add($.__views.__alloyId1821);
=======
    $.__views.__alloyId1650 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "100",
        id: "__alloyId1650"
    });
    $.__views.scrollView.add($.__views.__alloyId1650);
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
    $.__views.__alloyId1821.add($.__views.item_title);
    $.__views.__alloyId1822 = Ti.UI.createButton({
=======
    $.__views.__alloyId1650.add($.__views.item_title);
    $.__views.__alloyId1651 = Ti.UI.createButton({
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
        id: "__alloyId1822"
    });
    $.__views.scrollView.add($.__views.__alloyId1822);
    done ? $.__views.__alloyId1822.addEventListener("click", done) : __defers["$.__views.__alloyId1822!click!done"] = true;
=======
        id: "__alloyId1651"
    });
    $.__views.scrollView.add($.__views.__alloyId1651);
    done ? $.__views.__alloyId1651.addEventListener("click", done) : __defers["$.__views.__alloyId1651!click!done"] = true;
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
<<<<<<< HEAD
    __defers["$.__views.__alloyId1822!click!done"] && $.__views.__alloyId1822.addEventListener("click", done);
=======
    __defers["$.__views.__alloyId1651!click!done"] && $.__views.__alloyId1651.addEventListener("click", done);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;