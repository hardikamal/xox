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
        DRAWER.navigation("payment2", 2);
    }
    function done() {
        DRAWER.navigation("myAccount", 2);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment3";
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
    $.__views.payment3 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment3"
    });
    $.__views.payment3 && $.addTopLevelView($.__views.payment3);
<<<<<<< HEAD
    $.__views.__alloyId422 = Alloy.createController("_header", {
        id: "__alloyId422",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId422.setParent($.__views.payment3);
    $.__views.__alloyId423 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId423"
    });
    $.__views.payment3.add($.__views.__alloyId423);
    $.__views.__alloyId424 = Ti.UI.createLabel({
=======
    $.__views.__alloyId633 = Alloy.createController("_header", {
        id: "__alloyId633",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId633.setParent($.__views.payment3);
    $.__views.__alloyId634 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId634"
    });
    $.__views.payment3.add($.__views.__alloyId634);
    $.__views.__alloyId635 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId424"
    });
    $.__views.__alloyId423.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createImageView({
=======
        id: "__alloyId635"
    });
    $.__views.__alloyId634.add($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId425"
    });
    $.__views.__alloyId423.add($.__views.__alloyId425);
    back ? $.__views.__alloyId425.addEventListener("click", back) : __defers["$.__views.__alloyId425!click!back"] = true;
=======
        id: "__alloyId636"
    });
    $.__views.__alloyId634.add($.__views.__alloyId636);
    back ? $.__views.__alloyId636.addEventListener("click", back) : __defers["$.__views.__alloyId636!click!back"] = true;
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment3.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId426 = Ti.UI.createLabel({
        text: "Payment Confirmation",
        color: "black",
        top: "20",
        id: "__alloyId426"
    });
    $.__views.scrollView.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createView({
=======
    $.__views.__alloyId637 = Ti.UI.createLabel({
        text: "Payment Confirmation",
        color: "black",
        top: "20",
        id: "__alloyId637"
    });
    $.__views.scrollView.add($.__views.__alloyId637);
    $.__views.__alloyId638 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        top: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId427"
    });
    $.__views.scrollView.add($.__views.__alloyId427);
=======
        id: "__alloyId638"
    });
    $.__views.scrollView.add($.__views.__alloyId638);
>>>>>>> origin/master
    $.__views.account = Ti.UI.createLabel({
        text: "Account No.: 011 xxxxxxx",
        id: "account",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.account);
    $.__views.amount = Ti.UI.createLabel({
        id: "amount",
        text: "left",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.amount);
    $.__views.method = Ti.UI.createLabel({
        id: "method",
        text: "left",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.method);
<<<<<<< HEAD
    $.__views.__alloyId428 = Ti.UI.createButton({
=======
    $.__views.__alloyId639 = Ti.UI.createButton({
>>>>>>> origin/master
        title: "Done",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        backgroundColor: "white",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
<<<<<<< HEAD
        id: "__alloyId428"
    });
    $.__views.scrollView.add($.__views.__alloyId428);
    done ? $.__views.__alloyId428.addEventListener("click", done) : __defers["$.__views.__alloyId428!click!done"] = true;
=======
        id: "__alloyId639"
    });
    $.__views.scrollView.add($.__views.__alloyId639);
    done ? $.__views.__alloyId639.addEventListener("click", done) : __defers["$.__views.__alloyId639!click!done"] = true;
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.amount.text = "Amount (RM): RM" + Ti.App.Properties.getString("amount");
    $.method.text = "Payment Method: " + Ti.App.Properties.getString("method");
<<<<<<< HEAD
    __defers["$.__views.__alloyId425!click!back"] && $.__views.__alloyId425.addEventListener("click", back);
    __defers["$.__views.__alloyId428!click!done"] && $.__views.__alloyId428.addEventListener("click", done);
=======
    __defers["$.__views.__alloyId636!click!back"] && $.__views.__alloyId636.addEventListener("click", back);
    __defers["$.__views.__alloyId639!click!done"] && $.__views.__alloyId639.addEventListener("click", done);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;