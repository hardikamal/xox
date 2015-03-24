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
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("domesticCallStatement", 1);
    }
    function domesticVideo() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("domesticVideo", 1);
    }
    function domesticSMS() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("domesticSMS", 1);
    }
    function iddVoice() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("iddVoice", 1);
    }
    function iddVideo() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("iddVideo", 1);
    }
    function iddSMS() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("iddSMS", 1);
    }
    function roamingCalls() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("roamingCalls", 1);
    }
    function roamingSMS() {
        Alloy.Globals.userPlan = "postpaid";
        DRAWER.navigation("roamingSMS", 1);
    }
    function download() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "postpaidStatement";
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
    $.__views.postpaidStatement = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "postpaidStatement"
    });
    $.__views.postpaidStatement && $.addTopLevelView($.__views.postpaidStatement);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
    $.__views.__alloyId1448 = Alloy.createController("_header", {
        id: "__alloyId1448",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1448.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1449 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1449"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1449);
    $.__views.__alloyId1450 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1677 = Alloy.createController("_header", {
        id: "__alloyId1677",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1677.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1678 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1678"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1678);
    $.__views.__alloyId1679 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1448 = Alloy.createController("_header", {
        id: "__alloyId1448",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1448.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1449 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1449"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1449);
    $.__views.__alloyId1450 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1679"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1679);
    $.__views.__alloyId1680 = Ti.UI.createImageView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1450"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createImageView({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1451"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1451);
    back ? $.__views.__alloyId1451.addEventListener("click", back) : __defers["$.__views.__alloyId1451!click!back"] = true;
    $.__views.__alloyId1452 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1452"
<<<<<<< HEAD
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1452);
=======
<<<<<<< HEAD
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
    $.__views.postpaidStatement.add($.__views.__alloyId1681);
=======
        id: "__alloyId1451"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1451);
    back ? $.__views.__alloyId1451.addEventListener("click", back) : __defers["$.__views.__alloyId1451!click!back"] = true;
    $.__views.__alloyId1452 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1452"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1452);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1452);
>>>>>>> origin/master
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1452.add($.__views.contentView);
    $.__views.__alloyId1453 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1681.add($.__views.contentView);
    $.__views.__alloyId1682 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1452.add($.__views.contentView);
    $.__views.__alloyId1453 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1452.add($.__views.contentView);
    $.__views.__alloyId1453 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Postpaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1453"
    });
    $.__views.contentView.add($.__views.__alloyId1453);
=======
<<<<<<< HEAD
        id: "__alloyId1682"
    });
    $.__views.contentView.add($.__views.__alloyId1682);
=======
        id: "__alloyId1453"
    });
    $.__views.contentView.add($.__views.__alloyId1453);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1453"
    });
    $.__views.contentView.add($.__views.__alloyId1453);
