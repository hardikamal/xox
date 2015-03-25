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
    $.__views.__alloyId1539 = Alloy.createController("_header", {
        id: "__alloyId1539",
        __parentSymbol: $.__views.panda3
    });
    $.__views.__alloyId1539.setParent($.__views.panda3);
    $.__views.__alloyId1540 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1540"
    });
    $.__views.panda3.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1541"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1542"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1542);
    back ? $.__views.__alloyId1542.addEventListener("click", back) : __defers["$.__views.__alloyId1542!click!back"] = true;
    $.__views.__alloyId1543 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1543"
    });
    $.__views.panda3.add($.__views.__alloyId1543);
    $.__views.__alloyId1544 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1544"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1545"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1545);
    $.__views.__alloyId1546 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "black",
        id: "__alloyId1546"
    });
    $.__views.panda3.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createLabel({
        text: "PERSONAL DETAILS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1547"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createLabel({
        text: "Please fill in the mandatory fields.",
        backgroundColor: "transparent",
        color: "white",
        id: "__alloyId1548"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1548);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.panda3.add($.__views.scrollView);
    $.__views.__alloyId1549 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        left: "0",
        id: "__alloyId1549"
    });
    $.__views.scrollView.add($.__views.__alloyId1549);
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
    $.__views.__alloyId1550 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1550"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1550);
    showPicker ? $.__views.__alloyId1550.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1550!click!showPicker"] = true;
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
    var __alloyId1551 = [];
    $.__views.__alloyId1552 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1552"
    });
    __alloyId1551.push($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1553"
    });
    __alloyId1551.push($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1554"
    });
    __alloyId1551.push($.__views.__alloyId1554);
    $.__views.picker.add(__alloyId1551);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1555 = Ti.UI.createLabel({
        text: "Name (as per NRIC / Armed Force ID / Passport)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1555"
    });
    $.__views.scrollView.add($.__views.__alloyId1555);
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
    $.__views.__alloyId1556 = Ti.UI.createLabel({
        text: "Reg Type*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1556"
    });
    $.__views.scrollView.add($.__views.__alloyId1556);
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
    $.__views.__alloyId1557 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1557"
    });
    $.__views.pickerContentView2.add($.__views.__alloyId1557);
    showPicker ? $.__views.__alloyId1557.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1557!click!showPicker"] = true;
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
    var __alloyId1558 = [];
    $.__views.__alloyId1559 = Ti.UI.createPickerRow({
        title: "None",
        id: "__alloyId1559"
    });
    __alloyId1558.push($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1560"
    });
    __alloyId1558.push($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1561"
    });
    __alloyId1558.push($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1562"
    });
    __alloyId1558.push($.__views.__alloyId1562);
    $.__views.picker2.add(__alloyId1558);
    topUp ? $.__views.picker2.addEventListener("change", topUp) : __defers["$.__views.picker2!change!topUp"] = true;
    $.__views.__alloyId1563 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1563"
    });
    $.__views.scrollView.add($.__views.__alloyId1563);
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
    $.__views.__alloyId1564 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1564"
    });
    $.__views.scrollView.add($.__views.__alloyId1564);
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
    $.__views.__alloyId1565 = Ti.UI.createLabel({
        text: "Date of Birth*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1565"
    });
    $.__views.scrollView.add($.__views.__alloyId1565);
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
    $.__views.__alloyId1566 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1566"
    });
    $.__views.panda3.add($.__views.__alloyId1566);
    proceed ? $.__views.__alloyId1566.addEventListener("click", proceed) : __defers["$.__views.__alloyId1566!click!proceed"] = true;
    $.__views.__alloyId1567 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1567"
    });
    $.__views.__alloyId1566.add($.__views.__alloyId1567);
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
    __defers["$.__views.__alloyId1542!click!back"] && $.__views.__alloyId1542.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1550!click!showPicker"] && $.__views.__alloyId1550.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.topUpLabel!click!showPicker2"] && $.__views.topUpLabel.addEventListener("click", showPicker2);
    __defers["$.__views.__alloyId1557!click!showPicker"] && $.__views.__alloyId1557.addEventListener("click", showPicker);
    __defers["$.__views.done2!click!done2"] && $.__views.done2.addEventListener("click", done2);
    __defers["$.__views.picker2!change!topUp"] && $.__views.picker2.addEventListener("change", topUp);
    __defers["$.__views.__alloyId1566!click!proceed"] && $.__views.__alloyId1566.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;