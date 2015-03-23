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
        "prepaid" == Alloy.Globals.userPlan ? DRAWER.navigation("prepaidStatement", 1) : DRAWER.navigation("postpaidStatement", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "iddSMS";
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
    $.__views.iddSMS = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "iddSMS"
    });
    $.__views.iddSMS && $.addTopLevelView($.__views.iddSMS);
    $.__views.__alloyId768 = Alloy.createController("_header", {
        id: "__alloyId768",
        __parentSymbol: $.__views.iddSMS
    });
    $.__views.__alloyId768.setParent($.__views.iddSMS);
    $.__views.__alloyId769 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId769"
    });
    $.__views.iddSMS.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId770"
    });
    $.__views.__alloyId769.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId771"
    });
    $.__views.__alloyId769.add($.__views.__alloyId771);
    back ? $.__views.__alloyId771.addEventListener("click", back) : __defers["$.__views.__alloyId771!click!back"] = true;
    $.__views.__alloyId772 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId772"
    });
    $.__views.iddSMS.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createLabel({
        text: "IDD SMS",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId773"
    });
    $.__views.__alloyId772.add($.__views.__alloyId773);
    var __alloyId774 = [];
    $.__views.__alloyId775 = Ti.UI.createTableViewSection({
        id: "__alloyId775"
    });
    __alloyId774.push($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId776"
    });
    $.__views.__alloyId775.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId777"
    });
    $.__views.__alloyId776.add($.__views.__alloyId777);
    $.__views.__alloyId778 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId778"
    });
    $.__views.__alloyId777.add($.__views.__alloyId778);
    $.__views.__alloyId779 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId779"
    });
    $.__views.__alloyId776.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId780"
    });
    $.__views.__alloyId779.add($.__views.__alloyId780);
    $.__views.__alloyId781 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId781"
    });
    $.__views.__alloyId776.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId782"
    });
    $.__views.__alloyId781.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId783"
    });
    $.__views.__alloyId775.add($.__views.__alloyId783);
    $.__views.__alloyId784 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId784"
    });
    $.__views.__alloyId783.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId785"
    });
    $.__views.__alloyId784.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId786"
    });
    $.__views.__alloyId783.add($.__views.__alloyId786);
    $.__views.__alloyId787 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId787"
    });
    $.__views.__alloyId786.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId788"
    });
    $.__views.__alloyId783.add($.__views.__alloyId788);
    $.__views.__alloyId789 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId789"
    });
    $.__views.__alloyId788.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId790"
    });
    $.__views.__alloyId775.add($.__views.__alloyId790);
    $.__views.__alloyId791 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId791"
    });
    $.__views.__alloyId790.add($.__views.__alloyId791);
    $.__views.__alloyId792 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId792"
    });
    $.__views.__alloyId791.add($.__views.__alloyId792);
    $.__views.__alloyId793 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId793"
    });
    $.__views.__alloyId790.add($.__views.__alloyId793);
    $.__views.__alloyId794 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId794"
    });
    $.__views.__alloyId793.add($.__views.__alloyId794);
    $.__views.__alloyId795 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId795"
    });
    $.__views.__alloyId790.add($.__views.__alloyId795);
    $.__views.__alloyId796 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId796"
    });
    $.__views.__alloyId795.add($.__views.__alloyId796);
    $.__views.__alloyId797 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId797"
    });
    $.__views.__alloyId775.add($.__views.__alloyId797);
    $.__views.__alloyId798 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId798"
    });
    $.__views.__alloyId797.add($.__views.__alloyId798);
    $.__views.__alloyId799 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId799"
    });
    $.__views.__alloyId798.add($.__views.__alloyId799);
    $.__views.__alloyId800 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId800"
    });
    $.__views.__alloyId797.add($.__views.__alloyId800);
    $.__views.__alloyId801 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId801"
    });
    $.__views.__alloyId800.add($.__views.__alloyId801);
    $.__views.__alloyId802 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId802"
    });
    $.__views.__alloyId797.add($.__views.__alloyId802);
    $.__views.__alloyId803 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId803"
    });
    $.__views.__alloyId802.add($.__views.__alloyId803);
    $.__views.__alloyId804 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId804"
    });
    $.__views.__alloyId775.add($.__views.__alloyId804);
    $.__views.__alloyId805 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId805"
    });
    $.__views.__alloyId804.add($.__views.__alloyId805);
    $.__views.__alloyId806 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId806"
    });
    $.__views.__alloyId805.add($.__views.__alloyId806);
    $.__views.__alloyId807 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId807"
    });
    $.__views.__alloyId804.add($.__views.__alloyId807);
    $.__views.__alloyId808 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId808"
    });
    $.__views.__alloyId807.add($.__views.__alloyId808);
    $.__views.__alloyId809 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId809"
    });
    $.__views.__alloyId804.add($.__views.__alloyId809);
    $.__views.__alloyId810 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId810"
    });
    $.__views.__alloyId809.add($.__views.__alloyId810);
    $.__views.__alloyId811 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId811"
    });
    $.__views.__alloyId775.add($.__views.__alloyId811);
    $.__views.__alloyId812 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId812"
    });
    $.__views.__alloyId811.add($.__views.__alloyId812);
    $.__views.__alloyId813 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId813"
    });
    $.__views.__alloyId812.add($.__views.__alloyId813);
    $.__views.__alloyId814 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId814"
    });
    $.__views.__alloyId811.add($.__views.__alloyId814);
    $.__views.__alloyId815 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId815"
    });
    $.__views.__alloyId814.add($.__views.__alloyId815);
    $.__views.__alloyId816 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId816"
    });
    $.__views.__alloyId811.add($.__views.__alloyId816);
    $.__views.__alloyId817 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId817"
    });
    $.__views.__alloyId816.add($.__views.__alloyId817);
    $.__views.__alloyId818 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId818"
    });
    $.__views.__alloyId775.add($.__views.__alloyId818);
    $.__views.__alloyId819 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId819"
    });
    $.__views.__alloyId818.add($.__views.__alloyId819);
    $.__views.__alloyId820 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId820"
    });
    $.__views.__alloyId819.add($.__views.__alloyId820);
    $.__views.__alloyId821 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId821"
    });
    $.__views.__alloyId818.add($.__views.__alloyId821);
    $.__views.__alloyId822 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId822"
    });
    $.__views.__alloyId821.add($.__views.__alloyId822);
    $.__views.__alloyId823 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId823"
    });
    $.__views.__alloyId818.add($.__views.__alloyId823);
    $.__views.__alloyId824 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId824"
    });
    $.__views.__alloyId823.add($.__views.__alloyId824);
    $.__views.__alloyId825 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId825"
    });
    $.__views.__alloyId775.add($.__views.__alloyId825);
    $.__views.__alloyId826 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId826"
    });
    $.__views.__alloyId825.add($.__views.__alloyId826);
    $.__views.__alloyId827 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId827"
    });
    $.__views.__alloyId826.add($.__views.__alloyId827);
    $.__views.__alloyId828 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId828"
    });
    $.__views.__alloyId825.add($.__views.__alloyId828);
    $.__views.__alloyId829 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId829"
    });
    $.__views.__alloyId828.add($.__views.__alloyId829);
    $.__views.__alloyId830 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId830"
    });
    $.__views.__alloyId825.add($.__views.__alloyId830);
    $.__views.__alloyId831 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId831"
    });
    $.__views.__alloyId830.add($.__views.__alloyId831);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId774,
        id: "table",
        scrollable: "true"
    });
    $.__views.iddSMS.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId771!click!back"] && $.__views.__alloyId771.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;