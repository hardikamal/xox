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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/master
>>>>>>> origin/master
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
    $.__views.__alloyId1329 = Alloy.createController("_header", {
        id: "__alloyId1329",
=======
<<<<<<< HEAD
    $.__views.__alloyId1494 = Alloy.createController("_header", {
        id: "__alloyId1494",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1494.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1495 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1495"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
=======
    $.__views.__alloyId997 = Alloy.createController("_header", {
        id: "__alloyId997",
>>>>>>> origin/master
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1329.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1330 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1330"
    });
<<<<<<< HEAD
    $.__views.postpaidStatement.add($.__views.__alloyId1330);
    $.__views.__alloyId1331 = Ti.UI.createLabel({
=======
    $.__views.postpaidStatement.add($.__views.__alloyId998);
    $.__views.__alloyId999 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1331"
    });
    $.__views.__alloyId1330.add($.__views.__alloyId1331);
    $.__views.__alloyId1332 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1496"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createImageView({
=======
        id: "__alloyId999"
    });
    $.__views.__alloyId998.add($.__views.__alloyId999);
    $.__views.__alloyId1000 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1332"
=======
<<<<<<< HEAD
        id: "__alloyId1497"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1497);
    back ? $.__views.__alloyId1497.addEventListener("click", back) : __defers["$.__views.__alloyId1497!click!back"] = true;
    $.__views.__alloyId1498 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1498"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1498);
=======
        id: "__alloyId1000"
>>>>>>> origin/master
    });
    $.__views.__alloyId1330.add($.__views.__alloyId1332);
    back ? $.__views.__alloyId1332.addEventListener("click", back) : __defers["$.__views.__alloyId1332!click!back"] = true;
    $.__views.__alloyId1333 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1333"
    });
<<<<<<< HEAD
    $.__views.postpaidStatement.add($.__views.__alloyId1333);
=======
    $.__views.postpaidStatement.add($.__views.__alloyId1001);
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
    $.__views.__alloyId1333.add($.__views.contentView);
    $.__views.__alloyId1334 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1498.add($.__views.contentView);
    $.__views.__alloyId1499 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1001.add($.__views.contentView);
    $.__views.__alloyId1002 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Postpaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1334"
    });
    $.__views.contentView.add($.__views.__alloyId1334);
=======
<<<<<<< HEAD
        id: "__alloyId1499"
    });
    $.__views.contentView.add($.__views.__alloyId1499);
=======
        id: "__alloyId1002"
    });
    $.__views.contentView.add($.__views.__alloyId1002);
>>>>>>> origin/master
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
    var __alloyId1335 = [];
    $.__views.__alloyId1336 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId1500 = [];
    $.__views.__alloyId1501 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1501"
    });
    __alloyId1500.push($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1502"
    });
    __alloyId1500.push($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1503"
    });
    __alloyId1500.push($.__views.__alloyId1503);
    $.__views.__alloyId1504 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1504"
    });
    __alloyId1500.push($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1505"
    });
    __alloyId1500.push($.__views.__alloyId1505);
    $.__views.picker.add(__alloyId1500);
=======
    var __alloyId1003 = [];
    $.__views.__alloyId1004 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "Current Month",
        id: "__alloyId1336"
    });
    __alloyId1335.push($.__views.__alloyId1336);
    $.__views.__alloyId1337 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1337"
    });
    __alloyId1335.push($.__views.__alloyId1337);
    $.__views.__alloyId1338 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1338"
    });
    __alloyId1335.push($.__views.__alloyId1338);
    $.__views.__alloyId1339 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1339"
    });
    __alloyId1335.push($.__views.__alloyId1339);
    $.__views.__alloyId1340 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1340"
    });
<<<<<<< HEAD
    __alloyId1335.push($.__views.__alloyId1340);
    $.__views.picker.add(__alloyId1335);
