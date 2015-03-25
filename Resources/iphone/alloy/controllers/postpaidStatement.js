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
    $.__views.__alloyId1736 = Alloy.createController("_header", {
        id: "__alloyId1736",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1736.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1737 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1737"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1737);
    $.__views.__alloyId1738 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1738"
    });
    $.__views.__alloyId1737.add($.__views.__alloyId1738);
    $.__views.__alloyId1739 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1739"
    });
    $.__views.__alloyId1737.add($.__views.__alloyId1739);
    back ? $.__views.__alloyId1739.addEventListener("click", back) : __defers["$.__views.__alloyId1739!click!back"] = true;
    $.__views.__alloyId1740 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1740"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1740);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId1740.add($.__views.contentView);
    $.__views.__alloyId1741 = Ti.UI.createLabel({
        text: "Postpaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1741"
    });
    $.__views.contentView.add($.__views.__alloyId1741);
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
    var __alloyId1742 = [];
    $.__views.__alloyId1743 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1743"
    });
    __alloyId1742.push($.__views.__alloyId1743);
    $.__views.__alloyId1744 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1744"
    });
    __alloyId1742.push($.__views.__alloyId1744);
    $.__views.__alloyId1745 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1745"
    });
    __alloyId1742.push($.__views.__alloyId1745);
    $.__views.__alloyId1746 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1746"
    });
    __alloyId1742.push($.__views.__alloyId1746);
    $.__views.__alloyId1747 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1747"
    });
    __alloyId1742.push($.__views.__alloyId1747);
    $.__views.picker.add(__alloyId1742);
    $.__views.__alloyId1748 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "370",
        backgroundColor: "white",
        id: "__alloyId1748"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1748);
    $.__views.__alloyId1749 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1749"
    });
    $.__views.__alloyId1748.add($.__views.__alloyId1749);
    $.__views.__alloyId1750 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "100%",
        id: "__alloyId1750"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1750);
    $.__views.__alloyId1751 = Ti.UI.createLabel({
        text: "For more details on your bill statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1751"
    });
    $.__views.__alloyId1750.add($.__views.__alloyId1751);
    $.__views.__alloyId1752 = Ti.UI.createLabel({
        text: "kindly log on to https://selfcare.xox.com.my",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1752"
    });
    $.__views.__alloyId1750.add($.__views.__alloyId1752);
    $.__views.__alloyId1753 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1753"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1753);
    download ? $.__views.__alloyId1753.addEventListener("click", download) : __defers["$.__views.__alloyId1753!click!download"] = true;
    $.__views.__alloyId1754 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1754"
    });
    $.__views.__alloyId1753.add($.__views.__alloyId1754);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1739!click!back"] && $.__views.__alloyId1739.addEventListener("click", back);
    __defers["$.__views.__alloyId1753!click!download"] && $.__views.__alloyId1753.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;