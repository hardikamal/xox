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
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1716 = Alloy.createController("_header", {
        id: "__alloyId1716",
        __parentSymbol: $.__views.prepaidPack
    });
    $.__views.__alloyId1716.setParent($.__views.prepaidPack);
    $.__views.__alloyId1717 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1717"
    });
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
        text: "XOX PREPAID PACK",
        backgroundColor: "transparent",
        color: "white",
        left: "20",
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
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1719"
    });
    $.__views.__alloyId1717.add($.__views.__alloyId1719);
    back ? $.__views.__alloyId1719.addEventListener("click", back) : __defers["$.__views.__alloyId1719!click!back"] = true;
    $.__views.__alloyId1720 = Ti.UI.createView({
        layout: "vertical",
        height: "50",
        backgroundColor: "#F2F2F2",
        id: "__alloyId1720"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1720);
    $.__views.__alloyId1721 = Ti.UI.createLabel({
=======
        id: "__alloyId1548"
    });
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
        text: "Step 1 of 4",
        backgroundColor: "transparent",
        color: "black",
        left: "20",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1721"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1721);
    $.__views.__alloyId1722 = Ti.UI.createLabel({
=======
        id: "__alloyId1550"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1550);
    $.__views.__alloyId1551 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Ordering",
        backgroundColor: "transparent",
        color: "#4CC4D2",
        left: "20",
<<<<<<< HEAD
        id: "__alloyId1722"
    });
    $.__views.__alloyId1720.add($.__views.__alloyId1722);
=======
        id: "__alloyId1551"
    });
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
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "vertical",
        width: "90%"
    });
    $.__views.prepaidPack.add($.__views.scrollView);
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1723 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId1723"
    });
    $.__views.scrollView.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1552 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        top: "10",
        id: "__alloyId1552"
    });
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
        text: "Sim Type",
        color: "black",
        height: "50",
        width: "30%",
        top: "0",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1724"
    });
    $.__views.__alloyId1723.add($.__views.__alloyId1724);
    $.__views.__alloyId1725 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId1725"
    });
    $.__views.__alloyId1723.add($.__views.__alloyId1725);
=======
        id: "__alloyId1553"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        width: "70%",
        id: "__alloyId1554"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1554);
>>>>>>> origin/master
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        width: "100%",
        height: "50",
        borderRadius: "5",
        selectionIndicator: "true",
        backgroundColor: "black",
        visible: "true"
    });
<<<<<<< HEAD
    $.__views.__alloyId1725.add($.__views.picker);
    var __alloyId1726 = [];
    $.__views.__alloyId1727 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1727"
    });
    __alloyId1726.push($.__views.__alloyId1727);
    $.__views.__alloyId1728 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1728"
    });
    __alloyId1726.push($.__views.__alloyId1728);
    $.__views.__alloyId1729 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1729"
    });
    __alloyId1726.push($.__views.__alloyId1729);
    $.__views.picker.add(__alloyId1726);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1730 = Ti.UI.createImageView({
=======
    $.__views.__alloyId1554.add($.__views.picker);
    var __alloyId1555 = [];
    $.__views.__alloyId1556 = Ti.UI.createPickerRow({
        title: "Standard SIM",
        id: "__alloyId1556"
    });
    __alloyId1555.push($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createPickerRow({
        title: "Micro SIM",
        id: "__alloyId1557"
    });
    __alloyId1555.push($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createPickerRow({
        title: "Nano SIM",
        id: "__alloyId1558"
    });
    __alloyId1555.push($.__views.__alloyId1558);
    $.__views.picker.add(__alloyId1555);
    simType ? $.__views.picker.addEventListener("change", simType) : __defers["$.__views.picker!change!simType"] = true;
    $.__views.__alloyId1559 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
        id: "__alloyId1730"
    });
    $.__views.__alloyId1725.add($.__views.__alloyId1730);
    $.__views.__alloyId1731 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1731"
    });
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
        text: "Package",
        color: "black",
        height: "50",
        width: "30%",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1732"
    });
    $.__views.__alloyId1731.add($.__views.__alloyId1732);
    $.__views.__alloyId1733 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        width: "70%",
        id: "__alloyId1733"
    });
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
    $.__views.switch1 = Ti.UI.createSwitch({
        value: false,
        id: "switch1"
    });
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
        text: "Highspeed Internet",
        color: "black",
        height: "50",
        width: "auto",
        left: "10",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1734"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1734);
    $.__views.__alloyId1735 = Ti.UI.createView({
        layout: "vertical",
        height: "130",
        id: "__alloyId1735"
    });
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
        text: "Top Up Voucher (Optional)*",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1736"
    });
    $.__views.__alloyId1735.add($.__views.__alloyId1736);
    $.__views.__alloyId1737 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1737"
    });
    $.__views.__alloyId1735.add($.__views.__alloyId1737);
    $.__views.__alloyId1738 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1738"
    });
    $.__views.__alloyId1737.add($.__views.__alloyId1738);
