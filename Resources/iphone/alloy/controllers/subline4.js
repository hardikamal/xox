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
        DRAWER.navigation("subline", 1);
    }
    function subscribe() {
        console.log("subscribe");
        DRAWER.navigation("subline5", 1);
    }
    function plan(e) {
        console.log("plan");
        plan = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.planLabel.text = plan);
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subline4";
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
    $.__views.subline4 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "subline4"
    });
    $.__views.subline4 && $.addTopLevelView($.__views.subline4);
    $.__views.__alloyId2631 = Alloy.createController("_header", {
        id: "__alloyId2631",
        __parentSymbol: $.__views.subline4
    });
    $.__views.__alloyId2631.setParent($.__views.subline4);
    $.__views.__alloyId2632 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId2632"
    });
    $.__views.subline4.add($.__views.__alloyId2632);
    $.__views.__alloyId2633 = Ti.UI.createLabel({
        text: "Subline Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2633"
    });
    $.__views.__alloyId2632.add($.__views.__alloyId2633);
    $.__views.__alloyId2634 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2634"
    });
    $.__views.__alloyId2632.add($.__views.__alloyId2634);
    back ? $.__views.__alloyId2634.addEventListener("click", back) : __defers["$.__views.__alloyId2634!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.subline4.add($.__views.scrollView);
    $.__views.__alloyId2635 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId2635"
    });
    $.__views.scrollView.add($.__views.__alloyId2635);
    $.__views.__alloyId2636 = Ti.UI.createLabel({
        text: "MSISDN",
        width: "40%",
        height: "50",
        color: "black",
        left: "20",
        id: "__alloyId2636"
    });
    $.__views.__alloyId2635.add($.__views.__alloyId2636);
    $.__views.__alloyId2637 = Ti.UI.createLabel({
        text: "011xxxxxxx",
        width: "auto",
        height: "50",
        color: "black",
        id: "__alloyId2637"
    });
    $.__views.__alloyId2635.add($.__views.__alloyId2637);
    $.__views.__alloyId2638 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "90%",
        left: "5%",
        height: "2",
        bottom: "10",
        id: "__alloyId2638"
    });
    $.__views.scrollView.add($.__views.__alloyId2638);
    $.__views.__alloyId2639 = Ti.UI.createLabel({
        text: "No Mobile Internet Plan available.",
        color: "gray",
        bottom: "20",
        left: "20",
        id: "__alloyId2639"
    });
    $.__views.scrollView.add($.__views.__alloyId2639);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "100"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId2640 = Ti.UI.createLabel({
        text: "Subscribe Plan",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId2640"
    });
    $.__views.contentView.add($.__views.__alloyId2640);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.planLabel = Ti.UI.createLabel({
        id: "planLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.planLabel);
    showPicker ? $.__views.planLabel.addEventListener("click", showPicker) : __defers["$.__views.planLabel!click!showPicker"] = true;
    $.__views.__alloyId2641 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2641"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2641);
    showPicker ? $.__views.__alloyId2641.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2641!click!showPicker"] = true;
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
    var __alloyId2642 = [];
    $.__views.__alloyId2643 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId2643"
    });
    __alloyId2642.push($.__views.__alloyId2643);
    $.__views.__alloyId2644 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId2644"
    });
    __alloyId2642.push($.__views.__alloyId2644);
    $.__views.__alloyId2645 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId2645"
    });
    __alloyId2642.push($.__views.__alloyId2645);
    $.__views.__alloyId2646 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId2646"
    });
    __alloyId2642.push($.__views.__alloyId2646);
    $.__views.picker.add(__alloyId2642);
    plan ? $.__views.picker.addEventListener("change", plan) : __defers["$.__views.picker!change!plan"] = true;
    $.__views.__alloyId2647 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId2647"
    });
    $.__views.subline4.add($.__views.__alloyId2647);
    subscribe ? $.__views.__alloyId2647.addEventListener("click", subscribe) : __defers["$.__views.__alloyId2647!click!subscribe"] = true;
    $.__views.__alloyId2648 = Ti.UI.createLabel({
        text: "Subscribe",
        color: "white",
        id: "__alloyId2648"
    });
    $.__views.__alloyId2647.add($.__views.__alloyId2648);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
    }
    var plan;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId2634!click!back"] && $.__views.__alloyId2634.addEventListener("click", back);
    __defers["$.__views.planLabel!click!showPicker"] && $.__views.planLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2641!click!showPicker"] && $.__views.__alloyId2641.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!plan"] && $.__views.picker.addEventListener("change", plan);
    __defers["$.__views.__alloyId2647!click!subscribe"] && $.__views.__alloyId2647.addEventListener("click", subscribe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;