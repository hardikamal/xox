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
        DRAWER.navigation("onlinePurchases", 1);
    }
    function showPicker() {
        console.log("showPicker");
        if ("false" == $.pickerView.visible) {
            $.contentView.height = 250;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            $.contentView.height = 250;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
    }
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.simLabel.text = simType);
    }
    function done() {
        console.log("done");
        $.contentView.height = 50;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
    }
    function highSpeed(e) {
        console.log("e.value: " + e.value);
    }
    function next() {
        DRAWER.navigation("prepaidPack2", 1);
        console.log("next");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaidPack";
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
    $.__views.prepaidPack = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaidPack"
    });
    $.__views.prepaidPack && $.addTopLevelView($.__views.prepaidPack);
<<<<<<< HEAD
    $.__views.__alloyId1650 = Alloy.createController("_header", {
        id: "__alloyId1650",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1650.setParent($.__views.prepaidPack);
    $.__views.__alloyId1651 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1651"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1651);
    $.__views.__alloyId1652 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1879 = Alloy.createController("_header", {
        id: "__alloyId1879",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1879.setParent($.__views.prepaidPack);
    $.__views.__alloyId1880 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1880"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1880);
    $.__views.__alloyId1881 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1650 = Alloy.createController("_header", {
        id: "__alloyId1650",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1650.setParent($.__views.prepaidPack);
    $.__views.__alloyId1651 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1651"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1651);
    $.__views.__alloyId1652 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1652"
    });
    $.__views.__alloyId1651.add($.__views.__alloyId1652);
    $.__views.__alloyId1653 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1881"
    });
    $.__views.__alloyId1880.add($.__views.__alloyId1881);
    $.__views.__alloyId1882 = Ti.UI.createImageView({
=======
        id: "__alloyId1652"
    });
    $.__views.__alloyId1651.add($.__views.__alloyId1652);
    $.__views.__alloyId1653 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
        id: "__alloyId1653"
    });
    $.__views.__alloyId1651.add($.__views.__alloyId1653);
    back ? $.__views.__alloyId1653.addEventListener("click", back) : __defers["$.__views.__alloyId1653!click!back"] = true;
    $.__views.__alloyId1654 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1654"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1654);
    $.__views.__alloyId1655 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1882"
    });
    $.__views.__alloyId1880.add($.__views.__alloyId1882);
    back ? $.__views.__alloyId1882.addEventListener("click", back) : __defers["$.__views.__alloyId1882!click!back"] = true;
    $.__views.__alloyId1883 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1883"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1883);
    $.__views.__alloyId1884 = Ti.UI.createLabel({
=======
        id: "__alloyId1653"
    });
    $.__views.__alloyId1651.add($.__views.__alloyId1653);
    back ? $.__views.__alloyId1653.addEventListener("click", back) : __defers["$.__views.__alloyId1653!click!back"] = true;
    $.__views.__alloyId1654 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1654"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1654);
    $.__views.__alloyId1655 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1655"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1655);
    $.__views.__alloyId1656 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1884"
    });
    $.__views.__alloyId1883.add($.__views.__alloyId1884);
    $.__views.__alloyId1885 = Ti.UI.createLabel({
=======
        id: "__alloyId1655"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1655);
    $.__views.__alloyId1656 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1656"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1656);
=======
<<<<<<< HEAD
        id: "__alloyId1885"
    });
    $.__views.__alloyId1883.add($.__views.__alloyId1885);
=======
        id: "__alloyId1656"
    });
    $.__views.__alloyId1654.add($.__views.__alloyId1656);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50",
        top: "10"
    });
    $.__views.scrollView.add($.__views.contentView);
<<<<<<< HEAD
    $.__views.__alloyId1657 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1886 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1657 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
<<<<<<< HEAD
        id: "__alloyId1657"
    });
    $.__views.contentView.add($.__views.__alloyId1657);
=======
<<<<<<< HEAD
        id: "__alloyId1886"
    });
    $.__views.contentView.add($.__views.__alloyId1886);
