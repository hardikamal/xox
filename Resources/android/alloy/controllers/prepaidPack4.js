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
    $.__views.__alloyId2140 = Alloy.createController("_header", {
        id: "__alloyId2140",
        __parentSymbol: $.__views.prepaidPack4
    });
    $.__views.__alloyId2140.setParent($.__views.prepaidPack4);
    $.__views.__alloyId2141 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2141"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId2141);
    $.__views.__alloyId2142 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2142"
    });
    $.__views.__alloyId2141.add($.__views.__alloyId2142);
    $.__views.__alloyId2143 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2143"
    });
    $.__views.prepaidPack4.add($.__views.__alloyId2143);
    $.__views.__alloyId2144 = Ti.UI.createLabel({
        text: "Step 4 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2144"
    });
    $.__views.__alloyId2143.add($.__views.__alloyId2144);
    $.__views.__alloyId2145 = Ti.UI.createLabel({
        text: "Complete",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId2145"
    });
    $.__views.__alloyId2143.add($.__views.__alloyId2145);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.prepaidPack4.add($.__views.scrollView);
    $.__views.__alloyId2146 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "100",
        id: "__alloyId2146"
    });
    $.__views.scrollView.add($.__views.__alloyId2146);
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
    $.__views.__alloyId2146.add($.__views.item_title);
    $.__views.__alloyId2147 = Ti.UI.createButton({
        title: "Done",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        backgroundColor: "white",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
        id: "__alloyId2147"
    });
    $.__views.scrollView.add($.__views.__alloyId2147);
    done ? $.__views.__alloyId2147.addEventListener("click", done) : __defers["$.__views.__alloyId2147!click!done"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId2147!click!done"] && $.__views.__alloyId2147.addEventListener("click", done);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;