>>>>>>> origin/master
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        width: "70%",
        top: "10"
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    var __alloyId1454 = [];
    $.__views.__alloyId1455 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1455"
    });
    __alloyId1454.push($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1456"
    });
    __alloyId1454.push($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1457"
    });
    __alloyId1454.push($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1458"
    });
    __alloyId1454.push($.__views.__alloyId1458);
    $.__views.__alloyId1459 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1459"
    });
    __alloyId1454.push($.__views.__alloyId1459);
    $.__views.picker.add(__alloyId1454);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    var __alloyId1454 = [];
    $.__views.__alloyId1455 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1455"
    });
    __alloyId1454.push($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1456"
    });
    __alloyId1454.push($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1457"
    });
    __alloyId1454.push($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1458"
    });
    __alloyId1454.push($.__views.__alloyId1458);
    $.__views.__alloyId1459 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1459"
    });
    __alloyId1454.push($.__views.__alloyId1459);
    $.__views.picker.add(__alloyId1454);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.postpaidStatement.add($.__views.scrollView);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1460 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1689 = Ti.UI.createView({
=======
    $.__views.__alloyId1460 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1460 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1460"
    });
    $.__views.scrollView.add($.__views.__alloyId1460);
    domesticVoice ? $.__views.__alloyId1460.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1460!click!domesticVoice"] = true;
    $.__views.__alloyId1461 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1461"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/master
        id: "__alloyId1460"
    });
    $.__views.scrollView.add($.__views.__alloyId1460);
    domesticVoice ? $.__views.__alloyId1460.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1460!click!domesticVoice"] = true;
    $.__views.__alloyId1461 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1461"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createLabel({
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1462"
    });
    $.__views.__alloyId1461.add($.__views.__alloyId1462);
    domesticVoice ? $.__views.__alloyId1462.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1462!click!domesticVoice"] = true;
    $.__views.__alloyId1463 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1463);
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1462"
    });
    $.__views.__alloyId1461.add($.__views.__alloyId1462);
    domesticVoice ? $.__views.__alloyId1462.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1462!click!domesticVoice"] = true;
    $.__views.__alloyId1463 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1460.add($.__views.__alloyId1463);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1463.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1464 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1692.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1693 = Ti.UI.createView({
=======
    $.__views.__alloyId1463.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1464 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1463.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1464 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1464"
    });
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1464"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView.add($.__views.__alloyId1464);
    domesticSMS ? $.__views.__alloyId1464.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1464!click!domesticSMS"] = true;
    $.__views.__alloyId1465 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1464"
    });
    $.__views.scrollView.add($.__views.__alloyId1464);
    domesticSMS ? $.__views.__alloyId1464.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1464!click!domesticSMS"] = true;
    $.__views.__alloyId1465 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1466"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1466);
    domesticSMS ? $.__views.__alloyId1466.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1466!click!domesticSMS"] = true;
    $.__views.__alloyId1467 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1467"
<<<<<<< HEAD
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1467);
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1466"
    });
    $.__views.__alloyId1465.add($.__views.__alloyId1466);
    domesticSMS ? $.__views.__alloyId1466.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1466!click!domesticSMS"] = true;
    $.__views.__alloyId1467 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1467"
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1467);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1467);
>>>>>>> origin/master
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1467.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1468 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1696.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1697 = Ti.UI.createView({
=======
    $.__views.__alloyId1467.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1468 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1467.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1468 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1468"
    });
    $.__views.scrollView.add($.__views.__alloyId1468);
    domesticVideo ? $.__views.__alloyId1468.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1468!click!domesticVideo"] = true;
    $.__views.__alloyId1469 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/master
        id: "__alloyId1468"
    });
    $.__views.scrollView.add($.__views.__alloyId1468);
    domesticVideo ? $.__views.__alloyId1468.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1468!click!domesticVideo"] = true;
    $.__views.__alloyId1469 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1469"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1470"
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1470);
    domesticVideo ? $.__views.__alloyId1470.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1470!click!domesticVideo"] = true;
    $.__views.__alloyId1471 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1471"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1471);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1470"
    });
    $.__views.__alloyId1469.add($.__views.__alloyId1470);
    domesticVideo ? $.__views.__alloyId1470.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1470!click!domesticVideo"] = true;
    $.__views.__alloyId1471 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1471"
    });
    $.__views.__alloyId1468.add($.__views.__alloyId1471);
>>>>>>> origin/master
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1471.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1472 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1700.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1701 = Ti.UI.createView({
=======
    $.__views.__alloyId1471.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1472 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1471.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1472 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1472"
    });
    $.__views.scrollView.add($.__views.__alloyId1472);
    iddVoice ? $.__views.__alloyId1472.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1472!click!iddVoice"] = true;
    $.__views.__alloyId1473 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1473"
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1474"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1474);
    iddVoice ? $.__views.__alloyId1474.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1474!click!iddVoice"] = true;
    $.__views.__alloyId1475 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1475"
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1475);
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1474"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1474);
    iddVoice ? $.__views.__alloyId1474.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1474!click!iddVoice"] = true;
    $.__views.__alloyId1475 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1475"
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1475);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1475.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1476 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1704.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1705 = Ti.UI.createView({
=======
    $.__views.__alloyId1475.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1476 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1475.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1476 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1476"
    });
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1476"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView.add($.__views.__alloyId1476);
    iddSMS ? $.__views.__alloyId1476.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1476!click!iddSMS"] = true;
    $.__views.__alloyId1477 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1477"
    });
    $.__views.__alloyId1476.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1476"
    });
    $.__views.scrollView.add($.__views.__alloyId1476);
    iddSMS ? $.__views.__alloyId1476.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1476!click!iddSMS"] = true;
    $.__views.__alloyId1477 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1477"
    });
    $.__views.__alloyId1476.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
        id: "__alloyId1478"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1478);
    iddSMS ? $.__views.__alloyId1478.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1478!click!iddSMS"] = true;
    $.__views.__alloyId1479 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1479"
