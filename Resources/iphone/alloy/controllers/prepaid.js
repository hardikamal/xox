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
        DRAWER.navigation("products", 1);
    }
    function rate(e) {
        console.log("rate");
        rate = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.rateLabel.text = rate);
        switch (e.rowIndex) {
          case 0:
            $.view1.setVisible(true);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 1:
            $.view1.setVisible(false);
            $.view2.setVisible(true);
            $.view3.setVisible(false);
            $.view4.setVisible(false);
            break;

          case 2:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(true);
            $.view4.setVisible(false);
            break;

          case 3:
            $.view1.setVisible(false);
            $.view2.setVisible(false);
            $.view3.setVisible(false);
            $.view4.setVisible(true);
        }
    }
    function showPicker() {
        console.log("showPicker");
        console.log("$.pickerView.visible: " + $.pickerView.visible);
        if ("false" == $.pickerView.visible) {
            console.log("false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else if (false == $.pickerView.visible) {
            console.log("else false");
            $.contentView.height = 300;
            $.pickerView.height = 250;
            $.pickerContentView.height = 250;
            $.pickerView.setVisible(true);
            $.done.setVisible(true);
            $.picker.setVisible(true);
        } else {
            console.log("else true");
            $.contentView.height = 50;
            $.pickerView.height = 50;
            $.pickerContentView.height = 50;
            $.pickerView.setVisible(false);
            $.done.setVisible(false);
            $.picker.setVisible(false);
        }
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
    function subscribe() {
        console.log("subscribe");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "prepaid";
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
    $.__views.prepaid = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "prepaid"
    });
    $.__views.prepaid && $.addTopLevelView($.__views.prepaid);
<<<<<<< HEAD
    $.__views.__alloyId1494 = Alloy.createController("_header", {
        id: "__alloyId1494",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId1494.setParent($.__views.prepaid);
    $.__views.__alloyId1495 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1495"
    });
    $.__views.prepaid.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1723 = Alloy.createController("_header", {
        id: "__alloyId1723",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId1723.setParent($.__views.prepaid);
    $.__views.__alloyId1724 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1724"
    });
    $.__views.prepaid.add($.__views.__alloyId1724);
    $.__views.__alloyId1725 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1494 = Alloy.createController("_header", {
        id: "__alloyId1494",
        __parentSymbol: $.__views.prepaid
    });
    $.__views.__alloyId1494.setParent($.__views.prepaid);
    $.__views.__alloyId1495 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId1495"
    });
    $.__views.prepaid.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1496"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId1725"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1725);
    $.__views.__alloyId1726 = Ti.UI.createImageView({
=======
        id: "__alloyId1496"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1726"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1726);
    back ? $.__views.__alloyId1726.addEventListener("click", back) : __defers["$.__views.__alloyId1726!click!back"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1497"
    });
    $.__views.__alloyId1495.add($.__views.__alloyId1497);
    back ? $.__views.__alloyId1497.addEventListener("click", back) : __defers["$.__views.__alloyId1497!click!back"] = true;
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50"
    });
    $.__views.prepaid.add($.__views.contentView);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.rateLabel = Ti.UI.createLabel({
        id: "rateLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.rateLabel);
    showPicker ? $.__views.rateLabel.addEventListener("click", showPicker) : __defers["$.__views.rateLabel!click!showPicker"] = true;
<<<<<<< HEAD
    $.__views.__alloyId1498 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1727 = Ti.UI.createImageView({
=======
    $.__views.__alloyId1498 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1727"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1727);
    showPicker ? $.__views.__alloyId1727.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1727!click!showPicker"] = true;
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1498"
    });
    $.__views.pickerContentView.add($.__views.__alloyId1498);
    showPicker ? $.__views.__alloyId1498.addEventListener("click", showPicker) : __defers["$.__views.__alloyId1498!click!showPicker"] = true;
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        height: "50",
        width: "100%",
        visible: "false",
        top: "50",
        backgroundColor: "blue"
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
        visible: "false"
    });
    $.__views.pickerView.add($.__views.picker);
<<<<<<< HEAD
    var __alloyId1499 = [];
    $.__views.__alloyId1500 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1500"
    });
    __alloyId1499.push($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1501"
    });
    __alloyId1499.push($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1502"
    });
    __alloyId1499.push($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1503"
    });
    __alloyId1499.push($.__views.__alloyId1503);
    $.__views.picker.add(__alloyId1499);
=======
<<<<<<< HEAD
    var __alloyId1728 = [];
    $.__views.__alloyId1729 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1729"
    });
    __alloyId1728.push($.__views.__alloyId1729);
    $.__views.__alloyId1730 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1730"
    });
    __alloyId1728.push($.__views.__alloyId1730);
    $.__views.__alloyId1731 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1731"
    });
    __alloyId1728.push($.__views.__alloyId1731);
    $.__views.__alloyId1732 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1732"
    });
    __alloyId1728.push($.__views.__alloyId1732);
    $.__views.picker.add(__alloyId1728);
=======
    var __alloyId1499 = [];
    $.__views.__alloyId1500 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId1500"
    });
    __alloyId1499.push($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId1501"
    });
    __alloyId1499.push($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId1502"
    });
    __alloyId1499.push($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId1503"
    });
    __alloyId1499.push($.__views.__alloyId1503);
    $.__views.picker.add(__alloyId1499);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    rate ? $.__views.picker.addEventListener("change", rate) : __defers["$.__views.picker!change!rate"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "composite",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.prepaid.add($.__views.scrollView);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "true"
    });
    $.__views.scrollView.add($.__views.view1);
