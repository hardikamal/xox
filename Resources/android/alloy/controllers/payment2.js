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
    $.__views.__alloyId1471 = Alloy.createController("_header", {
        id: "__alloyId1471",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId1471.setParent($.__views.payment2);
    $.__views.__alloyId1472 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1472"
    });
    $.__views.payment2.add($.__views.__alloyId1472);
    $.__views.__alloyId1473 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1473"
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1474"
    });
    $.__views.__alloyId1472.add($.__views.__alloyId1474);
    back ? $.__views.__alloyId1474.addEventListener("click", back) : __defers["$.__views.__alloyId1474!click!back"] = true;
    $.__views.__alloyId1475 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1475"
    });
    $.__views.payment2.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1476"
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1476);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment2.add($.__views.scrollView);
    $.__views.__alloyId1477 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1477"
    });
    $.__views.scrollView.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1478"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1479"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1480"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1481"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1482"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1482);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1483 = Ti.UI.createLabel({
        text: "Bill Payment Amount (RM)",
        color: "black",
        id: "__alloyId1483"
    });
    $.__views.contentView2.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1484"
    });
    $.__views.contentView2.add($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1485"
    });
    $.__views.scrollView.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1486"
    });
    $.__views.__alloyId1485.add($.__views.__alloyId1486);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1485.add($.__views.picker);
    var __alloyId1487 = [];
    $.__views.__alloyId1488 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1488"
    });
    __alloyId1487.push($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1489"
    });
    __alloyId1487.push($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1490"
    });
    __alloyId1487.push($.__views.__alloyId1490);
    $.__views.picker.add(__alloyId1487);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1491 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1491"
    });
    $.__views.__alloyId1485.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1492"
    });
    $.__views.payment2.add($.__views.__alloyId1492);
    proceed ? $.__views.__alloyId1492.addEventListener("click", proceed) : __defers["$.__views.__alloyId1492!click!proceed"] = true;
    $.__views.__alloyId1493 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1493"
    });
    $.__views.__alloyId1492.add($.__views.__alloyId1493);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var paymentType;
    __defers["$.__views.__alloyId1474!click!back"] && $.__views.__alloyId1474.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1492!click!proceed"] && $.__views.__alloyId1492.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;