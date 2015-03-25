function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function method(e) {
        console.log("method");
        method = e.row.title;
    }
    function back() {
        DRAWER.navigation("seasonPassCheckout1", 1);
    }
    function tac() {
        console.log("tac");
        "" == $.mobileNo.value ? alert("Please enter mobile number") : console.log("$.mobileNo.value: " + $.mobileNo.value);
    }
    function verify() {
        console.log("verify");
        "" == $.tac.value ? alert("Please enter TAC") : console.log("$.tac.value: " + $.tac.value);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "seasonPassCheckout2";
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
    $.__views.seasonPassCheckout2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "seasonPassCheckout2"
    });
    $.__views.seasonPassCheckout2 && $.addTopLevelView($.__views.seasonPassCheckout2);
    $.__views.__alloyId2620 = Alloy.createController("_header", {
        id: "__alloyId2620",
        __parentSymbol: $.__views.seasonPassCheckout2
    });
    $.__views.__alloyId2620.setParent($.__views.seasonPassCheckout2);
    $.__views.__alloyId2621 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2621"
    });
    $.__views.seasonPassCheckout2.add($.__views.__alloyId2621);
    $.__views.__alloyId2622 = Ti.UI.createLabel({
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2622"
    });
    $.__views.__alloyId2621.add($.__views.__alloyId2622);
    $.__views.__alloyId2623 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2623"
    });
    $.__views.__alloyId2621.add($.__views.__alloyId2623);
    back ? $.__views.__alloyId2623.addEventListener("click", back) : __defers["$.__views.__alloyId2623!click!back"] = true;
    $.__views.__alloyId2624 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId2624"
    });
    $.__views.seasonPassCheckout2.add($.__views.__alloyId2624);
    $.__views.__alloyId2625 = Ti.UI.createLabel({
        text: "Choose Your Subscription Method:",
        backgroundColor: "transparent",
        height: "30",
        width: "90%",
        color: "gray",
        top: "10",
        bottom: "5",
        left: "20",
        id: "__alloyId2625"
    });
    $.__views.__alloyId2624.add($.__views.__alloyId2625);
    $.__views.__alloyId2626 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2626"
    });
    $.__views.__alloyId2624.add($.__views.__alloyId2626);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2626.add($.__views.picker);
    var __alloyId2627 = [];
    $.__views.__alloyId2628 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2628"
    });
    __alloyId2627.push($.__views.__alloyId2628);
    $.__views.__alloyId2629 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2629"
    });
    __alloyId2627.push($.__views.__alloyId2629);
    $.__views.__alloyId2630 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2630"
    });
    __alloyId2627.push($.__views.__alloyId2630);
    $.__views.__alloyId2631 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2631"
    });
    __alloyId2627.push($.__views.__alloyId2631);
    $.__views.picker.add(__alloyId2627);
    method ? $.__views.picker.addEventListener("change", method) : __defers["$.__views.picker!change!method"] = true;
    $.__views.__alloyId2632 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2632"
    });
    $.__views.__alloyId2626.add($.__views.__alloyId2632);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.seasonPassCheckout2.add($.__views.scrollView);
    $.__views.__alloyId2633 = Ti.UI.createLabel({
        text: "Step 1: Enter XOX Mobile Number.",
        backgroundColor: "transparent",
        height: "30",
        width: "100%",
        color: "gray",
        top: "10",
        id: "__alloyId2633"
    });
    $.__views.scrollView.add($.__views.__alloyId2633);
    $.__views.mobileNo = Ti.UI.createTextField({
        id: "mobileNo",
        width: "100%",
        height: "50",
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        top: "5"
    });
    $.__views.scrollView.add($.__views.mobileNo);
    $.__views.__alloyId2634 = Ti.UI.createView({
        width: "100%",
        height: "50",
        backgroundColor: "black",
        top: "5",
        id: "__alloyId2634"
    });
    $.__views.scrollView.add($.__views.__alloyId2634);
    tac ? $.__views.__alloyId2634.addEventListener("click", tac) : __defers["$.__views.__alloyId2634!click!tac"] = true;
    $.__views.__alloyId2635 = Ti.UI.createLabel({
        text: "REQUEST TAC",
        color: "white",
        id: "__alloyId2635"
    });
    $.__views.__alloyId2634.add($.__views.__alloyId2635);
    $.__views.__alloyId2636 = Ti.UI.createLabel({
        text: "Step 2: Enter TAC Number.",
        backgroundColor: "transparent",
        height: "30",
        width: "100%",
        color: "gray",
        top: "20",
        id: "__alloyId2636"
    });
    $.__views.scrollView.add($.__views.__alloyId2636);
    $.__views.tac = Ti.UI.createTextField({
        id: "tac",
        width: "100%",
        height: "50",
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        top: "5"
    });
    $.__views.scrollView.add($.__views.tac);
    $.__views.__alloyId2637 = Ti.UI.createView({
        width: "100%",
        height: "50",
        backgroundColor: "black",
        top: "5",
        id: "__alloyId2637"
    });
    $.__views.scrollView.add($.__views.__alloyId2637);
    verify ? $.__views.__alloyId2637.addEventListener("click", verify) : __defers["$.__views.__alloyId2637!click!verify"] = true;
    $.__views.__alloyId2638 = Ti.UI.createLabel({
        text: "Verify TAC",
        color: "white",
        id: "__alloyId2638"
    });
    $.__views.__alloyId2637.add($.__views.__alloyId2638);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
    var method;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2623!click!back"] && $.__views.__alloyId2623.addEventListener("click", back);
    __defers["$.__views.picker!change!method"] && $.__views.picker.addEventListener("change", method);
    __defers["$.__views.__alloyId2634!click!tac"] && $.__views.__alloyId2634.addEventListener("click", tac);
    __defers["$.__views.__alloyId2637!click!verify"] && $.__views.__alloyId2637.addEventListener("click", verify);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;