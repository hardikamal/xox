function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function back() {
        DRAWER.navigation("myAccount", 1);
    }
    function proceed() {
        DRAWER.navigation("payment6", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment4";
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
    $.__views.payment4 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment4"
    });
    $.__views.payment4 && $.addTopLevelView($.__views.payment4);
    $.__views.__alloyId1657 = Alloy.createController("_header", {
        id: "__alloyId1657",
        __parentSymbol: $.__views.payment4
    });
    $.__views.__alloyId1657.setParent($.__views.payment4);
    $.__views.__alloyId1658 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1658"
    });
    $.__views.payment4.add($.__views.__alloyId1658);
    $.__views.__alloyId1659 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1659"
    });
    $.__views.__alloyId1658.add($.__views.__alloyId1659);
    $.__views.__alloyId1660 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1660"
    });
    $.__views.__alloyId1658.add($.__views.__alloyId1660);
    back ? $.__views.__alloyId1660.addEventListener("click", back) : __defers["$.__views.__alloyId1660!click!back"] = true;
    $.__views.__alloyId1661 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1661"
    });
    $.__views.payment4.add($.__views.__alloyId1661);
    $.__views.__alloyId1662 = Ti.UI.createLabel({
        text: "Pin Voucher",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1662"
    });
    $.__views.__alloyId1661.add($.__views.__alloyId1662);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment4.add($.__views.scrollView);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5",
        top: "20"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1663 = Ti.UI.createLabel({
        text: "Pin voucher code",
        color: "black",
        id: "__alloyId1663"
    });
    $.__views.contentView2.add($.__views.__alloyId1663);
    $.__views.__alloyId1664 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1664"
    });
    $.__views.contentView2.add($.__views.__alloyId1664);
    $.__views.__alloyId1665 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1665"
    });
    $.__views.payment4.add($.__views.__alloyId1665);
    proceed ? $.__views.__alloyId1665.addEventListener("click", proceed) : __defers["$.__views.__alloyId1665!click!proceed"] = true;
    $.__views.__alloyId1666 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1666"
    });
    $.__views.__alloyId1665.add($.__views.__alloyId1666);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1660!click!back"] && $.__views.__alloyId1660.addEventListener("click", back);
    __defers["$.__views.__alloyId1665!click!proceed"] && $.__views.__alloyId1665.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;