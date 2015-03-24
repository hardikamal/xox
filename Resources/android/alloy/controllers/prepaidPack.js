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
<<<<<<< Updated upstream
        DRAWER.navigation("onlinePurchases", 1);
=======
        DRAWER.navigation("onlinePurchases", 2);
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
>>>>>>> Stashed changes
    }
    function simType(e) {
        console.log("simType");
        simType = e.row.title;
<<<<<<< Updated upstream
=======
        $.simLabel.text = simType;
    }
    function done() {
        console.log("done");
        $.contentView.height = 50;
        $.pickerView.height = 50;
        $.pickerContentView.height = 50;
        $.pickerView.setVisible(false);
        $.done.setVisible(false);
        $.picker.setVisible(false);
>>>>>>> Stashed changes
    }
    function highSpeed(e) {
        console.log("e.value: " + e.value);
    }
    function next() {
<<<<<<< Updated upstream
        DRAWER.navigation("prepaidPack2", 1);
=======
>>>>>>> Stashed changes
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
<<<<<<< HEAD
    $.__views.__alloyId1775 = Alloy.createController("_header", {
        id: "__alloyId1775",
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1716 = Alloy.createController("_header", {
        id: "__alloyId1716",
=======
    $.__views.__alloyId1775 = Alloy.createController("_header", {
        id: "__alloyId1775",
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1775 = Alloy.createController("_header", {
        id: "__alloyId1775",
>>>>>>> origin/master
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1775.setParent($.__views.prepaidPack);
    $.__views.__alloyId1776 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1776"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.prepaidPack.add($.__views.__alloyId1776);
    $.__views.__alloyId1777 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.prepaidPack.add($.__views.__alloyId1717);
    $.__views.__alloyId1718 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1545 = Alloy.createController("_header", {
        id: "__alloyId1545",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1545.setParent($.__views.prepaidPack);
    $.__views.__alloyId1546 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1546"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId430 = Alloy.createController("_header", {
        id: "__alloyId430",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId430.setParent($.__views.prepaidPack);
    $.__views.__alloyId431 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId431"
    });
    $.__views.prepaidPack.add($.__views.__alloyId431);
    $.__views.__alloyId432 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.prepaidPack.add($.__views.__alloyId1776);
    $.__views.__alloyId1777 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.prepaidPack.add($.__views.__alloyId1776);
    $.__views.__alloyId1777 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1777"
    });
    $.__views.__alloyId1776.add($.__views.__alloyId1777);
    $.__views.__alloyId1778 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1718"
    });
    $.__views.__alloyId1717.add($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createImageView({
=======
        id: "__alloyId1547"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createImageView({
>>>>>>> origin/master
=======
        id: "__alloyId432"
    });
    $.__views.__alloyId431.add($.__views.__alloyId432);
    $.__views.__alloyId433 = Ti.UI.createImageView({
>>>>>>> Stashed changes
=======
        id: "__alloyId1777"
    });
    $.__views.__alloyId1776.add($.__views.__alloyId1777);
    $.__views.__alloyId1778 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1777"
    });
    $.__views.__alloyId1776.add($.__views.__alloyId1777);
    $.__views.__alloyId1778 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1778"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1719"
=======
        id: "__alloyId1778"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1778"
>>>>>>> origin/master
    });
    $.__views.__alloyId1776.add($.__views.__alloyId1778);
    back ? $.__views.__alloyId1778.addEventListener("click", back) : __defers["$.__views.__alloyId1778!click!back"] = true;
    $.__views.__alloyId1779 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1779"
<<<<<<< HEAD
    });
<<<<<<< HEAD
    $.__views.prepaidPack.add($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1546.add($.__views.__alloyId1548);
    back ? $.__views.__alloyId1548.addEventListener("click", back) : __defers["$.__views.__alloyId1548!click!back"] = true;
    $.__views.__alloyId1549 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1549"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId433"
    });
    $.__views.__alloyId431.add($.__views.__alloyId433);
    back ? $.__views.__alloyId433.addEventListener("click", back) : __defers["$.__views.__alloyId433!click!back"] = true;
    $.__views.__alloyId434 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId434"
    });
    $.__views.prepaidPack.add($.__views.__alloyId434);
    $.__views.__alloyId435 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.prepaidPack.add($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.prepaidPack.add($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1780"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1721"
=======
        id: "__alloyId1780"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1780"
>>>>>>> origin/master
    });
    $.__views.__alloyId1779.add($.__views.__alloyId1780);
    $.__views.__alloyId1781 = Ti.UI.createLabel({
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId1781"
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.__alloyId1779.add($.__views.__alloyId1781);
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId1549.add($.__views.__alloyId1551);
>>>>>>> origin/master
=======
        id: "__alloyId435"
    });
    $.__views.__alloyId434.add($.__views.__alloyId435);
    $.__views.__alloyId436 = Ti.UI.createLabel({
        text: "ORDERING",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
        id: "__alloyId436"
    });
    $.__views.__alloyId434.add($.__views.__alloyId436);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1779.add($.__views.__alloyId1781);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1779.add($.__views.__alloyId1781);
