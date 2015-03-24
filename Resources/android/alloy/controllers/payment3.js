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
        DRAWER.navigation("payment6", 1);
    }
    function paymentType(e) {
        console.log("paymentType");
        paymentType = e.row.title;
    }
    function paymentType2(e) {
        console.log("paymentType");
        paymentType2 = e.row.title;
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
    $.__views.__alloyId1494 = Alloy.createController("_header", {
        id: "__alloyId1494",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1494.setParent($.__views.payment3);
    $.__views.__alloyId1495 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1495"
    });
    $.__views.payment3.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1496"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1497"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1497);
    back ? $.__views.__alloyId1497.addEventListener("click", back) : __defers["$.__views.__alloyId1497!click!back"] = true;
    $.__views.__alloyId1498 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1498"
    });
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
    __defers["$.__views.__alloyId1522!click!proceed"] && $.__views.__alloyId1522.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;