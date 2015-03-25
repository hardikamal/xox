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
    $.__views.__alloyId2973 = Alloy.createController("_header", {
        id: "__alloyId2973",
        __parentSymbol: $.__views.userGuide
    });
    $.__views.__alloyId2973.setParent($.__views.userGuide);
    $.__views.__alloyId2974 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#AFCD3F",
        id: "__alloyId2974"
    });
    $.__views.userGuide.add($.__views.__alloyId2974);
    $.__views.__alloyId2975 = Ti.UI.createLabel({
        text: "User Guide",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2975"
    });
    $.__views.__alloyId2974.add($.__views.__alloyId2975);
    $.__views.__alloyId2976 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2976"
    });
    $.__views.__alloyId2974.add($.__views.__alloyId2976);
    back ? $.__views.__alloyId2976.addEventListener("click", back) : __defers["$.__views.__alloyId2976!click!back"] = true;
    $.__views.__alloyId2977 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#E6E7E9",
        id: "__alloyId2977"
    });
    $.__views.userGuide.add($.__views.__alloyId2977);
    $.__views.__alloyId2978 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2978"
    });
    $.__views.__alloyId2977.add($.__views.__alloyId2978);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2978.add($.__views.picker);
    var __alloyId2979 = [];
    $.__views.__alloyId2980 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2980"
    });
    __alloyId2979.push($.__views.__alloyId2980);
    $.__views.__alloyId2981 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2981"
    });
    __alloyId2979.push($.__views.__alloyId2981);
    $.__views.__alloyId2982 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2982"
    });
    __alloyId2979.push($.__views.__alloyId2982);
    $.__views.__alloyId2983 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2983"
    });
    __alloyId2979.push($.__views.__alloyId2983);
    $.__views.picker.add(__alloyId2979);
    guide ? $.__views.picker.addEventListener("change", guide) : __defers["$.__views.picker!change!guide"] = true;
    $.__views.__alloyId2984 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2984"
    });
    $.__views.__alloyId2978.add($.__views.__alloyId2984);
    $.__views.__alloyId2985 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId2985"
    });
    $.__views.userGuide.add($.__views.__alloyId2985);
    $.__views.label = Ti.UI.createLabel({
        id: "label",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
    $.__views.__alloyId2985.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var guide;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2976!click!back"] && $.__views.__alloyId2976.addEventListener("click", back);
    __defers["$.__views.picker!change!guide"] && $.__views.picker.addEventListener("change", guide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;