<<<<<<< HEAD
    $.__views.__alloyId1504 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1733 = Ti.UI.createView({
=======
    $.__views.__alloyId1504 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
<<<<<<< HEAD
        id: "__alloyId1504"
    });
    $.__views.view1.add($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
=======
<<<<<<< HEAD
        id: "__alloyId1733"
    });
    $.__views.view1.add($.__views.__alloyId1733);
    $.__views.__alloyId1734 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1734"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1734);
    $.__views.__alloyId1735 = Ti.UI.createLabel({
=======
        id: "__alloyId1504"
    });
    $.__views.view1.add($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1505"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1505);
    $.__views.__alloyId1506 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1506"
    });
    $.__views.__alloyId1505.add($.__views.__alloyId1506);
    $.__views.__alloyId1507 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1507"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1507);
    $.__views.__alloyId1508 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1735"
    });
    $.__views.__alloyId1734.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1736"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1736);
    $.__views.__alloyId1737 = Ti.UI.createLabel({
=======
        id: "__alloyId1506"
    });
    $.__views.__alloyId1505.add($.__views.__alloyId1506);
    $.__views.__alloyId1507 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1507"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1507);
    $.__views.__alloyId1508 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1508"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1508);
    $.__views.__alloyId1509 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1737"
    });
    $.__views.__alloyId1736.add($.__views.__alloyId1737);
    $.__views.__alloyId1738 = Ti.UI.createLabel({
=======
        id: "__alloyId1508"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1508);
    $.__views.__alloyId1509 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1509"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1509);
    $.__views.__alloyId1510 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1510"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1510);
    $.__views.__alloyId1511 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1738"
    });
    $.__views.__alloyId1736.add($.__views.__alloyId1738);
    $.__views.__alloyId1739 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1739"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1739);
    $.__views.__alloyId1740 = Ti.UI.createLabel({
=======
        id: "__alloyId1509"
    });
    $.__views.__alloyId1507.add($.__views.__alloyId1509);
    $.__views.__alloyId1510 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1510"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1510);
    $.__views.__alloyId1511 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1740"
    });
    $.__views.__alloyId1739.add($.__views.__alloyId1740);
    $.__views.__alloyId1741 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1511"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1511);
    $.__views.__alloyId1512 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1512"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1512);
    $.__views.__alloyId1513 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1513"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1513);
    $.__views.__alloyId1514 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1741"
    });
    $.__views.__alloyId1739.add($.__views.__alloyId1741);
    $.__views.__alloyId1742 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1742"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1742);
    $.__views.__alloyId1743 = Ti.UI.createLabel({
=======
        id: "__alloyId1512"
    });
    $.__views.__alloyId1510.add($.__views.__alloyId1512);
    $.__views.__alloyId1513 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1513"
    });
    $.__views.__alloyId1504.add($.__views.__alloyId1513);
    $.__views.__alloyId1514 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1743"
    });
    $.__views.__alloyId1742.add($.__views.__alloyId1743);
    $.__views.__alloyId1744 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1514"
    });
    $.__views.__alloyId1513.add($.__views.__alloyId1514);
    $.__views.__alloyId1515 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1744"
    });
    $.__views.__alloyId1742.add($.__views.__alloyId1744);
    $.__views.__alloyId1745 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1515"
    });
    $.__views.__alloyId1513.add($.__views.__alloyId1515);
    $.__views.__alloyId1516 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1516"
    });
    $.__views.view1.add($.__views.__alloyId1516);
    $.__views.__alloyId1517 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
