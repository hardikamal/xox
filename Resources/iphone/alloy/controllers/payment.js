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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    $.__views.__alloyId1538 = Alloy.createController("_header", {
        id: "__alloyId1538",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId1538.setParent($.__views.payment);
    $.__views.__alloyId1539 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1539"
    });
    $.__views.payment.add($.__views.__alloyId1539);
    $.__views.__alloyId1540 = Ti.UI.createLabel({
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1349"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1349);
    $.__views.__alloyId1350 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1540"
    });
    $.__views.__alloyId1539.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createImageView({
=======
        id: "__alloyId1349"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1349);
    $.__views.__alloyId1350 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1541"
    });
    $.__views.__alloyId1539.add($.__views.__alloyId1541);
    back ? $.__views.__alloyId1541.addEventListener("click", back) : __defers["$.__views.__alloyId1541!click!back"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1350"
    });
    $.__views.__alloyId1348.add($.__views.__alloyId1350);
    back ? $.__views.__alloyId1350.addEventListener("click", back) : __defers["$.__views.__alloyId1350!click!back"] = true;
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1351 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1542 = Ti.UI.createView({
=======
    $.__views.__alloyId1351 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1542"
    });
    $.__views.scrollView.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1543"
    });
    $.__views.__alloyId1542.add($.__views.__alloyId1543);
    paymentPostpaid ? $.__views.__alloyId1543.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1543!click!paymentPostpaid"] = true;
    $.__views.__alloyId1544 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        id: "__alloyId1544"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1545"
    });
    $.__views.__alloyId1542.add($.__views.__alloyId1545);
    paymentPostpaid ? $.__views.__alloyId1545.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1545!click!paymentPostpaid"] = true;
=======
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
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1354.add($.__views.arrow1);
    $.__views.__alloyId1355 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1545.add($.__views.arrow1);
    $.__views.__alloyId1546 = Ti.UI.createView({
=======
    $.__views.__alloyId1354.add($.__views.arrow1);
    $.__views.__alloyId1355 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1546"
    });
    $.__views.scrollView.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1547"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1547);
    paymentPrepaid ? $.__views.__alloyId1547.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1547!click!paymentPrepaid"] = true;
    $.__views.__alloyId1548 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1548"
    });
    $.__views.__alloyId1547.add($.__views.__alloyId1548);
    $.__views.__alloyId1549 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1549"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1549);
    paymentPrepaid ? $.__views.__alloyId1549.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1549!click!paymentPrepaid"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1358.add($.__views.arrow2);
=======
<<<<<<< HEAD
    $.__views.__alloyId1549.add($.__views.arrow2);
=======
    $.__views.__alloyId1358.add($.__views.arrow2);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1541!click!back"] && $.__views.__alloyId1541.addEventListener("click", back);
    __defers["$.__views.__alloyId1543!click!paymentPostpaid"] && $.__views.__alloyId1543.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1545!click!paymentPostpaid"] && $.__views.__alloyId1545.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1547!click!paymentPrepaid"] && $.__views.__alloyId1547.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1549!click!paymentPrepaid"] && $.__views.__alloyId1549.addEventListener("click", paymentPrepaid);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    __defers["$.__views.__alloyId1350!click!back"] && $.__views.__alloyId1350.addEventListener("click", back);
    __defers["$.__views.__alloyId1352!click!paymentPostpaid"] && $.__views.__alloyId1352.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1354!click!paymentPostpaid"] && $.__views.__alloyId1354.addEventListener("click", paymentPostpaid);
    __defers["$.__views.__alloyId1356!click!paymentPrepaid"] && $.__views.__alloyId1356.addEventListener("click", paymentPrepaid);
    __defers["$.__views.__alloyId1358!click!paymentPrepaid"] && $.__views.__alloyId1358.addEventListener("click", paymentPrepaid);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;