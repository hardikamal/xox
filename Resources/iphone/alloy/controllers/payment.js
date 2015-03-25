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
    $.__views.__alloyId1598 = Alloy.createController("_header", {
        id: "__alloyId1598",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId1598.setParent($.__views.payment);
    $.__views.__alloyId1599 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1599"
    });
    $.__views.payment.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1600"
    });
    $.__views.__alloyId1599.add($.__views.__alloyId1600);
    $.__views.__alloyId1601 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1601"
    });
    $.__views.__alloyId1599.add($.__views.__alloyId1601);
    back ? $.__views.__alloyId1601.addEventListener("click", back) : __defers["$.__views.__alloyId1601!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment.add($.__views.scrollView);
    $.__views.__alloyId1602 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1602"
    });
    $.__views.scrollView.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1603"
    });
    $.__views.__alloyId1602.add($.__views.__alloyId1603);
    paymentPostpaid ? $.__views.__alloyId1603.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1603!click!paymentPostpaid"] = true;
    $.__views.__alloyId1604 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1604"
    });
    $.__views.__alloyId1603.add($.__views.__alloyId1604);
    $.__views.__alloyId1605 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1605"
    });
    $.__views.__alloyId1602.add($.__views.__alloyId1605);
    paymentPostpaid ? $.__views.__alloyId1605.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1605!click!paymentPostpaid"] = true;
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1605.add($.__views.arrow1);
    $.__views.__alloyId1606 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1606"
    });
    $.__views.scrollView.add($.__views.__alloyId1606);
    $.__views.__alloyId1607 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1607"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1607);
    paymentPrepaid ? $.__views.__alloyId1607.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1607!click!paymentPrepaid"] = true;
    $.__views.__alloyId1608 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1608"
    });
    $.__views.__alloyId1607.add($.__views.__alloyId1608);
    $.__views.__alloyId1609 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1609"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1609);
    paymentPrepaid ? $.__views.__alloyId1609.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1609!click!paymentPrepaid"] = true;
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1609.add($.__views.arrow2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId1601!click!back"] && $.__views.__alloyId1601.addEventListener("click", back);
    __defers["$.__views.__alloyId1603!click!paymentPostpaid"] && $.__views.__alloyId1603.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1605!click!paymentPostpaid"] && $.__views.__alloyId1605.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1607!click!paymentPrepaid"] && $.__views.__alloyId1607.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1609!click!paymentPrepaid"] && $.__views.__alloyId1609.addEventListener("click", paymentPrepaid);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;