=======
<<<<<<< HEAD
        id: "__alloyId1745"
    });
    $.__views.view1.add($.__views.__alloyId1745);
    $.__views.__alloyId1746 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1746"
    });
    $.__views.__alloyId1745.add($.__views.__alloyId1746);
    $.__views.__alloyId1747 = Ti.UI.createLabel({
=======
        id: "__alloyId1516"
    });
    $.__views.view1.add($.__views.__alloyId1516);
    $.__views.__alloyId1517 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1517"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1517);
    $.__views.__alloyId1518 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1518"
    });
    $.__views.__alloyId1517.add($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1519"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1747"
    });
    $.__views.__alloyId1746.add($.__views.__alloyId1747);
    $.__views.__alloyId1748 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1748"
    });
    $.__views.__alloyId1745.add($.__views.__alloyId1748);
    $.__views.__alloyId1749 = Ti.UI.createLabel({
=======
        id: "__alloyId1518"
    });
    $.__views.__alloyId1517.add($.__views.__alloyId1518);
    $.__views.__alloyId1519 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1519"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1519);
    $.__views.__alloyId1520 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1749"
    });
    $.__views.__alloyId1748.add($.__views.__alloyId1749);
    $.__views.__alloyId1750 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1520"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1520);
    $.__views.__alloyId1521 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1521"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1521);
    $.__views.__alloyId1522 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1522"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1522);
    $.__views.__alloyId1523 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1750"
    });
    $.__views.__alloyId1748.add($.__views.__alloyId1750);
    $.__views.__alloyId1751 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1751"
    });
    $.__views.__alloyId1745.add($.__views.__alloyId1751);
    $.__views.__alloyId1752 = Ti.UI.createLabel({
=======
        id: "__alloyId1521"
    });
    $.__views.__alloyId1519.add($.__views.__alloyId1521);
    $.__views.__alloyId1522 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1522"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1522);
    $.__views.__alloyId1523 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1523"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1523);
    $.__views.__alloyId1524 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1752"
    });
    $.__views.__alloyId1751.add($.__views.__alloyId1752);
    $.__views.__alloyId1753 = Ti.UI.createLabel({
=======
        id: "__alloyId1523"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1523);
    $.__views.__alloyId1524 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1524"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1524);
    $.__views.__alloyId1525 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1525"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1525);
    $.__views.__alloyId1526 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1753"
    });
    $.__views.__alloyId1751.add($.__views.__alloyId1753);
    $.__views.__alloyId1754 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1754"
    });
    $.__views.__alloyId1745.add($.__views.__alloyId1754);
    $.__views.__alloyId1755 = Ti.UI.createLabel({
=======
        id: "__alloyId1524"
    });
    $.__views.__alloyId1522.add($.__views.__alloyId1524);
    $.__views.__alloyId1525 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1525"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1525);
    $.__views.__alloyId1526 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1755"
    });
    $.__views.__alloyId1754.add($.__views.__alloyId1755);
    $.__views.__alloyId1756 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1526"
    });
    $.__views.__alloyId1525.add($.__views.__alloyId1526);
    $.__views.__alloyId1527 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1527"
    });
    $.__views.__alloyId1525.add($.__views.__alloyId1527);
    $.__views.__alloyId1528 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1528"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1528);
    $.__views.__alloyId1529 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1756"
    });
    $.__views.__alloyId1754.add($.__views.__alloyId1756);
    $.__views.__alloyId1757 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1757"
    });
    $.__views.__alloyId1745.add($.__views.__alloyId1757);
    $.__views.__alloyId1758 = Ti.UI.createLabel({
=======
        id: "__alloyId1527"
    });
    $.__views.__alloyId1525.add($.__views.__alloyId1527);
    $.__views.__alloyId1528 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1528"
    });
    $.__views.__alloyId1516.add($.__views.__alloyId1528);
    $.__views.__alloyId1529 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1758"
    });
    $.__views.__alloyId1757.add($.__views.__alloyId1758);
    $.__views.__alloyId1759 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1529"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1529);
    $.__views.__alloyId1530 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1530"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1530);
    $.__views.__alloyId1531 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1759"
    });
    $.__views.__alloyId1757.add($.__views.__alloyId1759);
    $.__views.__alloyId1760 = Ti.UI.createView({
=======
        id: "__alloyId1530"
    });
    $.__views.__alloyId1528.add($.__views.__alloyId1530);
    $.__views.__alloyId1531 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1531"
    });
    $.__views.view1.add($.__views.__alloyId1531);
    $.__views.__alloyId1532 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1532"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1532);
    $.__views.__alloyId1533 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1760"
    });
    $.__views.view1.add($.__views.__alloyId1760);
    $.__views.__alloyId1761 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1761"
    });
    $.__views.__alloyId1760.add($.__views.__alloyId1761);
    $.__views.__alloyId1762 = Ti.UI.createLabel({
=======
        id: "__alloyId1531"
    });
    $.__views.view1.add($.__views.__alloyId1531);
    $.__views.__alloyId1532 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1532"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1532);
    $.__views.__alloyId1533 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1533"
    });
    $.__views.__alloyId1532.add($.__views.__alloyId1533);
    $.__views.__alloyId1534 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1534"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1534);
    $.__views.__alloyId1535 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1762"
    });
    $.__views.__alloyId1761.add($.__views.__alloyId1762);
    $.__views.__alloyId1763 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1763"
    });
    $.__views.__alloyId1760.add($.__views.__alloyId1763);
    $.__views.__alloyId1764 = Ti.UI.createLabel({
=======
        id: "__alloyId1533"
    });
    $.__views.__alloyId1532.add($.__views.__alloyId1533);
    $.__views.__alloyId1534 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1534"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1534);
    $.__views.__alloyId1535 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1764"
    });
    $.__views.__alloyId1763.add($.__views.__alloyId1764);
    $.__views.__alloyId1765 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1535"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1535);
    $.__views.__alloyId1536 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1536"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1536);
    $.__views.__alloyId1537 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1537"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1537);
    $.__views.__alloyId1538 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1765"
    });
    $.__views.__alloyId1763.add($.__views.__alloyId1765);
    $.__views.__alloyId1766 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1766"
    });
    $.__views.__alloyId1760.add($.__views.__alloyId1766);
    $.__views.__alloyId1767 = Ti.UI.createLabel({
=======
        id: "__alloyId1536"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1536);
    $.__views.__alloyId1537 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1537"
    });
    $.__views.__alloyId1531.add($.__views.__alloyId1537);
    $.__views.__alloyId1538 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1767"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1767);
    $.__views.__alloyId1768 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1538"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1538);
    $.__views.__alloyId1539 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1539"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1539);
=======
<<<<<<< HEAD
        id: "__alloyId1768"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1768);
=======
        id: "__alloyId1539"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1539);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
<<<<<<< HEAD
    $.__views.__alloyId1540 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1769 = Ti.UI.createView({
=======
    $.__views.__alloyId1540 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
<<<<<<< HEAD
        id: "__alloyId1540"
    });
    $.__views.view2.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
