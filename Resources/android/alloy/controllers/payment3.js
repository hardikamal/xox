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
<<<<<<< Updated upstream
        DRAWER.navigation("myAccount", 1);
    }
    function proceed() {
        DRAWER.navigation("payment6", 1);
    }
    function paymentType(e) {
        console.log("paymentType");
        paymentType = e.row.title;
    }
    function paymentType2(e) {
        console.log("paymentType");
        paymentType2 = e.row.title;
=======
        DRAWER.navigation("payment2", 2);
    }
    function done() {
        DRAWER.navigation("myAccount", 2);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    $.__views.payment3 = Ti.UI.createScrollView({
=======
    $.__views.payment3 = Ti.UI.createView({
>>>>>>> Stashed changes
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment3"
    });
    $.__views.payment3 && $.addTopLevelView($.__views.payment3);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1494 = Alloy.createController("_header", {
        id: "__alloyId1494",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1438 = Alloy.createController("_header", {
        id: "__alloyId1438",
=======
    $.__views.__alloyId1494 = Alloy.createController("_header", {
        id: "__alloyId1494",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1494 = Alloy.createController("_header", {
        id: "__alloyId1494",
>>>>>>> origin/master
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1494.setParent($.__views.payment3);
    $.__views.__alloyId1495 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1495"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.payment3.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.payment3.add($.__views.__alloyId1439);
    $.__views.__alloyId1440 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1267 = Alloy.createController("_header", {
        id: "__alloyId1267",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1267.setParent($.__views.payment3);
    $.__views.__alloyId1268 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1268"
    });
    $.__views.payment3.add($.__views.__alloyId1268);
    $.__views.__alloyId1269 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId423 = Alloy.createController("_header", {
        id: "__alloyId423",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId423.setParent($.__views.payment3);
    $.__views.__alloyId424 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId424"
    });
    $.__views.payment3.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.payment3.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.payment3.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1496"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1440"
    });
    $.__views.__alloyId1439.add($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createImageView({
=======
        id: "__alloyId1269"
    });
    $.__views.__alloyId1268.add($.__views.__alloyId1269);
    $.__views.__alloyId1270 = Ti.UI.createImageView({
>>>>>>> origin/master
=======
        id: "__alloyId425"
    });
    $.__views.__alloyId424.add($.__views.__alloyId425);
    $.__views.__alloyId426 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1496"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1496"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1497"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1441"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1497"
>>>>>>> origin/master
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1497);
    back ? $.__views.__alloyId1497.addEventListener("click", back) : __defers["$.__views.__alloyId1497!click!back"] = true;
    $.__views.__alloyId1498 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1498"
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
    $.__views.payment3.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createLabel({
=======
        id: "__alloyId1270"
=======
        id: "__alloyId1497"
>>>>>>> origin/master
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1497);
    back ? $.__views.__alloyId1497.addEventListener("click", back) : __defers["$.__views.__alloyId1497!click!back"] = true;
    $.__views.__alloyId1498 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1498"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    $.__views.payment3.add($.__views.__alloyId1498);
    $.__views.__alloyId1499 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1499"
    });
    $.__views.__alloyId1498.add($.__views.__alloyId1499);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId1500 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1500"
    });
    $.__views.scrollView.add($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1501"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1502"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1503"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1503);
    $.__views.__alloyId1504 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1504"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1505"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1505);
    $.__views.__alloyId1506 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1506"
    });
    $.__views.scrollView.add($.__views.__alloyId1506);
    $.__views.__alloyId1507 = Ti.UI.createLabel({
        text: "Top Up Amount",
        textAlign: "center",
        color: "black",
        id: "__alloyId1507"
    });
    $.__views.__alloyId1506.add($.__views.__alloyId1507);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1506.add($.__views.picker2);
    var __alloyId1508 = [];
    $.__views.__alloyId1509 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId1509"
    });
    __alloyId1508.push($.__views.__alloyId1509);
    $.__views.__alloyId1510 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1510"
    });
    __alloyId1508.push($.__views.__alloyId1510);
    $.__views.__alloyId1511 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1511"
    });
    __alloyId1508.push($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1512"
    });
    __alloyId1508.push($.__views.__alloyId1512);
    $.__views.__alloyId1513 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1513"
    });
    __alloyId1508.push($.__views.__alloyId1513);
    $.__views.picker2.add(__alloyId1508);
    paymentType2 ? $.__views.picker2.addEventListener("change", paymentType2) : __defers["$.__views.picker2!change!paymentType2"] = true;
    $.__views.__alloyId1514 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1514"
    });
    $.__views.__alloyId1506.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1515"
    });
    $.__views.scrollView.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1516"
    });
    $.__views.__alloyId1515.add($.__views.__alloyId1516);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1515.add($.__views.picker);
    var __alloyId1517 = [];
    $.__views.__alloyId1518 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1518"
    });
    __alloyId1517.push($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1519"
    });
    __alloyId1517.push($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1520"
    });
    __alloyId1517.push($.__views.__alloyId1520);
    $.__views.picker.add(__alloyId1517);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1521 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1521"
    });
    $.__views.__alloyId1515.add($.__views.__alloyId1521);
    $.__views.__alloyId1522 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1522"
    });
    $.__views.payment3.add($.__views.__alloyId1522);
    proceed ? $.__views.__alloyId1522.addEventListener("click", proceed) : __defers["$.__views.__alloyId1522!click!proceed"] = true;
    $.__views.__alloyId1523 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1523"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1523);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var paymentType;
    __defers["$.__views.__alloyId1497!click!back"] && $.__views.__alloyId1497.addEventListener("click", back);
    __defers["$.__views.picker2!change!paymentType2"] && $.__views.picker2.addEventListener("change", paymentType2);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId1522!click!proceed"] && $.__views.__alloyId1522.addEventListener("click", proceed);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1295!click!proceed"] && $.__views.__alloyId1295.addEventListener("click", proceed);
