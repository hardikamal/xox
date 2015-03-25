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
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.methodLabel.text = method);
    }
    function back() {
        DRAWER.navigation("seasonPassCheckout1", 1);
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
    $.__views.__alloyId2480 = Alloy.createController("_header", {
        id: "__alloyId2480",
        __parentSymbol: $.__views.seasonPassCheckout2
    });
    $.__views.__alloyId2480.setParent($.__views.seasonPassCheckout2);
    $.__views.__alloyId2481 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2481"
    });
    $.__views.seasonPassCheckout2.add($.__views.__alloyId2481);
    $.__views.__alloyId2482 = Ti.UI.createLabel({
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2482"
    });
    $.__views.__alloyId2481.add($.__views.__alloyId2482);
    $.__views.__alloyId2483 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2483"
    });
    $.__views.__alloyId2481.add($.__views.__alloyId2483);
    back ? $.__views.__alloyId2483.addEventListener("click", back) : __defers["$.__views.__alloyId2483!click!back"] = true;
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "100"
    });
    $.__views.seasonPassCheckout2.add($.__views.contentView);
    $.__views.__alloyId2484 = Ti.UI.createLabel({
        text: "Choose Your Subscription Method:",
        backgroundColor: "transparent",
        height: "30",
        width: "90%",
        color: "gray",
        top: "10",
        bottom: "5",
        left: "20",
        id: "__alloyId2484"
    });
    $.__views.contentView.add($.__views.__alloyId2484);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.methodLabel = Ti.UI.createLabel({
        id: "methodLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.methodLabel);
    showPicker ? $.__views.methodLabel.addEventListener("click", showPicker) : __defers["$.__views.methodLabel!click!showPicker"] = true;
    $.__views.__alloyId2485 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2485"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2485);
    showPicker ? $.__views.__alloyId2485.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2485!click!showPicker"] = true;
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
    var __alloyId2486 = [];
    $.__views.__alloyId2487 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2487"
    });
    __alloyId2486.push($.__views.__alloyId2487);
    $.__views.__alloyId2488 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2488"
    });
    __alloyId2486.push($.__views.__alloyId2488);
    $.__views.__alloyId2489 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2489"
    });
    __alloyId2486.push($.__views.__alloyId2489);
    $.__views.__alloyId2490 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2490"
    });
    __alloyId2486.push($.__views.__alloyId2490);
    $.__views.picker.add(__alloyId2486);
    method ? $.__views.picker.addEventListener("change", method) : __defers["$.__views.picker!change!method"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.seasonPassCheckout2.add($.__views.scrollView);
    $.__views.__alloyId2491 = Ti.UI.createLabel({
        text: "Step 1: Enter XOX Mobile Number.",
        backgroundColor: "transparent",
        height: "30",
        width: "100%",
        color: "gray",
        top: "10",
        id: "__alloyId2491"
    });
    $.__views.scrollView.add($.__views.__alloyId2491);
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
    $.__views.__alloyId2492 = Ti.UI.createView({
        width: "100%",
        height: "50",
        backgroundColor: "black",
        top: "5",
        id: "__alloyId2492"
    });
    $.__views.scrollView.add($.__views.__alloyId2492);
    tac ? $.__views.__alloyId2492.addEventListener("click", tac) : __defers["$.__views.__alloyId2492!click!tac"] = true;
    $.__views.__alloyId2493 = Ti.UI.createLabel({
        text: "REQUEST TAC",
        color: "white",
        id: "__alloyId2493"
    });
    $.__views.__alloyId2492.add($.__views.__alloyId2493);
    $.__views.__alloyId2494 = Ti.UI.createLabel({
        text: "Step 2: Enter TAC Number.",
        backgroundColor: "transparent",
        height: "30",
        width: "100%",
        color: "gray",
        top: "20",
        id: "__alloyId2494"
    });
    $.__views.scrollView.add($.__views.__alloyId2494);
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
    $.__views.__alloyId2495 = Ti.UI.createView({
        width: "100%",
        height: "50",
        backgroundColor: "black",
        top: "5",
        id: "__alloyId2495"
    });
    $.__views.scrollView.add($.__views.__alloyId2495);
    verify ? $.__views.__alloyId2495.addEventListener("click", verify) : __defers["$.__views.__alloyId2495!click!verify"] = true;
    $.__views.__alloyId2496 = Ti.UI.createLabel({
        text: "Verify TAC",
        color: "white",
        id: "__alloyId2496"
    });
    $.__views.__alloyId2495.add($.__views.__alloyId2496);
    exports.destroy = function() {};
    _.extend($, $.__views);
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    var method;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2483!click!back"] && $.__views.__alloyId2483.addEventListener("click", back);
    __defers["$.__views.methodLabel!click!showPicker"] && $.__views.methodLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2485!click!showPicker"] && $.__views.__alloyId2485.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!method"] && $.__views.picker.addEventListener("change", method);
    __defers["$.__views.__alloyId2492!click!tac"] && $.__views.__alloyId2492.addEventListener("click", tac);
    __defers["$.__views.__alloyId2495!click!verify"] && $.__views.__alloyId2495.addEventListener("click", verify);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;