=======
<<<<<<< HEAD
        id: "__alloyId1769"
    });
    $.__views.view2.add($.__views.__alloyId1769);
    $.__views.__alloyId1770 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1770"
    });
    $.__views.__alloyId1769.add($.__views.__alloyId1770);
    $.__views.__alloyId1771 = Ti.UI.createLabel({
=======
        id: "__alloyId1540"
    });
    $.__views.view2.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1541"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1542"
    });
    $.__views.__alloyId1541.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1543"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1543);
    $.__views.__alloyId1544 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1771"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1771);
    $.__views.__alloyId1772 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1772"
    });
    $.__views.__alloyId1769.add($.__views.__alloyId1772);
    $.__views.__alloyId1773 = Ti.UI.createLabel({
=======
        id: "__alloyId1542"
    });
    $.__views.__alloyId1541.add($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1543"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1543);
    $.__views.__alloyId1544 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1544"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1773"
    });
    $.__views.__alloyId1772.add($.__views.__alloyId1773);
    $.__views.__alloyId1774 = Ti.UI.createLabel({
=======
        id: "__alloyId1544"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1545"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1545);
    $.__views.__alloyId1546 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1546"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1774"
    });
    $.__views.__alloyId1772.add($.__views.__alloyId1774);
    $.__views.__alloyId1775 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1775"
    });
    $.__views.__alloyId1769.add($.__views.__alloyId1775);
    $.__views.__alloyId1776 = Ti.UI.createLabel({
=======
        id: "__alloyId1545"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1545);
    $.__views.__alloyId1546 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1546"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1776"
    });
    $.__views.__alloyId1775.add($.__views.__alloyId1776);
    $.__views.__alloyId1777 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1547"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1548"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1548);
    $.__views.__alloyId1549 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1549"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1777"
    });
    $.__views.__alloyId1775.add($.__views.__alloyId1777);
    $.__views.__alloyId1778 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1778"
    });
    $.__views.__alloyId1769.add($.__views.__alloyId1778);
    $.__views.__alloyId1779 = Ti.UI.createLabel({
=======
        id: "__alloyId1548"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1548);
    $.__views.__alloyId1549 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1549"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1550"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1550);
    $.__views.__alloyId1551 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1779"
    });
    $.__views.__alloyId1778.add($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createLabel({
=======
        id: "__alloyId1550"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1550);
    $.__views.__alloyId1551 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1780"
    });
    $.__views.__alloyId1778.add($.__views.__alloyId1780);
    $.__views.__alloyId1781 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1551"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1551);
    $.__views.__alloyId1552 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1552"
    });
    $.__views.view2.add($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
=======
<<<<<<< HEAD
        id: "__alloyId1781"
    });
    $.__views.view2.add($.__views.__alloyId1781);
    $.__views.__alloyId1782 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1782"
    });
    $.__views.__alloyId1781.add($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createLabel({
=======
        id: "__alloyId1552"
    });
    $.__views.view2.add($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1553"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1554"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1554);
    $.__views.__alloyId1555 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1555"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1555);
    $.__views.__alloyId1556 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1783"
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1783);
    $.__views.__alloyId1784 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1784"
    });
    $.__views.__alloyId1781.add($.__views.__alloyId1784);
    $.__views.__alloyId1785 = Ti.UI.createLabel({
=======
        id: "__alloyId1554"
    });
    $.__views.__alloyId1553.add($.__views.__alloyId1554);
    $.__views.__alloyId1555 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1555"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1555);
    $.__views.__alloyId1556 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1785"
    });
    $.__views.__alloyId1784.add($.__views.__alloyId1785);
    $.__views.__alloyId1786 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1556"
    });
    $.__views.__alloyId1555.add($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1557"
    });
    $.__views.__alloyId1555.add($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1558"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1558);
    $.__views.__alloyId1559 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1786"
    });
    $.__views.__alloyId1784.add($.__views.__alloyId1786);
    $.__views.__alloyId1787 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1787"
    });
    $.__views.__alloyId1781.add($.__views.__alloyId1787);
    $.__views.__alloyId1788 = Ti.UI.createLabel({
=======
        id: "__alloyId1557"
    });
    $.__views.__alloyId1555.add($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1558"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1558);
    $.__views.__alloyId1559 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1559"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1788"
    });
    $.__views.__alloyId1787.add($.__views.__alloyId1788);
    $.__views.__alloyId1789 = Ti.UI.createLabel({
=======
        id: "__alloyId1559"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1560"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1561"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1789"
    });
    $.__views.__alloyId1787.add($.__views.__alloyId1789);
    $.__views.__alloyId1790 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1790"
    });
    $.__views.__alloyId1781.add($.__views.__alloyId1790);
    $.__views.__alloyId1791 = Ti.UI.createLabel({
=======
        id: "__alloyId1560"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1561"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1791"
    });
    $.__views.__alloyId1790.add($.__views.__alloyId1791);
    $.__views.__alloyId1792 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1562"
    });
    $.__views.__alloyId1561.add($.__views.__alloyId1562);
    $.__views.__alloyId1563 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1563"
    });
    $.__views.__alloyId1561.add($.__views.__alloyId1563);
    $.__views.__alloyId1564 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1564"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1564);
    $.__views.__alloyId1565 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1792"
    });
    $.__views.__alloyId1790.add($.__views.__alloyId1792);
    $.__views.__alloyId1793 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1793"
    });
    $.__views.__alloyId1781.add($.__views.__alloyId1793);
    $.__views.__alloyId1794 = Ti.UI.createLabel({
=======
        id: "__alloyId1563"
    });
    $.__views.__alloyId1561.add($.__views.__alloyId1563);
    $.__views.__alloyId1564 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1564"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1564);
    $.__views.__alloyId1565 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1794"
    });
    $.__views.__alloyId1793.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1565"
    });
    $.__views.__alloyId1564.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1566"
    });
    $.__views.__alloyId1564.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1795"
    });
    $.__views.__alloyId1793.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createView({
=======
        id: "__alloyId1566"
    });
    $.__views.__alloyId1564.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1567"
    });
    $.__views.view2.add($.__views.__alloyId1567);
    $.__views.__alloyId1568 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1568"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1568);
    $.__views.__alloyId1569 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1796"
    });
    $.__views.view2.add($.__views.__alloyId1796);
    $.__views.__alloyId1797 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1797"
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1797);
    $.__views.__alloyId1798 = Ti.UI.createLabel({
=======
        id: "__alloyId1567"
    });
    $.__views.view2.add($.__views.__alloyId1567);
    $.__views.__alloyId1568 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1568"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1568);
    $.__views.__alloyId1569 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1569"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1570"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1798"
    });
    $.__views.__alloyId1797.add($.__views.__alloyId1798);
    $.__views.__alloyId1799 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1799"
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1799);
    $.__views.__alloyId1800 = Ti.UI.createLabel({
=======
        id: "__alloyId1569"
    });
    $.__views.__alloyId1568.add($.__views.__alloyId1569);
    $.__views.__alloyId1570 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1570"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1800"
    });
    $.__views.__alloyId1799.add($.__views.__alloyId1800);
    $.__views.__alloyId1801 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1571"
    });
    $.__views.__alloyId1570.add($.__views.__alloyId1571);
    $.__views.__alloyId1572 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1572"
    });
    $.__views.__alloyId1570.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1573"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1801"
    });
    $.__views.__alloyId1799.add($.__views.__alloyId1801);
    $.__views.__alloyId1802 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1802"
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1802);
    $.__views.__alloyId1803 = Ti.UI.createLabel({
=======
        id: "__alloyId1572"
    });
    $.__views.__alloyId1570.add($.__views.__alloyId1572);
    $.__views.__alloyId1573 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1573"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1803"
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1574"
    });
    $.__views.__alloyId1573.add($.__views.__alloyId1574);
    $.__views.__alloyId1575 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1575"
    });
    $.__views.__alloyId1573.add($.__views.__alloyId1575);
