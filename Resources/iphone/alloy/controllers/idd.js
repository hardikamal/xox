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
    function idd(e) {
        console.log("idd");
        idd = e.row.title;
        ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && ($.iddLabel.text = idd);
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
    this.__controllerPath = "idd";
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
    $.__views.idd = Ti.UI.createView({
        backgroundColor: "#E6E7E9",
        layout: "vertical",
        fullscreen: "true",
        id: "idd"
    });
    $.__views.idd && $.addTopLevelView($.__views.idd);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId593 = Alloy.createController("_header", {
        id: "__alloyId593",
=======
<<<<<<< HEAD
    $.__views.__alloyId639 = Alloy.createController("_header", {
        id: "__alloyId639",
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId593 = Alloy.createController("_header", {
        id: "__alloyId593",
>>>>>>> origin/master
        __parentSymbol: $.__views.idd
    });
    $.__views.__alloyId593.setParent($.__views.idd);
    $.__views.__alloyId594 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId594"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.idd.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createLabel({
=======
    $.__views.idd.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createLabel({
=======
    $.__views.__alloyId593 = Alloy.createController("_header", {
        id: "__alloyId593",
        __parentSymbol: $.__views.idd
    });
    $.__views.__alloyId593.setParent($.__views.idd);
    $.__views.__alloyId594 = Ti.UI.createView({
        layout: "composite",
        height: "50",
        backgroundColor: "#EB2127",
        id: "__alloyId594"
    });
    $.__views.idd.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.idd.add($.__views.__alloyId594);
    $.__views.__alloyId595 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "PREPAID",
        backgroundColor: "transparent",
        color: "white",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId595"
    });
    $.__views.__alloyId594.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId641"
    });
    $.__views.__alloyId640.add($.__views.__alloyId641);
    $.__views.__alloyId642 = Ti.UI.createImageView({
=======
        id: "__alloyId595"
    });
    $.__views.__alloyId594.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId595"
    });
    $.__views.__alloyId594.add($.__views.__alloyId595);
    $.__views.__alloyId596 = Ti.UI.createImageView({
>>>>>>> origin/master
        backgroundColor: "transparent",
        width: "30",
        height: "30",
        right: "10",
        image: "/images/close_icon.png",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId596"
    });
    $.__views.__alloyId594.add($.__views.__alloyId596);
    back ? $.__views.__alloyId596.addEventListener("click", back) : __defers["$.__views.__alloyId596!click!back"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId642"
    });
    $.__views.__alloyId640.add($.__views.__alloyId642);
    back ? $.__views.__alloyId642.addEventListener("click", back) : __defers["$.__views.__alloyId642!click!back"] = true;
=======
        id: "__alloyId596"
    });
    $.__views.__alloyId594.add($.__views.__alloyId596);
    back ? $.__views.__alloyId596.addEventListener("click", back) : __defers["$.__views.__alloyId596!click!back"] = true;
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId596"
    });
    $.__views.__alloyId594.add($.__views.__alloyId596);
    back ? $.__views.__alloyId596.addEventListener("click", back) : __defers["$.__views.__alloyId596!click!back"] = true;
>>>>>>> origin/master
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        layout: "vertical",
        height: "50"
    });
    $.__views.idd.add($.__views.contentView);
    $.__views.pickerContentView = Ti.UI.createView({
        id: "pickerContentView",
        layout: "composite",
        height: "50",
        width: "90%"
    });
    $.__views.contentView.add($.__views.pickerContentView);
    $.__views.iddLabel = Ti.UI.createLabel({
        id: "iddLabel",
        height: "30",
        width: "100%",
        backgroundColor: "#FCFCFC",
        borderRadius: "15",
        borderColor: "#FCFCFC",
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10"
    });
    $.__views.pickerContentView.add($.__views.iddLabel);
    showPicker ? $.__views.iddLabel.addEventListener("click", showPicker) : __defers["$.__views.iddLabel!click!showPicker"] = true;
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId597 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId643 = Ti.UI.createImageView({
=======
    $.__views.__alloyId597 = Ti.UI.createImageView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId597 = Ti.UI.createImageView({
>>>>>>> origin/master
        image: "/images/dropdown_icon.png",
        width: "15",
        height: "10",
        right: "10",
        top: "20",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId597"
    });
    $.__views.pickerContentView.add($.__views.__alloyId597);
    showPicker ? $.__views.__alloyId597.addEventListener("click", showPicker) : __defers["$.__views.__alloyId597!click!showPicker"] = true;
=======
<<<<<<< HEAD
        id: "__alloyId643"
    });
    $.__views.pickerContentView.add($.__views.__alloyId643);
    showPicker ? $.__views.__alloyId643.addEventListener("click", showPicker) : __defers["$.__views.__alloyId643!click!showPicker"] = true;
=======
        id: "__alloyId597"
    });
    $.__views.pickerContentView.add($.__views.__alloyId597);
    showPicker ? $.__views.__alloyId597.addEventListener("click", showPicker) : __defers["$.__views.__alloyId597!click!showPicker"] = true;
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId597"
    });
    $.__views.pickerContentView.add($.__views.__alloyId597);
    showPicker ? $.__views.__alloyId597.addEventListener("click", showPicker) : __defers["$.__views.__alloyId597!click!showPicker"] = true;
>>>>>>> origin/master
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
<<<<<<< HEAD
    var __alloyId598 = [];
    $.__views.__alloyId599 = Ti.UI.createPickerRow({
=======
<<<<<<< HEAD
    var __alloyId644 = [];
    $.__views.__alloyId645 = Ti.UI.createPickerRow({
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    var __alloyId598 = [];
    $.__views.__alloyId599 = Ti.UI.createPickerRow({
>>>>>>> origin/master
        title: "All States",
        id: "__alloyId599"
    });
    __alloyId598.push($.__views.__alloyId599);
    $.__views.__alloyId600 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId600"
    });
    __alloyId598.push($.__views.__alloyId600);
    $.__views.__alloyId601 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId601"
    });
    __alloyId598.push($.__views.__alloyId601);
    $.__views.__alloyId602 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId602"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __alloyId598.push($.__views.__alloyId602);
    $.__views.picker.add(__alloyId598);
=======
    __alloyId644.push($.__views.__alloyId648);
    $.__views.picker.add(__alloyId644);
=======
    var __alloyId598 = [];
    $.__views.__alloyId599 = Ti.UI.createPickerRow({
        title: "All States",
        id: "__alloyId599"
    });
    __alloyId598.push($.__views.__alloyId599);
    $.__views.__alloyId600 = Ti.UI.createPickerRow({
        title: "Selangor",
        id: "__alloyId600"
    });
    __alloyId598.push($.__views.__alloyId600);
    $.__views.__alloyId601 = Ti.UI.createPickerRow({
        title: "Kuala Lumpur",
        id: "__alloyId601"
    });
    __alloyId598.push($.__views.__alloyId601);
    $.__views.__alloyId602 = Ti.UI.createPickerRow({
        title: "Johor",
        id: "__alloyId602"
    });
    __alloyId598.push($.__views.__alloyId602);
    $.__views.picker.add(__alloyId598);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __alloyId598.push($.__views.__alloyId602);
    $.__views.picker.add(__alloyId598);
>>>>>>> origin/master
    idd ? $.__views.picker.addEventListener("change", idd) : __defers["$.__views.picker!change!idd"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "composite",
        backgroundColor: "#E6E7E9",
        width: "90%"
    });
    $.__views.idd.add($.__views.scrollView);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "true"
    });
    $.__views.scrollView.add($.__views.view1);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId603 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId649 = Ti.UI.createView({
=======
    $.__views.__alloyId603 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId603 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "red",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId603"
=======
<<<<<<< HEAD
        id: "__alloyId649"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId603"
>>>>>>> origin/master
    });
    $.__views.view1.add($.__views.__alloyId603);
    $.__views.__alloyId604 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId604"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId603.add($.__views.__alloyId604);
    $.__views.__alloyId605 = Ti.UI.createLabel({
=======
    $.__views.__alloyId649.add($.__views.__alloyId650);
    $.__views.__alloyId651 = Ti.UI.createLabel({
=======
        id: "__alloyId603"
    });
    $.__views.view1.add($.__views.__alloyId603);
    $.__views.__alloyId604 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId604"
    });
    $.__views.__alloyId603.add($.__views.__alloyId604);
    $.__views.__alloyId605 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId603.add($.__views.__alloyId604);
    $.__views.__alloyId605 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId605"
