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
    $.__views.__alloyId1403 = Alloy.createController("_header", {
        id: "__alloyId1403",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId1403.setParent($.__views.payment);
    $.__views.__alloyId1404 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1404"
    });
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
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
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
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1407 = Ti.UI.createView({
=======
    $.__views.__alloyId1236 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1407"
    });
    $.__views.scrollView.add($.__views.__alloyId1407);
    $.__views.__alloyId1408 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1408"
    });
    $.__views.__alloyId1407.add($.__views.__alloyId1408);
    paymentPostpaid ? $.__views.__alloyId1408.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1408!click!paymentPostpaid"] = true;
    $.__views.__alloyId1409 = Ti.UI.createLabel({
=======
        id: "__alloyId1236"
    });
    $.__views.scrollView.add($.__views.__alloyId1236);
    $.__views.__alloyId1237 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1237"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1237);
    paymentPostpaid ? $.__views.__alloyId1237.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1237!click!paymentPostpaid"] = true;
    $.__views.__alloyId1238 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1409"
    });
    $.__views.__alloyId1408.add($.__views.__alloyId1409);
    $.__views.__alloyId1410 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1410"
    });
    $.__views.__alloyId1407.add($.__views.__alloyId1410);
    paymentPostpaid ? $.__views.__alloyId1410.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1410!click!paymentPostpaid"] = true;
=======
        id: "__alloyId1238"
    });
    $.__views.__alloyId1237.add($.__views.__alloyId1238);
    $.__views.__alloyId1239 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1239"
    });
    $.__views.__alloyId1236.add($.__views.__alloyId1239);
    paymentPostpaid ? $.__views.__alloyId1239.addEventListener("click", paymentPostpaid) : __defers["$.__views.__alloyId1239!click!paymentPostpaid"] = true;
>>>>>>> origin/master
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1410.add($.__views.arrow1);
    $.__views.__alloyId1411 = Ti.UI.createView({
=======
    $.__views.__alloyId1239.add($.__views.arrow1);
    $.__views.__alloyId1240 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1411"
    });
    $.__views.scrollView.add($.__views.__alloyId1411);
    $.__views.__alloyId1412 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1412"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1412);
    paymentPrepaid ? $.__views.__alloyId1412.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1412!click!paymentPrepaid"] = true;
    $.__views.__alloyId1413 = Ti.UI.createLabel({
=======
        id: "__alloyId1240"
    });
    $.__views.scrollView.add($.__views.__alloyId1240);
    $.__views.__alloyId1241 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1241"
    });
    $.__views.__alloyId1240.add($.__views.__alloyId1241);
    paymentPrepaid ? $.__views.__alloyId1241.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1241!click!paymentPrepaid"] = true;
    $.__views.__alloyId1242 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1413"
    });
    $.__views.__alloyId1412.add($.__views.__alloyId1413);
    $.__views.__alloyId1414 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1414"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1414);
    paymentPrepaid ? $.__views.__alloyId1414.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1414!click!paymentPrepaid"] = true;
=======
        id: "__alloyId1242"
    });
    $.__views.__alloyId1241.add($.__views.__alloyId1242);
    $.__views.__alloyId1243 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1243"
    });
    $.__views.__alloyId1240.add($.__views.__alloyId1243);
    paymentPrepaid ? $.__views.__alloyId1243.addEventListener("click", paymentPrepaid) : __defers["$.__views.__alloyId1243!click!paymentPrepaid"] = true;
>>>>>>> origin/master
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1414.add($.__views.arrow2);
=======
    $.__views.__alloyId1243.add($.__views.arrow2);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;