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
        DRAWER.navigation("myAccount", 2);
    }
    function paymentValue(e) {
        Ti.App.Properties.setString("amount", e.source.mod);
        DRAWER.navigation("payment2", 2);
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
    $.__views.__alloyId393 = Alloy.createController("_header", {
        id: "__alloyId393",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId393.setParent($.__views.payment);
    $.__views.__alloyId394 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId394"
    });
    $.__views.payment.add($.__views.__alloyId394);
    $.__views.__alloyId395 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId395"
    });
    $.__views.__alloyId394.add($.__views.__alloyId395);
    $.__views.__alloyId396 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId396"
    });
    $.__views.__alloyId394.add($.__views.__alloyId396);
    back ? $.__views.__alloyId396.addEventListener("click", back) : __defers["$.__views.__alloyId396!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment.add($.__views.scrollView);
    $.__views.__alloyId397 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        id: "__alloyId397"
    });
    $.__views.scrollView.add($.__views.__alloyId397);
    $.__views.__alloyId398 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        textAlign: "center",
        id: "__alloyId398"
    });
    $.__views.scrollView.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        bottom: "10",
        id: "__alloyId399"
    });
    $.__views.scrollView.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createLabel({
        text: "How much to top up?",
        color: "black",
        bottom: "10",
        id: "__alloyId400"
    });
    $.__views.scrollView.add($.__views.__alloyId400);
    $.__views.__alloyId401 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "90%",
        id: "__alloyId401"
    });
    $.__views.scrollView.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "49%",
        borderRadius: "15",
        mod: "10",
        id: "__alloyId402"
    });
    $.__views.__alloyId401.add($.__views.__alloyId402);
    paymentValue ? $.__views.__alloyId402.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId402!click!paymentValue"] = true;
    $.__views.__alloyId403 = Ti.UI.createLabel({
        text: "RM 10",
        color: "white",
        textAlign: "center",
        mod: "10",
        id: "__alloyId403"
    });
    $.__views.__alloyId402.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "2%",
        id: "__alloyId404"
    });
    $.__views.__alloyId401.add($.__views.__alloyId404);
    $.__views.__alloyId405 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "auto",
        borderRadius: "15",
        mod: "20",
        id: "__alloyId405"
    });
    $.__views.__alloyId401.add($.__views.__alloyId405);
    paymentValue ? $.__views.__alloyId405.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId405!click!paymentValue"] = true;
    $.__views.__alloyId406 = Ti.UI.createLabel({
        text: "RM 20",
        color: "white",
        textAlign: "center",
        mod: "20",
        id: "__alloyId406"
    });
    $.__views.__alloyId405.add($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "90%",
        top: "10",
        id: "__alloyId407"
    });
    $.__views.scrollView.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "49%",
        borderRadius: "15",
        mod: "50",
        id: "__alloyId408"
    });
    $.__views.__alloyId407.add($.__views.__alloyId408);
    paymentValue ? $.__views.__alloyId408.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId408!click!paymentValue"] = true;
    $.__views.__alloyId409 = Ti.UI.createLabel({
        text: "RM 50",
        color: "white",
        textAlign: "center",
        mod: "50",
        id: "__alloyId409"
    });
    $.__views.__alloyId408.add($.__views.__alloyId409);
    $.__views.__alloyId410 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "2%",
        id: "__alloyId410"
    });
    $.__views.__alloyId407.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "auto",
        borderRadius: "15",
        mod: "100",
        id: "__alloyId411"
    });
    $.__views.__alloyId407.add($.__views.__alloyId411);
    paymentValue ? $.__views.__alloyId411.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId411!click!paymentValue"] = true;
    $.__views.__alloyId412 = Ti.UI.createLabel({
        text: "RM 100",
        color: "white",
        textAlign: "center",
        mod: "100",
        id: "__alloyId412"
    });
    $.__views.__alloyId411.add($.__views.__alloyId412);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId396!click!back"] && $.__views.__alloyId396.addEventListener("click", back);
    __defers["$.__views.__alloyId402!click!paymentValue"] && $.__views.__alloyId402.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId405!click!paymentValue"] && $.__views.__alloyId405.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId408!click!paymentValue"] && $.__views.__alloyId408.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId411!click!paymentValue"] && $.__views.__alloyId411.addEventListener("click", paymentValue);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;