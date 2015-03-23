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
    function paymentPostpaid() {
        DRAWER.navigation("payment2", 1);
    }
    function paymentPrepaid() {
        DRAWER.navigation("payment3", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment";
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
    $.__views.payment = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment"
    });
    $.__views.payment && $.addTopLevelView($.__views.payment);
    $.__views.__alloyId1228 = Alloy.createController("_header", {
        id: "__alloyId1228",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId1228.setParent($.__views.payment);
    $.__views.__alloyId1229 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1229"
    });
    $.__views.payment.add($.__views.__alloyId1229);
    $.__views.__alloyId1230 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1230"
    });
    $.__views.__alloyId1229.add($.__views.__alloyId1230);
    $.__views.__alloyId1231 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1231"
    });
    $.__views.__alloyId1229.add($.__views.__alloyId1231);
    back ? $.__views.__alloyId1231.addEventListener("click", back) : __defers["$.__views.__alloyId1231!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment.add($.__views.scrollView);
    $.__views.__alloyId1232 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1232"
    });
    $.__views.scrollView.add($.__views.__alloyId1232);
    $.__views.__alloyId1233 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1233"
    });
    $.__views.__alloyId1232.add($.__views.__alloyId1233);
    paymentPostpaid ? $.__views.__alloyId1233.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1233!click!paymentPostpaid"] = true;
    $.__views.__alloyId1234 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1234"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1234);
    $.__views.__alloyId1235 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1235"
    });
    $.__views.__alloyId1232.add($.__views.__alloyId1235);
    paymentPostpaid ? $.__views.__alloyId1235.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1235!click!paymentPostpaid"] = true;
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1235.add($.__views.arrow1);
    $.__views.__alloyId1236 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1236"
    });
    $.__views.scrollView.add($.__views.__alloyId1236);
    $.__views.__alloyId1237 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1237"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1237);
    paymentPrepaid ? $.__views.__alloyId1237.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1237!click!paymentPrepaid"] = true;
    $.__views.__alloyId1238 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1238"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1239"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1239);
    paymentPrepaid ? $.__views.__alloyId1239.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1239!click!paymentPrepaid"] = true;
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1239.add($.__views.arrow2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId1231!click!back"] && $.__views.__alloyId1231.addEventListener("click", back);
    __defers["$.__views.__alloyId1233!click!paymentPostpaid"] && $.__views.__alloyId1233.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1235!click!paymentPostpaid"] && $.__views.__alloyId1235.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1237!click!paymentPrepaid"] && $.__views.__alloyId1237.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1239!click!paymentPrepaid"] && $.__views.__alloyId1239.addEventListener("click", paymentPrepaid);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;