<<<<<<< HEAD
    });
    $.__views.__alloyId1476.add($.__views.__alloyId1479);
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1478"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1478);
    iddSMS ? $.__views.__alloyId1478.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1478!click!iddSMS"] = true;
    $.__views.__alloyId1479 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1479"
    });
    $.__views.__alloyId1476.add($.__views.__alloyId1479);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1476.add($.__views.__alloyId1479);
>>>>>>> origin/master
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1479.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1480 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1708.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1709 = Ti.UI.createView({
=======
    $.__views.__alloyId1479.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1480 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1479.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1480 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1480"
    });
    $.__views.scrollView.add($.__views.__alloyId1480);
    iddVideo ? $.__views.__alloyId1480.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1480!click!iddVideo"] = true;
    $.__views.__alloyId1481 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1481"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/master
        id: "__alloyId1480"
    });
    $.__views.scrollView.add($.__views.__alloyId1480);
    iddVideo ? $.__views.__alloyId1480.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1480!click!iddVideo"] = true;
    $.__views.__alloyId1481 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1481"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1482"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1482);
    iddVideo ? $.__views.__alloyId1482.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1482!click!iddVideo"] = true;
    $.__views.__alloyId1483 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1483"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1483);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1482"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1482);
    iddVideo ? $.__views.__alloyId1482.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1482!click!iddVideo"] = true;
    $.__views.__alloyId1483 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1483"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1483);
>>>>>>> origin/master
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1483.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1484 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1712.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1713 = Ti.UI.createView({
=======
    $.__views.__alloyId1483.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1484 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1483.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1484 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        id: "__alloyId1484"
    });
    $.__views.scrollView.add($.__views.__alloyId1484);
    roamingCalls ? $.__views.__alloyId1484.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1484!click!roamingCalls"] = true;
    $.__views.__alloyId1485 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1485"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createLabel({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1486"
    });
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1486"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1486"
    });
>>>>>>> origin/master
    $.__views.__alloyId1485.add($.__views.__alloyId1486);
    roamingCalls ? $.__views.__alloyId1486.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1486!click!roamingCalls"] = true;
    $.__views.__alloyId1487 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1487"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1487);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1487.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1488 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1716.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1717 = Ti.UI.createView({
=======
    $.__views.__alloyId1487.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1488 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1487.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1488 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1488"
    });
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1488"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView.add($.__views.__alloyId1488);
    roamingSMS ? $.__views.__alloyId1488.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1488!click!roamingSMS"] = true;
    $.__views.__alloyId1489 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1489"
    });
    $.__views.__alloyId1488.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1488"
    });
    $.__views.scrollView.add($.__views.__alloyId1488);
    roamingSMS ? $.__views.__alloyId1488.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1488!click!roamingSMS"] = true;
    $.__views.__alloyId1489 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1489"
    });
    $.__views.__alloyId1488.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1490"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1490);
    roamingSMS ? $.__views.__alloyId1490.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1490!click!roamingSMS"] = true;
    $.__views.__alloyId1491 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1491"
    });
    $.__views.__alloyId1488.add($.__views.__alloyId1491);
=======
<<<<<<< HEAD
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
=======
        id: "__alloyId1490"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1490);
    roamingSMS ? $.__views.__alloyId1490.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1490!click!roamingSMS"] = true;
    $.__views.__alloyId1491 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1491"
    });
    $.__views.__alloyId1488.add($.__views.__alloyId1491);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1490"
    });
    $.__views.__alloyId1489.add($.__views.__alloyId1490);
    roamingSMS ? $.__views.__alloyId1490.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1490!click!roamingSMS"] = true;
    $.__views.__alloyId1491 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1491"
    });
    $.__views.__alloyId1488.add($.__views.__alloyId1491);
