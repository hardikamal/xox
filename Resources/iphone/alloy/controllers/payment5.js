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
    $.__views.__alloyId1667 = Alloy.createController("_header", {
        id: "__alloyId1667",
        __parentSymbol: $.__views.payment5
    });
    $.__views.__alloyId1667.setParent($.__views.payment5);
    $.__views.__alloyId1668 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1668"
    });
    $.__views.payment5.add($.__views.__alloyId1668);
    $.__views.__alloyId1669 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1669"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1669);
    $.__views.__alloyId1670 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1670"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1670);
    back ? $.__views.__alloyId1670.addEventListener("click", back) : __defers["$.__views.__alloyId1670!click!back"] = true;
    $.__views.__alloyId1671 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1671"
    });
    $.__views.payment5.add($.__views.__alloyId1671);
    $.__views.__alloyId1672 = Ti.UI.createLabel({
        text: "Air Time Transfer",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1672"
    });
    $.__views.__alloyId1671.add($.__views.__alloyId1672);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment5.add($.__views.scrollView);
    $.__views.__alloyId1673 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1673"
    });
    $.__views.scrollView.add($.__views.__alloyId1673);
    $.__views.__alloyId1674 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1674"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1674);
    $.__views.__alloyId1675 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1675"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1675);
    $.__views.__alloyId1676 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1676"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1676);
    $.__views.__alloyId1677 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1677"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1677);
    $.__views.__alloyId1678 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1678"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1678);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1679 = Ti.UI.createLabel({
        text: "Mobile number",
        color: "black",
        id: "__alloyId1679"
    });
    $.__views.contentView2.add($.__views.__alloyId1679);
    $.__views.__alloyId1680 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1680"
    });
    $.__views.contentView2.add($.__views.__alloyId1680);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1681 = Ti.UI.createLabel({
        text: "Amount to transfer",
        color: "black",
        id: "__alloyId1681"
    });
    $.__views.contentView2.add($.__views.__alloyId1681);
    $.__views.__alloyId1682 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1682"
    });
    $.__views.contentView2.add($.__views.__alloyId1682);
    $.__views.__alloyId1683 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1683"
    });
    $.__views.payment5.add($.__views.__alloyId1683);
    proceed ? $.__views.__alloyId1683.addEventListener("click", proceed) : __defers["$.__views.__alloyId1683!click!proceed"] = true;
    $.__views.__alloyId1684 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1684"
    });
    $.__views.__alloyId1683.add($.__views.__alloyId1684);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1670!click!back"] && $.__views.__alloyId1670.addEventListener("click", back);
    __defers["$.__views.__alloyId1683!click!proceed"] && $.__views.__alloyId1683.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;