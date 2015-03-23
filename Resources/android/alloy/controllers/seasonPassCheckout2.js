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
    $.__views.__alloyId2306 = Alloy.createController("_header", {
        id: "__alloyId2306",
        __parentSymbol: $.__views.seasonPassCheckout2
    });
    $.__views.__alloyId2306.setParent($.__views.seasonPassCheckout2);
    $.__views.__alloyId2307 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2307"
    });
    $.__views.seasonPassCheckout2.add($.__views.__alloyId2307);
    $.__views.__alloyId2308 = Ti.UI.createLabel({
        text: "Season Pass",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2308"
    });
    $.__views.__alloyId2307.add($.__views.__alloyId2308);
    $.__views.__alloyId2309 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2309"
    });
    $.__views.__alloyId2307.add($.__views.__alloyId2309);
    back ? $.__views.__alloyId2309.addEventListener("click", back) : __defers["$.__views.__alloyId2309!click!back"] = true;
    $.__views.__alloyId2310 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId2310"
    });
    $.__views.seasonPassCheckout2.add($.__views.__alloyId2310);
    $.__views.__alloyId2311 = Ti.UI.createLabel({
        text: "Choose Your Subscription Method:",
        backgroundColor: "transparent",
        height: "30",
        width: "90%",
        color: "gray",
        top: "10",
        bottom: "5",
        left: "20",
        id: "__alloyId2311"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2311);
    $.__views.__alloyId2312 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId2312"
    });
    $.__views.__alloyId2310.add($.__views.__alloyId2312);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId2312.add($.__views.picker);
    var __alloyId2313 = [];
    $.__views.__alloyId2314 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2314"
    });
    __alloyId2313.push($.__views.__alloyId2314);
    $.__views.__alloyId2315 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2315"
    });
    __alloyId2313.push($.__views.__alloyId2315);
    $.__views.__alloyId2316 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2316"
    });
    __alloyId2313.push($.__views.__alloyId2316);
    $.__views.__alloyId2317 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2317"
    });
    __alloyId2313.push($.__views.__alloyId2317);
    $.__views.picker.add(__alloyId2313);
    method ? $.__views.picker.addEventListener("change", method) : __defers["$.__views.picker!change!method"] = true;
    $.__views.__alloyId2318 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2318"
    });
    $.__views.__alloyId2312.add($.__views.__alloyId2318);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.seasonPassCheckout2.add($.__views.scrollView);
    $.__views.__alloyId2319 = Ti.UI.createLabel({
        text: "Step 1: Enter XOX Mobile Number.",
        backgroundColor: "transparent",
        height: "30",
        width: "100%",
        color: "gray",
        top: "10",
        id: "__alloyId2319"
    });
    $.__views.scrollView.add($.__views.__alloyId2319);
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
    $.__views.__alloyId2320 = Ti.UI.createView({
        width: "100%",
        height: "50",
        backgroundColor: "black",
        top: "5",
        id: "__alloyId2320"
    });
    $.__views.scrollView.add($.__views.__alloyId2320);
    tac ? $.__views.__alloyId2320.addEventListener("click", tac) : __defers["$.__views.__alloyId2320!click!tac"] = true;
    $.__views.__alloyId2321 = Ti.UI.createLabel({
        text: "REQUEST TAC",
        color: "white",
        id: "__alloyId2321"
    });
    $.__views.__alloyId2320.add($.__views.__alloyId2321);
    $.__views.__alloyId2322 = Ti.UI.createLabel({
        text: "Step 2: Enter TAC Number.",
        backgroundColor: "transparent",
        height: "30",
        width: "100%",
        color: "gray",
        top: "20",
        id: "__alloyId2322"
    });
    $.__views.scrollView.add($.__views.__alloyId2322);
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
    $.__views.__alloyId2323 = Ti.UI.createView({
        width: "100%",
        height: "50",
        backgroundColor: "black",
        top: "5",
        id: "__alloyId2323"
    });
    $.__views.scrollView.add($.__views.__alloyId2323);
    verify ? $.__views.__alloyId2323.addEventListener("click", verify) : __defers["$.__views.__alloyId2323!click!verify"] = true;
    $.__views.__alloyId2324 = Ti.UI.createLabel({
        text: "Verify TAC",
        color: "white",
        id: "__alloyId2324"
    });
    $.__views.__alloyId2323.add($.__views.__alloyId2324);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
    var method;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2309!click!back"] && $.__views.__alloyId2309.addEventListener("click", back);
    __defers["$.__views.picker!change!method"] && $.__views.picker.addEventListener("change", method);
    __defers["$.__views.__alloyId2320!click!tac"] && $.__views.__alloyId2320.addEventListener("click", tac);
    __defers["$.__views.__alloyId2323!click!verify"] && $.__views.__alloyId2323.addEventListener("click", verify);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;