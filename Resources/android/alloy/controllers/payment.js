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
    $.__views.__alloyId505 = Alloy.createController("_header", {
        id: "__alloyId505",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId505.setParent($.__views.payment);
    $.__views.__alloyId506 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId506"
    });
    $.__views.payment.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId507"
    });
    $.__views.__alloyId506.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId508"
    });
    $.__views.__alloyId506.add($.__views.__alloyId508);
    back ? $.__views.__alloyId508.addEventListener("click", back) : __defers["$.__views.__alloyId508!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment.add($.__views.scrollView);
    $.__views.__alloyId509 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        id: "__alloyId509"
    });
    $.__views.scrollView.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        textAlign: "center",
        id: "__alloyId510"
    });
    $.__views.scrollView.add($.__views.__alloyId510);
    $.__views.__alloyId511 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        bottom: "10",
        id: "__alloyId511"
    });
    $.__views.scrollView.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createLabel({
        text: "How much to top up?",
        color: "black",
        bottom: "10",
        id: "__alloyId512"
    });
    $.__views.scrollView.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "90%",
        id: "__alloyId513"
    });
    $.__views.scrollView.add($.__views.__alloyId513);
    $.__views.__alloyId514 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "49%",
        borderRadius: "15",
        mod: "10",
        id: "__alloyId514"
    });
    $.__views.__alloyId513.add($.__views.__alloyId514);
    paymentValue ? $.__views.__alloyId514.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId514!click!paymentValue"] = true;
    $.__views.__alloyId515 = Ti.UI.createLabel({
        text: "RM 10",
        color: "white",
        textAlign: "center",
        mod: "10",
        id: "__alloyId515"
    });
    $.__views.__alloyId514.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "2%",
        id: "__alloyId516"
    });
    $.__views.__alloyId513.add($.__views.__alloyId516);
    $.__views.__alloyId517 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "auto",
        borderRadius: "15",
        mod: "20",
        id: "__alloyId517"
    });
    $.__views.__alloyId513.add($.__views.__alloyId517);
    paymentValue ? $.__views.__alloyId517.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId517!click!paymentValue"] = true;
    $.__views.__alloyId518 = Ti.UI.createLabel({
        text: "RM 20",
        color: "white",
        textAlign: "center",
        mod: "20",
        id: "__alloyId518"
    });
    $.__views.__alloyId517.add($.__views.__alloyId518);
    $.__views.__alloyId519 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "90%",
        top: "10",
        id: "__alloyId519"
    });
    $.__views.scrollView.add($.__views.__alloyId519);
    $.__views.__alloyId520 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "49%",
        borderRadius: "15",
        mod: "50",
        id: "__alloyId520"
    });
    $.__views.__alloyId519.add($.__views.__alloyId520);
    paymentValue ? $.__views.__alloyId520.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId520!click!paymentValue"] = true;
    $.__views.__alloyId521 = Ti.UI.createLabel({
        text: "RM 50",
        color: "white",
        textAlign: "center",
        mod: "50",
        id: "__alloyId521"
    });
    $.__views.__alloyId520.add($.__views.__alloyId521);
    $.__views.__alloyId522 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "2%",
        id: "__alloyId522"
    });
    $.__views.__alloyId519.add($.__views.__alloyId522);
    $.__views.__alloyId523 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "auto",
        borderRadius: "15",
        mod: "100",
        id: "__alloyId523"
    });
    $.__views.__alloyId519.add($.__views.__alloyId523);
    paymentValue ? $.__views.__alloyId523.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId523!click!paymentValue"] = true;
    $.__views.__alloyId524 = Ti.UI.createLabel({
        text: "RM 100",
        color: "white",
        textAlign: "center",
        mod: "100",
        id: "__alloyId524"
    });
    $.__views.__alloyId523.add($.__views.__alloyId524);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId508!click!back"] && $.__views.__alloyId508.addEventListener("click", back);
    __defers["$.__views.__alloyId514!click!paymentValue"] && $.__views.__alloyId514.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId517!click!paymentValue"] && $.__views.__alloyId517.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId520!click!paymentValue"] && $.__views.__alloyId520.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId523!click!paymentValue"] && $.__views.__alloyId523.addEventListener("click", paymentValue);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;