=======
<<<<<<< HEAD
        id: "__alloyId1804"
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1804);
=======
        id: "__alloyId1575"
    });
    $.__views.__alloyId1573.add($.__views.__alloyId1575);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
<<<<<<< HEAD
    $.__views.__alloyId1576 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1805 = Ti.UI.createView({
=======
    $.__views.__alloyId1576 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
<<<<<<< HEAD
        id: "__alloyId1576"
    });
    $.__views.view3.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
=======
<<<<<<< HEAD
        id: "__alloyId1805"
    });
    $.__views.view3.add($.__views.__alloyId1805);
    $.__views.__alloyId1806 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1806"
    });
    $.__views.__alloyId1805.add($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createLabel({
=======
        id: "__alloyId1576"
    });
    $.__views.view3.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1577"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1578"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1579"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1807"
    });
    $.__views.__alloyId1806.add($.__views.__alloyId1807);
    $.__views.__alloyId1808 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1808"
    });
    $.__views.__alloyId1805.add($.__views.__alloyId1808);
    $.__views.__alloyId1809 = Ti.UI.createLabel({
=======
        id: "__alloyId1578"
    });
    $.__views.__alloyId1577.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1579"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1580"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1580);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1809"
    });
    $.__views.__alloyId1808.add($.__views.__alloyId1809);
    $.__views.__alloyId1810 = Ti.UI.createLabel({
=======
        id: "__alloyId1580"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1580);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1581"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1582"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1810"
    });
    $.__views.__alloyId1808.add($.__views.__alloyId1810);
    $.__views.__alloyId1811 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1811"
    });
    $.__views.__alloyId1805.add($.__views.__alloyId1811);
    $.__views.__alloyId1812 = Ti.UI.createLabel({
=======
        id: "__alloyId1581"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1581);
    $.__views.__alloyId1582 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1582"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1812"
    });
    $.__views.__alloyId1811.add($.__views.__alloyId1812);
    $.__views.__alloyId1813 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1583"
    });
    $.__views.__alloyId1582.add($.__views.__alloyId1583);
    $.__views.__alloyId1584 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1584"
    });
    $.__views.__alloyId1582.add($.__views.__alloyId1584);
    $.__views.__alloyId1585 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1585"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1585);
    $.__views.__alloyId1586 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1813"
    });
    $.__views.__alloyId1811.add($.__views.__alloyId1813);
    $.__views.__alloyId1814 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1814"
    });
    $.__views.__alloyId1805.add($.__views.__alloyId1814);
    $.__views.__alloyId1815 = Ti.UI.createLabel({
=======
        id: "__alloyId1584"
    });
    $.__views.__alloyId1582.add($.__views.__alloyId1584);
    $.__views.__alloyId1585 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1585"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1585);
    $.__views.__alloyId1586 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "First 1 min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1815"
    });
    $.__views.__alloyId1814.add($.__views.__alloyId1815);
    $.__views.__alloyId1816 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1586"
    });
    $.__views.__alloyId1585.add($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1816"
    });
    $.__views.__alloyId1814.add($.__views.__alloyId1816);
    $.__views.__alloyId1817 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1587"
    });
    $.__views.__alloyId1585.add($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1588"
    });
    $.__views.view3.add($.__views.__alloyId1588);
    $.__views.__alloyId1589 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
=======
<<<<<<< HEAD
        id: "__alloyId1817"
    });
    $.__views.view3.add($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1818"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1818);
    $.__views.__alloyId1819 = Ti.UI.createLabel({
=======
        id: "__alloyId1588"
    });
    $.__views.view3.add($.__views.__alloyId1588);
    $.__views.__alloyId1589 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1589"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1589);
    $.__views.__alloyId1590 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1590"
    });
    $.__views.__alloyId1589.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1591"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1819"
    });
    $.__views.__alloyId1818.add($.__views.__alloyId1819);
    $.__views.__alloyId1820 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1820"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1820);
    $.__views.__alloyId1821 = Ti.UI.createLabel({
=======
        id: "__alloyId1590"
    });
    $.__views.__alloyId1589.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1591"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1592"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1592);
    $.__views.__alloyId1593 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1821"
    });
    $.__views.__alloyId1820.add($.__views.__alloyId1821);
    $.__views.__alloyId1822 = Ti.UI.createLabel({
=======
        id: "__alloyId1592"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1592);
    $.__views.__alloyId1593 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1593"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1593);
    $.__views.__alloyId1594 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1594"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1594);
    $.__views.__alloyId1595 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1822"
    });
    $.__views.__alloyId1820.add($.__views.__alloyId1822);
    $.__views.__alloyId1823 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1823"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1823);
    $.__views.__alloyId1824 = Ti.UI.createLabel({
=======
        id: "__alloyId1593"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1593);
    $.__views.__alloyId1594 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1594"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1594);
    $.__views.__alloyId1595 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1595"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1595);
    $.__views.__alloyId1596 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1824"
    });
    $.__views.__alloyId1823.add($.__views.__alloyId1824);
    $.__views.__alloyId1825 = Ti.UI.createLabel({
=======
        id: "__alloyId1595"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1595);
    $.__views.__alloyId1596 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1596"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1596);
    $.__views.__alloyId1597 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1597"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1597);
    $.__views.__alloyId1598 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1825"
    });
    $.__views.__alloyId1823.add($.__views.__alloyId1825);
    $.__views.__alloyId1826 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1826"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1826);
    $.__views.__alloyId1827 = Ti.UI.createLabel({
=======
        id: "__alloyId1596"
    });
    $.__views.__alloyId1594.add($.__views.__alloyId1596);
    $.__views.__alloyId1597 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1597"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1597);
    $.__views.__alloyId1598 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1827"
    });
    $.__views.__alloyId1826.add($.__views.__alloyId1827);
    $.__views.__alloyId1828 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1598"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1598);
    $.__views.__alloyId1599 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1599"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1600"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1600);
    $.__views.__alloyId1601 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1828"
    });
    $.__views.__alloyId1826.add($.__views.__alloyId1828);
    $.__views.__alloyId1829 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1829"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1829);
    $.__views.__alloyId1830 = Ti.UI.createLabel({
=======
        id: "__alloyId1599"
    });
    $.__views.__alloyId1597.add($.__views.__alloyId1599);
    $.__views.__alloyId1600 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1600"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1600);
    $.__views.__alloyId1601 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1601"
    });
    $.__views.__alloyId1600.add($.__views.__alloyId1601);
    $.__views.__alloyId1602 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1830"
    });
    $.__views.__alloyId1829.add($.__views.__alloyId1830);
    $.__views.__alloyId1831 = Ti.UI.createLabel({
=======
        id: "__alloyId1601"
    });
    $.__views.__alloyId1600.add($.__views.__alloyId1601);
    $.__views.__alloyId1602 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1831"
    });
    $.__views.__alloyId1829.add($.__views.__alloyId1831);
    $.__views.__alloyId1832 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1602"
    });
    $.__views.__alloyId1600.add($.__views.__alloyId1602);
    $.__views.__alloyId1603 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1603"
    });
    $.__views.view3.add($.__views.__alloyId1603);
    $.__views.__alloyId1604 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1604"
    });
    $.__views.__alloyId1603.add($.__views.__alloyId1604);
    $.__views.__alloyId1605 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1832"
    });
    $.__views.view3.add($.__views.__alloyId1832);
    $.__views.__alloyId1833 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1833"
    });
    $.__views.__alloyId1832.add($.__views.__alloyId1833);
    $.__views.__alloyId1834 = Ti.UI.createLabel({
=======
        id: "__alloyId1603"
    });
    $.__views.view3.add($.__views.__alloyId1603);
    $.__views.__alloyId1604 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1604"
    });
    $.__views.__alloyId1603.add($.__views.__alloyId1604);
    $.__views.__alloyId1605 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1605"
    });
