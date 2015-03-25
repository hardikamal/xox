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
    $.__views.__alloyId578 = Alloy.createController("_header", {
        id: "__alloyId578",
        __parentSymbol: $.__views.hopOn5
    });
    $.__views.__alloyId578.setParent($.__views.hopOn5);
    $.__views.__alloyId579 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId579"
    });
    $.__views.hopOn5.add($.__views.__alloyId579);
    $.__views.__alloyId580 = Ti.UI.createLabel({
        text: "HOP ON",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId580"
    });
    $.__views.__alloyId579.add($.__views.__alloyId580);
    $.__views.__alloyId581 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId581"
    });
    $.__views.__alloyId579.add($.__views.__alloyId581);
    close ? $.__views.__alloyId581.addEventListener("click", close) : __defers["$.__views.__alloyId581!click!close"] = true;
    $.__views.__alloyId582 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId582"
    });
    $.__views.hopOn5.add($.__views.__alloyId582);
    $.__views.__alloyId583 = Ti.UI.createLabel({
        text: "Step 5 of 5",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId583"
    });
    $.__views.__alloyId582.add($.__views.__alloyId583);
    $.__views.__alloyId584 = Ti.UI.createLabel({
        text: "Complete",
        backgroundColor: "transparent",
        color: "red",
        left: "20",
        id: "__alloyId584"
    });
    $.__views.__alloyId582.add($.__views.__alloyId584);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%"
    });
    $.__views.hopOn5.add($.__views.scrollView);
    $.__views.__alloyId585 = Ti.UI.createView({
        layout: "horizontal",
        width: "90%",
        height: "100",
        id: "__alloyId585"
    });
    $.__views.scrollView.add($.__views.__alloyId585);
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
    $.__views.__alloyId585.add($.__views.item_title);
    $.__views.__alloyId586 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId586"
    });
    $.__views.hopOn5.add($.__views.__alloyId586);
    download ? $.__views.__alloyId586.addEventListener("click", download) : __defers["$.__views.__alloyId586!click!download"] = true;
    $.__views.__alloyId587 = Ti.UI.createLabel({
        text: "DOWNLOAD TAX INVOICE",
        color: "white",
        id: "__alloyId587"
    });
    $.__views.__alloyId586.add($.__views.__alloyId587);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId581!click!close"] && $.__views.__alloyId581.addEventListener("click", close);
    __defers["$.__views.__alloyId586!click!download"] && $.__views.__alloyId586.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;