=======
<<<<<<< HEAD
        id: "__alloyId651"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId605"
>>>>>>> origin/master
    });
    $.__views.__alloyId604.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId606"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId603.add($.__views.__alloyId606);
    $.__views.__alloyId607 = Ti.UI.createLabel({
=======
    $.__views.__alloyId649.add($.__views.__alloyId652);
    $.__views.__alloyId653 = Ti.UI.createLabel({
=======
        id: "__alloyId605"
    });
    $.__views.__alloyId604.add($.__views.__alloyId605);
    $.__views.__alloyId606 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId606"
    });
    $.__views.__alloyId603.add($.__views.__alloyId606);
    $.__views.__alloyId607 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId603.add($.__views.__alloyId606);
    $.__views.__alloyId607 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId607"
    });
    $.__views.__alloyId606.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId653"
    });
    $.__views.__alloyId652.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createLabel({
=======
        id: "__alloyId607"
    });
    $.__views.__alloyId606.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId607"
    });
    $.__views.__alloyId606.add($.__views.__alloyId607);
    $.__views.__alloyId608 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId608"
=======
<<<<<<< HEAD
        id: "__alloyId654"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId608"
>>>>>>> origin/master
    });
    $.__views.__alloyId606.add($.__views.__alloyId608);
    $.__views.__alloyId609 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId609"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId606.add($.__views.__alloyId609);
    $.__views.__alloyId610 = Ti.UI.createLabel({
=======
    $.__views.__alloyId652.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createLabel({
=======
        id: "__alloyId608"
    });
    $.__views.__alloyId606.add($.__views.__alloyId608);
    $.__views.__alloyId609 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId609"
    });
    $.__views.__alloyId606.add($.__views.__alloyId609);
    $.__views.__alloyId610 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId606.add($.__views.__alloyId609);
    $.__views.__alloyId610 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId610"
    });
    $.__views.__alloyId609.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId656"
    });
    $.__views.__alloyId655.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createLabel({
=======
        id: "__alloyId610"
    });
    $.__views.__alloyId609.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId610"
    });
    $.__views.__alloyId609.add($.__views.__alloyId610);
    $.__views.__alloyId611 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId611"
=======
<<<<<<< HEAD
        id: "__alloyId657"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId611"
>>>>>>> origin/master
    });
    $.__views.__alloyId609.add($.__views.__alloyId611);
    $.__views.__alloyId612 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId612"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId603.add($.__views.__alloyId612);
    $.__views.__alloyId613 = Ti.UI.createLabel({
=======
    $.__views.__alloyId649.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createLabel({
=======
        id: "__alloyId611"
    });
    $.__views.__alloyId609.add($.__views.__alloyId611);
    $.__views.__alloyId612 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId612"
    });
    $.__views.__alloyId603.add($.__views.__alloyId612);
    $.__views.__alloyId613 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId603.add($.__views.__alloyId612);
    $.__views.__alloyId613 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId613"
    });
    $.__views.__alloyId612.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId659"
    });
    $.__views.__alloyId658.add($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createLabel({
=======
        id: "__alloyId613"
    });
    $.__views.__alloyId612.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId613"
    });
    $.__views.__alloyId612.add($.__views.__alloyId613);
    $.__views.__alloyId614 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId614"
=======
<<<<<<< HEAD
        id: "__alloyId660"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId614"
>>>>>>> origin/master
    });
    $.__views.__alloyId612.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId615"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId612.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createLabel({
=======
    $.__views.__alloyId658.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createLabel({
=======
        id: "__alloyId614"
    });
    $.__views.__alloyId612.add($.__views.__alloyId614);
    $.__views.__alloyId615 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId615"
    });
    $.__views.__alloyId612.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId612.add($.__views.__alloyId615);
    $.__views.__alloyId616 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId616"
    });
    $.__views.__alloyId615.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId662"
    });
    $.__views.__alloyId661.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createLabel({
=======
        id: "__alloyId616"
    });
    $.__views.__alloyId615.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId616"
    });
    $.__views.__alloyId615.add($.__views.__alloyId616);
    $.__views.__alloyId617 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId617"
=======
<<<<<<< HEAD
        id: "__alloyId663"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId617"
>>>>>>> origin/master
    });
    $.__views.__alloyId615.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId618"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId603.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createLabel({
=======
    $.__views.__alloyId649.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createLabel({
=======
        id: "__alloyId617"
    });
    $.__views.__alloyId615.add($.__views.__alloyId617);
    $.__views.__alloyId618 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId618"
    });
    $.__views.__alloyId603.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId603.add($.__views.__alloyId618);
    $.__views.__alloyId619 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId619"
    });
    $.__views.__alloyId618.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId665"
    });
    $.__views.__alloyId664.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createLabel({
=======
        id: "__alloyId619"
    });
    $.__views.__alloyId618.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId619"
    });
    $.__views.__alloyId618.add($.__views.__alloyId619);
    $.__views.__alloyId620 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId620"
=======
<<<<<<< HEAD
        id: "__alloyId666"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId620"
>>>>>>> origin/master
    });
    $.__views.__alloyId618.add($.__views.__alloyId620);
    $.__views.__alloyId621 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId621"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId618.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createLabel({
=======
    $.__views.__alloyId664.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createLabel({
=======
        id: "__alloyId620"
    });
    $.__views.__alloyId618.add($.__views.__alloyId620);
    $.__views.__alloyId621 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId621"
    });
    $.__views.__alloyId618.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId618.add($.__views.__alloyId621);
    $.__views.__alloyId622 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId622"
    });
    $.__views.__alloyId621.add($.__views.__alloyId622);
    $.__views.__alloyId623 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId668"
    });
    $.__views.__alloyId667.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createLabel({
=======
        id: "__alloyId622"
    });
    $.__views.__alloyId621.add($.__views.__alloyId622);
    $.__views.__alloyId623 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId622"
    });
    $.__views.__alloyId621.add($.__views.__alloyId622);
    $.__views.__alloyId623 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId623"
=======
<<<<<<< HEAD
        id: "__alloyId669"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId623"
>>>>>>> origin/master
    });
    $.__views.__alloyId621.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId624"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId603.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createLabel({
=======
    $.__views.__alloyId649.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
=======
        id: "__alloyId623"
    });
    $.__views.__alloyId621.add($.__views.__alloyId623);
    $.__views.__alloyId624 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId624"
    });
    $.__views.__alloyId603.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId603.add($.__views.__alloyId624);
    $.__views.__alloyId625 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId625"
    });
    $.__views.__alloyId624.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId671"
    });
    $.__views.__alloyId670.add($.__views.__alloyId671);
    $.__views.__alloyId672 = Ti.UI.createLabel({
=======
        id: "__alloyId625"
    });
    $.__views.__alloyId624.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId625"
    });
    $.__views.__alloyId624.add($.__views.__alloyId625);
    $.__views.__alloyId626 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId626"
=======
<<<<<<< HEAD
        id: "__alloyId672"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId626"
>>>>>>> origin/master
    });
    $.__views.__alloyId624.add($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId627"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId624.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createLabel({
=======
    $.__views.__alloyId670.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createLabel({
=======
        id: "__alloyId626"
    });
    $.__views.__alloyId624.add($.__views.__alloyId626);
    $.__views.__alloyId627 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId627"
    });
    $.__views.__alloyId624.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId624.add($.__views.__alloyId627);
    $.__views.__alloyId628 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId628"
    });
    $.__views.__alloyId627.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId674"
    });
    $.__views.__alloyId673.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createLabel({
=======
        id: "__alloyId628"
    });
    $.__views.__alloyId627.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId628"
    });
    $.__views.__alloyId627.add($.__views.__alloyId628);
    $.__views.__alloyId629 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId629"
