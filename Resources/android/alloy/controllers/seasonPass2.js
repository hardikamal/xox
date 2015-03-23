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
    this.__controllerPath = "seasonPass2";
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
    $.__views.__alloyId799 = Ti.UI.createView({
=======
    $.__views.__alloyId640 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId799"
    });
    $.__views.scrollView.add($.__views.__alloyId799);
    $.__views.__alloyId800 = Ti.UI.createView({
=======
        id: "__alloyId640"
    });
    $.__views.scrollView.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId800"
    });
    $.__views.__alloyId799.add($.__views.__alloyId800);
    $.__views.__alloyId801 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId801"
    });
    $.__views.__alloyId800.add($.__views.__alloyId801);
    $.__views.__alloyId802 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId802"
    });
    $.__views.__alloyId801.add($.__views.__alloyId802);
    $.__views.__alloyId803 = Ti.UI.createLabel({
=======
        id: "__alloyId641"
    });
    $.__views.__alloyId640.add($.__views.__alloyId641);
    $.__views.__alloyId642 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId642"
    });
    $.__views.__alloyId641.add($.__views.__alloyId642);
    $.__views.__alloyId643 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId643"
    });
    $.__views.__alloyId642.add($.__views.__alloyId643);
    $.__views.__alloyId644 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SP V1",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId803"
    });
    $.__views.__alloyId802.add($.__views.__alloyId803);
    $.__views.__alloyId804 = Ti.UI.createLabel({
=======
        id: "__alloyId644"
    });
    $.__views.__alloyId643.add($.__views.__alloyId644);
    $.__views.__alloyId645 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "350 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId804"
    });
    $.__views.__alloyId802.add($.__views.__alloyId804);
    $.__views.__alloyId805 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId805"
    });
    $.__views.__alloyId800.add($.__views.__alloyId805);
    $.__views.__alloyId806 = Ti.UI.createView({
=======
        id: "__alloyId645"
    });
    $.__views.__alloyId643.add($.__views.__alloyId645);
    $.__views.__alloyId646 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId646"
    });
    $.__views.__alloyId641.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId806"
    });
    $.__views.__alloyId805.add($.__views.__alloyId806);
    $.__views.__alloyId807 = Ti.UI.createLabel({
=======
        id: "__alloyId647"
    });
    $.__views.__alloyId646.add($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId807"
    });
    $.__views.__alloyId806.add($.__views.__alloyId807);
    $.__views.__alloyId808 = Ti.UI.createLabel({
=======
        id: "__alloyId648"
    });
    $.__views.__alloyId647.add($.__views.__alloyId648);
    $.__views.__alloyId649 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "49.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId808"
    });
    $.__views.__alloyId806.add($.__views.__alloyId808);
    $.__views.__alloyId809 = Ti.UI.createView({
=======
        id: "__alloyId649"
    });
    $.__views.__alloyId647.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId809"
    });
    $.__views.__alloyId799.add($.__views.__alloyId809);
    $.__views.__alloyId810 = Ti.UI.createLabel({
=======
        id: "__alloyId650"
    });
    $.__views.__alloyId640.add($.__views.__alloyId650);
    $.__views.__alloyId651 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*FREE 50 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId810"
    });
    $.__views.__alloyId809.add($.__views.__alloyId810);
    $.__views.__alloyId811 = Ti.UI.createView({
=======
        id: "__alloyId651"
    });
    $.__views.__alloyId650.add($.__views.__alloyId651);
    $.__views.__alloyId652 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId811"
    });
    $.__views.__alloyId799.add($.__views.__alloyId811);
    $.__views.__alloyId812 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId812"
    });
    $.__views.__alloyId811.add($.__views.__alloyId812);
    $.__views.__alloyId813 = Ti.UI.createLabel({
=======
        id: "__alloyId652"
    });
    $.__views.__alloyId640.add($.__views.__alloyId652);
    $.__views.__alloyId653 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId653"
    });
    $.__views.__alloyId652.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId813"
    });
    $.__views.__alloyId812.add($.__views.__alloyId813);
    $.__views.__alloyId814 = Ti.UI.createLabel({
=======
        id: "__alloyId654"
    });
    $.__views.__alloyId653.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Key in SPV1 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId814"
    });
    $.__views.__alloyId812.add($.__views.__alloyId814);
    $.__views.__alloyId815 = Ti.UI.createView({
=======
        id: "__alloyId655"
    });
    $.__views.__alloyId653.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: "200",
        width: "90%",
        top: "10",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId815"
    });
    $.__views.scrollView.add($.__views.__alloyId815);
    $.__views.__alloyId816 = Ti.UI.createView({
=======
        id: "__alloyId656"
    });
    $.__views.scrollView.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50%",
        width: "100%",
        backgroundColor: "#4CC4D2",
