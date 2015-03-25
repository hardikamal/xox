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
    $.__views.__alloyId2591 = Alloy.createController("_header", {
        id: "__alloyId2591",
        __parentSymbol: $.__views.seasonPassCheckout1
    });
    $.__views.__alloyId2591.setParent($.__views.seasonPassCheckout1);
    $.__views.__alloyId2592 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2592"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2592);
    $.__views.__alloyId2593 = Ti.UI.createLabel({
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2593"
    });
    $.__views.__alloyId2592.add($.__views.__alloyId2593);
    $.__views.__alloyId2594 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2594"
    });
    $.__views.__alloyId2592.add($.__views.__alloyId2594);
    back ? $.__views.__alloyId2594.addEventListener("click", back) : __defers["$.__views.__alloyId2594!click!back"] = true;
    $.__views.__alloyId2595 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2595"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2595);
    $.__views.__alloyId2596 = Ti.UI.createLabel({
        text: "Check out",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId2596"
    });
    $.__views.__alloyId2595.add($.__views.__alloyId2596);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.seasonPassCheckout1.add($.__views.scrollView);
    $.__views.__alloyId2597 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2597"
    });
    $.__views.scrollView.add($.__views.__alloyId2597);
    $.__views.__alloyId2598 = Ti.UI.createLabel({
        text: "Description",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2598"
    });
    $.__views.__alloyId2597.add($.__views.__alloyId2598);
    $.__views.__alloyId2599 = Ti.UI.createLabel({
        text: "Amount",
        backgroundColor: "transparent",
        color: "black",
        right: "0",
        id: "__alloyId2599"
    });
    $.__views.__alloyId2597.add($.__views.__alloyId2599);
    $.__views.__alloyId2600 = Ti.UI.createView({
        layout: "composite",
        height: Ti.UI.SIZE,
        width: "90%",
        id: "__alloyId2600"
    });
    $.__views.scrollView.add($.__views.__alloyId2600);
    $.__views.__alloyId2601 = Ti.UI.createLabel({
        text: "PROMO SP 99D",
        backgroundColor: "transparent",
        color: "black",
        left: "0",
        id: "__alloyId2601"
    });
    $.__views.__alloyId2600.add($.__views.__alloyId2601);
    $.__views.__alloyId2602 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        color: "black",
        right: "0",
        id: "__alloyId2602"
    });
    $.__views.__alloyId2600.add($.__views.__alloyId2602);
    $.__views.__alloyId2603 = Ti.UI.createLabel({
        text: "Talktime: 0 Minute(s)",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2603"
    });
    $.__views.scrollView.add($.__views.__alloyId2603);
    $.__views.__alloyId2604 = Ti.UI.createLabel({
        text: "Data: 512MB",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2604"
    });
    $.__views.scrollView.add($.__views.__alloyId2604);
    $.__views.__alloyId2605 = Ti.UI.createLabel({
        text: "FREE:",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        top: "20",
        id: "__alloyId2605"
    });
    $.__views.scrollView.add($.__views.__alloyId2605);
    $.__views.__alloyId2606 = Ti.UI.createLabel({
        text: "SMS: 0 Unit(s)",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        bottom: "10",
        id: "__alloyId2606"
    });
    $.__views.scrollView.add($.__views.__alloyId2606);
    $.__views.__alloyId2607 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId2607"
    });
    $.__views.scrollView.add($.__views.__alloyId2607);
    $.__views.__alloyId2608 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2608"
    });
    $.__views.__alloyId2607.add($.__views.__alloyId2608);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2608.add($.__views.picker);
    var __alloyId2609 = [];
    $.__views.__alloyId2610 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2610"
    });
    __alloyId2609.push($.__views.__alloyId2610);
    $.__views.__alloyId2611 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2611"
    });
    __alloyId2609.push($.__views.__alloyId2611);
    $.__views.__alloyId2612 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2612"
    });
    __alloyId2609.push($.__views.__alloyId2612);
    $.__views.__alloyId2613 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2613"
    });
    __alloyId2609.push($.__views.__alloyId2613);
    $.__views.picker.add(__alloyId2609);
    quantity ? $.__views.picker.addEventListener("change", quantity) : __defers["$.__views.picker!change!quantity"] = true;
    $.__views.__alloyId2614 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2614"
    });
    $.__views.__alloyId2608.add($.__views.__alloyId2614);
    $.__views.__alloyId2615 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "gray",
        id: "__alloyId2615"
    });
    $.__views.scrollView.add($.__views.__alloyId2615);
    $.__views.__alloyId2616 = Ti.UI.createLabel({
        text: "TOTAL PAYMENT",
        backgroundColor: "transparent",
        color: "black",
        left: "5%",
        id: "__alloyId2616"
    });
    $.__views.__alloyId2615.add($.__views.__alloyId2616);
    $.__views.__alloyId2617 = Ti.UI.createLabel({
        text: "RM00.00",
        backgroundColor: "transparent",
        color: "black",
        right: "5%",
        id: "__alloyId2617"
    });
    $.__views.__alloyId2615.add($.__views.__alloyId2617);
    $.__views.__alloyId2618 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2618"
    });
    $.__views.seasonPassCheckout1.add($.__views.__alloyId2618);
    next ? $.__views.__alloyId2618.addEventListener("click", next) : __defers["$.__views.__alloyId2618!click!next"] = true;
    $.__views.__alloyId2619 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId2619"
    });
    $.__views.__alloyId2618.add($.__views.__alloyId2619);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var quantity;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2594!click!back"] && $.__views.__alloyId2594.addEventListener("click", back);
    __defers["$.__views.picker!change!quantity"] && $.__views.picker.addEventListener("change", quantity);
    __defers["$.__views.__alloyId2618!click!next"] && $.__views.__alloyId2618.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;