=======
<<<<<<< HEAD
        id: "__alloyId675"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId629"
>>>>>>> origin/master
    });
    $.__views.__alloyId627.add($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId630"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId603.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createLabel({
=======
    $.__views.__alloyId649.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createLabel({
=======
        id: "__alloyId629"
    });
    $.__views.__alloyId627.add($.__views.__alloyId629);
    $.__views.__alloyId630 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId630"
    });
    $.__views.__alloyId603.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId603.add($.__views.__alloyId630);
    $.__views.__alloyId631 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId631"
    });
    $.__views.__alloyId630.add($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId677"
    });
    $.__views.__alloyId676.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createLabel({
=======
        id: "__alloyId631"
    });
    $.__views.__alloyId630.add($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId631"
    });
    $.__views.__alloyId630.add($.__views.__alloyId631);
    $.__views.__alloyId632 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId632"
=======
<<<<<<< HEAD
        id: "__alloyId678"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId632"
>>>>>>> origin/master
    });
    $.__views.__alloyId630.add($.__views.__alloyId632);
    $.__views.__alloyId633 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId633"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId630.add($.__views.__alloyId633);
    $.__views.__alloyId634 = Ti.UI.createLabel({
=======
    $.__views.__alloyId676.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createLabel({
=======
        id: "__alloyId632"
    });
    $.__views.__alloyId630.add($.__views.__alloyId632);
    $.__views.__alloyId633 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId633"
    });
    $.__views.__alloyId630.add($.__views.__alloyId633);
    $.__views.__alloyId634 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId630.add($.__views.__alloyId633);
    $.__views.__alloyId634 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId634"
    });
    $.__views.__alloyId633.add($.__views.__alloyId634);
    $.__views.__alloyId635 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId680"
    });
    $.__views.__alloyId679.add($.__views.__alloyId680);
    $.__views.__alloyId681 = Ti.UI.createLabel({
=======
        id: "__alloyId634"
    });
    $.__views.__alloyId633.add($.__views.__alloyId634);
    $.__views.__alloyId635 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId634"
    });
    $.__views.__alloyId633.add($.__views.__alloyId634);
    $.__views.__alloyId635 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId635"
=======
<<<<<<< HEAD
        id: "__alloyId681"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId635"
>>>>>>> origin/master
    });
    $.__views.__alloyId633.add($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId636"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId603.add($.__views.__alloyId636);
    $.__views.__alloyId637 = Ti.UI.createLabel({
=======
    $.__views.__alloyId649.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createLabel({
=======
        id: "__alloyId635"
    });
    $.__views.__alloyId633.add($.__views.__alloyId635);
    $.__views.__alloyId636 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId636"
    });
    $.__views.__alloyId603.add($.__views.__alloyId636);
    $.__views.__alloyId637 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId603.add($.__views.__alloyId636);
    $.__views.__alloyId637 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId637"
    });
    $.__views.__alloyId636.add($.__views.__alloyId637);
    $.__views.__alloyId638 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId683"
    });
    $.__views.__alloyId682.add($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createLabel({
=======
        id: "__alloyId637"
    });
    $.__views.__alloyId636.add($.__views.__alloyId637);
    $.__views.__alloyId638 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId637"
    });
    $.__views.__alloyId636.add($.__views.__alloyId637);
    $.__views.__alloyId638 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId638"
=======
<<<<<<< HEAD
        id: "__alloyId684"
=======
        id: "__alloyId638"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId638"
>>>>>>> origin/master
    });
    $.__views.__alloyId636.add($.__views.__alloyId638);
    $.__views.__alloyId639 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId639"
    });
    $.__views.__alloyId636.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId685"
    });
    $.__views.__alloyId682.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createLabel({
=======
        id: "__alloyId639"
    });
    $.__views.__alloyId636.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId639"
    });
    $.__views.__alloyId636.add($.__views.__alloyId639);
    $.__views.__alloyId640 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId640"
    });
    $.__views.__alloyId639.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId686"
    });
    $.__views.__alloyId685.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createLabel({
=======
        id: "__alloyId640"
    });
    $.__views.__alloyId639.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId640"
    });
    $.__views.__alloyId639.add($.__views.__alloyId640);
    $.__views.__alloyId641 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId641"
    });
    $.__views.__alloyId639.add($.__views.__alloyId641);
=======
<<<<<<< HEAD
        id: "__alloyId687"
    });
    $.__views.__alloyId685.add($.__views.__alloyId687);
=======
        id: "__alloyId641"
    });
    $.__views.__alloyId639.add($.__views.__alloyId641);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId641"
    });
    $.__views.__alloyId639.add($.__views.__alloyId641);
>>>>>>> origin/master
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view2);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId642 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId688 = Ti.UI.createView({
=======
    $.__views.__alloyId642 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId642 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "blue",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId642"
=======
<<<<<<< HEAD
        id: "__alloyId688"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId642"
>>>>>>> origin/master
    });
    $.__views.view2.add($.__views.__alloyId642);
    $.__views.__alloyId643 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId643"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId642.add($.__views.__alloyId643);
    $.__views.__alloyId644 = Ti.UI.createLabel({
=======
    $.__views.__alloyId688.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createLabel({
=======
        id: "__alloyId642"
    });
    $.__views.view2.add($.__views.__alloyId642);
    $.__views.__alloyId643 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId643"
    });
    $.__views.__alloyId642.add($.__views.__alloyId643);
    $.__views.__alloyId644 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId642.add($.__views.__alloyId643);
    $.__views.__alloyId644 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId644"
=======
<<<<<<< HEAD
        id: "__alloyId690"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId644"
>>>>>>> origin/master
    });
    $.__views.__alloyId643.add($.__views.__alloyId644);
    $.__views.__alloyId645 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId645"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId642.add($.__views.__alloyId645);
    $.__views.__alloyId646 = Ti.UI.createLabel({
=======
    $.__views.__alloyId688.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createLabel({
=======
        id: "__alloyId644"
    });
    $.__views.__alloyId643.add($.__views.__alloyId644);
    $.__views.__alloyId645 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId645"
    });
    $.__views.__alloyId642.add($.__views.__alloyId645);
    $.__views.__alloyId646 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId642.add($.__views.__alloyId645);
    $.__views.__alloyId646 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId646"
    });
    $.__views.__alloyId645.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId692"
    });
    $.__views.__alloyId691.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createLabel({
=======
        id: "__alloyId646"
    });
    $.__views.__alloyId645.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId646"
    });
    $.__views.__alloyId645.add($.__views.__alloyId646);
    $.__views.__alloyId647 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId647"
=======
<<<<<<< HEAD
        id: "__alloyId693"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId647"
>>>>>>> origin/master
    });
    $.__views.__alloyId645.add($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId648"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId645.add($.__views.__alloyId648);
    $.__views.__alloyId649 = Ti.UI.createLabel({
=======
    $.__views.__alloyId691.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createLabel({
=======
        id: "__alloyId647"
    });
    $.__views.__alloyId645.add($.__views.__alloyId647);
    $.__views.__alloyId648 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId648"
    });
    $.__views.__alloyId645.add($.__views.__alloyId648);
    $.__views.__alloyId649 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId645.add($.__views.__alloyId648);
    $.__views.__alloyId649 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId649"
    });
    $.__views.__alloyId648.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId695"
    });
    $.__views.__alloyId694.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createLabel({
=======
        id: "__alloyId649"
    });
    $.__views.__alloyId648.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId649"
    });
    $.__views.__alloyId648.add($.__views.__alloyId649);
    $.__views.__alloyId650 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId650"
=======
<<<<<<< HEAD
        id: "__alloyId696"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId650"
