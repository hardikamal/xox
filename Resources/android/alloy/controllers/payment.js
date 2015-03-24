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
<<<<<<< Updated upstream
        DRAWER.navigation("myAccount", 1);
    }
    function paymentPostpaid() {
        DRAWER.navigation("payment2", 1);
    }
    function paymentPrepaid() {
        DRAWER.navigation("payment3", 1);
=======
        DRAWER.navigation("myAccount", 2);
    }
    function paymentValue(e) {
        Ti.App.Properties.setString("amount", e.source.mod);
        DRAWER.navigation("payment2", 2);
>>>>>>> Stashed changes
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
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1459 = Alloy.createController("_header", {
        id: "__alloyId1459",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1403 = Alloy.createController("_header", {
        id: "__alloyId1403",
=======
    $.__views.__alloyId1459 = Alloy.createController("_header", {
        id: "__alloyId1459",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1459 = Alloy.createController("_header", {
        id: "__alloyId1459",
>>>>>>> origin/master
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId1459.setParent($.__views.payment);
    $.__views.__alloyId1460 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1460"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.payment.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.payment.add($.__views.__alloyId1404);
    $.__views.__alloyId1405 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1232 = Alloy.createController("_header", {
        id: "__alloyId1232",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId1232.setParent($.__views.payment);
    $.__views.__alloyId1233 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1233"
    });
    $.__views.payment.add($.__views.__alloyId1233);
    $.__views.__alloyId1234 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId394 = Alloy.createController("_header", {
        id: "__alloyId394",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId394.setParent($.__views.payment);
    $.__views.__alloyId395 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId395"
    });
    $.__views.payment.add($.__views.__alloyId395);
    $.__views.__alloyId396 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.payment.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.payment.add($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1461"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1405"
    });
    $.__views.__alloyId1404.add($.__views.__alloyId1405);
    $.__views.__alloyId1406 = Ti.UI.createImageView({
=======
        id: "__alloyId1234"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1234);
    $.__views.__alloyId1235 = Ti.UI.createImageView({
>>>>>>> origin/master
=======
        id: "__alloyId396"
    });
    $.__views.__alloyId395.add($.__views.__alloyId396);
    $.__views.__alloyId397 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1461"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1461"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1462"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1462);
    back ? $.__views.__alloyId1462.addEventListener("click", back) : __defers["$.__views.__alloyId1462!click!back"] = true;
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1406"
    });
    $.__views.__alloyId1404.add($.__views.__alloyId1406);
    back ? $.__views.__alloyId1406.addEventListener("click", back) : __defers["$.__views.__alloyId1406!click!back"] = true;
=======
        id: "__alloyId1235"
    });
    $.__views.__alloyId1233.add($.__views.__alloyId1235);
    back ? $.__views.__alloyId1235.addEventListener("click", back) : __defers["$.__views.__alloyId1235!click!back"] = true;
>>>>>>> origin/master
=======
        id: "__alloyId397"
    });
    $.__views.__alloyId395.add($.__views.__alloyId397);
    back ? $.__views.__alloyId397.addEventListener("click", back) : __defers["$.__views.__alloyId397!click!back"] = true;
>>>>>>> Stashed changes
=======
        id: "__alloyId1462"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1462);
    back ? $.__views.__alloyId1462.addEventListener("click", back) : __defers["$.__views.__alloyId1462!click!back"] = true;
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1462"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1462);
    back ? $.__views.__alloyId1462.addEventListener("click", back) : __defers["$.__views.__alloyId1462!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment.add($.__views.scrollView);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1463 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1407 = Ti.UI.createView({
=======
    $.__views.__alloyId1236 = Ti.UI.createView({
>>>>>>> origin/master
=======
    $.__views.__alloyId1463 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1463 = Ti.UI.createView({
>>>>>>> origin/master
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId1406!click!back"] && $.__views.__alloyId1406.addEventListener("click", back);
    __defers["$.__views.__alloyId1408!click!paymentPostpaid"] && $.__views.__alloyId1408.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1410!click!paymentPostpaid"] && $.__views.__alloyId1410.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1412!click!paymentPrepaid"] && $.__views.__alloyId1412.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1414!click!paymentPrepaid"] && $.__views.__alloyId1414.addEventListener("click", paymentPrepaid);
=======
    __defers["$.__views.__alloyId1235!click!back"] && $.__views.__alloyId1235.addEventListener("click", back);
    __defers["$.__views.__alloyId1237!click!paymentPostpaid"] && $.__views.__alloyId1237.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1239!click!paymentPostpaid"] && $.__views.__alloyId1239.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1241!click!paymentPrepaid"] && $.__views.__alloyId1241.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1243!click!paymentPrepaid"] && $.__views.__alloyId1243.addEventListener("click", paymentPrepaid);
>>>>>>> origin/master
=======
    $.__views.__alloyId398 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        id: "__alloyId398"
    });
    $.__views.scrollView.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        textAlign: "center",
        id: "__alloyId399"
    });
    $.__views.scrollView.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        bottom: "10",
        id: "__alloyId400"
    });
    $.__views.scrollView.add($.__views.__alloyId400);
    $.__views.__alloyId401 = Ti.UI.createLabel({
        text: "How much to top up?",
        color: "black",
        bottom: "10",
        id: "__alloyId401"
    });
    $.__views.scrollView.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "90%",
        id: "__alloyId402"
    });
    $.__views.scrollView.add($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "49%",
        borderRadius: "15",
        mod: "10",
        id: "__alloyId403"
    });
    $.__views.__alloyId402.add($.__views.__alloyId403);
    paymentValue ? $.__views.__alloyId403.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId403!click!paymentValue"] = true;
    $.__views.__alloyId404 = Ti.UI.createLabel({
        text: "RM 10",
        color: "white",
        textAlign: "center",
        mod: "10",
        id: "__alloyId404"
    });
    $.__views.__alloyId403.add($.__views.__alloyId404);
    $.__views.__alloyId405 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "2%",
        id: "__alloyId405"
    });
    $.__views.__alloyId402.add($.__views.__alloyId405);
    $.__views.__alloyId406 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "auto",
        borderRadius: "15",
        mod: "20",
        id: "__alloyId406"
    });
    $.__views.__alloyId402.add($.__views.__alloyId406);
    paymentValue ? $.__views.__alloyId406.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId406!click!paymentValue"] = true;
    $.__views.__alloyId407 = Ti.UI.createLabel({
        text: "RM 20",
        color: "white",
        textAlign: "center",
        mod: "20",
        id: "__alloyId407"
    });
    $.__views.__alloyId406.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "90%",
        top: "10",
        id: "__alloyId408"
    });
    $.__views.scrollView.add($.__views.__alloyId408);
    $.__views.__alloyId409 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "49%",
        borderRadius: "15",
        mod: "50",
        id: "__alloyId409"
    });
    $.__views.__alloyId408.add($.__views.__alloyId409);
    paymentValue ? $.__views.__alloyId409.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId409!click!paymentValue"] = true;
    $.__views.__alloyId410 = Ti.UI.createLabel({
        text: "RM 50",
        color: "white",
        textAlign: "center",
        mod: "50",
        id: "__alloyId410"
    });
    $.__views.__alloyId409.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "2%",
        id: "__alloyId411"
    });
    $.__views.__alloyId408.add($.__views.__alloyId411);
    $.__views.__alloyId412 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "auto",
        borderRadius: "15",
        mod: "100",
        id: "__alloyId412"
    });
    $.__views.__alloyId408.add($.__views.__alloyId412);
    paymentValue ? $.__views.__alloyId412.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId412!click!paymentValue"] = true;
    $.__views.__alloyId413 = Ti.UI.createLabel({
        text: "RM 100",
        color: "white",
        textAlign: "center",
        mod: "100",
        id: "__alloyId413"
    });
    $.__views.__alloyId412.add($.__views.__alloyId413);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId397!click!back"] && $.__views.__alloyId397.addEventListener("click", back);
    __defers["$.__views.__alloyId403!click!paymentValue"] && $.__views.__alloyId403.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId406!click!paymentValue"] && $.__views.__alloyId406.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId409!click!paymentValue"] && $.__views.__alloyId409.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId412!click!paymentValue"] && $.__views.__alloyId412.addEventListener("click", paymentValue);
>>>>>>> Stashed changes
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    __defers["$.__views.__alloyId1462!click!back"] && $.__views.__alloyId1462.addEventListener("click", back);
    __defers["$.__views.__alloyId1464!click!paymentPostpaid"] && $.__views.__alloyId1464.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1466!click!paymentPostpaid"] && $.__views.__alloyId1466.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1468!click!paymentPrepaid"] && $.__views.__alloyId1468.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1470!click!paymentPrepaid"] && $.__views.__alloyId1470.addEventListener("click", paymentPrepaid);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;