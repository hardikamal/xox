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
    $.__views.__alloyId1677 = Alloy.createController("_header", {
        id: "__alloyId1677",
        __parentSymbol: $.__views.prepaidStatement
    });
    $.__views.__alloyId1677.setParent($.__views.prepaidStatement);
    $.__views.__alloyId1678 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1678"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1678);
    $.__views.__alloyId1679 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1679"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1679);
    $.__views.__alloyId1680 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1680"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1680);
    back ? $.__views.__alloyId1680.addEventListener("click", back) : __defers["$.__views.__alloyId1680!click!back"] = true;
    $.__views.__alloyId1681 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1681"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1681);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId1681.add($.__views.contentView);
    $.__views.__alloyId1682 = Ti.UI.createLabel({
        text: "Prepaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1682"
    });
    $.__views.contentView.add($.__views.__alloyId1682);
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
    var __alloyId1683 = [];
    $.__views.__alloyId1684 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1684"
    });
    __alloyId1683.push($.__views.__alloyId1684);
    $.__views.__alloyId1685 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1685"
    });
    __alloyId1683.push($.__views.__alloyId1685);
    $.__views.__alloyId1686 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1686"
    });
    __alloyId1683.push($.__views.__alloyId1686);
    $.__views.__alloyId1687 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1687"
    });
    __alloyId1683.push($.__views.__alloyId1687);
    $.__views.__alloyId1688 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1688"
    });
    __alloyId1683.push($.__views.__alloyId1688);
    $.__views.picker.add(__alloyId1683);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.prepaidStatement.add($.__views.scrollView);
    $.__views.__alloyId1689 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1689"
    });
    $.__views.scrollView.add($.__views.__alloyId1689);
    domesticVoice ? $.__views.__alloyId1689.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1689!click!domesticVoice"] = true;
    $.__views.__alloyId1690 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1690"
    });
    $.__views.__alloyId1689.add($.__views.__alloyId1690);
    $.__views.__alloyId1691 = Ti.UI.createLabel({
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1691"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1691);
    domesticVoice ? $.__views.__alloyId1691.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1691!click!domesticVoice"] = true;
    $.__views.__alloyId1692 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1692"
    });
    $.__views.__alloyId1689.add($.__views.__alloyId1692);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1692.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1693 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1693"
    });
    $.__views.scrollView.add($.__views.__alloyId1693);
    domesticSMS ? $.__views.__alloyId1693.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1693!click!domesticSMS"] = true;
    $.__views.__alloyId1694 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1694"
    });
    $.__views.__alloyId1693.add($.__views.__alloyId1694);
    $.__views.__alloyId1695 = Ti.UI.createLabel({
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1695"
    });
    $.__views.__alloyId1694.add($.__views.__alloyId1695);
    domesticSMS ? $.__views.__alloyId1695.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1695!click!domesticSMS"] = true;
    $.__views.__alloyId1696 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1696"
    });
    $.__views.__alloyId1693.add($.__views.__alloyId1696);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1696.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1697 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1697"
    });
    $.__views.scrollView.add($.__views.__alloyId1697);
    domesticVideo ? $.__views.__alloyId1697.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1697!click!domesticVideo"] = true;
    $.__views.__alloyId1698 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1698"
    });
    $.__views.__alloyId1697.add($.__views.__alloyId1698);
    $.__views.__alloyId1699 = Ti.UI.createLabel({
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1699"
    });
    $.__views.__alloyId1698.add($.__views.__alloyId1699);
    domesticVideo ? $.__views.__alloyId1699.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1699!click!domesticVideo"] = true;
    $.__views.__alloyId1700 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1700"
    });
    $.__views.__alloyId1697.add($.__views.__alloyId1700);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1700.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1701 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1701"
    });
    $.__views.scrollView.add($.__views.__alloyId1701);
    iddVoice ? $.__views.__alloyId1701.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1701!click!iddVoice"] = true;
    $.__views.__alloyId1702 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1702"
    });
    $.__views.__alloyId1701.add($.__views.__alloyId1702);
    $.__views.__alloyId1703 = Ti.UI.createLabel({
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1703"
    });
    $.__views.__alloyId1702.add($.__views.__alloyId1703);
    iddVoice ? $.__views.__alloyId1703.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1703!click!iddVoice"] = true;
    $.__views.__alloyId1704 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1704"
    });
    $.__views.__alloyId1701.add($.__views.__alloyId1704);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1704.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1705 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1705"
    });
    $.__views.scrollView.add($.__views.__alloyId1705);
    iddSMS ? $.__views.__alloyId1705.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1705!click!iddSMS"] = true;
    $.__views.__alloyId1706 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1706"
    });
    $.__views.__alloyId1705.add($.__views.__alloyId1706);
    $.__views.__alloyId1707 = Ti.UI.createLabel({
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1707"
    });
    $.__views.__alloyId1706.add($.__views.__alloyId1707);
    iddSMS ? $.__views.__alloyId1707.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1707!click!iddSMS"] = true;
    $.__views.__alloyId1708 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1708"
    });
    $.__views.__alloyId1705.add($.__views.__alloyId1708);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1708.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1709 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1709"
    });
    $.__views.scrollView.add($.__views.__alloyId1709);
    iddVideo ? $.__views.__alloyId1709.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1709!click!iddVideo"] = true;
    $.__views.__alloyId1710 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1710"
    });
    $.__views.__alloyId1709.add($.__views.__alloyId1710);
    $.__views.__alloyId1711 = Ti.UI.createLabel({
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1711"
    });
    $.__views.__alloyId1710.add($.__views.__alloyId1711);
    iddVideo ? $.__views.__alloyId1711.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1711!click!iddVideo"] = true;
    $.__views.__alloyId1712 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1712"
    });
    $.__views.__alloyId1709.add($.__views.__alloyId1712);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1712.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1713 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1713"
    });
    $.__views.scrollView.add($.__views.__alloyId1713);
    roamingCalls ? $.__views.__alloyId1713.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1713!click!roamingCalls"] = true;
    $.__views.__alloyId1714 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1714"
    });
    $.__views.__alloyId1713.add($.__views.__alloyId1714);
    $.__views.__alloyId1715 = Ti.UI.createLabel({
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1715"
    });
    $.__views.__alloyId1714.add($.__views.__alloyId1715);
    roamingCalls ? $.__views.__alloyId1715.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1715!click!roamingCalls"] = true;
    $.__views.__alloyId1716 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1716"
    });
    $.__views.__alloyId1713.add($.__views.__alloyId1716);
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1716.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1717 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1717"
    });
    $.__views.scrollView.add($.__views.__alloyId1717);
    roamingSMS ? $.__views.__alloyId1717.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1717!click!roamingSMS"] = true;
    $.__views.__alloyId1718 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1718"
    });
    $.__views.__alloyId1717.add($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createLabel({
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1719"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1719);
    roamingSMS ? $.__views.__alloyId1719.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1719!click!roamingSMS"] = true;
    $.__views.__alloyId1720 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1720"
    });
    $.__views.__alloyId1717.add($.__views.__alloyId1720);
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1720.add($.__views.arrow7);
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
    __defers["$.__views.__alloyId1680!click!back"] && $.__views.__alloyId1680.addEventListener("click", back);
    __defers["$.__views.__alloyId1689!click!domesticVoice"] && $.__views.__alloyId1689.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1691!click!domesticVoice"] && $.__views.__alloyId1691.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1693!click!domesticSMS"] && $.__views.__alloyId1693.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1695!click!domesticSMS"] && $.__views.__alloyId1695.addEventListener("click", domesticSMS);
    __defers["$.__views.arrow1!click!domesticSMS"] && $.__views.arrow1.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1697!click!domesticVideo"] && $.__views.__alloyId1697.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1699!click!domesticVideo"] && $.__views.__alloyId1699.addEventListener("click", domesticVideo);
    __defers["$.__views.arrow2!click!domesticVideo"] && $.__views.arrow2.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1701!click!iddVoice"] && $.__views.__alloyId1701.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1703!click!iddVoice"] && $.__views.__alloyId1703.addEventListener("click", iddVoice);
    __defers["$.__views.arrow3!click!iddVoice"] && $.__views.arrow3.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1705!click!iddSMS"] && $.__views.__alloyId1705.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1707!click!iddSMS"] && $.__views.__alloyId1707.addEventListener("click", iddSMS);
    __defers["$.__views.arrow4!click!iddSMS"] && $.__views.arrow4.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1709!click!iddVideo"] && $.__views.__alloyId1709.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1711!click!iddVideo"] && $.__views.__alloyId1711.addEventListener("click", iddVideo);
    __defers["$.__views.arrow5!click!iddVideo"] && $.__views.arrow5.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1713!click!roamingCalls"] && $.__views.__alloyId1713.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1715!click!roamingCalls"] && $.__views.__alloyId1715.addEventListener("click", roamingCalls);
    __defers["$.__views.arrow6!click!roamingCalls"] && $.__views.arrow6.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1717!click!roamingSMS"] && $.__views.__alloyId1717.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1719!click!roamingSMS"] && $.__views.__alloyId1719.addEventListener("click", roamingSMS);
    __defers["$.__views.arrow7!click!roamingSMS"] && $.__views.arrow7.addEventListener("click", roamingSMS);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;