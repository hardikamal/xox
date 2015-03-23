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
    $.__views.__alloyId871 = Alloy.createController("_header", {
        id: "__alloyId871",
        __parentSymbol: $.__views.iddVideo
    });
    $.__views.__alloyId871.setParent($.__views.iddVideo);
    $.__views.__alloyId872 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId872"
    });
    $.__views.iddVideo.add($.__views.__alloyId872);
    $.__views.__alloyId873 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId873"
    });
    $.__views.__alloyId872.add($.__views.__alloyId873);
    $.__views.__alloyId874 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId874"
    });
    $.__views.__alloyId872.add($.__views.__alloyId874);
    back ? $.__views.__alloyId874.addEventListener("click", back) : __defers["$.__views.__alloyId874!click!back"] = true;
    $.__views.__alloyId875 = Ti.UI.createView({
        layout: "composite",
        height: "40",
        backgroundColor: "#F2F2F2",
        id: "__alloyId875"
    });
    $.__views.iddVideo.add($.__views.__alloyId875);
    $.__views.__alloyId876 = Ti.UI.createLabel({
        text: "IDD Video Calls",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId876"
    });
    $.__views.__alloyId875.add($.__views.__alloyId876);
    var __alloyId877 = [];
    $.__views.__alloyId878 = Ti.UI.createTableViewSection({
        id: "__alloyId878"
    });
    __alloyId877.push($.__views.__alloyId878);
    $.__views.__alloyId879 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId879"
    });
    $.__views.__alloyId878.add($.__views.__alloyId879);
    $.__views.__alloyId880 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId880"
    });
    $.__views.__alloyId879.add($.__views.__alloyId880);
    $.__views.__alloyId881 = Ti.UI.createLabel({
        text: "01/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId885"
    });
    $.__views.__alloyId884.add($.__views.__alloyId885);
    $.__views.__alloyId886 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId886"
    });
    $.__views.__alloyId878.add($.__views.__alloyId886);
    $.__views.__alloyId887 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId887"
    });
    $.__views.__alloyId886.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createLabel({
        text: "02/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId892"
    });
    $.__views.__alloyId891.add($.__views.__alloyId892);
    $.__views.__alloyId893 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId893"
    });
    $.__views.__alloyId878.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId894"
    });
    $.__views.__alloyId893.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createLabel({
        text: "03/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId899"
    });
    $.__views.__alloyId898.add($.__views.__alloyId899);
    $.__views.__alloyId900 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId900"
    });
    $.__views.__alloyId878.add($.__views.__alloyId900);
    $.__views.__alloyId901 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId901"
    });
    $.__views.__alloyId900.add($.__views.__alloyId901);
    $.__views.__alloyId902 = Ti.UI.createLabel({
        text: "04/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId902"
    });
    $.__views.__alloyId901.add($.__views.__alloyId902);
    $.__views.__alloyId903 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId903"
    });
    $.__views.__alloyId900.add($.__views.__alloyId903);
    $.__views.__alloyId904 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId904"
    });
    $.__views.__alloyId903.add($.__views.__alloyId904);
    $.__views.__alloyId905 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId905"
    });
    $.__views.__alloyId900.add($.__views.__alloyId905);
    $.__views.__alloyId906 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId906"
    });
    $.__views.__alloyId905.add($.__views.__alloyId906);
    $.__views.__alloyId907 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId907"
    });
    $.__views.__alloyId878.add($.__views.__alloyId907);
    $.__views.__alloyId908 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId908"
    });
    $.__views.__alloyId907.add($.__views.__alloyId908);
    $.__views.__alloyId909 = Ti.UI.createLabel({
        text: "05/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId909"
    });
    $.__views.__alloyId908.add($.__views.__alloyId909);
    $.__views.__alloyId910 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId910"
    });
    $.__views.__alloyId907.add($.__views.__alloyId910);
    $.__views.__alloyId911 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId911"
    });
    $.__views.__alloyId910.add($.__views.__alloyId911);
    $.__views.__alloyId912 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId912"
    });
    $.__views.__alloyId907.add($.__views.__alloyId912);
    $.__views.__alloyId913 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId913"
    });
    $.__views.__alloyId912.add($.__views.__alloyId913);
    $.__views.__alloyId914 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId914"
    });
    $.__views.__alloyId878.add($.__views.__alloyId914);
    $.__views.__alloyId915 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId915"
    });
    $.__views.__alloyId914.add($.__views.__alloyId915);
    $.__views.__alloyId916 = Ti.UI.createLabel({
        text: "06/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId916"
    });
    $.__views.__alloyId915.add($.__views.__alloyId916);
    $.__views.__alloyId917 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId917"
    });
    $.__views.__alloyId914.add($.__views.__alloyId917);
    $.__views.__alloyId918 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId918"
    });
    $.__views.__alloyId917.add($.__views.__alloyId918);
    $.__views.__alloyId919 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId919"
    });
    $.__views.__alloyId914.add($.__views.__alloyId919);
    $.__views.__alloyId920 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId920"
    });
    $.__views.__alloyId919.add($.__views.__alloyId920);
    $.__views.__alloyId921 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId921"
    });
    $.__views.__alloyId878.add($.__views.__alloyId921);
    $.__views.__alloyId922 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId922"
    });
    $.__views.__alloyId921.add($.__views.__alloyId922);
    $.__views.__alloyId923 = Ti.UI.createLabel({
        text: "07/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId923"
    });
    $.__views.__alloyId922.add($.__views.__alloyId923);
    $.__views.__alloyId924 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId924"
    });
    $.__views.__alloyId921.add($.__views.__alloyId924);
    $.__views.__alloyId925 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId925"
    });
    $.__views.__alloyId924.add($.__views.__alloyId925);
    $.__views.__alloyId926 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId926"
    });
    $.__views.__alloyId921.add($.__views.__alloyId926);
    $.__views.__alloyId927 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId927"
    });
    $.__views.__alloyId926.add($.__views.__alloyId927);
    $.__views.__alloyId928 = Ti.UI.createTableViewRow({
        height: "80",
        width: "100%",
        layout: "horizontal",
        separatorColor: "#000",
        id: "__alloyId928"
    });
    $.__views.__alloyId878.add($.__views.__alloyId928);
    $.__views.__alloyId929 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId929"
    });
    $.__views.__alloyId928.add($.__views.__alloyId929);
    $.__views.__alloyId930 = Ti.UI.createLabel({
        text: "08/03/2015 12:05:07",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId930"
    });
    $.__views.__alloyId929.add($.__views.__alloyId930);
    $.__views.__alloyId931 = Ti.UI.createView({
        width: "33%",
        height: "100",
        id: "__alloyId931"
    });
    $.__views.__alloyId928.add($.__views.__alloyId931);
    $.__views.__alloyId932 = Ti.UI.createLabel({
        text: "On Net 6017000000",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId932"
    });
    $.__views.__alloyId931.add($.__views.__alloyId932);
    $.__views.__alloyId933 = Ti.UI.createView({
        width: "33%",
        height: "100%",
        id: "__alloyId933"
    });
    $.__views.__alloyId928.add($.__views.__alloyId933);
    $.__views.__alloyId934 = Ti.UI.createLabel({
        text: "9 (sec) RM0.05",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId934"
    });
    $.__views.__alloyId933.add($.__views.__alloyId934);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId877,
        id: "table",
        scrollable: "true"
    });
    $.__views.iddVideo.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId874!click!back"] && $.__views.__alloyId874.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;