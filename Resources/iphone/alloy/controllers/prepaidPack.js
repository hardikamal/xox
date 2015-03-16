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
    function showPicker() {
        console.log("showPicker");
        if ("false" == $.pickerView.visible) {
            $.contentView.height = 250;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            $.contentView.height = 250;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
        $.simLabel.text = simType;
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
    $.__views.__alloyId430 = Alloy.createController("_header", {
        id: "__alloyId430",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId430.setParent($.__views.prepaidPack);
    $.__views.__alloyId431 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId431"
    });
    $.__views.prepaidPack.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId432"
    });
    $.__views.__alloyId431.add($.__views.__alloyId432);
    $.__views.__alloyId433 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId433"
    });
    $.__views.__alloyId431.add($.__views.__alloyId433);
    back ? $.__views.__alloyId433.addEventListener("click", back) : __defers["$.__views.__alloyId433!click!back"] = true;
    $.__views.__alloyId434 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId434"
    });
    $.__views.prepaidPack.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId435"
    });
    $.__views.__alloyId434.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createLabel({
        text: "ORDERING",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId436"
    });
    $.__views.__alloyId434.add($.__views.__alloyId436);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId437 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId437"
    });
    $.__views.contentView.add($.__views.__alloyId437);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.simLabel = Ti.UI.createLabel({
        id: "simLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.simLabel);
    showPicker ? $.__views.simLabel.addEventListener("click", showPicker) : __defers["$.__views.simLabel!click!showPicker"] = true;
    $.__views.__alloyId438 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId438"
    });
    $.__views.pickerContentView.add($.__views.__alloyId438);
    showPicker ? $.__views.__alloyId438.addEventListener("click", showPicker) : __defers["$.__views.__alloyId438!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50"
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
    var __alloyId439 = [];
    $.__views.__alloyId440 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId440"
    });
    __alloyId439.push($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId441"
    });
    __alloyId439.push($.__views.__alloyId441);
    $.__views.__alloyId442 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId442"
    });
    __alloyId439.push($.__views.__alloyId442);
    $.__views.picker.add(__alloyId439);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId443 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId443"
    });
    $.__views.scrollView.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createLabel({
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
        id: "__alloyId444"
    });
    $.__views.__alloyId443.add($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId445"
    });
    $.__views.__alloyId443.add($.__views.__alloyId445);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId445.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId446 = Ti.UI.createLabel({
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
        id: "__alloyId446"
    });
    $.__views.__alloyId445.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId447"
    });
    $.__views.scrollView.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId448"
    });
    $.__views.__alloyId447.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId449"
    });
    $.__views.__alloyId447.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId450"
    });
    $.__views.__alloyId449.add($.__views.__alloyId450);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId450.add($.__views.switch2);
    $.__views.__alloyId451 = Ti.UI.createLabel({
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId451"
    });
    $.__views.__alloyId450.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId452"
    });
    $.__views.__alloyId449.add($.__views.__alloyId452);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId452.add($.__views.switch3);
    $.__views.__alloyId453 = Ti.UI.createLabel({
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId453"
    });
    $.__views.__alloyId452.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId454"
    });
    $.__views.__alloyId447.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId455"
    });
    $.__views.__alloyId454.add($.__views.__alloyId455);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId455.add($.__views.switch4);
    $.__views.__alloyId456 = Ti.UI.createLabel({
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId456"
    });
    $.__views.__alloyId455.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId457"
    });
    $.__views.__alloyId454.add($.__views.__alloyId457);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId457.add($.__views.switch5);
    $.__views.__alloyId458 = Ti.UI.createLabel({
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId458"
    });
    $.__views.__alloyId457.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId459"
    });
    $.__views.scrollView.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId460"
    });
    $.__views.__alloyId459.add($.__views.__alloyId460);
    $.__views.__alloyId461 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId461"
    });
    $.__views.__alloyId459.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId462"
    });
    $.__views.scrollView.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId463.add($.__views.switch6);
    $.__views.__alloyId464 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId464"
    });
    $.__views.__alloyId463.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId465"
    });
    $.__views.__alloyId462.add($.__views.__alloyId465);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId465.add($.__views.switch7);
    $.__views.__alloyId466 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId467"
    });
    $.__views.__alloyId462.add($.__views.__alloyId467);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId467.add($.__views.switch8);
    $.__views.__alloyId468 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId468"
    });
    $.__views.__alloyId467.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId469"
    });
    $.__views.__alloyId462.add($.__views.__alloyId469);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId469.add($.__views.switch9);
    $.__views.__alloyId470 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId470"
    });
    $.__views.__alloyId469.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId471"
    });
    $.__views.__alloyId462.add($.__views.__alloyId471);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId471.add($.__views.switch10);
    $.__views.__alloyId472 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId472"
    });
    $.__views.__alloyId471.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId473"
    });
    $.__views.__alloyId462.add($.__views.__alloyId473);
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
    $.__views.__alloyId473.add($.__views.switch11);
    $.__views.__alloyId474 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId475"
    });
    $.__views.__alloyId462.add($.__views.__alloyId475);
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
    $.__views.__alloyId475.add($.__views.switch12);
    $.__views.__alloyId476 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId476"
    });
    $.__views.__alloyId475.add($.__views.__alloyId476);
    $.__views.__alloyId477 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId477"
    });
    $.__views.__alloyId462.add($.__views.__alloyId477);
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
    $.__views.__alloyId477.add($.__views.switch13);
    $.__views.__alloyId478 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId478"
    });
    $.__views.__alloyId477.add($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId479"
    });
    $.__views.prepaidPack.add($.__views.__alloyId479);
    next ? $.__views.__alloyId479.addEventListener("click", next) : __defers["$.__views.__alloyId479!click!next"] = true;
    $.__views.__alloyId480 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId480"
    });
    $.__views.__alloyId479.add($.__views.__alloyId480);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    var simType;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId433!click!back"] && $.__views.__alloyId433.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId438!click!showPicker"] && $.__views.__alloyId438.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId479!click!next"] && $.__views.__alloyId479.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;