>>>>>>> origin/master
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1491.add($.__views.arrow7);
    roamingSMS ? $.__views.arrow7.addEventListener("click", roamingSMS) : __defers["$.__views.arrow7!click!roamingSMS"] = true;
    $.__views.__alloyId1492 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1492"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1492);
    download ? $.__views.__alloyId1492.addEventListener("click", download) : __defers["$.__views.__alloyId1492!click!download"] = true;
    $.__views.__alloyId1493 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1493"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
=======
<<<<<<< HEAD
    $.__views.__alloyId1720.add($.__views.arrow7);
    roamingSMS ? $.__views.arrow7.addEventListener("click", roamingSMS) : __defers["$.__views.arrow7!click!roamingSMS"] = true;
    $.__views.__alloyId1721 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1721"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1721);
    download ? $.__views.__alloyId1721.addEventListener("click", download) : __defers["$.__views.__alloyId1721!click!download"] = true;
    $.__views.__alloyId1722 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1722"
    });
    $.__views.__alloyId1721.add($.__views.__alloyId1722);
=======
    $.__views.__alloyId1491.add($.__views.arrow7);
    roamingSMS ? $.__views.arrow7.addEventListener("click", roamingSMS) : __defers["$.__views.arrow7!click!roamingSMS"] = true;
    $.__views.__alloyId1492 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1492"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1492);
    download ? $.__views.__alloyId1492.addEventListener("click", download) : __defers["$.__views.__alloyId1492!click!download"] = true;
    $.__views.__alloyId1493 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1493"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1491.add($.__views.arrow7);
    roamingSMS ? $.__views.arrow7.addEventListener("click", roamingSMS) : __defers["$.__views.arrow7!click!roamingSMS"] = true;
    $.__views.__alloyId1492 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1492"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1492);
    download ? $.__views.__alloyId1492.addEventListener("click", download) : __defers["$.__views.__alloyId1492!click!download"] = true;
    $.__views.__alloyId1493 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1493"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
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
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 270;
    "android" == Ti.Platform.osname && ($.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 270);
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
    __defers["$.__views.__alloyId1721!click!download"] && $.__views.__alloyId1721.addEventListener("click", download);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    __defers["$.__views.__alloyId1451!click!back"] && $.__views.__alloyId1451.addEventListener("click", back);
    __defers["$.__views.__alloyId1460!click!domesticVoice"] && $.__views.__alloyId1460.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1462!click!domesticVoice"] && $.__views.__alloyId1462.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1464!click!domesticSMS"] && $.__views.__alloyId1464.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1466!click!domesticSMS"] && $.__views.__alloyId1466.addEventListener("click", domesticSMS);
    __defers["$.__views.arrow1!click!domesticSMS"] && $.__views.arrow1.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1468!click!domesticVideo"] && $.__views.__alloyId1468.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1470!click!domesticVideo"] && $.__views.__alloyId1470.addEventListener("click", domesticVideo);
    __defers["$.__views.arrow2!click!domesticVideo"] && $.__views.arrow2.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1472!click!iddVoice"] && $.__views.__alloyId1472.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1474!click!iddVoice"] && $.__views.__alloyId1474.addEventListener("click", iddVoice);
    __defers["$.__views.arrow3!click!iddVoice"] && $.__views.arrow3.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1476!click!iddSMS"] && $.__views.__alloyId1476.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1478!click!iddSMS"] && $.__views.__alloyId1478.addEventListener("click", iddSMS);
    __defers["$.__views.arrow4!click!iddSMS"] && $.__views.arrow4.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1480!click!iddVideo"] && $.__views.__alloyId1480.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1482!click!iddVideo"] && $.__views.__alloyId1482.addEventListener("click", iddVideo);
    __defers["$.__views.arrow5!click!iddVideo"] && $.__views.arrow5.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1484!click!roamingCalls"] && $.__views.__alloyId1484.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1486!click!roamingCalls"] && $.__views.__alloyId1486.addEventListener("click", roamingCalls);
    __defers["$.__views.arrow6!click!roamingCalls"] && $.__views.arrow6.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1488!click!roamingSMS"] && $.__views.__alloyId1488.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1490!click!roamingSMS"] && $.__views.__alloyId1490.addEventListener("click", roamingSMS);
    __defers["$.__views.arrow7!click!roamingSMS"] && $.__views.arrow7.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1492!click!download"] && $.__views.__alloyId1492.addEventListener("click", download);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;