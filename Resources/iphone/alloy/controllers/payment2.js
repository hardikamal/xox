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
    $.__views.__alloyId1405 = Alloy.createController("_header", {
        id: "__alloyId1405",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId1405.setParent($.__views.payment2);
    $.__views.__alloyId1406 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1406"
    });
    $.__views.payment2.add($.__views.__alloyId1406);
    $.__views.__alloyId1407 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1407"
    });
    $.__views.__alloyId1406.add($.__views.__alloyId1407);
    $.__views.__alloyId1408 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1408"
    });
    $.__views.__alloyId1406.add($.__views.__alloyId1408);
    back ? $.__views.__alloyId1408.addEventListener("click", back) : __defers["$.__views.__alloyId1408!click!back"] = true;
    $.__views.__alloyId1409 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1409"
    });
    $.__views.payment2.add($.__views.__alloyId1409);
    $.__views.__alloyId1410 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1410"
    });
    $.__views.__alloyId1409.add($.__views.__alloyId1410);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment2.add($.__views.scrollView);
    $.__views.__alloyId1411 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1411"
    });
    $.__views.scrollView.add($.__views.__alloyId1411);
    $.__views.__alloyId1412 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1412"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1412);
    $.__views.__alloyId1413 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1413"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1413);
    $.__views.__alloyId1414 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1414"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1414);
    $.__views.__alloyId1415 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1415"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1415);
    $.__views.__alloyId1416 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1416"
    });
    $.__views.__alloyId1411.add($.__views.__alloyId1416);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1417 = Ti.UI.createLabel({
        text: "Bill Payment Amount (RM)",
        color: "black",
        id: "__alloyId1417"
    });
    $.__views.contentView2.add($.__views.__alloyId1417);
    $.__views.__alloyId1418 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1418"
    });
    $.__views.contentView2.add($.__views.__alloyId1418);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId1419 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1419"
    });
    $.__views.contentView.add($.__views.__alloyId1419);
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
    var __alloyId1420 = [];
    $.__views.__alloyId1421 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1421"
    });
    __alloyId1420.push($.__views.__alloyId1421);
    $.__views.__alloyId1422 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1422"
    });
    __alloyId1420.push($.__views.__alloyId1422);
    $.__views.__alloyId1423 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1423"
    });
    __alloyId1420.push($.__views.__alloyId1423);
    $.__views.picker.add(__alloyId1420);
    $.__views.__alloyId1424 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1424"
    });
    $.__views.payment2.add($.__views.__alloyId1424);
    proceed ? $.__views.__alloyId1424.addEventListener("click", proceed) : __defers["$.__views.__alloyId1424!click!proceed"] = true;
    $.__views.__alloyId1425 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1425"
    });
    $.__views.__alloyId1424.add($.__views.__alloyId1425);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    __defers["$.__views.__alloyId1408!click!back"] && $.__views.__alloyId1408.addEventListener("click", back);
    __defers["$.__views.__alloyId1424!click!proceed"] && $.__views.__alloyId1424.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;