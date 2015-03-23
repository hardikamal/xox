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
        DRAWER.navigation("payment2", 1);
    }
    function done() {
        DRAWER.navigation("myAccount", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment3";
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
    $.__views.payment3 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment3"
    });
    $.__views.payment3 && $.addTopLevelView($.__views.payment3);
    $.__views.__alloyId912 = Alloy.createController("_header", {
        id: "__alloyId912",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId912.setParent($.__views.payment3);
    $.__views.__alloyId913 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId913"
    });
    $.__views.payment3.add($.__views.__alloyId913);
    $.__views.__alloyId914 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId914"
    });
    $.__views.__alloyId913.add($.__views.__alloyId914);
    $.__views.__alloyId915 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId915"
    });
    $.__views.__alloyId913.add($.__views.__alloyId915);
    back ? $.__views.__alloyId915.addEventListener("click", back) : __defers["$.__views.__alloyId915!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId916 = Ti.UI.createLabel({
        text: "Payment Confirmation",
        color: "black",
        top: "20",
        id: "__alloyId916"
    });
    $.__views.scrollView.add($.__views.__alloyId916);
    $.__views.__alloyId917 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        top: "10",
        bottom: "10",
        id: "__alloyId917"
    });
    $.__views.scrollView.add($.__views.__alloyId917);
    $.__views.account = Ti.UI.createLabel({
        text: "Account No.: 011 xxxxxxx",
        id: "account",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.account);
    $.__views.amount = Ti.UI.createLabel({
        id: "amount",
        text: "left",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.amount);
    $.__views.method = Ti.UI.createLabel({
        id: "method",
        text: "left",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.method);
    $.__views.__alloyId918 = Ti.UI.createButton({
        title: "Done",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        backgroundColor: "white",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
        id: "__alloyId918"
    });
    $.__views.scrollView.add($.__views.__alloyId918);
    done ? $.__views.__alloyId918.addEventListener("click", done) : __defers["$.__views.__alloyId918!click!done"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.amount.text = "Amount (RM): RM" + Ti.App.Properties.getString("amount");
    $.method.text = "Payment Method: " + Ti.App.Properties.getString("method");
    __defers["$.__views.__alloyId915!click!back"] && $.__views.__alloyId915.addEventListener("click", back);
    __defers["$.__views.__alloyId918!click!done"] && $.__views.__alloyId918.addEventListener("click", done);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;