=======
        id: "__alloyId1657"
    });
    $.__views.contentView.add($.__views.__alloyId1657);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "70%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.simLabel = Ti.UI.createLabel({
        id: "simLabel",
        height: "30",
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "5",
        borderColor: "#F2F2F2",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.simLabel);
    showPicker ? $.__views.simLabel.addEventListener("click", showPicker) : __defers["$.__views.simLabel!click!showPicker"] = true;
    $.__views.__alloyId1887 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1887"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1887);
    showPicker ? $.__views.__alloyId1887.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1887!click!showPicker"] = true;
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50"
    });
    $.__views.pickerContentView.add($.__views.pickerView);
    $.__views.done = Ti.UI.createButton({
        title: "Done",
        id: "done",
        height: "30",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        top: "0",
        left: "0",
        visible: "false"
    });
    $.__views.pickerView.add($.__views.done);
    done ? $.__views.done.addEventListener("click", done) : __defers["$.__views.done!click!done"] = true;
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "30",
        selectionIndicator: "true",
        backgroundColor: "#EFEFEF",
<<<<<<< HEAD
        visible: "false"
    });
    $.__views.pickerView.add($.__views.picker);
    var __alloyId1888 = [];
    $.__views.__alloyId1889 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1889"
    });
    __alloyId1888.push($.__views.__alloyId1889);
    $.__views.__alloyId1890 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1890"
    });
    __alloyId1888.push($.__views.__alloyId1890);
    $.__views.__alloyId1891 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1891"
    });
    __alloyId1888.push($.__views.__alloyId1891);
    $.__views.picker.add(__alloyId1888);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1892 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1892"
    });
    $.__views.scrollView.add($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createLabel({
=======
        visible: "true"
    });
    $.__views.pickerContentView.add($.__views.picker);
    var __alloyId1658 = [];
    $.__views.__alloyId1659 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1659"
    });
    __alloyId1658.push($.__views.__alloyId1659);
    $.__views.__alloyId1660 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1660"
    });
    __alloyId1658.push($.__views.__alloyId1660);
    $.__views.__alloyId1661 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1661"
    });
    __alloyId1658.push($.__views.__alloyId1661);
    $.__views.picker.add(__alloyId1658);
    $.__views.__alloyId1662 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1662"
    });
    $.__views.scrollView.add($.__views.__alloyId1662);
    $.__views.__alloyId1663 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1893"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1894);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1663"
    });
    $.__views.__alloyId1662.add($.__views.__alloyId1663);
    $.__views.__alloyId1664 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1664"
    });
    $.__views.__alloyId1662.add($.__views.__alloyId1664);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
<<<<<<< HEAD
    $.__views.__alloyId1664.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1665 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1894.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1895 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1664.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1665 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1665"
    });
    $.__views.__alloyId1664.add($.__views.__alloyId1665);
    $.__views.__alloyId1666 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1666"
    });
    $.__views.scrollView.add($.__views.__alloyId1666);
    $.__views.__alloyId1667 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1895"
    });
    $.__views.__alloyId1894.add($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1896"
    });
    $.__views.scrollView.add($.__views.__alloyId1896);
    $.__views.__alloyId1897 = Ti.UI.createLabel({
=======
        id: "__alloyId1665"
    });
    $.__views.__alloyId1664.add($.__views.__alloyId1665);
    $.__views.__alloyId1666 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1666"
    });
    $.__views.scrollView.add($.__views.__alloyId1666);
    $.__views.__alloyId1667 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1667"
    });
    $.__views.__alloyId1666.add($.__views.__alloyId1667);
    $.__views.__alloyId1668 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1668"
    });
    $.__views.__alloyId1666.add($.__views.__alloyId1668);
    $.__views.__alloyId1669 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1669"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1669);
=======
<<<<<<< HEAD
        id: "__alloyId1897"
    });
    $.__views.__alloyId1896.add($.__views.__alloyId1897);
    $.__views.__alloyId1898 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1898"
    });
    $.__views.__alloyId1896.add($.__views.__alloyId1898);
    $.__views.__alloyId1899 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1899"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1899);
