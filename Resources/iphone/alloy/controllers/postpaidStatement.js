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
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1450"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1450);
    $.__views.__alloyId1451 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
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
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId1452.add($.__views.contentView);
    $.__views.__alloyId1453 = Ti.UI.createLabel({
        text: "Postpaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1453"
    });
    $.__views.contentView.add($.__views.__alloyId1453);
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.postpaidStatement.add($.__views.scrollView);
    $.__views.__alloyId1460 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1463.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1464 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1467.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1468 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1471.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1472 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1475.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1476 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1479.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1480 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1483.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1484 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1486"
    });
    $.__views.__alloyId1485.add($.__views.__alloyId1486);
    roamingCalls ? $.__views.__alloyId1486.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1486!click!roamingCalls"] = true;
    $.__views.__alloyId1487 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1487"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1487);
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1487.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1488 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
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
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
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
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;