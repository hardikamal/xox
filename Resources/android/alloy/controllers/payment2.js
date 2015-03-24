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
    $.__views.__alloyId1422 = Alloy.createController("_header", {
        id: "__alloyId1422",
        __parentSymbol: $.__views.payment2
    });
    $.__views.__alloyId1422.setParent($.__views.payment2);
    $.__views.__alloyId1423 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1423"
    });
    $.__views.payment2.add($.__views.__alloyId1423);
    $.__views.__alloyId1424 = Ti.UI.createLabel({
        text: "Payment",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1424"
    });
    $.__views.__alloyId1423.add($.__views.__alloyId1424);
    $.__views.__alloyId1425 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1425"
    });
    $.__views.__alloyId1423.add($.__views.__alloyId1425);
    back ? $.__views.__alloyId1425.addEventListener("click", back) : __defers["$.__views.__alloyId1425!click!back"] = true;
    $.__views.__alloyId1426 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1426"
    });
    $.__views.payment2.add($.__views.__alloyId1426);
    $.__views.__alloyId1427 = Ti.UI.createLabel({
        text: "Pay Postpaid Bill",
        backgroundColor: "transparent",
        color: "black",
        top: "15",
        left: "20",
        id: "__alloyId1427"
    });
    $.__views.__alloyId1426.add($.__views.__alloyId1427);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment2.add($.__views.scrollView);
    $.__views.__alloyId1428 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1428"
    });
    $.__views.scrollView.add($.__views.__alloyId1428);
    $.__views.__alloyId1429 = Ti.UI.createLabel({
        text: "Mobile Number",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1429"
    });
    $.__views.__alloyId1428.add($.__views.__alloyId1429);
    $.__views.__alloyId1430 = Ti.UI.createLabel({
        text: "01X 0000000",
        color: "black",
        textAlign: "center",
        id: "__alloyId1430"
    });
    $.__views.__alloyId1428.add($.__views.__alloyId1430);
    $.__views.__alloyId1431 = Ti.UI.createLabel({
        text: "Current Balance (RM)",
        color: "black",
        top: "20",
        textAlign: "center",
        id: "__alloyId1431"
    });
    $.__views.__alloyId1428.add($.__views.__alloyId1431);
    $.__views.__alloyId1432 = Ti.UI.createLabel({
        text: "00.00",
        color: "black",
        textAlign: "center",
        id: "__alloyId1432"
    });
    $.__views.__alloyId1428.add($.__views.__alloyId1432);
    $.__views.__alloyId1433 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1433"
    });
    $.__views.__alloyId1428.add($.__views.__alloyId1433);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId1434 = Ti.UI.createLabel({
        text: "Bill Payment Amount (RM)",
        color: "black",
        id: "__alloyId1434"
    });
    $.__views.contentView2.add($.__views.__alloyId1434);
    $.__views.__alloyId1435 = Ti.UI.createTextField({
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId1435"
    });
    $.__views.contentView2.add($.__views.__alloyId1435);
    $.__views.__alloyId1436 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1436"
    });
    $.__views.scrollView.add($.__views.__alloyId1436);
    $.__views.__alloyId1437 = Ti.UI.createLabel({
        text: "Payment Method",
        textAlign: "center",
        color: "black",
        id: "__alloyId1437"
    });
    $.__views.__alloyId1436.add($.__views.__alloyId1437);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1436.add($.__views.picker);
    var __alloyId1438 = [];
    $.__views.__alloyId1439 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1439"
    });
    __alloyId1438.push($.__views.__alloyId1439);
    $.__views.__alloyId1440 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1440"
    });
    __alloyId1438.push($.__views.__alloyId1440);
    $.__views.__alloyId1441 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1441"
    });
    __alloyId1438.push($.__views.__alloyId1441);
    $.__views.picker.add(__alloyId1438);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1442 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1442"
    });
    $.__views.__alloyId1436.add($.__views.__alloyId1442);
    $.__views.__alloyId1443 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1443"
    });
    $.__views.payment2.add($.__views.__alloyId1443);
    proceed ? $.__views.__alloyId1443.addEventListener("click", proceed) : __defers["$.__views.__alloyId1443!click!proceed"] = true;
    $.__views.__alloyId1444 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1444"
    });
    $.__views.__alloyId1443.add($.__views.__alloyId1444);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var paymentType;
    __defers["$.__views.__alloyId1425!click!back"] && $.__views.__alloyId1425.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1443!click!proceed"] && $.__views.__alloyId1443.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;