<<<<<<< HEAD
        id: "__alloyId816"
    });
    $.__views.__alloyId815.add($.__views.__alloyId816);
    $.__views.__alloyId817 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId817"
    });
    $.__views.__alloyId816.add($.__views.__alloyId817);
    $.__views.__alloyId818 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId818"
    });
    $.__views.__alloyId817.add($.__views.__alloyId818);
    $.__views.__alloyId819 = Ti.UI.createLabel({
=======
        id: "__alloyId657"
    });
    $.__views.__alloyId656.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createView({
        layout: "composite",
        height: "100%",
        width: "50%",
        id: "__alloyId658"
    });
    $.__views.__alloyId657.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId659"
    });
    $.__views.__alloyId658.add($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "SP V2",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId819"
    });
    $.__views.__alloyId818.add($.__views.__alloyId819);
    $.__views.__alloyId820 = Ti.UI.createLabel({
=======
        id: "__alloyId660"
    });
    $.__views.__alloyId659.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "700 min",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId820"
    });
    $.__views.__alloyId818.add($.__views.__alloyId820);
    $.__views.__alloyId821 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId821"
    });
    $.__views.__alloyId816.add($.__views.__alloyId821);
    $.__views.__alloyId822 = Ti.UI.createView({
=======
        id: "__alloyId661"
    });
    $.__views.__alloyId659.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "50%",
        id: "__alloyId662"
    });
    $.__views.__alloyId657.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        backgroundColor: "#1D717A",
        right: "0",
<<<<<<< HEAD
        id: "__alloyId822"
    });
    $.__views.__alloyId821.add($.__views.__alloyId822);
    $.__views.__alloyId823 = Ti.UI.createLabel({
=======
        id: "__alloyId663"
    });
    $.__views.__alloyId662.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId823"
    });
    $.__views.__alloyId822.add($.__views.__alloyId823);
    $.__views.__alloyId824 = Ti.UI.createLabel({
=======
        id: "__alloyId664"
    });
    $.__views.__alloyId663.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "79.90",
        backgroundColor: "transparent",
        width: Ti.UI.SIZE,
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId824"
    });
    $.__views.__alloyId822.add($.__views.__alloyId824);
    $.__views.__alloyId825 = Ti.UI.createView({
=======
        id: "__alloyId665"
    });
    $.__views.__alloyId663.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "20%",
        width: "100%",
        backgroundColor: "#646461",
<<<<<<< HEAD
        id: "__alloyId825"
    });
    $.__views.__alloyId815.add($.__views.__alloyId825);
    $.__views.__alloyId826 = Ti.UI.createLabel({
=======
        id: "__alloyId666"
    });
    $.__views.__alloyId656.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "*FREE 100 SMS",
        backgroundColor: "transparent",
        height: "100%",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId826"
    });
    $.__views.__alloyId825.add($.__views.__alloyId826);
    $.__views.__alloyId827 = Ti.UI.createView({
=======
        id: "__alloyId667"
    });
    $.__views.__alloyId666.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "composite",
        height: "30%",
        width: "100%",
        backgroundColor: "#E6E7E9",
<<<<<<< HEAD
        id: "__alloyId827"
    });
    $.__views.__alloyId815.add($.__views.__alloyId827);
    $.__views.__alloyId828 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId828"
    });
    $.__views.__alloyId827.add($.__views.__alloyId828);
    $.__views.__alloyId829 = Ti.UI.createLabel({
=======
        id: "__alloyId668"
    });
    $.__views.__alloyId656.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId669"
    });
    $.__views.__alloyId668.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "To Subscribe:",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId829"
    });
    $.__views.__alloyId828.add($.__views.__alloyId829);
    $.__views.__alloyId830 = Ti.UI.createLabel({
=======
        id: "__alloyId670"
    });
    $.__views.__alloyId669.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Key in SPV2 and send to 23388",
        backgroundColor: "transparent",
        color: "#707070",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId830"
    });
    $.__views.__alloyId828.add($.__views.__alloyId830);
=======
        id: "__alloyId671"
    });
    $.__views.__alloyId669.add($.__views.__alloyId671);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;