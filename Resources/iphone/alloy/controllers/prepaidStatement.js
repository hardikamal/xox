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
    $.__views.__alloyId1796 = Alloy.createController("_header", {
        id: "__alloyId1796",
        __parentSymbol: $.__views.prepaidStatement
    });
    $.__views.__alloyId1796.setParent($.__views.prepaidStatement);
    $.__views.__alloyId1797 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1797"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1797);
    $.__views.__alloyId1798 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1798"
    });
    $.__views.__alloyId1797.add($.__views.__alloyId1798);
    $.__views.__alloyId1799 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1799"
    });
    $.__views.__alloyId1797.add($.__views.__alloyId1799);
    back ? $.__views.__alloyId1799.addEventListener("click", back) : __defers["$.__views.__alloyId1799!click!back"] = true;
    $.__views.__alloyId1800 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1800"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1800);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId1800.add($.__views.contentView);
    $.__views.__alloyId1801 = Ti.UI.createLabel({
        text: "Prepaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1801"
    });
    $.__views.contentView.add($.__views.__alloyId1801);
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
    var __alloyId1802 = [];
    $.__views.__alloyId1803 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1803"
    });
    __alloyId1802.push($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1804"
    });
    __alloyId1802.push($.__views.__alloyId1804);
    $.__views.__alloyId1805 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1805"
    });
    __alloyId1802.push($.__views.__alloyId1805);
    $.__views.__alloyId1806 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1806"
    });
    __alloyId1802.push($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1807"
    });
    __alloyId1802.push($.__views.__alloyId1807);
    $.__views.picker.add(__alloyId1802);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.prepaidStatement.add($.__views.scrollView);
    $.__views.__alloyId1808 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1808"
    });
    $.__views.scrollView.add($.__views.__alloyId1808);
    domesticVoice ? $.__views.__alloyId1808.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1808!click!domesticVoice"] = true;
    $.__views.__alloyId1809 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1809"
    });
    $.__views.__alloyId1808.add($.__views.__alloyId1809);
    $.__views.__alloyId1810 = Ti.UI.createLabel({
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1810"
    });
    $.__views.__alloyId1809.add($.__views.__alloyId1810);
    domesticVoice ? $.__views.__alloyId1810.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1810!click!domesticVoice"] = true;
    $.__views.__alloyId1811 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1811"
    });
    $.__views.__alloyId1808.add($.__views.__alloyId1811);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1811.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1812 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1812"
    });
    $.__views.scrollView.add($.__views.__alloyId1812);
    domesticSMS ? $.__views.__alloyId1812.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1812!click!domesticSMS"] = true;
    $.__views.__alloyId1813 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1813"
    });
    $.__views.__alloyId1812.add($.__views.__alloyId1813);
    $.__views.__alloyId1814 = Ti.UI.createLabel({
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1814"
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1814);
    domesticSMS ? $.__views.__alloyId1814.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1814!click!domesticSMS"] = true;
    $.__views.__alloyId1815 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1815"
    });
    $.__views.__alloyId1812.add($.__views.__alloyId1815);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1815.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1816 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1816"
    });
    $.__views.scrollView.add($.__views.__alloyId1816);
    domesticVideo ? $.__views.__alloyId1816.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1816!click!domesticVideo"] = true;
    $.__views.__alloyId1817 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1817"
    });
    $.__views.__alloyId1816.add($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createLabel({
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1818"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1818);
    domesticVideo ? $.__views.__alloyId1818.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1818!click!domesticVideo"] = true;
    $.__views.__alloyId1819 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1819"
    });
    $.__views.__alloyId1816.add($.__views.__alloyId1819);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1819.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1820 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1820"
    });
    $.__views.scrollView.add($.__views.__alloyId1820);
    iddVoice ? $.__views.__alloyId1820.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1820!click!iddVoice"] = true;
    $.__views.__alloyId1821 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1821"
    });
    $.__views.__alloyId1820.add($.__views.__alloyId1821);
    $.__views.__alloyId1822 = Ti.UI.createLabel({
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1822"
    });
    $.__views.__alloyId1821.add($.__views.__alloyId1822);
    iddVoice ? $.__views.__alloyId1822.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1822!click!iddVoice"] = true;
    $.__views.__alloyId1823 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1823"
    });
    $.__views.__alloyId1820.add($.__views.__alloyId1823);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1823.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1824 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1824"
    });
    $.__views.scrollView.add($.__views.__alloyId1824);
    iddSMS ? $.__views.__alloyId1824.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1824!click!iddSMS"] = true;
    $.__views.__alloyId1825 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1825"
    });
    $.__views.__alloyId1824.add($.__views.__alloyId1825);
    $.__views.__alloyId1826 = Ti.UI.createLabel({
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1826"
    });
    $.__views.__alloyId1825.add($.__views.__alloyId1826);
    iddSMS ? $.__views.__alloyId1826.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1826!click!iddSMS"] = true;
    $.__views.__alloyId1827 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1827"
    });
    $.__views.__alloyId1824.add($.__views.__alloyId1827);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1827.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1828 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1828"
    });
    $.__views.scrollView.add($.__views.__alloyId1828);
    iddVideo ? $.__views.__alloyId1828.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1828!click!iddVideo"] = true;
    $.__views.__alloyId1829 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1829"
    });
    $.__views.__alloyId1828.add($.__views.__alloyId1829);
    $.__views.__alloyId1830 = Ti.UI.createLabel({
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1830"
    });
    $.__views.__alloyId1829.add($.__views.__alloyId1830);
    iddVideo ? $.__views.__alloyId1830.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1830!click!iddVideo"] = true;
    $.__views.__alloyId1831 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1831"
    });
    $.__views.__alloyId1828.add($.__views.__alloyId1831);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1831.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1832 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1832"
    });
    $.__views.scrollView.add($.__views.__alloyId1832);
    roamingCalls ? $.__views.__alloyId1832.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1832!click!roamingCalls"] = true;
    $.__views.__alloyId1833 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1833"
    });
    $.__views.__alloyId1832.add($.__views.__alloyId1833);
    $.__views.__alloyId1834 = Ti.UI.createLabel({
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1834"
    });
    $.__views.__alloyId1833.add($.__views.__alloyId1834);
    roamingCalls ? $.__views.__alloyId1834.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1834!click!roamingCalls"] = true;
    $.__views.__alloyId1835 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1835"
    });
    $.__views.__alloyId1832.add($.__views.__alloyId1835);
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1835.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1836 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1836"
    });
    $.__views.scrollView.add($.__views.__alloyId1836);
    roamingSMS ? $.__views.__alloyId1836.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1836!click!roamingSMS"] = true;
    $.__views.__alloyId1837 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1837"
    });
    $.__views.__alloyId1836.add($.__views.__alloyId1837);
    $.__views.__alloyId1838 = Ti.UI.createLabel({
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1838"
    });
    $.__views.__alloyId1837.add($.__views.__alloyId1838);
    roamingSMS ? $.__views.__alloyId1838.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1838!click!roamingSMS"] = true;
    $.__views.__alloyId1839 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1839"
    });
    $.__views.__alloyId1836.add($.__views.__alloyId1839);
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1839.add($.__views.arrow7);
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
    __defers["$.__views.__alloyId1799!click!back"] && $.__views.__alloyId1799.addEventListener("click", back);
    __defers["$.__views.__alloyId1808!click!domesticVoice"] && $.__views.__alloyId1808.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1810!click!domesticVoice"] && $.__views.__alloyId1810.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1812!click!domesticSMS"] && $.__views.__alloyId1812.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1814!click!domesticSMS"] && $.__views.__alloyId1814.addEventListener("click", domesticSMS);
    __defers["$.__views.arrow1!click!domesticSMS"] && $.__views.arrow1.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1816!click!domesticVideo"] && $.__views.__alloyId1816.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1818!click!domesticVideo"] && $.__views.__alloyId1818.addEventListener("click", domesticVideo);
    __defers["$.__views.arrow2!click!domesticVideo"] && $.__views.arrow2.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1820!click!iddVoice"] && $.__views.__alloyId1820.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1822!click!iddVoice"] && $.__views.__alloyId1822.addEventListener("click", iddVoice);
    __defers["$.__views.arrow3!click!iddVoice"] && $.__views.arrow3.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1824!click!iddSMS"] && $.__views.__alloyId1824.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1826!click!iddSMS"] && $.__views.__alloyId1826.addEventListener("click", iddSMS);
    __defers["$.__views.arrow4!click!iddSMS"] && $.__views.arrow4.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1828!click!iddVideo"] && $.__views.__alloyId1828.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1830!click!iddVideo"] && $.__views.__alloyId1830.addEventListener("click", iddVideo);
    __defers["$.__views.arrow5!click!iddVideo"] && $.__views.arrow5.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1832!click!roamingCalls"] && $.__views.__alloyId1832.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1834!click!roamingCalls"] && $.__views.__alloyId1834.addEventListener("click", roamingCalls);
    __defers["$.__views.arrow6!click!roamingCalls"] && $.__views.arrow6.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1836!click!roamingSMS"] && $.__views.__alloyId1836.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1838!click!roamingSMS"] && $.__views.__alloyId1838.addEventListener("click", roamingSMS);
    __defers["$.__views.arrow7!click!roamingSMS"] && $.__views.arrow7.addEventListener("click", roamingSMS);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;