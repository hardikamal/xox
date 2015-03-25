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
        DRAWER.navigation("products", 1);
    }
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "penang1758";
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
    $.__views.penang1758 = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "penang1758"
    });
    $.__views.penang1758 && $.addTopLevelView($.__views.penang1758);
    $.__views.__alloyId1708 = Alloy.createController("_header", {
        id: "__alloyId1708",
        __parentSymbol: $.__views.penang1758
    });
    $.__views.__alloyId1708.setParent($.__views.penang1758);
    $.__views.__alloyId1709 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1709"
    });
    $.__views.penang1758.add($.__views.__alloyId1709);
    $.__views.__alloyId1710 = Ti.UI.createLabel({
        text: "PENANG #1758",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1710"
    });
    $.__views.__alloyId1709.add($.__views.__alloyId1710);
    $.__views.__alloyId1711 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1711"
    });
    $.__views.__alloyId1709.add($.__views.__alloyId1711);
    back ? $.__views.__alloyId1711.addEventListener("click", back) : __defers["$.__views.__alloyId1711!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.penang1758.add($.__views.scrollView);
    $.__views.__alloyId1712 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1712"
    });
    $.__views.scrollView.add($.__views.__alloyId1712);
    $.__views.__alloyId1713 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1713"
    });
    $.__views.__alloyId1712.add($.__views.__alloyId1713);
    $.__views.__alloyId1714 = Ti.UI.createLabel({
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1714"
    });
    $.__views.__alloyId1713.add($.__views.__alloyId1714);
    $.__views.__alloyId1715 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1715"
    });
    $.__views.__alloyId1712.add($.__views.__alloyId1715);
    $.__views.__alloyId1716 = Ti.UI.createLabel({
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1716"
    });
    $.__views.__alloyId1715.add($.__views.__alloyId1716);
    $.__views.__alloyId1717 = Ti.UI.createLabel({
        text: "9cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1717"
    });
    $.__views.__alloyId1715.add($.__views.__alloyId1717);
    $.__views.__alloyId1718 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        id: "__alloyId1718"
    });
    $.__views.scrollView.add($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1719"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1719);
    $.__views.__alloyId1720 = Ti.UI.createLabel({
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1720"
    });
    $.__views.__alloyId1719.add($.__views.__alloyId1720);
    $.__views.__alloyId1721 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1721"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1721);
    $.__views.__alloyId1722 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1722"
    });
    $.__views.__alloyId1721.add($.__views.__alloyId1722);
    $.__views.__alloyId1723 = Ti.UI.createLabel({
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1723"
    });
    $.__views.__alloyId1721.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1724"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1724);
    $.__views.__alloyId1725 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1725"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1725);
    $.__views.__alloyId1726 = Ti.UI.createLabel({
        text: "10cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1726"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1726);
    $.__views.__alloyId1727 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1727"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1727);
    $.__views.__alloyId1728 = Ti.UI.createLabel({
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1728"
    });
    $.__views.__alloyId1727.add($.__views.__alloyId1728);
    $.__views.__alloyId1729 = Ti.UI.createLabel({
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1729"
    });
    $.__views.__alloyId1727.add($.__views.__alloyId1729);
    $.__views.__alloyId1730 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1730"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1730);
    $.__views.__alloyId1731 = Ti.UI.createLabel({
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1731"
    });
    $.__views.__alloyId1730.add($.__views.__alloyId1731);
    $.__views.__alloyId1732 = Ti.UI.createLabel({
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1732"
    });
    $.__views.__alloyId1730.add($.__views.__alloyId1732);
    $.__views.__alloyId1733 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
        id: "__alloyId1733"
    });
    $.__views.scrollView.add($.__views.__alloyId1733);
    $.__views.__alloyId1734 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1734"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1734);
    $.__views.__alloyId1735 = Ti.UI.createLabel({
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
        id: "__alloyId1735"
    });
    $.__views.__alloyId1734.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1736"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1736);
    $.__views.__alloyId1737 = Ti.UI.createLabel({
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1737"
    });
    $.__views.__alloyId1736.add($.__views.__alloyId1737);
    $.__views.__alloyId1738 = Ti.UI.createLabel({
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1738"
    });
    $.__views.__alloyId1736.add($.__views.__alloyId1738);
    $.__views.__alloyId1739 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1739"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1739);
    $.__views.__alloyId1740 = Ti.UI.createLabel({
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
        id: "__alloyId1740"
    });
    $.__views.__alloyId1739.add($.__views.__alloyId1740);
    $.__views.__alloyId1741 = Ti.UI.createLabel({
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
        id: "__alloyId1741"
    });
    $.__views.__alloyId1739.add($.__views.__alloyId1741);
    $.__views.__alloyId1742 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1742"
    });
    $.__views.penang1758.add($.__views.__alloyId1742);
    subscribe ? $.__views.__alloyId1742.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1742!click!subscribe"] = true;
    $.__views.__alloyId1743 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1743"
    });
    $.__views.__alloyId1742.add($.__views.__alloyId1743);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    __defers["$.__views.__alloyId1711!click!back"] && $.__views.__alloyId1711.addEventListener("click", back);
    __defers["$.__views.__alloyId1742!click!subscribe"] && $.__views.__alloyId1742.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;