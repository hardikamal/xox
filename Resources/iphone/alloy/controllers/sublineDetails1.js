function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function download() {
        console.log("download");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sublineDetails1";
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
    $.__views.sublineDetails1 = Ti.UI.createView({
        layout: "composite",
        id: "sublineDetails1"
    });
    $.__views.sublineDetails1 && $.addTopLevelView($.__views.sublineDetails1);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        scrollType: "vertical",
        backgroundColor: "#FFFFFF",
        top: "0"
    });
    $.__views.sublineDetails1.add($.__views.scrollView);
    $.__views.__alloyId2745 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2745"
    });
    $.__views.scrollView.add($.__views.__alloyId2745);
    $.__views.__alloyId2746 = Ti.UI.createLabel({
        text: "Prepaid Account",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2746"
    });
    $.__views.__alloyId2745.add($.__views.__alloyId2746);
    $.__views.__alloyId2747 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2747"
    });
    $.__views.scrollView.add($.__views.__alloyId2747);
    $.__views.__alloyId2748 = Ti.UI.createLabel({
        text: "Prepaid Balance (RM)",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2748"
    });
    $.__views.__alloyId2747.add($.__views.__alloyId2748);
    $.__views.__alloyId2749 = Ti.UI.createLabel({
        text: "13.94",
        width: "25%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2749"
    });
    $.__views.__alloyId2747.add($.__views.__alloyId2749);
    $.__views.__alloyId2750 = Ti.UI.createView({
        layout: "horizontal",
        width: "25%",
        id: "__alloyId2750"
    });
    $.__views.__alloyId2747.add($.__views.__alloyId2750);
    $.__views.__alloyId2751 = Ti.UI.createLabel({
        text: "Top up",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2751"
    });
    $.__views.__alloyId2750.add($.__views.__alloyId2751);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId2750.add($.__views.arrow1);
    $.__views.__alloyId2752 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2752"
    });
    $.__views.scrollView.add($.__views.__alloyId2752);
    $.__views.__alloyId2753 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2753"
    });
    $.__views.scrollView.add($.__views.__alloyId2753);
    $.__views.__alloyId2754 = Ti.UI.createLabel({
        text: "Expiry Date",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2754"
    });
    $.__views.__alloyId2753.add($.__views.__alloyId2754);
    $.__views.__alloyId2755 = Ti.UI.createLabel({
        text: "15-Apr-2015",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2755"
    });
    $.__views.__alloyId2753.add($.__views.__alloyId2755);
    $.__views.__alloyId2756 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2756"
    });
    $.__views.scrollView.add($.__views.__alloyId2756);
    $.__views.__alloyId2757 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId2757"
    });
    $.__views.scrollView.add($.__views.__alloyId2757);
    $.__views.__alloyId2758 = Ti.UI.createLabel({
        text: "Free SMS",
        left: "5%",
        height: "50",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2758"
    });
    $.__views.__alloyId2757.add($.__views.__alloyId2758);
    $.__views.__alloyId2759 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2759"
    });
    $.__views.__alloyId2757.add($.__views.__alloyId2759);
    $.__views.__alloyId2760 = Ti.UI.createLabel({
        text: "Unutilized Free SMS",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2760"
    });
    $.__views.__alloyId2759.add($.__views.__alloyId2760);
    $.__views.__alloyId2761 = Ti.UI.createLabel({
        text: "2223",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2761"
    });
    $.__views.__alloyId2759.add($.__views.__alloyId2761);
    $.__views.__alloyId2762 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2762"
    });
    $.__views.scrollView.add($.__views.__alloyId2762);
    $.__views.__alloyId2763 = Ti.UI.createLabel({
        text: "Season Pass Counter",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2763"
    });
    $.__views.__alloyId2762.add($.__views.__alloyId2763);
    $.__views.__alloyId2764 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2764"
    });
    $.__views.scrollView.add($.__views.__alloyId2764);
    $.__views.__alloyId2765 = Ti.UI.createLabel({
        text: "Voice (minutes)",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2765"
    });
    $.__views.__alloyId2764.add($.__views.__alloyId2765);
    $.__views.__alloyId2766 = Ti.UI.createLabel({
        text: "0",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2766"
    });
    $.__views.__alloyId2764.add($.__views.__alloyId2766);
    $.__views.__alloyId2767 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2767"
    });
    $.__views.scrollView.add($.__views.__alloyId2767);
    $.__views.__alloyId2768 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2768"
    });
    $.__views.scrollView.add($.__views.__alloyId2768);
    $.__views.__alloyId2769 = Ti.UI.createLabel({
        text: "SMS",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2769"
    });
    $.__views.__alloyId2768.add($.__views.__alloyId2769);
    $.__views.__alloyId2770 = Ti.UI.createLabel({
        text: "0",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2770"
    });
    $.__views.__alloyId2768.add($.__views.__alloyId2770);
    $.__views.__alloyId2771 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId2771"
    });
    $.__views.scrollView.add($.__views.__alloyId2771);
    $.__views.__alloyId2772 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2772"
    });
    $.__views.scrollView.add($.__views.__alloyId2772);
    $.__views.__alloyId2773 = Ti.UI.createLabel({
        text: "Data",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2773"
    });
    $.__views.__alloyId2772.add($.__views.__alloyId2773);
    $.__views.__alloyId2774 = Ti.UI.createLabel({
        text: "0",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2774"
    });
    $.__views.__alloyId2772.add($.__views.__alloyId2774);
    $.__views.__alloyId2775 = Ti.UI.createView({
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2775"
    });
    $.__views.scrollView.add($.__views.__alloyId2775);
    $.__views.__alloyId2776 = Ti.UI.createLabel({
        text: "E-Wallet Account",
        backgroundColor: "transparent",
        height: "100%",
        color: "black",
        left: "20",
        id: "__alloyId2776"
    });
    $.__views.__alloyId2775.add($.__views.__alloyId2776);
    $.__views.__alloyId2777 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2777"
    });
    $.__views.scrollView.add($.__views.__alloyId2777);
    $.__views.__alloyId2778 = Ti.UI.createLabel({
        text: "E-Wallet Balance (RM)",
        width: "45%",
        left: "5%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2778"
    });
    $.__views.__alloyId2777.add($.__views.__alloyId2778);
    $.__views.__alloyId2779 = Ti.UI.createLabel({
        text: "0.00",
        width: "50%",
        height: "100%",
        backgroundColor: "transparent",
        color: "black",
        id: "__alloyId2779"
    });
    $.__views.__alloyId2777.add($.__views.__alloyId2779);
    $.__views.__alloyId2780 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        bottom: "0",
        id: "__alloyId2780"
    });
    $.__views.sublineDetails1.add($.__views.__alloyId2780);
    download ? $.__views.__alloyId2780.addEventListener("click", download) : __defers["$.__views.__alloyId2780!click!download"] = true;
    $.__views.__alloyId2781 = Ti.UI.createLabel({
        text: "Download Statement",
        color: "white",
        id: "__alloyId2781"
    });
    $.__views.__alloyId2780.add($.__views.__alloyId2781);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    $.arrow1.transform = Ti.UI.create2DMatrix().rotate(-90);
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 2e3;
    }
    __defers["$.__views.__alloyId2780!click!download"] && $.__views.__alloyId2780.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;