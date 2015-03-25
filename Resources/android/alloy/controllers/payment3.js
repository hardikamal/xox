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
        DRAWER.navigation("myAccount", 1);
    }
    function proceed() {
        DRAWER.navigation("payment6", 1);
    }
    function paymentType(e) {
        console.log("paymentType");
        paymentType = e.row.title;
    }
    function paymentType2(e) {
        console.log("paymentType");
        paymentType2 = e.row.title;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment3";
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
    $.__views.payment3 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "payment3"
    });
    $.__views.payment3 && $.addTopLevelView($.__views.payment3);
    $.__views.__alloyId1670 = Alloy.createController("_header", {
        id: "__alloyId1670",
        __parentSymbol: $.__views.payment3
    });
    $.__views.__alloyId1670.setParent($.__views.payment3);
    $.__views.__alloyId1671 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1671"
    });
    $.__views.payment3.add($.__views.__alloyId1671);
    $.__views.__alloyId1672 = Ti.UI.createLabel({
        color: "white",
        backgroundColor: "transparent",
        font: {
            fontSize: "18dp"
        },
        text: "Payment",
        left: "20",
        id: "__alloyId1672"
    });
    $.__views.__alloyId1671.add($.__views.__alloyId1672);
    $.__views.__alloyId1673 = Ti.UI.createImageView({
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
        id: "__alloyId1673"
    });
    $.__views.__alloyId1671.add($.__views.__alloyId1673);
    back ? $.__views.__alloyId1673.addEventListener("click", back) : __defers["$.__views.__alloyId1673!click!back"] = true;
    $.__views.__alloyId1674 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1674"
    });
    $.__views.payment3.add($.__views.__alloyId1674);
    $.__views.__alloyId1675 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Prepaid Top Up",
        top: "15",
        left: "20",
        id: "__alloyId1675"
    });
    $.__views.__alloyId1674.add($.__views.__alloyId1675);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.payment3.add($.__views.scrollView);
    $.__views.__alloyId1676 = Ti.UI.createView({
        layout: "vertical",
        height: "180",
        bottom: "5",
        id: "__alloyId1676"
    });
    $.__views.scrollView.add($.__views.__alloyId1676);
    $.__views.__alloyId1677 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Mobile Number",
        top: "20",
        textAlign: "center",
        id: "__alloyId1677"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1677);
    $.__views.__alloyId1678 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "25dp",
            fontWeight: "bold"
        },
        text: "01x 0000000",
        textAlign: "center",
        id: "__alloyId1678"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1678);
    $.__views.__alloyId1679 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Current Balance (RM)",
        top: "20",
        textAlign: "center",
        id: "__alloyId1679"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1679);
    $.__views.__alloyId1680 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "40dp",
            fontWeight: "bold"
        },
        text: "00.00",
        textAlign: "center",
        id: "__alloyId1680"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1680);
    $.__views.__alloyId1681 = Ti.UI.createView({
        backgroundColor: "#F1F1F1",
        width: "100%",
        height: "2",
        top: "10",
        id: "__alloyId1681"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1681);
    $.__views.__alloyId1682 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1682"
    });
    $.__views.scrollView.add($.__views.__alloyId1682);
    $.__views.__alloyId1683 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "12dp"
        },
        text: "Top Up Amount",
        textAlign: "center",
        id: "__alloyId1683"
    });
    $.__views.__alloyId1682.add($.__views.__alloyId1683);
    $.__views.__alloyId1684 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId1684"
    });
    $.__views.__alloyId1682.add($.__views.__alloyId1684);
    $.__views.__alloyId1685 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId1685"
    });
    $.__views.__alloyId1684.add($.__views.__alloyId1685);
    $.__views.picker2 = Ti.UI.createPicker({
        color: "black",
        backgroundColor: "black",
        font: {
            fontSize: "12dp"
        },
        id: "picker2",
        width: "100%",
        height: "50",
        borderRadius: "10",
        selectionIndicator: "true",
        visible: "true"
    });
    $.__views.__alloyId1685.add($.__views.picker2);
    var __alloyId1686 = [];
    $.__views.__alloyId1687 = Ti.UI.createPickerRow({
        title: "Amount",
        id: "__alloyId1687"
    });
    __alloyId1686.push($.__views.__alloyId1687);
    $.__views.__alloyId1688 = Ti.UI.createPickerRow({
        title: "RM10",
        id: "__alloyId1688"
    });
    __alloyId1686.push($.__views.__alloyId1688);
    $.__views.__alloyId1689 = Ti.UI.createPickerRow({
        title: "RM30",
        id: "__alloyId1689"
    });
    __alloyId1686.push($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createPickerRow({
        title: "RM50",
        id: "__alloyId1690"
    });
    __alloyId1686.push($.__views.__alloyId1690);
    $.__views.__alloyId1691 = Ti.UI.createPickerRow({
        title: "RM100",
        id: "__alloyId1691"
    });
    __alloyId1686.push($.__views.__alloyId1691);
    $.__views.picker2.add(__alloyId1686);
    paymentType2 ? $.__views.picker2.addEventListener("change", paymentType2) : __defers["$.__views.picker2!change!paymentType2"] = true;
    $.__views.__alloyId1692 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "20",
        top: "25",
        id: "__alloyId1692"
    });
    $.__views.__alloyId1685.add($.__views.__alloyId1692);
    $.__views.__alloyId1693 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        top: "10",
        id: "__alloyId1693"
    });
    $.__views.scrollView.add($.__views.__alloyId1693);
    $.__views.__alloyId1694 = Ti.UI.createLabel({
        color: "black",
        backgroundColor: "transparent",
        font: {
            fontSize: "12dp"
        },
        text: "Payment Method",
        textAlign: "center",
        id: "__alloyId1694"
    });
    $.__views.__alloyId1693.add($.__views.__alloyId1694);
    $.__views.__alloyId1695 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId1695"
    });
    $.__views.__alloyId1693.add($.__views.__alloyId1695);
    $.__views.__alloyId1696 = Ti.UI.createView({
        layout: "composite",
        id: "__alloyId1696"
    });
    $.__views.__alloyId1695.add($.__views.__alloyId1696);
    $.__views.picker = Ti.UI.createPicker({
        color: "black",
        backgroundColor: "black",
        font: {
            fontSize: "12dp"
        },
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "10",
        selectionIndicator: "true",
        visible: "true"
    });
    $.__views.__alloyId1696.add($.__views.picker);
    var __alloyId1697 = [];
    $.__views.__alloyId1698 = Ti.UI.createPickerRow({
        title: "Online Banking",
        id: "__alloyId1698"
    });
    __alloyId1697.push($.__views.__alloyId1698);
    $.__views.__alloyId1699 = Ti.UI.createPickerRow({
        title: "Debit Card",
        id: "__alloyId1699"
    });
    __alloyId1697.push($.__views.__alloyId1699);
    $.__views.__alloyId1700 = Ti.UI.createPickerRow({
        title: "Credit Card",
        id: "__alloyId1700"
    });
    __alloyId1697.push($.__views.__alloyId1700);
    $.__views.picker.add(__alloyId1697);
    paymentType ? $.__views.picker.addEventListener("change", paymentType) : __defers["$.__views.picker!change!paymentType"] = true;
    $.__views.__alloyId1701 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "20",
        top: "25",
        id: "__alloyId1701"
    });
    $.__views.__alloyId1696.add($.__views.__alloyId1701);
    $.__views.__alloyId1702 = Ti.UI.createView({
        height: "50",
        backgroundColor: "red",
        id: "__alloyId1702"
    });
    $.__views.payment3.add($.__views.__alloyId1702);
    proceed ? $.__views.__alloyId1702.addEventListener("click", proceed) : __defers["$.__views.__alloyId1702!click!proceed"] = true;
    $.__views.__alloyId1703 = Ti.UI.createLabel({
        color: "white",
        backgroundColor: "transparent",
        font: {
            fontSize: "14dp"
        },
        text: "Submit",
        id: "__alloyId1703"
    });
    $.__views.__alloyId1702.add($.__views.__alloyId1703);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    console.log("android");
    $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    var paymentType;
    __defers["$.__views.__alloyId1673!click!back"] && $.__views.__alloyId1673.addEventListener("click", back);
    __defers["$.__views.picker2!change!paymentType2"] && $.__views.picker2.addEventListener("change", paymentType2);
    __defers["$.__views.picker!change!paymentType"] && $.__views.picker.addEventListener("change", paymentType);
    __defers["$.__views.__alloyId1702!click!proceed"] && $.__views.__alloyId1702.addEventListener("click", proceed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;