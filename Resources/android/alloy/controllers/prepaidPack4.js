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
    $.__views.__alloyId637 = Alloy.createController("_header", {
        id: "__alloyId637",
        __parentSymbol: $.__views.prepaidPack4
    });
    $.__views.__alloyId637.setParent($.__views.prepaidPack4);
    $.__views.__alloyId638 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId638"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId638);
    $.__views.__alloyId639 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId639"
    });
    $.__views.__alloyId638.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId640"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createLabel({
        text: "Step 4 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId641"
    });
    $.__views.__alloyId640.add($.__views.__alloyId641);
    $.__views.__alloyId642 = Ti.UI.createLabel({
        text: "Complete",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId642"
    });
    $.__views.__alloyId640.add($.__views.__alloyId642);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.prepaidPack4.add($.__views.scrollView);
    $.__views.__alloyId643 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "100",
        id: "__alloyId643"
    });
    $.__views.scrollView.add($.__views.__alloyId643);
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
    $.__views.__alloyId643.add($.__views.item_title);
    $.__views.__alloyId644 = Ti.UI.createButton({
        title: "Done",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        backgroundColor: "white",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
        id: "__alloyId644"
    });
    $.__views.scrollView.add($.__views.__alloyId644);
    done ? $.__views.__alloyId644.addEventListener("click", done) : __defers["$.__views.__alloyId644!click!done"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId644!click!done"] && $.__views.__alloyId644.addEventListener("click", done);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;