>>>>>>> origin/master
    });
    $.__views.__alloyId648.add($.__views.__alloyId650);
    $.__views.__alloyId651 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId651"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId642.add($.__views.__alloyId651);
    $.__views.__alloyId652 = Ti.UI.createLabel({
=======
    $.__views.__alloyId688.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createLabel({
=======
        id: "__alloyId650"
    });
    $.__views.__alloyId648.add($.__views.__alloyId650);
    $.__views.__alloyId651 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId651"
    });
    $.__views.__alloyId642.add($.__views.__alloyId651);
    $.__views.__alloyId652 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId642.add($.__views.__alloyId651);
    $.__views.__alloyId652 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId652"
    });
    $.__views.__alloyId651.add($.__views.__alloyId652);
    $.__views.__alloyId653 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId698"
    });
    $.__views.__alloyId697.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createLabel({
=======
        id: "__alloyId652"
    });
    $.__views.__alloyId651.add($.__views.__alloyId652);
    $.__views.__alloyId653 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId652"
    });
    $.__views.__alloyId651.add($.__views.__alloyId652);
    $.__views.__alloyId653 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId653"
=======
<<<<<<< HEAD
        id: "__alloyId699"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId653"
>>>>>>> origin/master
    });
    $.__views.__alloyId651.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId654"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId651.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createLabel({
=======
    $.__views.__alloyId697.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
=======
        id: "__alloyId653"
    });
    $.__views.__alloyId651.add($.__views.__alloyId653);
    $.__views.__alloyId654 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId654"
    });
    $.__views.__alloyId651.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId651.add($.__views.__alloyId654);
    $.__views.__alloyId655 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId655"
    });
    $.__views.__alloyId654.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId701"
    });
    $.__views.__alloyId700.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createLabel({
=======
        id: "__alloyId655"
    });
    $.__views.__alloyId654.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId655"
    });
    $.__views.__alloyId654.add($.__views.__alloyId655);
    $.__views.__alloyId656 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId656"
=======
<<<<<<< HEAD
        id: "__alloyId702"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId656"
>>>>>>> origin/master
    });
    $.__views.__alloyId654.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId657"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId642.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createLabel({
=======
    $.__views.__alloyId688.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createLabel({
=======
        id: "__alloyId656"
    });
    $.__views.__alloyId654.add($.__views.__alloyId656);
    $.__views.__alloyId657 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId657"
    });
    $.__views.__alloyId642.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId642.add($.__views.__alloyId657);
    $.__views.__alloyId658 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId658"
    });
    $.__views.__alloyId657.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId704"
    });
    $.__views.__alloyId703.add($.__views.__alloyId704);
    $.__views.__alloyId705 = Ti.UI.createLabel({
=======
        id: "__alloyId658"
    });
    $.__views.__alloyId657.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId658"
    });
    $.__views.__alloyId657.add($.__views.__alloyId658);
    $.__views.__alloyId659 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId659"
=======
<<<<<<< HEAD
        id: "__alloyId705"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId659"
>>>>>>> origin/master
    });
    $.__views.__alloyId657.add($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId660"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId657.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createLabel({
=======
    $.__views.__alloyId703.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createLabel({
=======
        id: "__alloyId659"
    });
    $.__views.__alloyId657.add($.__views.__alloyId659);
    $.__views.__alloyId660 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId660"
    });
    $.__views.__alloyId657.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId657.add($.__views.__alloyId660);
    $.__views.__alloyId661 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId661"
    });
    $.__views.__alloyId660.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId707"
    });
    $.__views.__alloyId706.add($.__views.__alloyId707);
    $.__views.__alloyId708 = Ti.UI.createLabel({
=======
        id: "__alloyId661"
    });
    $.__views.__alloyId660.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId661"
    });
    $.__views.__alloyId660.add($.__views.__alloyId661);
    $.__views.__alloyId662 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId662"
=======
<<<<<<< HEAD
        id: "__alloyId708"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId662"
>>>>>>> origin/master
    });
    $.__views.__alloyId660.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId663"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId642.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createLabel({
=======
    $.__views.__alloyId688.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createLabel({
=======
        id: "__alloyId662"
    });
    $.__views.__alloyId660.add($.__views.__alloyId662);
    $.__views.__alloyId663 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId663"
    });
    $.__views.__alloyId642.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId642.add($.__views.__alloyId663);
    $.__views.__alloyId664 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId664"
    });
    $.__views.__alloyId663.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId710"
    });
    $.__views.__alloyId709.add($.__views.__alloyId710);
    $.__views.__alloyId711 = Ti.UI.createLabel({
=======
        id: "__alloyId664"
    });
    $.__views.__alloyId663.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId664"
    });
    $.__views.__alloyId663.add($.__views.__alloyId664);
    $.__views.__alloyId665 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId665"
=======
<<<<<<< HEAD
        id: "__alloyId711"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId665"
>>>>>>> origin/master
    });
    $.__views.__alloyId663.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId666"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId663.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createLabel({
=======
    $.__views.__alloyId709.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createLabel({
=======
        id: "__alloyId665"
    });
    $.__views.__alloyId663.add($.__views.__alloyId665);
    $.__views.__alloyId666 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId666"
    });
    $.__views.__alloyId663.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId663.add($.__views.__alloyId666);
    $.__views.__alloyId667 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId667"
    });
    $.__views.__alloyId666.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId713"
    });
    $.__views.__alloyId712.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createLabel({
=======
        id: "__alloyId667"
    });
    $.__views.__alloyId666.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId667"
    });
    $.__views.__alloyId666.add($.__views.__alloyId667);
    $.__views.__alloyId668 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId668"
=======
<<<<<<< HEAD
        id: "__alloyId714"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId668"
>>>>>>> origin/master
    });
    $.__views.__alloyId666.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId669"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId642.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createLabel({
=======
    $.__views.__alloyId688.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createLabel({
=======
        id: "__alloyId668"
    });
    $.__views.__alloyId666.add($.__views.__alloyId668);
    $.__views.__alloyId669 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId669"
    });
    $.__views.__alloyId642.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId642.add($.__views.__alloyId669);
    $.__views.__alloyId670 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId670"
    });
    $.__views.__alloyId669.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId716"
    });
    $.__views.__alloyId715.add($.__views.__alloyId716);
    $.__views.__alloyId717 = Ti.UI.createLabel({
=======
        id: "__alloyId670"
    });
    $.__views.__alloyId669.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId670"
    });
    $.__views.__alloyId669.add($.__views.__alloyId670);
    $.__views.__alloyId671 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId671"
=======
<<<<<<< HEAD
        id: "__alloyId717"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId671"
>>>>>>> origin/master
    });
    $.__views.__alloyId669.add($.__views.__alloyId671);
    $.__views.__alloyId672 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId672"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId669.add($.__views.__alloyId672);
    $.__views.__alloyId673 = Ti.UI.createLabel({
=======
    $.__views.__alloyId715.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createLabel({
=======
        id: "__alloyId671"
    });
    $.__views.__alloyId669.add($.__views.__alloyId671);
    $.__views.__alloyId672 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId672"
    });
    $.__views.__alloyId669.add($.__views.__alloyId672);
    $.__views.__alloyId673 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId669.add($.__views.__alloyId672);
    $.__views.__alloyId673 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId673"
    });
    $.__views.__alloyId672.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId719"
    });
    $.__views.__alloyId718.add($.__views.__alloyId719);
    $.__views.__alloyId720 = Ti.UI.createLabel({
=======
        id: "__alloyId673"
    });
    $.__views.__alloyId672.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId673"
    });
    $.__views.__alloyId672.add($.__views.__alloyId673);
    $.__views.__alloyId674 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId674"
=======
<<<<<<< HEAD
        id: "__alloyId720"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId674"
>>>>>>> origin/master
    });
    $.__views.__alloyId672.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId675"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId642.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createLabel({
