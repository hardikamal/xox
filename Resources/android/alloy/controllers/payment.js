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
    $.__views.__alloyId1459 = Alloy.createController("_header", {
        id: "__alloyId1459",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId1459.setParent($.__views.payment);
    $.__views.__alloyId1460 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1460"
    });
    $.__views.payment.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1461"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1462"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1462);
    back ? $.__views.__alloyId1462.addEventListener("click", back) : __defers["$.__views.__alloyId1462!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment.add($.__views.scrollView);
    $.__views.__alloyId1463 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1463"
    });
    $.__views.scrollView.add($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1464"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1464);
    paymentPostpaid ? $.__views.__alloyId1464.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1464!click!paymentPostpaid"] = true;
    $.__views.__alloyId1465 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1466"
    });
    $.__views.__alloyId1463.add($.__views.__alloyId1466);
    paymentPostpaid ? $.__views.__alloyId1466.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1466!click!paymentPostpaid"] = true;
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1466.add($.__views.arrow1);
    $.__views.__alloyId1467 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1467"
    });
    $.__views.scrollView.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1468"
    });
    $.__views.__alloyId1467.add($.__views.__alloyId1468);
    paymentPrepaid ? $.__views.__alloyId1468.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1468!click!paymentPrepaid"] = true;
    $.__views.__alloyId1469 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1470"
    });
    $.__views.__alloyId1467.add($.__views.__alloyId1470);
    paymentPrepaid ? $.__views.__alloyId1470.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1470!click!paymentPrepaid"] = true;
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1470.add($.__views.arrow2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId1462!click!back"] && $.__views.__alloyId1462.addEventListener("click", back);
    __defers["$.__views.__alloyId1464!click!paymentPostpaid"] && $.__views.__alloyId1464.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1466!click!paymentPostpaid"] && $.__views.__alloyId1466.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1468!click!paymentPrepaid"] && $.__views.__alloyId1468.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1470!click!paymentPrepaid"] && $.__views.__alloyId1470.addEventListener("click", paymentPrepaid);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;