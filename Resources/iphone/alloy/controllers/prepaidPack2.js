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
        DRAWER.navigation("prepaidPack", 1);
    }
    function proceed() {
        DRAWER.navigation("prepaidPack3", 1);
        console.log("proceed");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack2";
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
    $.__views.prepaidPack2 = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack2"
    });
    $.__views.prepaidPack2 && $.addTopLevelView($.__views.prepaidPack2);
<<<<<<< HEAD
    $.__views.__alloyId1580 = Alloy.createController("_header", {
        id: "__alloyId1580",
=======
<<<<<<< HEAD
    $.__views.__alloyId1745 = Alloy.createController("_header", {
        id: "__alloyId1745",
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId1745.setParent($.__views.prepaidPack2);
    $.__views.__alloyId1746 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1746"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1746);
    $.__views.__alloyId1747 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1248 = Alloy.createController("_header", {
        id: "__alloyId1248",
>>>>>>> origin/master
        __parentSymbol: $.__views.prepaidPack2
    });
    $.__views.__alloyId1580.setParent($.__views.prepaidPack2);
    $.__views.__alloyId1581 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1581"
    });
<<<<<<< HEAD
    $.__views.prepaidPack2.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
=======
    $.__views.prepaidPack2.add($.__views.__alloyId1249);
    $.__views.__alloyId1250 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1582"
    });
    $.__views.__alloyId1581.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1747"
    });
    $.__views.__alloyId1746.add($.__views.__alloyId1747);
    $.__views.__alloyId1748 = Ti.UI.createImageView({
=======
        id: "__alloyId1250"
    });
    $.__views.__alloyId1249.add($.__views.__alloyId1250);
    $.__views.__alloyId1251 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1583"
=======
<<<<<<< HEAD
        id: "__alloyId1748"
    });
    $.__views.__alloyId1746.add($.__views.__alloyId1748);
    back ? $.__views.__alloyId1748.addEventListener("click", back) : __defers["$.__views.__alloyId1748!click!back"] = true;
    $.__views.__alloyId1749 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1749"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1749);
    $.__views.__alloyId1750 = Ti.UI.createLabel({
=======
        id: "__alloyId1251"
>>>>>>> origin/master
    });
    $.__views.__alloyId1581.add($.__views.__alloyId1583);
    back ? $.__views.__alloyId1583.addEventListener("click", back) : __defers["$.__views.__alloyId1583!click!back"] = true;
    $.__views.__alloyId1584 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1584"
    });
<<<<<<< HEAD
    $.__views.prepaidPack2.add($.__views.__alloyId1584);
    $.__views.__alloyId1585 = Ti.UI.createLabel({
=======
    $.__views.prepaidPack2.add($.__views.__alloyId1252);
    $.__views.__alloyId1253 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Step 2 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1585"
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1585);
    $.__views.__alloyId1586 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1750"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1750);
    $.__views.__alloyId1751 = Ti.UI.createLabel({
=======
        id: "__alloyId1253"
    });
    $.__views.__alloyId1252.add($.__views.__alloyId1253);
    $.__views.__alloyId1254 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Registration",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1586"
=======
<<<<<<< HEAD
        id: "__alloyId1751"
    });
    $.__views.__alloyId1749.add($.__views.__alloyId1751);
    $.__views.__alloyId1752 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId1752"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1752);
=======
        id: "__alloyId1254"
>>>>>>> origin/master
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        backgroundColor: "#2f4f4f",
        id: "__alloyId1587"
    });
<<<<<<< HEAD
    $.__views.prepaidPack2.add($.__views.__alloyId1587);
=======
    $.__views.prepaidPack2.add($.__views.__alloyId1255);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.prepaid_subtitle = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "PERSONAL DETAILS",
        id: "prepaid_subtitle",
        backgroundColor: "transparent",
        color: "white",
        top: "5",
        left: "20",
        width: "38%"
    });
<<<<<<< HEAD
    $.__views.__alloyId1587.add($.__views.prepaid_subtitle);
=======
<<<<<<< HEAD
    $.__views.__alloyId1752.add($.__views.prepaid_subtitle);
=======
    $.__views.__alloyId1255.add($.__views.prepaid_subtitle);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.prepaid_mandatory = Ti.UI.createLabel({
        font: {
            fontSize: "12dp"
        },
        text: "*Please fill in the Mandatory field",
        id: "prepaid_mandatory",
        backgroundColor: "transparent",
        color: "red",
        width: "50%",
        top: "5"
    });
<<<<<<< HEAD
    $.__views.__alloyId1587.add($.__views.prepaid_mandatory);
=======
<<<<<<< HEAD
    $.__views.__alloyId1752.add($.__views.prepaid_mandatory);
=======
    $.__views.__alloyId1255.add($.__views.prepaid_mandatory);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack2.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "80",
        bottom: "5",
        top: "5"
    });
    $.__views.scrollView.add($.__views.contentView);
<<<<<<< HEAD
    $.__views.__alloyId1588 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1753 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1256 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Salutation*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1588"
    });
    $.__views.contentView.add($.__views.__alloyId1588);