>>>>>>> origin/master
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1782 = Ti.UI.createView({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1723 = Ti.UI.createView({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1782 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId1782"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createLabel({
=======
    $.__views.scrollView.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1552 = Ti.UI.createView({
=======
    $.__views.__alloyId1782 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId1782"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "horizontal",
        height: "50"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.__alloyId437 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.scrollView.add($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.scrollView.add($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1783"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1724"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1783"
>>>>>>> origin/master
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1783);
    $.__views.__alloyId1784 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId1784"
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
    $.__views.__alloyId1723.add($.__views.__alloyId1725);
=======
        id: "__alloyId1553"
=======
        id: "__alloyId1783"
>>>>>>> origin/master
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1783);
    $.__views.__alloyId1784 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId1784"
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
>>>>>>> origin/master
    $.__views.__alloyId1782.add($.__views.__alloyId1784);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
    $.__views.__alloyId1784.add($.__views.picker);
    var __alloyId1785 = [];
    $.__views.__alloyId1786 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1786"
    });
    __alloyId1785.push($.__views.__alloyId1786);
    $.__views.__alloyId1787 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1787"
    });
    __alloyId1785.push($.__views.__alloyId1787);
    $.__views.__alloyId1788 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1788"
    });
    __alloyId1785.push($.__views.__alloyId1788);
    $.__views.picker.add(__alloyId1785);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1789 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId1789"
    });
    $.__views.__alloyId1784.add($.__views.__alloyId1789);
    $.__views.__alloyId1790 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1790"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1790);
    $.__views.__alloyId1791 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1731);
    $.__views.__alloyId1732 = Ti.UI.createLabel({
=======
        id: "__alloyId1559"
    });
    $.__views.__alloyId1554.add($.__views.__alloyId1559);
    $.__views.__alloyId1560 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1560"
    });
    $.__views.scrollView.add($.__views.__alloyId1560);
    $.__views.__alloyId1561 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId437"
    });
    $.__views.contentView.add($.__views.__alloyId437);
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
    $.__views.__alloyId438 = Ti.UI.createImageView({
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
        id: "__alloyId438"
    });
    $.__views.pickerContentView.add($.__views.__alloyId438);
    showPicker ? $.__views.__alloyId438.addEventListener("click", showPicker) : __defers["$.__views.__alloyId438!click!showPicker"] = true;
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
        visible: "false"
    });
    $.__views.pickerView.add($.__views.picker);
    var __alloyId439 = [];
    $.__views.__alloyId440 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId440"
    });
    __alloyId439.push($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId441"
    });
    __alloyId439.push($.__views.__alloyId441);
    $.__views.__alloyId442 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId442"
    });
    __alloyId439.push($.__views.__alloyId442);
    $.__views.picker.add(__alloyId439);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId443 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId443"
    });
    $.__views.scrollView.add($.__views.__alloyId443);
    $.__views.__alloyId444 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.scrollView.add($.__views.__alloyId1790);
    $.__views.__alloyId1791 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.scrollView.add($.__views.__alloyId1790);
    $.__views.__alloyId1791 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1791"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1732"
