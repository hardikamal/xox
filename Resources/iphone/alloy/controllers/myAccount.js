function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function faq() {
        DRAWER.navigation("faq", 1);
    }
    function accDetail() {
        DRAWER.navigation("accountDetails", 1);
    }
    function payment() {
        DRAWER.navigation("payment", 1);
    }
    function subline() {
        DRAWER.navigation("subline", 1);
    }
    function vas() {
        DRAWER.navigation("vas", 1);
    }
    function seasonPass() {
        DRAWER.navigation("seasonPass", 1);
    }
    function loyalty() {
        DRAWER.navigation("loyalty", 1);
    }
    function report() {
        DRAWER.navigation("report", 1);
    }
    function editPhoto() {
        console.log("editPhoto");
        $.photo.zIndex = 2;
    }
    function close() {
        console.log("close");
        $.photo.zIndex = 0;
    }
    function gallery() {
        console.log("gallery");
        $.photo.zIndex = 0;
    }
    function facebook() {
        console.log("facebook");
        $.photo.zIndex = 0;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "myAccount";
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
    $.__views.myAccount = Ti.UI.createView({
        backgroundColor: "black",
        layout: "composite",
        id: "myAccount"
    });
    $.__views.myAccount && $.addTopLevelView($.__views.myAccount);
    $.__views.__alloyId765 = Alloy.createController("_header", {
        id: "__alloyId765",
        __parentSymbol: $.__views.myAccount
    });
    $.__views.__alloyId765.setParent($.__views.myAccount);
    $.__views.photo = Ti.UI.createView({
        id: "photo",
        backgroundColor: "black",
        zIndex: "0",
        top: "50"
    });
    $.__views.myAccount.add($.__views.photo);
    $.__views.__alloyId766 = Ti.UI.createView({
        layout: "vertical",
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        id: "__alloyId766"
    });
    $.__views.photo.add($.__views.__alloyId766);
    $.__views.__alloyId767 = Ti.UI.createView({
        layout: "composite",
        height: "30%",
        id: "__alloyId767"
    });
    $.__views.__alloyId766.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createLabel({
        text: "Choose an option",
        left: "10",
        color: "#E6E7E9",
        id: "__alloyId768"
    });
    $.__views.__alloyId767.add($.__views.__alloyId768);
    $.__views.__alloyId769 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "20",
        height: "20",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId769"
    });
    $.__views.__alloyId767.add($.__views.__alloyId769);
    close ? $.__views.__alloyId769.addEventListener("click", close) : __defers["$.__views.__alloyId769!click!close"] = true;
    $.__views.__alloyId770 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#4CC4D2",
        id: "__alloyId770"
    });
    $.__views.__alloyId766.add($.__views.__alloyId770);
    gallery ? $.__views.__alloyId770.addEventListener("click", gallery) : __defers["$.__views.__alloyId770!click!gallery"] = true;
    $.__views.__alloyId771 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId771"
    });
    $.__views.__alloyId770.add($.__views.__alloyId771);
    $.__views.__alloyId772 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/gallery_icon.png",
        id: "__alloyId772"
    });
    $.__views.__alloyId771.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createView({
        id: "__alloyId773"
    });
    $.__views.__alloyId770.add($.__views.__alloyId773);
    $.__views.__alloyId774 = Ti.UI.createLabel({
        text: "Photo Gallery",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId774"
    });
    $.__views.__alloyId773.add($.__views.__alloyId774);
    $.__views.__alloyId775 = Ti.UI.createView({
        layout: "horizontal",
        height: "35%",
        backgroundColor: "#3E6AC3",
        id: "__alloyId775"
    });
    $.__views.__alloyId766.add($.__views.__alloyId775);
    facebook ? $.__views.__alloyId775.addEventListener("click", facebook) : __defers["$.__views.__alloyId775!click!facebook"] = true;
    $.__views.__alloyId776 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "__alloyId776"
    });
    $.__views.__alloyId775.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "32",
        height: "32",
        left: "10",
        image: "/images/facebook_icon.png",
        id: "__alloyId777"
    });
    $.__views.__alloyId776.add($.__views.__alloyId777);
    $.__views.__alloyId778 = Ti.UI.createView({
        id: "__alloyId778"
    });
    $.__views.__alloyId775.add($.__views.__alloyId778);
    $.__views.__alloyId779 = Ti.UI.createLabel({
        text: "Connect with Facebook",
        color: "white",
        textAlign: "left",
        left: "10",
        id: "__alloyId779"
    });
    $.__views.__alloyId778.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        top: "50",
        zIndex: "1",
        id: "__alloyId780"
    });
    $.__views.myAccount.add($.__views.__alloyId780);
    $.__views.__alloyId781 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        backgroundColor: "red",
        id: "__alloyId781"
    });
    $.__views.__alloyId780.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId782"
    });
    $.__views.__alloyId781.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createLabel({
        text: "Hello!",
        color: "white",
        left: "10",
        top: "10",
        id: "__alloyId783"
    });
    $.__views.__alloyId782.add($.__views.__alloyId783);
    $.__views.__alloyId784 = Ti.UI.createLabel({
        text: "John Smith",
        color: "white",
        left: "10",
        bottom: "10",
        id: "__alloyId784"
    });
    $.__views.__alloyId782.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createView({
        width: "33%",
        id: "__alloyId785"
    });
    $.__views.__alloyId781.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createView({
        width: "auto",
        height: Ti.UI.FILL,
        id: "__alloyId786"
    });
    $.__views.__alloyId781.add($.__views.__alloyId786);
    $.__views.__alloyId787 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/profile_images.png",
        borderRadius: "40",
        id: "__alloyId787"
    });
    $.__views.__alloyId786.add($.__views.__alloyId787);
    editPhoto ? $.__views.__alloyId787.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId787!click!editPhoto"] = true;
    $.__views.__alloyId788 = Ti.UI.createImageView({
        width: "20",
        height: "20",
        image: "/images/profileedit_icon.png",
        borderRadius: "10",
        bottom: "10",
        id: "__alloyId788"
    });
    $.__views.__alloyId786.add($.__views.__alloyId788);
    editPhoto ? $.__views.__alloyId788.addEventListener("click", editPhoto) : __defers["$.__views.__alloyId788!click!editPhoto"] = true;
    $.__views.__alloyId789 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        backgroundColor: "#F5F5F5",
        id: "__alloyId789"
    });
    $.__views.__alloyId780.add($.__views.__alloyId789);
    $.__views.__alloyId790 = Ti.UI.createView({
        layout: "composite",
        width: "50%",
        id: "__alloyId790"
    });
    $.__views.__alloyId789.add($.__views.__alloyId790);
    $.__views.__alloyId791 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId791"
    });
    $.__views.__alloyId790.add($.__views.__alloyId791);
    $.__views.__alloyId792 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "#878787",
        left: "10",
        id: "__alloyId792"
    });
    $.__views.__alloyId791.add($.__views.__alloyId792);
    $.__views.__alloyId793 = Ti.UI.createLabel({
        text: "85.05",
        color: "black",
        left: "10",
        id: "__alloyId793"
    });
    $.__views.__alloyId791.add($.__views.__alloyId793);
    $.__views.__alloyId794 = Ti.UI.createView({
        layout: "composite",
        width: "auto",
        id: "__alloyId794"
    });
    $.__views.__alloyId789.add($.__views.__alloyId794);
    $.__views.__alloyId795 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId795"
    });
    $.__views.__alloyId794.add($.__views.__alloyId795);
    $.__views.__alloyId796 = Ti.UI.createLabel({
        text: "Expiry Date",
        color: "#878787",
        left: "10",
        bottom: "2.5",
        id: "__alloyId796"
    });
    $.__views.__alloyId795.add($.__views.__alloyId796);
    $.__views.__alloyId797 = Ti.UI.createLabel({
        text: "1 Dec 2015",
        color: "black",
        left: "10",
        top: "2.5",
        id: "__alloyId797"
    });
    $.__views.__alloyId795.add($.__views.__alloyId797);
    $.__views.__alloyId798 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId798"
    });
    $.__views.__alloyId780.add($.__views.__alloyId798);
    $.__views.__alloyId799 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId799"
    });
    $.__views.__alloyId798.add($.__views.__alloyId799);
    $.__views.__alloyId800 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId800"
    });
    $.__views.__alloyId799.add($.__views.__alloyId800);
    $.__views.__alloyId801 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_01.png",
        id: "__alloyId801"
    });
    $.__views.__alloyId800.add($.__views.__alloyId801);
    accDetail ? $.__views.__alloyId801.addEventListener("click", accDetail) : __defers["$.__views.__alloyId801!click!accDetail"] = true;
    $.__views.__alloyId802 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId802"
    });
    $.__views.__alloyId799.add($.__views.__alloyId802);
    $.__views.__alloyId803 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_03.png",
        id: "__alloyId803"
    });
    $.__views.__alloyId802.add($.__views.__alloyId803);
    payment ? $.__views.__alloyId803.addEventListener("click", payment) : __defers["$.__views.__alloyId803!click!payment"] = true;
    $.__views.__alloyId804 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId804"
    });
    $.__views.__alloyId799.add($.__views.__alloyId804);
    $.__views.__alloyId805 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_04.png",
        id: "__alloyId805"
    });
    $.__views.__alloyId804.add($.__views.__alloyId805);
    subline ? $.__views.__alloyId805.addEventListener("click", subline) : __defers["$.__views.__alloyId805!click!subline"] = true;
    $.__views.__alloyId806 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId806"
    });
    $.__views.__alloyId798.add($.__views.__alloyId806);
    $.__views.__alloyId807 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId807"
    });
    $.__views.__alloyId806.add($.__views.__alloyId807);
    $.__views.__alloyId808 = Ti.UI.createLabel({
        text: "Account Details",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId808"
    });
    $.__views.__alloyId807.add($.__views.__alloyId808);
    accDetail ? $.__views.__alloyId808.addEventListener("click", accDetail) : __defers["$.__views.__alloyId808!click!accDetail"] = true;
    $.__views.__alloyId809 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId809"
    });
    $.__views.__alloyId806.add($.__views.__alloyId809);
    $.__views.__alloyId810 = Ti.UI.createLabel({
        text: "Payment",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId810"
    });
    $.__views.__alloyId809.add($.__views.__alloyId810);
    payment ? $.__views.__alloyId810.addEventListener("click", payment) : __defers["$.__views.__alloyId810!click!payment"] = true;
    $.__views.__alloyId811 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId811"
    });
    $.__views.__alloyId806.add($.__views.__alloyId811);
    $.__views.__alloyId812 = Ti.UI.createLabel({
        text: "Subline Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId812"
    });
    $.__views.__alloyId811.add($.__views.__alloyId812);
    subline ? $.__views.__alloyId812.addEventListener("click", subline) : __defers["$.__views.__alloyId812!click!subline"] = true;
    $.__views.__alloyId813 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId813"
    });
    $.__views.__alloyId798.add($.__views.__alloyId813);
    $.__views.__alloyId814 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId814"
    });
    $.__views.__alloyId813.add($.__views.__alloyId814);
    $.__views.__alloyId815 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_05.png",
        id: "__alloyId815"
    });
    $.__views.__alloyId814.add($.__views.__alloyId815);
    vas ? $.__views.__alloyId815.addEventListener("click", vas) : __defers["$.__views.__alloyId815!click!vas"] = true;
    $.__views.__alloyId816 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId816"
    });
    $.__views.__alloyId813.add($.__views.__alloyId816);
    $.__views.__alloyId817 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_06.png",
        id: "__alloyId817"
    });
    $.__views.__alloyId816.add($.__views.__alloyId817);
    seasonPass ? $.__views.__alloyId817.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId817!click!seasonPass"] = true;
    $.__views.__alloyId818 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId818"
    });
    $.__views.__alloyId813.add($.__views.__alloyId818);
    $.__views.__alloyId819 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_07.png",
        id: "__alloyId819"
    });
    $.__views.__alloyId818.add($.__views.__alloyId819);
    loyalty ? $.__views.__alloyId819.addEventListener("click", loyalty) : __defers["$.__views.__alloyId819!click!loyalty"] = true;
    $.__views.__alloyId820 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId820"
    });
    $.__views.__alloyId798.add($.__views.__alloyId820);
    $.__views.__alloyId821 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId821"
    });
    $.__views.__alloyId820.add($.__views.__alloyId821);
    $.__views.__alloyId822 = Ti.UI.createLabel({
        text: "VAS Management",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId822"
    });
    $.__views.__alloyId821.add($.__views.__alloyId822);
    vas ? $.__views.__alloyId822.addEventListener("click", vas) : __defers["$.__views.__alloyId822!click!vas"] = true;
    $.__views.__alloyId823 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId823"
    });
    $.__views.__alloyId820.add($.__views.__alloyId823);
    $.__views.__alloyId824 = Ti.UI.createLabel({
        text: "Season Pass",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId824"
    });
    $.__views.__alloyId823.add($.__views.__alloyId824);
    seasonPass ? $.__views.__alloyId824.addEventListener("click", seasonPass) : __defers["$.__views.__alloyId824!click!seasonPass"] = true;
    $.__views.__alloyId825 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId825"
    });
    $.__views.__alloyId820.add($.__views.__alloyId825);
    $.__views.__alloyId826 = Ti.UI.createLabel({
        text: "Loyalty",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId826"
    });
    $.__views.__alloyId825.add($.__views.__alloyId826);
    loyalty ? $.__views.__alloyId826.addEventListener("click", loyalty) : __defers["$.__views.__alloyId826!click!loyalty"] = true;
    $.__views.__alloyId827 = Ti.UI.createView({
        layout: "horizontal",
        height: "40%",
        width: Ti.UI.FILL,
        id: "__alloyId827"
    });
    $.__views.__alloyId798.add($.__views.__alloyId827);
    $.__views.__alloyId828 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId828"
    });
    $.__views.__alloyId827.add($.__views.__alloyId828);
    $.__views.__alloyId829 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_08.png",
        id: "__alloyId829"
    });
    $.__views.__alloyId828.add($.__views.__alloyId829);
    report ? $.__views.__alloyId829.addEventListener("click", report) : __defers["$.__views.__alloyId829!click!report"] = true;
    $.__views.__alloyId830 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId830"
    });
    $.__views.__alloyId827.add($.__views.__alloyId830);
    $.__views.__alloyId831 = Ti.UI.createImageView({
        width: "80",
        height: "80",
        image: "/images/acc_button_09.png",
        id: "__alloyId831"
    });
    $.__views.__alloyId830.add($.__views.__alloyId831);
    faq ? $.__views.__alloyId831.addEventListener("click", faq) : __defers["$.__views.__alloyId831!click!faq"] = true;
    $.__views.__alloyId832 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        width: Ti.UI.FILL,
        id: "__alloyId832"
    });
    $.__views.__alloyId798.add($.__views.__alloyId832);
    $.__views.__alloyId833 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId833"
    });
    $.__views.__alloyId832.add($.__views.__alloyId833);
    $.__views.__alloyId834 = Ti.UI.createLabel({
        text: "Report Case",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId834"
    });
    $.__views.__alloyId833.add($.__views.__alloyId834);
    report ? $.__views.__alloyId834.addEventListener("click", report) : __defers["$.__views.__alloyId834!click!report"] = true;
    $.__views.__alloyId835 = Ti.UI.createView({
        width: "33%",
        height: Ti.UI.FILL,
        id: "__alloyId835"
    });
    $.__views.__alloyId832.add($.__views.__alloyId835);
    $.__views.__alloyId836 = Ti.UI.createLabel({
        text: "FAQs",
        color: "#41B9C7",
        textAlign: "center",
        top: "0",
        id: "__alloyId836"
    });
    $.__views.__alloyId835.add($.__views.__alloyId836);
    faq ? $.__views.__alloyId836.addEventListener("click", faq) : __defers["$.__views.__alloyId836!click!faq"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId769!click!close"] && $.__views.__alloyId769.addEventListener("click", close);
    __defers["$.__views.__alloyId770!click!gallery"] && $.__views.__alloyId770.addEventListener("click", gallery);
    __defers["$.__views.__alloyId775!click!facebook"] && $.__views.__alloyId775.addEventListener("click", facebook);
    __defers["$.__views.__alloyId787!click!editPhoto"] && $.__views.__alloyId787.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId788!click!editPhoto"] && $.__views.__alloyId788.addEventListener("click", editPhoto);
    __defers["$.__views.__alloyId801!click!accDetail"] && $.__views.__alloyId801.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId803!click!payment"] && $.__views.__alloyId803.addEventListener("click", payment);
    __defers["$.__views.__alloyId805!click!subline"] && $.__views.__alloyId805.addEventListener("click", subline);
    __defers["$.__views.__alloyId808!click!accDetail"] && $.__views.__alloyId808.addEventListener("click", accDetail);
    __defers["$.__views.__alloyId810!click!payment"] && $.__views.__alloyId810.addEventListener("click", payment);
    __defers["$.__views.__alloyId812!click!subline"] && $.__views.__alloyId812.addEventListener("click", subline);
    __defers["$.__views.__alloyId815!click!vas"] && $.__views.__alloyId815.addEventListener("click", vas);
    __defers["$.__views.__alloyId817!click!seasonPass"] && $.__views.__alloyId817.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId819!click!loyalty"] && $.__views.__alloyId819.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId822!click!vas"] && $.__views.__alloyId822.addEventListener("click", vas);
    __defers["$.__views.__alloyId824!click!seasonPass"] && $.__views.__alloyId824.addEventListener("click", seasonPass);
    __defers["$.__views.__alloyId826!click!loyalty"] && $.__views.__alloyId826.addEventListener("click", loyalty);
    __defers["$.__views.__alloyId829!click!report"] && $.__views.__alloyId829.addEventListener("click", report);
    __defers["$.__views.__alloyId831!click!faq"] && $.__views.__alloyId831.addEventListener("click", faq);
    __defers["$.__views.__alloyId834!click!report"] && $.__views.__alloyId834.addEventListener("click", report);
    __defers["$.__views.__alloyId836!click!faq"] && $.__views.__alloyId836.addEventListener("click", faq);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;