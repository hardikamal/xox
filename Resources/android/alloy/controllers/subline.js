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
    $.__views.__alloyId704 = Alloy.createController("_header", {
        id: "__alloyId704",
        __parentSymbol: $.__views.subline
    });
    $.__views.__alloyId704.setParent($.__views.subline);
    $.__views.__alloyId705 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId705"
    });
    $.__views.subline.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId706"
    });
    $.__views.__alloyId705.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId707"
    });
    $.__views.__alloyId705.add($.__views.__alloyId707);
    back ? $.__views.__alloyId707.addEventListener("click", back) : __defers["$.__views.__alloyId707!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#E6E7E9"
    });
    $.__views.subline.add($.__views.scrollView);
    $.__views.__alloyId708 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId708"
    });
    $.__views.scrollView.add($.__views.__alloyId708);
    $.__views.__alloyId709 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId709"
    });
    $.__views.__alloyId708.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId710"
    });
    $.__views.__alloyId709.add($.__views.__alloyId710);
    $.__views.__alloyId711 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId711"
    });
    $.__views.__alloyId710.add($.__views.__alloyId711);
    $.__views.__alloyId712 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId712"
    });
    $.__views.__alloyId710.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId713"
    });
    $.__views.__alloyId708.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId714"
    });
    $.__views.__alloyId713.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId715"
    });
    $.__views.__alloyId708.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId716"
    });
    $.__views.__alloyId715.add($.__views.__alloyId716);
    $.__views.__alloyId717 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId717"
    });
    $.__views.scrollView.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId718"
    });
    $.__views.scrollView.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId719"
    });
    $.__views.__alloyId718.add($.__views.__alloyId719);
    $.__views.__alloyId720 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId720"
    });
    $.__views.__alloyId719.add($.__views.__alloyId720);
    $.__views.__alloyId721 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId721"
    });
    $.__views.__alloyId720.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId722"
    });
    $.__views.__alloyId720.add($.__views.__alloyId722);
    $.__views.__alloyId723 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId723"
    });
    $.__views.__alloyId718.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId724"
    });
    $.__views.__alloyId723.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId725"
    });
    $.__views.__alloyId718.add($.__views.__alloyId725);
    $.__views.__alloyId726 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId726"
    });
    $.__views.__alloyId725.add($.__views.__alloyId726);
    $.__views.__alloyId727 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId727"
    });
    $.__views.scrollView.add($.__views.__alloyId727);
    $.__views.__alloyId728 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId728"
    });
    $.__views.scrollView.add($.__views.__alloyId728);
    $.__views.__alloyId729 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId729"
    });
    $.__views.__alloyId728.add($.__views.__alloyId729);
    $.__views.__alloyId730 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId730"
    });
    $.__views.__alloyId729.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId731"
    });
    $.__views.__alloyId730.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId732"
    });
    $.__views.__alloyId730.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId733"
    });
    $.__views.__alloyId728.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId734"
    });
    $.__views.__alloyId733.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId735"
    });
    $.__views.__alloyId728.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId737"
    });
    $.__views.scrollView.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId738"
    });
    $.__views.scrollView.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId739"
    });
    $.__views.__alloyId738.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId740"
    });
    $.__views.__alloyId739.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId741"
    });
    $.__views.__alloyId740.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId742"
    });
    $.__views.__alloyId740.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId743"
    });
    $.__views.__alloyId738.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId744"
    });
    $.__views.__alloyId743.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId745"
    });
    $.__views.__alloyId738.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId746"
    });
    $.__views.__alloyId745.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId747"
    });
    $.__views.scrollView.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId748"
    });
    $.__views.scrollView.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId749"
    });
    $.__views.__alloyId748.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId750"
    });
    $.__views.__alloyId749.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId751"
    });
    $.__views.__alloyId750.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId752"
    });
    $.__views.__alloyId750.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId753"
    });
    $.__views.__alloyId748.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId754"
    });
    $.__views.__alloyId753.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId755"
    });
    $.__views.__alloyId748.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId756"
    });
    $.__views.__alloyId755.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        id: "__alloyId757"
    });
    $.__views.scrollView.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "white",
        id: "__alloyId758"
    });
    $.__views.scrollView.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createView({
        height: "100%",
        width: "70%",
        id: "__alloyId759"
    });
    $.__views.__alloyId758.add($.__views.__alloyId759);
    $.__views.__alloyId760 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId760"
    });
    $.__views.__alloyId759.add($.__views.__alloyId760);
    $.__views.__alloyId761 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId761"
    });
    $.__views.__alloyId760.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        color: "black",
        left: "10",
        textAlign: "left",
        id: "__alloyId762"
    });
    $.__views.__alloyId760.add($.__views.__alloyId762);
    $.__views.__alloyId763 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId763"
    });
    $.__views.__alloyId758.add($.__views.__alloyId763);
    $.__views.__alloyId764 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "40",
        image: "/images/docedit_icon.png",
        id: "__alloyId764"
    });
    $.__views.__alloyId763.add($.__views.__alloyId764);
    $.__views.__alloyId765 = Ti.UI.createView({
        height: "100%",
        width: "15%",
        id: "__alloyId765"
    });
    $.__views.__alloyId758.add($.__views.__alloyId765);
    $.__views.__alloyId766 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "40",
        height: "40",
        image: "/images/setting_icon.png",
        id: "__alloyId766"
    });
    $.__views.__alloyId765.add($.__views.__alloyId766);
    $.__views.__alloyId767 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        id: "__alloyId767"
    });
    $.__views.scrollView.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#F5F5F5",
        id: "__alloyId768"
    });
    $.__views.subline.add($.__views.__alloyId768);
    addNumber ? $.__views.__alloyId768.addEventListener("click", addNumber) : __defers["$.__views.__alloyId768!click!addNumber"] = true;
    $.__views.__alloyId769 = Ti.UI.createView({
        layout: "horizontal",
        height: "100%",
        width: Ti.UI.SIZE,
        id: "__alloyId769"
    });
    $.__views.__alloyId768.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/add_button.png",
        id: "__alloyId770"
    });
    $.__views.__alloyId769.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createLabel({
        text: "Add new number",
        height: "100%",
        color: "#9E9E9E",
        textAlign: "center",
        id: "__alloyId771"
    });
    $.__views.__alloyId769.add($.__views.__alloyId771);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    __defers["$.__views.__alloyId707!click!back"] && $.__views.__alloyId707.addEventListener("click", back);
    __defers["$.__views.__alloyId768!click!addNumber"] && $.__views.__alloyId768.addEventListener("click", addNumber);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;