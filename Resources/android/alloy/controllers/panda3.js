function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
    }
    function topUp(e) {
        console.log("topUp");
        topUp = e.row.title;
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
    $.__views.__alloyId1572 = Alloy.createController("_header", {
        id: "__alloyId1572",
        __parentSymbol: $.__views.panda3
    });
    $.__views.__alloyId1572.setParent($.__views.panda3);
    $.__views.__alloyId1573 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1573"
    });
    $.__views.panda3.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createLabel({
        text: "1600 PANDAS SIM PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId1574"
    });
    $.__views.__alloyId1573.add($.__views.__alloyId1574);
    $.__views.__alloyId1575 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1575"
    });
    $.__views.__alloyId1573.add($.__views.__alloyId1575);
    back ? $.__views.__alloyId1575.addEventListener("click", back) : __defers["$.__views.__alloyId1575!click!back"] = true;
    $.__views.__alloyId1576 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1576"
    });
    $.__views.panda3.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createLabel({
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId1577"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createLabel({
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1578"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "black",
        id: "__alloyId1579"
    });
    $.__views.panda3.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createLabel({
        text: "PERSONAL DETAILS",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1580"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1580);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
        text: "Please fill in the mandatory fields.",
        backgroundColor: "transparent",
        color: "white",
        id: "__alloyId1581"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1581);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.panda3.add($.__views.scrollView);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
        text: "Salutation*",
        color: "black",
        left: "0",
        id: "__alloyId1582"
    });
    $.__views.scrollView.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        top: "10",
        id: "__alloyId1583"
    });
    $.__views.scrollView.add($.__views.__alloyId1583);
    $.__views.__alloyId1584 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "100%",
        id: "__alloyId1584"
    });
    $.__views.__alloyId1583.add($.__views.__alloyId1584);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1584.add($.__views.picker);
    var __alloyId1585 = [];
    $.__views.__alloyId1586 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1586"
    });
    __alloyId1585.push($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1587"
    });
    __alloyId1585.push($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1588"
    });
    __alloyId1585.push($.__views.__alloyId1588);
    $.__views.picker.add(__alloyId1585);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1589 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1589"
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1589);
    $.__views.__alloyId1590 = Ti.UI.createLabel({
        text: "Name (as per NRIC / Armed Force ID / Passport)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1590"
    });
    $.__views.scrollView.add($.__views.__alloyId1590);
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
    $.__views.__alloyId1591 = Ti.UI.createLabel({
        text: "Reg Type*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1591"
    });
    $.__views.scrollView.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        id: "__alloyId1592"
    });
    $.__views.scrollView.add($.__views.__alloyId1592);
    $.__views.__alloyId1593 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "100%",
        id: "__alloyId1593"
    });
    $.__views.__alloyId1592.add($.__views.__alloyId1593);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1593.add($.__views.picker2);
    var __alloyId1594 = [];
    $.__views.__alloyId1595 = Ti.UI.createPickerRow({
        title: "None",
        id: "__alloyId1595"
    });
    __alloyId1594.push($.__views.__alloyId1595);
    $.__views.__alloyId1596 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1596"
    });
    __alloyId1594.push($.__views.__alloyId1596);
    $.__views.__alloyId1597 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1597"
    });
    __alloyId1594.push($.__views.__alloyId1597);
    $.__views.__alloyId1598 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1598"
    });
    __alloyId1594.push($.__views.__alloyId1598);
    $.__views.picker2.add(__alloyId1594);
    topUp ? $.__views.picker2.addEventListener("change", topUp) : __defers["$.__views.picker2!change!topUp"] = true;
    $.__views.__alloyId1599 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1599"
    });
    $.__views.__alloyId1593.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createLabel({
        text: "NRIC No. / Armed Force ID / Passport)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1600"
    });
    $.__views.scrollView.add($.__views.__alloyId1600);
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
    $.__views.__alloyId1601 = Ti.UI.createLabel({
        text: "Retype NRIC No. / Armed Force ID / Passport)*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1601"
    });
    $.__views.scrollView.add($.__views.__alloyId1601);
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
    $.__views.__alloyId1602 = Ti.UI.createLabel({
        text: "Date of Birth*",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId1602"
    });
    $.__views.scrollView.add($.__views.__alloyId1602);
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
    $.__views.__alloyId1603 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1603"
    });
    $.__views.panda3.add($.__views.__alloyId1603);
    proceed ? $.__views.__alloyId1603.addEventListener("click", proceed) : __defers["$.__views.__alloyId1603!click!proceed"] = true;
    $.__views.__alloyId1604 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1604"
    });
    $.__views.__alloyId1603.add($.__views.__alloyId1604);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    $.picker.setSelectedRow(0, 0, false);
    $.picker2.setSelectedRow(0, 0, false);
    var simType;
    var topUp;
    __defers["$.__views.__alloyId1575!click!back"] && $.__views.__alloyId1575.addEventListener("click", back);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.picker2!change!topUp"] && $.__views.picker2.addEventListener("change", topUp);
    __defers["$.__views.__alloyId1603!click!proceed"] && $.__views.__alloyId1603.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;