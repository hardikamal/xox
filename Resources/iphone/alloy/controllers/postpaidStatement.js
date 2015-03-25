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
    function download() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "postpaidStatement";
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
    $.__views.postpaidStatement = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "postpaidStatement"
    });
    $.__views.postpaidStatement && $.addTopLevelView($.__views.postpaidStatement);
    $.__views.__alloyId1801 = Alloy.createController("_header", {
        id: "__alloyId1801",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1801.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1802 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1802"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1802);
    $.__views.__alloyId1803 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1803"
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1804"
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1804);
    back ? $.__views.__alloyId1804.addEventListener("click", back) : __defers["$.__views.__alloyId1804!click!back"] = true;
    $.__views.__alloyId1805 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1805"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1805);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId1805.add($.__views.contentView);
    $.__views.__alloyId1806 = Ti.UI.createLabel({
        text: "Postpaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1806"
    });
    $.__views.contentView.add($.__views.__alloyId1806);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        width: "70%",
        top: "10"
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
    var __alloyId1807 = [];
    $.__views.__alloyId1808 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1808"
    });
    __alloyId1807.push($.__views.__alloyId1808);
    $.__views.__alloyId1809 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1809"
    });
    __alloyId1807.push($.__views.__alloyId1809);
    $.__views.__alloyId1810 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1810"
    });
    __alloyId1807.push($.__views.__alloyId1810);
    $.__views.__alloyId1811 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1811"
    });
    __alloyId1807.push($.__views.__alloyId1811);
    $.__views.__alloyId1812 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1812"
    });
    __alloyId1807.push($.__views.__alloyId1812);
    $.__views.picker.add(__alloyId1807);
    $.__views.__alloyId1813 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "370",
        backgroundColor: "white",
        id: "__alloyId1813"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1813);
    $.__views.__alloyId1814 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1814"
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1814);
    $.__views.__alloyId1815 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "100%",
        id: "__alloyId1815"
    });
    $.__views.__alloyId1814.add($.__views.__alloyId1815);
    $.__views.__alloyId1816 = Ti.UI.createLabel({
        text: "For more details on your bill statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1816"
    });
    $.__views.__alloyId1815.add($.__views.__alloyId1816);
    $.__views.__alloyId1817 = Ti.UI.createLabel({
        text: "kindly log on to https://selfcare.xox.com.my",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1817"
    });
    $.__views.__alloyId1815.add($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1818"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1818);
    download ? $.__views.__alloyId1818.addEventListener("click", download) : __defers["$.__views.__alloyId1818!click!download"] = true;
    $.__views.__alloyId1819 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1819"
    });
    $.__views.__alloyId1818.add($.__views.__alloyId1819);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1804!click!back"] && $.__views.__alloyId1804.addEventListener("click", back);
    __defers["$.__views.__alloyId1818!click!download"] && $.__views.__alloyId1818.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;