=======
        id: "__alloyId1791"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1791"
>>>>>>> origin/master
    });
    $.__views.__alloyId1790.add($.__views.__alloyId1791);
    $.__views.__alloyId1792 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1792"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1790.add($.__views.__alloyId1792);
=======
<<<<<<< HEAD
    $.__views.__alloyId1731.add($.__views.__alloyId1733);
=======
        id: "__alloyId1561"
    });
    $.__views.__alloyId1560.add($.__views.__alloyId1561);
    $.__views.__alloyId1562 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1562"
    });
    $.__views.__alloyId1560.add($.__views.__alloyId1562);
>>>>>>> origin/master
=======
        id: "__alloyId444"
    });
    $.__views.__alloyId443.add($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId445"
    });
    $.__views.__alloyId443.add($.__views.__alloyId445);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1790.add($.__views.__alloyId1792);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1790.add($.__views.__alloyId1792);
>>>>>>> origin/master
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1792.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1793 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1733.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1734 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1562.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1563 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId445.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId446 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1792.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1793 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1792.add($.__views.switch1);
    highSpeed ? $.__views.switch1.addEventListener("change", highSpeed) : __defers["$.__views.switch1!change!highSpeed"] = true;
    $.__views.__alloyId1793 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1793"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1734"
=======
        id: "__alloyId1793"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1793"
>>>>>>> origin/master
    });
    $.__views.__alloyId1792.add($.__views.__alloyId1793);
    $.__views.__alloyId1794 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1794"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createLabel({
=======
        id: "__alloyId1563"
    });
    $.__views.__alloyId1562.add($.__views.__alloyId1563);
    $.__views.__alloyId1564 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1564"
    });
    $.__views.scrollView.add($.__views.__alloyId1564);
    $.__views.__alloyId1565 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId446"
    });
    $.__views.__alloyId445.add($.__views.__alloyId446);
    $.__views.__alloyId447 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId447"
    });
    $.__views.scrollView.add($.__views.__alloyId447);
    $.__views.__alloyId448 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.scrollView.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.scrollView.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1795"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1796"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1796);
    $.__views.__alloyId1797 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1797"
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1797);
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1736"
=======
        id: "__alloyId1795"
>>>>>>> origin/master
=======
        id: "__alloyId1795"
>>>>>>> origin/master
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1796"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1796);
    $.__views.__alloyId1797 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1797"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1564.add($.__views.__alloyId1565);
    $.__views.__alloyId1566 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1566"
    });
    $.__views.__alloyId1564.add($.__views.__alloyId1566);
    $.__views.__alloyId1567 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1567"
    });
    $.__views.__alloyId1566.add($.__views.__alloyId1567);
>>>>>>> origin/master
=======
        id: "__alloyId448"
    });
    $.__views.__alloyId447.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId449"
    });
    $.__views.__alloyId447.add($.__views.__alloyId449);
    $.__views.__alloyId450 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId450"
    });
    $.__views.__alloyId449.add($.__views.__alloyId450);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1796.add($.__views.__alloyId1797);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1796.add($.__views.__alloyId1797);
>>>>>>> origin/master
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1797.add($.__views.switch2);
    $.__views.__alloyId1798 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1738.add($.__views.switch2);
    $.__views.__alloyId1739 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1567.add($.__views.switch2);
    $.__views.__alloyId1568 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId450.add($.__views.switch2);
    $.__views.__alloyId451 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1797.add($.__views.switch2);
    $.__views.__alloyId1798 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1797.add($.__views.switch2);
    $.__views.__alloyId1798 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1798"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1739"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1798"
>>>>>>> origin/master
    });
    $.__views.__alloyId1797.add($.__views.__alloyId1798);
    $.__views.__alloyId1799 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1799"
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1799);
=======
        id: "__alloyId1740"
=======
        id: "__alloyId1798"
>>>>>>> origin/master
    });
    $.__views.__alloyId1797.add($.__views.__alloyId1798);
    $.__views.__alloyId1799 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1799"
    });
<<<<<<< HEAD
    $.__views.__alloyId1566.add($.__views.__alloyId1569);
