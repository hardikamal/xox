function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function close() {
        DRAWER.navigation("onlinePurchases", 1);
    }
    function download() {
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
    $.__views.__alloyId664 = Alloy.createController("_header", {
        id: "__alloyId664",
        __parentSymbol: $.__views.hopOn5
    });
    $.__views.__alloyId664.setParent($.__views.hopOn5);
    $.__views.__alloyId665 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId665"
    });
    $.__views.hopOn5.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId666"
    });
    $.__views.__alloyId665.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId667"
    });
    $.__views.__alloyId665.add($.__views.__alloyId667);
    close ? $.__views.__alloyId667.addEventListener("click", close) : __defers["$.__views.__alloyId667!click!close"] = true;
    $.__views.__alloyId668 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId668"
    });
    $.__views.hopOn5.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createLabel({
        text: "Step 5 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId669"
    });
    $.__views.__alloyId668.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createLabel({
        text: "Complete",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId670"
    });
    $.__views.__alloyId668.add($.__views.__alloyId670);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.hopOn5.add($.__views.scrollView);
    $.__views.__alloyId671 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "100",
        id: "__alloyId671"
    });
    $.__views.scrollView.add($.__views.__alloyId671);
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
    $.__views.__alloyId671.add($.__views.item_title);
    $.__views.__alloyId672 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId672"
    });
    $.__views.hopOn5.add($.__views.__alloyId672);
    download ? $.__views.__alloyId672.addEventListener("click", download) : __defers["$.__views.__alloyId672!click!download"] = true;
    $.__views.__alloyId673 = Ti.UI.createLabel({
        text: "DOWNLOAD TAX INVOICE",
        color: "white",
        id: "__alloyId673"
    });
    $.__views.__alloyId672.add($.__views.__alloyId673);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId667!click!close"] && $.__views.__alloyId667.addEventListener("click", close);
    __defers["$.__views.__alloyId672!click!download"] && $.__views.__alloyId672.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;