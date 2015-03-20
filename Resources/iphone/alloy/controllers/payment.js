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
    $.__views.__alloyId896 = Alloy.createController("_header", {
        id: "__alloyId896",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId896.setParent($.__views.payment);
    $.__views.__alloyId897 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId897"
    });
    $.__views.payment.add($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId898"
    });
    $.__views.__alloyId897.add($.__views.__alloyId898);
    $.__views.__alloyId899 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId899"
    });
    $.__views.__alloyId897.add($.__views.__alloyId899);
    back ? $.__views.__alloyId899.addEventListener("click", back) : __defers["$.__views.__alloyId899!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment.add($.__views.scrollView);
    $.__views.__alloyId900 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId900"
    });
    $.__views.scrollView.add($.__views.__alloyId900);
    $.__views.__alloyId901 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId901"
    });
    $.__views.__alloyId900.add($.__views.__alloyId901);
    paymentPostpaid ? $.__views.__alloyId901.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId901!click!paymentPostpaid"] = true;
    $.__views.__alloyId902 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId902"
    });
    $.__views.__alloyId901.add($.__views.__alloyId902);
    $.__views.__alloyId903 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId903"
    });
    $.__views.__alloyId900.add($.__views.__alloyId903);
    paymentPostpaid ? $.__views.__alloyId903.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId903!click!paymentPostpaid"] = true;
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId903.add($.__views.arrow1);
    $.__views.__alloyId904 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId904"
    });
    $.__views.scrollView.add($.__views.__alloyId904);
    $.__views.__alloyId905 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId905"
    });
    $.__views.__alloyId904.add($.__views.__alloyId905);
    paymentPrepaid ? $.__views.__alloyId905.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId905!click!paymentPrepaid"] = true;
    $.__views.__alloyId906 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId906"
    });
    $.__views.__alloyId905.add($.__views.__alloyId906);
    $.__views.__alloyId907 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId907"
    });
    $.__views.__alloyId904.add($.__views.__alloyId907);
    paymentPrepaid ? $.__views.__alloyId907.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId907!click!paymentPrepaid"] = true;
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId907.add($.__views.arrow2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId899!click!back"] && $.__views.__alloyId899.addEventListener("click", back);
    __defers["$.__views.__alloyId901!click!paymentPostpaid"] && $.__views.__alloyId901.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId903!click!paymentPostpaid"] && $.__views.__alloyId903.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId905!click!paymentPrepaid"] && $.__views.__alloyId905.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId907!click!paymentPrepaid"] && $.__views.__alloyId907.addEventListener("click", paymentPrepaid);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;