=======
    __alloyId1003.push($.__views.__alloyId1008);
    $.__views.picker.add(__alloyId1003);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "#F5F5F5"
    });
    $.__views.postpaidStatement.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1341 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1506 = Ti.UI.createView({
=======
    $.__views.__alloyId1009 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1341"
=======
<<<<<<< HEAD
        id: "__alloyId1506"
    });
    $.__views.scrollView.add($.__views.__alloyId1506);
    domesticVoice ? $.__views.__alloyId1506.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1506!click!domesticVoice"] = true;
    $.__views.__alloyId1507 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1507"
    });
    $.__views.__alloyId1506.add($.__views.__alloyId1507);
    $.__views.__alloyId1508 = Ti.UI.createLabel({
=======
        id: "__alloyId1009"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1341);
    domesticVoice ? $.__views.__alloyId1341.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1341!click!domesticVoice"] = true;
    $.__views.__alloyId1342 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1342"
    });
<<<<<<< HEAD
    $.__views.__alloyId1341.add($.__views.__alloyId1342);
    $.__views.__alloyId1343 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1009.add($.__views.__alloyId1010);
    $.__views.__alloyId1011 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Domestic Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1343"
=======
<<<<<<< HEAD
        id: "__alloyId1508"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1508);
    domesticVoice ? $.__views.__alloyId1508.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1508!click!domesticVoice"] = true;
    $.__views.__alloyId1509 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1509"
    });
    $.__views.__alloyId1506.add($.__views.__alloyId1509);
=======
        id: "__alloyId1011"
>>>>>>> origin/master
    });
    $.__views.__alloyId1342.add($.__views.__alloyId1343);
    domesticVoice ? $.__views.__alloyId1343.addEventListener("click", domesticVoice) : __defers["$.__views.__alloyId1343!click!domesticVoice"] = true;
    $.__views.__alloyId1344 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1344"
    });
<<<<<<< HEAD
    $.__views.__alloyId1341.add($.__views.__alloyId1344);
=======
    $.__views.__alloyId1009.add($.__views.__alloyId1012);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow = Ti.UI.createImageView({
        id: "arrow",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1344.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1345 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1509.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1510 = Ti.UI.createView({
=======
    $.__views.__alloyId1012.add($.__views.arrow);
    domesticVoice ? $.__views.arrow.addEventListener("click", domesticVoice) : __defers["$.__views.arrow!click!domesticVoice"] = true;
    $.__views.__alloyId1013 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1345"
=======
<<<<<<< HEAD
        id: "__alloyId1510"
    });
    $.__views.scrollView.add($.__views.__alloyId1510);
    domesticSMS ? $.__views.__alloyId1510.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1510!click!domesticSMS"] = true;
    $.__views.__alloyId1511 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1511"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createLabel({
=======
        id: "__alloyId1013"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1345);
    domesticSMS ? $.__views.__alloyId1345.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1345!click!domesticSMS"] = true;
    $.__views.__alloyId1346 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1346"
    });
<<<<<<< HEAD
    $.__views.__alloyId1345.add($.__views.__alloyId1346);
    $.__views.__alloyId1347 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1013.add($.__views.__alloyId1014);
    $.__views.__alloyId1015 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Domestic SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1347"
=======
<<<<<<< HEAD
        id: "__alloyId1512"
    });
    $.__views.__alloyId1511.add($.__views.__alloyId1512);
    domesticSMS ? $.__views.__alloyId1512.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1512!click!domesticSMS"] = true;
    $.__views.__alloyId1513 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1513"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1513);
=======
        id: "__alloyId1015"
>>>>>>> origin/master
    });
    $.__views.__alloyId1346.add($.__views.__alloyId1347);
    domesticSMS ? $.__views.__alloyId1347.addEventListener("click", domesticSMS) : __defers["$.__views.__alloyId1347!click!domesticSMS"] = true;
    $.__views.__alloyId1348 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1348"
    });
<<<<<<< HEAD
    $.__views.__alloyId1345.add($.__views.__alloyId1348);
