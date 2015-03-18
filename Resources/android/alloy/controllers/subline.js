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
        DRAWER.navigation("myAccount", 2);
    }
    function addNumber() {
        console.log("addNumber");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline";
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
    $.__views.subline = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline"
    });
    $.__views.subline && $.addTopLevelView($.__views.subline);
    $.__views.__alloyId863 = Alloy.createController("_header", {
        id: "__alloyId863",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId863.setParent($.__views.subline);
    $.__views.__alloyId864 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId864"
    });
    $.__views.subline.add($.__views.__alloyId864);
    $.__views.__alloyId865 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId865"
    });
    $.__views.__alloyId864.add($.__views.__alloyId865);
    $.__views.__alloyId866 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId866"
    });
    $.__views.__alloyId864.add($.__views.__alloyId866);
    back ? $.__views.__alloyId866.addEventListener("click", back) : __defers["$.__views.__alloyId866!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
    $.__views.__alloyId867 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId867"
    });
    $.__views.scrollView.add($.__views.__alloyId867);
    $.__views.__alloyId868 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId868"
    });
    $.__views.__alloyId867.add($.__views.__alloyId868);
    $.__views.__alloyId869 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId869"
    });
    $.__views.__alloyId868.add($.__views.__alloyId869);
    $.__views.__alloyId870 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId870"
    });
    $.__views.__alloyId869.add($.__views.__alloyId870);
    $.__views.__alloyId871 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId871"
    });
    $.__views.__alloyId869.add($.__views.__alloyId871);
    $.__views.__alloyId872 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId872"
    });
    $.__views.__alloyId867.add($.__views.__alloyId872);
    $.__views.__alloyId873 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId873"
    });
    $.__views.__alloyId872.add($.__views.__alloyId873);
    $.__views.__alloyId874 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId874"
    });
    $.__views.__alloyId867.add($.__views.__alloyId874);
    $.__views.__alloyId875 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId875"
    });
    $.__views.__alloyId874.add($.__views.__alloyId875);
    $.__views.__alloyId876 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId876"
    });
    $.__views.scrollView.add($.__views.__alloyId876);
    $.__views.__alloyId877 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId877"
    });
    $.__views.scrollView.add($.__views.__alloyId877);
    $.__views.__alloyId878 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId878"
    });
    $.__views.__alloyId877.add($.__views.__alloyId878);
    $.__views.__alloyId879 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId879"
    });
    $.__views.__alloyId878.add($.__views.__alloyId879);
    $.__views.__alloyId880 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId880"
    });
    $.__views.__alloyId879.add($.__views.__alloyId880);
    $.__views.__alloyId881 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId881"
    });
    $.__views.__alloyId879.add($.__views.__alloyId881);
    $.__views.__alloyId882 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId882"
    });
    $.__views.__alloyId877.add($.__views.__alloyId882);
    $.__views.__alloyId883 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId883"
    });
    $.__views.__alloyId882.add($.__views.__alloyId883);
    $.__views.__alloyId884 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId884"
    });
    $.__views.__alloyId877.add($.__views.__alloyId884);
    $.__views.__alloyId885 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId885"
    });
    $.__views.__alloyId884.add($.__views.__alloyId885);
    $.__views.__alloyId886 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId886"
    });
    $.__views.scrollView.add($.__views.__alloyId886);
    $.__views.__alloyId887 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId887"
    });
    $.__views.scrollView.add($.__views.__alloyId887);
    $.__views.__alloyId888 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId888"
    });
    $.__views.__alloyId887.add($.__views.__alloyId888);
    $.__views.__alloyId889 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId889"
    });
    $.__views.__alloyId888.add($.__views.__alloyId889);
    $.__views.__alloyId890 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId890"
    });
    $.__views.__alloyId889.add($.__views.__alloyId890);
    $.__views.__alloyId891 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId891"
    });
    $.__views.__alloyId889.add($.__views.__alloyId891);
    $.__views.__alloyId892 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId892"
    });
    $.__views.__alloyId887.add($.__views.__alloyId892);
    $.__views.__alloyId893 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId893"
    });
    $.__views.__alloyId892.add($.__views.__alloyId893);
    $.__views.__alloyId894 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId894"
    });
    $.__views.__alloyId887.add($.__views.__alloyId894);
    $.__views.__alloyId895 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId895"
    });
    $.__views.__alloyId894.add($.__views.__alloyId895);
    $.__views.__alloyId896 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId896"
    });
    $.__views.scrollView.add($.__views.__alloyId896);
    $.__views.__alloyId897 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId897"
    });
    $.__views.scrollView.add($.__views.__alloyId897);
    $.__views.__alloyId898 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId898"
    });
    $.__views.__alloyId897.add($.__views.__alloyId898);
    $.__views.__alloyId899 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId899"
    });
    $.__views.__alloyId898.add($.__views.__alloyId899);
    $.__views.__alloyId900 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId900"
    });
    $.__views.__alloyId899.add($.__views.__alloyId900);
    $.__views.__alloyId901 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId901"
    });
    $.__views.__alloyId899.add($.__views.__alloyId901);
    $.__views.__alloyId902 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId902"
    });
    $.__views.__alloyId897.add($.__views.__alloyId902);
    $.__views.__alloyId903 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId903"
    });
    $.__views.__alloyId902.add($.__views.__alloyId903);
    $.__views.__alloyId904 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId904"
    });
    $.__views.__alloyId897.add($.__views.__alloyId904);
    $.__views.__alloyId905 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId905"
    });
    $.__views.__alloyId904.add($.__views.__alloyId905);
    $.__views.__alloyId906 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId906"
    });
    $.__views.scrollView.add($.__views.__alloyId906);
    $.__views.__alloyId907 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId907"
    });
    $.__views.scrollView.add($.__views.__alloyId907);
    $.__views.__alloyId908 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId908"
    });
    $.__views.__alloyId907.add($.__views.__alloyId908);
    $.__views.__alloyId909 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId909"
    });
    $.__views.__alloyId908.add($.__views.__alloyId909);
    $.__views.__alloyId910 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId910"
    });
    $.__views.__alloyId909.add($.__views.__alloyId910);
    $.__views.__alloyId911 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId911"
    });
    $.__views.__alloyId909.add($.__views.__alloyId911);
    $.__views.__alloyId912 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId912"
    });
    $.__views.__alloyId907.add($.__views.__alloyId912);
    $.__views.__alloyId913 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId913"
    });
    $.__views.__alloyId912.add($.__views.__alloyId913);
    $.__views.__alloyId914 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId914"
    });
    $.__views.__alloyId907.add($.__views.__alloyId914);
    $.__views.__alloyId915 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId915"
    });
    $.__views.__alloyId914.add($.__views.__alloyId915);
    $.__views.__alloyId916 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId916"
    });
    $.__views.scrollView.add($.__views.__alloyId916);
    $.__views.__alloyId917 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId917"
    });
    $.__views.scrollView.add($.__views.__alloyId917);
    $.__views.__alloyId918 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId918"
    });
    $.__views.__alloyId917.add($.__views.__alloyId918);
    $.__views.__alloyId919 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId919"
    });
    $.__views.__alloyId918.add($.__views.__alloyId919);
    $.__views.__alloyId920 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId920"
    });
    $.__views.__alloyId919.add($.__views.__alloyId920);
    $.__views.__alloyId921 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId921"
    });
    $.__views.__alloyId919.add($.__views.__alloyId921);
    $.__views.__alloyId922 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId922"
    });
    $.__views.__alloyId917.add($.__views.__alloyId922);
    $.__views.__alloyId923 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId923"
    });
    $.__views.__alloyId922.add($.__views.__alloyId923);
    $.__views.__alloyId924 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId924"
    });
    $.__views.__alloyId917.add($.__views.__alloyId924);
    $.__views.__alloyId925 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId925"
    });
    $.__views.__alloyId924.add($.__views.__alloyId925);
    $.__views.__alloyId926 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId926"
    });
    $.__views.scrollView.add($.__views.__alloyId926);
    $.__views.__alloyId927 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId927"
    });
    $.__views.subline.add($.__views.__alloyId927);
    addNumber ? $.__views.__alloyId927.addEventListener("click", addNumber) : __defers["$.__views.__alloyId927!click!addNumber"] = true;
    $.__views.__alloyId928 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId928"
    });
    $.__views.__alloyId927.add($.__views.__alloyId928);
    $.__views.__alloyId929 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId929"
    });
    $.__views.__alloyId928.add($.__views.__alloyId929);
    $.__views.__alloyId930 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId930"
    });
    $.__views.__alloyId928.add($.__views.__alloyId930);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId866!click!back"] && $.__views.__alloyId866.addEventListener("click", back);
    __defers["$.__views.__alloyId927!click!addNumber"] && $.__views.__alloyId927.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;