=======
        id: "__alloyId1565"
    });
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
    $.__views.switch2 = Ti.UI.createSwitch({
        value: false,
        id: "switch2",
        height: "50"
    });
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
        text: "RM10",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1739"
    });
    $.__views.__alloyId1738.add($.__views.__alloyId1739);
    $.__views.__alloyId1740 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1740"
    });
    $.__views.__alloyId1737.add($.__views.__alloyId1740);
=======
        id: "__alloyId1568"
    });
    $.__views.__alloyId1567.add($.__views.__alloyId1568);
    $.__views.__alloyId1569 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1569"
    });
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
    $.__views.switch3 = Ti.UI.createSwitch({
        value: false,
        id: "switch3",
        height: "50"
    });
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
        text: "RM30",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1741"
    });
    $.__views.__alloyId1740.add($.__views.__alloyId1741);
    $.__views.__alloyId1742 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1742"
    });
    $.__views.__alloyId1735.add($.__views.__alloyId1742);
    $.__views.__alloyId1743 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1743"
    });
    $.__views.__alloyId1742.add($.__views.__alloyId1743);
=======
        id: "__alloyId1570"
    });
    $.__views.__alloyId1569.add($.__views.__alloyId1570);
    $.__views.__alloyId1571 = Ti.UI.createView({
        layout: "horizontal",
        height: "50",
        id: "__alloyId1571"
    });
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
    $.__views.switch4 = Ti.UI.createSwitch({
        value: false,
        id: "switch4",
        height: "50"
    });
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
        text: "RM50",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1744"
    });
    $.__views.__alloyId1743.add($.__views.__alloyId1744);
    $.__views.__alloyId1745 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1745"
    });
    $.__views.__alloyId1742.add($.__views.__alloyId1745);
=======
        id: "__alloyId1573"
    });
    $.__views.__alloyId1572.add($.__views.__alloyId1573);
    $.__views.__alloyId1574 = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        id: "__alloyId1574"
    });
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
    $.__views.switch5 = Ti.UI.createSwitch({
        value: false,
        id: "switch5",
        height: "50"
    });
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
        text: "None",
        color: "black",
        height: "50",
        width: Ti.UI.SIZE,
        left: "10",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1746"
    });
    $.__views.__alloyId1745.add($.__views.__alloyId1746);
    $.__views.__alloyId1747 = Ti.UI.createView({
        layout: "vertical",
        height: "80",
        id: "__alloyId1747"
    });
    $.__views.scrollView.add($.__views.__alloyId1747);
    $.__views.__alloyId1748 = Ti.UI.createLabel({
=======
        id: "__alloyId1575"
    });
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
        text: "Number Selection",
        color: "black",
        height: "30",
        left: "0",
<<<<<<< Updated upstream
<<<<<<< HEAD
        id: "__alloyId1748"
    });
    $.__views.__alloyId1747.add($.__views.__alloyId1748);
    $.__views.__alloyId1749 = Ti.UI.createTextField({
=======
        id: "__alloyId1577"
    });
    $.__views.__alloyId1576.add($.__views.__alloyId1577);
    $.__views.__alloyId1578 = Ti.UI.createTextField({
>>>>>>> origin/master
        height: "30",
        width: Ti.UI.FILL,
        top: "10",
        borderRadius: "5",
        color: "black",
        borderColor: "#F2F2F2",
<<<<<<< HEAD
        id: "__alloyId1749"
    });
    $.__views.__alloyId1747.add($.__views.__alloyId1749);
    $.__views.__alloyId1750 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1750"
    });
    $.__views.scrollView.add($.__views.__alloyId1750);
    $.__views.__alloyId1751 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1751"
    });
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
    $.__views.switch6 = Ti.UI.createSwitch({
        value: false,
        id: "switch6",
        height: "50"
    });
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1751.add($.__views.switch6);
    $.__views.__alloyId1752 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1580.add($.__views.switch6);
    $.__views.__alloyId1581 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1752"
    });
    $.__views.__alloyId1751.add($.__views.__alloyId1752);
=======
        id: "__alloyId1581"
    });
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
    $.__views.switch7 = Ti.UI.createSwitch({
        value: false,
        id: "switch7",
        height: "50"
    });
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1751.add($.__views.switch7);
    $.__views.__alloyId1753 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1580.add($.__views.switch7);
    $.__views.__alloyId1582 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1753"
    });
    $.__views.__alloyId1751.add($.__views.__alloyId1753);
    $.__views.__alloyId1754 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1754"
    });
    $.__views.scrollView.add($.__views.__alloyId1754);
    $.__views.__alloyId1755 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1755"
    });
    $.__views.__alloyId1754.add($.__views.__alloyId1755);