=======
    $.__views.__alloyId688.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createLabel({
=======
        id: "__alloyId674"
    });
    $.__views.__alloyId672.add($.__views.__alloyId674);
    $.__views.__alloyId675 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId675"
    });
    $.__views.__alloyId642.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId642.add($.__views.__alloyId675);
    $.__views.__alloyId676 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId676"
    });
    $.__views.__alloyId675.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId722"
    });
    $.__views.__alloyId721.add($.__views.__alloyId722);
    $.__views.__alloyId723 = Ti.UI.createLabel({
=======
        id: "__alloyId676"
    });
    $.__views.__alloyId675.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId676"
    });
    $.__views.__alloyId675.add($.__views.__alloyId676);
    $.__views.__alloyId677 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId677"
=======
<<<<<<< HEAD
        id: "__alloyId723"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId677"
>>>>>>> origin/master
    });
    $.__views.__alloyId675.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId678"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId675.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createLabel({
=======
    $.__views.__alloyId721.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createLabel({
=======
        id: "__alloyId677"
    });
    $.__views.__alloyId675.add($.__views.__alloyId677);
    $.__views.__alloyId678 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId678"
    });
    $.__views.__alloyId675.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId675.add($.__views.__alloyId678);
    $.__views.__alloyId679 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId679"
    });
    $.__views.__alloyId678.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId725"
    });
    $.__views.__alloyId724.add($.__views.__alloyId725);
    $.__views.__alloyId726 = Ti.UI.createLabel({
=======
        id: "__alloyId679"
    });
    $.__views.__alloyId678.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId679"
    });
    $.__views.__alloyId678.add($.__views.__alloyId679);
    $.__views.__alloyId680 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId680"
    });
    $.__views.__alloyId678.add($.__views.__alloyId680);
=======
<<<<<<< HEAD
        id: "__alloyId726"
    });
    $.__views.__alloyId724.add($.__views.__alloyId726);
=======
        id: "__alloyId680"
    });
    $.__views.__alloyId678.add($.__views.__alloyId680);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId680"
    });
    $.__views.__alloyId678.add($.__views.__alloyId680);
>>>>>>> origin/master
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view3);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId681 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId727 = Ti.UI.createView({
=======
    $.__views.__alloyId681 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId681 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "green",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId681"
=======
<<<<<<< HEAD
        id: "__alloyId727"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId681"
>>>>>>> origin/master
    });
    $.__views.view3.add($.__views.__alloyId681);
    $.__views.__alloyId682 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId682"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId681.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createLabel({
=======
    $.__views.__alloyId727.add($.__views.__alloyId728);
    $.__views.__alloyId729 = Ti.UI.createLabel({
=======
        id: "__alloyId681"
    });
    $.__views.view3.add($.__views.__alloyId681);
    $.__views.__alloyId682 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId682"
    });
    $.__views.__alloyId681.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId681.add($.__views.__alloyId682);
    $.__views.__alloyId683 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId683"
=======
<<<<<<< HEAD
        id: "__alloyId729"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId683"
>>>>>>> origin/master
    });
    $.__views.__alloyId682.add($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId684"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId681.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createLabel({
=======
    $.__views.__alloyId727.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createLabel({
=======
        id: "__alloyId683"
    });
    $.__views.__alloyId682.add($.__views.__alloyId683);
    $.__views.__alloyId684 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId684"
    });
    $.__views.__alloyId681.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId681.add($.__views.__alloyId684);
    $.__views.__alloyId685 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId685"
    });
    $.__views.__alloyId684.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId731"
    });
    $.__views.__alloyId730.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createLabel({
=======
        id: "__alloyId685"
    });
    $.__views.__alloyId684.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId685"
    });
    $.__views.__alloyId684.add($.__views.__alloyId685);
    $.__views.__alloyId686 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId686"
=======
<<<<<<< HEAD
        id: "__alloyId732"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId686"
>>>>>>> origin/master
    });
    $.__views.__alloyId684.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId687"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId684.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createLabel({
=======
    $.__views.__alloyId730.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createLabel({
=======
        id: "__alloyId686"
    });
    $.__views.__alloyId684.add($.__views.__alloyId686);
    $.__views.__alloyId687 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId687"
    });
    $.__views.__alloyId684.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId684.add($.__views.__alloyId687);
    $.__views.__alloyId688 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId688"
    });
    $.__views.__alloyId687.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId734"
    });
    $.__views.__alloyId733.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createLabel({
=======
        id: "__alloyId688"
    });
    $.__views.__alloyId687.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId688"
    });
    $.__views.__alloyId687.add($.__views.__alloyId688);
    $.__views.__alloyId689 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId689"
=======
<<<<<<< HEAD
        id: "__alloyId735"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId689"
>>>>>>> origin/master
    });
    $.__views.__alloyId687.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId690"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId681.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createLabel({
=======
    $.__views.__alloyId727.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createLabel({
=======
        id: "__alloyId689"
    });
    $.__views.__alloyId687.add($.__views.__alloyId689);
    $.__views.__alloyId690 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId690"
    });
    $.__views.__alloyId681.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId681.add($.__views.__alloyId690);
    $.__views.__alloyId691 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId691"
    });
    $.__views.__alloyId690.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId737"
    });
    $.__views.__alloyId736.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createLabel({
=======
        id: "__alloyId691"
    });
    $.__views.__alloyId690.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId691"
    });
    $.__views.__alloyId690.add($.__views.__alloyId691);
    $.__views.__alloyId692 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId692"
=======
<<<<<<< HEAD
        id: "__alloyId738"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId692"
>>>>>>> origin/master
    });
    $.__views.__alloyId690.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId693"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId690.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createLabel({
=======
    $.__views.__alloyId736.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createLabel({
=======
        id: "__alloyId692"
    });
    $.__views.__alloyId690.add($.__views.__alloyId692);
    $.__views.__alloyId693 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId693"
    });
    $.__views.__alloyId690.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId690.add($.__views.__alloyId693);
    $.__views.__alloyId694 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId694"
    });
    $.__views.__alloyId693.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId740"
    });
    $.__views.__alloyId739.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createLabel({
=======
        id: "__alloyId694"
    });
    $.__views.__alloyId693.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId694"
    });
    $.__views.__alloyId693.add($.__views.__alloyId694);
    $.__views.__alloyId695 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId695"
=======
<<<<<<< HEAD
        id: "__alloyId741"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId695"
>>>>>>> origin/master
    });
    $.__views.__alloyId693.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId696"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId681.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
=======
    $.__views.__alloyId727.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createLabel({
=======
        id: "__alloyId695"
    });
    $.__views.__alloyId693.add($.__views.__alloyId695);
    $.__views.__alloyId696 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId696"
    });
    $.__views.__alloyId681.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId681.add($.__views.__alloyId696);
    $.__views.__alloyId697 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId697"
    });
    $.__views.__alloyId696.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId743"
    });
    $.__views.__alloyId742.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createLabel({
=======
        id: "__alloyId697"
    });
    $.__views.__alloyId696.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId697"
    });
    $.__views.__alloyId696.add($.__views.__alloyId697);
    $.__views.__alloyId698 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId698"
=======
<<<<<<< HEAD
        id: "__alloyId744"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId698"
>>>>>>> origin/master
    });
    $.__views.__alloyId696.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId699"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId696.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createLabel({
=======
    $.__views.__alloyId742.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createLabel({
=======
        id: "__alloyId698"
    });
    $.__views.__alloyId696.add($.__views.__alloyId698);
    $.__views.__alloyId699 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId699"
    });
    $.__views.__alloyId696.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId696.add($.__views.__alloyId699);
    $.__views.__alloyId700 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId700"
    });
    $.__views.__alloyId699.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId746"
    });
    $.__views.__alloyId745.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createLabel({
=======
        id: "__alloyId700"
    });
    $.__views.__alloyId699.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId700"
    });
    $.__views.__alloyId699.add($.__views.__alloyId700);
    $.__views.__alloyId701 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId701"
=======
<<<<<<< HEAD
        id: "__alloyId747"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId701"