>>>>>>> origin/master
=======
        id: "__alloyId426"
    });
    $.__views.__alloyId424.add($.__views.__alloyId426);
    back ? $.__views.__alloyId426.addEventListener("click", back) : __defers["$.__views.__alloyId426!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId427 = Ti.UI.createLabel({
        text: "Payment Confirmation",
        color: "black",
        top: "20",
        id: "__alloyId427"
    });
    $.__views.scrollView.add($.__views.__alloyId427);
    $.__views.__alloyId428 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        height: "2",
        top: "10",
        bottom: "10",
        id: "__alloyId428"
    });
    $.__views.scrollView.add($.__views.__alloyId428);
    $.__views.account = Ti.UI.createLabel({
        text: "Account No.: 011 xxxxxxx",
        id: "account",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.account);
    $.__views.amount = Ti.UI.createLabel({
        id: "amount",
        text: "left",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.amount);
    $.__views.method = Ti.UI.createLabel({
        id: "method",
        text: "left",
        left: "10%",
        color: "black"
    });
    $.__views.scrollView.add($.__views.method);
    $.__views.__alloyId429 = Ti.UI.createButton({
        title: "Done",
        color: "#44C7D6",
        borderColor: "#44C7D6",
        height: "10%",
        width: "60%",
        borderRadius: "20",
        top: "40",
        id: "__alloyId429"
    });
    $.__views.scrollView.add($.__views.__alloyId429);
    done ? $.__views.__alloyId429.addEventListener("click", done) : __defers["$.__views.__alloyId429!click!done"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.amount.text = "Amount (RM): RM" + Ti.App.Properties.getString("amount");
    $.method.text = "Payment Method: " + Ti.App.Properties.getString("method");
    __defers["$.__views.__alloyId426!click!back"] && $.__views.__alloyId426.addEventListener("click", back);
    __defers["$.__views.__alloyId429!click!done"] && $.__views.__alloyId429.addEventListener("click", done);
>>>>>>> Stashed changes
=======
    __defers["$.__views.__alloyId1522!click!proceed"] && $.__views.__alloyId1522.addEventListener("click", proceed);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId1522!click!proceed"] && $.__views.__alloyId1522.addEventListener("click", proceed);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;