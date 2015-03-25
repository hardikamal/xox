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
    $.__views.__alloyId2055 = Alloy.createController("_header", {
        id: "__alloyId2055",
        __parentSymbol: $.__views.prepaidStatement
    });
    $.__views.__alloyId2055.setParent($.__views.prepaidStatement);
    $.__views.__alloyId2056 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId2056"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId2056);
    $.__views.__alloyId2057 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId2057"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2057);
    $.__views.__alloyId2058 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId2058"
    });
    $.__views.__alloyId2056.add($.__views.__alloyId2058);
    back ? $.__views.__alloyId2058.addEventListener("click", back) : __defers["$.__views.__alloyId2058!click!back"] = true;
    $.__views.__alloyId2059 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId2059"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId2059);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "80",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId2059.add($.__views.contentView);
    $.__views.__alloyId2060 = Ti.UI.createLabel({
        text: "Prepaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId2060"
    });
    $.__views.contentView.add($.__views.__alloyId2060);
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
    var __alloyId2061 = [];
    $.__views.__alloyId2062 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId2062"
    });
    __alloyId2061.push($.__views.__alloyId2062);
    $.__views.__alloyId2063 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId2063"
    });
    __alloyId2061.push($.__views.__alloyId2063);
    $.__views.__alloyId2064 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId2064"
    });
    __alloyId2061.push($.__views.__alloyId2064);
    $.__views.__alloyId2065 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId2065"
    });
    __alloyId2061.push($.__views.__alloyId2065);
    $.__views.__alloyId2066 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId2066"
    });
    __alloyId2061.push($.__views.__alloyId2066);
    $.__views.picker.add(__alloyId2061);
    $.__views.__alloyId2067 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "200",
        backgroundColor: "white",
        id: "__alloyId2067"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId2067);
    $.__views.__alloyId2068 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId2068"
    });
    $.__views.__alloyId2067.add($.__views.__alloyId2068);
    $.__views.__alloyId2069 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "100%",
        id: "__alloyId2069"
    });
    $.__views.__alloyId2068.add($.__views.__alloyId2069);
    $.__views.__alloyId2070 = Ti.UI.createLabel({
        text: "For more details on your bill statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2070"
    });
    $.__views.__alloyId2069.add($.__views.__alloyId2070);
    $.__views.__alloyId2071 = Ti.UI.createLabel({
        text: "kindly log on to https://selfcare.xox.com.my",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId2071"
    });
    $.__views.__alloyId2069.add($.__views.__alloyId2071);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2058!click!back"] && $.__views.__alloyId2058.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;