>>>>>>> origin/master
=======
        id: "__alloyId451"
    });
    $.__views.__alloyId450.add($.__views.__alloyId451);
    $.__views.__alloyId452 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId452"
    });
    $.__views.__alloyId449.add($.__views.__alloyId452);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1796.add($.__views.__alloyId1799);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1799"
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1799);
>>>>>>> origin/master
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1799.add($.__views.switch3);
    $.__views.__alloyId1800 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1740.add($.__views.switch3);
    $.__views.__alloyId1741 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1569.add($.__views.switch3);
    $.__views.__alloyId1570 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId452.add($.__views.switch3);
    $.__views.__alloyId453 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1799.add($.__views.switch3);
    $.__views.__alloyId1800 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1799.add($.__views.switch3);
    $.__views.__alloyId1800 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1800"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1741"
=======
        id: "__alloyId1800"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1800"
>>>>>>> origin/master
    });
    $.__views.__alloyId1799.add($.__views.__alloyId1800);
    $.__views.__alloyId1801 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1801"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1801);
    $.__views.__alloyId1802 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1802"
<<<<<<< HEAD
    });
<<<<<<< HEAD
    $.__views.__alloyId1801.add($.__views.__alloyId1802);
=======
<<<<<<< HEAD
    $.__views.__alloyId1564.add($.__views.__alloyId1571);
    $.__views.__alloyId1572 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1572"
    });
    $.__views.__alloyId1571.add($.__views.__alloyId1572);
>>>>>>> origin/master
=======
        id: "__alloyId453"
    });
    $.__views.__alloyId452.add($.__views.__alloyId453);
    $.__views.__alloyId454 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId454"
    });
    $.__views.__alloyId447.add($.__views.__alloyId454);
    $.__views.__alloyId455 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId455"
    });
    $.__views.__alloyId454.add($.__views.__alloyId455);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1801.add($.__views.__alloyId1802);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1802);
>>>>>>> origin/master
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1802.add($.__views.switch4);
    $.__views.__alloyId1803 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1743.add($.__views.switch4);
    $.__views.__alloyId1744 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1572.add($.__views.switch4);
    $.__views.__alloyId1573 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId455.add($.__views.switch4);
    $.__views.__alloyId456 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1802.add($.__views.switch4);
    $.__views.__alloyId1803 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1802.add($.__views.switch4);
    $.__views.__alloyId1803 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1803"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1744"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1803"
>>>>>>> origin/master
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1804"
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1804);
=======
        id: "__alloyId1745"
=======
        id: "__alloyId1803"
>>>>>>> origin/master
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1804"
    });
<<<<<<< HEAD
    $.__views.__alloyId1571.add($.__views.__alloyId1574);
>>>>>>> origin/master
=======
        id: "__alloyId456"
    });
    $.__views.__alloyId455.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId457"
    });
    $.__views.__alloyId454.add($.__views.__alloyId457);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1801.add($.__views.__alloyId1804);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1804"
    });
    $.__views.__alloyId1801.add($.__views.__alloyId1804);
>>>>>>> origin/master
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1804.add($.__views.switch5);
    $.__views.__alloyId1805 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1745.add($.__views.switch5);
    $.__views.__alloyId1746 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1574.add($.__views.switch5);
    $.__views.__alloyId1575 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId457.add($.__views.switch5);
    $.__views.__alloyId458 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1804.add($.__views.switch5);
    $.__views.__alloyId1805 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1804.add($.__views.switch5);
    $.__views.__alloyId1805 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1805"
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1746"
=======
        id: "__alloyId1805"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
    });
    $.__views.__alloyId1804.add($.__views.__alloyId1805);
    $.__views.__alloyId1806 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1806"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId1574.add($.__views.__alloyId1575);
    $.__views.__alloyId1576 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1576"
    });
    $.__views.scrollView.add($.__views.__alloyId1576);
    $.__views.__alloyId1577 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
        id: "__alloyId458"
    });
    $.__views.__alloyId457.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId459"
    });
    $.__views.scrollView.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createLabel({
>>>>>>> Stashed changes
=======
    $.__views.scrollView.add($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1805"
    });
    $.__views.__alloyId1804.add($.__views.__alloyId1805);
    $.__views.__alloyId1806 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1806"
    });
    $.__views.scrollView.add($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId1807"
    });
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1748"
    });
    $.__views.__alloyId1747.add($.__views.__alloyId1748);
    $.__views.__alloyId1749 = Ti.UI.createTextField({
=======
        id: "__alloyId1577"
=======
        id: "__alloyId1807"
>>>>>>> origin/master
    });
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId1807"
    });