=======
    $.__views.__alloyId1013.add($.__views.__alloyId1016);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow1 = Ti.UI.createImageView({
        id: "arrow1",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1348.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1349 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1513.add($.__views.arrow1);
    domesticSMS ? $.__views.arrow1.addEventListener("click", domesticSMS) : __defers["$.__views.arrow1!click!domesticSMS"] = true;
    $.__views.__alloyId1514 = Ti.UI.createView({
=======
    $.__views.__alloyId1016.add($.__views.arrow1);
    $.__views.__alloyId1017 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1349"
=======
<<<<<<< HEAD
        id: "__alloyId1514"
    });
    $.__views.scrollView.add($.__views.__alloyId1514);
    domesticVideo ? $.__views.__alloyId1514.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1514!click!domesticVideo"] = true;
    $.__views.__alloyId1515 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1515"
    });
    $.__views.__alloyId1514.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createLabel({
=======
        id: "__alloyId1017"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1349);
    domesticVideo ? $.__views.__alloyId1349.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1349!click!domesticVideo"] = true;
    $.__views.__alloyId1350 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1350"
    });
<<<<<<< HEAD
    $.__views.__alloyId1349.add($.__views.__alloyId1350);
    $.__views.__alloyId1351 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1017.add($.__views.__alloyId1018);
    $.__views.__alloyId1019 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Domestic Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1351"
=======
<<<<<<< HEAD
        id: "__alloyId1516"
    });
    $.__views.__alloyId1515.add($.__views.__alloyId1516);
    domesticVideo ? $.__views.__alloyId1516.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1516!click!domesticVideo"] = true;
    $.__views.__alloyId1517 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1517"
    });
    $.__views.__alloyId1514.add($.__views.__alloyId1517);
=======
        id: "__alloyId1019"
>>>>>>> origin/master
    });
    $.__views.__alloyId1350.add($.__views.__alloyId1351);
    domesticVideo ? $.__views.__alloyId1351.addEventListener("click", domesticVideo) : __defers["$.__views.__alloyId1351!click!domesticVideo"] = true;
    $.__views.__alloyId1352 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1352"
    });
<<<<<<< HEAD
    $.__views.__alloyId1349.add($.__views.__alloyId1352);
=======
    $.__views.__alloyId1017.add($.__views.__alloyId1020);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow2 = Ti.UI.createImageView({
        id: "arrow2",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1352.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1353 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1517.add($.__views.arrow2);
    domesticVideo ? $.__views.arrow2.addEventListener("click", domesticVideo) : __defers["$.__views.arrow2!click!domesticVideo"] = true;
    $.__views.__alloyId1518 = Ti.UI.createView({
=======
    $.__views.__alloyId1020.add($.__views.arrow2);
    $.__views.__alloyId1021 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1353"
=======
<<<<<<< HEAD
        id: "__alloyId1518"
    });
    $.__views.scrollView.add($.__views.__alloyId1518);
    iddVoice ? $.__views.__alloyId1518.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1518!click!iddVoice"] = true;
    $.__views.__alloyId1519 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1519"
    });
    $.__views.__alloyId1518.add($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createLabel({
=======
        id: "__alloyId1021"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1353);
    iddVoice ? $.__views.__alloyId1353.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1353!click!iddVoice"] = true;
    $.__views.__alloyId1354 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1354"
    });
<<<<<<< HEAD
    $.__views.__alloyId1353.add($.__views.__alloyId1354);
    $.__views.__alloyId1355 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1021.add($.__views.__alloyId1022);
    $.__views.__alloyId1023 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "IDD Voice Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1355"
=======
<<<<<<< HEAD
        id: "__alloyId1520"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1520);
    iddVoice ? $.__views.__alloyId1520.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1520!click!iddVoice"] = true;
    $.__views.__alloyId1521 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1521"
    });
    $.__views.__alloyId1518.add($.__views.__alloyId1521);
=======
        id: "__alloyId1023"
>>>>>>> origin/master
    });
    $.__views.__alloyId1354.add($.__views.__alloyId1355);
    iddVoice ? $.__views.__alloyId1355.addEventListener("click", iddVoice) : __defers["$.__views.__alloyId1355!click!iddVoice"] = true;
    $.__views.__alloyId1356 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1356"
    });
<<<<<<< HEAD
    $.__views.__alloyId1353.add($.__views.__alloyId1356);
