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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/master
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId1677 = Alloy.createController("_header", {
        id: "__alloyId1677",
=======
<<<<<<< HEAD
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
=======
    $.__views.__alloyId1345 = Alloy.createController("_header", {
        id: "__alloyId1345",
>>>>>>> origin/master
        __parentSymbol: $.__views.prepaidStatement
    });
    $.__views.__alloyId1677.setParent($.__views.prepaidStatement);
    $.__views.__alloyId1678 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1678"
    });
<<<<<<< HEAD
    $.__views.prepaidStatement.add($.__views.__alloyId1678);
    $.__views.__alloyId1679 = Ti.UI.createLabel({
=======
    $.__views.prepaidStatement.add($.__views.__alloyId1346);
    $.__views.__alloyId1347 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1679"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1679);
    $.__views.__alloyId1680 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1844"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1844);
    $.__views.__alloyId1845 = Ti.UI.createImageView({
=======
        id: "__alloyId1347"
    });
    $.__views.__alloyId1346.add($.__views.__alloyId1347);
    $.__views.__alloyId1348 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1680"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1348"
>>>>>>> origin/master
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1680);
    back ? $.__views.__alloyId1680.addEventListener("click", back) : __defers["$.__views.__alloyId1680!click!back"] = true;
    $.__views.__alloyId1681 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1681"
    });
<<<<<<< HEAD
    $.__views.prepaidStatement.add($.__views.__alloyId1681);
=======
    $.__views.prepaidStatement.add($.__views.__alloyId1349);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
<<<<<<< HEAD
    $.__views.__alloyId1681.add($.__views.contentView);
    $.__views.__alloyId1682 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1846.add($.__views.contentView);
    $.__views.__alloyId1847 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1349.add($.__views.contentView);
    $.__views.__alloyId1350 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Prepaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1682"
    });
    $.__views.contentView.add($.__views.__alloyId1682);
=======
<<<<<<< HEAD
        id: "__alloyId1847"
    });
    $.__views.contentView.add($.__views.__alloyId1847);
=======
        id: "__alloyId1350"
    });
    $.__views.contentView.add($.__views.__alloyId1350);
>>>>>>> origin/master
>>>>>>> origin/master
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
<<<<<<< HEAD
    var __alloyId1683 = [];
    $.__views.__alloyId1684 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
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
=======
    var __alloyId1351 = [];
    $.__views.__alloyId1352 = Ti.UI.createPickerRow({
>>>>>>> origin/master
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
<<<<<<< HEAD
    __alloyId1683.push($.__views.__alloyId1688);
    $.__views.picker.add(__alloyId1683);
=======
    __alloyId1351.push($.__views.__alloyId1356);
    $.__views.picker.add(__alloyId1351);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.prepaidStatement.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1689 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1854 = Ti.UI.createView({
=======
    $.__views.__alloyId1357 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1689"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1357"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1689);
    domesticVoice ? $.__views.__alloyId1689.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1689!click!domesticVoice"] = true;
    $.__views.__alloyId1690 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1690"
    });
<<<<<<< HEAD
    $.__views.__alloyId1689.add($.__views.__alloyId1690);
    $.__views.__alloyId1691 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1357.add($.__views.__alloyId1358);
    $.__views.__alloyId1359 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1691"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1359"
>>>>>>> origin/master
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1691);
    domesticVoice ? $.__views.__alloyId1691.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1691!click!domesticVoice"] = true;
    $.__views.__alloyId1692 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1692"
    });
<<<<<<< HEAD
    $.__views.__alloyId1689.add($.__views.__alloyId1692);
=======
    $.__views.__alloyId1357.add($.__views.__alloyId1360);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1692.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1693 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1857.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1858 = Ti.UI.createView({
=======
    $.__views.__alloyId1360.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1361 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1693"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1361"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1693);
    domesticSMS ? $.__views.__alloyId1693.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1693!click!domesticSMS"] = true;
    $.__views.__alloyId1694 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1694"
    });
<<<<<<< HEAD
    $.__views.__alloyId1693.add($.__views.__alloyId1694);
    $.__views.__alloyId1695 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1361.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1695"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1363"
>>>>>>> origin/master
    });
    $.__views.__alloyId1694.add($.__views.__alloyId1695);
    domesticSMS ? $.__views.__alloyId1695.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1695!click!domesticSMS"] = true;
    $.__views.__alloyId1696 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1696"
    });
<<<<<<< HEAD
    $.__views.__alloyId1693.add($.__views.__alloyId1696);
=======
    $.__views.__alloyId1361.add($.__views.__alloyId1364);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1696.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1697 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1861.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1862 = Ti.UI.createView({
=======
    $.__views.__alloyId1364.add($.__views.arrow1);
    $.__views.__alloyId1365 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1697"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1365"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1697);
    domesticVideo ? $.__views.__alloyId1697.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1697!click!domesticVideo"] = true;
    $.__views.__alloyId1698 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1698"
    });
<<<<<<< HEAD
    $.__views.__alloyId1697.add($.__views.__alloyId1698);
    $.__views.__alloyId1699 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1365.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1699"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1367"
>>>>>>> origin/master
    });
    $.__views.__alloyId1698.add($.__views.__alloyId1699);
    domesticVideo ? $.__views.__alloyId1699.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1699!click!domesticVideo"] = true;
    $.__views.__alloyId1700 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1700"
    });
<<<<<<< HEAD
    $.__views.__alloyId1697.add($.__views.__alloyId1700);
