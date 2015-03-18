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
        DRAWER.navigation("prepaidPack", 1);
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
            $.contentView.height = 80;
            $.pickerView.height = 80;
            $.pickerContentView.height = 80;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function showPicker2() {
        console.log("showPicker2");
        if ("false" == $.pickerView2.visible) {
            $.contentView2.height = 250;
            $.pickerView2.height = 250;
            $.pickerContentView2.height = 250;
            $.pickerView2.setVisible(true);
            $.done2.setVisible(true);
            $.picker2.setVisible(true);
        } else if (false == $.pickerView2.visible) {
            $.contentView2.height = 250;
            $.pickerView2.height = 250;
            $.pickerContentView2.height = 250;
            $.pickerView2.setVisible(true);
            $.done2.setVisible(true);
            $.picker2.setVisible(true);
        } else {
            $.contentView2.height = 80;
            $.pickerView2.height = 80;
            $.pickerContentView2.height = 80;
            $.pickerView2.setVisible(false);
            $.done2.setVisible(false);
            $.picker2.setVisible(false);
        }
    }
    function salutationType(e) {
        console.log("salutationType");
        salutationType = e.row.title;
        $.salutationLabel.text = salutationType;
    }
    function regType(e) {
        console.log("regType");
        regType = e.row.title;
        $.regLabel.text = regType;
    }
    function done() {
        console.log("done");
        $.contentView.height = 80;
        $.pickerView.height = 80;
        $.pickerContentView.height = 80;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
    }
    function done2() {
        console.log("done2");
        $.contentView2.height = 80;
        $.pickerView2.height = 80;
        $.pickerContentView2.height = 80;
        $.pickerView2.setVisible(false);
        $.done2.setVisible(false);
        $.picker2.setVisible(false);
    }
    function next() {
        DRAWER.navigation("prepaidPack2", 1);
        console.log("next");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack2";
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
    $.__views.prepaidPack2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack2"
    });
    $.__views.prepaidPack2 && $.addTopLevelView($.__views.prepaidPack2);
    $.__views.__alloyId480 = Alloy.createController("_header", {
        id: "__alloyId480",
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId480.setParent($.__views.prepaidPack2);
    $.__views.__alloyId481 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId481"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId481);
    $.__views.__alloyId482 = Ti.UI.createLabel({
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId482"
    });
    $.__views.__alloyId481.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId483"
    });
    $.__views.__alloyId481.add($.__views.__alloyId483);
    back ? $.__views.__alloyId483.addEventListener("click", back) : __defers["$.__views.__alloyId483!click!back"] = true;
    $.__views.__alloyId484 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId484"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId484);
    $.__views.__alloyId485 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId485"
    });
    $.__views.__alloyId484.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createLabel({
        text: "REGISTRATION",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId486"
    });
    $.__views.__alloyId484.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId487"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId487);
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        text: "PERSONAL DETAILS",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "15",
        right: "10",
        width: "40%"
    });
    $.__views.__alloyId487.add($.__views.prepaid_subtitle);
    $.__views.prepaid_mandatory = Ti.UI.createLabel({
        text: "*Please fill in the Mandatory field",
        id: "prepaid_mandatory",
        backgroundColor: "transparent",
        color: "red",
        width: "50%",
        top: "5"
    });
    $.__views.__alloyId487.add($.__views.prepaid_mandatory);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack2.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "80"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId488 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId488"
    });
    $.__views.contentView.add($.__views.__alloyId488);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: Ti.UI.FILL
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.salutationLabel = Ti.UI.createLabel({
        id: "salutationLabel",
        height: "40",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.salutationLabel);
    showPicker ? $.__views.salutationLabel.addEventListener("click", showPicker) : __defers["$.__views.salutationLabel!click!showPicker"] = true;
    $.__views.__alloyId489 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "25",
        id: "__alloyId489"
    });
    $.__views.pickerContentView.add($.__views.__alloyId489);
    showPicker ? $.__views.__alloyId489.addEventListener("click", showPicker) : __defers["$.__views.__alloyId489!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "40",
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
    var __alloyId490 = [];
    $.__views.__alloyId491 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId491"
    });
    __alloyId490.push($.__views.__alloyId491);
    $.__views.__alloyId492 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId492"
    });
    __alloyId490.push($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId493"
    });
    __alloyId490.push($.__views.__alloyId493);
    $.__views.picker.add(__alloyId490);
    salutationType ? $.__views.picker.addEventListener("change", salutationType) : __defers["$.__views.picker!change!salutationType"] = true;
    $.__views.__alloyId494 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId494"
    });
    $.__views.scrollView.add($.__views.__alloyId494);
    $.__views.__alloyId495 = Ti.UI.createLabel({
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId495"
    });
    $.__views.__alloyId494.add($.__views.__alloyId495);
    $.__views.__alloyId496 = Ti.UI.createTextField({
        height: "50",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId496"
    });
    $.__views.__alloyId494.add($.__views.__alloyId496);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.__alloyId497 = Ti.UI.createLabel({
        text: "Reg Type*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId497"
    });
    $.__views.contentView2.add($.__views.__alloyId497);
    $.__views.pickerContentView2 = Ti.UI.createView({
        id: "pickerContentView2",
        layout: "composite",
        height: "50",
        width: Ti.UI.FILL
    });
    $.__views.contentView2.add($.__views.pickerContentView2);
    $.__views.regLabel = Ti.UI.createLabel({
        id: "regLabel",
        height: "40",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "10"
    });
    $.__views.pickerContentView2.add($.__views.regLabel);
    showPicker2 ? $.__views.regLabel.addEventListener("click", showPicker2) : __defers["$.__views.regLabel!click!showPicker2"] = true;
    $.__views.__alloyId498 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "25",
        id: "__alloyId498"
    });
    $.__views.pickerContentView2.add($.__views.__alloyId498);
    showPicker2 ? $.__views.__alloyId498.addEventListener("click", showPicker2) : __defers["$.__views.__alloyId498!click!showPicker2"] = true;
    $.__views.pickerView2 = Ti.UI.createView({
        id: "pickerView2",
        height: "40",
        width: "100%",
        visible: "false",
        top: "50"
    });
    $.__views.pickerContentView2.add($.__views.pickerView2);
    $.__views.done2 = Ti.UI.createButton({
        title: "Done",
        id: "done2",
        height: "30",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        top: "0",
        left: "0",
        visible: "false"
    });
    $.__views.pickerView2.add($.__views.done2);
    done2 ? $.__views.done2.addEventListener("click", done2) : __defers["$.__views.done2!click!done2"] = true;
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "30",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "false"
    });
    $.__views.pickerView2.add($.__views.picker2);
    var __alloyId499 = [];
    $.__views.__alloyId500 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId500"
    });
    __alloyId499.push($.__views.__alloyId500);
    $.__views.__alloyId501 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId501"
    });
    __alloyId499.push($.__views.__alloyId501);
    $.__views.__alloyId502 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId502"
    });
    __alloyId499.push($.__views.__alloyId502);
    $.__views.picker2.add(__alloyId499);
    regType ? $.__views.picker2.addEventListener("change", regType) : __defers["$.__views.picker2!change!regType"] = true;
    $.__views.__alloyId503 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId503"
    });
    $.__views.scrollView.add($.__views.__alloyId503);
    $.__views.__alloyId504 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId504"
    });
    $.__views.__alloyId503.add($.__views.__alloyId504);
    $.__views.__alloyId505 = Ti.UI.createTextField({
        height: "50",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId505"
    });
    $.__views.__alloyId503.add($.__views.__alloyId505);
    $.__views.__alloyId506 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId506"
    });
    $.__views.scrollView.add($.__views.__alloyId506);
    $.__views.__alloyId507 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId507"
    });
    $.__views.__alloyId506.add($.__views.__alloyId507);
    $.__views.__alloyId508 = Ti.UI.createTextField({
        height: "50",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId508"
    });
    $.__views.__alloyId506.add($.__views.__alloyId508);
    $.__views.__alloyId509 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId509"
    });
    $.__views.scrollView.add($.__views.__alloyId509);
    $.__views.__alloyId510 = Ti.UI.createLabel({
        text: "Date of Birth*",
        color: "black",
        height: "30",
        left: "0",
        id: "__alloyId510"
    });
    $.__views.__alloyId509.add($.__views.__alloyId510);
    $.__views.__alloyId511 = Ti.UI.createTextField({
        height: "50",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId511"
    });
    $.__views.__alloyId509.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createView({
        height: "80",
        backgroundColor: "#4CC4D2",
        id: "__alloyId512"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId512);
    next ? $.__views.__alloyId512.addEventListener("click", next) : __defers["$.__views.__alloyId512!click!next"] = true;
    $.__views.__alloyId513 = Ti.UI.createLabel({
        text: "Proceed",
        color: "white",
        id: "__alloyId513"
    });
    $.__views.__alloyId512.add($.__views.__alloyId513);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var salutationType;
    var regType;
    $.picker.setSelectedRow(0, 0, false);
    $.picker2.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId483!click!back"] && $.__views.__alloyId483.addEventListener("click", back);
    __defers["$.__views.salutationLabel!click!showPicker"] && $.__views.salutationLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId489!click!showPicker"] && $.__views.__alloyId489.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!salutationType"] && $.__views.picker.addEventListener("change", salutationType);
    __defers["$.__views.regLabel!click!showPicker2"] && $.__views.regLabel.addEventListener("click", showPicker2);
    __defers["$.__views.__alloyId498!click!showPicker2"] && $.__views.__alloyId498.addEventListener("click", showPicker2);
    __defers["$.__views.done2!click!done2"] && $.__views.done2.addEventListener("click", done2);
    __defers["$.__views.picker2!change!regType"] && $.__views.picker2.addEventListener("change", regType);
    __defers["$.__views.__alloyId512!click!next"] && $.__views.__alloyId512.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;