=======
    $.__views.__alloyId1021.add($.__views.__alloyId1024);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow3 = Ti.UI.createImageView({
        id: "arrow3",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1356.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1357 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1521.add($.__views.arrow3);
    iddVoice ? $.__views.arrow3.addEventListener("click", iddVoice) : __defers["$.__views.arrow3!click!iddVoice"] = true;
    $.__views.__alloyId1522 = Ti.UI.createView({
=======
    $.__views.__alloyId1024.add($.__views.arrow3);
    $.__views.__alloyId1025 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1357"
=======
<<<<<<< HEAD
        id: "__alloyId1522"
    });
    $.__views.scrollView.add($.__views.__alloyId1522);
    iddSMS ? $.__views.__alloyId1522.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1522!click!iddSMS"] = true;
    $.__views.__alloyId1523 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1523"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1523);
    $.__views.__alloyId1524 = Ti.UI.createLabel({
=======
        id: "__alloyId1025"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1357);
    iddSMS ? $.__views.__alloyId1357.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1357!click!iddSMS"] = true;
    $.__views.__alloyId1358 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1358"
    });
<<<<<<< HEAD
    $.__views.__alloyId1357.add($.__views.__alloyId1358);
    $.__views.__alloyId1359 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1025.add($.__views.__alloyId1026);
    $.__views.__alloyId1027 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "IDD SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1359"
=======
<<<<<<< HEAD
        id: "__alloyId1524"
    });
    $.__views.__alloyId1523.add($.__views.__alloyId1524);
    iddSMS ? $.__views.__alloyId1524.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1524!click!iddSMS"] = true;
    $.__views.__alloyId1525 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1525"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1525);
=======
        id: "__alloyId1027"
>>>>>>> origin/master
    });
    $.__views.__alloyId1358.add($.__views.__alloyId1359);
    iddSMS ? $.__views.__alloyId1359.addEventListener("click", iddSMS) : __defers["$.__views.__alloyId1359!click!iddSMS"] = true;
    $.__views.__alloyId1360 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1360"
    });
<<<<<<< HEAD
    $.__views.__alloyId1357.add($.__views.__alloyId1360);
=======
    $.__views.__alloyId1025.add($.__views.__alloyId1028);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow4 = Ti.UI.createImageView({
        id: "arrow4",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1360.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1361 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1525.add($.__views.arrow4);
    iddSMS ? $.__views.arrow4.addEventListener("click", iddSMS) : __defers["$.__views.arrow4!click!iddSMS"] = true;
    $.__views.__alloyId1526 = Ti.UI.createView({
=======
    $.__views.__alloyId1028.add($.__views.arrow4);
    $.__views.__alloyId1029 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1361"
=======
<<<<<<< HEAD
        id: "__alloyId1526"
    });
    $.__views.scrollView.add($.__views.__alloyId1526);
    iddVideo ? $.__views.__alloyId1526.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1526!click!iddVideo"] = true;
    $.__views.__alloyId1527 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1527"
    });
    $.__views.__alloyId1526.add($.__views.__alloyId1527);
    $.__views.__alloyId1528 = Ti.UI.createLabel({
=======
        id: "__alloyId1029"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1361);
    iddVideo ? $.__views.__alloyId1361.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1361!click!iddVideo"] = true;
    $.__views.__alloyId1362 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1362"
    });
<<<<<<< HEAD
    $.__views.__alloyId1361.add($.__views.__alloyId1362);
    $.__views.__alloyId1363 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1029.add($.__views.__alloyId1030);
    $.__views.__alloyId1031 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "IDD Video Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1363"
=======
<<<<<<< HEAD
        id: "__alloyId1528"
    });
    $.__views.__alloyId1527.add($.__views.__alloyId1528);
    iddVideo ? $.__views.__alloyId1528.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1528!click!iddVideo"] = true;
    $.__views.__alloyId1529 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1529"
    });
    $.__views.__alloyId1526.add($.__views.__alloyId1529);
=======
        id: "__alloyId1031"
