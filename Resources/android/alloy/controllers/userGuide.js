function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function guide(e) {
        console.log("guide");
        guide = e.row.title;
        console.log("e.rowIndex: " + e.rowIndex);
        switch (e.rowIndex) {
          case 0:
            $.label.text = "1.You can buy a top-up card from any authorised dealer in the form of:\n1.Top-Up Card / Voucher at any XOX Authorised Dealers\n2..Electronic Code / Top-Up Slip at\n3.Top-Up through XOX Self-Care Portal\n\nTop-up your prepaid account via:\n\nUSSD\na.Top-up your own prepaid account: Key in *132*1*<16-digit Pin Code># and press\nb.Top-up your friend's account: Key in *132*1*< 16-digit Pin Code >*< Mobile Number ># and press\nEXAMPLE: *132*1*< 16-digit Pin Code >*010300XXXX# and press";
            console.log("guide 1");
            break;

          case 1:
            $.label.text = "2.You can buy a top-up card from any authorised dealer in the form of:\n1.Top-Up Card / Voucher at any XOX Authorised Dealers\n2..Electronic Code / Top-Up Slip at\n3.Top-Up through XOX Self-Care Portal\n\nTop-up your prepaid account via:\n\nUSSD\na.Top-up your own prepaid account: Key in *132*1*<16-digit Pin Code># and press\nb.Top-up your friend's account: Key in *132*1*< 16-digit Pin Code >*< Mobile Number ># and press\nEXAMPLE: *132*1*< 16-digit Pin Code >*010300XXXX# and press";
            console.log("guide 2");
            break;

          case 2:
            $.label.text = "3.You can buy a top-up card from any authorised dealer in the form of:\n1.Top-Up Card / Voucher at any XOX Authorised Dealers\n2..Electronic Code / Top-Up Slip at\n3.Top-Up through XOX Self-Care Portal\n\nTop-up your prepaid account via:\n\nUSSD\na.Top-up your own prepaid account: Key in *132*1*<16-digit Pin Code># and press\nb.Top-up your friend's account: Key in *132*1*< 16-digit Pin Code >*< Mobile Number ># and press\nEXAMPLE: *132*1*< 16-digit Pin Code >*010300XXXX# and press";
            console.log("guide 3");
            break;

          case 3:
            $.label.text = "4.You can buy a top-up card from any authorised dealer in the form of:\n1.Top-Up Card / Voucher at any XOX Authorised Dealers\n2..Electronic Code / Top-Up Slip at\n3.Top-Up through XOX Self-Care Portal\n\nTop-up your prepaid account via:\n\nUSSD\na.Top-up your own prepaid account: Key in *132*1*<16-digit Pin Code># and press\nb.Top-up your friend's account: Key in *132*1*< 16-digit Pin Code >*< Mobile Number ># and press\nEXAMPLE: *132*1*< 16-digit Pin Code >*010300XXXX# and press";
            console.log("guide 4");
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "userGuide";
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
    $.__views.userGuide = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "userGuide"
    });
    $.__views.userGuide && $.addTopLevelView($.__views.userGuide);
    $.__views.__alloyId1601 = Alloy.createController("_header", {
        id: "__alloyId1601",
        __parentSymbol: $.__views.userGuide
    });
    $.__views.__alloyId1601.setParent($.__views.userGuide);
    $.__views.__alloyId1602 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1602"
    });
    $.__views.userGuide.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1603"
    });
    $.__views.__alloyId1602.add($.__views.__alloyId1603);
    $.__views.__alloyId1604 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1604"
    });
    $.__views.userGuide.add($.__views.__alloyId1604);
    $.__views.__alloyId1605 = Ti.UI.createLabel({
        text: "User Guide",
        width: "90%",
        height: "30",
        top: "10",
        bottom: "5",
        textAlign: "left",
        color: "black",
        id: "__alloyId1605"
    });
    $.__views.__alloyId1604.add($.__views.__alloyId1605);
    $.__views.__alloyId1606 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1606"
    });
    $.__views.__alloyId1604.add($.__views.__alloyId1606);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1606.add($.__views.picker);
    var __alloyId1607 = [];
    $.__views.__alloyId1608 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1608"
    });
    __alloyId1607.push($.__views.__alloyId1608);
    $.__views.__alloyId1609 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1609"
    });
    __alloyId1607.push($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1610"
    });
    __alloyId1607.push($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1611"
    });
    __alloyId1607.push($.__views.__alloyId1611);
    $.__views.picker.add(__alloyId1607);
    guide ? $.__views.picker.addEventListener("change", guide) : __defers["$.__views.picker!change!guide"] = true;
    $.__views.__alloyId1612 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1612"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1612);
    $.__views.__alloyId1613 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId1613"
    });
    $.__views.userGuide.add($.__views.__alloyId1613);
    $.__views.label = Ti.UI.createLabel({
        id: "label",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
    $.__views.__alloyId1613.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var guide;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.picker!change!guide"] && $.__views.picker.addEventListener("change", guide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;