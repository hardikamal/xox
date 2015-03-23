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
        DRAWER.navigation("payment2", 1);
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
    $.__views.__alloyId883 = Alloy.createController("_header", {
        id: "__alloyId883",
        __parentSymbol: $.__views.payment
    });
    $.__views.__alloyId883.setParent($.__views.payment);
    $.__views.__alloyId884 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId884"
    });
    $.__views.payment.add($.__views.__alloyId884);
    $.__views.__alloyId885 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId885"
    });
    $.__views.__alloyId884.add($.__views.__alloyId885);
    $.__views.__alloyId886 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId886"
    });
    $.__views.__alloyId884.add($.__views.__alloyId886);
    back ? $.__views.__alloyId886.addEventListener("click", back) : __defers["$.__views.__alloyId886!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment.add($.__views.scrollView);
    $.__views.__alloyId887 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        id: "__alloyId887"
    });
    $.__views.scrollView.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        textAlign: "center",
        id: "__alloyId888"
    });
    $.__views.scrollView.add($.__views.__alloyId888);
    $.__views.__alloyId889 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        bottom: "10",
        id: "__alloyId889"
    });
    $.__views.scrollView.add($.__views.__alloyId889);
    $.__views.__alloyId890 = Ti.UI.createLabel({
        text: "How much to top up?",
        color: "black",
        bottom: "10",
        id: "__alloyId890"
    });
    $.__views.scrollView.add($.__views.__alloyId890);
    $.__views.__alloyId891 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "90%",
        id: "__alloyId891"
    });
    $.__views.scrollView.add($.__views.__alloyId891);
    $.__views.__alloyId892 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "49%",
        borderRadius: "15",
        mod: "10",
        id: "__alloyId892"
    });
    $.__views.__alloyId891.add($.__views.__alloyId892);
    paymentValue ? $.__views.__alloyId892.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId892!click!paymentValue"] = true;
    $.__views.__alloyId893 = Ti.UI.createLabel({
        text: "RM 10",
        color: "white",
        textAlign: "center",
        mod: "10",
        id: "__alloyId893"
    });
    $.__views.__alloyId892.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "2%",
        id: "__alloyId894"
    });
    $.__views.__alloyId891.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "auto",
        borderRadius: "15",
        mod: "20",
        id: "__alloyId895"
    });
    $.__views.__alloyId891.add($.__views.__alloyId895);
    paymentValue ? $.__views.__alloyId895.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId895!click!paymentValue"] = true;
    $.__views.__alloyId896 = Ti.UI.createLabel({
        text: "RM 20",
        color: "white",
        textAlign: "center",
        mod: "20",
        id: "__alloyId896"
    });
    $.__views.__alloyId895.add($.__views.__alloyId896);
    $.__views.__alloyId897 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "90%",
        top: "10",
        id: "__alloyId897"
    });
    $.__views.scrollView.add($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "49%",
        borderRadius: "15",
        mod: "50",
        id: "__alloyId898"
    });
    $.__views.__alloyId897.add($.__views.__alloyId898);
    paymentValue ? $.__views.__alloyId898.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId898!click!paymentValue"] = true;
    $.__views.__alloyId899 = Ti.UI.createLabel({
        text: "RM 50",
        color: "white",
        textAlign: "center",
        mod: "50",
        id: "__alloyId899"
    });
    $.__views.__alloyId898.add($.__views.__alloyId899);
    $.__views.__alloyId900 = Ti.UI.createView({
        backgroundColor: "white",
        height: "100%",
        width: "2%",
        id: "__alloyId900"
    });
    $.__views.__alloyId897.add($.__views.__alloyId900);
    $.__views.__alloyId901 = Ti.UI.createView({
        backgroundColor: "#4CC4D2",
        height: "100%",
        width: "auto",
        borderRadius: "15",
        mod: "100",
        id: "__alloyId901"
    });
    $.__views.__alloyId897.add($.__views.__alloyId901);
    paymentValue ? $.__views.__alloyId901.addEventListener("click", paymentValue) : __defers["$.__views.__alloyId901!click!paymentValue"] = true;
    $.__views.__alloyId902 = Ti.UI.createLabel({
        text: "RM 100",
        color: "white",
        textAlign: "center",
        mod: "100",
        id: "__alloyId902"
    });
    $.__views.__alloyId901.add($.__views.__alloyId902);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId886!click!back"] && $.__views.__alloyId886.addEventListener("click", back);
    __defers["$.__views.__alloyId892!click!paymentValue"] && $.__views.__alloyId892.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId895!click!paymentValue"] && $.__views.__alloyId895.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId898!click!paymentValue"] && $.__views.__alloyId898.addEventListener("click", paymentValue);
    __defers["$.__views.__alloyId901!click!paymentValue"] && $.__views.__alloyId901.addEventListener("click", paymentValue);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;