=======
    $.__views.__alloyId1365.add($.__views.__alloyId1368);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1700.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1701 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1865.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1866 = Ti.UI.createView({
=======
    $.__views.__alloyId1368.add($.__views.arrow2);
    $.__views.__alloyId1369 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1701"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1369"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1701);
    iddVoice ? $.__views.__alloyId1701.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1701!click!iddVoice"] = true;
    $.__views.__alloyId1702 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1702"
    });
<<<<<<< HEAD
    $.__views.__alloyId1701.add($.__views.__alloyId1702);
    $.__views.__alloyId1703 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1369.add($.__views.__alloyId1370);
    $.__views.__alloyId1371 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1703"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1371"
>>>>>>> origin/master
    });
    $.__views.__alloyId1702.add($.__views.__alloyId1703);
    iddVoice ? $.__views.__alloyId1703.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1703!click!iddVoice"] = true;
    $.__views.__alloyId1704 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1704"
    });
<<<<<<< HEAD
    $.__views.__alloyId1701.add($.__views.__alloyId1704);
=======
    $.__views.__alloyId1369.add($.__views.__alloyId1372);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1704.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1705 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1869.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1870 = Ti.UI.createView({
=======
    $.__views.__alloyId1372.add($.__views.arrow3);
    $.__views.__alloyId1373 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1705"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1373"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1705);
    iddSMS ? $.__views.__alloyId1705.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1705!click!iddSMS"] = true;
    $.__views.__alloyId1706 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1706"
    });
<<<<<<< HEAD
    $.__views.__alloyId1705.add($.__views.__alloyId1706);
    $.__views.__alloyId1707 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1373.add($.__views.__alloyId1374);
    $.__views.__alloyId1375 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1707"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1375"
>>>>>>> origin/master
    });
    $.__views.__alloyId1706.add($.__views.__alloyId1707);
    iddSMS ? $.__views.__alloyId1707.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1707!click!iddSMS"] = true;
    $.__views.__alloyId1708 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1708"
    });
<<<<<<< HEAD
    $.__views.__alloyId1705.add($.__views.__alloyId1708);
=======
    $.__views.__alloyId1373.add($.__views.__alloyId1376);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1708.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1709 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1873.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1874 = Ti.UI.createView({
=======
    $.__views.__alloyId1376.add($.__views.arrow4);
    $.__views.__alloyId1377 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1709"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1377"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1709);
    iddVideo ? $.__views.__alloyId1709.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1709!click!iddVideo"] = true;
    $.__views.__alloyId1710 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1710"
    });
<<<<<<< HEAD
    $.__views.__alloyId1709.add($.__views.__alloyId1710);
    $.__views.__alloyId1711 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1377.add($.__views.__alloyId1378);
    $.__views.__alloyId1379 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1711"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1379"
>>>>>>> origin/master
    });
    $.__views.__alloyId1710.add($.__views.__alloyId1711);
    iddVideo ? $.__views.__alloyId1711.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1711!click!iddVideo"] = true;
    $.__views.__alloyId1712 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1712"
    });
<<<<<<< HEAD
    $.__views.__alloyId1709.add($.__views.__alloyId1712);
=======
    $.__views.__alloyId1377.add($.__views.__alloyId1380);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1712.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1713 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1877.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1878 = Ti.UI.createView({
=======
    $.__views.__alloyId1380.add($.__views.arrow5);
    $.__views.__alloyId1381 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1713"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1381"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1713);
    roamingCalls ? $.__views.__alloyId1713.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1713!click!roamingCalls"] = true;
    $.__views.__alloyId1714 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1714"
    });
<<<<<<< HEAD
    $.__views.__alloyId1713.add($.__views.__alloyId1714);
    $.__views.__alloyId1715 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1381.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1715"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1383"
>>>>>>> origin/master
    });
    $.__views.__alloyId1714.add($.__views.__alloyId1715);
    roamingCalls ? $.__views.__alloyId1715.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1715!click!roamingCalls"] = true;
    $.__views.__alloyId1716 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1716"
    });
<<<<<<< HEAD
    $.__views.__alloyId1713.add($.__views.__alloyId1716);
=======
    $.__views.__alloyId1381.add($.__views.__alloyId1384);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1716.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1717 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1881.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1882 = Ti.UI.createView({
=======
    $.__views.__alloyId1384.add($.__views.arrow6);
    $.__views.__alloyId1385 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1717"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1385"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1717);
    roamingSMS ? $.__views.__alloyId1717.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1717!click!roamingSMS"] = true;
    $.__views.__alloyId1718 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1718"
    });
<<<<<<< HEAD
    $.__views.__alloyId1717.add($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1385.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1719"
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1387"
>>>>>>> origin/master
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1719);
    roamingSMS ? $.__views.__alloyId1719.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1719!click!roamingSMS"] = true;
    $.__views.__alloyId1720 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1720"
    });
<<<<<<< HEAD
    $.__views.__alloyId1717.add($.__views.__alloyId1720);
=======
    $.__views.__alloyId1385.add($.__views.__alloyId1388);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1720.add($.__views.arrow7);
    roamingSMS ? $.__views.arrow7.addEventListener("click", roamingSMS) : __defers["$.__views.arrow7!click!roamingSMS"] = true;
=======
<<<<<<< HEAD
    $.__views.__alloyId1885.add($.__views.arrow7);
    roamingSMS ? $.__views.arrow7.addEventListener("click", roamingSMS) : __defers["$.__views.arrow7!click!roamingSMS"] = true;
=======
    $.__views.__alloyId1388.add($.__views.arrow7);
>>>>>>> origin/master
>>>>>>> origin/master
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
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
=======
    __defers["$.__views.__alloyId1348!click!back"] && $.__views.__alloyId1348.addEventListener("click", back);
    __defers["$.__views.__alloyId1359!click!domesticVoice"] && $.__views.__alloyId1359.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;