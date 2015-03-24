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
    $.__views.__alloyId1445 = Alloy.createController("_header", {
        id: "__alloyId1445",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1445.setParent($.__views.payment3);
    $.__views.__alloyId1446 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1446"
    });
    $.__views.payment3.add($.__views.__alloyId1446);
    $.__views.__alloyId1447 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1447"
    });
    $.__views.__alloyId1446.add($.__views.__alloyId1447);
    $.__views.__alloyId1448 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1448"
    });
    $.__views.__alloyId1446.add($.__views.__alloyId1448);
    back ? $.__views.__alloyId1448.addEventListener("click", back) : __defers["$.__views.__alloyId1448!click!back"] = true;
    $.__views.__alloyId1449 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1449"
    });
    $.__views.payment3.add($.__views.__alloyId1449);
    $.__views.__alloyId1450 = Ti.UI.createLabel({
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1450"
    });
    $.__views.__alloyId1449.add($.__views.__alloyId1450);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId1451 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1451"
    });
    $.__views.scrollView.add($.__views.__alloyId1451);
    $.__views.__alloyId1452 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1452"
    });
    $.__views.__alloyId1451.add($.__views.__alloyId1452);
    $.__views.__alloyId1453 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1453"
    });
    $.__views.__alloyId1451.add($.__views.__alloyId1453);
    $.__views.__alloyId1454 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1454"
    });
    $.__views.__alloyId1451.add($.__views.__alloyId1454);
    $.__views.__alloyId1455 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1455"
    });
    $.__views.__alloyId1451.add($.__views.__alloyId1455);
    $.__views.__alloyId1456 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1456"
    });
    $.__views.__alloyId1451.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1457"
    });
    $.__views.scrollView.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createLabel({
        text: "Top Up Amount",
        textAlign: "center",
        color: "black",
        id: "__alloyId1458"
    });
    $.__views.__alloyId1457.add($.__views.__alloyId1458);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1457.add($.__views.picker2);
    var __alloyId1459 = [];
    $.__views.__alloyId1460 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId1460"
    });
    __alloyId1459.push($.__views.__alloyId1460);
    $.__views.__alloyId1461 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1461"
    });
    __alloyId1459.push($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1462"
    });
    __alloyId1459.push($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1463"
    });
    __alloyId1459.push($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1464"
    });
    __alloyId1459.push($.__views.__alloyId1464);
    $.__views.picker2.add(__alloyId1459);
    paymentType2 ? $.__views.picker2.addEventListener("change", paymentType2) : __defers["$.__views.picker2!change!paymentType2"] = true;
    $.__views.__alloyId1465 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1457.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1466"
    });
    $.__views.scrollView.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1467"
    });
    $.__views.__alloyId1466.add($.__views.__alloyId1467);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1466.add($.__views.picker);
    var __alloyId1468 = [];
    $.__views.__alloyId1469 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1469"
    });
    __alloyId1468.push($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1470"
    });
    __alloyId1468.push($.__views.__alloyId1470);
    $.__views.__alloyId1471 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1471"
    });
    __alloyId1468.push($.__views.__alloyId1471);
    $.__views.picker.add(__alloyId1468);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1472 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1472"
    });
    $.__views.__alloyId1466.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1473"
    });
    $.__views.payment3.add($.__views.__alloyId1473);
    proceed ? $.__views.__alloyId1473.addEventListener("click", proceed) : __defers["$.__views.__alloyId1473!click!proceed"] = true;
    $.__views.__alloyId1474 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1474"
    });
    $.__views.__alloyId1473.add($.__views.__alloyId1474);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var paymentType;
    __defers["$.__views.__alloyId1448!click!back"] && $.__views.__alloyId1448.addEventListener("click", back);
    __defers["$.__views.picker2!change!paymentType2"] && $.__views.picker2.addEventListener("change", paymentType2);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1473!click!proceed"] && $.__views.__alloyId1473.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;