>>>>>>> origin/master
    });
    $.__views.__alloyId699.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId702"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId681.add($.__views.__alloyId702);
    $.__views.__alloyId703 = Ti.UI.createLabel({
=======
    $.__views.__alloyId727.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createLabel({
=======
        id: "__alloyId701"
    });
    $.__views.__alloyId699.add($.__views.__alloyId701);
    $.__views.__alloyId702 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId702"
    });
    $.__views.__alloyId681.add($.__views.__alloyId702);
    $.__views.__alloyId703 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId681.add($.__views.__alloyId702);
    $.__views.__alloyId703 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId703"
    });
    $.__views.__alloyId702.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId749"
    });
    $.__views.__alloyId748.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createLabel({
=======
        id: "__alloyId703"
    });
    $.__views.__alloyId702.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId703"
    });
    $.__views.__alloyId702.add($.__views.__alloyId703);
    $.__views.__alloyId704 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId704"
=======
<<<<<<< HEAD
        id: "__alloyId750"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId704"
>>>>>>> origin/master
    });
    $.__views.__alloyId702.add($.__views.__alloyId704);
    $.__views.__alloyId705 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId705"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId702.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createLabel({
=======
    $.__views.__alloyId748.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
=======
        id: "__alloyId704"
    });
    $.__views.__alloyId702.add($.__views.__alloyId704);
    $.__views.__alloyId705 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId705"
    });
    $.__views.__alloyId702.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId702.add($.__views.__alloyId705);
    $.__views.__alloyId706 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId706"
    });
    $.__views.__alloyId705.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId752"
    });
    $.__views.__alloyId751.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createLabel({
=======
        id: "__alloyId706"
    });
    $.__views.__alloyId705.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId706"
    });
    $.__views.__alloyId705.add($.__views.__alloyId706);
    $.__views.__alloyId707 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId707"
=======
<<<<<<< HEAD
        id: "__alloyId753"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId707"
>>>>>>> origin/master
    });
    $.__views.__alloyId705.add($.__views.__alloyId707);
    $.__views.__alloyId708 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId708"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId681.add($.__views.__alloyId708);
    $.__views.__alloyId709 = Ti.UI.createLabel({
=======
    $.__views.__alloyId727.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createLabel({
=======
        id: "__alloyId707"
    });
    $.__views.__alloyId705.add($.__views.__alloyId707);
    $.__views.__alloyId708 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId708"
    });
    $.__views.__alloyId681.add($.__views.__alloyId708);
    $.__views.__alloyId709 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId681.add($.__views.__alloyId708);
    $.__views.__alloyId709 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId709"
    });
    $.__views.__alloyId708.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId755"
    });
    $.__views.__alloyId754.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createLabel({
=======
        id: "__alloyId709"
    });
    $.__views.__alloyId708.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId709"
    });
    $.__views.__alloyId708.add($.__views.__alloyId709);
    $.__views.__alloyId710 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId710"
=======
<<<<<<< HEAD
        id: "__alloyId756"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId710"
>>>>>>> origin/master
    });
    $.__views.__alloyId708.add($.__views.__alloyId710);
    $.__views.__alloyId711 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId711"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId708.add($.__views.__alloyId711);
    $.__views.__alloyId712 = Ti.UI.createLabel({
=======
    $.__views.__alloyId754.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createLabel({
=======
        id: "__alloyId710"
    });
    $.__views.__alloyId708.add($.__views.__alloyId710);
    $.__views.__alloyId711 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId711"
    });
    $.__views.__alloyId708.add($.__views.__alloyId711);
    $.__views.__alloyId712 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId708.add($.__views.__alloyId711);
    $.__views.__alloyId712 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId712"
    });
    $.__views.__alloyId711.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId758"
    });
    $.__views.__alloyId757.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createLabel({
=======
        id: "__alloyId712"
    });
    $.__views.__alloyId711.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId712"
    });
    $.__views.__alloyId711.add($.__views.__alloyId712);
    $.__views.__alloyId713 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId713"
=======
<<<<<<< HEAD
        id: "__alloyId759"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId713"
>>>>>>> origin/master
    });
    $.__views.__alloyId711.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId714"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId681.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createLabel({
=======
    $.__views.__alloyId727.add($.__views.__alloyId760);
    $.__views.__alloyId761 = Ti.UI.createLabel({
=======
        id: "__alloyId713"
    });
    $.__views.__alloyId711.add($.__views.__alloyId713);
    $.__views.__alloyId714 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId714"
    });
    $.__views.__alloyId681.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId681.add($.__views.__alloyId714);
    $.__views.__alloyId715 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId715"
    });
    $.__views.__alloyId714.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId761"
    });
    $.__views.__alloyId760.add($.__views.__alloyId761);
    $.__views.__alloyId762 = Ti.UI.createLabel({
=======
        id: "__alloyId715"
    });
    $.__views.__alloyId714.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId715"
    });
    $.__views.__alloyId714.add($.__views.__alloyId715);
    $.__views.__alloyId716 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId716"
=======
<<<<<<< HEAD
        id: "__alloyId762"
=======
        id: "__alloyId716"
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId716"
>>>>>>> origin/master
    });
    $.__views.__alloyId714.add($.__views.__alloyId716);
    $.__views.__alloyId717 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId717"
    });
    $.__views.__alloyId714.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId763"
    });
    $.__views.__alloyId760.add($.__views.__alloyId763);
    $.__views.__alloyId764 = Ti.UI.createLabel({
=======
        id: "__alloyId717"
    });
    $.__views.__alloyId714.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId717"
    });
    $.__views.__alloyId714.add($.__views.__alloyId717);
    $.__views.__alloyId718 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId718"
    });
    $.__views.__alloyId717.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId764"
    });
    $.__views.__alloyId763.add($.__views.__alloyId764);
    $.__views.__alloyId765 = Ti.UI.createLabel({
=======
        id: "__alloyId718"
    });
    $.__views.__alloyId717.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId718"
    });
    $.__views.__alloyId717.add($.__views.__alloyId718);
    $.__views.__alloyId719 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId719"
    });
    $.__views.__alloyId717.add($.__views.__alloyId719);
=======
<<<<<<< HEAD
        id: "__alloyId765"
    });
    $.__views.__alloyId763.add($.__views.__alloyId765);
=======
        id: "__alloyId719"
    });
    $.__views.__alloyId717.add($.__views.__alloyId719);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId719"
    });
    $.__views.__alloyId717.add($.__views.__alloyId719);
>>>>>>> origin/master
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        height: Ti.UI.SIZE,
        visible: "false"
    });
    $.__views.scrollView.add($.__views.view4);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId720 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId766 = Ti.UI.createView({
=======
    $.__views.__alloyId720 = Ti.UI.createView({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId720 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10",
        backgroundColor: "yellow",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId720"
=======
<<<<<<< HEAD
        id: "__alloyId766"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId720"
>>>>>>> origin/master
    });
    $.__views.view4.add($.__views.__alloyId720);
    $.__views.__alloyId721 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId721"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId720.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createLabel({
=======
    $.__views.__alloyId766.add($.__views.__alloyId767);
    $.__views.__alloyId768 = Ti.UI.createLabel({
=======
        id: "__alloyId720"
    });
    $.__views.view4.add($.__views.__alloyId720);
    $.__views.__alloyId721 = Ti.UI.createView({
        backgroundColor: "#787878",
        height: "30",
        id: "__alloyId721"
    });
    $.__views.__alloyId720.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId720.add($.__views.__alloyId721);
    $.__views.__alloyId722 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Top 10",
        color: "white",
        height: "30",
        left: "10",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId722"
=======
<<<<<<< HEAD
        id: "__alloyId768"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId722"
>>>>>>> origin/master
    });
    $.__views.__alloyId721.add($.__views.__alloyId722);
    $.__views.__alloyId723 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId723"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId720.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createLabel({
