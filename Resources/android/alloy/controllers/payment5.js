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
    this.__controllerPath = "payment5";
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
    $.__views.payment5 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment5"
    });
    $.__views.payment5 && $.addTopLevelView($.__views.payment5);
    $.__views.__alloyId1714 = Alloy.createController("_header", {
        id: "__alloyId1714",
        __parentSymbol: $.__views.payment5
    });
    $.__views.__alloyId1714.setParent($.__views.payment5);
    $.__views.__alloyId1715 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1715"
    });
    $.__views.payment5.add($.__views.__alloyId1715);
    $.__views.__alloyId1716 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1716"
    });
    $.__views.__alloyId1715.add($.__views.__alloyId1716);
    $.__views.__alloyId1717 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1717"
    });
    $.__views.__alloyId1715.add($.__views.__alloyId1717);
    back ? $.__views.__alloyId1717.addEventListener("click", back) : __defers["$.__views.__alloyId1717!click!back"] = true;
    $.__views.__alloyId1718 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1718"
    });
    $.__views.payment5.add($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createLabel({
        text: "Air Time Transfer",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1719"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1719);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment5.add($.__views.scrollView);
    $.__views.__alloyId1720 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1720"
    });
    $.__views.scrollView.add($.__views.__alloyId1720);
    $.__views.__alloyId1721 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1721"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1721);
    $.__views.__alloyId1722 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1722"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1722);
    $.__views.__alloyId1723 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1723"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1724"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1724);
    $.__views.__alloyId1725 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1725"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1725);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1726 = Ti.UI.createLabel({
        text: "Mobile number",
        color: "black",
        id: "__alloyId1726"
    });
    $.__views.contentView2.add($.__views.__alloyId1726);
    $.__views.__alloyId1727 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1727"
    });
    $.__views.contentView2.add($.__views.__alloyId1727);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1728 = Ti.UI.createLabel({
        text: "Amount to transfer",
        color: "black",
        id: "__alloyId1728"
    });
    $.__views.contentView2.add($.__views.__alloyId1728);
    $.__views.__alloyId1729 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1729"
    });
    $.__views.contentView2.add($.__views.__alloyId1729);
    $.__views.__alloyId1730 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1730"
    });
    $.__views.payment5.add($.__views.__alloyId1730);
    proceed ? $.__views.__alloyId1730.addEventListener("click", proceed) : __defers["$.__views.__alloyId1730!click!proceed"] = true;
    $.__views.__alloyId1731 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1731"
    });
    $.__views.__alloyId1730.add($.__views.__alloyId1731);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId1717!click!back"] && $.__views.__alloyId1717.addEventListener("click", back);
    __defers["$.__views.__alloyId1730!click!proceed"] && $.__views.__alloyId1730.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;