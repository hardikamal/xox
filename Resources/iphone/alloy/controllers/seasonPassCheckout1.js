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
        DRAWER.navigation("seasonPass", 1);
    }
    function next() {
        console.log("next");
        DRAWER.navigation("seasonPassCheckout2", 1);
    }
    function quantity(e) {
        console.log("quantity");
        quantity = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.quantityLabel.text = quantity);
    }
    function showPicker() {
        console.log("showPicker");
        console.log("$.pickerView.visible: " + $.pickerView.visible);
        if ("false" == $.pickerView.visible) {
            console.log("false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            console.log("else false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            console.log("else true");
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function done() {
        console.log("done");
        $.contentView.height = 50;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPassCheckout1";
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
    $.__views.seasonPassCheckout1 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "seasonPassCheckout1"
    });
    $.__views.seasonPassCheckout1 && $.addTopLevelView($.__views.seasonPassCheckout1);
    $.__views.__alloyId1455 = Alloy.createController("_header", {
        id: "__alloyId1455",
        __parentSymbol: $.__views.seasonPassCheckout1
    });
    $.__views.__alloyId1455.setParent($.__views.seasonPassCheckout1);
    $.__views.__alloyId1456 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1456"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId1456);
    $.__views.__alloyId1457 = Ti.UI.createLabel({
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1457"
    });
    $.__views.__alloyId1456.add($.__views.__alloyId1457);
    $.__views.__alloyId1458 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1458"
    });
    $.__views.__alloyId1456.add($.__views.__alloyId1458);
    back ? $.__views.__alloyId1458.addEventListener("click", back) : __defers["$.__views.__alloyId1458!click!back"] = true;
    $.__views.__alloyId1459 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1459"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId1459);
    $.__views.__alloyId1460 = Ti.UI.createLabel({
        text: "Check out",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1460"
    });
    $.__views.__alloyId1459.add($.__views.__alloyId1460);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.seasonPassCheckout1.add($.__views.scrollView);
    $.__views.__alloyId1461 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1461"
    });
    $.__views.scrollView.add($.__views.__alloyId1461);
    $.__views.__alloyId1462 = Ti.UI.createLabel({
        text: "Description",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1462"
    });
    $.__views.__alloyId1461.add($.__views.__alloyId1462);
    $.__views.__alloyId1463 = Ti.UI.createLabel({
        text: "Amount",
        backgroundColor: "transparent",
        color: "black",
        right: "0",
        id: "__alloyId1463"
    });
    $.__views.__alloyId1461.add($.__views.__alloyId1463);
    $.__views.__alloyId1464 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "90%",
        id: "__alloyId1464"
    });
    $.__views.scrollView.add($.__views.__alloyId1464);
    $.__views.__alloyId1465 = Ti.UI.createLabel({
        text: "PROMO SP 99D",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId1465"
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1465);
    $.__views.__alloyId1466 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        color: "black",
        right: "0",
        id: "__alloyId1466"
    });
    $.__views.__alloyId1464.add($.__views.__alloyId1466);
    $.__views.__alloyId1467 = Ti.UI.createLabel({
        text: "Talktime: 0 Minute(s)",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1467"
    });
    $.__views.scrollView.add($.__views.__alloyId1467);
    $.__views.__alloyId1468 = Ti.UI.createLabel({
        text: "Data: 512MB",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1468"
    });
    $.__views.scrollView.add($.__views.__alloyId1468);
    $.__views.__alloyId1469 = Ti.UI.createLabel({
        text: "FREE:",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        top: "20",
        id: "__alloyId1469"
    });
    $.__views.scrollView.add($.__views.__alloyId1469);
    $.__views.__alloyId1470 = Ti.UI.createLabel({
        text: "SMS: 0 Unit(s)",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        bottom: "10",
        id: "__alloyId1470"
    });
    $.__views.scrollView.add($.__views.__alloyId1470);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.quantityLabel = Ti.UI.createLabel({
        id: "quantityLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#F2F2F2",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.quantityLabel);
    showPicker ? $.__views.quantityLabel.addEventListener("click", showPicker) : __defers["$.__views.quantityLabel!click!showPicker"] = true;
    $.__views.__alloyId1471 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1471"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1471);
    showPicker ? $.__views.__alloyId1471.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1471!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50",
        backgroundColor: "blue"
    });
    $.__views.pickerContentView.add($.__views.pickerView);
    $.__views.done = Ti.UI.createButton({
        title: "Done",
        id: "done",
        height: "30",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        top: "0",
        left: "0",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.done);
    done ? $.__views.done.addEventListener("click", done) : __defers["$.__views.done!click!done"] = true;
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "30",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.picker);
    var __alloyId1472 = [];
    $.__views.__alloyId1473 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1473"
    });
    __alloyId1472.push($.__views.__alloyId1473);
    $.__views.__alloyId1474 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1474"
    });
    __alloyId1472.push($.__views.__alloyId1474);
    $.__views.__alloyId1475 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1475"
    });
    __alloyId1472.push($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1476"
    });
    __alloyId1472.push($.__views.__alloyId1476);
    $.__views.picker.add(__alloyId1472);
    quantity ? $.__views.picker.addEventListener("change", quantity) : __defers["$.__views.picker!change!quantity"] = true;
    $.__views.__alloyId1477 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId1477"
    });
    $.__views.scrollView.add($.__views.__alloyId1477);
    $.__views.__alloyId1478 = Ti.UI.createLabel({
        text: "TOTAL PAYMENT",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId1478"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        color: "black",
        right: "5%",
        id: "__alloyId1479"
    });
    $.__views.__alloyId1477.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1480"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId1480);
    next ? $.__views.__alloyId1480.addEventListener("click", next) : __defers["$.__views.__alloyId1480!click!next"] = true;
    $.__views.__alloyId1481 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId1481"
    });
    $.__views.__alloyId1480.add($.__views.__alloyId1481);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var quantity;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId1458!click!back"] && $.__views.__alloyId1458.addEventListener("click", back);
    __defers["$.__views.quantityLabel!click!showPicker"] && $.__views.quantityLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1471!click!showPicker"] && $.__views.__alloyId1471.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!quantity"] && $.__views.picker.addEventListener("change", quantity);
    __defers["$.__views.__alloyId1480!click!next"] && $.__views.__alloyId1480.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;