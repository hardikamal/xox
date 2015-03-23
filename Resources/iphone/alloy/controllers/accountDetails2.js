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
        DRAWER.navigation("accountDetails", 1);
    }
    function prepaidStatement() {
        DRAWER.navigation("prepaidStatement", 1);
    }
    function postpaidStatement() {
        DRAWER.navigation("postpaidStatement", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "accountDetails2";
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
    $.__views.accountDetails2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "accountDetails2"
    });
    $.__views.accountDetails2 && $.addTopLevelView($.__views.accountDetails2);
<<<<<<< HEAD
    $.__views.__alloyId76 = Alloy.createController("_header", {
        id: "__alloyId76",
=======
<<<<<<< HEAD
    $.__views.__alloyId76 = Alloy.createController("_header", {
        id: "__alloyId76",
        __parentSymbol: $.__views.accountDetails2
    });
    $.__views.__alloyId76.setParent($.__views.accountDetails2);
    $.__views.__alloyId77 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId77"
    });
    $.__views.accountDetails2.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
=======
    $.__views.__alloyId74 = Alloy.createController("_header", {
        id: "__alloyId74",
>>>>>>> origin/master
        __parentSymbol: $.__views.accountDetails2
    });
    $.__views.__alloyId76.setParent($.__views.accountDetails2);
    $.__views.__alloyId77 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId77"
    });
<<<<<<< HEAD
    $.__views.accountDetails2.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
=======
    $.__views.accountDetails2.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createImageView({
=======
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId79"
    });
    $.__views.__alloyId77.add($.__views.__alloyId79);
    back ? $.__views.__alloyId79.addEventListener("click", back) : __defers["$.__views.__alloyId79!click!back"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId79"
    });
    $.__views.__alloyId77.add($.__views.__alloyId79);
    back ? $.__views.__alloyId79.addEventListener("click", back) : __defers["$.__views.__alloyId79!click!back"] = true;
=======
        id: "__alloyId77"
    });
    $.__views.__alloyId75.add($.__views.__alloyId77);
    back ? $.__views.__alloyId77.addEventListener("click", back) : __defers["$.__views.__alloyId77!click!back"] = true;
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.accountDetails2.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId80 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId80 = Ti.UI.createView({
=======
    $.__views.__alloyId78 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId80"
=======
<<<<<<< HEAD
        id: "__alloyId80"
    });
    $.__views.scrollView.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    prepaidStatement ? $.__views.__alloyId81.addEventListener("click", prepaidStatement) : __defers["$.__views.__alloyId81!click!prepaidStatement"] = true;
    $.__views.__alloyId82 = Ti.UI.createLabel({
=======
        id: "__alloyId78"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId81"
    });
<<<<<<< HEAD
    $.__views.__alloyId80.add($.__views.__alloyId81);
    prepaidStatement ? $.__views.__alloyId81.addEventListener("click", prepaidStatement) : __defers["$.__views.__alloyId81!click!prepaidStatement"] = true;
    $.__views.__alloyId82 = Ti.UI.createLabel({
=======
    $.__views.__alloyId78.add($.__views.__alloyId79);
    prepaidStatement ? $.__views.__alloyId79.addEventListener("click", prepaidStatement) : __defers["$.__views.__alloyId79!click!prepaidStatement"] = true;
    $.__views.__alloyId80 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Prepaid Itemized Statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId82"
=======
<<<<<<< HEAD
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId83"
    });
    $.__views.__alloyId80.add($.__views.__alloyId83);
    prepaidStatement ? $.__views.__alloyId83.addEventListener("click", prepaidStatement) : __defers["$.__views.__alloyId83!click!prepaidStatement"] = true;
=======
        id: "__alloyId80"
>>>>>>> origin/master
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId83"
    });
<<<<<<< HEAD
    $.__views.__alloyId80.add($.__views.__alloyId83);
    prepaidStatement ? $.__views.__alloyId83.addEventListener("click", prepaidStatement) : __defers["$.__views.__alloyId83!click!prepaidStatement"] = true;
