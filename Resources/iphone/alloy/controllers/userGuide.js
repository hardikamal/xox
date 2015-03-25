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
    function back() {
        DRAWER.navigation("support", 1);
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
    $.__views.__alloyId2889 = Alloy.createController("_header", {
        id: "__alloyId2889",
        __parentSymbol: $.__views.userGuide
    });
    $.__views.__alloyId2889.setParent($.__views.userGuide);
    $.__views.__alloyId2890 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2890"
    });
    $.__views.userGuide.add($.__views.__alloyId2890);
    $.__views.__alloyId2891 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2891"
    });
    $.__views.__alloyId2890.add($.__views.__alloyId2891);
    $.__views.__alloyId2892 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2892"
    });
    $.__views.__alloyId2890.add($.__views.__alloyId2892);
    back ? $.__views.__alloyId2892.addEventListener("click", back) : __defers["$.__views.__alloyId2892!click!back"] = true;
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50",
        backgroundColor: "#E6E7E9"
    });
    $.__views.userGuide.add($.__views.contentView);
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
    $.__views.__alloyId2893 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2893"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2893);
    showPicker ? $.__views.__alloyId2893.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2893!click!showPicker"] = true;
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
    var __alloyId2894 = [];
    $.__views.__alloyId2895 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2895"
    });
    __alloyId2894.push($.__views.__alloyId2895);
    $.__views.__alloyId2896 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2896"
    });
    __alloyId2894.push($.__views.__alloyId2896);
    $.__views.__alloyId2897 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2897"
    });
    __alloyId2894.push($.__views.__alloyId2897);
    $.__views.__alloyId2898 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2898"
    });
    __alloyId2894.push($.__views.__alloyId2898);
    $.__views.picker.add(__alloyId2894);
    guide ? $.__views.picker.addEventListener("change", guide) : __defers["$.__views.picker!change!guide"] = true;
    $.__views.__alloyId2899 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId2899"
    });
    $.__views.userGuide.add($.__views.__alloyId2899);
    $.__views.label = Ti.UI.createLabel({
        id: "label",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
    $.__views.__alloyId2899.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var guide;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2892!click!back"] && $.__views.__alloyId2892.addEventListener("click", back);
    __defers["$.__views.guideLabel!click!showPicker"] && $.__views.guideLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2893!click!showPicker"] && $.__views.__alloyId2893.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!guide"] && $.__views.picker.addEventListener("change", guide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;