>>>>>>> origin/master
    });
    $.__views.__alloyId1362.add($.__views.__alloyId1363);
    iddVideo ? $.__views.__alloyId1363.addEventListener("click", iddVideo) : __defers["$.__views.__alloyId1363!click!iddVideo"] = true;
    $.__views.__alloyId1364 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1364"
    });
<<<<<<< HEAD
    $.__views.__alloyId1361.add($.__views.__alloyId1364);
=======
    $.__views.__alloyId1029.add($.__views.__alloyId1032);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow5 = Ti.UI.createImageView({
        id: "arrow5",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1364.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1365 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1529.add($.__views.arrow5);
    iddVideo ? $.__views.arrow5.addEventListener("click", iddVideo) : __defers["$.__views.arrow5!click!iddVideo"] = true;
    $.__views.__alloyId1530 = Ti.UI.createView({
=======
    $.__views.__alloyId1032.add($.__views.arrow5);
    $.__views.__alloyId1033 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1365"
=======
<<<<<<< HEAD
        id: "__alloyId1530"
    });
    $.__views.scrollView.add($.__views.__alloyId1530);
    roamingCalls ? $.__views.__alloyId1530.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1530!click!roamingCalls"] = true;
    $.__views.__alloyId1531 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1531"
    });
    $.__views.__alloyId1530.add($.__views.__alloyId1531);
    $.__views.__alloyId1532 = Ti.UI.createLabel({
=======
        id: "__alloyId1033"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1365);
    roamingCalls ? $.__views.__alloyId1365.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1365!click!roamingCalls"] = true;
    $.__views.__alloyId1366 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1366"
    });
<<<<<<< HEAD
    $.__views.__alloyId1365.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1033.add($.__views.__alloyId1034);
    $.__views.__alloyId1035 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Roaming Call",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1367"
=======
<<<<<<< HEAD
        id: "__alloyId1532"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1532);
    roamingCalls ? $.__views.__alloyId1532.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1532!click!roamingCalls"] = true;
    $.__views.__alloyId1533 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1533"
    });
    $.__views.__alloyId1530.add($.__views.__alloyId1533);
=======
        id: "__alloyId1035"
>>>>>>> origin/master
    });
    $.__views.__alloyId1366.add($.__views.__alloyId1367);
    roamingCalls ? $.__views.__alloyId1367.addEventListener("click", roamingCalls) : __defers["$.__views.__alloyId1367!click!roamingCalls"] = true;
    $.__views.__alloyId1368 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1368"
    });
<<<<<<< HEAD
    $.__views.__alloyId1365.add($.__views.__alloyId1368);
=======
    $.__views.__alloyId1033.add($.__views.__alloyId1036);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow6 = Ti.UI.createImageView({
        id: "arrow6",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1368.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1369 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1533.add($.__views.arrow6);
    roamingCalls ? $.__views.arrow6.addEventListener("click", roamingCalls) : __defers["$.__views.arrow6!click!roamingCalls"] = true;
    $.__views.__alloyId1534 = Ti.UI.createView({
=======
    $.__views.__alloyId1036.add($.__views.arrow6);
    $.__views.__alloyId1037 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> origin/master
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1369"
=======
<<<<<<< HEAD
        id: "__alloyId1534"
    });
    $.__views.scrollView.add($.__views.__alloyId1534);
    roamingSMS ? $.__views.__alloyId1534.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1534!click!roamingSMS"] = true;
    $.__views.__alloyId1535 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1535"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1535);
    $.__views.__alloyId1536 = Ti.UI.createLabel({
=======
        id: "__alloyId1037"
>>>>>>> origin/master
    });
    $.__views.scrollView.add($.__views.__alloyId1369);
    roamingSMS ? $.__views.__alloyId1369.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1369!click!roamingSMS"] = true;
    $.__views.__alloyId1370 = Ti.UI.createView({
        width: "80%",
        height: "100%",
        id: "__alloyId1370"
    });
<<<<<<< HEAD
    $.__views.__alloyId1369.add($.__views.__alloyId1370);
    $.__views.__alloyId1371 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1037.add($.__views.__alloyId1038);
    $.__views.__alloyId1039 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Roaming SMS",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1371"
=======
<<<<<<< HEAD
        id: "__alloyId1536"
    });
    $.__views.__alloyId1535.add($.__views.__alloyId1536);
    roamingSMS ? $.__views.__alloyId1536.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1536!click!roamingSMS"] = true;
    $.__views.__alloyId1537 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1537"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1537);