=======
<<<<<<< HEAD
        id: "__alloyId1753"
    });
    $.__views.contentView.add($.__views.__alloyId1753);
=======
        id: "__alloyId1256"
    });
    $.__views.contentView.add($.__views.__alloyId1256);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.contentView.add($.__views.picker);
<<<<<<< HEAD
    var __alloyId1589 = [];
    $.__views.__alloyId1590 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId1754 = [];
    $.__views.__alloyId1755 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1755"
    });
    __alloyId1754.push($.__views.__alloyId1755);
    $.__views.__alloyId1756 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1756"
    });
    __alloyId1754.push($.__views.__alloyId1756);
    $.__views.__alloyId1757 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1757"
    });
    __alloyId1754.push($.__views.__alloyId1757);
    $.__views.picker.add(__alloyId1754);
    $.__views.__alloyId1758 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1758"
    });
    $.__views.scrollView.add($.__views.__alloyId1758);
    $.__views.__alloyId1759 = Ti.UI.createLabel({
=======
    var __alloyId1257 = [];
    $.__views.__alloyId1258 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "Select an option",
        id: "__alloyId1590"
    });
    __alloyId1589.push($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1591"
    });
    __alloyId1589.push($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1592"
    });
    __alloyId1589.push($.__views.__alloyId1592);
    $.__views.picker.add(__alloyId1589);
    $.__views.__alloyId1593 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1593"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1593);
    $.__views.__alloyId1594 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId1261);
    $.__views.__alloyId1262 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Name (as per NRIC/ Armed Force ID/ Passport)*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1594"
    });
    $.__views.__alloyId1593.add($.__views.__alloyId1594);
    $.__views.__alloyId1595 = Ti.UI.createTextField({
=======
<<<<<<< HEAD
        id: "__alloyId1759"
    });
    $.__views.__alloyId1758.add($.__views.__alloyId1759);
    $.__views.__alloyId1760 = Ti.UI.createTextField({
=======
        id: "__alloyId1262"
    });
    $.__views.__alloyId1261.add($.__views.__alloyId1262);
    $.__views.__alloyId1263 = Ti.UI.createTextField({
>>>>>>> origin/master
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId1595"
    });
    $.__views.__alloyId1593.add($.__views.__alloyId1595);
=======
<<<<<<< HEAD
        id: "__alloyId1760"
    });
    $.__views.__alloyId1758.add($.__views.__alloyId1760);
=======
        id: "__alloyId1263"
    });
    $.__views.__alloyId1261.add($.__views.__alloyId1263);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.contentView2 = Ti.UI.createView({
        id: "contentView2",
        layout: "vertical",
        height: "80",
        bottom: "5"
    });
    $.__views.scrollView.add($.__views.contentView2);
<<<<<<< HEAD
    $.__views.__alloyId1596 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1761 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1264 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Reg Type*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1596"
    });
    $.__views.contentView2.add($.__views.__alloyId1596);
=======
<<<<<<< HEAD
        id: "__alloyId1761"
    });
    $.__views.contentView2.add($.__views.__alloyId1761);
=======
        id: "__alloyId1264"
    });
    $.__views.contentView2.add($.__views.__alloyId1264);
>>>>>>> origin/master
>>>>>>> origin/master
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        height: Ti.UI.SIZE,
        width: "100%",
        top: "10",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
        visible: "true"
    });
    $.__views.contentView2.add($.__views.picker);
