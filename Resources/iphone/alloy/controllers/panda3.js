function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.simLabel.text = simType);
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
    function topUp(e) {
        console.log("topUp");
        topUp = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.topUpLabel.text = topUp);
    }
    function showPicker2() {
        console.log("showPicker2");
        console.log("$.pickerView.visible: " + $.pickerView2.visible);
        if ("false" == $.pickerView2.visible) {
            console.log("false");
            $.contentView2.height = 300;
            $.pickerView2.height = 250;
            $.pickerContentView2.height = 250;
            $.pickerView2.setVisible(true);
            $.done2.setVisible(true);
            $.picker2.setVisible(true);
        } else if (false == $.pickerView2.visible) {
            console.log("else false");
            $.contentView2.height = 300;
            $.pickerView2.height = 250;
            $.pickerContentView2.height = 250;
            $.pickerView2.setVisible(true);
            $.done2.setVisible(true);
            $.picker2.setVisible(true);
        } else {
            console.log("else true");
            $.contentView2.height = 50;
            $.pickerView2.height = 50;
            $.pickerContentView2.height = 50;
            $.pickerView2.setVisible(false);
            $.done2.setVisible(false);
            $.picker2.setVisible(false);
        }
    }
    function done2() {
        console.log("done2");
        $.contentView2.height = 50;
        $.pickerView2.height = 50;
        $.pickerContentView2.height = 50;
        $.pickerView2.setVisible(false);
        $.done2.setVisible(false);
        $.picker2.setVisible(false);
    }
    function back() {
        DRAWER.navigation("panda2", 1);
    }
    function proceed() {
        console.log("proceed");
        DRAWER.navigation("panda4", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "panda3";
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
    $.__views.panda3 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "panda3"
    });
    $.__views.panda3 && $.addTopLevelView($.__views.panda3);
    $.__views.__alloyId1474 = Alloy.createController("_header", {
        id: "__alloyId1474",
        __parentSymbol: $.__views.panda3
    });
    $.__views.__alloyId1474.setParent($.__views.panda3);
    $.__views.__alloyId1475 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1475"
    });
    $.__views.panda3.add($.__views.__alloyId1475);
    $.__views.__alloyId1476 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1476"
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1476);
    $.__views.__alloyId1477 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1477"
    });
    $.__views.__alloyId1475.add($.__views.__alloyId1477);
    back ? $.__views.__alloyId1477.addEventListener("click", back) : __defers["$.__views.__alloyId1477!click!back"] = true;
    $.__views.__alloyId1478 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1478"
    });
    $.__views.panda3.add($.__views.__alloyId1478);
    $.__views.__alloyId1479 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1479"
    });
    $.__views.__alloyId1478.add($.__views.__alloyId1479);
    $.__views.__alloyId1480 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1480"
    });
    $.__views.__alloyId1478.add($.__views.__alloyId1480);
    $.__views.__alloyId1481 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "black",
        id: "__alloyId1481"
    });
    $.__views.panda3.add($.__views.__alloyId1481);
    $.__views.__alloyId1482 = Ti.UI.createLabel({
        text: "PERSONAL DETAILS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1482"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createLabel({
        text: "Please fill in the mandatory fields.",
        backgroundColor: "transparent",
        color: "white",
        id: "__alloyId1483"
    });
    $.__views.__alloyId1481.add($.__views.__alloyId1483);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.panda3.add($.__views.scrollView);
    $.__views.__alloyId1484 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        left: "0",
        id: "__alloyId1484"
    });
    $.__views.scrollView.add($.__views.__alloyId1484);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "100%"
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
    $.__views.__alloyId1485 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1485"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1485);
    showPicker ? $.__views.__alloyId1485.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1485!click!showPicker"] = true;
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
    var __alloyId1486 = [];
    $.__views.__alloyId1487 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1487"
    });
    __alloyId1486.push($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1488"
    });
    __alloyId1486.push($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1489"
    });
    __alloyId1486.push($.__views.__alloyId1489);
    $.__views.picker.add(__alloyId1486);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1490 = Ti.UI.createLabel({
        text: "Name (as per NRIC / Armed Force ID / Passport)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1490"
    });
    $.__views.scrollView.add($.__views.__alloyId1490);
    $.__views.name = Ti.UI.createTextField({
        id: "name",
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2"
    });
    $.__views.scrollView.add($.__views.name);
    $.__views.__alloyId1491 = Ti.UI.createLabel({
        text: "Reg Type*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1491"
    });
    $.__views.scrollView.add($.__views.__alloyId1491);
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "50"
    });
    $.__views.scrollView.add($.__views.contentView2);
    $.__views.pickerContentView2 = Ti.UI.createView({
        id: "pickerContentView2",
        layout: "composite",
        height: "50",
        width: "100%"
    });
    $.__views.contentView2.add($.__views.pickerContentView2);
    $.__views.topUpLabel = Ti.UI.createLabel({
        id: "topUpLabel",
        height: "30",
        width: "99%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView2.add($.__views.topUpLabel);
    showPicker2 ? $.__views.topUpLabel.addEventListener("click", showPicker2) : __defers["$.__views.topUpLabel!click!showPicker2"] = true;
    $.__views.__alloyId1492 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1492"
    });
    $.__views.pickerContentView2.add($.__views.__alloyId1492);
    showPicker ? $.__views.__alloyId1492.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1492!click!showPicker"] = true;
    $.__views.pickerView2 = Ti.UI.createView({
        id: "pickerView2",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50",
        backgroundColor: "blue"
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
    var __alloyId1493 = [];
    $.__views.__alloyId1494 = Ti.UI.createPickerRow({
        title: "None",
        id: "__alloyId1494"
    });
    __alloyId1493.push($.__views.__alloyId1494);
    $.__views.__alloyId1495 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1495"
    });
    __alloyId1493.push($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1496"
    });
    __alloyId1493.push($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1497"
    });
    __alloyId1493.push($.__views.__alloyId1497);
    $.__views.picker2.add(__alloyId1493);
    topUp ? $.__views.picker2.addEventListener("change", topUp) : __defers["$.__views.picker2!change!topUp"] = true;
    $.__views.__alloyId1498 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1498"
    });
    $.__views.scrollView.add($.__views.__alloyId1498);
    $.__views.ic = Ti.UI.createTextField({
        id: "ic",
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2"
    });
    $.__views.scrollView.add($.__views.ic);
    $.__views.__alloyId1499 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1499"
    });
    $.__views.scrollView.add($.__views.__alloyId1499);
    $.__views.reic = Ti.UI.createTextField({
        id: "reic",
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2"
    });
    $.__views.scrollView.add($.__views.reic);
    $.__views.__alloyId1500 = Ti.UI.createLabel({
        text: "Date of Birth*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1500"
    });
    $.__views.scrollView.add($.__views.__alloyId1500);
    $.__views.dob = Ti.UI.createTextField({
        id: "dob",
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        bottom: "10"
    });
    $.__views.scrollView.add($.__views.dob);
    $.__views.__alloyId1501 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1501"
    });
    $.__views.panda3.add($.__views.__alloyId1501);
    proceed ? $.__views.__alloyId1501.addEventListener("click", proceed) : __defers["$.__views.__alloyId1501!click!proceed"] = true;
    $.__views.__alloyId1502 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1502"
    });
    $.__views.__alloyId1501.add($.__views.__alloyId1502);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
    $.picker.setSelectedRow(0, 0, false);
    $.picker2.setSelectedRow(0, 0, false);
    var simType;
    var topUp;
    __defers["$.__views.__alloyId1477!click!back"] && $.__views.__alloyId1477.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1485!click!showPicker"] && $.__views.__alloyId1485.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.topUpLabel!click!showPicker2"] && $.__views.topUpLabel.addEventListener("click", showPicker2);
    __defers["$.__views.__alloyId1492!click!showPicker"] && $.__views.__alloyId1492.addEventListener("click", showPicker);
    __defers["$.__views.done2!click!done2"] && $.__views.done2.addEventListener("click", done2);
    __defers["$.__views.picker2!change!topUp"] && $.__views.picker2.addEventListener("change", topUp);
    __defers["$.__views.__alloyId1501!click!proceed"] && $.__views.__alloyId1501.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;