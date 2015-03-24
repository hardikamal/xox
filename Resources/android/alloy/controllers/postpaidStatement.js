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
    $.__views.__alloyId1545 = Alloy.createController("_header", {
        id: "__alloyId1545",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1545.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1546 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1546"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1547"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1548"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1548);
    back ? $.__views.__alloyId1548.addEventListener("click", back) : __defers["$.__views.__alloyId1548!click!back"] = true;
    $.__views.__alloyId1549 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1549"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId1550"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1550);
    $.__views.__alloyId1551 = Ti.UI.createLabel({
        text: "Postpaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1551"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1551);
    $.__views.__alloyId1552 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId1552"
    });
    $.__views.__alloyId1550.add($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId1553"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1553);
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
    $.__views.__alloyId1553.add($.__views.picker);
    var __alloyId1554 = [];
    $.__views.__alloyId1555 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1555"
    });
    __alloyId1554.push($.__views.__alloyId1555);
    $.__views.__alloyId1556 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1556"
    });
    __alloyId1554.push($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1557"
    });
    __alloyId1554.push($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1558"
    });
    __alloyId1554.push($.__views.__alloyId1558);
    $.__views.__alloyId1559 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1559"
    });
    __alloyId1554.push($.__views.__alloyId1559);
    $.__views.picker.add(__alloyId1554);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1560 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId1560"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "370",
        backgroundColor: "white",
        id: "__alloyId1561"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1562"
    });
    $.__views.__alloyId1561.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "100%",
        id: "__alloyId1563"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1563);
    $.__views.__alloyId1564 = Ti.UI.createLabel({
        text: "For more details on your bill statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1564"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1564);
    $.__views.__alloyId1565 = Ti.UI.createLabel({
        text: "kindly log on to https://selfcare.xox.com.my",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1565"
    });
    $.__views.__alloyId1563.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1566"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1566);
    download ? $.__views.__alloyId1566.addEventListener("click", download) : __defers["$.__views.__alloyId1566!click!download"] = true;
    $.__views.__alloyId1567 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1567"
    });
    $.__views.__alloyId1566.add($.__views.__alloyId1567);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1548!click!back"] && $.__views.__alloyId1548.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1566!click!download"] && $.__views.__alloyId1566.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;