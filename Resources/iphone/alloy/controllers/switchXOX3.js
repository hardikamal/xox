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
    function find(e) {
        console.log("find");
        find = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.findLabel.text = find);
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
    function back() {
        DRAWER.navigation("switchXOX2", 1);
    }
    function proceed() {
        console.log("proceed");
        DRAWER.navigation("onlinePurchases", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "switchXOX3";
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
    $.__views.switchXOX3 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "switchXOX3"
    });
    $.__views.switchXOX3 && $.addTopLevelView($.__views.switchXOX3);
    $.__views.__alloyId2862 = Alloy.createController("_header", {
        id: "__alloyId2862",
        __parentSymbol: $.__views.switchXOX3
    });
    $.__views.__alloyId2862.setParent($.__views.switchXOX3);
    $.__views.__alloyId2863 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId2863"
    });
    $.__views.switchXOX3.add($.__views.__alloyId2863);
    $.__views.__alloyId2864 = Ti.UI.createLabel({
        text: "#1758 SWITCH TO XOX",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
        id: "__alloyId2864"
    });
    $.__views.__alloyId2863.add($.__views.__alloyId2864);
    $.__views.__alloyId2865 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2865"
    });
    $.__views.__alloyId2863.add($.__views.__alloyId2865);
    back ? $.__views.__alloyId2865.addEventListener("click", back) : __defers["$.__views.__alloyId2865!click!back"] = true;
    $.__views.__alloyId2866 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2866"
    });
    $.__views.switchXOX3.add($.__views.__alloyId2866);
    $.__views.__alloyId2867 = Ti.UI.createLabel({
        text: "Step 2 of 2",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
        id: "__alloyId2867"
    });
    $.__views.__alloyId2866.add($.__views.__alloyId2867);
    $.__views.__alloyId2868 = Ti.UI.createLabel({
        text: "Question",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId2868"
    });
    $.__views.__alloyId2866.add($.__views.__alloyId2868);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        backgroundColor: "white",
        width: "90%"
    });
    $.__views.switchXOX3.add($.__views.scrollView);
    $.__views.__alloyId2869 = Ti.UI.createLabel({
        text: "How did you find out about us?",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "0",
        top: "10",
        id: "__alloyId2869"
    });
    $.__views.scrollView.add($.__views.__alloyId2869);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "100%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.findLabel = Ti.UI.createLabel({
        id: "findLabel",
        height: "30",
        width: "99%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.findLabel);
    showPicker ? $.__views.findLabel.addEventListener("click", showPicker) : __defers["$.__views.findLabel!click!showPicker"] = true;
    $.__views.__alloyId2870 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId2870"
    });
    $.__views.pickerContentView.add($.__views.__alloyId2870);
    showPicker ? $.__views.__alloyId2870.addEventListener("click", showPicker) : __defers["$.__views.__alloyId2870!click!showPicker"] = true;
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
    var __alloyId2871 = [];
    $.__views.__alloyId2872 = Ti.UI.createPickerRow({
        title: "None",
        id: "__alloyId2872"
    });
    __alloyId2871.push($.__views.__alloyId2872);
    $.__views.__alloyId2873 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId2873"
    });
    __alloyId2871.push($.__views.__alloyId2873);
    $.__views.__alloyId2874 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId2874"
    });
    __alloyId2871.push($.__views.__alloyId2874);
    $.__views.__alloyId2875 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId2875"
    });
    __alloyId2871.push($.__views.__alloyId2875);
    $.__views.picker.add(__alloyId2871);
    find ? $.__views.picker.addEventListener("change", find) : __defers["$.__views.picker!change!find"] = true;
    $.__views.__alloyId2876 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId2876"
    });
    $.__views.switchXOX3.add($.__views.__alloyId2876);
    proceed ? $.__views.__alloyId2876.addEventListener("click", proceed) : __defers["$.__views.__alloyId2876!click!proceed"] = true;
    $.__views.__alloyId2877 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId2877"
    });
    $.__views.__alloyId2876.add($.__views.__alloyId2877);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    $.picker.setSelectedRow(0, 0, false);
    var find;
    __defers["$.__views.__alloyId2865!click!back"] && $.__views.__alloyId2865.addEventListener("click", back);
    __defers["$.__views.findLabel!click!showPicker"] && $.__views.findLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId2870!click!showPicker"] && $.__views.__alloyId2870.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!find"] && $.__views.picker.addEventListener("change", find);
    __defers["$.__views.__alloyId2876!click!proceed"] && $.__views.__alloyId2876.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;