>>>>>>> origin/master
    $.__views.__alloyId1806.add($.__views.__alloyId1807);
    $.__views.__alloyId1808 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
        id: "__alloyId1808"
    });
    $.__views.__alloyId1806.add($.__views.__alloyId1808);
    $.__views.__alloyId1809 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1809"
    });
    $.__views.scrollView.add($.__views.__alloyId1809);
    $.__views.__alloyId1810 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1810"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1809.add($.__views.__alloyId1810);
=======
<<<<<<< HEAD
    $.__views.__alloyId1750.add($.__views.__alloyId1751);
=======
        id: "__alloyId1578"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1578);
    $.__views.__alloyId1579 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1579"
    });
    $.__views.scrollView.add($.__views.__alloyId1579);
    $.__views.__alloyId1580 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1580"
    });
    $.__views.__alloyId1579.add($.__views.__alloyId1580);
>>>>>>> origin/master
=======
        id: "__alloyId460"
    });
    $.__views.__alloyId459.add($.__views.__alloyId460);
    $.__views.__alloyId461 = Ti.UI.createTextField({
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderColor: "#F2F2F2",
        id: "__alloyId461"
    });
    $.__views.__alloyId459.add($.__views.__alloyId461);
    $.__views.__alloyId462 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId462"
    });
    $.__views.scrollView.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId463"
    });
    $.__views.__alloyId462.add($.__views.__alloyId463);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1809.add($.__views.__alloyId1810);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1809.add($.__views.__alloyId1810);
>>>>>>> origin/master
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1810.add($.__views.switch6);
    $.__views.__alloyId1811 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1751.add($.__views.switch6);
    $.__views.__alloyId1752 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1580.add($.__views.switch6);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId1810.add($.__views.switch6);
    $.__views.__alloyId1811 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1810.add($.__views.switch6);
    $.__views.__alloyId1811 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1811"
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1811);
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId1580.add($.__views.__alloyId1581);
>>>>>>> origin/master
=======
    $.__views.__alloyId463.add($.__views.switch6);
    $.__views.__alloyId464 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId464"
    });
    $.__views.__alloyId463.add($.__views.__alloyId464);
    $.__views.__alloyId465 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId465"
    });
    $.__views.__alloyId462.add($.__views.__alloyId465);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1810.add($.__views.__alloyId1811);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1811);
>>>>>>> origin/master
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1810.add($.__views.switch7);
    $.__views.__alloyId1812 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1751.add($.__views.switch7);
    $.__views.__alloyId1753 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1580.add($.__views.switch7);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId1810.add($.__views.switch7);
    $.__views.__alloyId1812 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1810.add($.__views.switch7);
    $.__views.__alloyId1812 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1812"
    });
    $.__views.__alloyId1810.add($.__views.__alloyId1812);
    $.__views.__alloyId1813 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1813"
    });
    $.__views.scrollView.add($.__views.__alloyId1813);
    $.__views.__alloyId1814 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1814"
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1814);
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId1583.add($.__views.__alloyId1584);
>>>>>>> origin/master
=======
    $.__views.__alloyId465.add($.__views.switch7);
    $.__views.__alloyId466 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId466"
    });
    $.__views.__alloyId465.add($.__views.__alloyId466);
    $.__views.__alloyId467 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId467"
    });
    $.__views.__alloyId462.add($.__views.__alloyId467);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1813.add($.__views.__alloyId1814);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1813.add($.__views.__alloyId1814);
