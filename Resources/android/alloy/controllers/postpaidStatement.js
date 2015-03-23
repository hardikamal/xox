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
    $.__views.__alloyId1510 = Alloy.createController("_header", {
        id: "__alloyId1510",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1510.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1511 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1511"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1512"
    });
    $.__views.__alloyId1511.add($.__views.__alloyId1512);
    $.__views.__alloyId1513 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1513"
    });
    $.__views.__alloyId1511.add($.__views.__alloyId1513);
    back ? $.__views.__alloyId1513.addEventListener("click", back) : __defers["$.__views.__alloyId1513!click!back"] = true;
    $.__views.__alloyId1514 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1514"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId1515"
    });
    $.__views.__alloyId1514.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createLabel({
        text: "Postpaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1516"
    });
    $.__views.__alloyId1515.add($.__views.__alloyId1516);
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
    $.__views.__alloyId1515.add($.__views.picker);
    var __alloyId1517 = [];
    $.__views.__alloyId1518 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1518"
    });
    __alloyId1517.push($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1519"
    });
    __alloyId1517.push($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1520"
    });
    __alloyId1517.push($.__views.__alloyId1520);
    $.__views.__alloyId1521 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1521"
    });
    __alloyId1517.push($.__views.__alloyId1521);
    $.__views.__alloyId1522 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1522"
    });
    __alloyId1517.push($.__views.__alloyId1522);
    $.__views.picker.add(__alloyId1517);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1523 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1523"
    });
    $.__views.__alloyId1515.add($.__views.__alloyId1523);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.postpaidStatement.add($.__views.scrollView);
    $.__views.__alloyId1524 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1524"
    });
    $.__views.scrollView.add($.__views.__alloyId1524);
    domesticVoice ? $.__views.__alloyId1524.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1524!click!domesticVoice"] = true;
    $.__views.__alloyId1525 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1525"
    });
    $.__views.__alloyId1524.add($.__views.__alloyId1525);
    $.__views.__alloyId1526 = Ti.UI.createLabel({
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1526"
    });
    $.__views.__alloyId1525.add($.__views.__alloyId1526);
    domesticVoice ? $.__views.__alloyId1526.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1526!click!domesticVoice"] = true;
    $.__views.__alloyId1527 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1527"
    });
    $.__views.__alloyId1524.add($.__views.__alloyId1527);
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1527.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1528 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1528"
    });
    $.__views.scrollView.add($.__views.__alloyId1528);
    domesticSMS ? $.__views.__alloyId1528.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1528!click!domesticSMS"] = true;
    $.__views.__alloyId1529 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1529"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1529);
    $.__views.__alloyId1530 = Ti.UI.createLabel({
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1530"
    });
    $.__views.__alloyId1529.add($.__views.__alloyId1530);
    domesticSMS ? $.__views.__alloyId1530.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1530!click!domesticSMS"] = true;
    $.__views.__alloyId1531 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1531"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1531);
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1531.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1532 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1532"
    });
    $.__views.scrollView.add($.__views.__alloyId1532);
    domesticVideo ? $.__views.__alloyId1532.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1532!click!domesticVideo"] = true;
    $.__views.__alloyId1533 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1533"
    });
    $.__views.__alloyId1532.add($.__views.__alloyId1533);
    $.__views.__alloyId1534 = Ti.UI.createLabel({
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1534"
    });
    $.__views.__alloyId1533.add($.__views.__alloyId1534);
    domesticVideo ? $.__views.__alloyId1534.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1534!click!domesticVideo"] = true;
    $.__views.__alloyId1535 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1535"
    });
    $.__views.__alloyId1532.add($.__views.__alloyId1535);
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1535.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1536 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1536"
    });
    $.__views.scrollView.add($.__views.__alloyId1536);
    iddVoice ? $.__views.__alloyId1536.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1536!click!iddVoice"] = true;
    $.__views.__alloyId1537 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1537"
    });
    $.__views.__alloyId1536.add($.__views.__alloyId1537);
    $.__views.__alloyId1538 = Ti.UI.createLabel({
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1538"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1538);
    iddVoice ? $.__views.__alloyId1538.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1538!click!iddVoice"] = true;
    $.__views.__alloyId1539 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1539"
    });
    $.__views.__alloyId1536.add($.__views.__alloyId1539);
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1539.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1540 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1540"
    });
    $.__views.scrollView.add($.__views.__alloyId1540);
    iddSMS ? $.__views.__alloyId1540.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1540!click!iddSMS"] = true;
    $.__views.__alloyId1541 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1541"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createLabel({
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1542"
    });
    $.__views.__alloyId1541.add($.__views.__alloyId1542);
    iddSMS ? $.__views.__alloyId1542.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1542!click!iddSMS"] = true;
    $.__views.__alloyId1543 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1543"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1543);
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1543.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1544 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1544"
    });
    $.__views.scrollView.add($.__views.__alloyId1544);
    iddVideo ? $.__views.__alloyId1544.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1544!click!iddVideo"] = true;
    $.__views.__alloyId1545 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1545"
    });
    $.__views.__alloyId1544.add($.__views.__alloyId1545);
    $.__views.__alloyId1546 = Ti.UI.createLabel({
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1546"
    });
    $.__views.__alloyId1545.add($.__views.__alloyId1546);
    iddVideo ? $.__views.__alloyId1546.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1546!click!iddVideo"] = true;
    $.__views.__alloyId1547 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1547"
    });
    $.__views.__alloyId1544.add($.__views.__alloyId1547);
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1547.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1548 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1548"
    });
    $.__views.scrollView.add($.__views.__alloyId1548);
    roamingCalls ? $.__views.__alloyId1548.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1548!click!roamingCalls"] = true;
    $.__views.__alloyId1549 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1549"
    });
    $.__views.__alloyId1548.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createLabel({
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1550"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1550);
    roamingCalls ? $.__views.__alloyId1550.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1550!click!roamingCalls"] = true;
    $.__views.__alloyId1551 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1551"
    });
    $.__views.__alloyId1548.add($.__views.__alloyId1551);
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1551.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1552 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1552"
    });
    $.__views.scrollView.add($.__views.__alloyId1552);
    roamingSMS ? $.__views.__alloyId1552.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1552!click!roamingSMS"] = true;
    $.__views.__alloyId1553 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1553"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createLabel({
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1554"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1554);
    roamingSMS ? $.__views.__alloyId1554.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1554!click!roamingSMS"] = true;
    $.__views.__alloyId1555 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1555"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1555);
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
    $.__views.__alloyId1555.add($.__views.arrow7);
    roamingSMS ? $.__views.arrow7.addEventListener("click", roamingSMS) : __defers["$.__views.arrow7!click!roamingSMS"] = true;
    $.__views.__alloyId1556 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1556"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1556);
    download ? $.__views.__alloyId1556.addEventListener("click", download) : __defers["$.__views.__alloyId1556!click!download"] = true;
    $.__views.__alloyId1557 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1557"
    });
    $.__views.__alloyId1556.add($.__views.__alloyId1557);
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
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 270;
    __defers["$.__views.__alloyId1513!click!back"] && $.__views.__alloyId1513.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1524!click!domesticVoice"] && $.__views.__alloyId1524.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1526!click!domesticVoice"] && $.__views.__alloyId1526.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1528!click!domesticSMS"] && $.__views.__alloyId1528.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1530!click!domesticSMS"] && $.__views.__alloyId1530.addEventListener("click", domesticSMS);
    __defers["$.__views.arrow1!click!domesticSMS"] && $.__views.arrow1.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1532!click!domesticVideo"] && $.__views.__alloyId1532.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1534!click!domesticVideo"] && $.__views.__alloyId1534.addEventListener("click", domesticVideo);
    __defers["$.__views.arrow2!click!domesticVideo"] && $.__views.arrow2.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1536!click!iddVoice"] && $.__views.__alloyId1536.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1538!click!iddVoice"] && $.__views.__alloyId1538.addEventListener("click", iddVoice);
    __defers["$.__views.arrow3!click!iddVoice"] && $.__views.arrow3.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1540!click!iddSMS"] && $.__views.__alloyId1540.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1542!click!iddSMS"] && $.__views.__alloyId1542.addEventListener("click", iddSMS);
    __defers["$.__views.arrow4!click!iddSMS"] && $.__views.arrow4.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1544!click!iddVideo"] && $.__views.__alloyId1544.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1546!click!iddVideo"] && $.__views.__alloyId1546.addEventListener("click", iddVideo);
    __defers["$.__views.arrow5!click!iddVideo"] && $.__views.arrow5.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1548!click!roamingCalls"] && $.__views.__alloyId1548.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1550!click!roamingCalls"] && $.__views.__alloyId1550.addEventListener("click", roamingCalls);
    __defers["$.__views.arrow6!click!roamingCalls"] && $.__views.arrow6.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1552!click!roamingSMS"] && $.__views.__alloyId1552.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1554!click!roamingSMS"] && $.__views.__alloyId1554.addEventListener("click", roamingSMS);
    __defers["$.__views.arrow7!click!roamingSMS"] && $.__views.arrow7.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1556!click!download"] && $.__views.__alloyId1556.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;