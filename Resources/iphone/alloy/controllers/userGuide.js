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
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.guideLabel.text = guide);
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
            $.contentView.height = 100;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function done() {
        console.log("done");
        $.contentView.height = 100;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
    $.__views.__alloyId2451 = Alloy.createController("_header", {
        id: "__alloyId2451",
        __parentSymbol: $.__views.userGuide
    });
    $.__views.__alloyId2451.setParent($.__views.userGuide);
    $.__views.__alloyId2452 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2452"
    });
    $.__views.userGuide.add($.__views.__alloyId2452);
    $.__views.__alloyId2453 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId2808 = Alloy.createController("_header", {
        id: "__alloyId2808",
        __parentSymbol: $.__views.userGuide
    });
    $.__views.__alloyId2808.setParent($.__views.userGuide);
    $.__views.__alloyId2809 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2809"
    });
    $.__views.userGuide.add($.__views.__alloyId2809);
    $.__views.__alloyId2810 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2451 = Alloy.createController("_header", {
        id: "__alloyId2451",
        __parentSymbol: $.__views.userGuide
    });
    $.__views.__alloyId2451.setParent($.__views.userGuide);
    $.__views.__alloyId2452 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2452"
    });
    $.__views.userGuide.add($.__views.__alloyId2452);
    $.__views.__alloyId2453 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2453"
    });
    $.__views.__alloyId2452.add($.__views.__alloyId2453);
=======
<<<<<<< HEAD
        id: "__alloyId2810"
    });
    $.__views.__alloyId2809.add($.__views.__alloyId2810);
=======
        id: "__alloyId2453"
    });
    $.__views.__alloyId2452.add($.__views.__alloyId2453);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2453"
    });
    $.__views.__alloyId2452.add($.__views.__alloyId2453);
>>>>>>> origin/master
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "100",
        backgroundColor: "#E6E7E9"
    });
    $.__views.userGuide.add($.__views.contentView);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2454 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2811 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2454 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2454 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "User Guide",
        width: "90%",
        height: "30",
        top: "10",
        bottom: "5",
        textAlign: "left",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId2454"
    });
    $.__views.contentView.add($.__views.__alloyId2454);
=======
<<<<<<< HEAD
        id: "__alloyId2811"
    });
    $.__views.contentView.add($.__views.__alloyId2811);
=======
        id: "__alloyId2454"
    });
    $.__views.contentView.add($.__views.__alloyId2454);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2454"
    });
    $.__views.contentView.add($.__views.__alloyId2454);
>>>>>>> origin/master
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.guideLabel = Ti.UI.createLabel({
        id: "guideLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.guideLabel);
    showPicker ? $.__views.guideLabel.addEventListener("click", showPicker) : __defers["$.__views.guideLabel!click!showPicker"] = true;
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2455 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2812 = Ti.UI.createImageView({
=======
    $.__views.__alloyId2455 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2455 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2812"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2812);
    showPicker ? $.__views.__alloyId2812.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2812!click!showPicker"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2455"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2455);
    showPicker ? $.__views.__alloyId2455.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2455!click!showPicker"] = true;
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId2455"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2455);
    showPicker ? $.__views.__alloyId2455.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2455!click!showPicker"] = true;
>>>>>>> origin/master
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    var __alloyId2813 = [];
    $.__views.__alloyId2814 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2814"
    });
    __alloyId2813.push($.__views.__alloyId2814);
    $.__views.__alloyId2815 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2815"
    });
    __alloyId2813.push($.__views.__alloyId2815);
    $.__views.__alloyId2816 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2816"
    });
    __alloyId2813.push($.__views.__alloyId2816);
    $.__views.__alloyId2817 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2817"
    });
    __alloyId2813.push($.__views.__alloyId2817);
    $.__views.picker.add(__alloyId2813);
    guide ? $.__views.picker.addEventListener("change", guide) : __defers["$.__views.picker!change!guide"] = true;
    $.__views.__alloyId2818 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId2818"
    });
    $.__views.userGuide.add($.__views.__alloyId2818);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    var __alloyId2456 = [];
    $.__views.__alloyId2457 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2457"
    });
    __alloyId2456.push($.__views.__alloyId2457);
    $.__views.__alloyId2458 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2458"
    });
    __alloyId2456.push($.__views.__alloyId2458);
    $.__views.__alloyId2459 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2459"
    });
    __alloyId2456.push($.__views.__alloyId2459);
    $.__views.__alloyId2460 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2460"
    });
    __alloyId2456.push($.__views.__alloyId2460);
    $.__views.picker.add(__alloyId2456);
    guide ? $.__views.picker.addEventListener("change", guide) : __defers["$.__views.picker!change!guide"] = true;
    $.__views.__alloyId2461 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId2461"
    });
    $.__views.userGuide.add($.__views.__alloyId2461);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    $.__views.label = Ti.UI.createLabel({
        id: "label",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId2461.add($.__views.label);
=======
<<<<<<< HEAD
    $.__views.__alloyId2818.add($.__views.label);
=======
    $.__views.__alloyId2461.add($.__views.label);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId2461.add($.__views.label);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    var guide;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.guideLabel!click!showPicker"] && $.__views.guideLabel.addEventListener("click", showPicker);
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId2455!click!showPicker"] && $.__views.__alloyId2455.addEventListener("click", showPicker);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2812!click!showPicker"] && $.__views.__alloyId2812.addEventListener("click", showPicker);
=======
    __defers["$.__views.__alloyId2455!click!showPicker"] && $.__views.__alloyId2455.addEventListener("click", showPicker);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId2455!click!showPicker"] && $.__views.__alloyId2455.addEventListener("click", showPicker);
>>>>>>> origin/master
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!guide"] && $.__views.picker.addEventListener("change", guide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;