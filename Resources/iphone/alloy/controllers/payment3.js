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
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1382"
    });
    $.__views.__alloyId1381.add($.__views.__alloyId1382);
    $.__views.__alloyId1383 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
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
        text: "Prepaid Top Up",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1385"
    });
    $.__views.__alloyId1384.add($.__views.__alloyId1385);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId1386 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1386"
    });
    $.__views.scrollView.add($.__views.__alloyId1386);
    $.__views.__alloyId1387 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
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
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
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
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1391"
    });
    $.__views.__alloyId1386.add($.__views.__alloyId1391);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1392 = Ti.UI.createLabel({
        text: "Top Up Amount",
        textAlign: "center",
        color: "black",
        id: "__alloyId1392"
    });
    $.__views.contentView2.add($.__views.__alloyId1392);
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
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1399 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1399"
    });
    $.__views.contentView.add($.__views.__alloyId1399);
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1383!click!back"] && $.__views.__alloyId1383.addEventListener("click", back);
    __defers["$.__views.__alloyId1404!click!proceed"] && $.__views.__alloyId1404.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;