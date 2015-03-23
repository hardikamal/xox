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
        DRAWER.navigation("accountDetails2", 1);
    }
    function domesticVoice() {
        Alloy.Globals.userPlan = "prepaid";
        DRAWER.navigation("domesticCallStatement", 1);
    }
    function domesticVideo() {
        Alloy.Globals.userPlan = "prepaid";
        DRAWER.navigation("domesticVideo", 1);
    }
    function domesticSMS() {
        Alloy.Globals.userPlan = "prepaid";
        DRAWER.navigation("domesticSMS", 1);
    }
    function iddVoice() {
        Alloy.Globals.userPlan = "prepaid";
        DRAWER.navigation("iddVoice", 1);
    }
    function iddVideo() {
        Alloy.Globals.userPlan = "prepaid";
        DRAWER.navigation("iddVideo", 1);
    }
    function iddSMS() {
        Alloy.Globals.userPlan = "prepaid";
        DRAWER.navigation("iddSMS", 1);
    }
    function roamingCalls() {
        Alloy.Globals.userPlan = "prepaid";
        DRAWER.navigation("roamingCalls", 1);
    }
    function roamingSMS() {
        Alloy.Globals.userPlan = "prepaid";
        DRAWER.navigation("roamingSMS", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidStatement";
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
    $.__views.prepaidStatement = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidStatement"
    });
    $.__views.prepaidStatement && $.addTopLevelView($.__views.prepaidStatement);
    $.__views.__alloyId1842 = Alloy.createController("_header", {
        id: "__alloyId1842",
        __parentSymbol: $.__views.prepaidStatement
    });
    $.__views.__alloyId1842.setParent($.__views.prepaidStatement);
    $.__views.__alloyId1843 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1843"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1843);
    $.__views.__alloyId1844 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1844"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1844);
    $.__views.__alloyId1845 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1845"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1845);
    back ? $.__views.__alloyId1845.addEventListener("click", back) : __defers["$.__views.__alloyId1845!click!back"] = true;
    $.__views.__alloyId1846 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1846"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1846);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId1846.add($.__views.contentView);
    $.__views.__alloyId1847 = Ti.UI.createLabel({
        text: "Prepaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1847"
    });
    $.__views.contentView.add($.__views.__alloyId1847);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        top: "10",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.paymentLabel = Ti.UI.createLabel({
        id: "paymentLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.paymentLabel);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "90%",
        top: "10",
        bottom: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
    var __alloyId1848 = [];
    $.__views.__alloyId1849 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1849"
    });
    __alloyId1848.push($.__views.__alloyId1849);
    $.__views.__alloyId1850 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1850"
    });
    __alloyId1848.push($.__views.__alloyId1850);
    $.__views.__alloyId1851 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1851"
    });
    __alloyId1848.push($.__views.__alloyId1851);
    $.__views.__alloyId1852 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1852"
    });
    __alloyId1848.push($.__views.__alloyId1852);
    $.__views.__alloyId1853 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1853"
    });
    __alloyId1848.push($.__views.__alloyId1853);
    $.__views.picker.add(__alloyId1848);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.prepaidStatement.add($.__views.scrollView);
    $.__views.__alloyId1854 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1854"
    });
    $.__views.scrollView.add($.__views.__alloyId1854);
    domesticVoice ? $.__views.__alloyId1854.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1854!click!domesticVoice"] = true;
    $.__views.__alloyId1855 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1855"
    });
    $.__views.__alloyId1854.add($.__views.__alloyId1855);
    $.__views.__alloyId1856 = Ti.UI.createLabel({
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1856"
    });
    $.__views.__alloyId1855.add($.__views.__alloyId1856);
    domesticVoice ? $.__views.__alloyId1856.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1856!click!domesticVoice"] = true;
    $.__views.__alloyId1857 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1857"
    });
    $.__views.__alloyId1854.add($.__views.__alloyId1857);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1857.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1858 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1858"
    });
    $.__views.scrollView.add($.__views.__alloyId1858);
    domesticSMS ? $.__views.__alloyId1858.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1858!click!domesticSMS"] = true;
    $.__views.__alloyId1859 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1859"
    });
    $.__views.__alloyId1858.add($.__views.__alloyId1859);
    $.__views.__alloyId1860 = Ti.UI.createLabel({
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1860"
    });
    $.__views.__alloyId1859.add($.__views.__alloyId1860);
    domesticSMS ? $.__views.__alloyId1860.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1860!click!domesticSMS"] = true;
    $.__views.__alloyId1861 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1861"
    });
    $.__views.__alloyId1858.add($.__views.__alloyId1861);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1861.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1862 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1862"
    });
    $.__views.scrollView.add($.__views.__alloyId1862);
    domesticVideo ? $.__views.__alloyId1862.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1862!click!domesticVideo"] = true;
    $.__views.__alloyId1863 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1863"
    });
    $.__views.__alloyId1862.add($.__views.__alloyId1863);
    $.__views.__alloyId1864 = Ti.UI.createLabel({
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1864"
    });
    $.__views.__alloyId1863.add($.__views.__alloyId1864);
    domesticVideo ? $.__views.__alloyId1864.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1864!click!domesticVideo"] = true;
    $.__views.__alloyId1865 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1865"
    });
    $.__views.__alloyId1862.add($.__views.__alloyId1865);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1865.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1866 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1866"
    });
    $.__views.scrollView.add($.__views.__alloyId1866);
    iddVoice ? $.__views.__alloyId1866.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1866!click!iddVoice"] = true;
    $.__views.__alloyId1867 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1867"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1867);
    $.__views.__alloyId1868 = Ti.UI.createLabel({
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1868"
    });
    $.__views.__alloyId1867.add($.__views.__alloyId1868);
    iddVoice ? $.__views.__alloyId1868.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1868!click!iddVoice"] = true;
    $.__views.__alloyId1869 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1869"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1869);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1869.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1870 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1870"
    });
    $.__views.scrollView.add($.__views.__alloyId1870);
    iddSMS ? $.__views.__alloyId1870.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1870!click!iddSMS"] = true;
    $.__views.__alloyId1871 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1871"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1871);
    $.__views.__alloyId1872 = Ti.UI.createLabel({
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1872"
    });
    $.__views.__alloyId1871.add($.__views.__alloyId1872);
    iddSMS ? $.__views.__alloyId1872.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1872!click!iddSMS"] = true;
    $.__views.__alloyId1873 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1873"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1873);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1873.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1874 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1874"
    });
    $.__views.scrollView.add($.__views.__alloyId1874);
    iddVideo ? $.__views.__alloyId1874.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1874!click!iddVideo"] = true;
    $.__views.__alloyId1875 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1875"
    });
    $.__views.__alloyId1874.add($.__views.__alloyId1875);
    $.__views.__alloyId1876 = Ti.UI.createLabel({
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1876"
    });
    $.__views.__alloyId1875.add($.__views.__alloyId1876);
    iddVideo ? $.__views.__alloyId1876.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1876!click!iddVideo"] = true;
    $.__views.__alloyId1877 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1877"
    });
    $.__views.__alloyId1874.add($.__views.__alloyId1877);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1877.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1878 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1878"
    });
    $.__views.scrollView.add($.__views.__alloyId1878);
    roamingCalls ? $.__views.__alloyId1878.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1878!click!roamingCalls"] = true;
    $.__views.__alloyId1879 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1879"
    });
    $.__views.__alloyId1878.add($.__views.__alloyId1879);
    $.__views.__alloyId1880 = Ti.UI.createLabel({
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1880"
    });
    $.__views.__alloyId1879.add($.__views.__alloyId1880);
    roamingCalls ? $.__views.__alloyId1880.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1880!click!roamingCalls"] = true;
    $.__views.__alloyId1881 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1881"
    });
    $.__views.__alloyId1878.add($.__views.__alloyId1881);
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1881.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1882 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1882"
    });
    $.__views.scrollView.add($.__views.__alloyId1882);
    roamingSMS ? $.__views.__alloyId1882.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1882!click!roamingSMS"] = true;
    $.__views.__alloyId1883 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1883"
    });
    $.__views.__alloyId1882.add($.__views.__alloyId1883);
    $.__views.__alloyId1884 = Ti.UI.createLabel({
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1884"
    });
    $.__views.__alloyId1883.add($.__views.__alloyId1884);
    roamingSMS ? $.__views.__alloyId1884.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1884!click!roamingSMS"] = true;
    $.__views.__alloyId1885 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1885"
    });
    $.__views.__alloyId1882.add($.__views.__alloyId1885);
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1885.add($.__views.arrow7);
    roamingSMS ? $.__views.arrow7.addEventListener("click", roamingSMS) : __defers["$.__views.arrow7!click!roamingSMS"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.arrow.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow2.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow3.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow4.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow5.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow6.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.arrow7.transform = Ti.UI.create2DMatrix().rotate(-90);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 220;
    "android" == Ti.Platform.osname && ($.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 220);
    __defers["$.__views.__alloyId1845!click!back"] && $.__views.__alloyId1845.addEventListener("click", back);
    __defers["$.__views.__alloyId1854!click!domesticVoice"] && $.__views.__alloyId1854.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1856!click!domesticVoice"] && $.__views.__alloyId1856.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1858!click!domesticSMS"] && $.__views.__alloyId1858.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1860!click!domesticSMS"] && $.__views.__alloyId1860.addEventListener("click", domesticSMS);
    __defers["$.__views.arrow1!click!domesticSMS"] && $.__views.arrow1.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1862!click!domesticVideo"] && $.__views.__alloyId1862.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1864!click!domesticVideo"] && $.__views.__alloyId1864.addEventListener("click", domesticVideo);
    __defers["$.__views.arrow2!click!domesticVideo"] && $.__views.arrow2.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1866!click!iddVoice"] && $.__views.__alloyId1866.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1868!click!iddVoice"] && $.__views.__alloyId1868.addEventListener("click", iddVoice);
    __defers["$.__views.arrow3!click!iddVoice"] && $.__views.arrow3.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1870!click!iddSMS"] && $.__views.__alloyId1870.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1872!click!iddSMS"] && $.__views.__alloyId1872.addEventListener("click", iddSMS);
    __defers["$.__views.arrow4!click!iddSMS"] && $.__views.arrow4.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1874!click!iddVideo"] && $.__views.__alloyId1874.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1876!click!iddVideo"] && $.__views.__alloyId1876.addEventListener("click", iddVideo);
    __defers["$.__views.arrow5!click!iddVideo"] && $.__views.arrow5.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1878!click!roamingCalls"] && $.__views.__alloyId1878.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1880!click!roamingCalls"] && $.__views.__alloyId1880.addEventListener("click", roamingCalls);
    __defers["$.__views.arrow6!click!roamingCalls"] && $.__views.arrow6.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1882!click!roamingSMS"] && $.__views.__alloyId1882.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1884!click!roamingSMS"] && $.__views.__alloyId1884.addEventListener("click", roamingSMS);
    __defers["$.__views.arrow7!click!roamingSMS"] && $.__views.arrow7.addEventListener("click", roamingSMS);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;