<<<<<<< HEAD
    var __alloyId1597 = [];
    $.__views.__alloyId1598 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId1762 = [];
    $.__views.__alloyId1763 = Ti.UI.createPickerRow({
        title: "Select an option",
        id: "__alloyId1763"
    });
    __alloyId1762.push($.__views.__alloyId1763);
    $.__views.__alloyId1764 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1764"
    });
    __alloyId1762.push($.__views.__alloyId1764);
    $.__views.__alloyId1765 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1765"
    });
    __alloyId1762.push($.__views.__alloyId1765);
    $.__views.picker.add(__alloyId1762);
    $.__views.__alloyId1766 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1766"
    });
    $.__views.scrollView.add($.__views.__alloyId1766);
    $.__views.__alloyId1767 = Ti.UI.createLabel({
=======
    var __alloyId1265 = [];
    $.__views.__alloyId1266 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "Select an option",
        id: "__alloyId1598"
    });
    __alloyId1597.push($.__views.__alloyId1598);
    $.__views.__alloyId1599 = Ti.UI.createPickerRow({
        title: "1",
        id: "__alloyId1599"
    });
    __alloyId1597.push($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createPickerRow({
        title: "2",
        id: "__alloyId1600"
    });
    __alloyId1597.push($.__views.__alloyId1600);
    $.__views.picker.add(__alloyId1597);
    $.__views.__alloyId1601 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1601"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1601);
    $.__views.__alloyId1602 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId1269);
    $.__views.__alloyId1270 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1602"
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createTextField({
=======
<<<<<<< HEAD
        id: "__alloyId1767"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1767);
    $.__views.__alloyId1768 = Ti.UI.createTextField({
=======
        id: "__alloyId1270"
    });
    $.__views.__alloyId1269.add($.__views.__alloyId1270);
    $.__views.__alloyId1271 = Ti.UI.createTextField({
>>>>>>> origin/master
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId1603"
=======
<<<<<<< HEAD
        id: "__alloyId1768"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1768);
    $.__views.__alloyId1769 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1769"
    });
    $.__views.scrollView.add($.__views.__alloyId1769);
    $.__views.__alloyId1770 = Ti.UI.createLabel({
=======
        id: "__alloyId1271"
>>>>>>> origin/master
    });
    $.__views.__alloyId1601.add($.__views.__alloyId1603);
    $.__views.__alloyId1604 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1604"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1604);
    $.__views.__alloyId1605 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId1272);
    $.__views.__alloyId1273 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Retype NRIC No. / Armed Force ID / Passport*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1605"
    });
    $.__views.__alloyId1604.add($.__views.__alloyId1605);
    $.__views.__alloyId1606 = Ti.UI.createTextField({
=======
<<<<<<< HEAD
        id: "__alloyId1770"
    });
    $.__views.__alloyId1769.add($.__views.__alloyId1770);
    $.__views.__alloyId1771 = Ti.UI.createTextField({
=======
        id: "__alloyId1273"
    });
    $.__views.__alloyId1272.add($.__views.__alloyId1273);
    $.__views.__alloyId1274 = Ti.UI.createTextField({
>>>>>>> origin/master
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId1606"
=======
<<<<<<< HEAD
        id: "__alloyId1771"
    });
    $.__views.__alloyId1769.add($.__views.__alloyId1771);
    $.__views.__alloyId1772 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1772"
    });
    $.__views.scrollView.add($.__views.__alloyId1772);
    $.__views.__alloyId1773 = Ti.UI.createLabel({
=======
        id: "__alloyId1274"
>>>>>>> origin/master
    });
    $.__views.__alloyId1604.add($.__views.__alloyId1606);
    $.__views.__alloyId1607 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        bottom: "5",
        id: "__alloyId1607"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1607);
    $.__views.__alloyId1608 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId1275);
    $.__views.__alloyId1276 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> origin/master
        text: "Date of Birth*",
        color: "black",
        height: "20",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1608"
    });
    $.__views.__alloyId1607.add($.__views.__alloyId1608);
    $.__views.__alloyId1609 = Ti.UI.createTextField({
=======
<<<<<<< HEAD
        id: "__alloyId1773"
    });
    $.__views.__alloyId1772.add($.__views.__alloyId1773);
    $.__views.__alloyId1774 = Ti.UI.createTextField({
=======
        id: "__alloyId1276"
    });
    $.__views.__alloyId1275.add($.__views.__alloyId1276);
    $.__views.__alloyId1277 = Ti.UI.createTextField({
>>>>>>> origin/master
>>>>>>> origin/master
        height: "40",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId1609"
=======
<<<<<<< HEAD
        id: "__alloyId1774"
    });
    $.__views.__alloyId1772.add($.__views.__alloyId1774);
    $.__views.__alloyId1775 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1775"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1775);
    proceed ? $.__views.__alloyId1775.addEventListener("click", proceed) : __defers["$.__views.__alloyId1775!click!proceed"] = true;
    $.__views.__alloyId1776 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1776"
    });
    $.__views.__alloyId1775.add($.__views.__alloyId1776);
=======
        id: "__alloyId1277"
>>>>>>> origin/master
    });
    $.__views.__alloyId1607.add($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1610"
    });
    $.__views.prepaidPack2.add($.__views.__alloyId1610);
    proceed ? $.__views.__alloyId1610.addEventListener("click", proceed) : __defers["$.__views.__alloyId1610!click!proceed"] = true;
    $.__views.__alloyId1611 = Ti.UI.createLabel({
        text: "PROCEED",
        color: "white",
        id: "__alloyId1611"
    });
<<<<<<< HEAD
    $.__views.__alloyId1610.add($.__views.__alloyId1611);
=======
    $.__views.__alloyId1278.add($.__views.__alloyId1279);
>>>>>>> origin/master
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 230;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 230;
    }
<<<<<<< HEAD
    __defers["$.__views.__alloyId1583!click!back"] && $.__views.__alloyId1583.addEventListener("click", back);
    __defers["$.__views.__alloyId1610!click!proceed"] && $.__views.__alloyId1610.addEventListener("click", proceed);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1748!click!back"] && $.__views.__alloyId1748.addEventListener("click", back);
    __defers["$.__views.__alloyId1775!click!proceed"] && $.__views.__alloyId1775.addEventListener("click", proceed);
=======
    __defers["$.__views.__alloyId1251!click!back"] && $.__views.__alloyId1251.addEventListener("click", back);
    __defers["$.__views.__alloyId1278!click!proceed"] && $.__views.__alloyId1278.addEventListener("click", proceed);
>>>>>>> origin/master
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;