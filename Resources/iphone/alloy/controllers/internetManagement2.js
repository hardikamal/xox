function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
    function back() {
        DRAWER.navigation("internetManagement", 1);
    }
    function submit() {
        console.log("submit");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "internetManagement2";
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
    $.__views.internetManagement2 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "internetManagement2"
    });
    $.__views.internetManagement2 && $.addTopLevelView($.__views.internetManagement2);
    $.__views.__alloyId603 = Alloy.createController("_header", {
        id: "__alloyId603",
        __parentSymbol: $.__views.internetManagement2
    });
    $.__views.__alloyId603.setParent($.__views.internetManagement2);
    $.__views.__alloyId604 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E82630",
        id: "__alloyId604"
    });
    $.__views.internetManagement2.add($.__views.__alloyId604);
    $.__views.__alloyId605 = Ti.UI.createLabel({
        text: "Mobile Internet Management",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId605"
    });
    $.__views.__alloyId604.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId606"
    });
    $.__views.__alloyId604.add($.__views.__alloyId606);
    back ? $.__views.__alloyId606.addEventListener("click", back) : __defers["$.__views.__alloyId606!click!back"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white"
    });
    $.__views.internetManagement2.add($.__views.scrollView);
    $.__views.__alloyId607 = Ti.UI.createView({
        height: "50",
        id: "__alloyId607"
    });
    $.__views.scrollView.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createLabel({
        text: "Mobile Number :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId608"
    });
    $.__views.__alloyId607.add($.__views.__alloyId608);
    $.__views.__alloyId609 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId609"
    });
    $.__views.scrollView.add($.__views.__alloyId609);
    $.__views.__alloyId610 = Ti.UI.createView({
        height: "50",
        id: "__alloyId610"
    });
    $.__views.scrollView.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createLabel({
        text: "Current Mobile Internet Plan :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId611"
    });
    $.__views.__alloyId610.add($.__views.__alloyId611);
    $.__views.__alloyId612 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId612"
    });
    $.__views.scrollView.add($.__views.__alloyId612);
    $.__views.__alloyId613 = Ti.UI.createView({
        height: "50",
        id: "__alloyId613"
    });
    $.__views.scrollView.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createLabel({
        text: "Current Postpaid Available Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId614"
    });
    $.__views.__alloyId613.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId615"
    });
    $.__views.scrollView.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createView({
        height: "50",
        id: "__alloyId616"
    });
    $.__views.scrollView.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createLabel({
        text: "Currently Prepaid Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId617"
    });
    $.__views.__alloyId616.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId618"
    });
    $.__views.scrollView.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createView({
        height: "50",
        id: "__alloyId619"
    });
    $.__views.scrollView.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createLabel({
        text: "Currently EWallet Balance (RM) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId620"
    });
    $.__views.__alloyId619.add($.__views.__alloyId620);
    $.__views.__alloyId621 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId621"
    });
    $.__views.scrollView.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createView({
        height: "50",
        id: "__alloyId622"
    });
    $.__views.scrollView.add($.__views.__alloyId622);
    $.__views.__alloyId623 = Ti.UI.createLabel({
        text: "Season Pass Data Counter (MB) :",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId623"
    });
    $.__views.__alloyId622.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId624"
    });
    $.__views.scrollView.add($.__views.__alloyId624);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "100"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId625 = Ti.UI.createLabel({
        text: "Subscribe / Upgrade to :",
        backgroundColor: "transparent",
        height: "30",
        top: "10",
        bottom: "5",
        borderRadius: "15",
        textAlign: "center",
        color: "black",
        left: "20",
        id: "__alloyId625"
    });
    $.__views.contentView.add($.__views.__alloyId625);
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
    $.__views.__alloyId626 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId626"
    });
    $.__views.pickerContentView.add($.__views.__alloyId626);
    showPicker ? $.__views.__alloyId626.addEventListener("click", showPicker) : __defers["$.__views.__alloyId626!click!showPicker"] = true;
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
    var __alloyId627 = [];
    $.__views.__alloyId628 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId628"
    });
    __alloyId627.push($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId629"
    });
    __alloyId627.push($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId630"
    });
    __alloyId627.push($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId631"
    });
    __alloyId627.push($.__views.__alloyId631);
    $.__views.picker.add(__alloyId627);
    plan ? $.__views.picker.addEventListener("change", plan) : __defers["$.__views.picker!change!plan"] = true;
    $.__views.__alloyId632 = Ti.UI.createView({
        height: "1",
        width: "90%",
        backgroundColor: "gray",
        id: "__alloyId632"
    });
    $.__views.scrollView.add($.__views.__alloyId632);
    $.__views.__alloyId633 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId633"
    });
    $.__views.internetManagement2.add($.__views.__alloyId633);
    submit ? $.__views.__alloyId633.addEventListener("click", submit) : __defers["$.__views.__alloyId633!click!submit"] = true;
    $.__views.__alloyId634 = Ti.UI.createLabel({
        text: "Submit",
        color: "white",
        id: "__alloyId634"
    });
    $.__views.__alloyId633.add($.__views.__alloyId634);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 150;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 150;
        $.scrollView.overScrollMode = Titanium.UI.Android.OVER_SCROLL_NEVER;
    }
    var plan;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId606!click!back"] && $.__views.__alloyId606.addEventListener("click", back);
    __defers["$.__views.planLabel!click!showPicker"] && $.__views.planLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId626!click!showPicker"] && $.__views.__alloyId626.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!plan"] && $.__views.picker.addEventListener("change", plan);
    __defers["$.__views.__alloyId633!click!submit"] && $.__views.__alloyId633.addEventListener("click", submit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;