>>>>>>> origin/master
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1814.add($.__views.switch8);
    $.__views.__alloyId1815 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1755.add($.__views.switch8);
    $.__views.__alloyId1756 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1584.add($.__views.switch8);
    $.__views.__alloyId1585 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId1814.add($.__views.switch8);
    $.__views.__alloyId1815 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1814.add($.__views.switch8);
    $.__views.__alloyId1815 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1815"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1814.add($.__views.__alloyId1815);
=======
<<<<<<< HEAD
    $.__views.__alloyId1755.add($.__views.__alloyId1756);
=======
        id: "__alloyId1585"
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1585);
>>>>>>> origin/master
=======
    $.__views.__alloyId467.add($.__views.switch8);
    $.__views.__alloyId468 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId468"
    });
    $.__views.__alloyId467.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId469"
    });
    $.__views.__alloyId462.add($.__views.__alloyId469);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1814.add($.__views.__alloyId1815);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1814.add($.__views.__alloyId1815);
>>>>>>> origin/master
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1814.add($.__views.switch9);
    $.__views.__alloyId1816 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1755.add($.__views.switch9);
    $.__views.__alloyId1757 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1584.add($.__views.switch9);
    $.__views.__alloyId1586 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId1814.add($.__views.switch9);
    $.__views.__alloyId1816 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1814.add($.__views.switch9);
    $.__views.__alloyId1816 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1816"
    });
    $.__views.__alloyId1814.add($.__views.__alloyId1816);
    $.__views.__alloyId1817 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1817"
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.scrollView.add($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1818"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1818);
=======
    });
    $.__views.scrollView.add($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1818"
    });
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1587);
    $.__views.__alloyId1588 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1588"
    });
    $.__views.__alloyId1587.add($.__views.__alloyId1588);
>>>>>>> origin/master
=======
    $.__views.__alloyId469.add($.__views.switch9);
    $.__views.__alloyId470 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId470"
    });
    $.__views.__alloyId469.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId471"
    });
    $.__views.__alloyId462.add($.__views.__alloyId471);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1817.add($.__views.__alloyId1818);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.scrollView.add($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1818"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1818);
>>>>>>> origin/master
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1818.add($.__views.switch10);
    $.__views.__alloyId1819 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1759.add($.__views.switch10);
    $.__views.__alloyId1760 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1588.add($.__views.switch10);
    $.__views.__alloyId1589 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId1818.add($.__views.switch10);
    $.__views.__alloyId1819 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1818.add($.__views.switch10);
    $.__views.__alloyId1819 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1819"
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.__alloyId1818.add($.__views.__alloyId1819);
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId1588.add($.__views.__alloyId1589);
>>>>>>> origin/master
=======
    $.__views.__alloyId471.add($.__views.switch10);
    $.__views.__alloyId472 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId472"
    });
    $.__views.__alloyId471.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId473"
    });
    $.__views.__alloyId462.add($.__views.__alloyId473);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1818.add($.__views.__alloyId1819);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1818.add($.__views.__alloyId1819);
>>>>>>> origin/master
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1818.add($.__views.switch11);
    $.__views.__alloyId1820 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1759.add($.__views.switch11);
    $.__views.__alloyId1761 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1588.add($.__views.switch11);
    $.__views.__alloyId1590 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId1818.add($.__views.switch11);
    $.__views.__alloyId1820 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1818.add($.__views.switch11);
    $.__views.__alloyId1820 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1820"
    });
    $.__views.__alloyId1818.add($.__views.__alloyId1820);
    $.__views.__alloyId1821 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1821"
    });
    $.__views.scrollView.add($.__views.__alloyId1821);
    $.__views.__alloyId1822 = Ti.UI.createView({
<<<<<<< HEAD
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1822"
    });
<<<<<<< HEAD
    $.__views.__alloyId1821.add($.__views.__alloyId1822);
=======
<<<<<<< HEAD
    $.__views.scrollView.add($.__views.__alloyId1591);
    $.__views.__alloyId1592 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1592"
    });
    $.__views.__alloyId1591.add($.__views.__alloyId1592);
>>>>>>> origin/master
=======
    $.__views.__alloyId473.add($.__views.switch11);
    $.__views.__alloyId474 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId475"
    });
    $.__views.__alloyId462.add($.__views.__alloyId475);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1821.add($.__views.__alloyId1822);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1822"
    });
    $.__views.__alloyId1821.add($.__views.__alloyId1822);
