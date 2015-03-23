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
    this.__controllerPath = "iddVideo";
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
    $.__views.iddVideo = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "iddVideo"
    });
    $.__views.iddVideo && $.addTopLevelView($.__views.iddVideo);
<<<<<<< HEAD
    $.__views.__alloyId875 = Alloy.createController("_header", {
        id: "__alloyId875",
        __parentSymbol: $.__views.iddVideo
    });
    $.__views.__alloyId875.setParent($.__views.iddVideo);
    $.__views.__alloyId876 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId876"
    });
    $.__views.iddVideo.add($.__views.__alloyId876);
    $.__views.__alloyId877 = Ti.UI.createLabel({
=======
    $.__views.__alloyId836 = Alloy.createController("_header", {
        id: "__alloyId836",
        __parentSymbol: $.__views.iddVideo
    });
    $.__views.__alloyId836.setParent($.__views.iddVideo);
    $.__views.__alloyId837 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId837"
    });
    $.__views.iddVideo.add($.__views.__alloyId837);
    $.__views.__alloyId838 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId877"
    });
    $.__views.__alloyId876.add($.__views.__alloyId877);
    $.__views.__alloyId878 = Ti.UI.createImageView({
=======
        id: "__alloyId838"
    });
    $.__views.__alloyId837.add($.__views.__alloyId838);
    $.__views.__alloyId839 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId878"
    });
    $.__views.__alloyId876.add($.__views.__alloyId878);
    back ? $.__views.__alloyId878.addEventListener("click", back) : __defers["$.__views.__alloyId878!click!back"] = true;
    $.__views.__alloyId879 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId879"
    });
    $.__views.iddVideo.add($.__views.__alloyId879);
    $.__views.__alloyId880 = Ti.UI.createLabel({
=======
        id: "__alloyId839"
    });
    $.__views.__alloyId837.add($.__views.__alloyId839);
    back ? $.__views.__alloyId839.addEventListener("click", back) : __defers["$.__views.__alloyId839!click!back"] = true;
    $.__views.__alloyId840 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId840"
    });
    $.__views.iddVideo.add($.__views.__alloyId840);
    $.__views.__alloyId841 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "IDD Video Calls",
        textAlign: "center",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId880"
    });
    $.__views.__alloyId879.add($.__views.__alloyId880);
    var __alloyId881 = [];
    $.__views.__alloyId882 = Ti.UI.createTableViewSection({
        id: "__alloyId882"
    });
    __alloyId881.push($.__views.__alloyId882);
    $.__views.__alloyId883 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId841"
    });
    $.__views.__alloyId840.add($.__views.__alloyId841);
    var __alloyId842 = [];
    $.__views.__alloyId843 = Ti.UI.createTableViewSection({
        id: "__alloyId843"
    });
    __alloyId842.push($.__views.__alloyId843);
    $.__views.__alloyId844 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId883"
    });
    $.__views.__alloyId882.add($.__views.__alloyId883);
    $.__views.__alloyId884 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId884"
    });
    $.__views.__alloyId883.add($.__views.__alloyId884);
    $.__views.__alloyId885 = Ti.UI.createLabel({
=======
        id: "__alloyId844"
    });
    $.__views.__alloyId843.add($.__views.__alloyId844);
    $.__views.__alloyId845 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId845"
    });
    $.__views.__alloyId844.add($.__views.__alloyId845);
    $.__views.__alloyId846 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId885"
    });
    $.__views.__alloyId884.add($.__views.__alloyId885);
    $.__views.__alloyId886 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId886"
    });
    $.__views.__alloyId883.add($.__views.__alloyId886);
    $.__views.__alloyId887 = Ti.UI.createLabel({
=======
        id: "__alloyId846"
    });
    $.__views.__alloyId845.add($.__views.__alloyId846);
    $.__views.__alloyId847 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId847"
    });
    $.__views.__alloyId844.add($.__views.__alloyId847);
    $.__views.__alloyId848 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId887"
    });
    $.__views.__alloyId886.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId888"
    });
    $.__views.__alloyId883.add($.__views.__alloyId888);
    $.__views.__alloyId889 = Ti.UI.createLabel({
=======
        id: "__alloyId848"
    });
    $.__views.__alloyId847.add($.__views.__alloyId848);
    $.__views.__alloyId849 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId849"
    });
    $.__views.__alloyId844.add($.__views.__alloyId849);
    $.__views.__alloyId850 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId889"
    });
    $.__views.__alloyId888.add($.__views.__alloyId889);
    $.__views.__alloyId890 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId850"
    });
    $.__views.__alloyId849.add($.__views.__alloyId850);
    $.__views.__alloyId851 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId890"
    });
    $.__views.__alloyId882.add($.__views.__alloyId890);
    $.__views.__alloyId891 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId891"
    });
    $.__views.__alloyId890.add($.__views.__alloyId891);
    $.__views.__alloyId892 = Ti.UI.createLabel({
=======
        id: "__alloyId851"
    });
    $.__views.__alloyId843.add($.__views.__alloyId851);
    $.__views.__alloyId852 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId852"
    });
    $.__views.__alloyId851.add($.__views.__alloyId852);
    $.__views.__alloyId853 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId892"
    });
    $.__views.__alloyId891.add($.__views.__alloyId892);
    $.__views.__alloyId893 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId893"
    });
    $.__views.__alloyId890.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createLabel({
=======
        id: "__alloyId853"
    });
    $.__views.__alloyId852.add($.__views.__alloyId853);
    $.__views.__alloyId854 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId854"
    });
    $.__views.__alloyId851.add($.__views.__alloyId854);
    $.__views.__alloyId855 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId894"
    });
    $.__views.__alloyId893.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId895"
    });
    $.__views.__alloyId890.add($.__views.__alloyId895);
    $.__views.__alloyId896 = Ti.UI.createLabel({
=======
        id: "__alloyId855"
    });
    $.__views.__alloyId854.add($.__views.__alloyId855);
    $.__views.__alloyId856 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId856"
    });
    $.__views.__alloyId851.add($.__views.__alloyId856);
    $.__views.__alloyId857 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId896"
    });
    $.__views.__alloyId895.add($.__views.__alloyId896);
    $.__views.__alloyId897 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId857"
    });
    $.__views.__alloyId856.add($.__views.__alloyId857);
    $.__views.__alloyId858 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId897"
    });
    $.__views.__alloyId882.add($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId898"
    });
    $.__views.__alloyId897.add($.__views.__alloyId898);
    $.__views.__alloyId899 = Ti.UI.createLabel({
=======
        id: "__alloyId858"
    });
    $.__views.__alloyId843.add($.__views.__alloyId858);
    $.__views.__alloyId859 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId859"
    });
    $.__views.__alloyId858.add($.__views.__alloyId859);
    $.__views.__alloyId860 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId899"
    });
    $.__views.__alloyId898.add($.__views.__alloyId899);
    $.__views.__alloyId900 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId900"
    });
    $.__views.__alloyId897.add($.__views.__alloyId900);
    $.__views.__alloyId901 = Ti.UI.createLabel({
=======
        id: "__alloyId860"
    });
    $.__views.__alloyId859.add($.__views.__alloyId860);
    $.__views.__alloyId861 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId861"
    });
    $.__views.__alloyId858.add($.__views.__alloyId861);
    $.__views.__alloyId862 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId901"
    });
    $.__views.__alloyId900.add($.__views.__alloyId901);
    $.__views.__alloyId902 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId902"
    });
    $.__views.__alloyId897.add($.__views.__alloyId902);
    $.__views.__alloyId903 = Ti.UI.createLabel({
=======
        id: "__alloyId862"
    });
    $.__views.__alloyId861.add($.__views.__alloyId862);
    $.__views.__alloyId863 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId863"
    });
    $.__views.__alloyId858.add($.__views.__alloyId863);
    $.__views.__alloyId864 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId903"
    });
    $.__views.__alloyId902.add($.__views.__alloyId903);
    $.__views.__alloyId904 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId864"
    });
    $.__views.__alloyId863.add($.__views.__alloyId864);
    $.__views.__alloyId865 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId904"
    });
    $.__views.__alloyId882.add($.__views.__alloyId904);
    $.__views.__alloyId905 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId905"
    });
    $.__views.__alloyId904.add($.__views.__alloyId905);
    $.__views.__alloyId906 = Ti.UI.createLabel({
=======
        id: "__alloyId865"
    });
    $.__views.__alloyId843.add($.__views.__alloyId865);
    $.__views.__alloyId866 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId866"
    });
    $.__views.__alloyId865.add($.__views.__alloyId866);
    $.__views.__alloyId867 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId906"
    });
    $.__views.__alloyId905.add($.__views.__alloyId906);
    $.__views.__alloyId907 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId907"
    });
    $.__views.__alloyId904.add($.__views.__alloyId907);
    $.__views.__alloyId908 = Ti.UI.createLabel({
=======
        id: "__alloyId867"
    });
    $.__views.__alloyId866.add($.__views.__alloyId867);
    $.__views.__alloyId868 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId868"
    });
    $.__views.__alloyId865.add($.__views.__alloyId868);
    $.__views.__alloyId869 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId908"
    });
    $.__views.__alloyId907.add($.__views.__alloyId908);
    $.__views.__alloyId909 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId909"
    });
    $.__views.__alloyId904.add($.__views.__alloyId909);
    $.__views.__alloyId910 = Ti.UI.createLabel({
=======
        id: "__alloyId869"
    });
    $.__views.__alloyId868.add($.__views.__alloyId869);
    $.__views.__alloyId870 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId870"
    });
    $.__views.__alloyId865.add($.__views.__alloyId870);
    $.__views.__alloyId871 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId910"
    });
    $.__views.__alloyId909.add($.__views.__alloyId910);
    $.__views.__alloyId911 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId871"
    });
    $.__views.__alloyId870.add($.__views.__alloyId871);
    $.__views.__alloyId872 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId911"
    });
    $.__views.__alloyId882.add($.__views.__alloyId911);
    $.__views.__alloyId912 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId912"
    });
    $.__views.__alloyId911.add($.__views.__alloyId912);
    $.__views.__alloyId913 = Ti.UI.createLabel({
=======
        id: "__alloyId872"
    });
    $.__views.__alloyId843.add($.__views.__alloyId872);
    $.__views.__alloyId873 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId873"
    });
    $.__views.__alloyId872.add($.__views.__alloyId873);
    $.__views.__alloyId874 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId913"
    });
    $.__views.__alloyId912.add($.__views.__alloyId913);
    $.__views.__alloyId914 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId914"
    });
    $.__views.__alloyId911.add($.__views.__alloyId914);
    $.__views.__alloyId915 = Ti.UI.createLabel({
=======
        id: "__alloyId874"
    });
    $.__views.__alloyId873.add($.__views.__alloyId874);
    $.__views.__alloyId875 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId875"
    });
    $.__views.__alloyId872.add($.__views.__alloyId875);
    $.__views.__alloyId876 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId915"
    });
    $.__views.__alloyId914.add($.__views.__alloyId915);
    $.__views.__alloyId916 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId916"
    });
    $.__views.__alloyId911.add($.__views.__alloyId916);
    $.__views.__alloyId917 = Ti.UI.createLabel({
=======
        id: "__alloyId876"
    });
    $.__views.__alloyId875.add($.__views.__alloyId876);
    $.__views.__alloyId877 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId877"
    });
    $.__views.__alloyId872.add($.__views.__alloyId877);
    $.__views.__alloyId878 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId917"
    });
    $.__views.__alloyId916.add($.__views.__alloyId917);
    $.__views.__alloyId918 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId878"
    });
    $.__views.__alloyId877.add($.__views.__alloyId878);
    $.__views.__alloyId879 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId918"
    });
    $.__views.__alloyId882.add($.__views.__alloyId918);
    $.__views.__alloyId919 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId919"
    });
    $.__views.__alloyId918.add($.__views.__alloyId919);
    $.__views.__alloyId920 = Ti.UI.createLabel({
=======
        id: "__alloyId879"
    });
    $.__views.__alloyId843.add($.__views.__alloyId879);
    $.__views.__alloyId880 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId880"
    });
    $.__views.__alloyId879.add($.__views.__alloyId880);
    $.__views.__alloyId881 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId920"
    });
    $.__views.__alloyId919.add($.__views.__alloyId920);
    $.__views.__alloyId921 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId921"
    });
    $.__views.__alloyId918.add($.__views.__alloyId921);
    $.__views.__alloyId922 = Ti.UI.createLabel({
=======
        id: "__alloyId881"
    });
    $.__views.__alloyId880.add($.__views.__alloyId881);
    $.__views.__alloyId882 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId882"
    });
    $.__views.__alloyId879.add($.__views.__alloyId882);
    $.__views.__alloyId883 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId922"
    });
    $.__views.__alloyId921.add($.__views.__alloyId922);
    $.__views.__alloyId923 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId923"
    });
    $.__views.__alloyId918.add($.__views.__alloyId923);
    $.__views.__alloyId924 = Ti.UI.createLabel({
=======
        id: "__alloyId883"
    });
    $.__views.__alloyId882.add($.__views.__alloyId883);
    $.__views.__alloyId884 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId884"
    });
    $.__views.__alloyId879.add($.__views.__alloyId884);
    $.__views.__alloyId885 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId924"
    });
    $.__views.__alloyId923.add($.__views.__alloyId924);
    $.__views.__alloyId925 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId885"
    });
    $.__views.__alloyId884.add($.__views.__alloyId885);
    $.__views.__alloyId886 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId925"
    });
    $.__views.__alloyId882.add($.__views.__alloyId925);
    $.__views.__alloyId926 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId926"
    });
    $.__views.__alloyId925.add($.__views.__alloyId926);
    $.__views.__alloyId927 = Ti.UI.createLabel({
=======
        id: "__alloyId886"
    });
    $.__views.__alloyId843.add($.__views.__alloyId886);
    $.__views.__alloyId887 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId887"
    });
    $.__views.__alloyId886.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId927"
    });
    $.__views.__alloyId926.add($.__views.__alloyId927);
    $.__views.__alloyId928 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId928"
    });
    $.__views.__alloyId925.add($.__views.__alloyId928);
    $.__views.__alloyId929 = Ti.UI.createLabel({
=======
        id: "__alloyId888"
    });
    $.__views.__alloyId887.add($.__views.__alloyId888);
    $.__views.__alloyId889 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId889"
    });
    $.__views.__alloyId886.add($.__views.__alloyId889);
    $.__views.__alloyId890 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId929"
    });
    $.__views.__alloyId928.add($.__views.__alloyId929);
    $.__views.__alloyId930 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId930"
    });
    $.__views.__alloyId925.add($.__views.__alloyId930);
    $.__views.__alloyId931 = Ti.UI.createLabel({
=======
        id: "__alloyId890"
    });
    $.__views.__alloyId889.add($.__views.__alloyId890);
    $.__views.__alloyId891 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId891"
    });
    $.__views.__alloyId886.add($.__views.__alloyId891);
    $.__views.__alloyId892 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId931"
    });
    $.__views.__alloyId930.add($.__views.__alloyId931);
    $.__views.__alloyId932 = Ti.UI.createTableViewRow({
=======
        id: "__alloyId892"
    });
    $.__views.__alloyId891.add($.__views.__alloyId892);
    $.__views.__alloyId893 = Ti.UI.createTableViewRow({
>>>>>>> origin/master
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
<<<<<<< HEAD
        id: "__alloyId932"
    });
    $.__views.__alloyId882.add($.__views.__alloyId932);
    $.__views.__alloyId933 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId933"
    });
    $.__views.__alloyId932.add($.__views.__alloyId933);
    $.__views.__alloyId934 = Ti.UI.createLabel({
=======
        id: "__alloyId893"
    });
    $.__views.__alloyId843.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId894"
    });
    $.__views.__alloyId893.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId934"
    });
    $.__views.__alloyId933.add($.__views.__alloyId934);
    $.__views.__alloyId935 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId935"
    });
    $.__views.__alloyId932.add($.__views.__alloyId935);
    $.__views.__alloyId936 = Ti.UI.createLabel({
=======
        id: "__alloyId895"
    });
    $.__views.__alloyId894.add($.__views.__alloyId895);
    $.__views.__alloyId896 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId896"
    });
    $.__views.__alloyId893.add($.__views.__alloyId896);
    $.__views.__alloyId897 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId936"
    });
    $.__views.__alloyId935.add($.__views.__alloyId936);
    $.__views.__alloyId937 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId937"
    });
    $.__views.__alloyId932.add($.__views.__alloyId937);
    $.__views.__alloyId938 = Ti.UI.createLabel({
=======
        id: "__alloyId897"
    });
    $.__views.__alloyId896.add($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId898"
    });
    $.__views.__alloyId893.add($.__views.__alloyId898);
    $.__views.__alloyId899 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId938"
    });
    $.__views.__alloyId937.add($.__views.__alloyId938);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId881,
=======
        id: "__alloyId899"
    });
    $.__views.__alloyId898.add($.__views.__alloyId899);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId842,
>>>>>>> origin/master
        id: "table",
        scrollable: "true"
    });
    $.__views.iddVideo.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
<<<<<<< HEAD
    __defers["$.__views.__alloyId878!click!back"] && $.__views.__alloyId878.addEventListener("click", back);
=======
    __defers["$.__views.__alloyId839!click!back"] && $.__views.__alloyId839.addEventListener("click", back);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;