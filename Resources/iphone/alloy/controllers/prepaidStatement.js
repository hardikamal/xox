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
        DRAWER.navigation("accountDetails2", 1);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidStatement";
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
    $.__views.prepaidStatement = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidStatement"
    });
    $.__views.prepaidStatement && $.addTopLevelView($.__views.prepaidStatement);
    $.__views.__alloyId2119 = Alloy.createController("_header", {
        id: "__alloyId2119",
        __parentSymbol: $.__views.prepaidStatement
    });
    $.__views.__alloyId2119.setParent($.__views.prepaidStatement);
    $.__views.__alloyId2120 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2120"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId2120);
    $.__views.__alloyId2121 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2121"
    });
    $.__views.__alloyId2120.add($.__views.__alloyId2121);
    $.__views.__alloyId2122 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2122"
    });
    $.__views.__alloyId2120.add($.__views.__alloyId2122);
    back ? $.__views.__alloyId2122.addEventListener("click", back) : __defers["$.__views.__alloyId2122!click!back"] = true;
    $.__views.__alloyId2123 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2123"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId2123);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId2123.add($.__views.contentView);
    $.__views.__alloyId2124 = Ti.UI.createLabel({
        text: "Prepaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId2124"
    });
    $.__views.contentView.add($.__views.__alloyId2124);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        top: "10",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.paymentLabel = Ti.UI.createLabel({
        id: "paymentLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.paymentLabel);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "90%",
        top: "10",
        bottom: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
    var __alloyId2125 = [];
    $.__views.__alloyId2126 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId2126"
    });
    __alloyId2125.push($.__views.__alloyId2126);
    $.__views.__alloyId2127 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId2127"
    });
    __alloyId2125.push($.__views.__alloyId2127);
    $.__views.__alloyId2128 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId2128"
    });
    __alloyId2125.push($.__views.__alloyId2128);
    $.__views.__alloyId2129 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId2129"
    });
    __alloyId2125.push($.__views.__alloyId2129);
    $.__views.__alloyId2130 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId2130"
    });
    __alloyId2125.push($.__views.__alloyId2130);
    $.__views.picker.add(__alloyId2125);
    $.__views.__alloyId2131 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "200",
        backgroundColor: "white",
        id: "__alloyId2131"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId2131);
    $.__views.__alloyId2132 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2132"
    });
    $.__views.__alloyId2131.add($.__views.__alloyId2132);
    $.__views.__alloyId2133 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "100%",
        id: "__alloyId2133"
    });
    $.__views.__alloyId2132.add($.__views.__alloyId2133);
    $.__views.__alloyId2134 = Ti.UI.createLabel({
        text: "For more details on your bill statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2134"
    });
    $.__views.__alloyId2133.add($.__views.__alloyId2134);
    $.__views.__alloyId2135 = Ti.UI.createLabel({
        text: "kindly log on to https://selfcare.xox.com.my",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2135"
    });
    $.__views.__alloyId2133.add($.__views.__alloyId2135);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2122!click!back"] && $.__views.__alloyId2122.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;