>>>>>>> origin/master
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1822.add($.__views.switch12);
    $.__views.__alloyId1823 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1763.add($.__views.switch12);
    $.__views.__alloyId1764 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1592.add($.__views.switch12);
    $.__views.__alloyId1593 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId1822.add($.__views.switch12);
    $.__views.__alloyId1823 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1822.add($.__views.switch12);
    $.__views.__alloyId1823 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1823"
<<<<<<< HEAD
<<<<<<< HEAD
    });
    $.__views.__alloyId1822.add($.__views.__alloyId1823);
=======
    });
<<<<<<< HEAD
    $.__views.__alloyId1592.add($.__views.__alloyId1593);
>>>>>>> origin/master
=======
    $.__views.__alloyId475.add($.__views.switch12);
    $.__views.__alloyId476 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId476"
    });
    $.__views.__alloyId475.add($.__views.__alloyId476);
    $.__views.__alloyId477 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId477"
    });
    $.__views.__alloyId462.add($.__views.__alloyId477);
>>>>>>> Stashed changes
=======
    $.__views.__alloyId1822.add($.__views.__alloyId1823);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    });
    $.__views.__alloyId1822.add($.__views.__alloyId1823);
>>>>>>> origin/master
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId1822.add($.__views.switch13);
    $.__views.__alloyId1824 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1763.add($.__views.switch13);
    $.__views.__alloyId1765 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1592.add($.__views.switch13);
    $.__views.__alloyId1594 = Ti.UI.createLabel({
>>>>>>> origin/master
=======
    $.__views.__alloyId1822.add($.__views.switch13);
    $.__views.__alloyId1824 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId1822.add($.__views.switch13);
    $.__views.__alloyId1824 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
        id: "__alloyId1824"
    });
    $.__views.__alloyId1822.add($.__views.__alloyId1824);
    $.__views.__alloyId1825 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1825"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1825);
    next ? $.__views.__alloyId1825.addEventListener("click", next) : __defers["$.__views.__alloyId1825!click!next"] = true;
    $.__views.__alloyId1826 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1826"
    });
    $.__views.__alloyId1825.add($.__views.__alloyId1826);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
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
    $.picker.setSelectedRow(0, 0, false);
    var simType;
    __defers["$.__views.__alloyId1778!click!back"] && $.__views.__alloyId1778.addEventListener("click", back);
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1825!click!next"] && $.__views.__alloyId1825.addEventListener("click", next);
=======
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
<<<<<<< HEAD
    __defers["$.__views.__alloyId1595!click!next"] && $.__views.__alloyId1595.addEventListener("click", next);
>>>>>>> origin/master
=======
    $.__views.__alloyId477.add($.__views.switch13);
    $.__views.__alloyId478 = Ti.UI.createLabel({
        text: "0103091675",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
        id: "__alloyId478"
    });
    $.__views.__alloyId477.add($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId479"
    });
    $.__views.prepaidPack.add($.__views.__alloyId479);
    next ? $.__views.__alloyId479.addEventListener("click", next) : __defers["$.__views.__alloyId479!click!next"] = true;
    $.__views.__alloyId480 = Ti.UI.createLabel({
        text: "Next",
        color: "white",
        id: "__alloyId480"
    });
    $.__views.__alloyId479.add($.__views.__alloyId480);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    var simType;
    $.picker.setSelectedRow(0, 0, false);
    __defers["$.__views.__alloyId433!click!back"] && $.__views.__alloyId433.addEventListener("click", back);
    __defers["$.__views.simLabel!click!showPicker"] && $.__views.simLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId438!click!showPicker"] && $.__views.__alloyId438.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId479!click!next"] && $.__views.__alloyId479.addEventListener("click", next);
>>>>>>> Stashed changes
=======
    __defers["$.__views.__alloyId1825!click!next"] && $.__views.__alloyId1825.addEventListener("click", next);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1825!click!next"] && $.__views.__alloyId1825.addEventListener("click", next);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;