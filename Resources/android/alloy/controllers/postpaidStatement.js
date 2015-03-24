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
    $.__views.__alloyId1594 = Alloy.createController("_header", {
        id: "__alloyId1594",
        __parentSymbol: $.__views.postpaidStatement
    });
    $.__views.__alloyId1594.setParent($.__views.postpaidStatement);
    $.__views.__alloyId1595 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#E91D2F",
        id: "__alloyId1595"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1595);
    $.__views.__alloyId1596 = Ti.UI.createLabel({
        text: "Bill Statement",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
        id: "__alloyId1596"
    });
    $.__views.__alloyId1595.add($.__views.__alloyId1596);
    $.__views.__alloyId1597 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1597"
    });
    $.__views.__alloyId1595.add($.__views.__alloyId1597);
    back ? $.__views.__alloyId1597.addEventListener("click", back) : __defers["$.__views.__alloyId1597!click!back"] = true;
    $.__views.__alloyId1598 = Ti.UI.createView({
        layout: "composite",
        height: "120",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1598"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1598);
    $.__views.__alloyId1599 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        bottom: "10",
        id: "__alloyId1599"
    });
    $.__views.__alloyId1598.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createLabel({
        text: "Postpaid Itemized Statement",
        textAlign: "center",
        color: "black",
        left: "10",
        id: "__alloyId1600"
    });
    $.__views.__alloyId1599.add($.__views.__alloyId1600);
    $.__views.__alloyId1601 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId1601"
    });
    $.__views.__alloyId1599.add($.__views.__alloyId1601);
    $.__views.__alloyId1602 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId1602"
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1602);
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
    $.__views.__alloyId1602.add($.__views.picker);
    var __alloyId1603 = [];
    $.__views.__alloyId1604 = Ti.UI.createPickerRow({
        title: "Current Month",
        id: "__alloyId1604"
    });
    __alloyId1603.push($.__views.__alloyId1604);
    $.__views.__alloyId1605 = Ti.UI.createPickerRow({
        title: "April",
        id: "__alloyId1605"
    });
    __alloyId1603.push($.__views.__alloyId1605);
    $.__views.__alloyId1606 = Ti.UI.createPickerRow({
        title: "May",
        id: "__alloyId1606"
    });
    __alloyId1603.push($.__views.__alloyId1606);
    $.__views.__alloyId1607 = Ti.UI.createPickerRow({
        title: "June",
        id: "__alloyId1607"
    });
    __alloyId1603.push($.__views.__alloyId1607);
    $.__views.__alloyId1608 = Ti.UI.createPickerRow({
        title: "July",
        id: "__alloyId1608"
    });
    __alloyId1603.push($.__views.__alloyId1608);
    $.__views.picker.add(__alloyId1603);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1609 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "25",
        top: "25",
        id: "__alloyId1609"
    });
    $.__views.__alloyId1602.add($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "370",
        backgroundColor: "white",
        id: "__alloyId1610"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "1",
        height: "50",
        width: "100%",
        backgroundColor: "white",
        id: "__alloyId1611"
    });
    $.__views.__alloyId1610.add($.__views.__alloyId1611);
    $.__views.__alloyId1612 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "100%",
        id: "__alloyId1612"
    });
    $.__views.__alloyId1611.add($.__views.__alloyId1612);
    $.__views.__alloyId1613 = Ti.UI.createLabel({
        text: "For more details on your bill statement",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1613"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1613);
    $.__views.__alloyId1614 = Ti.UI.createLabel({
        text: "kindly log on to https://selfcare.xox.com.my",
        backgroundColor: "transparent",
        color: "black",
        textAlign: "left",
        left: "10",
        id: "__alloyId1614"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1614);
    $.__views.__alloyId1615 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1615"
    });
    $.__views.postpaidStatement.add($.__views.__alloyId1615);
    download ? $.__views.__alloyId1615.addEventListener("click", download) : __defers["$.__views.__alloyId1615!click!download"] = true;
    $.__views.__alloyId1616 = Ti.UI.createLabel({
        text: "Download Bill",
        color: "white",
        id: "__alloyId1616"
    });
    $.__views.__alloyId1615.add($.__views.__alloyId1616);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1597!click!back"] && $.__views.__alloyId1597.addEventListener("click", back);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1615!click!download"] && $.__views.__alloyId1615.addEventListener("click", download);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;