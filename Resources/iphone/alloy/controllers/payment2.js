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
        DRAWER.navigation("payment", 2);
    }
    function paymentMethod(e) {
        Ti.App.Properties.setString("method", e.source.mod);
        DRAWER.navigation("payment3", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment2";
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
    $.__views.payment2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment2"
    });
    $.__views.payment2 && $.addTopLevelView($.__views.payment2);
<<<<<<< HEAD
    $.__views.__alloyId413 = Alloy.createController("_header", {
        id: "__alloyId413",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId413.setParent($.__views.payment2);
    $.__views.__alloyId414 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId414"
    });
    $.__views.payment2.add($.__views.__alloyId414);
    $.__views.__alloyId415 = Ti.UI.createLabel({
=======
    $.__views.__alloyId624 = Alloy.createController("_header", {
        id: "__alloyId624",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId624.setParent($.__views.payment2);
    $.__views.__alloyId625 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId625"
    });
    $.__views.payment2.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId415"
    });
    $.__views.__alloyId414.add($.__views.__alloyId415);
    $.__views.__alloyId416 = Ti.UI.createImageView({
=======
        id: "__alloyId626"
    });
    $.__views.__alloyId625.add($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId416"
    });
    $.__views.__alloyId414.add($.__views.__alloyId416);
    back ? $.__views.__alloyId416.addEventListener("click", back) : __defers["$.__views.__alloyId416!click!back"] = true;
=======
        id: "__alloyId627"
    });
    $.__views.__alloyId625.add($.__views.__alloyId627);
    back ? $.__views.__alloyId627.addEventListener("click", back) : __defers["$.__views.__alloyId627!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment2.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId417 = Ti.UI.createLabel({
        text: "Choose payment method:",
        color: "black",
        top: "20",
        id: "__alloyId417"
    });
    $.__views.scrollView.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createView({
=======
    $.__views.__alloyId628 = Ti.UI.createLabel({
        text: "Choose payment method:",
        color: "black",
        top: "20",
        id: "__alloyId628"
    });
    $.__views.scrollView.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#4CC4D2",
        height: "20%",
        width: "90%",
        top: "10",
        mod: "Online Banking",
        borderRadius: "15",
<<<<<<< HEAD
        id: "__alloyId418"
    });
    $.__views.scrollView.add($.__views.__alloyId418);
    paymentMethod ? $.__views.__alloyId418.addEventListener("click", paymentMethod) : __defers["$.__views.__alloyId418!click!paymentMethod"] = true;
    $.__views.__alloyId419 = Ti.UI.createLabel({
=======
        id: "__alloyId629"
    });
    $.__views.scrollView.add($.__views.__alloyId629);
    paymentMethod ? $.__views.__alloyId629.addEventListener("click", paymentMethod) : __defers["$.__views.__alloyId629!click!paymentMethod"] = true;
    $.__views.__alloyId630 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Online Banking",
        color: "white",
        textAlign: "center",
        mod: "10",
<<<<<<< HEAD
        id: "__alloyId419"
    });
    $.__views.__alloyId418.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createView({
=======
        id: "__alloyId630"
    });
    $.__views.__alloyId629.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#4CC4D2",
        height: "20%",
        width: "90%",
        top: "10",
        mod: "Credit Card",
        borderRadius: "15",
<<<<<<< HEAD
        id: "__alloyId420"
    });
    $.__views.scrollView.add($.__views.__alloyId420);
    paymentMethod ? $.__views.__alloyId420.addEventListener("click", paymentMethod) : __defers["$.__views.__alloyId420!click!paymentMethod"] = true;
    $.__views.__alloyId421 = Ti.UI.createLabel({
=======
        id: "__alloyId631"
    });
    $.__views.scrollView.add($.__views.__alloyId631);
    paymentMethod ? $.__views.__alloyId631.addEventListener("click", paymentMethod) : __defers["$.__views.__alloyId631!click!paymentMethod"] = true;
    $.__views.__alloyId632 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Credit Card",
        color: "white",
        textAlign: "center",
        mod: "10",
<<<<<<< HEAD
        id: "__alloyId421"
    });
    $.__views.__alloyId420.add($.__views.__alloyId421);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId416!click!back"] && $.__views.__alloyId416.addEventListener("click", back);
    __defers["$.__views.__alloyId418!click!paymentMethod"] && $.__views.__alloyId418.addEventListener("click", paymentMethod);
    __defers["$.__views.__alloyId420!click!paymentMethod"] && $.__views.__alloyId420.addEventListener("click", paymentMethod);
=======
        id: "__alloyId632"
    });
    $.__views.__alloyId631.add($.__views.__alloyId632);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId627!click!back"] && $.__views.__alloyId627.addEventListener("click", back);
    __defers["$.__views.__alloyId629!click!paymentMethod"] && $.__views.__alloyId629.addEventListener("click", paymentMethod);
    __defers["$.__views.__alloyId631!click!paymentMethod"] && $.__views.__alloyId631.addEventListener("click", paymentMethod);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;