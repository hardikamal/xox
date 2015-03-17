function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function back() {
        DRAWER.navigation("onlinePurchases", 2);
    }
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
    }
    function highSpeed(e) {
        console.log("e.value: " + e.value);
    }
    function next() {
        console.log("next");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack";
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
    $.__views.prepaidPack = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack"
    });
    $.__views.prepaidPack && $.addTopLevelView($.__views.prepaidPack);
    $.__views.__alloyId431 = Alloy.createController("_header", {
        id: "__alloyId431",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId431.setParent($.__views.prepaidPack);
    $.__views.__alloyId432 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId432"
    });
    $.__views.prepaidPack.add($.__views.__alloyId432);
    $.__views.__alloyId433 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId433"
    });
    $.__views.__alloyId432.add($.__views.__alloyId433);
    $.__views.__alloyId434 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId434"
    });
    $.__views.__alloyId432.add($.__views.__alloyId434);
    back ? $.__views.__alloyId434.addEventListener("click", back) : __defers["$.__views.__alloyId434!click!back"] = true;
    $.__views.__alloyId435 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId435"
    });
    $.__views.prepaidPack.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId436"
    });
    $.__views.__alloyId435.add($.__views.__alloyId436);
    $.__views.__alloyId437 = Ti.UI.createLabel({
        text: "ORDERING",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId437"
    });
    $.__views.__alloyId435.add($.__views.__alloyId437);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.__alloyId438 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId438"
    });
    $.__views.scrollView.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId439"
    });
    $.__views.__alloyId438.add($.__views.__alloyId439);
    $.__views.__alloyId440 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId440"
    });
    $.__views.__alloyId438.add($.__views.__alloyId440);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId440.add($.__views.picker);
    var __alloyId441 = [];
    $.__views.__alloyId442 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId442"
    });
    __alloyId441.push($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId443"
    });
    __alloyId441.push($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId444"
    });
    __alloyId441.push($.__views.__alloyId444);
    $.__views.picker.add(__alloyId441);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId445 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId445"
    });
    $.__views.__alloyId440.add($.__views.__alloyId445);
    $.__views.__alloyId446 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId446"
    });
    $.__views.scrollView.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createLabel({
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
        id: "__alloyId447"
    });
    $.__views.__alloyId446.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId448"
    });
    $.__views.__alloyId446.add($.__views.__alloyId448);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId448.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId449 = Ti.UI.createLabel({
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
        id: "__alloyId449"
    });
    $.__views.__alloyId448.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId450"
    });
    $.__views.scrollView.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId451"
    });
    $.__views.__alloyId450.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId452"
    });
    $.__views.__alloyId450.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId453"
    });
    $.__views.__alloyId452.add($.__views.__alloyId453);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId453.add($.__views.switch2);
    $.__views.__alloyId454 = Ti.UI.createLabel({
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId454"
    });
    $.__views.__alloyId453.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId455"
    });
    $.__views.__alloyId452.add($.__views.__alloyId455);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId455.add($.__views.switch3);
    $.__views.__alloyId456 = Ti.UI.createLabel({
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId456"
    });
    $.__views.__alloyId455.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId457"
    });
    $.__views.__alloyId450.add($.__views.__alloyId457);
    $.__views.__alloyId458 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId458"
    });
    $.__views.__alloyId457.add($.__views.__alloyId458);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId458.add($.__views.switch4);
    $.__views.__alloyId459 = Ti.UI.createLabel({
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId459"
    });
    $.__views.__alloyId458.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId460"
    });
    $.__views.__alloyId457.add($.__views.__alloyId460);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId460.add($.__views.switch5);
    $.__views.__alloyId461 = Ti.UI.createLabel({
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId461"
    });
    $.__views.__alloyId460.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId462"
    });
    $.__views.scrollView.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
    $.__views.__alloyId464 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId464"
    });
    $.__views.__alloyId462.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId465"
    });
    $.__views.scrollView.add($.__views.__alloyId465);
    $.__views.__alloyId466 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId466.add($.__views.switch6);
    $.__views.__alloyId467 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId467"
    });
    $.__views.__alloyId466.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId468"
    });
    $.__views.__alloyId465.add($.__views.__alloyId468);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId468.add($.__views.switch7);
    $.__views.__alloyId469 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId469"
    });
    $.__views.__alloyId468.add($.__views.__alloyId469);
    $.__views.__alloyId470 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId470"
    });
    $.__views.__alloyId465.add($.__views.__alloyId470);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId470.add($.__views.switch8);
    $.__views.__alloyId471 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId471"
    });
    $.__views.__alloyId470.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId472"
    });
    $.__views.__alloyId465.add($.__views.__alloyId472);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId472.add($.__views.switch9);
    $.__views.__alloyId473 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId473"
    });
    $.__views.__alloyId472.add($.__views.__alloyId473);
    $.__views.__alloyId474 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId474"
    });
    $.__views.__alloyId465.add($.__views.__alloyId474);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId474.add($.__views.switch10);
    $.__views.__alloyId475 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId475"
    });
    $.__views.__alloyId474.add($.__views.__alloyId475);
    $.__views.__alloyId476 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId476"
    });
    $.__views.__alloyId465.add($.__views.__alloyId476);
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
    $.__views.__alloyId476.add($.__views.switch11);
    $.__views.__alloyId477 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId477"
    });
    $.__views.__alloyId476.add($.__views.__alloyId477);
    $.__views.__alloyId478 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId478"
    });
    $.__views.__alloyId465.add($.__views.__alloyId478);
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
    $.__views.__alloyId478.add($.__views.switch12);
    $.__views.__alloyId479 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId479"
    });
    $.__views.__alloyId478.add($.__views.__alloyId479);
    $.__views.__alloyId480 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId480"
    });
    $.__views.__alloyId465.add($.__views.__alloyId480);
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
    $.__views.__alloyId480.add($.__views.switch13);
    $.__views.__alloyId481 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId481"
    });
    $.__views.__alloyId480.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId482"
    });
    $.__views.prepaidPack.add($.__views.__alloyId482);
    next ? $.__views.__alloyId482.addEventListener("click", next) : __defers["$.__views.__alloyId482!click!next"] = true;
    $.__views.__alloyId483 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId483"
    });
    $.__views.__alloyId482.add($.__views.__alloyId483);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch3.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch4.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch5.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch6.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch7.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch8.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch9.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch10.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch11.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch12.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    $.switch13.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    var simType;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId434!click!back"] && $.__views.__alloyId434.addEventListener("click", back);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId482!click!next"] && $.__views.__alloyId482.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;