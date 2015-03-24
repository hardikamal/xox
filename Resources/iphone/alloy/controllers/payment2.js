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
        DRAWER.navigation("payment", 1);
    }
    function proceed() {
        DRAWER.navigation("payment4", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment2";
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
    $.__views.payment2 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment2"
    });
    $.__views.payment2 && $.addTopLevelView($.__views.payment2);
<<<<<<< HEAD
    $.__views.__alloyId1359 = Alloy.createController("_header", {
        id: "__alloyId1359",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId1359.setParent($.__views.payment2);
    $.__views.__alloyId1360 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1360"
    });
    $.__views.payment2.add($.__views.__alloyId1360);
    $.__views.__alloyId1361 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1550 = Alloy.createController("_header", {
        id: "__alloyId1550",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId1550.setParent($.__views.payment2);
    $.__views.__alloyId1551 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1551"
    });
    $.__views.payment2.add($.__views.__alloyId1551);
    $.__views.__alloyId1552 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1359 = Alloy.createController("_header", {
        id: "__alloyId1359",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId1359.setParent($.__views.payment2);
    $.__views.__alloyId1360 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1360"
    });
    $.__views.payment2.add($.__views.__alloyId1360);
    $.__views.__alloyId1361 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1361"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1361);
    $.__views.__alloyId1362 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1552"
    });
    $.__views.__alloyId1551.add($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createImageView({
=======
        id: "__alloyId1361"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1361);
    $.__views.__alloyId1362 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1553"
    });
    $.__views.__alloyId1551.add($.__views.__alloyId1553);
    back ? $.__views.__alloyId1553.addEventListener("click", back) : __defers["$.__views.__alloyId1553!click!back"] = true;
    $.__views.__alloyId1554 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1554"
    });
    $.__views.payment2.add($.__views.__alloyId1554);
    $.__views.__alloyId1555 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1362"
    });
    $.__views.__alloyId1360.add($.__views.__alloyId1362);
    back ? $.__views.__alloyId1362.addEventListener("click", back) : __defers["$.__views.__alloyId1362!click!back"] = true;
    $.__views.__alloyId1363 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1363"
    });
    $.__views.payment2.add($.__views.__alloyId1363);
    $.__views.__alloyId1364 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1364"
    });
    $.__views.__alloyId1363.add($.__views.__alloyId1364);
=======
<<<<<<< HEAD
        id: "__alloyId1555"
    });
    $.__views.__alloyId1554.add($.__views.__alloyId1555);
=======
        id: "__alloyId1364"
    });
    $.__views.__alloyId1363.add($.__views.__alloyId1364);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment2.add($.__views.scrollView);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1556 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1556"
    });
    $.__views.scrollView.add($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1365 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1365"
    });
    $.__views.scrollView.add($.__views.__alloyId1365);
    $.__views.__alloyId1366 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
<<<<<<< HEAD
        id: "__alloyId1366"
    });
=======
<<<<<<< HEAD
        id: "__alloyId1557"
    });
    $.__views.__alloyId1556.add($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1558"
    });
    $.__views.__alloyId1556.add($.__views.__alloyId1558);
    $.__views.__alloyId1559 = Ti.UI.createLabel({
=======
        id: "__alloyId1366"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1365.add($.__views.__alloyId1366);
    $.__views.__alloyId1367 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1367"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1367);
    $.__views.__alloyId1368 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1559"
    });
    $.__views.__alloyId1556.add($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1560"
    });
    $.__views.__alloyId1556.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1368"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1368);
    $.__views.__alloyId1369 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1369"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1369);
    $.__views.__alloyId1370 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId1370"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1370);
=======
<<<<<<< HEAD
        id: "__alloyId1561"
    });
    $.__views.__alloyId1556.add($.__views.__alloyId1561);
=======
        id: "__alloyId1370"
    });
    $.__views.__alloyId1365.add($.__views.__alloyId1370);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1562 = Ti.UI.createLabel({
        text: "Bill Payment Amount (RM)",
        color: "black",
        id: "__alloyId1562"
    });
    $.__views.contentView2.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createTextField({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1371 = Ti.UI.createLabel({
        text: "Bill Payment Amount (RM)",
        color: "black",
        id: "__alloyId1371"
    });
    $.__views.contentView2.add($.__views.__alloyId1371);
    $.__views.__alloyId1372 = Ti.UI.createTextField({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId1372"
    });
    $.__views.contentView2.add($.__views.__alloyId1372);
=======
<<<<<<< HEAD
        id: "__alloyId1563"
    });
    $.__views.contentView2.add($.__views.__alloyId1563);
=======
        id: "__alloyId1372"
    });
    $.__views.contentView2.add($.__views.__alloyId1372);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId1564 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1564"
    });
    $.__views.contentView.add($.__views.__alloyId1564);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1373 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1373"
    });
    $.__views.contentView.add($.__views.__alloyId1373);
<<<<<<< HEAD
=======
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
    var __alloyId1565 = [];
    $.__views.__alloyId1566 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1566"
    });
    __alloyId1565.push($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1567"
    });
    __alloyId1565.push($.__views.__alloyId1567);
    $.__views.__alloyId1568 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1568"
    });
    __alloyId1565.push($.__views.__alloyId1568);
    $.__views.picker.add(__alloyId1565);
    $.__views.__alloyId1569 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1569"
    });
    $.__views.payment2.add($.__views.__alloyId1569);
    proceed ? $.__views.__alloyId1569.addEventListener("click", proceed) : __defers["$.__views.__alloyId1569!click!proceed"] = true;
    $.__views.__alloyId1570 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1570"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1570);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    var __alloyId1374 = [];
    $.__views.__alloyId1375 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1375"
    });
    __alloyId1374.push($.__views.__alloyId1375);
    $.__views.__alloyId1376 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1376"
    });
    __alloyId1374.push($.__views.__alloyId1376);
    $.__views.__alloyId1377 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1377"
    });
    __alloyId1374.push($.__views.__alloyId1377);
    $.__views.picker.add(__alloyId1374);
    $.__views.__alloyId1378 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1378"
    });
    $.__views.payment2.add($.__views.__alloyId1378);
    proceed ? $.__views.__alloyId1378.addEventListener("click", proceed) : __defers["$.__views.__alloyId1378!click!proceed"] = true;
    $.__views.__alloyId1379 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1379"
    });
    $.__views.__alloyId1378.add($.__views.__alloyId1379);
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
    __defers["$.__views.__alloyId1362!click!back"] && $.__views.__alloyId1362.addEventListener("click", back);
    __defers["$.__views.__alloyId1378!click!proceed"] && $.__views.__alloyId1378.addEventListener("click", proceed);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1553!click!back"] && $.__views.__alloyId1553.addEventListener("click", back);
    __defers["$.__views.__alloyId1569!click!proceed"] && $.__views.__alloyId1569.addEventListener("click", proceed);
=======
    __defers["$.__views.__alloyId1362!click!back"] && $.__views.__alloyId1362.addEventListener("click", back);
    __defers["$.__views.__alloyId1378!click!proceed"] && $.__views.__alloyId1378.addEventListener("click", proceed);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;