=======
    $.__views.__alloyId766.add($.__views.__alloyId769);
    $.__views.__alloyId770 = Ti.UI.createLabel({
=======
        id: "__alloyId722"
    });
    $.__views.__alloyId721.add($.__views.__alloyId722);
    $.__views.__alloyId723 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId723"
    });
    $.__views.__alloyId720.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId720.add($.__views.__alloyId723);
    $.__views.__alloyId724 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Australia",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId724"
    });
    $.__views.__alloyId723.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId770"
    });
    $.__views.__alloyId769.add($.__views.__alloyId770);
    $.__views.__alloyId771 = Ti.UI.createLabel({
=======
        id: "__alloyId724"
    });
    $.__views.__alloyId723.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId724"
    });
    $.__views.__alloyId723.add($.__views.__alloyId724);
    $.__views.__alloyId725 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "614",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId725"
=======
<<<<<<< HEAD
        id: "__alloyId771"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId725"
>>>>>>> origin/master
    });
    $.__views.__alloyId723.add($.__views.__alloyId725);
    $.__views.__alloyId726 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId726"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId723.add($.__views.__alloyId726);
    $.__views.__alloyId727 = Ti.UI.createLabel({
=======
    $.__views.__alloyId769.add($.__views.__alloyId772);
    $.__views.__alloyId773 = Ti.UI.createLabel({
=======
        id: "__alloyId725"
    });
    $.__views.__alloyId723.add($.__views.__alloyId725);
    $.__views.__alloyId726 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId726"
    });
    $.__views.__alloyId723.add($.__views.__alloyId726);
    $.__views.__alloyId727 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId723.add($.__views.__alloyId726);
    $.__views.__alloyId727 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId727"
    });
    $.__views.__alloyId726.add($.__views.__alloyId727);
    $.__views.__alloyId728 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId773"
    });
    $.__views.__alloyId772.add($.__views.__alloyId773);
    $.__views.__alloyId774 = Ti.UI.createLabel({
=======
        id: "__alloyId727"
    });
    $.__views.__alloyId726.add($.__views.__alloyId727);
    $.__views.__alloyId728 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId727"
    });
    $.__views.__alloyId726.add($.__views.__alloyId727);
    $.__views.__alloyId728 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.44(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId728"
=======
<<<<<<< HEAD
        id: "__alloyId774"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId728"
>>>>>>> origin/master
    });
    $.__views.__alloyId726.add($.__views.__alloyId728);
    $.__views.__alloyId729 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId729"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId720.add($.__views.__alloyId729);
    $.__views.__alloyId730 = Ti.UI.createLabel({
=======
    $.__views.__alloyId766.add($.__views.__alloyId775);
    $.__views.__alloyId776 = Ti.UI.createLabel({
=======
        id: "__alloyId728"
    });
    $.__views.__alloyId726.add($.__views.__alloyId728);
    $.__views.__alloyId729 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId729"
    });
    $.__views.__alloyId720.add($.__views.__alloyId729);
    $.__views.__alloyId730 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId720.add($.__views.__alloyId729);
    $.__views.__alloyId730 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Canada",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId730"
    });
    $.__views.__alloyId729.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId776"
    });
    $.__views.__alloyId775.add($.__views.__alloyId776);
    $.__views.__alloyId777 = Ti.UI.createLabel({
=======
        id: "__alloyId730"
    });
    $.__views.__alloyId729.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId730"
    });
    $.__views.__alloyId729.add($.__views.__alloyId730);
    $.__views.__alloyId731 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "1",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId731"
=======
<<<<<<< HEAD
        id: "__alloyId777"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId731"
>>>>>>> origin/master
    });
    $.__views.__alloyId729.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId732"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId729.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createLabel({
=======
    $.__views.__alloyId775.add($.__views.__alloyId778);
    $.__views.__alloyId779 = Ti.UI.createLabel({
=======
        id: "__alloyId731"
    });
    $.__views.__alloyId729.add($.__views.__alloyId731);
    $.__views.__alloyId732 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId732"
    });
    $.__views.__alloyId729.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId729.add($.__views.__alloyId732);
    $.__views.__alloyId733 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId733"
    });
    $.__views.__alloyId732.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId779"
    });
    $.__views.__alloyId778.add($.__views.__alloyId779);
    $.__views.__alloyId780 = Ti.UI.createLabel({
=======
        id: "__alloyId733"
    });
    $.__views.__alloyId732.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId733"
    });
    $.__views.__alloyId732.add($.__views.__alloyId733);
    $.__views.__alloyId734 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId734"
=======
<<<<<<< HEAD
        id: "__alloyId780"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId734"
>>>>>>> origin/master
    });
    $.__views.__alloyId732.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId735"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId720.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createLabel({
=======
    $.__views.__alloyId766.add($.__views.__alloyId781);
    $.__views.__alloyId782 = Ti.UI.createLabel({
=======
        id: "__alloyId734"
    });
    $.__views.__alloyId732.add($.__views.__alloyId734);
    $.__views.__alloyId735 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId735"
    });
    $.__views.__alloyId720.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId720.add($.__views.__alloyId735);
    $.__views.__alloyId736 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "China",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId782"
    });
    $.__views.__alloyId781.add($.__views.__alloyId782);
    $.__views.__alloyId783 = Ti.UI.createLabel({
=======
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId736"
    });
    $.__views.__alloyId735.add($.__views.__alloyId736);
    $.__views.__alloyId737 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "86",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId737"
=======
<<<<<<< HEAD
        id: "__alloyId783"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId737"
>>>>>>> origin/master
    });
    $.__views.__alloyId735.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId738"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId735.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createLabel({
=======
    $.__views.__alloyId781.add($.__views.__alloyId784);
    $.__views.__alloyId785 = Ti.UI.createLabel({
=======
        id: "__alloyId737"
    });
    $.__views.__alloyId735.add($.__views.__alloyId737);
    $.__views.__alloyId738 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId738"
    });
    $.__views.__alloyId735.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId735.add($.__views.__alloyId738);
    $.__views.__alloyId739 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.06(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId739"
    });
    $.__views.__alloyId738.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId785"
    });
    $.__views.__alloyId784.add($.__views.__alloyId785);
    $.__views.__alloyId786 = Ti.UI.createLabel({
=======
        id: "__alloyId739"
    });
    $.__views.__alloyId738.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId739"
    });
    $.__views.__alloyId738.add($.__views.__alloyId739);
    $.__views.__alloyId740 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId740"
=======
<<<<<<< HEAD
        id: "__alloyId786"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId740"
>>>>>>> origin/master
    });
    $.__views.__alloyId738.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId741"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId720.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createLabel({
=======
    $.__views.__alloyId766.add($.__views.__alloyId787);
    $.__views.__alloyId788 = Ti.UI.createLabel({
=======
        id: "__alloyId740"
    });
    $.__views.__alloyId738.add($.__views.__alloyId740);
    $.__views.__alloyId741 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId741"
    });
    $.__views.__alloyId720.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId720.add($.__views.__alloyId741);
    $.__views.__alloyId742 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Hong Kong",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId742"
    });
    $.__views.__alloyId741.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId788"
    });
    $.__views.__alloyId787.add($.__views.__alloyId788);
    $.__views.__alloyId789 = Ti.UI.createLabel({
=======
        id: "__alloyId742"
    });
    $.__views.__alloyId741.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId742"
    });
    $.__views.__alloyId741.add($.__views.__alloyId742);
    $.__views.__alloyId743 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "852",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId743"
=======
<<<<<<< HEAD
        id: "__alloyId789"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId743"
>>>>>>> origin/master
    });
    $.__views.__alloyId741.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId744"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId741.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createLabel({
=======
    $.__views.__alloyId787.add($.__views.__alloyId790);
    $.__views.__alloyId791 = Ti.UI.createLabel({
=======
        id: "__alloyId743"
    });
    $.__views.__alloyId741.add($.__views.__alloyId743);
    $.__views.__alloyId744 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId744"
    });
    $.__views.__alloyId741.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId741.add($.__views.__alloyId744);
    $.__views.__alloyId745 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.08(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId745"
    });
    $.__views.__alloyId744.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId791"
    });
    $.__views.__alloyId790.add($.__views.__alloyId791);
    $.__views.__alloyId792 = Ti.UI.createLabel({
=======
        id: "__alloyId745"
    });
    $.__views.__alloyId744.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId745"
    });
    $.__views.__alloyId744.add($.__views.__alloyId745);
    $.__views.__alloyId746 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.10(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId746"
=======
<<<<<<< HEAD
        id: "__alloyId792"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId746"
>>>>>>> origin/master
    });
    $.__views.__alloyId744.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId747"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId720.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createLabel({
