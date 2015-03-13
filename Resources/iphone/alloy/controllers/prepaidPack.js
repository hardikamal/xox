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
        if (false == $.pickerView.visible) {
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
    $.__views.__alloyId380 = Alloy.createController("_header", {
        id: "__alloyId380",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId380.setParent($.__views.prepaidPack);
    $.__views.__alloyId381 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId381"
    });
    $.__views.prepaidPack.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId382"
    });
    $.__views.__alloyId381.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId383"
    });
    $.__views.__alloyId381.add($.__views.__alloyId383);
    back ? $.__views.__alloyId383.addEventListener("click", back) : __defers["$.__views.__alloyId383!click!back"] = true;
    $.__views.__alloyId384 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId384"
    });
    $.__views.prepaidPack.add($.__views.__alloyId384);
    $.__views.__alloyId385 = Ti.UI.createLabel({
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId385"
    });
    $.__views.__alloyId384.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createLabel({
        text: "ORDERING",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId386"
    });
    $.__views.__alloyId384.add($.__views.__alloyId386);
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
    $.__views.__alloyId387 = Ti.UI.createLabel({
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
        id: "__alloyId387"
    });
    $.__views.contentView.add($.__views.__alloyId387);
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
    $.__views.__alloyId388 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId388"
    });
    $.__views.pickerContentView.add($.__views.__alloyId388);
    showPicker ? $.__views.__alloyId388.addEventListener("click", showPicker) : __defers["$.__views.__alloyId388!click!showPicker"] = true;
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
    var __alloyId389 = [];
    $.__views.__alloyId390 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId390"
    });
    __alloyId389.push($.__views.__alloyId390);
    $.__views.__alloyId391 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId391"
    });
    __alloyId389.push($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId392"
    });
    __alloyId389.push($.__views.__alloyId392);
    $.__views.picker.add(__alloyId389);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId393 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId393"
    });
    $.__views.scrollView.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createLabel({
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
        id: "__alloyId394"
    });
    $.__views.__alloyId393.add($.__views.__alloyId394);
    $.__views.__alloyId395 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId395"
    });
    $.__views.__alloyId393.add($.__views.__alloyId395);
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
    $.__views.__alloyId395.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId396 = Ti.UI.createLabel({
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
        id: "__alloyId396"
    });
    $.__views.__alloyId395.add($.__views.__alloyId396);
    $.__views.__alloyId397 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId397"
    });
    $.__views.scrollView.add($.__views.__alloyId397);
    $.__views.__alloyId398 = Ti.UI.createLabel({
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId398"
    });
    $.__views.__alloyId397.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId399"
    });
    $.__views.__alloyId397.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId400"
    });
    $.__views.__alloyId399.add($.__views.__alloyId400);
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
    $.__views.__alloyId400.add($.__views.switch2);
    $.__views.__alloyId401 = Ti.UI.createLabel({
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId401"
    });
    $.__views.__alloyId400.add($.__views.__alloyId401);
    $.__views.__alloyId402 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId402"
    });
    $.__views.__alloyId399.add($.__views.__alloyId402);
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
    $.__views.__alloyId402.add($.__views.switch3);
    $.__views.__alloyId403 = Ti.UI.createLabel({
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId403"
    });
    $.__views.__alloyId402.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId404"
    });
    $.__views.__alloyId397.add($.__views.__alloyId404);
    $.__views.__alloyId405 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId405"
    });
    $.__views.__alloyId404.add($.__views.__alloyId405);
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
    $.__views.__alloyId405.add($.__views.switch4);
    $.__views.__alloyId406 = Ti.UI.createLabel({
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId406"
    });
    $.__views.__alloyId405.add($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId407"
    });
    $.__views.__alloyId404.add($.__views.__alloyId407);
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
    $.__views.__alloyId407.add($.__views.switch5);
    $.__views.__alloyId408 = Ti.UI.createLabel({
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId408"
    });
    $.__views.__alloyId407.add($.__views.__alloyId408);
    $.__views.__alloyId409 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId409"
    });
    $.__views.scrollView.add($.__views.__alloyId409);
    $.__views.__alloyId410 = Ti.UI.createLabel({
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId410"
    });
    $.__views.__alloyId409.add($.__views.__alloyId410);
    $.__views.__alloyId411 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId411"
    });
    $.__views.__alloyId409.add($.__views.__alloyId411);
    $.__views.__alloyId412 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId412"
    });
    $.__views.scrollView.add($.__views.__alloyId412);
    $.__views.__alloyId413 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId413"
    });
    $.__views.__alloyId412.add($.__views.__alloyId413);
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
    $.__views.__alloyId413.add($.__views.switch6);
    $.__views.__alloyId414 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId414"
    });
    $.__views.__alloyId413.add($.__views.__alloyId414);
    $.__views.__alloyId415 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId415"
    });
    $.__views.__alloyId412.add($.__views.__alloyId415);
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
    $.__views.__alloyId415.add($.__views.switch7);
    $.__views.__alloyId416 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId416"
    });
    $.__views.__alloyId415.add($.__views.__alloyId416);
    $.__views.__alloyId417 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId417"
    });
    $.__views.__alloyId412.add($.__views.__alloyId417);
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
    $.__views.__alloyId417.add($.__views.switch8);
    $.__views.__alloyId418 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId418"
    });
    $.__views.__alloyId417.add($.__views.__alloyId418);
    $.__views.__alloyId419 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId419"
    });
    $.__views.__alloyId412.add($.__views.__alloyId419);
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
    $.__views.__alloyId419.add($.__views.switch9);
    $.__views.__alloyId420 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId420"
    });
    $.__views.__alloyId419.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId421"
    });
    $.__views.__alloyId412.add($.__views.__alloyId421);
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
    $.__views.__alloyId421.add($.__views.switch10);
    $.__views.__alloyId422 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId422"
    });
    $.__views.__alloyId421.add($.__views.__alloyId422);
    $.__views.__alloyId423 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId423"
    });
    $.__views.__alloyId412.add($.__views.__alloyId423);
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
    $.__views.__alloyId423.add($.__views.switch11);
    $.__views.__alloyId424 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId424"
    });
    $.__views.__alloyId423.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId425"
    });
    $.__views.__alloyId412.add($.__views.__alloyId425);
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
    $.__views.__alloyId425.add($.__views.switch12);
    $.__views.__alloyId426 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId426"
    });
    $.__views.__alloyId425.add($.__views.__alloyId426);
    $.__views.__alloyId427 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId427"
    });
    $.__views.__alloyId412.add($.__views.__alloyId427);
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
    $.__views.__alloyId427.add($.__views.switch13);
    $.__views.__alloyId428 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId428"
    });
    $.__views.__alloyId427.add($.__views.__alloyId428);
    $.__views.__alloyId429 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId429"
    });
    $.__views.prepaidPack.add($.__views.__alloyId429);
    next ? $.__views.__alloyId429.addEventListener("click", next) : __defers["$.__views.__alloyId429!click!next"] = true;
    $.__views.__alloyId430 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId430"
    });
    $.__views.__alloyId429.add($.__views.__alloyId430);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    var simType;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId383!click!back"] && $.__views.__alloyId383.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId388!click!showPicker"] && $.__views.__alloyId388.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId429!click!next"] && $.__views.__alloyId429.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;