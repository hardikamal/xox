function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function terms(e) {
        console.log("terms");
        terms = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.termLabel.text = terms);
        console.log("e.rowIndex: " + e.rowIndex);
        switch (e.rowIndex) {
          case 0:
            $.title.text = "1.Title";
            $.label.text = "1.You can buy a top-up card from any authorised dealer in the form of:\n1.Top-Up Card / Voucher at any XOX Authorised Dealers\n2..Electronic Code / Top-Up Slip at\n3.Top-Up through XOX Self-Care Portal\n\nTop-up your prepaid account via:\n\nUSSD\na.Top-up your own prepaid account: Key in *132*1*<16-digit Pin Code># and press\nb.Top-up your friend's account: Key in *132*1*< 16-digit Pin Code >*< Mobile Number ># and press\nEXAMPLE: *132*1*< 16-digit Pin Code >*010300XXXX# and press";
            console.log("guide 1");
            break;

          case 1:
            $.title.text = "2.Title";
            $.label.text = "2.You can buy a top-up card from any authorised dealer in the form of:\n1.Top-Up Card / Voucher at any XOX Authorised Dealers\n2..Electronic Code / Top-Up Slip at\n3.Top-Up through XOX Self-Care Portal\n\nTop-up your prepaid account via:\n\nUSSD\na.Top-up your own prepaid account: Key in *132*1*<16-digit Pin Code># and press\nb.Top-up your friend's account: Key in *132*1*< 16-digit Pin Code >*< Mobile Number ># and press\nEXAMPLE: *132*1*< 16-digit Pin Code >*010300XXXX# and press";
            console.log("guide 2");
            break;

          case 2:
            $.title.text = "3.Title";
            $.label.text = "3.You can buy a top-up card from any authorised dealer in the form of:\n1.Top-Up Card / Voucher at any XOX Authorised Dealers\n2..Electronic Code / Top-Up Slip at\n3.Top-Up through XOX Self-Care Portal\n\nTop-up your prepaid account via:\n\nUSSD\na.Top-up your own prepaid account: Key in *132*1*<16-digit Pin Code># and press\nb.Top-up your friend's account: Key in *132*1*< 16-digit Pin Code >*< Mobile Number ># and press\nEXAMPLE: *132*1*< 16-digit Pin Code >*010300XXXX# and press";
            console.log("guide 3");
            break;

          case 3:
            $.title.text = "4.Title";
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
    this.__controllerPath = "terms";
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
    $.__views.terms = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "terms"
    });
    $.__views.terms && $.addTopLevelView($.__views.terms);
<<<<<<< HEAD
    $.__views.__alloyId2440 = Alloy.createController("_header", {
        id: "__alloyId2440",
        __parentSymbol: $.__views.terms
    });
    $.__views.__alloyId2440.setParent($.__views.terms);
    $.__views.__alloyId2441 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2441"
    });
    $.__views.terms.add($.__views.__alloyId2441);
    $.__views.__alloyId2442 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2797 = Alloy.createController("_header", {
        id: "__alloyId2797",
        __parentSymbol: $.__views.terms
    });
    $.__views.__alloyId2797.setParent($.__views.terms);
    $.__views.__alloyId2798 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2798"
    });
    $.__views.terms.add($.__views.__alloyId2798);
    $.__views.__alloyId2799 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2440 = Alloy.createController("_header", {
        id: "__alloyId2440",
        __parentSymbol: $.__views.terms
    });
    $.__views.__alloyId2440.setParent($.__views.terms);
    $.__views.__alloyId2441 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2441"
    });
    $.__views.terms.add($.__views.__alloyId2441);
    $.__views.__alloyId2442 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId2442"
    });
    $.__views.__alloyId2441.add($.__views.__alloyId2442);
=======
<<<<<<< HEAD
        id: "__alloyId2799"
    });
    $.__views.__alloyId2798.add($.__views.__alloyId2799);
=======
        id: "__alloyId2442"
    });
    $.__views.__alloyId2441.add($.__views.__alloyId2442);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "100",
        backgroundColor: "#E6E7E9"
    });
    $.__views.terms.add($.__views.contentView);
