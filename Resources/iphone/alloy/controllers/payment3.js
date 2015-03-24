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
        DRAWER.navigation("myAccount", 1);
    }
    function proceed() {
        DRAWER.navigation("payment4", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment3";
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
    $.__views.payment3 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment3"
    });
    $.__views.payment3 && $.addTopLevelView($.__views.payment3);
<<<<<<< HEAD
    $.__views.__alloyId1380 = Alloy.createController("_header", {
        id: "__alloyId1380",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1380.setParent($.__views.payment3);
    $.__views.__alloyId1381 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1381"
    });
    $.__views.payment3.add($.__views.__alloyId1381);
    $.__views.__alloyId1382 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1571 = Alloy.createController("_header", {
        id: "__alloyId1571",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1571.setParent($.__views.payment3);
    $.__views.__alloyId1572 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1572"
    });
    $.__views.payment3.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1380 = Alloy.createController("_header", {
        id: "__alloyId1380",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1380.setParent($.__views.payment3);
    $.__views.__alloyId1381 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1381"
    });
    $.__views.payment3.add($.__views.__alloyId1381);
    $.__views.__alloyId1382 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1382"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1573"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createImageView({
=======
        id: "__alloyId1382"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1383"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1383);
    back ? $.__views.__alloyId1383.addEventListener("click", back) : __defers["$.__views.__alloyId1383!click!back"] = true;
    $.__views.__alloyId1384 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1384"
    });
    $.__views.payment3.add($.__views.__alloyId1384);
    $.__views.__alloyId1385 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1574"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1574);
    back ? $.__views.__alloyId1574.addEventListener("click", back) : __defers["$.__views.__alloyId1574!click!back"] = true;
    $.__views.__alloyId1575 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1575"
    });
    $.__views.payment3.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createLabel({
=======
        id: "__alloyId1383"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1383);
    back ? $.__views.__alloyId1383.addEventListener("click", back) : __defers["$.__views.__alloyId1383!click!back"] = true;
    $.__views.__alloyId1384 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1384"
    });
    $.__views.payment3.add($.__views.__alloyId1384);
    $.__views.__alloyId1385 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1385"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1385);
=======
<<<<<<< HEAD
        id: "__alloyId1576"
    });
    $.__views.__alloyId1575.add($.__views.__alloyId1576);
=======
        id: "__alloyId1385"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1385);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId1386 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1386"
    });
    $.__views.scrollView.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1577 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1577"
    });
    $.__views.scrollView.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1386 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1386"
    });
    $.__views.scrollView.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1578"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1579"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1387"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1387);
    $.__views.__alloyId1388 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1388"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1388);
    $.__views.__alloyId1389 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1389"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1390"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1580"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1580);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1581"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createView({
=======
        id: "__alloyId1389"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1389);
    $.__views.__alloyId1390 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1390"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1390);
    $.__views.__alloyId1391 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId1391"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1391);
=======
<<<<<<< HEAD
        id: "__alloyId1582"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1582);
=======
        id: "__alloyId1391"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1391);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView2);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1583 = Ti.UI.createLabel({
        text: "Top Up Amount",
        textAlign: "center",
        color: "black",
        id: "__alloyId1583"
    });
    $.__views.contentView2.add($.__views.__alloyId1583);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1392 = Ti.UI.createLabel({
        text: "Top Up Amount",
        textAlign: "center",
        color: "black",
        id: "__alloyId1392"
    });
    $.__views.contentView2.add($.__views.__alloyId1392);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.pickerContentView2 = Ti.UI.createView({
        id: "pickerContentView2",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView2.add($.__views.pickerContentView2);
    $.__views.paymentLabel2 = Ti.UI.createLabel({
        id: "paymentLabel2",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView2.add($.__views.paymentLabel2);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView2.add($.__views.picker2);
<<<<<<< HEAD
    var __alloyId1393 = [];
    $.__views.__alloyId1394 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId1394"
    });
    __alloyId1393.push($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1395"
    });
    __alloyId1393.push($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1396"
    });
    __alloyId1393.push($.__views.__alloyId1396);
    $.__views.__alloyId1397 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1397"
    });
    __alloyId1393.push($.__views.__alloyId1397);
    $.__views.__alloyId1398 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1398"
    });
    __alloyId1393.push($.__views.__alloyId1398);
    $.__views.picker2.add(__alloyId1393);