=======
<<<<<<< HEAD
        id: "__alloyId1834"
    });
    $.__views.__alloyId1833.add($.__views.__alloyId1834);
    $.__views.__alloyId1835 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1835"
    });
    $.__views.__alloyId1832.add($.__views.__alloyId1835);
    $.__views.__alloyId1836 = Ti.UI.createLabel({
=======
        id: "__alloyId1605"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1604.add($.__views.__alloyId1605);
    $.__views.__alloyId1606 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1606"
    });
    $.__views.__alloyId1603.add($.__views.__alloyId1606);
    $.__views.__alloyId1607 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1836"
    });
    $.__views.__alloyId1835.add($.__views.__alloyId1836);
    $.__views.__alloyId1837 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1607"
    });
    $.__views.__alloyId1606.add($.__views.__alloyId1607);
    $.__views.__alloyId1608 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1608"
    });
=======
<<<<<<< HEAD
        id: "__alloyId1837"
    });
    $.__views.__alloyId1835.add($.__views.__alloyId1837);
    $.__views.__alloyId1838 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1838"
    });
    $.__views.__alloyId1832.add($.__views.__alloyId1838);
    $.__views.__alloyId1839 = Ti.UI.createLabel({
=======
        id: "__alloyId1608"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1606.add($.__views.__alloyId1608);
    $.__views.__alloyId1609 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1609"
    });
    $.__views.__alloyId1603.add($.__views.__alloyId1609);
    $.__views.__alloyId1610 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1610"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1839"
    });
    $.__views.__alloyId1838.add($.__views.__alloyId1839);
    $.__views.__alloyId1840 = Ti.UI.createLabel({
=======
        id: "__alloyId1610"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1610);
    $.__views.__alloyId1611 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1611"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1611);
=======
<<<<<<< HEAD
        id: "__alloyId1840"
    });
    $.__views.__alloyId1838.add($.__views.__alloyId1840);
=======
        id: "__alloyId1611"
    });
    $.__views.__alloyId1609.add($.__views.__alloyId1611);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
<<<<<<< HEAD
    $.__views.__alloyId1612 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId1841 = Ti.UI.createView({
=======
    $.__views.__alloyId1612 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
<<<<<<< HEAD
        id: "__alloyId1612"
    });
    $.__views.view4.add($.__views.__alloyId1612);
    $.__views.__alloyId1613 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1613"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1613);
    $.__views.__alloyId1614 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1841"
    });
    $.__views.view4.add($.__views.__alloyId1841);
    $.__views.__alloyId1842 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1842"
    });
    $.__views.__alloyId1841.add($.__views.__alloyId1842);
    $.__views.__alloyId1843 = Ti.UI.createLabel({
=======
        id: "__alloyId1612"
    });
    $.__views.view4.add($.__views.__alloyId1612);
    $.__views.__alloyId1613 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId1613"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1613);
    $.__views.__alloyId1614 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Voice Call (All Networks)",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1614"
    });
=======
<<<<<<< HEAD
        id: "__alloyId1843"
    });
    $.__views.__alloyId1842.add($.__views.__alloyId1843);
    $.__views.__alloyId1844 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1844"
    });
    $.__views.__alloyId1841.add($.__views.__alloyId1844);
    $.__views.__alloyId1845 = Ti.UI.createLabel({
=======
        id: "__alloyId1614"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1613.add($.__views.__alloyId1614);
    $.__views.__alloyId1615 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1615"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1615);
    $.__views.__alloyId1616 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "First 10sec",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1845"
    });
    $.__views.__alloyId1844.add($.__views.__alloyId1845);
    $.__views.__alloyId1846 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1616"
    });
    $.__views.__alloyId1615.add($.__views.__alloyId1616);
    $.__views.__alloyId1617 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "5cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1617"
    });
