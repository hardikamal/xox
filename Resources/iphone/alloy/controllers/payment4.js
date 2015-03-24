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
    $.__views.payment4 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment4"
    });
    $.__views.payment4 && $.addTopLevelView($.__views.payment4);
    $.__views.__alloyId1406 = Alloy.createController("_header", {
        id: "__alloyId1406",
        __parentSymbol: $.__views.payment4
    });
    $.__views.__alloyId1406.setParent($.__views.payment4);
    $.__views.__alloyId1407 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1407"
    });
    $.__views.payment4.add($.__views.__alloyId1407);
    $.__views.__alloyId1408 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1408"
    });
    $.__views.__alloyId1407.add($.__views.__alloyId1408);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment4.add($.__views.scrollView);
    $.__views.__alloyId1409 = Ti.UI.createLabel({
        text: "Payment Confirmation",
        color: "black",
        top: "20",
        id: "__alloyId1409"
    });
    $.__views.scrollView.add($.__views.__alloyId1409);
    $.__views.__alloyId1410 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        top: "10",
        bottom: "10",
        id: "__alloyId1410"
    });
    $.__views.scrollView.add($.__views.__alloyId1410);
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
    $.__views.__alloyId1411 = Ti.UI.createButton({
        title: "Done",
        color: "red",
        borderColor: "red",
        backgroundColor: "white",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
        id: "__alloyId1411"
    });
    $.__views.scrollView.add($.__views.__alloyId1411);
    done ? $.__views.__alloyId1411.addEventListener("click", done) : __defers["$.__views.__alloyId1411!click!done"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.amount.text = "Amount (RM): RM" + Ti.App.Properties.getString("amount");
    $.method.text = "Payment Method: " + Ti.App.Properties.getString("method");
    __defers["$.__views.__alloyId1411!click!done"] && $.__views.__alloyId1411.addEventListener("click", done);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;