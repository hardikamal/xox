function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPass3";
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        height: "100%",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF"
    });
    $.__views.scrollView && $.addTopLevelView($.__views.scrollView);
    $.__views.__alloyId667 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "90%",
        top: "10",
        id: "__alloyId667"
    });
    $.__views.scrollView.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId668"
    });
    $.__views.__alloyId667.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId669"
    });
    $.__views.__alloyId668.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId670"
    });
    $.__views.__alloyId669.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId671"
    });
    $.__views.__alloyId670.add($.__views.__alloyId671);
    $.__views.__alloyId672 = Ti.UI.createLabel({
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId672"
    });
    $.__views.__alloyId670.add($.__views.__alloyId672);
    $.__views.__alloyId673 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId673"
    });
    $.__views.__alloyId668.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId674"
    });
    $.__views.__alloyId673.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId675"
    });
    $.__views.__alloyId674.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createLabel({
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId676"
    });
    $.__views.__alloyId674.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId677"
    });
    $.__views.__alloyId667.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createLabel({
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId678"
    });
    $.__views.__alloyId677.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId679"
    });
    $.__views.__alloyId667.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId680"
    });
    $.__views.__alloyId679.add($.__views.__alloyId680);
    $.__views.__alloyId681 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId681"
    });
    $.__views.__alloyId680.add($.__views.__alloyId681);
    $.__views.__alloyId682 = Ti.UI.createLabel({
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId682"
    });
    $.__views.__alloyId680.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        width: "90%",
        top: "10",
        bottom: "10",
        id: "__alloyId683"
    });
    $.__views.scrollView.add($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createView({
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId684"
    });
    $.__views.__alloyId683.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId685"
    });
    $.__views.__alloyId684.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId686"
    });
    $.__views.__alloyId685.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createLabel({
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId687"
    });
    $.__views.__alloyId686.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createLabel({
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId688"
    });
    $.__views.__alloyId686.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId689"
    });
    $.__views.__alloyId684.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
        id: "__alloyId690"
    });
    $.__views.__alloyId689.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createLabel({
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId691"
    });
    $.__views.__alloyId690.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createLabel({
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
        id: "__alloyId692"
    });
    $.__views.__alloyId690.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
        id: "__alloyId693"
    });
    $.__views.__alloyId683.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createLabel({
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
        id: "__alloyId694"
    });
    $.__views.__alloyId693.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
        id: "__alloyId695"
    });
    $.__views.__alloyId683.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId696"
    });
    $.__views.__alloyId695.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId697"
    });
    $.__views.__alloyId696.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createLabel({
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
        id: "__alloyId698"
    });
    $.__views.__alloyId696.add($.__views.__alloyId698);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;