=======
    $.__views.__alloyId766.add($.__views.__alloyId793);
    $.__views.__alloyId794 = Ti.UI.createLabel({
=======
        id: "__alloyId746"
    });
    $.__views.__alloyId744.add($.__views.__alloyId746);
    $.__views.__alloyId747 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId747"
    });
    $.__views.__alloyId720.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId720.add($.__views.__alloyId747);
    $.__views.__alloyId748 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Indonesia*",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId748"
    });
    $.__views.__alloyId747.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId794"
    });
    $.__views.__alloyId793.add($.__views.__alloyId794);
    $.__views.__alloyId795 = Ti.UI.createLabel({
=======
        id: "__alloyId748"
    });
    $.__views.__alloyId747.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId748"
    });
    $.__views.__alloyId747.add($.__views.__alloyId748);
    $.__views.__alloyId749 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "62",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId749"
=======
<<<<<<< HEAD
        id: "__alloyId795"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId749"
>>>>>>> origin/master
    });
    $.__views.__alloyId747.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId750"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId747.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createLabel({
=======
    $.__views.__alloyId793.add($.__views.__alloyId796);
    $.__views.__alloyId797 = Ti.UI.createLabel({
=======
        id: "__alloyId749"
    });
    $.__views.__alloyId747.add($.__views.__alloyId749);
    $.__views.__alloyId750 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId750"
    });
    $.__views.__alloyId747.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId747.add($.__views.__alloyId750);
    $.__views.__alloyId751 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.62(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId751"
    });
    $.__views.__alloyId750.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId797"
    });
    $.__views.__alloyId796.add($.__views.__alloyId797);
    $.__views.__alloyId798 = Ti.UI.createLabel({
=======
        id: "__alloyId751"
    });
    $.__views.__alloyId750.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId751"
    });
    $.__views.__alloyId750.add($.__views.__alloyId751);
    $.__views.__alloyId752 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.66(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId752"
=======
<<<<<<< HEAD
        id: "__alloyId798"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId752"
>>>>>>> origin/master
    });
    $.__views.__alloyId750.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId753"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId720.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createLabel({
=======
    $.__views.__alloyId766.add($.__views.__alloyId799);
    $.__views.__alloyId800 = Ti.UI.createLabel({
=======
        id: "__alloyId752"
    });
    $.__views.__alloyId750.add($.__views.__alloyId752);
    $.__views.__alloyId753 = Ti.UI.createView({
        layout: "horizontal",
        borderColor: "#F0F0F0",
        height: "60",
        id: "__alloyId753"
    });
    $.__views.__alloyId720.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId720.add($.__views.__alloyId753);
    $.__views.__alloyId754 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "Singapore",
        width: "24%",
        height: Ti.UI.SIZE,
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId754"
    });
    $.__views.__alloyId753.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId800"
    });
    $.__views.__alloyId799.add($.__views.__alloyId800);
    $.__views.__alloyId801 = Ti.UI.createLabel({
=======
        id: "__alloyId754"
    });
    $.__views.__alloyId753.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId754"
    });
    $.__views.__alloyId753.add($.__views.__alloyId754);
    $.__views.__alloyId755 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "65",
        width: "10%",
        height: "30",
        color: "black",
        left: "10",
        top: "0",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId755"
=======
<<<<<<< HEAD
        id: "__alloyId801"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId755"
>>>>>>> origin/master
    });
    $.__views.__alloyId753.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId756"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId753.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createLabel({
=======
    $.__views.__alloyId799.add($.__views.__alloyId802);
    $.__views.__alloyId803 = Ti.UI.createLabel({
=======
        id: "__alloyId755"
    });
    $.__views.__alloyId753.add($.__views.__alloyId755);
    $.__views.__alloyId756 = Ti.UI.createView({
        layout: "vertical",
        height: "60",
        width: "auto",
        id: "__alloyId756"
    });
    $.__views.__alloyId753.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId753.add($.__views.__alloyId756);
    $.__views.__alloyId757 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.09(Fixed/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId757"
    });
    $.__views.__alloyId756.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId803"
    });
    $.__views.__alloyId802.add($.__views.__alloyId803);
    $.__views.__alloyId804 = Ti.UI.createLabel({
=======
        id: "__alloyId757"
    });
    $.__views.__alloyId756.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createLabel({
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId757"
    });
    $.__views.__alloyId756.add($.__views.__alloyId757);
    $.__views.__alloyId758 = Ti.UI.createLabel({
>>>>>>> origin/master
        text: "RM0.13(Mobile/30sec)",
        width: "100%",
        height: "30",
        color: "black",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId758"
=======
<<<<<<< HEAD
        id: "__alloyId804"
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
        id: "__alloyId758"
>>>>>>> origin/master
    });
    $.__views.__alloyId756.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId759"
    });
    $.__views.idd.add($.__views.__alloyId759);
    subscribe ? $.__views.__alloyId759.addEventListener("click", subscribe) : __defers["$.__views.__alloyId759!click!subscribe"] = true;
    $.__views.__alloyId760 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId760"
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId759.add($.__views.__alloyId760);
=======
    $.__views.__alloyId805.add($.__views.__alloyId806);
=======
        id: "__alloyId758"
    });
    $.__views.__alloyId756.add($.__views.__alloyId758);
    $.__views.__alloyId759 = Ti.UI.createView({
        height: "50",
        backgroundColor: "#000000",
        id: "__alloyId759"
    });
    $.__views.idd.add($.__views.__alloyId759);
    subscribe ? $.__views.__alloyId759.addEventListener("click", subscribe) : __defers["$.__views.__alloyId759!click!subscribe"] = true;
    $.__views.__alloyId760 = Ti.UI.createLabel({
        text: "Subscribe Now",
        color: "white",
        id: "__alloyId760"
    });
    $.__views.__alloyId759.add($.__views.__alloyId760);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    $.__views.__alloyId759.add($.__views.__alloyId760);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scrollView.height = Ti.Platform.displayCaps.platformHeight - 200;
    if ("android" == Ti.Platform.osname) {
        console.log("android");
        $.scrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 200;
    }
    var idd;
    $.picker.setSelectedRow(0, 0, false);
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId596!click!back"] && $.__views.__alloyId596.addEventListener("click", back);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId642!click!back"] && $.__views.__alloyId642.addEventListener("click", back);
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId596!click!back"] && $.__views.__alloyId596.addEventListener("click", back);
>>>>>>> origin/master
    __defers["$.__views.iddLabel!click!showPicker"] && $.__views.iddLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId597!click!showPicker"] && $.__views.__alloyId597.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!idd"] && $.__views.picker.addEventListener("change", idd);
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId759!click!subscribe"] && $.__views.__alloyId759.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId805!click!subscribe"] && $.__views.__alloyId805.addEventListener("click", subscribe);
=======
    __defers["$.__views.__alloyId596!click!back"] && $.__views.__alloyId596.addEventListener("click", back);
    __defers["$.__views.iddLabel!click!showPicker"] && $.__views.iddLabel.addEventListener("click", showPicker);
    __defers["$.__views.__alloyId597!click!showPicker"] && $.__views.__alloyId597.addEventListener("click", showPicker);
    __defers["$.__views.done!click!done"] && $.__views.done.addEventListener("click", done);
    __defers["$.__views.picker!change!idd"] && $.__views.picker.addEventListener("change", idd);
    __defers["$.__views.__alloyId759!click!subscribe"] && $.__views.__alloyId759.addEventListener("click", subscribe);
>>>>>>> origin/master
>>>>>>> 24/3/2015 onlinePurchase Subpages
=======
    __defers["$.__views.__alloyId759!click!subscribe"] && $.__views.__alloyId759.addEventListener("click", subscribe);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;