=======
<<<<<<< HEAD
    var __alloyId1584 = [];
    $.__views.__alloyId1585 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId1585"
    });
    __alloyId1584.push($.__views.__alloyId1585);
    $.__views.__alloyId1586 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1586"
    });
    __alloyId1584.push($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1587"
    });
    __alloyId1584.push($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1588"
    });
    __alloyId1584.push($.__views.__alloyId1588);
    $.__views.__alloyId1589 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1589"
    });
    __alloyId1584.push($.__views.__alloyId1589);
    $.__views.picker2.add(__alloyId1584);
=======
    var __alloyId1393 = [];
    $.__views.__alloyId1394 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId1394"
    });
    __alloyId1393.push($.__views.__alloyId1394);
    $.__views.__alloyId1395 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1395"
    });
    __alloyId1393.push($.__views.__alloyId1395);
    $.__views.__alloyId1396 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1396"
    });
    __alloyId1393.push($.__views.__alloyId1396);
    $.__views.__alloyId1397 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1397"
    });
    __alloyId1393.push($.__views.__alloyId1397);
    $.__views.__alloyId1398 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1398"
    });
    __alloyId1393.push($.__views.__alloyId1398);
    $.__views.picker2.add(__alloyId1393);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
<<<<<<< HEAD
    $.__views.__alloyId1399 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1399"
    });
    $.__views.contentView.add($.__views.__alloyId1399);
=======
<<<<<<< HEAD
    $.__views.__alloyId1590 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1590"
    });
    $.__views.contentView.add($.__views.__alloyId1590);
=======
    $.__views.__alloyId1399 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1399"
    });
    $.__views.contentView.add($.__views.__alloyId1399);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
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
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    var __alloyId1591 = [];
    $.__views.__alloyId1592 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1592"
    });
    __alloyId1591.push($.__views.__alloyId1592);
    $.__views.__alloyId1593 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1593"
    });
    __alloyId1591.push($.__views.__alloyId1593);
    $.__views.__alloyId1594 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1594"
    });
    __alloyId1591.push($.__views.__alloyId1594);
    $.__views.picker.add(__alloyId1591);
    $.__views.__alloyId1595 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1595"
    });
    $.__views.payment3.add($.__views.__alloyId1595);
    proceed ? $.__views.__alloyId1595.addEventListener("click", proceed) : __defers["$.__views.__alloyId1595!click!proceed"] = true;
    $.__views.__alloyId1596 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1596"
    });
    $.__views.__alloyId1595.add($.__views.__alloyId1596);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    var __alloyId1400 = [];
    $.__views.__alloyId1401 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1401"
    });
    __alloyId1400.push($.__views.__alloyId1401);
    $.__views.__alloyId1402 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1402"
    });
    __alloyId1400.push($.__views.__alloyId1402);
    $.__views.__alloyId1403 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1403"
    });
    __alloyId1400.push($.__views.__alloyId1403);
    $.__views.picker.add(__alloyId1400);
    $.__views.__alloyId1404 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1404"
    });
    $.__views.payment3.add($.__views.__alloyId1404);
    proceed ? $.__views.__alloyId1404.addEventListener("click", proceed) : __defers["$.__views.__alloyId1404!click!proceed"] = true;
    $.__views.__alloyId1405 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1405"
    });
    $.__views.__alloyId1404.add($.__views.__alloyId1405);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1383!click!back"] && $.__views.__alloyId1383.addEventListener("click", back);
    __defers["$.__views.__alloyId1404!click!proceed"] && $.__views.__alloyId1404.addEventListener("click", proceed);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1574!click!back"] && $.__views.__alloyId1574.addEventListener("click", back);
    __defers["$.__views.__alloyId1595!click!proceed"] && $.__views.__alloyId1595.addEventListener("click", proceed);
=======
    __defers["$.__views.__alloyId1383!click!back"] && $.__views.__alloyId1383.addEventListener("click", back);
    __defers["$.__views.__alloyId1404!click!proceed"] && $.__views.__alloyId1404.addEventListener("click", proceed);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;