=======
        id: "__alloyId1039"
>>>>>>> origin/master
    });
    $.__views.__alloyId1370.add($.__views.__alloyId1371);
    roamingSMS ? $.__views.__alloyId1371.addEventListener("click", roamingSMS) : __defers["$.__views.__alloyId1371!click!roamingSMS"] = true;
    $.__views.__alloyId1372 = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "__alloyId1372"
    });
<<<<<<< HEAD
    $.__views.__alloyId1369.add($.__views.__alloyId1372);
=======
    $.__views.__alloyId1037.add($.__views.__alloyId1040);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.arrow7 = Ti.UI.createImageView({
        id: "arrow7",
        image: "/images/dropdown_icon.png",
        width: "25",
        height: "15"
    });
<<<<<<< HEAD
    $.__views.__alloyId1372.add($.__views.arrow7);
    roamingSMS ? $.__views.arrow7.addEventListener("click", roamingSMS) : __defers["$.__views.arrow7!click!roamingSMS"] = true;
    $.__views.__alloyId1373 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1537.add($.__views.arrow7);
    roamingSMS ? $.__views.arrow7.addEventListener("click", roamingSMS) : __defers["$.__views.arrow7!click!roamingSMS"] = true;
    $.__views.__alloyId1538 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1538"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1538);
    download ? $.__views.__alloyId1538.addEventListener("click", download) : __defers["$.__views.__alloyId1538!click!download"] = true;
    $.__views.__alloyId1539 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1539"
    });
    $.__views.__alloyId1538.add($.__views.__alloyId1539);
=======
    $.__views.__alloyId1040.add($.__views.arrow7);
    $.__views.__alloyId1041 = Ti.UI.createView({
>>>>>>> origin/master
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1373"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1373);
    download ? $.__views.__alloyId1373.addEventListener("click", download) : __defers["$.__views.__alloyId1373!click!download"] = true;
    $.__views.__alloyId1374 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1374"
    });
<<<<<<< HEAD
    $.__views.__alloyId1373.add($.__views.__alloyId1374);