=======
        id: "__alloyId1582"
    });
    $.__views.__alloyId1580.add($.__views.__alloyId1582);
    $.__views.__alloyId1583 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1583"
    });
    $.__views.scrollView.add($.__views.__alloyId1583);
    $.__views.__alloyId1584 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1584"
    });
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
    $.__views.switch8 = Ti.UI.createSwitch({
        value: false,
        id: "switch8",
        height: "50"
    });
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1755.add($.__views.switch8);
    $.__views.__alloyId1756 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1584.add($.__views.switch8);
    $.__views.__alloyId1585 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1756"
    });
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
    $.__views.switch9 = Ti.UI.createSwitch({
        value: false,
        id: "switch9",
        height: "50"
    });
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1755.add($.__views.switch9);
    $.__views.__alloyId1757 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1584.add($.__views.switch9);
    $.__views.__alloyId1586 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1757"
    });
    $.__views.__alloyId1755.add($.__views.__alloyId1757);
    $.__views.__alloyId1758 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1758"
    });
    $.__views.scrollView.add($.__views.__alloyId1758);
    $.__views.__alloyId1759 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1759"
    });
    $.__views.__alloyId1758.add($.__views.__alloyId1759);
=======
        id: "__alloyId1586"
    });
    $.__views.__alloyId1584.add($.__views.__alloyId1586);
    $.__views.__alloyId1587 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1587"
    });
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
    $.__views.switch10 = Ti.UI.createSwitch({
        value: false,
        id: "switch10",
        height: "50"
    });
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1759.add($.__views.switch10);
    $.__views.__alloyId1760 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1588.add($.__views.switch10);
    $.__views.__alloyId1589 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1760"
    });
    $.__views.__alloyId1759.add($.__views.__alloyId1760);
=======
        id: "__alloyId1589"
    });
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
    $.__views.switch11 = Ti.UI.createSwitch({
        value: false,
        id: "switch11",
        height: "50"
    });
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1759.add($.__views.switch11);
    $.__views.__alloyId1761 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1588.add($.__views.switch11);
    $.__views.__alloyId1590 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1761"
    });
    $.__views.__alloyId1759.add($.__views.__alloyId1761);
    $.__views.__alloyId1762 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1762"
    });
    $.__views.scrollView.add($.__views.__alloyId1762);
    $.__views.__alloyId1763 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId1763"
    });
    $.__views.__alloyId1762.add($.__views.__alloyId1763);
=======
        id: "__alloyId1590"
    });
    $.__views.__alloyId1588.add($.__views.__alloyId1590);
    $.__views.__alloyId1591 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: "100%",
        id: "__alloyId1591"
    });
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
    $.__views.switch12 = Ti.UI.createSwitch({
        value: false,
        id: "switch12",
        height: "50"
    });
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1763.add($.__views.switch12);
    $.__views.__alloyId1764 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1592.add($.__views.switch12);
    $.__views.__alloyId1593 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1764"
    });
    $.__views.__alloyId1763.add($.__views.__alloyId1764);
=======
        id: "__alloyId1593"
    });
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
    $.__views.switch13 = Ti.UI.createSwitch({
        value: false,
        id: "switch13",
        height: "50"
    });
<<<<<<< Updated upstream
<<<<<<< HEAD
    $.__views.__alloyId1763.add($.__views.switch13);
    $.__views.__alloyId1765 = Ti.UI.createLabel({
=======
    $.__views.__alloyId1592.add($.__views.switch13);
    $.__views.__alloyId1594 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "0103091675",
        color: "black",
        height: "50",
        width: "30%",
        left: "5",
<<<<<<< HEAD
        id: "__alloyId1765"
    });
    $.__views.__alloyId1763.add($.__views.__alloyId1765);
    $.__views.__alloyId1766 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1766"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1766);
    next ? $.__views.__alloyId1766.addEventListener("click", next) : __defers["$.__views.__alloyId1766!click!next"] = true;
    $.__views.__alloyId1767 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1767"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1767);
=======
        id: "__alloyId1594"
    });
    $.__views.__alloyId1592.add($.__views.__alloyId1594);
    $.__views.__alloyId1595 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#4CC4D2",
        id: "__alloyId1595"
    });
    $.__views.prepaidPack.add($.__views.__alloyId1595);
    next ? $.__views.__alloyId1595.addEventListener("click", next) : __defers["$.__views.__alloyId1595!click!next"] = true;
    $.__views.__alloyId1596 = Ti.UI.createLabel({
        text: "NEXT",
        color: "white",
        id: "__alloyId1596"
    });
    $.__views.__alloyId1595.add($.__views.__alloyId1596);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.picker.setSelectedRow(0, 0, false);
    var simType;
    __defers["$.__views.__alloyId1719!click!back"] && $.__views.__alloyId1719.addEventListener("click", back);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
    __defers["$.__views.__alloyId1766!click!next"] && $.__views.__alloyId1766.addEventListener("click", next);
=======
    var simType;
    __defers["$.__views.__alloyId1548!click!back"] && $.__views.__alloyId1548.addEventListener("click", back);
    __defers["$.__views.picker!change!simType"] && $.__views.picker.addEventListener("change", simType);
    __defers["$.__views.switch1!change!highSpeed"] && $.__views.switch1.addEventListener("change", highSpeed);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;