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
    function paymentType(e) {
        console.log("paymentType");
        paymentType = e.row.title;
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
    $.__views.__alloyId1865 = Alloy.createController("_header", {
        id: "__alloyId1865",
        __parentSymbol: $.__views.prepaidStatement
    });
    $.__views.__alloyId1865.setParent($.__views.prepaidStatement);
    $.__views.__alloyId1866 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1866"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1866);
    $.__views.__alloyId1867 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1867"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1867);
    $.__views.__alloyId1868 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1868"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1868);
    back ? $.__views.__alloyId1868.addEventListener("click", back) : __defers["$.__views.__alloyId1868!click!back"] = true;
    $.__views.__alloyId1869 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1869"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1869);
    $.__views.__alloyId1870 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId1870"
    });
    $.__views.__alloyId1869.add($.__views.__alloyId1870);
    $.__views.__alloyId1871 = Ti.UI.createLabel({
        text: "Prepaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1871"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1871);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "90%",
        top: "10",
        bottom: "10",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1870.add($.__views.picker);
    var __alloyId1872 = [];
    $.__views.__alloyId1873 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1873"
    });
    __alloyId1872.push($.__views.__alloyId1873);
    $.__views.__alloyId1874 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1874"
    });
    __alloyId1872.push($.__views.__alloyId1874);
    $.__views.__alloyId1875 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1875"
    });
    __alloyId1872.push($.__views.__alloyId1875);
    $.__views.__alloyId1876 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1876"
    });
    __alloyId1872.push($.__views.__alloyId1876);
    $.__views.__alloyId1877 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1877"
    });
    __alloyId1872.push($.__views.__alloyId1877);
    $.__views.picker.add(__alloyId1872);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1878 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1878"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1878);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.prepaidStatement.add($.__views.scrollView);
    $.__views.__alloyId1879 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1879"
    });
    $.__views.scrollView.add($.__views.__alloyId1879);
    domesticVoice ? $.__views.__alloyId1879.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1879!click!domesticVoice"] = true;
    $.__views.__alloyId1880 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1880"
    });
    $.__views.__alloyId1879.add($.__views.__alloyId1880);
    $.__views.__alloyId1881 = Ti.UI.createLabel({
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1881"
    });
    $.__views.__alloyId1880.add($.__views.__alloyId1881);
    domesticVoice ? $.__views.__alloyId1881.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1881!click!domesticVoice"] = true;
    $.__views.__alloyId1882 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1882"
    });
    $.__views.__alloyId1879.add($.__views.__alloyId1882);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1882.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1883 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1883"
    });
    $.__views.scrollView.add($.__views.__alloyId1883);
    domesticSMS ? $.__views.__alloyId1883.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1883!click!domesticSMS"] = true;
    $.__views.__alloyId1884 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1884"
    });
    $.__views.__alloyId1883.add($.__views.__alloyId1884);
    $.__views.__alloyId1885 = Ti.UI.createLabel({
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1885"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1885);
    domesticSMS ? $.__views.__alloyId1885.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1885!click!domesticSMS"] = true;
    $.__views.__alloyId1886 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1886"
    });
    $.__views.__alloyId1883.add($.__views.__alloyId1886);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1886.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1887 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1887"
    });
    $.__views.scrollView.add($.__views.__alloyId1887);
    domesticVideo ? $.__views.__alloyId1887.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1887!click!domesticVideo"] = true;
    $.__views.__alloyId1888 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1888"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1888);
    $.__views.__alloyId1889 = Ti.UI.createLabel({
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1889"
    });
    $.__views.__alloyId1888.add($.__views.__alloyId1889);
    domesticVideo ? $.__views.__alloyId1889.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1889!click!domesticVideo"] = true;
    $.__views.__alloyId1890 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1890"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1890);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1890.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1891 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1891"
    });
    $.__views.scrollView.add($.__views.__alloyId1891);
    iddVoice ? $.__views.__alloyId1891.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1891!click!iddVoice"] = true;
    $.__views.__alloyId1892 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1892"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createLabel({
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1893"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1893);
    iddVoice ? $.__views.__alloyId1893.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1893!click!iddVoice"] = true;
    $.__views.__alloyId1894 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1894);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1894.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1895 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1895"
    });
    $.__views.scrollView.add($.__views.__alloyId1895);
    iddSMS ? $.__views.__alloyId1895.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1895!click!iddSMS"] = true;
    $.__views.__alloyId1896 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1896"
    });
    $.__views.__alloyId1895.add($.__views.__alloyId1896);
    $.__views.__alloyId1897 = Ti.UI.createLabel({
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1897"
    });
    $.__views.__alloyId1896.add($.__views.__alloyId1897);
    iddSMS ? $.__views.__alloyId1897.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1897!click!iddSMS"] = true;
    $.__views.__alloyId1898 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1898"
    });
    $.__views.__alloyId1895.add($.__views.__alloyId1898);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1898.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1899 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1899"
    });
    $.__views.scrollView.add($.__views.__alloyId1899);
    iddVideo ? $.__views.__alloyId1899.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1899!click!iddVideo"] = true;
    $.__views.__alloyId1900 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1900"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createLabel({
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1901"
    });
    $.__views.__alloyId1900.add($.__views.__alloyId1901);
    iddVideo ? $.__views.__alloyId1901.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1901!click!iddVideo"] = true;
    $.__views.__alloyId1902 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1902"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1902);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1902.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1903 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1903"
    });
    $.__views.scrollView.add($.__views.__alloyId1903);
    roamingCalls ? $.__views.__alloyId1903.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1903!click!roamingCalls"] = true;
    $.__views.__alloyId1904 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1904"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1904);
    $.__views.__alloyId1905 = Ti.UI.createLabel({
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1905"
    });
    $.__views.__alloyId1904.add($.__views.__alloyId1905);
    roamingCalls ? $.__views.__alloyId1905.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1905!click!roamingCalls"] = true;
    $.__views.__alloyId1906 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1906"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1906);
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1906.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1907 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1907"
    });
    $.__views.scrollView.add($.__views.__alloyId1907);
    roamingSMS ? $.__views.__alloyId1907.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1907!click!roamingSMS"] = true;
    $.__views.__alloyId1908 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1908"
    });
    $.__views.__alloyId1907.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createLabel({
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1909"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1909);
    roamingSMS ? $.__views.__alloyId1909.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1909!click!roamingSMS"] = true;
    $.__views.__alloyId1910 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1910"
    });
    $.__views.__alloyId1907.add($.__views.__alloyId1910);
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1910.add($.__views.arrow7);
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
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 220;
    __defers["$.__views.__alloyId1868!click!back"] && $.__views.__alloyId1868.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1879!click!domesticVoice"] && $.__views.__alloyId1879.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1881!click!domesticVoice"] && $.__views.__alloyId1881.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1883!click!domesticSMS"] && $.__views.__alloyId1883.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1885!click!domesticSMS"] && $.__views.__alloyId1885.addEventListener("click", domesticSMS);
    __defers["$.__views.arrow1!click!domesticSMS"] && $.__views.arrow1.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1887!click!domesticVideo"] && $.__views.__alloyId1887.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1889!click!domesticVideo"] && $.__views.__alloyId1889.addEventListener("click", domesticVideo);
    __defers["$.__views.arrow2!click!domesticVideo"] && $.__views.arrow2.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1891!click!iddVoice"] && $.__views.__alloyId1891.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1893!click!iddVoice"] && $.__views.__alloyId1893.addEventListener("click", iddVoice);
    __defers["$.__views.arrow3!click!iddVoice"] && $.__views.arrow3.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1895!click!iddSMS"] && $.__views.__alloyId1895.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1897!click!iddSMS"] && $.__views.__alloyId1897.addEventListener("click", iddSMS);
    __defers["$.__views.arrow4!click!iddSMS"] && $.__views.arrow4.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1899!click!iddVideo"] && $.__views.__alloyId1899.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1901!click!iddVideo"] && $.__views.__alloyId1901.addEventListener("click", iddVideo);
    __defers["$.__views.arrow5!click!iddVideo"] && $.__views.arrow5.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1903!click!roamingCalls"] && $.__views.__alloyId1903.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1905!click!roamingCalls"] && $.__views.__alloyId1905.addEventListener("click", roamingCalls);
    __defers["$.__views.arrow6!click!roamingCalls"] && $.__views.arrow6.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1907!click!roamingSMS"] && $.__views.__alloyId1907.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1909!click!roamingSMS"] && $.__views.__alloyId1909.addEventListener("click", roamingSMS);
    __defers["$.__views.arrow7!click!roamingSMS"] && $.__views.arrow7.addEventListener("click", roamingSMS);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;