<<<<<<< HEAD
    $.__views.__alloyId2443 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2800 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2443 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Terms & Conditions",
        width: "90%",
        height: "30",
        top: "10",
        bottom: "5",
        textAlign: "left",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId2443"
    });
    $.__views.contentView.add($.__views.__alloyId2443);
=======
<<<<<<< HEAD
        id: "__alloyId2800"
    });
    $.__views.contentView.add($.__views.__alloyId2800);
=======
        id: "__alloyId2443"
    });
    $.__views.contentView.add($.__views.__alloyId2443);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.termLabel = Ti.UI.createLabel({
        id: "termLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.termLabel);
    showPicker ? $.__views.termLabel.addEventListener("click", showPicker) : __defers["$.__views.termLabel!click!showPicker"] = true;
<<<<<<< HEAD
    $.__views.__alloyId2444 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2801 = Ti.UI.createImageView({
=======
    $.__views.__alloyId2444 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2801"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2801);
    showPicker ? $.__views.__alloyId2801.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2801!click!showPicker"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2444"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2444);
    showPicker ? $.__views.__alloyId2444.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2444!click!showPicker"] = true;
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
=======
<<<<<<< HEAD
    var __alloyId2802 = [];
    $.__views.__alloyId2803 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2803"
    });
    __alloyId2802.push($.__views.__alloyId2803);
    $.__views.__alloyId2804 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2804"
    });
    __alloyId2802.push($.__views.__alloyId2804);
    $.__views.__alloyId2805 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2805"
    });
    __alloyId2802.push($.__views.__alloyId2805);
    $.__views.__alloyId2806 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2806"
    });
    __alloyId2802.push($.__views.__alloyId2806);
    $.__views.picker.add(__alloyId2802);
    terms ? $.__views.picker.addEventListener("change", terms) : __defers["$.__views.picker!change!terms"] = true;
    $.__views.__alloyId2807 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId2807"
    });
    $.__views.terms.add($.__views.__alloyId2807);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    var __alloyId2445 = [];
    $.__views.__alloyId2446 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2446"
    });
    __alloyId2445.push($.__views.__alloyId2446);
    $.__views.__alloyId2447 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2447"
    });
    __alloyId2445.push($.__views.__alloyId2447);
    $.__views.__alloyId2448 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2448"
    });
    __alloyId2445.push($.__views.__alloyId2448);
    $.__views.__alloyId2449 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2449"
    });
    __alloyId2445.push($.__views.__alloyId2449);
    $.__views.picker.add(__alloyId2445);
    terms ? $.__views.picker.addEventListener("change", terms) : __defers["$.__views.picker!change!terms"] = true;
    $.__views.__alloyId2450 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId2450"
    });
    $.__views.terms.add($.__views.__alloyId2450);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.title = Ti.UI.createLabel({
        id: "title",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
<<<<<<< HEAD
    $.__views.__alloyId2450.add($.__views.title);
=======
<<<<<<< HEAD
    $.__views.__alloyId2807.add($.__views.title);
=======
    $.__views.__alloyId2450.add($.__views.title);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.label = Ti.UI.createLabel({
        id: "label",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
<<<<<<< HEAD
    $.__views.__alloyId2450.add($.__views.label);
=======
<<<<<<< HEAD
    $.__views.__alloyId2807.add($.__views.label);
=======
    $.__views.__alloyId2450.add($.__views.label);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    var terms;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.termLabel!click!showPicker"] && $.__views.termLabel.addEventListener("click", showPicker);
<<<<<<< HEAD
    __defers["$.__views.__alloyId2444!click!showPicker"] && $.__views.__alloyId2444.addEventListener("click", showPicker);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2801!click!showPicker"] && $.__views.__alloyId2801.addEventListener("click", showPicker);
=======
    __defers["$.__views.__alloyId2444!click!showPicker"] && $.__views.__alloyId2444.addEventListener("click", showPicker);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!terms"] && $.__views.picker.addEventListener("change", terms);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;