=======
        id: "__alloyId1667"
    });
    $.__views.__alloyId1666.add($.__views.__alloyId1667);
    $.__views.__alloyId1668 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1668"
    });
    $.__views.__alloyId1666.add($.__views.__alloyId1668);
    $.__views.__alloyId1669 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1669"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1669);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1669.add($.__views.switch2);
    $.__views.__alloyId1670 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1899.add($.__views.switch2);
    $.__views.__alloyId1900 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1669.add($.__views.switch2);
    $.__views.__alloyId1670 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1900"
    });
    $.__views.__alloyId1899.add($.__views.__alloyId1900);
    $.__views.__alloyId1901 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1901"
    });
    $.__views.__alloyId1898.add($.__views.__alloyId1901);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1670"
    });
    $.__views.__alloyId1669.add($.__views.__alloyId1670);
    $.__views.__alloyId1671 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1671"
    });
    $.__views.__alloyId1668.add($.__views.__alloyId1671);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1671.add($.__views.switch3);
    $.__views.__alloyId1672 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1901.add($.__views.switch3);
    $.__views.__alloyId1902 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1671.add($.__views.switch3);
    $.__views.__alloyId1672 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1902"
    });
    $.__views.__alloyId1901.add($.__views.__alloyId1902);
    $.__views.__alloyId1903 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1903"
    });
    $.__views.__alloyId1896.add($.__views.__alloyId1903);
    $.__views.__alloyId1904 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1904"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1904);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1672"
    });
    $.__views.__alloyId1671.add($.__views.__alloyId1672);
    $.__views.__alloyId1673 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1673"
    });
    $.__views.__alloyId1666.add($.__views.__alloyId1673);
    $.__views.__alloyId1674 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1674"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1674);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1674.add($.__views.switch4);
    $.__views.__alloyId1675 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1904.add($.__views.switch4);
    $.__views.__alloyId1905 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1674.add($.__views.switch4);
    $.__views.__alloyId1675 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1675"
    });
    $.__views.__alloyId1674.add($.__views.__alloyId1675);
    $.__views.__alloyId1676 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1676"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1676);
=======
<<<<<<< HEAD
        id: "__alloyId1905"
    });
    $.__views.__alloyId1904.add($.__views.__alloyId1905);
    $.__views.__alloyId1906 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1906"
    });
    $.__views.__alloyId1903.add($.__views.__alloyId1906);
=======
        id: "__alloyId1675"
    });
    $.__views.__alloyId1674.add($.__views.__alloyId1675);
    $.__views.__alloyId1676 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1676"
    });
    $.__views.__alloyId1673.add($.__views.__alloyId1676);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1676.add($.__views.switch5);
    $.__views.__alloyId1677 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1906.add($.__views.switch5);
    $.__views.__alloyId1907 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1676.add($.__views.switch5);
    $.__views.__alloyId1677 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1907"
    });
    $.__views.__alloyId1906.add($.__views.__alloyId1907);
    $.__views.__alloyId1908 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1908"
    });
    $.__views.scrollView.add($.__views.__alloyId1908);
    $.__views.__alloyId1909 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1677"
    });
    $.__views.__alloyId1676.add($.__views.__alloyId1677);
    $.__views.__alloyId1678 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1678"
    });
    $.__views.scrollView.add($.__views.__alloyId1678);
    $.__views.__alloyId1679 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< HEAD
        id: "__alloyId1679"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1679);
    $.__views.__alloyId1680 = Ti.UI.createTextField({
=======
<<<<<<< HEAD
        id: "__alloyId1909"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1909);
    $.__views.__alloyId1910 = Ti.UI.createTextField({
=======
        id: "__alloyId1679"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1679);
    $.__views.__alloyId1680 = Ti.UI.createTextField({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1910"
    });
    $.__views.__alloyId1908.add($.__views.__alloyId1910);
    $.__views.__alloyId1911 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1911"
    });
    $.__views.scrollView.add($.__views.__alloyId1911);
    $.__views.__alloyId1912 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1912"
    });
    $.__views.__alloyId1911.add($.__views.__alloyId1912);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1680"
    });
    $.__views.__alloyId1678.add($.__views.__alloyId1680);
    $.__views.__alloyId1681 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1681"
    });
    $.__views.scrollView.add($.__views.__alloyId1681);
    $.__views.__alloyId1682 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1682"
    });
    $.__views.__alloyId1681.add($.__views.__alloyId1682);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1682.add($.__views.switch6);
    $.__views.__alloyId1683 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1912.add($.__views.switch6);
    $.__views.__alloyId1913 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1682.add($.__views.switch6);
    $.__views.__alloyId1683 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1683"
    });
    $.__views.__alloyId1682.add($.__views.__alloyId1683);
