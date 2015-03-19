function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "terms";
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
    $.__views.terms = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "terms"
    });
    $.__views.terms && $.addTopLevelView($.__views.terms);
    $.__views.__alloyId1588 = Alloy.createController("_header", {
        id: "__alloyId1588",
        __parentSymbol: $.__views.terms
    });
    $.__views.__alloyId1588.setParent($.__views.terms);
    $.__views.__alloyId1589 = Ti.UI.createView({
        height: "20%",
        backgroundColor: "#AFCD3F",
        id: "__alloyId1589"
    });
    $.__views.terms.add($.__views.__alloyId1589);
    $.__views.__alloyId1590 = Ti.UI.createLabel({
        text: "Support",
        left: "10",
        top: "10",
        color: "white",
        id: "__alloyId1590"
    });
    $.__views.__alloyId1589.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createView({
        layout: "vertical",
        height: "100",
        backgroundColor: "#E6E7E9",
        id: "__alloyId1591"
    });
    $.__views.terms.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createLabel({
        text: "User Guide",
        width: "90%",
        height: "30",
        top: "10",
        bottom: "5",
        textAlign: "left",
        color: "black",
        id: "__alloyId1592"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1592);
    $.__views.__alloyId1593 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "90%",
        id: "__alloyId1593"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1593);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "30",
        borderRadius: "15",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1593.add($.__views.picker);
    var __alloyId1594 = [];
    $.__views.__alloyId1595 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1595"
    });
    __alloyId1594.push($.__views.__alloyId1595);
    $.__views.__alloyId1596 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1596"
    });
    __alloyId1594.push($.__views.__alloyId1596);
    $.__views.__alloyId1597 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1597"
    });
    __alloyId1594.push($.__views.__alloyId1597);
    $.__views.__alloyId1598 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1598"
    });
    __alloyId1594.push($.__views.__alloyId1598);
    $.__views.picker.add(__alloyId1594);
    guide ? $.__views.picker.addEventListener("change", guide) : __defers["$.__views.picker!change!guide"] = true;
    $.__views.__alloyId1599 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1599"
    });
    $.__views.__alloyId1593.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "white",
        id: "__alloyId1600"
    });
    $.__views.terms.add($.__views.__alloyId1600);
    $.__views.title = Ti.UI.createLabel({
        id: "title",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
    $.__views.__alloyId1600.add($.__views.title);
    $.__views.label = Ti.UI.createLabel({
        id: "label",
        width: "90%",
        height: Ti.UI.SIZE,
        top: "10",
        textAlign: "left",
        color: "black"
    });
    $.__views.__alloyId1600.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.picker!change!guide"] && $.__views.picker.addEventListener("change", guide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;