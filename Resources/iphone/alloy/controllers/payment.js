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
    $.__views.__alloyId1347 = Alloy.createController("_header", {
        id: "__alloyId1347",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId1347.setParent($.__views.payment);
    $.__views.__alloyId1348 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1348"
    });
    $.__views.payment.add($.__views.__alloyId1348);
    $.__views.__alloyId1349 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1349"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1349);
    $.__views.__alloyId1350 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1350"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1350);
    back ? $.__views.__alloyId1350.addEventListener("click", back) : __defers["$.__views.__alloyId1350!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment.add($.__views.scrollView);
    $.__views.__alloyId1351 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1351"
    });
    $.__views.scrollView.add($.__views.__alloyId1351);
    $.__views.__alloyId1352 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1352"
    });
    $.__views.__alloyId1351.add($.__views.__alloyId1352);
    paymentPostpaid ? $.__views.__alloyId1352.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1352!click!paymentPostpaid"] = true;
    $.__views.__alloyId1353 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1353"
    });
    $.__views.__alloyId1352.add($.__views.__alloyId1353);
    $.__views.__alloyId1354 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1354"
    });
    $.__views.__alloyId1351.add($.__views.__alloyId1354);
    paymentPostpaid ? $.__views.__alloyId1354.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1354!click!paymentPostpaid"] = true;
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1354.add($.__views.arrow1);
    $.__views.__alloyId1355 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1355"
    });
    $.__views.scrollView.add($.__views.__alloyId1355);
    $.__views.__alloyId1356 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1356"
    });
    $.__views.__alloyId1355.add($.__views.__alloyId1356);
    paymentPrepaid ? $.__views.__alloyId1356.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1356!click!paymentPrepaid"] = true;
    $.__views.__alloyId1357 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1357"
    });
    $.__views.__alloyId1356.add($.__views.__alloyId1357);
    $.__views.__alloyId1358 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1358"
    });
    $.__views.__alloyId1355.add($.__views.__alloyId1358);
    paymentPrepaid ? $.__views.__alloyId1358.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1358!click!paymentPrepaid"] = true;
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1358.add($.__views.arrow2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId1350!click!back"] && $.__views.__alloyId1350.addEventListener("click", back);
    __defers["$.__views.__alloyId1352!click!paymentPostpaid"] && $.__views.__alloyId1352.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1354!click!paymentPostpaid"] && $.__views.__alloyId1354.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1356!click!paymentPrepaid"] && $.__views.__alloyId1356.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1358!click!paymentPrepaid"] && $.__views.__alloyId1358.addEventListener("click", paymentPrepaid);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;