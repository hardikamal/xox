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
    this.__controllerPath = "seasonPass1";
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
    $.__views.__alloyId767 = Ti.UI.createView({
=======
    $.__views.__alloyId608 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId767"
    });
    $.__views.scrollView.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createView({
=======
        id: "__alloyId608"
    });
    $.__views.scrollView.add($.__views.__alloyId608);
    $.__views.__alloyId609 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId768"
    });
    $.__views.__alloyId767.add($.__views.__alloyId768);
    $.__views.__alloyId769 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId769"
    });
    $.__views.__alloyId768.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId770"
    });
    $.__views.__alloyId769.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createLabel({
=======
        id: "__alloyId609"
    });
    $.__views.__alloyId608.add($.__views.__alloyId609);
    $.__views.__alloyId610 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId610"
    });
    $.__views.__alloyId609.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId611"
    });
    $.__views.__alloyId610.add($.__views.__alloyId611);
    $.__views.__alloyId612 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId771"
    });
    $.__views.__alloyId770.add($.__views.__alloyId771);
    $.__views.__alloyId772 = Ti.UI.createLabel({
=======
        id: "__alloyId612"
    });
    $.__views.__alloyId611.add($.__views.__alloyId612);
    $.__views.__alloyId613 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId772"
    });
    $.__views.__alloyId770.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId773"
    });
    $.__views.__alloyId768.add($.__views.__alloyId773);
    $.__views.__alloyId774 = Ti.UI.createView({
=======
        id: "__alloyId613"
    });
    $.__views.__alloyId611.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId614"
    });
    $.__views.__alloyId609.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId774"
    });
    $.__views.__alloyId773.add($.__views.__alloyId774);
    $.__views.__alloyId775 = Ti.UI.createLabel({
=======
        id: "__alloyId615"
    });
    $.__views.__alloyId614.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId775"
    });
    $.__views.__alloyId774.add($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createLabel({
=======
        id: "__alloyId616"
    });
    $.__views.__alloyId615.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId776"
    });
    $.__views.__alloyId774.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createView({
=======
        id: "__alloyId617"
    });
    $.__views.__alloyId615.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId777"
    });
    $.__views.__alloyId767.add($.__views.__alloyId777);
    $.__views.__alloyId778 = Ti.UI.createLabel({
=======
        id: "__alloyId618"
    });
    $.__views.__alloyId608.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId778"
    });
    $.__views.__alloyId777.add($.__views.__alloyId778);
    $.__views.__alloyId779 = Ti.UI.createView({
=======
        id: "__alloyId619"
    });
    $.__views.__alloyId618.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId779"
    });
    $.__views.__alloyId767.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId780"
    });
    $.__views.__alloyId779.add($.__views.__alloyId780);
    $.__views.__alloyId781 = Ti.UI.createLabel({
=======
        id: "__alloyId620"
    });
    $.__views.__alloyId608.add($.__views.__alloyId620);
    $.__views.__alloyId621 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId621"
    });
    $.__views.__alloyId620.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId781"
    });
    $.__views.__alloyId780.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createLabel({
=======
        id: "__alloyId622"
    });
    $.__views.__alloyId621.add($.__views.__alloyId622);
    $.__views.__alloyId623 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId782"
    });
    $.__views.__alloyId780.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createView({
=======
        id: "__alloyId623"
    });
    $.__views.__alloyId621.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId783"
    });
    $.__views.scrollView.add($.__views.__alloyId783);
    $.__views.__alloyId784 = Ti.UI.createView({
=======
        id: "__alloyId624"
    });
    $.__views.scrollView.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId784"
    });
    $.__views.__alloyId783.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId785"
    });
    $.__views.__alloyId784.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId786"
    });
    $.__views.__alloyId785.add($.__views.__alloyId786);
    $.__views.__alloyId787 = Ti.UI.createLabel({
=======
        id: "__alloyId625"
    });
    $.__views.__alloyId624.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId626"
    });
    $.__views.__alloyId625.add($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId627"
    });
    $.__views.__alloyId626.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId787"
    });
    $.__views.__alloyId786.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createLabel({
=======
        id: "__alloyId628"
    });
    $.__views.__alloyId627.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId788"
    });
    $.__views.__alloyId786.add($.__views.__alloyId788);
    $.__views.__alloyId789 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId789"
    });
    $.__views.__alloyId784.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createView({
=======
        id: "__alloyId629"
    });
    $.__views.__alloyId627.add($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId630"
    });
    $.__views.__alloyId625.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId790"
    });
    $.__views.__alloyId789.add($.__views.__alloyId790);
    $.__views.__alloyId791 = Ti.UI.createLabel({
=======
        id: "__alloyId631"
    });
    $.__views.__alloyId630.add($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId791"
    });
    $.__views.__alloyId790.add($.__views.__alloyId791);
    $.__views.__alloyId792 = Ti.UI.createLabel({
=======
        id: "__alloyId632"
    });
    $.__views.__alloyId631.add($.__views.__alloyId632);
    $.__views.__alloyId633 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId792"
    });
    $.__views.__alloyId790.add($.__views.__alloyId792);
    $.__views.__alloyId793 = Ti.UI.createView({
=======
        id: "__alloyId633"
    });
    $.__views.__alloyId631.add($.__views.__alloyId633);
    $.__views.__alloyId634 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId793"
    });
    $.__views.__alloyId783.add($.__views.__alloyId793);
    $.__views.__alloyId794 = Ti.UI.createLabel({
=======
        id: "__alloyId634"
    });
    $.__views.__alloyId624.add($.__views.__alloyId634);
    $.__views.__alloyId635 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId794"
    });
    $.__views.__alloyId793.add($.__views.__alloyId794);
    $.__views.__alloyId795 = Ti.UI.createView({
=======
        id: "__alloyId635"
    });
    $.__views.__alloyId634.add($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId795"
    });
    $.__views.__alloyId783.add($.__views.__alloyId795);
    $.__views.__alloyId796 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId796"
    });
    $.__views.__alloyId795.add($.__views.__alloyId796);
    $.__views.__alloyId797 = Ti.UI.createLabel({
=======
        id: "__alloyId636"
    });
    $.__views.__alloyId624.add($.__views.__alloyId636);
    $.__views.__alloyId637 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId637"
    });
    $.__views.__alloyId636.add($.__views.__alloyId637);
    $.__views.__alloyId638 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId797"
    });
    $.__views.__alloyId796.add($.__views.__alloyId797);
    $.__views.__alloyId798 = Ti.UI.createLabel({
=======
        id: "__alloyId638"
    });
    $.__views.__alloyId637.add($.__views.__alloyId638);
    $.__views.__alloyId639 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId798"
    });
    $.__views.__alloyId796.add($.__views.__alloyId798);
=======
        id: "__alloyId639"
    });
    $.__views.__alloyId637.add($.__views.__alloyId639);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;