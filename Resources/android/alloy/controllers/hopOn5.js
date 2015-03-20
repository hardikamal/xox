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
    $.__views.__alloyId594 = Alloy.createController("_header", {
        id: "__alloyId594",
        __parentSymbol: $.__views.hopOn5
    });
    $.__views.__alloyId594.setParent($.__views.hopOn5);
    $.__views.__alloyId595 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId595"
    });
    $.__views.hopOn5.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId596"
    });
    $.__views.__alloyId595.add($.__views.__alloyId596);
    $.__views.__alloyId597 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId597"
    });
    $.__views.hopOn5.add($.__views.__alloyId597);
    $.__views.__alloyId598 = Ti.UI.createLabel({
        text: "Step 5 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId598"
    });
    $.__views.__alloyId597.add($.__views.__alloyId598);
    $.__views.__alloyId599 = Ti.UI.createLabel({
        text: "Porting Info",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId599"
    });
    $.__views.__alloyId597.add($.__views.__alloyId599);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.hopOn5.add($.__views.scrollView);
    $.__views.__alloyId600 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "100",
        id: "__alloyId600"
    });
    $.__views.scrollView.add($.__views.__alloyId600);
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
    $.__views.__alloyId600.add($.__views.item_title);
    $.__views.__alloyId601 = Ti.UI.createButton({
        title: "Done",
        color: "red",
        borderColor: "red",
        backgroundColor: "white",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
        id: "__alloyId601"
    });
    $.__views.scrollView.add($.__views.__alloyId601);
    done ? $.__views.__alloyId601.addEventListener("click", done) : __defers["$.__views.__alloyId601!click!done"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId601!click!done"] && $.__views.__alloyId601.addEventListener("click", done);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;