=======
    $.__views.__alloyId78.add($.__views.__alloyId81);
    prepaidStatement ? $.__views.__alloyId81.addEventListener("click", prepaidStatement) : __defers["$.__views.__alloyId81!click!prepaidStatement"] = true;
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId83.add($.__views.arrow1);
    $.__views.__alloyId84 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId83.add($.__views.arrow1);
    $.__views.__alloyId84 = Ti.UI.createView({
=======
    $.__views.__alloyId81.add($.__views.arrow1);
    $.__views.__alloyId82 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId84"
=======
<<<<<<< HEAD
        id: "__alloyId84"
    });
    $.__views.scrollView.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    postpaidStatement ? $.__views.__alloyId85.addEventListener("click", postpaidStatement) : __defers["$.__views.__alloyId85!click!postpaidStatement"] = true;
    $.__views.__alloyId86 = Ti.UI.createLabel({
=======
        id: "__alloyId82"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId85"
    });
<<<<<<< HEAD
    $.__views.__alloyId84.add($.__views.__alloyId85);
    postpaidStatement ? $.__views.__alloyId85.addEventListener("click", postpaidStatement) : __defers["$.__views.__alloyId85!click!postpaidStatement"] = true;
    $.__views.__alloyId86 = Ti.UI.createLabel({
=======
    $.__views.__alloyId82.add($.__views.__alloyId83);
    postpaidStatement ? $.__views.__alloyId83.addEventListener("click", postpaidStatement) : __defers["$.__views.__alloyId83!click!postpaidStatement"] = true;
    $.__views.__alloyId84 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Postpaid Itemized Statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId86"
=======
<<<<<<< HEAD
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId87"
    });
    $.__views.__alloyId84.add($.__views.__alloyId87);
    postpaidStatement ? $.__views.__alloyId87.addEventListener("click", postpaidStatement) : __defers["$.__views.__alloyId87!click!postpaidStatement"] = true;
=======
        id: "__alloyId84"
>>>>>>> origin/master
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId87"
    });
<<<<<<< HEAD
    $.__views.__alloyId84.add($.__views.__alloyId87);
    postpaidStatement ? $.__views.__alloyId87.addEventListener("click", postpaidStatement) : __defers["$.__views.__alloyId87!click!postpaidStatement"] = true;
=======
    $.__views.__alloyId82.add($.__views.__alloyId85);
    postpaidStatement ? $.__views.__alloyId85.addEventListener("click", postpaidStatement) : __defers["$.__views.__alloyId85!click!postpaidStatement"] = true;
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId87.add($.__views.arrow2);
=======
<<<<<<< HEAD
    $.__views.__alloyId87.add($.__views.arrow2);
=======
    $.__views.__alloyId85.add($.__views.arrow2);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
<<<<<<< HEAD
    __defers["$.__views.__alloyId79!click!back"] && $.__views.__alloyId79.addEventListener("click", back);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId79!click!back"] && $.__views.__alloyId79.addEventListener("click", back);
    __defers["$.__views.__alloyId81!click!prepaidStatement"] && $.__views.__alloyId81.addEventListener("click", prepaidStatement);
    __defers["$.__views.__alloyId83!click!prepaidStatement"] && $.__views.__alloyId83.addEventListener("click", prepaidStatement);
    __defers["$.__views.__alloyId85!click!postpaidStatement"] && $.__views.__alloyId85.addEventListener("click", postpaidStatement);
    __defers["$.__views.__alloyId87!click!postpaidStatement"] && $.__views.__alloyId87.addEventListener("click", postpaidStatement);
=======
    __defers["$.__views.__alloyId77!click!back"] && $.__views.__alloyId77.addEventListener("click", back);
    __defers["$.__views.__alloyId79!click!prepaidStatement"] && $.__views.__alloyId79.addEventListener("click", prepaidStatement);
>>>>>>> origin/master
    __defers["$.__views.__alloyId81!click!prepaidStatement"] && $.__views.__alloyId81.addEventListener("click", prepaidStatement);
    __defers["$.__views.__alloyId83!click!prepaidStatement"] && $.__views.__alloyId83.addEventListener("click", prepaidStatement);
    __defers["$.__views.__alloyId85!click!postpaidStatement"] && $.__views.__alloyId85.addEventListener("click", postpaidStatement);
<<<<<<< HEAD
    __defers["$.__views.__alloyId87!click!postpaidStatement"] && $.__views.__alloyId87.addEventListener("click", postpaidStatement);
=======
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;