=======
<<<<<<< HEAD
        id: "__alloyId1846"
    });
    $.__views.__alloyId1844.add($.__views.__alloyId1846);
    $.__views.__alloyId1847 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1847"
    });
    $.__views.__alloyId1841.add($.__views.__alloyId1847);
    $.__views.__alloyId1848 = Ti.UI.createLabel({
=======
        id: "__alloyId1617"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
    $.__views.__alloyId1615.add($.__views.__alloyId1617);
    $.__views.__alloyId1618 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1618"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1618);
    $.__views.__alloyId1619 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "For first and every subsequent 30sec",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1619"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1619);
    $.__views.__alloyId1620 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1848"
    });
    $.__views.__alloyId1847.add($.__views.__alloyId1848);
    $.__views.__alloyId1849 = Ti.UI.createLabel({
=======
        id: "__alloyId1619"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1619);
    $.__views.__alloyId1620 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "16cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1849"
    });
    $.__views.__alloyId1847.add($.__views.__alloyId1849);
    $.__views.__alloyId1850 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1850"
    });
    $.__views.__alloyId1841.add($.__views.__alloyId1850);
    $.__views.__alloyId1851 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1620"
    });
    $.__views.__alloyId1618.add($.__views.__alloyId1620);
    $.__views.__alloyId1621 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1621"
    });
    $.__views.__alloyId1612.add($.__views.__alloyId1621);
    $.__views.__alloyId1622 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "1min",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1851"
    });
    $.__views.__alloyId1850.add($.__views.__alloyId1851);
    $.__views.__alloyId1852 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1622"
    });
    $.__views.__alloyId1621.add($.__views.__alloyId1622);
    $.__views.__alloyId1623 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "32cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1852"
    });
    $.__views.__alloyId1850.add($.__views.__alloyId1852);
    $.__views.__alloyId1853 = Ti.UI.createView({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1623"
    });
    $.__views.__alloyId1621.add($.__views.__alloyId1623);
    $.__views.__alloyId1624 = Ti.UI.createView({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
<<<<<<< HEAD
        id: "__alloyId1624"
    });
    $.__views.view4.add($.__views.__alloyId1624);
    $.__views.__alloyId1625 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1625"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1625);
    $.__views.__alloyId1626 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1853"
    });
    $.__views.view4.add($.__views.__alloyId1853);
    $.__views.__alloyId1854 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1854"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1854);
    $.__views.__alloyId1855 = Ti.UI.createLabel({
=======
        id: "__alloyId1624"
    });
    $.__views.view4.add($.__views.__alloyId1624);
    $.__views.__alloyId1625 = Ti.UI.createView({
        backgroundColor: "#44C4D3",
        height: "30",
        id: "__alloyId1625"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1625);
    $.__views.__alloyId1626 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "SMS",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1626"
    });
    $.__views.__alloyId1625.add($.__views.__alloyId1626);
    $.__views.__alloyId1627 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
=======
<<<<<<< HEAD
        id: "__alloyId1855"
    });
    $.__views.__alloyId1854.add($.__views.__alloyId1855);
    $.__views.__alloyId1856 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1856"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1856);
    $.__views.__alloyId1857 = Ti.UI.createLabel({
=======
        id: "__alloyId1626"
    });
    $.__views.__alloyId1625.add($.__views.__alloyId1626);
    $.__views.__alloyId1627 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1627"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1627);
    $.__views.__alloyId1628 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to XOX network",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1628"
    });
    $.__views.__alloyId1627.add($.__views.__alloyId1628);
    $.__views.__alloyId1629 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1857"
    });
    $.__views.__alloyId1856.add($.__views.__alloyId1857);
    $.__views.__alloyId1858 = Ti.UI.createLabel({
=======
        id: "__alloyId1628"
    });
    $.__views.__alloyId1627.add($.__views.__alloyId1628);
    $.__views.__alloyId1629 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "7cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1629"
    });
    $.__views.__alloyId1627.add($.__views.__alloyId1629);
    $.__views.__alloyId1630 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1630"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1630);
    $.__views.__alloyId1631 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1858"
    });
    $.__views.__alloyId1856.add($.__views.__alloyId1858);
    $.__views.__alloyId1859 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1859"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1859);
    $.__views.__alloyId1860 = Ti.UI.createLabel({
=======
        id: "__alloyId1629"
    });
    $.__views.__alloyId1627.add($.__views.__alloyId1629);
    $.__views.__alloyId1630 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1630"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1630);
    $.__views.__alloyId1631 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to other networks",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1860"
    });
    $.__views.__alloyId1859.add($.__views.__alloyId1860);
    $.__views.__alloyId1861 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1631"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1631);
    $.__views.__alloyId1632 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "12cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1632"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1632);
    $.__views.__alloyId1633 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1633"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1861"
    });
    $.__views.__alloyId1859.add($.__views.__alloyId1861);
    $.__views.__alloyId1862 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1862"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1862);
    $.__views.__alloyId1863 = Ti.UI.createLabel({
=======
        id: "__alloyId1632"
    });
    $.__views.__alloyId1630.add($.__views.__alloyId1632);
    $.__views.__alloyId1633 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1633"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1633);
    $.__views.__alloyId1634 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to international",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1863"
    });
    $.__views.__alloyId1862.add($.__views.__alloyId1863);
    $.__views.__alloyId1864 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1634"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1634);
    $.__views.__alloyId1635 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "50cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1635"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1635);
    $.__views.__alloyId1636 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1636"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1636);
    $.__views.__alloyId1637 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1864"
    });
    $.__views.__alloyId1862.add($.__views.__alloyId1864);
    $.__views.__alloyId1865 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1865"
    });
    $.__views.__alloyId1853.add($.__views.__alloyId1865);
    $.__views.__alloyId1866 = Ti.UI.createLabel({
=======
        id: "__alloyId1635"
    });
    $.__views.__alloyId1633.add($.__views.__alloyId1635);
    $.__views.__alloyId1636 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "30",
        id: "__alloyId1636"
    });
    $.__views.__alloyId1624.add($.__views.__alloyId1636);
    $.__views.__alloyId1637 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "while roaming",
        width: "60%",
        height: "30",
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1866"
    });
    $.__views.__alloyId1865.add($.__views.__alloyId1866);
    $.__views.__alloyId1867 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1637"
    });
    $.__views.__alloyId1636.add($.__views.__alloyId1637);
    $.__views.__alloyId1638 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "from RM2",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1638"
    });
    $.__views.__alloyId1636.add($.__views.__alloyId1638);
    $.__views.__alloyId1639 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId1867"
    });
    $.__views.__alloyId1865.add($.__views.__alloyId1867);
    $.__views.__alloyId1868 = Ti.UI.createView({
=======
        id: "__alloyId1638"
    });
    $.__views.__alloyId1636.add($.__views.__alloyId1638);
    $.__views.__alloyId1639 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "white",
        bottom: "10",
