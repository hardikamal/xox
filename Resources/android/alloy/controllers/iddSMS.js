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
    $.__views.__alloyId811 = Alloy.createController("_header", {
        id: "__alloyId811",
        __parentSymbol: $.__views.iddSMS
    });
    $.__views.__alloyId811.setParent($.__views.iddSMS);
    $.__views.__alloyId812 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId812"
    });
    $.__views.iddSMS.add($.__views.__alloyId812);
    $.__views.__alloyId813 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId813"
    });
    $.__views.__alloyId812.add($.__views.__alloyId813);
    $.__views.__alloyId814 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId814"
    });
    $.__views.__alloyId812.add($.__views.__alloyId814);
    back ? $.__views.__alloyId814.addEventListener("click", back) : __defers["$.__views.__alloyId814!click!back"] = true;
    $.__views.__alloyId815 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId815"
    });
    $.__views.iddSMS.add($.__views.__alloyId815);
    $.__views.__alloyId816 = Ti.UI.createLabel({
        text: "IDD SMS",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId816"
    });
    $.__views.__alloyId815.add($.__views.__alloyId816);
    var __alloyId817 = [];
    $.__views.__alloyId818 = Ti.UI.createTableViewSection({
        id: "__alloyId818"
    });
    __alloyId817.push($.__views.__alloyId818);
    $.__views.__alloyId819 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId819"
    });
    $.__views.__alloyId818.add($.__views.__alloyId819);
    $.__views.__alloyId820 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId820"
    });
    $.__views.__alloyId819.add($.__views.__alloyId820);
    $.__views.__alloyId821 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId821"
    });
    $.__views.__alloyId820.add($.__views.__alloyId821);
    $.__views.__alloyId822 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId822"
    });
    $.__views.__alloyId819.add($.__views.__alloyId822);
    $.__views.__alloyId823 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId823"
    });
    $.__views.__alloyId822.add($.__views.__alloyId823);
    $.__views.__alloyId824 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId824"
    });
    $.__views.__alloyId819.add($.__views.__alloyId824);
    $.__views.__alloyId825 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId825"
    });
    $.__views.__alloyId824.add($.__views.__alloyId825);
    $.__views.__alloyId826 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId826"
    });
    $.__views.__alloyId818.add($.__views.__alloyId826);
    $.__views.__alloyId827 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId827"
    });
    $.__views.__alloyId826.add($.__views.__alloyId827);
    $.__views.__alloyId828 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId828"
    });
    $.__views.__alloyId827.add($.__views.__alloyId828);
    $.__views.__alloyId829 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId829"
    });
    $.__views.__alloyId826.add($.__views.__alloyId829);
    $.__views.__alloyId830 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId830"
    });
    $.__views.__alloyId829.add($.__views.__alloyId830);
    $.__views.__alloyId831 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId831"
    });
    $.__views.__alloyId826.add($.__views.__alloyId831);
    $.__views.__alloyId832 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId832"
    });
    $.__views.__alloyId831.add($.__views.__alloyId832);
    $.__views.__alloyId833 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId833"
    });
    $.__views.__alloyId818.add($.__views.__alloyId833);
    $.__views.__alloyId834 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId834"
    });
    $.__views.__alloyId833.add($.__views.__alloyId834);
    $.__views.__alloyId835 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId835"
    });
    $.__views.__alloyId834.add($.__views.__alloyId835);
    $.__views.__alloyId836 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId836"
    });
    $.__views.__alloyId833.add($.__views.__alloyId836);
    $.__views.__alloyId837 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId837"
    });
    $.__views.__alloyId836.add($.__views.__alloyId837);
    $.__views.__alloyId838 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId838"
    });
    $.__views.__alloyId833.add($.__views.__alloyId838);
    $.__views.__alloyId839 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId839"
    });
    $.__views.__alloyId838.add($.__views.__alloyId839);
    $.__views.__alloyId840 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId840"
    });
    $.__views.__alloyId818.add($.__views.__alloyId840);
    $.__views.__alloyId841 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId841"
    });
    $.__views.__alloyId840.add($.__views.__alloyId841);
    $.__views.__alloyId842 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId842"
    });
    $.__views.__alloyId841.add($.__views.__alloyId842);
    $.__views.__alloyId843 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId843"
    });
    $.__views.__alloyId840.add($.__views.__alloyId843);
    $.__views.__alloyId844 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId844"
    });
    $.__views.__alloyId843.add($.__views.__alloyId844);
    $.__views.__alloyId845 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId845"
    });
    $.__views.__alloyId840.add($.__views.__alloyId845);
    $.__views.__alloyId846 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId846"
    });
    $.__views.__alloyId845.add($.__views.__alloyId846);
    $.__views.__alloyId847 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId847"
    });
    $.__views.__alloyId818.add($.__views.__alloyId847);
    $.__views.__alloyId848 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId848"
    });
    $.__views.__alloyId847.add($.__views.__alloyId848);
    $.__views.__alloyId849 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId849"
    });
    $.__views.__alloyId848.add($.__views.__alloyId849);
    $.__views.__alloyId850 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId850"
    });
    $.__views.__alloyId847.add($.__views.__alloyId850);
    $.__views.__alloyId851 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId851"
    });
    $.__views.__alloyId850.add($.__views.__alloyId851);
    $.__views.__alloyId852 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId852"
    });
    $.__views.__alloyId847.add($.__views.__alloyId852);
    $.__views.__alloyId853 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId853"
    });
    $.__views.__alloyId852.add($.__views.__alloyId853);
    $.__views.__alloyId854 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId854"
    });
    $.__views.__alloyId818.add($.__views.__alloyId854);
    $.__views.__alloyId855 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId855"
    });
    $.__views.__alloyId854.add($.__views.__alloyId855);
    $.__views.__alloyId856 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId856"
    });
    $.__views.__alloyId855.add($.__views.__alloyId856);
    $.__views.__alloyId857 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId857"
    });
    $.__views.__alloyId854.add($.__views.__alloyId857);
    $.__views.__alloyId858 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId858"
    });
    $.__views.__alloyId857.add($.__views.__alloyId858);
    $.__views.__alloyId859 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId859"
    });
    $.__views.__alloyId854.add($.__views.__alloyId859);
    $.__views.__alloyId860 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId860"
    });
    $.__views.__alloyId859.add($.__views.__alloyId860);
    $.__views.__alloyId861 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId861"
    });
    $.__views.__alloyId818.add($.__views.__alloyId861);
    $.__views.__alloyId862 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId862"
    });
    $.__views.__alloyId861.add($.__views.__alloyId862);
    $.__views.__alloyId863 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId863"
    });
    $.__views.__alloyId862.add($.__views.__alloyId863);
    $.__views.__alloyId864 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId864"
    });
    $.__views.__alloyId861.add($.__views.__alloyId864);
    $.__views.__alloyId865 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId865"
    });
    $.__views.__alloyId864.add($.__views.__alloyId865);
    $.__views.__alloyId866 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId866"
    });
    $.__views.__alloyId861.add($.__views.__alloyId866);
    $.__views.__alloyId867 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId867"
    });
    $.__views.__alloyId866.add($.__views.__alloyId867);
    $.__views.__alloyId868 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId868"
    });
    $.__views.__alloyId818.add($.__views.__alloyId868);
    $.__views.__alloyId869 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId869"
    });
    $.__views.__alloyId868.add($.__views.__alloyId869);
    $.__views.__alloyId870 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId870"
    });
    $.__views.__alloyId869.add($.__views.__alloyId870);
    $.__views.__alloyId871 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId871"
    });
    $.__views.__alloyId868.add($.__views.__alloyId871);
    $.__views.__alloyId872 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId872"
    });
    $.__views.__alloyId871.add($.__views.__alloyId872);
    $.__views.__alloyId873 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId873"
    });
    $.__views.__alloyId868.add($.__views.__alloyId873);
    $.__views.__alloyId874 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId874"
    });
    $.__views.__alloyId873.add($.__views.__alloyId874);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId817,
        id: "table",
        scrollable: "true"
    });
    $.__views.iddSMS.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId814!click!back"] && $.__views.__alloyId814.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;