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
        DRAWER.navigation("myAccount", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment6";
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
    $.__views.payment6 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment6"
    });
    $.__views.payment6 && $.addTopLevelView($.__views.payment6);
    $.__views.__alloyId1732 = Alloy.createController("_header", {
        id: "__alloyId1732",
        __parentSymbol: $.__views.payment6
    });
    $.__views.__alloyId1732.setParent($.__views.payment6);
    $.__views.__alloyId1733 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1733"
    });
    $.__views.payment6.add($.__views.__alloyId1733);
    $.__views.__alloyId1734 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1734"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1734);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment6.add($.__views.scrollView);
    $.__views.__alloyId1735 = Ti.UI.createLabel({
        text: "Payment Confirmation",
        color: "black",
        top: "20",
        id: "__alloyId1735"
    });
    $.__views.scrollView.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        top: "10",
        bottom: "10",
        id: "__alloyId1736"
    });
    $.__views.scrollView.add($.__views.__alloyId1736);
    $.__views.account = Ti.UI.createLabel({
        text: "Account No : 01X 0000000",
        id: "account",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.account);
    $.__views.amount = Ti.UI.createLabel({
        text: "Amount(RM) : RM20",
        id: "amount",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.amount);
    $.__views.method = Ti.UI.createLabel({
        text: "Payment Method : Credit Card",
        id: "method",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.method);
    $.__views.__alloyId1737 = Ti.UI.createButton({
        title: "Done",
        color: "red",
        borderColor: "red",
        backgroundColor: "white",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
        id: "__alloyId1737"
    });
    $.__views.scrollView.add($.__views.__alloyId1737);
    done ? $.__views.__alloyId1737.addEventListener("click", done) : __defers["$.__views.__alloyId1737!click!done"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    __defers["$.__views.__alloyId1737!click!done"] && $.__views.__alloyId1737.addEventListener("click", done);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;