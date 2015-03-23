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
    $.__views.__alloyId2188 = Alloy.createController("_header", {
        id: "__alloyId2188",
=======
<<<<<<< HEAD
    $.__views.__alloyId2497 = Alloy.createController("_header", {
        id: "__alloyId2497",
        __parentSymbol: $.__views.userGuide
    });
    $.__views.__alloyId2497.setParent($.__views.userGuide);
    $.__views.__alloyId2498 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2498"
    });
    $.__views.userGuide.add($.__views.__alloyId2498);
    $.__views.__alloyId2499 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1779 = Alloy.createController("_header", {
        id: "__alloyId1779",
>>>>>>> origin/master
        __parentSymbol: $.__views.userGuide
    });
    $.__views.__alloyId2188.setParent($.__views.userGuide);
    $.__views.__alloyId2189 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2189"
    });
<<<<<<< HEAD
    $.__views.userGuide.add($.__views.__alloyId2189);
    $.__views.__alloyId2190 = Ti.UI.createLabel({
=======
    $.__views.userGuide.add($.__views.__alloyId1780);
    $.__views.__alloyId1781 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
<<<<<<< HEAD
        id: "__alloyId2190"
    });
    $.__views.__alloyId2189.add($.__views.__alloyId2190);
=======
<<<<<<< HEAD
        id: "__alloyId2499"
    });
    $.__views.__alloyId2498.add($.__views.__alloyId2499);
=======
        id: "__alloyId1781"
    });
    $.__views.__alloyId1780.add($.__views.__alloyId1781);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "100",
        backgroundColor: "#E6E7E9"
    });
    $.__views.userGuide.add($.__views.contentView);
<<<<<<< HEAD
    $.__views.__alloyId2191 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2500 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1782 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "User Guide",
        width: "90%",
        height: "30",
        top: "10",
        bottom: "5",
        textAlign: "left",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId2191"
    });
    $.__views.contentView.add($.__views.__alloyId2191);
=======
<<<<<<< HEAD
        id: "__alloyId2500"
    });
    $.__views.contentView.add($.__views.__alloyId2500);
=======
        id: "__alloyId1782"
    });
    $.__views.contentView.add($.__views.__alloyId1782);
>>>>>>> origin/master
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
    $.__views.__alloyId2192 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2501 = Ti.UI.createImageView({
=======
    $.__views.__alloyId1783 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId2192"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2192);
    showPicker ? $.__views.__alloyId2192.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2192!click!showPicker"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId2501"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2501);
    showPicker ? $.__views.__alloyId2501.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2501!click!showPicker"] = true;
=======
        id: "__alloyId1783"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1783);
    showPicker ? $.__views.__alloyId1783.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1783!click!showPicker"] = true;
>>>>>>> origin/master
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
    var __alloyId2193 = [];
    $.__views.__alloyId2194 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId2502 = [];
    $.__views.__alloyId2503 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2503"
    });
    __alloyId2502.push($.__views.__alloyId2503);
    $.__views.__alloyId2504 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2504"
    });
    __alloyId2502.push($.__views.__alloyId2504);
    $.__views.__alloyId2505 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2505"
    });
    __alloyId2502.push($.__views.__alloyId2505);
    $.__views.__alloyId2506 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2506"
    });
    __alloyId2502.push($.__views.__alloyId2506);
    $.__views.picker.add(__alloyId2502);
    guide ? $.__views.picker.addEventListener("change", guide) : __defers["$.__views.picker!change!guide"] = true;
    $.__views.__alloyId2507 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId2507"
    });
    $.__views.userGuide.add($.__views.__alloyId2507);
=======
    var __alloyId1784 = [];
    $.__views.__alloyId1785 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "All States",
        id: "__alloyId2194"
    });
    __alloyId2193.push($.__views.__alloyId2194);
    $.__views.__alloyId2195 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2195"
    });
    __alloyId2193.push($.__views.__alloyId2195);
    $.__views.__alloyId2196 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2196"
    });
    __alloyId2193.push($.__views.__alloyId2196);
    $.__views.__alloyId2197 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2197"
    });
    __alloyId2193.push($.__views.__alloyId2197);
    $.__views.picker.add(__alloyId2193);
    guide ? $.__views.picker.addEventListener("change", guide) : __defers["$.__views.picker!change!guide"] = true;
    $.__views.__alloyId2198 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId2198"
    });
<<<<<<< HEAD
    $.__views.userGuide.add($.__views.__alloyId2198);
=======
    $.__views.userGuide.add($.__views.__alloyId1789);
>>>>>>> origin/master
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
    $.__views.__alloyId2198.add($.__views.label);
=======
<<<<<<< HEAD
    $.__views.__alloyId2507.add($.__views.label);
=======
    $.__views.__alloyId1789.add($.__views.label);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    var guide;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.guideLabel!click!showPicker"] && $.__views.guideLabel.addEventListener("click", showPicker);
<<<<<<< HEAD
    __defers["$.__views.__alloyId2192!click!showPicker"] && $.__views.__alloyId2192.addEventListener("click", showPicker);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2501!click!showPicker"] && $.__views.__alloyId2501.addEventListener("click", showPicker);
=======
    __defers["$.__views.__alloyId1783!click!showPicker"] && $.__views.__alloyId1783.addEventListener("click", showPicker);
>>>>>>> origin/master
>>>>>>> origin/master
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!guide"] && $.__views.picker.addEventListener("change", guide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;