<<<<<<< HEAD
        id: "__alloyId1639"
    });
    $.__views.view4.add($.__views.__alloyId1639);
    $.__views.__alloyId1640 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1640"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1640);
    $.__views.__alloyId1641 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1868"
    });
    $.__views.view4.add($.__views.__alloyId1868);
    $.__views.__alloyId1869 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1869"
    });
    $.__views.__alloyId1868.add($.__views.__alloyId1869);
    $.__views.__alloyId1870 = Ti.UI.createLabel({
=======
        id: "__alloyId1639"
    });
    $.__views.view4.add($.__views.__alloyId1639);
    $.__views.__alloyId1640 = Ti.UI.createView({
        backgroundColor: "black",
        height: "30",
        id: "__alloyId1640"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1640);
    $.__views.__alloyId1641 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "Video Call",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
=======
<<<<<<< HEAD
        id: "__alloyId1870"
    });
    $.__views.__alloyId1869.add($.__views.__alloyId1870);
    $.__views.__alloyId1871 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1871"
    });
    $.__views.__alloyId1868.add($.__views.__alloyId1871);
    $.__views.__alloyId1872 = Ti.UI.createLabel({
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
        id: "__alloyId1641"
    });
    $.__views.__alloyId1640.add($.__views.__alloyId1641);
    $.__views.__alloyId1642 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1642"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1642);
    $.__views.__alloyId1643 = Ti.UI.createLabel({
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to XOX network (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1643"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1643);
    $.__views.__alloyId1644 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1872"
    });
    $.__views.__alloyId1871.add($.__views.__alloyId1872);
    $.__views.__alloyId1873 = Ti.UI.createLabel({
=======
        id: "__alloyId1643"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1643);
    $.__views.__alloyId1644 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "28cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1644"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1644);
    $.__views.__alloyId1645 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1645"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1873"
    });
    $.__views.__alloyId1871.add($.__views.__alloyId1873);
    $.__views.__alloyId1874 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1874"
    });
    $.__views.__alloyId1868.add($.__views.__alloyId1874);
    $.__views.__alloyId1875 = Ti.UI.createLabel({
=======
        id: "__alloyId1644"
    });
    $.__views.__alloyId1642.add($.__views.__alloyId1644);
    $.__views.__alloyId1645 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: Ti.UI.SIZE,
        id: "__alloyId1645"
    });
    $.__views.__alloyId1639.add($.__views.__alloyId1645);
    $.__views.__alloyId1646 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "to other networks (Every 30sec)",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#44C4D3",
        left: "10",
<<<<<<< HEAD
        id: "__alloyId1646"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1646);
    $.__views.__alloyId1647 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId1875"
    });
    $.__views.__alloyId1874.add($.__views.__alloyId1875);
    $.__views.__alloyId1876 = Ti.UI.createLabel({
=======
        id: "__alloyId1646"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1646);
    $.__views.__alloyId1647 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
        text: "45cent",
        width: "auto",
        height: "30",
        color: "black",
<<<<<<< HEAD
        id: "__alloyId1647"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1647);
    $.__views.__alloyId1648 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1648"
    });
    $.__views.prepaid.add($.__views.__alloyId1648);
    subscribe ? $.__views.__alloyId1648.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1648!click!subscribe"] = true;
    $.__views.__alloyId1649 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1649"
    });
    $.__views.__alloyId1648.add($.__views.__alloyId1649);
=======
<<<<<<< HEAD
        id: "__alloyId1876"
    });
    $.__views.__alloyId1874.add($.__views.__alloyId1876);
    $.__views.__alloyId1877 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1877"
    });
    $.__views.prepaid.add($.__views.__alloyId1877);
    subscribe ? $.__views.__alloyId1877.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1877!click!subscribe"] = true;
    $.__views.__alloyId1878 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1878"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1878);
=======
        id: "__alloyId1647"
    });
    $.__views.__alloyId1645.add($.__views.__alloyId1647);
    $.__views.__alloyId1648 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId1648"
    });
    $.__views.prepaid.add($.__views.__alloyId1648);
    subscribe ? $.__views.__alloyId1648.addEventListener("click", subscribe) : __defers["$.__views.__alloyId1648!click!subscribe"] = true;
    $.__views.__alloyId1649 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId1649"
    });
    $.__views.__alloyId1648.add($.__views.__alloyId1649);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var rate;
    $.picker.setSelectedRow(0, 0, false);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId1726!click!back"] && $.__views.__alloyId1726.addEventListener("click", back);
    __defers["$.__views.rateLabel!click!showPicker"] && $.__views.rateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1727!click!showPicker"] && $.__views.__alloyId1727.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1877!click!subscribe"] && $.__views.__alloyId1877.addEventListener("click", subscribe);
=======
>>>>>>> 24/3/2015 onlinePurchase Subpages
    __defers["$.__views.__alloyId1497!click!back"] && $.__views.__alloyId1497.addEventListener("click", back);
    __defers["$.__views.rateLabel!click!showPicker"] && $.__views.rateLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId1498!click!showPicker"] && $.__views.__alloyId1498.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!rate"] && $.__views.picker.addEventListener("change", rate);
    __defers["$.__views.__alloyId1648!click!subscribe"] && $.__views.__alloyId1648.addEventListener("click", subscribe);
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;