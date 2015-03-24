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
    function paymentType(e) {
        console.log("paymentType");
        paymentType = e.row.title;
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
    $.__views.__alloyId1883 = Alloy.createController("_header", {
        id: "__alloyId1883",
        __parentSymbol: $.__views.prepaidStatement
    });
    $.__views.__alloyId1883.setParent($.__views.prepaidStatement);
    $.__views.__alloyId1884 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1884"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1884);
    $.__views.__alloyId1885 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1885"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1885);
    $.__views.__alloyId1886 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1886"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1886);
    back ? $.__views.__alloyId1886.addEventListener("click", back) : __defers["$.__views.__alloyId1886!click!back"] = true;
    $.__views.__alloyId1887 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1887"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1887);
    $.__views.__alloyId1888 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId1888"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1888);
    $.__views.__alloyId1889 = Ti.UI.createLabel({
        text: "Prepaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1889"
    });
    $.__views.__alloyId1888.add($.__views.__alloyId1889);
    $.__views.__alloyId1890 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId1890"
    });
    $.__views.__alloyId1888.add($.__views.__alloyId1890);
    $.__views.__alloyId1891 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId1891"
    });
    $.__views.__alloyId1890.add($.__views.__alloyId1891);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "90%",
        top: "10",
        bottom: "10",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1891.add($.__views.picker);
    var __alloyId1892 = [];
    $.__views.__alloyId1893 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1893"
    });
    __alloyId1892.push($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1894"
    });
    __alloyId1892.push($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1895"
    });
    __alloyId1892.push($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1896"
    });
    __alloyId1892.push($.__views.__alloyId1896);
    $.__views.__alloyId1897 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1897"
    });
    __alloyId1892.push($.__views.__alloyId1897);
    $.__views.picker.add(__alloyId1892);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1898 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId1898"
    });
    $.__views.__alloyId1891.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "200",
        backgroundColor: "white",
        id: "__alloyId1899"
    });
    $.__views.prepaidStatement.add($.__views.__alloyId1899);
    $.__views.__alloyId1900 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1900"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "100%",
        id: "__alloyId1901"
    });
    $.__views.__alloyId1900.add($.__views.__alloyId1901);
    $.__views.__alloyId1902 = Ti.UI.createLabel({
        text: "For more details on your bill statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1902"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1902);
    $.__views.__alloyId1903 = Ti.UI.createLabel({
        text: "kindly log on to https://selfcare.xox.com.my",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1903"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1903);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1886!click!back"] && $.__views.__alloyId1886.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;