=======
    $.__views.__alloyId1041.add($.__views.__alloyId1042);
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
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 270;
    "android" == Ti.Platform.osname && ($.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 270);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1332!click!back"] && $.__views.__alloyId1332.addEventListener("click", back);
    __defers["$.__views.__alloyId1341!click!domesticVoice"] && $.__views.__alloyId1341.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1343!click!domesticVoice"] && $.__views.__alloyId1343.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1345!click!domesticSMS"] && $.__views.__alloyId1345.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1347!click!domesticSMS"] && $.__views.__alloyId1347.addEventListener("click", domesticSMS);
    __defers["$.__views.arrow1!click!domesticSMS"] && $.__views.arrow1.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1349!click!domesticVideo"] && $.__views.__alloyId1349.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1351!click!domesticVideo"] && $.__views.__alloyId1351.addEventListener("click", domesticVideo);
    __defers["$.__views.arrow2!click!domesticVideo"] && $.__views.arrow2.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1353!click!iddVoice"] && $.__views.__alloyId1353.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1355!click!iddVoice"] && $.__views.__alloyId1355.addEventListener("click", iddVoice);
    __defers["$.__views.arrow3!click!iddVoice"] && $.__views.arrow3.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1357!click!iddSMS"] && $.__views.__alloyId1357.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1359!click!iddSMS"] && $.__views.__alloyId1359.addEventListener("click", iddSMS);
    __defers["$.__views.arrow4!click!iddSMS"] && $.__views.arrow4.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1361!click!iddVideo"] && $.__views.__alloyId1361.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1363!click!iddVideo"] && $.__views.__alloyId1363.addEventListener("click", iddVideo);
    __defers["$.__views.arrow5!click!iddVideo"] && $.__views.arrow5.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1365!click!roamingCalls"] && $.__views.__alloyId1365.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1367!click!roamingCalls"] && $.__views.__alloyId1367.addEventListener("click", roamingCalls);
    __defers["$.__views.arrow6!click!roamingCalls"] && $.__views.arrow6.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1369!click!roamingSMS"] && $.__views.__alloyId1369.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1371!click!roamingSMS"] && $.__views.__alloyId1371.addEventListener("click", roamingSMS);
    __defers["$.__views.arrow7!click!roamingSMS"] && $.__views.arrow7.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1373!click!download"] && $.__views.__alloyId1373.addEventListener("click", download);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1497!click!back"] && $.__views.__alloyId1497.addEventListener("click", back);
    __defers["$.__views.__alloyId1506!click!domesticVoice"] && $.__views.__alloyId1506.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1508!click!domesticVoice"] && $.__views.__alloyId1508.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1510!click!domesticSMS"] && $.__views.__alloyId1510.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1512!click!domesticSMS"] && $.__views.__alloyId1512.addEventListener("click", domesticSMS);
    __defers["$.__views.arrow1!click!domesticSMS"] && $.__views.arrow1.addEventListener("click", domesticSMS);
    __defers["$.__views.__alloyId1514!click!domesticVideo"] && $.__views.__alloyId1514.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1516!click!domesticVideo"] && $.__views.__alloyId1516.addEventListener("click", domesticVideo);
    __defers["$.__views.arrow2!click!domesticVideo"] && $.__views.arrow2.addEventListener("click", domesticVideo);
    __defers["$.__views.__alloyId1518!click!iddVoice"] && $.__views.__alloyId1518.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1520!click!iddVoice"] && $.__views.__alloyId1520.addEventListener("click", iddVoice);
    __defers["$.__views.arrow3!click!iddVoice"] && $.__views.arrow3.addEventListener("click", iddVoice);
    __defers["$.__views.__alloyId1522!click!iddSMS"] && $.__views.__alloyId1522.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1524!click!iddSMS"] && $.__views.__alloyId1524.addEventListener("click", iddSMS);
    __defers["$.__views.arrow4!click!iddSMS"] && $.__views.arrow4.addEventListener("click", iddSMS);
    __defers["$.__views.__alloyId1526!click!iddVideo"] && $.__views.__alloyId1526.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1528!click!iddVideo"] && $.__views.__alloyId1528.addEventListener("click", iddVideo);
    __defers["$.__views.arrow5!click!iddVideo"] && $.__views.arrow5.addEventListener("click", iddVideo);
    __defers["$.__views.__alloyId1530!click!roamingCalls"] && $.__views.__alloyId1530.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1532!click!roamingCalls"] && $.__views.__alloyId1532.addEventListener("click", roamingCalls);
    __defers["$.__views.arrow6!click!roamingCalls"] && $.__views.arrow6.addEventListener("click", roamingCalls);
    __defers["$.__views.__alloyId1534!click!roamingSMS"] && $.__views.__alloyId1534.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1536!click!roamingSMS"] && $.__views.__alloyId1536.addEventListener("click", roamingSMS);
    __defers["$.__views.arrow7!click!roamingSMS"] && $.__views.arrow7.addEventListener("click", roamingSMS);
    __defers["$.__views.__alloyId1538!click!download"] && $.__views.__alloyId1538.addEventListener("click", download);
=======
    __defers["$.__views.__alloyId1000!click!back"] && $.__views.__alloyId1000.addEventListener("click", back);
    __defers["$.__views.__alloyId1011!click!domesticVoice"] && $.__views.__alloyId1011.addEventListener("click", domesticVoice);
    __defers["$.__views.arrow!click!domesticVoice"] && $.__views.arrow.addEventListener("click", domesticVoice);
    __defers["$.__views.__alloyId1041!click!download"] && $.__views.__alloyId1041.addEventListener("click", download);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;