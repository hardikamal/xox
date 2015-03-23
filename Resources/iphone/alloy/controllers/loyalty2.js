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
        DRAWER.navigation("loyalty", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "loyalty2";
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
    $.__views.loyalty2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "loyalty2"
    });
    $.__views.loyalty2 && $.addTopLevelView($.__views.loyalty2);
    $.__views.__alloyId687 = Alloy.createController("_header", {
        id: "__alloyId687",
        __parentSymbol: $.__views.loyalty2
    });
    $.__views.__alloyId687.setParent($.__views.loyalty2);
    $.__views.__alloyId688 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId688"
    });
    $.__views.loyalty2.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createLabel({
        text: "Loyalty",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId689"
    });
    $.__views.__alloyId688.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId690"
    });
    $.__views.__alloyId688.add($.__views.__alloyId690);
    back ? $.__views.__alloyId690.addEventListener("click", back) : __defers["$.__views.__alloyId690!click!back"] = true;
    $.__views.__alloyId691 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId691"
    });
    $.__views.loyalty2.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createLabel({
        text: "Loyalty Rewards",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId692"
    });
    $.__views.__alloyId691.add($.__views.__alloyId692);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.loyalty2.add($.__views.scrollView);
    $.__views.__alloyId693 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId693"
    });
    $.__views.scrollView.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId694"
    });
    $.__views.__alloyId693.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createLabel({
        text: "Rewards Package 01",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId695"
    });
    $.__views.__alloyId694.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId696"
    });
    $.__views.__alloyId694.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId697"
    });
    $.__views.__alloyId693.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId698"
    });
    $.__views.scrollView.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId699"
    });
    $.__views.__alloyId698.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createLabel({
        text: "Rewards Package 02",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId700"
    });
    $.__views.__alloyId699.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId701"
    });
    $.__views.__alloyId699.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId702"
    });
    $.__views.__alloyId698.add($.__views.__alloyId702);
    $.__views.__alloyId703 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId703"
    });
    $.__views.scrollView.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId704"
    });
    $.__views.__alloyId703.add($.__views.__alloyId704);
    $.__views.__alloyId705 = Ti.UI.createLabel({
        text: "Rewards Package 03",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId705"
    });
    $.__views.__alloyId704.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createLabel({
        text: "Steps",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "20",
        id: "__alloyId706"
    });
    $.__views.__alloyId704.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createView({
        backgroundColor: "black",
        width: "90%",
        height: "1",
        bottom: "0",
        id: "__alloyId707"
    });
    $.__views.__alloyId703.add($.__views.__alloyId707);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId690!click!back"] && $.__views.__alloyId690.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;