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
    $.__views.__alloyId1852 = Alloy.createController("_header", {
        id: "__alloyId1852",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1852.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1853 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1853"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1853);
    $.__views.__alloyId1854 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1854"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1854);
    $.__views.__alloyId1855 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1855"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1855);
    back ? $.__views.__alloyId1855.addEventListener("click", back) : __defers["$.__views.__alloyId1855!click!back"] = true;
    $.__views.__alloyId1856 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1856"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1856);
    $.__views.__alloyId1857 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId1857"
    });
    $.__views.__alloyId1856.add($.__views.__alloyId1857);
    $.__views.__alloyId1858 = Ti.UI.createLabel({
        text: "Postpaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1858"
    });
    $.__views.__alloyId1857.add($.__views.__alloyId1858);
    $.__views.__alloyId1859 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId1859"
    });
    $.__views.__alloyId1857.add($.__views.__alloyId1859);
    $.__views.__alloyId1860 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId1860"
    });
    $.__views.__alloyId1859.add($.__views.__alloyId1860);
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
    $.__views.__alloyId1860.add($.__views.picker);
    var __alloyId1861 = [];
    $.__views.__alloyId1862 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1862"
    });
    __alloyId1861.push($.__views.__alloyId1862);
    $.__views.__alloyId1863 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1863"
    });
    __alloyId1861.push($.__views.__alloyId1863);
    $.__views.__alloyId1864 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1864"
    });
    __alloyId1861.push($.__views.__alloyId1864);
    $.__views.__alloyId1865 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1865"
    });
    __alloyId1861.push($.__views.__alloyId1865);
    $.__views.__alloyId1866 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1866"
    });
    __alloyId1861.push($.__views.__alloyId1866);
    $.__views.picker.add(__alloyId1861);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1867 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId1867"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1867);
    $.__views.__alloyId1868 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "370",
        backgroundColor: "white",
        id: "__alloyId1868"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1868);
    $.__views.__alloyId1869 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1869"
    });
    $.__views.__alloyId1868.add($.__views.__alloyId1869);
    $.__views.__alloyId1870 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "100%",
        id: "__alloyId1870"
    });
    $.__views.__alloyId1869.add($.__views.__alloyId1870);
    $.__views.__alloyId1871 = Ti.UI.createLabel({
        text: "For more details on your bill statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1871"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1871);
    $.__views.__alloyId1872 = Ti.UI.createLabel({
        text: "kindly log on to https://selfcare.xox.com.my",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1872"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1872);
    $.__views.__alloyId1873 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1873"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1873);
    download ? $.__views.__alloyId1873.addEventListener("click", download) : __defers["$.__views.__alloyId1873!click!download"] = true;
    $.__views.__alloyId1874 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1874"
    });
    $.__views.__alloyId1873.add($.__views.__alloyId1874);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1855!click!back"] && $.__views.__alloyId1855.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1873!click!download"] && $.__views.__alloyId1873.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;