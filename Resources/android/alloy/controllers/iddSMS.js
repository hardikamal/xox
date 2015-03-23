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
<<<<<<< HEAD
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
=======
    $.__views.__alloyId772 = Alloy.createController("_header", {
        id: "__alloyId772",
        __parentSymbol: $.__views.iddSMS
    });
    $.__views.__alloyId772.setParent($.__views.iddSMS);
    $.__views.__alloyId773 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId773"
    });
    $.__views.iddSMS.add($.__views.__alloyId773);
    $.__views.__alloyId774 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId813"
    });
    $.__views.__alloyId812.add($.__views.__alloyId813);
    $.__views.__alloyId814 = Ti.UI.createImageView({
=======
        id: "__alloyId774"
    });
    $.__views.__alloyId773.add($.__views.__alloyId774);
    $.__views.__alloyId775 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
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
=======
        id: "__alloyId775"
    });
    $.__views.__alloyId773.add($.__views.__alloyId775);
    back ? $.__views.__alloyId775.addEventListener("click", back) : __defers["$.__views.__alloyId775!click!back"] = true;
    $.__views.__alloyId776 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId776"
    });
    $.__views.iddSMS.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "IDD SMS",
        textAlign: "center",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId816"
    });
    $.__views.__alloyId815.add($.__views.__alloyId816);
    var __alloyId817 = [];
    $.__views.__alloyId818 = Ti.UI.createTableViewSection({
        id: "__alloyId818"
    });
    __alloyId817.push($.__views.__alloyId818);
    $.__views.__alloyId819 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId777"
    });
    $.__views.__alloyId776.add($.__views.__alloyId777);
    var __alloyId778 = [];
    $.__views.__alloyId779 = Ti.UI.createTableViewSection({
        id: "__alloyId779"
    });
    __alloyId778.push($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId780"
    });
    $.__views.__alloyId779.add($.__views.__alloyId780);
    $.__views.__alloyId781 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId781"
    });
    $.__views.__alloyId780.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId782"
    });
    $.__views.__alloyId781.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId783"
    });
    $.__views.__alloyId780.add($.__views.__alloyId783);
    $.__views.__alloyId784 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId784"
    });
    $.__views.__alloyId783.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId785"
    });
    $.__views.__alloyId780.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId825"
    });
    $.__views.__alloyId824.add($.__views.__alloyId825);
    $.__views.__alloyId826 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId786"
    });
    $.__views.__alloyId785.add($.__views.__alloyId786);
    $.__views.__alloyId787 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId787"
    });
    $.__views.__alloyId779.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId788"
    });
    $.__views.__alloyId787.add($.__views.__alloyId788);
    $.__views.__alloyId789 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId789"
    });
    $.__views.__alloyId788.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId790"
    });
    $.__views.__alloyId787.add($.__views.__alloyId790);
    $.__views.__alloyId791 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId791"
    });
    $.__views.__alloyId790.add($.__views.__alloyId791);
    $.__views.__alloyId792 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId792"
    });
    $.__views.__alloyId787.add($.__views.__alloyId792);
    $.__views.__alloyId793 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId832"
    });
    $.__views.__alloyId831.add($.__views.__alloyId832);
    $.__views.__alloyId833 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId793"
    });
    $.__views.__alloyId792.add($.__views.__alloyId793);
    $.__views.__alloyId794 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId794"
    });
    $.__views.__alloyId779.add($.__views.__alloyId794);
    $.__views.__alloyId795 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId795"
    });
    $.__views.__alloyId794.add($.__views.__alloyId795);
    $.__views.__alloyId796 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId796"
    });
    $.__views.__alloyId795.add($.__views.__alloyId796);
    $.__views.__alloyId797 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId797"
    });
    $.__views.__alloyId794.add($.__views.__alloyId797);
    $.__views.__alloyId798 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId798"
    });
    $.__views.__alloyId797.add($.__views.__alloyId798);
    $.__views.__alloyId799 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId799"
    });
    $.__views.__alloyId794.add($.__views.__alloyId799);
    $.__views.__alloyId800 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId839"
    });
    $.__views.__alloyId838.add($.__views.__alloyId839);
    $.__views.__alloyId840 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId800"
    });
    $.__views.__alloyId799.add($.__views.__alloyId800);
    $.__views.__alloyId801 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId801"
    });
    $.__views.__alloyId779.add($.__views.__alloyId801);
    $.__views.__alloyId802 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId802"
    });
    $.__views.__alloyId801.add($.__views.__alloyId802);
    $.__views.__alloyId803 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId803"
    });
    $.__views.__alloyId802.add($.__views.__alloyId803);
    $.__views.__alloyId804 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId804"
    });
    $.__views.__alloyId801.add($.__views.__alloyId804);
    $.__views.__alloyId805 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId805"
    });
    $.__views.__alloyId804.add($.__views.__alloyId805);
    $.__views.__alloyId806 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId806"
    });
    $.__views.__alloyId801.add($.__views.__alloyId806);
    $.__views.__alloyId807 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId846"
    });
    $.__views.__alloyId845.add($.__views.__alloyId846);
    $.__views.__alloyId847 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId807"
    });
    $.__views.__alloyId806.add($.__views.__alloyId807);
    $.__views.__alloyId808 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId808"
    });
    $.__views.__alloyId779.add($.__views.__alloyId808);
    $.__views.__alloyId809 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId809"
    });
    $.__views.__alloyId808.add($.__views.__alloyId809);
    $.__views.__alloyId810 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId810"
    });
    $.__views.__alloyId809.add($.__views.__alloyId810);
    $.__views.__alloyId811 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId811"
    });
    $.__views.__alloyId808.add($.__views.__alloyId811);
    $.__views.__alloyId812 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId812"
    });
    $.__views.__alloyId811.add($.__views.__alloyId812);
    $.__views.__alloyId813 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId813"
    });
    $.__views.__alloyId808.add($.__views.__alloyId813);
    $.__views.__alloyId814 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId853"
    });
    $.__views.__alloyId852.add($.__views.__alloyId853);
    $.__views.__alloyId854 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId814"
    });
    $.__views.__alloyId813.add($.__views.__alloyId814);
    $.__views.__alloyId815 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId815"
    });
    $.__views.__alloyId779.add($.__views.__alloyId815);
    $.__views.__alloyId816 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId816"
    });
    $.__views.__alloyId815.add($.__views.__alloyId816);
    $.__views.__alloyId817 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId817"
    });
    $.__views.__alloyId816.add($.__views.__alloyId817);
    $.__views.__alloyId818 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId818"
    });
    $.__views.__alloyId815.add($.__views.__alloyId818);
    $.__views.__alloyId819 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId819"
    });
    $.__views.__alloyId818.add($.__views.__alloyId819);
    $.__views.__alloyId820 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId820"
    });
    $.__views.__alloyId815.add($.__views.__alloyId820);
    $.__views.__alloyId821 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId860"
    });
    $.__views.__alloyId859.add($.__views.__alloyId860);
    $.__views.__alloyId861 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId821"
    });
    $.__views.__alloyId820.add($.__views.__alloyId821);
    $.__views.__alloyId822 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId822"
    });
    $.__views.__alloyId779.add($.__views.__alloyId822);
    $.__views.__alloyId823 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId823"
    });
    $.__views.__alloyId822.add($.__views.__alloyId823);
    $.__views.__alloyId824 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId824"
    });
    $.__views.__alloyId823.add($.__views.__alloyId824);
    $.__views.__alloyId825 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId825"
    });
    $.__views.__alloyId822.add($.__views.__alloyId825);
    $.__views.__alloyId826 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId826"
    });
    $.__views.__alloyId825.add($.__views.__alloyId826);
    $.__views.__alloyId827 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId827"
    });
    $.__views.__alloyId822.add($.__views.__alloyId827);
    $.__views.__alloyId828 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId867"
    });
    $.__views.__alloyId866.add($.__views.__alloyId867);
    $.__views.__alloyId868 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId828"
    });
    $.__views.__alloyId827.add($.__views.__alloyId828);
    $.__views.__alloyId829 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
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
=======
        id: "__alloyId829"
    });
    $.__views.__alloyId779.add($.__views.__alloyId829);
    $.__views.__alloyId830 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId830"
    });
    $.__views.__alloyId829.add($.__views.__alloyId830);
    $.__views.__alloyId831 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId831"
    });
    $.__views.__alloyId830.add($.__views.__alloyId831);
    $.__views.__alloyId832 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId832"
    });
    $.__views.__alloyId829.add($.__views.__alloyId832);
    $.__views.__alloyId833 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
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
=======
        id: "__alloyId833"
    });
    $.__views.__alloyId832.add($.__views.__alloyId833);
    $.__views.__alloyId834 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId834"
    });
    $.__views.__alloyId829.add($.__views.__alloyId834);
    $.__views.__alloyId835 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId874"
    });
    $.__views.__alloyId873.add($.__views.__alloyId874);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId817,
=======
        id: "__alloyId835"
    });
    $.__views.__alloyId834.add($.__views.__alloyId835);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId778,
>>>>>>> origin/master
        id: "table",
        scrollable: "true"
    });
    $.__views.iddSMS.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId814!click!back"] && $.__views.__alloyId814.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId775!click!back"] && $.__views.__alloyId775.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;