=======
<<<<<<< HEAD
        id: "__alloyId1913"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1913);
=======
        id: "__alloyId1683"
    });
    $.__views.__alloyId1682.add($.__views.__alloyId1683);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1682.add($.__views.switch7);
    $.__views.__alloyId1684 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1912.add($.__views.switch7);
    $.__views.__alloyId1914 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1682.add($.__views.switch7);
    $.__views.__alloyId1684 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1684"
    });
=======
<<<<<<< HEAD
        id: "__alloyId1914"
    });
    $.__views.__alloyId1912.add($.__views.__alloyId1914);
    $.__views.__alloyId1915 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1915"
    });
    $.__views.scrollView.add($.__views.__alloyId1915);
    $.__views.__alloyId1916 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1916"
    });
    $.__views.__alloyId1915.add($.__views.__alloyId1916);
=======
        id: "__alloyId1684"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1682.add($.__views.__alloyId1684);
    $.__views.__alloyId1685 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1685"
    });
    $.__views.scrollView.add($.__views.__alloyId1685);
    $.__views.__alloyId1686 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1686"
    });
    $.__views.__alloyId1685.add($.__views.__alloyId1686);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1686.add($.__views.switch8);
    $.__views.__alloyId1687 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1916.add($.__views.switch8);
    $.__views.__alloyId1917 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1686.add($.__views.switch8);
    $.__views.__alloyId1687 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1687"
    });
    $.__views.__alloyId1686.add($.__views.__alloyId1687);
=======
<<<<<<< HEAD
        id: "__alloyId1917"
    });
    $.__views.__alloyId1916.add($.__views.__alloyId1917);
=======
        id: "__alloyId1687"
    });
    $.__views.__alloyId1686.add($.__views.__alloyId1687);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1686.add($.__views.switch9);
    $.__views.__alloyId1688 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1916.add($.__views.switch9);
    $.__views.__alloyId1918 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1686.add($.__views.switch9);
    $.__views.__alloyId1688 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1688"
    });
    $.__views.__alloyId1686.add($.__views.__alloyId1688);
    $.__views.__alloyId1689 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1689"
    });
    $.__views.scrollView.add($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1690"
    });
    $.__views.__alloyId1689.add($.__views.__alloyId1690);
=======
<<<<<<< HEAD
        id: "__alloyId1918"
    });
    $.__views.__alloyId1916.add($.__views.__alloyId1918);
    $.__views.__alloyId1919 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1919"
    });
    $.__views.scrollView.add($.__views.__alloyId1919);
    $.__views.__alloyId1920 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1920"
    });
    $.__views.__alloyId1919.add($.__views.__alloyId1920);
=======
        id: "__alloyId1688"
    });
    $.__views.__alloyId1686.add($.__views.__alloyId1688);
    $.__views.__alloyId1689 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1689"
    });
    $.__views.scrollView.add($.__views.__alloyId1689);
    $.__views.__alloyId1690 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1690"
    });
    $.__views.__alloyId1689.add($.__views.__alloyId1690);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1690.add($.__views.switch10);
    $.__views.__alloyId1691 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1920.add($.__views.switch10);
    $.__views.__alloyId1921 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1690.add($.__views.switch10);
    $.__views.__alloyId1691 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1691"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1691);
=======
<<<<<<< HEAD
        id: "__alloyId1921"
    });
    $.__views.__alloyId1920.add($.__views.__alloyId1921);
