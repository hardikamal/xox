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
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId79"
    });
    $.__views.__alloyId77.add($.__views.__alloyId79);
    back ? $.__views.__alloyId79.addEventListener("click", back) : __defers["$.__views.__alloyId79!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.accountDetails2.add($.__views.scrollView);
    $.__views.__alloyId80 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Prepaid Itemized Statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId83.add($.__views.arrow1);
    $.__views.__alloyId84 = Ti.UI.createView({
        layout: "horizontal",
        top: "5",
        bottom: "5",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Postpaid Itemized Statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId87.add($.__views.arrow2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    __defers["$.__views.__alloyId79!click!back"] && $.__views.__alloyId79.addEventListener("click", back);
    __defers["$.__views.__alloyId81!click!prepaidStatement"] && $.__views.__alloyId81.addEventListener("click", prepaidStatement);
    __defers["$.__views.__alloyId83!click!prepaidStatement"] && $.__views.__alloyId83.addEventListener("click", prepaidStatement);
    __defers["$.__views.__alloyId85!click!postpaidStatement"] && $.__views.__alloyId85.addEventListener("click", postpaidStatement);
    __defers["$.__views.__alloyId87!click!postpaidStatement"] && $.__views.__alloyId87.addEventListener("click", postpaidStatement);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;