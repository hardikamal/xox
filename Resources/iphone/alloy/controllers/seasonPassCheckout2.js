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
<<<<<<< HEAD
    $.__views.__alloyId2231 = Alloy.createController("_header", {
        id: "__alloyId2231",
        __parentSymbol: $.__views.seasonPassCheckout2
    });
    $.__views.__alloyId2231.setParent($.__views.seasonPassCheckout2);
    $.__views.__alloyId2232 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2232"
    });
    $.__views.seasonPassCheckout2.add($.__views.__alloyId2232);
    $.__views.__alloyId2233 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2475 = Alloy.createController("_header", {
        id: "__alloyId2475",
        __parentSymbol: $.__views.seasonPassCheckout2
    });
    $.__views.__alloyId2475.setParent($.__views.seasonPassCheckout2);
    $.__views.__alloyId2476 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2476"
    });
    $.__views.seasonPassCheckout2.add($.__views.__alloyId2476);
    $.__views.__alloyId2477 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2231 = Alloy.createController("_header", {
        id: "__alloyId2231",
        __parentSymbol: $.__views.seasonPassCheckout2
    });
    $.__views.__alloyId2231.setParent($.__views.seasonPassCheckout2);
    $.__views.__alloyId2232 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2232"
    });
    $.__views.seasonPassCheckout2.add($.__views.__alloyId2232);
    $.__views.__alloyId2233 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2233"
    });
    $.__views.__alloyId2232.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId2477"
    });
    $.__views.__alloyId2476.add($.__views.__alloyId2477);
    $.__views.__alloyId2478 = Ti.UI.createImageView({
=======
        id: "__alloyId2233"
    });
    $.__views.__alloyId2232.add($.__views.__alloyId2233);
    $.__views.__alloyId2234 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId2478"
    });
    $.__views.__alloyId2476.add($.__views.__alloyId2478);
    back ? $.__views.__alloyId2478.addEventListener("click", back) : __defers["$.__views.__alloyId2478!click!back"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2234"
    });
    $.__views.__alloyId2232.add($.__views.__alloyId2234);
    back ? $.__views.__alloyId2234.addEventListener("click", back) : __defers["$.__views.__alloyId2234!click!back"] = true;
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "100"
    });
    $.__views.seasonPassCheckout2.add($.__views.contentView);
<<<<<<< HEAD
    $.__views.__alloyId2235 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2479 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2235 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Choose Your Subscription Method:",
        backgroundColor: "transparent",
        height: "30",
        width: "90%",
        color: "gray",
        top: "10",
        bottom: "5",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId2235"
    });
    $.__views.contentView.add($.__views.__alloyId2235);
=======
<<<<<<< HEAD
        id: "__alloyId2479"
    });
    $.__views.contentView.add($.__views.__alloyId2479);
=======
        id: "__alloyId2235"
    });
    $.__views.contentView.add($.__views.__alloyId2235);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2236 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2480 = Ti.UI.createImageView({
=======
    $.__views.__alloyId2236 = Ti.UI.createImageView({
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
        id: "__alloyId2480"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2480);
    showPicker ? $.__views.__alloyId2480.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2480!click!showPicker"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId2236"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2236);
    showPicker ? $.__views.__alloyId2236.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2236!click!showPicker"] = true;
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
    var __alloyId2237 = [];
    $.__views.__alloyId2238 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2238"
    });
    __alloyId2237.push($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2239"
    });
    __alloyId2237.push($.__views.__alloyId2239);
    $.__views.__alloyId2240 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2240"
    });
    __alloyId2237.push($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2241"
    });
    __alloyId2237.push($.__views.__alloyId2241);
    $.__views.picker.add(__alloyId2237);
=======
<<<<<<< HEAD
    var __alloyId2481 = [];
    $.__views.__alloyId2482 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2482"
    });
    __alloyId2481.push($.__views.__alloyId2482);
    $.__views.__alloyId2483 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2483"
    });
    __alloyId2481.push($.__views.__alloyId2483);
    $.__views.__alloyId2484 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2484"
    });
    __alloyId2481.push($.__views.__alloyId2484);
    $.__views.__alloyId2485 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2485"
    });
    __alloyId2481.push($.__views.__alloyId2485);
    $.__views.picker.add(__alloyId2481);
=======
    var __alloyId2237 = [];
    $.__views.__alloyId2238 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2238"
    });
    __alloyId2237.push($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2239"
    });
    __alloyId2237.push($.__views.__alloyId2239);
    $.__views.__alloyId2240 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2240"
    });
    __alloyId2237.push($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2241"
    });
    __alloyId2237.push($.__views.__alloyId2241);
    $.__views.picker.add(__alloyId2237);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    method ? $.__views.picker.addEventListener("change", method) : __defers["$.__views.picker!change!method"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.seasonPassCheckout2.add($.__views.scrollView);
<<<<<<< HEAD
    $.__views.__alloyId2242 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId2486 = Ti.UI.createLabel({
=======
    $.__views.__alloyId2242 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Step 1: Enter XOX Mobile Number.",
        backgroundColor: "transparent",
        height: "30",
        width: "100%",
        color: "gray",
        top: "10",
<<<<<<< HEAD
        id: "__alloyId2242"
    });
    $.__views.scrollView.add($.__views.__alloyId2242);
=======
<<<<<<< HEAD
        id: "__alloyId2486"
    });
    $.__views.scrollView.add($.__views.__alloyId2486);