=======
        id: "__alloyId1691"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1691);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1690.add($.__views.switch11);
    $.__views.__alloyId1692 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1920.add($.__views.switch11);
    $.__views.__alloyId1922 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1690.add($.__views.switch11);
    $.__views.__alloyId1692 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1922"
    });
    $.__views.__alloyId1920.add($.__views.__alloyId1922);
    $.__views.__alloyId1923 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1923"
    });
    $.__views.scrollView.add($.__views.__alloyId1923);
    $.__views.__alloyId1924 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1924"
    });
    $.__views.__alloyId1923.add($.__views.__alloyId1924);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1692"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1692);
    $.__views.__alloyId1693 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1693"
    });
    $.__views.scrollView.add($.__views.__alloyId1693);
    $.__views.__alloyId1694 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1694"
    });
    $.__views.__alloyId1693.add($.__views.__alloyId1694);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1694.add($.__views.switch12);
    $.__views.__alloyId1695 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1924.add($.__views.switch12);
    $.__views.__alloyId1925 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1694.add($.__views.switch12);
    $.__views.__alloyId1695 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1695"
    });
    $.__views.__alloyId1694.add($.__views.__alloyId1695);
=======
<<<<<<< HEAD
        id: "__alloyId1925"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1925);
=======
        id: "__alloyId1695"
    });
    $.__views.__alloyId1694.add($.__views.__alloyId1695);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
<<<<<<< HEAD
    $.__views.__alloyId1694.add($.__views.switch13);
    $.__views.__alloyId1696 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1924.add($.__views.switch13);
    $.__views.__alloyId1926 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1694.add($.__views.switch13);
    $.__views.__alloyId1696 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1696"
    });
    $.__views.__alloyId1694.add($.__views.__alloyId1696);
    $.__views.__alloyId1697 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1697"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1697);
    next ? $.__views.__alloyId1697.addEventListener("click", next) : __defers["$.__views.__alloyId1697!click!next"] = true;
    $.__views.__alloyId1698 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1698"
    });
    $.__views.__alloyId1697.add($.__views.__alloyId1698);
=======
<<<<<<< HEAD
        id: "__alloyId1926"
    });
    $.__views.__alloyId1924.add($.__views.__alloyId1926);
    $.__views.__alloyId1927 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1927"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1927);
    next ? $.__views.__alloyId1927.addEventListener("click", next) : __defers["$.__views.__alloyId1927!click!next"] = true;
    $.__views.__alloyId1928 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1928"
    });
    $.__views.__alloyId1927.add($.__views.__alloyId1928);
=======
        id: "__alloyId1696"
    });
    $.__views.__alloyId1694.add($.__views.__alloyId1696);
    $.__views.__alloyId1697 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1697"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1697);
    next ? $.__views.__alloyId1697.addEventListener("click", next) : __defers["$.__views.__alloyId1697!click!next"] = true;
    $.__views.__alloyId1698 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1698"
    });
    $.__views.__alloyId1697.add($.__views.__alloyId1698);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
        $.switch1.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch2.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch3.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch4.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch5.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch6.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch7.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch8.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch9.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch10.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch11.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch12.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
        $.switch13.style = Ti.UI.Android.SWITCH_STYLE_CHECKBOX;
    }
    $.picker.setSelectedRow(0, 0, false);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1653!click!back"] && $.__views.__alloyId1653.addEventListener("click", back);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1697!click!next"] && $.__views.__alloyId1697.addEventListener("click", next);
=======
<<<<<<< HEAD
    var simType;
    __defers["$.__views.__alloyId1882!click!back"] && $.__views.__alloyId1882.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1887!click!showPicker"] && $.__views.__alloyId1887.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1927!click!next"] && $.__views.__alloyId1927.addEventListener("click", next);
=======
    __defers["$.__views.__alloyId1653!click!back"] && $.__views.__alloyId1653.addEventListener("click", back);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1697!click!next"] && $.__views.__alloyId1697.addEventListener("click", next);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;