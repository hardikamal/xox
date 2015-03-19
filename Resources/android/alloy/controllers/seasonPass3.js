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
<<<<<<< HEAD
    $.__views.__alloyId831 = Ti.UI.createView({
=======
    $.__views.__alloyId672 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId831"
    });
    $.__views.scrollView.add($.__views.__alloyId831);
    $.__views.__alloyId832 = Ti.UI.createView({
=======
        id: "__alloyId672"
    });
    $.__views.scrollView.add($.__views.__alloyId672);
    $.__views.__alloyId673 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId832"
    });
    $.__views.__alloyId831.add($.__views.__alloyId832);
    $.__views.__alloyId833 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId833"
    });
    $.__views.__alloyId832.add($.__views.__alloyId833);
    $.__views.__alloyId834 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId834"
    });
    $.__views.__alloyId833.add($.__views.__alloyId834);
    $.__views.__alloyId835 = Ti.UI.createLabel({
=======
        id: "__alloyId673"
    });
    $.__views.__alloyId672.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId674"
    });
    $.__views.__alloyId673.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId675"
    });
    $.__views.__alloyId674.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId835"
    });
    $.__views.__alloyId834.add($.__views.__alloyId835);
    $.__views.__alloyId836 = Ti.UI.createLabel({
=======
        id: "__alloyId676"
    });
    $.__views.__alloyId675.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId836"
    });
    $.__views.__alloyId834.add($.__views.__alloyId836);
    $.__views.__alloyId837 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId837"
    });
    $.__views.__alloyId832.add($.__views.__alloyId837);
    $.__views.__alloyId838 = Ti.UI.createView({
=======
        id: "__alloyId677"
    });
    $.__views.__alloyId675.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId678"
    });
    $.__views.__alloyId673.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId838"
    });
    $.__views.__alloyId837.add($.__views.__alloyId838);
    $.__views.__alloyId839 = Ti.UI.createLabel({
=======
        id: "__alloyId679"
    });
    $.__views.__alloyId678.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId839"
    });
    $.__views.__alloyId838.add($.__views.__alloyId839);
    $.__views.__alloyId840 = Ti.UI.createLabel({
=======
        id: "__alloyId680"
    });
    $.__views.__alloyId679.add($.__views.__alloyId680);
    $.__views.__alloyId681 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId840"
    });
    $.__views.__alloyId838.add($.__views.__alloyId840);
    $.__views.__alloyId841 = Ti.UI.createView({
=======
        id: "__alloyId681"
    });
    $.__views.__alloyId679.add($.__views.__alloyId681);
    $.__views.__alloyId682 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId841"
    });
    $.__views.__alloyId831.add($.__views.__alloyId841);
    $.__views.__alloyId842 = Ti.UI.createLabel({
=======
        id: "__alloyId682"
    });
    $.__views.__alloyId672.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId842"
    });
    $.__views.__alloyId841.add($.__views.__alloyId842);
    $.__views.__alloyId843 = Ti.UI.createView({
=======
        id: "__alloyId683"
    });
    $.__views.__alloyId682.add($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId843"
    });
    $.__views.__alloyId831.add($.__views.__alloyId843);
    $.__views.__alloyId844 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId844"
    });
    $.__views.__alloyId843.add($.__views.__alloyId844);
    $.__views.__alloyId845 = Ti.UI.createLabel({
=======
        id: "__alloyId684"
    });
    $.__views.__alloyId672.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId685"
    });
    $.__views.__alloyId684.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId845"
    });
    $.__views.__alloyId844.add($.__views.__alloyId845);
    $.__views.__alloyId846 = Ti.UI.createLabel({
=======
        id: "__alloyId686"
    });
    $.__views.__alloyId685.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId846"
    });
    $.__views.__alloyId844.add($.__views.__alloyId846);
    $.__views.__alloyId847 = Ti.UI.createView({
=======
        id: "__alloyId687"
    });
    $.__views.__alloyId685.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId847"
    });
    $.__views.scrollView.add($.__views.__alloyId847);
    $.__views.__alloyId848 = Ti.UI.createView({
=======
        id: "__alloyId688"
    });
    $.__views.scrollView.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId848"
    });
    $.__views.__alloyId847.add($.__views.__alloyId848);
    $.__views.__alloyId849 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId849"
    });
    $.__views.__alloyId848.add($.__views.__alloyId849);
    $.__views.__alloyId850 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId850"
    });
    $.__views.__alloyId849.add($.__views.__alloyId850);
    $.__views.__alloyId851 = Ti.UI.createLabel({
=======
        id: "__alloyId689"
    });
    $.__views.__alloyId688.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId690"
    });
    $.__views.__alloyId689.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId691"
    });
    $.__views.__alloyId690.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId851"
    });
    $.__views.__alloyId850.add($.__views.__alloyId851);
    $.__views.__alloyId852 = Ti.UI.createLabel({
=======
        id: "__alloyId692"
    });
    $.__views.__alloyId691.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId852"
    });
    $.__views.__alloyId850.add($.__views.__alloyId852);
    $.__views.__alloyId853 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId853"
    });
    $.__views.__alloyId848.add($.__views.__alloyId853);
    $.__views.__alloyId854 = Ti.UI.createView({
=======
        id: "__alloyId693"
    });
    $.__views.__alloyId691.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId694"
    });
    $.__views.__alloyId689.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId854"
    });
    $.__views.__alloyId853.add($.__views.__alloyId854);
    $.__views.__alloyId855 = Ti.UI.createLabel({
=======
        id: "__alloyId695"
    });
    $.__views.__alloyId694.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId855"
    });
    $.__views.__alloyId854.add($.__views.__alloyId855);
    $.__views.__alloyId856 = Ti.UI.createLabel({
=======
        id: "__alloyId696"
    });
    $.__views.__alloyId695.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId856"
    });
    $.__views.__alloyId854.add($.__views.__alloyId856);
    $.__views.__alloyId857 = Ti.UI.createView({
=======
        id: "__alloyId697"
    });
    $.__views.__alloyId695.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId857"
    });
    $.__views.__alloyId847.add($.__views.__alloyId857);
    $.__views.__alloyId858 = Ti.UI.createLabel({
=======
        id: "__alloyId698"
    });
    $.__views.__alloyId688.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId858"
    });
    $.__views.__alloyId857.add($.__views.__alloyId858);
    $.__views.__alloyId859 = Ti.UI.createView({
=======
        id: "__alloyId699"
    });
    $.__views.__alloyId698.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId859"
    });
    $.__views.__alloyId847.add($.__views.__alloyId859);
    $.__views.__alloyId860 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId860"
    });
    $.__views.__alloyId859.add($.__views.__alloyId860);
    $.__views.__alloyId861 = Ti.UI.createLabel({
=======
        id: "__alloyId700"
    });
    $.__views.__alloyId688.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId701"
    });
    $.__views.__alloyId700.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId861"
    });
    $.__views.__alloyId860.add($.__views.__alloyId861);
    $.__views.__alloyId862 = Ti.UI.createLabel({
=======
        id: "__alloyId702"
    });
    $.__views.__alloyId701.add($.__views.__alloyId702);
    $.__views.__alloyId703 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId862"
    });
    $.__views.__alloyId860.add($.__views.__alloyId862);
=======
        id: "__alloyId703"
    });
    $.__views.__alloyId701.add($.__views.__alloyId703);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;