=======
        id: "__alloyId2242"
    });
    $.__views.scrollView.add($.__views.__alloyId2242);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2243 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2487 = Ti.UI.createView({
=======
    $.__views.__alloyId2243 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        width: "100%",
        height: "50",
        backgroundColor: "black",
        top: "5",
<<<<<<< HEAD
        id: "__alloyId2243"
    });
=======
<<<<<<< HEAD
        id: "__alloyId2487"
    });
    $.__views.scrollView.add($.__views.__alloyId2487);
    tac ? $.__views.__alloyId2487.addEventListener("click", tac) : __defers["$.__views.__alloyId2487!click!tac"] = true;
    $.__views.__alloyId2488 = Ti.UI.createLabel({
        text: "REQUEST TAC",
        color: "white",
        id: "__alloyId2488"
    });
    $.__views.__alloyId2487.add($.__views.__alloyId2488);
    $.__views.__alloyId2489 = Ti.UI.createLabel({
=======
        id: "__alloyId2243"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView.add($.__views.__alloyId2243);
    tac ? $.__views.__alloyId2243.addEventListener("click", tac) : __defers["$.__views.__alloyId2243!click!tac"] = true;
    $.__views.__alloyId2244 = Ti.UI.createLabel({
        text: "REQUEST TAC",
        color: "white",
        id: "__alloyId2244"
    });
    $.__views.__alloyId2243.add($.__views.__alloyId2244);
    $.__views.__alloyId2245 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Step 2: Enter TAC Number.",
        backgroundColor: "transparent",
        height: "30",
        width: "100%",
        color: "gray",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId2245"
    });
    $.__views.scrollView.add($.__views.__alloyId2245);
=======
<<<<<<< HEAD
        id: "__alloyId2489"
    });
    $.__views.scrollView.add($.__views.__alloyId2489);
=======
        id: "__alloyId2245"
    });
    $.__views.scrollView.add($.__views.__alloyId2245);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
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
<<<<<<< HEAD
    $.__views.__alloyId2246 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId2490 = Ti.UI.createView({
=======
    $.__views.__alloyId2246 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        width: "100%",
        height: "50",
        backgroundColor: "black",
        top: "5",
<<<<<<< HEAD
        id: "__alloyId2246"
    });
    $.__views.scrollView.add($.__views.__alloyId2246);
    verify ? $.__views.__alloyId2246.addEventListener("click", verify) : __defers["$.__views.__alloyId2246!click!verify"] = true;
    $.__views.__alloyId2247 = Ti.UI.createLabel({
        text: "Verify TAC",
        color: "white",
        id: "__alloyId2247"
    });
    $.__views.__alloyId2246.add($.__views.__alloyId2247);
=======
<<<<<<< HEAD
        id: "__alloyId2490"
    });
    $.__views.scrollView.add($.__views.__alloyId2490);
    verify ? $.__views.__alloyId2490.addEventListener("click", verify) : __defers["$.__views.__alloyId2490!click!verify"] = true;
    $.__views.__alloyId2491 = Ti.UI.createLabel({
        text: "Verify TAC",
        color: "white",
        id: "__alloyId2491"
    });
    $.__views.__alloyId2490.add($.__views.__alloyId2491);
=======
        id: "__alloyId2246"
    });
    $.__views.scrollView.add($.__views.__alloyId2246);
    verify ? $.__views.__alloyId2246.addEventListener("click", verify) : __defers["$.__views.__alloyId2246!click!verify"] = true;
    $.__views.__alloyId2247 = Ti.UI.createLabel({
        text: "Verify TAC",
        color: "white",
        id: "__alloyId2247"
    });
    $.__views.__alloyId2246.add($.__views.__alloyId2247);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    "android" == Ti.Platform.osname && ($.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER);
    var method;
    $.picker.setSelectedRow(0, 0, false);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId2478!click!back"] && $.__views.__alloyId2478.addEventListener("click", back);
    __defers["$.__views.methodLabel!click!showPicker"] && $.__views.methodLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2480!click!showPicker"] && $.__views.__alloyId2480.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!method"] && $.__views.picker.addEventListener("change", method);
    __defers["$.__views.__alloyId2487!click!tac"] && $.__views.__alloyId2487.addEventListener("click", tac);
    __defers["$.__views.__alloyId2490!click!verify"] && $.__views.__alloyId2490.addEventListener("click", verify);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    __defers["$.__views.__alloyId2234!click!back"] && $.__views.__alloyId2234.addEventListener("click", back);
    __defers["$.__views.methodLabel!click!showPicker"] && $.__views.methodLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2236!click!showPicker"] && $.__views.__alloyId2236.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!method"] && $.__views.picker.addEventListener("change", method);
    __defers["$.__views.__alloyId2243!click!tac"] && $.__views.__alloyId2243.addEventListener("click", tac);
    __defers["$.__views.__alloyId2246!click!verify"] && $.__views.__alloyId2246.addEventListener("click", verify);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;