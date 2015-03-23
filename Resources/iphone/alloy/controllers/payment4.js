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
<<<<<<< HEAD
    $.__views.__alloyId1452 = Alloy.createController("_header", {
        id: "__alloyId1452",
        __parentSymbol: $.__views.payment4
    });
    $.__views.__alloyId1452.setParent($.__views.payment4);
    $.__views.__alloyId1453 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1453"
    });
    $.__views.payment4.add($.__views.__alloyId1453);
    $.__views.__alloyId1454 = Ti.UI.createLabel({
=======
    $.__views.__alloyId955 = Alloy.createController("_header", {
        id: "__alloyId955",
        __parentSymbol: $.__views.payment4
    });
    $.__views.__alloyId955.setParent($.__views.payment4);
    $.__views.__alloyId956 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId956"
    });
    $.__views.payment4.add($.__views.__alloyId956);
    $.__views.__alloyId957 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1454"
    });
    $.__views.__alloyId1453.add($.__views.__alloyId1454);
=======
        id: "__alloyId957"
    });
    $.__views.__alloyId956.add($.__views.__alloyId957);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment4.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1455 = Ti.UI.createLabel({
        text: "Payment Confirmation",
        color: "black",
        top: "20",
        id: "__alloyId1455"
    });
    $.__views.scrollView.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createView({
=======
    $.__views.__alloyId958 = Ti.UI.createLabel({
        text: "Payment Confirmation",
        color: "black",
        top: "20",
        id: "__alloyId958"
    });
    $.__views.scrollView.add($.__views.__alloyId958);
    $.__views.__alloyId959 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        top: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1456"
    });
    $.__views.scrollView.add($.__views.__alloyId1456);
=======
        id: "__alloyId959"
    });
    $.__views.scrollView.add($.__views.__alloyId959);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId1457 = Ti.UI.createButton({
=======
    $.__views.__alloyId960 = Ti.UI.createButton({
>>>>>>> origin/master
        title: "Done",
        color: "red",
        borderColor: "red",
        backgroundColor: "white",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
<<<<<<< HEAD
        id: "__alloyId1457"
    });
    $.__views.scrollView.add($.__views.__alloyId1457);
    done ? $.__views.__alloyId1457.addEventListener("click", done) : __defers["$.__views.__alloyId1457!click!done"] = true;
=======
        id: "__alloyId960"
    });
    $.__views.scrollView.add($.__views.__alloyId960);
    done ? $.__views.__alloyId960.addEventListener("click", done) : __defers["$.__views.__alloyId960!click!done"] = true;
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.amount.text = "Amount (RM): RM" + Ti.App.Properties.getString("amount");
    $.method.text = "Payment Method: " + Ti.App.Properties.getString("method");
<<<<<<< HEAD
    __defers["$.__views.__alloyId1457!click!done"] && $.__views.__alloyId1457.addEventListener("click", done);
=======
    __defers["$.__views.__alloyId960!click!done"] && $.__views.__alloyId960.addEventListener("click", done);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;